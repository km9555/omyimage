/**
 * Build a self-hosted, subsetted Material Symbols icon font.
 *
 * Why this exists: the site used to pull the icon font straight from
 * `fonts.googleapis.com`. That stylesheet is render-blocking, and the woff2 it
 * points at is the COMPLETE Material Symbols variable font — 3.8 MB for the
 * ~200 glyphs we actually draw. On a throttled mobile connection that single
 * download saturated the link and pushed FCP past 22 s. Subsetting to the icons
 * in use and serving them from our own origin takes it to ~120 KB.
 *
 *   npm run build:icon-font             re-download and re-subset (needs network)
 *   npm run check:icon-font             offline; exit 1 if an icon in src/ is
 *                                       missing from the committed subset (CI)
 *
 * The font is COMMITTED rather than fetched during `next build`, for the same
 * reason the MediaPipe model is (see copy-mediapipe.mjs): a build should not
 * depend on Google's CDN being reachable. The check runs in prebuild and is
 * pure local file comparison, so it costs nothing and cannot flake.
 *
 * ── How icon names are discovered ───────────────────────────────────────────
 * Every lowercase_snake string literal in src/ is intersected with the official
 * Material Symbols name list (scripts/material-symbols.codepoints, committed).
 * That is deliberately broader than "parse the <Icon name=…> props": names also
 * reach <Icon> through data (`icon:` fields in tools.ts, nav-sections.ts,
 * converters) and through inline tuples — e.g. AllInOneEditor's annotate
 * toolbar holds `["line", "horizontal_rule"]`, whose glyph no prop-scanner
 * would ever see. A missed name renders as literal text like "horizontal_rule"
 * in the UI, so the scan errs toward including too much. The cost of a false
 * positive (a real icon name that is also an ordinary word, like "code" or
 * "image") is a few hundred bytes of glyph.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, rmSync } from "node:fs";
import { createHash } from "node:crypto";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = join(root, "src");
const fontsDir = join(root, "public", "fonts");
const codepointsFile = join(root, "scripts", "material-symbols.codepoints");
const manifestFile = join(root, "scripts", "icon-font.manifest.json");
const cssFile = join(root, "src", "app", "material-symbols.css");
const tsFile = join(root, "src", "lib", "icon-font.ts");

/*
  Axes kept in the subset. GRAD is dropped: globals.css pins it to 0 in all
  three variants, which is the axis default, so carrying it cost ~76 KB to
  express variation nobody requests. FILL, wght and opsz are all really used —
  `.material-symbols-outlined` is opsz 24 / wght 400, `.fill` flips FILL to 1,
  and `.bold` is wght 600 / opsz 48.
*/
const AXES = "opsz,wght,FILL@24..48,400..600,0..1";
// Google serves woff2 only to a UA it recognises as modern; a Node UA gets TTF.
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";

// ── Discover the icons in use ───────────────────────────────────────────────
const valid = new Set(
  readFileSync(codepointsFile, "utf8")
    .split(/\r?\n/)
    .filter(Boolean)
    .map((line) => line.split(" ")[0]),
);
if (valid.size === 0) {
  console.error(`No icon names in ${codepointsFile} — has the file format changed?`);
  process.exit(1);
}

const files = [];
(function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (/\.(tsx?|css)$/.test(entry.name)) files.push(p);
  }
})(srcDir);

const ICON_TOKEN = /["'`]([a-z][a-z0-9]*(?:_[a-z0-9]+)*)["'`]/g;
const used = new Set();
for (const file of files) {
  const text = readFileSync(file, "utf8");
  for (const m of text.matchAll(ICON_TOKEN)) {
    if (valid.has(m[1])) used.add(m[1]);
  }
}
const icons = [...used].sort();
if (icons.length === 0) {
  console.error("No icon names found in src/ — the scan is broken, refusing to ship an empty font.");
  process.exit(1);
}

// ── --check: the committed subset must cover every icon in src/ ─────────────
if (process.argv.includes("--check")) {
  if (!existsSync(manifestFile)) {
    console.error("scripts/icon-font.manifest.json missing. Run: npm run build:icon-font");
    process.exit(1);
  }
  const manifest = JSON.parse(readFileSync(manifestFile, "utf8"));
  const have = new Set(manifest.icons);
  const missing = icons.filter((i) => !have.has(i));
  const stale = manifest.icons.filter((i) => !used.has(i));

  if (!existsSync(join(root, "public", manifest.file))) {
    console.error(`public${manifest.file} missing. Run: npm run build:icon-font`);
    process.exit(1);
  }
  if (missing.length) {
    console.error(
      `Icon(s) used in src/ but not in the committed font subset:\n  ${missing.join(", ")}\n` +
        "They would render as literal text. Run: npm run build:icon-font",
    );
    process.exit(1);
  }
  // Unused glyphs are only wasted bytes, never a broken render — warn, do not fail.
  if (stale.length) {
    console.warn(`${stale.length} icon(s) in the subset are no longer referenced: ${stale.join(", ")}`);
  }
  console.log(`Icon font up to date — ${icons.length} icon(s) covered by public${manifest.file}.`);
  process.exit(0);
}

// ── Generate: ask Google for a subset, then self-host it ────────────────────
const cssUrl = new URL("https://fonts.googleapis.com/css2");
cssUrl.searchParams.set("family", `Material Symbols Outlined:${AXES}`);
cssUrl.searchParams.set("icon_names", icons.join(","));
/*
  `block` rather than `swap`: for an icon font, swapping means the ligature
  SOURCE TEXT paints first — visitors briefly saw the words "photo_camera",
  "workspace_premium" and so on where every icon belongs. Blocking leaves the
  glyph slot invisible for up to 3 s instead, and the font is now same-origin,
  preloaded and 120 KB, so that period is not reached in practice.
*/
cssUrl.searchParams.set("display", "block");

console.log(`Requesting a ${icons.length}-icon subset from Google Fonts…`);
const cssRes = await fetch(cssUrl, { headers: { "User-Agent": UA } });
if (!cssRes.ok) {
  console.error(`Google Fonts CSS request failed: ${cssRes.status} ${cssRes.statusText}`);
  process.exit(1);
}
const css = await cssRes.text();
const fontUrl = /url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)\s*format\('woff2'\)/.exec(css)?.[1];
if (!fontUrl) {
  console.error(`No woff2 URL in the Google Fonts response:\n${css.slice(0, 500)}`);
  process.exit(1);
}

const fontRes = await fetch(fontUrl, { headers: { "User-Agent": UA } });
if (!fontRes.ok) {
  console.error(`Font download failed: ${fontRes.status} ${fontRes.statusText}`);
  process.exit(1);
}
const bytes = Buffer.from(await fontRes.arrayBuffer());
if (bytes.subarray(0, 4).toString("latin1") !== "wOF2") {
  console.error("Downloaded file is not woff2 — Google may have rejected the User-Agent.");
  process.exit(1);
}

/*
  Content hash in the filename is what lets public/_headers serve /fonts/* as
  immutable for a year: a changed subset is a changed URL, so a stale copy can
  never be pinned in a visitor's cache.
*/
const hash = createHash("sha256").update(bytes).digest("hex").slice(0, 8);
const filename = `material-symbols-outlined-${hash}.woff2`;
const publicPath = `/fonts/${filename}`;

mkdirSync(fontsDir, { recursive: true });
for (const old of readdirSync(fontsDir)) {
  if (/^material-symbols-outlined-[0-9a-f]{8}\.woff2$/.test(old) && old !== filename) {
    rmSync(join(fontsDir, old));
    console.log(`removed stale: public/fonts/${old}`);
  }
}
writeFileSync(join(fontsDir, filename), bytes);

const banner = "/* GENERATED by scripts/build-icon-font.mjs — do not edit. */";

writeFileSync(
  cssFile,
  `${banner}
/*
  Self-hosted subset of Material Symbols Outlined (Apache-2.0) containing only
  the ${icons.length} icons referenced in src/. Replaces a render-blocking
  fonts.googleapis.com stylesheet whose font was the full 3.8 MB family.

  The rules below the @font-face are the ones Google's stylesheet used to supply
  alongside it — without them .material-symbols-outlined has no font-family and
  no 'liga' feature, and every icon renders as its raw name.
*/
@font-face {
  font-family: "Material Symbols Outlined";
  font-style: normal;
  font-weight: 100 700;
  font-display: block;
  src: url("${publicPath}") format("woff2");
}

.material-symbols-outlined {
  font-family: "Material Symbols Outlined";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}
`,
  "utf8",
);

writeFileSync(
  tsFile,
  `${banner}
/** Hashed URL of the self-hosted Material Symbols subset, for <link rel="preload">. */
export const ICON_FONT_URL = "${publicPath}";
`,
  "utf8",
);

writeFileSync(
  manifestFile,
  `${JSON.stringify({ axes: AXES, file: publicPath, bytes: bytes.length, icons }, null, 2)}\n`,
  "utf8",
);

console.log(
  `Wrote public${publicPath} — ${icons.length} icons, ${(bytes.length / 1024).toFixed(1)} KB ` +
    "(the full family is ~3,875 KB).",
);

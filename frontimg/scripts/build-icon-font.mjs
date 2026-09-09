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
 * Names are read out of the four SYNTACTIC POSITIONS that reach <Icon>, and
 * intersected with the official Material Symbols name list
 * (scripts/material-symbols.codepoints, committed). See the scan below for
 * what each position looks like.
 *
 * This used to be a single regex — every lowercase_snake string literal in
 * src/, intersected with the same list. It needed no positions, but it fired
 * on ordinary English. Adding the string "preview" to a Dropbox type shim
 * failed the build with an error naming an icon nobody had touched, and the
 * only fix was to delete the word; src/lib/dropbox.ts still carries the
 * comment from that hunt.
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
  Axes kept in the subset. Each one is expensive — a variable axis has to carry
  deltas for every glyph — so only the axes the CSS genuinely varies survive:

    • FILL 0..1     `.fill` flips it to 1 for the solid variant.
    • wght 400..600 `.bold` uses 600 for the heavier no-tile card icons.

  Dropped, with what each cost measured over this exact 194-icon set:
    • GRAD  −76 KB. All three variants pinned it to its 0 default.
    • opsz  −63 KB. `.bold` asked for 48 and the rest for 24, but optical-size
            compensation is a subtle change in stroke and detail that is not
            perceptible at the 14–24 px these icons actually render at. Fixing
            it at the 24 default halves the file: 120,928 → 57,696 bytes.

  Anything removed here must also come out of the `font-variation-settings` in
  globals.css — a request for an axis the font does not have is silently
  ignored, so a stale setting reads as working while doing nothing.
*/
const AXES = "wght,FILL@400..600,0..1";
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

// Only .ts/.tsx: every glyph is drawn by <Icon>, which takes its name from
// JavaScript. No stylesheet names an icon (globals.css sets the axes, nothing
// else), so CSS has nothing to contribute but false positives.
const files = [];
(function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (/\.tsx?$/.test(entry.name)) files.push(p);
  }
})(srcDir);

/*
  ── The four positions ──────────────────────────────────────────────────────

    1. <Icon name={…}>   the component itself, including the ternaries it is
                         usually written with:
                           <Icon name={busy ? "progress_activity" : "save"} />

    2. a prop whose NAME ends in `icon`/`Icon`
                           <Dropzone icon="crop_din" … />
                           <IconButton icon={shell.settingsIcon ?? "tune"} />

    3. an object field whose NAME ends in `icon`/`Icon`
                           { icon: "lock", title: "100% private", … }
                         the feature cards under src/app/…/page.tsx, TOOLS,
                         nav-sections, the converters and every tray/rail
                         entry are all this shape.

    4. a `const …_ICON(S)` table
                           const PILL_ICONS = { all: "apps", … }
                         for the handful of names that reach <Icon> through a
                         lookup or a tuple, where there is no `icon` key to
                         key off — AllInOneEditor's annotate toolbar and
                         ToolDirectory's category pills.

  What this gives up: a name reaching <Icon> through none of the four is not
  seen, and its glyph renders as its own text — "photo_camera" where the
  camera belongs. Position 4 is the escape hatch for exactly that case, and
  the reason it exists: hoist the names into a `…_ICONS` const and the scan
  finds them again.

  The helpers below skip over string and comment bodies so that structure is
  never read out of prose, and read each value as a balanced expression so
  that ternaries, `??` chains and nested objects come through whole.
*/
const QUOTES = new Set(['"', "'", "`"]);
const OPEN = "([{";
const CLOSE = ")]}";

/** Index just past the string or template literal opening at `i`. */
function endOfString(src, i) {
  const q = src[i];
  for (let j = i + 1; j < src.length; j++) {
    const c = src[j];
    if (c === "\\") { j++; continue; }
    if (c === q) return j + 1;
    // `${…}` can hold anything, quotes and JSX included — step over it whole.
    if (q === "`" && c === "$" && src[j + 1] === "{") { j = endOfBalanced(src, j + 1) - 1; continue; }
    if (q !== "`" && (c === "\n" || c === "\r")) return j; // unterminated
  }
  return src.length;
}

/** Index just past a comment starting at `i`, or -1 if `i` starts no comment. */
function endOfComment(src, i) {
  if (src[i] !== "/") return -1;
  if (src[i + 1] === "/") {
    const nl = src.indexOf("\n", i);
    return nl < 0 ? src.length : nl;
  }
  if (src[i + 1] === "*") {
    const close = src.indexOf("*/", i + 2);
    return close < 0 ? src.length : close + 2;
  }
  return -1;
}

/** Index just past the bracket pair opening at `i`. */
function endOfBalanced(src, i) {
  const stack = [CLOSE[OPEN.indexOf(src[i])]];
  for (let j = i + 1; j < src.length; j++) {
    const c = src[j];
    if (QUOTES.has(c)) { j = endOfString(src, j) - 1; continue; }
    const cmt = endOfComment(src, j);
    if (cmt >= 0) { j = cmt - 1; continue; }
    if (OPEN.includes(c)) { stack.push(CLOSE[OPEN.indexOf(c)]); continue; }
    if (c === stack[stack.length - 1]) {
      stack.pop();
      if (stack.length === 0) return j + 1;
    }
  }
  return src.length;
}

/** Index just past the `>` closing the JSX opening tag that starts at `i`. */
function endOfTag(src, i) {
  for (let j = i + 1; j < src.length; j++) {
    const c = src[j];
    if (QUOTES.has(c)) { j = endOfString(src, j) - 1; continue; }
    const cmt = endOfComment(src, j);
    if (cmt >= 0) { j = cmt - 1; continue; }
    if (OPEN.includes(c)) { j = endOfBalanced(src, j) - 1; continue; }
    if (c === ">") return j + 1;
  }
  return src.length;
}

/** `[from, to)` of the value that follows the `=` or `:` ending at `i`. */
function valueSpan(src, i) {
  let j = i;
  for (;;) {
    while (j < src.length && /\s/.test(src[j])) j++;
    const cmt = endOfComment(src, j);
    if (cmt < 0) break;
    j = cmt;
  }
  if (QUOTES.has(src[j])) return [j, endOfString(src, j)];
  if (OPEN.includes(src[j])) return [j, endOfBalanced(src, j)];
  // A bare expression (`shell.settingsIcon ?? "tune"`). Runs to the first
  // separator at depth 0; capped so a stray match in prose cannot run away.
  const limit = Math.min(src.length, j + 400);
  for (let k = j; k < limit; k++) {
    const c = src[k];
    if (QUOTES.has(c)) { k = endOfString(src, k) - 1; continue; }
    if (OPEN.includes(c)) { k = endOfBalanced(src, k) - 1; continue; }
    if (c === "," || c === ";" || c === "\n" || CLOSE.includes(c)) return [j, k];
  }
  return [j, limit];
}

/** Every plain string literal in `[from, to)`; templates with `${}` are skipped. */
function* literalsIn(src, from, to) {
  for (let j = from; j < to; j++) {
    const cmt = endOfComment(src, j);
    if (cmt >= 0) { j = cmt - 1; continue; }
    if (!QUOTES.has(src[j])) continue;
    const end = endOfString(src, j);
    const body = src.slice(j + 1, end - 1);
    if (!body.includes("${")) yield body;
    j = end - 1;
  }
}

const ICON_TAG = /<Icon(?![A-Za-z0-9_$])/g;
const NAME_ATTR = /(?<![A-Za-z0-9_$])name\s*=(?![=>])/g;
// Every `ident =` / `ident :`; the `icon`/`Icon` suffix is checked after, so
// that `settingsIcon:` counts and `settingsIcon?:` (a type, no value) does not.
const KEYED = /(?<![A-Za-z0-9_$])([A-Za-z_$][A-Za-z0-9_$]*)\s*(?:=(?![=>])|:)/g;
const TABLE = /(?<![A-Za-z0-9_$])(?:const|let|var)\s+(?:[A-Z][A-Z0-9_$]*_)?ICONS?\s*(?::[^=;]*)?=/g;

const used = new Set();
const add = (name) => {
  if (valid.has(name)) used.add(name);
};
const addSpan = (src, at) => {
  const [from, to] = valueSpan(src, at);
  for (const lit of literalsIn(src, from, to)) add(lit);
};

for (const file of files) {
  const src = readFileSync(file, "utf8");

  for (const tag of src.matchAll(ICON_TAG)) {
    const inner = src.slice(tag.index, endOfTag(src, tag.index));
    for (const attr of inner.matchAll(NAME_ATTR)) {
      addSpan(src, tag.index + attr.index + attr[0].length);
    }
  }
  for (const m of src.matchAll(KEYED)) {
    if (/[Ii]con$/.test(m[1])) addSpan(src, m.index + m[0].length);
  }
  for (const m of src.matchAll(TABLE)) {
    addSpan(src, m.index + m[0].length);
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

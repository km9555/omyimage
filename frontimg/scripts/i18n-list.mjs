#!/usr/bin/env node
/**
 * Regenerates a locale's tracker CSV — one row per page, every URL, and the
 * rollout state of each — without losing the hand-set columns.
 *
 *   npm run i18n:list                   # rewrite tracker.csv      (pt, default)
 *   npm run i18n:list -- hi             # rewrite tracker-hi.csv
 *   npm run i18n:list -- hi --check     # exit 1 if it is stale
 *
 * ONE FILE PER LOCALE, not one wide file with a column per language: the rows
 * differ (a locale ships its own batch order and, for a pilot, its own subset),
 * and a shared file would make every Hindi edit touch the Portuguese record.
 *
 * Columns and who owns them (`<loc>` is the locale being tracked):
 *
 *   sn, batch, section, id, en_url, <loc>_url ..... DERIVED (registry, slugs,
 *                                                     static paths, BATCHES)
 *   en_extracted .................................. DERIVED — English copy lives
 *                                                     in a content module (or the
 *                                                     converter layer)
 *   route ......................................... DERIVED — src/app/<loc>/<slug>/page.tsx
 *   gated ......................................... DERIVED — listed in status.ts
 *   ui_sweep, <loc>_copy, seo_meta, verify,
 *   browser_qa, status, notes ..................... HAND-SET per batch, preserved
 *
 * Values are todo / done / n/a / blocked. A row is `status=done` only when every
 * other column is done or n/a — the script downgrades anything claiming more.
 *
 * The blog is English-only by decision (2026-09-19) and is not listed; neither
 * are /admin and /auth/callback. Ported in spirit from oMyPDF's i18n-list.mjs,
 * which only listed URLs; this one also carries the status so the batch loop
 * has one file to update.
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(root, "src");
const HOST = "http://localhost:3002";

// First non-flag argument is the locale; Portuguese stays the default so the
// existing `npm run i18n:list` keeps writing tracker.csv untouched.
const LOC = process.argv.slice(2).find((a) => !a.startsWith("--")) ?? "pt";
const FILE = join(root, "..", LOC === "pt" ? "tracker.csv" : `tracker-${LOC}.csv`);

/** Batches of five, in Brazilian search-value order. The plan of record. */
const PT_BATCHES = [
  ["/", "compress-image", "resize-image", "remove-background", "image-to-text"],
  ["crop-image", "png-to-jpg", "jpg-to-png", "convert-to-jpg", "image-to-pdf"],
  ["upscale-image", "image-editor", "watermark-image", "rotate-image", "heic-to-jpg"],
  ["blur-face", "meme-generator", "merge-images", "gif-maker", "gif-to-images"],
  ["grayscale-image", "blur-image", "add-border", "circle-crop", "html-to-image"],
  ["image-color-picker", "image-to-base64", "base64-to-image", "image-metadata", "remove-exif"],
  ["heic-to-png", "webp-to-png", "webp-to-jpg", "jpg-to-webp", "png-to-webp"],
  ["jfif-to-jpg", "gif-to-png", "gif-to-jpg", "bmp-to-jpg", "avif-to-jpg"],
  ["avif-to-png", "/image-converter", "/contact", "/pricing", "/cookies"],
  ["/privacy", "/terms", "/refunds", "/login", "/signup"],
  ["/forgot-password", "/reset-password", "/account", "/dashboard"],
];

/**
 * Hindi, all 54 pages. Batches 1–4 were the pilot (home, the 14
 * highest-value tools, the four legal twins), ordered by Indian search value
 * rather than the Brazilian order above. Batches 5–12 complete the locale —
 * decided 2026-09-21, closing the Search Console gate conversion.md §9.7 had
 * left open.
 *
 * 5–6 are the ten converter-layer pairs (§6.4), which need that layer's
 * Hindi infrastructure before any of them can render. 7–10 are the other
 * sixteen tools, grouped by `ui` weight: 9 and 10 are three pages each
 * because blur-face alone carries more `ui` keys than all of batch 7. 11–12
 * are the static pages; /image-converter sits after the converter pairs
 * because the hub renders their names and essays.
 */
const HI_BATCHES = [
  ["/", "compress-image", "resize-image", "crop-image", "convert-to-jpg"],
  ["png-to-jpg", "jpg-to-png", "remove-background", "image-to-text", "image-to-pdf"],
  ["upscale-image", "image-editor", "watermark-image", "rotate-image", "heic-to-jpg"],
  ["/privacy", "/terms", "/refunds", "/cookies"],
  ["webp-to-png", "webp-to-jpg", "jpg-to-webp", "png-to-webp", "jfif-to-jpg"],
  ["gif-to-png", "gif-to-jpg", "bmp-to-jpg", "avif-to-jpg", "avif-to-png"],
  ["heic-to-png", "image-to-base64", "grayscale-image", "remove-exif", "base64-to-image"],
  ["image-color-picker", "circle-crop", "gif-to-images", "meme-generator", "blur-image"],
  ["gif-maker", "merge-images", "add-border"],
  ["html-to-image", "image-metadata", "blur-face"],
  ["/contact", "/image-converter", "/pricing", "/login", "/signup"],
  ["/forgot-password", "/reset-password", "/account", "/dashboard"],
];

const BATCHES = LOC === "hi" ? HI_BATCHES : PT_BATCHES;
const COPY_COL = `${LOC}_copy`;
const URL_COL = `${LOC}_url`;
const HAND = ["ui_sweep", COPY_COL, "seo_meta", "verify", "browser_qa", "status", "notes"];
const COLS = ["sn", "batch", "section", "id", "en_url", URL_COL, "en_extracted", "ui_sweep", COPY_COL, "route", "gated", "seo_meta", "verify", "browser_qa", "status", "notes"];

const read = (p) => readFileSync(join(SRC, p), "utf8");
function block(src, name) {
  const start = src.search(new RegExp(`^(export )?const ${name}\\b`, "m"));
  if (start === -1) return "";
  const rest = src.slice(start);
  const ends = [rest.search(/^\};?$/m), rest.slice(1).search(/^(export )?const /m) + 1].filter((i) => i > 0);
  return rest.slice(0, Math.min(...ends) + 2);
}
const pairs = (t) => Object.fromEntries([...t.matchAll(/^\s*"([^"]+)":\s*"([^"]*)"/gm)].map((m) => [m[1], m[2]]));
const strings = (t) => [...(t ?? "").matchAll(/"([^"]+)"/g)].map((m) => m[1]);

const slugMap = pairs(block(read("i18n/slugs.ts"), `${LOC.toUpperCase()}_TOOL_SLUGS`));
const pathMap = pairs(block(read("i18n/static-paths.ts"), `${LOC.toUpperCase()}_PATHS`));
const status = read("i18n/status.ts");
const gate = (name) =>
  new Set(strings(new RegExp(`^  ${LOC}: \\[([\\s\\S]*?)^  \\]`, "m").exec(block(status, name))?.[1]?.replace(/\/\/.*$/gm, "")));
const shippedTools = gate("SHIPPED_TOOLS");
const shippedPages = gate("SHIPPED_PAGES");
const converters = new Set([...read("lib/converters/pairs.ts").matchAll(/^\s+slug: "([^"]+)"/gm)].map((m) => m[1]));
const toolIds = new Set([...read("lib/tools.ts").matchAll(/^    id: "([^"]+)"/gm)].map((m) => m[1]));

const SECTION = (key) =>
  key === "/" ? "Home"
  : toolIds.has(key) ? "Tools"
  : key === "/image-converter" ? "Hub"
  : ["/login", "/signup", "/forgot-password", "/reset-password", "/account", "/dashboard"].includes(key) ? "Account"
  : ["/privacy", "/terms", "/refunds", "/cookies"].includes(key) ? "Legal"
  : "Pages";

// ── Existing hand-set values ────────────────────────────────────────────
function parseCsv(text) {
  const rows = [];
  let row = [], cell = "", q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"' && text[i + 1] === '"') { cell += '"'; i++; }
      else if (c === '"') q = false;
      else cell += c;
    } else if (c === '"') q = true;
    else if (c === ",") { row.push(cell); cell = ""; }
    else if (c === "\n") { row.push(cell.replace(/\r$/, "")); rows.push(row); row = []; cell = ""; }
    else cell += c;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  return rows;
}
const prev = new Map();
if (existsSync(FILE)) {
  const [head, ...body] = parseCsv(readFileSync(FILE, "utf8"));
  for (const r of body) {
    if (r.length < 2) continue;
    const o = Object.fromEntries(head.map((h, i) => [h, r[i] ?? ""]));
    prev.set(o.id, o);
  }
}

/**
 * `--done id,id,…` marks every hand-set stage of those rows done (the batch has
 * passed its gates and browser QA). `--note id="text"` sets a row's note.
 * Derived columns are never set by hand — they come from disk.
 */
const argAfter = (flag) => {
  const i = process.argv.indexOf(flag);
  return i === -1 ? null : process.argv[i + 1];
};
const doneIds = new Set((argAfter("--done") ?? "").split(",").filter(Boolean));
for (const id of doneIds) {
  const p = prev.get(id) ?? {};
  for (const h of HAND) if (h !== "notes") p[h] = "done";
  prev.set(id, p);
}
for (let i = 0; i < process.argv.length; i++) {
  if (process.argv[i] !== "--note") continue;
  const m = /^([^=]+)=(.*)$/.exec(process.argv[i + 1] ?? "");
  if (m) prev.set(m[1], { ...(prev.get(m[1]) ?? {}), notes: m[2] });
}

// ── Build ───────────────────────────────────────────────────────────────
const rows = [];
let sn = 0;
BATCHES.forEach((keys, bi) => {
  for (const key of keys) {
    const isTool = toolIds.has(key);
    const id = key;
    const enPath = isTool ? `/${key}` : key;
    const localSeg = isTool ? `/${slugMap[key] ?? "?"}` : pathMap[key];
    const locPath = `/${LOC}${localSeg ?? "?"}`.replace(/\/$/, "");
    const routeFile = join(SRC, "app", LOC, (localSeg ?? "").replace(/^\//, ""), "page.tsx");
    const enExtracted = isTool
      ? converters.has(key) ? "n/a" : existsSync(join(SRC, "content", "tools", `${key}.en.ts`)) ? "done" : "todo"
      : "n/a";
    const p = prev.get(id) ?? {};
    const row = {
      sn: String(++sn),
      batch: String(bi + 1),
      section: SECTION(key),
      id,
      en_url: `${HOST}${enPath}`,
      [URL_COL]: `${HOST}${locPath}`,
      en_extracted: enExtracted,
      route: existsSync(routeFile) ? "done" : "todo",
      gated: (isTool ? shippedTools.has(key) : shippedPages.has(key)) ? "done" : "todo",
    };
    for (const h of HAND) row[h] = p[h] || (h === "notes" ? "" : "todo");
    // A row cannot claim done while any stage is not.
    const stages = ["en_extracted", "ui_sweep", COPY_COL, "route", "gated", "seo_meta", "verify", "browser_qa"];
    if (row.status === "done" && stages.some((s) => !["done", "n/a"].includes(row[s]))) row.status = "in_progress";
    rows.push(row);
  }
});

const esc = (v) => (/[",\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v);
const csv = [COLS.join(","), ...rows.map((r) => COLS.map((c) => esc(r[c] ?? "")).join(","))].join("\n") + "\n";

if (process.argv.includes("--check")) {
  const cur = existsSync(FILE) ? readFileSync(FILE, "utf8").replace(/\r\n/g, "\n") : "";
  if (cur !== csv) {
    console.error(`${basename(FILE)} is stale — run \`npm run i18n:list -- ${LOC}\`.`);
    process.exit(1);
  }
  console.log(`${basename(FILE)} is current.`);
} else {
  writeFileSync(FILE, csv);
  const done = rows.filter((r) => r.status === "done").length;
  console.log(`${basename(FILE)}: ${rows.length} pages, ${done} done, ${rows.length - done} to go.`);
}

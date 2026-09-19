#!/usr/bin/env node
/**
 * The localization gate. Runs in `prebuild`, so a broken rollout fails the
 * build instead of shipping. Cross-checks, per translated locale:
 *
 *   1. Slugs      — every live tool has a slug; slugs are lowercase ASCII,
 *                   hyphenated, unique, and collide with no static path.
 *   2. Gates      — every id in SHIPPED_TOOLS has its route
 *                   (src/app/<loc>/<slug>/page.tsx) AND its content module
 *                   (src/content/tools/<id>.<loc>.ts); every path in
 *                   SHIPPED_PAGES has its route; and no route exists on disk
 *                   that the gate does not list (it would be unlinked and
 *                   absent from hreflang and the sitemap).
 *   3. Modules    — a translated module sets metaTitle, metaDescription and
 *                   tagline (nothing else fails when they are missing —
 *                   oMyPDF §4.22); its feature icons are byte-identical to
 *                   English, in order (§4.3); it carries at least as many FAQs
 *                   and every section id English has (drift, §4.17); no `ui`
 *                   value is still the English key unless marked i18n-same.
 *
 * The parsers read TypeScript as TEXT (this runs before the build), so every
 * block parse is bounded at BOTH ends — oMyPDF §4.28 and §4.35 are the same
 * bug written twice: a parse anchored only at its start ran into the next
 * locale's map and reported 41 correct pages as missing.
 *
 *   node scripts/i18n-audit.mjs
 */
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(root, "src");
const read = (p) => readFileSync(join(SRC, p), "utf8");

const errors = [];
const warnings = [];
const err = (m) => errors.push(m);
const warn = (m) => warnings.push(m);

/** The text of `const NAME … = {…};` — bounded by the next top-level const/export too. */
function block(src, name) {
  const start = src.search(new RegExp(`^(export )?const ${name}\\b`, "m"));
  if (start === -1) return null;
  const rest = src.slice(start);
  const ends = [rest.search(/^\};?$/m), rest.slice(1).search(/^(export )?const /m) + 1].filter((i) => i > 0);
  return rest.slice(0, Math.min(...ends) + 2);
}
const pairs = (text) =>
  Object.fromEntries([...(text ?? "").matchAll(/^\s*"([^"]+)":\s*"([^"]*)"/gm)].map((m) => [m[1], m[2]]));
const strings = (text) => [...(text ?? "").matchAll(/"([^"]+)"/g)].map((m) => m[1]);

// ── Registry ────────────────────────────────────────────────────────────
const toolsSrc = read("lib/tools.ts");
const TOOLS = [...toolsSrc.matchAll(/^    id: "([^"]+)",\n    name: "[^"]+",\n    slug: "([^"]+)",[\s\S]*?status: "(live|planned)"/gm)].map(
  (m) => ({ id: m[1], slug: m[2], live: m[3] === "live" }),
);
if (TOOLS.length < 40) err(`registry parse found only ${TOOLS.length} tools — has lib/tools.ts changed shape?`);

// The data-driven converter pages (ConverterPage + lib/converters/pairs.ts)
// carry their copy in the converter layer rather than a content module.
const CONVERTERS = new Set([...read("lib/converters/pairs.ts").matchAll(/^\s+slug: "([^"]+)"/gm)].map((m) => m[1]));

// ── Locales ─────────────────────────────────────────────────────────────
const config = read("i18n/config.ts");
const LOCALES = strings(/export const LOCALES = \[([^\]]*)\]/.exec(config)?.[1]).filter((l) => l !== "en");

const slugsSrc = read("i18n/slugs.ts");
const pathsSrc = read("i18n/static-paths.ts");
const statusSrc = read("i18n/status.ts");

for (const loc of LOCALES) {
  const L = loc.toUpperCase();
  const slugMap = pairs(block(slugsSrc, `${L}_TOOL_SLUGS`));
  const pathMap = pairs(block(pathsSrc, `${L}_PATHS`));
  const shippedTools = strings(new RegExp(`^  ${loc}: \\[([\\s\\S]*?)^  \\]`, "m").exec(block(statusSrc, "SHIPPED_TOOLS") ?? "")?.[1]?.replace(/\/\/.*$/gm, ""));
  const shippedPages = strings(new RegExp(`^  ${loc}: \\[([\\s\\S]*?)^  \\]`, "m").exec(block(statusSrc, "SHIPPED_PAGES") ?? "")?.[1]?.replace(/\/\/.*$/gm, ""));

  // 1. Slugs
  const seen = new Map();
  for (const t of TOOLS.filter((x) => x.live)) {
    const s = slugMap[t.id];
    if (!s) { err(`[${loc}] no slug for live tool "${t.id}" in slugs.ts`); continue; }
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(s)) err(`[${loc}] slug "${s}" (${t.id}) is not lowercase ASCII-hyphenated`);
    if (seen.has(s)) err(`[${loc}] slug "${s}" used by both ${seen.get(s)} and ${t.id}`);
    seen.set(s, t.id);
  }
  for (const id of Object.keys(slugMap)) if (!TOOLS.some((t) => t.id === id)) err(`[${loc}] slugs.ts has "${id}", which is not in the registry`);
  for (const p of Object.values(pathMap)) {
    const seg = p.replace(/^\//, "").split("/")[0];
    if (seg && seen.has(seg)) err(`[${loc}] static path "${p}" collides with tool slug of ${seen.get(seg)}`);
  }

  // 2. Gates ↔ disk
  const locDir = join(SRC, "app", loc);
  for (const id of shippedTools) {
    const slug = slugMap[id];
    if (!slug) { err(`[${loc}] "${id}" is in SHIPPED_TOOLS but has no slug`); continue; }
    if (!existsSync(join(locDir, slug, "page.tsx"))) err(`[${loc}] "${id}" is in SHIPPED_TOOLS but src/app/${loc}/${slug}/page.tsx is missing`);
    if (!existsSync(join(SRC, "content", "tools", `${id}.${loc}.ts`)) && !CONVERTERS.has(id))
      err(`[${loc}] "${id}" is in SHIPPED_TOOLS but src/content/tools/${id}.${loc}.ts is missing`);
  }
  for (const path of shippedPages) {
    if (!(path in pathMap)) { err(`[${loc}] "${path}" is in SHIPPED_PAGES but not in static-paths.ts`); continue; }
    const dir = join(locDir, pathMap[path].replace(/^\//, ""));
    if (!existsSync(join(dir, "page.tsx"))) err(`[${loc}] "${path}" is in SHIPPED_PAGES but src/app/${loc}${pathMap[path]}/page.tsx is missing`);
  }
  if (existsSync(locDir)) {
    const shippedSlugs = new Set(shippedTools.map((id) => slugMap[id]));
    const shippedDirs = new Set(shippedPages.map((p) => pathMap[p]?.replace(/^\//, "")).filter(Boolean));
    for (const e of readdirSync(locDir)) {
      if (!statSync(join(locDir, e)).isDirectory()) continue;
      if (!shippedSlugs.has(e) && !shippedDirs.has(e))
        err(`[${loc}] src/app/${loc}/${e}/ exists but nothing in status.ts ships it — it would be unlinked and missing from hreflang/sitemap`);
    }
  }

  // 3. Content modules
  for (const id of shippedTools) {
    const file = join(SRC, "content", "tools", `${id}.${loc}.ts`);
    const enFile = join(SRC, "content", "tools", `${id}.en.ts`);
    if (!existsSync(file) || !existsSync(enFile)) continue;
    const mod = readFileSync(file, "utf8");
    const en = readFileSync(enFile, "utf8");
    for (const f of ["metaTitle", "metaDescription", "tagline", "howToTitle", "intro"])
      if (!new RegExp(`^  ${f}:`, "m").test(mod)) err(`[${loc}] ${id}: missing ${f}`);
    if (!new RegExp(`^  locale: "${loc}"`, "m").test(mod)) err(`[${loc}] ${id}: locale field is not "${loc}"`);
    const icons = (s) => [...s.matchAll(/icon: "([^"]+)"/g)].map((m) => m[1]).join(",");
    if (icons(mod) !== icons(en)) err(`[${loc}] ${id}: feature icons differ from English (${icons(mod)} vs ${icons(en)})`);
    const faqs = (s) => (s.match(/^\s+\{\s*q:|^\s+q:/gm) || []).length;
    if (faqs(mod) < faqs(en)) err(`[${loc}] ${id}: ${faqs(mod)} FAQs vs ${faqs(en)} in English (drift)`);
    const ids = (s) => new Set([...s.matchAll(/^\s+id: "([^"]+)"/gm)].map((m) => m[1]));
    for (const sid of ids(en)) if (!ids(mod).has(sid)) err(`[${loc}] ${id}: section "${sid}" from English is missing (drift)`);
    const ui = block(mod, "content")?.split(/^  ui: \{/m)[1] ?? "";
    for (const line of ui.split("\n")) {
      const m = /^\s+"((?:[^"\\]|\\.)*)":\s*"((?:[^"\\]|\\.)*)",?\s*(\/\/.*)?$/.exec(line);
      if (m && m[1] === m[2] && !/i18n-same/.test(m[3] ?? "") && /[a-z]{3}/.test(m[1]))
        warn(`[${loc}] ${id}: ui value still equals its English key: "${m[1]}" (mark // i18n-same if intended)`);
    }
    if (/„/.test(mod)) err(`[${loc}] ${id}: German quotation mark „ found (oMyPDF §4.23)`);
    if (loc === "pt" && /\bficheiro|\bdescarregar\b|\becrã\b|\butilizador\b/i.test(mod.replace(/aliases/g, "")))
      err(`[${loc}] ${id}: European Portuguese vocabulary in a Brazilian module (conversion.md §5)`);
  }

  console.log(`[${loc}] ${shippedTools.length} tool(s) and ${shippedPages.length} page(s) shipped; ${Object.keys(slugMap).length} slugs.`);
}

for (const w of warnings) console.warn(`WARN  ${w}`);
if (errors.length) {
  for (const e of errors) console.error(`ERROR ${e}`);
  console.error(`\n${errors.length} i18n error(s).`);
  process.exit(1);
}
console.log("i18n audit passed.");

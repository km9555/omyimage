#!/usr/bin/env node
/**
 * Reads the RENDERED localized pages and checks what a visitor and a crawler
 * actually get. This is the check that matters: in oMyPDF a 200 and a
 * translated <title> three times hid an English H1 or empty state, and a
 * module missing metaTitle shipped five Hindi H1s under English titles (§4.22)
 * — only a rendered read caught them.
 *
 *   node scripts/i18n-verify.mjs pt comprimir-imagem,redimensionar-imagem
 *   node scripts/i18n-verify.mjs pt --all            # every shipped pt page
 *   BASE=http://localhost:3002 node scripts/i18n-verify.mjs pt …   (default)
 *   OUT=out node scripts/i18n-verify.mjs pt --all    # read a static export instead
 *
 * Per page it prints the <title> and the H1 side by side (read them — a ✓ on
 * its own is how an English title slipped through before), then fails on:
 *   • non-200 / missing file
 *   • canonical not pointing at the page itself
 *   • hreflang cluster missing the page's own tag, `en` or `x-default`
 *   • og:locale not the locale's territory form (pt_BR)
 *   • a tool page without SoftwareApplication, HowTo and FAQPage JSON-LD, or
 *     with a JSON-LD block whose inLanguage is not the locale
 *   • <title> or H1 identical to the English page's
 *   • English that survived in the visible text (sentences with ≥3 English
 *     function words) — printed for review; ≥3 such sentences fail the page
 *   • visible text under the 900-word floor (tool pages)
 */
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(root, "src");
const [loc, list] = process.argv.slice(2);
if (!loc) {
  console.error("usage: node scripts/i18n-verify.mjs <locale> <slug,slug,…|--all>");
  process.exit(2);
}
const BASE = (process.env.BASE ?? "http://localhost:3002").replace(/\/$/, "");
const OUT = process.env.OUT ? join(root, process.env.OUT) : null;
const SITE = "https://omyimage.com";
const OG = { pt: "pt_BR", hi: "hi_IN", ru: "ru_RU" };

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
const L = loc.toUpperCase();
const slugMap = pairs(block(read("i18n/slugs.ts"), `${L}_TOOL_SLUGS`));
const pathMap = pairs(block(read("i18n/static-paths.ts"), `${L}_PATHS`));
const status = read("i18n/status.ts");
const gate = (name) =>
  strings(new RegExp(`^  ${loc}: \\[([\\s\\S]*?)^  \\]`, "m").exec(block(status, name))?.[1]?.replace(/\/\/.*$/gm, ""));
const idBySlug = Object.fromEntries(Object.entries(slugMap).map(([id, s]) => [s, id]));
const enByLocal = Object.fromEntries(Object.entries(pathMap).map(([en, l]) => [l.replace(/^\//, ""), en]));

let targets = [];
if (list === "--all") {
  targets = [...gate("SHIPPED_TOOLS").map((id) => slugMap[id]), ...gate("SHIPPED_PAGES").map((p) => pathMap[p].replace(/^\//, ""))];
} else {
  targets = (list ?? "").split(",").map((s) => s.trim().replace(/^\//, "").replace(new RegExp(`^${loc}/?`), "")).filter((s, i, a) => s || a.length === 1);
}

// English function words. A sentence carrying three of them is English.
const EN = new Set("the and your you with for from this that are is was be to of in on by it its or not can will into more than when which what how all any our we".split(" "));
const decode = (s) => s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&nbsp;/g, " ");

async function get(path) {
  if (OUT) {
    const f = join(OUT, path === "" ? "index.html" : `${path}.html`);
    return existsSync(f) ? { status: 200, html: readFileSync(f, "utf8") } : { status: 404, html: "" };
  }
  const res = await fetch(`${BASE}/${path}`);
  return { status: res.status, html: await res.text() };
}
const pick = (html, re) => decode((html.match(re) || [])[1] ?? "").trim();
function visibleText(html) {
  const body = (html.split(/<body[^>]*>/)[1] || "")
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<(header|footer|nav)[\s\S]*?<\/\1>/g, " ")
    .replace(/<span[^>]*material-symbols[^>]*>[^<]*<\/span>/g, " ")
    .replace(/<[^>]+>/g, " ");
  return decode(body).replace(/\s+/g, " ").trim();
}

let failed = 0;
for (const t of targets) {
  const path = t ? `${loc}/${t}` : loc;
  const toolId = idBySlug[t];
  const enPath = toolId ? toolId : (enByLocal[t] ?? (t === "" ? "/" : null));
  const problems = [];
  const { status, html } = await get(path);
  if (status !== 200) {
    console.log(`✗ /${path}  HTTP ${status}`);
    failed++;
    continue;
  }
  const title = pick(html, /<title>([\s\S]*?)<\/title>/);
  const h1 = pick(html, /<h1[^>]*>([\s\S]*?)<\/h1>/).replace(/<[^>]+>/g, "");
  const canonical = pick(html, /<link rel="canonical" href="([^"]+)"/);
  const alternates = Object.fromEntries([...html.matchAll(/<link rel="alternate" hrefLang="([^"]+)" href="([^"]+)"/gi)].map((m) => [m[1], m[2]]));
  const og = pick(html, /<meta property="og:locale" content="([^"]+)"/);
  const lds = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => {
    try { return JSON.parse(m[1]); } catch { return {}; }
  });

  const self = `${SITE}/${path}`;
  if (canonical !== self) problems.push(`canonical is ${canonical || "missing"}, expected ${self}`);
  for (const tag of [loc, "en", "x-default"]) if (!alternates[tag]) problems.push(`hreflang "${tag}" missing`);
  if (alternates[loc] && alternates[loc] !== self) problems.push(`hreflang ${loc} → ${alternates[loc]}, expected self`);
  if (og !== OG[loc]) problems.push(`og:locale is "${og}", expected ${OG[loc]}`);
  if (toolId) {
    const types = new Set(lds.map((d) => d["@type"]));
    for (const ty of ["SoftwareApplication", "HowTo", "FAQPage"]) if (!types.has(ty)) problems.push(`JSON-LD ${ty} missing`);
    for (const d of lds) if (["SoftwareApplication", "HowTo"].includes(d["@type"]) && d.inLanguage !== loc) problems.push(`${d["@type"]} inLanguage=${d.inLanguage}`);
  }
  if (enPath) {
    const en = await get(enPath === "/" ? "" : enPath);
    if (en.status === 200) {
      if (pick(en.html, /<title>([\s\S]*?)<\/title>/) === title) problems.push("title identical to English");
      const enH1 = pick(en.html, /<h1[^>]*>([\s\S]*?)<\/h1>/).replace(/<[^>]+>/g, "");
      /* An auth-gated page renders a spinner until the client knows who you
         are, so BOTH locales ship an empty <h1> in their static HTML and
         comparing them proves nothing. The page is still checked for title,
         canonical, hreflang and og:locale; its body is verified in the
         browser instead (conversion.md §6.2.11). */
      if (enH1 === h1 && h1 !== "") problems.push("H1 identical to English");
    }
  }
  const text = visibleText(html);
  const words = text.split(/\s+/).filter(Boolean).length;
  if (toolId && words < 900) problems.push(`${words} words — under the 900-word floor`);
  const english = text
    .split(/(?<=[.!?])\s+|\s{2,}| · /)
    .filter((s) => s.toLowerCase().split(/[^a-z']+/).filter((w) => EN.has(w)).length >= 3);
  /* Threshold 2, not 3. At 3 this missed heic-to-png.ru, where a missing
     `tagline` let ToolPageShell fall back to lib/tools.ts seoDescription and
     print two English sentences on a Russian page. The static check in
     i18n-audit.mjs now catches that specific fault at write time; this is the
     backstop for whatever the next fallback turns out to be. */
  if (english.length >= 2) problems.push(`${english.length} English-looking sentence(s)`);

  const ok = problems.length === 0;
  if (!ok) failed++;
  console.log(`${ok ? "✓" : "✗"} /${path}  (${words} words)`);
  console.log(`    title  ${title}`);
  console.log(`    h1     ${h1}`);
  for (const p of problems) console.log(`    ✗ ${p}`);
  for (const s of english.slice(0, 8)) console.log(`    ? EN  ${s.slice(0, 140)}`);
}

console.log(`\n${targets.length - failed}/${targets.length} clean.`);
process.exit(failed ? 1 : 0);

/**
 * Assert on the exported HTML in out/ after `next build`.
 *
 * This exists because the failure modes of a data-driven page set are all
 * silent. A stub with the wrong slug, a registry entry with no route, a
 * canonical duplicated across two pages, a page that renders but is 300 words
 * of boilerplate — none of them produce a build error. Clicking forty pages by
 * hand does not reliably catch them either.
 *
 *   npm run verify:build     (after npm run build)
 *
 * Checks, per live tool page:
 *   - the file exists
 *   - exactly one <h1>
 *   - <title> matches the registry's seoTitle
 *   - canonical is correct AND unique across the whole export
 *   - SoftwareApplication / HowTo / FAQPage JSON-LD present
 *   - visible word count >= MIN_WORDS
 * Plus, across the set:
 *   - sitemap.xml and the emitted files agree in both directions
 *   - no two converter pages exceed MAX_SIMILARITY on their prose
 */
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "out");

const MIN_WORDS = 900;
const MAX_SIMILARITY = 0.6;

if (!existsSync(out)) {
  console.error("out/ not found — run `npm run build` first.");
  process.exit(1);
}

// ── Read the registry without a TS toolchain ────────────────────────────────
// Sliced on `id:` boundaries rather than brace-matched: every TOOLS entry
// starts with `id:` and the fields we need appear once each before the next
// one, so this survives formatting changes that a brace regex would not.
const toolsSrc = readFileSync(join(root, "src", "lib", "tools.ts"), "utf8");
const idMatches = [...toolsSrc.matchAll(/^ {4}id:\s*"([^"]+)",/gm)];
const tools = [];
for (let i = 0; i < idMatches.length; i++) {
  const start = idMatches[i].index;
  const end = i + 1 < idMatches.length ? idMatches[i + 1].index : toolsSrc.length;
  const body = toolsSrc.slice(start, end);
  const str = (k) => {
    const r = new RegExp(`${k}:\\s*\\n?\\s*"((?:[^"\\\\]|\\\\.)*)"`).exec(body);
    return r ? r[1].replace(/\\"/g, '"') : null;
  };
  if (str("status") !== "live") continue;
  const slug = str("slug");
  if (!slug) continue;
  tools.push({ slug, seoTitle: str("seoTitle") });
}
if (tools.length === 0) {
  console.error("Parsed zero live tools from tools.ts — the parser needs updating.");
  process.exit(1);
}

const converterSlugs = new Set(
  [...readFileSync(join(root, "src", "lib", "converters", "pairs.ts"), "utf8")
    .matchAll(/^\s{4}slug:\s*"([a-z0-9-]+)"/gm)].map((m) => m[1]),
);

// ── Helpers ─────────────────────────────────────────────────────────────────
/** Titles come back HTML-escaped (`&` → `&amp;`); compare decoded. */
const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, d) => String.fromCharCode(Number(d)))
    .replace(/&#x27;|&apos;/g, "'");

const strip = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;/g, " ");

const words = (s) => s.split(/\s+/).filter(Boolean);

function shingles(text, n = 5) {
  const w = words(text.toLowerCase().replace(/[^a-z0-9\s]/g, ""));
  const set = new Set();
  for (let i = 0; i + n <= w.length; i++) set.add(w.slice(i, i + n).join(" "));
  return set;
}
function jaccard(a, b) {
  let inter = 0;
  for (const s of a) if (b.has(s)) inter++;
  const union = a.size + b.size - inter;
  return union === 0 ? 0 : inter / union;
}

const errors = [];
const warnings = [];
const canonicals = new Map();
const prose = new Map();

// ── Per-page checks ─────────────────────────────────────────────────────────
for (const { slug, seoTitle } of tools) {
  const file = join(out, `${slug}.html`);
  if (!existsSync(file)) {
    errors.push(`${slug}: no out/${slug}.html (registry says live — sitemap will ship a 404)`);
    continue;
  }
  const html = readFileSync(file, "utf8");

  const h1s = html.match(/<h1[\s>]/g) || [];
  if (h1s.length !== 1) errors.push(`${slug}: expected exactly one <h1>, found ${h1s.length}`);

  const t = /<title>([\s\S]*?)<\/title>/.exec(html);
  const title = t ? decode(t[1].trim()) : null;
  if (seoTitle && title !== seoTitle) {
    errors.push(`${slug}: <title> mismatch\n     want: ${seoTitle}\n     got : ${title}`);
  }

  const c = /<link rel="canonical" href="([^"]+)"/.exec(html);
  if (!c) {
    errors.push(`${slug}: no canonical link`);
  } else {
    const want = `https://omyimage.com/${slug}`;
    if (c[1] !== want) errors.push(`${slug}: canonical is ${c[1]}, expected ${want}`);
    if (canonicals.has(c[1])) {
      errors.push(`${slug}: canonical collides with ${canonicals.get(c[1])} — ${c[1]}`);
    }
    canonicals.set(c[1], slug);
  }

  for (const type of ["SoftwareApplication", "HowTo", "FAQPage"]) {
    if (!html.includes(`"${type}"`)) errors.push(`${slug}: missing ${type} JSON-LD`);
  }

  // Duplicate FAQ questions are a real defect, not just redundancy: SeoContent
  // keys the <details> list by `item.q`, so two identical questions collide as
  // React keys. Easy to introduce when appending to an existing faqs array.
  const questions = [...html.matchAll(/<summary[^>]*>([\s\S]*?)<\/summary>/g)].map((m) =>
    decode(m[1].replace(/<[^>]+>/g, "").trim()),
  );
  const dupQ = questions.filter((q, i) => questions.indexOf(q) !== i);
  if (dupQ.length) {
    errors.push(`${slug}: duplicate FAQ question(s): ${[...new Set(dupQ)].join(" | ")}`);
  }

  // Hard failure for every tool page, not just the generated ones. This was a
  // warning while the 28 hand-built pages still sat around 450-700 words; they
  // have all been expanded past the threshold, so it is now a ratchet that
  // stops any page regressing to thin content.
  const text = strip(html);
  const wc = words(text).length;
  if (wc < MIN_WORDS) {
    errors.push(`${slug}: only ${wc} visible words (min ${MIN_WORDS})`);
  }

  if (converterSlugs.has(slug)) {
    const seo = /data-seo-content[\s\S]*$/.exec(html);
    prose.set(slug, shingles(strip(seo ? seo[0] : html)));
  }
}

// ── Sitemap cross-check, both directions ────────────────────────────────────
const smFile = join(out, "sitemap.xml");
if (!existsSync(smFile)) {
  errors.push("out/sitemap.xml missing");
} else {
  const sm = readFileSync(smFile, "utf8");
  const urls = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  for (const u of urls) {
    const path = u.replace(/^https?:\/\/[^/]+\//, "").replace(/\/$/, "");
    if (path === "") continue;
    if (!existsSync(join(out, `${path}.html`))) {
      errors.push(`sitemap lists /${path} but out/${path}.html does not exist`);
    }
  }
  for (const { slug } of tools) {
    if (!urls.some((u) => u.endsWith(`/${slug}`))) {
      errors.push(`${slug} is live but missing from sitemap.xml`);
    }
  }
}

// ── Duplicate-content guard ─────────────────────────────────────────────────
const entries = [...prose.entries()];
let worst = { pair: null, score: 0 };
for (let i = 0; i < entries.length; i++) {
  for (let j = i + 1; j < entries.length; j++) {
    const score = jaccard(entries[i][1], entries[j][1]);
    if (score > worst.score) worst = { pair: `${entries[i][0]} ~ ${entries[j][0]}`, score };
    if (score > MAX_SIMILARITY) {
      errors.push(
        `near-duplicate copy: ${entries[i][0]} ~ ${entries[j][0]} = ${score.toFixed(2)} (max ${MAX_SIMILARITY})`,
      );
    }
  }
}

// ── Report ──────────────────────────────────────────────────────────────────
console.log(`Checked ${tools.length} live pages (${prose.size} data-driven converters).`);
if (worst.pair) {
  console.log(`Most similar converter pair: ${worst.pair} = ${worst.score.toFixed(3)}`);
}
for (const w of warnings) console.log(`  warn  ${w}`);
if (errors.length) {
  console.error(`\n${errors.length} problem(s):`);
  for (const e of errors) console.error(`  FAIL  ${e}`);
  process.exit(1);
}
console.log("All checks passed.");

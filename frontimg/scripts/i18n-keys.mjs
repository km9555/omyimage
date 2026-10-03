#!/usr/bin/env node
/**
 * Lists every `t("…")` key in the source, split by WHO RENDERS IT — which is
 * what decides where its translation must live (oMyPDF conversion.md §4.11):
 *
 *   • shared  — components/, lib/, i18n/ and the root app files (layout, home):
 *               every page can render these → dictionaries/<locale>/common.ts
 *   • <tool>  — app/<tool-slug>/: only that route renders it → the `ui` block
 *               of src/content/tools/<id>.<locale>.ts, code-split with the route
 *   • <page>  — app/<page>/ for a non-tool page (contact, pricing, account…)
 *               → dictionaries/<locale>/pages/<page>.ts
 *
 *   node scripts/i18n-keys.mjs              # every key, grouped
 *   node scripts/i18n-keys.mjs pt           # only what Portuguese lacks
 *   node scripts/i18n-keys.mjs pt --json    # same, as JSON
 *   node scripts/i18n-keys.mjs pt compress-image resize-image   # just these buckets
 *   node scripts/i18n-keys.mjs --check      # GATE: every translated locale, exit 1 on any gap
 *
 * `--check` runs in `prebuild`. Before it did, this was a report someone had to
 * remember to read, and the build passed while shipping English: main's
 * signup-resend commit added eight keys in pt only, and the merge that brought
 * in hi/ru/id would have published those three signup screens half in English
 * (caught by hand on 2026-10-03, fixed in f15e37b).
 *
 * "0 missing" is a claim about what this PARSED, not about the page: it cannot
 * see a literal that never reaches t() (that is `i18n:props`), and a key
 * listed here is only as good as the render site that uses it. Ported from
 * oMyPDF with its two hard-won fixes kept: coverage is resolved per bucket,
 * and block comments are only stripped at line start (§4.29).
 */
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(root, "src");

/**
 * Read a source file as LF — see the note in i18n-audit.mjs, which is the
 * script that genuinely breaks on a CRLF checkout.
 *
 * This one was checked against such a checkout and passed unchanged: its
 * patterns anchor at line START (`^\s*(id|slug):`) or not at all (T_CALL), and
 * none of them embeds a literal \n, so a trailing \r never lands inside a
 * capture. The normalisation is hardening against the next pattern someone
 * adds here, not a fix for a live failure.
 */
const readText = (p) => readFileSync(p, "utf8").replace(/\r\n/g, "\n");

const args = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const locale = args[0] ?? null;
const only = new Set(args.slice(1));
const asJson = process.argv.includes("--json");
const check = process.argv.includes("--check");

/**
 * Translated locales, from config.ts LOCALE_META — the same parser as
 * i18n-plurals.mjs and i18n-charset.mjs. A gate that checks nothing must fail,
 * not pass: i18n-audit.mjs and verify-build.mjs spent seven Russian batches
 * silently checking zero locales when their parser stopped matching
 * (conversion.md §10.4).
 */
function localesFromConfig() {
  const src = readText(join(SRC, "i18n", "config.ts"));
  const block = /export const LOCALE_META = \{([\s\S]*?)\n\} as const/.exec(src)?.[1] ?? "";
  const out = [...block.matchAll(/^  ([a-z]{2}(?:-[A-Za-z]+)?): \{/gm)].map((m) => m[1]).filter((l) => l !== "en");
  if (out.length === 0) {
    console.error("Parsed zero translated locales from config.ts LOCALE_META — has its shape changed?");
    process.exit(1);
  }
  return out;
}
const LOCALES = localesFromConfig();

/**
 * `t("…")` but not `it("…")`, `split("…")` … — the call must stand alone.
 * Also `translateError(err, t, "…")`, whose third argument is a key the helper
 * passes to t() — invisible to the first pattern, and exactly the toast a
 * visitor sees when something fails.
 */
const T_CALL = /(?<![\w$.])(?:t\(\s*|translateError\([^,]+,\s*t\s*,\s*)"((?:[^"\\]|\\.)*)"/g;

/**
 * Drops comments before scanning, so JSDoc quoting `t("Ranges")` is not
 * reported. Block comments are recognised only at the START of a line: the
 * unanchored form also matches the `/*` inside `accept="image/*"`, then
 * swallows everything to the next `*\/` — it hid eight t() calls in oMyPDF's
 * SignTool (§4.29). oMyImage has `accept="image/*"` in dozens of files.
 */
const stripComments = (s) =>
  s.replace(/^[ \t]*\/\*[\s\S]*?\*\//gm, "").replace(/(^|[^:])\/\/.*$/gm, "$1");

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (/\.tsx?$/.test(entry.name) && !/\.test\.tsx?$/.test(entry.name)) out.push(full);
  }
  return out;
}

/** English slug → tool id, from the registry. */
function slugToId() {
  const map = new Map();
  const src = readText(join(SRC, "lib", "tools.ts"));
  let id = null;
  for (const m of src.matchAll(/^\s*(id|slug):\s*"([^"]+)",/gm)) {
    if (m[1] === "id") id = m[2];
    else if (id) {
      map.set(m[2], id);
      id = null;
    }
  }
  return map;
}
const SLUG_TO_ID = slugToId();

/** Route folders that are never localized. */
// Locale route folders are included so a literal inside one (a written legal
// twin, say) is never mistaken for a page bucket named after the locale. They
// come from LOCALE_META: this list was hand-written as "pt", "hi" and never
// gained "ru" or "id" — harmless only because no t() call lives under those
// folders today.
const IGNORED = new Set([...LOCALES, "blog", "admin", "auth"]);

/**
 * Components that render on ONE page only, so their keys ride with that page's
 * dictionary instead of bloating common.ts on every route. They must be
 * rendered inside an <I18nScope dict={…}> carrying that dictionary.
 */
const PAGE_OWNED = {
  "app/page.tsx": "home",
  "components/HomeShell.tsx": "home",
  "components/HomeLauncher.tsx": "home",
  "components/ToolDirectory.tsx": "home",
};

/**
 * Files whose keys live in the converter dictionary rather than in common.ts.
 *
 * ConverterPage and the copy builders render on the ten `x-to-y` routes only,
 * and their strings are loaded with those routes (conversion.md §6.4) — so
 * reporting them as missing from `common.ts` would send them to the wrong file.
 */
const CONVERTER_OWNED = new Set([
  "components/ConverterPage.tsx",
  "lib/converters/copy.ts",
]);

/** Which bucket a file's keys belong to. */
function bucketOf(file) {
  const rel = relative(SRC, file).replace(/\\/g, "/");
  if (CONVERTER_OWNED.has(rel)) return "converters";
  if (PAGE_OWNED[rel]) return PAGE_OWNED[rel];
  const m = /^app\/([^/]+)\//.exec(rel);
  if (m) {
    if (IGNORED.has(m[1])) return null;
    return m[1];
  }
  return "shared";
}

const buckets = new Map();
for (const file of walk(SRC)) {
  if (/[\\/]i18n[\\/]dictionaries[\\/]/.test(file) || /[\\/]content[\\/]tools[\\/]/.test(file)) continue;
  const bucket = bucketOf(file);
  if (!bucket) continue;
  const src = stripComments(readText(file));
  for (const m of src.matchAll(T_CALL)) {
    const key = m[1].replace(/\\"/g, '"').replace(/\\\\/g, "\\");
    if (!buckets.has(bucket)) buckets.set(bucket, new Set());
    buckets.get(bucket).add(key);
  }
}

/** Keys defined in a dictionary file: `"key":` at a given indent. */
function readKeys(file, indent) {
  const out = new Set();
  if (!existsSync(file)) return out;
  const re = new RegExp(`^\\s{${indent}}"((?:[^"\\\\]|\\\\.)*)":`, "gm");
  for (const m of readText(file).matchAll(re)) out.add(m[1].replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
  return out;
}

/**
 * Keys the locale covers, resolved PER BUCKET — deliberately not one flat set.
 * A tool's `ui` block is in scope on that tool's route only, so a key defined
 * in compress-image.pt.ts does nothing for a component under app/crop-image/.
 */
function coverage(loc) {
  const shared = readKeys(join(SRC, "i18n", "dictionaries", loc, "common.ts"), 2);
  return (bucket) => {
    if (bucket === "shared") return { have: shared, where: `dictionaries/${loc}/common.ts` };
    if (bucket === "converters") {
      const dict = join(SRC, "i18n", "dictionaries", loc, "converters.ts");
      return { have: new Set([...shared, ...readKeys(dict, 2)]), where: `dictionaries/${loc}/converters.ts` };
    }
    const id = SLUG_TO_ID.get(bucket);
    if (id) {
      const mod = join(SRC, "content", "tools", `${id}.${loc}.ts`);
      return { have: new Set([...shared, ...readKeys(mod, 4)]), where: `content/tools/${id}.${loc}.ts → ui` };
    }
    const page = join(SRC, "i18n", "dictionaries", loc, "pages", `${bucket}.ts`);
    return { have: new Set([...shared, ...readKeys(page, 2)]), where: `dictionaries/${loc}/pages/${bucket}.ts` };
  };
}

/** Keys `loc` lacks, per bucket; with no locale, every key. */
function missing(loc) {
  const lookup = loc ? coverage(loc) : () => ({ have: new Set(), where: "" });
  const result = {};
  for (const [bucket, keys] of [...buckets].sort()) {
    if (only.size && !only.has(bucket)) continue;
    const { have, where } = lookup(bucket);
    const list = [...keys].filter((k) => !have.has(k)).sort();
    if (list.length) result[bucket] = { where, keys: list };
  }
  return result;
}

const countOf = (result) => Object.values(result).reduce((n, v) => n + v.keys.length, 0);

function printBuckets(result) {
  for (const [bucket, { where, keys }] of Object.entries(result)) {
    console.log(`── ${bucket} (${keys.length})${where ? `  → ${where}` : ""}`);
    for (const key of keys) console.log(`  ${JSON.stringify(key)}: ${JSON.stringify(key)},`);
    console.log();
  }
}

if (check) {
  // One line per locale, so a locale the loop never reached shows up as a
  // missing line rather than as a quiet pass.
  if (buckets.size === 0) {
    console.error("Found zero t() keys in src/ — has the call shape changed?");
    process.exit(1);
  }
  let failed = false;
  for (const loc of locale ? [locale] : LOCALES) {
    const result = missing(loc);
    const total = countOf(result);
    console.log(`[${loc}] ${total} key(s) missing`);
    if (total) {
      failed = true;
      printBuckets(result);
    }
  }
  if (failed) {
    console.error("i18n keys failed: add each key above to the file it names (npm run i18n:keys <loc>).");
    process.exit(1);
  }
  console.log("i18n keys passed.");
} else {
  const result = missing(locale);
  if (asJson) {
    console.log(JSON.stringify(result, null, 2));
  } else {
    const total = countOf(result);
    console.log(locale ? `${total} key(s) missing from "${locale}":\n` : `${total} translation key(s):\n`);
    printBuckets(result);
  }
}

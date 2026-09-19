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
const args = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const locale = args[0] ?? null;
const only = new Set(args.slice(1));
const asJson = process.argv.includes("--json");

/** `t("…")` but not `it("…")`, `split("…")` … — the call must stand alone. */
const T_CALL = /(?<![\w$.])t\(\s*"((?:[^"\\]|\\.)*)"/g;

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
  const src = readFileSync(join(SRC, "lib", "tools.ts"), "utf8");
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
const IGNORED = new Set(["pt", "blog", "admin", "auth"]);

/** Which bucket a file's keys belong to. */
function bucketOf(file) {
  const rel = relative(SRC, file).replace(/\\/g, "/");
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
  const src = stripComments(readFileSync(file, "utf8"));
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
  for (const m of readFileSync(file, "utf8").matchAll(re)) out.add(m[1].replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
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
    const id = SLUG_TO_ID.get(bucket);
    if (id) {
      const mod = join(SRC, "content", "tools", `${id}.${loc}.ts`);
      return { have: new Set([...shared, ...readKeys(mod, 4)]), where: `content/tools/${id}.${loc}.ts → ui` };
    }
    const page = join(SRC, "i18n", "dictionaries", loc, "pages", `${bucket}.ts`);
    return { have: new Set([...shared, ...readKeys(page, 2)]), where: `dictionaries/${loc}/pages/${bucket}.ts` };
  };
}

const lookup = locale ? coverage(locale) : () => ({ have: new Set(), where: "" });
const result = {};
for (const [bucket, keys] of [...buckets].sort()) {
  if (only.size && !only.has(bucket)) continue;
  const { have, where } = lookup(bucket);
  const list = [...keys].filter((k) => !have.has(k)).sort();
  if (list.length) result[bucket] = { where, keys: list };
}

if (asJson) {
  console.log(JSON.stringify(result, null, 2));
} else {
  const total = Object.values(result).reduce((n, v) => n + v.keys.length, 0);
  console.log(locale ? `${total} key(s) missing from "${locale}":\n` : `${total} translation key(s):\n`);
  for (const [bucket, { where, keys }] of Object.entries(result)) {
    console.log(`── ${bucket} (${keys.length})${where ? `  → ${where}` : ""}`);
    for (const key of keys) console.log(`  ${JSON.stringify(key)}: ${JSON.stringify(key)},`);
    console.log();
  }
}

/**
 * Assert every counted string has all the plural forms its language requires.
 *
 * WHY THIS EXISTS AS A SEPARATE GATE. `i18n-keys.mjs` finds missing keys by
 * reading the literals passed to `t()` in the source. Plural forms are invisible
 * to that: the source only ever says
 *
 *     t("{n} images", { n })
 *
 * and the category suffix is appended at RUNTIME by makeT (see i18n/t.ts). The
 * string "{n} images|few" appears nowhere in any component, so no amount of
 * scanning source can discover that Russian is missing it. Nothing else in the
 * repo can catch this, and the failure is silent and plausible-looking: a
 * Russian page reads "2 изображений" — grammatical-looking, wrong, and exactly
 * the sort of thing a non-speaker reviews straight past.
 *
 * WHAT IT CHECKS. For each translated locale whose CLDR plural rules have more
 * than the two categories English needs, every dictionary key containing `{n}`
 * must also define a sibling for each extra category the language uses.
 *
 *     ru  →  "{n} images"        (the `many`/default)
 *            "{n} images|one"    21, 31, 101 …
 *            "{n} images|few"    2, 3, 4, 22 …
 *
 * English (one/other), Portuguese (one/other in practice) and Hindi (one/other)
 * have nothing extra to define, so they pass trivially and stay that way.
 *
 * Driven entirely by Intl.PluralRules, so a future Polish or Arabic locale is
 * checked correctly without touching this file.
 *
 *   node scripts/i18n-plurals.mjs          all translated locales
 *   node scripts/i18n-plurals.mjs ru       one locale
 */
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(root, "src");

// Source is parsed as text (this runs before the build), so normalise line
// endings on read — a CRLF checkout otherwise defeats every ^/$ anchor. See
// the note in i18n-audit.mjs.
const readText = (p) => readFileSync(p, "utf8").replace(/\r\n/g, "\n");

/** Translated locales and their hreflang tags, from config.ts LOCALE_META. */
function localesFromConfig() {
  const src = readText(join(SRC, "i18n", "config.ts"));
  const block = /export const LOCALE_META = \{([\s\S]*?)\n\} as const/.exec(src)?.[1] ?? "";
  const out = [];
  for (const m of block.matchAll(/^  ([a-z]{2}(?:-[A-Za-z]+)?): \{([^}]*)\}/gm)) {
    const code = m[1];
    if (code === "en") continue;
    out.push({ code, tag: /tag: "([^"]+)"/.exec(m[2])?.[1] ?? code });
  }
  return out;
}

/** Every .ts file under a directory. */
function walk(dir) {
  const out = [];
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (name.endsWith(".ts")) out.push(p);
  }
  return out;
}

/**
 * Keys defined in a dictionary or content module.
 *
 * Deliberately loose — any `"…":` at the start of a line. A content module's
 * `ui` block and a dictionary are the same shape for this purpose, and over-
 * collecting costs nothing: a key without `{n}` is skipped below.
 */
function definedKeys(file) {
  const keys = new Set();
  const invariant = new Set();
  // Strip whole-line comments, but keep TRAILING ones — the invariant marker
  // lives there.
  const src = readText(file).replace(/^\s*\/\/.*$/gm, "");
  for (const line of src.split("\n")) {
    const m = /^\s*"((?:[^"\\]|\\.)*)":/.exec(line);
    if (!m) continue;
    const key = m[1].replace(/\\"/g, '"').replace(/\\\\/g, "\\");
    keys.add(key);
    if (/\/\/.*i18n-plural-invariant/.test(line)) invariant.add(key);
  }
  return { keys, invariant };
}

const only = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const locales = localesFromConfig().filter((l) => only.length === 0 || only.includes(l.code));

if (locales.length === 0) {
  console.error(only.length ? `Unknown locale(s): ${only.join(", ")}` : "No translated locales.");
  process.exit(1);
}

/**
 * Plural categories a language actually uses FOR INTEGER COUNTS, and which of
 * them the unsuffixed key stands for.
 *
 * Not `resolvedOptions().pluralCategories` — that is the DECLARED set, and it
 * over-reports. Portuguese declares `many`, but `many` never fires for any
 * integer (checked 0–2,000,000); it exists for decimals like "1,5 milhões".
 * Trusting the declared list made this gate demand 164 keys from a Portuguese
 * locale that has been shipping correctly for months, which is worse than no
 * gate: a check that cries wolf gets switched off.
 *
 * The base (unsuffixed) key stands for `other` where `other` fires, and
 * otherwise for the most common firing category — Russian never returns `other`
 * for an integer, and its commonest form is `many` (0, 5, 11, 12, 25 …).
 */
function integerCategories(tag) {
  const pr = new Intl.PluralRules(tag);
  const counts = new Map();
  for (let n = 0; n <= 1000; n++) counts.set(pr.select(n), (counts.get(pr.select(n)) ?? 0) + 1);
  const firing = [...counts.keys()];
  const base = firing.includes("other")
    ? "other"
    : [...counts.entries()].sort((a, b) => b[1] - a[1])[0][0];
  return { firing, base };
}

let problems = 0;

for (const { code, tag } of locales) {
  const { firing, base } = integerCategories(tag);

  /*
   * A two-form language needs nothing here: the call sites already pair a
   * literal `"1 image"` with `"{n} images"`, which is exactly two forms. Three
   * or more is where that model breaks — Russian's `one` fires at 21, 31 and
   * 101, which no `n === 1` ternary will ever reach.
   */
  if (firing.length <= 2) {
    console.log(`[${code}] ${firing.sort().join("/")} — two-form language, nothing to check.`);
    continue;
  }

  const extra = firing.filter((c) => c !== base).sort();

  const files = [
    ...walk(join(SRC, "i18n", "dictionaries", code)),
    ...walk(join(SRC, "content", "tools")).filter((f) => f.endsWith(`.${code}.ts`)),
    ...walk(join(SRC, "content", "converters")).filter((f) => f.endsWith(`.${code}.ts`)),
  ];

  if (files.length === 0) {
    console.log(`[${code}] no dictionaries yet — nothing to check.`);
    continue;
  }

  let missing = 0;
  let checked = 0;
  let invariantCount = 0;

  for (const file of files) {
    const { keys, invariant } = definedKeys(file);
    for (const key of keys) {
      if (!key.includes("{n}")) continue;
      // A key that IS a plural form is not itself a base key.
      if (extra.some((c) => key.endsWith(`|${c}`))) continue;
      /*
       * Not every {n} takes agreement. A parenthetical count ("Выбранные файлы
       * (3)"), an index ("Кадр 7") or a percentage ("Сэкономьте 20%") reads the
       * same at every number, and writing three identical rows for each would
       * add noise to ~40 keys while teaching a reviewer nothing.
       *
       * A trailing `// i18n-plural-invariant` on the base key opts out, the
       * same way `// i18n-same` marks a value that is deliberately untranslated.
       * It is a claim someone made on purpose and can be grepped and argued
       * with — unlike silence, which is what an absent key would be.
       */
      if (invariant.has(key)) {
        invariantCount++;
        continue;
      }
      checked++;
      for (const cat of extra) {
        if (!keys.has(`${key}|${cat}`)) {
          missing++;
          console.error(
            `ERROR [${code}] ${relative(root, file)}\n` +
              `        "${key}"\n` +
              `        missing "${key}|${cat}"`,
          );
        }
      }
    }
  }

  problems += missing;
  console.log(
    `[${code}] ${firing.sort().join("/")} (base "${base}", needs ${extra.map((c) => `|${c}`).join(" ")}) — ` +
      `${checked} counted key(s) across ${files.length} file(s)` +
      `${invariantCount ? `, ${invariantCount} marked invariant` : ""}; ` +
      `${missing === 0 ? "all forms present" : `${missing} missing`}.`,
  );
}

if (problems > 0) {
  console.error(`\n${problems} missing plural form(s).`);
  process.exit(1);
}
console.log("i18n plurals passed.");

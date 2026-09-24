/**
 * Gate: no characters from a writing system a locale has no business using.
 *
 * WHY THIS EXISTS. Twice while writing the Russian locale a stray CJK character
 * ended up mid-sentence — «что-то похожее на номер:符 правдоподобные» and
 * «скачиваетсяから Google» — from a single mistyped token. Both were caught by
 * eye, which is not a strategy: they render as a tofu box or an unexpected
 * glyph in the middle of otherwise correct prose, `tsc` is happy, `i18n:keys`
 * is happy, and a reviewer who does not read the language scrolls straight
 * past. The browser Latin-leftover sweep does not see them either, because it
 * looks for Latin words, not for foreign scripts.
 *
 * WHAT IT CHECKS. For each translated locale, every character in its content
 * modules, dictionaries and route files must belong either to a block that is
 * universally fine (ASCII, punctuation, arrows, currency, emoji, the repo's own
 * ── comment dividers) or to that locale's OWN script, taken from LOCALE_META
 * in i18n/config.ts. A Devanagari character in a Russian file is an error; the
 * same character in a Hindi file is the point.
 *
 * Comments are checked too, deliberately — but `i18n-charset-ok` on a line
 * exempts it, which is how a comment legitimately quotes another language (the
 * Russian site.ts explains its head-term rule by comparing with the Hindi one).
 *
 *   node scripts/i18n-charset.mjs          all translated locales
 *   node scripts/i18n-charset.mjs ru       one locale
 */
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(root, "src");

// Source is parsed as text; normalise line endings on read so a CRLF checkout
// does not shift every column number. See the note in i18n-audit.mjs.
const readText = (p) => readFileSync(p, "utf8").replace(/\r\n/g, "\n");

/** Blocks every locale may use: structure, punctuation, symbols, emoji. */
const UNIVERSAL = [
  [0x0000, 0x024f], // ASCII, Latin-1, Latin Extended-A/B
  [0x0300, 0x036f], // combining marks (the NFD fold in tool-search relies on these)
  [0x2000, 0x206f], // general punctuation — dashes, curly quotes, nbsp
  [0x20a0, 0x20bf], // currency
  [0x2100, 0x214f], // letterlike: №, ™, ℃
  [0x2190, 0x21ff], // arrows
  [0x2200, 0x22ff], // maths: ×, ·, ≤
  [0x2500, 0x257f], // box drawing — this repo's ── section dividers
  [0x2600, 0x27bf], // misc symbols and dingbats
  [0xfe00, 0xfe0f], // variation selectors
  [0x1f1e6, 0x1f1ff], // regional indicators (flag emoji in LOCALE_META)
  [0x1f300, 0x1faff], // emoji
];

/** Extra blocks a locale's own writing system needs, keyed by LOCALE_META.script. */
const SCRIPT_BLOCKS = {
  latin: [],
  cyrillic: [
    [0x0400, 0x04ff],
    [0x0500, 0x052f],
  ],
  devanagari: [
    [0x0900, 0x097f],
    [0xa8e0, 0xa8ff], // Devanagari Extended
  ],
};

/** Translated locales and their script, from config.ts LOCALE_META. */
function localesFromConfig() {
  const src = readText(join(SRC, "i18n", "config.ts"));
  const block = /export const LOCALE_META = \{([\s\S]*?)\n\} as const/.exec(src)?.[1] ?? "";
  const out = [];
  for (const m of block.matchAll(/^  ([a-z]{2}(?:-[A-Za-z]+)?): \{([^}]*)\}/gm)) {
    if (m[1] === "en") continue;
    out.push({ code: m[1], script: /script: "([a-z]+)"/.exec(m[2])?.[1] ?? "latin" });
  }
  return out;
}

function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.tsx?$/.test(name)) out.push(p);
  }
  return out;
}

const only = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const locales = localesFromConfig().filter((l) => only.length === 0 || only.includes(l.code));

if (locales.length === 0) {
  console.error(only.length ? `Unknown locale(s): ${only.join(", ")}` : "No translated locales.");
  process.exit(1);
}

let problems = 0;

for (const { code, script } of locales) {
  const allowed = [...UNIVERSAL, ...(SCRIPT_BLOCKS[script] ?? [])];
  const ok = (cp) => allowed.some(([lo, hi]) => cp >= lo && cp <= hi);

  const files = [
    ...walk(join(SRC, "app", code)),
    ...walk(join(SRC, "i18n", "dictionaries", code)),
    ...walk(join(SRC, "content", "tools")).filter((f) => f.endsWith(`.${code}.ts`)),
    ...walk(join(SRC, "content", "converters")).filter((f) => f.endsWith(`.${code}.ts`)),
  ];

  if (files.length === 0) {
    console.log(`[${code}] no files yet — nothing to check.`);
    continue;
  }

  let bad = 0;
  for (const file of files) {
    const lines = readText(file).split("\n");
    lines.forEach((line, i) => {
      if (line.includes("i18n-charset-ok")) return;
      for (const ch of line) {
        const cp = ch.codePointAt(0);
        if (ok(cp)) continue;
        bad++;
        console.error(
          `ERROR [${code}] ${relative(root, file)}:${i + 1}  U+${cp
            .toString(16)
            .toUpperCase()
            .padStart(4, "0")} is not ${script} and not universal\n` +
            `        ${line.trim().slice(0, 100)}`,
        );
      }
    });
  }

  problems += bad;
  console.log(
    `[${code}] ${script} — ${files.length} file(s); ${bad === 0 ? "no stray characters" : `${bad} stray character(s)`}.`,
  );
}

if (problems > 0) {
  console.error(
    `\n${problems} character(s) from an unexpected writing system.\n` +
      `If a comment quotes another language on purpose, put i18n-charset-ok on that line.`,
  );
  process.exit(1);
}
console.log("i18n charset passed.");

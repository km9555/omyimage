/**
 * Search-query normalisation, shared by tool-search.ts.
 *
 * Kept free of imports (and of `@/` path aliases) on purpose: it is the one
 * piece of the search that has unit tests, and `node --test` runs this file
 * directly with Node's built-in type stripping — no bundler, no test runner
 * dependency. See tests/search-normalize.test.ts.
 */

/**
 * Accent-insensitive folding. "Rotação" → "rotacao", so a Brazilian typing
 * without accents (common on a phone) still matches, and — the part that
 * actually broke — the word class below no longer deletes the accented letters
 * outright, which turned "câmera" into "c mera". English has no accents, so its
 * folding is unchanged.
 *
 * The nukta (U+093C) folds for the same reason the combining marks do: Hindi
 * has spelling splits where a reader sees one word and a matcher sees two —
 * फ़ाइल / फाइल, ज़िप / जिप. Folding it here means aliases.ts does not have to
 * carry both spellings of every word.
 */
export const stripAccents = (s: string) =>
  s
    .replace(LIGATURES, (c) => LIGATURE_FOLD[c])
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/़/g, "");

/**
 * Letters that NFD does not decompose, so the combining-mark strip cannot reach
 * them and the word class would ERASE them: German ß ("Bildgröße" became
 * "bildgro e") and the French ligatures œ / æ ("œuvre" became "uvre"). Folded
 * to the spelling a reader types when the key is missing — ss, oe, ae — so
 * "weiß" and "weiss" match each other.
 */
const LIGATURE_FOLD: Record<string, string> = {
  ß: "ss", ẞ: "ss", œ: "oe", Œ: "oe", æ: "ae", Æ: "ae",
};
const LIGATURES = /[ßẞœŒæÆ]/g;

/**
 * Letter ranges the word class must KEEP, one per writing system.
 *
 * `[^a-z0-9]` does not merely damage a non-Latin query, it ERASES it: "इमेज
 * कंप्रेस" normalises to "" and matches nothing at all, with no error and
 * nothing on screen to hint at why. Latin letters outside a-z are handled by
 * the NFD fold above; a script that does not decompose to ASCII has to be
 * named here or it disappears.
 *
 * Russian's ё needs no row: NFD decomposes it to е + U+0308 and the combining
 * strip above removes the diaeresis, so "ёлка" and "елка" — which Russians type
 * interchangeably — already fold together. Worth stating, because the next
 * person to read this will look for it.
 *
 * The same fold also merges й into и ("белый" and "белыи" normalise alike), so
 * й-final and и-final words collide. That is deliberate and matches what the
 * accent fold already does to Portuguese ç and ã: this string is a matching
 * key, never anything a visitor reads.
 */
const SCRIPT_RANGES: Record<string, string> = {
  devanagari: "ऀ-ॿ",
  // Cyrillic + its supplement. Keyed by SCRIPT, not locale, because that is
  // what varies: Ukrainian or Bulgarian would reuse this row, not add one.
  cyrillic: "Ѐ-ӿԀ-ԯ",
};

const NON_WORD = new RegExp(`[^a-z0-9${Object.values(SCRIPT_RANGES).join("")}]+`, "g");

// Lowercase, replace every run of non-word characters with a single space.
// "HEIC to JPG" → "heic to jpg". Used for word-boundary aware matching.
export const spaced = (s: string) => stripAccents(s).toLowerCase().replace(NON_WORD, " ").trim();
// Lowercase, drop every non-word character. "PNG to JPG" → "pngtojpg".
// Lets "png2jpg" match "png to jpg".
export const collapsed = (s: string) => stripAccents(s).toLowerCase().replace(NON_WORD, "");

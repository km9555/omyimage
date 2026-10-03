/**
 * The translated half of a converter page.
 *
 * A converter page is assembled from four sources, and each one needs its own
 * answer for a locale:
 *
 *   1. generated sentences (steps, features, boilerplate FAQs) → `copy.ts`,
 *      which takes a `t` and looks up `dictionaries/<loc>/converters.ts`;
 *   2. the page's own chrome (headings, the reciprocal link) → the same
 *      dictionary, used by ConverterPage;
 *   3. the pair's `unique` prose and its title/description → per-pair modules
 *      in `src/content/converters/<slug>.<locale>.ts`, registered below;
 *   4. the two format essays → `FORMAT_ESSAYS`, keyed by locale.
 *
 * Anything missing falls back to English, which is why a pair can ship in one
 * language before the next: `pairCopy()` returns the English pair data
 * untouched when a locale has no module for that slug.
 */
import { DEFAULT_LOCALE, type Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/t";
import { ptConverters } from "@/i18n/dictionaries/pt/converters";
import { PT_ESSAYS } from "@/content/converters/essays.pt";
import { PT_PAIR_COPY } from "@/content/converters/index.pt";
import { hiConverters } from "@/i18n/dictionaries/hi/converters";
import { HI_ESSAYS } from "@/content/converters/essays.hi";
import { HI_PAIR_COPY } from "@/content/converters/index.hi";
import { ruConverters } from "@/i18n/dictionaries/ru/converters";
import { RU_ESSAYS } from "@/content/converters/essays.ru";
import { RU_PAIR_COPY } from "@/content/converters/index.ru";
import { idConverters } from "@/i18n/dictionaries/id/converters";
import { ID_ESSAYS } from "@/content/converters/essays.id";
import { ID_PAIR_COPY } from "@/content/converters/index.id";
import { fmt } from "./formats";
import type { ConverterPair, FormatId, LocalizedPairCopy } from "./types";

export type { LocalizedPairCopy };

/**
 * One row per locale, not three. These used to be three parallel records —
 * PAIR_COPY, FORMAT_ESSAYS, DICTS — so a new language meant three edits in
 * three places and two of them were easy to forget; a missing FORMAT_ESSAYS row
 * is invisible, because `formatEssay()` silently falls back to English.
 *
 * Still a static object rather than a dynamic import: the bundler has to see
 * these to tree-shake a locale a page does not use.
 */
interface LocaleConverters {
  dict: Dict;
  essays: Partial<Record<FormatId, string>>;
  pairs: Record<string, LocalizedPairCopy>;
}

const LOCALE_CONVERTERS: Partial<Record<Locale, LocaleConverters>> = {
  pt: { dict: ptConverters, essays: PT_ESSAYS, pairs: PT_PAIR_COPY },
  hi: { dict: hiConverters, essays: HI_ESSAYS, pairs: HI_PAIR_COPY },
  ru: { dict: ruConverters, essays: RU_ESSAYS, pairs: RU_PAIR_COPY },
  id: { dict: idConverters, essays: ID_ESSAYS, pairs: ID_PAIR_COPY },
};

/**
 * The converter dictionary for a locale, or null for English.
 *
 * ConverterPage passes it to `getT()` for its own markup AND down through an
 * `<I18nScope>` so ConvertTool's `useT()` sees the same strings — the tool is
 * a client component and has no scope of its own on these routes.
 */
export function converterDict(locale: Locale): Dict | null {
  return LOCALE_CONVERTERS[locale]?.dict ?? null;
}

/** Has this pair been translated into this locale? */
export function pairTranslated(slug: string, locale: Locale): boolean {
  return locale === DEFAULT_LOCALE || !!LOCALE_CONVERTERS[locale]?.pairs[slug];
}

/**
 * Pair copy for a locale, falling back to the English data in `pairs.ts` and
 * the TOOLS registry (passed in, so this module stays free of that import).
 */
export function pairCopy(
  pair: ConverterPair,
  locale: Locale,
  english: { seoTitle: string; seoDescription: string },
): LocalizedPairCopy {
  const translated = LOCALE_CONVERTERS[locale]?.pairs[pair.slug];
  if (translated) return translated;
  return {
    name: pair.name,
    seoTitle: english.seoTitle,
    seoDescription: english.seoDescription,
    unique: pair.unique,
  };
}

/** The "what is this format" essay, in the page's language. */
export function formatEssay(id: FormatId, locale: Locale): string {
  return LOCALE_CONVERTERS[locale]?.essays[id] ?? fmt(id).essay;
}

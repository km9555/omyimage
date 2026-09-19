/**
 * Which pages actually EXIST in each non-default locale. Ported from oMyPDF.
 *
 * This is the rollout gate. Localization ships in batches of five, so a
 * Portuguese slug existing in slugs.ts does NOT mean `/pt/<slug>` has been
 * built yet. Anything not listed here is excluded from:
 *   • hreflang alternates (never advertise a URL that 404s)
 *   • the sitemap
 *   • the language switcher's "this page in Portuguese" target
 *   • toolHref / localeHref, which keep linking to English instead
 *
 * Add an id here in the SAME commit that adds `src/app/pt/<slug>/page.tsx` and
 * `src/content/tools/<id>.pt.ts`. `npm run i18n:audit` cross-checks this list
 * against the route folders on disk and fails on a mismatch. tracker.csv is the
 * human-readable view of the same state.
 */
import { DEFAULT_LOCALE, type Locale, type TranslatedLocale } from "@/i18n/config";

/** Tool ids whose localized tool page is live. */
const SHIPPED_TOOLS: Record<TranslatedLocale, string[]> = {
  // Portuguese (Brazilian) — batches of five, ordered by Brazilian search
  // value. Empty is the correct starting state.
  pt: [],
};

/** English paths of the non-tool pages that are live in each locale. */
const SHIPPED_PAGES: Record<TranslatedLocale, string[]> = {
  pt: [],
};

const TOOL_SETS: Record<string, ReadonlySet<string>> = Object.fromEntries(
  Object.entries(SHIPPED_TOOLS).map(([locale, ids]) => [locale, new Set(ids)]),
);

const PAGE_SETS: Record<string, ReadonlySet<string>> = Object.fromEntries(
  Object.entries(SHIPPED_PAGES).map(([locale, paths]) => [locale, new Set(paths)]),
);

export function toolShippedIn(toolId: string, locale: Locale): boolean {
  if (locale === DEFAULT_LOCALE) return true;
  return TOOL_SETS[locale]?.has(toolId) ?? false;
}

export function pageShippedIn(englishPath: string, locale: Locale): boolean {
  if (locale === DEFAULT_LOCALE) return true;
  return PAGE_SETS[locale]?.has(englishPath) ?? false;
}

/** Locales (including English) in which this tool page exists. */
export function localesForTool(toolId: string, locales: readonly Locale[]): Locale[] {
  return locales.filter((l) => toolShippedIn(toolId, l));
}

/** Locales (including English) in which this static page exists. */
export function localesForPage(englishPath: string, locales: readonly Locale[]): Locale[] {
  return locales.filter((l) => pageShippedIn(englishPath, l));
}

export function shippedToolIds(locale: Locale): readonly string[] {
  if (locale === DEFAULT_LOCALE) return [];
  return SHIPPED_TOOLS[locale] ?? [];
}

export function shippedPagePaths(locale: Locale): readonly string[] {
  if (locale === DEFAULT_LOCALE) return [];
  return SHIPPED_PAGES[locale] ?? [];
}

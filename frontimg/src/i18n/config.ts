/**
 * Locale primitives — the single source of truth for which languages exist and
 * how they map onto URLs. Ported from oMyPDF (same routing model, same names),
 * so the two codebases stay easy to read side by side.
 *
 * Routing model: the DEFAULT locale lives at the site root with no prefix
 * (`/compress-image`), because those URLs are already indexed and must not
 * move. Every other locale is a path prefix; whether the SLUG after it is
 * translated is a per-locale decision — Portuguese translates
 * (`/pt/comprimir-imagem`), Hindi does not (`/hi/compress-image`). See
 * src/i18n/slugs.ts for why the two differ.
 *
 * The frontend is a static export (`output: "export"`), so there is no proxy /
 * middleware and no Accept-Language negotiation. Nothing redirects; visitors
 * reach a locale through a link, the language switcher, or a search result.
 *
 * To add a locale: add it to LOCALES, give it a row in every Record below, add
 * its slug map in slugs.ts, its paths in static-paths.ts, its gate arrays in
 * status.ts and its dictionaries under dictionaries/<code>/. conversion.md §2
 * is the full checklist.
 */

export const LOCALES = ["en", "pt", "hi"] as const;

export type Locale = (typeof LOCALES)[number];

// `satisfies` (not `: Locale`) so the type stays the literal "en". Annotating
// it widens to Locale, which collapses `Exclude<Locale, typeof DEFAULT_LOCALE>`
// to `never` and breaks every per-translated-locale record downstream.
export const DEFAULT_LOCALE = "en" satisfies Locale;

/** Every locale except the default — the ones that need translated content. */
export type TranslatedLocale = Exclude<Locale, typeof DEFAULT_LOCALE>;

/** URL prefix per locale. The default locale is unprefixed (root). */
export const LOCALE_PREFIX: Record<Locale, string> = {
  en: "",
  pt: "/pt",
  hi: "/hi",
};

/**
 * BCP-47 tag for `<html lang>`, hreflang and JSON-LD `inLanguage`.
 *
 * Portuguese is the language-only tag `pt`, deliberately, even though the copy
 * is Brazilian. Google's rule is that a region subtag belongs there only when
 * you publish MORE THAN ONE variant of a language; we publish one, and `pt`
 * also serves Portugal, Angola and Mozambique rather than excluding them.
 * iLoveIMG ships a single /pt the same way.
 */
export const LOCALE_TAG: Record<Locale, string> = {
  en: "en",
  pt: "pt",
  // Hindi is the language-only tag for the same reason: one variant, and `hi`
  // is not India-specific — it also serves the diaspora.
  hi: "hi",
};

/**
 * Open Graph `og:locale` value.
 *
 * Unlike hreflang, og:locale's format is `language_TERRITORY` — a bare "pt" is
 * not valid there — so this is where the Brazilian targeting is stated.
 */
export const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  pt: "pt_BR",
  hi: "hi_IN",
};

/** Human label + flag, shared by the language switcher and the footer. */
export const LOCALE_LABEL: Record<Locale, { label: string; flag: string }> = {
  en: { label: "English", flag: "🇬🇧" },
  // Brazilian flag, not Portuguese: the copy is Brazilian and Brazil is the
  // audience (9% of all traffic, the largest non-English market). The hreflang
  // above still serves Portugal too.
  pt: { label: "Português", flag: "🇧🇷" },
  // The endonym, as the switcher shows every language in its own script. The
  // conjunct spelling "हिन्दी"; the anusvara form "हिंदी" is equally correct and
  // is carried in aliases.ts so search finds both.
  hi: { label: "हिन्दी", flag: "🇮🇳" },
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/**
 * Locale implied by a pathname. `/pt/comprimir-imagem` → "pt"; anything else →
 * "en". Deliberately tolerant of a missing pathname (usePathname can be null in
 * edge cases) so callers never have to null-check.
 */
export function localeFromPath(pathname: string | null | undefined): Locale {
  const segment = (pathname ?? "").split("/")[1] ?? "";
  return isLocale(segment) && segment !== DEFAULT_LOCALE ? segment : DEFAULT_LOCALE;
}

/** Strips a locale prefix, returning the path as the default locale sees it. */
export function stripLocalePrefix(pathname: string): string {
  const locale = localeFromPath(pathname);
  if (locale === DEFAULT_LOCALE) return pathname || "/";
  const rest = pathname.slice(LOCALE_PREFIX[locale].length);
  return rest === "" ? "/" : rest;
}

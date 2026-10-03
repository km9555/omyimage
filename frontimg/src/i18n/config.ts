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
 * To add a locale: add ONE row to LOCALE_META below, then its slug map in
 * slugs.ts, its paths in static-paths.ts, its gate arrays in status.ts and its
 * dictionaries under dictionaries/<code>/. conversion.md §2 is the full
 * checklist.
 *
 * LOCALE_META used to be five parallel `Record<Locale, …>` — prefix, hreflang
 * tag, og:locale, label, flag — which meant five edits in five places for one
 * new language, and five chances to add four of them. They are one row now. The
 * five named exports below still exist and are still `Record<Locale, …>`, so
 * every call site is unchanged and TypeScript still refuses to compile a locale
 * that is missing anything.
 */

/**
 * Everything about a locale that is not a map of its own file.
 *
 * `script` drives the webfont (layout.tsx) and the search normaliser's
 * character ranges (lib/tool-search.ts) — both of which used to grow a branch
 * per language rather than per writing system, which is the thing that actually
 * varies.
 */
export type LocaleScript = "latin" | "devanagari" | "cyrillic";

export interface LocaleMeta {
  /** URL prefix. The default locale is unprefixed (root). */
  prefix: string;
  /** BCP-47 for `<html lang>`, hreflang and JSON-LD inLanguage. */
  tag: string;
  /** og:locale — `language_TERRITORY`, where a bare language is not valid. */
  og: string;
  /** Endonym, as the switcher shows every language in its own script. */
  label: string;
  flag: string;
  script: LocaleScript;
}

export const LOCALE_META = {
  en: { prefix: "", tag: "en", og: "en_US", label: "English", flag: "🇬🇧", script: "latin" },
  /**
   * Portuguese is the language-only tag `pt`, deliberately, even though the copy
   * is Brazilian. Google's rule is that a region subtag belongs there only when
   * you publish MORE THAN ONE variant of a language; we publish one, and `pt`
   * also serves Portugal, Angola and Mozambique rather than excluding them.
   * iLoveIMG ships a single /pt the same way. The Brazilian targeting is stated
   * in `og`, whose format requires a territory.
   */
  pt: { prefix: "/pt", tag: "pt", og: "pt_BR", label: "Português", flag: "🇧🇷", script: "latin" },
  /**
   * Hindi is language-only for the same reason: one variant, and `hi` is not
   * India-specific — it also serves the diaspora. The label is the conjunct
   * spelling "हिन्दी"; the anusvara form "हिंदी" is equally correct and is
   * carried in aliases.ts so search finds both.
   */
  hi: { prefix: "/hi", tag: "hi", og: "hi_IN", label: "हिन्दी", flag: "🇮🇳", script: "devanagari" },
  /**
   * Russian is language-only for the same reason as the others, and it matters
   * more here: `ru` is the working language of Kazakhstan, Belarus, much of
   * Central Asia and a large diaspora, so `ru-RU` would exclude a real share of
   * the audience. `og` carries the territory because its format demands one.
   *
   * Script is "cyrillic", which Inter already covers — unlike Devanagari, this
   * costs a subset rather than a second font family.
   */
  ru: { prefix: "/ru", tag: "ru", og: "ru_RU", label: "Русский", flag: "🇷🇺", script: "cyrillic" },
  /**
   * Indonesian is `id` — the ISO 639-1 code, NOT the retired `in` that older
   * Java-era systems still emit. Language-only for the same reason as the
   * others: one variant, and Bahasa Indonesia is also read in Timor-Leste and
   * by a large diaspora. `og` carries the territory its format requires.
   *
   * Latin script with no diacritics at all, so Inter's `latin` subset already
   * covers it and nothing about fonts or search normalisation changes.
   */
  id: { prefix: "/id", tag: "id", og: "id_ID", label: "Bahasa Indonesia", flag: "🇮🇩", script: "latin" },
} as const satisfies Record<string, LocaleMeta>;

export const LOCALES = Object.keys(LOCALE_META) as readonly (keyof typeof LOCALE_META)[];

export type Locale = keyof typeof LOCALE_META;

// `satisfies` (not `: Locale`) so the type stays the literal "en". Annotating
// it widens to Locale, which collapses `Exclude<Locale, typeof DEFAULT_LOCALE>`
// to `never` and breaks every per-translated-locale record downstream.
export const DEFAULT_LOCALE = "en" satisfies Locale;

/** Every locale except the default — the ones that need translated content. */
export type TranslatedLocale = Exclude<Locale, typeof DEFAULT_LOCALE>;

/*
 * The five views below are DERIVED from LOCALE_META, not maintained beside it.
 * They keep their original names and their `Record<Locale, …>` types so no call
 * site changed when they stopped being hand-written, and so a locale missing a
 * field is still a compile error rather than an undefined at runtime.
 */

const view = <T,>(pick: (m: LocaleMeta) => T): Record<Locale, T> =>
  Object.fromEntries(
    (Object.entries(LOCALE_META) as [Locale, LocaleMeta][]).map(([k, m]) => [k, pick(m)]),
  ) as Record<Locale, T>;

/** URL prefix per locale. The default locale is unprefixed (root). */
export const LOCALE_PREFIX: Record<Locale, string> = view((m) => m.prefix);

/** BCP-47 tag for `<html lang>`, hreflang and JSON-LD `inLanguage`. */
export const LOCALE_TAG: Record<Locale, string> = view((m) => m.tag);

/** Open Graph `og:locale` — `language_TERRITORY`, unlike hreflang. */
export const OG_LOCALE: Record<Locale, string> = view((m) => m.og);

/** Writing system, for the webfont and the search normaliser. */
export const LOCALE_SCRIPT: Record<Locale, LocaleScript> = view((m) => m.script);

/** Human label + flag, shared by the language switcher and the footer. */
export const LOCALE_LABEL: Record<Locale, { label: string; flag: string }> = view((m) => ({
  label: m.label,
  flag: m.flag,
}));

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

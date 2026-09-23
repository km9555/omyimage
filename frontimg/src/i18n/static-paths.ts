/**
 * Translated paths for the NON-tool pages (tool pages live in slugs.ts).
 * Ported from oMyPDF; the Portuguese paths are the ones oMyPDF already ships,
 * so a visitor moving between the two sites meets the same words.
 *
 * Keyed by the English path, which acts as the canonical id for a page. Only
 * routes listed here get a localized counterpart; anything absent is
 * English-only by design and the language switcher falls back to the locale
 * home for those:
 *   • /blog and its posts — English-only by decision (2026-09-19).
 *   • /admin/*, /auth/callback — technical routes; the OAuth redirect target
 *     is registered with the provider and must not move.
 */
import {
  DEFAULT_LOCALE,
  LOCALE_PREFIX,
  stripLocalePrefix,
  type Locale,
  type TranslatedLocale,
} from "@/i18n/config";

type PathMap = Record<string, string>;

/** English path → localized path segment (WITHOUT the locale prefix). */
const PT_PATHS: PathMap = {
  "/": "",
  "/image-converter": "/conversor-de-imagens",
  "/pricing": "/precos",
  "/contact": "/contato",
  "/privacy": "/privacidade",
  "/terms": "/termos",
  "/cookies": "/cookies",
  "/refunds": "/reembolsos",
  "/login": "/entrar",
  "/signup": "/criar-conta",
  "/forgot-password": "/esqueci-a-senha",
  "/reset-password": "/redefinir-senha",
  "/dashboard": "/painel",
  "/account": "/conta",
};

/**
 * Hindi keeps the English path segments, for the same reason its tool slugs do
 * (see slugs.ts): iLoveIMG ships `/hi/pricing` and `/hi/login`, a
 * transliteration like `/mulya` carries a phrase nobody searches, and a path is
 * permanent once indexed.
 *
 * Unlike the tool map this one still has to be authored rather than derived:
 * it is the list of which non-tool routes the locale has at all. An entry
 * alone links nowhere — localeHref() also requires the page to be listed in
 * status.ts SHIPPED_PAGES — so the full set can be declared ahead of the
 * batches that ship it.
 */
const HI_PATHS: PathMap = {
  "/": "",
  "/image-converter": "/image-converter",
  "/pricing": "/pricing",
  "/contact": "/contact",
  "/privacy": "/privacy",
  "/terms": "/terms",
  "/cookies": "/cookies",
  "/refunds": "/refunds",
  "/login": "/login",
  "/signup": "/signup",
  "/forgot-password": "/forgot-password",
  "/reset-password": "/reset-password",
  "/dashboard": "/dashboard",
  "/account": "/account",
};

/** Russian keeps English segments, like Hindi — see the note in slugs.ts. */
const RU_PATHS: PathMap = {
  "/": "",
  "/image-converter": "/image-converter",
  "/pricing": "/pricing",
  "/contact": "/contact",
  "/privacy": "/privacy",
  "/terms": "/terms",
  "/cookies": "/cookies",
  "/refunds": "/refunds",
  "/login": "/login",
  "/signup": "/signup",
  "/forgot-password": "/forgot-password",
  "/reset-password": "/reset-password",
  "/dashboard": "/dashboard",
  "/account": "/account",
};

const STATIC_PATHS: Record<TranslatedLocale, PathMap> = {
  pt: PT_PATHS,
  hi: HI_PATHS,
  ru: RU_PATHS,
};

/** Does `locale` define a counterpart for this English path? */
export function hasStaticPath(englishPath: string, locale: Locale): boolean {
  if (locale === DEFAULT_LOCALE) return true;
  return englishPath in STATIC_PATHS[locale];
}

/** `/pricing` → `/pt/precos`. English (or an unmapped path) comes back unchanged. */
export function staticPath(englishPath: string, locale: Locale): string {
  if (locale === DEFAULT_LOCALE) return englishPath;
  const mapped = STATIC_PATHS[locale][englishPath];
  if (mapped === undefined) return englishPath;
  return `${LOCALE_PREFIX[locale]}${mapped}` || "/";
}

const REVERSE: Record<string, PathMap> = Object.fromEntries(
  Object.entries(STATIC_PATHS).map(([locale, map]) => [
    locale,
    Object.fromEntries(Object.entries(map).map(([en, local]) => [local || "/", en])),
  ]),
);

/**
 * The English path a localized static path corresponds to. Accepts the path
 * with or without its locale prefix.
 */
export function englishPathFrom(localizedPath: string, locale: Locale): string | undefined {
  if (locale === DEFAULT_LOCALE) return localizedPath;
  const bare = localizedPath.startsWith(LOCALE_PREFIX[locale])
    ? stripLocalePrefix(localizedPath)
    : localizedPath;
  return REVERSE[locale]?.[bare];
}

/** Every English static path that `locale` maps. */
export function localizedStaticPaths(locale: Locale): string[] {
  if (locale === DEFAULT_LOCALE) return [];
  return Object.keys(STATIC_PATHS[locale]);
}

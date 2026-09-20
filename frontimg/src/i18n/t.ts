/**
 * Translation runtime. Pure and server-safe — the React bindings live in
 * src/i18n/I18nScope.tsx. Ported unchanged from oMyPDF.
 *
 * Lookup order for `t(key)`:
 *   1. the SCOPE dictionary (a tool's own strings, passed down by
 *      ToolPageShell from `src/content/tools/<toolId>.<locale>.ts`)
 *   2. the COMMON dictionary for the locale (shared chrome — small, always
 *      bundled)
 *   3. the key itself with any `|context` suffix stripped → the English source
 *
 * Step 3 is why the key is the English string: a missing translation degrades
 * to correct English instead of a blank or a leaked dotted key.
 */
import { DEFAULT_LOCALE, type Locale } from "@/i18n/config";
import { ptCommon } from "@/i18n/dictionaries/pt/common";
import { hiCommon } from "@/i18n/dictionaries/hi/common";

export type Dict = Record<string, string>;

export type TFunction = (key: string, vars?: Record<string, string | number>) => string;

const COMMON: Record<Locale, Dict> = {
  en: {},
  pt: ptCommon,
  hi: hiCommon,
};

/**
 * Drops a disambiguation suffix: "Crop|verb" → "Crop". Only the LAST `|` is
 * treated as a separator, so a string that legitimately contains a pipe still
 * works as long as the context suffix is appended after it.
 */
export function stripContext(key: string): string {
  const i = key.lastIndexOf("|");
  return i === -1 ? key : key.slice(0, i);
}

/** Replaces `{name}` placeholders. No-op when `vars` is omitted. */
function interpolate(text: string, vars?: Record<string, string | number>): string {
  if (!vars) return text;
  return text.replace(/\{(\w+)\}/g, (match, name: string) =>
    name in vars ? String(vars[name]) : match,
  );
}

/** Builds a `t` for a locale, optionally layered over a scope dictionary. */
export function makeT(locale: Locale, scope?: Dict | null): TFunction {
  if (locale === DEFAULT_LOCALE) {
    return (key, vars) => interpolate(stripContext(key), vars);
  }
  const common = COMMON[locale] ?? {};
  return (key, vars) =>
    interpolate(scope?.[key] ?? common[key] ?? stripContext(key), vars);
}

/**
 * Server-component translator. Callers know their locale statically (it comes
 * from the route folder), so there is nothing to detect.
 */
export function getT(locale: Locale, scope?: Dict | null): TFunction {
  return makeT(locale, scope);
}

/** The common dictionary for a locale — used by the i18n audit script. */
export function commonDict(locale: Locale): Dict {
  return COMMON[locale] ?? {};
}

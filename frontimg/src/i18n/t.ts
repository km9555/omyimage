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
import { DEFAULT_LOCALE, LOCALE_TAG, type Locale } from "@/i18n/config";
import { ptCommon } from "@/i18n/dictionaries/pt/common";
import { hiCommon } from "@/i18n/dictionaries/hi/common";

export type Dict = Record<string, string>;

export type TFunction = (key: string, vars?: Record<string, string | number>) => string;

/**
 * Shared chrome per locale. The default locale has no dictionary — it IS the
 * keys. A locale absent here degrades to English rather than throwing, which is
 * what makes a half-finished locale safe to have on a branch.
 */
const COMMON: Partial<Record<Locale, Dict>> = {
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

/**
 * Plural category for a count, per CLDR. English and Hindi have two (one /
 * other); Russian has four (one / few / many / other) and picks between them on
 * `n % 10` and `n % 100`, not on size — 21 takes the SINGULAR form and 11 does
 * not, so no amount of `n === 1` cleverness at a call site can get it right.
 *
 * Intl does this correctly for every locale, which is the point: the next
 * language with three or six forms needs no code here at all.
 */
const pluralRules = new Map<Locale, Intl.PluralRules>();

function pluralCategory(locale: Locale, n: number): Intl.LDMLPluralRule {
  let rules = pluralRules.get(locale);
  if (!rules) {
    rules = new Intl.PluralRules(LOCALE_TAG[locale]);
    pluralRules.set(locale, rules);
  }
  return rules.select(n);
}

/**
 * Builds a `t` for a locale, optionally layered over a scope dictionary.
 *
 * PLURALS. Counts reach `t` as `t("{n} images", { n })`, chosen by a ternary at
 * the call site against a separate `"1 image"` key — a two-form model, because
 * English needs two. Rather than rewrite 46 call sites to carry a third form,
 * `t` looks for a category-suffixed key FIRST:
 *
 *     t("{n} images", { n: 3 })  →  "{n} images|few"  →  "{n} изображения"
 *
 * A locale that defines no such key falls straight through to the ordinary
 * lookup, so English, Portuguese and Hindi are byte-identical to before. The
 * suffix shares `stripContext`'s `|` convention and `one`/`few`/`many`/`two`/
 * `zero` are reserved for it — no disambiguation suffix may use those words.
 *
 * `i18n-keys.mjs` cannot see these keys (it reads literals passed to `t`, and
 * the `|few` variant never appears in source), so `i18n-plurals.mjs` is the
 * gate that checks a locale defined all the forms its language requires.
 */
export function makeT(locale: Locale, scope?: Dict | null): TFunction {
  if (locale === DEFAULT_LOCALE) {
    return (key, vars) => interpolate(stripContext(key), vars);
  }
  const common = COMMON[locale] ?? {};
  return (key, vars) => {
    const n = vars?.n;
    if (typeof n === "number" && Number.isFinite(n)) {
      const category = pluralCategory(locale, n);
      // "other" IS the base key — probing for it would only ever miss.
      if (category !== "other") {
        const pluralKey = `${key}|${category}`;
        const form = scope?.[pluralKey] ?? common[pluralKey];
        if (form !== undefined) return interpolate(form, vars);
      }
    }
    return interpolate(scope?.[key] ?? common[key] ?? stripContext(key), vars);
  };
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

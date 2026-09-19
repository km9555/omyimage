"use client";

/**
 * React bindings for the translation runtime.
 *
 * `useT()` works with NO provider at all — it derives the locale from the
 * pathname (`/pt/…` → "pt"), which Next resolves during static prerender, so
 * Portuguese HTML ships Portuguese strings rather than hydrating into them.
 *
 * `<I18nScope>` is layered on top for two reasons:
 *   • it pins the locale explicitly (deterministic, no pathname parsing), and
 *   • it supplies a tool's OWN dictionary, which is code-split with that tool's
 *     route instead of being bundled into every page.
 *
 * ToolPageShell renders one automatically, so tool components just call
 * `useT()` and get their page's dictionary.
 */

import { createContext, useContext, useMemo } from "react";
import { usePathname } from "next/navigation";
import { localeFromPath, type Locale } from "@/i18n/config";
import { makeT, type Dict, type TFunction } from "@/i18n/t";
import { formatBytesIn } from "@/i18n/format";

interface ScopeValue {
  locale: Locale;
  dict: Dict | null;
}

const ScopeContext = createContext<ScopeValue | null>(null);

export function I18nScope({
  locale,
  dict,
  children,
}: {
  locale: Locale;
  /** The page's own strings. Omit to inherit only the common dictionary. */
  dict?: Dict;
  children: React.ReactNode;
}) {
  const value = useMemo<ScopeValue>(() => ({ locale, dict: dict ?? null }), [locale, dict]);
  return <ScopeContext.Provider value={value}>{children}</ScopeContext.Provider>;
}

/** Current locale — from the nearest I18nScope, else from the URL. */
export function useLocale(): Locale {
  const scope = useContext(ScopeContext);
  const pathname = usePathname();
  return scope?.locale ?? localeFromPath(pathname);
}

/** Translator bound to the current locale and the nearest scope dictionary. */
export function useT(): TFunction {
  const scope = useContext(ScopeContext);
  const pathname = usePathname();
  const locale = scope?.locale ?? localeFromPath(pathname);
  const dict = scope?.dict ?? null;
  return useMemo(() => makeT(locale, dict), [locale, dict]);
}

/**
 * `formatBytes` bound to the page locale — "2.45 MB" / "2,45 MB".
 *
 * A hook rather than a path lookup on purpose: the locale must be identical in
 * Node (prerender) and in the browser, and `location` does not exist during a
 * static export's prerender, so a path-derived locale renders English in the
 * HTML and Portuguese after hydration — a text mismatch that makes React throw
 * away the whole subtree (oMyPDF conversion.md §4.32). Bind once next to useT():
 *
 *   const t = useT();
 *   const formatBytes = useFormatBytes();
 */
export function useFormatBytes(): (n: number) => string {
  const locale = useLocale();
  return useMemo(() => (n: number) => formatBytesIn(n, locale), [locale]);
}

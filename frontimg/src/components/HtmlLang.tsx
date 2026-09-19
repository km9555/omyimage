"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { LOCALE_TAG, localeFromPath } from "@/i18n/config";

/**
 * Keeps `<html lang>` matching the locale segment of the current URL.
 *
 * The root layout hard-codes `lang="en"` because it owns `<html>` and a static
 * export renders it once, with no request to branch on. The pre-paint NO_FLASH
 * script corrects it from the pathname before first paint — but that stamp does
 * not survive on its own, for two reasons:
 *
 *  1. React owns `<html>` as a "singleton". If hydration fails anywhere in the
 *     tree, React regenerates it on the client, and re-acquiring the singleton
 *     strips every attribute off the element before re-applying the JSX props —
 *     so `lang` snaps back to "en". Measured on a production build: NO_FLASH set
 *     `fr` at 65 ms, React wiped it at 424 ms (measured on oMyPDF). It only bites on pages that
 *     actually mismatch, which is why the breakage looked like a race.
 *  2. NO_FLASH runs once per document load. A client-side navigation from `/`
 *     to `/pt/comprimir-imagem` never re-runs it, so `lang` would stay stale for
 *     the rest of the session.
 *
 * This effect closes both gaps: it re-stamps after React has finished
 * committing, and again on every route change. NO_FLASH stays because it gets
 * the attribute right before paint in the common case.
 *
 * Purely an accessibility fix — screen-reader pronunciation, hyphenation and
 * spellcheck read this attribute. Machine-readable language for crawlers comes
 * from hreflang, og:locale and JSON-LD `inLanguage`, which are real markup and
 * were never affected.
 */
export function HtmlLang() {
  const pathname = usePathname();

  useEffect(() => {
    const tag = LOCALE_TAG[localeFromPath(pathname)];
    if (document.documentElement.lang !== tag) {
      document.documentElement.lang = tag;
    }
  }, [pathname]);

  return null;
}

import type { Metadata } from "next";
import { OG_LOCALE } from "@/i18n/config";
import { ruSite } from "@/i18n/dictionaries/ru/site";
import { OG_IMAGE, SITE } from "@/lib/site";

/**
 * Russian segment layout.
 *
 * It renders no markup of its own — `<html>` and the shared chrome belong to
 * the root layout — but it does own the Russian metadata defaults, so any `/ru`
 * page that doesn't set its own title/description falls back to Russian rather
 * than to the English root defaults.
 *
 * `<html lang="ru">` can't be set here (a nested layout doesn't own the html
 * element, and a static export has no request to branch on). The pre-paint
 * script in the root layout sets it from the pathname before first paint, and
 * <HtmlLang> re-stamps it after hydration and on every route change — see
 * NO_FLASH_THEME in src/app/layout.tsx.
 *
 * Unlike Hindi, the `lang` stamp is NOT load-bearing for typography here:
 * Cyrillic is served by Inter's own `cyrillic` subset, which the browser picks
 * by unicode-range regardless of the `lang` attribute. Russian therefore cannot
 * suffer Hindi's silent fallback to whatever face the OS happens to carry. The
 * stamp still matters for screen readers, hyphenation and hreflang.
 */
export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — ${ruSite.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: ruSite.description,
  // Site-level card fields only, as in the root layout: a page without its own
  // card then shows its own title, not this locale home page's.
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: OG_LOCALE.ru,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE],
  },
};

export default function RussianLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

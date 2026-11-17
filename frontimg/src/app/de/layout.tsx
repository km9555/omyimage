import type { Metadata } from "next";
import { OG_LOCALE } from "@/i18n/config";
import { deSite } from "@/i18n/dictionaries/de/site";
import { OG_IMAGE, SITE } from "@/lib/site";

/**
 * German segment layout.
 *
 * It renders no markup of its own — `<html>` and the shared chrome belong to
 * the root layout — but it owns the German metadata defaults, so any `/de`
 * page that doesn't set its own title/description falls back to German
 * rather than to the English root defaults.
 *
 * `<html lang="de">` is stamped by the pre-paint script in the root layout and
 * re-stamped by <HtmlLang> after hydration (see NO_FLASH_THEME in
 * src/app/layout.tsx). ä/ö/ü/ß are in Inter's `latin` subset, so German needs
 * nothing from the font stack; the `lang` stamp still matters for screen
 * readers, hyphenation (long German compounds) and hreflang.
 */
export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — ${deSite.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: deSite.description,
  // Site-level card fields only, as in the root layout: a page without its own
  // card then shows its own title, not this locale home page's.
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: OG_LOCALE.de,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE],
  },
};

export default function GermanLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

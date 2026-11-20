import type { Metadata } from "next";
import { OG_LOCALE } from "@/i18n/config";
import { frSite } from "@/i18n/dictionaries/fr/site";
import { OG_IMAGE, SITE } from "@/lib/site";

/**
 * French segment layout.
 *
 * Renders no markup of its own but owns the French metadata defaults, so any
 * `/fr` page without its own title/description falls back to French rather
 * than to the English root defaults. `<html lang="fr">` is stamped pre-paint
 * by the root layout and re-stamped by <HtmlLang> after hydration. é, è, ç,
 * œ, « » and the no-break spaces French typography needs are all in Inter's
 * `latin` subset, so nothing changes in the font stack.
 */
export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — ${frSite.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: frSite.description,
  // Site-level card fields only, as in the root layout: a page without its own
  // card then shows its own title, not this locale home page's.
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: OG_LOCALE.fr,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE],
  },
};

export default function FrenchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

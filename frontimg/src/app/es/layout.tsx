import type { Metadata } from "next";
import { OG_LOCALE } from "@/i18n/config";
import { esSite } from "@/i18n/dictionaries/es/site";
import { OG_IMAGE, SITE } from "@/lib/site";

/**
 * Spanish segment layout (neutral Spanish for Spain and Latin America).
 *
 * Renders no markup of its own but owns the Spanish metadata defaults, so any
 * `/es` page without its own title/description falls back to Spanish rather
 * than to the English root defaults. `<html lang="es">` is stamped pre-paint
 * by the root layout and re-stamped by <HtmlLang> after hydration. á, é, ñ, ¿
 * and ¡ are all in Inter's `latin` subset, so nothing changes in the font
 * stack.
 */
export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — ${esSite.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: esSite.description,
  // Site-level card fields only, as in the root layout: a page without its own
  // card then shows its own title, not this locale home page's.
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: OG_LOCALE.es,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE],
  },
};

export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

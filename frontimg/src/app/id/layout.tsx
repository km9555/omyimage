import type { Metadata } from "next";
import { OG_LOCALE } from "@/i18n/config";
import { idSite } from "@/i18n/dictionaries/id/site";
import { OG_IMAGE, SITE } from "@/lib/site";

/**
 * Indonesian segment layout.
 *
 * It renders no markup of its own — `<html>` and the shared chrome belong to
 * the root layout — but it does own the Indonesian metadata defaults, so any
 * `/id` page that doesn't set its own title/description falls back to
 * Indonesian rather than to the English root defaults.
 *
 * `<html lang="id">` can't be set here (a nested layout doesn't own the html
 * element, and a static export has no request to branch on). The pre-paint
 * script in the root layout sets it from the pathname before first paint, and
 * <HtmlLang> re-stamps it after hydration and on every route change — see
 * NO_FLASH_THEME in src/app/layout.tsx.
 *
 * Indonesian is plain Latin with no diacritics, so like Portuguese it needs
 * nothing from the font stack: Inter's `latin` subset already covers every
 * character. The `lang` stamp still matters for screen readers, hyphenation
 * and hreflang.
 */
export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — ${idSite.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: idSite.description,
  // Site-level card fields only, as in the root layout: a page without its own
  // card then shows its own title, not this locale home page's.
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: OG_LOCALE.id,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE],
  },
};

export default function IndonesianLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

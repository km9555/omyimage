import type { Metadata } from "next";
import { OG_LOCALE } from "@/i18n/config";
import { idSite } from "@/i18n/dictionaries/id/site";
import { SITE } from "@/lib/site";

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
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} — ${idSite.tagline}`,
    description: idSite.description,
    locale: OG_LOCALE.id,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${idSite.tagline}`,
    description: idSite.description,
  },
};

export default function IndonesianLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from "next";
import { OG_LOCALE } from "@/i18n/config";
import { ptSite } from "@/i18n/dictionaries/pt/site";
import { SITE } from "@/lib/site";

/**
 * Portuguese segment layout.
 *
 * It renders no markup of its own — `<html>` and the shared chrome belong to
 * the root layout — but it does own the Portuguese metadata defaults, so any
 * `/pt` page that doesn't set its own title/description falls back to
 * Portuguese rather than to the English root defaults.
 *
 * `<html lang="pt">` can't be set here (a nested layout doesn't own the html
 * element, and a static export has no request to branch on). The pre-paint
 * script in the root layout sets it from the pathname before first paint, and
 * <HtmlLang> re-stamps it after hydration and on every route change — see
 * NO_FLASH_THEME in src/app/layout.tsx. Both halves are load-bearing.
 *
 * That stamp activates no extra webfont: Portuguese is Latin
 * script and Inter already covers every accented character it uses.
 */
export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — ${ptSite.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: ptSite.description,
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} — ${ptSite.tagline}`,
    description: ptSite.description,
    locale: OG_LOCALE.pt,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${ptSite.tagline}`,
    description: ptSite.description,
  },
};

export default function PortugueseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from "next";
import { OG_LOCALE } from "@/i18n/config";
import { hiSite } from "@/i18n/dictionaries/hi/site";
import { SITE } from "@/lib/site";

/**
 * Hindi segment layout.
 *
 * It renders no markup of its own — `<html>` and the shared chrome belong to
 * the root layout — but it does own the Hindi metadata defaults, so any `/hi`
 * page that doesn't set its own title/description falls back to Hindi rather
 * than to the English root defaults.
 *
 * `<html lang="hi">` can't be set here (a nested layout doesn't own the html
 * element, and a static export has no request to branch on). The pre-paint
 * script in the root layout sets it from the pathname before first paint, and
 * <HtmlLang> re-stamps it after hydration and on every route change — see
 * NO_FLASH_THEME in src/app/layout.tsx. Both halves are load-bearing.
 *
 * Unlike Portuguese, that stamp is ALSO what activates the webfont: the
 * `:lang(hi)` rule in globals.css is the only place Noto Sans Devanagari is
 * applied. If the `lang` attribute is ever lost, Hindi silently falls back to
 * whatever Devanagari face the OS happens to carry — so treat the two halves
 * of the stamp as load-bearing for typography, not just for screen readers.
 */
export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — ${hiSite.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: hiSite.description,
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} — ${hiSite.tagline}`,
    description: hiSite.description,
    locale: OG_LOCALE.hi,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${hiSite.tagline}`,
    description: hiSite.description,
  },
};

export default function HindiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

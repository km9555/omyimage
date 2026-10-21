import type { Metadata } from "next";
import { HomeShell } from "@/components/HomeShell";
import { pageAlternates } from "@/lib/i18n/tool-meta";
import { absoluteUrl, OG_IMAGE, SITE } from "@/lib/site";

// Every other page sets its own canonical via `alternates`; the home page had
// no `metadata` export at all, so it shipped none — on the one URL search
// engines resolve duplicates against. Title and description are inherited from
// the root layout. The social card is NOT: it used to live there too, which
// stamped the home page's og:url and og:title onto every page without a card
// of its own (/contact, /account, …). The root now holds only site-level card
// fields, so the home page names its own.
const languages = pageAlternates("/");
export const metadata: Metadata = {
  alternates: languages ? { canonical: absoluteUrl("/"), languages } : { canonical: absoluteUrl("/") },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: [OG_IMAGE],
  },
};

export default function HomePage() {
  return <HomeShell />;
}

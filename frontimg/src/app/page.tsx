import type { Metadata } from "next";
import { HomeShell } from "@/components/HomeShell";
import { pageAlternates } from "@/lib/i18n/tool-meta";
import { absoluteUrl } from "@/lib/site";

// Every other page sets its own canonical via `alternates`; the home page had
// no `metadata` export at all, so it shipped none — on the one URL search
// engines resolve duplicates against. Title/description/OG are inherited from
// the root layout, so only the canonical (and, once a translated home ships,
// its reciprocal hreflang cluster) belongs here.
const languages = pageAlternates("/");
export const metadata: Metadata = {
  alternates: languages ? { canonical: absoluteUrl("/"), languages } : { canonical: absoluteUrl("/") },
};

export default function HomePage() {
  return <HomeShell />;
}

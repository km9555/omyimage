import { HomeShell } from "@/components/HomeShell";
import { idHome } from "@/i18n/dictionaries/id/pages/home";
import { idSite } from "@/i18n/dictionaries/id/site";
import { pageMetadata } from "@/lib/i18n/tool-meta";

/**
 * /id — the Indonesian home page. Same body as `/` (HomeShell); title and
 * description are written for the Indonesian SERP (dictionaries/id/site.ts).
 *
 * The title names the three biggest jobs in the order Indonesian demand ranks
 * them — hapus background (~1.5M/mo across phrasings), kompres foto (~1.07M),
 * foto HD (~975K) — in the words that are actually typed. Not the order the
 * English home uses, and not Russia's either.
 */
const TITLE = "Alat Foto Online Gratis — Hapus Background, Kompres Foto, Foto HD | oMyImage";

export const metadata = pageMetadata({
  englishPath: "/",
  locale: "id",
  title: TITLE,
  description: idSite.description,
});

export default function Page() {
  return <HomeShell locale="id" dict={idHome} description={idSite.description} />;
}

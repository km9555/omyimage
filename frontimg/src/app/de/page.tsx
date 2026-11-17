import { HomeShell } from "@/components/HomeShell";
import { deHome } from "@/i18n/dictionaries/de/pages/home";
import { deSite } from "@/i18n/dictionaries/de/site";
import { pageMetadata } from "@/lib/i18n/tool-meta";

/**
 * /de — the German home page. Same body as `/` (HomeShell); title and
 * description are written for the German SERP (dictionaries/de/site.ts), led
 * by the generic heads Germans type: Bilder bearbeiten (12.1K), Bild
 * verkleinern (12.1K), Bilder komprimieren (9.9K) — conversion.md §12.
 */
const TITLE = "Bilder kostenlos bearbeiten, komprimieren & umwandeln — online | oMyImage";

export const metadata = pageMetadata({
  englishPath: "/",
  locale: "de",
  title: TITLE,
  description: deSite.description,
});

export default function Page() {
  return <HomeShell locale="de" dict={deHome} description={deSite.description} />;
}

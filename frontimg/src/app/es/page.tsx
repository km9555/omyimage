import { HomeShell } from "@/components/HomeShell";
import { esHome } from "@/i18n/dictionaries/es/pages/home";
import { esSite } from "@/i18n/dictionaries/es/site";
import { pageMetadata } from "@/lib/i18n/tool-meta";

/**
 * /es — the Spanish home page (neutral Spanish for Spain and Latin America).
 * Same body as `/` (HomeShell); title and description are written for the
 * Spanish and Mexican SERP (dictionaries/es/site.ts): quitar fondo (201K ES /
 * 450K MX), imagen a PDF, comprimir imagen — conversion.md §13.
 */
const TITLE = "Herramientas de imagen gratis — quitar fondo, comprimir y convertir | oMyImage";

export const metadata = pageMetadata({
  englishPath: "/",
  locale: "es",
  title: TITLE,
  description: esSite.description,
});

export default function Page() {
  return <HomeShell locale="es" dict={esHome} description={esSite.description} />;
}

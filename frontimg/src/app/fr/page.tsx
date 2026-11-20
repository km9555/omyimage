import { HomeShell } from "@/components/HomeShell";
import { frHome } from "@/i18n/dictionaries/fr/pages/home";
import { frSite } from "@/i18n/dictionaries/fr/site";
import { pageMetadata } from "@/lib/i18n/tool-meta";

/**
 * /fr — the French home page. Same body as `/` (HomeShell); title and
 * description are written for the French SERP (dictionaries/fr/site.ts):
 * compresser une image (33.1K), image en PDF (49.5K), supprimer
 * l'arrière-plan — conversion.md §14.
 */
const TITLE = "Outils d'image gratuits — compresser, convertir, supprimer l'arrière-plan | oMyImage";

export const metadata = pageMetadata({
  englishPath: "/",
  locale: "fr",
  title: TITLE,
  description: frSite.description,
});

export default function Page() {
  return <HomeShell locale="fr" dict={frHome} description={frSite.description} />;
}

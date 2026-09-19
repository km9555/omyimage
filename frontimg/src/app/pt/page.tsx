import { HomeShell } from "@/components/HomeShell";
import { ptHome } from "@/i18n/dictionaries/pt/pages/home";
import { ptSite } from "@/i18n/dictionaries/pt/site";
import { pageMetadata } from "@/lib/i18n/tool-meta";

/**
 * /pt — the Portuguese home page. Same body as `/` (HomeShell); title and
 * description are written for the Brazilian SERP (dictionaries/pt/site.ts).
 */
const TITLE = "Ferramentas de imagem online grátis — comprimir, redimensionar e converter | oMyImage";

export const metadata = pageMetadata({
  englishPath: "/",
  locale: "pt",
  title: TITLE,
  description: ptSite.description,
});

export default function Page() {
  return <HomeShell locale="pt" dict={ptHome} description={ptSite.description} />;
}

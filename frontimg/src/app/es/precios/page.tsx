import { PricingClient } from "@/app/pricing/PricingClient";
import { I18nScope } from "@/i18n/I18nScope";
import { esPricing } from "@/i18n/dictionaries/es/pages/pricing";
import { pageMetadata } from "@/lib/i18n/tool-meta";


export const metadata = pageMetadata({
  englishPath: "/pricing",
  locale: "es",
  title: "Precios — herramientas de imagen gratis | oMyImage",
  description:
    "Precios simples y honestos en oMyImage. Todas las herramientas son gratis hoy y sin cuenta. Los planes Plus y Pro llegarán para archivos más grandes y más IA.",
});

export default function Page() {
  return (
    <I18nScope locale="es" dict={esPricing}>
      <PricingClient />
    </I18nScope>
  );
}

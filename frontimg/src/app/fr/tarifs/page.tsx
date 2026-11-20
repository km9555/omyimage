import { PricingClient } from "@/app/pricing/PricingClient";
import { I18nScope } from "@/i18n/I18nScope";
import { frPricing } from "@/i18n/dictionaries/fr/pages/pricing";
import { pageMetadata } from "@/lib/i18n/tool-meta";


export const metadata = pageMetadata({
  englishPath: "/pricing",
  locale: "fr",
  title: "Tarifs — outils d'image gratuits | oMyImage",
  description:
    "Des tarifs simples et honnêtes chez oMyImage. Tous les outils sont gratuits aujourd'hui, sans compte. Les offres Plus et Pro arrivent pour les gros fichiers et plus d'IA.",
});

export default function Page() {
  return (
    <I18nScope locale="fr" dict={frPricing}>
      <PricingClient />
    </I18nScope>
  );
}

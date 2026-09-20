import { PricingClient } from "@/app/pricing/PricingClient";
import { I18nScope } from "@/i18n/I18nScope";
import { ptPricing } from "@/i18n/dictionaries/pt/pages/pricing";
import { pageMetadata } from "@/lib/i18n/tool-meta";

/* PricingClient is a client component (currency and billing state), so the
   dictionary reaches it through an <I18nScope> rather than a prop — the same
   shape ConverterPage uses (conversion.md §6.5). */
export const metadata = pageMetadata({
  englishPath: "/pricing",
  locale: "pt",
  title: "Preços — ferramentas de imagem grátis | oMyImage",
  description:
    "Preços simples e honestos do oMyImage. Todas as ferramentas são grátis hoje, sem conta. Os planos Plus e Pro estão a caminho para arquivos maiores e mais IA.",
});

export default function Page() {
  return (
    <I18nScope locale="pt" dict={ptPricing}>
      <PricingClient />
    </I18nScope>
  );
}

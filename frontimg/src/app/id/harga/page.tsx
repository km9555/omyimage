import { PricingClient } from "@/app/pricing/PricingClient";
import { I18nScope } from "@/i18n/I18nScope";
import { idPricing } from "@/i18n/dictionaries/id/pages/pricing";
import { pageMetadata } from "@/lib/i18n/tool-meta";

/* PricingClient is a client component (currency and billing state), so the
   dictionary reaches it through an <I18nScope> rather than a prop — the same
   shape ConverterPage uses (conversion.md §6.5). */
export const metadata = pageMetadata({
  englishPath: "/pricing",
  locale: "id",
  title: "Harga — Alat Foto Online Gratis | oMyImage",
  description:
    "Harga oMyImage yang sederhana dan jujur. Semua alat gratis hari ini, tanpa perlu daftar. Paket Plus dan Pro sedang disiapkan untuk file lebih besar dan lebih banyak pemakaian AI.",
});

export default function Page() {
  return (
    <I18nScope locale="id" dict={idPricing}>
      <PricingClient />
    </I18nScope>
  );
}

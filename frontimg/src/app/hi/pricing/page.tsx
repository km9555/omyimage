import { PricingClient } from "@/app/pricing/PricingClient";
import { I18nScope } from "@/i18n/I18nScope";
import { hiPricing } from "@/i18n/dictionaries/hi/pages/pricing";
import { pageMetadata } from "@/lib/i18n/tool-meta";

/* PricingClient is a client component (currency and billing state), so the
   dictionary reaches it through an <I18nScope> rather than a prop — the same
   shape ConverterPage uses (conversion.md §6.5). */
export const metadata = pageMetadata({
  englishPath: "/pricing",
  locale: "hi",
  title: "क़ीमत — मुफ़्त इमेज टूल | oMyImage",
  description:
    "oMyImage की सीधी और ईमानदार क़ीमत। आज हर टूल मुफ़्त है, खाते की ज़रूरत नहीं। बड़ी फ़ाइलों और ज़्यादा AI के लिए Plus और Pro प्लान रास्ते में हैं।",
});

export default function Page() {
  return (
    <I18nScope locale="hi" dict={hiPricing}>
      <PricingClient />
    </I18nScope>
  );
}

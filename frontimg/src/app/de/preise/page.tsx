import { PricingClient } from "@/app/pricing/PricingClient";
import { I18nScope } from "@/i18n/I18nScope";
import { dePricing } from "@/i18n/dictionaries/de/pages/pricing";
import { pageMetadata } from "@/lib/i18n/tool-meta";


export const metadata = pageMetadata({
  englishPath: "/pricing",
  locale: "de",
  title: "Preise — kostenlose Bild-Tools | oMyImage",
  description:
    "Einfache, ehrliche Preise bei oMyImage. Alle Tools sind heute kostenlos und ohne Konto nutzbar. Die Tarife Plus und Pro für größere Dateien und mehr KI folgen.",
});

export default function Page() {
  return (
    <I18nScope locale="de" dict={dePricing}>
      <PricingClient />
    </I18nScope>
  );
}

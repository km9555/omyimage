import { PricingClient } from "@/app/pricing/PricingClient";
import { I18nScope } from "@/i18n/I18nScope";
import { ruPricing } from "@/i18n/dictionaries/ru/pages/pricing";
import { pageMetadata } from "@/lib/i18n/tool-meta";

/* PricingClient is a client component (currency and billing state), so the
   dictionary reaches it through an <I18nScope> rather than a prop — the same
   shape ConverterPage uses (conversion.md §6.5). */
export const metadata = pageMetadata({
  englishPath: "/pricing",
  locale: "ru",
  title: "Цены — бесплатные инструменты для изображений | oMyImage",
  description:
    "Простые и честные цены oMyImage. Сегодня бесплатны все инструменты, регистрация не нужна. Планы Plus и Pro готовятся для файлов побольше и большего числа запусков ИИ.",
});

export default function Page() {
  return (
    <I18nScope locale="ru" dict={ruPricing}>
      <PricingClient />
    </I18nScope>
  );
}

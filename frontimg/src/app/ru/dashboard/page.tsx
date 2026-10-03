import { DashboardClient } from "@/app/dashboard/DashboardClient";
import { I18nScope } from "@/i18n/I18nScope";
import { ruDashboard } from "@/i18n/dictionaries/ru/pages/dashboard";
import { pageMetadata } from "@/lib/i18n/tool-meta";

// noindex: signed-in surface, nothing here for a search visitor.
export const metadata = pageMetadata({
  englishPath: "/dashboard",
  locale: "ru",
  title: "Панель",
  description: "Ваша панель oMyImage.",
  index: false,
  absoluteTitle: false,
});

export default function Page() {
  return (
    <I18nScope locale="ru" dict={ruDashboard}>
      <DashboardClient />
    </I18nScope>
  );
}

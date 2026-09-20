import { DashboardClient } from "@/app/dashboard/DashboardClient";
import { I18nScope } from "@/i18n/I18nScope";
import { ptDashboard } from "@/i18n/dictionaries/pt/pages/dashboard";
import { pageMetadata } from "@/lib/i18n/tool-meta";

// noindex: signed-in surface, nothing here for a search visitor.
export const metadata = pageMetadata({
  englishPath: "/dashboard",
  locale: "pt",
  title: "Painel",
  description: "Seu painel do oMyImage.",
  index: false,
  absoluteTitle: false,
});

export default function Page() {
  return (
    <I18nScope locale="pt" dict={ptDashboard}>
      <DashboardClient />
    </I18nScope>
  );
}

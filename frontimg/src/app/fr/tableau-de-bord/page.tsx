import { DashboardClient } from "@/app/dashboard/DashboardClient";
import { I18nScope } from "@/i18n/I18nScope";
import { frDashboard } from "@/i18n/dictionaries/fr/pages/dashboard";
import { pageMetadata } from "@/lib/i18n/tool-meta";

// noindex: signed-in surface, nothing here for a search visitor.
export const metadata = pageMetadata({
  englishPath: "/dashboard",
  locale: "fr",
  title: "Tableau de bord",
  description:
    "Votre tableau de bord oMyImage.",
  index: false,
  absoluteTitle: false,
});

export default function Page() {
  return (
    <I18nScope locale="fr" dict={frDashboard}>
      <DashboardClient />
    </I18nScope>
  );
}

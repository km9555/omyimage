import { DashboardClient } from "@/app/dashboard/DashboardClient";
import { I18nScope } from "@/i18n/I18nScope";
import { hiDashboard } from "@/i18n/dictionaries/hi/pages/dashboard";
import { pageMetadata } from "@/lib/i18n/tool-meta";

// noindex: signed-in surface, nothing here for a search visitor.
export const metadata = pageMetadata({
  englishPath: "/dashboard",
  locale: "hi",
  title: "डैशबोर्ड",
  description: "आपका oMyImage डैशबोर्ड।",
  index: false,
  absoluteTitle: false,
});

export default function Page() {
  return (
    <I18nScope locale="hi" dict={hiDashboard}>
      <DashboardClient />
    </I18nScope>
  );
}

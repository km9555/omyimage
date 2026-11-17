import { DashboardClient } from "@/app/dashboard/DashboardClient";
import { I18nScope } from "@/i18n/I18nScope";
import { deDashboard } from "@/i18n/dictionaries/de/pages/dashboard";
import { pageMetadata } from "@/lib/i18n/tool-meta";

// noindex: signed-in surface, nothing here for a search visitor.
export const metadata = pageMetadata({
  englishPath: "/dashboard",
  locale: "de",
  title: "Dashboard",
  description:
    "Ihr oMyImage-Dashboard.",
  index: false,
  absoluteTitle: false,
});

export default function Page() {
  return (
    <I18nScope locale="de" dict={deDashboard}>
      <DashboardClient />
    </I18nScope>
  );
}

import { AccountClient } from "@/app/account/AccountClient";
import { I18nScope } from "@/i18n/I18nScope";
import { frAccount } from "@/i18n/dictionaries/fr/pages/account";
import { pageMetadata } from "@/lib/i18n/tool-meta";

// noindex: signed-in surface, nothing here for a search visitor.
export const metadata = pageMetadata({
  englishPath: "/account",
  locale: "fr",
  title: "Mon compte",
  description:
    "Gérez votre compte oMyImage.",
  index: false,
  absoluteTitle: false,
});

export default function Page() {
  return (
    <I18nScope locale="fr" dict={frAccount}>
      <AccountClient />
    </I18nScope>
  );
}

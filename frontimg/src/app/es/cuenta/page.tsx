import { AccountClient } from "@/app/account/AccountClient";
import { I18nScope } from "@/i18n/I18nScope";
import { esAccount } from "@/i18n/dictionaries/es/pages/account";
import { pageMetadata } from "@/lib/i18n/tool-meta";

// noindex: signed-in surface, nothing here for a search visitor.
export const metadata = pageMetadata({
  englishPath: "/account",
  locale: "es",
  title: "Mi cuenta",
  description:
    "Administra tu cuenta de oMyImage.",
  index: false,
  absoluteTitle: false,
});

export default function Page() {
  return (
    <I18nScope locale="es" dict={esAccount}>
      <AccountClient />
    </I18nScope>
  );
}

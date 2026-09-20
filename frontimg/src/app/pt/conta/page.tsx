import { AccountClient } from "@/app/account/AccountClient";
import { I18nScope } from "@/i18n/I18nScope";
import { ptAccount } from "@/i18n/dictionaries/pt/pages/account";
import { pageMetadata } from "@/lib/i18n/tool-meta";

// noindex: signed-in surface, nothing here for a search visitor.
export const metadata = pageMetadata({
  englishPath: "/account",
  locale: "pt",
  title: "Minha conta",
  description: "Gerencie a sua conta do oMyImage.",
  index: false,
  absoluteTitle: false,
});

export default function Page() {
  return (
    <I18nScope locale="pt" dict={ptAccount}>
      <AccountClient />
    </I18nScope>
  );
}

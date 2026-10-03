import { AccountClient } from "@/app/account/AccountClient";
import { I18nScope } from "@/i18n/I18nScope";
import { ruAccount } from "@/i18n/dictionaries/ru/pages/account";
import { pageMetadata } from "@/lib/i18n/tool-meta";

// noindex: signed-in surface, nothing here for a search visitor.
export const metadata = pageMetadata({
  englishPath: "/account",
  locale: "ru",
  title: "Мой аккаунт",
  description: "Управляйте своим аккаунтом oMyImage.",
  index: false,
  absoluteTitle: false,
});

export default function Page() {
  return (
    <I18nScope locale="ru" dict={ruAccount}>
      <AccountClient />
    </I18nScope>
  );
}

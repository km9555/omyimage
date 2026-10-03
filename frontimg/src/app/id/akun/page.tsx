import { AccountClient } from "@/app/account/AccountClient";
import { I18nScope } from "@/i18n/I18nScope";
import { idAccount } from "@/i18n/dictionaries/id/pages/account";
import { pageMetadata } from "@/lib/i18n/tool-meta";

// noindex: signed-in surface, nothing here for a search visitor.
export const metadata = pageMetadata({
  englishPath: "/account",
  locale: "id",
  title: "Akun Saya",
  description: "Kelola akun oMyImage Anda.",
  index: false,
  absoluteTitle: false,
});

export default function Page() {
  return (
    <I18nScope locale="id" dict={idAccount}>
      <AccountClient />
    </I18nScope>
  );
}

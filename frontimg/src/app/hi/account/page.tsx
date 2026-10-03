import { AccountClient } from "@/app/account/AccountClient";
import { I18nScope } from "@/i18n/I18nScope";
import { hiAccount } from "@/i18n/dictionaries/hi/pages/account";
import { pageMetadata } from "@/lib/i18n/tool-meta";

// noindex: signed-in surface, nothing here for a search visitor.
export const metadata = pageMetadata({
  englishPath: "/account",
  locale: "hi",
  title: "मेरा खाता",
  description: "अपना oMyImage खाता संभालें।",
  index: false,
  absoluteTitle: false,
});

export default function Page() {
  return (
    <I18nScope locale="hi" dict={hiAccount}>
      <AccountClient />
    </I18nScope>
  );
}

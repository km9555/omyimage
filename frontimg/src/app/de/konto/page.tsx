import { AccountClient } from "@/app/account/AccountClient";
import { I18nScope } from "@/i18n/I18nScope";
import { deAccount } from "@/i18n/dictionaries/de/pages/account";
import { pageMetadata } from "@/lib/i18n/tool-meta";

// noindex: signed-in surface, nothing here for a search visitor.
export const metadata = pageMetadata({
  englishPath: "/account",
  locale: "de",
  title: "Mein Konto",
  description:
    "Verwalten Sie Ihr oMyImage-Konto.",
  index: false,
  absoluteTitle: false,
});

export default function Page() {
  return (
    <I18nScope locale="de" dict={deAccount}>
      <AccountClient />
    </I18nScope>
  );
}

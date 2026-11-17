import { ForgotPasswordForm } from "@/app/forgot-password/ForgotPasswordForm";
import { I18nScope } from "@/i18n/I18nScope";
import { deForgotPassword } from "@/i18n/dictionaries/de/pages/forgot-password";
import { pageMetadata } from "@/lib/i18n/tool-meta";

// noindex, like /forgot-password.
export const metadata = pageMetadata({
  englishPath: "/forgot-password",
  locale: "de",
  title: "Passwort vergessen",
  description:
    "Setzen Sie das Passwort Ihres oMyImage-Kontos zurück.",
  index: false,
  absoluteTitle: false,
});

export default function Page() {
  return (
    <I18nScope locale="de" dict={deForgotPassword}>
      <ForgotPasswordForm />
    </I18nScope>
  );
}

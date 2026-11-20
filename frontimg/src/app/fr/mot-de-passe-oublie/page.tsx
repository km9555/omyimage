import { ForgotPasswordForm } from "@/app/forgot-password/ForgotPasswordForm";
import { I18nScope } from "@/i18n/I18nScope";
import { frForgotPassword } from "@/i18n/dictionaries/fr/pages/forgot-password";
import { pageMetadata } from "@/lib/i18n/tool-meta";

// noindex, like /forgot-password.
export const metadata = pageMetadata({
  englishPath: "/forgot-password",
  locale: "fr",
  title: "Mot de passe oublié",
  description:
    "Réinitialisez le mot de passe de votre compte oMyImage.",
  index: false,
  absoluteTitle: false,
});

export default function Page() {
  return (
    <I18nScope locale="fr" dict={frForgotPassword}>
      <ForgotPasswordForm />
    </I18nScope>
  );
}

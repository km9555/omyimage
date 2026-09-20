import { ForgotPasswordForm } from "@/app/forgot-password/ForgotPasswordForm";
import { I18nScope } from "@/i18n/I18nScope";
import { ptForgotPassword } from "@/i18n/dictionaries/pt/pages/forgot-password";
import { pageMetadata } from "@/lib/i18n/tool-meta";

// noindex, like /forgot-password.
export const metadata = pageMetadata({
  englishPath: "/forgot-password",
  locale: "pt",
  title: "Esqueci a senha",
  description: "Redefina a senha da sua conta do oMyImage.",
  index: false,
  absoluteTitle: false,
});

export default function Page() {
  return (
    <I18nScope locale="pt" dict={ptForgotPassword}>
      <ForgotPasswordForm />
    </I18nScope>
  );
}

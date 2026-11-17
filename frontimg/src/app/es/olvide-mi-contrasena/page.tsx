import { ForgotPasswordForm } from "@/app/forgot-password/ForgotPasswordForm";
import { I18nScope } from "@/i18n/I18nScope";
import { esForgotPassword } from "@/i18n/dictionaries/es/pages/forgot-password";
import { pageMetadata } from "@/lib/i18n/tool-meta";

// noindex, like /forgot-password.
export const metadata = pageMetadata({
  englishPath: "/forgot-password",
  locale: "es",
  title: "Olvidé mi contraseña",
  description:
    "Restablece la contraseña de tu cuenta de oMyImage.",
  index: false,
  absoluteTitle: false,
});

export default function Page() {
  return (
    <I18nScope locale="es" dict={esForgotPassword}>
      <ForgotPasswordForm />
    </I18nScope>
  );
}

import { ForgotPasswordForm } from "@/app/forgot-password/ForgotPasswordForm";
import { I18nScope } from "@/i18n/I18nScope";
import { idForgotPassword } from "@/i18n/dictionaries/id/pages/forgot-password";
import { pageMetadata } from "@/lib/i18n/tool-meta";

// noindex, like /forgot-password.
export const metadata = pageMetadata({
  englishPath: "/forgot-password",
  locale: "id",
  title: "Lupa Kata Sandi",
  description: "Atur ulang kata sandi akun oMyImage Anda.",
  index: false,
  absoluteTitle: false,
});

export default function Page() {
  return (
    <I18nScope locale="id" dict={idForgotPassword}>
      <ForgotPasswordForm />
    </I18nScope>
  );
}

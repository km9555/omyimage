import { ForgotPasswordForm } from "@/app/forgot-password/ForgotPasswordForm";
import { I18nScope } from "@/i18n/I18nScope";
import { ruForgotPassword } from "@/i18n/dictionaries/ru/pages/forgot-password";
import { pageMetadata } from "@/lib/i18n/tool-meta";

// noindex, like /forgot-password.
export const metadata = pageMetadata({
  englishPath: "/forgot-password",
  locale: "ru",
  title: "Забыли пароль",
  description: "Сбросьте пароль от своего аккаунта oMyImage.",
  index: false,
  absoluteTitle: false,
});

export default function Page() {
  return (
    <I18nScope locale="ru" dict={ruForgotPassword}>
      <ForgotPasswordForm />
    </I18nScope>
  );
}

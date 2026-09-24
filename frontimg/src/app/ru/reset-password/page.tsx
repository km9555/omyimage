import { Suspense } from "react";
import { ResetPasswordForm } from "@/app/reset-password/ResetPasswordForm";
import { I18nScope } from "@/i18n/I18nScope";
import { ruResetPassword } from "@/i18n/dictionaries/ru/pages/reset-password";
import { pageMetadata } from "@/lib/i18n/tool-meta";

// noindex, like /reset-password.
export const metadata = pageMetadata({
  englishPath: "/reset-password",
  locale: "ru",
  title: "Сброс пароля",
  description: "Задайте новый пароль для своего аккаунта oMyImage.",
  index: false,
  absoluteTitle: false,
});

// Suspense is required: ResetPasswordForm reads ?token via useSearchParams(),
// which `output: "export"` rejects outside one.
export default function Page() {
  return (
    <Suspense>
      <I18nScope locale="ru" dict={ruResetPassword}>
        <ResetPasswordForm />
      </I18nScope>
    </Suspense>
  );
}

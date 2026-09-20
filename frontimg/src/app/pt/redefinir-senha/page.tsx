import { Suspense } from "react";
import { ResetPasswordForm } from "@/app/reset-password/ResetPasswordForm";
import { I18nScope } from "@/i18n/I18nScope";
import { ptResetPassword } from "@/i18n/dictionaries/pt/pages/reset-password";
import { pageMetadata } from "@/lib/i18n/tool-meta";

// noindex, like /reset-password.
export const metadata = pageMetadata({
  englishPath: "/reset-password",
  locale: "pt",
  title: "Redefinir senha",
  description: "Defina uma nova senha para a sua conta do oMyImage.",
  index: false,
  absoluteTitle: false,
});

// Suspense is required: ResetPasswordForm reads ?token via useSearchParams(),
// which `output: "export"` rejects outside one.
export default function Page() {
  return (
    <Suspense>
      <I18nScope locale="pt" dict={ptResetPassword}>
        <ResetPasswordForm />
      </I18nScope>
    </Suspense>
  );
}

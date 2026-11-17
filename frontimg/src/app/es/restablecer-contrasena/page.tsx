import { Suspense } from "react";
import { ResetPasswordForm } from "@/app/reset-password/ResetPasswordForm";
import { I18nScope } from "@/i18n/I18nScope";
import { esResetPassword } from "@/i18n/dictionaries/es/pages/reset-password";
import { pageMetadata } from "@/lib/i18n/tool-meta";

// noindex, like /reset-password.
export const metadata = pageMetadata({
  englishPath: "/reset-password",
  locale: "es",
  title: "Restablecer contraseña",
  description:
    "Define una nueva contraseña para tu cuenta de oMyImage.",
  index: false,
  absoluteTitle: false,
});

// Suspense is required: ResetPasswordForm reads ?token via useSearchParams(),
// which `output: "export"` rejects outside one.
export default function Page() {
  return (
    <Suspense>
      <I18nScope locale="es" dict={esResetPassword}>
        <ResetPasswordForm />
      </I18nScope>
    </Suspense>
  );
}

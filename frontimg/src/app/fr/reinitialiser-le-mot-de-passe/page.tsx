import { Suspense } from "react";
import { ResetPasswordForm } from "@/app/reset-password/ResetPasswordForm";
import { I18nScope } from "@/i18n/I18nScope";
import { frResetPassword } from "@/i18n/dictionaries/fr/pages/reset-password";
import { pageMetadata } from "@/lib/i18n/tool-meta";

// noindex, like /reset-password.
export const metadata = pageMetadata({
  englishPath: "/reset-password",
  locale: "fr",
  title: "Réinitialiser le mot de passe",
  description:
    "Choisissez un nouveau mot de passe pour votre compte oMyImage.",
  index: false,
  absoluteTitle: false,
});

// Suspense is required: ResetPasswordForm reads ?token via useSearchParams(),
// which `output: "export"` rejects outside one.
export default function Page() {
  return (
    <Suspense>
      <I18nScope locale="fr" dict={frResetPassword}>
        <ResetPasswordForm />
      </I18nScope>
    </Suspense>
  );
}

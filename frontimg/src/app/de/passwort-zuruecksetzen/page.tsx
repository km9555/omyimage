import { Suspense } from "react";
import { ResetPasswordForm } from "@/app/reset-password/ResetPasswordForm";
import { I18nScope } from "@/i18n/I18nScope";
import { deResetPassword } from "@/i18n/dictionaries/de/pages/reset-password";
import { pageMetadata } from "@/lib/i18n/tool-meta";

// noindex, like /reset-password.
export const metadata = pageMetadata({
  englishPath: "/reset-password",
  locale: "de",
  title: "Passwort zurücksetzen",
  description:
    "Legen Sie ein neues Passwort für Ihr oMyImage-Konto fest.",
  index: false,
  absoluteTitle: false,
});

// Suspense is required: ResetPasswordForm reads ?token via useSearchParams(),
// which `output: "export"` rejects outside one.
export default function Page() {
  return (
    <Suspense>
      <I18nScope locale="de" dict={deResetPassword}>
        <ResetPasswordForm />
      </I18nScope>
    </Suspense>
  );
}

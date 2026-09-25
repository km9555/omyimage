import { Suspense } from "react";
import { ResetPasswordForm } from "@/app/reset-password/ResetPasswordForm";
import { I18nScope } from "@/i18n/I18nScope";
import { idResetPassword } from "@/i18n/dictionaries/id/pages/reset-password";
import { pageMetadata } from "@/lib/i18n/tool-meta";

// noindex, like /reset-password.
export const metadata = pageMetadata({
  englishPath: "/reset-password",
  locale: "id",
  title: "Atur Ulang Kata Sandi",
  description: "Buat kata sandi baru untuk akun oMyImage Anda.",
  index: false,
  absoluteTitle: false,
});

// Suspense is required: ResetPasswordForm reads ?token via useSearchParams(),
// which `output: "export"` rejects outside one.
export default function Page() {
  return (
    <Suspense>
      <I18nScope locale="id" dict={idResetPassword}>
        <ResetPasswordForm />
      </I18nScope>
    </Suspense>
  );
}

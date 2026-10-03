import { Suspense } from "react";
import { ResetPasswordForm } from "@/app/reset-password/ResetPasswordForm";
import { I18nScope } from "@/i18n/I18nScope";
import { hiResetPassword } from "@/i18n/dictionaries/hi/pages/reset-password";
import { pageMetadata } from "@/lib/i18n/tool-meta";

// noindex, like /reset-password.
export const metadata = pageMetadata({
  englishPath: "/reset-password",
  locale: "hi",
  title: "पासवर्ड रीसेट करें",
  description: "अपने oMyImage खाते के लिए नया पासवर्ड तय करें।",
  index: false,
  absoluteTitle: false,
});

// Suspense is required: ResetPasswordForm reads ?token via useSearchParams(),
// which `output: "export"` rejects outside one.
export default function Page() {
  return (
    <Suspense>
      <I18nScope locale="hi" dict={hiResetPassword}>
        <ResetPasswordForm />
      </I18nScope>
    </Suspense>
  );
}

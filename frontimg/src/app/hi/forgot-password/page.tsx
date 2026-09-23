import { ForgotPasswordForm } from "@/app/forgot-password/ForgotPasswordForm";
import { I18nScope } from "@/i18n/I18nScope";
import { hiForgotPassword } from "@/i18n/dictionaries/hi/pages/forgot-password";
import { pageMetadata } from "@/lib/i18n/tool-meta";

// noindex, like /forgot-password.
export const metadata = pageMetadata({
  englishPath: "/forgot-password",
  locale: "hi",
  title: "पासवर्ड भूल गए",
  description: "अपने oMyImage खाते का पासवर्ड रीसेट करें।",
  index: false,
  absoluteTitle: false,
});

export default function Page() {
  return (
    <I18nScope locale="hi" dict={hiForgotPassword}>
      <ForgotPasswordForm />
    </I18nScope>
  );
}

import { Suspense } from "react";
import { SignupForm } from "@/app/signup/SignupForm";
import { I18nScope } from "@/i18n/I18nScope";
import { idSignup } from "@/i18n/dictionaries/id/pages/signup";
import { pageMetadata } from "@/lib/i18n/tool-meta";

// noindex, like /signup.
export const metadata = pageMetadata({
  englishPath: "/signup",
  locale: "id",
  title: "Daftar",
  description: "Buat akun gratis di oMyImage.",
  index: false,
  absoluteTitle: false,
});

export default function Page() {
  return (
    <Suspense>
      <I18nScope locale="id" dict={idSignup}>
        <SignupForm />
      </I18nScope>
    </Suspense>
  );
}

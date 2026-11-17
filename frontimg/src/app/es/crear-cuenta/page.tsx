import { Suspense } from "react";
import { SignupForm } from "@/app/signup/SignupForm";
import { I18nScope } from "@/i18n/I18nScope";
import { esSignup } from "@/i18n/dictionaries/es/pages/signup";
import { pageMetadata } from "@/lib/i18n/tool-meta";

// noindex, like /signup.
export const metadata = pageMetadata({
  englishPath: "/signup",
  locale: "es",
  title: "Crear cuenta",
  description:
    "Crea una cuenta gratis en oMyImage.",
  index: false,
  absoluteTitle: false,
});

export default function Page() {
  return (
    <Suspense>
      <I18nScope locale="es" dict={esSignup}>
        <SignupForm />
      </I18nScope>
    </Suspense>
  );
}

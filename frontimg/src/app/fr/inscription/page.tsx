import { Suspense } from "react";
import { SignupForm } from "@/app/signup/SignupForm";
import { I18nScope } from "@/i18n/I18nScope";
import { frSignup } from "@/i18n/dictionaries/fr/pages/signup";
import { pageMetadata } from "@/lib/i18n/tool-meta";

// noindex, like /signup.
export const metadata = pageMetadata({
  englishPath: "/signup",
  locale: "fr",
  title: "Créer un compte",
  description:
    "Créez un compte oMyImage gratuit.",
  index: false,
  absoluteTitle: false,
});

export default function Page() {
  return (
    <Suspense>
      <I18nScope locale="fr" dict={frSignup}>
        <SignupForm />
      </I18nScope>
    </Suspense>
  );
}

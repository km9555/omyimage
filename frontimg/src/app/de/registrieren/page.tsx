import { Suspense } from "react";
import { SignupForm } from "@/app/signup/SignupForm";
import { I18nScope } from "@/i18n/I18nScope";
import { deSignup } from "@/i18n/dictionaries/de/pages/signup";
import { pageMetadata } from "@/lib/i18n/tool-meta";

// noindex, like /signup.
export const metadata = pageMetadata({
  englishPath: "/signup",
  locale: "de",
  title: "Konto erstellen",
  description:
    "Erstellen Sie ein kostenloses oMyImage-Konto.",
  index: false,
  absoluteTitle: false,
});

export default function Page() {
  return (
    <Suspense>
      <I18nScope locale="de" dict={deSignup}>
        <SignupForm />
      </I18nScope>
    </Suspense>
  );
}

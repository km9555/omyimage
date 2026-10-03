import { Suspense } from "react";
import { SignupForm } from "@/app/signup/SignupForm";
import { I18nScope } from "@/i18n/I18nScope";
import { hiSignup } from "@/i18n/dictionaries/hi/pages/signup";
import { pageMetadata } from "@/lib/i18n/tool-meta";

// noindex, like /signup.
export const metadata = pageMetadata({
  englishPath: "/signup",
  locale: "hi",
  title: "खाता बनाएँ",
  description: "oMyImage पर मुफ़्त खाता बनाएँ।",
  index: false,
  absoluteTitle: false,
});

export default function Page() {
  return (
    <Suspense>
      <I18nScope locale="hi" dict={hiSignup}>
        <SignupForm />
      </I18nScope>
    </Suspense>
  );
}

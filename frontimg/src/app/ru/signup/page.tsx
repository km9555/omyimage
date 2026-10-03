import { Suspense } from "react";
import { SignupForm } from "@/app/signup/SignupForm";
import { I18nScope } from "@/i18n/I18nScope";
import { ruSignup } from "@/i18n/dictionaries/ru/pages/signup";
import { pageMetadata } from "@/lib/i18n/tool-meta";

// noindex, like /signup.
export const metadata = pageMetadata({
  englishPath: "/signup",
  locale: "ru",
  title: "Регистрация",
  description: "Создайте бесплатный аккаунт на oMyImage.",
  index: false,
  absoluteTitle: false,
});

export default function Page() {
  return (
    <Suspense>
      <I18nScope locale="ru" dict={ruSignup}>
        <SignupForm />
      </I18nScope>
    </Suspense>
  );
}

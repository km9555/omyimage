import { Suspense } from "react";
import { SignupForm } from "@/app/signup/SignupForm";
import { I18nScope } from "@/i18n/I18nScope";
import { ptSignup } from "@/i18n/dictionaries/pt/pages/signup";
import { pageMetadata } from "@/lib/i18n/tool-meta";

// noindex, like /signup.
export const metadata = pageMetadata({
  englishPath: "/signup",
  locale: "pt",
  title: "Criar conta",
  description: "Crie uma conta grátis no oMyImage.",
  index: false,
  absoluteTitle: false,
});

export default function Page() {
  return (
    <Suspense>
      <I18nScope locale="pt" dict={ptSignup}>
        <SignupForm />
      </I18nScope>
    </Suspense>
  );
}

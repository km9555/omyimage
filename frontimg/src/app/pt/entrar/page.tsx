import { Suspense } from "react";
import { LoginForm } from "@/app/login/LoginForm";
import { I18nScope } from "@/i18n/I18nScope";
import { ptLogin } from "@/i18n/dictionaries/pt/pages/login";
import { pageMetadata } from "@/lib/i18n/tool-meta";

// noindex, like /login: a sign-in form has nothing to offer a search visitor.
export const metadata = pageMetadata({
  englishPath: "/login",
  locale: "pt",
  title: "Entrar",
  description: "Entre na sua conta do oMyImage.",
  index: false,
  absoluteTitle: false,
});

// Suspense is required, not cosmetic: LoginForm calls useSearchParams(), and
// `output: "export"` fails the build for a page that does so outside one.
export default function Page() {
  return (
    <Suspense>
      <I18nScope locale="pt" dict={ptLogin}>
        <LoginForm />
      </I18nScope>
    </Suspense>
  );
}

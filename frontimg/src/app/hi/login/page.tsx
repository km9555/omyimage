import { Suspense } from "react";
import { LoginForm } from "@/app/login/LoginForm";
import { I18nScope } from "@/i18n/I18nScope";
import { hiLogin } from "@/i18n/dictionaries/hi/pages/login";
import { pageMetadata } from "@/lib/i18n/tool-meta";

// noindex, like /login: a sign-in form has nothing to offer a search visitor.
export const metadata = pageMetadata({
  englishPath: "/login",
  locale: "hi",
  title: "लॉगिन",
  description: "अपने oMyImage खाते में लॉगिन करें।",
  index: false,
  absoluteTitle: false,
});

// Suspense is required, not cosmetic: LoginForm calls useSearchParams(), and
// `output: "export"` fails the build for a page that does so outside one.
export default function Page() {
  return (
    <Suspense>
      <I18nScope locale="hi" dict={hiLogin}>
        <LoginForm />
      </I18nScope>
    </Suspense>
  );
}

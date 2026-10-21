import { pageMetadata } from "@/lib/i18n/tool-meta";
import { Suspense } from "react";
import { LoginForm } from "./LoginForm";

// noindex: a sign-in form has nothing to offer a search visitor, and the tools
// — which are the thing worth ranking — never require one.
export const metadata = pageMetadata({
  englishPath: "/login",
  locale: "en",
  title: "Log in | oMyImage",
  description: "Log in to your oMyImage account.",
  index: false,
});

// Suspense is required, not cosmetic: LoginForm calls useSearchParams(), and
// `output: "export"` fails the build for a page that does so outside one.
export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}

import { pageMetadata } from "@/lib/i18n/tool-meta";
import { Suspense } from "react";
import { SignupForm } from "./SignupForm";

// noindex: a sign-up form has nothing to offer a search visitor, and the tools
// — which are the thing worth ranking — never require one.
export const metadata = pageMetadata({
  englishPath: "/signup",
  locale: "en",
  title: "Sign up | oMyImage",
  description: "Create a free oMyImage account.",
  index: false,
});

// Suspense is required, not cosmetic: SignupForm calls useSearchParams(), and
// `output: "export"` fails the build for a page that does so outside one.
export default function SignupPage() {
  return (
    <Suspense>
      <SignupForm />
    </Suspense>
  );
}

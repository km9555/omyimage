import type { Metadata } from "next";
import { pageAlternates } from "@/lib/i18n/tool-meta";
import { Suspense } from "react";
import { SignupForm } from "./SignupForm";

// noindex: a sign-up form has nothing to offer a search visitor, and the tools
// — which are the thing worth ranking — never require one.
const languages = pageAlternates("/signup");

export const metadata: Metadata = {
  title: "Sign up",
  description: "Create a free oMyImage account.",
  alternates: languages ? { canonical: "/signup", languages } : { canonical: "/signup" },
  robots: { index: false, follow: true },
};

// Suspense is required, not cosmetic: SignupForm calls useSearchParams(), and
// `output: "export"` fails the build for a page that does so outside one.
export default function SignupPage() {
  return (
    <Suspense>
      <SignupForm />
    </Suspense>
  );
}

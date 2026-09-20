import type { Metadata } from "next";
import { pageAlternates } from "@/lib/i18n/tool-meta";
import { Suspense } from "react";
import { LoginForm } from "./LoginForm";

// noindex: a sign-in form has nothing to offer a search visitor, and the tools
// — which are the thing worth ranking — never require one.
const languages = pageAlternates("/login");

export const metadata: Metadata = {
  title: "Log in",
  description: "Log in to your oMyImage account.",
  alternates: languages ? { canonical: "/login", languages } : { canonical: "/login" },
  robots: { index: false, follow: true },
};

// Suspense is required, not cosmetic: LoginForm calls useSearchParams(), and
// `output: "export"` fails the build for a page that does so outside one.
export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}

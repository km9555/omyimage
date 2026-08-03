import type { Metadata } from "next";
import { AccountsComingSoon } from "@/components/AccountsComingSoon";

// noindex: there is nothing to sign in to yet, so this shouldn't attract search
// traffic to a dead end. Remove `robots` when accounts actually launch.
export const metadata: Metadata = {
  title: "Sign in",
  description: "Accounts are coming soon to oMyImage. Every tool works today without one.",
  alternates: { canonical: "/login" },
  robots: { index: false, follow: true },
};

export default function LoginPage() {
  return <AccountsComingSoon mode="login" />;
}

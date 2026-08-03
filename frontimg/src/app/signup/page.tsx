import type { Metadata } from "next";
import { AccountsComingSoon } from "@/components/AccountsComingSoon";

// noindex: there is nothing to sign up for yet, so this shouldn't attract search
// traffic to a dead end. Remove `robots` when accounts actually launch.
export const metadata: Metadata = {
  title: "Sign up",
  description: "Accounts are coming soon to oMyImage. Every tool works today without one.",
  alternates: { canonical: "/signup" },
  robots: { index: false, follow: true },
};

export default function SignupPage() {
  return <AccountsComingSoon mode="signup" />;
}

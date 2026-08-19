import type { Metadata } from "next";
import { AccountClient } from "./AccountClient";

// noindex: signed-in surface, nothing here for a search visitor.
export const metadata: Metadata = {
  title: "My Account",
  description: "Manage your oMyImage account.",
  robots: { index: false, follow: false },
};

export default function AccountPage() {
  return <AccountClient />;
}

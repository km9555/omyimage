import type { Metadata } from "next";
import { DashboardClient } from "./DashboardClient";

// noindex: signed-in surface, nothing here for a search visitor.
export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your oMyImage dashboard.",
  robots: { index: false, follow: false },
};

export default function DashboardPage() {
  return <DashboardClient />;
}

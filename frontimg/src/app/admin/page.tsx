import type { Metadata } from "next";
import { AdminHomeClient } from "./AdminHomeClient";

export const metadata: Metadata = {
  title: "Admin",
  description: "oMyImage admin console.",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <AdminHomeClient />;
}

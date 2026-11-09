import type { Metadata } from "next";
import { AdminTrafficClient } from "./AdminTrafficClient";

export const metadata: Metadata = {
  title: "Traffic — Admin",
  description: "Daily visitors, pages, sources and countries.",
  robots: { index: false, follow: false },
};

export default function AdminTrafficPage() {
  return <AdminTrafficClient />;
}

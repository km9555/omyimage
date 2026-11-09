import type { Metadata } from "next";
import { Suspense } from "react";
import { AdminBillingClient } from "./AdminBillingClient";

export const metadata: Metadata = {
  title: "Billing — Admin",
  description: "Plans, renewals, revenue and manual grants.",
  robots: { index: false, follow: false },
};

export default function AdminBillingPage() {
  // The client reads ?user=<id> with useSearchParams. Under `output: "export"`
  // that must sit inside a Suspense boundary or the production build fails with
  // "Missing Suspense boundary with useSearchParams".
  return (
    <Suspense fallback={<div className="min-h-[calc(100vh-4rem)]" />}>
      <AdminBillingClient />
    </Suspense>
  );
}

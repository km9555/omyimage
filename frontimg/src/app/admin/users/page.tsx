import type { Metadata } from "next";
import { Suspense } from "react";
import { AdminUsersClient } from "./AdminUsersClient";

export const metadata: Metadata = {
  title: "Users — Admin",
  description: "Registered oMyImage accounts.",
  robots: { index: false, follow: false },
};

export default function AdminUsersPage() {
  // The list keeps its page, filters and open user in the query string, read
  // with useSearchParams — which under `output: "export"` must sit inside a
  // Suspense boundary or the production build fails.
  return (
    <Suspense fallback={<div className="min-h-[calc(100vh-4rem)]" />}>
      <AdminUsersClient />
    </Suspense>
  );
}

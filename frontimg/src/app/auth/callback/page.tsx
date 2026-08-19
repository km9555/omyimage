import type { Metadata } from "next";
import { Suspense } from "react";
import { CallbackClient } from "./CallbackClient";

export const metadata: Metadata = {
  title: "Signing in",
  robots: { index: false, follow: false },
};

export default function AuthCallbackPage() {
  return (
    <Suspense>
      <CallbackClient />
    </Suspense>
  );
}

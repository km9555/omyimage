"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { Logo } from "@/components/Logo";
import { useAuth } from "@/lib/auth/useAuth";

/**
 * Handles redirects from:
 *   - Google OAuth  → backend issues JWT → ?token=JWT&redirect=PATH
 *   - Email verify  → backend verifies   → ?token=JWT&message=verified
 *
 * Reads the token from the URL, saves it, then routes the user onward.
 */
export function CallbackClient() {
  const router = useRouter();
  const params = useSearchParams();
  const { saveAndLoad } = useAuth();
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const token = params.get("token");
    const error = params.get("error");
    const redirect = params.get("redirect") || "/";
    const message = params.get("message");

    if (error || !token) {
      setFailed(true);
      const t = setTimeout(() => router.replace("/login"), 1800);
      return () => clearTimeout(t);
    }

    saveAndLoad(token).then(() => {
      // Toasts live in the root layout, so this survives the redirect below.
      if (message === "verified") {
        toast.success("Email verified — welcome to oMyImage!");
      }
      router.replace(redirect);
    }).catch(() => {
      setFailed(true);
      const t = setTimeout(() => router.replace("/login"), 1800);
      return () => clearTimeout(t);
    });
  // Runs once on mount: the token is read from the URL as it was at landing,
  // and re-running on a params change would re-save a token we just consumed.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-[calc(100dvh-4rem)] flex flex-col items-center justify-center gap-4 px-margin-mobile text-center">
      <Logo className="h-10 w-10" />
      {failed ? (
        <p className="text-body-md text-on-surface-variant">Sign-in failed. Redirecting…</p>
      ) : (
        <p className="inline-flex items-center gap-2 text-body-md text-on-surface-variant">
          <Icon name="progress_activity" className="animate-spin text-[20px]" />
          Signing you in…
        </p>
      )}
    </div>
  );
}

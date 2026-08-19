"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "./useAuth";

/**
 * Client-side route guard. The site is a static export with no middleware and
 * no server runtime, so gating has to happen after hydration: once the initial
 * session check resolves, signed-out visitors are sent to /login?redirect=<path>.
 * Returns the auth state so the page can render a loader while `loading`.
 *
 * Nothing uses this yet — oMyImage's tools are all free and anonymous, and
 * there are no account-only pages. It ships now because the first such page
 * should not have to reinvent the guard.
 */
export function useRequireAuth() {
  const auth = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (auth.loading) return;
    if (!auth.user) {
      const redirect = encodeURIComponent(pathname || "/");
      router.replace(`/login?redirect=${redirect}`);
    }
  }, [auth.loading, auth.user, pathname, router]);

  return auth;
}

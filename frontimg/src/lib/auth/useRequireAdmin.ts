"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "./useAuth";

/**
 * Client-side admin guard for static export (no middleware), layered on top of
 * useRequireAuth's behaviour: signed-out users go to /login, signed-in
 * non-admins stay put and get an "Admins only" panel from the caller.
 *
 * `isAdmin` is driven by profiles.role via /api/image/auth/me (which also folds
 * in the ADMIN_EMAILS allowlist). This is a UX gate only; the backend 403 from
 * requireImageAdmin is the real one.
 */
export function useRequireAdmin() {
  const auth = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (auth.loading) return;
    if (!auth.user) {
      const redirect = encodeURIComponent(pathname || "/admin/blog");
      router.replace(`/login?redirect=${redirect}`);
    }
  }, [auth.loading, auth.user, pathname, router]);

  return { ...auth, isAdmin: auth.profile?.role === "admin" };
}

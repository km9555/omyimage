"use client";

import { Icon } from "@/components/Icon";
import type { AuthUser } from "@/lib/auth/AuthProvider";

/**
 * Shared loading / not-authorized shell for the admin pages, so all of them
 * refuse identically. This is a UX gate — every /api/image/admin/* endpoint enforces
 * the real one and returns 403 regardless of what renders here.
 */
export function AdminGate({
  loading,
  user,
  isAdmin,
  children,
}: {
  loading: boolean;
  user: AuthUser | null;
  isAdmin: boolean;
  children: React.ReactNode;
}) {
  // While loading, and in the moment before useRequireAdmin's redirect fires for
  // a signed-out visitor, show the spinner rather than flashing "Admins only".
  if (loading || !user) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <Icon name="progress_activity" className="animate-spin text-[28px] text-on-surface-variant" />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="max-w-content mx-auto px-margin-mobile md:px-gutter py-24 text-center flex flex-col items-center gap-3">
        <Icon name="lock" className="text-4xl text-on-surface-variant" />
        <h1 className="text-headline-md font-bold text-primary">Admins only</h1>
        <p className="text-body-md text-on-surface-variant">
          Your account doesn&apos;t have access to the admin area.
        </p>
      </div>
    );
  }

  return <>{children}</>;
}

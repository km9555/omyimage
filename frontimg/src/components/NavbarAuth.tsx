"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Icon } from "@/components/Icon";
import { useAuth } from "@/lib/auth/useAuth";

/**
 * The account control in the header: a Login button when signed out, an avatar
 * menu when signed in.
 *
 * The menu is deliberately short — email and Sign out. oMyImage has no
 * /account, /dashboard or /admin routes, and on a static export a link to a
 * path that doesn't exist is a hard 404 rather than a soft one. Add entries
 * here when the pages land, not before.
 *
 * Takes no className on purpose. Callers control visibility with a wrapper
 * element instead: appending "hidden md:inline-flex" to a base string that
 * already contains "inline-flex" is a same-specificity collision that
 * Tailwind's output order resolves, not the order of the class attribute —
 * and it resolved the wrong way, leaving this button visible on mobile next
 * to the drawer's copy of it.
 */
export function NavbarAuth() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  // Avoid a flash of the logged-out button during the initial session check.
  // The placeholder is the same size as the avatar so the header doesn't shift.
  if (loading) {
    return <span className="w-9 h-9 rounded-full bg-surface-container animate-pulse" aria-hidden="true" />;
  }

  if (!user) {
    return (
      <Link
        href="/login"
        className="inline-flex items-center justify-center gap-2 text-body-md bg-secondary text-on-secondary font-semibold px-4 py-2 rounded-lg shadow-md shadow-secondary/30 hover:bg-secondary-container hover:shadow-lg hover:shadow-secondary/40 hover:-translate-y-px transition-all duration-200"
      >
        <Icon name="login" className="text-[19px]" />
        Login
      </Link>
    );
  }

  const email = user.email ?? "Account";
  const initial = (user.name?.[0] ?? email[0] ?? "?").toUpperCase();

  const handleSignOut = () => {
    setOpen(false);
    signOut();
    router.replace("/");
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Account menu"
        className="flex items-center gap-2 rounded-full hover:opacity-90 transition-opacity"
      >
        <span className="w-9 h-9 rounded-full bg-secondary text-on-secondary flex items-center justify-center text-body-md font-semibold">
          {initial}
        </span>
        <Icon name="expand_more" className={`hidden md:block text-[20px] text-on-surface-variant transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-60 rounded-xl border border-surface-variant bg-surface-container-lowest ambient-shadow overflow-hidden z-50"
        >
          <div className="px-4 py-3 border-b border-surface-variant">
            <p className="text-label-sm font-label-sm text-on-surface-variant">Signed in as</p>
            <p className="text-body-md font-semibold text-primary truncate">{email}</p>
          </div>
          <button
            type="button"
            role="menuitem"
            onClick={handleSignOut}
            className="w-full flex items-center gap-3 px-4 py-3 text-body-md text-on-surface hover:bg-error-container hover:text-error transition-colors"
          >
            <Icon name="logout" className="text-[20px]" />
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}

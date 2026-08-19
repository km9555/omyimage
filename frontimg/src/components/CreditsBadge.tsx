"use client";

import Link from "next/link";
import { Icon } from "@/components/Icon";
import { usePremiumUsage } from "@/lib/premium-usage";

/**
 * "Credits today" pill — premium (server/AI) runs used vs the daily cap.
 *
 * Counts locally rather than calling an API: image routes are anonymous and
 * unmetered on the server, so there is no server-side count to read yet. The
 * counter itself lives in lib/premium-usage.ts, shared with the dashboard;
 * swapping it for a server-backed hook is a change to that file alone.
 *
 * Styled with the amber chip tokens (a calm counter, not the gold CTA).
 */

export function CreditsBadge({ compact = false, className = "" }: { compact?: boolean; className?: string }) {
  const { used, limit, unlimited, ready } = usePremiumUsage();

  const base =
    "inline-flex items-center gap-1.5 rounded-lg border border-chip-amber-border bg-chip-amber-bg text-chip-amber-ink transition-opacity hover:opacity-90";

  // Count still loading → subtle placeholder (keeps layout stable).
  if (!ready) {
    return (
      <span
        aria-hidden="true"
        className={`${base} ${compact ? "h-9 px-2.5" : "h-10 px-3"} animate-pulse ${className}`}
      >
        <Icon name="toll" className="text-[16px]" />
        <span className="text-[13px] font-bold leading-none">—</span>
      </span>
    );
  }

  const value = unlimited ? "∞" : `${used}/${limit}`;
  const label = unlimited ? "Unlimited credits" : `${used} of ${limit} premium runs used today`;

  return (
    <Link
      href="/pricing"
      aria-label={label}
      title={label}
      className={`${base} ${compact ? "h-9 px-2.5" : "h-10 px-3"} ${className}`}
    >
      <Icon name="toll" className="text-[16px] shrink-0" fill />
      {compact ? (
        <span className="text-[13px] font-bold leading-none">{value}</span>
      ) : (
        <span className="flex flex-col leading-none">
          <span className="text-[13px] font-bold">{value}</span>
          <span className="text-[9px] font-semibold uppercase tracking-wide opacity-80">credits</span>
        </span>
      )}
    </Link>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/Icon";

/**
 * "Credits today" pill — premium (server/AI) runs used vs the daily cap.
 *
 * NOT MOUNTED YET. oMyImage has no auth or billing layer, so this counts
 * locally instead of calling an API. It is wired up and styled so that the day
 * billing lands, `useLocalPremiumUsage` can be swapped for a real hook with no
 * changes to the markup — see Navbar.tsx for where to enable it.
 *
 * Styled with the amber chip tokens (a calm counter, not the gold CTA).
 */

const STORAGE_KEY = "omyimage:premium-usage";
const FREE_DAILY_LIMIT = 10;

type Usage = { used: number; limit: number; unlimited: boolean; ready: boolean };

/** Reads today's local count. Same shape as a future server-backed hook. */
function useLocalPremiumUsage(): Usage {
  // `ready: false` on the first render keeps SSR and the client markup
  // identical — localStorage is only readable after mount.
  const [usage, setUsage] = useState<Usage>({
    used: 0,
    limit: FREE_DAILY_LIMIT,
    unlimited: false,
    ready: false,
  });

  useEffect(() => {
    let used = 0;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as { date?: string; count?: number };
        // Counts reset at local midnight; a stale date means a fresh day.
        if (parsed.date === new Date().toDateString()) used = parsed.count ?? 0;
      }
    } catch {
      /* unreadable or malformed storage → treat as a fresh day */
    }
    setUsage({ used, limit: FREE_DAILY_LIMIT, unlimited: false, ready: true });
  }, []);

  return usage;
}

export function CreditsBadge({ compact = false, className = "" }: { compact?: boolean; className?: string }) {
  const { used, limit, unlimited, ready } = useLocalPremiumUsage();

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

"use client";

import { useEffect, useState } from "react";
import { premiumDailyLimit } from "@/lib/plan-limits";

/**
 * Today's premium (server AI) run count.
 *
 * Extracted from CreditsBadge so the badge and the dashboard read one counter
 * rather than each keeping their own idea of it.
 *
 * Still LOCAL, deliberately. oMyImage's image routes are anonymous and
 * unmetered on the server — `/api/image/*` is mounted above the auth and plan
 * middleware precisely so image traffic never touches the database — so there
 * is no server-side count to read yet. This tracks the same number in
 * localStorage with the shape a server-backed hook would return, so swapping it
 * later is a change to this file alone.
 *
 * The consequence worth knowing: the count is per-device and trivially reset by
 * clearing storage. That is fine while nothing is actually enforced; it must not
 * be mistaken for a quota.
 */

const STORAGE_KEY = "omyimage:premium-usage";

export interface PremiumUsage {
  used: number;
  /** null = unlimited (Pro). */
  limit: number | null;
  unlimited: boolean;
  /** False until localStorage has been read — keeps SSR and client markup equal. */
  ready: boolean;
}

/** Read today's count without subscribing (for one-off reads). */
export function readPremiumUsedToday(): number {
  if (typeof localStorage === "undefined") return 0;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return 0;
    const parsed = JSON.parse(raw) as { date?: string; count?: number };
    // Counts reset at local midnight; a stale date means a fresh day.
    return parsed.date === new Date().toDateString() ? parsed.count ?? 0 : 0;
  } catch {
    // Unreadable or malformed storage → treat as a fresh day.
    return 0;
  }
}

/**
 * Today's usage against the given plan's allowance.
 *
 * Pass the signed-in user's plan; omit it for anonymous visitors, who get the
 * Free allowance.
 */
export function usePremiumUsage(plan?: string | null): PremiumUsage {
  const limit = premiumDailyLimit(plan);
  const [usage, setUsage] = useState<PremiumUsage>({
    used: 0,
    limit,
    unlimited: limit === null,
    ready: false,
  });

  useEffect(() => {
    setUsage({
      used: readPremiumUsedToday(),
      limit,
      unlimited: limit === null,
      ready: true,
    });
  }, [limit]);

  return usage;
}

"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { analyticsAllowed } from "@/lib/analytics-run";

/**
 * Counts a page view on each route change, for the admin console, once the
 * visitor has accepted analytics. Until then nothing is sent and the beacon
 * module isn't even downloaded. CookieBanner reloads the page when the choice
 * flips, the same way GoogleAnalytics picks up a new answer.
 */
export function AnalyticsBeacon() {
  const pathname = usePathname();

  useEffect(() => {
    // The admin console isn't site traffic.
    if (!pathname || pathname.startsWith("/admin") || !analyticsAllowed()) return;
    void import("@/lib/analytics")
      .then((m) => m.trackPageView(pathname))
      .catch(() => {});
  }, [pathname]);

  return null;
}

/**
 * The small, always-loaded half of the analytics beacon. Everything here checks
 * consent first; the real work in lib/analytics.ts (which pulls in the tool and
 * slug tables) is only fetched for a visitor who accepted analytics.
 */
import { getStoredConsent } from "@/lib/cookie-consent";

/** Same test GoogleAnalytics uses, so the two can never disagree. */
export function analyticsAllowed(): boolean {
  try {
    return getStoredConsent() === "accepted";
  } catch {
    return false; // storage blocked
  }
}

let lastServerJobAt = 0;
const SERVER_JOB_WINDOW_MS = 5 * 60 * 1000;

/** process-router calls this when the server finishes a job for this tab. */
export function noteServerJob(): void {
  lastServerJobAt = Date.now();
}

/**
 * Count one finished tool run. Called from the shared download helpers, so one
 * run is one event however the file was made; a recent server job marks it as a
 * server run. Never sends file names, contents or sizes.
 */
export function reportToolRun(surface?: "client" | "server"): void {
  if (typeof window === "undefined" || !analyticsAllowed()) return;
  const resolved = surface ?? (Date.now() - lastServerJobAt < SERVER_JOB_WINDOW_MS ? "server" : "client");
  void import("@/lib/analytics")
    .then((m) => m.trackRun(resolved))
    .catch(() => {});
}

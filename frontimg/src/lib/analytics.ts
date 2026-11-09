/**
 * First-party usage beacon behind the admin console's Traffic and Analytics
 * pages. Loaded only after a visitor accepts analytics (lib/analytics-run.ts and
 * components/AnalyticsBeacon.tsx), which is what the privacy page promises.
 *
 * Sends page paths, tool slugs and the referring host of the landing page. Never
 * file names, contents or sizes. The server keeps a daily-rotating visitor hash
 * and clears it after 48 hours (backend lib/traffic.ts).
 */
import { SITE } from "@/lib/site";
import { getStoredToken } from "@/lib/api";
import { localeFromPath, stripLocalePrefix } from "@/i18n/config";
import { toolIdFromSlug } from "@/i18n/slugs";
import { TOOLS_BY_ID } from "@/lib/tools";

type TrackEvent =
  | { type: "visit" | "run"; tool: string; surface?: "client" | "server" }
  | { type: "pageview"; path: string; ref?: string };

let queue: TrackEvent[] = [];
let flushTimer: ReturnType<typeof setTimeout> | null = null;

function flush() {
  if (flushTimer) { clearTimeout(flushTimer); flushTimer = null; }
  if (typeof window === "undefined" || queue.length === 0) return;
  const events = queue;
  queue = [];
  const url = `${SITE.backendUrl}/api/image/events`;
  const token = getStoredToken();
  const body = JSON.stringify({ events });
  try {
    // text/plain needs no CORS preflight, and sendBeacon survives page unload.
    if (!token && typeof navigator.sendBeacon === "function") {
      navigator.sendBeacon(url, new Blob([body], { type: "text/plain;charset=UTF-8" }));
      return;
    }
    // Signed in: the token attributes the run to the account, and lets the
    // server leave admins out of the numbers.
    void fetch(url, {
      method: "POST",
      keepalive: true,
      headers: { "Content-Type": "application/json", ...(token ? { Authorization: `Bearer ${token}` } : {}) },
      body,
    }).catch(() => {});
  } catch {
    /* never let analytics throw into the app */
  }
}

function track(ev: TrackEvent) {
  if (typeof window === "undefined") return;
  queue.push(ev);
  if (queue.length >= 10) { flush(); return; }
  if (!flushTimer) flushTimer = setTimeout(flush, 1200);
}

let sentFirstView = false;
let lastViewPath: string | null = null;

/** One view per route change, with the external referrer on the first only. */
export function trackPageView(path: string) {
  if (typeof window === "undefined" || navigator.webdriver) return;
  if (path === lastViewPath) return;
  lastViewPath = path;
  let ref: string | undefined;
  if (!sentFirstView) {
    sentFirstView = true;
    try {
      const host = document.referrer ? new URL(document.referrer).hostname : "";
      if (host && host !== window.location.hostname) ref = host;
    } catch { /* malformed referrer: count the view without it */ }
  }
  track({ type: "pageview", path, ...(ref ? { ref } : {}) });
  const tool = canonicalToolSlug(path);
  if (tool) track({ type: "visit", tool });
}

/** The English tool slug for a path in any locale, or null for non-tool pages. */
export function canonicalToolSlug(pathname?: string): string | null {
  const path = pathname ?? (typeof window === "undefined" ? null : window.location.pathname);
  if (!path) return null;
  const slug = stripLocalePrefix(path).replace(/^\/+/, "").replace(/\/+$/, "");
  if (!slug || slug.includes("/")) return null;
  const id = toolIdFromSlug(slug, localeFromPath(path));
  const tool = id ? TOOLS_BY_ID[id] : undefined;
  return tool && tool.status === "live" ? tool.slug : null;
}

export function trackRun(surface: "client" | "server") {
  const tool = canonicalToolSlug();
  if (tool) track({ type: "run", tool, surface });
}

if (typeof window !== "undefined") {
  window.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") flush();
  });
  window.addEventListener("pagehide", flush);
}

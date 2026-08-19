/**
 * Cookie consent storage. Ported from oMyPDF's `lib/cookie-consent.ts`, with
 * the storage keys renamed so the two sites never read each other's choice.
 *
 * Two keys are kept deliberately:
 *   • `omyimage_cookie_consent` — a binary accepted/declined flag. The pre-paint
 *     script in layout.tsx and GoogleAnalytics both read this, and the pre-paint
 *     script has to stay small enough to inline, so it reads a plain string
 *     rather than parsing JSON.
 *   • `omyimage_cookie_prefs`   — the granular per-category record.
 * `storePrefs` writes both, so they can never drift apart.
 */

export type CookieConsent = "accepted" | "declined";

/**
 * Fired by the footer's "Cookie Settings" link to reopen the banner. It lives
 * here rather than in CookieBanner so the footer link can import just the
 * constant without pulling the whole banner into its bundle.
 */
export const REOPEN_EVENT = "omyimage:reopen-cookie-banner";

/**
 * Granular consent per optional category. `necessary` is always on and so is
 * never stored. Only `analytics` currently gates a real script (GA4);
 * `advertising` and `functional` are recorded ahead of those being switched on,
 * so an existing visitor's choice is already on file when they are.
 */
export interface CookiePrefs {
  analytics: boolean;
  advertising: boolean;
  functional: boolean;
}

const KEY = "omyimage_cookie_consent";
const PREFS_KEY = "omyimage_cookie_prefs";

export function getStoredConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  const v = localStorage.getItem(KEY);
  if (v === "accepted" || v === "declined") return v;
  return null;
}

/** Full granular preferences, migrating an older binary choice if present. */
export function getStoredPrefs(): CookiePrefs | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(PREFS_KEY);
    if (raw) {
      const p = JSON.parse(raw);
      return { analytics: !!p.analytics, advertising: !!p.advertising, functional: !!p.functional };
    }
  } catch {
    /* corrupt JSON — fall through to the legacy binary flag */
  }
  const legacy = getStoredConsent();
  if (legacy === "accepted") return { analytics: true, advertising: true, functional: true };
  if (legacy === "declined") return { analytics: false, advertising: false, functional: false };
  return null;
}

/** Persist granular preferences and keep the binary analytics flag in sync. */
export function storePrefs(p: CookiePrefs): void {
  localStorage.setItem(PREFS_KEY, JSON.stringify(p));
  localStorage.setItem(KEY, p.analytics ? "accepted" : "declined");
}

/** Convenience for the binary Accept-all / Reject-all buttons. */
export function storeConsent(v: CookieConsent): void {
  storePrefs(
    v === "accepted"
      ? { analytics: true, advertising: true, functional: true }
      : { analytics: false, advertising: false, functional: false },
  );
}

export function clearConsent(): void {
  localStorage.removeItem(KEY);
  localStorage.removeItem(PREFS_KEY);
}

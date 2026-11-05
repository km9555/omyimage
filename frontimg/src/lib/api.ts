/**
 * Thin API client for the oMyImage account endpoints.
 *
 * The backend is the shared Express process on Contabo — the same one that
 * serves the image tools — but oMyImage's accounts live behind /api/image/auth
 * and in their own Postgres schema, entirely separate from oMyPDF's. A token
 * issued here is stamped with an "img" claim and is rejected by oMyPDF's
 * endpoints, and vice versa.
 */

import { SITE } from "@/lib/site";

/**
 * Deliberately not "omypdf_token". The two apps are different origins in
 * production so they could not collide anyway, but a shared name would invite
 * someone to copy a token between them — which the backend rejects, confusingly.
 */
export const TOKEN_KEY = "omyimage_token";

/** Every account endpoint hangs off here. See backend routes/image/auth.ts. */
export const AUTH_BASE = "/api/image/auth";

/** Fired on window when the server rejects the stored token (expired or revoked). */
export const AUTH_EXPIRED_EVENT = "omyimage:auth-expired";

/** Renewed-token response header set by the backend's sliding session (middleware/auth.ts). */
const RENEWED_TOKEN_HEADER = "X-Auth-Token";

/** A numeric claim of a JWT, or null if it can't be read. Not a signature check. */
function tokenClaim(token: string, claim: "exp" | "iat"): number | null {
  try {
    const part = token.split(".")[1];
    if (!part) return null;
    const json = atob(part.replace(/-/g, "+").replace(/_/g, "/"));
    const value = (JSON.parse(json) as Record<string, unknown>)[claim];
    return typeof value === "number" ? value : null;
  } catch {
    return null;
  }
}

/** Seconds-since-epoch `exp` of a JWT, or null if it can't be read. */
export function tokenExpiry(token: string): number | null {
  return tokenClaim(token, "exp");
}

/**
 * Whether a renewed token was really issued after the one we sent.
 *
 * GET /me carries an ETag, so the browser revalidates it; on a 304 it hands
 * fetch() the CACHED response's headers — including the X-Auth-Token of
 * whichever renewal happened to be stored, possibly weeks old. Taking that at
 * face value swaps the live token for a stale one, and after a password change
 * or "sign out of all devices" a revoked one, which signs this tab out on its
 * next request. apiFetch also sends `cache: "no-store"` so the replay cannot
 * happen there; this check covers every other caller of captureSession.
 */
function isNewer(renewed: string, sent: string): boolean {
  const renewedIat = tokenClaim(renewed, "iat");
  if (renewedIat === null) return false;
  const sentIat = tokenClaim(sent, "iat");
  return sentIat === null || renewedIat >= sentIat;
}

export function getStoredToken(): string | null {
  if (typeof window === "undefined") return null;
  let token: string | null = null;
  try {
    token = localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
  if (!token) return null;
  // Already past its expiry: drop it here so the UI never renders a signed-in
  // navbar for a session the server would reject anyway.
  const exp = tokenExpiry(token);
  if (exp !== null && exp * 1000 <= Date.now()) {
    clearToken();
    return null;
  }
  return token;
}

export function saveToken(token: string): void {
  try { localStorage.setItem(TOKEN_KEY, token); } catch { /* storage blocked */ }
}

export function clearToken(): void {
  try { localStorage.removeItem(TOKEN_KEY); } catch { /* storage blocked */ }
}

/**
 * Apply the session side effects of a backend response: store a renewed token,
 * or — when a request that carried a token comes back 401 — drop it and tell
 * AuthProvider the session is over. Call it on any raw fetch() to the backend
 * that sends the Authorization header; apiFetch does it already.
 */
export function captureSession(res: Response, sentToken: string | null, path = ""): void {
  const renewed = res.headers.get(RENEWED_TOKEN_HEADER);
  // Only while the token we sent is still the stored one: a response that
  // arrives after sign-out, or after another tab signed in, must not undo it.
  if (renewed && sentToken && getStoredToken() === sentToken && isNewer(renewed, sentToken)) {
    saveToken(renewed);
  }
  // /login answers 401 for a wrong password — that says nothing about a stored token.
  if (res.status === 401 && sentToken && !path.startsWith(`${AUTH_BASE}/login`)) {
    if (getStoredToken() === sentToken) clearToken();
    if (typeof window !== "undefined") window.dispatchEvent(new Event(AUTH_EXPIRED_EVENT));
  }
}

/** Current JWT for authenticating backend requests. */
export function getAccessToken(): string | null {
  return getStoredToken();
}

export function backendUrl(): string {
  return SITE.backendUrl;
}

export async function apiFetch(path: string, init?: RequestInit): Promise<Response> {
  const token = getStoredToken();
  try {
    const res = await fetch(`${backendUrl()}${path}`, {
      // Never the HTTP cache: these are per-account answers, and a revalidated
      // (304) response replays a stale X-Auth-Token header — see isNewer().
      cache: "no-store",
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...(init?.headers ?? {}),
      },
    });
    captureSession(res, token, path);
    return res;
  } catch {
    // Network-level failure (backend unreachable, e.g. no API server in local
    // dev) rejects with a TypeError *before* any Response. Surface it as a
    // normal 503 Response instead so callers handle it via `res.ok`/`res.json()`
    // and it never bubbles up as an unhandled "Failed to fetch" overlay.
    return new Response(JSON.stringify({ error: "Backend unreachable" }), {
      status: 503,
      headers: { "Content-Type": "application/json" },
    });
  }
}

/** `apiFetch` against an account endpoint, so callers don't repeat the prefix. */
export function authFetch(path: string, init?: RequestInit): Promise<Response> {
  return apiFetch(`${AUTH_BASE}${path}`, init);
}

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
const TOKEN_KEY = "omyimage_token";

/** Every account endpoint hangs off here. See backend routes/image/auth.ts. */
export const AUTH_BASE = "/api/image/auth";

export function getStoredToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY);
}

export function saveToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearToken(): void {
  localStorage.removeItem(TOKEN_KEY);
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
    return await fetch(`${backendUrl()}${path}`, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...(init?.headers ?? {}),
      },
    });
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

/**
 * Per-visitor tool preferences (recently used + favorites), persisted to
 * localStorage. Works with the static export — no server-side history yet.
 *
 * Keys store tool **slugs** (the same value used in URLs and by `getTool`),
 * validated on read so a renamed/removed tool can never break the UI.
 */
import { getTool } from "@/lib/tools";

const RECENT_KEY = "omyimage:recent-tools";
const FAV_KEY = "omyimage:fav-tools";
const MAX_RECENT = 8;

/** Fired on every write so open views update without a refresh. */
export const TOOL_PREFS_EVENT = "omyimage:tool-prefs";

function read(key: string): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((s): s is string => typeof s === "string" && !!getTool(s));
  } catch {
    return [];
  }
}

function write(key: string, value: string[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new Event(TOOL_PREFS_EVENT));
  } catch {
    /* quota / private mode — ignore */
  }
}

// ── Recently used ────────────────────────────────────────────────────────────

export function getRecentToolSlugs(): string[] {
  return read(RECENT_KEY);
}

export function recordToolVisit(slug: string): void {
  if (!getTool(slug)) return;
  const next = [slug, ...read(RECENT_KEY).filter((s) => s !== slug)].slice(0, MAX_RECENT);
  write(RECENT_KEY, next);
}

// ── Favorites ────────────────────────────────────────────────────────────────

export function getFavoriteToolSlugs(): string[] {
  return read(FAV_KEY);
}

export function isFavorite(slug: string): boolean {
  return read(FAV_KEY).includes(slug);
}

/** Toggle favorite state; returns the new state (true = now favorited). */
export function toggleFavorite(slug: string): boolean {
  if (!getTool(slug)) return false;
  const current = read(FAV_KEY);
  const has = current.includes(slug);
  write(FAV_KEY, has ? current.filter((s) => s !== slug) : [...current, slug]);
  return !has;
}

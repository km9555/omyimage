"use client";

import { useCallback, useEffect, useState } from "react";
import { getTool, type Tool } from "@/lib/tools";
import {
  TOOL_PREFS_EVENT,
  getFavoriteToolSlugs,
  getRecentToolSlugs,
  toggleFavorite as toggleFavoriteSlug,
} from "@/lib/tool-prefs";

/** Map a slug list to live Tool objects, dropping anything unknown/planned. */
function slugsToTools(slugs: string[]): Tool[] {
  return slugs.map((s) => getTool(s)).filter((t): t is Tool => !!t && t.status === "live");
}

/** Subscribe to tool-prefs changes (same tab + other tabs). */
function useToolPrefsSync(read: () => string[]): string[] {
  // Start empty so SSR markup matches the first client paint, then hydrate.
  const [slugs, setSlugs] = useState<string[]>([]);

  useEffect(() => {
    const refresh = () => setSlugs(read());
    refresh();
    window.addEventListener(TOOL_PREFS_EVENT, refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener(TOOL_PREFS_EVENT, refresh);
      window.removeEventListener("storage", refresh);
    };
    // `read` is a stable module function; intentionally not in deps.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return slugs;
}

export function useRecentTools(): Tool[] {
  const slugs = useToolPrefsSync(getRecentToolSlugs);
  return slugsToTools(slugs);
}

export function useFavoriteTools() {
  const slugs = useToolPrefsSync(getFavoriteToolSlugs);
  const favoriteSlugs = new Set(slugs);

  const isFavorite = useCallback((slug: string) => favoriteSlugs.has(slug), [slugs.join()]); // eslint-disable-line react-hooks/exhaustive-deps
  const toggle = useCallback((slug: string) => toggleFavoriteSlug(slug), []);

  return { favorites: slugsToTools(slugs), favoriteSlugs, isFavorite, toggle };
}

/**
 * Grid-vs-list preference for the file tray, persisted per visitor.
 *
 * Lives next to `tool-prefs.ts` and reuses its change event, so two trays on
 * the same page (or a tray and a future sidebar) stay in step without a
 * context provider. Same localStorage-only story as tool-prefs: this is a
 * static export, there is no server-side profile to sync with.
 */
"use client";

import { useCallback, useEffect, useState } from "react";
import { TOOL_PREFS_EVENT } from "@/lib/tool-prefs";

export type ViewMode = "grid" | "list";

const KEY = "omyimage:file-view";
const DEFAULT: ViewMode = "grid";

function read(): ViewMode {
  if (typeof window === "undefined") return DEFAULT;
  try {
    return window.localStorage.getItem(KEY) === "list" ? "list" : DEFAULT;
  } catch {
    return DEFAULT;
  }
}

/**
 * Current view mode plus a setter that persists it.
 *
 * The initial state is the DEFAULT rather than the stored value on purpose:
 * `next build` prerenders these pages, so reading localStorage during render
 * would make the first client paint disagree with the server markup and React
 * would throw a hydration mismatch. The stored value is applied in an effect,
 * one frame later — invisible in practice because the tray only ever mounts
 * after the visitor has dropped a file.
 */
export function useViewMode(): [ViewMode, (next: ViewMode) => void] {
  const [view, setView] = useState<ViewMode>(DEFAULT);

  useEffect(() => {
    const refresh = () => setView(read());
    refresh();
    window.addEventListener(TOOL_PREFS_EVENT, refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener(TOOL_PREFS_EVENT, refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);

  const choose = useCallback((next: ViewMode) => {
    setView(next);
    try {
      window.localStorage.setItem(KEY, next);
      window.dispatchEvent(new Event(TOOL_PREFS_EVENT));
    } catch {
      /* quota / private mode — the choice still applies for this session */
    }
  }, []);

  return [view, choose];
}

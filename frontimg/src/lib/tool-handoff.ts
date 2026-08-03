/**
 * In-memory handoff of staged files from the homepage launcher straight into a
 * tool — no re-upload, no round-trip to disk.
 *
 * The site is a Next.js SPA, so client-side navigation keeps module state alive:
 * the launcher stashes the files here and `router.push`es to the target tool,
 * whose mount effect calls `useHandoff()` (one-shot — it clears on read). A full
 * page load or direct visit simply finds nothing pending → no-op.
 *
 * Kept deliberately tiny (one pending set, cleared on read) so stale image bytes
 * can't linger in memory.
 */

import { useEffect } from "react";

let pendingFiles: File[] | null = null;

/** Stash a set of files for the next tool the user opens. */
export function stashFiles(files: File[]): void {
  pendingFiles = files.length ? files : null;
}

/** Retrieve and clear the pending file set (one-shot). */
export function takeFiles(): File[] | null {
  const f = pendingFiles;
  pendingFiles = null;
  return f;
}

/** Peek without consuming (rarely needed). */
export function hasHandoff(): boolean {
  return pendingFiles !== null;
}

/**
 * Consume a pending handoff on mount and feed it into the tool's own file loader
 * (so the tool's normal validation still runs). A direct visit finds nothing →
 * no-op. Call this right after the tool's `addFiles`/`loadFile`/`onFiles` is
 * defined, and always above any early `return`.
 */
export function useHandoff(load: (files: File[]) => void): void {
  useEffect(() => {
    const fs = takeFiles();
    if (fs?.length) load(fs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

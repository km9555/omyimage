/**
 * Leaf helpers for describing a file — no imports, no side effects.
 *
 * These live apart from `raster.ts` on purpose. `raster.ts` pulls in
 * `process-router.ts` (the browser-vs-server routing tables), so a component
 * that only wants to print "2.4 MB" used to drag the whole image pipeline into
 * its chunk. `HomeLauncher` did exactly that, putting ~27 KB of decode/encode
 * and format-routing code on the home page's critical path for one label.
 *
 * `raster.ts` re-exports all three, so tools that legitimately need the engine
 * keep importing them from there and nothing else had to change.
 */

const EXT: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
  "image/bmp": "bmp",
  "image/avif": "avif",
};

/** File extension (no dot) for a mime type. */
export function mimeExt(mime: string): string {
  return EXT[mime] ?? "png";
}

export function formatBytes(n: number): string {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(0)} KB`;
  return `${(n / (1024 * 1024)).toFixed(2)} MB`;
}

/** Strip the extension from a filename. */
export function baseName(name: string): string {
  return name.replace(/\.[^./\\]+$/, "");
}

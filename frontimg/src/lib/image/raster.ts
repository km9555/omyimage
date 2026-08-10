/**
 * Shared client-side image raster engine for oMyImage.
 *
 * Decodes images with `createImageBitmap` (respecting EXIF orientation when
 * asked), applies optional resize / rotate / flip / background-flatten, and
 * exports to JPG, PNG or WEBP — all in the browser, no upload. Also provides
 * batch ZIP download.
 */

export type ExportMime = "image/jpeg" | "image/png" | "image/webp";

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

/** Decode a file to an ImageBitmap (EXIF-oriented by default). */
export function decodeBitmap(file: File, autoOrient = true): Promise<ImageBitmap> {
  return createImageBitmap(file, { imageOrientation: autoOrient ? "from-image" : "none" });
}

/**
 * Export a canvas to a Blob (quality applies to JPG/WEBP only).
 *
 * PNG here is always the browser's *lossless* deflate encode. That is the floor
 * every other PNG strategy has to beat — see `lib/image/png-compress.ts`, which
 * produces a quantized indexed PNG and falls back to this when it can't win.
 */
export async function canvasToBlob(
  canvas: HTMLCanvasElement,
  mime: ExportMime,
  quality?: number
): Promise<Blob> {
  const useQuality = mime !== "image/png";
  const blob = await new Promise<Blob | null>((res) =>
    canvas.toBlob(res, mime, useQuality ? quality : undefined)
  );
  if (!blob) throw new Error("Could not export the image.");
  return blob;
}

/** The smallest of several candidate encodings. Ties resolve to the earliest. */
export function smallest<T extends { blob: Blob }>(first: T, ...rest: T[]): T {
  let best = first;
  for (const c of rest) if (c.blob.size < best.blob.size) best = c;
  return best;
}

export interface RasterOptions {
  mime: ExportMime;
  /** 0–1, used for JPG/WEBP only. */
  quality?: number;
  /** Fill color drawn behind the image (flattens transparency). null = keep alpha. */
  background?: string | null;
  /** Output content size; the source is scaled to fit these dimensions. */
  resize?: { width: number; height: number };
  /** Clockwise rotation in degrees. */
  rotate?: number;
  flipH?: boolean;
  flipV?: boolean;
  /** Respect the file's EXIF orientation when decoding. */
  autoOrient?: boolean;
  /**
   * Request a CPU-backed canvas. Set this when you will call `getImageData` on
   * the result, so the read is a memcpy rather than a GPU readback stall.
   * Left off by default — the GPU-backed canvas is faster for encode-only work.
   */
  readback?: boolean;
}

export interface RasterResult {
  blob: Blob;
  width: number;
  height: number;
}

/**
 * Decode → (resize) → (rotate/flip) → flatten. Everything `rasterize` does
 * except the final encode, so callers that need the *pixels* (rather than a
 * Blob) can take the canvas — see `png-compress.ts`.
 */
export async function rasterizeToCanvas(
  file: File,
  opts: RasterOptions
): Promise<HTMLCanvasElement> {
  const bmp = await decodeBitmap(file, opts.autoOrient ?? false);

  // Content size after optional resize (before rotation).
  const w = Math.max(1, Math.round(opts.resize?.width ?? bmp.width));
  const h = Math.max(1, Math.round(opts.resize?.height ?? bmp.height));

  const deg = (((opts.rotate ?? 0) % 360) + 360) % 360;
  const rad = (deg * Math.PI) / 180;
  const sin = Math.abs(Math.sin(rad));
  const cos = Math.abs(Math.cos(rad));
  const cw = Math.max(1, Math.round(w * cos + h * sin));
  const ch = Math.max(1, Math.round(w * sin + h * cos));

  const canvas = document.createElement("canvas");
  canvas.width = cw;
  canvas.height = ch;
  const ctx = canvas.getContext("2d", opts.readback ? { willReadFrequently: true } : undefined);
  if (!ctx) {
    bmp.close();
    throw new Error("Canvas is not supported in this browser.");
  }

  // JPG cannot store transparency — always flatten onto a background.
  const bg = opts.mime === "image/jpeg" ? opts.background ?? "#ffffff" : opts.background;
  if (bg) {
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, cw, ch);
  }

  ctx.imageSmoothingQuality = "high";
  ctx.translate(cw / 2, ch / 2);
  if (rad) ctx.rotate(rad);
  ctx.scale(opts.flipH ? -1 : 1, opts.flipV ? -1 : 1);
  ctx.drawImage(bmp, -w / 2, -h / 2, w, h);
  bmp.close();

  return canvas;
}

/** Decode → (resize) → (rotate/flip) → flatten → encode a single image file. */
export async function rasterize(file: File, opts: RasterOptions): Promise<RasterResult> {
  const canvas = await rasterizeToCanvas(file, opts);
  const blob = await canvasToBlob(canvas, opts.mime, opts.quality);
  return { blob, width: canvas.width, height: canvas.height };
}

/** Read an image's natural dimensions without altering it. */
export async function imageSize(file: File): Promise<{ w: number; h: number }> {
  const bmp = await createImageBitmap(file);
  const out = { w: bmp.width, h: bmp.height };
  bmp.close();
  return out;
}

/** Trigger a browser download for a single blob. */
export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/** Bundle multiple named blobs into a single ZIP and download it (lazy jszip). */
export async function zipAndDownload(
  files: { name: string; blob: Blob }[],
  zipName: string
): Promise<void> {
  const { default: JSZip } = await import("jszip");
  const zip = new JSZip();
  const seen = new Map<string, number>();
  for (const f of files) {
    let name = f.name;
    if (seen.has(name)) {
      const n = (seen.get(name) ?? 1) + 1;
      seen.set(name, n);
      const dot = name.lastIndexOf(".");
      name = dot > 0 ? `${name.slice(0, dot)} (${n})${name.slice(dot)}` : `${name} (${n})`;
    } else {
      seen.set(name, 1);
    }
    zip.file(name, f.blob);
  }
  const out = await zip.generateAsync({ type: "blob" });
  downloadBlob(out, zipName);
}

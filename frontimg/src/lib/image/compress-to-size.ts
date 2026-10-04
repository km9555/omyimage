/**
 * Compress an image to fit UNDER a file-size limit — "compress to 50 KB".
 *
 * The forms that ask for this (exam and government portals, job sites,
 * passport and visa uploads) check one number: the byte count. So the goal is
 * the best-looking file that is GUARANTEED to be under the limit, not an
 * estimate near it.
 *
 * Strategy, per image:
 *   1. Decode once, already downscaled if the photo is past what this browser's
 *      canvas can paint (a 50 MP phone photo has to shrink for a 50 KB limit
 *      anyway, so there is nothing to send to a server for).
 *   2. Binary-search the encoder quality between QUALITY_FLOOR and
 *      QUALITY_CEIL for the HIGHEST quality whose output fits.
 *   3. If even the floor does not fit, shrink the pixel dimensions by the
 *      square root of the overshoot (file size scales roughly with pixel
 *      count) and search again. Lowering resolution looks far better than
 *      crushing quality to 0.1: a 600 px photo at 75% beats a 4000 px photo
 *      dissolving into 8×8 blocks — and forms display these at thumbnail size.
 *   4. As a last resort, accept qualities below the floor at the smallest
 *      size reached, and report `met: false` if nothing fits at all.
 *
 * "KB" means 1,000 bytes here. Forms disagree on whether a KB is 1,000 or
 * 1,024 bytes; a file under 50,000 bytes passes BOTH readings of "50 KB",
 * while one at 51,000 bytes is rejected by half of them.
 *
 * Optionally a `minBytes` floor (forms that also say "at least 20 KB"): the
 * search then prefers the highest quality that lands inside [min, max], and if
 * even maximum quality is under the minimum the dimensions are grown back
 * towards the original — never above it.
 */
import { canBrowserHandlePixels } from "@/lib/process-router";
import { canvasToBlob, type ExportMime } from "@/lib/image/raster";

/** Below this quality JPEG/WebP visibly break into blocks; prefer fewer pixels. */
const QUALITY_FLOOR = 0.5;
const QUALITY_CEIL = 0.95;
/** Quality steps per search: 2^-7 of the range is finer than any visible change. */
const SEARCH_STEPS = 7;
const MAX_ROUNDS = 10;
/** Never shrink below this many pixels on the long side. */
const MIN_LONG_SIDE = 16;

export interface TargetSizeOptions {
  /** Upper limit in bytes (inclusive). */
  maxBytes: number;
  /** Optional lower limit in bytes. */
  minBytes?: number;
  /** JPEG or WebP. PNG cannot trade quality for size, so it is not offered. */
  mime: Extract<ExportMime, "image/jpeg" | "image/webp">;
  /** Fill behind transparent pixels (JPEG has no alpha). */
  background?: string | null;
  /** Optional cap on the long side, in pixels, applied before searching. */
  maxDimension?: number;
  /** Called with a 0–1 progress estimate while working. */
  onProgress?: (p: number) => void;
}

export interface TargetSizeResult {
  blob: Blob;
  width: number;
  height: number;
  /** The encoder quality used, 0–1. */
  quality: number;
  /** True when the result is within the limits. */
  met: boolean;
  /** True when the pixel dimensions had to be reduced to fit. */
  downscaled: boolean;
}

/** Bytes for a "50 KB" / "2 MB" style limit — decimal, see the header. */
export function limitBytes(value: number, unit: "KB" | "MB"): number {
  return Math.round(value * (unit === "MB" ? 1_000_000 : 1_000));
}

function drawScaled(
  bmp: ImageBitmap,
  w: number,
  h: number,
  background: string | null | undefined,
): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Could not create a canvas.");
  if (background) {
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, w, h);
  }
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(bmp, 0, 0, w, h);
  return canvas;
}

/** Largest scale (≤ 1) that keeps w×h inside this browser's canvas budget. */
function budgetScale(w: number, h: number): number {
  let s = 1;
  while (s > 0.05 && !canBrowserHandlePixels(Math.round(w * s) * Math.round(h * s))) s *= 0.85;
  return s;
}

/** Decode, oriented, at most at `scale` of the natural size. */
async function decodeAt(file: Blob, natural: { w: number; h: number }, scale: number): Promise<ImageBitmap> {
  if (scale >= 1) return createImageBitmap(file, { imageOrientation: "from-image" });
  return createImageBitmap(file, {
    imageOrientation: "from-image",
    resizeWidth: Math.max(1, Math.round(natural.w * scale)),
    resizeHeight: Math.max(1, Math.round(natural.h * scale)),
    resizeQuality: "high",
  });
}

export async function compressToSize(file: Blob, opts: TargetSizeOptions): Promise<TargetSizeResult> {
  const { maxBytes, minBytes = 0, mime, background } = opts;
  if (!(maxBytes > 0)) throw new Error("The target size must be greater than zero.");
  if (minBytes > maxBytes) throw new Error("The minimum size is larger than the maximum.");

  // Natural (oriented) size, from a decode we release immediately.
  const probe = await createImageBitmap(file, { imageOrientation: "from-image" }).catch(() => null);
  if (!probe) throw new Error("This image could not be read.");
  const natural = { w: probe.width, h: probe.height };
  probe.close();

  let startScale = budgetScale(natural.w, natural.h);
  if (opts.maxDimension && opts.maxDimension > 0) {
    startScale = Math.min(startScale, opts.maxDimension / Math.max(natural.w, natural.h));
  }
  startScale = Math.min(1, startScale);

  const bmp = await decodeAt(file, natural, startScale);
  const fullW = bmp.width;
  const fullH = bmp.height;
  let scale = 1; // relative to the decoded bitmap
  let downscaled = startScale < 1;
  const encodes = { n: 0 };
  const progress = (round: number) => opts.onProgress?.(Math.min(0.95, (round + 1) / (MAX_ROUNDS * 0.4)));

  const encodeAt = async (s: number, q: number) => {
    const w = Math.max(1, Math.round(fullW * s));
    const h = Math.max(1, Math.round(fullH * s));
    const canvas = drawScaled(bmp, w, h, mime === "image/jpeg" ? (background ?? "#ffffff") : background);
    try {
      const blob = await canvasToBlob(canvas, mime, q);
      encodes.n++;
      return { blob, width: w, height: h, quality: q };
    } finally {
      canvas.width = 0;
      canvas.height = 0;
    }
  };

  try {
    let smallestSeen: Awaited<ReturnType<typeof encodeAt>> | null = null;

    for (let round = 0; round < MAX_ROUNDS; round++) {
      progress(round);
      // Best case first: maximum quality already fits.
      const top = await encodeAt(scale, QUALITY_CEIL);
      if (top.blob.size <= maxBytes) {
        if (top.blob.size >= minBytes) return { ...top, met: true, downscaled };
        // Under the minimum even at top quality: grow back towards full size.
        if (scale < 1) {
          const grow = Math.min(1 / scale, Math.sqrt(minBytes / Math.max(1, top.blob.size)) * 1.05);
          const next = Math.min(1, scale * grow);
          if (next > scale + 1e-3) {
            scale = next;
            continue;
          }
        }
        // At the original size and still too small: this is as large as an
        // honest re-encode gets. The caller decides how to report it.
        return { ...top, met: minBytes === 0, downscaled };
      }

      // Binary search the highest quality in [floor, ceil) that fits.
      let lo = QUALITY_FLOOR;
      let hi = QUALITY_CEIL;
      let fit: Awaited<ReturnType<typeof encodeAt>> | null = null;
      const floor = await encodeAt(scale, lo);
      if (!smallestSeen || floor.blob.size < smallestSeen.blob.size) smallestSeen = floor;
      if (floor.blob.size <= maxBytes) {
        fit = floor;
        for (let i = 0; i < SEARCH_STEPS; i++) {
          const mid = (lo + hi) / 2;
          const r = await encodeAt(scale, mid);
          if (r.blob.size <= maxBytes) {
            fit = r;
            lo = mid;
          } else {
            hi = mid;
          }
        }
      }
      if (fit && fit.blob.size >= minBytes) return { ...fit, met: true, downscaled };
      if (fit) return { ...fit, met: minBytes === 0, downscaled };

      // Even the floor quality is too big: fewer pixels. File size tracks pixel
      // count, so scale the SIDE by the square root of the overshoot, with a
      // little headroom so the next round usually lands.
      const shrink = Math.min(0.95, Math.max(0.2, Math.sqrt(maxBytes / floor.blob.size) * 0.92));
      const next = scale * shrink;
      if (Math.max(fullW, fullH) * next < MIN_LONG_SIDE) break;
      scale = next;
      downscaled = true;
    }

    // Last resort: the smallest size reached, at qualities below the floor.
    for (const q of [0.35, 0.2, 0.08]) {
      const r = await encodeAt(scale, q);
      if (!smallestSeen || r.blob.size < smallestSeen.blob.size) smallestSeen = r;
      if (r.blob.size <= maxBytes) return { ...r, met: r.blob.size >= minBytes, downscaled };
    }
    // Nothing fits (a limit of a few hundred bytes). Return the smallest
    // attempt and let the caller say so plainly.
    return { ...smallestSeen!, met: false, downscaled };
  } finally {
    bmp.close();
    opts.onProgress?.(1);
  }
}

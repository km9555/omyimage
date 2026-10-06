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

/**
 * Bytes for an "at least 10 KB" style MINIMUM — binary, the mirror image of
 * limitBytes: 10,000 bytes is "10 KB" to a form that counts 1,000 but only
 * 9.8 KB to one that counts 1,024, so a minimum is met under both readings
 * only at 10,240 bytes.
 */
export function minimumBytes(value: number, unit: "KB" | "MB"): number {
  return Math.ceil(value * (unit === "MB" ? 1_048_576 : 1_024));
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

// ── Growing a file to a MINIMUM size ─────────────────────────────────────
/*
 * "Increase image size in KB": forms that also say "at least 20 KB" reject a
 * small, already-compressed photo or a scanned signature. Re-encoding can make
 * a file bigger in three honest steps, tried in this order:
 *
 *   1. Higher JPG quality at the same size — more detail kept, nothing lost.
 *   2. More pixels: enlarge by the square root of the shortfall (file size
 *      tracks pixel count), up to MAX_GROW× and the browser's canvas budget.
 *      Skipped when the caller needs exact dimensions (a 140 × 60 signature).
 *   3. Padding: an empty JPEG comment (COM) block appended after the header.
 *      It adds bytes and nothing else — every decoder skips it, the picture is
 *      bit-for-bit the same. Only used when 1 and 2 cannot reach the minimum,
 *      and reported (`padded`) so the page can say so.
 */
const MAX_GROW = 4;
const MAX_GROW_LONG_SIDE = 6000;

export interface GrowSizeOptions {
  /** Lower limit in bytes (the result is at least this big). */
  minBytes: number;
  /** Optional upper limit in bytes. */
  maxBytes?: number;
  /** Fill behind transparent pixels. */
  background?: string;
  /** Exact output size in pixels; disables enlarging (padding still allowed). */
  size?: { width: number; height: number };
  /** Allow enlarging the pixel dimensions (default true). */
  allowEnlarge?: boolean;
}

export interface GrowSizeResult {
  blob: Blob;
  width: number;
  height: number;
  quality: number;
  /** True when the result is within [minBytes, maxBytes]. */
  met: boolean;
  /** True when the pixel dimensions were increased. */
  enlarged: boolean;
  /** True when an empty comment block was added to reach the minimum. */
  padded: boolean;
}

/**
 * A copy of a JPEG with empty COM segments inserted after its JFIF/APP header
 * until it is at least `targetBytes` long. Pixels are untouched.
 */
export async function padJpeg(blob: Blob, targetBytes: number): Promise<Blob> {
  const src = new Uint8Array(await blob.arrayBuffer());
  if (src[0] !== 0xff || src[1] !== 0xd8) throw new Error("Not a JPEG file.");
  let need = targetBytes - src.length;
  if (need <= 0) return blob;
  // Insert after SOI and any APPn segments, so JFIF/EXIF stay first.
  let at = 2;
  while (at + 4 <= src.length && src[at] === 0xff && src[at + 1] >= 0xe0 && src[at + 1] <= 0xef) {
    at += 2 + ((src[at + 2] << 8) | src[at + 3]);
  }
  const segments: Uint8Array[] = [];
  while (need > 0) {
    // A segment is 4 header bytes + payload; payload ≤ 65,533.
    const payload = Math.min(65_533, Math.max(1, need - 4));
    const seg = new Uint8Array(4 + payload);
    seg[0] = 0xff;
    seg[1] = 0xfe;
    seg[2] = ((payload + 2) >> 8) & 0xff;
    seg[3] = (payload + 2) & 0xff;
    seg.fill(0x20, 4); // spaces
    segments.push(seg);
    need -= seg.length;
  }
  return new Blob([src.subarray(0, at), ...segments, src.subarray(at)] as BlobPart[], { type: "image/jpeg" });
}

export async function growToSize(file: Blob, opts: GrowSizeOptions): Promise<GrowSizeResult> {
  const { minBytes, maxBytes, background = "#ffffff" } = opts;
  if (!(minBytes > 0)) throw new Error("The minimum size must be greater than zero.");
  if (maxBytes !== undefined && maxBytes < minBytes) throw new Error("The minimum size is larger than the maximum.");
  const allowEnlarge = opts.allowEnlarge !== false && !opts.size;

  const probe = await createImageBitmap(file, { imageOrientation: "from-image" }).catch(() => null);
  if (!probe) throw new Error("This image could not be read.");
  const natural = { w: probe.width, h: probe.height };
  probe.close();
  const bmp = await decodeAt(file, natural, Math.min(1, budgetScale(natural.w, natural.h)));
  // The decoded size, which is below the natural one only for photos past the
  // browser's canvas budget — enlarging those is never the way to a minimum.
  const baseW = opts.size?.width ?? bmp.width;
  const baseH = opts.size?.height ?? bmp.height;

  const encodeAt = async (w: number, h: number, q: number) => {
    const canvas = drawScaled(bmp, w, h, background);
    try {
      return { blob: await canvasToBlob(canvas, "image/jpeg", q), width: w, height: h, quality: q };
    } finally {
      canvas.width = 0;
      canvas.height = 0;
    }
  };
  const within = (n: number) => n >= minBytes && (maxBytes === undefined || n <= maxBytes);

  try {
    // 1. Highest quality at the base size.
    let best = await encodeAt(baseW, baseH, 1);
    let enlarged = false;

    // 2. Enlarge while still short.
    if (best.blob.size < minBytes && allowEnlarge) {
      const cap = Math.min(MAX_GROW, MAX_GROW_LONG_SIDE / Math.max(baseW, baseH));
      let scale = 1;
      for (let round = 0; round < 6 && best.blob.size < minBytes && scale < cap - 1e-3; round++) {
        scale = Math.min(cap, scale * Math.max(1.1, Math.sqrt(minBytes / best.blob.size) * 1.08));
        const w = Math.round(baseW * scale);
        const h = Math.round(baseH * scale);
        if (!canBrowserHandlePixels(w * h)) break;
        best = await encodeAt(w, h, 1);
        enlarged = true;
      }
    }

    // Overshot the maximum: the highest quality at this size that fits.
    if (maxBytes !== undefined && best.blob.size > maxBytes) {
      let lo = QUALITY_FLOOR;
      let hi = 1;
      let fit: typeof best | null = null;
      for (let i = 0; i < SEARCH_STEPS + 1; i++) {
        const mid = (lo + hi) / 2;
        const r = await encodeAt(best.width, best.height, mid);
        if (r.blob.size <= maxBytes) { fit = r; lo = mid; } else { hi = mid; }
      }
      if (fit) best = fit;
    }

    // 3. Pad the rest of the way, if it is still short.
    if (best.blob.size < minBytes) {
      const padded = await padJpeg(best.blob, minBytes);
      return { ...best, blob: padded, met: within(padded.size), enlarged, padded: true };
    }
    return { ...best, met: within(best.blob.size), enlarged, padded: false };
  } finally {
    bmp.close();
  }
}

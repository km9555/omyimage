/**
 * Guess a JPG-flatten background color from an image's own edges.
 *
 * `raster.ts`'s flatten always defaulted to a fixed color (white) chosen
 * without looking at the image. For a transparent PNG whose real background
 * is anything else, that produces a visible halo. This samples the outer
 * ring of opaque pixels instead of the whole image (unlike the dominant-color
 * engine in `palette.ts`), so a logo or icon with a large centered subject
 * doesn't have its background color drowned out by the subject's color.
 */

import { decodeBitmap } from "./raster";

const SAMPLE_MAX = 128;
const ALPHA_MIN = 128;
/** 4 bits/channel = 16 buckets/channel, coarse enough to group anti-aliased
 *  edge noise into one winner without needing a full histogram. */
const BUCKET_BITS = 4;
const BUCKET_SHIFT = 8 - BUCKET_BITS;

/**
 * Downsamples `file`, reads its outer 1px ring, and returns the most common
 * opaque color there as a hex string. Falls back to `fallback` when the ring
 * has no opaque pixels (fully transparent border) or decoding fails.
 */
export async function detectEdgeBackground(
  file: File,
  autoOrient: boolean,
  fallback = "#ffffff"
): Promise<string> {
  let bmp: ImageBitmap;
  try {
    bmp = await decodeBitmap(file, autoOrient);
  } catch {
    return fallback;
  }

  try {
    const scale = Math.min(1, SAMPLE_MAX / Math.max(bmp.width, bmp.height));
    const w = Math.max(1, Math.round(bmp.width * scale));
    const h = Math.max(1, Math.round(bmp.height * scale));

    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return fallback;

    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(bmp, 0, 0, w, h);
    const { data } = ctx.getImageData(0, 0, w, h);

    const buckets = new Map<number, { r: number; g: number; b: number; n: number }>();
    const visit = (x: number, y: number) => {
      const i = (y * w + x) * 4;
      if (data[i + 3] < ALPHA_MIN) return;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const key =
        ((r >> BUCKET_SHIFT) << (BUCKET_BITS * 2)) |
        ((g >> BUCKET_SHIFT) << BUCKET_BITS) |
        (b >> BUCKET_SHIFT);
      const e = buckets.get(key);
      if (e) {
        e.r += r;
        e.g += g;
        e.b += b;
        e.n++;
      } else {
        buckets.set(key, { r, g, b, n: 1 });
      }
    };

    for (let x = 0; x < w; x++) {
      visit(x, 0);
      if (h > 1) visit(x, h - 1);
    }
    for (let y = 1; y < h - 1; y++) {
      visit(0, y);
      if (w > 1) visit(w - 1, y);
    }

    let best: { r: number; g: number; b: number; n: number } | null = null;
    for (const e of buckets.values()) {
      if (!best || e.n > best.n) best = e;
    }
    if (!best) return fallback;

    const toHex = (sum: number) => Math.round(sum / best!.n).toString(16).padStart(2, "0");
    return `#${toHex(best.r)}${toHex(best.g)}${toHex(best.b)}`;
  } finally {
    bmp.close();
  }
}

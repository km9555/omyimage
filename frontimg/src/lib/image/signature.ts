/**
 * Signature clean-up for upload forms: paper → pure white, ink → solid, the
 * empty margins trimmed, then fitted onto the exact size a form asks for.
 *
 * A phone photo of a signature is mostly paper, and the paper is never white:
 * it is grey, yellowish, and darker on one side where the hand or the phone
 * cast a shadow. A single global threshold either eats the faint end of the
 * pen stroke or leaves the shadow in. So the paper level is estimated LOCALLY:
 * the photo shrunk to a few dozen pixels and scaled back up is a smooth map of
 * the lighting (the thin ink strokes average away), and each pixel is judged
 * against the paper around it rather than against one number.
 *
 *   ratio = luminance / local paper luminance      (≈1 on paper, <1 on ink)
 *   ink   = 1 − smoothstep(lo, hi, ratio)          (0 paper … 1 full ink)
 *
 * `strength` moves `hi` down: a stronger clean treats more of the light grey
 * as paper. Everything runs on a canvas in the browser.
 */

export type InkColor = "black" | "blue" | "original";

export interface CleanOptions {
  /** Whiten the paper and solidify the ink (false = keep the photo's pixels). */
  clean: boolean;
  /** 0 … 1; higher whitens more aggressively. */
  strength: number;
  ink: InkColor;
}

/** Work at most at this long side; signatures do not need more. */
const MAX_WORK_SIDE = 2400;
const BLUE_INK: [number, number, number] = [22, 48, 140];

export interface InkBox { x: number; y: number; w: number; h: number }

export interface CleanResult {
  canvas: HTMLCanvasElement;
  /** Bounding box of the ink, or null if none was found. */
  ink: InkBox | null;
}

const smooth = (e0: number, e1: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
};

/** Clean a signature photo. Returns a canvas (white paper) and the ink's bounding box. */
export function cleanSignature(src: CanvasImageSource & { width: number; height: number }, opts: CleanOptions): CleanResult {
  const scale = Math.min(1, MAX_WORK_SIDE / Math.max(src.width, src.height));
  const W = Math.max(1, Math.round(src.width * scale));
  const H = Math.max(1, Math.round(src.height * scale));

  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) throw new Error("Could not create a canvas.");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, W, H);
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(src, 0, 0, W, H);
  const img = ctx.getImageData(0, 0, W, H);
  const d = img.data;

  // Local paper level: shrink to ~32 px on the long side, then scale back up.
  const small = document.createElement("canvas");
  const sScale = 32 / Math.max(W, H);
  small.width = Math.max(1, Math.round(W * sScale));
  small.height = Math.max(1, Math.round(H * sScale));
  const sctx = small.getContext("2d");
  const bg = document.createElement("canvas");
  bg.width = W;
  bg.height = H;
  const bctx = bg.getContext("2d", { willReadFrequently: true });
  if (!sctx || !bctx) throw new Error("Could not create a canvas.");
  sctx.imageSmoothingQuality = "high";
  sctx.drawImage(canvas, 0, 0, small.width, small.height);
  bctx.imageSmoothingQuality = "high";
  bctx.drawImage(small, 0, 0, W, H);
  const b = bctx.getImageData(0, 0, W, H).data;
  small.width = small.height = 0;
  bg.width = bg.height = 0;

  const hi = 0.97 - 0.14 * Math.min(1, Math.max(0, opts.strength));
  const lo = hi - 0.38;

  // Ink coverage per pixel, kept for the bounding box.
  const cover = new Float32Array(W * H);
  for (let i = 0, p = 0; i < d.length; i += 4, p++) {
    const L = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
    const P = Math.max(1, 0.299 * b[i] + 0.587 * b[i + 1] + 0.114 * b[i + 2]);
    const a = 1 - smooth(lo, hi, L / P);
    cover[p] = a;
    if (!opts.clean) continue;
    if (opts.ink === "black") {
      const v = 255 * (1 - a);
      d[i] = d[i + 1] = d[i + 2] = v;
    } else if (opts.ink === "blue") {
      d[i] = 255 - a * (255 - BLUE_INK[0]);
      d[i + 1] = 255 - a * (255 - BLUE_INK[1]);
      d[i + 2] = 255 - a * (255 - BLUE_INK[2]);
    } else {
      // The pen's own colour, lighting-corrected, faded to white off the ink.
      const k = 255 / P;
      d[i] = 255 - a * (255 - Math.min(255, d[i] * k));
      d[i + 1] = 255 - a * (255 - Math.min(255, d[i + 1] * k));
      d[i + 2] = 255 - a * (255 - Math.min(255, d[i + 2] * k));
    }
    d[i + 3] = 255;
  }
  if (opts.clean) ctx.putImageData(img, 0, 0);

  return { canvas, ink: inkBounds(cover, W, H) };
}

/**
 * The box around the ink. Rows and columns count as ink only with at least a
 * few inked pixels, so a lone speck of dust at the edge does not stretch it.
 */
function inkBounds(cover: Float32Array, W: number, H: number): InkBox | null {
  const rows = new Uint32Array(H);
  const cols = new Uint32Array(W);
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      if (cover[y * W + x] > 0.45) { rows[y]++; cols[x]++; }
    }
  }
  const minRow = Math.max(2, Math.round(W * 0.002));
  const minCol = Math.max(2, Math.round(H * 0.004));
  let top = 0;
  while (top < H && rows[top] < minRow) top++;
  let bottom = H - 1;
  while (bottom > top && rows[bottom] < minRow) bottom--;
  let left = 0;
  while (left < W && cols[left] < minCol) left++;
  let right = W - 1;
  while (right > left && cols[right] < minCol) right--;
  if (top >= bottom || left >= right) return null;
  return { x: left, y: top, w: right - left + 1, h: bottom - top + 1 };
}

/** The ink box grown by `margin` (a share of its larger side), kept inside the image. */
export function padBox(box: InkBox, W: number, H: number, margin = 0.08): InkBox {
  const m = Math.max(4, Math.round(Math.max(box.w, box.h) * margin));
  const x = Math.max(0, box.x - m);
  const y = Math.max(0, box.y - m);
  return { x, y, w: Math.min(W, box.x + box.w + m) - x, h: Math.min(H, box.y + box.h + m) - y };
}

/**
 * Draw `crop` of `src` onto a white `outW` × `outH` canvas, scaled to fit
 * (never stretched) and centred.
 */
export function fitOnWhite(src: HTMLCanvasElement, crop: InkBox, outW: number, outH: number): HTMLCanvasElement {
  const c = document.createElement("canvas");
  c.width = outW;
  c.height = outH;
  const ctx = c.getContext("2d");
  if (!ctx) throw new Error("Could not create a canvas.");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, outW, outH);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  const s = Math.min(outW / crop.w, outH / crop.h);
  const w = crop.w * s;
  const h = crop.h * s;
  ctx.drawImage(src, crop.x, crop.y, crop.w, crop.h, (outW - w) / 2, (outH - h) / 2, w, h);
  return c;
}

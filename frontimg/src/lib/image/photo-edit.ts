/**
 * The camera photo editor's pipeline: crop + transform, then colour.
 *
 * This is what runs after "Take photo" on a phone, so it has to feel like the
 * editor in the camera app the shot came from — filters, sliders, auto-fix —
 * while staying one render for both the live preview and the final file. The
 * crop half is `renderCrop` from `crop.ts` untouched; the colour half is a
 * single pixel pass in the style of `fx.ts` ("adjust"), deliberately not
 * `ctx.filter`, which older Safari lacks and which the phone this runs on may
 * well be.
 *
 * Everything except `renderPhotoEdit` is pure so it is testable in Node.
 */

import { NO_TRANSFORM, renderCrop, type CropSel, type CropTransform } from "./crop";

export interface PhotoAdj {
  /** Each −100…100, 0 = untouched. */
  brightness: number;
  contrast: number;
  saturation: number;
  /** Positive pushes toward orange, negative toward blue. */
  warmth: number;
  /** 0–1 mix toward the fully desaturated / sepia-toned image. */
  grayscale: number;
  sepia: number;
}

export const NEUTRAL_ADJ: PhotoAdj = {
  brightness: 0, contrast: 0, saturation: 0, warmth: 0, grayscale: 0, sepia: 0,
};

/**
 * The filter strip. Names are translated at the render site; the numbers are
 * the same looks /image-editor ships, converted from CSS-filter factors into
 * this module's units (contrast 5 ≈ contrast(1.1)).
 */
export const FILTER_PRESETS: { name: string; adj: PhotoAdj }[] = [
  { name: "Original", adj: NEUTRAL_ADJ },
  { name: "Vivid", adj: { ...NEUTRAL_ADJ, brightness: 4, contrast: 5, saturation: 45 } },
  { name: "B&W", adj: { ...NEUTRAL_ADJ, contrast: 3, grayscale: 1 } },
  { name: "Mono", adj: { ...NEUTRAL_ADJ, contrast: 25, grayscale: 1 } },
  { name: "Sepia", adj: { ...NEUTRAL_ADJ, sepia: 0.75 } },
  { name: "Cool", adj: { ...NEUTRAL_ADJ, contrast: 3, saturation: 10, warmth: -35 } },
  { name: "Warm", adj: { ...NEUTRAL_ADJ, brightness: 3, saturation: 15, warmth: 35 } },
];

export interface PhotoEdit {
  /** Normalised crop on the transformed image, or null for the whole frame. */
  sel: CropSel | null;
  transform: CropTransform;
  adj: PhotoAdj;
  /** Auto-contrast before the manual adjustments. */
  enhance: boolean;
}

export const NO_EDIT: PhotoEdit = { sel: null, transform: NO_TRANSFORM, adj: NEUTRAL_ADJ, enhance: false };

const FULL: CropSel = { x: 0, y: 0, w: 1, h: 1 };

/** A selection within a thousandth of the whole frame counts as no crop. */
export function isWholeFrame(sel: CropSel | null): boolean {
  return !sel || (sel.w >= 0.999 && sel.h >= 0.999 && sel.x <= 0.001 && sel.y <= 0.001);
}

export function isNeutralAdj(a: PhotoAdj): boolean {
  return a.brightness === 0 && a.contrast === 0 && a.saturation === 0 && a.warmth === 0
    && a.grayscale === 0 && a.sepia === 0;
}

export function sameAdj(a: PhotoAdj, b: PhotoAdj): boolean {
  return a.brightness === b.brightness && a.contrast === b.contrast && a.saturation === b.saturation
    && a.warmth === b.warmth && a.grayscale === b.grayscale && a.sepia === b.sepia;
}

/** Nothing to render: the caller hands the original file through untouched. */
export function isNoop(e: PhotoEdit): boolean {
  const t = e.transform;
  return isWholeFrame(e.sel) && t.rotate === 0 && !t.flipH && !t.flipV && t.straighten === 0
    && !e.enhance && isNeutralAdj(e.adj);
}

/** Brightness and contrast as one 256-entry table, as `fx.ts` does it. */
function adjustTable(brightness: number, contrast: number): Uint8ClampedArray {
  const lut = new Uint8ClampedArray(256);
  const b = (brightness / 100) * 128;
  const c = contrast >= 0 ? 1 + (contrast / 100) * 2 : 1 + contrast / 100;
  for (let v = 0; v < 256; v++) lut[v] = (v + b - 128) * c + 128;
  return lut;
}

/**
 * Apply the colour adjustments to pixel data in place.
 *
 * One pass, stages skipped when neutral: LUT (brightness/contrast) →
 * saturation → warmth → sepia → grayscale. Grayscale goes last so "B&W" stays
 * black and white whatever the warmth slider says.
 */
export function applyAdjust(d: Uint8ClampedArray, a: PhotoAdj): void {
  if (isNeutralAdj(a)) return;
  const useLut = a.brightness !== 0 || a.contrast !== 0;
  const lut = useLut ? adjustTable(a.brightness, a.contrast) : null;
  const sat = 1 + a.saturation / 100;
  const wr = (a.warmth / 100) * 28;
  const wg = (a.warmth / 100) * 6;
  const wb = -(a.warmth / 100) * 28;
  const sep = Math.min(1, Math.max(0, a.sepia));
  const gray = Math.min(1, Math.max(0, a.grayscale));

  for (let i = 0; i < d.length; i += 4) {
    let r = d[i], g = d[i + 1], b = d[i + 2];
    if (lut) { r = lut[r]; g = lut[g]; b = lut[b]; }
    if (sat !== 1) {
      const y = 0.299 * r + 0.587 * g + 0.114 * b;
      r = y + (r - y) * sat; g = y + (g - y) * sat; b = y + (b - y) * sat;
    }
    if (a.warmth !== 0) { r += wr; g += wg; b += wb; }
    if (sep > 0) {
      const sr = r * 0.393 + g * 0.769 + b * 0.189;
      const sg = r * 0.349 + g * 0.686 + b * 0.168;
      const sb = r * 0.272 + g * 0.534 + b * 0.131;
      r += (sr - r) * sep; g += (sg - g) * sep; b += (sb - b) * sep;
    }
    if (gray > 0) {
      const y = 0.299 * r + 0.587 * g + 0.114 * b;
      r += (y - r) * gray; g += (y - g) * gray; b += (y - b) * gray;
    }
    d[i] = r; d[i + 1] = g; d[i + 2] = b;
  }
}

/**
 * One-tap "enhance": stretch the luminance so the 1st percentile lands on
 * black and the 99th on white, then a touch more saturation.
 *
 * The same levels are applied to all three channels, so the colour balance is
 * untouched — this is the OCR preprocessor's percentile stretch
 * (`ocr-preprocess.ts`) for colour. The gain is capped so a deliberately flat
 * image (fog, a grey wall) is lifted rather than torn into noise.
 */
export function autoEnhance(d: Uint8ClampedArray): void {
  const hist = new Uint32Array(256);
  const n = d.length / 4;
  for (let i = 0; i < d.length; i += 4) {
    hist[(0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2]) | 0]++;
  }
  const loTarget = n * 0.01;
  const hiTarget = n * 0.99;
  let acc = 0;
  let lo = 0;
  let hi = 255;
  for (let v = 0; v < 256; v++) {
    acc += hist[v];
    if (acc >= loTarget) { lo = v; break; }
  }
  acc = 0;
  for (let v = 255; v >= 0; v--) {
    acc += hist[v];
    if (acc >= n - hiTarget) { hi = v; break; }
  }
  if (hi - lo < 8) return;
  const gain = Math.min(1.6, 255 / (hi - lo));
  const sat = 1.08;
  for (let i = 0; i < d.length; i += 4) {
    let r = (d[i] - lo) * gain, g = (d[i + 1] - lo) * gain, b = (d[i + 2] - lo) * gain;
    const y = 0.299 * r + 0.587 * g + 0.114 * b;
    r = y + (r - y) * sat; g = y + (g - y) * sat; b = y + (b - y) * sat;
    d[i] = r; d[i + 1] = g; d[i + 2] = b;
  }
}

/**
 * Render the whole edit onto `canvas` at the crop's own pixel size.
 *
 * Pass the full bitmap for the export and a downscaled copy for the preview —
 * the selection is normalised, so the same `edit` draws both.
 */
export function renderPhotoEdit(
  canvas: HTMLCanvasElement,
  bmp: ImageBitmap,
  edit: PhotoEdit,
  opts: { background?: string | null } = {}
): void {
  renderCrop(canvas, bmp, edit.sel ?? FULL, "rect", edit.transform, {
    target: "original",
    background: opts.background ?? null,
  });
  if (!edit.enhance && isNeutralAdj(edit.adj)) return;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return;
  const img = ctx.getImageData(0, 0, canvas.width, canvas.height);
  if (edit.enhance) autoEnhance(img.data);
  applyAdjust(img.data, edit.adj);
  ctx.putImageData(img, 0, 0);
}

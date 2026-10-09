/**
 * CSS-filter colour adjustments that work whether or not the canvas has
 * `ctx.filter`.
 *
 * `CanvasRenderingContext2D.filter` is the cheap way to do brightness,
 * contrast, saturation, grayscale, sepia and hue — the GPU does it — but
 * Safari only gained it in 18 (late 2024), and older WebViews never had it.
 * On those browsers a `ctx.filter = …` assignment is silently ignored, so an
 * editor built on it previews and exports the unchanged image with no error.
 *
 * Every one of those filter functions is a 3×3 colour matrix plus an offset
 * (Filter Effects Module Level 1, §9), so the whole chain folds into ONE
 * affine transform applied per pixel. That is what the fallback does, and
 * because the maths is the spec's, it matches `ctx.filter` output exactly —
 * the same image on every browser, rather than a "close enough" look-alike.
 */

export interface CssFilterAdj {
  /** Multipliers: 1 = untouched. */
  brightness: number;
  contrast: number;
  saturate: number;
  /** Mix amounts 0–1. */
  grayscale: number;
  sepia: number;
  /** Degrees. */
  hue: number;
}

export const NEUTRAL_FILTER: CssFilterAdj = {
  brightness: 1, contrast: 1, saturate: 1, grayscale: 0, sepia: 0, hue: 0,
};

export const isNeutralFilter = (a: CssFilterAdj) =>
  a.brightness === 1 && a.contrast === 1 && a.saturate === 1 && a.grayscale === 0 && a.sepia === 0 && a.hue === 0;

/** The chain as `ctx.filter` wants it, in the order the matrix below folds it. */
export const cssFilterString = (a: CssFilterAdj) =>
  `brightness(${a.brightness}) contrast(${a.contrast}) saturate(${a.saturate}) grayscale(${a.grayscale}) sepia(${a.sepia}) hue-rotate(${a.hue}deg)`;

let supported: boolean | null = null;

/** Whether this browser honours `ctx.filter`. Probed once, lazily. */
export function canvasFilterSupported(): boolean {
  if (supported !== null) return supported;
  if (typeof document === "undefined") return false;
  const ctx = document.createElement("canvas").getContext("2d");
  supported = !!ctx && "filter" in ctx && typeof (ctx as { filter?: unknown }).filter === "string";
  return supported;
}

/** Row-major 3×3 matrix with a trailing offset per row: 12 numbers. */
export type ColorMatrix = Float64Array;

const IDENTITY = (): ColorMatrix => Float64Array.from([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0]);

/** `after ∘ before`: apply `before` first, then `after`. */
function compose(after: ColorMatrix, before: ColorMatrix): ColorMatrix {
  const out = new Float64Array(12);
  for (let r = 0; r < 3; r++) {
    const a0 = after[r * 4], a1 = after[r * 4 + 1], a2 = after[r * 4 + 2];
    for (let c = 0; c < 3; c++) out[r * 4 + c] = a0 * before[c] + a1 * before[4 + c] + a2 * before[8 + c];
    out[r * 4 + 3] = a0 * before[3] + a1 * before[7] + a2 * before[11] + after[r * 4 + 3];
  }
  return out;
}

const scaleMatrix = (f: number, offset = 0): ColorMatrix =>
  Float64Array.from([f, 0, 0, offset, 0, f, 0, offset, 0, 0, f, offset]);

/** saturate(), grayscale() and sepia() share one shape: a luminance blend. */
function blendMatrix(s: number, base: number[], keep: number[]): ColorMatrix {
  // base: the fully-applied matrix (s = 0); keep: how much of each channel is
  // restored per unit of s. Written out per the spec tables.
  const m = new Float64Array(12);
  for (let i = 0; i < 9; i++) m[Math.floor(i / 3) * 4 + (i % 3)] = base[i] + keep[i] * s;
  return m;
}

/**
 * Fold the whole filter chain into one matrix, in `cssFilterString` order.
 * Values are in 0–255 space, so the contrast offset is pre-scaled.
 */
export function colorMatrix(a: CssFilterAdj): ColorMatrix {
  let m = IDENTITY();
  if (a.brightness !== 1) m = compose(scaleMatrix(a.brightness), m);
  if (a.contrast !== 1) m = compose(scaleMatrix(a.contrast, 127.5 * (1 - a.contrast)), m);
  if (a.saturate !== 1) {
    m = compose(blendMatrix(a.saturate,
      [0.213, 0.715, 0.072, 0.213, 0.715, 0.072, 0.213, 0.715, 0.072],
      [0.787, -0.715, -0.072, -0.213, 0.285, -0.072, -0.213, -0.715, 0.928]), m);
  }
  if (a.grayscale !== 0) {
    m = compose(blendMatrix(1 - Math.min(1, a.grayscale),
      [0.2126, 0.7152, 0.0722, 0.2126, 0.7152, 0.0722, 0.2126, 0.7152, 0.0722],
      [0.7874, -0.7152, -0.0722, -0.2126, 0.2848, -0.0722, -0.2126, -0.7152, 0.9278]), m);
  }
  if (a.sepia !== 0) {
    m = compose(blendMatrix(1 - Math.min(1, a.sepia),
      [0.393, 0.769, 0.189, 0.349, 0.686, 0.168, 0.272, 0.534, 0.131],
      [0.607, -0.769, -0.189, -0.349, 0.314, -0.168, -0.272, -0.534, 0.869]), m);
  }
  if (a.hue !== 0) {
    const r = (a.hue * Math.PI) / 180;
    const c = Math.cos(r), s = Math.sin(r);
    m = compose(Float64Array.from([
      0.213 + c * 0.787 - s * 0.213, 0.715 - c * 0.715 - s * 0.715, 0.072 - c * 0.072 + s * 0.928, 0,
      0.213 - c * 0.213 + s * 0.143, 0.715 + c * 0.285 + s * 0.140, 0.072 - c * 0.072 - s * 0.283, 0,
      0.213 - c * 0.213 - s * 0.787, 0.715 - c * 0.715 + s * 0.715, 0.072 + c * 0.928 + s * 0.072, 0,
    ]), m);
  }
  return m;
}

/** Apply a colour matrix to RGBA pixel data in place. Alpha is untouched. */
export function applyColorMatrix(d: Uint8ClampedArray, m: ColorMatrix): void {
  const [m0, m1, m2, o0, m3, m4, m5, o1, m6, m7, m8, o2] = m;
  for (let i = 0; i < d.length; i += 4) {
    const r = d[i], g = d[i + 1], b = d[i + 2];
    d[i] = m0 * r + m1 * g + m2 * b + o0;
    d[i + 1] = m3 * r + m4 * g + m5 * b + o1;
    d[i + 2] = m6 * r + m7 * g + m8 * b + o2;
  }
}

/**
 * Draw `src` at W×H with the colour filter applied, by whichever route this
 * browser has. The result on the canvas is the same either way.
 */
export function drawFiltered(
  ctx: CanvasRenderingContext2D,
  src: CanvasImageSource,
  W: number,
  H: number,
  adj: CssFilterAdj,
): void {
  if (isNeutralFilter(adj)) { ctx.drawImage(src, 0, 0, W, H); return; }
  if (canvasFilterSupported()) {
    ctx.filter = cssFilterString(adj);
    ctx.drawImage(src, 0, 0, W, H);
    ctx.filter = "none";
    return;
  }
  ctx.drawImage(src, 0, 0, W, H);
  const img = ctx.getImageData(0, 0, W, H);
  applyColorMatrix(img.data, colorMatrix(adj));
  ctx.putImageData(img, 0, 0);
}

/**
 * Three box blurs of radius r approximate a Gaussian of σ ≈ r, which is what
 * CSS `blur(r)` is. Separable, with a sliding window, so it is O(W·H) per pass
 * however large the radius.
 */
function boxBlur(d: Uint8ClampedArray, W: number, H: number, radius: number): void {
  const r = Math.max(1, Math.round(radius));
  const win = 2 * r + 1;
  const tmp = new Uint8ClampedArray(d.length);

  // Horizontal: d → tmp
  for (let y = 0; y < H; y++) {
    const row = y * W * 4;
    let sr = 0, sg = 0, sb = 0, sa = 0;
    for (let x = -r; x <= r; x++) {
      const i = row + Math.min(W - 1, Math.max(0, x)) * 4;
      sr += d[i]; sg += d[i + 1]; sb += d[i + 2]; sa += d[i + 3];
    }
    for (let x = 0; x < W; x++) {
      const o = row + x * 4;
      tmp[o] = sr / win; tmp[o + 1] = sg / win; tmp[o + 2] = sb / win; tmp[o + 3] = sa / win;
      const add = row + Math.min(W - 1, x + r + 1) * 4;
      const sub = row + Math.max(0, x - r) * 4;
      sr += d[add] - d[sub]; sg += d[add + 1] - d[sub + 1]; sb += d[add + 2] - d[sub + 2]; sa += d[add + 3] - d[sub + 3];
    }
  }
  // Vertical: tmp → d
  const stride = W * 4;
  for (let x = 0; x < W; x++) {
    const col = x * 4;
    let sr = 0, sg = 0, sb = 0, sa = 0;
    for (let y = -r; y <= r; y++) {
      const i = col + Math.min(H - 1, Math.max(0, y)) * stride;
      sr += tmp[i]; sg += tmp[i + 1]; sb += tmp[i + 2]; sa += tmp[i + 3];
    }
    for (let y = 0; y < H; y++) {
      const o = col + y * stride;
      d[o] = sr / win; d[o + 1] = sg / win; d[o + 2] = sb / win; d[o + 3] = sa / win;
      const add = col + Math.min(H - 1, y + r + 1) * stride;
      const sub = col + Math.max(0, y - r) * stride;
      sr += tmp[add] - tmp[sub]; sg += tmp[add + 1] - tmp[sub + 1]; sb += tmp[add + 2] - tmp[sub + 2]; sa += tmp[add + 3] - tmp[sub + 3];
    }
  }
}

/** Draw `src` blurred by `radius` CSS pixels, with or without `ctx.filter`. */
export function drawBlurred(
  ctx: CanvasRenderingContext2D,
  src: CanvasImageSource,
  W: number,
  H: number,
  radius: number,
): void {
  if (radius <= 0) { ctx.drawImage(src, 0, 0, W, H); return; }
  if (canvasFilterSupported()) {
    ctx.filter = `blur(${radius}px)`;
    ctx.drawImage(src, 0, 0, W, H);
    ctx.filter = "none";
    return;
  }
  ctx.drawImage(src, 0, 0, W, H);
  const img = ctx.getImageData(0, 0, W, H);
  for (let pass = 0; pass < 3; pass++) boxBlur(img.data, W, H, radius);
  ctx.putImageData(img, 0, 0);
}

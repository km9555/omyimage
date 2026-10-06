/**
 * Whole-image effects for the Phase 6 tools: invert, pixelate, brightness /
 * contrast / saturation, glitch and rounded corners.
 *
 * One `renderFx` draws the result onto a canvas for both the live preview
 * (a downscaled copy) and the export (full size). Every size-like setting is
 * stored in ORIGINAL-image pixels and multiplied by `k` — preview width over
 * original width — so the preview is a faithful miniature of the download.
 *
 * Pixel work uses plain loops over ImageData rather than `ctx.filter`, which
 * Safari only gained recently; the preview is small enough for that to stay
 * interactive while a slider moves.
 */

export type FxMode = "invert" | "pixelate" | "adjust" | "glitch" | "corners";

export interface FxSettings {
  /** invert: "negative" flips every channel; "smart" also turns hues back. */
  invert: "negative" | "smart";
  /** pixelate: block edge in original pixels. */
  block: number;
  /** adjust: each −100…100. */
  brightness: number;
  contrast: number;
  saturation: number;
  /** glitch: 0–100, and a seed so the preview and the export match. */
  glitch: number;
  seed: number;
  split: boolean;
  slices: boolean;
  scanlines: boolean;
  /** corners: radius as a percentage of the shorter side (50 = pill/circle). */
  radius: number;
  tl: boolean;
  tr: boolean;
  br: boolean;
  bl: boolean;
}

export const DEFAULT_FX: FxSettings = {
  invert: "negative",
  block: 16,
  brightness: 0,
  contrast: 0,
  saturation: 0,
  glitch: 50,
  seed: 1,
  split: true,
  slices: true,
  scanlines: false,
  radius: 12,
  tl: true,
  tr: true,
  br: true,
  bl: true,
};

/** Small deterministic PRNG (mulberry32), so a seed always glitches the same way. */
function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Rounded-rectangle path with per-corner radii (roundRect is too new to rely on). */
function roundedPath(ctx: CanvasRenderingContext2D, W: number, H: number, r: [number, number, number, number]) {
  const [tl, tr, br, bl] = r;
  ctx.beginPath();
  ctx.moveTo(tl, 0);
  ctx.lineTo(W - tr, 0);
  if (tr) ctx.arcTo(W, 0, W, tr, tr); else ctx.lineTo(W, 0);
  ctx.lineTo(W, H - br);
  if (br) ctx.arcTo(W, H, W - br, H, br); else ctx.lineTo(W, H);
  ctx.lineTo(bl, H);
  if (bl) ctx.arcTo(0, H, 0, H - bl, bl); else ctx.lineTo(0, H);
  ctx.lineTo(0, tl);
  if (tl) ctx.arcTo(0, 0, tl, 0, tl); else ctx.lineTo(0, 0);
  ctx.closePath();
}

/** Brightness and contrast as one 256-entry table; saturation needs all three channels. */
function adjustTable(brightness: number, contrast: number): Uint8ClampedArray {
  const lut = new Uint8ClampedArray(256);
  const b = (brightness / 100) * 128;
  const c = contrast >= 0 ? 1 + (contrast / 100) * 2 : 1 + contrast / 100;
  for (let v = 0; v < 256; v++) lut[v] = (v + b - 128) * c + 128;
  return lut;
}

/**
 * Draw `src` (W × H at output scale) with `mode` applied onto `canvas`.
 * `bg` fills behind the image (for JPG output, or a rounded-corner backdrop);
 * null keeps transparency.
 */
export function renderFx(
  canvas: HTMLCanvasElement,
  src: CanvasImageSource,
  W: number,
  H: number,
  mode: FxMode,
  s: FxSettings,
  k: number,
  bg: string | null,
): void {
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return;
  ctx.clearRect(0, 0, W, H);

  if (mode === "corners") {
    const r = (Math.min(W, H) * Math.min(50, Math.max(0, s.radius))) / 100;
    if (bg) { ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H); }
    ctx.save();
    roundedPath(ctx, W, H, [s.tl ? r : 0, s.tr ? r : 0, s.br ? r : 0, s.bl ? r : 0]);
    ctx.clip();
    ctx.drawImage(src, 0, 0, W, H);
    ctx.restore();
    return;
  }

  if (bg) { ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H); }

  if (mode === "pixelate") {
    // Shrink so each block becomes one pixel, then blow it up without smoothing.
    const block = Math.max(1, s.block * k);
    const sw = Math.max(1, Math.round(W / block));
    const sh = Math.max(1, Math.round(H / block));
    const tiny = document.createElement("canvas");
    tiny.width = sw;
    tiny.height = sh;
    const tctx = tiny.getContext("2d");
    if (!tctx) return;
    tctx.imageSmoothingEnabled = true;
    tctx.imageSmoothingQuality = "medium";
    tctx.drawImage(src, 0, 0, sw, sh);
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(tiny, 0, 0, W, H);
    return;
  }

  if (mode === "glitch" && s.slices && s.glitch > 0) {
    // Horizontal strips pushed sideways, drawn as image slices (no pixel loop).
    const rand = rng(s.seed * 7919 + 13);
    ctx.drawImage(src, 0, 0, W, H);
    const count = 3 + Math.round((s.glitch / 100) * 12);
    for (let i = 0; i < count; i++) {
      const y = Math.floor(rand() * H);
      const h = Math.max(1, Math.floor((0.01 + rand() * 0.07) * H));
      const dx = Math.round((rand() - 0.5) * 2 * (s.glitch / 100) * 0.12 * W);
      ctx.drawImage(canvas, 0, y, W, h, dx, y, W, h);
      if (dx > 0) ctx.drawImage(canvas, W - dx, y, dx, h, 0, y, dx, h);
      else if (dx < 0) ctx.drawImage(canvas, 0, y, -dx, h, W + dx, y, -dx, h);
    }
  } else {
    ctx.drawImage(src, 0, 0, W, H);
  }

  const img = ctx.getImageData(0, 0, W, H);
  const d = img.data;

  if (mode === "invert") {
    for (let i = 0; i < d.length; i += 4) {
      let r = 255 - d[i], g = 255 - d[i + 1], b = 255 - d[i + 2];
      if (s.invert === "smart") {
        // Rotate the hue back by 180°: keeps colours recognisable while light
        // and dark swap — the "dark mode" look of a screenshot.
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        const shift = max + min;
        r = shift - r; g = shift - g; b = shift - b;
      }
      d[i] = r; d[i + 1] = g; d[i + 2] = b;
    }
  } else if (mode === "adjust") {
    const lut = adjustTable(s.brightness, s.contrast);
    const sat = 1 + s.saturation / 100;
    for (let i = 0; i < d.length; i += 4) {
      let r = lut[d[i]], g = lut[d[i + 1]], b = lut[d[i + 2]];
      if (sat !== 1) {
        const y = 0.299 * r + 0.587 * g + 0.114 * b;
        r = y + (r - y) * sat; g = y + (g - y) * sat; b = y + (b - y) * sat;
      }
      d[i] = r; d[i + 1] = g; d[i + 2] = b;
    }
  } else if (mode === "glitch" && s.glitch > 0) {
    const amt = s.glitch / 100;
    if (s.split) {
      // Red slides left and blue right, the classic broken-signal fringe.
      const off = Math.max(1, Math.round(amt * 0.025 * W));
      const copy = new Uint8ClampedArray(d);
      for (let y = 0; y < H; y++) {
        const row = y * W;
        for (let x = 0; x < W; x++) {
          const i = (row + x) * 4;
          const xr = Math.min(W - 1, x + off);
          const xb = Math.max(0, x - off);
          d[i] = copy[(row + xr) * 4];
          d[i + 2] = copy[(row + xb) * 4 + 2];
        }
      }
    }
    if (s.scanlines) {
      // Line spacing follows the ORIGINAL width, so the preview shows the same stripes.
      const gap = Math.max(1, Math.round(Math.max(2, Math.round(W / k / 300)) * k));
      const dark = 1 - 0.35 * amt;
      for (let y = 0; y < H; y++) {
        if (Math.floor(y / gap) % 2 === 0) continue;
        for (let x = 0, i = y * W * 4; x < W; x++, i += 4) { d[i] *= dark; d[i + 1] *= dark; d[i + 2] *= dark; }
      }
    }
  }
  ctx.putImageData(img, 0, 0);
}

/** A copy of `bmp` no larger than `max` on its longer side, for fast previews. */
export function previewSource(bmp: ImageBitmap, max = 1000): { canvas: HTMLCanvasElement; k: number } {
  const k = Math.min(1, max / Math.max(bmp.width, bmp.height));
  const c = document.createElement("canvas");
  c.width = Math.max(1, Math.round(bmp.width * k));
  c.height = Math.max(1, Math.round(bmp.height * k));
  const g = c.getContext("2d");
  if (g) { g.imageSmoothingQuality = "high"; g.drawImage(bmp, 0, 0, c.width, c.height); }
  return { canvas: c, k };
}

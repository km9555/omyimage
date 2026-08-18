/**
 * Shared crop engine behind /crop-image and /circle-crop.
 *
 * One implementation for both pages, deliberately: the same object-URL bug
 * survived in four separate tools in this codebase because each had its own
 * copy of the logic. The circle crop is not a different feature, it is this
 * feature with `shape: "ellipse"` and a 1:1 lock.
 *
 * The selection is **normalised to the image** (0–1), matching `circle-crop.ts`
 * and `redact.ts`. That survives zooming and preview resizing, and it is what
 * lets a single crop apply across a batch of differently-sized images.
 *
 * Everything except `renderCrop` is pure, so the geometry is testable in Node.
 */

export type CropShape = "rect" | "rounded" | "ellipse";

export interface CropSel {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface CropTransform {
  /** Quarter turns applied before cropping. */
  rotate: 0 | 90 | 180 | 270;
  flipH: boolean;
  flipV: boolean;
  /** Fine rotation in degrees for levelling a horizon, roughly -15..15. */
  straighten: number;
}

/** Export size: the crop's own pixels, or a forced square//longest-side value. */
export type OutputTarget = "original" | number;

export const NO_TRANSFORM: CropTransform = { rotate: 0, flipH: false, flipV: false, straighten: 0 };

/** Smallest crop we allow, as a fraction of the image. */
export const MIN_CROP = 0.02;

/** Size of the image *after* the transform, which is what the selection sits on. */
export function transformedSize(W: number, H: number, t: CropTransform): { w: number; h: number } {
  return t.rotate === 90 || t.rotate === 270 ? { w: H, h: W } : { w: W, h: H };
}

/**
 * Keep a selection inside the image with a usable area.
 *
 * Size is clamped before position so a crop dragged past an edge shrinks rather
 * than jumping. The previous tool clamped width and height independently of the
 * locked ratio, which is how the aspect lock quietly came undone.
 */
export function clampCrop(sel: CropSel): CropSel {
  const w = Math.min(1, Math.max(MIN_CROP, Number.isFinite(sel.w) ? sel.w : MIN_CROP));
  const h = Math.min(1, Math.max(MIN_CROP, Number.isFinite(sel.h) ? sel.h : MIN_CROP));
  const x = Math.min(1 - w, Math.max(0, Number.isFinite(sel.x) ? sel.x : 0));
  const y = Math.min(1 - h, Math.max(0, Number.isFinite(sel.y) ? sel.y : 0));
  return { x, y, w, h };
}

/**
 * A pixel aspect ratio expressed in normalised units.
 *
 * A 1:1 crop is only `w === h` in normalised space on a square image, so every
 * ratio has to be converted through the image's own dimensions. Getting this
 * wrong is why "1:1" on a 800×500 image would come out oblong.
 */
export const normAspect = (ratio: number, W: number, H: number) => (ratio * H) / W;

/**
 * Force a selection to a pixel aspect ratio, keeping it inside the image.
 *
 * `anchor` decides what stays put — the centre by default, or a named corner so
 * a resize drag grows away from the handle the user is holding.
 */
export function applyAspect(
  sel: CropSel,
  ratio: number | null,
  W: number,
  H: number,
  anchor: "center" | "nw" | "ne" | "sw" | "se" = "center"
): CropSel {
  if (!ratio || !(ratio > 0)) return clampCrop(sel);
  const target = normAspect(ratio, W, H);

  // Fit the requested ratio inside the current box, then grow back to whichever
  // dimension the box already had — this keeps the crop as large as it can be
  // without ever exceeding the image.
  let w = sel.w;
  let h = w / target;
  if (h > 1 || h > sel.h * 2) {
    h = sel.h;
    w = h * target;
  }
  if (w > 1) { w = 1; h = w / target; }
  if (h > 1) { h = 1; w = h * target; }
  w = Math.max(MIN_CROP, Math.min(1, w));
  h = Math.max(MIN_CROP, Math.min(1, h));

  const right = sel.x + sel.w;
  const bottom = sel.y + sel.h;
  let x: number;
  let y: number;
  if (anchor === "center") {
    x = sel.x + (sel.w - w) / 2;
    y = sel.y + (sel.h - h) / 2;
  } else {
    x = anchor.includes("w") ? right - w : sel.x;
    y = anchor.includes("n") ? bottom - h : sel.y;
  }
  return clampCrop({ x, y, w, h });
}

/** A centred crop of the given ratio filling as much of the image as possible. */
export function centeredCrop(ratio: number | null, W: number, H: number, fill = 0.9): CropSel {
  const base: CropSel = { x: (1 - fill) / 2, y: (1 - fill) / 2, w: fill, h: fill };
  return ratio ? applyAspect(base, ratio, W, H, "center") : clampCrop(base);
}

/** Pixel size of the exported image. */
export function outputSize(
  sel: CropSel,
  W: number,
  H: number,
  t: CropTransform,
  target: OutputTarget
): { w: number; h: number } {
  const s = transformedSize(W, H, t);
  const cw = Math.max(1, Math.round(sel.w * s.w));
  const ch = Math.max(1, Math.round(sel.h * s.h));
  if (target === "original") return { w: cw, h: ch };
  // A fixed target sizes the longest side and keeps the crop's proportions, so
  // a non-square crop is never silently squashed into a square.
  const n = Math.max(1, Math.round(target));
  const scale = n / Math.max(cw, ch);
  return { w: Math.max(1, Math.round(cw * scale)), h: Math.max(1, Math.round(ch * scale)) };
}

/**
 * Scale needed so a straighten rotation never exposes empty corners.
 *
 * Rotating a w×h rectangle by θ leaves wedges at the corners; zooming by this
 * factor guarantees the rotated image still covers the whole frame.
 */
export function straightenCover(w: number, h: number, degrees: number): number {
  const r = (Math.abs(degrees) * Math.PI) / 180;
  if (r === 0) return 1;
  const c = Math.abs(Math.cos(r));
  const s = Math.abs(Math.sin(r));
  return Math.max((w * c + h * s) / w, (w * s + h * c) / h);
}

export interface RenderCropOptions {
  target?: OutputTarget;
  /** Corner radius for `rounded`, as a fraction of the shorter side (0–0.5). */
  radius?: number;
  /** Painted behind the crop — required for JPG, which has no alpha. */
  background?: string | null;
  /** Border drawn just inside the shape edge, as a % of the half-size. 0 = none. */
  ringPct?: number;
  ringColor?: string;
}

function shapePath(ctx: CanvasRenderingContext2D, w: number, h: number, shape: CropShape, radius: number) {
  ctx.beginPath();
  if (shape === "ellipse") {
    ctx.ellipse(w / 2, h / 2, w / 2, h / 2, 0, 0, Math.PI * 2);
  } else if (shape === "rounded") {
    const r = Math.max(0, Math.min(0.5, radius)) * Math.min(w, h);
    ctx.moveTo(r, 0);
    ctx.arcTo(w, 0, w, h, r);
    ctx.arcTo(w, h, 0, h, r);
    ctx.arcTo(0, h, 0, 0, r);
    ctx.arcTo(0, 0, w, 0, r);
  } else {
    ctx.rect(0, 0, w, h);
  }
  ctx.closePath();
}

/** Scratch canvas holding the transformed image, reused across renders. */
let scratch: HTMLCanvasElement | null = null;

/**
 * Draw the image with the transform applied, at its transformed size.
 * Exposed so the on-screen editor and the exporter share one source of truth.
 */
export function drawTransformed(bmp: ImageBitmap, t: CropTransform): HTMLCanvasElement {
  const s = transformedSize(bmp.width, bmp.height, t);
  const canvas = (scratch ??= document.createElement("canvas"));
  canvas.width = s.w;
  canvas.height = s.h;
  const ctx = canvas.getContext("2d");
  if (!ctx) return canvas;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, s.w, s.h);
  ctx.save();
  ctx.translate(s.w / 2, s.h / 2);
  if (t.straighten) {
    const cover = straightenCover(s.w, s.h, t.straighten);
    ctx.scale(cover, cover);
    ctx.rotate((t.straighten * Math.PI) / 180);
  }
  if (t.rotate) ctx.rotate((t.rotate * Math.PI) / 180);
  ctx.scale(t.flipH ? -1 : 1, t.flipV ? -1 : 1);
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(bmp, -bmp.width / 2, -bmp.height / 2);
  ctx.restore();
  return canvas;
}

/** Render the final crop: transform → cut the selection → clip to the shape. */
export function renderCrop(
  canvas: HTMLCanvasElement,
  bmp: ImageBitmap,
  sel: CropSel,
  shape: CropShape,
  t: CropTransform,
  opts: RenderCropOptions = {}
): void {
  const source = drawTransformed(bmp, t);
  const s = transformedSize(bmp.width, bmp.height, t);
  const out = outputSize(sel, bmp.width, bmp.height, t, opts.target ?? "original");

  canvas.width = out.w;
  canvas.height = out.h;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, out.w, out.h);

  ctx.save();
  shapePath(ctx, out.w, out.h, shape, opts.radius ?? 0.15);
  ctx.clip();
  if (opts.background) {
    ctx.fillStyle = opts.background;
    ctx.fillRect(0, 0, out.w, out.h);
  }
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(
    source,
    sel.x * s.w, sel.y * s.h, sel.w * s.w, sel.h * s.h,
    0, 0, out.w, out.h
  );
  ctx.restore();

  // Ring, drawn inside the clip so it follows whatever shape was used.
  const ring = Math.round(((opts.ringPct ?? 0) / 100) * (Math.min(out.w, out.h) / 2));
  if (ring > 0) {
    ctx.save();
    shapePath(ctx, out.w, out.h, shape, opts.radius ?? 0.15);
    ctx.clip();
    shapePath(ctx, out.w, out.h, shape, opts.radius ?? 0.15);
    ctx.lineWidth = ring * 2; // half falls outside the clip, leaving `ring` inside
    ctx.strokeStyle = opts.ringColor ?? "#ffffff";
    ctx.stroke();
    ctx.restore();
  }
}

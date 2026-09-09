/**
 * Where an effect lands: a real alpha mask, rather than a clip path.
 *
 * `renderRedacted` used to select regions with `ctx.clip()`, which is
 * all-or-nothing per pixel. That is fine for a rectangle around a face and
 * impossible for a brush — a soft edge and a "fade" control need partial alpha,
 * which a clip path cannot express. Painting a mask canvas instead also means a
 * detected face, a hand-drawn shape and a brush stroke are the same thing by the
 * time the effect is composited, so they add and erase against each other
 * instead of living in three separate code paths.
 *
 * The cost is one more full-size canvas per render. Both it and the effect layer
 * are module-level and reused, for the reason given in `redact.ts`: these run on
 * every repaint while a slider is dragged.
 */

import { addRegionPath, toPixels, type Region } from "./redact";
import { renderEffect, type EffectId } from "./effects";

export interface BrushStroke {
  id: string;
  /** Whether this stroke adds to the masked area or cuts back out of it. */
  mode: "add" | "erase";
  /** Fraction of the image's longest side, so a stroke survives a resize. */
  size: number;
  /** 0 = hard edge, 1 = fully feathered. */
  fade: number;
  /** Normalised 0–1, in image space. */
  points: { x: number; y: number }[];
  /** Muted in the mask list: still listed, but has no effect. */
  hidden?: boolean;
}

export interface MaskInput {
  regions: Region[];
  strokes: BrushStroke[];
  /** Affect everything OUTSIDE the mask instead of inside it. */
  invert?: boolean;
}

let seq = 0;
export const newStrokeId = () => `s${Date.now().toString(36)}_${seq++}`;

/** True when there is anything at all to composite. */
export function hasMask({ regions, strokes, invert }: MaskInput): boolean {
  if (invert) return true; // inverted, an empty mask means "affect everything"
  return (
    regions.some((r) => !r.hidden && r.w > 0 && r.h > 0) ||
    strokes.some((s) => !s.hidden && s.points.length > 0)
  );
}

let maskCanvas: HTMLCanvasElement | null = null;
let layerCanvas: HTMLCanvasElement | null = null;
const sized = (ref: HTMLCanvasElement | null, W: number, H: number) => {
  const c = ref ?? document.createElement("canvas");
  c.width = W;
  c.height = H;
  return c;
};

/**
 * Paint one stroke into the mask.
 *
 * Two passes, deliberately. A single blurred stroke spreads its alpha in both
 * directions, so a thin line with a heavy fade never reaches full opacity in the
 * middle and the effect comes out semi-transparent. Drawing a solid core first
 * and the feathered halo second keeps the centre at alpha 1 while the edge still
 * ramps.
 */
function paintStroke(
  ctx: CanvasRenderingContext2D,
  stroke: BrushStroke,
  W: number,
  H: number,
  subtract: boolean
) {
  const pts = stroke.points;
  if (pts.length === 0) return;

  const width = Math.max(1, stroke.size * Math.max(W, H));
  const fade = Math.max(0, Math.min(1, stroke.fade));
  const erase = stroke.mode === "erase";
  // `subtract` is the inverted-mask case, where every paint op flips meaning.
  const cut = erase !== subtract;

  ctx.save();
  ctx.globalCompositeOperation = cut ? "destination-out" : "source-over";
  ctx.strokeStyle = "#ffffff";
  ctx.fillStyle = "#ffffff";
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  const trace = () => {
    ctx.beginPath();
    if (pts.length === 1) {
      // A tap, not a drag — a dot of the same diameter as the stroke.
      ctx.arc(pts[0].x * W, pts[0].y * H, ctx.lineWidth / 2, 0, Math.PI * 2);
      ctx.fill();
      return;
    }
    ctx.moveTo(pts[0].x * W, pts[0].y * H);
    for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x * W, pts[i].y * H);
    ctx.stroke();
  };

  // Solid core, shrinking as the fade grows.
  const core = width * (1 - fade);
  if (core >= 1) {
    ctx.filter = "none";
    ctx.lineWidth = core;
    trace();
  }
  // Feathered halo at the full width.
  if (fade > 0) {
    ctx.filter = `blur(${Math.max(1, (fade * width) / 4)}px)`;
    ctx.lineWidth = width;
    trace();
  }

  ctx.restore();
}

/**
 * Build the mask for one image: white where the effect applies.
 *
 * Inversion is done by starting from a full white canvas and subtracting,
 * rather than building the mask and flipping it afterwards — that would need a
 * second full-size canvas for no gain.
 */
export function buildMask(W: number, H: number, input: MaskInput): HTMLCanvasElement {
  const mask = (maskCanvas = sized(maskCanvas, W, H));
  const ctx = mask.getContext("2d");
  if (!ctx) return mask;

  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.globalCompositeOperation = "source-over";
  ctx.filter = "none";
  ctx.clearRect(0, 0, W, H);

  const invert = !!input.invert;
  if (invert) {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, W, H);
  }

  const usable = input.regions.filter((r) => !r.hidden && r.w > 0 && r.h > 0);
  if (usable.length > 0) {
    ctx.globalCompositeOperation = invert ? "destination-out" : "source-over";
    ctx.fillStyle = "#ffffff";
    // One path holding every region, so all of them fill — see the warning on
    // `addRegionPath`, which must not open the path itself.
    ctx.beginPath();
    for (const r of usable) addRegionPath(ctx, toPixels(r, W, H), r.shape);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
  }

  for (const s of input.strokes) if (!s.hidden) paintStroke(ctx, s, W, H, invert);

  return mask;
}

export interface MaskedRenderOptions extends MaskInput {
  effect: EffectId;
  /** 0–100 from the slider. */
  intensity: number;
  /** Fill for the `color` effect. */
  color?: string;
  /** Painted before the image, for formats without alpha. */
  background?: string | null;
}

/**
 * Draw `bmp` with `effect` applied wherever the mask says.
 *
 * The effect is rendered once over the whole image and then given the mask's
 * alpha with `destination-in`, so the number of regions and strokes costs
 * nothing extra — one effect pass per render, however many masks there are.
 */
export function renderMasked(
  canvas: HTMLCanvasElement,
  bmp: CanvasImageSource,
  W: number,
  H: number,
  opts: MaskedRenderOptions
): void {
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.globalCompositeOperation = "source-over";
  ctx.filter = "none";
  ctx.clearRect(0, 0, W, H);

  if (opts.background) {
    ctx.fillStyle = opts.background;
    ctx.fillRect(0, 0, W, H);
  }
  ctx.drawImage(bmp, 0, 0, W, H);

  // "No blur" and an empty mask both mean the untouched image.
  if (opts.effect === "none" || !hasMask(opts)) return;

  const layer = (layerCanvas = sized(layerCanvas, W, H));
  const lctx = layer.getContext("2d");
  if (!lctx) return;
  renderEffect(lctx, bmp, W, H, opts.effect, opts.intensity, opts.color);

  const mask = buildMask(W, H, opts);
  lctx.globalCompositeOperation = "destination-in";
  lctx.filter = "none";
  lctx.globalAlpha = 1;
  lctx.drawImage(mask, 0, 0);
  lctx.globalCompositeOperation = "source-over";

  ctx.drawImage(layer, 0, 0);
}

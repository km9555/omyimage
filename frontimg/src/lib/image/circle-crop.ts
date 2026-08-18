/**
 * Geometry for the circle-crop tool.
 *
 * The selection is stored **normalised against the source image**, not in
 * viewport pixels: the centre is a fraction of width/height and the radius is a
 * fraction of the half-short-side. That choice does two things — the selection
 * survives zooming and resizing the preview without drift, and one setting maps
 * sensibly across a batch of differently-sized images (a circle "60% of the way
 * across, a third of the short side wide" means the same thing on every photo,
 * where a pixel radius would not).
 *
 * Everything here is pure so it can be tested without a DOM.
 */

export type OutputSize = "original" | number;

export interface CircleSel {
  /** Centre X as a fraction of image width, 0–1. */
  cx: number;
  /** Centre Y as a fraction of image height, 0–1. */
  cy: number;
  /** Radius as a fraction of half the shorter side. 1 = touches the short edges. */
  r: number;
}

/** Largest centred circle — what the tool used to hard-code as its only option. */
export const DEFAULT_CIRCLE: CircleSel = { cx: 0.5, cy: 0.5, r: 1 };

export const MIN_R = 0.05;
export const MAX_R = 2;

/**
 * Keep a selection usable: the centre stays on the image, the radius stays
 * within sane bounds. The radius is deliberately allowed past 1 so the circle
 * can overhang the edges and pick up the background colour, which is a real
 * framing choice rather than a mistake.
 */
export function clampCircle(sel: CircleSel): CircleSel {
  const clamp01 = (v: number) => (Number.isFinite(v) ? Math.min(1, Math.max(0, v)) : 0.5);
  const r = Number.isFinite(sel.r) ? Math.min(MAX_R, Math.max(MIN_R, sel.r)) : 1;
  return { cx: clamp01(sel.cx), cy: clamp01(sel.cy), r };
}

/** The selection in source-image pixels. */
export function circlePixels(sel: CircleSel, W: number, H: number) {
  const half = Math.min(W, H) / 2;
  return { cx: sel.cx * W, cy: sel.cy * H, r: sel.r * half };
}

/**
 * Side length of the exported square.
 *
 * "original" means the circle's own diameter in source pixels, so a crop is
 * never upscaled beyond the detail the image actually has.
 */
export function outputSide(sel: CircleSel, W: number, H: number, out: OutputSize): number {
  if (out !== "original") return Math.max(1, Math.round(out));
  return Math.max(1, Math.round(circlePixels(sel, W, H).r * 2));
}

export interface ViewTransform {
  /** Pixels-per-image-pixel actually used to draw. */
  scale: number;
  /** Top-left of the drawn image inside the viewport. */
  ox: number;
  oy: number;
}

/**
 * Where the image sits inside the viewport at a given zoom and pan.
 * Zoom 1 fits the image; above that it overflows and pan decides what shows.
 */
export function viewTransform(
  W: number,
  H: number,
  vw: number,
  vh: number,
  zoom: number,
  pan: { x: number; y: number }
): ViewTransform {
  const fit = Math.min(vw / W, vh / H) || 1;
  const scale = fit * zoom;
  return { scale, ox: (vw - W * scale) / 2 + pan.x, oy: (vh - H * scale) / 2 + pan.y };
}

/** The selection projected into viewport coordinates. */
export function circleInView(sel: CircleSel, W: number, H: number, t: ViewTransform) {
  const p = circlePixels(sel, W, H);
  return { cx: t.ox + p.cx * t.scale, cy: t.oy + p.cy * t.scale, r: p.r * t.scale };
}

export type DragMode = "move" | "resize" | "pan";

/**
 * What a press at (px, py) should start.
 *
 * The edge wins over the interior so the resize ring is always reachable, even
 * on a circle small enough that its edge band covers most of it.
 */
export function hitTest(
  px: number,
  py: number,
  view: { cx: number; cy: number; r: number },
  tolerance = 12
): DragMode {
  const d = Math.hypot(px - view.cx, py - view.cy);
  if (Math.abs(d - view.r) <= tolerance) return "resize";
  if (d < view.r) return "move";
  return "pan";
}

/** Move the centre by a viewport-pixel delta, converting back to normalised units. */
export function moveCircle(
  sel: CircleSel,
  dxView: number,
  dyView: number,
  W: number,
  H: number,
  scale: number
): CircleSel {
  return clampCircle({
    cx: sel.cx + dxView / (W * scale),
    cy: sel.cy + dyView / (H * scale),
    r: sel.r,
  });
}

/** Set the radius so the edge follows the pointer. */
export function resizeCircleTo(
  sel: CircleSel,
  px: number,
  py: number,
  view: { cx: number; cy: number },
  W: number,
  H: number,
  scale: number
): CircleSel {
  const half = (Math.min(W, H) / 2) * scale;
  const d = Math.hypot(px - view.cx, py - view.cy);
  return clampCircle({ ...sel, r: half > 0 ? d / half : sel.r });
}

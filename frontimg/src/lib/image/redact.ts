/**
 * Region redaction shared by /blur-face and /blur-image.
 *
 * Regions are stored **normalised to the image** (0–1), the convention already
 * used by `circle-crop.ts`. That keeps a selection stable while the preview is
 * resized or zoomed, and lets one set of regions apply across a batch of
 * differently-sized images.
 *
 * The geometry half is pure so it can be tested without a DOM; only
 * `renderRedacted` touches a canvas.
 */

import { renderMasked } from "./mask";
import type { EffectId } from "./effects";

export type RegionShape = "rect" | "ellipse";
export type RedactStyle = "blur" | "pixelate" | "solid";

/** Where a region came from, so the mask list can name and group them. */
export type RegionSource = "face" | "text" | "shape";

export interface Region {
  id: string;
  shape: RegionShape;
  /** Defaults to "shape" — anything the user drew by hand. */
  source?: RegionSource;
  /** Muted in the mask list: still listed and outlined, but has no effect. */
  hidden?: boolean;
  /** Normalised bounds, 0–1, always with positive width/height. */
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface Rect { x: number; y: number; w: number; h: number }

/** The eight resize grips, plus the interior and "nothing here". */
export type Handle = "nw" | "n" | "ne" | "e" | "se" | "s" | "sw" | "w";
export type HitTarget = Handle | "inside" | null;

/** Smallest region we keep — below this it is almost certainly a stray click. */
export const MIN_SIZE = 0.005;

let seq = 0;
export const newRegionId = () => `r${Date.now().toString(36)}_${seq++}`;

/** Normalise a drag between two points into a positive-area region. */
export function regionFromPoints(
  a: { x: number; y: number },
  b: { x: number; y: number },
  shape: RegionShape,
  id = newRegionId()
): Region {
  return {
    id,
    shape,
    x: Math.min(a.x, b.x),
    y: Math.min(a.y, b.y),
    w: Math.abs(a.x - b.x),
    h: Math.abs(a.y - b.y),
  };
}

/**
 * Keep a region inside the image with a positive area.
 *
 * Width is clamped before x so a region dragged past an edge shrinks rather
 * than silently teleporting back inside.
 */
export function clampRegion(r: Region): Region {
  const w = Math.min(1, Math.max(MIN_SIZE, Number.isFinite(r.w) ? r.w : MIN_SIZE));
  const h = Math.min(1, Math.max(MIN_SIZE, Number.isFinite(r.h) ? r.h : MIN_SIZE));
  const x = Math.min(1 - w, Math.max(0, Number.isFinite(r.x) ? r.x : 0));
  const y = Math.min(1 - h, Math.max(0, Number.isFinite(r.y) ? r.y : 0));
  return { ...r, x, y, w, h };
}

export const toPixels = (r: Region, W: number, H: number): Rect => ({
  x: r.x * W,
  y: r.y * H,
  w: r.w * W,
  h: r.h * H,
});

export const fromPixels = (r: Rect, W: number, H: number) => ({
  x: r.x / W,
  y: r.y / H,
  w: r.w / W,
  h: r.h / H,
});

/** Grip centres in pixel space, in the order used for cursor lookup. */
export function handlePoints(px: Rect): Record<Handle, { x: number; y: number }> {
  const { x, y, w, h } = px;
  return {
    nw: { x, y },
    n: { x: x + w / 2, y },
    ne: { x: x + w, y },
    e: { x: x + w, y: y + h / 2 },
    se: { x: x + w, y: y + h },
    s: { x: x + w / 2, y: y + h },
    sw: { x, y: y + h },
    w: { x, y: y + h / 2 },
  };
}

/**
 * What a press at a pixel point targets within one region.
 *
 * Grips win over the interior so a small region stays resizable, and they are
 * tested in corner-first order so a corner press never resolves to an edge.
 */
export function hitTestRegion(
  px: number,
  py: number,
  region: Region,
  W: number,
  H: number,
  tolerance = 8
): HitTarget {
  const r = toPixels(region, W, H);
  const pts = handlePoints(r);
  const order: Handle[] = ["nw", "ne", "se", "sw", "n", "e", "s", "w"];
  for (const h of order) {
    const p = pts[h];
    if (Math.abs(px - p.x) <= tolerance && Math.abs(py - p.y) <= tolerance) return h;
  }
  if (px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h) return "inside";
  return null;
}

/** Topmost region under a point — later regions are drawn on top, so search backwards. */
export function pickRegion(
  px: number,
  py: number,
  regions: Region[],
  W: number,
  H: number,
  tolerance = 8
): { region: Region; target: HitTarget } | null {
  for (let i = regions.length - 1; i >= 0; i--) {
    const target = hitTestRegion(px, py, regions[i], W, H, tolerance);
    if (target) return { region: regions[i], target };
  }
  return null;
}

export function moveRegion(r: Region, dx: number, dy: number): Region {
  return clampRegion({ ...r, x: r.x + dx, y: r.y + dy });
}

/**
 * Drag one grip to a new normalised point.
 *
 * The opposite edge is held fixed and the result is re-normalised, so dragging
 * a handle past the far side flips the region instead of inverting its size.
 */
export function resizeRegionByHandle(r: Region, handle: Handle, nx: number, ny: number): Region {
  let left = r.x;
  let right = r.x + r.w;
  let top = r.y;
  let bottom = r.y + r.h;

  if (handle.includes("w")) left = nx;
  if (handle.includes("e")) right = nx;
  if (handle.includes("n")) top = ny;
  if (handle.includes("s")) bottom = ny;

  return clampRegion({
    ...r,
    x: Math.min(left, right),
    y: Math.min(top, bottom),
    w: Math.abs(right - left),
    h: Math.abs(bottom - top),
  });
}

export const CURSOR_FOR: Record<Handle, string> = {
  nw: "nwse-resize",
  se: "nwse-resize",
  ne: "nesw-resize",
  sw: "nesw-resize",
  n: "ns-resize",
  s: "ns-resize",
  e: "ew-resize",
  w: "ew-resize",
};

export interface RedactOptions {
  style: RedactStyle;
  /** Blur radius in px, or pixel-block size, depending on `style`. */
  strength: number;
  /** Fill used by the "solid" style. */
  solidColor?: string;
  /**
   * Redact everything OUTSIDE the regions instead of inside them — "blur the
   * background, keep the subject sharp".
   */
  invert?: boolean;
  /** Background painted first, for formats without alpha. */
  background?: string | null;
}

/**
 * Append one region as a sub-path of the path already being built.
 *
 * Deliberately does NOT call `beginPath()`. It used to, which silently
 * discarded everything accumulated so far: with several regions only the last
 * survived to be clipped, and the invert case threw away the full-canvas
 * rectangle that makes the even-odd hole work. The caller opens the path.
 */
export function addRegionPath(ctx: CanvasRenderingContext2D, r: Rect, shape: RegionShape) {
  if (shape === "ellipse") {
    ctx.moveTo(r.x + r.w, r.y + r.h / 2);
    ctx.ellipse(r.x + r.w / 2, r.y + r.h / 2, r.w / 2, r.h / 2, 0, 0, Math.PI * 2);
  } else {
    ctx.rect(r.x, r.y, r.w, r.h);
  }
  ctx.closePath();
}

/**
 * Draw the image with the given regions redacted.
 *
 * Kept as the old style/strength API because /blur-image and `RegionEditor`
 * speak it, but the work now happens in `lib/image/mask.ts` — one shared alpha
 * mask instead of a clip path, so brush strokes and regions can compose. The
 * three legacy styles map onto the effect ids one for one.
 */
export function renderRedacted(
  canvas: HTMLCanvasElement,
  bmp: ImageBitmap,
  regions: Region[],
  opts: RedactOptions
): void {
  renderMasked(canvas, bmp, bmp.width, bmp.height, {
    regions,
    strokes: [],
    invert: opts.invert,
    effect: STYLE_EFFECT[opts.style],
    /* The old API is in pixels — a blur radius or a block size — while the new
       one takes a 0-100 slider. Convert rather than reinterpret, or every
       existing /blur-image setting would silently change meaning. */
    intensity: strengthToIntensity(opts.style, opts.strength, bmp.width, bmp.height),
    color: opts.solidColor ?? "#000000",
    background: opts.background,
  });
}

/**
 * Translate the legacy style/strength pair into the new effect/intensity one.
 *
 * Exported so /blur-image can keep its pixel-valued radius slider while handing
 * `RegionEditor` what it now speaks, without either side guessing at the other
 * side's scale.
 */
export function legacyToEffect(
  style: RedactStyle,
  strength: number,
  W: number,
  H: number
): { effect: EffectId; intensity: number } {
  return { effect: STYLE_EFFECT[style], intensity: strengthToIntensity(style, strength, W, H) };
}

const STYLE_EFFECT: Record<RedactStyle, EffectId> = {
  blur: "gaussian",
  pixelate: "pixelate",
  solid: "color",
};

/**
 * Invert the effect module's intensity mapping, so a legacy pixel value lands
 * on the same pixel value after the round trip.
 */
function strengthToIntensity(style: RedactStyle, strength: number, W: number, H: number): number {
  if (style === "solid") return 100;
  const diag = Math.hypot(W, H);
  /* Must mirror `blurCeiling`/`blockCeiling` in effects.ts exactly — this is
     the inverse of that mapping, and a drift between them shows up as a
     slider whose top end quietly stops responding. */
  const max = style === "blur" ? Math.max(64, diag * 0.05) : Math.max(64, diag * 0.06);
  const min = style === "blur" ? 1 : 2;
  if (max <= min) return 100;
  return Math.max(0, Math.min(100, ((strength - min) / (max - min)) * 100));
}

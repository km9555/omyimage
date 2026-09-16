/**
 * Oriented-box geometry for the /merge-images canvas.
 *
 * `redact.ts` covers the axis-aligned case and is reused everywhere a rectangle
 * cannot turn — crop, blur regions, redaction. None of it survives rotation:
 * `hitTestRegion` is a plain `x >= r.x && x <= r.x + r.w` test, `handlePoints`
 * returns eight points with no rotation grip, and resizing works by holding an
 * opposite *edge* fixed, which stops meaning anything once a box is at 30°.
 *
 * So this is the rotated counterpart, and it is deliberately a separate module:
 * pure functions, no canvas, no React, no DOM. That is what lets the maths be
 * run and checked in Node before a single pixel is drawn — an axis-aligned hit
 * test looks perfectly correct on screen right up until someone rotates
 * something, and by then it is buried under pointer handling.
 *
 * Convention throughout: **centre-based**, because rotation is about the centre,
 * and angles in **degrees, clockwise**, because that is what a user-facing
 * rotation control shows.
 */

export interface Placement {
  id: string;
  /** Centre, in canvas pixels. */
  cx: number;
  cy: number;
  /** Drawn size, in canvas pixels. */
  w: number;
  h: number;
  /** Clockwise, in degrees. */
  angle: number;
}

export type Corner = "nw" | "ne" | "se" | "sw";
export type HitTarget = Corner | "rotate" | "body" | null;

/** Local-space sign of each corner, as (x, y) multipliers of the half-extents. */
const CORNER_SIGN: Record<Corner, { sx: number; sy: number }> = {
  nw: { sx: -1, sy: -1 },
  ne: { sx: 1, sy: -1 },
  se: { sx: 1, sy: 1 },
  sw: { sx: -1, sy: 1 },
};

const OPPOSITE: Record<Corner, Corner> = { nw: "se", ne: "sw", se: "nw", sw: "ne" };

const rad = (deg: number) => (deg * Math.PI) / 180;

/** Rotate a vector clockwise by `deg`. */
function rotate(x: number, y: number, deg: number): { x: number; y: number } {
  const a = rad(deg);
  const c = Math.cos(a);
  const s = Math.sin(a);
  return { x: x * c - y * s, y: x * s + y * c };
}

/**
 * A world point expressed in the box's own frame: origin at the centre, axes
 * along the box's sides.
 *
 * This is the whole trick behind every function below. Once a point is in local
 * space the box is axis-aligned again, so hit tests and resizes become the
 * simple arithmetic they always were.
 */
export function toLocal(px: number, py: number, p: Placement): { x: number; y: number } {
  return rotate(px - p.cx, py - p.cy, -p.angle);
}

/** The inverse: a point in the box's frame, back out to canvas coordinates. */
export function toWorld(lx: number, ly: number, p: Placement): { x: number; y: number } {
  const r = rotate(lx, ly, p.angle);
  return { x: p.cx + r.x, y: p.cy + r.y };
}

/** The four corners in canvas space, in nw, ne, se, sw order. */
export function corners(p: Placement): { x: number; y: number }[] {
  return (["nw", "ne", "se", "sw"] as Corner[]).map((k) => {
    const { sx, sy } = CORNER_SIGN[k];
    return toWorld((sx * p.w) / 2, (sy * p.h) / 2, p);
  });
}

/** One named corner in canvas space. */
export function cornerPoint(p: Placement, k: Corner): { x: number; y: number } {
  const { sx, sy } = CORNER_SIGN[k];
  return toWorld((sx * p.w) / 2, (sy * p.h) / 2, p);
}

/** Where the rotation grip sits: `dist` beyond the middle of the top edge. */
export function rotateGrip(p: Placement, dist: number): { x: number; y: number } {
  return toWorld(0, -p.h / 2 - dist, p);
}

/** Is the point inside the box, at any angle? */
export function hitPlacement(px: number, py: number, p: Placement): boolean {
  const l = toLocal(px, py, p);
  return Math.abs(l.x) <= p.w / 2 && Math.abs(l.y) <= p.h / 2;
}

/**
 * Which grab handle the point is on, if any.
 *
 * Corners win over the rotation grip when both are in range, since a corner is
 * the more common intent and the grip can be reached by moving a little further
 * out.
 */
export function hitHandle(
  px: number,
  py: number,
  p: Placement,
  handleRadius: number,
  gripDist: number
): Corner | "rotate" | null {
  const near = (q: { x: number; y: number }) =>
    Math.abs(px - q.x) <= handleRadius && Math.abs(py - q.y) <= handleRadius;

  for (const k of ["nw", "ne", "se", "sw"] as Corner[]) {
    if (near(cornerPoint(p, k))) return k;
  }
  return near(rotateGrip(p, gripDist)) ? "rotate" : null;
}

/** Topmost-first, so the item drawn last is the one you grab. */
export function pickPlacement(px: number, py: number, list: Placement[]): Placement | null {
  for (let i = list.length - 1; i >= 0; i--) {
    if (hitPlacement(px, py, list[i])) return list[i];
  }
  return null;
}

/**
 * Resize by dragging a corner, keeping the opposite corner pinned.
 *
 * Proportional on purpose: a merged photo that has been stretched on one axis
 * looks like a mistake, and the auto layouts already cover "make them all the
 * same size". The scale is taken from whichever axis the pointer moved further
 * along, so the drag feels like it follows the cursor on both.
 *
 * The anchor is captured in **world** space before anything changes, and the new
 * centre is derived back from it. Recomputing the centre from the old one is
 * what breaks at an angle: the offset to the anchor rotates too.
 */
export function resizeByCorner(
  p: Placement,
  corner: Corner,
  px: number,
  py: number,
  minSize = 8
): Placement {
  const anchorKey = OPPOSITE[corner];
  const anchor = cornerPoint(p, anchorKey);

  // How far the pointer is from the anchor, measured along the box's own axes.
  const l = toLocal(px, py, p);
  const a = toLocal(anchor.x, anchor.y, p);
  const wantW = Math.abs(l.x - a.x);
  const wantH = Math.abs(l.y - a.y);

  const scale = Math.max(wantW / Math.max(1, p.w), wantH / Math.max(1, p.h));
  const w = Math.max(minSize, p.w * scale);
  const h = Math.max(minSize, p.h * scale);

  // The anchor must not move, so place the new centre relative to it.
  const sign = CORNER_SIGN[anchorKey];
  const off = rotate((-sign.sx * w) / 2, (-sign.sy * h) / 2, p.angle);
  return { ...p, w, h, cx: anchor.x + off.x, cy: anchor.y + off.y };
}

/** Uniform scale about the centre — what the layer list's size control uses. */
export function scalePlacement(p: Placement, factor: number, minSize = 8): Placement {
  return {
    ...p,
    w: Math.max(minSize, p.w * factor),
    h: Math.max(minSize, p.h * factor),
  };
}

/**
 * The angle that points the box's top edge at the pointer.
 *
 * The grip sits above the top edge, so at angle 0 the vector from the centre to
 * the pointer is (0, -1), which `atan2` calls -90°. The +90 puts zero where the
 * user expects it.
 */
export function angleFrom(p: Placement, px: number, py: number): number {
  return (Math.atan2(py - p.cy, px - p.cx) * 180) / Math.PI + 90;
}

/** Nearest multiple of `step`, for the Shift constraint. */
export const snapAngle = (deg: number, step: number) => Math.round(deg / step) * step;

/** Fold into [0, 360) so the UI never shows -270°. */
export const normalizeAngle = (deg: number) => ((deg % 360) + 360) % 360;

export interface Bounds {
  x: number;
  y: number;
  w: number;
  h: number;
}

/**
 * The axis-aligned box containing every placement, corners included.
 *
 * Rotation is why this needs the corners rather than the width and height: a
 * square turned 45° reaches further than its own side length, so trimming the
 * canvas to `w × h` would slice the points off. Backs "Fit to content".
 */
export function boundsOf(list: Placement[]): Bounds | null {
  if (list.length === 0) return null;
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  for (const p of list) {
    for (const c of corners(p)) {
      if (c.x < minX) minX = c.x;
      if (c.y < minY) minY = c.y;
      if (c.x > maxX) maxX = c.x;
      if (c.y > maxY) maxY = c.y;
    }
  }
  return { x: minX, y: minY, w: maxX - minX, h: maxY - minY };
}

/** Shift every placement by the same amount — used after a canvas resize. */
export const translateAll = (list: Placement[], dx: number, dy: number): Placement[] =>
  list.map((p) => ({ ...p, cx: p.cx + dx, cy: p.cy + dy }));

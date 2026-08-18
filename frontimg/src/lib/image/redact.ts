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

export type RegionShape = "rect" | "ellipse";
export type RedactStyle = "blur" | "pixelate" | "solid";

export interface Region {
  id: string;
  shape: RegionShape;
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
function addRegionPath(ctx: CanvasRenderingContext2D, r: Rect, shape: RegionShape) {
  if (shape === "ellipse") {
    ctx.moveTo(r.x + r.w, r.y + r.h / 2);
    ctx.ellipse(r.x + r.w / 2, r.y + r.h / 2, r.w / 2, r.h / 2, 0, 0, Math.PI * 2);
  } else {
    ctx.rect(r.x, r.y, r.w, r.h);
  }
  ctx.closePath();
}

/** Scratch canvas reused across pixelate regions and repaints. */
let scratch: HTMLCanvasElement | null = null;
const getScratch = () => (scratch ??= document.createElement("canvas"));

/**
 * Draw the image with the given regions redacted.
 *
 * The blurred copy is produced **once** per call and composited per region. The
 * previous implementation re-drew the entire bitmap through a blur filter for
 * every region, so N regions cost N full-image blurs on every repaint — which
 * on a slider drag meant N blurs per frame.
 */
export function renderRedacted(
  canvas: HTMLCanvasElement,
  bmp: ImageBitmap,
  regions: Region[],
  opts: RedactOptions
): void {
  const W = bmp.width;
  const H = bmp.height;
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  if (opts.background) {
    ctx.fillStyle = opts.background;
    ctx.fillRect(0, 0, W, H);
  }
  ctx.drawImage(bmp, 0, 0);

  const usable = regions.filter((r) => r.w > 0 && r.h > 0);
  if (usable.length === 0) return;

  // Build the redacted layer once, then reveal it only where it belongs.
  const layer = getScratch();
  layer.width = W;
  layer.height = H;
  const lctx = layer.getContext("2d", { willReadFrequently: false });
  if (!lctx) return;
  lctx.setTransform(1, 0, 0, 1, 0, 0);
  lctx.clearRect(0, 0, W, H);

  if (opts.style === "solid") {
    lctx.fillStyle = opts.solidColor ?? "#000000";
    lctx.fillRect(0, 0, W, H);
  } else if (opts.style === "blur") {
    lctx.filter = `blur(${Math.max(1, opts.strength)}px)`;
    lctx.drawImage(bmp, 0, 0);
    lctx.filter = "none";
  } else {
    // Pixelate: shrink then scale back up with smoothing off.
    const px = Math.max(2, opts.strength);
    const sw = Math.max(1, Math.round(W / px));
    const sh = Math.max(1, Math.round(H / px));
    const tiny = document.createElement("canvas");
    tiny.width = sw;
    tiny.height = sh;
    const tctx = tiny.getContext("2d");
    if (!tctx) return;
    tctx.drawImage(bmp, 0, 0, sw, sh);
    lctx.imageSmoothingEnabled = false;
    lctx.drawImage(tiny, 0, 0, sw, sh, 0, 0, W, H);
    lctx.imageSmoothingEnabled = true;
  }

  ctx.save();
  // One path holding every region as a sub-path, so all of them clip — not
  // just the last.
  ctx.beginPath();
  if (opts.invert) {
    // Even-odd with a full-canvas rect leaves the regions as holes, so the
    // redacted layer lands everywhere except inside them.
    ctx.rect(0, 0, W, H);
    for (const r of usable) addRegionPath(ctx, toPixels(r, W, H), r.shape);
    ctx.clip("evenodd");
  } else {
    for (const r of usable) addRegionPath(ctx, toPixels(r, W, H), r.shape);
    ctx.clip();
  }
  ctx.drawImage(layer, 0, 0);
  ctx.restore();
}

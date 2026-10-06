/**
 * image-overlay: one picture drawn over another with opacity, a blend mode and
 * either free placement (size, position, rotation) or a cover fit. The same
 * function paints the preview and the full-size result, so they match.
 */

export type Blend = "source-over" | "multiply" | "screen" | "overlay" | "soft-light" | "darken" | "lighten" | "difference";
export type OverlayFit = "place" | "cover";

export interface OverlaySettings {
  /** 0–100. */
  opacity: number;
  blend: Blend;
  fit: OverlayFit;
  /** Overlay width as % of the background's width (place). */
  size: number;
  /** Overlay centre as a share of the background's width / height (place). */
  x: number;
  y: number;
  /** Degrees, clockwise (place). */
  rotation: number;
}

export const DEFAULT_OVERLAY: OverlaySettings = {
  opacity: 70,
  blend: "source-over",
  fit: "place",
  size: 40,
  x: 0.5,
  y: 0.5,
  rotation: 0,
};

/** The overlay's unrotated box on a W × H background whose overlay is ow × oh. */
export function overlayBox(W: number, H: number, ow: number, oh: number, s: OverlaySettings) {
  if (s.fit === "cover") {
    const k = Math.max(W / ow, H / oh);
    return { cx: W / 2, cy: H / 2, w: ow * k, h: oh * k };
  }
  const w = (W * s.size) / 100;
  return { cx: s.x * W, cy: s.y * H, w, h: (w * oh) / ow };
}

/**
 * Centre for one of the nine positions (0 = top left … 8 = bottom right), with
 * the overlay's edge against the background's edge — or centred on an axis
 * where it is bigger than the background.
 */
export function snapPosition(pos: number, W: number, H: number, ow: number, oh: number, s: OverlaySettings) {
  const b = overlayBox(W, H, ow, oh, { ...s, fit: "place" });
  const hx = Math.min(0.5, b.w / 2 / W);
  const hy = Math.min(0.5, b.h / 2 / H);
  const col = pos % 3;
  const row = Math.floor(pos / 3);
  return {
    x: col === 0 ? hx : col === 1 ? 0.5 : 1 - hx,
    y: row === 0 ? hy : row === 1 ? 0.5 : 1 - hy,
  };
}

/**
 * Paint `base` at W × H with `over` on top. `ow` × `oh` is the overlay's
 * natural size (only its shape matters, so a scaled-down copy can be drawn).
 * `bg` fills behind everything — for JPG, which cannot be transparent.
 */
export function paintOverlay(
  canvas: HTMLCanvasElement,
  base: CanvasImageSource,
  over: CanvasImageSource | null,
  W: number,
  H: number,
  ow: number,
  oh: number,
  s: OverlaySettings,
  bg: string | null,
): void {
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.clearRect(0, 0, W, H);
  if (bg) {
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);
  }
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(base, 0, 0, W, H);
  if (!over) return;
  const b = overlayBox(W, H, ow, oh, s);
  ctx.save();
  ctx.globalAlpha = s.opacity / 100;
  ctx.globalCompositeOperation = s.blend;
  ctx.translate(b.cx, b.cy);
  if (s.fit === "place" && s.rotation) ctx.rotate((s.rotation * Math.PI) / 180);
  ctx.drawImage(over, -b.w / 2, -b.h / 2, b.w, b.h);
  ctx.restore();
}

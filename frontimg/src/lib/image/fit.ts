/**
 * How a source image is made to meet an exact target box.
 *
 * The resize tool's pixel/percent modes compute one scale factor and are done.
 * A social-media preset is different: the target is an exact W×H that almost
 * never matches the source ratio, so something has to give — bars, cropped
 * pixels, or a smaller output. This module is the three honest answers to that,
 * and nothing else. Stretching to the exact box is deliberately not offered.
 *
 * Pure, so the geometry is testable in Node. Names match sharp's `fit` values,
 * which is what the server fallback forwards to `/api/image/resize`.
 */

export type FitMode =
  /** Keep the ratio, shrink to sit inside the box. Output is smaller than the box. */
  | "inside"
  /** Keep the ratio, cover the box, centre-crop the overflow. Output is the box. */
  | "cover"
  /** Keep the ratio, sit inside the box, pad the rest. Output is the box. */
  | "contain";

export interface FitResult {
  /** Size the image is drawn at. */
  content: { w: number; h: number };
  /** Size of the exported image. Larger than `content` only when padding. */
  canvas: { w: number; h: number };
  /**
   * Source rectangle to read from, in source pixels. Only `cover` sets it —
   * everywhere else the whole image is drawn.
   */
  source?: { x: number; y: number; w: number; h: number };
}

const px = (n: number) => Math.max(1, Math.round(n));

/**
 * Fit a `sw × sh` source into a `tw × th` box.
 *
 * `tw`/`th` are both required: a social preset always names both sides, unlike
 * the pixel mode where one may be left blank.
 */
export function fitBox(sw: number, sh: number, tw: number, th: number, mode: FitMode): FitResult {
  const W = px(tw);
  const H = px(th);
  if (!(sw > 0) || !(sh > 0)) return { content: { w: W, h: H }, canvas: { w: W, h: H } };

  if (mode === "cover") {
    // Read the largest centred rectangle of the source that already has the
    // target ratio, then scale that to the box. Cropping on the way in rather
    // than drawing oversized and clipping keeps the canvas exactly W×H.
    const targetRatio = W / H;
    const srcRatio = sw / sh;
    const cw = srcRatio > targetRatio ? sh * targetRatio : sw;
    const ch = srcRatio > targetRatio ? sh : sw / targetRatio;
    return {
      content: { w: W, h: H },
      canvas: { w: W, h: H },
      source: { x: (sw - cw) / 2, y: (sh - ch) / 2, w: cw, h: ch },
    };
  }

  const s = Math.min(W / sw, H / sh);
  const content = { w: px(sw * s), h: px(sh * s) };
  return mode === "contain"
    ? { content, canvas: { w: W, h: H } }
    : { content, canvas: content };
}

/** Sentence fragment for the rail note — "cropped to fill", etc. */
export const FIT_NOTE: Record<FitMode, string> = {
  cover: "cropped to fill",
  contain: "padded to fit",
  inside: "fitted inside",
};

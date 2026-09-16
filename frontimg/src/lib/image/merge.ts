/**
 * Layout and compositing for /merge-images.
 *
 * Same shape as `frame.ts`: geometry that can be reasoned about without a
 * canvas, then a painter that consumes it. That split is what lets the tool show
 * the output size before drawing anything, and what lets the live preview and
 * the exported file come from one function rather than two that drift.
 *
 * Positions are `Placement`s from `obb.ts` — centre-based and carrying an angle
 * — so an automatic row and a hand-dragged collage are the same data by the time
 * they reach the painter. The Custom mode is seeded from an automatic layout for
 * exactly that reason: there is nothing to convert.
 */

import type { Placement } from "./obb";
import { fitBox } from "./fit";

export type MergeLayout = "horizontal" | "vertical" | "grid" | "custom";

/**
 * How each image is sized inside the arrangement.
 *
 * The meaning follows the layout, because what people want differs: in a row
 * the request is almost always "make them the same height", in a grid it is
 * "make them the same tile".
 */
export type CellFit =
  /** Native pixels, centred. Nothing is resampled — the original behaviour. */
  | "original"
  /** Row: equal heights. Column: equal widths. Grid: contained in a uniform cell. */
  | "fit"
  /** Uniform cells; each image covers its cell and the overflow is cropped. */
  | "fill";

export const CELL_FITS: { value: CellFit; label: string; hint: string }[] = [
  { value: "original", label: "Original", hint: "Native size, nothing resampled" },
  { value: "fit", label: "Match", hint: "Equal heights in a row, equal widths in a column" },
  { value: "fill", label: "Fill", hint: "Identical tiles, overflow cropped" },
];

export interface SourceSize {
  id: string;
  w: number;
  h: number;
}

/** A placement that may also crop its source, which `fill` needs. */
export interface MergePlacement extends Placement {
  source?: { x: number; y: number; w: number; h: number };
}

export interface AutoOptions {
  layout: "horizontal" | "vertical" | "grid";
  /** Pixels between cells. */
  gap: number;
  /** Grid columns, or null to choose automatically. */
  cols: number | null;
  fit: CellFit;
}

export interface AutoLayout {
  W: number;
  H: number;
  placements: MergePlacement[];
}

/**
 * Columns and rows for `n` images when the user has not chosen.
 *
 * The square-root default with a few hand-picked cases, lifted from
 * `lib/pdf/images-to-pdf.ts` where the same question is already answered well.
 * Four as 2×2 and nine as 3×3 matter because `ceil(sqrt(n))` alone would still
 * say 2 and 3 — but six as 3×2 rather than 3×2-by-accident is the useful one.
 */
export function gridDims(n: number, landscape = true): { cols: number; rows: number } {
  if (n <= 1) return { cols: 1, rows: 1 };
  if (n === 2) return landscape ? { cols: 2, rows: 1 } : { cols: 1, rows: 2 };
  if (n === 4) return { cols: 2, rows: 2 };
  if (n === 6) return landscape ? { cols: 3, rows: 2 } : { cols: 2, rows: 3 };
  if (n === 9) return { cols: 3, rows: 3 };
  const cols = Math.ceil(Math.sqrt(n));
  return { cols, rows: Math.ceil(n / cols) };
}

const place = (id: string, x: number, y: number, w: number, h: number): MergePlacement => ({
  id,
  cx: x + w / 2,
  cy: y + h / 2,
  w,
  h,
  angle: 0,
});

/** Centre an image in a cell, sized per the fit mode. */
function inCell(
  s: SourceSize,
  x: number,
  y: number,
  cw: number,
  ch: number,
  fit: CellFit
): MergePlacement {
  if (fit === "original") {
    return place(s.id, x + (cw - s.w) / 2, y + (ch - s.h) / 2, s.w, s.h);
  }
  const box = fitBox(s.w, s.h, cw, ch, fit === "fill" ? "cover" : "inside");
  const w = fit === "fill" ? cw : box.content.w;
  const h = fit === "fill" ? ch : box.content.h;
  const p = place(s.id, x + (cw - w) / 2, y + (ch - h) / 2, w, h);
  return box.source ? { ...p, source: box.source } : p;
}

/**
 * Arrange images into a row, a column or a grid.
 *
 * Pure: it never touches a canvas or a bitmap, only sizes. The `original` paths
 * reproduce the tool's long-standing behaviour exactly — native pixels, centred
 * on the cross axis — because that is the one people rely on for stitching
 * screenshots without resampling them.
 */
export function layoutAuto(sizes: SourceSize[], o: AutoOptions): AutoLayout {
  const n = sizes.length;
  if (n === 0) return { W: 0, H: 0, placements: [] };
  const gap = Math.max(0, o.gap);
  const maxW = Math.max(...sizes.map((s) => s.w));
  const maxH = Math.max(...sizes.map((s) => s.h));

  if (o.layout === "horizontal") {
    if (o.fit === "original") {
      const H = maxH;
      const W = sizes.reduce((a, s) => a + s.w, 0) + gap * (n - 1);
      let x = 0;
      const placements = sizes.map((s) => {
        const p = place(s.id, x, (H - s.h) / 2, s.w, s.h);
        x += s.w + gap;
        return p;
      });
      return { W, H, placements };
    }
    if (o.fit === "fit") {
      // Equal heights: every image scaled so its height is the tallest one's.
      const H = maxH;
      const widths = sizes.map((s) => Math.round((s.w * H) / s.h));
      const W = widths.reduce((a, w) => a + w, 0) + gap * (n - 1);
      let x = 0;
      const placements = sizes.map((s, i) => {
        const p = place(s.id, x, 0, widths[i], H);
        x += widths[i] + gap;
        return p;
      });
      return { W, H, placements };
    }
    // fill — uniform cells, cropped to cover
    const W = n * maxW + gap * (n - 1);
    return {
      W,
      H: maxH,
      placements: sizes.map((s, i) => inCell(s, i * (maxW + gap), 0, maxW, maxH, "fill")),
    };
  }

  if (o.layout === "vertical") {
    if (o.fit === "original") {
      const W = maxW;
      const H = sizes.reduce((a, s) => a + s.h, 0) + gap * (n - 1);
      let y = 0;
      const placements = sizes.map((s) => {
        const p = place(s.id, (W - s.w) / 2, y, s.w, s.h);
        y += s.h + gap;
        return p;
      });
      return { W, H, placements };
    }
    if (o.fit === "fit") {
      // Equal widths.
      const W = maxW;
      const heights = sizes.map((s) => Math.round((s.h * W) / s.w));
      const H = heights.reduce((a, h) => a + h, 0) + gap * (n - 1);
      let y = 0;
      const placements = sizes.map((s, i) => {
        const p = place(s.id, 0, y, W, heights[i]);
        y += heights[i] + gap;
        return p;
      });
      return { W, H, placements };
    }
    const H = n * maxH + gap * (n - 1);
    return {
      W: maxW,
      H,
      placements: sizes.map((s, i) => inCell(s, 0, i * (maxH + gap), maxW, maxH, "fill")),
    };
  }

  // grid — uniform cells sized to the largest image, whatever the fit mode
  const cols = Math.max(1, o.cols ?? gridDims(n, maxW >= maxH).cols);
  const rows = Math.ceil(n / cols);
  const W = cols * maxW + gap * (cols - 1);
  const H = rows * maxH + gap * (rows - 1);
  const placements = sizes.map((s, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    return inCell(s, col * (maxW + gap), row * (maxH + gap), maxW, maxH, o.fit);
  });
  return { W, H, placements };
}

/**
 * Draw the placements onto a canvas.
 *
 * `scale` lets the on-screen preview render a reduced copy of a composite that
 * might be 12000px wide, while the export calls the same function at 1. One
 * painter for both is what guarantees the download matches what was on screen.
 *
 * Note this deliberately does NOT use `drawTransformed` from `crop.ts` for the
 * rotation: that helper renders through a module-level shared scratch canvas, so
 * the second image in the loop would overwrite the first.
 */
export function paintMerge(
  canvas: HTMLCanvasElement,
  bmps: Map<string, CanvasImageSource>,
  W: number,
  H: number,
  placements: MergePlacement[],
  bg: string | null,
  scale = 1
): void {
  canvas.width = Math.max(1, Math.round(W * scale));
  canvas.height = Math.max(1, Math.round(H * scale));
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  ctx.setTransform(scale, 0, 0, scale, 0, 0);
  ctx.clearRect(0, 0, W, H);
  if (bg) {
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);
  }

  ctx.imageSmoothingQuality = "high";
  for (const p of placements) {
    const bmp = bmps.get(p.id);
    if (!bmp) continue;
    ctx.save();
    ctx.translate(p.cx, p.cy);
    if (p.angle) ctx.rotate((p.angle * Math.PI) / 180);
    if (p.source) {
      ctx.drawImage(bmp, p.source.x, p.source.y, p.source.w, p.source.h, -p.w / 2, -p.h / 2, p.w, p.h);
    } else {
      ctx.drawImage(bmp, -p.w / 2, -p.h / 2, p.w, p.h);
    }
    ctx.restore();
  }
  ctx.setTransform(1, 0, 0, 1, 0, 0);
}

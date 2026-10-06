/**
 * Sprite sheets: every frame of an animation laid out on one PNG, for CSS
 * `steps()` animations and game engines.
 */
import type { FrameSource } from "@/lib/gif/frames";

export type SpriteLayout = "grid" | "row" | "column";

/**
 * Canvas limits that hold in every browser. Safari caps a canvas at about
 * 16.7 million pixels (4096 × 4096) and every browser at 16384 px a side;
 * past either, toBlob returns nothing.
 */
export const MAX_SIDE = 16384;
export const MAX_AREA = 16_777_216;

export interface SpriteGrid { cols: number; rows: number; width: number; height: number }

export function spriteGrid(count: number, fw: number, fh: number, layout: SpriteLayout, columns: number, gap: number): SpriteGrid {
  const cols = layout === "row" ? count : layout === "column" ? 1 : Math.max(1, Math.min(count, columns));
  const rows = Math.ceil(count / cols);
  return { cols, rows, width: cols * fw + (cols - 1) * gap, height: rows * fh + (rows - 1) * gap };
}

export const fitsCanvas = (g: SpriteGrid) => g.width <= MAX_SIDE && g.height <= MAX_SIDE && g.width * g.height <= MAX_AREA;

export async function renderSprite(
  src: FrameSource,
  frames: number[],
  o: { fw: number; fh: number; grid: SpriteGrid; gap: number; background: string | null; onProgress?: (fraction: number) => void },
): Promise<Blob> {
  const canvas = document.createElement("canvas");
  canvas.width = o.grid.width;
  canvas.height = o.grid.height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas is not supported in this browser.");
  if (o.background) { ctx.fillStyle = o.background; ctx.fillRect(0, 0, canvas.width, canvas.height); }
  // Same size: copy pixels exactly. Smaller: smooth the downscale.
  const scaled = o.fw !== src.width || o.fh !== src.height;
  ctx.imageSmoothingEnabled = scaled;
  ctx.imageSmoothingQuality = "high";
  for (let k = 0; k < frames.length; k++) {
    const f = await src.frame(frames[k]);
    const x = (k % o.grid.cols) * (o.fw + o.gap);
    const y = Math.floor(k / o.grid.cols) * (o.fh + o.gap);
    ctx.drawImage(f, x, y, o.fw, o.fh);
    o.onProgress?.((k + 1) / frames.length);
  }
  const blob = await new Promise<Blob | null>((r) => canvas.toBlob(r, "image/png"));
  if (!blob) throw new Error("Could not export the image.");
  return blob;
}

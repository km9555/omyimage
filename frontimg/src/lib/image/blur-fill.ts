/**
 * "Blur fill": the whole picture in a box of another shape, with the empty
 * bands filled by a blurred, enlarged copy of the same picture instead of a
 * flat colour. It is what the Stories and Reels editors do with a landscape
 * photo, and the third honest answer (after crop and pad) to "make this 9:16
 * without stretching it" — /resize-image's social mode offers it as a fit.
 *
 * The backdrop is blurred at 1/8 of the output size and scaled back up: a
 * box blur on ~135 × 240 pixels costs nothing, and a blurred picture loses
 * nothing visible by being upscaled. The blur is done in JS (`boxBlur`), not
 * with `ctx.filter`, so it looks the same in every browser and its edges stay
 * full colour instead of fading to transparent.
 */
import { fitBox } from "./fit";
import { boxBlur } from "./canvas-filter";
import { canvasToBlob, CanvasTooLargeError, type ExportMime, type RasterResult } from "./raster";
import { canBrowserHandlePixels } from "@/lib/process-router";

/** The backdrop is worked on at 1/SHRINK of the output size. */
const SHRINK = 8;

export interface BlurFillOptions {
  mime: ExportMime;
  /** 0–1, JPG/WEBP only. */
  quality?: number;
  /** Painted first. JPG needs one (no alpha); null keeps a transparent source's alpha. */
  background?: string | null;
}

/** Draw `file` whole, centred in a `W × H` canvas, over a blurred cover-fit copy of itself. */
export async function rasterizeBlurFill(
  file: Blob,
  W: number,
  H: number,
  opts: BlurFillOptions,
): Promise<RasterResult> {
  const w = Math.max(1, Math.round(W));
  const h = Math.max(1, Math.round(H));
  if (!canBrowserHandlePixels(w * h)) throw new CanvasTooLargeError(w, h);

  const bmp = await createImageBitmap(file, { imageOrientation: "from-image" });
  const canvas = document.createElement("canvas");
  const small = document.createElement("canvas");
  try {
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas is not supported in this browser.");
    const bg = opts.mime === "image/jpeg" ? opts.background ?? "#ffffff" : opts.background;
    if (bg) {
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);
    }
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    // Backdrop: the centred cover crop, shrunk, blurred, scaled back up.
    const cover = fitBox(bmp.width, bmp.height, w, h, "cover").source!;
    small.width = Math.max(1, Math.ceil(w / SHRINK));
    small.height = Math.max(1, Math.ceil(h / SHRINK));
    const sctx = small.getContext("2d", { willReadFrequently: true });
    if (!sctx) throw new Error("Canvas is not supported in this browser.");
    sctx.imageSmoothingEnabled = true;
    sctx.imageSmoothingQuality = "high";
    sctx.drawImage(bmp, cover.x, cover.y, cover.w, cover.h, 0, 0, small.width, small.height);
    const img = sctx.getImageData(0, 0, small.width, small.height);
    // ~6% of the shorter side: on 1080 × 1920 that is a ~64 px blur, enough
    // that the backdrop reads as colour and light, not as a second picture.
    const radius = Math.max(2, Math.round(Math.min(small.width, small.height) * 0.06));
    for (let pass = 0; pass < 3; pass++) boxBlur(img.data, small.width, small.height, radius);
    sctx.putImageData(img, 0, 0);
    ctx.drawImage(small, 0, 0, w, h);

    // Foreground: the whole picture, contain-fitted and centred.
    const fg = fitBox(bmp.width, bmp.height, w, h, "contain").content;
    ctx.drawImage(bmp, Math.round((w - fg.w) / 2), Math.round((h - fg.h) / 2), fg.w, fg.h);

    const blob = await canvasToBlob(canvas, opts.mime, opts.quality);
    return { blob, width: w, height: h };
  } finally {
    bmp.close();
    small.width = 0;
    small.height = 0;
    canvas.width = 0;
    canvas.height = 0;
  }
}

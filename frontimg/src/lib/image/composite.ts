/**
 * Compositing a background-removal cut-out (a transparent PNG from
 * /api/image/remove-background) back onto something: a flat colour for
 * passport and ID photos ("change photo background to white / blue / red"),
 * or a blurred copy of the original photo ("blur background", the portrait-
 * mode look).
 *
 * Runs in the browser on the server's result, so changing the colour or the
 * blur strength never calls the AI endpoint again — one metered run, as many
 * backgrounds as the visitor wants to try.
 */
import { canvasToBlob, type ExportMime } from "@/lib/image/raster";

async function bitmapOf(blob: Blob): Promise<ImageBitmap> {
  return createImageBitmap(blob, { imageOrientation: "from-image" });
}

function canvas(w: number, h: number): [HTMLCanvasElement, CanvasRenderingContext2D] {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const ctx = c.getContext("2d");
  if (!ctx) throw new Error("Could not create a canvas.");
  return [c, ctx];
}

/** The cut-out over a solid colour. JPG by default — ID portals want JPG. */
export async function compositeOnColor(
  cutout: Blob,
  color: string,
  mime: ExportMime = "image/jpeg",
  quality = 0.92,
): Promise<Blob> {
  const fg = await bitmapOf(cutout);
  const [c, ctx] = canvas(fg.width, fg.height);
  try {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.drawImage(fg, 0, 0);
    return await canvasToBlob(c, mime, quality);
  } finally {
    fg.close();
    c.width = 0;
    c.height = 0;
  }
}

/**
 * Blur `src` into `ctx` at w×h. Uses the canvas `filter` where the browser
 * has it; otherwise blurs by drawing through a small intermediate canvas and
 * scaling back up, which on a background reads the same.
 */
function drawBlurred(ctx: CanvasRenderingContext2D, src: ImageBitmap, w: number, h: number, radius: number) {
  if ("filter" in ctx && radius > 0) {
    ctx.filter = `blur(${radius}px)`;
    // Draw slightly oversized so the blur doesn't pull transparent edges in.
    const pad = radius * 2;
    ctx.drawImage(src, -pad, -pad, w + pad * 2, h + pad * 2);
    ctx.filter = "none";
    return;
  }
  const factor = Math.max(2, Math.round(radius / 2));
  const sw = Math.max(1, Math.round(w / factor));
  const sh = Math.max(1, Math.round(h / factor));
  const [small, sctx] = canvas(sw, sh);
  sctx.imageSmoothingEnabled = true;
  sctx.imageSmoothingQuality = "high";
  sctx.drawImage(src, 0, 0, sw, sh);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(small, 0, 0, w, h);
  small.width = 0;
  small.height = 0;
}

/**
 * The cut-out over a blurred copy of the original. `strength` is 0–1 and maps
 * to a radius relative to the image size, so the look is the same on a 1000 px
 * and a 4000 px photo.
 */
export async function compositeOnBlur(
  cutout: Blob,
  original: Blob,
  strength: number,
  mime: ExportMime = "image/jpeg",
  quality = 0.92,
): Promise<Blob> {
  const fg = await bitmapOf(cutout);
  const bg = await bitmapOf(original);
  const [c, ctx] = canvas(fg.width, fg.height);
  try {
    const radius = Math.round(Math.max(c.width, c.height) * (0.004 + 0.026 * Math.min(1, Math.max(0, strength))));
    drawBlurred(ctx, bg, c.width, c.height, radius);
    ctx.drawImage(fg, 0, 0);
    return await canvasToBlob(c, mime, quality);
  } finally {
    fg.close();
    bg.close();
    c.width = 0;
    c.height = 0;
  }
}

/**
 * Decode an animated GIF into fully-composited frames.
 *
 * A GIF frame is usually a *patch* — a sub-rectangle that updates the previous
 * canvas — so decoding naively gives torn, partial images. This walks the
 * frames the way a player does, honouring disposal method 2 (restore to
 * background) before each patch is applied, and snapshots the full canvas after
 * each one.
 *
 * The composite loop mirrors `app/gif-to-images/GifToImagesTool.tsx:62-76`. It
 * additionally keeps `frame.delay`, which that tool discards — the GIF Maker
 * needs the original timing to re-edit an animation without flattening it to a
 * single speed.
 */

export interface DecodedGifFrame {
  canvas: HTMLCanvasElement;
  /** Per-frame delay in milliseconds (gifuct already converts from centiseconds). */
  delayMs: number;
}

export async function decodeGifFrames(file: File): Promise<DecodedGifFrame[]> {
  const { parseGIF, decompressFrames } = await import("gifuct-js");
  const gif = parseGIF(await file.arrayBuffer());
  const frames = decompressFrames(gif, true);
  if (!frames.length) throw new Error("No frames found in this GIF.");

  const gifW = gif.lsd.width;
  const gifH = gif.lsd.height;

  const full = document.createElement("canvas");
  full.width = gifW;
  full.height = gifH;
  const fctx = full.getContext("2d", { willReadFrequently: true });
  const temp = document.createElement("canvas");
  const tctx = temp.getContext("2d");
  if (!fctx || !tctx) throw new Error("Canvas is not supported in this browser.");

  const out: DecodedGifFrame[] = [];
  let prevDisposal = 0;
  let prevRect: { x: number; y: number; w: number; h: number } | null = null;

  for (const frame of frames) {
    if (prevDisposal === 2 && prevRect) fctx.clearRect(prevRect.x, prevRect.y, prevRect.w, prevRect.h);
    const { width, height, left, top } = frame.dims;
    temp.width = width;
    temp.height = height;
    tctx.putImageData(new ImageData(new Uint8ClampedArray(frame.patch), width, height), 0, 0);
    fctx.drawImage(temp, left, top);

    const snap = document.createElement("canvas");
    snap.width = gifW;
    snap.height = gifH;
    snap.getContext("2d")?.drawImage(full, 0, 0);
    // A 0 delay means "as fast as possible"; players floor it, and so do we —
    // otherwise an imported GIF comes back with an unusable 0 ms frame time.
    out.push({ canvas: snap, delayMs: frame.delay && frame.delay > 0 ? frame.delay : 100 });

    prevDisposal = frame.disposalType ?? 0;
    prevRect = { x: left, y: top, w: width, h: height };
  }

  return out;
}

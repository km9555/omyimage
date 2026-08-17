/**
 * Pre-recognition image cleanup for the Image-to-Text tool.
 *
 * This exists because of a measured, not assumed, gap: ImageToTextTool used to
 * hand `worker.recognize(file)` the raw upload with zero preprocessing and
 * zero Tesseract parameters. Comparing that against a tuned pipeline — same
 * tesseract.js version, a synthetic document reproducing the failure mode
 * users hit (small italic reference numbers and a logo caption sharing a
 * header band with body text) — found:
 *
 *   - Grayscale + contrast stretch + a 2-3x lanczos upscale measurably
 *     recovers characters Tesseract drops at native screenshot resolution
 *     (e.g. "&" collapsing into "8" in small italic text) and — more
 *     visibly — stops it from merging unrelated header regions onto one
 *     garbled line, which is the actual complaint: not "characters are
 *     wrong" so much as "garbage words appear out of nowhere."
 *   - Binarizing (hard black/white threshold) made small text WORSE — it
 *     throws away the antialiasing gray levels that its strokes depend on.
 *     Deliberately not done here.
 *   - Upscaling past ~3x bought nothing further; the ceiling on very small
 *     source text (sub-12px cap height) is the LSTM model itself, not the
 *     preprocessing — no client-side interpolation trick recovers detail
 *     that was never captured. That ceiling is a real, permanent limit of
 *     Tesseract at this resolution, not a bug to keep chasing.
 *
 * See `scripts/_ocr_experiment*.mjs` in git history (removed after use) for
 * the numbers this is based on, if the tuning ever needs revisiting.
 */
import { decodeBitmap } from "@/lib/image/raster";

/** Long-edge px this pipeline aims for. Below this, the source gets upscaled. */
const TARGET_LONG_EDGE = 2200;
/** Never upscale more than this — past ~3x, accuracy gains flatten out but
 *  recognition time keeps climbing (Tesseract's cost scales with pixel count). */
const MAX_SCALE = 3;
/** Absolute output cap, so an already-huge source (e.g. a 6000px photo) isn't
 *  driven into an OOM-risking canvas by a naive scale-up formula. */
const MAX_LONG_EDGE = 4200;

/**
 * Decode → (upscale if small) → grayscale → contrast-stretch. Returns a
 * canvas, which tesseract.js accepts directly as `recognize()` input.
 *
 * Deliberately NOT sharpened: an unsharp pass helped marginally on the clean
 * synthetic test but risks amplifying JPEG block noise on real phone photos,
 * where it isn't worth the tossup — the grayscale + contrast stretch already
 * captures nearly all of the measured gain.
 */
export async function preprocessForOcr(file: File): Promise<HTMLCanvasElement> {
  const bmp = await decodeBitmap(file, true);
  const longEdge = Math.max(bmp.width, bmp.height);

  let scale = longEdge < TARGET_LONG_EDGE ? TARGET_LONG_EDGE / longEdge : 1;
  scale = Math.min(scale, MAX_SCALE, MAX_LONG_EDGE / longEdge);

  const w = Math.round(bmp.width * scale);
  const h = Math.round(bmp.height * scale);

  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) {
    bmp.close();
    throw new Error("Canvas not supported.");
  }
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(bmp, 0, 0, w, h);
  bmp.close();

  const img = ctx.getImageData(0, 0, w, h);
  const d = img.data;

  // Grayscale (Rec. 601 luma) written into R, G and B alike — Tesseract only
  // reads intensity, but keeping it a valid RGB image avoids format surprises.
  const gray = new Uint8ClampedArray(w * h);
  for (let i = 0, p = 0; i < d.length; i += 4, p++) {
    gray[p] = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
  }

  // Contrast stretch to the 1st/99th percentile of the actual histogram
  // (not raw min/max — one stray near-black or near-white pixel from a JPEG
  // artifact or a scanned edge shouldn't set the whole stretch's endpoints).
  const hist = new Uint32Array(256);
  for (let p = 0; p < gray.length; p++) hist[gray[p]]++;
  const total = gray.length;
  const lowCut = total * 0.01;
  const highCut = total * 0.99;
  let lo = 0;
  let hi = 255;
  for (let v = 0, acc = 0; v < 256; v++) {
    acc += hist[v];
    if (acc >= lowCut) { lo = v; break; }
  }
  for (let v = 255, acc = 0; v >= 0; v--) {
    acc += hist[v];
    if (acc >= total - highCut) { hi = v; break; }
  }
  const range = Math.max(1, hi - lo);

  for (let i = 0, p = 0; i < d.length; i += 4, p++) {
    const stretched = ((gray[p] - lo) / range) * 255;
    const v = stretched < 0 ? 0 : stretched > 255 ? 255 : stretched;
    d[i] = d[i + 1] = d[i + 2] = v;
    // alpha untouched
  }

  ctx.putImageData(img, 0, 0);
  return canvas;
}

/**
 * Collapse the run-on whitespace that `preserve_interword_spaces` (or a
 * multi-column header Tesseract tried to represent positionally) leaves
 * behind — measured to otherwise produce lines like
 * `"179/2                                   Annexure-1 to NIT"` with 60+
 * spaces in the middle. Keeps single blank lines between paragraphs.
 */
export function cleanOcrText(raw: string): string {
  return raw
    .split("\n")
    .map((line) => line.replace(/[ \t]{2,}/g, " ").trimEnd())
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

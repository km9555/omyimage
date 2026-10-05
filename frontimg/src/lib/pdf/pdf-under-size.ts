/**
 * "JPG to PDF under 200 KB": build the PDF, and if it is over the limit,
 * recompress the images just enough for the WHOLE FILE to fit.
 *
 * A PDF made of images is almost entirely image bytes — pdf-lib embeds a JPEG
 * as-is — plus a small, nearly fixed overhead for the page tree and the image
 * objects. So:
 *
 *   1. Build once as usual. Under the limit already? Done, nothing touched.
 *   2. Measure the overhead (PDF size − sum of image bytes) and give the
 *      images what is left of the limit, shared by PIXEL AREA, so a big
 *      photo gets more than a small receipt and every page degrades evenly.
 *   3. Compress each image to its share with compressToSize (highest JPEG
 *      quality that fits, fewer pixels only when it must), rebuild, and if
 *      the result still overshoots, tighten the shares by the overshoot and
 *      try again.
 *
 * The limit is decimal (1 KB = 1,000 bytes), like every other maximum on the
 * site, so the PDF also passes portals that count 1,024.
 */
import { compressToSize } from "@/lib/image/compress-to-size";
import { imagesToPdf, type ImageInput, type ImagesToPdfOptions } from "@/lib/pdf/images-to-pdf";

/** Headroom under the limit, so the final rebuild lands inside it. */
const SAFETY = 0.97;
const MAX_ROUNDS = 4;
/**
 * Bytes per pixel a JPEG of a document page needs at good quality — only a
 * starting point. Searching a 12 MP phone photo for a 60 KB share is slow
 * (every trial encode is the full 12 MP); starting at about the size the share
 * can hold makes it several times faster, and compressToSize still shrinks
 * further if a busy page needs it.
 */
const START_BYTES_PER_PIXEL = 0.05;

export interface PdfUnderSizeResult {
  bytes: Uint8Array;
  /** True when the PDF is at or under the limit. */
  met: boolean;
  /** True when the images had to be recompressed. */
  recompressed: boolean;
}

export async function imagesToPdfUnderSize(
  files: File[],
  normalize: (f: File) => Promise<ImageInput>,
  opts: ImagesToPdfOptions,
  maxBytes: number,
  onProgress?: (p: number) => void,
): Promise<PdfUnderSizeResult> {
  if (!(maxBytes > 0)) throw new Error("The size limit must be greater than zero.");

  const originals = await Promise.all(files.map(normalize));
  const first = await imagesToPdf(originals, opts);
  if (first.length <= maxBytes) return { bytes: first, met: true, recompressed: false };

  const imageBytes = originals.reduce((s, i) => s + i.bytes.length, 0);
  const overhead = Math.max(1_000, first.length - imageBytes);

  // Pixel sizes for sharing the budget; decoded once, oriented.
  const dims = await Promise.all(
    files.map(async (f) => {
      const b = await createImageBitmap(f, { imageOrientation: "from-image" }).catch(() => null);
      const d = b ? { w: b.width, h: b.height } : { w: 1, h: 1 };
      b?.close();
      return d;
    }),
  );
  const areas = dims.map((d) => Math.max(1, d.w * d.h));
  const totalArea = areas.reduce((s, a) => s + a, 0);
  /** Long side to start the search at, for a share of `bytes`. */
  const startSide = (i: number, bytes: number) => {
    const long = Math.max(dims[i].w, dims[i].h);
    const short = Math.max(1, Math.min(dims[i].w, dims[i].h));
    return Math.min(long, Math.round(Math.sqrt(((bytes / START_BYTES_PER_PIXEL) * long) / short)));
  };
  const fill = opts.background ?? "#ffffff";

  let budget = maxBytes * SAFETY - overhead;
  let best: Uint8Array = first;
  for (let round = 0; round < MAX_ROUNDS; round++) {
    if (budget <= files.length * 200) break; // a few hundred bytes per image cannot hold a picture
    const inputs: ImageInput[] = [];
    for (let i = 0; i < files.length; i++) {
      onProgress?.((round * files.length + i) / (MAX_ROUNDS * files.length));
      const share = Math.max(400, Math.floor((budget * areas[i]) / totalArea));
      const r = await compressToSize(files[i], {
        maxBytes: share,
        mime: "image/jpeg",
        background: fill,
        maxDimension: startSide(i, share),
      });
      inputs.push({ name: files[i].name, type: "image/jpeg", bytes: new Uint8Array(await r.blob.arrayBuffer()) });
    }
    const pdf = await imagesToPdf(inputs, opts);
    if (pdf.length < best.length) best = pdf;
    if (pdf.length <= maxBytes) return { bytes: pdf, met: true, recompressed: true };
    // Every image came in under its share, so an overshoot means the overhead
    // was under-estimated: re-measure it and give the images what is left.
    const imagesNow = inputs.reduce((s, i) => s + i.bytes.length, 0);
    const overheadNow = pdf.length - imagesNow;
    budget = Math.min(budget * 0.9, (maxBytes * SAFETY - overheadNow) * 0.97);
  }
  return { bytes: best, met: best.length <= maxBytes, recompressed: true };
}

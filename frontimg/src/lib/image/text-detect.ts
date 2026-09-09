/**
 * In-browser text detection for /blur-face's Text tab.
 *
 * The second automatic detector beside `face-detect.ts`, and it exists for the
 * same reason: the things people most need to hide in a photo are a face and a
 * piece of writing — a licence plate, a door number, an address on an envelope,
 * a name badge. Both produce plain `Region`s, so a detected line lands in the
 * same list as a hand-drawn box and can be nudged, resized or deleted.
 *
 * Recognition runs on the device. Note the difference from face detection
 * though, and say so in the UI rather than implying otherwise: MediaPipe's
 * runtime and weights are served from our own origin, while Tesseract fetches
 * its worker, wasm core and language data from a CDN on first use, exactly as
 * /image-to-text already does. The *image* is never uploaded either way; what
 * leaves is a request for the engine.
 *
 * Everything is behind a dynamic import — the engine is several megabytes and
 * must not be in the bundle for the majority who only blur faces.
 */

import { clampRegion, newRegionId, type Region, type RegionShape } from "./redact";

/** Minimum Tesseract confidence, 0–100. Mirrors the face detector's three levels. */
export type TextSensitivity = "low" | "balanced" | "high";

const MIN_CONFIDENCE: Record<TextSensitivity, number> = {
  low: 80,
  balanced: 55,
  high: 30,
};

export const TEXT_SENSITIVITY_LABELS: { value: TextSensitivity; label: string; hint: string }[] = [
  { value: "low", label: "Low", hint: "Only clearly legible text" },
  { value: "balanced", label: "Recommended", hint: "Balanced for most photos" },
  { value: "high", label: "High", hint: "Catches faint text, may over-detect" },
];

/*
  A known gap, stated rather than papered over: Tesseract is trained on dark
  text on a light ground and often reads nothing at all from the reverse - white
  lettering on a dark sign or a coloured banner. Raising the sensitivity does not
  help, because the words are not being found with low confidence, they are not
  being found. Re-running the pass on an inverted copy was tried and measured:
  1.75x the time for zero extra boxes on the case it was meant to fix, so it is
  not here. Light-on-dark text is what the Shape and Brush tabs are for.
*/

/**
 * Whole lines, or individual words.
 *
 * Lines is the default because it matches what people actually redact — an
 * address line, a name — and because a paragraph at word granularity produces
 * thirty boxes that are miserable to tidy by hand. Words is there for picking
 * one field out of a form.
 */
export type TextGranularity = "line" | "word";

/** Text boxes sit tight on the glyphs; a little margin covers descenders and anti-aliasing. */
const DEFAULT_PADDING = 0.14;

type Bbox = { x0: number; y0: number; x1: number; y1: number };

type Word = { bbox: Bbox; confidence: number; text: string };
type Line = { bbox: Bbox; confidence: number; text: string; words: Word[] };
type Block = { paragraphs: { lines: Line[] }[] };

interface TesseractWorker {
  recognize: (
    image: HTMLCanvasElement,
    options?: unknown,
    output?: { blocks?: boolean; text?: boolean }
  ) => Promise<{ data: { blocks: Block[] | null } }>;
  terminate: () => Promise<unknown>;
}

let workerPromise: Promise<TesseractWorker> | null = null;

async function getWorker(onStatus?: (s: string) => void): Promise<TesseractWorker> {
  if (workerPromise) return workerPromise;
  workerPromise = (async () => {
    const { createWorker, PSM } = await import("tesseract.js");
    const worker = await createWorker("eng", 1, {
      logger: (m: { status: string }) => onStatus?.(m.status),
    });
    /* SPARSE_TEXT, not the AUTO that /image-to-text uses. That tool is reading a
       document; this one is finding scattered writing in a photograph — a sign,
       a plate, a label — where assuming a page layout makes Tesseract miss text
       that is not in columns. */
    await worker.setParameters({ tessedit_pageseg_mode: PSM.SPARSE_TEXT });
    return worker as unknown as TesseractWorker;
  })();
  return workerPromise;
}

/** Release the cached worker — call when leaving the tool. */
export async function disposeTextDetector(): Promise<void> {
  const p = workerPromise;
  workerPromise = null;
  if (!p) return;
  try {
    await (await p).terminate();
  } catch {
    /* already gone */
  }
}

export interface DetectTextOptions {
  sensitivity?: TextSensitivity;
  granularity?: TextGranularity;
  /** Extra margin around each box, as a fraction of its size. */
  padding?: number;
  shape?: RegionShape;
  onStatus?: (status: string) => void;
}

/** Every line or word Tesseract found in one canvas. */
async function readBoxes(
  worker: TesseractWorker,
  canvas: HTMLCanvasElement,
  granularity: TextGranularity
): Promise<{ bbox: Bbox; confidence: number; text: string }[]> {
  const { data } = await worker.recognize(canvas, {}, { blocks: true, text: false });
  const out: { bbox: Bbox; confidence: number; text: string }[] = [];
  for (const block of data.blocks ?? []) {
    for (const para of block.paragraphs ?? []) {
      for (const line of para.lines ?? []) {
        if (granularity === "line") out.push(line);
        else for (const word of line.words ?? []) out.push(word);
      }
    }
  }
  return out;
}

/**
 * Find text and return it as normalised regions.
 *
 * Empty when nothing is legible — the caller decides how to say so. Throws only
 * when the engine itself failed to load, which is worth surfacing because it
 * means a network or deployment problem rather than a hard photo.
 */
export async function detectTextRegions(
  bmp: ImageBitmap,
  opts: DetectTextOptions = {}
): Promise<Region[]> {
  const minConfidence = MIN_CONFIDENCE[opts.sensitivity ?? "balanced"];
  const granularity = opts.granularity ?? "line";
  const padding = opts.padding ?? DEFAULT_PADDING;
  const shape = opts.shape ?? "rect";

  // Tesseract takes a canvas, not an ImageBitmap.
  const canvas = document.createElement("canvas");
  canvas.width = bmp.width;
  canvas.height = bmp.height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return [];
  ctx.drawImage(bmp, 0, 0);

  const worker = await getWorker(opts.onStatus);
  const boxes = await readBoxes(worker, canvas, granularity);

  const out: Region[] = [];
  for (const b of boxes) {
    if (b.confidence < minConfidence) continue;
    // Tesseract happily returns empty or whitespace-only boxes; they are noise.
    if (!b.text || !b.text.trim()) continue;

    const w = b.bbox.x1 - b.bbox.x0;
    const h = b.bbox.y1 - b.bbox.y0;
    if (!(w > 0) || !(h > 0)) continue;

    const padX = (w * padding) / bmp.width;
    const padY = (h * padding) / bmp.height;
    out.push(
      clampRegion({
        id: newRegionId(),
        source: "text",
        shape,
        x: b.bbox.x0 / bmp.width - padX,
        y: b.bbox.y0 / bmp.height - padY,
        w: w / bmp.width + padX * 2,
        h: h / bmp.height + padY * 2,
      })
    );
  }
  return out;
}

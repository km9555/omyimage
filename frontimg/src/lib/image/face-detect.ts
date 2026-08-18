/**
 * In-browser face detection for /blur-face.
 *
 * Uses MediaPipe's BlazeFace (short-range) through `@mediapipe/tasks-vision`,
 * with **both the WebAssembly runtime and the model weights served from our own
 * origin** — `public/mediapipe/`. That is deliberate: this is the tool people
 * reach for when a photo contains someone who did not consent to being online,
 * so "nothing leaves your device" has to be literally true, not "we only send it
 * to a CDN". It also means the tool keeps working offline once cached.
 *
 * The wasm is ~11 MB, so everything here is behind a dynamic import and only
 * loads when the user actually asks for detection.
 *
 * See LICENSE-AUDIT.md F6 — Apache-2.0, wasm binaries grepped for copyleft.
 */

import { clampRegion, newRegionId, type Region, type RegionShape } from "./redact";

/** Mirrors the three levels competitors expose; higher = catches more, with more false positives. */
export type Sensitivity = "low" | "balanced" | "high";

const CONFIDENCE: Record<Sensitivity, number> = {
  low: 0.7,
  balanced: 0.5,
  high: 0.3,
};

export const SENSITIVITY_LABELS: { value: Sensitivity; label: string; hint: string }[] = [
  { value: "low", label: "Low", hint: "Only very confident matches" },
  { value: "balanced", label: "Recommended", hint: "Balanced for most photos" },
  { value: "high", label: "High", hint: "Catches more, may over-detect" },
];

const WASM_PATH = "/mediapipe/wasm";
const MODEL_PATH = "/mediapipe/blaze_face_short_range.tflite";

/**
 * BlazeFace returns a tight box around the facial features. Covering only that
 * leaves hair, chin and ears sharp, which is not anonymisation — so each box is
 * grown by this fraction of its size before becoming a region.
 */
const DEFAULT_PADDING = 0.18;

type Detector = {
  detect: (source: CanvasImageSource | ImageBitmap) => {
    detections: { boundingBox?: { originX: number; originY: number; width: number; height: number } }[];
  };
  close?: () => void;
};

let detectorPromise: Promise<Detector> | null = null;
let loadedConfidence: number | null = null;

/**
 * Build (and cache) a detector. Creating one costs a wasm instantiation plus a
 * model parse, so it is reused across images — but `minDetectionConfidence` is
 * baked in at construction, so changing sensitivity has to rebuild it.
 */
async function getDetector(confidence: number): Promise<Detector> {
  if (detectorPromise && loadedConfidence === confidence) return detectorPromise;

  const previous = detectorPromise;
  loadedConfidence = confidence;
  detectorPromise = (async () => {
    // Dispose the old detector so its wasm heap is not held twice.
    if (previous) {
      try { (await previous).close?.(); } catch { /* already gone */ }
    }
    const { FilesetResolver, FaceDetector } = await import("@mediapipe/tasks-vision");
    const vision = await FilesetResolver.forVisionTasks(WASM_PATH);
    return (await FaceDetector.createFromOptions(vision, {
      baseOptions: { modelAssetPath: MODEL_PATH },
      runningMode: "IMAGE",
      minDetectionConfidence: confidence,
    })) as unknown as Detector;
  })();

  return detectorPromise;
}

/** Release the cached detector — call when leaving the tool. */
export async function disposeFaceDetector(): Promise<void> {
  const p = detectorPromise;
  detectorPromise = null;
  loadedConfidence = null;
  if (!p) return;
  try { (await p).close?.(); } catch { /* nothing to release */ }
}

export interface DetectOptions {
  sensitivity?: Sensitivity;
  /** Extra margin around each detected face, as a fraction of its size. */
  padding?: number;
  /** Shape to create. Ellipse suits faces; rectangle is easier to reason about. */
  shape?: RegionShape;
}

/**
 * Find faces and return them as normalised regions ready for the region editor.
 *
 * Returns an empty array when nothing is found — the caller decides how to say
 * so. Throws only when the model or runtime genuinely failed to load, which is
 * worth surfacing because it means a broken deployment rather than a hard photo.
 */
export async function detectFaces(
  bmp: ImageBitmap,
  opts: DetectOptions = {}
): Promise<Region[]> {
  const sensitivity = opts.sensitivity ?? "balanced";
  const padding = opts.padding ?? DEFAULT_PADDING;
  const shape = opts.shape ?? "ellipse";

  const detector = await getDetector(CONFIDENCE[sensitivity]);
  const result = detector.detect(bmp);

  const out: Region[] = [];
  for (const d of result?.detections ?? []) {
    const box = d.boundingBox;
    if (!box || !(box.width > 0) || !(box.height > 0)) continue;

    // MediaPipe reports pixels; the editor works in normalised units.
    const padX = (box.width * padding) / bmp.width;
    const padY = (box.height * padding) / bmp.height;
    out.push(
      clampRegion({
        id: newRegionId(),
        shape,
        x: box.originX / bmp.width - padX,
        y: box.originY / bmp.height - padY,
        w: box.width / bmp.width + padX * 2,
        h: box.height / bmp.height + padY * 2,
      })
    );
  }
  return out;
}

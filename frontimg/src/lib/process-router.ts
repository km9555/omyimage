/**
 * Processing router — decides whether an image is handled in the browser or
 * handed to the shared oMyPDF backend (Sharp, /api/image/*).
 *
 * THE RULE IS PIXELS, NOT BYTES. This used to be a flat "≤ 15 MB stays local",
 * which measured the wrong thing and was wrong in both directions:
 *
 *   • A 48 MP phone photo is only ~8 MB, so it stayed local — and then blew
 *     past Safari's hard canvas ceiling, which is an AREA limit of 16,777,216
 *     pixels on desktop Safari as well as iOS. Safari's failure mode is a
 *     canvas that allocates but never draws, so this produced a silently blank
 *     image rather than an error. Modern phones shoot exactly this file.
 *   • A 20 MB PNG at 12 MP was uploaded needlessly, throwing away the privacy
 *     and speed that are the whole point of processing locally.
 *
 * What actually constrains a browser is the decoded bitmap: `w × h × 4` bytes of
 * RAM regardless of how well the file compressed. So we route on pixel area and
 * keep bytes only as a loose guard on decode time and upload size.
 *
 * Tools that are purely interactive (crop, watermark, meme, photo editor, blur)
 * always run in the browser regardless of size.
 */
import { SITE } from "@/lib/site";

/**
 * Byte ceiling. No longer a capability limit — pixels decide that — just a
 * sanity bound on decode time and on what we are willing to push through a
 * single request. Kept in step with IMAGE_MAX_UPLOAD_MB on the backend, which
 * is the Free tier's server-side cap.
 */
export const BROWSER_MAX_BYTES = 100 * 1024 * 1024; // 100 MB

/**
 * Safari's documented canvas area ceiling, and therefore the largest image we
 * can hand to a canvas without probing first. Everything ships this floor:
 * 16,777,216 px is 4096×4096, comfortably above a 12 MP phone photo or a 24 MP
 * DSLR frame, which is the overwhelming majority of what people upload.
 */
const SAFE_PIXELS = 16_777_216;

/**
 * The point past which we stop asking and just use the server. iOS 18 raised
 * Safari's ceiling to 67,108,864 px and desktop Chrome goes higher still, but a
 * bitmap that size is already 268 MB of RAM — at which point the server is both
 * faster and kinder to the tab, so there is nothing to gain by probing beyond it.
 */
const MAX_BROWSER_PIXELS = 67_108_864;

// Watermarks bracketing the real ceiling, narrowed as we learn it. Module-level
// so one probe per session covers every tool.
let knownGoodPixels = SAFE_PIXELS;
let knownBadPixels = Number.POSITIVE_INFINITY;

/**
 * Can this browser really paint a canvas of `area` pixels?
 *
 * Allocates a square canvas, paints the FAR CORNER and reads it back. The
 * readback is the entire point: over the limit Safari hands back a canvas that
 * looks valid and silently discards every draw, so `getContext` succeeding
 * proves nothing. The corner is what a partial allocation would miss.
 *
 * Probing costs the same allocation the real work would, and it is freed
 * immediately, so this adds no peak-memory risk beyond what we were about to do
 * anyway — which is why the probe is sized to the actual image rather than
 * speculatively testing the largest rung (16384² would be a 1 GB allocation on
 * a machine that may not have it).
 */
function canvasSupportsArea(area: number): boolean {
  if (typeof document === "undefined") return false;
  const side = Math.max(1, Math.floor(Math.sqrt(area)));
  let canvas: HTMLCanvasElement | null = null;
  try {
    canvas = document.createElement("canvas");
    canvas.width = side;
    canvas.height = side;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return false;
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(side - 1, side - 1, 1, 1);
    const px = ctx.getImageData(side - 1, side - 1, 1, 1).data;
    return px[0] === 255 && px[3] === 255;
  } catch {
    return false;
  } finally {
    // Zeroing the dimensions releases the backing store now rather than at the
    // next GC, which matters when the thing we just allocated was hundreds of MB.
    if (canvas) {
      canvas.width = 0;
      canvas.height = 0;
    }
  }
}

/** True when the browser can be trusted with a bitmap of this many pixels. */
export function canBrowserHandlePixels(area: number): boolean {
  if (area <= knownGoodPixels) return true;
  if (area >= knownBadPixels) return false;
  if (area > MAX_BROWSER_PIXELS) return false;

  const ok = canvasSupportsArea(area);
  if (ok) knownGoodPixels = area;
  else knownBadPixels = area;
  return ok;
}

/** The largest pixel area currently known to work. Exposed for tests and copy. */
export function browserPixelBudget(): number {
  return knownGoodPixels;
}

export interface ImageSize {
  width: number;
  height: number;
}

/**
 * Decode just far enough to learn the dimensions, then release the bitmap.
 *
 * Yes, this decodes a second time for images that end up staying local. That is
 * a deliberate trade: threading the already-decoded bitmap through every tool's
 * raster call is a much larger refactor, and a decode is cheap next to the full
 * encode pipeline. Returns null when the file cannot be decoded at all, which
 * the caller should treat as "send it to the server and let Sharp try".
 */
export async function measureImage(file: File | Blob): Promise<ImageSize | null> {
  try {
    const bmp = await createImageBitmap(file);
    const size = { width: bmp.width, height: bmp.height };
    bmp.close();
    return size;
  } catch {
    return null;
  }
}

/**
 * True when a file should be processed on the server rather than in-browser.
 *
 * Pass `size` when you already know the decoded dimensions. Without it this
 * falls back to the byte check alone, which cannot see the high-megapixel case
 * — prefer `shouldUseServerForFile`.
 */
export function shouldUseServer(bytes: number, size?: ImageSize | null): boolean {
  if (bytes > BROWSER_MAX_BYTES) return true;
  if (!size) return false;
  return !canBrowserHandlePixels(size.width * size.height);
}

/** Measure, then decide. The form every tool should use. */
export async function shouldUseServerForFile(file: File): Promise<boolean> {
  if (file.size > BROWSER_MAX_BYTES) return true;
  const size = await measureImage(file);
  // Undecodable in this browser (an exotic or corrupt format) — let Sharp try.
  if (!size) return true;
  return !canBrowserHandlePixels(size.width * size.height);
}

/** Map an export mime to the backend's short format token. */
export function toServerFormat(mime: string): "jpeg" | "png" | "webp" {
  if (mime === "image/png") return "png";
  if (mime === "image/webp") return "webp";
  return "jpeg";
}

export interface ServerResult {
  blob: Blob;
  filename: string;
}

/** POST a single file + options to a backend image route; resolve to the result blob. */
export async function processOnServer(
  path: string,
  file: File,
  options: Record<string, unknown>
): Promise<ServerResult> {
  const form = new FormData();
  form.append("file", file, file.name);
  form.append("options", JSON.stringify(options));

  let res: Response;
  try {
    res = await fetch(`${SITE.backendUrl}${path}`, { method: "POST", body: form });
  } catch {
    throw new Error("Couldn't reach the processing server for this large file.");
  }
  if (!res.ok) {
    let msg = `Server error (${res.status}).`;
    try {
      const j = (await res.json()) as { error?: string };
      if (j?.error) msg = j.error;
    } catch {
      /* non-JSON error body */
    }
    throw new Error(msg);
  }
  const blob = await res.blob();
  const cd = res.headers.get("Content-Disposition") || "";
  const m = /filename="([^"]+)"/.exec(cd);
  return { blob, filename: m?.[1] || file.name };
}

/**
 * OCR is the one oMyImage tool whose server path is a background job rather
 * than an inline response — see backend/src/routes/image/ocr.ts. PaddleOCR
 * downloads model weights on first use of a language, which can dominate a
 * single request past what's reasonable to hold a connection open for, so the
 * server always answers `202 {jobId}` and this polls
 * `/api/image/ocr/status/:jobId` to completion.
 *
 * Ported down from oMyPDF's `pollJobResult`/`submitJob`, minus what oMyImage
 * doesn't have: no auth headers (every oMyImage route is anonymous) and no
 * `recordPremiumUse` (no billing layer yet).
 */
export interface OcrJobResult {
  text: string;
  /** Mean confidence across kept lines, 0–100. */
  confidence: number;
  lineCount: number;
  /** Present so the result can be re-downloaded as .txt without holding the text in memory. */
  fileId?: string;
  filename?: string;
}

/** `GET /api/image/files/:id` — the same ephemeral store every server tool's result lives in. */
export function serverFileUrl(fileId: string): string {
  return `${SITE.backendUrl}/api/image/files/${fileId}`;
}

async function readJsonError(res: Response, fallback: string): Promise<Error & { status: number }> {
  let msg = fallback;
  try {
    const j = (await res.json()) as { error?: string };
    if (j?.error) msg = j.error;
  } catch {
    /* non-JSON error body */
  }
  const e = new Error(msg) as Error & { status: number };
  e.status = res.status;
  return e;
}

/**
 * Upload an image for server-side OCR and poll until it's done. Uses a gentle
 * backoff (1.5s → 5s) — the first request for a not-yet-cached language can
 * take a while (model download), steady state is much faster.
 */
export async function runOcrImage(
  file: File,
  lang: string,
  opts: { onProgress?: (status: "queued" | "processing") => void; signal?: AbortSignal } = {}
): Promise<OcrJobResult> {
  const form = new FormData();
  form.append("file", file, file.name);
  form.append("lang", lang);

  let res: Response;
  try {
    res = await fetch(`${SITE.backendUrl}/api/image/ocr`, { method: "POST", body: form, signal: opts.signal });
  } catch {
    throw new Error("Couldn't reach the processing server.");
  }
  if (!res.ok) throw await readJsonError(res, `Server error (${res.status}).`);
  const { jobId } = (await res.json()) as { jobId?: string };
  if (!jobId) throw new Error("The server did not start the job. Please try again.");

  const start = Date.now();
  const TIMEOUT_MS = 5 * 60 * 1000; // model download on a cold language can be slow
  let delay = 1500;
  const MAX_DELAY = 5000;

  for (;;) {
    if (opts.signal?.aborted) throw new DOMException("Aborted", "AbortError");
    if (Date.now() - start > TIMEOUT_MS) throw new Error("Timed out waiting for the server to finish.");

    const statusRes = await fetch(`${SITE.backendUrl}/api/image/ocr/status/${jobId}`, { signal: opts.signal });
    if (!statusRes.ok) throw await readJsonError(statusRes, `Server error (${statusRes.status}).`);
    const data = (await statusRes.json()) as {
      status: "queued" | "processing" | "done" | "error";
      error?: string;
      fileId?: string;
      filename?: string;
      meta?: { text?: string; confidence?: number; lineCount?: number };
    };

    if (data.status === "error") throw new Error(data.error || "OCR failed on the server.");
    if (data.status === "done") {
      return {
        text: data.meta?.text ?? "",
        confidence: data.meta?.confidence ?? 0,
        lineCount: data.meta?.lineCount ?? 0,
        fileId: data.fileId,
        filename: data.filename,
      };
    }

    opts.onProgress?.(data.status);
    await new Promise((r) => setTimeout(r, delay));
    delay = Math.min(MAX_DELAY, Math.round(delay * 1.4));
  }
}

/** POST a JSON body to a backend route that returns an image (e.g. html-to-image). */
export async function postJsonForImage(path: string, body: Record<string, unknown>): Promise<ServerResult> {
  let res: Response;
  try {
    res = await fetch(`${SITE.backendUrl}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch {
    throw new Error("Couldn't reach the processing server.");
  }
  if (!res.ok) {
    let msg = `Server error (${res.status}).`;
    try {
      const j = (await res.json()) as { error?: string };
      if (j?.error) msg = j.error;
    } catch {
      /* non-JSON */
    }
    throw new Error(msg);
  }
  const blob = await res.blob();
  const cd = res.headers.get("Content-Disposition") || "";
  const m = /filename="([^"]+)"/.exec(cd);
  return { blob, filename: m?.[1] || "image.png" };
}

/**
 * Processing router — implements the oMyImage size rule from img-develop.md:
 *
 *   ≤ 15 MB  → process in the browser (instant, private)
 *   > 15 MB  → offload to the shared oMyPDF backend (Sharp, /api/image/*) for heavy lifting
 *
 * Tools that are purely interactive (crop, watermark, meme, photo editor, blur)
 * always run in the browser regardless of size.
 */
import { SITE } from "@/lib/site";

export const BROWSER_MAX_BYTES = 15 * 1024 * 1024; // 15 MB

/** True when a file should be processed on the server rather than in-browser. */
export function shouldUseServer(size: number): boolean {
  return size > BROWSER_MAX_BYTES;
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

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

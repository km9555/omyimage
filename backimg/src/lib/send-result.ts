import type { Response } from "express";
import { saveFile } from "./file-store.js";
import { attachmentDisposition } from "./http.js";

/**
 * Store a processed result in the ephemeral file store (for shareable 1-hour
 * links) and send it as a download, exposing the file id + expiry via headers.
 */
export async function sendResultFile(
  res: Response,
  bytes: Uint8Array,
  filename: string,
  contentType = "image/jpeg",
  userId?: string | null
): Promise<void> {
  const meta = await saveFile(bytes, filename, contentType, userId);
  res.setHeader("Content-Type", contentType);
  res.setHeader("Content-Disposition", attachmentDisposition(filename));
  res.setHeader("X-File-Id", meta.id);
  res.setHeader("X-File-Expires", String(meta.expiresAt));
  res.send(Buffer.from(bytes));
}

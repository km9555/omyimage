import type { Request, Response, NextFunction } from "express";
import multer from "multer";

/**
 * Upload hardening:
 *  - sane multer caps (RAM-backed memory storage)
 *  - server-side content validation by magic bytes (not extension/mimetype)
 */

const MB = 1024 * 1024;
export const MAX_UPLOAD_BYTES = Number(process.env.MAX_UPLOAD_MB ?? 1024) * MB;

/** Shared multer factory with safe defaults. */
export function memUpload(opts: { maxFiles?: number; maxBytes?: number } = {}) {
  return multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: opts.maxBytes ?? MAX_UPLOAD_BYTES, files: opts.maxFiles ?? 50 },
  });
}

/** Collect every uploaded file off the request, regardless of single/array/fields. */
function allFiles(req: Request): Express.Multer.File[] {
  const out: Express.Multer.File[] = [];
  if (req.file) out.push(req.file);
  const f = req.files;
  if (Array.isArray(f)) out.push(...f);
  else if (f && typeof f === "object") for (const arr of Object.values(f)) out.push(...arr);
  return out;
}

/** Magic-byte signatures for the image formats we accept. */
function looksLikeImage(buf: Buffer): boolean {
  const b = buf;
  const startsWith = (sig: number[]) => sig.every((x, i) => b[i] === x);
  if (startsWith([0xff, 0xd8, 0xff])) return true; // JPEG
  if (startsWith([0x89, 0x50, 0x4e, 0x47])) return true; // PNG
  if (startsWith([0x47, 0x49, 0x46, 0x38])) return true; // GIF
  if (startsWith([0x42, 0x4d])) return true; // BMP
  if (startsWith([0x49, 0x49, 0x2a, 0x00]) || startsWith([0x4d, 0x4d, 0x00, 0x2a])) return true; // TIFF
  // WEBP: "RIFF"...."WEBP"
  if (b[0] === 0x52 && b[1] === 0x49 && b[2] === 0x46 && b[3] === 0x46 && b[8] === 0x57 && b[9] === 0x45 && b[10] === 0x42 && b[11] === 0x50) return true;
  // HEIC/HEIF: "....ftypheic/heix/mif1"
  if (b[4] === 0x66 && b[5] === 0x74 && b[6] === 0x79 && b[7] === 0x70) return true; // ISO-BMFF (HEIC/AVIF)
  return false;
}

function tooLarge(res: Response): void {
  res.status(413).json({
    error: "This file is too large.",
    code: "FILE_TOO_LARGE",
    maxSizeMB: Math.round(MAX_UPLOAD_BYTES / MB),
  });
}

/** Validate uploaded images by magic bytes. Place AFTER the multer parser. */
export function validateImageUploads() {
  return (req: Request, res: Response, next: NextFunction): void => {
    for (const f of allFiles(req)) {
      if (!looksLikeImage(f.buffer)) {
        res.status(422).json({
          error: `"${f.originalname}" is not a supported image file.`,
          code: "INVALID_FILE_TYPE",
        });
        return;
      }
    }
    next();
  };
}

/** Translate multer's own limit errors into clean JSON instead of a 500. */
export function multerErrorHandler(err: unknown, _req: Request, res: Response, next: NextFunction): void {
  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") return tooLarge(res);
    res.status(400).json({ error: `Upload rejected: ${err.message}`, code: err.code });
    return;
  }
  next(err);
}

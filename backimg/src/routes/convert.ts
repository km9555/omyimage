import { Router, type Request, type Response, type NextFunction } from "express";
import { memUpload, validateImageUploads } from "../middleware/uploads.js";
import { convert, DEFAULT_QUALITY, type TargetFormat } from "../lib/image/sharp-ops.js";
import { sendResultFile } from "../lib/send-result.js";
import { parseOptions, asNumber, asString, baseName } from "../lib/parse.js";

const upload = memUpload({ maxFiles: 1 });
const router = Router();

/**
 * POST /api/convert  (multipart/form-data)
 *   file    — the source image
 *   options — JSON { format, quality?, background? }
 */
router.post("/convert", upload.single("file"), validateImageUploads(), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const file = req.file;
    if (!file) { res.status(400).json({ error: "Upload an image to convert." }); return; }
    const o = parseOptions(req.body.options);
    const format = (asString(o.format, "jpeg") as TargetFormat);
    const out = await convert(file.buffer, {
      format,
      quality: asNumber(o.quality, DEFAULT_QUALITY),
      background: asString(o.background) ?? null,
    });
    await sendResultFile(res, out.buffer, `${baseName(file.originalname)}.${out.ext}`, out.contentType);
  } catch (err) {
    next(err);
  }
});

export default router;

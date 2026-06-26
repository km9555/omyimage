import { Router, type Request, type Response, type NextFunction } from "express";
import { memUpload, validateImageUploads } from "../middleware/uploads.js";
import { rotate, type TargetFormat } from "../lib/image/sharp-ops.js";
import { sendResultFile } from "../lib/send-result.js";
import { parseOptions, asNumber, asString, asBool, baseName } from "../lib/parse.js";

const upload = memUpload({ maxFiles: 1 });
const router = Router();

/**
 * POST /api/rotate  (multipart/form-data)
 *   file    — the source image
 *   options — JSON { angle?, flipH?, flipV?, format?, quality?, background? }
 */
router.post("/rotate", upload.single("file"), validateImageUploads(), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const file = req.file;
    if (!file) { res.status(400).json({ error: "Upload an image to rotate." }); return; }
    const o = parseOptions(req.body.options);
    const out = await rotate(file.buffer, {
      angle: asNumber(o.angle, 0),
      flipH: asBool(o.flipH),
      flipV: asBool(o.flipV),
      format: (asString(o.format, "jpeg") as TargetFormat),
      quality: asNumber(o.quality, 0.92),
      background: asString(o.background) ?? null,
    });
    await sendResultFile(res, out.buffer, `${baseName(file.originalname)}_rotated.${out.ext}`, out.contentType);
  } catch (err) {
    next(err);
  }
});

export default router;

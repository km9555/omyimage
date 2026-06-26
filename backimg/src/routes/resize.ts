import { Router, type Request, type Response, type NextFunction } from "express";
import { memUpload, validateImageUploads } from "../middleware/uploads.js";
import { resize, type TargetFormat, type ResizeOpts } from "../lib/image/sharp-ops.js";
import { sendResultFile } from "../lib/send-result.js";
import { parseOptions, asNumber, asString, baseName } from "../lib/parse.js";

const upload = memUpload({ maxFiles: 1 });
const router = Router();

/**
 * POST /api/resize  (multipart/form-data)
 *   file    — the source image
 *   options — JSON { width?, height?, fit?, format?, quality?, background? }
 */
router.post("/resize", upload.single("file"), validateImageUploads(), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const file = req.file;
    if (!file) { res.status(400).json({ error: "Upload an image to resize." }); return; }
    const o = parseOptions(req.body.options);
    const width = asNumber(o.width);
    const height = asNumber(o.height);
    if (!width && !height) { res.status(400).json({ error: "Provide a width and/or height." }); return; }
    const out = await resize(file.buffer, {
      width,
      height,
      fit: (asString(o.fit, "inside") as ResizeOpts["fit"]),
      format: (asString(o.format, "jpeg") as TargetFormat),
      quality: asNumber(o.quality, 0.9),
      background: asString(o.background) ?? null,
    });
    await sendResultFile(res, out.buffer, `${baseName(file.originalname)}_resized.${out.ext}`, out.contentType);
  } catch (err) {
    next(err);
  }
});

export default router;

import { Router, type Request, type Response, type NextFunction } from "express";
import { memUpload, validateImageUploads } from "../middleware/uploads.js";
import { heicToImage, NotInstalledError, type HeicTarget } from "../lib/image/heic.js";
import { sendResultFile } from "../lib/send-result.js";
import { parseOptions, asNumber, asString, baseName } from "../lib/parse.js";

const upload = memUpload({ maxFiles: 1 });
const router = Router();

/** POST /api/heic — file + { format, quality } → converted JPG/PNG (ImageMagick). */
router.post("/heic", upload.single("file"), validateImageUploads(), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const file = req.file;
    if (!file) { res.status(400).json({ error: "Upload a HEIC or HEIF image." }); return; }

    const o = parseOptions(req.body.options);
    const target: HeicTarget = asString(o.format) === "png" ? "png" : "jpeg";
    const quality = asNumber(o.quality, 92) ?? 92;

    const out = await heicToImage(file.buffer, target, quality);
    const ext = target === "png" ? "png" : "jpg";
    await sendResultFile(res, out, `${baseName(file.originalname)}.${ext}`, `image/${target}`);
  } catch (err) {
    if (err instanceof NotInstalledError) {
      res.status(501).json({
        error: "HEIC conversion isn't enabled on this server (ImageMagick with libheif not installed).",
        code: "NOT_IMPLEMENTED",
      });
      return;
    }
    next(err);
  }
});

export default router;

import { Router, type Request, type Response, type NextFunction } from "express";
import { memUpload, validateImageUploads } from "../middleware/uploads.js";
import { upscale, enhance, NotInstalledError } from "../lib/image/ai.js";
import { sendResultFile } from "../lib/send-result.js";
import { parseOptions, asNumber, baseName } from "../lib/parse.js";

const upload = memUpload({ maxFiles: 1 });
const router = Router();

function handle501(res: Response, err: unknown, next: NextFunction) {
  if (err instanceof NotInstalledError) {
    res.status(501).json({ error: "AI upscaling isn't enabled on this server (Real-ESRGAN not installed).", code: "NOT_IMPLEMENTED" });
    return;
  }
  next(err);
}

/** POST /api/upscale — file + { scale } → upscaled PNG (Real-ESRGAN). */
router.post("/upscale", upload.single("file"), validateImageUploads(), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const file = req.file;
    if (!file) { res.status(400).json({ error: "Upload an image." }); return; }
    const o = parseOptions(req.body.options);
    const out = await upscale(file.buffer, asNumber(o.scale, 4));
    await sendResultFile(res, out, `${baseName(file.originalname)}_upscaled.png`, "image/png");
  } catch (err) {
    handle501(res, err, next);
  }
});

/** POST /api/enhance — file → enhanced PNG (Real-ESRGAN). */
router.post("/enhance", upload.single("file"), validateImageUploads(), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const file = req.file;
    if (!file) { res.status(400).json({ error: "Upload an image." }); return; }
    const out = await enhance(file.buffer);
    await sendResultFile(res, out, `${baseName(file.originalname)}_enhanced.png`, "image/png");
  } catch (err) {
    handle501(res, err, next);
  }
});

export default router;

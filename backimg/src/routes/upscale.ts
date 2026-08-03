import { Router, type Request, type Response, type NextFunction } from "express";
import { memUpload, validateImageUploads } from "../middleware/uploads.js";
import { upscale, NotInstalledError } from "../lib/image/ai.js";
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

// NOTE: POST /api/enhance was removed along with the Image Enhancer tool. It was
// literally /api/upscale with the scale hard-coded to 2 — same binary, same
// model — and Upscale already exposes 2× as an option.

export default router;

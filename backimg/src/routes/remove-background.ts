import { Router, type Request, type Response, type NextFunction } from "express";
import { memUpload, validateImageUploads } from "../middleware/uploads.js";
import { removeBackground, NotInstalledError } from "../lib/image/ai.js";
import { sendResultFile } from "../lib/send-result.js";
import { baseName } from "../lib/parse.js";

const upload = memUpload({ maxFiles: 1 });
const router = Router();

/** POST /api/remove-background — file → transparent PNG (rembg). */
router.post("/remove-background", upload.single("file"), validateImageUploads(), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const file = req.file;
    if (!file) { res.status(400).json({ error: "Upload an image." }); return; }
    const out = await removeBackground(file.buffer);
    await sendResultFile(res, out, `${baseName(file.originalname)}_no-bg.png`, "image/png");
  } catch (err) {
    if (err instanceof NotInstalledError) {
      res.status(501).json({ error: "Background removal isn't enabled on this server (rembg not installed).", code: "NOT_IMPLEMENTED" });
      return;
    }
    next(err);
  }
});

export default router;

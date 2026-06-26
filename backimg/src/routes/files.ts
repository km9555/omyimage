import { Router, type Request, type Response } from "express";
import { createReadStream } from "node:fs";
import { getFile } from "../lib/file-store.js";
import { attachmentDisposition } from "../lib/http.js";

const router = Router();

/** GET /api/files/:id — re-download a processed result within its 1-hour window. */
router.get("/files/:id", async (req: Request, res: Response) => {
  const found = await getFile(req.params.id);
  if (!found) {
    res.status(404).json({ error: "File not found or expired." });
    return;
  }
  res.setHeader("Content-Type", found.meta.contentType);
  res.setHeader("Content-Disposition", attachmentDisposition(found.meta.filename));
  res.setHeader("X-File-Expires", String(found.meta.expiresAt));
  createReadStream(found.path).pipe(res);
});

export default router;

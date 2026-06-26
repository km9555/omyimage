import { Router, type Request, type Response } from "express";

const router = Router();

/**
 * Remaining placeholder. Automatic face detection (for hands-free face blur)
 * would run on an OpenCV/ML worker; the manual Blur tool in the frontend
 * already covers privacy needs in-browser, so this stays 501 for now.
 */
router.post("/blur-face-auto", (_req: Request, res: Response) => {
  res.status(501).json({
    error: "Automatic face detection isn't enabled. Use the in-browser Blur tool to censor areas manually.",
    code: "NOT_IMPLEMENTED",
  });
});

export default router;

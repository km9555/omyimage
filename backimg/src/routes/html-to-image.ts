import { Router, type Request, type Response, type NextFunction } from "express";
import { sendResultFile } from "../lib/send-result.js";

const router = Router();

/**
 * POST /api/html-to-image  (application/json)
 *   { url?, html?, format?, width?, height?, fullPage? }
 *
 * Renders a URL or raw HTML to an image via headless Chromium. Puppeteer is an
 * optional dependency — if it isn't installed, this returns 501 so the rest of
 * the API still runs.
 */
router.post("/html-to-image", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const body = (req.body ?? {}) as { url?: string; html?: string; format?: string; width?: number; height?: number; fullPage?: boolean };
    if (!body.url && !body.html) {
      res.status(400).json({ error: "Provide a `url` or `html` to render." });
      return;
    }

    // Variable specifier (typed as string) so TS doesn't hard-require puppeteer.
    const specifier: string = "puppeteer";
    let mod: { default?: unknown } & Record<string, unknown>;
    try {
      mod = await import(specifier);
    } catch {
      res.status(501).json({
        error: "HTML-to-image worker is not installed on this server. Run `npm i puppeteer`.",
        code: "NOT_IMPLEMENTED",
      });
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const puppeteer = (mod.default ?? mod) as any;
    const type = body.format === "jpeg" || body.format === "jpg" ? "jpeg" : "png";
    const browser = await puppeteer.launch({ args: ["--no-sandbox", "--disable-setuid-sandbox"] });
    try {
      const page = await browser.newPage();
      await page.setViewport({ width: body.width ?? 1280, height: body.height ?? 720 });
      if (body.url) await page.goto(body.url, { waitUntil: "networkidle2", timeout: 30000 });
      else await page.setContent(String(body.html), { waitUntil: "networkidle0", timeout: 30000 });
      const buf: Buffer = await page.screenshot({ type, fullPage: !!body.fullPage, ...(type === "jpeg" ? { quality: 88 } : {}) });
      await sendResultFile(res, buf, `page.${type === "jpeg" ? "jpg" : "png"}`, type === "jpeg" ? "image/jpeg" : "image/png");
    } finally {
      await browser.close();
    }
  } catch (err) {
    next(err);
  }
});

export default router;

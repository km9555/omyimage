import "dotenv/config";
import express, { type Request, type Response, type NextFunction } from "express";
import cors from "cors";
import convertRouter from "./routes/convert.js";
import compressRouter from "./routes/compress.js";
import resizeRouter from "./routes/resize.js";
import rotateRouter from "./routes/rotate.js";
import htmlToImageRouter from "./routes/html-to-image.js";
import removeBackgroundRouter from "./routes/remove-background.js";
import upscaleRouter from "./routes/upscale.js";
import heicRouter from "./routes/heic.js";
import aiStubsRouter from "./routes/ai-stubs.js";
import filesRouter from "./routes/files.js";
import { sweep } from "./lib/file-store.js";
import { apiLimiter, heavyLimiter, heavyConcurrency, onlyHeavy } from "./middleware/limits.js";
import { multerErrorHandler } from "./middleware/uploads.js";

const app = express();
const PORT = Number(process.env.PORT ?? 5000);
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN ?? "http://localhost:3000";

// Behind Cloudflare/Nginx → trust one proxy hop so req.ip is the real client.
app.set("trust proxy", 1);
app.disable("x-powered-by");

const allowedOrigins = FRONTEND_ORIGIN.split(",").map((s) => s.trim());
app.use(
  cors({
    origin: allowedOrigins,
    exposedHeaders: ["X-File-Id", "X-File-Expires", "Content-Disposition", "X-Result-Source"],
  })
);

// JSON body for the html-to-image route (image routes use multipart).
app.use(express.json({ limit: "4mb" }));

app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok", service: "omyimage-backend", time: new Date().toISOString() });
});

// Abuse controls: broad per-IP cap on everything, plus a tighter per-IP cap and
// a global concurrency ceiling on the heavy image-processing routes.
app.use("/api", apiLimiter);
app.use("/api", onlyHeavy(heavyLimiter));
app.use("/api", onlyHeavy(heavyConcurrency));

// Image tool routes (large-file / heavy / server-only processing).
app.use("/api", convertRouter);
app.use("/api", compressRouter);
app.use("/api", resizeRouter);
app.use("/api", rotateRouter);
app.use("/api", htmlToImageRouter);
app.use("/api", removeBackgroundRouter);
app.use("/api", upscaleRouter);
app.use("/api", heicRouter);
app.use("/api", aiStubsRouter);
app.use("/api", filesRouter);

// Turn multer's own upload-limit errors into clean JSON before the generic handler.
app.use(multerErrorHandler);

// Centralized error handler.
app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error("[omyimage-backend] error:", err);
  if (res.headersSent) return;
  const e = err as { status?: number; message?: string };
  if (typeof e?.status === "number" && e.status >= 400 && e.status < 500) {
    res.status(e.status).json({ error: e.message ?? "Request rejected." });
    return;
  }
  res.status(500).json({ error: "Internal processing error." });
});

// Sweep expired ephemeral files on boot, then every 10 minutes.
sweep().catch(() => {});
setInterval(() => sweep().catch(() => {}), 10 * 60 * 1000);

app.listen(PORT, () => {
  console.log(`oMyImage backend listening on http://localhost:${PORT}`);
  console.log(`Allowed origins: ${allowedOrigins.join(", ")}`);
});

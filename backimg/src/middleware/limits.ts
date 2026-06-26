import type { Request, Response, NextFunction } from "express";
import rateLimit from "express-rate-limit";

/**
 * Abuse controls. A broad per-IP cap on everything, plus a tighter per-IP cap
 * and a global concurrency ceiling on the heavy image-processing routes.
 */

export const apiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: Number(process.env.RATE_API_MAX ?? 120),
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests. Please slow down." },
});

export const heavyLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: Number(process.env.RATE_HEAVY_MAX ?? 20),
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many processing requests. Please wait a moment." },
});

/** Paths that do heavy work and should also be throttled/concurrency-capped. */
const HEAVY = ["/convert", "/compress", "/resize", "/rotate", "/html-to-image", "/remove-background", "/upscale", "/enhance"];

/** Apply a middleware only to the heavy tool routes. */
export function onlyHeavy(mw: (req: Request, res: Response, next: NextFunction) => void) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (HEAVY.some((p) => req.path.startsWith(p))) return mw(req, res, next);
    next();
  };
}

/** A simple global concurrency ceiling for heavy routes (protects RAM/CPU). */
const MAX_CONCURRENT = Number(process.env.HEAVY_CONCURRENCY ?? 4);
let active = 0;
const queue: (() => void)[] = [];

export function heavyConcurrency(_req: Request, res: Response, next: NextFunction): void {
  const run = () => {
    active++;
    res.on("finish", release);
    res.on("close", release);
    next();
  };
  let released = false;
  function release() {
    if (released) return;
    released = true;
    active--;
    const nextJob = queue.shift();
    if (nextJob) nextJob();
  }
  if (active < MAX_CONCURRENT) run();
  else queue.push(run);
}

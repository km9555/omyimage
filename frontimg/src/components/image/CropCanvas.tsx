"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  CURSOR_FOR, handlePoints, hitTestRegion, resizeRegionByHandle,
  type Handle, type Region,
} from "@/lib/image/redact";
import {
  applyAspect, clampCrop, drawTransformed, transformedSize,
  type CropSel, type CropShape, type CropTransform,
} from "@/lib/image/crop";

const TOL = 10;
const HANDLE_R = 5;

/**
 * Interactive crop surface, shared by /crop-image and /circle-crop.
 *
 * Replaces the DOM-overlay crop box the tool used to have. A canvas is what
 * makes non-rectangular shapes, rotation preview and zoom possible at all, and
 * it lets the handle model be reused from `redact.ts` rather than written twice.
 */
export function CropCanvas({
  bitmap,
  sel,
  onChange,
  shape,
  radius,
  aspect,
  transform,
  zoom,
  accent,
  disabled = false,
}: {
  bitmap: ImageBitmap | null;
  sel: CropSel;
  onChange: (next: CropSel) => void;
  shape: CropShape;
  radius: number;
  /** Locked pixel ratio, or null for a free crop. */
  aspect: number | null;
  transform: CropTransform;
  zoom: number;
  accent: string;
  disabled?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cursor, setCursor] = useState("crosshair");

  /*
    Drag state lives in a ref, and each handler snapshots the delta BEFORE
    advancing the anchor — a state updater runs at re-render, so reading a
    mutated anchor inside one reverses the drag (the CircleCropTool lesson).
  */
  const drag = useRef<{ handle: Handle | "move"; lastX: number; lastY: number } | null>(null);
  const selRef = useRef(sel);
  useEffect(() => { selRef.current = sel; }, [sel]);

  // The selection sits on the TRANSFORMED image, so all geometry uses that size.
  const tSize = useMemo(
    () => (bitmap ? transformedSize(bitmap.width, bitmap.height, transform) : { w: 0, h: 0 }),
    [bitmap, transform]
  );

  const view = useMemo(() => {
    if (!bitmap || !tSize.w) return null;
    const maxW = 560;
    const maxH = 460;
    const fit = Math.min(maxW / tSize.w, maxH / tSize.h, 1);
    const scale = fit * zoom;
    return { vw: Math.round(tSize.w * scale), vh: Math.round(tSize.h * scale), scale };
  }, [bitmap, tSize, zoom]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !bitmap || !view) return;
    const { vw, vh } = view;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = Math.round(vw * dpr);
    canvas.height = Math.round(vh * dpr);
    canvas.style.width = `${vw}px`;
    canvas.style.height = `${vh}px`;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, vw, vh);

    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(drawTransformed(bitmap, transform), 0, 0, vw, vh);

    const r = { x: sel.x * vw, y: sel.y * vh, w: sel.w * vw, h: sel.h * vh };

    const shapePath = () => {
      ctx.beginPath();
      if (shape === "ellipse") {
        ctx.ellipse(r.x + r.w / 2, r.y + r.h / 2, r.w / 2, r.h / 2, 0, 0, Math.PI * 2);
      } else if (shape === "rounded") {
        const rad = Math.max(0, Math.min(0.5, radius)) * Math.min(r.w, r.h);
        ctx.moveTo(r.x + rad, r.y);
        ctx.arcTo(r.x + r.w, r.y, r.x + r.w, r.y + r.h, rad);
        ctx.arcTo(r.x + r.w, r.y + r.h, r.x, r.y + r.h, rad);
        ctx.arcTo(r.x, r.y + r.h, r.x, r.y, rad);
        ctx.arcTo(r.x, r.y, r.x + r.w, r.y, rad);
      } else {
        ctx.rect(r.x, r.y, r.w, r.h);
      }
      ctx.closePath();
    };

    // Dim everything the crop discards — one path, even-odd, so the selection
    // is a hole rather than a second fill.
    ctx.save();
    ctx.beginPath();
    ctx.rect(0, 0, vw, vh);
    if (shape === "ellipse") {
      ctx.ellipse(r.x + r.w / 2, r.y + r.h / 2, r.w / 2, r.h / 2, 0, 0, Math.PI * 2);
    } else {
      ctx.rect(r.x, r.y, r.w, r.h);
    }
    ctx.fillStyle = "rgba(0,0,0,0.45)";
    ctx.fill("evenodd");
    ctx.restore();

    // Outline: dark under-stroke keeps it readable on pale images.
    shapePath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "rgba(0,0,0,0.5)";
    ctx.stroke();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "#fff";
    ctx.stroke();

    // Rule-of-thirds guides, only while the crop is big enough to be useful.
    if (r.w > 60 && r.h > 60) {
      ctx.save();
      ctx.strokeStyle = "rgba(255,255,255,0.35)";
      ctx.lineWidth = 1;
      for (let i = 1; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(r.x + (r.w * i) / 3, r.y);
        ctx.lineTo(r.x + (r.w * i) / 3, r.y + r.h);
        ctx.moveTo(r.x, r.y + (r.h * i) / 3);
        ctx.lineTo(r.x + r.w, r.y + (r.h * i) / 3);
        ctx.stroke();
      }
      ctx.restore();
    }

    // Corner grips always; edges only on a free crop, since an edge drag cannot
    // preserve a locked ratio without fighting the user.
    const pts = handlePoints(r);
    const keys: Handle[] = aspect == null
      ? ["nw", "n", "ne", "e", "se", "s", "sw", "w"]
      : ["nw", "ne", "se", "sw"];
    for (const k of keys) {
      const p = pts[k];
      ctx.beginPath();
      ctx.arc(p.x, p.y, HANDLE_R, 0, Math.PI * 2);
      ctx.fillStyle = "#fff";
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = accent;
      ctx.stroke();
    }
  }, [bitmap, view, sel, shape, radius, aspect, transform, accent]);

  const toNorm = useCallback((e: React.PointerEvent<HTMLCanvasElement>) => {
    const c = e.currentTarget;
    const rect = c.getBoundingClientRect();
    return {
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
      px: ((e.clientX - rect.left) / rect.width) * (view?.vw ?? 1),
      py: ((e.clientY - rect.top) / rect.height) * (view?.vh ?? 1),
    };
  }, [view]);

  const asRegion = (s: CropSel): Region => ({ id: "crop", shape: "rect", ...s });

  const onPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!bitmap || !view || disabled) return;
    e.preventDefault();
    const p = toNorm(e);
    const hit = hitTestRegion(p.px, p.py, asRegion(selRef.current), view.vw, view.vh, TOL);
    const allowed: (Handle | "move")[] = aspect == null
      ? ["nw", "n", "ne", "e", "se", "s", "sw", "w", "move"]
      : ["nw", "ne", "se", "sw", "move"];
    const mode = hit === "inside" ? "move" : (hit as Handle | null);
    if (!mode || !allowed.includes(mode)) return;
    drag.current = { handle: mode, lastX: p.x, lastY: p.y };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!bitmap || !view || disabled) return;
    const p = toNorm(e);
    const d = drag.current;

    if (!d) {
      const hit = hitTestRegion(p.px, p.py, asRegion(selRef.current), view.vw, view.vh, TOL);
      const usable = hit === "inside"
        ? "move"
        : hit && (aspect == null || ["nw", "ne", "se", "sw"].includes(hit)) ? hit : null;
      setCursor(usable === "move" ? "move" : usable ? CURSOR_FOR[usable as Handle] : "default");
      return;
    }

    const dx = p.x - d.lastX;
    const dy = p.y - d.lastY;
    d.lastX = p.x;
    d.lastY = p.y;

    const cur = selRef.current;
    if (d.handle === "move") {
      onChange(clampCrop({ ...cur, x: cur.x + dx, y: cur.y + dy }));
      return;
    }
    const resized = resizeRegionByHandle(asRegion(cur), d.handle, p.x, p.y);
    const next: CropSel = { x: resized.x, y: resized.y, w: resized.w, h: resized.h };
    // Re-lock after every resize, anchored at the grip being dragged, so the
    // ratio cannot drift the way it used to.
    onChange(
      aspect == null
        ? clampCrop(next)
        : applyAspect(next, aspect, tSize.w, tSize.h, d.handle as "nw" | "ne" | "sw" | "se")
    );
  };

  const endDrag = (e: React.PointerEvent<HTMLCanvasElement>) => {
    drag.current = null;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLCanvasElement>) => {
    if (!bitmap || disabled) return;
    const stepX = (e.shiftKey ? 10 : 1) / Math.max(1, tSize.w);
    const stepY = (e.shiftKey ? 10 : 1) / Math.max(1, tSize.h);
    const nudge = (dx: number, dy: number) => {
      e.preventDefault();
      const c = selRef.current;
      onChange(clampCrop({ ...c, x: c.x + dx, y: c.y + dy }));
    };
    if (e.key === "ArrowLeft") nudge(-stepX, 0);
    else if (e.key === "ArrowRight") nudge(stepX, 0);
    else if (e.key === "ArrowUp") nudge(0, -stepY);
    else if (e.key === "ArrowDown") nudge(0, stepY);
  };

  return (
    <canvas
      ref={canvasRef}
      tabIndex={0}
      role="application"
      aria-label="Crop area. Drag inside to move, drag a handle to resize, arrow keys to nudge."
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onKeyDown={onKeyDown}
      className="max-w-full rounded touch-none select-none outline-none focus-visible:ring-2 focus-visible:ring-secondary"
      style={{ cursor: disabled ? "default" : cursor, touchAction: "none" }}
    />
  );
}

"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useCoarsePointer } from "@/lib/use-is-mobile";
import {
  CURSOR_FOR, MIN_SIZE, clampRegion, handlePoints, moveRegion, pickRegion,
  regionFromPoints, resizeRegionByHandle, toPixels,
  type Handle, type Region, type RegionShape,
} from "@/lib/image/redact";
import { newStrokeId, renderMasked, type BrushStroke } from "@/lib/image/mask";
import type { EffectId } from "@/lib/image/effects";

/*
  Grip sizes, in SCREEN pixels — deliberately not image pixels.

  This canvas is sized to the image's natural resolution and then scaled down by
  CSS, so a constant expressed in image pixels shrinks on screen as the image
  gets bigger: the old 9px tolerance was ~4px of actual target on a 1200px-wide
  photo at desktop width, and under 3px on a phone. Everything below is divided
  by the display ratio at use, which makes the target the same physical size
  whatever the image resolution.
*/
const TOL_SCREEN = 10;
const TOL_SCREEN_COARSE = 24;
const HANDLE_R_SCREEN = 5;
const HANDLE_R_SCREEN_COARSE = 9;

/** Stable identity so the default prop does not retrigger the repaint effect. */
const NO_STROKES: BrushStroke[] = [];

/**
 * Canvas editor for redaction regions, shared by /blur-face and /blur-image.
 *
 * Draw on empty space to add a region; click one to select it; drag the middle
 * to move it and any of the eight grips to resize. Delete removes the
 * selection, Escape deselects, arrow keys nudge. Replaces the previous
 * draw-only rectangles, which could not be moved, resized or individually
 * deleted once committed.
 */
export function RegionEditor({
  bitmap,
  regions,
  onChange,
  selectedId,
  onSelect,
  effect,
  intensity,
  color,
  invert = false,
  shape = "rect",
  accent,
  disabled = false,
  strokes = NO_STROKES,
  onStrokesChange,
  brush = null,
}: {
  bitmap: ImageBitmap | null;
  regions: Region[];
  onChange: (next: Region[]) => void;
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  effect: EffectId;
  /** 0-100 slider value. */
  intensity: number;
  /** Fill for the `color` effect. */
  color?: string;
  invert?: boolean;
  /** Shape used for newly drawn regions. */
  shape?: RegionShape;
  accent: string;
  disabled?: boolean;
  /** Brush strokes painted into the same mask as the regions. */
  strokes?: BrushStroke[];
  onStrokesChange?: (next: BrushStroke[]) => void;
  /**
   * Non-null puts the canvas in brush mode: dragging paints instead of drawing
   * or moving regions. `size` is a fraction of the longest side.
   */
  brush?: { mode: "add" | "erase"; size: number; fade: number } | null;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [draft, setDraftState] = useState<Region | null>(null);
  const [cursor, setCursor] = useState("crosshair");
  /* The stroke under the pointer, mirrored into a ref for the same reason the
     region draft is: the pointerup handler has to read the finished stroke
     synchronously, and a state updater would not have run yet. */
  const [wet, setWetState] = useState<BrushStroke | null>(null);
  const wetRef = useRef<BrushStroke | null>(null);
  const setWet = useCallback((next: BrushStroke | null) => {
    wetRef.current = next;
    setWetState(next);
  }, []);

  /*
    The in-progress draft is mirrored into a ref so `endDrag` can read the very
    latest value synchronously — a fast drag can deliver pointerup in the same
    batch as the final pointermove, and the render closure would still hold the
    previous rectangle.

    It has to be a ref rather than a functional `setState` updater: committing
    from inside an updater calls the PARENT's setState while React is rendering
    this component, which React warns about ("Cannot update a component while
    rendering a different component"). Updaters must stay pure.
  */
  const draftRef = useRef<Region | null>(null);
  const setDraft = useCallback((next: Region | null) => {
    draftRef.current = next;
    setDraftState(next);
  }, []);

  /*
    All mutable drag state lives in one ref, and every handler snapshots what it
    needs BEFORE mutating it. A state updater runs at re-render, not when it is
    queued, so reading `drag.lastX` inside `setState(...)` would read an anchor
    this handler had already advanced — that reversed the drag in CircleCropTool
    and is the same trap here.
  */
  const drag = useRef<
    | { kind: "draw"; startX: number; startY: number; region: Region }
    | { kind: "move" | "resize"; id: string; handle?: Handle; lastX: number; lastY: number }
    | null
  >(null);

  const regionsRef = useRef(regions);
  useEffect(() => { regionsRef.current = regions; }, [regions]);

  const W = bitmap?.width ?? 0;
  const H = bitmap?.height ?? 0;

  const coarse = useCoarsePointer();
  /*
    How many image pixels one screen pixel covers. The canvas is laid out by CSS
    (`max-w-full`), so this is measured, not derived — and it changes on rotate,
    on a new image, and when the mobile sheet opens under it.
  */
  const [imgPerScreenPx, setImgPerScreenPx] = useState(1);
  useEffect(() => {
    const c = canvasRef.current;
    if (!c || !W) return;
    const measure = () => {
      const shown = c.getBoundingClientRect().width;
      if (shown > 0) setImgPerScreenPx(W / shown);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(c);
    return () => ro.disconnect();
  }, [W, H]);

  const tol = (coarse ? TOL_SCREEN_COARSE : TOL_SCREEN) * imgPerScreenPx;
  const handleR = (coarse ? HANDLE_R_SCREEN_COARSE : HANDLE_R_SCREEN) * imgPerScreenPx;

  const visible = useMemo(
    () => (draft ? [...regions, draft] : regions),
    [regions, draft]
  );

  const liveStrokes = useMemo(
    () => (wet ? [...strokes, wet] : strokes),
    [strokes, wet]
  );

  // Repaint whenever anything visual changes. Note this does NOT re-decode the
  // image — the bitmap is owned by the caller. The old tools re-ran
  // `decodeBitmap` on every pointer move and every slider tick.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !bitmap) return;
    renderMasked(canvas, bitmap, W, H, {
      regions: visible,
      strokes: liveStrokes,
      invert,
      effect,
      intensity,
      color,
    });

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    /* Same reasoning as the grip sizes: strokes are authored in screen pixels
       and converted, so the outline stays ~2px thick whether the image is 900px
       or 6000px wide. The old `W / 900` heuristic drew region borders at well
       under one screen pixel on a phone. */
    const scale = imgPerScreenPx;
    ctx.lineWidth = 2 * scale;

    for (const r of visible) {
      const px = toPixels(r, W, H);
      const isSelected = r.id === selectedId;
      const isDraft = draft?.id === r.id;

      ctx.setLineDash(isDraft ? [8 * scale, 6 * scale] : []);
      ctx.strokeStyle = "rgba(0,0,0,0.55)";
      ctx.lineWidth = 3.5 * scale;
      ctx.strokeRect(px.x, px.y, px.w, px.h);
      ctx.strokeStyle = isDraft ? "#ffffff" : isSelected ? "#ffffff" : accent;
      ctx.lineWidth = 1.75 * scale;
      ctx.strokeRect(px.x, px.y, px.w, px.h);
      ctx.setLineDash([]);

      if (isSelected && !isDraft) {
        const pts = handlePoints(px);
        for (const key of Object.keys(pts) as Handle[]) {
          const p = pts[key];
          ctx.beginPath();
          ctx.arc(p.x, p.y, handleR, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff";
          ctx.fill();
          ctx.lineWidth = 1.5 * scale;
          ctx.strokeStyle = accent;
          ctx.stroke();
        }
      }
    }
  }, [bitmap, visible, liveStrokes, effect, intensity, color, invert, selectedId, draft, accent, W, H, imgPerScreenPx, handleR]);

  /** Pointer position in image pixels. */
  const toImage = useCallback((e: React.PointerEvent<HTMLCanvasElement>) => {
    const c = e.currentTarget;
    const rect = c.getBoundingClientRect();
    return {
      x: ((e.clientX - rect.left) / rect.width) * c.width,
      y: ((e.clientY - rect.top) / rect.height) * c.height,
    };
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!bitmap || disabled) return;
    e.preventDefault();
    const { x, y } = toImage(e);
    e.currentTarget.setPointerCapture(e.pointerId);

    /* Brush mode owns the pointer: no region hit-testing, no selection. Mixing
       the two would mean a stroke that starts on a face silently drags it. */
    if (brush) {
      setWet({
        id: newStrokeId(),
        mode: brush.mode,
        size: brush.size,
        fade: brush.fade,
        points: [{ x: x / W, y: y / H }],
      });
      return;
    }

    const hit = pickRegion(x, y, regionsRef.current, W, H, tol);

    if (hit && hit.target === "inside") {
      onSelect(hit.region.id);
      drag.current = { kind: "move", id: hit.region.id, lastX: x, lastY: y };
    } else if (hit && hit.target) {
      onSelect(hit.region.id);
      drag.current = { kind: "resize", id: hit.region.id, handle: hit.target as Handle, lastX: x, lastY: y };
    } else {
      const start = { x: x / W, y: y / H };
      const region = regionFromPoints(start, start, shape);
      drag.current = { kind: "draw", startX: start.x, startY: start.y, region };
      setDraft(region);
      onSelect(null);
    }
  };

  const onPointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!bitmap || disabled) return;
    const { x, y } = toImage(e);

    if (brush) {
      const cur = wetRef.current;
      if (!cur) return;
      setWet({ ...cur, points: [...cur.points, { x: x / W, y: y / H }] });
      return;
    }

    const d = drag.current;

    if (!d) {
      const hit = pickRegion(x, y, regionsRef.current, W, H, tol);
      setCursor(
        !hit ? "crosshair" : hit.target === "inside" ? "move" : CURSOR_FOR[hit.target as Handle] ?? "crosshair"
      );
      return;
    }

    if (d.kind === "draw") {
      setDraft(regionFromPoints({ x: d.startX, y: d.startY }, { x: x / W, y: y / H }, shape, d.region.id));
      return;
    }

    // Snapshot the delta before advancing the anchor — see the note on `drag`.
    const dx = (x - d.lastX) / W;
    const dy = (y - d.lastY) / H;
    d.lastX = x;
    d.lastY = y;

    if (d.kind === "move") {
      onChange(regionsRef.current.map((r) => (r.id === d.id ? moveRegion(r, dx, dy) : r)));
    } else {
      onChange(
        regionsRef.current.map((r) =>
          r.id === d.id ? resizeRegionByHandle(r, d.handle!, x / W, y / H) : r
        )
      );
    }
  };

  const endDrag = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const d = drag.current;
    drag.current = null;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }

    if (brush) {
      const finished = wetRef.current;
      setWet(null);
      if (finished && finished.points.length > 0) onStrokesChange?.([...strokes, finished]);
      return;
    }
    if (d?.kind === "draw") {
      const current = draftRef.current;
      setDraft(null);
      // Ignore a stray click that never became a real rectangle.
      if (current && current.w >= MIN_SIZE && current.h >= MIN_SIZE) {
        const committed = clampRegion(current);
        onChange([...regionsRef.current, committed]);
        onSelect(committed.id);
      }
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLCanvasElement>) => {
    if (!selectedId || disabled) return;
    const step = (e.shiftKey ? 10 : 1) / Math.max(W, 1);
    const stepY = (e.shiftKey ? 10 : 1) / Math.max(H, 1);
    const nudge = (dx: number, dy: number) => {
      e.preventDefault();
      onChange(regionsRef.current.map((r) => (r.id === selectedId ? moveRegion(r, dx, dy) : r)));
    };
    if (e.key === "ArrowLeft") nudge(-step, 0);
    else if (e.key === "ArrowRight") nudge(step, 0);
    else if (e.key === "ArrowUp") nudge(0, -stepY);
    else if (e.key === "ArrowDown") nudge(0, stepY);
    else if (e.key === "Delete" || e.key === "Backspace") {
      e.preventDefault();
      onChange(regionsRef.current.filter((r) => r.id !== selectedId));
      onSelect(null);
    } else if (e.key === "Escape") {
      e.preventDefault();
      onSelect(null);
    }
  };

  return (
    <canvas
      ref={canvasRef}
      tabIndex={0}
      role="application"
      aria-label={
        brush
          ? "Redaction area. Drag to paint over what you want hidden."
          : "Redaction area. Drag to draw a region, click one to select it, drag its handles to resize, Delete to remove, arrow keys to nudge."
      }
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onKeyDown={onKeyDown}
      className="max-w-full max-h-[calc(100dvh-14rem)] rounded touch-none select-none outline-none focus-visible:ring-2 focus-visible:ring-secondary"
      style={{ cursor: disabled ? "default" : brush ? "crosshair" : cursor, touchAction: "none" }}
    />
  );
}

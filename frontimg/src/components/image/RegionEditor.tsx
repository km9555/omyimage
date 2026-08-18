"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  CURSOR_FOR, MIN_SIZE, clampRegion, handlePoints, moveRegion, pickRegion,
  regionFromPoints, renderRedacted, resizeRegionByHandle, toPixels,
  type Handle, type RedactStyle, type Region, type RegionShape,
} from "@/lib/image/redact";

const HANDLE_TOL = 9;
const HANDLE_R = 4.5;

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
  style,
  strength,
  solidColor,
  invert = false,
  shape = "rect",
  accent,
  disabled = false,
}: {
  bitmap: ImageBitmap | null;
  regions: Region[];
  onChange: (next: Region[]) => void;
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  style: RedactStyle;
  strength: number;
  solidColor?: string;
  invert?: boolean;
  /** Shape used for newly drawn regions. */
  shape?: RegionShape;
  accent: string;
  disabled?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [draft, setDraftState] = useState<Region | null>(null);
  const [cursor, setCursor] = useState("crosshair");

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

  const visible = useMemo(
    () => (draft ? [...regions, draft] : regions),
    [regions, draft]
  );

  // Repaint whenever anything visual changes. Note this does NOT re-decode the
  // image — the bitmap is owned by the caller. The old tools re-ran
  // `decodeBitmap` on every pointer move and every slider tick.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !bitmap) return;
    renderRedacted(canvas, bitmap, visible, { style, strength, solidColor, invert });

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const scale = Math.max(1, W / 900);
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
          ctx.arc(p.x, p.y, HANDLE_R * scale, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff";
          ctx.fill();
          ctx.lineWidth = 1.5 * scale;
          ctx.strokeStyle = accent;
          ctx.stroke();
        }
      }
    }
  }, [bitmap, visible, style, strength, solidColor, invert, selectedId, draft, accent, W, H]);

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
    const hit = pickRegion(x, y, regionsRef.current, W, H, HANDLE_TOL);
    e.currentTarget.setPointerCapture(e.pointerId);

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
    const d = drag.current;

    if (!d) {
      const hit = pickRegion(x, y, regionsRef.current, W, H, HANDLE_TOL);
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
      aria-label="Redaction area. Drag to draw a region, click one to select it, drag its handles to resize, Delete to remove, arrow keys to nudge."
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onKeyDown={onKeyDown}
      className="max-w-full max-h-[calc(100vh-14rem)] rounded touch-none select-none outline-none focus-visible:ring-2 focus-visible:ring-secondary"
      style={{ cursor: disabled ? "default" : cursor, touchAction: "none" }}
    />
  );
}

"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useCoarsePointer } from "@/lib/use-is-mobile";
import { paintMerge, type MergePlacement } from "@/lib/image/merge";
import {
  boundsOf, cornerPoint, corners, hitHandle, pickPlacement, resizeByCorner,
  angleFrom, snapAngle, normalizeAngle, rotateGrip,
  type Corner, type Placement,
} from "@/lib/image/obb";
import { useT } from "@/i18n/I18nScope";

/* Hit tolerances and drawn sizes, in SCREEN pixels. Everything is converted into
   canvas units at use, because the composite may be 12000px wide shown at 700 —
   a tolerance in canvas units would be invisible there and enormous elsewhere.
   The coarse variants are what a fingertip needs. */
const TOL_SCREEN = 10;
const TOL_SCREEN_COARSE = 22;
const HANDLE_R_SCREEN = 6;
const HANDLE_R_SCREEN_COARSE = 12;
const GRIP_DIST_SCREEN = 26;
const SNAP_SCREEN = 7;

/** Ceiling on the drawn preview, so a tall column does not fill the page. */
const MAX_VIEW_H = 460;
/** Small composites may be blown up a little, but never so far they go mushy. */
const MAX_UPSCALE = 1.5;

export interface Guide {
  axis: "x" | "y";
  at: number;
}

/**
 * The editable merge preview.
 *
 * Doubles as the read-only preview for the automatic layouts — pass `disabled`
 * and it draws the composite and nothing else, which keeps one rendering path
 * for every mode rather than a plain canvas that drifts from the editable one.
 *
 * Sizing follows `CropCanvas` rather than `RegionEditor`: the canvas is a
 * *scaled view*, not the composite at natural resolution. `RegionEditor` can
 * afford natural size for one photo; a merged strip of four phone shots is
 * already 12000px wide and would allocate ~200MB of canvas.
 *
 * The interaction discipline is `RegionEditor`'s, and deliberately so — the
 * single drag ref, snapshotting before mutating, and mirroring the draft into a
 * ref are each there because of a bug that has already been paid for once.
 */
export function MergeCanvas({
  W,
  H,
  placements,
  bmps,
  bg,
  selectedId,
  onSelect,
  onChange,
  accent,
  disabled = false,
}: {
  W: number;
  H: number;
  placements: MergePlacement[];
  bmps: Map<string, CanvasImageSource>;
  bg: string | null;
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  onChange: (next: MergePlacement[]) => void;
  accent: string;
  disabled?: boolean;
}) {
  const t = useT();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const coarse = useCoarsePointer();

  const [availW, setAvailW] = useState(640);
  const [cursor, setCursor] = useState("default");
  const [guides, setGuides] = useState<Guide[]>([]);

  /* The live draft during a drag. Mirrored into a ref because `pointerup` can
     arrive in the same batch as the final `pointermove`, and the render closure
     would still hold the previous positions. Committing from inside a state
     updater is not an option either — that calls the parent's setState while
     this component renders, which React warns about. */
  const [draft, setDraftState] = useState<MergePlacement[] | null>(null);
  const draftRef = useRef<MergePlacement[] | null>(null);
  const setDraft = useCallback((next: MergePlacement[] | null) => {
    draftRef.current = next;
    setDraftState(next);
  }, []);

  /* All mutable drag state in one ref. Every handler reads what it needs BEFORE
     it advances the anchor — a state updater runs at re-render, not when it is
     queued, so reading an anchor this handler already moved reverses the drag. */
  const drag = useRef<
    | { kind: "move"; id: string; lastX: number; lastY: number }
    | { kind: "resize"; id: string; corner: Corner }
    | { kind: "rotate"; id: string; startAngle: number; grabAngle: number }
    | null
  >(null);

  const placementsRef = useRef(placements);
  useEffect(() => { placementsRef.current = placements; }, [placements]);

  // Measured, not derived: the pane is laid out by CSS and changes with the
  // window, the mobile sheet and the file tray opening beneath it.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const measure = () => {
      const w = el.clientWidth;
      if (w > 0) setAvailW(w);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  /** Canvas pixels per screen pixel, and the drawn size. */
  const view = useMemo(() => {
    if (!W || !H) return { scale: 1, vw: 0, vh: 0 };
    const scale = Math.min(availW / W, MAX_VIEW_H / H, MAX_UPSCALE);
    return { scale, vw: Math.round(W * scale), vh: Math.round(H * scale) };
  }, [W, H, availW]);

  const perScreenPx = view.scale > 0 ? 1 / view.scale : 1;
  const tol = (coarse ? TOL_SCREEN_COARSE : TOL_SCREEN) * perScreenPx;
  const handleR = (coarse ? HANDLE_R_SCREEN_COARSE : HANDLE_R_SCREEN) * perScreenPx;
  const gripDist = GRIP_DIST_SCREEN * perScreenPx;
  const snapTol = SNAP_SCREEN * perScreenPx;

  const shown = draft ?? placements;

  // ── Painting ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !W || !H) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const s = view.scale * dpr;

    paintMerge(canvas, bmps, W, H, shown, bg, s);
    canvas.style.width = `${view.vw}px`;
    canvas.style.height = `${view.vh}px`;

    const ctx = canvas.getContext("2d");
    if (!ctx || disabled) return;

    // Chrome is drawn in DEVICE pixels with constant line widths, rather than
    // under a scaled transform, so strokes stay 1px however far the view zooms.
    const toDev = (x: number, y: number) => ({ x: x * s, y: y * s });

    for (const g of guides) {
      ctx.save();
      ctx.strokeStyle = accent;
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      if (g.axis === "x") {
        const p = toDev(g.at, 0);
        ctx.moveTo(p.x, 0);
        ctx.lineTo(p.x, canvas.height);
      } else {
        const p = toDev(0, g.at);
        ctx.moveTo(0, p.y);
        ctx.lineTo(canvas.width, p.y);
      }
      ctx.stroke();
      ctx.restore();
    }

    const sel = shown.find((p) => p.id === selectedId);
    if (!sel) return;

    // Outline, dark under-stroke first so it reads on a pale image.
    const world = corners(sel);
    const pts = world.map((c) => toDev(c.x, c.y));
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y);
    for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
    ctx.closePath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "rgba(0,0,0,0.45)";
    ctx.stroke();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = accent;
    ctx.stroke();

    // Stem out to the rotation grip, from the middle of the top edge.
    const g = rotateGrip(sel, gripDist);
    const grip = toDev(g.x, g.y);
    const topMid = toDev((world[0].x + world[1].x) / 2, (world[0].y + world[1].y) / 2);
    ctx.beginPath();
    ctx.moveTo(topMid.x, topMid.y);
    ctx.lineTo(grip.x, grip.y);
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = accent;
    ctx.stroke();

    const knob = (x: number, y: number, r: number) => {
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = "#fff";
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = accent;
      ctx.stroke();
    };
    const knobR = (coarse ? HANDLE_R_SCREEN_COARSE : HANDLE_R_SCREEN) * dpr * 0.8;
    for (const p of pts) knob(p.x, p.y, knobR);
    knob(grip.x, grip.y, knobR);
    ctx.restore();
  }, [W, H, shown, bmps, bg, view, selectedId, guides, accent, disabled, coarse, gripDist]);

  // ── Pointer ───────────────────────────────────────────────────────────────
  const toCanvas = useCallback((e: React.PointerEvent<HTMLCanvasElement>) => {
    const c = e.currentTarget;
    const rect = c.getBoundingClientRect();
    return {
      x: ((e.clientX - rect.left) / rect.width) * W,
      y: ((e.clientY - rect.top) / rect.height) * H,
    };
  }, [W, H]);

  /**
   * Nudge a moving placement onto nearby edges and centres.
   *
   * Candidates are the canvas's own edges and middle, plus every other
   * placement's bounding box — its *rotated* bounds, so a turned image still
   * lines up by what you can see rather than by an invisible upright rectangle.
   */
  const applySnap = useCallback(
    (moving: MergePlacement, others: MergePlacement[]): { p: MergePlacement; guides: Guide[] } => {
      const b = boundsOf([moving]);
      if (!b) return { p: moving, guides: [] };

      const xLines = [0, W / 2, W];
      const yLines = [0, H / 2, H];
      for (const o of others) {
        const ob = boundsOf([o]);
        if (!ob) continue;
        xLines.push(ob.x, ob.x + ob.w / 2, ob.x + ob.w);
        yLines.push(ob.y, ob.y + ob.h / 2, ob.y + ob.h);
      }

      const found: Guide[] = [];
      let dx = 0;
      let dy = 0;
      let bestX = snapTol;
      let bestY = snapTol;
      for (const line of xLines) {
        for (const edge of [b.x, b.x + b.w / 2, b.x + b.w]) {
          const d = line - edge;
          if (Math.abs(d) < bestX) { bestX = Math.abs(d); dx = d; found.length = 0; found.push({ axis: "x", at: line }); }
        }
      }
      const yFound: Guide[] = [];
      for (const line of yLines) {
        for (const edge of [b.y, b.y + b.h / 2, b.y + b.h]) {
          const d = line - edge;
          if (Math.abs(d) < bestY) { bestY = Math.abs(d); dy = d; yFound.length = 0; yFound.push({ axis: "y", at: line }); }
        }
      }
      return {
        p: { ...moving, cx: moving.cx + dx, cy: moving.cy + dy },
        guides: [...found, ...yFound],
      };
    },
    [W, H, snapTol]
  );

  const onPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (disabled) return;
    const { x, y } = toCanvas(e);
    const list = placementsRef.current;

    const sel = list.find((p) => p.id === selectedId);
    if (sel) {
      const h = hitHandle(x, y, sel, handleR, gripDist);
      if (h === "rotate") {
        e.currentTarget.setPointerCapture(e.pointerId);
        drag.current = { kind: "rotate", id: sel.id, startAngle: sel.angle, grabAngle: angleFrom(sel, x, y) };
        return;
      }
      if (h) {
        e.currentTarget.setPointerCapture(e.pointerId);
        drag.current = { kind: "resize", id: sel.id, corner: h };
        return;
      }
    }

    const hit = pickPlacement(x, y, list);
    onSelect(hit?.id ?? null);
    if (hit) {
      e.currentTarget.setPointerCapture(e.pointerId);
      drag.current = { kind: "move", id: hit.id, lastX: x, lastY: y };
    }
  };

  const onPointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (disabled) return;
    const { x, y } = toCanvas(e);
    const d = drag.current;
    const list = placementsRef.current;

    if (!d) {
      // Hover feedback only.
      const sel = list.find((p) => p.id === selectedId);
      const h = sel ? hitHandle(x, y, sel, handleR, gripDist) : null;
      setCursor(h === "rotate" ? "grab" : h ? "nwse-resize" : pickPlacement(x, y, list) ? "move" : "default");
      return;
    }

    if (d.kind === "move") {
      // Snapshot the anchor BEFORE advancing it.
      const dx = x - d.lastX;
      const dy = y - d.lastY;
      d.lastX = x;
      d.lastY = y;
      const base = draftRef.current ?? list;
      const idx = base.findIndex((p) => p.id === d.id);
      if (idx < 0) return;
      const moved = { ...base[idx], cx: base[idx].cx + dx, cy: base[idx].cy + dy };
      const others = base.filter((_, i) => i !== idx);
      // Alt suspends snapping, for when you need a position between the lines.
      const { p, guides: g } = e.altKey ? { p: moved, guides: [] } : applySnap(moved, others);
      const next = [...base];
      next[idx] = p;
      setDraft(next);
      setGuides(g);
      return;
    }

    const base = draftRef.current ?? list;
    const idx = base.findIndex((p) => p.id === d.id);
    if (idx < 0) return;

    if (d.kind === "resize") {
      const next = [...base];
      next[idx] = { ...base[idx], ...resizeByCorner(base[idx], d.corner, x, y) };
      setDraft(next);
      return;
    }

    // rotate
    const live = angleFrom(base[idx], x, y);
    let angle = d.startAngle + (live - d.grabAngle);
    if (e.shiftKey) angle = snapAngle(angle, 15);
    const next = [...base];
    next[idx] = { ...base[idx], angle: normalizeAngle(angle) };
    setDraft(next);
  };

  const endDrag = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drag.current) return;
    drag.current = null;
    try { e.currentTarget.releasePointerCapture(e.pointerId); } catch { /* already released */ }
    // Read the ref, not state: the last pointermove may not have rendered yet.
    const final = draftRef.current;
    setDraft(null);
    setGuides([]);
    if (final) onChange(final);
  };

  // ── Keyboard ──────────────────────────────────────────────────────────────
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (disabled || !selectedId) return;
    const list = placementsRef.current;
    const idx = list.findIndex((p) => p.id === selectedId);
    if (idx < 0) return;
    const step = e.shiftKey ? 10 : 1;
    const nudge = (dx: number, dy: number) => {
      const next = [...list];
      next[idx] = { ...list[idx], cx: list[idx].cx + dx, cy: list[idx].cy + dy };
      onChange(next);
    };
    switch (e.key) {
      case "ArrowLeft": e.preventDefault(); nudge(-step, 0); break;
      case "ArrowRight": e.preventDefault(); nudge(step, 0); break;
      case "ArrowUp": e.preventDefault(); nudge(0, -step); break;
      case "ArrowDown": e.preventDefault(); nudge(0, step); break;
      case "Escape": onSelect(null); break;
      default: break;
    }
  };

  if (!W || !H) {
    return <div ref={wrapRef} className="flex min-h-[220px] items-center justify-center" />;
  }

  return (
    <div ref={wrapRef} className="flex w-full items-center justify-center">
      <canvas
        ref={canvasRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onKeyDown={onKeyDown}
        tabIndex={disabled ? -1 : 0}
        role={disabled ? undefined : "application"}
        aria-label={disabled ? undefined : t("Merged image — drag to move, corners to resize, the top handle to rotate")}
        className="max-w-full rounded outline-none"
        /* touch-action none or the browser scrolls the page instead of letting
           a finger drag an image. */
        style={{ touchAction: disabled ? "auto" : "none", cursor: disabled ? "default" : cursor }}
      />
    </div>
  );
}

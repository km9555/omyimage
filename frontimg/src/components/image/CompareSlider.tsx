"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "@/components/Icon";
import { useCoarsePointer } from "@/lib/use-is-mobile";

/**
 * Drag-to-compare view of an original against its processed result.
 *
 * The "after" image is the only in-flow element, so it alone defines the box; the
 * "before" image is laid over the identical rect and only its *paint* is clipped.
 * That is why a 500px original and a 2000px result line up exactly — nothing is
 * resized to match, they simply share one box. Upscaling preserves the source
 * aspect ratio, so `object-contain` fills that box with no letterboxing; if a
 * rounding pixel ever drifts you get a hairline rather than a distortion.
 *
 * `inline-block` on the box is load-bearing: a block-level wrapper would stretch
 * to the column width and the divider would run over empty background beside the
 * image. The outer flex centres the shrink-wrapped box instead.
 */

/** Handle diameter. Coarse pointers get the bigger target, as in CropCanvas. */
const HANDLE = 36;
const HANDLE_COARSE = 44;

type Dims = { w: number; h: number } | null;

export function CompareSlider({
  beforeUrl,
  afterUrl,
  accent,
  beforeAlt = "Original",
  afterAlt = "Result",
}: {
  beforeUrl: string;
  afterUrl: string;
  accent: string;
  beforeAlt?: string;
  afterAlt?: string;
}) {
  const [pct, setPct] = useState(50);
  const [beforeDims, setBeforeDims] = useState<Dims>(null);
  const [afterDims, setAfterDims] = useState<Dims>(null);
  const dragging = useRef(false);
  const coarse = useCoarsePointer();
  const size = coarse ? HANDLE_COARSE : HANDLE;

  // A new run means a new pair of images — recentre rather than leaving the
  // divider wherever the last comparison was dragged to.
  useEffect(() => {
    setPct(50);
    setBeforeDims(null);
    setAfterDims(null);
  }, [beforeUrl, afterUrl]);

  /**
   * Blob URLs frequently decode before React attaches `onLoad`, and that event
   * then never fires — so measure from the ref callback too, guarded on
   * `complete`. Whichever happens first wins.
   *
   * The equality check is not an optimisation, it is required. An inline ref
   * callback runs on every render, so storing a fresh `{w,h}` object each time
   * would change state on every render and loop forever (React error #185).
   * Returning the previous object unchanged is what lets React bail out.
   */
  const measure = useCallback(
    (el: HTMLImageElement | null, set: React.Dispatch<React.SetStateAction<Dims>>) => {
      if (!el?.complete || !el.naturalWidth) return;
      const w = el.naturalWidth;
      const h = el.naturalHeight;
      set((prev) => (prev && prev.w === w && prev.h === h ? prev : { w, h }));
    },
    [],
  );

  const posFrom = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (!rect.width) return 50;
    return Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100));
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Deliberately no preventDefault: this sits inside the mobile shell's only
    // scroller, and suppressing the default here would fight the pan-y gesture.
    dragging.current = true;
    setPct(posFrom(e));
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    setPct(posFrom(e));
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = false;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 1;
    if (e.key === "ArrowLeft") setPct((p) => Math.max(0, p - step));
    else if (e.key === "ArrowRight") setPct((p) => Math.min(100, p + step));
    else if (e.key === "Home") setPct(0);
    else if (e.key === "End") setPct(100);
    else return;
    e.preventDefault();
  };

  const dim = (d: Dims) => (d ? `${d.w.toLocaleString()} × ${d.h.toLocaleString()} px` : "");

  return (
    <div
      className="flex justify-center rounded-xl border border-surface-variant bg-surface-container p-4"
      style={{ minHeight: 220 }}
    >
      <div
        className="relative inline-block select-none overflow-hidden rounded"
        // Horizontal drags are ours, vertical swipes belong to the page. When the
        // browser claims the gesture it fires pointercancel, which endDrag handles.
        style={{ touchAction: "pan-y" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={afterUrl}
          alt={afterAlt}
          draggable={false}
          className="block w-auto max-w-full max-h-[46vh]"
          ref={(el) => measure(el, setAfterDims)}
          onLoad={(e) => measure(e.currentTarget, setAfterDims)}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={beforeUrl}
          alt={beforeAlt}
          draggable={false}
          className="absolute inset-0 h-full w-full object-contain"
          style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
          ref={(el) => measure(el, setBeforeDims)}
          onLoad={(e) => measure(e.currentTarget, setBeforeDims)}
        />

        {/* Dimension badges. Each fades out once its own side is nearly closed,
            so a fully-dragged divider never leaves a label over the wrong image. */}
        <span
          className="pointer-events-none absolute left-2 top-2 select-none rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm transition-opacity"
          style={{ opacity: pct < 14 ? 0 : 1 }}
        >
          {dim(beforeDims)}
        </span>
        <span
          className="pointer-events-none absolute right-2 top-2 select-none rounded-full px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm transition-opacity"
          style={{ backgroundColor: accent, opacity: pct > 86 ? 0 : 1 }}
        >
          {dim(afterDims)}
        </span>

        {/* Divider. White with a dark ring so it reads on light and dark images. */}
        <div
          className="pointer-events-none absolute inset-y-0"
          style={{
            left: `${pct}%`,
            width: 2,
            transform: "translateX(-1px)",
            backgroundColor: "#fff",
            boxShadow: "0 0 0 1px rgba(0,0,0,.35)",
          }}
        />

        <div
          role="slider"
          tabIndex={0}
          aria-label="Compare original with result"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pct)}
          aria-valuetext={`${Math.round(pct)}% original`}
          onKeyDown={onKeyDown}
          className="absolute grid place-items-center rounded-full bg-white shadow-md outline-none focus-visible:ring-2 focus-visible:ring-secondary"
          style={{
            left: `${pct}%`,
            top: "50%",
            width: size,
            height: size,
            transform: "translate(-50%,-50%)",
            border: `2px solid ${accent}`,
            // A small dead zone where the drag is unconditionally ours, so a
            // finger on the handle cannot accidentally scroll the page instead.
            touchAction: "none",
            cursor: "ew-resize",
          }}
        >
          <span className="flex items-center" style={{ color: accent }}>
            <Icon name="chevron_left" className="text-[16px]" />
            <Icon name="chevron_right" className="-ml-1 text-[16px]" />
          </span>
        </div>
      </div>
    </div>
  );
}

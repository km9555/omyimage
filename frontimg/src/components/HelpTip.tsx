"use client";

import { useRef, useState } from "react";
import { createPortal } from "react-dom";

const TOOLTIP_W = 240;

/**
 * Small "?" help affordance. Shows `text` in a tooltip on hover or keyboard
 * focus, rendered in a portal so it is never clipped by overflow containers.
 */
export function HelpTip({
  text,
  className = "",
  glyph = "?",
}: {
  text: string;
  className?: string;
  glyph?: string;
}) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState<{ top: number; left: number; above: boolean } | null>(null);

  const show = () => {
    const el = btnRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const margin = 8;
    let left = r.left + r.width / 2 - TOOLTIP_W / 2;
    left = Math.max(margin, Math.min(window.innerWidth - TOOLTIP_W - margin, left));
    const above = r.top > 140;
    const top = above ? r.top - margin : r.bottom + margin;
    setPos({ top, left, above });
  };
  const hide = () => setPos(null);

  return (
    <span className={`inline-flex align-middle ${className}`}>
      <button
        ref={btnRef}
        type="button"
        aria-label="Help"
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={hide}
        className="flex h-[18px] w-[18px] items-center justify-center rounded-full border border-outline-variant text-[11px] font-bold leading-none text-on-surface-variant hover:text-secondary hover:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary transition-colors"
      >
        {glyph}
      </button>
      {pos &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            role="tooltip"
            style={{
              position: "fixed",
              top: pos.top,
              left: pos.left,
              width: TOOLTIP_W,
              transform: pos.above ? "translateY(-100%)" : "none",
            }}
            className="z-[100] rounded-lg bg-inverse-surface text-inverse-on-surface px-3 py-2 text-label-sm font-label-sm leading-snug text-center shadow-lg pointer-events-none"
          >
            {text}
          </div>,
          document.body
        )}
    </span>
  );
}

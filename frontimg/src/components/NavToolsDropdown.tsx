"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { toolColor } from "@/lib/tools";
import { NAV_COLUMNS, NAV_SECTIONS_BY_ID, navSectionTools } from "@/lib/nav-sections";

/**
 * Desktop "Tools" mega-menu, ported from oMyPDF's NavToolsDropdown.
 *
 * The grouping lives in lib/nav-sections so it stays one source of truth if a
 * mobile drawer is added later — oMyImage has no drawer today, which is why
 * this is gated to `lg` alongside the existing quick links.
 */
const COLS = NAV_COLUMNS.map((ids) => ({
  sections: ids.map((id) => NAV_SECTIONS_BY_ID[id]).filter(Boolean),
}));

export function NavToolsDropdown() {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ left: 0, top: 64, width: 1107 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Anchor the panel's left edge under the "Tools" button, clamped so it never
  // runs off the right edge on narrower desktops.
  //
  // Measured against documentElement.clientWidth, not window.innerWidth: the
  // latter counts the scrollbar, so the panel was clamped ~15px too far right
  // and its own overhang gave the page a horizontal scrollbar for as long as
  // the menu stayed open. (oMyPDF still uses innerWidth here.)
  const place = useCallback(() => {
    const r = buttonRef.current?.getBoundingClientRect();
    if (!r || typeof document === "undefined") return;
    const margin = 12;
    const vw = document.documentElement.clientWidth;
    const width = Math.min(1107, vw - margin * 2);
    let left = r.left;
    if (left + width > vw - margin) left = vw - margin - width;
    if (left < margin) left = margin;
    setPos({ left, top: r.bottom + 8, width });
  }, []);

  // Hover intent: open on enter, close on leave — but with a short grace delay
  // so moving the cursor from the button down into the (fixed) panel across the
  // small gap doesn't dismiss the menu.
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const openMenu = () => {
    cancelClose();
    place();
    setOpen(true);
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 160);
  };
  useEffect(() => () => cancelClose(), []);

  // Keep the panel aligned with the button while open (resize / scroll).
  useEffect(() => {
    if (!open) return;
    place();
    window.addEventListener("resize", place);
    window.addEventListener("scroll", place, true);
    return () => {
      window.removeEventListener("resize", place);
      window.removeEventListener("scroll", place, true);
    };
  }, [open, place]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  return (
    <div className="relative" onMouseEnter={openMenu} onMouseLeave={scheduleClose}>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className={`flex items-center gap-0.5 rounded-md px-3 py-1.5 text-body-sm transition-colors xl:text-body-md ${
          open
            ? "bg-surface-container text-secondary"
            : "text-on-surface-variant hover:bg-surface-container hover:text-secondary"
        }`}
      >
        Tools
        <Icon
          name="expand_more"
          className={`text-[18px] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <>
          {/* Portal backdrop — rendered on document.body so it sits fully
              outside this component's subtree. Any click on it closes the
              dropdown with no contains() ambiguity. */}
          {createPortal(
            <div className="fixed inset-0 z-[49]" onMouseDown={() => setOpen(false)} />,
            document.body,
          )}

          <div
            onMouseEnter={openMenu}
            onMouseLeave={scheduleClose}
            style={{ position: "fixed", top: pos.top, left: pos.left, width: pos.width }}
            className="z-50 rounded-2xl border border-outline-variant bg-surface-container-lowest shadow-2xl"
          >
            {/* Top accent bar */}
            <div
              className="h-1 rounded-t-2xl"
              style={{
                background: "linear-gradient(90deg,var(--color-secondary),#8A6FC4,#4B8FC7)",
              }}
            />

            <div className="grid grid-cols-4 gap-x-4 gap-y-0 p-5">
              {COLS.map((col, ci) => (
                <div key={ci} className={`flex flex-col gap-5 ${ci > 0 ? "border-l border-outline-variant/40 pl-4" : ""}`}>
                  {col.sections.map((sec) => (
                    <div key={sec.id}>
                      <div className="mb-2.5 flex items-center gap-1.5">
                        <span
                          className="flex h-5 w-5 items-center justify-center rounded"
                          style={{ background: `${sec.color}1A` }}
                        >
                          <Icon name={sec.icon} className="text-[13px]" style={{ color: sec.color }} />
                        </span>
                        <span
                          className="text-[11px] font-bold uppercase tracking-widest"
                          style={{ color: sec.color }}
                        >
                          {sec.label}
                        </span>
                      </div>

                      <ul className="flex flex-col">
                        {navSectionTools(sec).map((tool) => (
                          <li key={tool.id}>
                            <Link
                              href={`/${tool.slug}`}
                              onClick={() => setOpen(false)}
                              className="group flex items-center gap-2 rounded-lg px-1.5 py-1 transition-colors hover:bg-surface-container"
                            >
                              {/* No tinted plate behind the icon — the tool
                                  colour alone carries it, matching the home
                                  cards. A tint on every row turns the menu into
                                  a grid of coloured swatches. */}
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center transition-transform group-hover:scale-110">
                                <Icon
                                  name={tool.icon}
                                  bold
                                  className="text-[15px]"
                                  style={{ color: toolColor(tool) }}
                                />
                              </span>
                              <span className="text-body-sm leading-tight text-on-surface transition-colors group-hover:text-secondary">
                                {tool.name}
                              </span>
                              {tool.status === "planned" && (
                                <span className="ml-auto shrink-0 rounded-full bg-surface-container px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-on-surface-variant/50">
                                  Soon
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between rounded-b-2xl border-t border-outline-variant/40 bg-surface-container/40 px-5 py-3">
              <span className="text-label-sm text-on-surface-variant">
                40 free tools — no sign-up required
              </span>
              <Link
                href="/#tools"
                onClick={() => setOpen(false)}
                className="flex items-center gap-1 text-label-sm font-semibold text-secondary transition-colors hover:text-secondary-container"
              >
                Browse all tools
                <Icon name="arrow_forward" className="text-[14px]" />
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

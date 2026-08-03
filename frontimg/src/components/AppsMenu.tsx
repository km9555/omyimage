"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { LANGUAGES } from "@/lib/languages";

/**
 * The 9-dots "apps" menu in the header — a light launcher for the links that
 * don't need a permanent slot in the bar. Holds Pricing + Language.
 */
export function AppsMenu() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => { setOpen(false); setLangOpen(false); };

  // Open on hover, close on leave with a short grace delay so the cursor can
  // travel the small gap from the button into the menu without dismissing it.
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cancelClose = () => { if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; } };
  const openMenu = () => { cancelClose(); setOpen(true); };
  const scheduleClose = () => { cancelClose(); closeTimer.current = setTimeout(close, 160); };
  useEffect(() => () => cancelClose(), []);

  return (
    <div className="relative" ref={ref} onMouseEnter={openMenu} onMouseLeave={scheduleClose}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="More"
        className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
          open ? "bg-surface-container text-on-surface" : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
        }`}
      >
        <Icon name="apps" className="text-[22px]" />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-56 rounded-xl border border-surface-variant bg-surface-container-lowest ambient-shadow overflow-hidden z-50"
        >
          <Link
            href="/pricing"
            role="menuitem"
            onClick={close}
            className="flex items-center gap-3 px-4 py-3 text-body-md text-on-surface hover:bg-surface-container transition-colors"
          >
            <Icon name="sell" className="text-[20px] text-on-surface-variant" />
            Pricing
          </Link>

          <div className="border-t border-surface-variant" onMouseEnter={() => setLangOpen(true)}>
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              aria-expanded={langOpen}
              className="flex w-full items-center gap-3 px-4 py-3 text-body-md text-on-surface hover:bg-surface-container transition-colors"
            >
              <Icon name="language" className="text-[20px] text-on-surface-variant" />
              <span className="flex-1 text-left">Language</span>
              <Icon
                name="expand_more"
                className={`text-[20px] text-on-surface-variant transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
              />
            </button>

            {langOpen && (
              <ul role="listbox" aria-label="Language" className="max-h-64 overflow-y-auto border-t border-surface-variant/60 py-1">
                {LANGUAGES.map((lang) => (
                  <li key={lang.code}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={lang.code === "en"}
                      disabled={!lang.available}
                      onClick={() => { if (lang.available) close(); }}
                      className={`flex w-full items-center gap-2.5 pl-11 pr-4 py-2 text-left text-body-sm transition-colors ${
                        lang.available
                          ? "text-on-surface hover:bg-surface-container"
                          : "cursor-not-allowed text-on-surface-variant/50"
                      }`}
                    >
                      <span className="text-base leading-none">{lang.flag}</span>
                      <span className="flex-1">{lang.label}</span>
                      {lang.code === "en" && <Icon name="check" className="text-[16px] text-secondary" />}
                      {!lang.available && (
                        <span className="rounded-full bg-surface-container px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-on-surface-variant/50">
                          Soon
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/Icon";
import { LANGUAGES, type Language } from "@/lib/languages";

/**
 * Language picker, ported from oMyPDF's LanguageSwitcher.
 *
 * Reads `lib/languages.ts`, the same list AppsMenu already renders in the
 * desktop header — English is the only `available: true` entry, the rest show
 * a "Soon" chip and are disabled. There is no i18n routing behind this yet, so
 * picking the live locale only closes the menu; flip `available` in
 * languages.ts as each translation lands.
 *
 * The panel opens UPWARD (`bottom-full`) because its only caller pins it to
 * the bottom of the mobile drawer.
 *
 * `fullWidth` stretches the trigger to its container — used in that footer.
 */
export function LanguageSwitcher({ fullWidth = false }: { fullWidth?: boolean } = {}) {
  const [open, setOpen] = useState(false);
  const [current] = useState<Language>(LANGUAGES[0]);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click + Escape. No hover-intent here (unlike the desktop
  // AppsMenu): this lives in a touch-first drawer, where hover does not exist
  // and a stray mouseleave would fight the tap that opened it.
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        // Swallow it so the drawer behind us stays open — Escape should close
        // the innermost layer first.
        e.stopPropagation();
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey, true);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey, true);
    };
  }, [open]);

  return (
    <div ref={ref} className={`relative ${fullWidth ? "w-full" : ""}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
        className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-label-sm font-label-sm font-semibold transition-colors ${
          fullWidth ? "w-full" : ""
        } ${
          open
            ? "border-secondary/60 bg-surface-container text-on-surface"
            : "border-outline-variant bg-surface-container-lowest text-on-surface-variant hover:border-secondary/50 hover:text-on-surface"
        }`}
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span>{current.label}</span>
        <Icon
          name="expand_more"
          className={`text-[18px] transition-transform duration-200 ${open ? "rotate-180" : ""} ${
            fullWidth ? "ml-auto" : ""
          }`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Language"
          className={`absolute bottom-full left-0 z-50 mb-2 overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest shadow-2xl ${
            fullWidth ? "w-full" : "w-56"
          }`}
        >
          <div className="border-b border-outline-variant/50 px-3 py-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant/70">
              Language
            </span>
          </div>
          <ul className="max-h-72 overflow-y-auto py-1">
            {LANGUAGES.map((lang) => {
              const active = lang.code === current.code;
              return (
                <li key={lang.code}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={active}
                    disabled={!lang.available}
                    onClick={() => {
                      if (lang.available) setOpen(false);
                    }}
                    className={`flex w-full items-center gap-2.5 px-3 py-2 text-left text-body-sm transition-colors ${
                      lang.available
                        ? "text-on-surface hover:bg-surface-container"
                        : "cursor-not-allowed text-on-surface-variant/50"
                    }`}
                  >
                    <span className="text-base leading-none">{lang.flag}</span>
                    <span className="flex-1">{lang.label}</span>
                    {active && <Icon name="check" className="text-[16px] text-secondary" />}
                    {!lang.available && (
                      <span className="rounded-full bg-surface-container px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-on-surface-variant/50">
                        Soon
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
import { Icon } from "@/components/Icon";

/**
 * Chrome for the full-screen mobile app shell that tools switch to below `md`.
 *
 * The shell itself lives in `ToolWorkspace`; these are the parts it is built
 * from, kept separate so the bespoke tools (the all-in-one editor, and any
 * canvas tool that outgrows the generic shell) can compose their own layout
 * from the same vocabulary rather than re-inventing a sheet.
 *
 * Ported from oMyPDF's `components/mobile-chrome.tsx`, which had drifted into
 * four half-diverged local copies — this is the superset of all of them, so
 * nothing here needs to be forked again.
 *
 * The z ladder these assume, from the site chrome upwards:
 *   navbar 50 · site drawer 60/61 · app shell 70 · drag ghost 90 ·
 *   lightbox 100 · sheet 120
 */

/**
 * True while a `SettingsRail` is being rendered inside a bottom sheet rather
 * than as the workspace's docked column.
 *
 * The rail is written as an `<aside>` with its own header, border and sticky
 * full-height positioning — all of which the sheet already provides. Rather
 * than ask 26 tools to pass a variant flag down, `ToolWorkspace` flips this
 * context on around the sheet and the rail adapts itself.
 */
const InMobileRail = createContext(false);

/** Wraps sheet content so any `SettingsRail` inside renders bare. */
export function MobileRailProvider({ children }: { children: ReactNode }) {
  return <InMobileRail.Provider value={true}>{children}</InMobileRail.Provider>;
}

/** See `MobileRailProvider`. False everywhere else, including on desktop. */
export function useInMobileRail(): boolean {
  return useContext(InMobileRail);
}

/**
 * Slide-up bottom sheet — where a tool's options live once the rail is gone.
 *
 * Dismissal is backdrop-tap, Escape, or the close button; the grab handle is an
 * affordance, not a drag target. That is deliberate: a real drag-to-dismiss has
 * to arbitrate with the sheet body's own scrolling, and every tool here puts
 * scrollable option lists inside.
 */
export function MobileSheet({
  title,
  onClose,
  children,
  headerAction,
  bodyClassName = "",
}: {
  title?: string;
  onClose: () => void;
  children: ReactNode;
  /** Optional control in the header, opposite the close button. */
  headerAction?: ReactNode;
  /** Extra classes for the scrolling body (e.g. to drop the default padding). */
  bodyClassName?: string;
}) {
  // Escape closes, matching MobileMenu. Cheap, and it makes the sheet usable
  // when a phone has a hardware keyboard attached.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[120] md:hidden flex flex-col justify-end"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="absolute inset-0 bg-black/40 animate-sheet-fade" onClick={onClose} />
      <div className="relative flex max-h-[85dvh] flex-col rounded-t-2xl border-t border-surface-variant bg-surface-container-lowest ambient-shadow animate-sheet-up pb-[env(safe-area-inset-bottom)]">
        <div className="relative shrink-0 pt-2.5 pb-1">
          <span className="mx-auto block h-1 w-10 rounded-full bg-outline-variant" />
          {title && (
            <h3 className="mt-2 px-14 text-center text-title-sm font-bold text-primary">{title}</h3>
          )}
          {headerAction && <div className="absolute left-2 top-1.5">{headerAction}</div>}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-2 top-1.5 grid h-9 w-9 place-items-center rounded-full text-on-surface-variant transition-colors active:bg-surface-container"
          >
            <Icon name="close" className="text-[20px]" />
          </button>
        </div>
        <div className={`overscroll-shell min-h-0 overflow-y-auto px-4 pb-4 ${bodyClassName}`}>
          {children}
        </div>
      </div>
    </div>
  );
}

/**
 * One tab in the shell's bottom nav.
 *
 * Active state is a filled icon plus brand ink, not a background plate — the
 * same signal iOS and Material tab bars use, and the reason `Icon` takes
 * `fill`.
 */
export function MobileBarButton({
  icon,
  label,
  onClick,
  active,
  disabled,
  badge,
}: {
  icon: string;
  label: string;
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
  /** Small count over the icon. Anything past 99 renders as 99+. */
  badge?: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={active}
      className={`relative flex flex-col items-center justify-center gap-0.5 py-2 transition-colors active:bg-surface-container disabled:opacity-40 ${
        active ? "text-secondary" : "text-on-surface-variant"
      }`}
    >
      <Icon name={icon} fill={active} className="text-[22px]" />
      <span className="text-[10px] font-semibold leading-none">{label}</span>
      {!!badge && (
        <span className="absolute right-[24%] top-1 grid h-4 min-w-[16px] place-items-center rounded-full bg-secondary px-1 text-[9px] font-bold text-on-secondary">
          {badge > 99 ? "99+" : badge}
        </span>
      )}
    </button>
  );
}

/**
 * The shell's primary action, rendered as the last cell of the bottom nav.
 *
 * `m-1.5` insets it from the nav's edges so it reads as a filled pill sitting
 * in the bar rather than as a fifth tab.
 */
export function MobileCta({
  icon,
  label,
  busyLabel,
  onClick,
  disabled,
  busy,
}: {
  icon: string;
  label: string;
  busyLabel?: string;
  onClick: () => void;
  disabled?: boolean;
  busy?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      // Busy implies disabled, as it does on `RailAction` — otherwise every
      // caller has to remember to pass both and one of them eventually will not.
      disabled={disabled || busy}
      className="m-1.5 flex flex-col items-center justify-center gap-0.5 rounded-xl bg-secondary px-1 text-on-secondary transition-colors disabled:opacity-50"
    >
      <Icon
        name={busy ? "progress_activity" : icon}
        fill={!busy}
        className={`text-[20px] ${busy ? "animate-spin" : ""}`}
      />
      <span className="max-w-full truncate text-[10px] font-semibold leading-none">
        {busy ? (busyLabel ?? "Working…") : label}
      </span>
    </button>
  );
}

/**
 * The shell's top bar: back, title + meta, one optional trailing action.
 *
 * Exported because the bespoke tools need the identical bar above a layout
 * `ToolWorkspace` cannot express.
 */
export function MobileTopBar({
  title,
  meta,
  onBack,
  backLabel = "Back",
  action,
}: {
  title: string;
  meta?: ReactNode;
  onBack: () => void;
  backLabel?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex shrink-0 items-center gap-1 border-b border-surface-variant px-2 py-1.5">
      <button
        type="button"
        onClick={onBack}
        aria-label={backLabel}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-on-surface-variant transition-colors active:bg-surface-container"
      >
        <Icon name="arrow_back" />
      </button>
      <div className="min-w-0 flex-1">
        <p className="truncate text-label-sm font-label-sm text-on-surface">{title}</p>
        {meta && (
          <p className="flex items-center gap-1.5 text-[11px] text-on-surface-variant">{meta}</p>
        )}
      </div>
      {action}
    </div>
  );
}

/** Icon-only top-bar action, sized to match the back button. */
export function TopBarAction({
  icon,
  label,
  onClick,
  disabled,
}: {
  icon: string;
  label: string;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-on-surface-variant transition-colors active:bg-surface-container disabled:opacity-30"
    >
      <Icon name={icon} />
    </button>
  );
}

/**
 * Full-width tappable row used inside the sheets.
 *
 * `h-12` is a floor, not a style choice — 48px is the smallest reliable touch
 * target, and these rows stand in for controls that were mouse-sized on the
 * rail.
 */
export function SheetAction({
  icon,
  label,
  onClick,
  disabled,
  danger,
  active,
  className = "",
}: {
  icon: string;
  label: string;
  onClick: () => void;
  disabled?: boolean;
  danger?: boolean;
  active?: boolean;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={active}
      className={`flex h-12 w-full items-center justify-center gap-2 rounded-xl border px-3 text-body-md font-semibold transition-colors disabled:opacity-40 ${
        danger
          ? "border-error/40 bg-error-container/20 text-error active:bg-error-container/40"
          : active
            ? "border-secondary bg-secondary/5 text-secondary"
            : "border-surface-variant bg-surface-container-low text-primary active:bg-surface-container"
      } ${className}`}
    >
      <Icon name={icon} fill={active} className="shrink-0 text-[20px]" />
      <span className="truncate">{label}</span>
    </button>
  );
}

/** Compact icon button — the step controls inside sheets. */
export function MoveBtn({
  icon,
  label,
  onClick,
  disabled,
}: {
  icon: string;
  label: string;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-on-surface-variant transition-colors active:bg-surface-container disabled:opacity-30"
    >
      <Icon name={icon} className="text-[20px]" />
    </button>
  );
}

/**
 * Always-visible scroll thumbs for a zoomable preview pane.
 *
 * iOS Safari ignores `::-webkit-scrollbar` and only ever shows transient
 * overlay scrollbars, so a zoomed-in image gives no hint that it can be panned.
 * These are drawn by us, so they show on every platform. Purely an indicator —
 * panning is still the container's own native scrolling.
 *
 * Render inside a `relative` wrapper that shares the scroll container's box.
 */
export function ScrollIndicators({ targetRef }: { targetRef: RefObject<HTMLElement | null> }) {
  const [bar, setBar] = useState({ showX: false, showY: false, x: 0, y: 0, w: 0, h: 0 });

  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;
    const update = () => {
      const {
        scrollWidth: sw,
        clientWidth: cw,
        scrollHeight: sh,
        clientHeight: ch,
        scrollLeft,
        scrollTop,
      } = el;
      const showX = sw > cw + 1;
      const showY = sh > ch + 1;
      const w = showX ? Math.max(28, (cw / sw) * cw) : 0;
      const h = showY ? Math.max(28, (ch / sh) * ch) : 0;
      setBar({
        showX,
        showY,
        w,
        h,
        x: showX ? (scrollLeft / (sw - cw)) * (cw - w) : 0,
        y: showY ? (scrollTop / (sh - ch)) * (ch - h) : 0,
      });
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    // The canvas is swapped out on zoom / image change, which resizes the
    // content without either a scroll or a resize of the container itself.
    const mo = new MutationObserver(update);
    mo.observe(el, { childList: true, subtree: true, attributes: true });
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
      mo.disconnect();
    };
  }, [targetRef]);

  if (!bar.showX && !bar.showY) return null;
  return (
    <div className="pointer-events-none absolute inset-0 z-[56]" aria-hidden="true">
      {bar.showY && (
        <span
          className="absolute right-0.5 w-1.5 rounded-full bg-on-surface/40"
          style={{ top: bar.y, height: bar.h }}
        />
      )}
      {bar.showX && (
        <span
          className="absolute bottom-0.5 h-1.5 rounded-full bg-on-surface/40"
          style={{ left: bar.x, width: bar.w }}
        />
      )}
    </div>
  );
}

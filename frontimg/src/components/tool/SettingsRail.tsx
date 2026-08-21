"use client";

import type { CSSProperties, ReactNode } from "react";
import { Icon } from "@/components/Icon";
import { useInMobileRail } from "@/components/tool/mobile-chrome";

/**
 * The docked options column of a tool workspace.
 *
 * Renders the <aside> itself so `ToolWorkspace` stays a pure grid: header row
 * (tinted icon + title) → options body → footer holding the hint line and the
 * primary action. On `lg` and up it is a full-height sticky column pinned
 * below the 64px navbar, with only the options body scrolling, so the CTA is
 * always reachable no matter how long the file list gets. Below `lg` it
 * unsticks and stacks under the files, as before.
 *
 * Inside the mobile app shell it is rendered in a bottom sheet instead, and
 * every piece of that chrome would be duplicated: the sheet already draws a
 * panel, a heading and its own scroller. So in that context the rail strips
 * itself back to the controls — see `useInMobileRail`.
 */
export function SettingsRail({
  title,
  icon = "tune",
  accent,
  footer,
  className = "",
  children,
}: {
  title: string;
  /** Material Symbols name for the header chip. */
  icon?: string;
  /** Tool accent, used for the header icon. Falls back to the brand accent. */
  accent?: string;
  /** Hint line + primary button. Pinned to the bottom of the rail. */
  footer?: ReactNode;
  /**
   * Extra classes for the <aside>. `ToolWorkspace` sizes the rail through its
   * grid track, but the image editor is a flex row rather than that grid, so it
   * passes its own width here.
   */
  className?: string;
  /** The tool's option controls. */
  children: ReactNode;
}) {
  const iconStyle: CSSProperties | undefined = accent ? { color: accent } : undefined;
  const bare = useInMobileRail();

  // In a sheet: no <aside>, no header, no sticky column, and no border — just
  // the controls and whatever secondary actions the footer carries. The gap
  // matches the docked rail's so the controls keep their rhythm.
  if (bare) {
    return (
      <div className="flex flex-col gap-5 pb-1">
        {children}
        {footer && <div className="flex flex-col gap-3">{footer}</div>}
      </div>
    );
  }

  return (
    <aside className={`flex flex-col border-t border-outline-variant bg-surface-container-lowest lg:sticky lg:top-16 lg:h-[calc(100dvh-4rem)] lg:border-t-0 lg:border-l ${className}`}>
      <div className="flex items-center gap-2.5 border-b border-outline-variant/60 px-5 py-4">
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary/12"
          style={accent ? { backgroundColor: `${accent}1F` } : undefined}
        >
          <Icon name={icon} fill className="text-[18px] text-secondary" style={iconStyle} />
        </span>
        <h2 className="text-headline-md font-bold text-primary">{title}</h2>
      </div>

      <div className="flex flex-col gap-5 px-5 py-5 lg:min-h-0 lg:flex-1 lg:overflow-y-auto">
        {children}
      </div>

      {footer && (
        <div className="flex flex-col gap-3 border-t border-outline-variant/60 px-5 py-4">
          {footer}
        </div>
      )}
    </aside>
  );
}

/**
 * Full-width primary action for a rail footer.
 *
 * Renders nothing inside the mobile sheet: the shell promotes this same action
 * to the bottom nav's CTA cell, where it stays visible while the visitor scrolls
 * the options. Showing both would be two buttons doing one job, and the one in
 * the sheet would be the one they had to hunt for.
 */
export function RailAction({
  onClick,
  disabled,
  busy,
  busyLabel,
  icon,
  children,
}: {
  onClick: () => void;
  disabled?: boolean;
  busy?: boolean;
  busyLabel?: string;
  icon: string;
  children: ReactNode;
}) {
  const bare = useInMobileRail();
  if (bare) return null;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || busy}
      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-secondary py-3.5 font-semibold text-on-secondary transition-colors hover:bg-secondary-container disabled:opacity-50"
    >
      {busy ? (
        <>
          <Icon name="progress_activity" className="animate-spin text-[20px]" /> {busyLabel}
        </>
      ) : (
        <>
          <Icon name={icon} fill className="text-[20px]" /> {children}
        </>
      )}
    </button>
  );
}

/** Secondary, outlined action for a rail footer (e.g. "Download all (ZIP)"). */
export function RailSecondaryAction({
  onClick,
  icon,
  children,
}: {
  onClick: () => void;
  icon: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-secondary py-2.5 font-semibold text-secondary transition-colors hover:bg-secondary/10"
    >
      <Icon name={icon} className="text-[20px]" /> {children}
    </button>
  );
}

/** The muted note that sits above the rail's action buttons. */
export function RailNote({ children }: { children: ReactNode }) {
  return (
    <p className="text-center text-label-sm font-label-sm text-on-surface-variant">{children}</p>
  );
}

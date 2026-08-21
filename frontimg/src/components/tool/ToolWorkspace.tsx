"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AdSlot } from "@/components/tool/AdSlot";
import { formatBytes } from "@/lib/image/raster";
import { useIsMobile, useOverlayScrollLock } from "@/lib/use-is-mobile";
import {
  MobileBarButton,
  MobileCta,
  MobileRailProvider,
  MobileSheet,
  MobileTopBar,
  TopBarAction,
} from "@/components/tool/mobile-chrome";

/** A tab in the shell's bottom nav, left of the built-in Settings tab. */
export interface ToolMobileTab {
  id: string;
  icon: string;
  label: string;
  active?: boolean;
  disabled?: boolean;
  badge?: number;
  /** Sheet contents. Omit and pass `onClick` instead for a mode-toggle tab. */
  sheet?: ReactNode;
  /** Sheet heading. Defaults to `label`. */
  sheetTitle?: string;
  /** Fires instead of opening a sheet. Used for modes (select, delete, …). */
  onClick?: () => void;
}

/**
 * What a tool must supply to get the mobile app shell.
 *
 * Everything here is about the *chrome*: the shell reuses the tool's existing
 * `main` and `rail` verbatim, so opting in costs a prop, not a second UI.
 */
export interface ToolMobileShell {
  /** Top bar heading. Usually the file name. */
  title: string;
  /** Second line — count, size, processing badge. */
  meta?: ReactNode;
  /** Leaves the workspace. Usually the tool's `reset`. */
  onBack: () => void;
  backLabel?: string;
  /** One trailing icon button in the top bar (undo, restore, …). */
  topAction?: { icon: string; label: string; onClick: () => void; disabled?: boolean };
  /** Full-width status strip under the top bar. Colour-code it by mode. */
  strip?: ReactNode;
  /**
   * Replaces `main` inside the shell.
   *
   * The canvas tools want the image to own the screen, with the file list moved
   * to its own tab — otherwise the tray sits under a `touch-action: none`
   * canvas that swallows the swipe you would scroll to it with. Tools whose
   * mobile body is just their desktop middle column leave this unset.
   */
  body?: ReactNode;
  /** Up to three, or the nav cells get too narrow to label. */
  tabs?: ToolMobileTab[];
  /** Bottom-nav label for the rail's sheet. */
  settingsLabel?: string;
  /** Heading of the rail's sheet. Defaults to `settingsLabel`. */
  settingsTitle?: string;
  settingsIcon?: string;
  /** The primary action, rendered as the last nav cell. */
  cta: {
    icon: string;
    label: string;
    busyLabel?: string;
    onClick: () => void;
    disabled?: boolean;
    busy?: boolean;
  };
  /** Replaces the entire bottom nav — for contextual modes (multi-select, …). */
  bottomBar?: ReactNode;
}

/**
 * The standard top-bar heading for a tool that holds a list of files.
 *
 * Every batch tool wants the same two lines — the file name when there is one
 * file and a count when there are several, over "N files · total size" — so
 * they spread this rather than each writing its own. Spread it and override
 * whatever needs to differ:
 *
 *   mobile={{ ...filesHeader(items.map((i) => i.file)), onBack: reset, cta: {…} }}
 */
export function filesHeader(files: File[]): { title: string; meta: ReactNode } {
  const total = files.reduce((sum, f) => sum + f.size, 0);
  return {
    title: files.length === 1 ? files[0].name : `${files.length} images`,
    meta: (
      <span className="shrink-0">
        {files.length} file{files.length === 1 ? "" : "s"} · {formatBytes(total)}
      </span>
    ),
  };
}

/** Tailwind needs the class to exist literally, so map instead of interpolating. */
const NAV_COLS: Record<number, string> = {
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
};

const SETTINGS_TAB = "__settings";

/**
 * The workspace every tool switches to once it holds a file.
 *
 * Replaces the `grid grid-cols-1 lg:grid-cols-[1fr_340px]` + hidden
 * `data-tool-active` marker that used to be copy-pasted into ~24 tool
 * components. It also owns that marker, which is what flips the page shell
 * full-bleed (see the `body:has([data-tool-active])` block in globals.css).
 *
 * Three columns from `2xl` up — reserved ad slot, files, settings rail — and
 * two below that, where the ad slot takes itself out of the layout entirely
 * (`display: none` means it is not a grid item, so the remaining tracks line
 * up without a separate rule). Below `lg` it all stacks.
 *
 * The gate is the stock `2xl` rather than an arbitrary `min-[…]`: Tailwind
 * sorts a custom min-width variant ahead of `xl`, so the two-column rule won
 * and the ad slot landed in the `1fr` track — the file column ended up 420px
 * wide with the rail pushed off-screen.
 *
 * The ad track is `(100% - var(--container-content)) / 2`: the same margin the
 * footer and SEO copy get from `max-w-content mx-auto`, so the file column
 * starts on the footer's left edge. Percentages in `grid-template-columns`
 * resolve against the grid container, which is the full-bleed workspace — that
 * is why this is not `100vw`, which would include the scrollbar.
 *
 * The horizontal padding lives HERE rather than on the page shell: the rail
 * has to reach the right edge of the viewport, so the shell's `px-gutter` is
 * zeroed while a tool is active and the columns re-apply it themselves.
 *
 * ── Mobile ──────────────────────────────────────────────────────────────────
 * Below `md`, a tool that passes `mobile` swaps this grid for a full-screen app
 * shell: top bar, one scrolling body, a bottom tab bar, and the rail moved into
 * a sheet. Stacking the grid on a phone put the primary action below a file
 * list of unbounded length, which is the problem the shell exists to fix.
 *
 * `mobile` is opt-in per tool on purpose. A tool that does not pass it renders
 * exactly as it did before this prop existed, which is what lets the shell roll
 * out one page at a time.
 */
export function ToolWorkspace({
  main,
  rail,
  mobile,
}: {
  /** Middle column — the file tray, canvas or preview. */
  main: ReactNode;
  /** Right column. Expected to be a <SettingsRail>, which renders the <aside>. */
  rail: ReactNode;
  /** Opts this tool into the mobile app shell. See `ToolMobileShell`. */
  mobile?: ToolMobileShell;
}) {
  const isMobile = useIsMobile();
  const [openTab, setOpenTab] = useState<string | null>(null);

  const shell = mobile && isMobile ? mobile : null;

  // The shell covers the document, so stop what is behind it from scrolling.
  useOverlayScrollLock(!!shell);

  // Crossing back to desktop must not leave a sheet flag set — it would reopen
  // the moment the viewport narrowed again.
  useEffect(() => {
    if (!shell) setOpenTab(null);
  }, [shell]);

  // The marker is what collapses the page's marketing chrome (globals.css), and
  // it has to be present in both layouts.
  const marker = <span data-tool-active hidden aria-hidden="true" />;

  if (!shell) {
    return (
      <section className="grid grid-cols-1 items-start lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] 2xl:grid-cols-[calc((100%-var(--container-content))/2)_1fr_420px]">
        {marker}
        <AdSlot />
        <div className="flex min-w-0 flex-col gap-4 px-margin-mobile pt-stack-md pb-stack-lg md:px-gutter">
          {main}
        </div>
        {rail}
      </section>
    );
  }

  const tabs = shell.tabs ?? [];
  const settingsLabel = shell.settingsLabel ?? "Settings";
  // Derived, never stored: a tab that disappears (a mode that ended, a file that
  // was removed) closes its own sheet instead of stranding it open and empty.
  const openSheetTab = openTab === SETTINGS_TAB ? null : tabs.find((t) => t.id === openTab);
  const settingsOpen = openTab === SETTINGS_TAB;

  return (
    <section className="fixed inset-0 z-[70] flex h-dvh flex-col overflow-hidden bg-surface-container-lowest">
      {marker}

      <MobileTopBar
        title={shell.title}
        meta={shell.meta}
        onBack={shell.onBack}
        backLabel={shell.backLabel}
        action={shell.topAction && <TopBarAction {...shell.topAction} />}
      />

      {shell.strip}

      {/* The only scroller in the shell. Everything else is `shrink-0`, which is
          what keeps the bottom nav on screen while this pane grows. */}
      <div className="overscroll-shell flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto bg-surface-container-low p-3">
        {shell.body ?? main}
      </div>

      {shell.bottomBar ?? (
        <nav
          className={`grid shrink-0 items-stretch border-t border-surface-variant bg-surface-container-lowest pb-[env(safe-area-inset-bottom)] ${
            NAV_COLS[Math.min(tabs.length + 2, 5)]
          }`}
        >
          {tabs.map((tab) => (
            <MobileBarButton
              key={tab.id}
              icon={tab.icon}
              label={tab.label}
              active={tab.active ?? openTab === tab.id}
              disabled={tab.disabled}
              badge={tab.badge}
              onClick={() => {
                if (tab.onClick) tab.onClick();
                else setOpenTab((cur) => (cur === tab.id ? null : tab.id));
              }}
            />
          ))}
          <MobileBarButton
            icon={shell.settingsIcon ?? "tune"}
            label={settingsLabel}
            active={settingsOpen}
            onClick={() => setOpenTab((cur) => (cur === SETTINGS_TAB ? null : SETTINGS_TAB))}
          />
          <MobileCta {...shell.cta} />
        </nav>
      )}

      {settingsOpen && (
        <MobileSheet
          title={shell.settingsTitle ?? settingsLabel}
          onClose={() => setOpenTab(null)}
        >
          {/* Tells the rail to drop its <aside> chrome and its primary action —
              that action is the CTA in the nav above. */}
          <MobileRailProvider>{rail}</MobileRailProvider>
        </MobileSheet>
      )}

      {openSheetTab?.sheet && (
        <MobileSheet
          title={openSheetTab.sheetTitle ?? openSheetTab.label}
          onClose={() => setOpenTab(null)}
        >
          {openSheetTab.sheet}
        </MobileSheet>
      )}
    </section>
  );
}

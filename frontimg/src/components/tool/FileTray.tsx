"use client";

import { useRef, type ReactNode } from "react";
import { Icon } from "@/components/Icon";
import { useViewMode, type ViewMode } from "@/lib/view-mode";
import { CloudImportBar } from "@/components/CloudImportBar";

/**
 * One row/card in the tray. Tools map their own item shape onto this, which
 * keeps the per-tool detail (compress's −%, resize's W × H, convert's format
 * chip) intact while the card and row chrome is written once.
 */
export interface TrayEntry {
  id: string;
  name: string;
  /** Object URL for the thumbnail. Omit when there is nothing to preview. */
  url?: string;
  /** Material Symbols name used when `url` is absent. */
  icon?: string;
  /** Position chip for the ordered tools (merge, image-to-pdf, gif-maker). */
  badge?: ReactNode;
  /** The line under the filename — size, dimensions, result badges. */
  meta: ReactNode;
  /** Trailing control: download once processed, remove before that. */
  action?: ReactNode;
  /**
   * Per-file controls rendered under the name in both views (image-to-pdf's
   * per-image orientation). Optional, so every other tool renders unchanged.
   */
  controls?: ReactNode;
}

/**
 * The file area of a tool workspace: a header bar (count, view toggle, add,
 * clear) over the files themselves, in either grid or list form.
 *
 * The grid/list choice is a per-visitor preference shared by every tool, so it
 * lives in `useViewMode` rather than in each caller's state. Nothing here is
 * capped in height — the old `max-h-[24vh] overflow-y-auto` nested scroller is
 * gone, the page scrolls instead and the rail stays pinned.
 */
export function FileTray({
  entries,
  title,
  showViewToggle = true,
  accept,
  onFiles,
  onClear,
  onMove,
  busy = false,
}: {
  entries: TrayEntry[];
  /** Defaults to `Selected files (N)`. */
  title?: string;
  /** False for single-image tools, where there is nothing to switch between. */
  showViewToggle?: boolean;
  /**
   * Pass both to get the round "add more" button. The tray owns the hidden
   * <input> so each tool doesn't have to grow a second one just for this —
   * `onFiles` is the tool's existing loader, so its own validation still runs.
   */
  accept?: string;
  onFiles?: (files: FileList | File[]) => void;
  onClear?: () => void;
  /** Supplied by the ordered tools (merge, image-to-pdf, gif-maker). */
  onMove?: (index: number, dir: -1 | 1) => void;
  busy?: boolean;
}) {
  const [view, setView] = useViewMode();
  const inputRef = useRef<HTMLInputElement>(null);
  const heading = title ?? `Selected files (${entries.length})`;
  // Single-image tools force the compact row: there is only ever one file, and
  // a card grid of one is just a large thumbnail with a toggle that does
  // nothing. Everywhere else the toggle shows from the first file onwards.
  const grid = showViewToggle && view === "grid";

  return (
    <>
      {onFiles && (
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple
          className="hidden"
          onChange={(e) => {
            if (e.target.files?.length) onFiles(e.target.files);
            e.target.value = "";
          }}
        />
      )}

      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-headline-md font-bold text-primary">{heading}</h2>

        <div className="flex items-center gap-2">
          {showViewToggle && <ViewToggle value={view} onChange={setView} />}
          {onClear && (
            <button
              type="button"
              onClick={onClear}
              disabled={busy}
              className="inline-flex items-center gap-1.5 text-label-md font-medium text-on-surface-variant transition-colors hover:text-error disabled:opacity-40"
            >
              <Icon name="delete_sweep" className="text-[18px]" /> Clear
            </button>
          )}
          {onFiles && (
            <>
              {/* Renders nothing unless Google Drive is configured. */}
              <CloudImportBar onFiles={onFiles} variant="icon" />
              <button
                type="button"
                onClick={() => inputRef.current?.click()}
                disabled={busy}
                aria-label="Add more files"
                title="Add more files"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-on-secondary shadow-md shadow-secondary/30 transition-all hover:bg-secondary-container hover:shadow-lg hover:shadow-secondary/40 disabled:opacity-50"
              >
                <Icon name="add" className="text-[22px]" />
              </button>
            </>
          )}
        </div>
      </div>

      {grid ? (
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
          {entries.map((e, i) => (
            <li
              key={e.id}
              className="flex flex-col overflow-hidden rounded-xl border border-surface-variant bg-surface-container-lowest ambient-shadow"
            >
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-surface-container p-3">
                <Thumb entry={e} className="max-h-full max-w-full object-contain" />
                {e.badge && <div className="absolute left-2 top-2">{e.badge}</div>}
                {e.action && <div className="absolute right-2 top-2">{e.action}</div>}
                {onMove && (
                  <div className="absolute bottom-2 left-2 flex rounded-lg bg-surface-container-lowest/85 backdrop-blur-sm">
                    <MoveButton dir={-1} index={i} count={entries.length} onMove={onMove} busy={busy} grid />
                    <MoveButton dir={1} index={i} count={entries.length} onMove={onMove} busy={busy} grid />
                  </div>
                )}
              </div>
              <div className="flex min-w-0 flex-col gap-0.5 border-t border-surface-variant px-3 py-3">
                <p className="truncate text-body-md font-semibold text-primary" title={e.name}>
                  {e.name}
                </p>
                <p className="truncate text-label-sm font-label-sm text-on-surface-variant">{e.meta}</p>
                {e.controls && <div className="mt-1.5">{e.controls}</div>}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="flex flex-col gap-2">
          {entries.map((e, i) => (
            <li
              key={e.id}
              className="flex items-center gap-3 rounded-xl border border-surface-variant bg-surface-container-lowest ambient-shadow p-3"
            >
              {e.badge}
              <Thumb
                entry={e}
                className="h-12 w-12 shrink-0 rounded-lg bg-surface-container object-cover"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-body-md font-semibold text-primary">{e.name}</p>
                <p className="text-label-sm font-label-sm text-on-surface-variant">{e.meta}</p>
                {e.controls && <div className="mt-1.5">{e.controls}</div>}
              </div>
              {onMove && (
                <div className="flex shrink-0">
                  <MoveButton dir={-1} index={i} count={entries.length} onMove={onMove} busy={busy} />
                  <MoveButton dir={1} index={i} count={entries.length} onMove={onMove} busy={busy} />
                </div>
              )}
              {e.action}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

/**
 * The trailing control on a tray entry — download once a file is processed,
 * remove before that. Shared so the button reads the same in both views: in
 * the grid it sits on top of the thumbnail, hence the translucent backdrop.
 */
export function TrayAction({
  icon,
  label,
  onClick,
  disabled = false,
  tone = "neutral",
}: {
  icon: string;
  label: string;
  onClick: () => void;
  disabled?: boolean;
  tone?: "neutral" | "accent";
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
      className={`flex h-9 w-9 items-center justify-center rounded-lg bg-surface-container-lowest/85 backdrop-blur-sm transition-colors disabled:opacity-40 ${
        tone === "accent"
          ? "text-secondary hover:bg-secondary/10"
          : "text-on-surface-variant hover:bg-error-container hover:text-error"
      }`}
    >
      <Icon name={icon} className="text-[20px]" />
    </button>
  );
}

/** Spinner standing in for the trailing control while an entry is processing. */
export function TrayBusy() {
  return (
    <span className="flex h-9 w-9 items-center justify-center text-secondary">
      <Icon name="progress_activity" className="animate-spin text-[20px]" />
    </span>
  );
}

function Thumb({ entry, className }: { entry: TrayEntry; className: string }) {
  if (entry.url) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={entry.url} alt="" className={className} />;
  }
  return (
    <span className={`flex items-center justify-center bg-surface-container ${className}`}>
      <Icon name={entry.icon ?? "image"} className="text-[28px] text-on-surface-variant" />
    </span>
  );
}

function MoveButton({
  dir,
  index,
  count,
  onMove,
  busy,
  grid = false,
}: {
  dir: -1 | 1;
  index: number;
  count: number;
  onMove: (index: number, dir: -1 | 1) => void;
  busy: boolean;
  /** The grid flows left-to-right, so the arrows have to point that way too. */
  grid?: boolean;
}) {
  const back = dir === -1;
  return (
    <button
      type="button"
      onClick={() => onMove(index, dir)}
      disabled={busy || (back ? index === 0 : index === count - 1)}
      aria-label={back ? "Move earlier" : "Move later"}
      className="flex h-8 w-8 items-center justify-center rounded text-on-surface-variant transition-colors hover:bg-surface-container disabled:opacity-30"
    >
      <Icon
        name={grid ? (back ? "arrow_back" : "arrow_forward") : back ? "arrow_upward" : "arrow_downward"}
        className="text-[18px]"
      />
    </button>
  );
}

/** Segmented grid/list control. */
function ViewToggle({ value, onChange }: { value: ViewMode; onChange: (v: ViewMode) => void }) {
  return (
    <div
      role="group"
      aria-label="File view"
      className="flex rounded-lg border border-surface-variant bg-surface-container p-1"
    >
      {(
        [
          { mode: "grid", icon: "grid_view", label: "Grid view" },
          { mode: "list", icon: "view_list", label: "List view" },
        ] as const
      ).map((o) => (
        <button
          key={o.mode}
          type="button"
          onClick={() => onChange(o.mode)}
          aria-label={o.label}
          title={o.label}
          aria-pressed={value === o.mode}
          className={`flex h-8 w-9 items-center justify-center rounded-md transition-colors ${
            value === o.mode
              ? "bg-surface-container-lowest text-primary shadow-sm"
              : "text-on-surface-variant hover:text-primary"
          }`}
        >
          <Icon name={o.icon} fill={value === o.mode} className="text-[20px]" />
        </button>
      ))}
    </div>
  );
}

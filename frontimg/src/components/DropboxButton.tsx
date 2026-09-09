"use client";

/**
 * DropboxButton — the second cloud source, alongside GoogleDriveButton.
 *
 * Ported from oMyPDF's component of the same name, minus its i18n. It holds to
 * the Props contract CloudImportBar documents, so the three variants line up
 * pixel-for-pixel with the Drive button sitting next to them.
 */

import { useState } from "react";
import { toast } from "sonner";
import { openDropboxPicker, preloadDropbox, IMAGE_EXTENSIONS } from "@/lib/dropbox";

function DropboxIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 43 40" className={className} aria-hidden="true" fill="none">
      <path d="M12.5 0L0 8.25l8.5 6.82L21 7.5z" fill="#0061FF" />
      <path d="M21 7.5l12.5 7.57L42 8.25 29.5 0z" fill="#0061FF" />
      <path d="M0 21.93l12.5 8.07L21 22.5l-12.5-7.43z" fill="#0061FF" />
      <path d="M21 22.5l8.5 7.5L42 21.93 33.5 15.07z" fill="#0061FF" />
      <path d="M12.5 31.5L21 40l8.5-8.5L21 24z" fill="#0061FF" />
    </svg>
  );
}

/* Duplicated from CloudImportBar rather than imported: that file imports this
   one, so sharing it either way round would close an import cycle. */
function Spinner() {
  return <span className="w-3.5 h-3.5 border-[1.5px] border-current border-t-transparent rounded-full animate-spin shrink-0" />;
}

interface ButtonProps {
  onFiles: (files: File[]) => void;
  /** Extensions the calling tool accepts, so the Chooser only offers usable files. */
  extensions?: string[];
  variant?: "chip" | "ghost" | "icon";
  label?: string;
}

export function DropboxButton({
  onFiles,
  extensions = IMAGE_EXTENSIONS,
  variant = "chip",
  label = "Dropbox",
}: ButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const files = await openDropboxPicker(extensions);
      if (files.length > 0) {
        onFiles(files);
        toast.success(`Imported ${files.length} file${files.length > 1 ? "s" : ""} from Dropbox.`);
      }
    } catch (err) {
      // A closed popup is a deliberate cancel, not a failure worth shouting about.
      if (err instanceof Error && err.message === "cancelled") return;
      toast.error(err instanceof Error ? err.message : "Dropbox import failed.");
    } finally {
      setLoading(false);
    }
  };

  /* The Chooser opens a popup, which browsers only permit from a user gesture.
     Fetching the SDK here — before the click, not during it — keeps the call
     to choose() from landing after an await that a popup blocker would reject. */
  const warm = { onPointerEnter: preloadDropbox, onFocus: preloadDropbox };

  if (variant === "ghost") {
    return (
      <button
        type="button"
        onClick={handleClick}
        {...warm}
        disabled={loading}
        className="inline-flex items-center gap-1.5 text-label-sm font-label-sm text-on-surface-variant hover:text-primary transition-colors disabled:opacity-50"
      >
        {loading ? <Spinner /> : <DropboxIcon className="h-3.5 w-3.5 shrink-0" />}
        {loading ? "Connecting…" : `Add from ${label}`}
      </button>
    );
  }

  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={handleClick}
        {...warm}
        disabled={loading}
        aria-label={`Import from ${label}`}
        title={label}
        className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-outline-variant bg-surface-container-lowest hover:bg-surface-container transition-all disabled:opacity-50"
      >
        {loading ? <Spinner /> : <DropboxIcon className="h-4 w-4 shrink-0" />}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      {...warm}
      disabled={loading}
      aria-label={label}
      title={label}
      className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full border border-outline-variant bg-surface-container-lowest hover:bg-surface-container text-label-sm font-label-sm text-on-surface-variant hover:text-on-surface transition-all disabled:opacity-50"
    >
      {loading ? <Spinner /> : <DropboxIcon className="h-3.5 w-3.5 shrink-0" />}
      {/* Label hidden on mobile — the icon alone is recognisable and keeps the row compact. */}
      <span className="hidden sm:inline">{loading ? "Connecting…" : label}</span>
    </button>
  );
}

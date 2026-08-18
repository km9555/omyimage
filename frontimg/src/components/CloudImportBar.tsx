"use client";

/**
 * CloudImportBar — cloud-source import options, rendered below a drop zone.
 *
 * Ported from oMyPDF. Only Google Drive is wired up here; the structure is kept
 * so another provider is a drop-in:
 *   1. add lib/<source>.ts with the picker logic
 *   2. add a <Source>Button.tsx with the same Props contract as GoogleDriveButton
 *   3. drop it into the slots below — every tool picks it up automatically
 *
 * Renders NOTHING when Drive is not configured, so a build without credentials
 * simply has no cloud import rather than a button that throws on click.
 */

import { useState } from "react";
import { toast } from "sonner";
import { driveConfigured, openGoogleDrivePicker, IMAGE_MIME_TYPES } from "@/lib/google-drive";

function DriveIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 87.3 78" className={className} aria-hidden="true" fill="none">
      <path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3L27.5 53H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066DA" />
      <path d="M43.65 25L29.9 1.2C28.55 2 27.4 3.1 26.6 4.5L1.2 48.5C.4 49.9 0 51.45 0 53h27.5z" fill="#00AC47" />
      <path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.85 10.5z" fill="#EA4335" />
      <path d="M43.65 25L57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z" fill="#00832D" />
      <path d="M59.8 53H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.4 4.5-1.2z" fill="#2684FC" />
      <path d="M73.4 26.5l-12.7-22C59.9 3.1 58.75 2 57.4 1.2L43.65 25 59.8 53h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#FFBA00" />
    </svg>
  );
}

function Spinner() {
  return <span className="w-3.5 h-3.5 border-[1.5px] border-current border-t-transparent rounded-full animate-spin shrink-0" />;
}

interface ButtonProps {
  onFiles: (files: File[]) => void;
  /** Mime types the calling tool accepts, so the picker only offers usable files. */
  mimeTypes?: string;
  variant?: "chip" | "ghost" | "icon";
  label?: string;
}

export function GoogleDriveButton({
  onFiles,
  mimeTypes = IMAGE_MIME_TYPES,
  variant = "chip",
  label = "Google Drive",
}: ButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const files = await openGoogleDrivePicker(mimeTypes);
      if (files.length > 0) {
        onFiles(files);
        toast.success(`Imported ${files.length} file${files.length > 1 ? "s" : ""} from Google Drive.`);
      }
    } catch (err) {
      // A closed popup is a deliberate cancel, not a failure worth shouting about.
      if (err instanceof Error && err.message === "cancelled") return;
      toast.error(err instanceof Error ? err.message : "Google Drive import failed.");
    } finally {
      setLoading(false);
    }
  };

  if (variant === "ghost") {
    return (
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        className="inline-flex items-center gap-1.5 text-label-sm font-label-sm text-on-surface-variant hover:text-primary transition-colors disabled:opacity-50"
      >
        {loading ? <Spinner /> : <DriveIcon className="h-3.5 w-3.5 shrink-0" />}
        {loading ? "Connecting…" : `Add from ${label}`}
      </button>
    );
  }

  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        aria-label={`Import from ${label}`}
        title={label}
        className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-outline-variant bg-surface-container-lowest hover:bg-surface-container transition-all disabled:opacity-50"
      >
        {loading ? <Spinner /> : <DriveIcon className="h-4 w-4 shrink-0" />}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={loading}
      aria-label={label}
      title={label}
      className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full border border-outline-variant bg-surface-container-lowest hover:bg-surface-container text-label-sm font-label-sm text-on-surface-variant hover:text-on-surface transition-all disabled:opacity-50"
    >
      {loading ? <Spinner /> : <DriveIcon className="h-3.5 w-3.5 shrink-0" />}
      {/* Label hidden on mobile — the icon alone is recognisable and keeps the row compact. */}
      <span className="hidden sm:inline">{loading ? "Connecting…" : label}</span>
    </button>
  );
}

export function CloudImportBar({
  onFiles,
  mimeTypes,
  variant = "chip",
}: {
  onFiles: (files: File[]) => void;
  mimeTypes?: string;
  variant?: "chip" | "ghost" | "icon";
}) {
  if (!driveConfigured) return null;

  if (variant === "icon") {
    return (
      <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
        <GoogleDriveButton onFiles={onFiles} mimeTypes={mimeTypes} variant="icon" />
      </div>
    );
  }

  if (variant === "ghost") {
    return (
      <div className="flex items-center justify-center gap-4" onClick={(e) => e.stopPropagation()}>
        <GoogleDriveButton onFiles={onFiles} mimeTypes={mimeTypes} variant="ghost" />
      </div>
    );
  }

  return (
    /*
     * stopPropagation: the drop zone wrapping this has its own onClick that
     * opens the native file dialog. Without it, clicking the Drive chip would
     * also pop the OS picker.
     */
    <div className="flex flex-col items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
      <p className="text-label-sm font-label-sm text-on-surface-variant/60">or import from</p>
      <div className="flex items-center gap-2 flex-wrap justify-center">
        <GoogleDriveButton onFiles={onFiles} mimeTypes={mimeTypes} variant="chip" />
      </div>
    </div>
  );
}

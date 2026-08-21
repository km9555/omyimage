"use client";

import { useRef, useState } from "react";
import { Icon } from "@/components/Icon";
import { CloudImportBar } from "@/components/CloudImportBar";

/**
 * Shared empty-state drop zone for image tools. Click to pick or drag & drop.
 *
 * This is the first screen of every tool, so it carries the mobile treatment
 * the tools themselves get from `ToolWorkspace`: it fills a usable share of the
 * viewport instead of sitting as a short widget under the page heading, the
 * actions clear the 48px touch floor, and on a phone it offers the camera
 * alongside the file picker.
 */
export function Dropzone({
  onFiles,
  accept,
  accent,
  icon,
  multiple = true,
  buttonLabel = "Select images",
  hint,
  cloudMimeTypes,
  camera,
  privacyNote = "Processed in your browser — your images never leave your device.",
}: {
  onFiles: (files: FileList | File[]) => void;
  accept: string;
  accent: string;
  icon: string;
  multiple?: boolean;
  buttonLabel?: string;
  hint: string;
  /** Override the mime types offered in the cloud picker. Defaults to `accept`. */
  cloudMimeTypes?: string;
  /**
   * Show the "Take photo" button on phones. Defaults to whether a camera could
   * produce a file this tool accepts — see `cameraUsable`. Pass `false` to
   * suppress it for a tool where a fresh photo makes no sense.
   */
  camera?: boolean;
  /**
   * Footer line. This USED to be hardcoded to the browser-local wording, which
   * put a flat contradiction on every server-backed page — heic-to-jpg said
   * "your images never leave your device" directly above its own intro
   * explaining that it converts on the server. Server tools must pass this.
   * See LICENSE-AUDIT.md F4.
   */
  privacyNote?: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const cameraRef = useRef<HTMLInputElement>(null);
  const [isDropping, setIsDropping] = useState(false);
  const showCamera = camera ?? cameraUsable(accept);

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        className="hidden"
        onChange={(e) => {
          if (e.target.files && e.target.files.length) onFiles(e.target.files);
          e.target.value = "";
        }}
      />
      {showCamera && (
        /* `capture` asks the OS for the camera rather than the file browser.
           Never `multiple` — a capture returns exactly one shot, and pairing the
           two makes Android fall back to the plain picker. */
        <input
          ref={cameraRef}
          type="file"
          accept={accept}
          capture="environment"
          className="hidden"
          onChange={(e) => {
            if (e.target.files && e.target.files.length) onFiles(e.target.files);
            e.target.value = "";
          }}
        />
      )}
      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setIsDropping(true); }}
        onDragLeave={() => setIsDropping(false)}
        onDrop={(e) => { e.preventDefault(); setIsDropping(false); onFiles(e.dataTransfer.files); }}
        className={`relative flex w-full min-h-[44dvh] cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed bg-surface-container-lowest px-6 py-10 ambient-shadow transition-all sm:min-h-0 sm:py-14 ${
          isDropping ? "drag-active" : "border-outline-variant hover:border-secondary/50"
        }`}
      >
        {/* The icon used to be `hidden sm:flex`, which left the phone version as
            a bare button on an empty panel. It is the only thing identifying
            which tool you are on once the page heading scrolls away. */}
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-surface-container sm:h-11 sm:w-11">
          <Icon name={icon} fill className="text-[28px] sm:text-[22px]" style={{ color: accent }} />
        </div>
        <div className="flex w-full max-w-xs flex-col items-center gap-1 text-center">
          <span className="flex min-h-12 w-full items-center justify-center rounded-lg bg-secondary px-6 text-sm font-semibold text-on-secondary transition-colors hover:bg-secondary-container sm:min-h-0 sm:w-auto sm:py-2.5">
            {buttonLabel}
          </span>
          {showCamera && (
            <button
              type="button"
              // The wrapper's own onClick opens the file picker, so this must not
              // bubble or the visitor gets both dialogs.
              onClick={(e) => { e.stopPropagation(); cameraRef.current?.click(); }}
              className="mt-2 flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-secondary px-6 text-sm font-semibold text-secondary transition-colors active:bg-secondary/10 md:hidden"
            >
              <Icon name="photo_camera" className="text-[20px]" />
              Take photo
            </button>
          )}
          <p className="mt-2 text-body-md text-on-surface-variant">{hint}</p>
        </div>
        {/*
          Cloud import sits inside the drop zone so every tool gains it at once.
          It renders nothing when Drive is unconfigured, and stops click
          propagation so the chip does not also open the native file dialog.
        */}
        <CloudImportBar onFiles={onFiles} mimeTypes={cloudMimeTypes ?? mimeOnly(accept)} />

        <p className="mt-1 flex items-center gap-1.5 text-label-sm font-label-sm text-on-surface-variant/70">
          <Icon name="lock" className="text-[14px]" /> {privacyNote}
        </p>
      </div>
    </>
  );
}

/**
 * Whether a camera could plausibly produce a file this tool accepts.
 *
 * A phone camera hands back JPEG (or HEIC on iOS). Tools that only take GIF or
 * only take HEIC would show a button that returns a file they then reject, so
 * they need a broad type in their accept list to qualify.
 */
function cameraUsable(accept: string): boolean {
  const types = accept.toLowerCase();
  return types.includes("image/*") || types.includes("image/jpeg") || types.includes("image/png");
}

/**
 * Keep only real mime types from an `accept` string.
 *
 * Tool accept lists mix mime types with bare extensions (".heic", ".tif"), and
 * the Picker only understands mime types — passing an extension through makes
 * it silently show nothing.
 */
function mimeOnly(accept: string): string | undefined {
  const types = accept.split(",").map((s) => s.trim()).filter((s) => s.includes("/"));
  return types.length ? types.join(",") : undefined;
}

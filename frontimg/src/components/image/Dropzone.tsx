"use client";

import { useRef, useState } from "react";
import { Icon } from "@/components/Icon";
import { CloudImportBar } from "@/components/CloudImportBar";

/**
 * Shared empty-state drop zone for image tools. Click to pick or drag & drop.
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
   * Footer line. This USED to be hardcoded to the browser-local wording, which
   * put a flat contradiction on every server-backed page — heic-to-jpg said
   * "your images never leave your device" directly above its own intro
   * explaining that it converts on the server. Server tools must pass this.
   * See LICENSE-AUDIT.md F4.
   */
  privacyNote?: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDropping, setIsDropping] = useState(false);

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
      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setIsDropping(true); }}
        onDragLeave={() => setIsDropping(false)}
        onDrop={(e) => { e.preventDefault(); setIsDropping(false); onFiles(e.dataTransfer.files); }}
        className={`relative w-full rounded-xl border-2 border-dashed py-14 px-6 flex flex-col items-center justify-center gap-3 bg-surface-container-lowest ambient-shadow cursor-pointer transition-all ${
          isDropping ? "drag-active" : "border-outline-variant hover:border-secondary/50"
        }`}
      >
        <div className="hidden sm:flex w-11 h-11 bg-surface-container rounded-full items-center justify-center">
          <Icon name={icon} fill className="text-[22px]" style={{ color: accent }} />
        </div>
        <div className="flex flex-col items-center gap-1 text-center">
          <span className="bg-secondary hover:bg-secondary-container text-on-secondary text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors">
            {buttonLabel}
          </span>
          <p className="text-body-md text-on-surface-variant mt-2">{hint}</p>
        </div>
        {/*
          Cloud import sits inside the drop zone so every tool gains it at once.
          It renders nothing when Drive is unconfigured, and stops click
          propagation so the chip does not also open the native file dialog.
        */}
        <CloudImportBar onFiles={onFiles} mimeTypes={cloudMimeTypes ?? mimeOnly(accept)} />

        <p className="text-label-sm font-label-sm text-on-surface-variant/70 mt-1 flex items-center gap-1.5">
          <Icon name="lock" className="text-[14px]" /> {privacyNote}
        </p>
      </div>
    </>
  );
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

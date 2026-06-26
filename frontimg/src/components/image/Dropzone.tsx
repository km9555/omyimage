"use client";

import { useRef, useState } from "react";
import { Icon } from "@/components/Icon";

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
}: {
  onFiles: (files: FileList | File[]) => void;
  accept: string;
  accent: string;
  icon: string;
  multiple?: boolean;
  buttonLabel?: string;
  hint: string;
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
        <p className="text-label-sm font-label-sm text-on-surface-variant/70 mt-1 flex items-center gap-1.5">
          <Icon name="lock" className="text-[14px]" /> Processed in your browser — your images never leave your device.
        </p>
      </div>
    </>
  );
}

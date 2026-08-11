"use client";

import { ServerImageTool } from "@/components/image/ServerImageTool";

const SCALES = [2, 3, 4];

export function UpscaleTool() {
  return (
    <ServerImageTool
      accent="#2F80ED"
      icon="hd"
      accept="image/jpeg,image/png,image/webp"
      endpoint="/api/image/upscale"
      dropHint="or drop a JPG, PNG or WEBP here"
      actionLabel="Upscale"
      processingLabel="Upscaling…"
      initialOptions={{ scale: 4 }}
      controls={(o, set) => (
        <div className="flex flex-col gap-1.5">
          <label className="text-label-sm font-label-sm text-on-surface-variant">Scale factor</label>
          <div className="grid grid-cols-3 gap-1 rounded-lg bg-surface-container p-1">
            {SCALES.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => set("scale", s)}
                className={`rounded-md px-3 py-2 text-body-md font-semibold transition-colors ${
                  o.scale === s ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {s}×
              </button>
            ))}
          </div>
        </div>
      )}
      note={<><strong className="text-on-surface">Engine:</strong> open-source Real-ESRGAN. Higher scales take longer and need a capable server.</>}
    />
  );
}

"use client";

import { ServerImageTool } from "@/components/image/ServerImageTool";

export function EnhanceTool() {
  return (
    <ServerImageTool
      accent="#9B51E0"
      icon="auto_awesome"
      accept="image/jpeg,image/png,image/webp"
      endpoint="/api/enhance"
      dropHint="or drop a JPG, PNG or WEBP here"
      actionLabel="Enhance"
      processingLabel="Enhancing…"
      note={<><strong className="text-on-surface">Engine:</strong> open-source Real-ESRGAN sharpens, denoises and restores detail in low-quality photos.</>}
    />
  );
}

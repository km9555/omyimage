"use client";

import { ServerImageTool } from "@/components/image/ServerImageTool";

export function RemoveBgTool() {
  return (
    <ServerImageTool
      accent="#7B79C9"
      icon="background_replace"
      accept="image/jpeg,image/png,image/webp"
      endpoint="/api/image/remove-background"
      dropHint="or drop a JPG, PNG or WEBP here"
      actionLabel="Remove background"
      processingLabel="Removing background…"
      resultTransparent
      note={<><strong className="text-on-surface">Output:</strong> a transparent PNG. Powered by the open-source rembg engine on the server.</>}
    />
  );
}

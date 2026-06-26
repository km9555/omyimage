"use client";

import { ServerImageTool } from "@/components/image/ServerImageTool";

export function RemoveBgTool() {
  return (
    <ServerImageTool
      accent="#7F77DD"
      icon="background_replace"
      accept="image/jpeg,image/png,image/webp"
      endpoint="/api/remove-background"
      dropHint="or drop a JPG, PNG or WEBP here"
      actionLabel="Remove background"
      processingLabel="Removing background…"
      resultTransparent
      note={<><strong className="text-on-surface">Output:</strong> a transparent PNG. Powered by the open-source rembg engine on the server.</>}
    />
  );
}

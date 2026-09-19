"use client";

import { ServerImageTool } from "@/components/image/ServerImageTool";
import { useT } from "@/i18n/I18nScope";

export function RemoveBgTool() {
  const t = useT();
  return (
    <ServerImageTool
      accent="#7B79C9"
      icon="background_replace"
      accept="image/jpeg,image/png,image/webp"
      endpoint="/api/image/remove-background"
      dropHint={t("or drop a JPG, PNG or WEBP here")}
      actionLabel={t("Remove background")}
      processingLabel={t("Removing background…")}
      resultTransparent
      note={
        <>
          <strong className="text-on-surface">{t("Output:")}</strong>{" "}
          {t("a transparent PNG. Powered by the open-source rembg engine on the server.")}
        </>
      }
    />
  );
}

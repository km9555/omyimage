"use client";

import { ServerImageTool } from "@/components/image/ServerImageTool";
import { BackgroundPicker } from "@/components/BackgroundPicker";
import { compositeOnBlur, compositeOnColor } from "@/lib/image/composite";
import { baseName } from "@/lib/image/raster";
import { useT } from "@/i18n/I18nScope";

/**
 * Settings a variant page opens with (lib/tools.ts `preset`). Without one this
 * is /remove-background exactly as before: a transparent PNG cut-out.
 *   • `background: "color"` — change-background-color: the cut-out over a
 *     solid colour (white / blue / red for ID photos), as a JPG.
 *   • `background: "blur"`  — blur-background: the cut-out over a blurred copy
 *     of the original (the portrait-mode look), as a JPG.
 * Both are composited in the browser from the one server result
 * (lib/image/composite.ts), so trying another colour costs no extra AI run.
 */
export interface RemoveBgPreset {
  background?: "color" | "blur";
  /** Starting colour for `background: "color"`. */
  color?: string;
}

/** Colours ID-photo rules actually ask for, ahead of the generic swatches. */
const ID_COLORS = ["#FFFFFF", "#1F6FD1", "#C8102E", "#E8EEF4"];

// Module scope so their identity is stable — ServerImageTool re-runs a
// postProcess whenever the function or the options change.
const toColor = async (raw: Blob, original: File, o: Record<string, unknown>) => ({
  blob: await compositeOnColor(raw, String(o.color ?? "#FFFFFF")),
  name: `${baseName(original.name)}_background.jpg`,
});
const toBlur = async (raw: Blob, original: File, o: Record<string, unknown>) => ({
  blob: await compositeOnBlur(raw, original, Number(o.blur ?? 0.5)),
  name: `${baseName(original.name)}_blurred-background.jpg`,
});

export function RemoveBgTool({ preset }: { preset?: RemoveBgPreset } = {}) {
  const t = useT();
  const mode = preset?.background;

  if (mode === "color") {
    return (
      <ServerImageTool
        accent="#7B79C9"
        icon="background_replace"
        accept="image/jpeg,image/png,image/webp"
        endpoint="/api/image/remove-background"
        dropHint={t("or drop a JPG, PNG or WEBP here")}
        actionLabel={t("Change background")}
        processingLabel={t("Removing background…")}
        initialOptions={{ color: preset?.color ?? "#FFFFFF" }}
        postProcess={toColor}
        controls={(o, set) => (
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1.5">
              <span className="text-label-sm font-label-sm text-on-surface-variant">{t("ID photo colours")}</span>
              <div className="flex flex-wrap gap-2">
                {ID_COLORS.map((c) => (
                  <button
                    key={c}
                    type="button"
                    aria-label={c}
                    aria-pressed={String(o.color).toUpperCase() === c}
                    onClick={() => set("color", c)}
                    className={`h-8 w-8 rounded-full border-2 transition-transform ${String(o.color).toUpperCase() === c ? "border-secondary scale-110" : "border-outline-variant/60"}`}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>
            <BackgroundPicker
              value={{ transparent: false, color: String(o.color ?? "#FFFFFF") }}
              onChange={(v) => set("color", v.color)}
              allowTransparent={false}
              label={t("Background colour")}
            />
          </div>
        )}
        note={t("The first run removes the background on our server; changing the colour afterwards happens in your browser, with no extra run.")}
      />
    );
  }

  if (mode === "blur") {
    return (
      <ServerImageTool
        accent="#7B79C9"
        icon="lens_blur"
        accept="image/jpeg,image/png,image/webp"
        endpoint="/api/image/remove-background"
        dropHint={t("or drop a JPG, PNG or WEBP here")}
        actionLabel={t("Blur background")}
        processingLabel={t("Finding the subject…")}
        compare
        initialOptions={{ blur: 0.5 }}
        postProcess={toBlur}
        controls={(o, set) => (
          <div className="flex flex-col gap-1.5">
            <label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
              <span>{t("Blur strength")}</span>
              <span className="text-primary font-semibold">{Math.round(Number(o.blur ?? 0.5) * 100)}%</span>
            </label>
            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={Number(o.blur ?? 0.5)}
              onChange={(e) => set("blur", parseFloat(e.target.value))}
              className="w-full accent-secondary"
            />
          </div>
        )}
        note={t("The first run finds the subject on our server; changing the blur afterwards happens in your browser, with no extra run.")}
      />
    );
  }

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

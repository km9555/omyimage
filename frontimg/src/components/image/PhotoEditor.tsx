"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { CropCanvas } from "@/components/image/CropCanvas";
import { MobileBarButton } from "@/components/tool/mobile-chrome";
import { useOverlayScrollLock } from "@/lib/use-is-mobile";
import { baseName, canvasToBlob, decodeBitmap, workingMime, type ExportMime } from "@/lib/image/raster";
import {
  CROP_ASPECTS, NO_TRANSFORM, applyAspect, clampCrop, outputSize, transformedSize,
  type CropSel, type CropTransform,
} from "@/lib/image/crop";
import { previewSource } from "@/lib/image/fx";
import {
  FILTER_PRESETS, NEUTRAL_ADJ, isNoop, isWholeFrame, renderPhotoEdit, sameAdj,
  type PhotoAdj, type PhotoEdit,
} from "@/lib/image/photo-edit";
import { useT } from "@/i18n/I18nScope";

type Tab = "crop" | "adjust" | "filters";

/** Longest side of the copy the live preview and the filter tiles draw from. */
const PREVIEW_PX = 900;
const THUMB_PX = 160;
/** Tallest the picture may be, so the controls under it stay on screen. */
const PREVIEW_DVH = 42;

const WHOLE: CropSel = { x: 0, y: 0, w: 1, h: 1 };

// Labels are translated at the render site; the keys are field names.
const SLIDERS: { key: keyof PhotoAdj; label: string }[] = [
  { key: "brightness", label: "Brightness" },
  { key: "contrast", label: "Contrast" },
  { key: "saturation", label: "Saturation" },
  { key: "warmth", label: "Warmth" },
];

/**
 * The phone photo editor that opens after "Take photo".
 *
 * The OS camera hands back one untouched JPEG, so without this the only edit a
 * visitor got was whatever confirm screen the camera app offered. This gives
 * them what the camera app's own editor does — crop with ratios, rotate, flip,
 * straighten, a filter strip and sliders, one-tap enhance — over whatever page
 * they were on, and resolves to a `File` that drops into the same list a
 * gallery pick would.
 *
 * Crop is `CropCanvas` + `lib/image/crop.ts` (the engine behind /crop-image);
 * colour is `lib/image/photo-edit.ts`. The preview and the filter tiles draw
 * from downscaled copies so a slider drag stays fluid on a phone; "Done"
 * renders the same edit from the full bitmap exactly once.
 */
export function PhotoEditor({
  file,
  accent,
  mode,
  onCancel,
  onKeepOriginal,
  onApply,
}: {
  file: File;
  accent: string;
  /** `capture` right after the camera (offers "Use original"); `edit` for a file already in the list. */
  mode: "capture" | "edit";
  /** Close without a result: the shot is discarded / the item is left as it was. */
  onCancel: () => void;
  /** Capture only: add the untouched shot. */
  onKeepOriginal?: () => void;
  onApply: (edited: File) => void;
}) {
  const t = useT();
  const [bmp, setBmp] = useState<ImageBitmap | null>(null);
  const [preview, setPreview] = useState<ImageBitmap | null>(null);
  const [thumbSrc, setThumbSrc] = useState<ImageBitmap | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [tab, setTab] = useState<Tab>("crop");
  const [sel, setSel] = useState<CropSel>(WHOLE);
  const [aspect, setAspect] = useState<number | null>(null);
  const [transform, setTransform] = useState<CropTransform>(NO_TRANSFORM);
  const [adj, setAdj] = useState<PhotoAdj>(NEUTRAL_ADJ);
  const [enhance, setEnhance] = useState(false);
  const [busy, setBusy] = useState(false);
  /* The preview canvas is held in state, not a ref: the tool shell remounts
     its main region once on phones, and a ref taken before that points at a
     detached element. */
  const [previewEl, setPreviewEl] = useState<HTMLCanvasElement | null>(null);
  const [thumbs, setThumbs] = useState<Record<string, string>>({});

  useOverlayScrollLock(true);

  // Escape closes, matching MobileSheet and CropDialog.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onCancel(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onCancel]);

  /*
    Decode once, then make the two small copies. `alive` guards the close: a
    dialog dismissed mid-decode must not leak bitmaps or set state after
    unmount. Copies go through a canvas rather than createImageBitmap's resize
    options, which Safari was late to support.
  */
  useEffect(() => {
    let alive = true;
    const made: ImageBitmap[] = [];
    (async () => {
      try {
        const full = await decodeBitmap(file, true);
        made.push(full);
        const small = await createImageBitmap(previewSource(full, PREVIEW_PX).canvas);
        made.push(small);
        const tiny = await createImageBitmap(previewSource(full, THUMB_PX).canvas);
        made.push(tiny);
        if (!alive) return;
        setBmp(full);
        setPreview(small);
        setThumbSrc(tiny);
      } catch {
        if (alive) setError(t("Couldn't read this image."));
      }
    })();
    return () => { alive = false; made.forEach((b) => b.close()); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  // The selection sits on the TRANSFORMED image — see `normAspect` in crop.ts.
  const tSize = useMemo(
    () => (bmp ? transformedSize(bmp.width, bmp.height, transform) : { w: 1, h: 1 }),
    [bmp, transform]
  );
  const out = useMemo(
    () => (bmp ? outputSize(sel, bmp.width, bmp.height, transform, "original") : { w: 0, h: 0 }),
    [bmp, sel, transform]
  );

  const edit: PhotoEdit = useMemo(
    () => ({ sel: isWholeFrame(sel) ? null : clampCrop(sel), transform, adj, enhance }),
    [sel, transform, adj, enhance]
  );

  // Live preview for the colour tabs, at most once a frame while a slider moves.
  useEffect(() => {
    if (!previewEl || !preview || tab === "crop") return;
    const id = requestAnimationFrame(() => renderPhotoEdit(previewEl, preview, edit));
    return () => cancelAnimationFrame(id);
  }, [previewEl, preview, edit, tab]);

  /*
    Filter tiles: the visitor's own photo, cropped as it stands, with each look
    applied. Seven 160px JPEG data URLs — small enough that re-rendering when
    the crop changes is cheap, and nothing to revoke.
  */
  useEffect(() => {
    if (tab !== "filters" || !thumbSrc) return;
    const canvas = document.createElement("canvas");
    const next: Record<string, string> = {};
    for (const p of FILTER_PRESETS) {
      renderPhotoEdit(canvas, thumbSrc, { sel: edit.sel, transform: edit.transform, adj: p.adj, enhance: false });
      next[p.name] = canvas.toDataURL("image/jpeg", 0.8);
    }
    setThumbs(next);
  }, [tab, thumbSrc, edit.sel, edit.transform]);

  const pickAspect = useCallback((a: number | null) => {
    setAspect(a);
    if (a !== null) setSel((s) => applyAspect(s, a, tSize.w, tSize.h, "center"));
  }, [tSize.w, tSize.h]);

  const turn = (dir: 1 | -1) => {
    const rotate = ((((transform.rotate + dir * 90) % 360) + 360) % 360) as CropTransform["rotate"];
    const next = { ...transform, rotate };
    setTransform(next);
    // A locked ratio has to be re-fitted on the rotated frame.
    if (aspect !== null && bmp) {
      const s = transformedSize(bmp.width, bmp.height, next);
      setSel((cur) => applyAspect(cur, aspect, s.w, s.h, "center"));
    }
  };

  const resetCrop = () => { setSel(WHOLE); setAspect(null); setTransform(NO_TRANSFORM); };
  const resetColour = () => { setAdj(NEUTRAL_ADJ); setEnhance(false); };

  const activePreset = useMemo(() => FILTER_PRESETS.find((p) => sameAdj(p.adj, adj))?.name ?? null, [adj]);

  const finish = async () => {
    if (!bmp || busy) return;
    if (isNoop(edit)) { onApply(file); return; }
    setBusy(true);
    try {
      /* A HEIC shot (iPhone) comes back as JPG: nothing downstream re-encodes
         HEIC, and PNG would make a 12-megapixel photo tens of megabytes. */
      const heic = /hei[cf]/i.test(file.type) || /\.hei[cf]$/i.test(file.name);
      const mime: ExportMime = heic ? "image/jpeg" : workingMime(file);
      const name = heic ? `${baseName(file.name)}.jpg` : file.name;
      const canvas = document.createElement("canvas");
      renderPhotoEdit(canvas, bmp, edit, { background: mime === "image/jpeg" ? "#ffffff" : null });
      const blob = await canvasToBlob(canvas, mime, 0.95);
      onApply(new File([blob], name, { type: mime, lastModified: Date.now() }));
    } catch (err) {
      console.error(err);
      toast.error(t("Couldn't apply that edit."));
      setBusy(false);
    }
  };

  const chipCls = (on: boolean) =>
    `shrink-0 rounded-full px-3 py-1.5 text-label-sm font-label-sm font-semibold transition-colors ${
      on ? "bg-secondary text-on-secondary" : "bg-surface-container text-on-surface-variant hover:text-primary"
    }`;

  const ready = !!bmp && !!preview;

  return (
    /* Above the tool's mobile shell (z-70) and its settings sheet (z-120). */
    <div
      className="fixed inset-0 z-[130] flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={t("Edit photo")}
    >
      <button
        type="button"
        aria-label={t("Cancel")}
        onClick={onCancel}
        className="absolute inset-0 h-full w-full cursor-default bg-black/60"
      />

      <div className="relative flex h-dvh max-h-dvh w-full max-w-[640px] flex-col overflow-hidden bg-surface-container-lowest shadow-2xl md:h-auto md:max-h-[92vh] md:rounded-2xl">
        <header className="flex shrink-0 items-center justify-between gap-3 border-b border-surface-variant px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top))]">
          <div className="min-w-0">
            <h2 className="truncate text-title-md font-bold text-primary">{t("Edit photo")}</h2>
            <p className="truncate text-label-sm font-label-sm text-on-surface-variant">{file.name}</p>
          </div>
          <button
            type="button"
            onClick={onCancel}
            aria-label={t("Close")}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary"
          >
            <Icon name="close" className="text-[20px]" />
          </button>
        </header>

        <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto p-4">
          {/* Picture */}
          <div className="flex items-center justify-center rounded-xl bg-surface-container p-2" style={{ minHeight: `${PREVIEW_DVH / 2}dvh` }}>
            {error ? (
              <p className="px-4 py-8 text-center text-body-md text-error">{error}</p>
            ) : !ready ? (
              <Icon name="progress_activity" className="animate-spin text-[28px] text-secondary" />
            ) : tab === "crop" ? (
              /* Cap the surface by height as well as width, or a portrait shot
                 pushes every control below the fold. CropCanvas sizes itself to
                 its wrapper's width, so the cap is expressed as a width. */
              <div className="w-full" style={{ maxWidth: `calc(${PREVIEW_DVH}dvh * ${tSize.w / tSize.h})` }}>
                <CropCanvas
                  bitmap={preview}
                  sel={sel}
                  onChange={setSel}
                  shape="rect"
                  radius={0}
                  aspect={aspect}
                  transform={transform}
                  zoom={1}
                  accent={accent}
                />
              </div>
            ) : (
              <canvas
                ref={setPreviewEl}
                className="h-auto w-auto max-w-full rounded-lg"
                style={{ maxHeight: `${PREVIEW_DVH}dvh` }}
                aria-hidden="true"
              />
            )}
          </div>

          {/* Controls for the current tab */}
          {ready && tab === "crop" && (
            <>
              <div className="flex gap-1.5 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: "none" }}>
                {CROP_ASPECTS.map((a) => (
                  <button key={a.label} type="button" onClick={() => pickAspect(a.value)} className={chipCls(aspect === a.value)}>
                    {t(a.label)}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <ToolButton icon="rotate_left" label={t("Rotate left")} onClick={() => turn(-1)} />
                <ToolButton icon="rotate_right" label={t("Rotate right")} onClick={() => turn(1)} />
                <ToolButton
                  icon="flip"
                  label={t("Flip horizontal")}
                  active={transform.flipH}
                  onClick={() => setTransform((tf) => ({ ...tf, flipH: !tf.flipH }))}
                />
                <ToolButton
                  icon="flip"
                  iconClass="rotate-90"
                  label={t("Flip vertical")}
                  active={transform.flipV}
                  onClick={() => setTransform((tf) => ({ ...tf, flipV: !tf.flipV }))}
                />
                <ToolButton icon="restart_alt" label={t("Reset")} onClick={resetCrop} />
                <span className="ml-auto text-label-sm font-label-sm text-on-surface-variant">
                  {t("Output")} <span className="font-semibold text-primary">{out.w} × {out.h}</span> px
                </span>
              </div>
              <Slider
                label={t("Straighten")}
                value={transform.straighten}
                display={`${transform.straighten}°`}
                min={-15}
                max={15}
                step={0.5}
                onChange={(v) => setTransform((tf) => ({ ...tf, straighten: v }))}
              />
            </>
          )}

          {ready && tab === "adjust" && (
            <>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setEnhance((v) => !v)}
                  aria-pressed={enhance}
                  className={`flex min-h-10 items-center gap-2 rounded-full px-4 text-label-sm font-label-sm font-semibold transition-colors ${
                    enhance ? "bg-secondary text-on-secondary" : "bg-surface-container text-on-surface-variant hover:text-primary"
                  }`}
                >
                  <Icon name="auto_fix_high" fill={enhance} className="text-[18px]" /> {t("Auto enhance")}
                </button>
                <ToolButton icon="restart_alt" label={t("Reset")} onClick={resetColour} className="ml-auto" />
              </div>
              {SLIDERS.map((s) => (
                <Slider
                  key={s.key}
                  label={t(s.label)}
                  value={adj[s.key]}
                  display={`${adj[s.key] > 0 ? "+" : ""}${adj[s.key]}`}
                  min={-100}
                  max={100}
                  step={1}
                  onChange={(v) => setAdj((a) => ({ ...a, [s.key]: v }))}
                />
              ))}
            </>
          )}

          {ready && tab === "filters" && (
            <div className="flex gap-2 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: "none" }}>
              {FILTER_PRESETS.map((p) => {
                const on = activePreset === p.name;
                return (
                  <button
                    key={p.name}
                    type="button"
                    onClick={() => setAdj(p.adj)}
                    aria-pressed={on}
                    className="flex w-[84px] shrink-0 flex-col items-center gap-1"
                  >
                    <span
                      className={`block h-[84px] w-[84px] overflow-hidden rounded-xl bg-surface-container-highest ring-2 transition-shadow ${on ? "" : "ring-transparent"}`}
                      style={on ? { boxShadow: `0 0 0 2px ${accent}` } : undefined}
                    >
                      {thumbs[p.name] && (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img src={thumbs[p.name]} alt="" className="h-full w-full object-cover" />
                      )}
                    </span>
                    <span className={`text-label-sm font-label-sm font-semibold ${on ? "text-secondary" : "text-on-surface-variant"}`}>
                      {t(p.name)}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Tabs */}
        <nav className="grid shrink-0 grid-cols-3 border-t border-surface-variant" aria-label={t("Edit photo")}>
          <MobileBarButton icon="crop" label={t("Crop")} active={tab === "crop"} onClick={() => setTab("crop")} disabled={!ready} />
          <MobileBarButton icon="tune" label={t("Adjust")} active={tab === "adjust"} onClick={() => setTab("adjust")} disabled={!ready} />
          <MobileBarButton icon="palette" label={t("Filters")} active={tab === "filters"} onClick={() => setTab("filters")} disabled={!ready} />
        </nav>

        <footer className="flex shrink-0 gap-2 border-t border-surface-variant px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          {mode === "capture" && onKeepOriginal ? (
            <button
              type="button"
              onClick={onKeepOriginal}
              disabled={busy}
              className="flex-1 rounded-xl border border-surface-variant px-4 py-3 text-body-md font-semibold text-primary transition-colors hover:bg-surface-container disabled:opacity-50"
            >
              {t("Use original")}
            </button>
          ) : (
            <button
              type="button"
              onClick={onCancel}
              disabled={busy}
              className="flex-1 rounded-xl border border-surface-variant px-4 py-3 text-body-md font-semibold text-primary transition-colors hover:bg-surface-container disabled:opacity-50"
            >
              {t("Cancel")}
            </button>
          )}
          <button
            type="button"
            onClick={() => void finish()}
            disabled={!ready || busy}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-secondary px-4 py-3 text-body-md font-semibold text-on-secondary shadow-md shadow-secondary/30 transition-colors hover:bg-secondary-container disabled:opacity-50"
          >
            {busy ? (
              <Icon name="progress_activity" className="animate-spin text-[20px]" />
            ) : (
              <Icon name="check" className="text-[20px]" />
            )}
            {t("Done")}
          </button>
        </footer>
      </div>
    </div>
  );
}

function ToolButton({
  icon,
  iconClass = "",
  label,
  onClick,
  active = false,
  className = "",
}: {
  icon: string;
  iconClass?: string;
  label: string;
  onClick: () => void;
  active?: boolean;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={label}
      aria-label={label}
      aria-pressed={active}
      className={`flex h-10 min-w-10 items-center justify-center rounded-lg border px-2.5 transition-colors ${
        active ? "border-secondary text-secondary" : "border-surface-variant text-on-surface-variant hover:border-secondary/60 hover:text-primary"
      } ${className}`}
    >
      <Icon name={icon} className={`text-[18px] ${iconClass}`} />
    </button>
  );
}

/** Label + readout above a full-width range: the phone pattern, no number box. */
function Slider({
  label,
  value,
  display,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
        <span>{label}</span>
        <span className="font-semibold text-primary">{display}</span>
      </label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        aria-label={label}
        className="h-8 w-full accent-secondary"
      />
    </div>
  );
}

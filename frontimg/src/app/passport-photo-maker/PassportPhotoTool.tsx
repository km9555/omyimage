"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { ToolWorkspace, filesHeader } from "@/components/tool/ToolWorkspace";
import { SettingsRail, RailAction, RailSecondaryAction, RailNote } from "@/components/tool/SettingsRail";
import { decodeBitmap, downloadBlob, baseName } from "@/lib/image/raster";
import { detectFaces } from "@/lib/image/face-detect";
import {
  ID_SPECS, specById, cropForFace, centredCrop, clampCrop, renderIdPhoto, renderSheet, jpegAtDpi,
  type FaceBox, type PaperId,
} from "@/lib/image/id-photo";
import { mmToPx, setJpegDpi } from "@/lib/image/dpi";
import { compressToSize } from "@/lib/image/compress-to-size";
import { processOnServer } from "@/lib/process-router";
import { useHandoff } from "@/lib/tool-handoff";
import { useFormatBytes, useLocale, useT } from "@/i18n/I18nScope";
import { translateError } from "@/i18n/errors";

const ACCENT = "#4F7FB8";
const ACCEPT = "image/jpeg,image/png,image/webp";
const DPI = 300;

/**
 * Settings a variant page opens with (lib/tools.ts `preset`): 3x4-photo opens
 * on the 3 × 4 cm size, 2x2-photo on 2 × 2 in. Without one, the size follows
 * the page's market (3 × 4 cm for /pt and /id, 35 × 45 mm elsewhere).
 */
export interface PassportPhotoPreset {
  size?: string;
}

// Labels translated at the render site; keys in passport-photo-maker.<loc>.ts.
const SPEC_LABELS: Record<string, string> = {
  "35x45": "35 × 45 mm — passport: India, UK, EU, Russia",
  "2x2in": "2 × 2 in (51 × 51 mm) — US passport and visa",
  "3x4": "3 × 4 cm — documents: Brazil, Indonesia",
  "4x6": "4 × 6 cm — pas foto (Indonesia)",
  "2x3": "2 × 3 cm — pas foto (Indonesia)",
  "5x7": "5 × 7 cm — document photo (Brazil)",
  "33x48": "33 × 48 mm — China visa",
  "50x70": "50 × 70 mm — Canada passport",
};

const BG_SWATCHES = ["#FFFFFF", "#EEF1F4", "#BFD7F2", "#1F6FD1", "#C8102E"];

export function PassportPhotoTool({ preset }: { preset?: PassportPhotoPreset } = {}) {
  const t = useT();
  const locale = useLocale();
  const formatBytes = useFormatBytes();
  const defaultSize = preset?.size ?? (locale === "pt" || locale === "id" ? "3x4" : "35x45");

  const [file, setFile] = useState<File | null>(null);
  const [bmp, setBmp] = useState<ImageBitmap | null>(null);
  const [face, setFace] = useState<FaceBox | null>(null);
  const [detecting, setDetecting] = useState(false);
  const [specId, setSpecId] = useState(defaultSize);
  const [zoom, setZoom] = useState(1);
  const [dx, setDx] = useState(0);
  const [dy, setDy] = useState(0);
  const [bgMode, setBgMode] = useState<"keep" | "color">("keep");
  const [bgColor, setBgColor] = useState("#FFFFFF");
  const [cutout, setCutout] = useState<ImageBitmap | null>(null);
  const [bgWorking, setBgWorking] = useState(false);
  const [maxKb, setMaxKb] = useState<string>("");
  const [isWorking, setIsWorking] = useState(false);
  const [view, setView] = useState<HTMLCanvasElement | null>(null);

  const spec = specById(specId);

  // Release decoded bitmaps when replaced or unmounted.
  useEffect(() => () => { bmp?.close(); }, [bmp]);
  useEffect(() => () => { cutout?.close(); }, [cutout]);

  const onFiles = useCallback(async (incoming: FileList | File[]) => {
    const f = Array.from(incoming).find((x) => x.type.startsWith("image/"));
    if (!f) { toast.error(t("Please select an image.")); return; }
    try {
      const b = await decodeBitmap(f, true);
      setFile(f); setBmp(b); setFace(null); setCutout(null); setBgMode("keep");
      setZoom(1); setDx(0); setDy(0);
      setDetecting(true);
      try {
        const regions = await detectFaces(b, { padding: 0, sensitivity: "balanced" });
        const best = regions.sort((p, q) => q.w * q.h - p.w * p.h)[0];
        if (best) setFace({ x: best.x * b.width, y: best.y * b.height, w: best.w * b.width, h: best.h * b.height });
        else toast(t("No face found — the photo is centred instead. Use the controls to frame it."));
      } catch {
        toast(t("No face found — the photo is centred instead. Use the controls to frame it."));
      } finally {
        setDetecting(false);
      }
    } catch {
      toast.error(t("Could not read this image."));
    }
  }, [t]);

  useHandoff(onFiles);

  const reset = () => { setFile(null); setBmp(null); setFace(null); setCutout(null); };

  /** The picture the frame is cut from: the original, or the cut-out on a colour. */
  const source = useMemo(() => {
    if (!bmp) return null;
    if (bgMode !== "color" || !cutout) return bmp;
    const c = document.createElement("canvas");
    c.width = bmp.width; c.height = bmp.height;
    const ctx = c.getContext("2d");
    if (!ctx) return bmp;
    ctx.fillStyle = bgColor; ctx.fillRect(0, 0, c.width, c.height);
    ctx.drawImage(cutout, 0, 0, c.width, c.height);
    return c;
  }, [bmp, cutout, bgMode, bgColor]);

  const framing = useMemo(() => {
    if (!bmp) return null;
    const ideal = face ? cropForFace(face, spec, zoom, dx, dy) : centredCrop(bmp.width, bmp.height, spec, zoom, dx, dy);
    if (bgMode === "color") return { crop: ideal, moved: false };
    const crop = clampCrop(ideal, bmp.width, bmp.height);
    return { crop, moved: Math.abs(crop.y - ideal.y) > ideal.h * 0.02 };
  }, [bmp, face, spec, zoom, dx, dy, bgMode]);
  const crop = framing?.crop ?? null;

  const fill = bgMode === "color" ? bgColor : "#FFFFFF";
  const render = useCallback(
    () => (source && crop ? renderIdPhoto(source, crop, spec, DPI, fill) : null),
    [source, crop, spec, fill],
  );

  // Live preview. The canvas is held in state, not a ref: ToolWorkspace swaps
  // its mobile and desktop layouts on resize, mounting a fresh canvas that
  // must be redrawn even though nothing else changed.
  useEffect(() => {
    const out = render();
    if (!out || !view) return;
    view.width = out.width; view.height = out.height;
    view.getContext("2d")?.drawImage(out, 0, 0);
  }, [render, view]);

  const changeBackground = async () => {
    if (!file) return;
    setBgMode("color");
    if (cutout) return;
    setBgWorking(true);
    try {
      const r = await processOnServer("/api/image/remove-background", file, {});
      setCutout(await createImageBitmap(r.blob));
    } catch (err) {
      setBgMode("keep");
      toast.error(translateError(err, t, "Processing failed."));
    } finally {
      setBgWorking(false);
    }
  };

  const downloadPhoto = async () => {
    const out = render();
    if (!out || !file) return;
    setIsWorking(true);
    try {
      let blob = await jpegAtDpi(out, DPI);
      const limit = parseFloat(maxKb);
      if (limit > 0 && blob.size > limit * 1000) {
        const r = await compressToSize(blob, { maxBytes: Math.round(limit * 1000), mime: "image/jpeg", background: fill });
        // Keep the PRINTED size right if pixels had to go: lower the DPI label in proportion.
        blob = await setJpegDpi(r.blob, Math.max(1, Math.round((DPI * r.width) / out.width)));
        if (!r.met) toast(t("Could not get under {size} — the smallest file is used.", { size: `${limit} ${t("KB")}` }));
      }
      downloadBlob(blob, `${baseName(file.name)}_${spec.id}.jpg`);
    } catch (err) {
      toast.error(translateError(err, t, "Processing failed."));
    } finally {
      setIsWorking(false);
    }
  };

  const downloadSheet = async (paper: PaperId) => {
    const out = render();
    if (!out || !file) return;
    setIsWorking(true);
    try {
      const { canvas } = renderSheet(out, spec, paper, DPI);
      downloadBlob(await jpegAtDpi(canvas, DPI, 0.92), `${baseName(file.name)}_${spec.id}_${paper}_sheet.jpg`);
    } catch (err) {
      toast.error(translateError(err, t, "Processing failed."));
    } finally {
      setIsWorking(false);
    }
  };

  const copies = useMemo(() => {
    if (!bmp) return { s4x6: 0, a4: 0 };
    const dummy = document.createElement("canvas");
    dummy.width = 1; dummy.height = 1;
    return { s4x6: renderSheet(dummy, spec, "4x6", 10).copies, a4: renderSheet(dummy, spec, "a4", 10).copies };
  }, [bmp, spec]);

  if (!file || !bmp) {
    return (
      <section>
        <TopLoadingBar active={detecting} />
        <Dropzone onFiles={onFiles} accept={ACCEPT} accent={ACCENT} icon="badge" multiple={false} buttonLabel={t("Select a photo")} hint={t("or drop a JPG, PNG or WEBP portrait here")} />
      </section>
    );
  }

  const fieldCls = "w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";
  const px = `${mmToPx(spec.wMm, DPI)} × ${mmToPx(spec.hMm, DPI)} px`;
  // "3 × 4 cm", "35 × 45 mm" … in the page's language: the part of the size's
  // translated label before the dash (2 × 2 in has a short form of its own).
  const sizeText = spec.id === "2x2in" ? t("2 × 2 in") : t(SPEC_LABELS[spec.id]).split(" — ")[0];

  const slider = (label: string, value: number, set: (v: number) => void, min: number, max: number) => (
    <div className="flex flex-col gap-1">
      <span className="text-label-sm font-label-sm text-on-surface-variant">{label}</span>
      <input type="range" min={min} max={max} step={0.01} value={value} onChange={(e) => set(parseFloat(e.target.value))} className="w-full accent-secondary" />
    </div>
  );

  return (
    <>
      <TopLoadingBar active={detecting || bgWorking || isWorking} />
      <ToolWorkspace
        mobile={{
          ...filesHeader([file]),
          onBack: reset,
          backLabel: t("Clear image"),
          settingsTitle: t("Photo settings"),
          cta: { icon: "download", label: t("Download photo"), busyLabel: t("Saving…"), busy: isWorking, onClick: downloadPhoto },
        }}
        main={
          <div className="flex flex-col gap-3">
            <div className="rounded-xl border border-surface-variant bg-surface-container p-4 flex items-center justify-center" style={{ minHeight: 260 }}>
              <canvas ref={setView}aria-label={t("Preview")} className="max-h-[52vh] max-w-full h-auto w-auto rounded shadow-sm bg-white" />
            </div>
            <div className="flex items-center justify-between gap-2">
              <p className="text-label-sm font-label-sm text-on-surface-variant">
                {detecting ? t("Looking for the face…") : t("Printed size: {size} at 300 DPI ({px})", { size: sizeText, px })}
              </p>
              <button type="button" onClick={reset} className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap text-label-md font-medium text-on-surface-variant hover:text-error">
                <Icon name="close" className="text-[18px]" /> {t("Change image")}
              </button>
            </div>
            {framing?.moved && (
              <p className="text-label-sm font-label-sm text-on-surface-variant/80">
                {t("The photo has little room above the head, so the frame was moved to fit. Changing the background restores the usual spacing.")}
              </p>
            )}
          </div>
        }
        rail={
          <SettingsRail
            title={t("Photo settings")}
            icon="badge"
            accent={ACCENT}
            footer={
              <>
                <RailNote>{t("Changing the background uses one AI run on our server; everything else stays in your browser.")}</RailNote>
                <RailAction onClick={downloadPhoto} busy={isWorking} busyLabel={t("Saving…")} icon="download">
                  {t("Download photo")}
                </RailAction>
                <RailSecondaryAction icon="grid_view" onClick={() => downloadSheet("4x6")}>
                  {t("Download 4×6 in print sheet ({n} photos)", { n: copies.s4x6 })}
                </RailSecondaryAction>
                <RailSecondaryAction icon="description" onClick={() => downloadSheet("a4")}>
                  {t("Download A4 print sheet ({n} photos)", { n: copies.a4 })}
                </RailSecondaryAction>
              </>
            }
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="id-size" className="text-label-sm font-label-sm text-on-surface-variant">{t("Document size")}</label>
              <select id="id-size" value={specId} onChange={(e) => { setSpecId(e.target.value); setZoom(1); setDx(0); setDy(0); }} className={fieldCls}>
                {ID_SPECS.map((s) => <option key={s.id} value={s.id}>{t(SPEC_LABELS[s.id])}</option>)}
              </select>
            </div>
            <div className="flex flex-col gap-3">
              {slider(t("Head size"), zoom, setZoom, 0.8, 1.25)}
              {slider(t("Move left / right"), dx, setDx, -0.25, 0.25)}
              {slider(t("Move up / down"), dy, setDy, -0.25, 0.25)}
              <button type="button" onClick={() => { setZoom(1); setDx(0); setDy(0); }} className="self-start text-label-md font-medium text-secondary hover:underline">
                {t("Reset framing")}
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-label-sm font-label-sm text-on-surface-variant">{t("Background")}</span>
              <div role="radiogroup" aria-label={t("Background")} className="grid grid-cols-2 gap-1 rounded-lg bg-surface-container p-1">
                <button type="button" role="radio" aria-checked={bgMode === "keep"} onClick={() => setBgMode("keep")}
                  className={`rounded-md px-2 py-1.5 text-label-md font-semibold ${bgMode === "keep" ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant"}`}>
                  {t("Keep original")}
                </button>
                <button type="button" role="radio" aria-checked={bgMode === "color"} onClick={changeBackground} disabled={bgWorking}
                  className={`rounded-md px-2 py-1.5 text-label-md font-semibold ${bgMode === "color" ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant"}`}>
                  {bgWorking ? t("Removing background…") : t("Change colour")}
                </button>
              </div>
              {bgMode === "color" && (
                <div className="flex flex-wrap items-center gap-2" aria-label={t("Background colour")}>
                  {BG_SWATCHES.map((c) => (
                    <button key={c} type="button" aria-label={c} aria-pressed={bgColor === c} onClick={() => setBgColor(c)}
                      className={`h-8 w-8 rounded-full border-2 ${bgColor === c ? "border-secondary scale-110" : "border-outline-variant/60"}`} style={{ backgroundColor: c }} />
                  ))}
                  <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value.toUpperCase())} aria-label={t("Background colour")} className="h-8 w-10 cursor-pointer rounded border border-outline-variant/60 bg-transparent" />
                </div>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="id-maxkb" className="text-label-sm font-label-sm text-on-surface-variant">{t("Max file size (optional)")}</label>
              <div className="flex items-center gap-2">
                <input id="id-maxkb" type="number" inputMode="decimal" min={1} placeholder="—" value={maxKb} onChange={(e) => setMaxKb(e.target.value)} className={`${fieldCls.replace("w-full", "w-28")} tabular-nums`} />
                <span className="text-body-md text-on-surface-variant">{t("KB")}</span>
              </div>
              <p className="text-label-sm font-label-sm text-on-surface-variant/70">
                {t("For forms with a limit such as 50 KB. Leave empty for the best quality.")}
                {file ? ` ${t("Original: {size}", { size: formatBytes(file.size) })}` : ""}
              </p>
            </div>
          </SettingsRail>
        }
      />
    </>
  );
}

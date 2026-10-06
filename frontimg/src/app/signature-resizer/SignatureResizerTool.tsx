"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { ToolWorkspace, filesHeader } from "@/components/tool/ToolWorkspace";
import { SettingsRail, RailAction, RailNote } from "@/components/tool/SettingsRail";
import { decodeBitmap, downloadBlob, baseName, canvasToBlob } from "@/lib/image/raster";
import { cleanSignature, fitOnWhite, padBox, type InkColor } from "@/lib/image/signature";
import { compressToSize, growToSize, limitBytes, minimumBytes } from "@/lib/image/compress-to-size";
import { mmToPx, setJpegDpi } from "@/lib/image/dpi";
import { useHandoff } from "@/lib/tool-handoff";
import { useFormatBytes, useLocale, useT } from "@/i18n/I18nScope";
import { translateError } from "@/i18n/errors";

const ACCENT = "#5A6FB0";
const ACCEPT = "image/jpeg,image/png,image/webp";
const DPI = 300;

/**
 * Output sizes. Pixel sizes are what Indian exam and bank portals quote
 * (140 × 60); centimetre sizes are drawn at 300 DPI and saved with that DPI,
 * so they print at the stated size. "trim" keeps the signature's own shape.
 */
type SizeId = "trim" | "140x60" | "4x2cm" | "6x2cm" | "custom";
const CM_SIZES: Record<string, { wMm: number; hMm: number; label: string }> = {
  "4x2cm": { wMm: 40, hMm: 20, label: "4 × 2 cm" },
  "6x2cm": { wMm: 60, hMm: 20, label: "6 × 2 cm" },
};
/** Long side for "trim" — plenty for any form, small enough for KB limits. */
const TRIM_LONG_SIDE = 600;

/** KB range quick picks: [min, max] in KB; 0 = none. */
const RANGES: { min: number; max: number }[] = [
  { min: 0, max: 0 },
  { min: 10, max: 20 },
  { min: 0, max: 20 },
  { min: 0, max: 50 },
];

const INKS: { id: InkColor; label: string }[] = [
  { id: "black", label: "Black" },
  { id: "blue", label: "Blue" },
  { id: "original", label: "Original" },
];

export function SignatureResizerTool() {
  const t = useT();
  const locale = useLocale();
  const formatBytes = useFormatBytes();
  // Indian forms are the main audience for exact sizes; elsewhere a trimmed,
  // clean signature with no limit is the more useful starting point.
  const formDefaults = locale === "en" || locale === "hi";

  const [file, setFile] = useState<File | null>(null);
  const [bmp, setBmp] = useState<ImageBitmap | null>(null);
  const [clean, setClean] = useState(true);
  const [strength, setStrength] = useState(0.5);
  const [ink, setInk] = useState<InkColor>("black");
  const [trim, setTrim] = useState(true);
  const [sizeId, setSizeId] = useState<SizeId>(formDefaults ? "140x60" : "trim");
  const [customW, setCustomW] = useState(300);
  const [customH, setCustomH] = useState(100);
  const [minKb, setMinKb] = useState<number>(formDefaults ? 10 : 0);
  const [maxKb, setMaxKb] = useState<number>(formDefaults ? 20 : 0);
  const [isWorking, setIsWorking] = useState(false);
  const [last, setLast] = useState<{ size: number; w: number; h: number; padded: boolean } | null>(null);
  const [view, setView] = useState<HTMLCanvasElement | null>(null);

  useEffect(() => () => { bmp?.close(); }, [bmp]);

  const onFiles = useCallback(async (incoming: FileList | File[]) => {
    const f = Array.from(incoming).find((x) => x.type.startsWith("image/"));
    if (!f) { toast.error(t("Please select an image.")); return; }
    try {
      const b = await decodeBitmap(f, true);
      setFile(f); setBmp(b); setLast(null);
    } catch {
      toast.error(t("Could not read this image."));
    }
  }, [t]);

  useHandoff(onFiles);

  const reset = () => { setFile(null); setBmp(null); setLast(null); };

  /** Cleaned full-resolution signature and its ink box — the expensive step. */
  const cleaned = useMemo(() => (bmp ? cleanSignature(bmp, { clean, strength, ink }) : null), [bmp, clean, strength, ink]);

  /** Output dimensions in pixels for the chosen size. */
  const outSize = useMemo(() => {
    if (!cleaned) return null;
    const cw = cleaned.canvas.width;
    const ch = cleaned.canvas.height;
    const box = trim && cleaned.ink ? padBox(cleaned.ink, cw, ch) : { x: 0, y: 0, w: cw, h: ch };
    let w: number;
    let h: number;
    if (sizeId === "140x60") { w = 140; h = 60; }
    else if (sizeId === "custom") { w = Math.max(16, Math.min(4000, Math.round(customW || 0))); h = Math.max(16, Math.min(4000, Math.round(customH || 0))); }
    else if (sizeId in CM_SIZES) { w = mmToPx(CM_SIZES[sizeId].wMm, DPI); h = mmToPx(CM_SIZES[sizeId].hMm, DPI); }
    else {
      const s = Math.min(1, TRIM_LONG_SIDE / Math.max(box.w, box.h));
      w = Math.max(1, Math.round(box.w * s));
      h = Math.max(1, Math.round(box.h * s));
    }
    return { box, w, h };
  }, [cleaned, trim, sizeId, customW, customH]);

  const render = useCallback(
    () => (cleaned && outSize ? fitOnWhite(cleaned.canvas, outSize.box, outSize.w, outSize.h) : null),
    [cleaned, outSize],
  );

  // Live preview. The canvas is held in state: ToolWorkspace remounts it when
  // switching between its mobile and desktop layouts.
  useEffect(() => {
    const out = render();
    if (!out || !view) return;
    view.width = out.width; view.height = out.height;
    view.getContext("2d")?.drawImage(out, 0, 0);
  }, [render, view]);

  const download = async () => {
    const out = render();
    if (!out || !file) return;
    // Minimum in binary KB, maximum in decimal KB: both hold however a form counts.
    const min = minKb > 0 ? minimumBytes(minKb, "KB") : 0;
    const max = maxKb > 0 ? limitBytes(maxKb, "KB") : undefined;
    if (max !== undefined && min > max) { toast.error(t("The maximum must be larger than the minimum.")); return; }
    setIsWorking(true);
    try {
      const png = await canvasToBlob(out, "image/png");
      let blob: Blob;
      let padded = false;
      let w = out.width;
      let h = out.height;
      if (max !== undefined) {
        const r = await compressToSize(png, { maxBytes: max, mime: "image/jpeg", background: "#ffffff" });
        blob = r.blob; w = r.width; h = r.height;
        if (!r.met && r.blob.size > max) toast(t("Could not get under {size} — the smallest file is used.", { size: `${maxKb} ${t("KB")}` }));
      } else {
        blob = await canvasToBlob(out, "image/jpeg", 0.95);
      }
      if (min > 0 && blob.size < min) {
        const g = await growToSize(png, { minBytes: min, maxBytes: max, background: "#ffffff", allowEnlarge: false });
        blob = g.blob; padded = g.padded; w = g.width; h = g.height;
      }
      if (sizeId in CM_SIZES) blob = await setJpegDpi(blob, DPI);
      const suffix = sizeId === "trim" ? "signature" : `signature_${w}x${h}`;
      downloadBlob(blob, `${baseName(file.name)}_${suffix}.jpg`);
      setLast({ size: blob.size, w, h, padded });
    } catch (err) {
      toast.error(translateError(err, t, "Processing failed."));
    } finally {
      setIsWorking(false);
    }
  };

  if (!file || !bmp) {
    return (
      <section>
        <Dropzone onFiles={onFiles} accept={ACCEPT} accent={ACCENT} icon="draw" multiple={false} buttonLabel={t("Select a signature")} hint={t("or drop a photo or scan of your signature here")} />
      </section>
    );
  }

  const fieldCls = "w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";
  const kb = (n: number) => `${n} ${t("KB")}`;
  const rangeLabel = (r: { min: number; max: number }) =>
    r.min === 0 && r.max === 0 ? t("No limit") : r.min === 0 ? t("Under {size}", { size: kb(r.max) }) : t("{min} to {max}", { min: kb(r.min), max: kb(r.max) });
  const segBtn = (active: boolean) =>
    `rounded-md px-2 py-1.5 text-label-md font-semibold ${active ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant"}`;

  return (
    <>
      <TopLoadingBar active={isWorking} />
      <ToolWorkspace
        mobile={{
          ...filesHeader([file]),
          onBack: reset,
          backLabel: t("Clear image"),
          settingsTitle: t("Signature settings"),
          cta: { icon: "download", label: t("Download signature"), busyLabel: t("Saving…"), busy: isWorking, onClick: download },
        }}
        main={
          <div className="flex flex-col gap-3">
            <div className="rounded-xl border border-surface-variant bg-surface-container p-4 flex items-center justify-center" style={{ minHeight: 220 }}>
              <canvas ref={setView} aria-label={t("Preview")} className="max-h-[48vh] max-w-full h-auto w-auto rounded shadow-sm bg-white border border-outline-variant/40" />
            </div>
            <div className="flex items-center justify-between gap-2">
              <p className="text-label-sm font-label-sm text-on-surface-variant">
                {outSize ? t("Output: {w} × {h} px", { w: outSize.w, h: outSize.h }) : ""}
                {last ? ` · ${t("Last download: {size}", { size: formatBytes(last.size) })}` : ""}
              </p>
              <button type="button" onClick={reset} className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap text-label-md font-medium text-on-surface-variant hover:text-error">
                <Icon name="close" className="text-[18px]" /> {t("Change image")}
              </button>
            </div>
            {last?.padded && (
              <p className="text-label-sm font-label-sm text-on-surface-variant/80">
                {t("The file was padded to reach the minimum size; the picture itself is unchanged.")}
              </p>
            )}
            {cleaned && !cleaned.ink && (
              <p className="text-label-sm font-label-sm text-error">{t("No signature found — try a photo with darker ink on plain paper.")}</p>
            )}
          </div>
        }
        rail={
          <SettingsRail
            title={t("Signature settings")}
            icon="draw"
            accent={ACCENT}
            footer={
              <>
                <RailNote>{t("Your signature is processed in your browser and never uploaded.")}</RailNote>
                <RailAction onClick={download} busy={isWorking} busyLabel={t("Saving…")} icon="download">
                  {t("Download signature")}
                </RailAction>
              </>
            }
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="sig-size" className="text-label-sm font-label-sm text-on-surface-variant">{t("Output size")}</label>
              <select id="sig-size" value={sizeId} onChange={(e) => setSizeId(e.target.value as SizeId)} className={fieldCls}>
                <option value="trim">{t("Trimmed, original shape")}</option>
                <option value="140x60">{"140 × 60 px"}</option>
                {Object.entries(CM_SIZES).map(([id, s]) => <option key={id} value={id}>{t(s.label)}</option>)}
                <option value="custom">{t("Custom size")}</option>
              </select>
              {sizeId === "custom" && (
                <div className="flex items-center gap-2">
                  <input type="number" min={16} max={4000} value={customW} onChange={(e) => setCustomW(parseInt(e.target.value || "0", 10))} aria-label={t("Width (px)")} className={`${fieldCls.replace("w-full", "w-24")} tabular-nums`} />
                  <span className="text-on-surface-variant">×</span>
                  <input type="number" min={16} max={4000} value={customH} onChange={(e) => setCustomH(parseInt(e.target.value || "0", 10))} aria-label={t("Height (px)")} className={`${fieldCls.replace("w-full", "w-24")} tabular-nums`} />
                  <span className="text-label-sm text-on-surface-variant">px</span>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-label-sm font-label-sm text-on-surface-variant">{t("File size")}</span>
              <div className="flex flex-wrap gap-1.5">
                {RANGES.map((r) => {
                  const active = r.min === minKb && r.max === maxKb;
                  return (
                    <button key={`${r.min}-${r.max}`} type="button" onClick={() => { setMinKb(r.min); setMaxKb(r.max); }}
                      className={`rounded-full border px-2.5 py-1 text-label-sm font-semibold tabular-nums transition-colors ${active ? "border-secondary bg-secondary/10 text-secondary" : "border-outline-variant/60 text-on-surface-variant hover:border-secondary hover:text-secondary"}`}>
                      {rangeLabel(r)}
                    </button>
                  );
                })}
              </div>
              <div className="flex items-center gap-2">
                <input type="number" min={0} value={minKb || ""} placeholder="—" onChange={(e) => setMinKb(Math.max(0, parseFloat(e.target.value) || 0))} aria-label={t("Minimum (KB)")} className={`${fieldCls.replace("w-full", "w-20")} tabular-nums`} />
                <span className="text-on-surface-variant">–</span>
                <input type="number" min={0} value={maxKb || ""} placeholder="—" onChange={(e) => setMaxKb(Math.max(0, parseFloat(e.target.value) || 0))} aria-label={t("Maximum (KB)")} className={`${fieldCls.replace("w-full", "w-20")} tabular-nums`} />
                <span className="text-body-md text-on-surface-variant">{t("KB")}</span>
              </div>
            </div>
            <label className="flex items-center gap-2.5 cursor-pointer">
              <input type="checkbox" checked={trim} onChange={(e) => setTrim(e.target.checked)} className="w-4 h-4 accent-secondary" />
              <span className="text-body-md text-on-surface">{t("Trim empty space")}</span>
            </label>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2.5 cursor-pointer">
                <input type="checkbox" checked={clean} onChange={(e) => setClean(e.target.checked)} className="w-4 h-4 accent-secondary" />
                <span className="text-body-md text-on-surface">{t("Clean the background")}</span>
              </label>
              <p className="text-label-sm font-label-sm text-on-surface-variant/70">
                {t("Makes the paper pure white and the ink solid, even in uneven light.")}
              </p>
              {clean && (
                <>
                  <div className="flex flex-col gap-1">
                    <span className="text-label-sm font-label-sm text-on-surface-variant">{t("Cleaning strength")}</span>
                    <input type="range" min={0} max={1} step={0.05} value={strength} onChange={(e) => setStrength(parseFloat(e.target.value))} className="w-full accent-secondary" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-label-sm font-label-sm text-on-surface-variant">{t("Ink colour")}</span>
                    <div role="radiogroup" aria-label={t("Ink colour")} className="grid grid-cols-3 gap-1 rounded-lg bg-surface-container p-1">
                      {INKS.map((i) => (
                        <button key={i.id} type="button" role="radio" aria-checked={ink === i.id} onClick={() => setInk(i.id)} className={segBtn(ink === i.id)}>
                          {t(i.label)}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </SettingsRail>
        }
      />
    </>
  );
}

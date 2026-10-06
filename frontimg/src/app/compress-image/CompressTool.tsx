"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { BackgroundPicker, resolveBg, type BgValue } from "@/components/BackgroundPicker";
import { ToolWorkspace, filesHeader } from "@/components/tool/ToolWorkspace";
import { FileTray, TrayAction, TrayBusy, type TrayEntry } from "@/components/tool/FileTray";
import { SettingsRail, RailAction, RailNote } from "@/components/tool/SettingsRail";
import { ResultScreen } from "@/components/ResultScreen";
import { serverCanDecode, shouldUseServer, shouldUseServerForFile, toServerFormat, processOnServer } from "@/lib/process-router";
import {
  rasterize,
  rasterizeToCanvas,
  imageSize,
  downloadBlob,
  baseName,
  mimeExt,
  type ExportMime,
} from "@/lib/image/raster";
import { compressPngCanvas, pngColorsForQuality } from "@/lib/image/png-compress";
import { compressToSize, growToSize, limitBytes, minimumBytes } from "@/lib/image/compress-to-size";
import { useHandoff } from "@/lib/tool-handoff";
import { useFormatBytes, useT } from "@/i18n/I18nScope";
import { translateError } from "@/i18n/errors";

const ACCENT = "#4F9D69";
const ACCEPT = "image/jpeg,image/png,image/webp";

type Format = "original" | ExportMime;
/**
 * What actually happened to a file. "kept-original" means every encoding we
 * tried came out bigger, so the user gets their own bytes back untouched —
 * a compressor that hands back a larger file has failed at its one job.
 */
type Outcome = "smaller" | "kept-original" | "no-gain" | "missed-target" | "grown" | "missed-min";
type Item = {
  id: string;
  file: File;
  url: string;
  w?: number;
  h?: number;
  processing?: boolean;
  result?: {
    blob: Blob;
    size: number;
    name: string;
    outcome: Outcome;
    colors?: number;
    /** Set when target-size mode had to reduce the pixel dimensions. */
    resizedTo?: { w: number; h: number };
    /** Set when increase mode had to enlarge the pixel dimensions. */
    enlargedTo?: { w: number; h: number };
    /** Set when increase mode padded the file to reach the minimum. */
    padded?: boolean;
  };
};

/**
 * Settings a variant page opens with (lib/tools.ts `preset`, copied verbatim
 * into the generated route). Without one the tool behaves exactly as on
 * /compress-image: quality mode, nothing pre-set.
 */
export interface CompressPreset {
  /** Open in target-size mode with this limit, in decimal KB (1000 = 1 MB). */
  targetKb?: number;
  /**
   * "target": target-size mode with the limit left for the visitor to set.
   * "increase": the increase-image-size-in-kb page — grow files to a MINIMUM
   * size (growToSize). Only reachable through that preset; /compress-image
   * itself never shows it.
   */
  mode?: "target" | "increase";
}

type Mode = "quality" | "target" | "increase";
type SizeUnit = "KB" | "MB";
type TargetMime = "image/jpeg" | "image/webp";

/** Quick picks in target mode — the limits upload forms actually use. */
const TARGET_CHIPS: { value: number; unit: SizeUnit }[] = [
  { value: 20, unit: "KB" },
  { value: 50, unit: "KB" },
  { value: 100, unit: "KB" },
  { value: 200, unit: "KB" },
  { value: 500, unit: "KB" },
  { value: 1, unit: "MB" },
];

/** Quick picks for the minimum in increase mode — the "at least" figures forms use. */
const MIN_CHIPS: { value: number; unit: SizeUnit }[] = [
  { value: 10, unit: "KB" },
  { value: 20, unit: "KB" },
  { value: 50, unit: "KB" },
  { value: 100, unit: "KB" },
  { value: 200, unit: "KB" },
];

/** A preset's KB figure as the value/unit pair the inputs show. */
function presetTarget(kb: number | undefined): { value: number; unit: SizeUnit } {
  if (!kb) return { value: 100, unit: "KB" };
  return kb >= 1000 && kb % 1000 === 0 ? { value: kb / 1000, unit: "MB" } : { value: kb, unit: "KB" };
}

// Labels translated at the render site (§4.2); keys in compress-image.<loc>.ts.
const FORMATS: { label: string; value: Format }[] = [
  { label: "Same as original", value: "original" },
  { label: "JPG", value: "image/jpeg" },
  { label: "WEBP (smallest)", value: "image/webp" },
  { label: "PNG", value: "image/png" },
];

let counter = 0;
const uid = () => `f${Date.now()}_${counter++}`;

function outMimeFor(file: File, fmt: Format): ExportMime {
  if (fmt !== "original") return fmt;
  const t = file.type;
  return t === "image/jpeg" || t === "image/webp" || t === "image/png" ? (t as ExportMime) : "image/png";
}

export function CompressTool({ preset }: { preset?: CompressPreset } = {}) {
  const t = useT();
  const formatBytes = useFormatBytes();
  const [items, setItems] = useState<Item[]>([]);
  const [format, setFormat] = useState<Format>("original");
  const [quality, setQuality] = useState(0.7);
  const [bg, setBg] = useState<BgValue>({ transparent: false, color: "#ffffff" });
  const [shrink, setShrink] = useState(false);
  const [maxDim, setMaxDim] = useState(2000);
  const [isWorking, setIsWorking] = useState(false);
  const [done, setDone] = useState(false);

  // Target-size mode ("compress to 50 KB"). See lib/image/compress-to-size.ts.
  const presetMode: Mode =
    preset?.mode === "increase" ? "increase" : preset?.targetKb || preset?.mode === "target" ? "target" : "quality";
  const initialTarget = presetTarget(preset?.targetKb);
  const [mode, setMode] = useState<Mode>(presetMode);
  const [targetValue, setTargetValue] = useState<number>(initialTarget.value);
  const [targetUnit, setTargetUnit] = useState<SizeUnit>(initialTarget.unit);
  const [targetMime, setTargetMime] = useState<TargetMime>("image/jpeg");
  const targetBytes = limitBytes(targetValue, targetUnit);
  /** "50 KB" in the page's language (the unit is translated: «50 КБ»). */
  const sizeLabel = (value: number, unit: SizeUnit) => `${value} ${t(unit)}`;
  const targetLabel = sizeLabel(targetValue, targetUnit);

  // Increase mode ("make this photo at least 20 KB"). See growToSize().
  const [minValue, setMinValue] = useState<number>(20);
  const [minUnit, setMinUnit] = useState<SizeUnit>("KB");
  /** Optional ceiling; NaN when the box is empty. */
  const [maxValue, setMaxValue] = useState<number>(NaN);
  const [maxUnit, setMaxUnit] = useState<SizeUnit>("KB");
  // A minimum counts 1 KB as 1,024 bytes so it holds whichever way a form counts.
  const minBytes = minimumBytes(minValue, minUnit);
  const maxBytes = Number.isFinite(maxValue) && maxValue > 0 ? limitBytes(maxValue, maxUnit) : undefined;
  const minLabel = sizeLabel(minValue, minUnit);

  useEffect(() => () => { items.forEach((i) => URL.revokeObjectURL(i.url)); }, [items]);

  const addFiles = useCallback((incoming: FileList | File[]) => {
    const imgs = Array.from(incoming).filter((f) => f.type.startsWith("image/"));
    if (imgs.length === 0) { toast.error(t("Please select image files.")); return; }
    setDone(false);
    const next = imgs.map((file) => ({ id: uid(), file, url: URL.createObjectURL(file) }));
    setItems((prev) => [...prev, ...next]);
    next.forEach(async (it) => {
      try {
        const { w, h } = await imageSize(it.file);
        setItems((prev) => prev.map((p) => (p.id === it.id ? { ...p, w, h } : p)));
      } catch { /* ignore unreadable */ }
    });
  }, [t]);

  useHandoff(addFiles);

  const removeItem = (id: string) =>
    setItems((prev) => { const it = prev.find((p) => p.id === id); if (it) URL.revokeObjectURL(it.url); return prev.filter((p) => p.id !== id); });
  const reset = () => { items.forEach((i) => URL.revokeObjectURL(i.url)); setItems([]); setDone(false); };

  const targets = useMemo(
    () => new Set(items.map((it) => outMimeFor(it.file, format))),
    [items, format]
  );
  const hasPngTarget = targets.has("image/png");
  const hasLossyTarget = targets.size > (hasPngTarget ? 1 : 0);
  const showBg = items.some((it) => outMimeFor(it.file, format) === "image/jpeg");
  const pngColors = pngColorsForQuality(quality);

  /**
   * Target-size mode: every image comes back under `targetBytes`, at the
   * highest quality (and, only if needed, the largest dimensions) that fits.
   * A file that is already under the limit in the chosen format is handed back
   * untouched — re-encoding it could only lose quality.
   */
  const compressAllToTarget = async () => {
    if (!(targetBytes > 0)) { toast.error(t("Enter a target size greater than zero.")); return; }
    setIsWorking(true);
    setDone(false);
    let processed = 0;
    try {
      for (const it of items) {
        await new Promise((r) => setTimeout(r, 0));
        setItems((prev) => prev.map((p) => (p.id === it.id ? { ...p, processing: true } : p)));

        let result: NonNullable<Item["result"]>;
        if (it.file.type === targetMime && it.file.size <= targetBytes) {
          result = { blob: it.file, size: it.file.size, name: it.file.name, outcome: "kept-original" };
        } else {
          const r = await compressToSize(it.file, {
            maxBytes: targetBytes,
            mime: targetMime,
            background: targetMime === "image/jpeg" ? resolveBg(bg) ?? "#ffffff" : null,
          });
          const resized = r.downscaled;
          result = {
            blob: r.blob,
            size: r.blob.size,
            name: `${baseName(it.file.name)}_${targetValue}${targetUnit.toLowerCase()}.${mimeExt(targetMime)}`,
            outcome: r.met ? "smaller" : "missed-target",
            resizedTo: resized ? { w: r.width, h: r.height } : undefined,
          };
        }
        processed++;
        setItems((prev) => prev.map((p) => (p.id === it.id ? { ...p, processing: false, result } : p)));
      }
      setDone(true);
      toast.success(processed === 1 ? t("Processed 1 image.") : t("Processed {n} images.", { n: processed }));
    } catch (err) {
      console.error(err);
      setItems((prev) => prev.map((p) => ({ ...p, processing: false })));
      toast.error(translateError(err, t, "Compression failed."));
    } finally {
      setIsWorking(false);
    }
  };

  /**
   * Increase mode: every image comes back AT LEAST `minBytes` (and under
   * `maxBytes` when one is set). A JPG already inside the range is handed back
   * untouched; anything else goes through growToSize — higher quality, then
   * more pixels, then, only if still short, padding the file.
   */
  const increaseAll = async () => {
    if (!(minBytes > 0)) { toast.error(t("Enter a minimum size greater than zero.")); return; }
    if (maxBytes !== undefined && maxBytes < minBytes) { toast.error(t("The maximum must be larger than the minimum.")); return; }
    setIsWorking(true);
    setDone(false);
    let processed = 0;
    try {
      for (const it of items) {
        await new Promise((r) => setTimeout(r, 0));
        setItems((prev) => prev.map((p) => (p.id === it.id ? { ...p, processing: true } : p)));

        let result: NonNullable<Item["result"]>;
        const inRange = it.file.size >= minBytes && (maxBytes === undefined || it.file.size <= maxBytes);
        if (it.file.type === "image/jpeg" && inRange) {
          result = { blob: it.file, size: it.file.size, name: it.file.name, outcome: "kept-original" };
        } else {
          const r = await growToSize(it.file, {
            minBytes,
            maxBytes,
            background: resolveBg(bg) ?? "#ffffff",
          });
          result = {
            blob: r.blob,
            size: r.blob.size,
            name: `${baseName(it.file.name)}_${minValue}${minUnit.toLowerCase()}.jpg`,
            outcome: r.met ? "grown" : "missed-min",
            enlargedTo: r.enlarged ? { w: r.width, h: r.height } : undefined,
            padded: r.padded || undefined,
          };
        }
        processed++;
        setItems((prev) => prev.map((p) => (p.id === it.id ? { ...p, processing: false, result } : p)));
      }
      setDone(true);
      toast.success(processed === 1 ? t("Processed 1 image.") : t("Processed {n} images.", { n: processed }));
    } catch (err) {
      console.error(err);
      setItems((prev) => prev.map((p) => ({ ...p, processing: false })));
      toast.error(translateError(err, t, "Processing failed."));
    } finally {
      setIsWorking(false);
    }
  };

  const compressAll = async () => {
    if (items.length === 0) return;
    if (mode === "increase") return increaseAll();
    if (mode === "target") return compressAllToTarget();
    setIsWorking(true);
    setDone(false);
    const queue = items;
    const finished: { name: string; blob: Blob }[] = [];
    try {
      const wantsShrink = shrink && maxDim > 0;
      // Handing back the input bytes is only honest when the output was meant to
      // be byte-comparable: same container, same pixels. An explicitly chosen
      // format must return our own encode, and a resize is a real transform.
      const canKeepOriginal = format === "original" && !wantsShrink;

      for (const it of queue) {
        // Yield so React can paint between files — the PNG path is CPU-heavy and
        // a long batch would otherwise freeze the tab from first file to last.
        await new Promise((r) => setTimeout(r, 0));
        setItems((prev) => prev.map((p) => (p.id === it.id ? { ...p, processing: true } : p)));

        const mime = outMimeFor(it.file, format);
        let resize: { width: number; height: number } | undefined;
        if (wantsShrink) {
          // Fall back to decoding when the eager imageSize() probe failed, so the
          // browser path shrinks exactly when the server path would.
          const dims = it.w && it.h ? { w: it.w, h: it.h } : await imageSize(it.file).catch(() => null);
          if (dims) {
            const longest = Math.max(dims.w, dims.h);
            if (longest > maxDim) {
              const s = maxDim / longest;
              resize = { width: Math.round(dims.w * s), height: Math.round(dims.h * s) };
            }
          }
        }

        let blob: Blob;
        let colors: number | undefined;
        // Route on decoded pixels, not bytes: a high-megapixel phone photo is
        // small on disk but past what a canvas can paint. Reuses the eager
        // dimensions when the queue item already has them. A BMP (not in
        // ACCEPT, but a drag-drop still lands here) never leaves the browser:
        // Sharp/libvips has no BMP loader. Canvas decodes BMP fine.
        const useServer = (await serverCanDecode(it.file)) && (it.w && it.h
          ? shouldUseServer(it.file.size, { width: it.w, height: it.h })
          : await shouldUseServerForFile(it.file));
        if (useServer) {
          // Too large for this browser's canvas, or over the byte cap → offload
          // to the shared oMyPDF backend (Sharp, /api/image/*).
          const r = await processOnServer("/api/image/compress", it.file, {
            format: toServerFormat(mime),
            quality,
            maxDimension: wantsShrink ? maxDim : undefined,
            background: mime === "image/jpeg" ? resolveBg(bg) ?? undefined : undefined,
            ...(mime === "image/png"
              ? { pngPalette: pngColors !== null, pngColors: pngColors ?? 256 }
              : {}),
          });
          blob = r.blob;
        } else if (mime === "image/png") {
          // PNG doesn't shrink by re-deflating the same pixels — it shrinks by
          // using fewer colours. See lib/image/png-compress.ts.
          const canvas = await rasterizeToCanvas(it.file, {
            mime,
            background: null,
            resize,
            autoOrient: true,
            readback: true,
          });
          const r = await compressPngCanvas(canvas, quality);
          blob = r.blob;
          colors = r.colors;
        } else {
          const r = await rasterize(it.file, { mime, quality, background: mime === "image/jpeg" ? resolveBg(bg) : null, resize, autoOrient: true });
          blob = r.blob;
        }

        let outcome: Outcome = "smaller";
        let name = `${baseName(it.file.name)}_compressed.${mimeExt(mime)}`;
        if (blob.size >= it.file.size) {
          if (canKeepOriginal) {
            blob = it.file;
            colors = undefined;
            outcome = "kept-original";
            name = it.file.name; // don't label untouched bytes "_compressed"
          } else {
            outcome = "no-gain";
          }
        }

        const result = { blob, size: blob.size, name, outcome, colors };
        finished.push({ name, blob });
        setItems((prev) =>
          prev.map((p) => (p.id === it.id ? { ...p, processing: false, result } : p))
        );
      }

      // The result screen owns the download now — see ResultScreen below.
      // Auto-firing a save-as here would land a file in Downloads before the
      // visitor ever sees the completion page, making the page redundant.
      setDone(true);
      toast.success(
        finished.length === 1
          ? t("Processed 1 image.")
          : t("Processed {n} images.", { n: finished.length }),
      );
    } catch (err) {
      console.error(err);
      setItems((prev) => prev.map((p) => ({ ...p, processing: false })));
      toast.error(translateError(err, t, "Compression failed."));
    } finally {
      setIsWorking(false);
    }
  };

  const totalIn = useMemo(() => items.reduce((s, i) => s + i.file.size, 0), [items]);
  const totalOut = useMemo(() => items.reduce((s, i) => s + (i.result?.size ?? 0), 0), [items]);
  const savedPct = totalIn > 0 && totalOut > 0 ? Math.round((1 - totalOut / totalIn) * 100) : 0;
  const keptCount = items.filter((i) => i.result?.outcome === "kept-original").length;
  const missedCount = items.filter((i) => i.result?.outcome === "missed-target").length;
  const missedMinCount = items.filter((i) => i.result?.outcome === "missed-min").length;

  const fieldCls = "w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";

  if (items.length === 0) {
    return (
      <section>
        <TopLoadingBar active={isWorking} />
        <Dropzone onFiles={addFiles} accept={ACCEPT} accent={ACCENT} icon="compress" hint={t("or drop JPG, PNG or WEBP images here")} />
        {presetMode === "target" && (
          <p className="mt-3 text-center text-body-sm text-on-surface-variant">
            {preset?.targetKb
              ? t("Every image will be compressed to under {size}.", { size: targetLabel })
              : t("Set any target size in KB or MB after adding your images.")}
          </p>
        )}
        {presetMode === "increase" && (
          <p className="mt-3 text-center text-body-sm text-on-surface-variant">
            {t("Set the minimum size in KB after adding your images.")}
          </p>
        )}
      </section>
    );
  }

  // Compression finished — hand off to the download page instead of the
  // workspace. This is also why `data-tool-active` (and with it the full-bleed
  // layout + reserved ad column) disappears here: neither ToolWorkspace nor
  // its marker span render past this point, so the page reverts to the normal
  // centred container with breadcrumbs and the h1 back.
  if (done) {
    const resultFiles = items
      .filter((it): it is Item & { result: NonNullable<Item["result"]> } => !!it.result)
      .map((it) => ({ blob: it.result.blob, name: it.result.name, originalSize: it.file.size }));
    return (
      <section className="max-w-content mx-auto w-full px-margin-mobile pt-stack-md md:px-gutter">
        <ResultScreen
          files={resultFiles}
          zipName={mode === "increase" ? "omyimage_larger.zip" : "omyimage_compressed.zip"}
          toolSlug="compress-image"
          onReset={reset}
          title={mode === "increase" ? t("Size increase complete!") : t("Compression complete!")}
          subtitle={
            mode === "increase"
              ? missedMinCount > 0
                ? t("Some images could not reach {size}.", { size: minLabel })
                : t("Every image is now at least {size}.", { size: minLabel })
              : mode === "target"
              ? missedCount > 0
                ? t("Some images could not get under {size}.", { size: targetLabel })
                : t("Every image is now under {size}.", { size: targetLabel })
              : savedPct > 0
              ? t("File size reduced by {pct}%", { pct: savedPct })
              : keptCount > 0
                ? keptCount === 1
                  ? t("Already optimised — kept your original file.")
                  : t("Already optimised — kept your original files.")
                : t("Already optimised. Try a lower quality, or WEBP, for a smaller file.")
          }
          resetLabel={mode === "increase" ? t("Increase more images") : t("Compress more images")}
        >
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-4 text-center">
              <p className="text-label-sm font-label-sm uppercase tracking-wider text-on-surface-variant">{t("Original")}</p>
              <p className="mt-1 text-title-lg font-bold text-primary tabular-nums">{formatBytes(totalIn)}</p>
            </div>
            <div className="rounded-xl border border-chip-teal-border bg-chip-teal-bg p-4 text-center">
              <p className="text-label-sm font-label-sm uppercase tracking-wider text-chip-teal-ink">{mode === "increase" ? t("New size") : t("Compressed")}</p>
              <p className="mt-1 text-title-lg font-bold text-primary tabular-nums">{formatBytes(totalOut)}</p>
            </div>
          </div>
        </ResultScreen>
      </section>
    );
  }

  const entries: TrayEntry[] = items.map((it) => {
    const r = it.result;
    const pct = r ? Math.round((1 - r.size / it.file.size) * 100) : null;
    return {
      id: it.id,
      name: it.file.name,
      url: it.url,
      meta: (
        <>
          {formatBytes(it.file.size)}
          {r && <><Icon name="arrow_forward" className="text-[13px] mx-1 align-middle" /><span className="text-on-surface font-semibold">{formatBytes(r.size)}</span></>}
          {r?.outcome === "smaller" && pct !== null && pct > 0 && <span className="ml-1.5 text-[11px] rounded px-1.5 py-0.5 font-semibold" style={{ backgroundColor: `${ACCENT}1A`, color: ACCENT }}>−{pct}%</span>}
          {r?.outcome === "kept-original" && (
            <span className="ml-1.5 text-[11px] rounded px-1.5 py-0.5 font-semibold bg-surface-container text-on-surface-variant">
              {mode === "increase"
                ? t("already at least {size} — kept original", { size: minLabel })
                : mode === "target"
                ? t("already under {size} — kept original", { size: targetLabel })
                : t("already optimised — kept original")}
            </span>
          )}
          {r?.outcome === "grown" && <span className="ml-1.5 text-[11px] rounded px-1.5 py-0.5 font-semibold" style={{ backgroundColor: `${ACCENT}1A`, color: ACCENT }}>+{Math.round((r.size / it.file.size - 1) * 100)}%</span>}
          {r?.outcome === "missed-min" && <span className="ml-1.5 text-[11px] rounded px-1.5 py-0.5 font-semibold bg-error-container text-error">{t("could not reach {size}", { size: minLabel })}</span>}
          {r?.enlargedTo && <span className="ml-1.5 text-[11px] text-on-surface-variant/70">{t("enlarged to {dims}", { dims: `${r.enlargedTo.w}×${r.enlargedTo.h}` })}</span>}
          {r?.padded && <span className="ml-1.5 text-[11px] text-on-surface-variant/70">{t("padded to reach the minimum")}</span>}
          {r?.outcome === "no-gain" && <span className="ml-1.5 text-[11px] rounded px-1.5 py-0.5 font-semibold bg-error-container text-error">{t("no smaller output")}</span>}
          {r?.outcome === "missed-target" && <span className="ml-1.5 text-[11px] rounded px-1.5 py-0.5 font-semibold bg-error-container text-error">{t("could not get under {size}", { size: targetLabel })}</span>}
          {r?.resizedTo && <span className="ml-1.5 text-[11px] text-on-surface-variant/70">{t("resized to {dims}", { dims: `${r.resizedTo.w}×${r.resizedTo.h}` })}</span>}
          {r?.colors && <span className="ml-1.5 text-[11px] text-on-surface-variant/70">{t("{n} colors", { n: r.colors })}</span>}
        </>
      ),
      action: it.processing ? (
        <TrayBusy />
      ) : r ? (
        <TrayAction icon="download" tone="accent" label={t("Download")} onClick={() => downloadBlob(r.blob, r.name)} />
      ) : (
        <TrayAction icon="close" label={t("Remove")} disabled={isWorking} onClick={() => removeItem(it.id)} />
      ),
    };
  });

  return (
    <>
      <TopLoadingBar active={isWorking} />
      <ToolWorkspace
        /*
          Below `md` this swaps the stacked grid for the full-screen app shell:
          the tray becomes the shell's body, the rail below moves into a sheet,
          and the Compress button becomes the bottom bar's CTA. Everything else
          on this component — state, handlers, the tray, the rail — is reused
          verbatim.
        */
        mobile={{
          ...filesHeader(items.map((i) => i.file)),
          onBack: reset,
          backLabel: t("Clear files"),
          settingsLabel: t("Settings"),
          settingsTitle: mode === "increase" ? t("Size settings") : t("Compression settings"),
          cta: {
            icon: mode === "increase" ? "upload_file" : "compress",
            label: mode === "increase" ? t("Increase") : t("Compress"),
            busyLabel: mode === "increase" ? t("Increasing…") : t("Compressing…"),
            busy: isWorking,
            onClick: compressAll,
          },
        }}
        main={<FileTray entries={entries} accept={ACCEPT} onFiles={addFiles} onClear={reset} busy={isWorking} />}
        rail={
          <SettingsRail
            title={mode === "increase" ? t("Size settings") : t("Compression Settings")}
            icon="compress"
            accent={ACCENT}
            footer={
              <>
                {/* `done` is always false here — the moment it flips true the
                    component returns the ResultScreen above instead of this
                    workspace, so there is no post-compression state to word
                    this note for. */}
                <RailNote>
                  {mode === "increase"
                    ? t("Quality is raised first, then the dimensions. If an image is still short, the file is padded with empty data — the picture itself does not change.")
                    : mode === "target"
                    ? t("Each image gets the highest quality that fits under the limit. If that is still too big, its dimensions are reduced as well.")
                    : t("WEBP usually gives the smallest files. Everything runs in your browser.")}
                </RailNote>
                {mode === "increase" ? (
                  <RailAction onClick={compressAll} busy={isWorking} busyLabel={t("Increasing…")} icon="upload_file">
                    {items.length > 1 ? t("Increase {n} images", { n: items.length }) : t("Increase & download")}
                  </RailAction>
                ) : (
                  <RailAction onClick={compressAll} busy={isWorking} busyLabel={t("Compressing…")} icon="compress">
                    {items.length > 1
                      ? t("Compress {n} images", { n: items.length })
                      : t("Compress & download")}
                  </RailAction>
                )}
              </>
            }
          >
          {mode === "increase" ? (
            <>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="increase-min" className="text-label-sm font-label-sm text-on-surface-variant">{t("Minimum size")}</label>
                <div className="flex gap-2">
                  <input
                    id="increase-min"
                    type="number"
                    inputMode="decimal"
                    min={1}
                    step="any"
                    value={Number.isFinite(minValue) ? minValue : ""}
                    onChange={(e) => setMinValue(parseFloat(e.target.value))}
                    className={`${fieldCls.replace("w-full", "min-w-0 flex-1")} tabular-nums`}
                  />
                  <select value={minUnit} onChange={(e) => setMinUnit(e.target.value as SizeUnit)} className={`${fieldCls.replace("w-full", "w-20")} shrink-0`} aria-label={t("Unit")}>
                    <option value="KB">{t("KB")}</option>
                    <option value="MB">{t("MB")}</option>
                  </select>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {MIN_CHIPS.map((c) => {
                    const active = c.value === minValue && c.unit === minUnit;
                    return (
                      <button
                        key={`${c.value}${c.unit}`}
                        type="button"
                        onClick={() => { setMinValue(c.value); setMinUnit(c.unit); }}
                        className={`rounded-full border px-2.5 py-1 text-label-sm font-semibold tabular-nums transition-colors ${active ? "border-secondary bg-secondary/10 text-secondary" : "border-outline-variant/60 text-on-surface-variant hover:border-secondary hover:text-secondary"}`}
                      >
                        {sizeLabel(c.value, c.unit)}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="increase-max" className="text-label-sm font-label-sm text-on-surface-variant">{t("Maximum size (optional)")}</label>
                <div className="flex gap-2">
                  <input
                    id="increase-max"
                    type="number"
                    inputMode="decimal"
                    min={1}
                    step="any"
                    placeholder="—"
                    value={Number.isFinite(maxValue) ? maxValue : ""}
                    onChange={(e) => setMaxValue(parseFloat(e.target.value))}
                    className={`${fieldCls.replace("w-full", "min-w-0 flex-1")} tabular-nums`}
                  />
                  <select value={maxUnit} onChange={(e) => setMaxUnit(e.target.value as SizeUnit)} className={`${fieldCls.replace("w-full", "w-20")} shrink-0`} aria-label={t("Unit")}>
                    <option value="KB">{t("KB")}</option>
                    <option value="MB">{t("MB")}</option>
                  </select>
                </div>
                <p className="text-label-sm font-label-sm text-on-surface-variant/70">
                  {t("For forms with a range such as 20–50 KB. The result is always a JPG.")}
                </p>
              </div>
              <BackgroundPicker value={bg} onChange={setBg} allowTransparent={false} label={t("JPG background")} />
            </>
          ) : (
          <>
          <div role="radiogroup" aria-label={t("Compression mode")} className="grid grid-cols-2 gap-1 rounded-lg bg-surface-container p-1">
            {(["quality", "target"] as const).map((m) => (
              <button
                key={m}
                type="button"
                role="radio"
                aria-checked={mode === m}
                onClick={() => setMode(m)}
                className={`rounded-md px-2 py-1.5 text-label-md font-semibold transition-colors ${mode === m ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant hover:text-primary"}`}
              >
                {m === "quality" ? t("By quality") : t("By file size")}
              </button>
            ))}
          </div>
          {mode === "target" ? (
            <>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="compress-target" className="text-label-sm font-label-sm text-on-surface-variant">{t("Target size")}</label>
                <div className="flex gap-2">
                  <input
                    id="compress-target"
                    type="number"
                    inputMode="decimal"
                    min={1}
                    step="any"
                    value={Number.isFinite(targetValue) ? targetValue : ""}
                    onChange={(e) => setTargetValue(parseFloat(e.target.value))}
                    className={`${fieldCls.replace("w-full", "min-w-0 flex-1")} tabular-nums`}
                  />
                  <select value={targetUnit} onChange={(e) => setTargetUnit(e.target.value as SizeUnit)} className={`${fieldCls.replace("w-full", "w-20")} shrink-0`} aria-label={t("Unit")}>
                    <option value="KB">{t("KB")}</option>
                    <option value="MB">{t("MB")}</option>
                  </select>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {TARGET_CHIPS.map((c) => {
                    const active = c.value === targetValue && c.unit === targetUnit;
                    return (
                      <button
                        key={`${c.value}${c.unit}`}
                        type="button"
                        onClick={() => { setTargetValue(c.value); setTargetUnit(c.unit); }}
                        className={`rounded-full border px-2.5 py-1 text-label-sm font-semibold tabular-nums transition-colors ${active ? "border-secondary bg-secondary/10 text-secondary" : "border-outline-variant/60 text-on-surface-variant hover:border-secondary hover:text-secondary"}`}
                      >
                        {sizeLabel(c.value, c.unit)}
                      </button>
                    );
                  })}
                </div>
                <p className="text-label-sm font-label-sm text-on-surface-variant/70">
                  {t("A KB here is 1,000 bytes, so the file passes forms that count a KB as 1,000 or as 1,024 bytes.")}
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-label-sm font-label-sm text-on-surface-variant">{t("Output format")}</label>
                <select value={targetMime} onChange={(e) => setTargetMime(e.target.value as TargetMime)} className={fieldCls}>
                  <option value="image/jpeg">{t("JPG (best for forms)")}</option>
                  <option value="image/webp">{t("WEBP (smallest)")}</option>
                </select>
              </div>
              {targetMime === "image/jpeg" && <BackgroundPicker value={bg} onChange={setBg} allowTransparent={false} label={t("JPG background")} />}
            </>
          ) : (
          <>
          <div className="flex flex-col gap-1.5">
            <label className="text-label-sm font-label-sm text-on-surface-variant">{t("Output format")}</label>
            <select value={format} onChange={(e) => setFormat(e.target.value as Format)} className={fieldCls}>
              {FORMATS.map((f) => <option key={f.value} value={f.value}>{t(f.label)}</option>)}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
              <span>{t("Quality")}</span>
              <span className="text-primary font-semibold">
                {Math.round(quality * 100)}%
                {hasPngTarget && pngColors !== null && <span className="text-on-surface-variant font-normal"> · {t("{n} colors", { n: pngColors })}</span>}
              </span>
            </label>
            <input type="range" min={0.3} max={1} step={0.01} value={quality} onChange={(e) => setQuality(parseFloat(e.target.value))} className="w-full accent-secondary" />
            <p className="text-label-sm font-label-sm text-on-surface-variant/70">
              {hasPngTarget && !hasLossyTarget
                ? t("PNG shrinks by reducing colors. 95%+ keeps it perfectly lossless.")
                : hasPngTarget
                  ? t("Lower quality = smaller file. PNGs shrink by reducing colors; 95%+ stays lossless.")
                  : t("Lower quality = smaller file. 60–80% is a great balance.")}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2.5 cursor-pointer">
              <input type="checkbox" checked={shrink} onChange={(e) => setShrink(e.target.checked)} className="w-4 h-4 accent-secondary" />
              <span className="text-body-md text-on-surface">{t("Shrink large images")}</span>
            </label>
            {/* The one setting people miss. Quality only changes how the SAME
                pixels are stored; this changes how many there are, which is
                usually where the weight actually is. */}
            <p className="text-label-sm font-label-sm text-on-surface-variant/70">
              {t("Also reduce the dimensions, not just the quality. A phone photo is around 4000px wide, while a web page or an email attachment rarely needs more than 2000 — and halving the width quarters the pixel count, which saves far more than quality alone.")}
            </p>
            {shrink && (
              <div className="flex items-center gap-2 pl-6">
                <span className="text-label-sm font-label-sm text-on-surface-variant">{t("Max width/height")}</span>
                <input type="number" min={100} max={20000} value={maxDim} onChange={(e) => setMaxDim(Math.max(100, parseInt(e.target.value || "0", 10)))} className="w-24 px-2 py-1.5 rounded-md bg-surface-container-lowest border border-surface-variant outline-none text-body-md text-primary" />
                <span className="text-label-sm font-label-sm text-on-surface-variant">px</span>
              </div>
            )}
          </div>
          {showBg && <BackgroundPicker value={bg} onChange={setBg} allowTransparent={false} label={t("JPG background")} />}
          </>
          )}
          </>
          )}
          </SettingsRail>
        }
      />
    </>
  );
}

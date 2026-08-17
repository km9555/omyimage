"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { BackgroundPicker, resolveBg, type BgValue } from "@/components/BackgroundPicker";
import { ToolWorkspace } from "@/components/tool/ToolWorkspace";
import { FileTray, TrayAction, TrayBusy, type TrayEntry } from "@/components/tool/FileTray";
import { SettingsRail, RailAction, RailNote } from "@/components/tool/SettingsRail";
import { ResultScreen } from "@/components/ResultScreen";
import { shouldUseServer, toServerFormat, processOnServer } from "@/lib/process-router";
import {
  rasterize,
  rasterizeToCanvas,
  imageSize,
  downloadBlob,
  formatBytes,
  baseName,
  mimeExt,
  type ExportMime,
} from "@/lib/image/raster";
import { compressPngCanvas, pngColorsForQuality } from "@/lib/image/png-compress";
import { useHandoff } from "@/lib/tool-handoff";

const ACCENT = "#4F9D69";
const ACCEPT = "image/jpeg,image/png,image/webp";

type Format = "original" | ExportMime;
/**
 * What actually happened to a file. "kept-original" means every encoding we
 * tried came out bigger, so the user gets their own bytes back untouched —
 * a compressor that hands back a larger file has failed at its one job.
 */
type Outcome = "smaller" | "kept-original" | "no-gain";
type Item = {
  id: string;
  file: File;
  url: string;
  w?: number;
  h?: number;
  processing?: boolean;
  result?: { blob: Blob; size: number; name: string; outcome: Outcome; colors?: number };
};

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

export function CompressTool() {
  const [items, setItems] = useState<Item[]>([]);
  const [format, setFormat] = useState<Format>("original");
  const [quality, setQuality] = useState(0.7);
  const [bg, setBg] = useState<BgValue>({ transparent: false, color: "#ffffff" });
  const [shrink, setShrink] = useState(false);
  const [maxDim, setMaxDim] = useState(2000);
  const [isWorking, setIsWorking] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => () => { items.forEach((i) => URL.revokeObjectURL(i.url)); }, [items]);

  const addFiles = useCallback((incoming: FileList | File[]) => {
    const imgs = Array.from(incoming).filter((f) => f.type.startsWith("image/"));
    if (imgs.length === 0) { toast.error("Please select image files."); return; }
    setDone(false);
    const next = imgs.map((file) => ({ id: uid(), file, url: URL.createObjectURL(file) }));
    setItems((prev) => [...prev, ...next]);
    next.forEach(async (it) => {
      try {
        const { w, h } = await imageSize(it.file);
        setItems((prev) => prev.map((p) => (p.id === it.id ? { ...p, w, h } : p)));
      } catch { /* ignore unreadable */ }
    });
  }, []);

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

  const compressAll = async () => {
    if (items.length === 0) return;
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
        if (shouldUseServer(it.file.size)) {
          // > 15 MB → offload to the shared oMyPDF backend (Sharp, /api/image/*).
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
      toast.success(`Processed ${finished.length} image${finished.length === 1 ? "" : "s"}.`);
    } catch (err) {
      console.error(err);
      setItems((prev) => prev.map((p) => ({ ...p, processing: false })));
      toast.error(err instanceof Error ? err.message : "Compression failed.");
    } finally {
      setIsWorking(false);
    }
  };

  const totalIn = useMemo(() => items.reduce((s, i) => s + i.file.size, 0), [items]);
  const totalOut = useMemo(() => items.reduce((s, i) => s + (i.result?.size ?? 0), 0), [items]);
  const savedPct = totalIn > 0 && totalOut > 0 ? Math.round((1 - totalOut / totalIn) * 100) : 0;
  const keptCount = items.filter((i) => i.result?.outcome === "kept-original").length;

  const fieldCls = "w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";

  if (items.length === 0) {
    return (
      <section>
        <TopLoadingBar active={isWorking} />
        <Dropzone onFiles={addFiles} accept={ACCEPT} accent={ACCENT} icon="compress" hint="or drop JPG, PNG or WEBP images here" />
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
          zipName="omyimage_compressed.zip"
          toolSlug="compress-image"
          onReset={reset}
          title="Compression complete!"
          subtitle={
            savedPct > 0
              ? `File size reduced by ${savedPct}%`
              : keptCount > 0
                ? `Already optimised — kept your original file${keptCount === 1 ? "" : "s"}.`
                : "Already optimised. Try a lower quality, or WEBP, for a smaller file."
          }
          resetLabel="Compress more images"
        >
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-4 text-center">
              <p className="text-label-sm font-label-sm uppercase tracking-wider text-on-surface-variant">Original</p>
              <p className="mt-1 text-title-lg font-bold text-primary tabular-nums">{formatBytes(totalIn)}</p>
            </div>
            <div className="rounded-xl border border-chip-teal-border bg-chip-teal-bg p-4 text-center">
              <p className="text-label-sm font-label-sm uppercase tracking-wider text-chip-teal-ink">Compressed</p>
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
          {r?.outcome === "kept-original" && <span className="ml-1.5 text-[11px] rounded px-1.5 py-0.5 font-semibold bg-surface-container text-on-surface-variant">already optimised — kept original</span>}
          {r?.outcome === "no-gain" && <span className="ml-1.5 text-[11px] rounded px-1.5 py-0.5 font-semibold bg-error-container text-error">no smaller output</span>}
          {r?.colors && <span className="ml-1.5 text-[11px] text-on-surface-variant/70">{r.colors} colors</span>}
        </>
      ),
      action: it.processing ? (
        <TrayBusy />
      ) : r ? (
        <TrayAction icon="download" tone="accent" label="Download" onClick={() => downloadBlob(r.blob, r.name)} />
      ) : (
        <TrayAction icon="close" label="Remove" disabled={isWorking} onClick={() => removeItem(it.id)} />
      ),
    };
  });

  return (
    <>
      <TopLoadingBar active={isWorking} />
      <ToolWorkspace
        main={<FileTray entries={entries} accept={ACCEPT} onFiles={addFiles} onClear={reset} busy={isWorking} />}
        rail={
          <SettingsRail
            title="Compression Settings"
            icon="compress"
            accent={ACCENT}
            footer={
              <>
                {/* `done` is always false here — the moment it flips true the
                    component returns the ResultScreen above instead of this
                    workspace, so there is no post-compression state to word
                    this note for. */}
                <RailNote>WEBP usually gives the smallest files. Everything runs in your browser.</RailNote>
                <RailAction onClick={compressAll} busy={isWorking} busyLabel="Compressing…" icon="compress">
                  Compress {items.length > 1 ? `${items.length} images` : "& download"}
                </RailAction>
              </>
            }
          >
          <div className="flex flex-col gap-1.5">
            <label className="text-label-sm font-label-sm text-on-surface-variant">Output format</label>
            <select value={format} onChange={(e) => setFormat(e.target.value as Format)} className={fieldCls}>
              {FORMATS.map((f) => <option key={f.value} value={f.value}>{f.label}</option>)}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
              <span>Quality</span>
              <span className="text-primary font-semibold">
                {Math.round(quality * 100)}%
                {hasPngTarget && pngColors !== null && <span className="text-on-surface-variant font-normal"> · {pngColors} colors</span>}
              </span>
            </label>
            <input type="range" min={0.3} max={1} step={0.01} value={quality} onChange={(e) => setQuality(parseFloat(e.target.value))} className="w-full accent-secondary" />
            <p className="text-label-sm font-label-sm text-on-surface-variant/70">
              {hasPngTarget && !hasLossyTarget
                ? "PNG shrinks by reducing colors. 95%+ keeps it perfectly lossless."
                : hasPngTarget
                  ? "Lower quality = smaller file. PNGs shrink by reducing colors; 95%+ stays lossless."
                  : "Lower quality = smaller file. 60–80% is a great balance."}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2.5 cursor-pointer">
              <input type="checkbox" checked={shrink} onChange={(e) => setShrink(e.target.checked)} className="w-4 h-4 accent-secondary" />
              <span className="text-body-md text-on-surface">Shrink large images</span>
            </label>
            {shrink && (
              <div className="flex items-center gap-2 pl-6">
                <span className="text-label-sm font-label-sm text-on-surface-variant">Max width/height</span>
                <input type="number" min={100} max={20000} value={maxDim} onChange={(e) => setMaxDim(Math.max(100, parseInt(e.target.value || "0", 10)))} className="w-24 px-2 py-1.5 rounded-md bg-surface-container-lowest border border-surface-variant outline-none text-body-md text-primary" />
                <span className="text-label-sm font-label-sm text-on-surface-variant">px</span>
              </div>
            )}
          </div>
          {showBg && <BackgroundPicker value={bg} onChange={setBg} allowTransparent={false} label="JPG background" />}
          </SettingsRail>
        }
      />
    </>
  );
}

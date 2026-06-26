"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { BackgroundPicker, resolveBg, type BgValue } from "@/components/BackgroundPicker";
import { shouldUseServer, toServerFormat, processOnServer } from "@/lib/process-router";
import {
  rasterize,
  imageSize,
  downloadBlob,
  zipAndDownload,
  formatBytes,
  baseName,
  mimeExt,
  type ExportMime,
} from "@/lib/image/raster";

const ACCENT = "#27AE60";
const ACCEPT = "image/jpeg,image/png,image/webp";

type Format = "original" | ExportMime;
type Item = { id: string; file: File; url: string; w?: number; h?: number; result?: { blob: Blob; size: number; name: string } };

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

  const removeItem = (id: string) =>
    setItems((prev) => { const it = prev.find((p) => p.id === id); if (it) URL.revokeObjectURL(it.url); return prev.filter((p) => p.id !== id); });
  const reset = () => { items.forEach((i) => URL.revokeObjectURL(i.url)); setItems([]); setDone(false); };

  const targetMimeSample = outMimeFor(items[0]?.file ?? new File([], "x.png", { type: "image/png" }), format);
  const showQuality = format !== "image/png" && targetMimeSample !== "image/png";
  const showBg = items.some((it) => outMimeFor(it.file, format) === "image/jpeg");

  const compressAll = async () => {
    if (items.length === 0) return;
    setIsWorking(true);
    try {
      const out: Item[] = [];
      for (const it of items) {
        const mime = outMimeFor(it.file, format);
        let resize: { width: number; height: number } | undefined;
        if (shrink && it.w && it.h) {
          const longest = Math.max(it.w, it.h);
          if (longest > maxDim) {
            const s = maxDim / longest;
            resize = { width: Math.round(it.w * s), height: Math.round(it.h * s) };
          }
        }
        let blob: Blob;
        if (shouldUseServer(it.file.size)) {
          // > 15 MB → offload to the backimg server (Sharp).
          const r = await processOnServer("/api/compress", it.file, {
            format: toServerFormat(mime),
            quality,
            maxDimension: shrink ? maxDim : undefined,
            background: mime === "image/jpeg" ? resolveBg(bg) ?? undefined : undefined,
          });
          blob = r.blob;
        } else {
          const r = await rasterize(it.file, { mime, quality, background: mime === "image/jpeg" ? resolveBg(bg) : null, resize, autoOrient: true });
          blob = r.blob;
        }
        out.push({ ...it, result: { blob, size: blob.size, name: `${baseName(it.file.name)}_compressed.${mimeExt(mime)}` } });
      }
      setItems(out);
      setDone(true);
      if (out.length === 1 && out[0].result) downloadBlob(out[0].result.blob, out[0].result.name);
      else await zipAndDownload(out.map((o) => ({ name: o.result!.name, blob: o.result!.blob })), "omyimage_compressed.zip");
      toast.success(`Compressed ${out.length} image${out.length === 1 ? "" : "s"}.`);
    } catch (err) {
      console.error(err);
      toast.error(err instanceof Error ? err.message : "Compression failed.");
    } finally {
      setIsWorking(false);
    }
  };

  const totalIn = useMemo(() => items.reduce((s, i) => s + i.file.size, 0), [items]);
  const totalOut = useMemo(() => items.reduce((s, i) => s + (i.result?.size ?? 0), 0), [items]);
  const savedPct = totalIn > 0 && totalOut > 0 ? Math.max(0, Math.round((1 - totalOut / totalIn) * 100)) : 0;

  const fieldCls = "w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";

  if (items.length === 0) {
    return (
      <section>
        <TopLoadingBar active={isWorking} />
        <Dropzone onFiles={addFiles} accept={ACCEPT} accent={ACCENT} icon="compress" hint="or drop JPG, PNG or WEBP images here" />
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 items-start">
      <span data-tool-active hidden aria-hidden="true" />
      <TopLoadingBar active={isWorking} />

      <div className="flex flex-col gap-3 lg:sticky lg:top-24 lg:self-start">
        <div className="flex items-center justify-between">
          <h2 className="text-headline-md font-bold text-primary">{items.length} image{items.length === 1 ? "" : "s"}</h2>
          <button type="button" onClick={reset} className="inline-flex items-center gap-1.5 text-label-md font-medium text-on-surface-variant hover:text-error"><Icon name="delete_sweep" className="text-[18px]" /> Clear</button>
        </div>
        <ul className="flex flex-col gap-2 max-h-[24vh] overflow-y-auto pr-1">
          {items.map((it) => {
            const pct = it.result ? Math.round((1 - it.result.size / it.file.size) * 100) : null;
            return (
              <li key={it.id} className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-3 flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={it.url} alt="" className="w-12 h-12 rounded-lg object-cover bg-surface-container shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-body-md font-semibold text-primary">{it.file.name}</p>
                  <p className="text-label-sm font-label-sm text-on-surface-variant">
                    {formatBytes(it.file.size)}
                    {it.result && <><Icon name="arrow_forward" className="text-[13px] mx-1 align-middle" /><span className="text-on-surface font-semibold">{formatBytes(it.result.size)}</span></>}
                    {pct !== null && pct > 0 && <span className="ml-1.5 text-[11px] rounded px-1.5 py-0.5 font-semibold" style={{ backgroundColor: `${ACCENT}1A`, color: ACCENT }}>−{pct}%</span>}
                  </p>
                </div>
                {it.result ? (
                  <button type="button" onClick={() => downloadBlob(it.result!.blob, it.result!.name)} aria-label="Download" className="flex h-9 w-9 items-center justify-center rounded-lg text-secondary hover:bg-secondary/10 transition-colors"><Icon name="download" className="text-[20px]" /></button>
                ) : (
                  <button type="button" onClick={() => removeItem(it.id)} disabled={isWorking} aria-label="Remove" className="flex h-9 w-9 items-center justify-center rounded-lg text-on-surface-variant hover:bg-error-container hover:text-error transition-colors disabled:opacity-40"><Icon name="close" className="text-[20px]" /></button>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="lg:sticky lg:top-24 flex flex-col gap-4">
        <div className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-5 flex flex-col gap-4">
          <h2 className="text-headline-md font-bold text-primary">Compression</h2>
          <div className="flex flex-col gap-1.5">
            <label className="text-label-sm font-label-sm text-on-surface-variant">Output format</label>
            <select value={format} onChange={(e) => setFormat(e.target.value as Format)} className={fieldCls}>
              {FORMATS.map((f) => <option key={f.value} value={f.value}>{f.label}</option>)}
            </select>
          </div>
          {showQuality && (
            <div className="flex flex-col gap-1.5">
              <label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>Quality</span><span className="text-primary font-semibold">{Math.round(quality * 100)}%</span></label>
              <input type="range" min={0.3} max={1} step={0.01} value={quality} onChange={(e) => setQuality(parseFloat(e.target.value))} className="w-full accent-secondary" />
              <p className="text-label-sm font-label-sm text-on-surface-variant/70">Lower quality = smaller file. 60–80% is a great balance.</p>
            </div>
          )}
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
        </div>

        <button type="button" onClick={compressAll} disabled={isWorking} className="w-full inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-container text-on-secondary font-semibold py-3.5 rounded-lg transition-colors disabled:opacity-50">
          {isWorking ? (<><Icon name="progress_activity" className="animate-spin text-[20px]" /> Compressing…</>) : (<><Icon name="compress" fill className="text-[20px]" /> Compress {items.length > 1 ? `${items.length} images` : "& download"}</>)}
        </button>

        {done && items.length > 1 && (
          <button type="button" onClick={() => zipAndDownload(items.filter((i) => i.result).map((i) => ({ name: i.result!.name, blob: i.result!.blob })), "omyimage_compressed.zip")} className="w-full inline-flex items-center justify-center gap-2 border border-secondary text-secondary font-semibold py-2.5 rounded-lg hover:bg-secondary/10 transition-colors">
            <Icon name="folder_zip" className="text-[20px]" /> Download all (ZIP)
          </button>
        )}

        <div className="rounded-xl border border-outline-variant/40 bg-surface-bright p-4 flex items-start gap-2.5">
          <Icon name="lightbulb" className="text-[18px] mt-0.5" style={{ color: ACCENT }} />
          <p className="text-label-sm font-label-sm text-on-surface-variant">
            {done && savedPct > 0
              ? <><strong className="text-on-surface">Saved {savedPct}%</strong> — {formatBytes(totalIn)} → {formatBytes(totalOut)}. All local to your browser.</>
              : <><strong className="text-on-surface">Tip:</strong> WEBP usually gives the smallest files. Everything runs in your browser.</>}
          </p>
        </div>
      </div>
    </section>
  );
}

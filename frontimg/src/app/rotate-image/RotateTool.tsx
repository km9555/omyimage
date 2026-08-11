"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import {
  rasterize,
  downloadBlob,
  zipAndDownload,
  formatBytes,
  baseName,
  mimeExt,
  type ExportMime,
} from "@/lib/image/raster";
import { BackgroundPicker, resolveBg, type BgValue } from "@/components/BackgroundPicker";
import { shouldUseServer, toServerFormat, processOnServer } from "@/lib/process-router";
import { useHandoff } from "@/lib/tool-handoff";

const ACCENT = "#9B51E0";

type Item = { id: string; file: File; url: string; result?: { blob: Blob; size: number; name: string } };
type Format = "original" | ExportMime;

const FORMATS: { label: string; value: Format }[] = [
  { label: "Same as original", value: "original" },
  { label: "JPG", value: "image/jpeg" },
  { label: "PNG", value: "image/png" },
  { label: "WEBP", value: "image/webp" },
];

// Background swatches live in the shared <BackgroundPicker /> component.

let counter = 0;
const uid = () => `f${Date.now()}_${counter++}`;

function outMimeFor(file: File, fmt: Format): ExportMime {
  if (fmt !== "original") return fmt;
  const t = file.type;
  return t === "image/jpeg" || t === "image/webp" || t === "image/png" ? (t as ExportMime) : "image/png";
}

export function RotateTool() {
  const [items, setItems] = useState<Item[]>([]);
  const [angle, setAngle] = useState(0); // clockwise degrees, normalized 0..359
  const [flipH, setFlipH] = useState(false);
  const [flipV, setFlipV] = useState(false);
  const [format, setFormat] = useState<Format>("original");
  const [quality, setQuality] = useState(0.92);
  const [bg, setBg] = useState<BgValue>({ transparent: true, color: "#ffffff" });
  const [isWorking, setIsWorking] = useState(false);
  const [done, setDone] = useState(false);
  const [isDropping, setIsDropping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => () => { items.forEach((i) => URL.revokeObjectURL(i.url)); }, [items]);

  const addFiles = useCallback((incoming: FileList | File[]) => {
    const imgs = Array.from(incoming).filter((f) => f.type.startsWith("image/"));
    if (imgs.length === 0) { toast.error("Please select image files."); return; }
    setDone(false);
    setItems((prev) => [...prev, ...imgs.map((file) => ({ id: uid(), file, url: URL.createObjectURL(file) }))]);
  }, []);

  useHandoff(addFiles);

  const removeItem = (id: string) =>
    setItems((prev) => {
      const it = prev.find((p) => p.id === id);
      if (it) URL.revokeObjectURL(it.url);
      return prev.filter((p) => p.id !== id);
    });

  const reset = () => { items.forEach((i) => URL.revokeObjectURL(i.url)); setItems([]); setDone(false); };
  const resetTransform = () => { setAngle(0); setFlipH(false); setFlipV(false); };

  const rotateBy = (delta: number) => setAngle((a) => (((a + delta) % 360) + 360) % 360);

  const background = resolveBg(bg);
  const showQuality = useMemo(
    () => items.some((it) => { const m = outMimeFor(it.file, format); return m === "image/jpeg" || m === "image/webp"; }),
    [items, format]
  );

  const apply = async () => {
    if (items.length === 0) return;
    setIsWorking(true);
    try {
      const out: Item[] = [];
      for (const it of items) {
        const mime = outMimeFor(it.file, format);
        let blob: Blob;
        if (shouldUseServer(it.file.size)) {
          // > 15 MB → offload to the shared oMyPDF backend (Sharp, /api/image/*).
          const r = await processOnServer("/api/image/rotate", it.file, {
            angle, flipH, flipV, format: toServerFormat(mime), quality,
            background: background ?? undefined,
          });
          blob = r.blob;
        } else {
          const r = await rasterize(it.file, { mime, quality, background, rotate: angle, flipH, flipV, autoOrient: false });
          blob = r.blob;
        }
        out.push({ ...it, result: { blob, size: blob.size, name: `${baseName(it.file.name)}_rotated.${mimeExt(mime)}` } });
      }
      setItems(out);
      setDone(true);
      if (out.length === 1 && out[0].result) downloadBlob(out[0].result.blob, out[0].result.name);
      else await zipAndDownload(out.map((o) => ({ name: o.result!.name, blob: o.result!.blob })), "omyimage_rotated.zip");
      toast.success(`Rotated ${out.length} image${out.length === 1 ? "" : "s"}.`);
    } catch (err) {
      console.error(err);
      toast.error(err instanceof Error ? err.message : "Rotation failed.");
    } finally {
      setIsWorking(false);
    }
  };

  useEffect(() => {
    document.body.classList.toggle("tool-active", items.length > 0);
    return () => document.body.classList.remove("tool-active");
  }, [items.length]);

  const openPicker = () => inputRef.current?.click();
  const fieldCls =
    "w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";

  const fileInput = (
    <input ref={inputRef} type="file" accept="image/*" multiple className="hidden"
      onChange={(e) => { if (e.target.files) addFiles(e.target.files); e.target.value = ""; }} />
  );

  // ── Empty ───────────────────────────────────────────────────────────────
  if (items.length === 0) {
    return (
      <section>
        <TopLoadingBar active={isWorking} />
        {fileInput}
        <div
          onClick={openPicker}
          onDragOver={(e) => { e.preventDefault(); setIsDropping(true); }}
          onDragLeave={() => setIsDropping(false)}
          onDrop={(e) => { e.preventDefault(); setIsDropping(false); addFiles(e.dataTransfer.files); }}
          className={`relative w-full rounded-xl border-2 border-dashed py-14 px-6 flex flex-col items-center justify-center gap-3 bg-surface-container-lowest ambient-shadow cursor-pointer transition-all ${
            isDropping ? "drag-active" : "border-outline-variant hover:border-secondary/50"
          }`}
        >
          <div className="hidden sm:flex w-11 h-11 bg-surface-container rounded-full items-center justify-center">
            <Icon name="rotate_90_degrees_cw" fill className="text-[22px]" style={{ color: ACCENT }} />
          </div>
          <div className="flex flex-col items-center gap-1 text-center">
            <span className="bg-secondary hover:bg-secondary-container text-on-secondary text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors">Select images</span>
            <p className="text-body-md text-on-surface-variant mt-2">or drop JPG, PNG, WEBP or GIF images here</p>
          </div>
          <p className="text-label-sm font-label-sm text-on-surface-variant/70 mt-1 flex items-center gap-1.5">
            <Icon name="lock" className="text-[14px]" /> Rotated in your browser — your images never leave your device.
          </p>
        </div>
      </section>
    );
  }

  const preview = items[0];
  const previewTransform = `rotate(${angle}deg) scale(${flipH ? -1 : 1}, ${flipV ? -1 : 1})`;
  const swap = angle % 180 !== 0; // 90/270 → preview box uses rotated footprint

  // ── Loaded ──────────────────────────────────────────────────────────────
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 items-start">
      <span data-tool-active hidden aria-hidden="true" />
      <TopLoadingBar active={isWorking} />
      {fileInput}

      {/* Preview + files — pinned so they stay visible while scrolling the options */}
      <div className="flex flex-col gap-4 lg:sticky lg:top-24 lg:self-start">
        {/* Live preview */}
        <div className="bg-surface-container rounded-xl border border-surface-variant p-4 flex items-center justify-center overflow-hidden" style={{ minHeight: 220 }}>
          <div className="flex items-center justify-center" style={{ width: "100%", height: swap ? "44vw" : "auto", maxHeight: "44vh" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={preview.url}
              alt="Rotation preview"
              draggable={false}
              className="max-w-full max-h-[42vh] object-contain rounded transition-transform duration-200"
              style={{ transform: previewTransform }}
            />
          </div>
        </div>
        <p className="text-center text-label-sm font-label-sm text-on-surface-variant">
          Preview of <span className="font-semibold text-on-surface">{preview.file.name}</span>
          {items.length > 1 && <> — the same transform applies to all {items.length} images.</>}
        </p>

        {/* Files */}
        <div className="flex items-center justify-between">
          <h2 className="text-headline-md font-bold text-primary">{items.length} image{items.length === 1 ? "" : "s"}</h2>
          <div className="flex items-center gap-2">
            <button type="button" onClick={openPicker} className="inline-flex items-center gap-1.5 text-label-md font-semibold text-secondary hover:underline"><Icon name="add" className="text-[18px]" /> Add more</button>
            <button type="button" onClick={reset} className="inline-flex items-center gap-1.5 text-label-md font-medium text-on-surface-variant hover:text-error"><Icon name="delete_sweep" className="text-[18px]" /> Clear</button>
          </div>
        </div>
        <ul className="flex flex-col gap-2 max-h-[20vh] overflow-y-auto pr-1">
          {items.map((it) => (
            <li key={it.id} className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-3 flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={it.url} alt="" className="w-12 h-12 rounded-lg object-cover bg-surface-container shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-body-md font-semibold text-primary">{it.file.name}</p>
                <p className="text-label-sm font-label-sm text-on-surface-variant">
                  {formatBytes(it.file.size)}
                  {it.result && <><Icon name="arrow_forward" className="text-[13px] mx-1 align-middle" /><span className="text-on-surface font-semibold">{formatBytes(it.result.size)}</span></>}
                </p>
              </div>
              {it.result ? (
                <button type="button" onClick={() => downloadBlob(it.result!.blob, it.result!.name)} aria-label="Download" className="flex h-9 w-9 items-center justify-center rounded-lg text-secondary hover:bg-secondary/10 transition-colors"><Icon name="download" className="text-[20px]" /></button>
              ) : (
                <button type="button" onClick={() => removeItem(it.id)} disabled={isWorking} aria-label="Remove" className="flex h-9 w-9 items-center justify-center rounded-lg text-on-surface-variant hover:bg-error-container hover:text-error transition-colors disabled:opacity-40"><Icon name="close" className="text-[20px]" /></button>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Controls + action */}
      <div className="lg:sticky lg:top-24 flex flex-col gap-4">
        {/* Transform */}
        <div className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-5 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-headline-md font-bold text-primary">Transform</h2>
            <button type="button" onClick={resetTransform} className="text-label-sm font-label-sm font-semibold text-secondary hover:underline">Reset</button>
          </div>

          <div className="grid grid-cols-4 gap-1.5">
            <button type="button" onClick={() => rotateBy(-90)} className="flex flex-col items-center gap-1 rounded-lg border border-surface-variant py-2 text-on-surface-variant hover:text-primary hover:border-secondary/40 transition-colors" aria-label="Rotate left">
              <Icon name="rotate_left" className="text-[20px]" /><span className="text-[11px]">-90°</span>
            </button>
            <button type="button" onClick={() => rotateBy(90)} className="flex flex-col items-center gap-1 rounded-lg border border-surface-variant py-2 text-on-surface-variant hover:text-primary hover:border-secondary/40 transition-colors" aria-label="Rotate right">
              <Icon name="rotate_right" className="text-[20px]" /><span className="text-[11px]">+90°</span>
            </button>
            <button type="button" onClick={() => setFlipH((v) => !v)} className={`flex flex-col items-center gap-1 rounded-lg border py-2 transition-colors ${flipH ? "border-secondary text-primary bg-secondary/10" : "border-surface-variant text-on-surface-variant hover:text-primary"}`} aria-label="Flip horizontal">
              <Icon name="flip" className="text-[20px]" /><span className="text-[11px]">Flip H</span>
            </button>
            <button type="button" onClick={() => setFlipV((v) => !v)} className={`flex flex-col items-center gap-1 rounded-lg border py-2 transition-colors ${flipV ? "border-secondary text-primary bg-secondary/10" : "border-surface-variant text-on-surface-variant hover:text-primary"}`} aria-label="Flip vertical">
              <Icon name="flip" className="text-[20px] rotate-90" /><span className="text-[11px]">Flip V</span>
            </button>
          </div>

          {/* Fine angle */}
          <div className="flex flex-col gap-1.5">
            <label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
              <span>Angle</span>
              <span className="text-primary font-semibold">{angle}°</span>
            </label>
            <input type="range" min={0} max={359} step={1} value={angle} onChange={(e) => setAngle(parseInt(e.target.value, 10))} className="w-full accent-secondary" />
          </div>
        </div>

        {/* Output */}
        <div className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-5 flex flex-col gap-3">
          <h2 className="text-headline-md font-bold text-primary">Output</h2>
          <div className="flex flex-col gap-1.5">
            <label className="text-label-sm font-label-sm text-on-surface-variant">Format</label>
            <select value={format} onChange={(e) => setFormat(e.target.value as Format)} className={fieldCls}>
              {FORMATS.map((f) => <option key={f.value} value={f.value}>{f.label}</option>)}
            </select>
          </div>
          <BackgroundPicker value={bg} onChange={setBg} label="Background (for angled corners)" />
          {showQuality && (
            <div className="flex flex-col gap-1.5">
              <label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
                <span>Quality</span><span className="text-primary font-semibold">{Math.round(quality * 100)}%</span>
              </label>
              <input type="range" min={0.5} max={1} step={0.01} value={quality} onChange={(e) => setQuality(parseFloat(e.target.value))} className="w-full accent-secondary" />
            </div>
          )}
        </div>

        <button type="button" onClick={apply} disabled={isWorking}
          className="w-full inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-container text-on-secondary font-semibold py-3.5 rounded-lg transition-colors disabled:opacity-50">
          {isWorking ? (<><Icon name="progress_activity" className="animate-spin text-[20px]" /> Rotating…</>) : (<><Icon name="rotate_90_degrees_cw" fill className="text-[20px]" /> Rotate {items.length > 1 ? `${items.length} images` : "& download"}</>)}
        </button>

        {done && items.length > 1 && (
          <button type="button" onClick={() => zipAndDownload(items.filter((i) => i.result).map((i) => ({ name: i.result!.name, blob: i.result!.blob })), "omyimage_rotated.zip")}
            className="w-full inline-flex items-center justify-center gap-2 border border-secondary text-secondary font-semibold py-2.5 rounded-lg hover:bg-secondary/10 transition-colors">
            <Icon name="folder_zip" className="text-[20px]" /> Download all (ZIP)
          </button>
        )}

        <div className="rounded-xl border border-outline-variant/40 bg-surface-bright p-4 flex items-start gap-2.5">
          <Icon name="lightbulb" className="text-[18px] mt-0.5" style={{ color: ACCENT }} />
          <p className="text-label-sm font-label-sm text-on-surface-variant">
            <strong className="text-on-surface">Tip:</strong> use 90° steps for straightening, or the angle slider for a custom tilt. Everything runs in your browser.
          </p>
        </div>
      </div>
    </section>
  );
}

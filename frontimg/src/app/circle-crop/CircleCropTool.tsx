"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { BackgroundPicker, resolveBg, type BgValue } from "@/components/BackgroundPicker";
import {
  decodeBitmap, canvasToBlob, downloadBlob, zipAndDownload, formatBytes, baseName, mimeExt, type ExportMime,
} from "@/lib/image/raster";
import { useHandoff } from "@/lib/tool-handoff";

const ACCENT = "#06B6D4";
const ACCEPT = "image/jpeg,image/png,image/webp";

type Format = ExportMime;
type Item = { id: string; file: File; url: string; result?: { blob: Blob; size: number; name: string } };

const FORMATS: { label: string; value: Format }[] = [
  { label: "PNG (transparent)", value: "image/png" },
  { label: "WEBP (transparent)", value: "image/webp" },
  { label: "JPG", value: "image/jpeg" },
];

let counter = 0;
const uid = () => `f${Date.now()}_${counter++}`;

/** Center-crop the largest square, clip it to a circle, optionally stroke a ring. */
function paint(canvas: HTMLCanvasElement, bmp: ImageBitmap, ringPct: number, ringColor: string, bgFill: string | null) {
  const side = Math.min(bmp.width, bmp.height);
  const sx = (bmp.width - side) / 2, sy = (bmp.height - side) / 2;
  canvas.width = side; canvas.height = side;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.clearRect(0, 0, side, side);
  const r = side / 2;
  const ring = Math.round((r * ringPct) / 100);
  if (bgFill) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(r, r, r, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = bgFill;
    ctx.fill();
    ctx.restore();
  }
  ctx.save();
  ctx.beginPath();
  ctx.arc(r, r, Math.max(0, r - ring), 0, Math.PI * 2);
  ctx.closePath();
  ctx.clip();
  ctx.drawImage(bmp, sx, sy, side, side, 0, 0, side, side);
  ctx.restore();
  if (ring > 0) {
    ctx.beginPath();
    ctx.arc(r, r, r - ring / 2, 0, Math.PI * 2);
    ctx.lineWidth = ring;
    ctx.strokeStyle = ringColor;
    ctx.stroke();
  }
}

export function CircleCropTool() {
  const [items, setItems] = useState<Item[]>([]);
  const [ringPct, setRingPct] = useState(0);
  const [ringColor, setRingColor] = useState("#ffffff");
  const [bg, setBg] = useState<BgValue>({ transparent: true, color: "#ffffff" });
  const [format, setFormat] = useState<Format>("image/png");
  const [quality, setQuality] = useState(0.92);
  const [isWorking, setIsWorking] = useState(false);
  const [done, setDone] = useState(false);

  const previewRef = useRef<HTMLCanvasElement>(null);
  const firstBmp = useRef<ImageBitmap | null>(null);

  // JPG can't be transparent — force a background fill for the corners.
  const effMime: ExportMime = format;
  const bgFill = effMime === "image/jpeg" ? resolveBg(bg) ?? "#ffffff" : bg.transparent ? null : resolveBg(bg);

  useEffect(() => () => { items.forEach((i) => URL.revokeObjectURL(i.url)); }, [items]);

  const repaint = useCallback(() => {
    if (previewRef.current && firstBmp.current) paint(previewRef.current, firstBmp.current, ringPct, ringColor, bgFill);
  }, [ringPct, ringColor, bgFill]);

  useEffect(() => {
    let alive = true;
    if (items[0]) {
      decodeBitmap(items[0].file).then((b) => { if (alive) { firstBmp.current = b; repaint(); } }).catch(() => {});
    } else {
      firstBmp.current = null;
    }
    return () => { alive = false; };
  }, [items, repaint]);

  useEffect(() => { repaint(); }, [repaint]);

  const addFiles = useCallback((incoming: FileList | File[]) => {
    const imgs = Array.from(incoming).filter((f) => f.type.startsWith("image/"));
    if (imgs.length === 0) { toast.error("Please select image files."); return; }
    setDone(false);
    setItems((prev) => [...prev, ...imgs.map((file) => ({ id: uid(), file, url: URL.createObjectURL(file) }))]);
  }, []);

  useHandoff(addFiles);

  const removeItem = (id: string) => setItems((prev) => { const it = prev.find((p) => p.id === id); if (it) URL.revokeObjectURL(it.url); return prev.filter((p) => p.id !== id); });
  const reset = () => { items.forEach((i) => URL.revokeObjectURL(i.url)); setItems([]); setDone(false); };

  const applyAll = async () => {
    if (items.length === 0) return;
    setIsWorking(true);
    try {
      const canvas = document.createElement("canvas");
      const out: Item[] = [];
      for (const it of items) {
        const bmp = await decodeBitmap(it.file);
        paint(canvas, bmp, ringPct, ringColor, bgFill);
        bmp.close();
        const blob = await canvasToBlob(canvas, effMime, quality);
        out.push({ ...it, result: { blob, size: blob.size, name: `${baseName(it.file.name)}_circle.${mimeExt(effMime)}` } });
      }
      setItems(out);
      setDone(true);
      if (out.length === 1 && out[0].result) downloadBlob(out[0].result.blob, out[0].result.name);
      else await zipAndDownload(out.map((o) => ({ name: o.result!.name, blob: o.result!.blob })), "omyimage_circle.zip");
      toast.success(`Circle-cropped ${out.length} image${out.length === 1 ? "" : "s"}.`);
    } catch (err) {
      console.error(err);
      toast.error(err instanceof Error ? err.message : "Circle crop failed.");
    } finally {
      setIsWorking(false);
    }
  };

  const fieldCls = "w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";
  const CHECKER: React.CSSProperties = {
    backgroundColor: "#fff",
    backgroundImage:
      "linear-gradient(45deg,#e2e8f0 25%,transparent 25%),linear-gradient(-45deg,#e2e8f0 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#e2e8f0 75%),linear-gradient(-45deg,transparent 75%,#e2e8f0 75%)",
    backgroundSize: "20px 20px",
    backgroundPosition: "0 0,0 10px,10px -10px,-10px 0",
  };

  if (items.length === 0) {
    return (
      <section>
        <TopLoadingBar active={isWorking} />
        <Dropzone onFiles={addFiles} accept={ACCEPT} accent={ACCENT} icon="panorama_fish_eye" hint="or drop JPG, PNG or WEBP images here" />
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 items-start">
      <span data-tool-active hidden aria-hidden="true" />
      <TopLoadingBar active={isWorking} />

      <div className="flex flex-col gap-3 lg:sticky lg:top-24 lg:self-start">
        <div className="rounded-xl border border-surface-variant p-4 flex items-center justify-center overflow-hidden" style={{ minHeight: 220, ...(bg.transparent && effMime !== "image/jpeg" ? CHECKER : { backgroundColor: "var(--color-surface-container)" }) }}>
          <canvas ref={previewRef} className="max-w-full max-h-[46vh] rounded-full" />
        </div>
        <p className="text-center text-label-sm font-label-sm text-on-surface-variant">
          Live preview of <span className="font-semibold text-on-surface">{items[0].file.name}</span>
          {items.length > 1 && <> — applied to all {items.length} images.</>}
        </p>

        <div className="flex items-center justify-between">
          <h2 className="text-headline-md font-bold text-primary">{items.length} image{items.length === 1 ? "" : "s"}</h2>
          <button type="button" onClick={reset} className="inline-flex items-center gap-1.5 text-label-md font-medium text-on-surface-variant hover:text-error"><Icon name="delete_sweep" className="text-[18px]" /> Clear</button>
        </div>
        <ul className="flex flex-col gap-2 max-h-[24vh] overflow-y-auto pr-1">
          {items.map((it) => (
            <li key={it.id} className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-3 flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={it.url} alt="" className="w-12 h-12 rounded-lg object-cover bg-surface-container shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-body-md font-semibold text-primary">{it.file.name}</p>
                <p className="text-label-sm font-label-sm text-on-surface-variant">{formatBytes(it.file.size)}{it.result && <><Icon name="check" className="text-[13px] mx-1 align-middle" style={{ color: ACCENT }} />done</>}</p>
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

      <div className="lg:sticky lg:top-24 flex flex-col gap-4">
        <div className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-5 flex flex-col gap-4">
          <h2 className="text-headline-md font-bold text-primary">Circle crop</h2>
          <BackgroundPicker value={bg} onChange={setBg} allowTransparent label="Background" />
          <div className="flex flex-col gap-1.5">
            <label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>Ring thickness</span><span className="text-primary font-semibold">{ringPct}%</span></label>
            <input type="range" min={0} max={15} step={1} value={ringPct} onChange={(e) => setRingPct(parseInt(e.target.value, 10))} className="w-full accent-secondary" />
          </div>
          {ringPct > 0 && <BackgroundPicker value={{ transparent: false, color: ringColor }} onChange={(v) => setRingColor(v.color)} allowTransparent={false} label="Ring color" />}
          <div className="flex flex-col gap-1.5">
            <label className="text-label-sm font-label-sm text-on-surface-variant">Output format</label>
            <select value={format} onChange={(e) => setFormat(e.target.value as Format)} className={fieldCls}>{FORMATS.map((f) => <option key={f.value} value={f.value}>{f.label}</option>)}</select>
          </div>
          {format !== "image/png" && (
            <div className="flex flex-col gap-1.5"><label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>Quality</span><span className="text-primary font-semibold">{Math.round(quality * 100)}%</span></label><input type="range" min={0.5} max={1} step={0.01} value={quality} onChange={(e) => setQuality(parseFloat(e.target.value))} className="w-full accent-secondary" /></div>
          )}
        </div>

        <button type="button" onClick={applyAll} disabled={isWorking} className="w-full inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-container text-on-secondary font-semibold py-3.5 rounded-lg transition-colors disabled:opacity-50">
          {isWorking ? (<><Icon name="progress_activity" className="animate-spin text-[20px]" /> Cropping…</>) : (<><Icon name="panorama_fish_eye" fill className="text-[20px]" /> Circle crop {items.length > 1 ? `${items.length}` : "& download"}</>)}
        </button>

        {done && items.length > 1 && (
          <button type="button" onClick={() => zipAndDownload(items.filter((i) => i.result).map((i) => ({ name: i.result!.name, blob: i.result!.blob })), "omyimage_circle.zip")} className="w-full inline-flex items-center justify-center gap-2 border border-secondary text-secondary font-semibold py-2.5 rounded-lg hover:bg-secondary/10 transition-colors">
            <Icon name="folder_zip" className="text-[20px]" /> Download all (ZIP)
          </button>
        )}
      </div>
    </section>
  );
}

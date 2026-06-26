"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { decodeBitmap, canvasToBlob, downloadBlob, baseName, mimeExt, type ExportMime } from "@/lib/image/raster";

const ACCENT = "#D4537E";
const ACCEPT = "image/jpeg,image/png,image/webp,image/gif,image/bmp";

interface Adj { brightness: number; contrast: number; saturate: number; grayscale: number; sepia: number; hue: number; blur: number }
const NEUTRAL: Adj = { brightness: 1, contrast: 1, saturate: 1, grayscale: 0, sepia: 0, hue: 0, blur: 0 };

const PRESETS: { name: string; adj: Adj }[] = [
  { name: "Original", adj: NEUTRAL },
  { name: "Vivid", adj: { ...NEUTRAL, brightness: 1.05, contrast: 1.1, saturate: 1.45 } },
  { name: "B&W", adj: { ...NEUTRAL, contrast: 1.05, grayscale: 1 } },
  { name: "Sepia", adj: { ...NEUTRAL, sepia: 0.75 } },
  { name: "Cool", adj: { ...NEUTRAL, contrast: 1.05, saturate: 1.1, hue: -12 } },
  { name: "Warm", adj: { ...NEUTRAL, brightness: 1.03, saturate: 1.15, sepia: 0.18, hue: 8 } },
];

const SLIDERS: { key: keyof Adj; label: string; min: number; max: number; step: number; fmt: (v: number) => string }[] = [
  { key: "brightness", label: "Brightness", min: 0.5, max: 1.5, step: 0.01, fmt: (v) => `${Math.round(v * 100)}%` },
  { key: "contrast", label: "Contrast", min: 0.5, max: 1.5, step: 0.01, fmt: (v) => `${Math.round(v * 100)}%` },
  { key: "saturate", label: "Saturation", min: 0, max: 2, step: 0.01, fmt: (v) => `${Math.round(v * 100)}%` },
  { key: "grayscale", label: "Grayscale", min: 0, max: 1, step: 0.01, fmt: (v) => `${Math.round(v * 100)}%` },
  { key: "sepia", label: "Sepia", min: 0, max: 1, step: 0.01, fmt: (v) => `${Math.round(v * 100)}%` },
  { key: "hue", label: "Hue", min: -180, max: 180, step: 1, fmt: (v) => `${v}°` },
  { key: "blur", label: "Blur", min: 0, max: 12, step: 0.5, fmt: (v) => `${v}px` },
];

function filterStr(a: Adj): string {
  return `brightness(${a.brightness}) contrast(${a.contrast}) saturate(${a.saturate}) grayscale(${a.grayscale}) sepia(${a.sepia}) hue-rotate(${a.hue}deg) blur(${a.blur}px)`;
}

function paintEdit(canvas: HTMLCanvasElement, bmp: ImageBitmap, a: Adj, rotate: number, flipH: boolean, flipV: boolean, bg: string | null) {
  const w = bmp.width, h = bmp.height;
  const deg = ((rotate % 360) + 360) % 360;
  const rad = (deg * Math.PI) / 180;
  const sin = Math.abs(Math.sin(rad)), cos = Math.abs(Math.cos(rad));
  const cw = Math.max(1, Math.round(w * cos + h * sin));
  const ch = Math.max(1, Math.round(w * sin + h * cos));
  canvas.width = cw; canvas.height = ch;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.filter = "none";
  if (bg) { ctx.fillStyle = bg; ctx.fillRect(0, 0, cw, ch); }
  ctx.filter = filterStr(a);
  ctx.translate(cw / 2, ch / 2);
  if (rad) ctx.rotate(rad);
  ctx.scale(flipH ? -1 : 1, flipV ? -1 : 1);
  ctx.drawImage(bmp, -w / 2, -h / 2, w, h);
  ctx.filter = "none";
}

export function PhotoEditorTool() {
  const [file, setFile] = useState<File | null>(null);
  const [adj, setAdj] = useState<Adj>(NEUTRAL);
  const [rotate, setRotate] = useState(0);
  const [flipH, setFlipH] = useState(false);
  const [flipV, setFlipV] = useState(false);
  const [format, setFormat] = useState<ExportMime>("image/jpeg");
  const [quality, setQuality] = useState(0.92);
  const [isWorking, setIsWorking] = useState(false);

  const previewRef = useRef<HTMLCanvasElement>(null);
  const bmpRef = useRef<ImageBitmap | null>(null);

  const repaint = useCallback(() => {
    if (previewRef.current && bmpRef.current) paintEdit(previewRef.current, bmpRef.current, adj, rotate, flipH, flipV, null);
  }, [adj, rotate, flipH, flipV]);

  useEffect(() => {
    let alive = true;
    if (file) decodeBitmap(file).then((b) => { if (alive) { bmpRef.current = b; repaint(); } }).catch(() => toast.error("Couldn't read that image."));
    else bmpRef.current = null;
    return () => { alive = false; };
  }, [file, repaint]);
  useEffect(() => { repaint(); }, [repaint]);

  const onFiles = useCallback((incoming: FileList | File[]) => {
    const f = Array.from(incoming).find((x) => x.type.startsWith("image/"));
    if (!f) { toast.error("Please select an image file."); return; }
    setFile(f);
  }, []);

  const resetAll = () => { setAdj(NEUTRAL); setRotate(0); setFlipH(false); setFlipV(false); };

  const exportImage = async () => {
    if (!file || !bmpRef.current) return;
    setIsWorking(true);
    try {
      const canvas = document.createElement("canvas");
      paintEdit(canvas, bmpRef.current, adj, rotate, flipH, flipV, format === "image/jpeg" ? "#ffffff" : null);
      const blob = await canvasToBlob(canvas, format, quality);
      downloadBlob(blob, `${baseName(file.name)}_edited.${mimeExt(format)}`);
      toast.success("Edited image exported.");
    } catch (err) {
      console.error(err);
      toast.error(err instanceof Error ? err.message : "Export failed.");
    } finally {
      setIsWorking(false);
    }
  };

  const fieldCls = "w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";
  const activePreset = PRESETS.find((p) => JSON.stringify(p.adj) === JSON.stringify(adj))?.name;

  useEffect(() => {
    document.body.classList.toggle("tool-active", !!file);
    return () => document.body.classList.remove("tool-active");
  }, [file]);

  if (!file) {
    return (
      <section>
        <TopLoadingBar active={isWorking} />
        <Dropzone onFiles={onFiles} accept={ACCEPT} accent={ACCENT} icon="tune" multiple={false} buttonLabel="Select an image" hint="or drop a JPG, PNG, WEBP or GIF here" />
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 items-start">
      <span data-tool-active hidden aria-hidden="true" />
      <TopLoadingBar active={isWorking} />

      <div className="flex flex-col gap-3 lg:sticky lg:top-24 lg:self-start">
        <div className="bg-surface-container rounded-xl border border-surface-variant p-4 flex items-center justify-center overflow-hidden" style={{ minHeight: 300 }}>
          <canvas ref={previewRef} className="max-w-full max-h-[calc(100vh-12rem)] rounded" />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-label-sm font-label-sm text-on-surface-variant truncate">{file.name}</p>
          <div className="flex items-center gap-3">
            <button type="button" onClick={resetAll} className="inline-flex items-center gap-1.5 text-label-md font-medium text-on-surface-variant hover:text-primary"><Icon name="restart_alt" className="text-[18px]" /> Reset</button>
            <button type="button" onClick={() => setFile(null)} className="inline-flex items-center gap-1.5 text-label-md font-medium text-on-surface-variant hover:text-error"><Icon name="close" className="text-[18px]" /> Change</button>
          </div>
        </div>
      </div>

      <div className="lg:sticky lg:top-24 flex flex-col gap-4">
        {/* Presets */}
        <div className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-5 flex flex-col gap-3">
          <h2 className="text-headline-md font-bold text-primary">Filters</h2>
          <div className="grid grid-cols-3 gap-1.5">
            {PRESETS.map((p) => (
              <button key={p.name} type="button" onClick={() => setAdj(p.adj)} className={`rounded-md px-2 py-1.5 text-label-sm font-label-sm font-semibold border transition-colors ${activePreset === p.name ? "border-secondary text-primary bg-secondary/10" : "border-surface-variant text-on-surface-variant hover:text-primary"}`}>{p.name}</button>
            ))}
          </div>
        </div>

        {/* Adjustments */}
        <div className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-5 flex flex-col gap-3">
          <h2 className="text-headline-md font-bold text-primary">Adjust</h2>
          {SLIDERS.map((s) => (
            <div key={s.key} className="flex flex-col gap-1">
              <label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>{s.label}</span><span className="text-primary font-semibold">{s.fmt(adj[s.key])}</span></label>
              <input type="range" min={s.min} max={s.max} step={s.step} value={adj[s.key]} onChange={(e) => setAdj((a) => ({ ...a, [s.key]: parseFloat(e.target.value) }))} className="w-full accent-secondary" />
            </div>
          ))}
        </div>

        {/* Transform */}
        <div className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-5 flex flex-col gap-3">
          <h2 className="text-headline-md font-bold text-primary">Transform</h2>
          <div className="grid grid-cols-4 gap-1.5">
            <button type="button" onClick={() => setRotate((r) => (r - 90 + 360) % 360)} aria-label="Rotate left" className="flex flex-col items-center gap-1 rounded-lg border border-surface-variant py-2 text-on-surface-variant hover:text-primary hover:border-secondary/40 transition-colors"><Icon name="rotate_left" className="text-[20px]" /><span className="text-[11px]">Left</span></button>
            <button type="button" onClick={() => setRotate((r) => (r + 90) % 360)} aria-label="Rotate right" className="flex flex-col items-center gap-1 rounded-lg border border-surface-variant py-2 text-on-surface-variant hover:text-primary hover:border-secondary/40 transition-colors"><Icon name="rotate_right" className="text-[20px]" /><span className="text-[11px]">Right</span></button>
            <button type="button" onClick={() => setFlipH((v) => !v)} aria-label="Flip horizontal" className={`flex flex-col items-center gap-1 rounded-lg border py-2 transition-colors ${flipH ? "border-secondary text-primary bg-secondary/10" : "border-surface-variant text-on-surface-variant hover:text-primary"}`}><Icon name="flip" className="text-[20px]" /><span className="text-[11px]">Flip H</span></button>
            <button type="button" onClick={() => setFlipV((v) => !v)} aria-label="Flip vertical" className={`flex flex-col items-center gap-1 rounded-lg border py-2 transition-colors ${flipV ? "border-secondary text-primary bg-secondary/10" : "border-surface-variant text-on-surface-variant hover:text-primary"}`}><Icon name="flip" className="text-[20px] rotate-90" /><span className="text-[11px]">Flip V</span></button>
          </div>
        </div>

        {/* Export */}
        <div className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-5 flex flex-col gap-3">
          <h2 className="text-headline-md font-bold text-primary">Export</h2>
          <select value={format} onChange={(e) => setFormat(e.target.value as ExportMime)} className={fieldCls}>
            <option value="image/jpeg">JPG</option>
            <option value="image/png">PNG</option>
            <option value="image/webp">WEBP</option>
          </select>
          {format !== "image/png" && (
            <div className="flex flex-col gap-1.5"><label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>Quality</span><span className="text-primary font-semibold">{Math.round(quality * 100)}%</span></label><input type="range" min={0.5} max={1} step={0.01} value={quality} onChange={(e) => setQuality(parseFloat(e.target.value))} className="w-full accent-secondary" /></div>
          )}
        </div>

        <button type="button" onClick={exportImage} disabled={isWorking} className="w-full inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-container text-on-secondary font-semibold py-3.5 rounded-lg transition-colors disabled:opacity-50">
          {isWorking ? (<><Icon name="progress_activity" className="animate-spin text-[20px]" /> Exporting…</>) : (<><Icon name="download" fill className="text-[20px]" /> Export image</>)}
        </button>
      </div>
    </section>
  );
}

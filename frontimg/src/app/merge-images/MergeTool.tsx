"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { BackgroundPicker, resolveBg, type BgValue } from "@/components/BackgroundPicker";
import {
  decodeBitmap, canvasToBlob, downloadBlob, formatBytes, mimeExt, type ExportMime,
} from "@/lib/image/raster";
import { useHandoff } from "@/lib/tool-handoff";

const ACCENT = "#C99B47";
const ACCEPT = "image/jpeg,image/png,image/webp";

type Layout = "horizontal" | "vertical" | "grid";
type Item = { id: string; file: File; url: string };

const FORMATS: { label: string; value: ExportMime }[] = [
  { label: "PNG", value: "image/png" },
  { label: "JPG", value: "image/jpeg" },
  { label: "WEBP", value: "image/webp" },
];

let counter = 0;
const uid = () => `f${Date.now()}_${counter++}`;

/** Compose the ordered bitmaps into one canvas. */
function compose(canvas: HTMLCanvasElement, bmps: ImageBitmap[], layout: Layout, gap: number, cols: number, bg: string | null) {
  if (bmps.length === 0) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const widths = bmps.map((b) => b.width);
  const heights = bmps.map((b) => b.height);

  if (layout === "horizontal") {
    const W = widths.reduce((a, b) => a + b, 0) + gap * (bmps.length - 1);
    const H = Math.max(...heights);
    canvas.width = W; canvas.height = H;
    if (bg) { ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H); } else ctx.clearRect(0, 0, W, H);
    let x = 0;
    bmps.forEach((b) => { ctx.drawImage(b, x, Math.round((H - b.height) / 2)); x += b.width + gap; });
    return;
  }
  if (layout === "vertical") {
    const W = Math.max(...widths);
    const H = heights.reduce((a, b) => a + b, 0) + gap * (bmps.length - 1);
    canvas.width = W; canvas.height = H;
    if (bg) { ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H); } else ctx.clearRect(0, 0, W, H);
    let y = 0;
    bmps.forEach((b) => { ctx.drawImage(b, Math.round((W - b.width) / 2), y); y += b.height + gap; });
    return;
  }
  // grid — uniform cells sized to the largest image
  const cellW = Math.max(...widths);
  const cellH = Math.max(...heights);
  const c = Math.max(1, cols);
  const rows = Math.ceil(bmps.length / c);
  const W = c * cellW + gap * (c - 1);
  const H = rows * cellH + gap * (rows - 1);
  canvas.width = W; canvas.height = H;
  if (bg) { ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H); } else ctx.clearRect(0, 0, W, H);
  bmps.forEach((b, i) => {
    const col = i % c, row = Math.floor(i / c);
    const cx = col * (cellW + gap) + Math.round((cellW - b.width) / 2);
    const cy = row * (cellH + gap) + Math.round((cellH - b.height) / 2);
    ctx.drawImage(b, cx, cy);
  });
}

export function MergeTool() {
  const [items, setItems] = useState<Item[]>([]);
  const [layout, setLayout] = useState<Layout>("horizontal");
  const [gap, setGap] = useState(0);
  const [cols, setCols] = useState(2);
  const [bg, setBg] = useState<BgValue>({ transparent: false, color: "#ffffff" });
  const [format, setFormat] = useState<ExportMime>("image/png");
  const [quality, setQuality] = useState(0.92);
  const [isWorking, setIsWorking] = useState(false);
  const [ready, setReady] = useState(0);

  const previewRef = useRef<HTMLCanvasElement>(null);
  const bmps = useRef<Map<string, ImageBitmap>>(new Map());

  const bgFill = format === "image/jpeg" ? resolveBg(bg) ?? "#ffffff" : bg.transparent ? null : resolveBg(bg);

  useEffect(() => () => { items.forEach((i) => URL.revokeObjectURL(i.url)); }, [items]);

  // Decode newly-added images; drop bitmaps for removed ones.
  useEffect(() => {
    let alive = true;
    const ids = new Set(items.map((i) => i.id));
    for (const [id, b] of bmps.current) if (!ids.has(id)) { b.close(); bmps.current.delete(id); }
    const missing = items.filter((i) => !bmps.current.has(i.id));
    if (missing.length === 0) { setReady((n) => n + 1); return; }
    Promise.all(missing.map(async (it) => {
      try { bmps.current.set(it.id, await decodeBitmap(it.file)); } catch { /* skip */ }
    })).then(() => { if (alive) setReady((n) => n + 1); });
    return () => { alive = false; };
  }, [items]);

  const repaint = useCallback(() => {
    if (!previewRef.current) return;
    const ordered = items.map((i) => bmps.current.get(i.id)).filter((b): b is ImageBitmap => !!b);
    if (ordered.length) compose(previewRef.current, ordered, layout, gap, cols, bgFill);
  }, [items, layout, gap, cols, bgFill]);

  useEffect(() => { repaint(); }, [repaint, ready]);

  const addFiles = useCallback((incoming: FileList | File[]) => {
    const imgs = Array.from(incoming).filter((f) => f.type.startsWith("image/"));
    if (imgs.length === 0) { toast.error("Please select image files."); return; }
    setItems((prev) => [...prev, ...imgs.map((file) => ({ id: uid(), file, url: URL.createObjectURL(file) }))]);
  }, []);

  useHandoff(addFiles);

  const removeItem = (id: string) => setItems((prev) => { const it = prev.find((p) => p.id === id); if (it) URL.revokeObjectURL(it.url); return prev.filter((p) => p.id !== id); });
  const reset = () => { items.forEach((i) => URL.revokeObjectURL(i.url)); setItems([]); };
  const move = (i: number, dir: -1 | 1) => setItems((prev) => { const j = i + dir; if (j < 0 || j >= prev.length) return prev; const next = [...prev]; [next[i], next[j]] = [next[j], next[i]]; return next; });

  const exportMerged = async () => {
    if (items.length < 1) return;
    setIsWorking(true);
    try {
      const ordered = items.map((i) => bmps.current.get(i.id)).filter((b): b is ImageBitmap => !!b);
      if (ordered.length === 0) throw new Error("Images are still loading — try again in a moment.");
      const canvas = document.createElement("canvas");
      compose(canvas, ordered, layout, gap, cols, bgFill);
      const blob = await canvasToBlob(canvas, format, quality);
      downloadBlob(blob, `omyimage_merged.${mimeExt(format)}`);
      toast.success(`Merged ${ordered.length} images.`);
    } catch (err) {
      console.error(err);
      toast.error(err instanceof Error ? err.message : "Merge failed.");
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
        <Dropzone onFiles={addFiles} accept={ACCEPT} accent={ACCENT} icon="grid_view" hint="or drop two or more JPG, PNG or WEBP images here" />
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 items-start">
      <span data-tool-active hidden aria-hidden="true" />
      <TopLoadingBar active={isWorking} />

      <div className="flex flex-col gap-3 lg:sticky lg:top-24 lg:self-start">
        <div className="rounded-xl border border-surface-variant p-4 flex items-center justify-center overflow-hidden" style={{ minHeight: 220, ...(bgFill ? { backgroundColor: "var(--color-surface-container)" } : CHECKER) }}>
          <canvas ref={previewRef} className="max-w-full max-h-[46vh] rounded" />
        </div>
        <p className="text-center text-label-sm font-label-sm text-on-surface-variant">Live preview of the merged image.</p>

        <div className="flex items-center justify-between">
          <h2 className="text-headline-md font-bold text-primary">{items.length} image{items.length === 1 ? "" : "s"}</h2>
          <div className="flex items-center gap-2">
            <label className="inline-flex items-center gap-1.5 text-label-md font-semibold text-secondary hover:underline cursor-pointer">
              <Icon name="add" className="text-[18px]" /> Add more
              <input type="file" accept={ACCEPT} multiple className="hidden" onChange={(e) => { if (e.target.files) addFiles(e.target.files); e.target.value = ""; }} />
            </label>
            <button type="button" onClick={reset} className="inline-flex items-center gap-1.5 text-label-md font-medium text-on-surface-variant hover:text-error"><Icon name="delete_sweep" className="text-[18px]" /> Clear</button>
          </div>
        </div>
        <ul className="flex flex-col gap-2 max-h-[24vh] overflow-y-auto pr-1">
          {items.map((it, i) => (
            <li key={it.id} className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-3 flex items-center gap-3">
              <span className="grid place-items-center w-7 h-7 rounded-full text-label-sm font-bold shrink-0" style={{ backgroundColor: `${ACCENT}1A`, color: ACCENT }}>{i + 1}</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={it.url} alt="" className="w-12 h-12 rounded-lg object-cover bg-surface-container shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-body-md font-semibold text-primary">{it.file.name}</p>
                <p className="text-label-sm font-label-sm text-on-surface-variant">{formatBytes(it.file.size)}</p>
              </div>
              <div className="flex items-center">
                <button type="button" onClick={() => move(i, -1)} disabled={i === 0 || isWorking} aria-label="Move up" className="flex h-8 w-8 items-center justify-center rounded text-on-surface-variant hover:bg-surface-container disabled:opacity-30 transition-colors"><Icon name="arrow_upward" className="text-[18px]" /></button>
                <button type="button" onClick={() => move(i, 1)} disabled={i === items.length - 1 || isWorking} aria-label="Move down" className="flex h-8 w-8 items-center justify-center rounded text-on-surface-variant hover:bg-surface-container disabled:opacity-30 transition-colors"><Icon name="arrow_downward" className="text-[18px]" /></button>
                <button type="button" onClick={() => removeItem(it.id)} disabled={isWorking} aria-label="Remove" className="flex h-8 w-8 items-center justify-center rounded text-on-surface-variant hover:bg-error-container hover:text-error transition-colors disabled:opacity-40"><Icon name="close" className="text-[18px]" /></button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:sticky lg:top-24 flex flex-col gap-4">
        <div className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-5 flex flex-col gap-4">
          <h2 className="text-headline-md font-bold text-primary">Layout</h2>
          <div className="grid grid-cols-3 gap-1 rounded-lg bg-surface-container p-1">
            {([["horizontal", "Side by side"], ["vertical", "Stacked"], ["grid", "Grid"]] as [Layout, string][]).map(([v, l]) => (
              <button key={v} type="button" onClick={() => setLayout(v)} className={`rounded-md px-2 py-2 text-label-sm font-label-sm font-semibold transition-colors ${layout === v ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant hover:text-primary"}`}>{l}</button>
            ))}
          </div>
          {layout === "grid" && (
            <div className="flex flex-col gap-1.5"><label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>Columns</span><span className="text-primary font-semibold">{cols}</span></label><input type="range" min={1} max={6} step={1} value={cols} onChange={(e) => setCols(parseInt(e.target.value, 10))} className="w-full accent-secondary" /></div>
          )}
          <div className="flex flex-col gap-1.5"><label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>Spacing</span><span className="text-primary font-semibold">{gap}px</span></label><input type="range" min={0} max={100} step={1} value={gap} onChange={(e) => setGap(parseInt(e.target.value, 10))} className="w-full accent-secondary" /></div>
          <BackgroundPicker value={bg} onChange={setBg} allowTransparent label="Background" />
          <div className="flex flex-col gap-1.5">
            <label className="text-label-sm font-label-sm text-on-surface-variant">Output format</label>
            <select value={format} onChange={(e) => setFormat(e.target.value as ExportMime)} className={fieldCls}>{FORMATS.map((f) => <option key={f.value} value={f.value}>{f.label}</option>)}</select>
          </div>
          {format !== "image/png" && (
            <div className="flex flex-col gap-1.5"><label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>Quality</span><span className="text-primary font-semibold">{Math.round(quality * 100)}%</span></label><input type="range" min={0.5} max={1} step={0.01} value={quality} onChange={(e) => setQuality(parseFloat(e.target.value))} className="w-full accent-secondary" /></div>
          )}
        </div>

        <button type="button" onClick={exportMerged} disabled={isWorking} className="w-full inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-container text-on-secondary font-semibold py-3.5 rounded-lg transition-colors disabled:opacity-50">
          {isWorking ? (<><Icon name="progress_activity" className="animate-spin text-[20px]" /> Merging…</>) : (<><Icon name="grid_view" fill className="text-[20px]" /> Merge &amp; download</>)}
        </button>

        <div className="rounded-xl border border-outline-variant/40 bg-surface-bright p-4 flex items-start gap-2.5">
          <Icon name="lightbulb" className="text-[18px] mt-0.5" style={{ color: ACCENT }} />
          <p className="text-label-sm font-label-sm text-on-surface-variant"><strong className="text-on-surface">Tip:</strong> use the arrows to reorder, and a transparent PNG background to keep the gaps see-through. Everything runs in your browser.</p>
        </div>
      </div>
    </section>
  );
}

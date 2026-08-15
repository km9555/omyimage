"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { BackgroundPicker, resolveBg, type BgValue } from "@/components/BackgroundPicker";
import { ToolWorkspace } from "@/components/tool/ToolWorkspace";
import { FileTray, TrayAction, type TrayEntry } from "@/components/tool/FileTray";
import { SettingsRail, RailAction, RailNote } from "@/components/tool/SettingsRail";
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

  const entries: TrayEntry[] = items.map((it, i) => ({
    id: it.id,
    name: it.file.name,
    url: it.url,
    badge: (
      <span className="grid place-items-center w-7 h-7 rounded-full text-label-sm font-bold shrink-0" style={{ backgroundColor: `${ACCENT}1A`, color: ACCENT }}>{i + 1}</span>
    ),
    meta: formatBytes(it.file.size),
    action: <TrayAction icon="close" label="Remove" disabled={isWorking} onClick={() => removeItem(it.id)} />,
  }));

  return (
    <>
      <TopLoadingBar active={isWorking} />
      <ToolWorkspace
        main={
          <>
            <div className="rounded-xl border border-surface-variant p-4 flex items-center justify-center overflow-hidden" style={{ minHeight: 220, ...(bgFill ? { backgroundColor: "var(--color-surface-container)" } : CHECKER) }}>
              <canvas ref={previewRef} className="max-w-full max-h-[46vh] rounded" />
            </div>
            <p className="text-center text-label-sm font-label-sm text-on-surface-variant">Live preview of the merged image.</p>
            <FileTray entries={entries} accept={ACCEPT} onFiles={addFiles} onClear={reset} onMove={move} busy={isWorking} />
          </>
        }
        rail={
          <SettingsRail
            title="Merge Settings"
            icon="grid_view"
            accent={ACCENT}
            footer={
              <>
                <RailNote>Reorder with the arrows; a transparent PNG background keeps the gaps see-through.</RailNote>
                <RailAction onClick={exportMerged} busy={isWorking} busyLabel="Merging…" icon="grid_view">
                  Merge &amp; download
                </RailAction>
              </>
            }
          >
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
          </SettingsRail>
        }
      />
    </>
  );
}

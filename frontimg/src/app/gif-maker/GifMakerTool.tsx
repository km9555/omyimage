"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { BackgroundPicker, resolveBg, type BgValue } from "@/components/BackgroundPicker";
import { decodeBitmap, downloadBlob, formatBytes } from "@/lib/image/raster";

const ACCENT = "#EC4899";
const ACCEPT = "image/jpeg,image/png,image/webp,image/gif,image/bmp";

type Item = { id: string; file: File; url: string };

const MAX_SIZES = [240, 360, 480, 640, 800];

let counter = 0;
const uid = () => `f${Date.now()}_${counter++}`;

function drawContain(ctx: CanvasRenderingContext2D, bmp: ImageBitmap, W: number, H: number, bg: string | null) {
  if (bg) { ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H); } else ctx.clearRect(0, 0, W, H);
  const s = Math.min(W / bmp.width, H / bmp.height);
  const dw = bmp.width * s, dh = bmp.height * s;
  ctx.drawImage(bmp, (W - dw) / 2, (H - dh) / 2, dw, dh);
}

export function GifMakerTool() {
  const [items, setItems] = useState<Item[]>([]);
  const [delay, setDelay] = useState(300);
  const [maxSize, setMaxSize] = useState(480);
  const [loop, setLoop] = useState(true);
  const [bg, setBg] = useState<BgValue>({ transparent: false, color: "#ffffff" });
  const [isWorking, setIsWorking] = useState(false);
  const [ready, setReady] = useState(0);

  const previewRef = useRef<HTMLCanvasElement>(null);
  const bmps = useRef<Map<string, ImageBitmap>>(new Map());
  const frameIdx = useRef(0);

  const bgFill = bg.transparent ? null : resolveBg(bg);

  useEffect(() => () => { items.forEach((i) => URL.revokeObjectURL(i.url)); }, [items]);

  // Decode added images; drop removed.
  useEffect(() => {
    let alive = true;
    const ids = new Set(items.map((i) => i.id));
    for (const [id, b] of bmps.current) if (!ids.has(id)) { b.close(); bmps.current.delete(id); }
    const missing = items.filter((i) => !bmps.current.has(i.id));
    if (missing.length === 0) { setReady((n) => n + 1); return; }
    Promise.all(missing.map(async (it) => { try { bmps.current.set(it.id, await decodeBitmap(it.file)); } catch { /* skip */ } }))
      .then(() => { if (alive) setReady((n) => n + 1); });
    return () => { alive = false; };
  }, [items]);

  // Output dimensions: fit all frames within maxSize on the longest side.
  const ordered = items.map((i) => bmps.current.get(i.id)).filter((b): b is ImageBitmap => !!b);
  const maxW = ordered.length ? Math.max(...ordered.map((b) => b.width)) : 0;
  const maxH = ordered.length ? Math.max(...ordered.map((b) => b.height)) : 0;
  const scale = maxW && maxH ? Math.min(1, maxSize / Math.max(maxW, maxH)) : 1;
  const outW = Math.max(1, Math.round(maxW * scale));
  const outH = Math.max(1, Math.round(maxH * scale));

  // Live animated preview.
  useEffect(() => {
    if (ordered.length === 0) return;
    const canvas = previewRef.current;
    if (!canvas) return;
    canvas.width = outW; canvas.height = outH;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    frameIdx.current = frameIdx.current % ordered.length;
    const render = () => { const b = ordered[frameIdx.current % ordered.length]; if (b) drawContain(ctx, b, outW, outH, bgFill); };
    render();
    if (ordered.length < 2) return;
    const id = window.setInterval(() => { frameIdx.current = (frameIdx.current + 1) % ordered.length; render(); }, Math.max(20, delay));
    return () => window.clearInterval(id);
  }, [ready, delay, outW, outH, bgFill, ordered.length]); // eslint-disable-line react-hooks/exhaustive-deps

  const addFiles = useCallback((incoming: FileList | File[]) => {
    const imgs = Array.from(incoming).filter((f) => f.type.startsWith("image/"));
    if (imgs.length === 0) { toast.error("Please select image files."); return; }
    setItems((prev) => [...prev, ...imgs.map((file) => ({ id: uid(), file, url: URL.createObjectURL(file) }))]);
  }, []);

  const removeItem = (id: string) => setItems((prev) => { const it = prev.find((p) => p.id === id); if (it) URL.revokeObjectURL(it.url); return prev.filter((p) => p.id !== id); });
  const reset = () => { items.forEach((i) => URL.revokeObjectURL(i.url)); setItems([]); };
  const move = (i: number, dir: -1 | 1) => setItems((prev) => { const j = i + dir; if (j < 0 || j >= prev.length) return prev; const next = [...prev]; [next[i], next[j]] = [next[j], next[i]]; return next; });

  const createGif = async () => {
    const frames = items.map((i) => bmps.current.get(i.id)).filter((b): b is ImageBitmap => !!b);
    if (frames.length < 2) { toast.error("Add at least two images to make an animation."); return; }
    setIsWorking(true);
    try {
      const { GIFEncoder, quantize, applyPalette } = await import("gifenc");
      const gif = GIFEncoder();
      const off = document.createElement("canvas");
      off.width = outW; off.height = outH;
      const ctx = off.getContext("2d", { willReadFrequently: true });
      if (!ctx) throw new Error("Canvas not supported.");
      frames.forEach((bmp, i) => {
        drawContain(ctx, bmp, outW, outH, bgFill ?? "#ffffff");
        const { data } = ctx.getImageData(0, 0, outW, outH);
        const palette = quantize(data, 256);
        const index = applyPalette(data, palette);
        gif.writeFrame(index, outW, outH, { palette, delay, ...(i === 0 ? { repeat: loop ? 0 : -1 } : {}) });
      });
      gif.finish();
      const blob = new Blob([gif.bytes() as BlobPart], { type: "image/gif" });
      downloadBlob(blob, "omyimage.gif");
      toast.success(`Created a GIF from ${frames.length} frames (${formatBytes(blob.size)}).`);
    } catch (err) {
      console.error(err);
      toast.error(err instanceof Error ? err.message : "Couldn't create the GIF.");
    } finally {
      setIsWorking(false);
    }
  };

  const fieldCls = "w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";

  if (items.length === 0) {
    return (
      <section>
        <TopLoadingBar active={isWorking} />
        <Dropzone onFiles={addFiles} accept={ACCEPT} accent={ACCENT} icon="gif_box" hint="or drop two or more JPG, PNG or WEBP images here" />
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 items-start">
      <span data-tool-active hidden aria-hidden="true" />
      <TopLoadingBar active={isWorking} />

      <div className="flex flex-col gap-3 lg:sticky lg:top-24 lg:self-start">
        <div className="bg-surface-container rounded-xl border border-surface-variant p-4 flex items-center justify-center overflow-hidden" style={{ minHeight: 220 }}>
          <canvas ref={previewRef} className="max-w-full max-h-[46vh] rounded" />
        </div>
        <p className="text-center text-label-sm font-label-sm text-on-surface-variant">
          Live preview · {outW} × {outH} px · {items.length} frame{items.length === 1 ? "" : "s"}
        </p>

        <div className="flex items-center justify-between">
          <h2 className="text-headline-md font-bold text-primary">{items.length} frame{items.length === 1 ? "" : "s"}</h2>
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
          <h2 className="text-headline-md font-bold text-primary">Animation</h2>
          <div className="flex flex-col gap-1.5">
            <label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>Frame delay</span><span className="text-primary font-semibold">{delay}ms ({(1000 / delay).toFixed(1)} fps)</span></label>
            <input type="range" min={40} max={2000} step={10} value={delay} onChange={(e) => setDelay(parseInt(e.target.value, 10))} className="w-full accent-secondary" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-label-sm font-label-sm text-on-surface-variant">Max size (longest side)</label>
            <select value={maxSize} onChange={(e) => setMaxSize(parseInt(e.target.value, 10))} className={fieldCls}>{MAX_SIZES.map((s) => <option key={s} value={s}>{s}px</option>)}</select>
          </div>
          <label className="flex items-center gap-2.5 cursor-pointer"><input type="checkbox" checked={loop} onChange={(e) => setLoop(e.target.checked)} className="w-4 h-4 accent-secondary" /><span className="text-body-md text-on-surface">Loop forever</span></label>
          <BackgroundPicker value={bg} onChange={setBg} allowTransparent={false} label="Background (behind transparent areas)" />
        </div>

        <button type="button" onClick={createGif} disabled={isWorking || items.length < 2} className="w-full inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-container text-on-secondary font-semibold py-3.5 rounded-lg transition-colors disabled:opacity-50">
          {isWorking ? (<><Icon name="progress_activity" className="animate-spin text-[20px]" /> Building GIF…</>) : (<><Icon name="gif_box" fill className="text-[20px]" /> Create GIF</>)}
        </button>

        <div className="rounded-xl border border-outline-variant/40 bg-surface-bright p-4 flex items-start gap-2.5">
          <Icon name="lightbulb" className="text-[18px] mt-0.5" style={{ color: ACCENT }} />
          <p className="text-label-sm font-label-sm text-on-surface-variant"><strong className="text-on-surface">Tip:</strong> drag frames with the arrows to set the order. The preview plays at your chosen speed. Everything runs in your browser.</p>
        </div>
      </div>
    </section>
  );
}

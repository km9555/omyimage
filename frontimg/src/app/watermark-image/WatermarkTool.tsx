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

const ACCENT = "#8A6FC4";
const ACCEPT = "image/jpeg,image/png,image/webp";

type WmType = "text" | "image";
type Format = "original" | ExportMime;
type Item = { id: string; file: File; url: string; result?: { blob: Blob; size: number; name: string } };

const FONTS = [
  { label: "Sans (Inter)", value: "Inter, Arial, sans-serif" },
  { label: "Serif (Georgia)", value: "Georgia, 'Times New Roman', serif" },
  { label: "Impact", value: "Impact, Haettenschweiler, sans-serif" },
  { label: "Monospace", value: "'Courier New', monospace" },
];

const FORMATS: { label: string; value: Format }[] = [
  { label: "Same as original", value: "original" },
  { label: "JPG", value: "image/jpeg" },
  { label: "PNG", value: "image/png" },
  { label: "WEBP", value: "image/webp" },
];

interface WmOpts {
  type: WmType;
  text: string;
  fontPct: number;
  fontFamily: string;
  bold: boolean;
  color: string;
  outline: boolean;
  outlineColor: string;
  opacity: number;
  rotation: number;
  scalePct: number; // logo size as % of base width
  marginPct: number;
  pos: number; // 0..8 grid
}

let counter = 0;
const uid = () => `f${Date.now()}_${counter++}`;

function outMimeFor(file: File, fmt: Format): ExportMime {
  if (fmt !== "original") return fmt;
  const t = file.type;
  return t === "image/jpeg" || t === "image/webp" || t === "image/png" ? (t as ExportMime) : "image/png";
}

/** Paint base image + watermark onto a (freshly sized) canvas. */
function paint(canvas: HTMLCanvasElement, bmp: ImageBitmap, o: WmOpts, logo: ImageBitmap | null, bg: string | null) {
  const W = bmp.width, H = bmp.height;
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  if (bg) { ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H); }
  ctx.drawImage(bmp, 0, 0);

  const row = Math.floor(o.pos / 3), col = o.pos % 3;
  const mx = (W * o.marginPct) / 100, my = (H * o.marginPct) / 100;
  ctx.globalAlpha = o.opacity;

  if (o.type === "text" && o.text.trim()) {
    const px = Math.max(8, (W * o.fontPct) / 100);
    ctx.font = `${o.bold ? "bold " : ""}${px}px ${o.fontFamily}`;
    let x: number, y: number;
    if (col === 0) { x = mx; ctx.textAlign = "left"; } else if (col === 1) { x = W / 2; ctx.textAlign = "center"; } else { x = W - mx; ctx.textAlign = "right"; }
    if (row === 0) { y = my; ctx.textBaseline = "top"; } else if (row === 1) { y = H / 2; ctx.textBaseline = "middle"; } else { y = H - my; ctx.textBaseline = "bottom"; }
    ctx.save();
    ctx.translate(x, y);
    if (o.rotation) ctx.rotate((o.rotation * Math.PI) / 180);
    if (o.outline) { ctx.lineWidth = Math.max(1, px * 0.07); ctx.strokeStyle = o.outlineColor; ctx.lineJoin = "round"; ctx.strokeText(o.text, 0, 0); }
    ctx.fillStyle = o.color;
    ctx.fillText(o.text, 0, 0);
    ctx.restore();
  } else if (o.type === "image" && logo) {
    const lw = (W * o.scalePct) / 100;
    const lh = lw * (logo.height / logo.width);
    let cx: number, cy: number;
    if (col === 0) cx = mx + lw / 2; else if (col === 1) cx = W / 2; else cx = W - mx - lw / 2;
    if (row === 0) cy = my + lh / 2; else if (row === 1) cy = H / 2; else cy = H - my - lh / 2;
    ctx.save();
    ctx.translate(cx, cy);
    if (o.rotation) ctx.rotate((o.rotation * Math.PI) / 180);
    ctx.drawImage(logo, -lw / 2, -lh / 2, lw, lh);
    ctx.restore();
  }
  ctx.globalAlpha = 1;
}

export function WatermarkTool() {
  const [items, setItems] = useState<Item[]>([]);
  const [opts, setOpts] = useState<WmOpts>({
    type: "text", text: "© oMyImage", fontPct: 6, fontFamily: FONTS[0].value, bold: true,
    color: "#ffffff", outline: true, outlineColor: "#000000", opacity: 0.6, rotation: 0,
    scalePct: 25, marginPct: 4, pos: 8,
  });
  const [format, setFormat] = useState<Format>("original");
  const [quality, setQuality] = useState(0.92);
  const [bg, setBg] = useState<BgValue>({ transparent: false, color: "#ffffff" });
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [isWorking, setIsWorking] = useState(false);
  const [done, setDone] = useState(false);

  const previewRef = useRef<HTMLCanvasElement>(null);
  const firstBmp = useRef<ImageBitmap | null>(null);
  const logoBmp = useRef<ImageBitmap | null>(null);
  const logoInput = useRef<HTMLInputElement>(null);

  const set = <K extends keyof WmOpts>(k: K, v: WmOpts[K]) => setOpts((o) => ({ ...o, [k]: v }));

  useEffect(() => () => { items.forEach((i) => URL.revokeObjectURL(i.url)); }, [items]);

  const repaint = useCallback(() => {
    if (previewRef.current && firstBmp.current) paint(previewRef.current, firstBmp.current, opts, logoBmp.current, null);
  }, [opts]);

  // Collapse the page to a minimal layout (header → title → tool → related →
  // footer) while an image is loaded, by toggling a class on <body>.
  useEffect(() => {
    document.body.classList.toggle("tool-active", items.length > 0);
    return () => document.body.classList.remove("tool-active");
  }, [items.length]);

  // Decode the first image for preview.
  useEffect(() => {
    let alive = true;
    if (items[0]) {
      decodeBitmap(items[0].file).then((b) => { if (alive) { firstBmp.current = b; repaint(); } }).catch(() => {});
    } else {
      firstBmp.current = null;
    }
    return () => { alive = false; };
  }, [items, repaint]);

  // Decode the logo.
  useEffect(() => {
    let alive = true;
    if (logoFile) {
      decodeBitmap(logoFile, false).then((b) => { if (alive) { logoBmp.current = b; repaint(); } }).catch(() => toast.error("Couldn't read that logo image."));
    } else {
      logoBmp.current = null;
    }
    return () => { alive = false; };
  }, [logoFile, repaint]);

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
    if (opts.type === "image" && !logoBmp.current) { toast.error("Upload a logo image first."); return; }
    setIsWorking(true);
    try {
      const canvas = document.createElement("canvas");
      const out: Item[] = [];
      for (const it of items) {
        const bmp = await decodeBitmap(it.file);
        const mime = outMimeFor(it.file, format);
        paint(canvas, bmp, opts, logoBmp.current, mime === "image/jpeg" ? resolveBg(bg) : null);
        bmp.close();
        const blob = await canvasToBlob(canvas, mime, quality);
        out.push({ ...it, result: { blob, size: blob.size, name: `${baseName(it.file.name)}_watermarked.${mimeExt(mime)}` } });
      }
      setItems(out);
      setDone(true);
      if (out.length === 1 && out[0].result) downloadBlob(out[0].result.blob, out[0].result.name);
      else await zipAndDownload(out.map((o) => ({ name: o.result!.name, blob: o.result!.blob })), "omyimage_watermarked.zip");
      toast.success(`Watermarked ${out.length} image${out.length === 1 ? "" : "s"}.`);
    } catch (err) {
      console.error(err);
      toast.error(err instanceof Error ? err.message : "Watermarking failed.");
    } finally {
      setIsWorking(false);
    }
  };

  const fieldCls = "w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";

  if (items.length === 0) {
    return (
      <section>
        <TopLoadingBar active={isWorking} />
        <Dropzone onFiles={addFiles} accept={ACCEPT} accent={ACCENT} icon="branding_watermark" hint="or drop JPG, PNG or WEBP images here" />
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 items-start">
      <span data-tool-active hidden aria-hidden="true" />
      <TopLoadingBar active={isWorking} />

      <div className="flex flex-col gap-3 lg:sticky lg:top-24 lg:self-start">
        {/* Live preview + file info — pinned so they stay visible while scrolling the options */}
        <div className="bg-surface-container rounded-xl border border-surface-variant p-4 flex items-center justify-center overflow-hidden" style={{ minHeight: 220 }}>
          <canvas ref={previewRef} className="max-w-full max-h-[46vh] rounded" />
        </div>
        <p className="text-center text-label-sm font-label-sm text-on-surface-variant">
          Live preview of <span className="font-semibold text-on-surface">{items[0].file.name}</span>
          {items.length > 1 && <> — the same watermark applies to all {items.length} images.</>}
        </p>

        {/* Files */}
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
          {/* Type toggle */}
          <div className="grid grid-cols-2 gap-1 rounded-lg bg-surface-container p-1">
            {(["text", "image"] as WmType[]).map((t) => (
              <button key={t} type="button" onClick={() => set("type", t)} className={`rounded-md px-3 py-2 text-body-md font-semibold capitalize transition-colors ${opts.type === t ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant hover:text-primary"}`}>
                {t === "text" ? "Text" : "Logo"}
              </button>
            ))}
          </div>

          {opts.type === "text" ? (
            <>
              <div className="flex flex-col gap-1.5"><label className="text-label-sm font-label-sm text-on-surface-variant">Watermark text</label><input type="text" value={opts.text} onChange={(e) => set("text", e.target.value)} className={fieldCls} /></div>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5"><label className="text-label-sm font-label-sm text-on-surface-variant">Font</label><select value={opts.fontFamily} onChange={(e) => set("fontFamily", e.target.value)} className={fieldCls}>{FONTS.map((f) => <option key={f.value} value={f.value}>{f.label}</option>)}</select></div>
                <div className="flex flex-col gap-1.5"><label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>Size</span><span className="text-primary font-semibold">{opts.fontPct}%</span></label><input type="range" min={2} max={20} step={1} value={opts.fontPct} onChange={(e) => set("fontPct", parseInt(e.target.value, 10))} className="w-full accent-secondary" /></div>
              </div>
              <label className="flex items-center gap-2.5 cursor-pointer"><input type="checkbox" checked={opts.bold} onChange={(e) => set("bold", e.target.checked)} className="w-4 h-4 accent-secondary" /><span className="text-body-md text-on-surface">Bold</span></label>
              <BackgroundPicker value={{ transparent: false, color: opts.color }} onChange={(v) => set("color", v.color)} allowTransparent={false} label="Text color" />
              <label className="flex items-center gap-2.5 cursor-pointer"><input type="checkbox" checked={opts.outline} onChange={(e) => set("outline", e.target.checked)} className="w-4 h-4 accent-secondary" /><span className="text-body-md text-on-surface">Outline (for legibility)</span></label>
              {opts.outline && <BackgroundPicker value={{ transparent: false, color: opts.outlineColor }} onChange={(v) => set("outlineColor", v.color)} allowTransparent={false} label="Outline color" />}
            </>
          ) : (
            <>
              <input ref={logoInput} type="file" accept="image/png,image/webp,image/svg+xml,image/jpeg" className="hidden" onChange={(e) => { if (e.target.files?.[0]) setLogoFile(e.target.files[0]); e.target.value = ""; }} />
              <button type="button" onClick={() => logoInput.current?.click()} className="inline-flex items-center justify-center gap-2 rounded-lg border border-surface-variant py-2.5 text-body-md font-semibold text-primary hover:border-secondary/50 transition-colors">
                <Icon name="upload" className="text-[18px]" /> {logoFile ? "Change logo" : "Upload logo (PNG)"}
              </button>
              {logoFile && <p className="text-label-sm font-label-sm text-on-surface-variant truncate">{logoFile.name}</p>}
              <div className="flex flex-col gap-1.5"><label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>Logo size</span><span className="text-primary font-semibold">{opts.scalePct}%</span></label><input type="range" min={5} max={80} step={1} value={opts.scalePct} onChange={(e) => set("scalePct", parseInt(e.target.value, 10))} className="w-full accent-secondary" /></div>
            </>
          )}

          {/* Shared: opacity, rotation, position, margin */}
          <div className="flex flex-col gap-1.5"><label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>Opacity</span><span className="text-primary font-semibold">{Math.round(opts.opacity * 100)}%</span></label><input type="range" min={0.05} max={1} step={0.01} value={opts.opacity} onChange={(e) => set("opacity", parseFloat(e.target.value))} className="w-full accent-secondary" /></div>
          <div className="flex flex-col gap-1.5"><label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>Rotation</span><span className="text-primary font-semibold">{opts.rotation}°</span></label><input type="range" min={-90} max={90} step={1} value={opts.rotation} onChange={(e) => set("rotation", parseInt(e.target.value, 10))} className="w-full accent-secondary" /></div>

          <div className="flex flex-col gap-1.5">
            <label className="text-label-sm font-label-sm text-on-surface-variant">Position</label>
            <div className="grid grid-cols-3 gap-1.5 w-fit">
              {Array.from({ length: 9 }).map((_, i) => (
                <button key={i} type="button" aria-label={`Position ${i + 1}`} onClick={() => set("pos", i)} className={`h-8 w-8 rounded-md border transition-colors grid place-items-center ${opts.pos === i ? "border-secondary bg-secondary/10" : "border-surface-variant hover:border-secondary/40"}`}>
                  <span className={`h-2 w-2 rounded-full ${opts.pos === i ? "bg-secondary" : "bg-outline-variant"}`} />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-5 flex flex-col gap-3">
          <h2 className="text-headline-md font-bold text-primary">Output</h2>
          <select value={format} onChange={(e) => setFormat(e.target.value as Format)} className={fieldCls}>{FORMATS.map((f) => <option key={f.value} value={f.value}>{f.label}</option>)}</select>
          {format !== "image/png" && (
            <div className="flex flex-col gap-1.5"><label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>Quality</span><span className="text-primary font-semibold">{Math.round(quality * 100)}%</span></label><input type="range" min={0.5} max={1} step={0.01} value={quality} onChange={(e) => setQuality(parseFloat(e.target.value))} className="w-full accent-secondary" /></div>
          )}
          {items.some((it) => outMimeFor(it.file, format) === "image/jpeg") && <BackgroundPicker value={bg} onChange={setBg} allowTransparent={false} label="JPG background" />}
        </div>

        <button type="button" onClick={applyAll} disabled={isWorking} className="w-full inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-container text-on-secondary font-semibold py-3.5 rounded-lg transition-colors disabled:opacity-50">
          {isWorking ? (<><Icon name="progress_activity" className="animate-spin text-[20px]" /> Applying…</>) : (<><Icon name="branding_watermark" fill className="text-[20px]" /> Watermark {items.length > 1 ? `${items.length} images` : "& download"}</>)}
        </button>

        {done && items.length > 1 && (
          <button type="button" onClick={() => zipAndDownload(items.filter((i) => i.result).map((i) => ({ name: i.result!.name, blob: i.result!.blob })), "omyimage_watermarked.zip")} className="w-full inline-flex items-center justify-center gap-2 border border-secondary text-secondary font-semibold py-2.5 rounded-lg hover:bg-secondary/10 transition-colors">
            <Icon name="folder_zip" className="text-[20px]" /> Download all (ZIP)
          </button>
        )}
      </div>
    </section>
  );
}

"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { BackgroundPicker } from "@/components/BackgroundPicker";
import { decodeBitmap, canvasToBlob, downloadBlob, baseName, mimeExt, type ExportMime } from "@/lib/image/raster";
import { useHandoff } from "@/lib/tool-handoff";

const ACCENT = "#C98B3E";
const ACCEPT = "image/jpeg,image/png,image/webp,image/gif";

const FONTS = [
  { label: "Impact (classic)", value: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" },
  { label: "Anton / Sans", value: "Anton, Inter, Arial, sans-serif" },
  { label: "Serif", value: "Georgia, 'Times New Roman', serif" },
];

interface MemeOpts {
  top: string;
  bottom: string;
  fontPct: number;
  fontFamily: string;
  color: string;
  outlineColor: string;
  outlinePct: number;
  uppercase: boolean;
}

function wrapText(ctx: CanvasRenderingContext2D, text: string, maxW: number): string[] {
  const words = text.split(/\s+/).filter(Boolean);
  if (!words.length) return [];
  const lines: string[] = [];
  let line = words[0];
  for (let i = 1; i < words.length; i++) {
    const test = `${line} ${words[i]}`;
    if (ctx.measureText(test).width <= maxW) line = test;
    else { lines.push(line); line = words[i]; }
  }
  lines.push(line);
  return lines;
}

function paintMeme(canvas: HTMLCanvasElement, bmp: ImageBitmap, o: MemeOpts) {
  const W = bmp.width, H = bmp.height;
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.drawImage(bmp, 0, 0);

  const px = Math.max(12, (Math.min(W, H) * o.fontPct) / 100);
  ctx.font = `bold ${px}px ${o.fontFamily}`;
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.lineJoin = "round";
  ctx.miterLimit = 2;
  ctx.lineWidth = Math.max(1, (px * o.outlinePct) / 100);
  ctx.strokeStyle = o.outlineColor;
  ctx.fillStyle = o.color;

  const maxW = W * 0.92;
  const lh = px * 1.08;
  const margin = H * 0.03;
  const cx = W / 2;
  const xform = (s: string) => (o.uppercase ? s.toUpperCase() : s);

  const draw = (block: string, yStart: number) => {
    const lines = wrapText(ctx, xform(block), maxW);
    lines.forEach((ln, i) => {
      const y = yStart + i * lh;
      if (ctx.lineWidth > 0) ctx.strokeText(ln, cx, y);
      ctx.fillText(ln, cx, y);
    });
  };

  if (o.top.trim()) draw(o.top, margin);
  if (o.bottom.trim()) {
    const lines = wrapText(ctx, xform(o.bottom), maxW);
    draw(o.bottom, H - margin - lines.length * lh);
  }
}

export function MemeTool() {
  const [file, setFile] = useState<File | null>(null);
  const [opts, setOpts] = useState<MemeOpts>({
    top: "TOP TEXT", bottom: "BOTTOM TEXT", fontPct: 9, fontFamily: FONTS[0].value,
    color: "#ffffff", outlineColor: "#000000", outlinePct: 8, uppercase: true,
  });
  const [format, setFormat] = useState<ExportMime>("image/png");
  const [quality, setQuality] = useState(0.92);
  const [isWorking, setIsWorking] = useState(false);

  const previewRef = useRef<HTMLCanvasElement>(null);
  const bmpRef = useRef<ImageBitmap | null>(null);

  const set = <K extends keyof MemeOpts>(k: K, v: MemeOpts[K]) => setOpts((o) => ({ ...o, [k]: v }));

  const repaint = useCallback(() => {
    if (previewRef.current && bmpRef.current) paintMeme(previewRef.current, bmpRef.current, opts);
  }, [opts]);

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

  useHandoff(onFiles);

  const exportMeme = async () => {
    if (!file || !bmpRef.current) return;
    setIsWorking(true);
    try {
      const canvas = document.createElement("canvas");
      paintMeme(canvas, bmpRef.current, opts);
      const blob = await canvasToBlob(canvas, format, quality);
      downloadBlob(blob, `${baseName(file.name)}_meme.${mimeExt(format)}`);
      toast.success("Meme exported — download started.");
    } catch (err) {
      console.error(err);
      toast.error(err instanceof Error ? err.message : "Export failed.");
    } finally {
      setIsWorking(false);
    }
  };

  const fieldCls = "w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";

  useEffect(() => {
    document.body.classList.toggle("tool-active", !!file);
    return () => document.body.classList.remove("tool-active");
  }, [file]);

  if (!file) {
    return (
      <section>
        <TopLoadingBar active={isWorking} />
        <Dropzone onFiles={onFiles} accept={ACCEPT} accent={ACCENT} icon="sentiment_very_satisfied" multiple={false} buttonLabel="Select an image" hint="or drop a JPG, PNG, WEBP or GIF here" />
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 items-start">
      <span data-tool-active hidden aria-hidden="true" />
      <TopLoadingBar active={isWorking} />

      <div className="flex flex-col gap-3 lg:sticky lg:top-24 lg:self-start">
        <div className="bg-surface-container rounded-xl border border-surface-variant p-4 flex items-center justify-center overflow-hidden" style={{ minHeight: 280 }}>
          <canvas ref={previewRef} className="max-w-full max-h-[calc(100vh-12rem)] rounded" />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-label-sm font-label-sm text-on-surface-variant truncate">{file.name}</p>
          <button type="button" onClick={() => setFile(null)} className="inline-flex items-center gap-1.5 text-label-md font-medium text-on-surface-variant hover:text-error"><Icon name="close" className="text-[18px]" /> Change image</button>
        </div>
      </div>

      <div className="lg:sticky lg:top-24 flex flex-col gap-4">
        <div className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-5 flex flex-col gap-4">
          <h2 className="text-headline-md font-bold text-primary">Caption</h2>
          <div className="flex flex-col gap-1.5"><label className="text-label-sm font-label-sm text-on-surface-variant">Top text</label><input type="text" value={opts.top} onChange={(e) => set("top", e.target.value)} placeholder="Top text" className={fieldCls} /></div>
          <div className="flex flex-col gap-1.5"><label className="text-label-sm font-label-sm text-on-surface-variant">Bottom text</label><input type="text" value={opts.bottom} onChange={(e) => set("bottom", e.target.value)} placeholder="Bottom text" className={fieldCls} /></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5"><label className="text-label-sm font-label-sm text-on-surface-variant">Font</label><select value={opts.fontFamily} onChange={(e) => set("fontFamily", e.target.value)} className={fieldCls}>{FONTS.map((f) => <option key={f.value} value={f.value}>{f.label}</option>)}</select></div>
            <div className="flex flex-col gap-1.5"><label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>Size</span><span className="text-primary font-semibold">{opts.fontPct}%</span></label><input type="range" min={4} max={18} step={1} value={opts.fontPct} onChange={(e) => set("fontPct", parseInt(e.target.value, 10))} className="w-full accent-secondary" /></div>
          </div>
          <label className="flex items-center gap-2.5 cursor-pointer"><input type="checkbox" checked={opts.uppercase} onChange={(e) => set("uppercase", e.target.checked)} className="w-4 h-4 accent-secondary" /><span className="text-body-md text-on-surface">UPPERCASE</span></label>
        </div>

        <div className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-5 flex flex-col gap-4">
          <h2 className="text-headline-md font-bold text-primary">Style</h2>
          <BackgroundPicker value={{ transparent: false, color: opts.color }} onChange={(v) => set("color", v.color)} allowTransparent={false} label="Text color" />
          <BackgroundPicker value={{ transparent: false, color: opts.outlineColor }} onChange={(v) => set("outlineColor", v.color)} allowTransparent={false} label="Outline color" />
          <div className="flex flex-col gap-1.5"><label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>Outline thickness</span><span className="text-primary font-semibold">{opts.outlinePct}%</span></label><input type="range" min={0} max={16} step={1} value={opts.outlinePct} onChange={(e) => set("outlinePct", parseInt(e.target.value, 10))} className="w-full accent-secondary" /></div>
        </div>

        <div className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-5 flex flex-col gap-3">
          <h2 className="text-headline-md font-bold text-primary">Export</h2>
          <select value={format} onChange={(e) => setFormat(e.target.value as ExportMime)} className={fieldCls}>
            <option value="image/png">PNG (lossless)</option>
            <option value="image/jpeg">JPG (smaller)</option>
            <option value="image/webp">WEBP</option>
          </select>
          {format !== "image/png" && (
            <div className="flex flex-col gap-1.5"><label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>Quality</span><span className="text-primary font-semibold">{Math.round(quality * 100)}%</span></label><input type="range" min={0.5} max={1} step={0.01} value={quality} onChange={(e) => setQuality(parseFloat(e.target.value))} className="w-full accent-secondary" /></div>
          )}
        </div>

        <button type="button" onClick={exportMeme} disabled={isWorking} className="w-full inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-container text-on-secondary font-semibold py-3.5 rounded-lg transition-colors disabled:opacity-50">
          {isWorking ? (<><Icon name="progress_activity" className="animate-spin text-[20px]" /> Exporting…</>) : (<><Icon name="download" fill className="text-[20px]" /> Export meme</>)}
        </button>

        <div className="rounded-xl border border-outline-variant/40 bg-surface-bright p-4 flex items-start gap-2.5">
          <Icon name="lightbulb" className="text-[18px] mt-0.5" style={{ color: ACCENT }} />
          <p className="text-label-sm font-label-sm text-on-surface-variant"><strong className="text-on-surface">Tip:</strong> long captions wrap automatically. Everything runs in your browser.</p>
        </div>
      </div>
    </section>
  );
}

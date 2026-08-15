"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { ToolWorkspace } from "@/components/tool/ToolWorkspace";
import { SettingsRail, RailAction, RailNote } from "@/components/tool/SettingsRail";
import { Dropzone } from "@/components/image/Dropzone";
import { decodeBitmap, canvasToBlob, downloadBlob, baseName, mimeExt, type ExportMime } from "@/lib/image/raster";
import { useHandoff } from "@/lib/tool-handoff";

const ACCENT = "#5D7091";
const ACCEPT = "image/jpeg,image/png,image/webp";

type Rect = { x: number; y: number; w: number; h: number };
type Mode = "blur" | "pixelate";

function norm(a: { x: number; y: number }, b: { x: number; y: number }): Rect {
  return { x: Math.min(a.x, b.x), y: Math.min(a.y, b.y), w: Math.abs(a.x - b.x), h: Math.abs(a.y - b.y) };
}

function paint(canvas: HTMLCanvasElement, bmp: ImageBitmap, regions: Rect[], draft: Rect | null, mode: Mode, strength: number, outlines: boolean, bg: string | null) {
  const W = bmp.width, H = bmp.height;
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  if (bg) { ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H); }
  ctx.drawImage(bmp, 0, 0);

  const all = draft ? [...regions, draft] : regions;
  for (const r of all) {
    if (r.w < 2 || r.h < 2) continue;
    if (mode === "blur") {
      ctx.save();
      ctx.beginPath(); ctx.rect(r.x, r.y, r.w, r.h); ctx.clip();
      ctx.filter = `blur(${Math.max(2, strength)}px)`;
      ctx.drawImage(bmp, 0, 0);
      ctx.filter = "none";
      ctx.restore();
    } else {
      const px = Math.max(4, strength);
      const sw = Math.max(1, Math.round(r.w / px)), sh = Math.max(1, Math.round(r.h / px));
      const tmp = document.createElement("canvas"); tmp.width = sw; tmp.height = sh;
      const tctx = tmp.getContext("2d"); if (!tctx) continue;
      tctx.drawImage(bmp, r.x, r.y, r.w, r.h, 0, 0, sw, sh);
      ctx.save();
      ctx.beginPath(); ctx.rect(r.x, r.y, r.w, r.h); ctx.clip();
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(tmp, 0, 0, sw, sh, r.x, r.y, r.w, r.h);
      ctx.imageSmoothingEnabled = true;
      ctx.restore();
    }
  }

  if (outlines) {
    ctx.lineWidth = Math.max(1.5, W / 400);
    for (const r of regions) { ctx.strokeStyle = ACCENT; ctx.strokeRect(r.x, r.y, r.w, r.h); }
    if (draft) { ctx.strokeStyle = "#ffffff"; ctx.setLineDash([8, 6]); ctx.strokeRect(draft.x, draft.y, draft.w, draft.h); ctx.setLineDash([]); }
  }
}

export function BlurTool() {
  const [file, setFile] = useState<File | null>(null);
  const [regions, setRegions] = useState<Rect[]>([]);
  const [draft, setDraft] = useState<Rect | null>(null);
  const [mode, setMode] = useState<Mode>("blur");
  const [strength, setStrength] = useState(16);
  const [format, setFormat] = useState<ExportMime>("image/jpeg");
  const [quality, setQuality] = useState(0.92);
  const [isWorking, setIsWorking] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bmpRef = useRef<ImageBitmap | null>(null);
  const startRef = useRef<{ x: number; y: number } | null>(null);

  const repaint = useCallback(() => {
    if (canvasRef.current && bmpRef.current) paint(canvasRef.current, bmpRef.current, regions, draft, mode, strength, true, null);
  }, [regions, draft, mode, strength]);

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
    setRegions([]); setDraft(null); setFile(f);
  }, []);

  useHandoff(onFiles);

  const toNat = (clientX: number, clientY: number) => {
    const c = canvasRef.current!; const rect = c.getBoundingClientRect();
    const x = Math.max(0, Math.min(c.width, (clientX - rect.left) * (c.width / rect.width)));
    const y = Math.max(0, Math.min(c.height, (clientY - rect.top) * (c.height / rect.height)));
    return { x, y };
  };
  const onDown = (e: React.PointerEvent) => { e.preventDefault(); startRef.current = toNat(e.clientX, e.clientY); setDraft({ ...startRef.current, w: 0, h: 0 }); (e.target as Element).setPointerCapture?.(e.pointerId); };
  const onMove = (e: React.PointerEvent) => { if (!startRef.current) return; setDraft(norm(startRef.current, toNat(e.clientX, e.clientY))); };
  const onUp = () => { if (draft && draft.w > 6 && draft.h > 6) setRegions((r) => [...r, draft]); startRef.current = null; setDraft(null); };

  const undo = () => setRegions((r) => r.slice(0, -1));
  const clearRegions = () => setRegions([]);

  const exportImage = async () => {
    if (!file || !bmpRef.current) return;
    if (regions.length === 0) { toast.error("Draw at least one area to blur."); return; }
    setIsWorking(true);
    try {
      const canvas = document.createElement("canvas");
      paint(canvas, bmpRef.current, regions, null, mode, strength, false, format === "image/jpeg" ? "#ffffff" : null);
      const blob = await canvasToBlob(canvas, format, quality);
      downloadBlob(blob, `${baseName(file.name)}_blurred.${mimeExt(format)}`);
      toast.success("Exported — download started.");
    } catch (err) {
      console.error(err);
      toast.error(err instanceof Error ? err.message : "Export failed.");
    } finally {
      setIsWorking(false);
    }
  };

  const fieldCls = "w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";


  if (!file) {
    return (
      <section>
        <TopLoadingBar active={isWorking} />
        <Dropzone onFiles={onFiles} accept={ACCEPT} accent={ACCENT} icon="blur_on" multiple={false} buttonLabel="Select an image" hint="or drop a JPG, PNG or WEBP here" />
      </section>
    );
  }

  return (
    <>
      <TopLoadingBar active={isWorking} />
      <ToolWorkspace
        main={
          <>
            <div className="bg-surface-container rounded-xl border border-surface-variant p-4 flex items-center justify-center overflow-hidden" style={{ minHeight: 300 }}>
              <canvas ref={canvasRef} onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} className="max-w-full max-h-[calc(100vh-12rem)] rounded touch-none cursor-crosshair" style={{ touchAction: "none" }} />
            </div>
            <p className="text-center text-label-sm font-label-sm text-on-surface-variant">
              Drag on the image to draw an area to {mode === "blur" ? "blur" : "pixelate"}. {regions.length > 0 && <span className="font-semibold text-on-surface">{regions.length} area{regions.length === 1 ? "" : "s"}.</span>}
            </p>
            <div className="flex items-center justify-between">
              <p className="text-label-sm font-label-sm text-on-surface-variant truncate">{file.name}</p>
              <button type="button" onClick={() => { setFile(null); setRegions([]); }} className="inline-flex items-center gap-1.5 text-label-md font-medium text-on-surface-variant hover:text-error"><Icon name="close" className="text-[18px]" /> Change image</button>
            </div>
          </>
        }
        rail={
          <SettingsRail
            title="Censor Settings"
            icon="blur_on"
            accent={ACCENT}
            footer={
              <>
                <RailNote>The blur is baked into the exported file — all in your browser.</RailNote>
                <RailAction onClick={exportImage} busy={isWorking} busyLabel="Exporting…" icon="download">
                  Export image
                </RailAction>
              </>
            }
          >
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-1 rounded-lg bg-surface-container p-1">
            {([["blur", "Blur"], ["pixelate", "Pixelate"]] as [Mode, string][]).map(([v, l]) => (
              <button key={v} type="button" onClick={() => setMode(v)} className={`rounded-md px-3 py-2 text-body-md font-semibold transition-colors ${mode === v ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant hover:text-primary"}`}>{l}</button>
            ))}
          </div>
          <div className="flex flex-col gap-1.5"><label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>{mode === "blur" ? "Blur strength" : "Pixel size"}</span><span className="text-primary font-semibold">{strength}px</span></label><input type="range" min={4} max={60} step={1} value={strength} onChange={(e) => setStrength(parseInt(e.target.value, 10))} className="w-full accent-secondary" /></div>
          <div className="flex items-center gap-2">
            <button type="button" onClick={undo} disabled={regions.length === 0} className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-surface-variant py-2 text-body-md font-semibold text-on-surface-variant hover:text-primary disabled:opacity-40 transition-colors"><Icon name="undo" className="text-[18px]" /> Undo</button>
            <button type="button" onClick={clearRegions} disabled={regions.length === 0} className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-surface-variant py-2 text-body-md font-semibold text-on-surface-variant hover:text-error disabled:opacity-40 transition-colors"><Icon name="delete_sweep" className="text-[18px]" /> Clear</button>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-outline-variant/60 pt-5">
          <h3 className="text-body-lg font-bold text-primary">Export</h3>
          <select value={format} onChange={(e) => setFormat(e.target.value as ExportMime)} className={fieldCls}>
            <option value="image/jpeg">JPG</option>
            <option value="image/png">PNG</option>
            <option value="image/webp">WEBP</option>
          </select>
          {format !== "image/png" && (
            <div className="flex flex-col gap-1.5"><label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>Quality</span><span className="text-primary font-semibold">{Math.round(quality * 100)}%</span></label><input type="range" min={0.5} max={1} step={0.01} value={quality} onChange={(e) => setQuality(parseFloat(e.target.value))} className="w-full accent-secondary" /></div>
          )}
        </div>
          </SettingsRail>
        }
      />
    </>
  );
}

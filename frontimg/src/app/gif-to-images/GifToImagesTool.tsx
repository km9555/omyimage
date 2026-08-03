"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { BackgroundPicker, resolveBg, type BgValue } from "@/components/BackgroundPicker";
import { canvasToBlob, downloadBlob, zipAndDownload, baseName, mimeExt, type ExportMime } from "@/lib/image/raster";
import { useHandoff } from "@/lib/tool-handoff";

const ACCENT = "#DB2777";
const ACCEPT = "image/gif,.gif";
const MAX_THUMBS = 60;

type Format = ExportMime;
const FORMATS: { label: string; value: Format }[] = [
  { label: "PNG", value: "image/png" },
  { label: "JPG", value: "image/jpeg" },
  { label: "WEBP", value: "image/webp" },
];

export function GifToImagesTool() {
  const [file, setFile] = useState<File | null>(null);
  const [thumbs, setThumbs] = useState<string[]>([]);
  const [count, setCount] = useState(0);
  const [dims, setDims] = useState<{ w: number; h: number } | null>(null);
  const [format, setFormat] = useState<Format>("image/png");
  const [quality, setQuality] = useState(0.92);
  const [bg, setBg] = useState<BgValue>({ transparent: false, color: "#ffffff" });
  const [isWorking, setIsWorking] = useState(false);

  const framesRef = useRef<HTMLCanvasElement[]>([]);

  useEffect(() => () => { thumbs.forEach((t) => URL.revokeObjectURL(t)); }, [thumbs]);

  const loadFile = useCallback(async (incoming: FileList | File[]) => {
    const f = Array.from(incoming).find((x) => x.type === "image/gif" || /\.gif$/i.test(x.name));
    if (!f) { toast.error("Please select a GIF file."); return; }
    setIsWorking(true);
    try {
      const { parseGIF, decompressFrames } = await import("gifuct-js");
      const buffer = await f.arrayBuffer();
      const gif = parseGIF(buffer);
      const frames = decompressFrames(gif, true);
      if (!frames.length) throw new Error("No frames found in this GIF.");
      const gifW = gif.lsd.width, gifH = gif.lsd.height;

      const full = document.createElement("canvas");
      full.width = gifW; full.height = gifH;
      const fctx = full.getContext("2d", { willReadFrequently: true })!;
      const temp = document.createElement("canvas");
      const tctx = temp.getContext("2d")!;

      const out: HTMLCanvasElement[] = [];
      const thumbUrls: string[] = [];
      let prevDisposal = 0;
      let prevRect: { x: number; y: number; w: number; h: number } | null = null;

      for (const frame of frames) {
        if (prevDisposal === 2 && prevRect) fctx.clearRect(prevRect.x, prevRect.y, prevRect.w, prevRect.h);
        const { width, height, left, top } = frame.dims;
        temp.width = width; temp.height = height;
        tctx.putImageData(new ImageData(new Uint8ClampedArray(frame.patch), width, height), 0, 0);
        fctx.drawImage(temp, left, top);

        const snap = document.createElement("canvas");
        snap.width = gifW; snap.height = gifH;
        snap.getContext("2d")!.drawImage(full, 0, 0);
        out.push(snap);

        prevDisposal = frame.disposalType ?? 0;
        prevRect = { x: left, y: top, w: width, h: height };
      }

      // Build small thumbnails (capped) for display.
      for (let i = 0; i < Math.min(out.length, MAX_THUMBS); i++) {
        const blob = await canvasToBlob(out[i], "image/png");
        thumbUrls.push(URL.createObjectURL(blob));
      }

      framesRef.current = out;
      setThumbs((prev) => { prev.forEach((t) => URL.revokeObjectURL(t)); return thumbUrls; });
      setCount(out.length);
      setDims({ w: gifW, h: gifH });
      setFile(f);
      toast.success(`Extracted ${out.length} frames.`);
    } catch (err) {
      console.error(err);
      toast.error(err instanceof Error ? err.message : "Couldn't read that GIF.");
    } finally {
      setIsWorking(false);
    }
  }, []);

  useHandoff(loadFile);

  const reset = () => { thumbs.forEach((t) => URL.revokeObjectURL(t)); setThumbs([]); framesRef.current = []; setFile(null); setCount(0); setDims(null); };

  const encodeFrame = async (canvas: HTMLCanvasElement): Promise<Blob> => {
    if (format === "image/jpeg") {
      const flat = document.createElement("canvas");
      flat.width = canvas.width; flat.height = canvas.height;
      const ctx = flat.getContext("2d")!;
      ctx.fillStyle = resolveBg(bg) ?? "#ffffff"; ctx.fillRect(0, 0, flat.width, flat.height);
      ctx.drawImage(canvas, 0, 0);
      return canvasToBlob(flat, format, quality);
    }
    return canvasToBlob(canvas, format, quality);
  };

  const downloadAll = async () => {
    if (framesRef.current.length === 0) return;
    setIsWorking(true);
    try {
      const ext = mimeExt(format);
      const pad = String(framesRef.current.length).length;
      const files = await Promise.all(framesRef.current.map(async (c, i) => ({
        name: `${baseName(file?.name ?? "gif")}_frame_${String(i + 1).padStart(pad, "0")}.${ext}`,
        blob: await encodeFrame(c),
      })));
      await zipAndDownload(files, `${baseName(file?.name ?? "gif")}_frames.zip`);
      toast.success(`Downloaded ${files.length} frames as a ZIP.`);
    } catch (err) {
      console.error(err);
      toast.error("Couldn't build the ZIP.");
    } finally {
      setIsWorking(false);
    }
  };

  const downloadOne = async (i: number) => {
    const c = framesRef.current[i];
    if (!c) return;
    const blob = await encodeFrame(c);
    downloadBlob(blob, `${baseName(file?.name ?? "gif")}_frame_${i + 1}.${mimeExt(format)}`);
  };

  const fieldCls = "w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";

  if (!file) {
    return (
      <section>
        <TopLoadingBar active={isWorking} />
        <Dropzone onFiles={loadFile} accept={ACCEPT} accent={ACCENT} icon="burst_mode" multiple={false} buttonLabel="Select a GIF" hint="or drop an animated .gif here" />
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 items-start">
      <span data-tool-active hidden aria-hidden="true" />
      <TopLoadingBar active={isWorking} />

      <div className="flex flex-col gap-3 lg:sticky lg:top-24 lg:self-start">
        <div className="bg-surface-container rounded-xl border border-surface-variant p-3 overflow-hidden" style={{ minHeight: 220 }}>
          <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 max-h-[46vh] overflow-y-auto pr-1">
            {thumbs.map((t, i) => (
              <button key={i} type="button" onClick={() => downloadOne(i)} title={`Download frame ${i + 1}`} className="relative group rounded-lg overflow-hidden border border-surface-variant bg-surface-container-lowest aspect-square">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t} alt={`Frame ${i + 1}`} className="w-full h-full object-contain" />
                <span className="absolute bottom-0 inset-x-0 text-[10px] text-center bg-black/50 text-white py-0.5">{i + 1}</span>
              </button>
            ))}
          </div>
        </div>
        <p className="text-center text-label-sm font-label-sm text-on-surface-variant">
          <span className="font-semibold text-on-surface">{count}</span> frames{dims && <> · {dims.w} × {dims.h} px</>}
          {count > MAX_THUMBS && <> · showing first {MAX_THUMBS}, all included in the ZIP</>}
        </p>
        <button type="button" onClick={reset} className="self-center inline-flex items-center gap-1.5 text-label-md font-medium text-on-surface-variant hover:text-error"><Icon name="close" className="text-[18px]" /> Change GIF</button>
      </div>

      <div className="lg:sticky lg:top-24 flex flex-col gap-4">
        <div className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-5 flex flex-col gap-4">
          <h2 className="text-headline-md font-bold text-primary">Output</h2>
          <div className="flex flex-col gap-1.5">
            <label className="text-label-sm font-label-sm text-on-surface-variant">Format</label>
            <select value={format} onChange={(e) => setFormat(e.target.value as Format)} className={fieldCls}>{FORMATS.map((f) => <option key={f.value} value={f.value}>{f.label}</option>)}</select>
          </div>
          {format !== "image/png" && (
            <div className="flex flex-col gap-1.5"><label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>Quality</span><span className="text-primary font-semibold">{Math.round(quality * 100)}%</span></label><input type="range" min={0.5} max={1} step={0.01} value={quality} onChange={(e) => setQuality(parseFloat(e.target.value))} className="w-full accent-secondary" /></div>
          )}
          {format === "image/jpeg" && <BackgroundPicker value={bg} onChange={setBg} allowTransparent={false} label="JPG background" />}
        </div>

        <button type="button" onClick={downloadAll} disabled={isWorking} className="w-full inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-container text-on-secondary font-semibold py-3.5 rounded-lg transition-colors disabled:opacity-50">
          {isWorking ? (<><Icon name="progress_activity" className="animate-spin text-[20px]" /> Working…</>) : (<><Icon name="folder_zip" className="text-[20px]" /> Download all {count} frames (ZIP)</>)}
        </button>

        <div className="rounded-xl border border-outline-variant/40 bg-surface-bright p-4 flex items-start gap-2.5">
          <Icon name="lightbulb" className="text-[18px] mt-0.5" style={{ color: ACCENT }} />
          <p className="text-label-sm font-label-sm text-on-surface-variant"><strong className="text-on-surface">Tip:</strong> click any frame to download it on its own. Every frame is fully composited. Everything runs in your browser.</p>
        </div>
      </div>
    </section>
  );
}

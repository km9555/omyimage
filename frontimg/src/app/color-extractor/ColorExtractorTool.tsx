"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { decodeBitmap, downloadBlob, canvasToBlob, baseName } from "@/lib/image/raster";
import { useHandoff } from "@/lib/tool-handoff";

const ACCENT = "#A855F7";
const ACCEPT = "image/jpeg,image/png,image/webp,image/gif,image/bmp";

type Px = [number, number, number];
type Swatch = { color: Px; count: number };

const hex = ([r, g, b]: Px) => "#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("").toUpperCase();
const rgbStr = ([r, g, b]: Px) => `rgb(${r}, ${g}, ${b})`;
const luminance = ([r, g, b]: Px) => 0.299 * r + 0.587 * g + 0.114 * b;

/** Median-cut color quantization → `count` representative colors with populations. */
function medianCut(pixels: Px[], count: number): Swatch[] {
  if (pixels.length === 0) return [];
  let buckets: Px[][] = [pixels];
  while (buckets.length < count) {
    let idx = -1, maxRange = -1, channel = 0;
    buckets.forEach((b, i) => {
      if (b.length < 2) return;
      const ranges = [0, 1, 2].map((c) => {
        let mn = 255, mx = 0;
        for (const p of b) { if (p[c] < mn) mn = p[c]; if (p[c] > mx) mx = p[c]; }
        return mx - mn;
      });
      const localMax = Math.max(ranges[0], ranges[1], ranges[2]);
      if (localMax > maxRange) { maxRange = localMax; idx = i; channel = ranges.indexOf(localMax); }
    });
    if (idx === -1) break;
    const b = buckets[idx];
    b.sort((a, z) => a[channel] - z[channel]);
    const mid = Math.floor(b.length / 2);
    buckets.splice(idx, 1, b.slice(0, mid), b.slice(mid));
  }
  return buckets
    .map((b) => {
      const n = b.length || 1;
      const s = [0, 0, 0];
      for (const p of b) { s[0] += p[0]; s[1] += p[1]; s[2] += p[2]; }
      return { color: [Math.round(s[0] / n), Math.round(s[1] / n), Math.round(s[2] / n)] as Px, count: b.length };
    })
    .filter((s) => s.count > 0)
    .sort((a, z) => z.count - a.count);
}

export function ColorExtractorTool() {
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState<string | null>(null);
  const [count, setCount] = useState(8);
  const [palette, setPalette] = useState<Swatch[]>([]);
  const [isWorking, setIsWorking] = useState(false);

  const pixelsRef = useRef<Px[] | null>(null);

  useEffect(() => () => { if (url) URL.revokeObjectURL(url); }, [url]);

  const extract = useCallback((n: number) => {
    if (!pixelsRef.current) return;
    setPalette(medianCut(pixelsRef.current.slice(), n));
  }, []);

  const loadFile = useCallback(async (incoming: FileList | File[]) => {
    const f = Array.from(incoming).find((x) => x.type.startsWith("image/"));
    if (!f) { toast.error("Please select an image file."); return; }
    setIsWorking(true);
    try {
      const bmp = await decodeBitmap(f);
      // Downscale to ≤ 120px on the longest side for fast, representative sampling.
      const scale = Math.min(1, 120 / Math.max(bmp.width, bmp.height));
      const w = Math.max(1, Math.round(bmp.width * scale)), h = Math.max(1, Math.round(bmp.height * scale));
      const canvas = document.createElement("canvas");
      canvas.width = w; canvas.height = h;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) throw new Error("Canvas not supported.");
      ctx.drawImage(bmp, 0, 0, w, h);
      bmp.close();
      const data = ctx.getImageData(0, 0, w, h).data;
      const px: Px[] = [];
      for (let i = 0; i < data.length; i += 4) {
        if (data[i + 3] < 128) continue; // skip transparent
        px.push([data[i], data[i + 1], data[i + 2]]);
      }
      pixelsRef.current = px;
      setUrl((prev) => { if (prev) URL.revokeObjectURL(prev); return URL.createObjectURL(f); });
      setFile(f);
      setPalette(medianCut(px.slice(), count));
    } catch {
      toast.error("Couldn't read that image.");
    } finally {
      setIsWorking(false);
    }
  }, [count]);

  useHandoff(loadFile);

  const reset = () => { if (url) URL.revokeObjectURL(url); setFile(null); setUrl(null); setPalette([]); pixelsRef.current = null; };

  const onCount = (n: number) => { setCount(n); extract(n); };
  const copy = (text: string) => { navigator.clipboard?.writeText(text).then(() => toast.success(`Copied ${text}`)).catch(() => toast.error("Copy failed.")); };
  const copyAll = () => copy(palette.map((s) => hex(s.color)).join("\n"));

  const downloadPalette = async () => {
    if (palette.length === 0) return;
    const sw = 200, labelH = 56;
    const canvas = document.createElement("canvas");
    canvas.width = sw * palette.length; canvas.height = sw + labelH;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#ffffff"; ctx.fillRect(0, 0, canvas.width, canvas.height);
    palette.forEach((s, i) => {
      const x = i * sw;
      ctx.fillStyle = hex(s.color); ctx.fillRect(x, 0, sw, sw);
      ctx.fillStyle = luminance(s.color) > 140 ? "#111" : "#fff";
      ctx.font = "bold 22px Inter, Arial, sans-serif"; ctx.textAlign = "center";
      ctx.fillText(hex(s.color), x + sw / 2, sw - 18);
      ctx.fillStyle = "#444"; ctx.font = "16px Inter, Arial, sans-serif";
      ctx.fillText(rgbStr(s.color), x + sw / 2, sw + 34);
    });
    const blob = await canvasToBlob(canvas, "image/png");
    downloadBlob(blob, `${baseName(file?.name ?? "palette")}_palette.png`);
  };

  if (!file || !url) {
    return (
      <section>
        <TopLoadingBar active={isWorking} />
        <Dropzone onFiles={loadFile} accept={ACCEPT} accent={ACCENT} icon="palette" multiple={false} buttonLabel="Select an image" hint="or drop a JPG, PNG, WEBP or GIF here" />
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 items-start">
      <span data-tool-active hidden aria-hidden="true" />
      <TopLoadingBar active={isWorking} />

      <div className="flex flex-col gap-3 lg:sticky lg:top-24 lg:self-start">
        <div className="bg-surface-container rounded-xl border border-surface-variant p-3 flex items-center justify-center overflow-hidden" style={{ minHeight: 220 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={url} alt={file.name} className="max-w-full max-h-[46vh] rounded" />
        </div>
        {palette.length > 0 && (
          <div className="flex rounded-lg overflow-hidden border border-surface-variant h-10">
            {palette.map((s, i) => <div key={i} className="flex-1" style={{ backgroundColor: hex(s.color) }} title={hex(s.color)} />)}
          </div>
        )}
        <p className="text-center text-label-sm font-label-sm text-on-surface-variant truncate">{file.name}</p>
        <button type="button" onClick={reset} className="self-center inline-flex items-center gap-1.5 text-label-md font-medium text-on-surface-variant hover:text-error"><Icon name="close" className="text-[18px]" /> Change image</button>
      </div>

      <div className="lg:sticky lg:top-24 flex flex-col gap-4">
        <div className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-5 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-headline-md font-bold text-primary">Palette</h2>
            <button type="button" onClick={copyAll} className="inline-flex items-center gap-1.5 text-label-md font-semibold text-secondary hover:underline"><Icon name="content_copy" className="text-[18px]" /> Copy all</button>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>Colors</span><span className="text-primary font-semibold">{count}</span></label>
            <input type="range" min={2} max={16} step={1} value={count} onChange={(e) => onCount(parseInt(e.target.value, 10))} className="w-full accent-secondary" />
          </div>
          <ul className="flex flex-col gap-2">
            {palette.map((s, i) => (
              <li key={i} className="flex items-center gap-3 rounded-lg bg-surface-container px-3 py-2">
                <span className="w-9 h-9 rounded-lg border border-surface-variant shrink-0" style={{ backgroundColor: hex(s.color) }} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-body-md font-semibold text-primary font-label-sm">{hex(s.color)}</p>
                  <p className="text-label-sm font-label-sm text-on-surface-variant">{rgbStr(s.color)}</p>
                </div>
                <button type="button" onClick={() => copy(hex(s.color))} aria-label={`Copy ${hex(s.color)}`} className="flex h-8 w-8 items-center justify-center rounded-lg text-secondary hover:bg-secondary/10 transition-colors shrink-0"><Icon name="content_copy" className="text-[18px]" /></button>
              </li>
            ))}
          </ul>
        </div>

        <button type="button" onClick={downloadPalette} className="w-full inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-container text-on-secondary font-semibold py-3.5 rounded-lg transition-colors">
          <Icon name="download" className="text-[20px]" /> Download palette (PNG)
        </button>
      </div>
    </section>
  );
}

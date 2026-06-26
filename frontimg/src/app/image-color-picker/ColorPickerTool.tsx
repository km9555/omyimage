"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { decodeBitmap } from "@/lib/image/raster";

const ACCENT = "#10B981";
const ACCEPT = "image/jpeg,image/png,image/webp,image/gif,image/bmp";

type RGB = { r: number; g: number; b: number };

const hex = ({ r, g, b }: RGB) => "#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("").toUpperCase();
const rgbStr = ({ r, g, b }: RGB) => `rgb(${r}, ${g}, ${b})`;
function hslStr({ r, g, b }: RGB): string {
  const rn = r / 255, gn = g / 255, bn = b / 255;
  const max = Math.max(rn, gn, bn), min = Math.min(rn, gn, bn);
  let h = 0; const l = (max + min) / 2;
  const d = max - min;
  const s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));
  if (d !== 0) {
    if (max === rn) h = ((gn - bn) / d) % 6;
    else if (max === gn) h = (bn - rn) / d + 2;
    else h = (rn - gn) / d + 4;
    h *= 60; if (h < 0) h += 360;
  }
  return `hsl(${Math.round(h)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
}

export function ColorPickerTool() {
  const [file, setFile] = useState<File | null>(null);
  const [nat, setNat] = useState<{ w: number; h: number } | null>(null);
  const [picked, setPicked] = useState<RGB | null>(null);
  const [hoverCol, setHoverCol] = useState<RGB | null>(null);
  const [history, setHistory] = useState<RGB[]>([]);
  const [loupe, setLoupe] = useState<{ x: number; y: number; show: boolean }>({ x: 0, y: 0, show: false });
  const [isWorking, setIsWorking] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const loupeRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const bmpRef = useRef<ImageBitmap | null>(null);

  const loadFile = useCallback(async (incoming: FileList | File[]) => {
    const f = Array.from(incoming).find((x) => x.type.startsWith("image/"));
    if (!f) { toast.error("Please select an image file."); return; }
    setIsWorking(true);
    try {
      const bmp = await decodeBitmap(f);
      bmpRef.current?.close();
      bmpRef.current = bmp;
      setFile(f); setNat({ w: bmp.width, h: bmp.height }); setPicked(null); setHistory([]);
    } catch {
      toast.error("Couldn't read that image.");
    } finally {
      setIsWorking(false);
    }
  }, []);

  // Draw the stored bitmap onto the (loaded-view) canvas once it's mounted.
  useEffect(() => {
    const bmp = bmpRef.current, canvas = canvasRef.current;
    if (!bmp || !canvas || !nat) return;
    canvas.width = nat.w; canvas.height = nat.h;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    ctx.drawImage(bmp, 0, 0);
    ctxRef.current = ctx;
  }, [file, nat]);

  const reset = () => { bmpRef.current?.close(); bmpRef.current = null; setFile(null); setNat(null); setPicked(null); setHoverCol(null); setHistory([]); ctxRef.current = null; };

  const sampleAt = (clientX: number, clientY: number): { col: RGB; nx: number; ny: number } | null => {
    const canvas = canvasRef.current, ctx = ctxRef.current, n = nat;
    if (!canvas || !ctx || !n) return null;
    const rect = canvas.getBoundingClientRect();
    const nx = Math.max(0, Math.min(n.w - 1, Math.round(((clientX - rect.left) / rect.width) * n.w)));
    const ny = Math.max(0, Math.min(n.h - 1, Math.round(((clientY - rect.top) / rect.height) * n.h)));
    const d = ctx.getImageData(nx, ny, 1, 1).data;
    return { col: { r: d[0], g: d[1], b: d[2] }, nx, ny };
  };

  const drawLoupe = (nx: number, ny: number) => {
    const lc = loupeRef.current, ctx = ctxRef.current;
    if (!lc || !ctx) return;
    const lctx = lc.getContext("2d");
    if (!lctx) return;
    const size = 11; // source pixels sampled
    const scale = lc.width / size;
    lctx.imageSmoothingEnabled = false;
    lctx.clearRect(0, 0, lc.width, lc.height);
    lctx.drawImage(canvasRef.current!, nx - (size - 1) / 2, ny - (size - 1) / 2, size, size, 0, 0, lc.width, lc.height);
    lctx.strokeStyle = "rgba(0,0,0,0.6)";
    lctx.lineWidth = 1;
    lctx.strokeRect(Math.floor(lc.width / 2 - scale / 2), Math.floor(lc.height / 2 - scale / 2), scale, scale);
    lctx.strokeStyle = "#fff";
    lctx.strokeRect(Math.floor(lc.width / 2 - scale / 2) + 1, Math.floor(lc.height / 2 - scale / 2) + 1, scale - 2, scale - 2);
  };

  const onMove = (e: React.MouseEvent) => {
    const s = sampleAt(e.clientX, e.clientY);
    if (!s) return;
    setHoverCol(s.col);
    const wrap = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setLoupe({ x: e.clientX - wrap.left, y: e.clientY - wrap.top, show: true });
    drawLoupe(s.nx, s.ny);
  };

  const onClick = (e: React.MouseEvent) => {
    const s = sampleAt(e.clientX, e.clientY);
    if (!s) return;
    setPicked(s.col);
    setHistory((prev) => [s.col, ...prev.filter((c) => hex(c) !== hex(s.col))].slice(0, 12));
  };

  const copy = (text: string) => { navigator.clipboard?.writeText(text).then(() => toast.success(`Copied ${text}`)).catch(() => toast.error("Copy failed.")); };

  useEffect(() => () => { bmpRef.current?.close(); ctxRef.current = null; }, []);

  if (!file || !nat) {
    return (
      <section>
        <TopLoadingBar active={isWorking} />
        <Dropzone onFiles={loadFile} accept={ACCEPT} accent={ACCENT} icon="colorize" multiple={false} buttonLabel="Select an image" hint="or drop a JPG, PNG, WEBP or GIF here" />
      </section>
    );
  }

  const ColorRow = ({ label, value }: { label: string; value: string }) => (
    <div className="flex items-center justify-between gap-3 rounded-lg bg-surface-container px-3 py-2">
      <div className="min-w-0">
        <p className="text-label-sm font-label-sm text-on-surface-variant">{label}</p>
        <p className="truncate text-body-md font-semibold text-primary font-label-sm">{value}</p>
      </div>
      <button type="button" onClick={() => copy(value)} aria-label={`Copy ${label}`} className="flex h-8 w-8 items-center justify-center rounded-lg text-secondary hover:bg-secondary/10 transition-colors shrink-0"><Icon name="content_copy" className="text-[18px]" /></button>
    </div>
  );

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 items-start">
      <span data-tool-active hidden aria-hidden="true" />
      <TopLoadingBar active={isWorking} />

      <div className="flex flex-col gap-3 lg:sticky lg:top-24 lg:self-start">
        <div className="relative bg-surface-container rounded-xl border border-surface-variant p-3 flex items-center justify-center overflow-hidden" style={{ minHeight: 220 }}>
          <canvas
            ref={canvasRef}
            onMouseMove={onMove}
            onMouseLeave={() => setLoupe((l) => ({ ...l, show: false }))}
            onClick={onClick}
            className="max-w-full max-h-[60vh] rounded cursor-crosshair"
          />
          <div className="pointer-events-none absolute z-10" style={{ left: loupe.x + 16, top: loupe.y + 16, display: loupe.show ? "block" : "none" }}>
            <canvas ref={loupeRef} width={110} height={110} className="rounded-full border-2 border-white shadow-lg bg-surface-container-lowest" />
            {hoverCol && <div className="mt-1 text-center text-[11px] font-semibold text-on-surface bg-surface-container-lowest/90 rounded px-1.5 py-0.5">{hex(hoverCol)}</div>}
          </div>
        </div>
        <p className="text-center text-label-sm font-label-sm text-on-surface-variant">
          Click anywhere on <span className="font-semibold text-on-surface">{file.name}</span> to pick a color.
        </p>
        <button type="button" onClick={reset} className="self-center inline-flex items-center gap-1.5 text-label-md font-medium text-on-surface-variant hover:text-error"><Icon name="close" className="text-[18px]" /> Change image</button>
      </div>

      <div className="lg:sticky lg:top-24 flex flex-col gap-4">
        <div className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-5 flex flex-col gap-4">
          <h2 className="text-headline-md font-bold text-primary">Picked color</h2>
          <div className="h-24 w-full rounded-lg border border-surface-variant" style={{ backgroundColor: picked ? hex(picked) : "transparent" }} />
          {picked ? (
            <div className="flex flex-col gap-2">
              <ColorRow label="HEX" value={hex(picked)} />
              <ColorRow label="RGB" value={rgbStr(picked)} />
              <ColorRow label="HSL" value={hslStr(picked)} />
            </div>
          ) : (
            <p className="text-body-md text-on-surface-variant">Click the image to sample a color.</p>
          )}
        </div>

        {history.length > 0 && (
          <div className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-5 flex flex-col gap-3">
            <h2 className="text-headline-md font-bold text-primary">Recent</h2>
            <div className="flex flex-wrap gap-2">
              {history.map((c, i) => (
                <button key={`${hex(c)}-${i}`} type="button" onClick={() => copy(hex(c))} title={hex(c)} className="w-9 h-9 rounded-lg border border-surface-variant hover:scale-110 transition-transform" style={{ backgroundColor: hex(c) }} aria-label={`Copy ${hex(c)}`} />
              ))}
            </div>
          </div>
        )}

        <div className="rounded-xl border border-outline-variant/40 bg-surface-bright p-4 flex items-start gap-2.5">
          <Icon name="lightbulb" className="text-[18px] mt-0.5" style={{ color: ACCENT }} />
          <p className="text-label-sm font-label-sm text-on-surface-variant"><strong className="text-on-surface">Tip:</strong> hover to preview with the magnifier, click to lock a color, and tap any swatch to copy. Everything runs in your browser.</p>
        </div>
      </div>
    </section>
  );
}

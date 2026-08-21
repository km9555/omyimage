"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { ToolWorkspace, filesHeader } from "@/components/tool/ToolWorkspace";
import { SettingsRail } from "@/components/tool/SettingsRail";
import { Dropzone } from "@/components/image/Dropzone";
import { decodeBitmap, canvasToBlob, downloadBlob, baseName } from "@/lib/image/raster";
import {
  buildColorStats,
  rankCandidates,
  takePalette,
  hexOf,
  rgbCss,
  type RGB,
  type ColorStats,
  type Candidate,
  type Swatch,
} from "@/lib/image/palette";
import { useHandoff } from "@/lib/tool-handoff";

const ACCENT = "#3F9E7C";
const ACCEPT = "image/jpeg,image/png,image/webp,image/gif,image/bmp";

function hslStr([r, g, b]: RGB): string {
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

const luminance = ([r, g, b]: RGB) => 0.299 * r + 0.587 * g + 0.114 * b;
const sharePct = (share: number) =>
  share >= 0.01 ? `${Math.round(share * 100)}%` : `${(share * 100).toFixed(1)}%`;

export function ColorPickerTool() {
  const [file, setFile] = useState<File | null>(null);
  const [nat, setNat] = useState<{ w: number; h: number } | null>(null);
  const [picked, setPicked] = useState<RGB | null>(null);
  const [hoverCol, setHoverCol] = useState<RGB | null>(null);
  const [history, setHistory] = useState<RGB[]>([]);
  const [loupe, setLoupe] = useState<{ x: number; y: number; show: boolean }>({ x: 0, y: 0, show: false });
  const [isWorking, setIsWorking] = useState(false);
  const [count, setCount] = useState(8);
  const [palette, setPalette] = useState<Swatch[]>([]);
  const [paletteNote, setPaletteNote] = useState<string | null>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const loupeRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const bmpRef = useRef<ImageBitmap | null>(null);
  const statsRef = useRef<ColorStats | null>(null);
  const rankedRef = useRef<Candidate[] | null>(null);
  // Read through a ref so `loadFile` keeps a stable identity and doesn't
  // re-register with useHandoff on every slider tick.
  const countRef = useRef(count);

  const loadFile = useCallback(async (incoming: FileList | File[]) => {
    const f = Array.from(incoming).find((x) => x.type.startsWith("image/"));
    if (!f) { toast.error("Please select an image file."); return; }
    setIsWorking(true);
    try {
      const bmp = await decodeBitmap(f);
      bmpRef.current?.close();
      bmpRef.current = bmp;

      // The palette reads the same bitmap the picker canvas uses — one decode,
      // one upload. buildColorStats does not close it; bmpRef owns it.
      const stats = buildColorStats(bmp);
      statsRef.current = stats;
      if (stats) {
        const ranked = rankCandidates(stats);
        rankedRef.current = ranked;
        setPalette(takePalette(stats, ranked, countRef.current));
        setPaletteNote(null);
      } else {
        rankedRef.current = null;
        setPalette([]);
        setPaletteNote("This image is fully transparent — there are no colors to extract.");
      }

      setFile(f); setNat({ w: bmp.width, h: bmp.height }); setPicked(null); setHistory([]);
    } catch {
      toast.error("Couldn't read that image.");
    } finally {
      setIsWorking(false);
    }
  }, []);

  useHandoff(loadFile);

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

  const reset = () => {
    bmpRef.current?.close(); bmpRef.current = null;
    statsRef.current = null; rankedRef.current = null;
    setFile(null); setNat(null); setPicked(null); setHoverCol(null); setHistory([]);
    setPalette([]); setPaletteNote(null); ctxRef.current = null;
  };

  const sampleAt = (clientX: number, clientY: number): { col: RGB; nx: number; ny: number } | null => {
    const canvas = canvasRef.current, ctx = ctxRef.current, n = nat;
    if (!canvas || !ctx || !n) return null;
    const rect = canvas.getBoundingClientRect();
    const nx = Math.max(0, Math.min(n.w - 1, Math.round(((clientX - rect.left) / rect.width) * n.w)));
    const ny = Math.max(0, Math.min(n.h - 1, Math.round(((clientY - rect.top) / rect.height) * n.h)));
    const d = ctx.getImageData(nx, ny, 1, 1).data;
    return { col: [d[0], d[1], d[2]], nx, ny };
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

  const pick = (col: RGB) => {
    setPicked(col);
    setHistory((prev) => [col, ...prev.filter((c) => hexOf(c) !== hexOf(col))].slice(0, 12));
  };

  const onClick = (e: React.MouseEvent) => {
    const s = sampleAt(e.clientX, e.clientY);
    if (s) pick(s.col);
  };

  const onCount = (n: number) => {
    setCount(n);
    countRef.current = n;
    const s = statsRef.current, ranked = rankedRef.current;
    if (s && ranked) setPalette(takePalette(s, ranked, n));
  };

  const copy = (text: string) => { navigator.clipboard?.writeText(text).then(() => toast.success(`Copied ${text}`)).catch(() => toast.error("Copy failed.")); };
  const copyAll = () => copy(palette.map((s) => hexOf(s.color)).join("\n"));

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
      ctx.fillStyle = hexOf(s.color); ctx.fillRect(x, 0, sw, sw);
      ctx.fillStyle = luminance(s.color) > 140 ? "#111" : "#fff";
      ctx.font = "bold 22px Inter, Arial, sans-serif"; ctx.textAlign = "center";
      ctx.fillText(hexOf(s.color), x + sw / 2, sw - 44);
      ctx.font = "16px Inter, Arial, sans-serif";
      ctx.fillText(sharePct(s.share), x + sw / 2, sw - 18);
      ctx.fillStyle = "#444"; ctx.font = "16px Inter, Arial, sans-serif";
      ctx.fillText(rgbCss(s.color), x + sw / 2, sw + 34);
    });
    const blob = await canvasToBlob(canvas, "image/png");
    downloadBlob(blob, `${baseName(file?.name ?? "palette")}_palette.png`);
  };

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
    <>
      <TopLoadingBar active={isWorking} />
      <ToolWorkspace
        /* Below `md` this becomes the full-screen app shell. One image, so the
           header names it directly and the rail moves into a sheet. */
        mobile={{
          ...filesHeader(file ? [file] : []),
          onBack: reset,
          backLabel: "Clear image",
          settingsTitle: "Palette options",
          cta: {
            icon: "content_copy",
            label: "Copy all",
            busy: isWorking,
            onClick: copyAll,
          },
        }}
        main={
          <>
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
            {hoverCol && <div className="mt-1 text-center text-[11px] font-semibold text-on-surface bg-surface-container-lowest/90 rounded px-1.5 py-0.5">{hexOf(hoverCol)}</div>}
          </div>
        </div>
        {palette.length > 0 && (
          <div className="flex rounded-lg overflow-hidden border border-surface-variant h-10">
            {palette.map((s) => (
              <button
                key={hexOf(s.color)}
                type="button"
                onClick={() => pick(s.color)}
                title={`${hexOf(s.color)} — ${sharePct(s.share)}`}
                aria-label={`Pick ${hexOf(s.color)}`}
                style={{ backgroundColor: hexOf(s.color), flex: Math.max(s.share, 0.02) }}
              />
            ))}
          </div>
        )}
        <p className="text-center text-label-sm font-label-sm text-on-surface-variant">
          Click anywhere on <span className="font-semibold text-on-surface">{file.name}</span> to pick a color.
        </p>
        <button type="button" onClick={reset} className="self-center inline-flex items-center gap-1.5 text-label-md font-medium text-on-surface-variant hover:text-error"><Icon name="close" className="text-[18px]" /> Change image</button>
          </>
        }
        rail={
          <SettingsRail
            title="Colors"
            icon="colorize"
            accent={ACCENT}
          >
        <div className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-5 flex flex-col gap-4">
          <h2 className="text-headline-md font-bold text-primary">Picked color</h2>
          <div className="h-24 w-full rounded-lg border border-surface-variant" style={{ backgroundColor: picked ? hexOf(picked) : "transparent" }} />
          {picked ? (
            <div className="flex flex-col gap-2">
              <ColorRow label="HEX" value={hexOf(picked)} />
              <ColorRow label="RGB" value={rgbCss(picked)} />
              <ColorRow label="HSL" value={hslStr(picked)} />
            </div>
          ) : (
            <p className="text-body-md text-on-surface-variant">Click the image — or any palette swatch below — to sample a color.</p>
          )}
        </div>

        {history.length > 0 && (
          <div className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-5 flex flex-col gap-3">
            <h2 className="text-headline-md font-bold text-primary">Recent</h2>
            <div className="flex flex-wrap gap-2">
              {history.map((c, i) => (
                <button key={`${hexOf(c)}-${i}`} type="button" onClick={() => copy(hexOf(c))} title={hexOf(c)} className="w-9 h-9 rounded-lg border border-surface-variant hover:scale-110 transition-transform" style={{ backgroundColor: hexOf(c) }} aria-label={`Copy ${hexOf(c)}`} />
              ))}
            </div>
          </div>
        )}

        <div className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-5 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-headline-md font-bold text-primary">Palette</h2>
            {palette.length > 0 && (
              <button type="button" onClick={copyAll} className="inline-flex items-center gap-1.5 text-label-md font-semibold text-secondary hover:underline"><Icon name="content_copy" className="text-[18px]" /> Copy all</button>
            )}
          </div>

          {paletteNote ? (
            <p className="text-body-md text-on-surface-variant">{paletteNote}</p>
          ) : (
            <>
              <div className="flex flex-col gap-1.5">
                <label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>Colors</span><span className="text-primary font-semibold">{count}</span></label>
                <input type="range" min={2} max={16} step={1} value={count} onChange={(e) => onCount(parseInt(e.target.value, 10))} className="w-full accent-secondary" aria-label="Number of palette colors" />
              </div>

              {palette.length > 0 && palette.length < count && (
                <p className="text-label-sm font-label-sm text-on-surface-variant">
                  This image only has {palette.length} visually distinct {palette.length === 1 ? "color" : "colors"} — showing all of them rather than repeating near-identical shades.
                </p>
              )}

              <ul className="flex flex-col gap-2">
                {palette.map((s) => (
                  <li key={hexOf(s.color)} className="flex items-center gap-1 rounded-lg bg-surface-container pr-2">
                    <button
                      type="button"
                      onClick={() => pick(s.color)}
                      aria-label={`Pick ${hexOf(s.color)}`}
                      className="flex min-w-0 flex-1 items-center gap-3 rounded-lg px-3 py-2 text-left"
                    >
                      <span className="w-9 h-9 rounded-lg border border-surface-variant shrink-0" style={{ backgroundColor: hexOf(s.color) }} />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-body-md font-semibold text-primary font-label-sm">{hexOf(s.color)}</span>
                        <span className="block text-label-sm font-label-sm text-on-surface-variant">{rgbCss(s.color)}</span>
                      </span>
                      <span
                        className="text-label-sm font-label-sm text-on-surface-variant shrink-0 tabular-nums"
                        title={`${sharePct(s.share)} of pixels are closest to this color`}
                      >
                        {sharePct(s.share)}
                      </span>
                    </button>
                    <button type="button" onClick={() => copy(hexOf(s.color))} aria-label={`Copy ${hexOf(s.color)}`} className="flex h-8 w-8 items-center justify-center rounded-lg text-secondary hover:bg-secondary/10 transition-colors shrink-0"><Icon name="content_copy" className="text-[18px]" /></button>
                  </li>
                ))}
              </ul>

              {palette.length > 0 && (
                <button type="button" onClick={downloadPalette} className="w-full inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-container text-on-secondary font-semibold py-3.5 rounded-lg transition-colors">
                  <Icon name="download" className="text-[20px]" /> Download palette (PNG)
                </button>
              )}
            </>
          )}
        </div>

        <div className="rounded-xl border border-outline-variant/40 bg-surface-bright p-4 flex items-start gap-2.5">
          <Icon name="lightbulb" className="text-[18px] mt-0.5" style={{ color: ACCENT }} />
          <p className="text-label-sm font-label-sm text-on-surface-variant"><strong className="text-on-surface">Tip:</strong> hover to preview with the magnifier and click to lock a color, or tap a palette swatch to load it. Copy buttons put the value straight on your clipboard, and everything runs in your browser.</p>
        </div>
          </SettingsRail>
        }
      />
    </>
  );
}

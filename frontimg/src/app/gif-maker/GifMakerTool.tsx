"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { HelpTip } from "@/components/HelpTip";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { BackgroundPicker, resolveBg, type BgValue } from "@/components/BackgroundPicker";
import { ToolWorkspace, filesHeader } from "@/components/tool/ToolWorkspace";
import { FileTray, TrayAction, type TrayEntry } from "@/components/tool/FileTray";
import { SettingsRail, RailAction, RailSecondaryAction, RailNote } from "@/components/tool/SettingsRail";
import { decodeBitmap, downloadBlob, formatBytes, canvasToBlob } from "@/lib/image/raster";
import { encodeGif, fitBox, type FitMode } from "@/lib/image/gif-encode";
import { decodeGifFrames } from "@/lib/image/gif-decode";
import { useHandoff } from "@/lib/tool-handoff";

const ACCENT = "#C56A9A";
const ACCEPT = "image/jpeg,image/png,image/webp,image/gif,image/bmp";

type Item = {
  id: string;
  file: File;
  url: string;
  /** Per-frame override; falls back to the global delay when undefined. */
  delayMs?: number;
  /** Set when the image could not be decoded — it is excluded from the GIF. */
  failed?: boolean;
};

const SIZE_PRESETS = [240, 360, 480, 640, 800];
type LoopMode = "forever" | "once" | "count";

let counter = 0;
const uid = () => `f${Date.now()}_${counter++}`;

/** Paint one bitmap into the output box using the chosen fit. */
function drawFrame(
  ctx: CanvasRenderingContext2D,
  bmp: ImageBitmap,
  W: number,
  H: number,
  bg: string | null,
  fit: FitMode
) {
  if (bg) {
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);
  } else {
    ctx.clearRect(0, 0, W, H);
  }
  const b = fitBox(W, H, bmp.width, bmp.height, fit);
  ctx.drawImage(bmp, b.x, b.y, b.w, b.h);
}

const seg = (active: boolean) =>
  `rounded-md px-2 py-2 text-label-sm font-label-sm font-semibold capitalize transition-colors ${
    active ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant hover:text-primary"
  }`;

const fieldCls =
  "w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";

export function GifMakerTool() {
  const [items, setItems] = useState<Item[]>([]);
  const [delay, setDelay] = useState(300);
  const [maxSize, setMaxSize] = useState(480);
  const [fit, setFit] = useState<FitMode>("contain");
  const [colors, setColors] = useState(256);
  const [loopMode, setLoopMode] = useState<LoopMode>("forever");
  const [loopCount, setLoopCount] = useState(3);
  const [bg, setBg] = useState<BgValue>({ transparent: false, color: "#ffffff" });
  const [isWorking, setIsWorking] = useState(false);
  const [progress, setProgress] = useState<{ done: number; total: number } | null>(null);
  const [result, setResult] = useState<{ url: string; size: number } | null>(null);
  /** Bumped whenever the decoded-bitmap map changes, to re-derive `ordered`. */
  const [decodeTick, setDecodeTick] = useState(0);

  const previewRef = useRef<HTMLCanvasElement>(null);
  const bmps = useRef<Map<string, ImageBitmap>>(new Map());
  const frameIdx = useRef(0);

  const bgFill = resolveBg(bg);

  /*
    Revoke preview URLs on UNMOUNT only.

    This effect used to be `useEffect(() => () => {…revoke…}, [items])`, so React
    ran its cleanup on EVERY change to the list — and `move` reuses the same item
    objects, so reordering a frame revoked the very URLs the next render still
    displays (broken thumbnails; masked by Chrome's cache, obvious in Firefox).
    Same bug, same fix as `ConvertTool.tsx:97-112` and `ImageToPdfTool`: a ref
    mirror keeps the unmount cleanup pointed at the current list without making
    the effect re-run. `removeItem`/`reset` revoke explicitly.
  */
  const itemsRef = useRef<Item[]>([]);
  useEffect(() => { itemsRef.current = items; }, [items]);
  useEffect(() => () => { itemsRef.current.forEach((i) => URL.revokeObjectURL(i.url)); }, []);

  // Decoded bitmaps are a GPU-backed resource; without this they leaked on every
  // navigation away from the tool.
  const bmpsRef = bmps;
  useEffect(() => () => { bmpsRef.current.forEach((b) => b.close()); bmpsRef.current.clear(); }, [bmpsRef]);

  // Keep the result object URL alive only as long as the result itself.
  const resultUrlRef = useRef<string | null>(null);
  useEffect(() => () => { if (resultUrlRef.current) URL.revokeObjectURL(resultUrlRef.current); }, []);

  // Decode newly-added images; drop bitmaps whose items are gone.
  useEffect(() => {
    let alive = true;
    const ids = new Set(items.map((i) => i.id));
    for (const [id, b] of bmps.current) if (!ids.has(id)) { b.close(); bmps.current.delete(id); }
    const missing = items.filter((i) => !bmps.current.has(i.id) && !i.failed);
    if (missing.length === 0) { setDecodeTick((n) => n + 1); return; }

    const failures: string[] = [];
    Promise.all(
      missing.map(async (it) => {
        try {
          const bmp = await decodeBitmap(it.file);
          // The item may have been removed while this decode was in flight;
          // storing it now would strand a bitmap nothing ever closes.
          if (!alive || !itemsRef.current.some((p) => p.id === it.id)) { bmp.close(); return; }
          bmps.current.set(it.id, bmp);
        } catch {
          failures.push(it.id);
        }
      })
    ).then(() => {
      if (!alive) return;
      if (failures.length) {
        // Previously swallowed, so a broken image sat in the tray with a
        // thumbnail and silently vanished from the GIF.
        setItems((prev) => prev.map((p) => (failures.includes(p.id) ? { ...p, failed: true } : p)));
        toast.error(`Couldn't read ${failures.length} image${failures.length === 1 ? "" : "s"}. They're marked and will be skipped.`);
      }
      setDecodeTick((n) => n + 1);
    });
    return () => { alive = false; };
  }, [items]);

  /** Frames in order, decoded and usable. Derived from state, not read mid-render. */
  const ordered = useMemo(() => {
    void decodeTick;
    return items
      .map((i) => ({ item: i, bmp: bmps.current.get(i.id) }))
      .filter((f): f is { item: Item; bmp: ImageBitmap } => !!f.bmp && !f.item.failed);
  }, [items, decodeTick]);

  // Output size: fit every frame inside maxSize on the longest side.
  const { outW, outH } = useMemo(() => {
    if (!ordered.length) return { outW: 0, outH: 0 };
    const maxW = Math.max(...ordered.map((f) => f.bmp.width));
    const maxH = Math.max(...ordered.map((f) => f.bmp.height));
    const scale = Math.min(1, maxSize / Math.max(maxW, maxH));
    return { outW: Math.max(1, Math.round(maxW * scale)), outH: Math.max(1, Math.round(maxH * scale)) };
  }, [ordered, maxSize]);

  const delayOf = useCallback((it: Item) => it.delayMs ?? delay, [delay]);
  const totalMs = useMemo(() => ordered.reduce((s, f) => s + delayOf(f.item), 0), [ordered, delayOf]);

  // Live animated preview, timed per frame so per-frame delays are visible.
  useEffect(() => {
    if (ordered.length === 0) return;
    const canvas = previewRef.current;
    if (!canvas) return;
    canvas.width = outW;
    canvas.height = outH;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let timer: number | undefined;
    let cancelled = false;
    frameIdx.current = frameIdx.current % ordered.length;

    const tick = () => {
      if (cancelled) return;
      const f = ordered[frameIdx.current % ordered.length];
      if (!f) return;
      drawFrame(ctx, f.bmp, outW, outH, bgFill, fit);
      if (ordered.length < 2) return;
      timer = window.setTimeout(() => {
        frameIdx.current = (frameIdx.current + 1) % ordered.length;
        tick();
      }, Math.max(20, delayOf(f.item)));
    };
    tick();
    return () => { cancelled = true; if (timer) window.clearTimeout(timer); };
  }, [ordered, outW, outH, bgFill, fit, delayOf]);

  const clearResult = useCallback(() => {
    setResult((prev) => {
      if (prev) URL.revokeObjectURL(prev.url);
      resultUrlRef.current = null;
      return null;
    });
  }, []);

  const addFiles = useCallback(async (incoming: FileList | File[]) => {
    const all = Array.from(incoming).filter((f) => f.type.startsWith("image/") || /\.(jpe?g|png|webp|gif|bmp)$/i.test(f.name));
    if (all.length === 0) { toast.error("Please select image files."); return; }
    clearResult();

    const next: Item[] = [];
    for (const file of all) {
      const isGif = file.type === "image/gif" || /\.gif$/i.test(file.name);
      if (!isGif) {
        next.push({ id: uid(), file, url: URL.createObjectURL(file) });
        continue;
      }
      // An animated GIF explodes into its frames, carrying its original timing —
      // that is what makes "open a GIF and re-edit it" work.
      try {
        const frames = await decodeGifFrames(file);
        const base = file.name.replace(/\.gif$/i, "");
        for (let i = 0; i < frames.length; i++) {
          const blob = await canvasToBlob(frames[i].canvas, "image/png");
          const png = new File([blob], `${base}-${String(i + 1).padStart(3, "0")}.png`, { type: "image/png" });
          next.push({ id: uid(), file: png, url: URL.createObjectURL(png), delayMs: frames[i].delayMs });
        }
        toast.success(`Imported ${frames.length} frames from ${file.name}.`);
      } catch (err) {
        console.error(err);
        toast.error(`Couldn't read ${file.name}.`);
      }
    }
    if (next.length) setItems((prev) => [...prev, ...next]);
  }, [clearResult]);

  useHandoff(addFiles);

  const removeItem = (id: string) => {
    clearResult();
    setItems((prev) => {
      const it = prev.find((p) => p.id === id);
      if (it) URL.revokeObjectURL(it.url);
      return prev.filter((p) => p.id !== id);
    });
  };
  const reset = () => {
    clearResult();
    items.forEach((i) => URL.revokeObjectURL(i.url));
    setItems([]);
  };
  const move = (i: number, dir: -1 | 1) => setItems((prev) => {
    const j = i + dir;
    if (j < 0 || j >= prev.length) return prev;
    const next = [...prev];
    [next[i], next[j]] = [next[j], next[i]];
    return next;
  });
  const setItemDelay = (id: string, ms: number | undefined) =>
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, delayMs: ms } : it)));

  const reverse = () => { clearResult(); setItems((prev) => [...prev].reverse()); };
  /** Append the middle frames back in reverse so the loop returns to its start. */
  const boomerang = () => {
    clearResult();
    setItems((prev) => {
      if (prev.length < 2) return prev;
      const back = prev.slice(1, -1).reverse().map((it) => ({ ...it, id: uid(), url: URL.createObjectURL(it.file) }));
      return [...prev, ...back];
    });
  };

  const createGif = async () => {
    const frames = ordered;
    if (frames.length < 2) { toast.error("Add at least two images to make an animation."); return; }
    setIsWorking(true);
    setProgress({ done: 0, total: frames.length });
    clearResult();
    try {
      const off = document.createElement("canvas");
      off.width = outW;
      off.height = outH;
      const ctx = off.getContext("2d", { willReadFrequently: true });
      if (!ctx) throw new Error("Canvas is not supported in this browser.");

      const repeat = loopMode === "forever" ? 0 : loopMode === "once" ? -1 : Math.max(1, loopCount);
      const bytes = await encodeGif(
        {
          count: frames.length,
          delay: (i) => delayOf(frames[i].item),
          pixels: (i) => {
            drawFrame(ctx, frames[i].bmp, outW, outH, bgFill, fit);
            return ctx.getImageData(0, 0, outW, outH).data;
          },
        },
        {
          width: outW,
          height: outH,
          colors,
          repeat,
          transparent: bg.transparent,
          onProgress: (done, total) => setProgress({ done, total }),
        }
      );

      const blob = new Blob([bytes as BlobPart], { type: "image/gif" });
      const url = URL.createObjectURL(blob);
      resultUrlRef.current = url;
      setResult({ url, size: blob.size });
      toast.success(`Created a GIF from ${frames.length} frames (${formatBytes(blob.size)}).`);
    } catch (err) {
      console.error(err);
      toast.error(err instanceof Error ? err.message : "Couldn't create the GIF.");
    } finally {
      setIsWorking(false);
      setProgress(null);
    }
  };

  const downloadResult = async () => {
    if (!result) return;
    const blob = await (await fetch(result.url)).blob();
    downloadBlob(blob, "omyimage.gif");
  };

  if (items.length === 0) {
    return (
      <section>
        <TopLoadingBar active={isWorking} />
        <Dropzone onFiles={addFiles} accept={ACCEPT} accent={ACCENT} icon="gif_box" hint="or drop two or more JPG, PNG or WEBP images here — or a GIF to re-edit" />
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
    meta: it.failed ? (
      <span className="text-error font-semibold">Unreadable — skipped</span>
    ) : (
      <>
        {formatBytes(it.file.size)}
        {it.delayMs !== undefined && <span className="ml-1 text-on-surface font-semibold">· {it.delayMs}ms</span>}
      </>
    ),
    controls: it.failed ? undefined : (
      <label className="flex items-center gap-1.5 text-label-sm font-label-sm text-on-surface-variant">
        <span className="shrink-0">Delay</span>
        <input
          type="number"
          min={20}
          max={10000}
          step={10}
          value={it.delayMs ?? ""}
          placeholder={String(delay)}
          onChange={(e) => setItemDelay(it.id, e.target.value === "" ? undefined : Math.max(20, parseInt(e.target.value, 10) || 0))}
          aria-label={`Frame delay for ${it.file.name}, in milliseconds`}
          className="w-20 rounded border border-surface-variant bg-surface-container-lowest px-1.5 py-0.5 text-label-sm text-primary outline-none focus:border-secondary"
        />
        <span className="shrink-0">ms</span>
      </label>
    ),
    action: <TrayAction icon="close" label="Remove" disabled={isWorking} onClick={() => removeItem(it.id)} />,
  }));

  return (
    <>
      <TopLoadingBar active={isWorking} />
      <ToolWorkspace
        /* Below `md` this becomes the full-screen app shell: the tray is the
           body, the rail moves into a sheet, and this tool's primary action
           becomes the bottom bar CTA. Desktop is untouched. */
        mobile={{
          ...filesHeader(items.map((i) => i.file)),
          onBack: reset,
          backLabel: "Clear frames",
          settingsTitle: "GIF settings",
          cta: {
            icon: "gif_box",
            label: "Create",
            busyLabel: "Building GIF…",
            busy: isWorking,
            disabled: ordered.length < 2,
            onClick: createGif,
          },
        }}
        main={
          <>
            <div className="bg-surface-container rounded-xl border border-surface-variant p-4 flex items-center justify-center overflow-hidden" style={{ minHeight: 220 }}>
              <canvas ref={previewRef} className="max-w-full max-h-[46vh] rounded" />
            </div>
            <p className="text-center text-label-sm font-label-sm text-on-surface-variant">
              Live preview · {outW} × {outH} px · {ordered.length} frame{ordered.length === 1 ? "" : "s"} · {(totalMs / 1000).toFixed(1)}s per loop
            </p>

            {result && (
              <div className="flex flex-col items-center gap-3 rounded-xl border border-surface-variant bg-surface-container-lowest ambient-shadow p-4">
                <h2 className="flex items-center gap-2 text-body-md font-semibold text-primary">
                  <Icon name="check_circle" fill className="text-[18px]" style={{ color: ACCENT }} /> Your GIF
                </h2>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={result.url} alt="Finished GIF" className="max-w-full max-h-[40vh] rounded" />
                <p className="text-label-sm font-label-sm text-on-surface-variant">{formatBytes(result.size)}</p>
                <button type="button" onClick={downloadResult} className="inline-flex items-center gap-2 rounded-lg bg-secondary px-5 py-2.5 text-label-md font-semibold text-on-secondary transition-colors hover:bg-secondary-container">
                  <Icon name="download" className="text-[18px]" /> Download GIF
                </button>
              </div>
            )}

            <FileTray
              entries={entries}
              title={`${items.length} frame${items.length === 1 ? "" : "s"}`}
              accept={ACCEPT}
              onFiles={addFiles}
              onClear={reset}
              onMove={move}
              busy={isWorking}
            />
          </>
        }
        rail={
          <SettingsRail
            title="Animation Settings"
            icon="gif_box"
            accent={ACCENT}
            footer={
              <>
                <RailNote>
                  {progress
                    ? `Encoding frame ${progress.done} of ${progress.total}…`
                    : "Set the order with the arrows. The preview plays at your chosen speed."}
                </RailNote>
                {progress && (
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-container" role="progressbar" aria-valuenow={progress.done} aria-valuemin={0} aria-valuemax={progress.total}>
                    <div className="h-full rounded-full transition-[width] duration-150" style={{ width: `${(progress.done / progress.total) * 100}%`, backgroundColor: ACCENT }} />
                  </div>
                )}
                <RailAction onClick={createGif} disabled={ordered.length < 2} busy={isWorking} busyLabel="Building GIF…" icon="gif_box">
                  Create GIF
                </RailAction>
              </>
            }
          >
            <div className="flex flex-col gap-1.5">
              <label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
                <span>Frame delay</span>
                <span className="text-primary font-semibold">{delay}ms ({(1000 / delay).toFixed(1)} fps)</span>
              </label>
              <input type="range" min={20} max={2000} step={10} value={delay} onChange={(e) => setDelay(parseInt(e.target.value, 10))} className="w-full accent-secondary" />
              <p className="text-label-sm font-label-sm text-on-surface-variant">Applies to frames without their own delay.</p>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-label-sm font-label-sm text-on-surface-variant">Playback</span>
              <div className="grid grid-cols-2 gap-2">
                <RailSecondaryAction icon="swap_vert" onClick={reverse}>Reverse</RailSecondaryAction>
                <RailSecondaryAction icon="sync_alt" onClick={boomerang}>Boomerang</RailSecondaryAction>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="gif-loop" className="text-label-sm font-label-sm text-on-surface-variant">Looping</label>
              <select id="gif-loop" value={loopMode} onChange={(e) => setLoopMode(e.target.value as LoopMode)} className={fieldCls}>
                <option value="forever">Loop forever</option>
                <option value="once">Play once</option>
                <option value="count">Repeat a set number of times</option>
              </select>
              {loopMode === "count" && (
                <input type="number" min={1} max={255} value={loopCount} onChange={(e) => setLoopCount(Math.max(1, Math.min(255, parseInt(e.target.value, 10) || 1)))} aria-label="Number of repeats" className={fieldCls} />
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="gif-size" className="text-label-sm font-label-sm text-on-surface-variant">Max size (longest side)</label>
              <div className="flex gap-2">
                <select id="gif-size" value={SIZE_PRESETS.includes(maxSize) ? maxSize : "custom"} onChange={(e) => { if (e.target.value !== "custom") setMaxSize(parseInt(e.target.value, 10)); }} className={fieldCls}>
                  {SIZE_PRESETS.map((s) => <option key={s} value={s}>{s}px</option>)}
                  <option value="custom">Custom</option>
                </select>
                <input type="number" min={32} max={2000} step={10} value={maxSize} onChange={(e) => setMaxSize(Math.max(32, Math.min(2000, parseInt(e.target.value, 10) || 32)))} aria-label="Custom max size in pixels" className={`${fieldCls} w-28`} />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="flex items-center gap-1.5 text-label-sm font-label-sm text-on-surface-variant">
                Fit
                <HelpTip text="Contain keeps the whole frame (may add margins). Cover fills the canvas (may crop). Stretch distorts to fill exactly." />
              </span>
              <div className="grid grid-cols-3 gap-1 rounded-lg bg-surface-container p-1">
                {(["contain", "cover", "stretch"] as FitMode[]).map((f) => (
                  <button key={f} type="button" onClick={() => setFit(f)} className={seg(fit === f)}>{f}</button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="gif-colors" className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
                <span className="flex items-center gap-1.5">Colours <HelpTip text="GIF stores at most 256 colours. Lowering this shrinks the file; flat graphics survive it far better than photos." /></span>
                <span className="text-primary font-semibold">{colors}</span>
              </label>
              <input id="gif-colors" type="range" min={2} max={256} step={1} value={colors} onChange={(e) => setColors(parseInt(e.target.value, 10))} className="w-full accent-secondary" />
            </div>

            <BackgroundPicker value={bg} onChange={setBg} label="Background (behind transparent areas)" />
          </SettingsRail>
        }
      />
    </>
  );
}

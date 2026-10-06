"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { ToolWorkspace, filesHeader } from "@/components/tool/ToolWorkspace";
import { SettingsRail, RailAction } from "@/components/tool/SettingsRail";
import { BackgroundPicker, resolveBg, type BgValue } from "@/components/BackgroundPicker";
import { decodeBitmap, canvasToBlob, downloadBlob, baseName, mimeExt, type ExportMime } from "@/lib/image/raster";
import { previewSource } from "@/lib/image/fx";
import { DEFAULT_OVERLAY, paintOverlay, snapPosition, type Blend, type OverlaySettings } from "@/lib/image/overlay";
import { useHandoff } from "@/lib/tool-handoff";
import { useFormatBytes, useT } from "@/i18n/I18nScope";
import { translateError } from "@/i18n/errors";

/**
 * image-overlay — a background picture with a second one on top: opacity, a
 * blend mode, and either free placement (drag, size, rotation, nine snap
 * positions) or a cover fit for textures. lib/image/overlay.ts paints both the
 * preview and the full-size result.
 */
const ACCENT = "#8C6FB0";
const ACCEPT = "image/jpeg,image/png,image/webp";

type Format = "original" | ExportMime;
type Layer = { file: File; bmp: ImageBitmap; prev: HTMLCanvasElement; url: string };

async function loadLayer(file: File): Promise<Layer> {
  const bmp = await decodeBitmap(file);
  return { file, bmp, prev: previewSource(bmp, 1200).canvas, url: URL.createObjectURL(file) };
}

function dropLayer(l: Layer | null) {
  if (!l) return;
  l.bmp.close();
  URL.revokeObjectURL(l.url);
}

export function OverlayTool() {
  const t = useT();
  const formatBytes = useFormatBytes();
  const [base, setBase] = useState<Layer | null>(null);
  const [over, setOver] = useState<Layer | null>(null);
  const [s, setS] = useState<OverlaySettings>(DEFAULT_OVERLAY);
  const set = <K extends keyof OverlaySettings>(k: K, v: OverlaySettings[K]) => setS((p) => ({ ...p, [k]: v }));
  const [format, setFormat] = useState<Format>("original");
  const [quality, setQuality] = useState(0.92);
  const [bg, setBg] = useState<BgValue>({ transparent: false, color: "#ffffff" });
  const [isWorking, setIsWorking] = useState(false);
  const [loading, setLoading] = useState(false);
  const [comparing, setComparing] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  // Held in state, not a ref: below `md` ToolWorkspace swaps to the mobile
  // shell after its first render, which mounts a NEW canvas — the draw effect
  // must re-run for it.
  const [previewEl, setPreviewEl] = useState<HTMLCanvasElement | null>(null);
  const baseInput = useRef<HTMLInputElement>(null);
  const overInput = useRef<HTMLInputElement>(null);
  const drag = useRef<{ x: number; y: number; ox: number; oy: number } | null>(null);

  // Close bitmaps on unmount only (the ConvertTool ref-mirror pattern).
  const layersRef = useRef<{ base: Layer | null; over: Layer | null }>({ base: null, over: null });
  useEffect(() => { layersRef.current = { base, over }; }, [base, over]);
  useEffect(() => () => { dropLayer(layersRef.current.base); dropLayer(layersRef.current.over); }, []);

  const mime: ExportMime = format !== "original" ? format
    : base && (base.file.type === "image/jpeg" || base.file.type === "image/webp") ? (base.file.type as ExportMime) : "image/png";
  const fill = mime === "image/jpeg" ? (resolveBg({ ...bg, transparent: false }) ?? "#ffffff") : null;

  useEffect(() => {
    const c = previewEl;
    if (!c || !base) return;
    const showOver = comparing ? null : over;
    paintOverlay(c, base.prev, showOver?.prev ?? null, base.prev.width, base.prev.height, over?.bmp.width ?? 1, over?.bmp.height ?? 1, s, fill);
  }, [base, over, s, comparing, fill, previewEl]);

  const replace = async (which: "base" | "over", file: File) => {
    setLoading(true);
    try {
      const layer = await loadLayer(file);
      if (which === "base") setBase((old) => { dropLayer(old); return layer; });
      else setOver((old) => { dropLayer(old); return layer; });
    } catch (err) {
      toast.error(translateError(err, t, "Processing failed."));
    } finally {
      setLoading(false);
    }
  };

  const addFiles = useCallback(async (incoming: FileList | File[]) => {
    const imgs = Array.from(incoming).filter((f) => f.type.startsWith("image/"));
    if (imgs.length === 0) { toast.error(t("Please select image files.")); return; }
    const { base: b, over: o } = layersRef.current;
    // The first picture is the background, the next goes on top.
    if (!b) {
      await replace("base", imgs[0]);
      if (imgs[1]) await replace("over", imgs[1]);
    } else if (!o) {
      await replace("over", imgs[0]);
    } else {
      await replace("over", imgs[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);

  useHandoff((files) => { void addFiles(files); });

  const reset = () => {
    dropLayer(base);
    dropLayer(over);
    setBase(null);
    setOver(null);
    setS(DEFAULT_OVERLAY);
  };

  const swap = () => {
    if (!base || !over) return;
    setBase(over);
    setOver(base);
    setS((p) => ({ ...p, x: 0.5, y: 0.5 }));
  };

  const save = async () => {
    if (!base || !over) return;
    setIsWorking(true);
    try {
      const canvas = document.createElement("canvas");
      paintOverlay(canvas, base.bmp, over.bmp, base.bmp.width, base.bmp.height, over.bmp.width, over.bmp.height, s, fill);
      const blob = await canvasToBlob(canvas, mime, quality);
      downloadBlob(blob, `${baseName(base.file.name)}_overlay.${mimeExt(mime)}`);
      toast.success(t("Done — 1 image saved."));
    } catch (err) {
      toast.error(translateError(err, t, "Processing failed."));
    } finally {
      setIsWorking(false);
    }
  };

  const placing = !!over && s.fit === "place";

  const onPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!placing) return;
    try { e.currentTarget.setPointerCapture(e.pointerId); } catch { /* not an active pointer */ }
    drag.current = { x: e.clientX, y: e.clientY, ox: s.x, oy: s.y };
  };
  const onPointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const d = drag.current;
    if (!d) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setS((p) => ({
      ...p,
      x: Math.min(1, Math.max(0, d.ox + (e.clientX - d.x) / rect.width)),
      y: Math.min(1, Math.max(0, d.oy + (e.clientY - d.y) / rect.height)),
    }));
  };
  const endDrag = () => { drag.current = null; };
  const onKeyDown = (e: React.KeyboardEvent<HTMLCanvasElement>) => {
    if (!placing) return;
    const step = e.shiftKey ? 0.1 : 0.01;
    const moves: Record<string, readonly [number, number]> = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] };
    const d = moves[e.key];
    if (!d) return;
    e.preventDefault();
    setS((p) => ({ ...p, x: Math.min(1, Math.max(0, p.x + d[0])), y: Math.min(1, Math.max(0, p.y + d[1])) }));
  };

  const fieldCls = "w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";
  const label = "flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant";
  const hint = "text-label-sm font-label-sm text-on-surface-variant/70";
  const seg = (on: boolean) => `rounded-md px-2 py-1.5 text-label-md font-semibold ${on ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant"}`;
  const checker = { backgroundColor: "#fff", backgroundImage: "linear-gradient(45deg,#cbd5e1 25%,transparent 25%),linear-gradient(-45deg,#cbd5e1 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#cbd5e1 75%),linear-gradient(-45deg,transparent 75%,#cbd5e1 75%)", backgroundSize: "16px 16px", backgroundPosition: "0 0,0 8px,8px -8px,-8px 0" };

  const hiddenInputs = (
    <>
      <input ref={baseInput} type="file" accept={ACCEPT} className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) void replace("base", f); e.target.value = ""; }} />
      <input ref={overInput} type="file" accept={ACCEPT} className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) void replace("over", f); e.target.value = ""; }} />
    </>
  );

  if (!base) {
    return (
      <section>
        <TopLoadingBar active={loading} />
        <Dropzone onFiles={(f) => { void addFiles(f); }} accept={ACCEPT} accent={ACCENT} icon="layers" hint={t("or drop the background image here — or both images at once")} />
      </section>
    );
  }

  const blends: { value: Blend; text: string; hint: string }[] = [
    { value: "source-over", text: t("Normal"), hint: t("Draws the image as it is.") },
    { value: "multiply", text: t("Multiply"), hint: t("Only darkens — white disappears. Good for signatures, stamps and line art.") },
    { value: "screen", text: t("Screen"), hint: t("Only lightens — black disappears. Good for light leaks, flares, fire and stars.") },
    { value: "overlay", text: t("Overlay"), hint: t("Boosts contrast: lights get lighter and darks darker.") },
    { value: "soft-light", text: t("Soft light"), hint: t("A gentler overlay — for textures and colour tints.") },
    { value: "darken", text: t("Darken"), hint: t("Keeps whichever pixel is darker.") },
    { value: "lighten", text: t("Lighten"), hint: t("Keeps whichever pixel is lighter.") },
    { value: "difference", text: t("Difference"), hint: t("Subtracts the colours — an inverted, artistic look.") },
  ];
  const blend = blends.find((b) => b.value === s.blend) ?? blends[0];
  // Same order as the 3×3 grid; one key per position (see WatermarkTool).
  // Called inline so i18n-keys can see them.
  const positions = [
    t("Top left"), t("Top center"), t("Top right"),
    t("Middle left"), t("Center"), t("Middle right"),
    t("Bottom left"), t("Bottom center"), t("Bottom right"),
  ];

  const layerRow = (title: string, l: Layer | null, which: "base" | "over") => (
    <div className="flex items-center gap-3 rounded-lg border border-surface-variant bg-surface-container-lowest p-2">
      <div className="h-11 w-11 shrink-0 overflow-hidden rounded" style={checker}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {l ? <img src={l.url} alt="" className="h-full w-full object-cover" /> : <span className="grid h-full w-full place-items-center bg-surface-container"><Icon name="add_photo_alternate" className="text-[20px] text-on-surface-variant" /></span>}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-label-sm font-label-sm text-on-surface-variant">{title}</p>
        <p className="truncate text-body-md font-semibold text-primary">{l ? l.file.name : t("Not added yet")}</p>
        {l && <p className={hint}>{`${l.bmp.width} × ${l.bmp.height} px · `}{formatBytes(l.file.size)}{/* i18n-raw: pixel dimensions */}</p>}
      </div>
      <button
        type="button"
        onClick={() => (which === "base" ? baseInput : overInput).current?.click()}
        className="shrink-0 text-label-md font-semibold text-secondary hover:underline"
      >
        {l ? t("Replace") : t("Add")}
      </button>
    </div>
  );

  const controls = (
    <>
      <div className="flex flex-col gap-2">
        {layerRow(t("Background image"), base, "base")}
        {layerRow(t("Overlay image"), over, "over")}
        <button type="button" onClick={swap} disabled={!over} className="inline-flex items-center gap-1.5 self-start text-label-md font-semibold text-secondary hover:underline disabled:opacity-40">
          <Icon name="swap_vert" className="text-[18px]" /> {t("Swap images")}
        </button>
      </div>
      <div className="flex flex-col gap-1.5">
        <div role="radiogroup" aria-label={t("Fit")} className="grid grid-cols-2 gap-1 rounded-lg bg-surface-container p-1">
          <button type="button" role="radio" aria-checked={s.fit === "place"} onClick={() => set("fit", "place")} className={seg(s.fit === "place")}>{t("Place freely")}</button>
          <button type="button" role="radio" aria-checked={s.fit === "cover"} onClick={() => set("fit", "cover")} className={seg(s.fit === "cover")}>{t("Cover everything")}</button>
        </div>
        <p className={hint}>
          {s.fit === "place"
            ? t("Drag it on the preview, then set its size and angle.")
            : t("Covers the whole picture and trims what sticks out — for textures, light leaks and double exposures.")}
        </p>
      </div>
      {s.fit === "place" && (
        <>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="ov-size" className={label}><span>{t("Size")}</span><span className="text-primary font-semibold tabular-nums">{`${s.size}%`}</span></label>
            <input id="ov-size" type="range" min={5} max={200} step={1} value={s.size} onChange={(e) => set("size", Number(e.target.value))} className="w-full accent-secondary" />
            <p className={hint}>{t("Its width as a share of the background's width.")}</p>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="ov-rot" className={label}><span>{t("Rotation")}</span><span className="text-primary font-semibold tabular-nums">{`${s.rotation}°`}</span></label>
            <input id="ov-rot" type="range" min={-180} max={180} step={1} value={s.rotation} onChange={(e) => set("rotation", Number(e.target.value))} className="w-full accent-secondary" />
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-label-sm font-label-sm text-on-surface-variant">{t("Position")}</span>
            <div className="grid w-fit grid-cols-3 gap-1.5">
              {positions.map((name, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={name}
                  disabled={!over}
                  onClick={() => { if (over) setS((p) => ({ ...p, ...snapPosition(i, base.bmp.width, base.bmp.height, over.bmp.width, over.bmp.height, p) })); }}
                  className="grid h-8 w-8 place-items-center rounded-md border border-surface-variant transition-colors hover:border-secondary/40 disabled:opacity-40"
                >
                  <span className="h-2 w-2 rounded-full bg-outline-variant" />
                </button>
              ))}
            </div>
          </div>
        </>
      )}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="ov-opacity" className={label}><span>{t("Opacity")}</span><span className="text-primary font-semibold tabular-nums">{`${s.opacity}%`}</span></label>
        <input id="ov-opacity" type="range" min={0} max={100} step={1} value={s.opacity} onChange={(e) => set("opacity", Number(e.target.value))} className="w-full accent-secondary" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="ov-blend" className="text-label-sm font-label-sm text-on-surface-variant">{t("Blend mode")}</label>
        <select id="ov-blend" value={s.blend} onChange={(e) => set("blend", e.target.value as Blend)} className={fieldCls}>
          {blends.map((b) => <option key={b.value} value={b.value}>{b.text}</option>)}
        </select>
        <p className={hint}>{blend.hint}</p>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="ov-format" className="text-label-sm font-label-sm text-on-surface-variant">{t("Output format")}</label>
        <select id="ov-format" value={format} onChange={(e) => setFormat(e.target.value as Format)} className={fieldCls}>
          <option value="original">{t("Same as original")}</option>
          {/* i18n-raw: format names are the same in every language */}
          <option value="image/jpeg">JPG</option>
          <option value="image/png">PNG</option>
          <option value="image/webp">WEBP</option>
        </select>
        <p className={hint}>{t("The result is the size of the background image.")}</p>
      </div>
      {mime !== "image/png" && (
        <div className="flex flex-col gap-1.5">
          <label htmlFor="ov-quality" className={label}><span>{t("Quality")}</span><span className="text-primary font-semibold">{`${Math.round(quality * 100)}%`}</span></label>
          <input id="ov-quality" type="range" min={0.5} max={1} step={0.01} value={quality} onChange={(e) => setQuality(parseFloat(e.target.value))} className="w-full accent-secondary" />
        </div>
      )}
      {mime === "image/jpeg" && <BackgroundPicker value={{ ...bg, transparent: false }} onChange={setBg} allowTransparent={false} label={t("JPG background")} />}
      <p className="text-label-sm font-label-sm text-on-surface-variant/80">{t("Your images are processed in your browser and never uploaded.")}</p>
    </>
  );

  return (
    <>
      <TopLoadingBar active={isWorking || loading} />
      {hiddenInputs}
      <ToolWorkspace
        mobile={{
          ...filesHeader(over ? [base.file, over.file] : [base.file]),
          onBack: reset,
          backLabel: t("Clear files"),
          settingsTitle: t("Settings"),
          cta: { icon: "download", label: t("Save image"), busyLabel: t("Working…"), busy: isWorking, disabled: !over, onClick: save },
        }}
        main={
          <>
            <div className="bg-surface-container rounded-xl border border-surface-variant p-4 flex items-center justify-center overflow-hidden" style={{ minHeight: 220 }}>
              <canvas
                ref={setPreviewEl}
                tabIndex={placing ? 0 : -1}
                style={{ ...checker, touchAction: placing ? "none" : undefined, cursor: placing ? "move" : undefined }}
                className="max-w-full max-h-[52vh] rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary"
                aria-label={placing ? t("Preview — drag, or use the arrow keys, to move the overlay") : t("Preview")}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
                onKeyDown={onKeyDown}
              />
            </div>
            {over ? (
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-label-sm font-label-sm text-on-surface-variant">
                {placing && <span>{t("Drag the overlay to move it.")}</span>}
                <button
                  type="button"
                  onPointerDown={() => setComparing(true)}
                  onPointerUp={() => setComparing(false)}
                  onPointerLeave={() => setComparing(false)}
                  onKeyDown={(e) => { if (e.key === " " || e.key === "Enter") setComparing(true); }}
                  onKeyUp={() => setComparing(false)}
                  className="inline-flex select-none items-center gap-1 font-semibold text-secondary"
                >
                  <Icon name="visibility" className="text-[16px]" /> {t("Hold to see the original")}
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => overInput.current?.click()}
                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={(e) => { e.preventDefault(); setDragOver(false); const f = Array.from(e.dataTransfer.files).find((x) => x.type.startsWith("image/")); if (f) void replace("over", f); }}
                className={`flex flex-col items-center gap-1.5 rounded-xl border-2 border-dashed px-4 py-6 text-center transition-colors ${dragOver ? "border-secondary bg-secondary/5" : "border-surface-variant hover:border-secondary/60"}`}
              >
                <Icon name="add_photo_alternate" className="text-[32px]" style={{ color: ACCENT }} />
                <span className="text-body-md font-bold text-primary">{t("Add the image to put on top")}</span>
                <span className={hint}>{t("A photo, logo, texture or PNG with transparency — click or drop it here.")}</span>
              </button>
            )}
          </>
        }
        rail={
          <SettingsRail
            title={t("Settings")}
            icon="layers"
            accent={ACCENT}
            footer={
              <RailAction onClick={save} busy={isWorking} busyLabel={t("Working…")} icon="download" disabled={!over}>
                {t("Save image")}
              </RailAction>
            }
          >
            {controls}
          </SettingsRail>
        }
      />
    </>
  );
}

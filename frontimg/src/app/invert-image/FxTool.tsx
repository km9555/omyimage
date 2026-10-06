"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { ToolWorkspace, filesHeader } from "@/components/tool/ToolWorkspace";
import { FileTray, TrayAction, type TrayEntry } from "@/components/tool/FileTray";
import { SettingsRail, RailAction, RailSecondaryAction } from "@/components/tool/SettingsRail";
import { BackgroundPicker, resolveBg, type BgValue } from "@/components/BackgroundPicker";
import {
  decodeBitmap, canvasToBlob, downloadBlob, zipAndDownload, baseName, mimeExt, type ExportMime,
} from "@/lib/image/raster";
import { DEFAULT_FX, previewSource, renderFx, type FxMode, type FxSettings } from "@/lib/image/fx";
import { useHandoff } from "@/lib/tool-handoff";
import { useFormatBytes, useT } from "@/i18n/I18nScope";
import { translateError } from "@/i18n/errors";

/**
 * invert — invert-image; pixelate — pixelate-image; adjust — image-brightness;
 * glitch — glitch-effect; corners — round-corners. One batch workspace, a live
 * preview of the first image, and lib/image/fx.ts doing the pixels.
 */
const ACCENT = "#7A6FB0";
const ACCEPT = "image/jpeg,image/png,image/webp";

type Format = "original" | ExportMime;
type Item = { id: string; file: File; url: string; result?: { blob: Blob; name: string } };

const ICON: Record<FxMode, string> = { invert: "dark_mode", pixelate: "apps", adjust: "light_mode", glitch: "gradient", corners: "rounded_corner" };
const SUFFIX: Record<FxMode, string> = { invert: "_inverted", pixelate: "_pixelated", adjust: "_adjusted", glitch: "_glitch", corners: "_rounded" };

let counter = 0;
const uid = () => `f${Date.now()}_${counter++}`;

function outMimeFor(file: File, fmt: Format): ExportMime {
  if (fmt !== "original") return fmt;
  const t = file.type;
  return t === "image/jpeg" || t === "image/webp" || t === "image/png" ? (t as ExportMime) : "image/png";
}

export function FxTool({ mode }: { mode: FxMode }) {
  const t = useT();
  const formatBytes = useFormatBytes();
  const [items, setItems] = useState<Item[]>([]);
  const [s, setS] = useState<FxSettings>(DEFAULT_FX);
  const set = <K extends keyof FxSettings>(k: K, v: FxSettings[K]) => setS((p) => ({ ...p, [k]: v }));
  // Rounded corners need transparency to mean anything, so they default to PNG.
  const [format, setFormat] = useState<Format>(mode === "corners" ? "image/png" : "original");
  const [quality, setQuality] = useState(0.92);
  const [bg, setBg] = useState<BgValue>({ transparent: mode === "corners", color: "#ffffff" });
  const [isWorking, setIsWorking] = useState(false);
  const [done, setDone] = useState(false);
  const [comparing, setComparing] = useState(false);

  // Held in state, not a ref: below `md` ToolWorkspace swaps to the mobile
  // shell after its first render, which mounts a NEW canvas — the draw effect
  // must re-run for it.
  const [previewEl, setPreviewEl] = useState<HTMLCanvasElement | null>(null);
  const pv = useRef<{ canvas: HTMLCanvasElement; k: number; w: number; h: number } | null>(null);
  const [pvTick, setPvTick] = useState(0);

  // Revoke thumbnails on unmount only (the ConvertTool ref-mirror pattern).
  const itemsRef = useRef<Item[]>([]);
  useEffect(() => { itemsRef.current = items; }, [items]);
  useEffect(() => () => { itemsRef.current.forEach((i) => URL.revokeObjectURL(i.url)); }, []);

  const firstFile = items[0]?.file;
  useEffect(() => {
    let alive = true;
    if (!firstFile) { pv.current = null; return; }
    decodeBitmap(firstFile).then((b) => {
      if (!alive) { b.close(); return; }
      const p = previewSource(b);
      pv.current = { ...p, w: p.canvas.width, h: p.canvas.height };
      b.close();
      setPvTick((n) => n + 1);
    }).catch(() => {});
    return () => { alive = false; };
  }, [firstFile]);

  /** What sits behind the image: required for JPG, optional for rounded corners. */
  const bgFor = useCallback((mime: ExportMime): string | null => {
    if (mime === "image/jpeg") return resolveBg({ ...bg, transparent: false }) ?? "#ffffff";
    return mode === "corners" && !bg.transparent ? resolveBg(bg) : null;
  }, [bg, mode]);

  useEffect(() => {
    const c = previewEl;
    const p = pv.current;
    if (!c || !p) return;
    if (comparing) {
      c.width = p.w; c.height = p.h;
      c.getContext("2d")?.drawImage(p.canvas, 0, 0);
      return;
    }
    const mime = firstFile ? outMimeFor(firstFile, format) : "image/png";
    renderFx(c, p.canvas, p.w, p.h, mode, s, p.k, bgFor(mime));
  }, [s, mode, pvTick, comparing, format, bgFor, firstFile, previewEl]);

  const addFiles = useCallback((incoming: FileList | File[]) => {
    const imgs = Array.from(incoming).filter((f) => f.type.startsWith("image/"));
    if (imgs.length === 0) { toast.error(t("Please select image files.")); return; }
    setDone(false);
    setItems((prev) => [...prev, ...imgs.map((file) => ({ id: uid(), file, url: URL.createObjectURL(file) }))]);
  }, [t]);

  useHandoff(addFiles);

  const removeItem = (id: string) => setItems((prev) => { const it = prev.find((p) => p.id === id); if (it) URL.revokeObjectURL(it.url); return prev.filter((p) => p.id !== id); });
  const reset = () => { items.forEach((i) => URL.revokeObjectURL(i.url)); setItems([]); setDone(false); };

  const applyAll = async () => {
    if (items.length === 0) return;
    setIsWorking(true);
    try {
      const canvas = document.createElement("canvas");
      const out: Item[] = [];
      for (const it of items) {
        const bmp = await decodeBitmap(it.file);
        const mime = outMimeFor(it.file, format);
        renderFx(canvas, bmp, bmp.width, bmp.height, mode, s, 1, bgFor(mime));
        bmp.close();
        const blob = await canvasToBlob(canvas, mime, quality);
        out.push({ ...it, result: { blob, name: `${baseName(it.file.name)}${SUFFIX[mode]}.${mimeExt(mime)}` } });
      }
      setItems(out);
      setDone(true);
      if (out.length === 1 && out[0].result) downloadBlob(out[0].result.blob, out[0].result.name);
      else await zipAndDownload(out.map((o) => ({ name: o.result!.name, blob: o.result!.blob })), `omyimage${SUFFIX[mode]}.zip`);
      toast.success(out.length === 1 ? t("Done — 1 image saved.") : t("Done — {n} images saved.", { n: out.length }));
    } catch (err) {
      toast.error(translateError(err, t, "Processing failed."));
    } finally {
      setIsWorking(false);
    }
  };

  const fieldCls = "w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";
  const label = "flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant";
  const hint = "text-label-sm font-label-sm text-on-surface-variant/70";
  const seg = (on: boolean) => `rounded-md px-2 py-1.5 text-label-md font-semibold ${on ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant"}`;
  const checker = { backgroundColor: "#fff", backgroundImage: "linear-gradient(45deg,#cbd5e1 25%,transparent 25%),linear-gradient(-45deg,#cbd5e1 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#cbd5e1 75%),linear-gradient(-45deg,transparent 75%,#cbd5e1 75%)", backgroundSize: "16px 16px", backgroundPosition: "0 0,0 8px,8px -8px,-8px 0" };

  const action =
    mode === "invert" ? t("Invert colours") :
    mode === "pixelate" ? t("Pixelate image") :
    mode === "adjust" ? t("Apply adjustments") :
    mode === "glitch" ? t("Apply glitch") : t("Round the corners");

  if (items.length === 0) {
    return (
      <section>
        <TopLoadingBar active={isWorking} />
        <Dropzone onFiles={addFiles} accept={ACCEPT} accent={ACCENT} icon={ICON[mode]} hint={t("or drop JPG, PNG or WEBP images here")} />
      </section>
    );
  }

  const entries: TrayEntry[] = items.map((it) => ({
    id: it.id,
    name: it.file.name,
    url: it.url,
    meta: (
      <>
        {formatBytes(it.file.size)}
        {it.result && <><Icon name="check" className="text-[13px] mx-1 align-middle" style={{ color: ACCENT }} />{t("done")}</>}
      </>
    ),
    action: it.result ? (
      <TrayAction icon="download" tone="accent" label={t("Download")} onClick={() => downloadBlob(it.result!.blob, it.result!.name)} />
    ) : (
      <TrayAction icon="close" label={t("Remove")} disabled={isWorking} onClick={() => removeItem(it.id)} />
    ),
  }));

  const slider = (key: "brightness" | "contrast" | "saturation", text: string) => (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={`fx-${key}`} className={label}><span>{text}</span><span className="text-primary font-semibold tabular-nums">{s[key] > 0 ? `+${s[key]}` : s[key]}</span></label>
      <input id={`fx-${key}`} type="range" min={-100} max={100} step={1} value={s[key]} onChange={(e) => set(key, Number(e.target.value))} className="w-full accent-secondary" />
    </div>
  );

  const anyJpg = items.some((it) => outMimeFor(it.file, format) === "image/jpeg");
  const longest = pv.current ? Math.round(Math.max(pv.current.w, pv.current.h) / pv.current.k) : 0;

  const controls = (
    <>
      {mode === "invert" && (
        <div className="flex flex-col gap-1.5">
          <div role="radiogroup" aria-label={t("Invert")} className="grid grid-cols-2 gap-1 rounded-lg bg-surface-container p-1">
            <button type="button" role="radio" aria-checked={s.invert === "negative"} onClick={() => set("invert", "negative")} className={seg(s.invert === "negative")}>{t("Negative")}</button>
            <button type="button" role="radio" aria-checked={s.invert === "smart"} onClick={() => set("invert", "smart")} className={seg(s.invert === "smart")}>{t("Smart invert")}</button>
          </div>
          <p className={hint}>
            {s.invert === "negative"
              ? t("Every colour becomes its opposite, like a film negative.")
              : t("Light and dark swap but colours keep their hue — a dark-mode look.")}
          </p>
        </div>
      )}
      {mode === "pixelate" && (
        <div className="flex flex-col gap-1.5">
          <label htmlFor="fx-block" className={label}><span>{t("Block size")}</span><span className="text-primary font-semibold tabular-nums">{`${s.block} px`}{/* i18n-raw: a number with the px unit */}</span></label>
          <input id="fx-block" type="range" min={2} max={120} step={1} value={s.block} onChange={(e) => set("block", Number(e.target.value))} className="w-full accent-secondary" />
          {longest > 0 && <p className={hint}>{t("About {n} blocks along the longer side.", { n: Math.max(1, Math.round(longest / s.block)) })}</p>}
        </div>
      )}
      {mode === "adjust" && (
        <>
          {slider("brightness", t("Brightness"))}
          {slider("contrast", t("Contrast"))}
          {slider("saturation", t("Saturation"))}
          <button type="button" onClick={() => setS((p) => ({ ...p, brightness: 0, contrast: 0, saturation: 0 }))} className="inline-flex items-center gap-1.5 self-start text-label-md font-semibold text-secondary hover:underline">
            <Icon name="restart_alt" className="text-[18px]" /> {t("Reset")}
          </button>
        </>
      )}
      {mode === "glitch" && (
        <>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="fx-glitch" className={label}><span>{t("Strength")}</span><span className="text-primary font-semibold tabular-nums">{`${s.glitch}%`}</span></label>
            <input id="fx-glitch" type="range" min={0} max={100} step={1} value={s.glitch} onChange={(e) => set("glitch", Number(e.target.value))} className="w-full accent-secondary" />
          </div>
          {([["split", t("Colour split")], ["slices", t("Shifted slices")], ["scanlines", t("Scan lines")]] as const).map(([k, text]) => (
            <label key={k} className="flex items-center gap-2.5 cursor-pointer">
              <input type="checkbox" checked={s[k]} onChange={(e) => set(k, e.target.checked)} className="w-4 h-4 accent-secondary" />
              <span className="text-body-md text-on-surface">{text}</span>
            </label>
          ))}
          <button type="button" onClick={() => set("seed", s.seed + 1)} disabled={!s.slices} className="inline-flex items-center gap-1.5 self-start text-label-md font-semibold text-secondary hover:underline disabled:opacity-40">
            <Icon name="restart_alt" className="text-[18px]" /> {t("Shuffle the slices")}
          </button>
        </>
      )}
      {mode === "corners" && (
        <>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="fx-radius" className={label}><span>{t("Corner radius")}</span><span className="text-primary font-semibold tabular-nums">{`${s.radius}%`}</span></label>
            <input id="fx-radius" type="range" min={0} max={50} step={1} value={s.radius} onChange={(e) => set("radius", Number(e.target.value))} className="w-full accent-secondary" />
            <p className={hint}>{t("A share of the shorter side. 50% makes a pill, or a circle for square images.")}</p>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className={label}>{t("Corners")}</span>
            <div className="grid grid-cols-2 gap-2">
              {([["tl", t("Top left")], ["tr", t("Top right")], ["bl", t("Bottom left")], ["br", t("Bottom right")]] as const).map(([k, text]) => (
                <label key={k} className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={s[k]} onChange={(e) => set(k, e.target.checked)} className="w-4 h-4 accent-secondary" />
                  <span className="text-body-md text-on-surface">{text}</span>
                </label>
              ))}
            </div>
          </div>
          {!anyJpg && <BackgroundPicker value={bg} onChange={setBg} label={t("Corner background")} />}
        </>
      )}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="fx-format" className="text-label-sm font-label-sm text-on-surface-variant">{t("Output format")}</label>
        <select id="fx-format" value={format} onChange={(e) => setFormat(e.target.value as Format)} className={fieldCls}>
          <option value="original">{t("Same as original")}</option>
          {/* i18n-raw: format names are the same in every language */}
          <option value="image/jpeg">JPG</option>
          <option value="image/png">PNG</option>
          <option value="image/webp">WEBP</option>
        </select>
        {mode === "corners" && anyJpg && <p className={hint}>{t("JPG has no transparency, so the corners are filled with the background colour.")}</p>}
      </div>
      {format !== "image/png" && (
        <div className="flex flex-col gap-1.5">
          <label htmlFor="fx-quality" className={label}><span>{t("Quality")}</span><span className="text-primary font-semibold">{`${Math.round(quality * 100)}%`}</span></label>
          <input id="fx-quality" type="range" min={0.5} max={1} step={0.01} value={quality} onChange={(e) => setQuality(parseFloat(e.target.value))} className="w-full accent-secondary" />
        </div>
      )}
      {anyJpg && <BackgroundPicker value={{ ...bg, transparent: false }} onChange={setBg} allowTransparent={false} label={t("JPG background")} />}
      <p className="text-label-sm font-label-sm text-on-surface-variant/80">{t("Your images are processed in your browser and never uploaded.")}</p>
    </>
  );

  return (
    <>
      <TopLoadingBar active={isWorking} />
      <ToolWorkspace
        mobile={{
          ...filesHeader(items.map((i) => i.file)),
          onBack: reset,
          backLabel: t("Clear files"),
          settingsTitle: t("Settings"),
          cta: { icon: ICON[mode], label: action, busyLabel: t("Working…"), busy: isWorking, onClick: applyAll },
        }}
        main={
          <>
            <div className="bg-surface-container rounded-xl border border-surface-variant p-4 flex items-center justify-center overflow-hidden" style={{ minHeight: 220 }}>
              <canvas ref={setPreviewEl} style={checker} className="max-w-full max-h-[46vh] rounded" aria-label={t("Preview")} />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-label-sm font-label-sm text-on-surface-variant">
              <span>
                {t("Live preview of")} <span className="font-semibold text-on-surface">{items[0].file.name}</span>
                {items.length > 1 && <> {t("— applied to all {n} images.", { n: items.length })}</>}
              </span>
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
            <FileTray entries={entries} accept={ACCEPT} onFiles={addFiles} onClear={reset} busy={isWorking} />
          </>
        }
        rail={
          <SettingsRail
            title={t("Settings")}
            icon={ICON[mode]}
            accent={ACCENT}
            footer={
              <>
                <RailAction onClick={applyAll} busy={isWorking} busyLabel={t("Working…")} icon={ICON[mode]}>
                  {action}
                </RailAction>
                {done && items.length > 1 && (
                  <RailSecondaryAction
                    icon="folder_zip"
                    onClick={() => zipAndDownload(items.filter((i) => i.result).map((i) => ({ name: i.result!.name, blob: i.result!.blob })), `omyimage${SUFFIX[mode]}.zip`)}
                  >
                    {t("Download all (ZIP)")}
                  </RailSecondaryAction>
                )}
              </>
            }
          >
            {controls}
          </SettingsRail>
        }
      />
    </>
  );
}

"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { ToolWorkspace, filesHeader } from "@/components/tool/ToolWorkspace";
import { SettingsRail, RailAction, RailNote } from "@/components/tool/SettingsRail";
import { baseName, downloadBlob } from "@/lib/image/raster";
import { openGif, totalDuration, type FrameSource } from "@/lib/gif/frames";
import { openWebp } from "@/lib/gif/webp-anim";
import { reencodeAsGif } from "@/lib/gif/reencode";
import { useHandoff } from "@/lib/tool-handoff";
import { useFormatBytes, useLocale, useT } from "@/i18n/I18nScope";
import { translateError } from "@/i18n/errors";

/**
 * compress — gif-compressor; resize — gif-resizer; webp — webp-to-gif.
 * One pipeline (lib/gif/reencode.ts) with three sets of controls.
 */
export type GifMode = "compress" | "resize" | "webp";

const ACCENT = "#C56A9A";

type Level = "light" | "medium" | "strong";
/** Colours / lossy frame-diff tolerance / frame keep ratio per level. */
const LEVELS: Record<Level, { colors: number; fuzz: number; keepEvery: number }> = {
  light: { colors: 256, fuzz: 0, keepEvery: 1 },
  medium: { colors: 128, fuzz: 18, keepEvery: 1 },
  strong: { colors: 64, fuzz: 30, keepEvery: 2 },
};
const LEVEL_LABEL: Record<Level, string> = { light: "Light", medium: "Medium", strong: "Strong" };
const COLOR_STEPS = [256, 128, 64, 32];
const KEEP_LABEL: Record<number, string> = { 1: "Keep all frames", 2: "Keep every 2nd frame", 3: "Keep every 3rd frame" };
const SCALES = [100, 75, 50];
const PERCENTS = [25, 50, 75];

const toInt = (s: string) => { const n = parseInt(s, 10); return Number.isFinite(n) ? n : 0; };

export function GifTool({ mode }: { mode: GifMode }) {
  const t = useT();
  const locale = useLocale();
  const formatBytes = useFormatBytes();
  const accept = mode === "webp" ? "image/webp,.webp" : "image/gif,.gif";

  const [file, setFile] = useState<File | null>(null);
  const [src, setSrc] = useState<FrameSource | null>(null);
  const [origUrl, setOrigUrl] = useState<string | null>(null);
  const [isWorking, setIsWorking] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<{ blob: Blob; url: string; w: number; h: number; frames: number } | null>(null);

  // compress
  const [level, setLevel] = useState<Level>("medium");
  const [colors, setColors] = useState(LEVELS.medium.colors);
  const [keepEvery, setKeepEvery] = useState(LEVELS.medium.keepEvery);
  const [scale, setScale] = useState(100);
  // resize
  const [sizeMode, setSizeMode] = useState<"percent" | "pixels">("percent");
  const [percent, setPercent] = useState("50");
  const [wStr, setWStr] = useState("");
  const [hStr, setHStr] = useState("");
  const [keepAspect, setKeepAspect] = useState(true);

  useEffect(() => () => { if (origUrl) URL.revokeObjectURL(origUrl); }, [origUrl]);
  useEffect(() => () => { if (result) URL.revokeObjectURL(result.url); }, [result]);

  const onFiles = useCallback(async (incoming: FileList | File[]) => {
    const want = mode === "webp" ? /webp$/i : /gif$/i;
    const f = Array.from(incoming).find((x) => want.test(x.type) || want.test(x.name));
    if (!f) { toast.error(mode === "webp" ? t("Please select a WEBP image.") : t("Please select a GIF.")); return; }
    try {
      const s = mode === "webp" ? await openWebp(f) : await openGif(f);
      setFile(f);
      setSrc(s);
      setOrigUrl(URL.createObjectURL(f));
      setResult(null);
      setWStr(String(s.width));
      setHStr(String(s.height));
    } catch (err) {
      toast.error(translateError(err, t, "Could not read this image."));
    }
  }, [mode, t]);

  useHandoff(onFiles);

  const reset = () => { setFile(null); setSrc(null); setOrigUrl(null); setResult(null); };

  const pickLevel = (l: Level) => { setLevel(l); setColors(LEVELS[l].colors); setKeepEvery(LEVELS[l].keepEvery); };

  /** Output size for the current settings. */
  const out = useMemo(() => {
    if (!src) return null;
    if (mode === "compress") {
      const k = scale / 100;
      return { w: Math.max(1, Math.round(src.width * k)), h: Math.max(1, Math.round(src.height * k)) };
    }
    if (mode === "resize") {
      if (sizeMode === "percent") {
        const k = Math.max(1, Math.min(400, toInt(percent))) / 100;
        return { w: Math.max(1, Math.round(src.width * k)), h: Math.max(1, Math.round(src.height * k)) };
      }
      const w = Math.min(4000, toInt(wStr));
      const h = Math.min(4000, toInt(hStr));
      if (w <= 0 && h <= 0) return null;
      if (keepAspect) {
        const k = w > 0 ? w / src.width : h / src.height;
        return { w: Math.max(1, Math.round(src.width * k)), h: Math.max(1, Math.round(src.height * k)) };
      }
      return { w: Math.max(1, w || src.width), h: Math.max(1, h || src.height) };
    }
    return { w: src.width, h: src.height };
  }, [src, mode, scale, sizeMode, percent, wStr, hStr, keepAspect]);

  const onW = (v: string) => { setWStr(v); if (keepAspect && src) { const w = toInt(v); if (w > 0) setHStr(String(Math.round(w * (src.height / src.width)))); } };
  const onH = (v: string) => { setHStr(v); if (keepAspect && src) { const h = toInt(v); if (h > 0) setWStr(String(Math.round(h * (src.width / src.height)))); } };

  const run = async () => {
    if (!src || !file || !out) return;
    setIsWorking(true);
    setProgress(0);
    setResult(null);
    try {
      const r = await reencodeAsGif(src, {
        width: out.w,
        height: out.h,
        colors: mode === "compress" ? colors : 256,
        fuzz: mode === "compress" ? LEVELS[level].fuzz : 0,
        keepEvery: mode === "compress" ? keepEvery : 1,
        onProgress: setProgress,
      });
      const blob = new Blob([r.bytes as BlobPart], { type: "image/gif" });
      setResult({ blob, url: URL.createObjectURL(blob), w: out.w, h: out.h, frames: r.frames });
      if (mode === "compress" && blob.size >= file.size) {
        toast(t("This GIF is already well optimised — try Strong, fewer colours or a smaller size."));
      }
    } catch (err) {
      toast.error(translateError(err, t, "Processing failed."));
    } finally {
      setIsWorking(false);
    }
  };

  const download = () => {
    if (!result || !file) return;
    const suffix = mode === "compress" ? "_compressed" : mode === "resize" ? `_${result.w}x${result.h}` : "";
    downloadBlob(result.blob, `${baseName(file.name)}${suffix}.gif`);
  };

  if (!file || !src || !origUrl) {
    const hint = mode === "webp" ? t("or drop an animated WEBP here") : t("or drop a GIF here");
    return (
      <section>
        <Dropzone onFiles={onFiles} accept={accept} accent={ACCENT} icon="gif_box" multiple={false} camera={false} buttonLabel={mode === "webp" ? t("Select a WEBP") : t("Select a GIF")} hint={hint} />
      </section>
    );
  }

  const seconds = new Intl.NumberFormat(locale, { maximumFractionDigits: 1 }).format(totalDuration(src) / 1000);
  const n = src.delays.length;
  const actionLabel = mode === "compress" ? t("Compress GIF") : mode === "resize" ? t("Resize GIF") : t("Convert to GIF");
  const saved = result && file ? Math.round((1 - result.blob.size / file.size) * 100) : 0;
  const chip = (on: boolean) =>
    `rounded-full border px-2.5 py-1 text-label-sm font-semibold tabular-nums transition-colors ${on ? "border-secondary bg-secondary/10 text-secondary" : "border-outline-variant/60 text-on-surface-variant hover:border-secondary hover:text-secondary"}`;
  const fieldCls = "w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";
  const label = "text-label-sm font-label-sm text-on-surface-variant";
  const checker = { backgroundColor: "#fff", backgroundImage: "linear-gradient(45deg,#cbd5e1 25%,transparent 25%),linear-gradient(-45deg,#cbd5e1 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#cbd5e1 75%),linear-gradient(-45deg,transparent 75%,#cbd5e1 75%)", backgroundSize: "16px 16px", backgroundPosition: "0 0,0 8px,8px -8px,-8px 0" };

  const panel = (title: string, url: string, meta: string, accent = false) => (
    <figure className="flex flex-col gap-2">
      <figcaption className={`text-label-md font-semibold ${accent ? "text-secondary" : "text-on-surface-variant"}`}>{title}</figcaption>
      <div className="flex min-h-[200px] items-center justify-center rounded-xl border border-surface-variant bg-surface-container p-3">
        {/* eslint-disable-next-line @next/next/no-img-element -- object URL of the user's own animation */}
        <img src={url} alt={title} style={checker} className="max-h-[42vh] max-w-full rounded shadow-sm" />
      </div>
      <p className="text-label-sm font-label-sm text-on-surface-variant tabular-nums">{meta}</p>
    </figure>
  );

  return (
    <>
      <TopLoadingBar active={isWorking} />
      <ToolWorkspace
        mobile={{
          ...filesHeader([file]),
          onBack: reset,
          backLabel: t("Clear image"),
          settingsTitle: t("GIF settings"),
          cta: result
            ? { icon: "download", label: t("Download GIF"), busyLabel: t("Saving…"), busy: false, onClick: download }
            : { icon: "gif_box", label: actionLabel, busyLabel: t("Working… {p}%", { p: Math.round(progress * 100) }), busy: isWorking, onClick: run },
        }}
        main={
          <div className="flex flex-col gap-3">
            <div className="grid gap-4 md:grid-cols-2">
              {panel(t("Original"), origUrl, `${src.width} × ${src.height} px · ${t("{n} frames", { n })} · ${t("{s} s", { s: seconds })} · ${formatBytes(file.size)}`)}
              {result
                ? panel(t("Result"), result.url, `${result.w} × ${result.h} px · ${t("{n} frames", { n: result.frames })} · ${formatBytes(result.blob.size)}${mode === "compress" && saved > 0 ? ` · ${t("{p}% smaller", { p: saved })}` : ""}`, true)
                : (
                  <div className="flex min-h-[200px] flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-outline-variant/60 p-6 text-center text-body-md text-on-surface-variant">
                    {isWorking ? (
                      <>
                        <Icon name="progress_activity" className="animate-spin text-[24px] text-secondary" />
                        <span className="tabular-nums">{t("Working… {p}%", { p: Math.round(progress * 100) })}</span>
                      </>
                    ) : (
                      <span>{t("Your GIF will appear here.")}</span>
                    )}
                  </div>
                )}
            </div>
            <div className="flex justify-end">
              <button type="button" onClick={reset} className="inline-flex items-center gap-1.5 text-label-md font-medium text-on-surface-variant hover:text-error">
                <Icon name="close" className="text-[18px]" /> {t("Change image")}
              </button>
            </div>
            {mode === "webp" && n === 1 && (
              <p className="text-label-sm font-label-sm text-on-surface-variant/80">{t("This WEBP isn't animated, so the GIF will be a single still image.")}</p>
            )}
          </div>
        }
        rail={
          <SettingsRail
            title={t("GIF settings")}
            icon="gif_box"
            accent={ACCENT}
            footer={
              <>
                <RailNote>
                  {out ? t("Output: {w} × {h} px", { w: out.w, h: out.h }) : t("Set a size")}
                </RailNote>
                <RailAction onClick={run} busy={isWorking} busyLabel={t("Working… {p}%", { p: Math.round(progress * 100) })} icon="gif_box" disabled={!out}>
                  {actionLabel}
                </RailAction>
                {result && (
                  <button type="button" onClick={download} className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-secondary px-4 py-2.5 text-label-lg font-semibold text-secondary hover:bg-secondary/10">
                    <Icon name="download" className="text-[18px]" /> {t("Download GIF")}
                  </button>
                )}
              </>
            }
          >
            {mode === "compress" && (
              <>
                <div className="flex flex-col gap-1.5">
                  <span className={label}>{t("Compression")}</span>
                  <div role="radiogroup" aria-label={t("Compression")} className="grid grid-cols-3 gap-1 rounded-lg bg-surface-container p-1">
                    {(Object.keys(LEVELS) as Level[]).map((l) => (
                      <button key={l} type="button" role="radio" aria-checked={level === l} onClick={() => pickLevel(l)}
                        className={`rounded-md px-2 py-1.5 text-label-md font-semibold ${level === l ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant"}`}>
                        {t(LEVEL_LABEL[l])}
                      </button>
                    ))}
                  </div>
                  <p className="text-label-sm font-label-sm text-on-surface-variant/70">{t("Stronger levels use fewer colours and skip tiny changes between frames.")}</p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className={label}>{t("Colours")}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {COLOR_STEPS.map((c) => <button key={c} type="button" onClick={() => setColors(c)} className={chip(colors === c)}>{c}</button>)}
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="gif-keep" className={label}>{t("Frames")}</label>
                  <select id="gif-keep" value={keepEvery} onChange={(e) => setKeepEvery(Number(e.target.value))} className={fieldCls}>
                    {[1, 2, 3].map((k) => <option key={k} value={k}>{t(KEEP_LABEL[k])}</option>)}
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className={label}>{t("Size")}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {SCALES.map((s) => <button key={s} type="button" onClick={() => setScale(s)} className={chip(scale === s)}>{`${s}%`}</button>)}
                  </div>
                </div>
              </>
            )}
            {mode === "resize" && (
              <>
                <div role="radiogroup" aria-label={t("Size")} className="grid grid-cols-2 gap-1 rounded-lg bg-surface-container p-1">
                  {(["percent", "pixels"] as const).map((m) => (
                    <button key={m} type="button" role="radio" aria-checked={sizeMode === m} onClick={() => setSizeMode(m)}
                      className={`rounded-md px-2 py-1.5 text-label-md font-semibold ${sizeMode === m ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant"}`}>
                      {m === "percent" ? t("By percent") : t("By pixels")}
                    </button>
                  ))}
                </div>
                {sizeMode === "percent" ? (
                  <div className="flex flex-col gap-1.5">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {PERCENTS.map((p) => <button key={p} type="button" onClick={() => setPercent(String(p))} className={chip(toInt(percent) === p)}>{`${p}%`}</button>)}
                      <input type="number" min={1} max={400} value={percent} onChange={(e) => setPercent(e.target.value)} aria-label={t("Percent")} className={`${fieldCls.replace("w-full", "w-20")} tabular-nums`} />
                      <span className="text-body-md text-on-surface-variant">%</span>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex flex-col gap-1.5"><label className={label}>{t("Width (px)")}</label><input type="number" min={1} value={wStr} onChange={(e) => onW(e.target.value)} className={fieldCls} /></div>
                      <div className="flex flex-col gap-1.5"><label className={label}>{t("Height (px)")}</label><input type="number" min={1} value={hStr} onChange={(e) => onH(e.target.value)} className={fieldCls} /></div>
                    </div>
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input type="checkbox" checked={keepAspect} onChange={(e) => setKeepAspect(e.target.checked)} className="w-4 h-4 accent-secondary" />
                      <span className="text-body-md text-on-surface">{t("Keep aspect ratio")}</span>
                    </label>
                  </>
                )}
                <p className="text-label-sm font-label-sm text-on-surface-variant/70">{t("Every frame is resized and the timing stays the same.")}</p>
              </>
            )}
            {mode === "webp" && (
              <p className="text-body-md text-on-surface-variant">
                {t("Every frame and its timing are kept. GIF has only 256 colours and no soft transparency, so gradients may band and semi-transparent edges become solid.")}
              </p>
            )}
            <p className="text-label-sm font-label-sm text-on-surface-variant/80">{t("Your file is processed in your browser and never uploaded.")}</p>
          </SettingsRail>
        }
      />
    </>
  );
}

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
import { framesToWebp } from "@/lib/gif/to-webp";
import { framesToApng } from "@/lib/gif/to-apng";
import { fitsCanvas, renderSprite, spriteGrid, type SpriteLayout } from "@/lib/gif/sprite";
import { useHandoff } from "@/lib/tool-handoff";
import { useFormatBytes, useLocale, useT } from "@/i18n/I18nScope";
import { translateError } from "@/i18n/errors";

/**
 * webp — gif-to-webp; apng — gif-to-apng; sprite — gif-to-sprite-sheet.
 * Each writes the GIF's frames into another container; none re-quantises.
 */
export type GifExportMode = "webp" | "apng" | "sprite";

const ACCENT = "#C56A9A";
const QUALITY = { lossless: 1, high: 0.9, small: 0.7 } as const;
type Quality = keyof typeof QUALITY;
const SCALES = [100, 75, 50, 25];
const GAPS = [0, 2, 4, 8];

const toInt = (s: string) => { const n = parseInt(s, 10); return Number.isFinite(n) ? n : 0; };

export function GifExportTool({ mode }: { mode: GifExportMode }) {
  const t = useT();
  const locale = useLocale();
  const formatBytes = useFormatBytes();

  const [file, setFile] = useState<File | null>(null);
  const [src, setSrc] = useState<FrameSource | null>(null);
  const [origUrl, setOrigUrl] = useState<string | null>(null);
  const [isWorking, setIsWorking] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<{ blob: Blob; url: string; frames: number; note?: string } | null>(null);

  // webp
  const [quality, setQuality] = useState<Quality>("lossless");
  // sprite
  const [layout, setLayout] = useState<SpriteLayout>("grid");
  const [colsStr, setColsStr] = useState("");
  const [keepEvery, setKeepEvery] = useState(1);
  const [scale, setScale] = useState(100);
  const [gap, setGap] = useState(0);
  const [transparentBg, setTransparentBg] = useState(true);
  const [bg, setBg] = useState("#ffffff");

  useEffect(() => () => { if (origUrl) URL.revokeObjectURL(origUrl); }, [origUrl]);
  useEffect(() => () => { if (result) URL.revokeObjectURL(result.url); }, [result]);

  const onFiles = useCallback(async (incoming: FileList | File[]) => {
    const f = Array.from(incoming).find((x) => /gif$/i.test(x.type) || /\.gif$/i.test(x.name));
    if (!f) { toast.error(t("Please select a GIF.")); return; }
    try {
      const s = await openGif(f);
      setFile(f);
      setSrc(s);
      setOrigUrl(URL.createObjectURL(f));
      setResult(null);
      setColsStr(String(Math.ceil(Math.sqrt(s.delays.length))));
    } catch (err) {
      toast.error(translateError(err, t, "Could not read this image."));
    }
  }, [t]);

  useHandoff(onFiles);

  const reset = () => { setFile(null); setSrc(null); setOrigUrl(null); setResult(null); };

  /** sprite: which frames, at what size, on how big a sheet. */
  const sheet = useMemo(() => {
    if (!src || mode !== "sprite") return null;
    const frames: number[] = [];
    for (let i = 0; i < src.delays.length; i += keepEvery) frames.push(i);
    const fw = Math.max(1, Math.round((src.width * scale) / 100));
    const fh = Math.max(1, Math.round((src.height * scale) / 100));
    const grid = spriteGrid(frames.length, fw, fh, layout, Math.max(1, toInt(colsStr) || 1), gap);
    const ms = frames.reduce((a, i) => a + src.delays.slice(i, i + keepEvery).reduce((x, y) => x + y, 0), 0);
    return { frames, fw, fh, grid, ms, fits: fitsCanvas(grid) };
  }, [src, mode, keepEvery, scale, layout, colsStr, gap]);

  const settingsKey = JSON.stringify([quality, layout, colsStr, keepEvery, scale, gap, transparentBg, bg]);
  useEffect(() => { setResult(null); }, [settingsKey]);

  const run = async () => {
    if (!src || !file) return;
    setIsWorking(true);
    setProgress(0);
    setResult(null);
    try {
      if (mode === "webp") {
        const r = await framesToWebp(src, { quality: QUALITY[quality], onProgress: setProgress });
        const note = quality === "lossless" && !r.lossless ? t("This browser saves WEBP at very high quality instead of lossless.") : undefined;
        setResult({ blob: r.blob, url: URL.createObjectURL(r.blob), frames: r.frames, note });
      } else if (mode === "apng") {
        const r = await framesToApng(src, setProgress);
        setResult({ blob: r.blob, url: URL.createObjectURL(r.blob), frames: r.frames });
      } else if (sheet) {
        const blob = await renderSprite(src, sheet.frames, {
          fw: sheet.fw, fh: sheet.fh, grid: sheet.grid, gap, background: transparentBg ? null : bg, onProgress: setProgress,
        });
        setResult({ blob, url: URL.createObjectURL(blob), frames: sheet.frames.length });
      }
    } catch (err) {
      toast.error(translateError(err, t, "Processing failed."));
    } finally {
      setIsWorking(false);
    }
  };

  const ext = mode === "webp" ? ".webp" : mode === "apng" ? ".png" : "_sprite.png";
  const download = () => { if (result && file) downloadBlob(result.blob, `${baseName(file.name)}${ext}`); };

  if (!file || !src || !origUrl) {
    return (
      <section>
        <Dropzone onFiles={onFiles} accept="image/gif,.gif" accent={ACCENT} icon="gif_box" multiple={false} camera={false} buttonLabel={t("Select a GIF")} hint={t("or drop a GIF here")} />
      </section>
    );
  }

  const n = src.delays.length;
  const nf = new Intl.NumberFormat(locale, { maximumFractionDigits: 2 });
  const secs = (ms: number) => t("{s} s", { s: nf.format(ms / 1000) });
  const actionLabel = mode === "webp" ? t("Convert to WEBP") : mode === "apng" ? t("Convert to APNG") : t("Make sprite sheet");
  const working = t("Working… {p}%", { p: Math.round(progress * 100) });
  const ready = mode !== "sprite" || !!sheet?.fits;

  const chip = (on: boolean) =>
    `rounded-full border px-2.5 py-1 text-label-sm font-semibold tabular-nums transition-colors ${on ? "border-secondary bg-secondary/10 text-secondary" : "border-outline-variant/60 text-on-surface-variant hover:border-secondary hover:text-secondary"}`;
  const seg = (on: boolean) => `rounded-md px-2 py-1.5 text-label-md font-semibold ${on ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant"}`;
  const fieldCls = "w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";
  const label = "text-label-sm font-label-sm text-on-surface-variant";
  const hint = "text-label-sm font-label-sm text-on-surface-variant/70";
  const checker = { backgroundColor: "#fff", backgroundImage: "linear-gradient(45deg,#cbd5e1 25%,transparent 25%),linear-gradient(-45deg,#cbd5e1 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#cbd5e1 75%),linear-gradient(-45deg,transparent 75%,#cbd5e1 75%)", backgroundSize: "16px 16px", backgroundPosition: "0 0,0 8px,8px -8px,-8px 0" };

  const panel = (title: string, url: string, meta: string, accent = false) => (
    <figure className="flex flex-col gap-2">
      <figcaption className={`text-label-md font-semibold ${accent ? "text-secondary" : "text-on-surface-variant"}`}>{title}</figcaption>
      <div className="flex min-h-[200px] items-center justify-center rounded-xl border border-surface-variant bg-surface-container p-3">
        {/* eslint-disable-next-line @next/next/no-img-element -- object URL of the user's own image */}
        <img src={url} alt={title} style={checker} className="max-h-[42vh] max-w-full rounded shadow-sm" />
      </div>
      <p className="text-label-sm font-label-sm text-on-surface-variant tabular-nums">{meta}</p>
    </figure>
  );

  const versus = (size: number) => {
    const p = Math.round((1 - size / file.size) * 100);
    return p > 0 ? t("{p}% smaller than the GIF", { p }) : p < 0 ? t("{p}% larger than the GIF", { p: -p }) : t("Same size as the GIF");
  };

  const resultMeta = !result ? "" : mode === "sprite" && sheet
    ? `${sheet.grid.width} × ${sheet.grid.height} px · ${t("{n} frames", { n: result.frames })} · ${formatBytes(result.blob.size)}`
    : `${src.width} × ${src.height} px · ${t("{n} frames", { n: result.frames })} · ${formatBytes(result.blob.size)} · ${versus(result.blob.size)}`;

  // sprite: a CSS animation for one-row / one-column sheets
  const css = mode === "sprite" && sheet && layout !== "grid" ? [
    ".sprite {",
    `  width: ${sheet.fw}px;`,
    `  height: ${sheet.fh}px;`,
    `  background: url("${baseName(file.name)}_sprite.png") no-repeat 0 0;`,
    `  animation: sprite ${nf.format(sheet.ms / 1000).replace(",", ".")}s steps(${sheet.frames.length}) infinite;`,
    "}",
    "@keyframes sprite {",
    layout === "row"
      ? `  to { background-position: -${sheet.frames.length * (sheet.fw + gap)}px 0; }`
      : `  to { background-position: 0 -${sheet.frames.length * (sheet.fh + gap)}px; }`,
    "}",
  ].join("\n") : null;

  const copyCss = async () => {
    if (!css) return;
    try { await navigator.clipboard.writeText(css); toast.success(t("Copied")); } catch { toast.error(t("Could not copy.")); }
  };

  const main = (
    <div className="flex flex-col gap-3">
      <div className="grid gap-4 md:grid-cols-2">
        {panel(t("Original"), origUrl, `${src.width} × ${src.height} px · ${t("{n} frames", { n })} · ${secs(totalDuration(src))} · ${formatBytes(file.size)}`)}
        {result ? panel(t("Result"), result.url, resultMeta, true) : (
          <div className="flex min-h-[200px] flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-outline-variant/60 p-6 text-center text-body-md text-on-surface-variant">
            {isWorking ? (
              <>
                <Icon name="progress_activity" className="animate-spin text-[24px] text-secondary" />
                <span className="tabular-nums">{working}</span>
              </>
            ) : (
              <span>{mode === "sprite" ? t("Your sprite sheet will appear here.") : t("Your animation will appear here.")}</span>
            )}
          </div>
        )}
      </div>
      {result?.note && <p className="text-label-sm font-label-sm text-on-surface-variant/80">{result.note}</p>}
      {result && css && (
        <div className="flex flex-col gap-2 rounded-xl border border-surface-variant bg-surface-container p-3">
          <div className="flex items-center justify-between gap-2">
            <span className="text-label-md font-semibold text-on-surface">{t("CSS animation")}</span>
            <button type="button" onClick={copyCss} className="inline-flex items-center gap-1.5 text-label-md font-semibold text-secondary hover:underline">
              <Icon name="content_copy" className="text-[18px]" /> {t("Copy")}
            </button>
          </div>
          <pre className="overflow-x-auto rounded-lg bg-surface-container-lowest p-3 text-label-sm leading-relaxed text-on-surface"><code>{css}</code></pre>
          <p className={hint}>{t("Uses the average frame time, so frames with longer pauses play at the same pace as the rest.")}</p>
        </div>
      )}
      <div className="flex justify-end">
        <button type="button" onClick={reset} className="inline-flex items-center gap-1.5 text-label-md font-medium text-on-surface-variant hover:text-error">
          <Icon name="close" className="text-[18px]" /> {t("Change image")}
        </button>
      </div>
    </div>
  );

  const controls = (
    <>
      {mode === "webp" && (
        <div className="flex flex-col gap-1.5">
          <span className={label}>{t("Quality")}</span>
          <div role="radiogroup" aria-label={t("Quality")} className="grid grid-cols-3 gap-1 rounded-lg bg-surface-container p-1">
            <button type="button" role="radio" aria-checked={quality === "lossless"} onClick={() => setQuality("lossless")} className={seg(quality === "lossless")}>{t("Lossless")}</button>
            <button type="button" role="radio" aria-checked={quality === "high"} onClick={() => setQuality("high")} className={seg(quality === "high")}>{t("High")}</button>
            <button type="button" role="radio" aria-checked={quality === "small"} onClick={() => setQuality("small")} className={seg(quality === "small")}>{t("Small")}</button>
          </div>
          <p className={hint}>
            {quality === "lossless"
              ? t("Every pixel is kept. Usually smaller than the GIF already.")
              : t("Lossy: much smaller files, with slight softening around sharp edges.")}
          </p>
        </div>
      )}
      {mode === "apng" && (
        <p className="text-body-md text-on-surface-variant">
          {t("APNG keeps every pixel and frame. Only the part of each frame that changes is stored, so it is often smaller than the GIF.")}
        </p>
      )}
      {mode === "sprite" && sheet && (
        <>
          <div className="flex flex-col gap-1.5">
            <span className={label}>{t("Layout")}</span>
            <div role="radiogroup" aria-label={t("Layout")} className="grid grid-cols-3 gap-1 rounded-lg bg-surface-container p-1">
              <button type="button" role="radio" aria-checked={layout === "grid"} onClick={() => setLayout("grid")} className={seg(layout === "grid")}>{t("Grid")}</button>
              <button type="button" role="radio" aria-checked={layout === "row"} onClick={() => setLayout("row")} className={seg(layout === "row")}>{t("One row")}</button>
              <button type="button" role="radio" aria-checked={layout === "column"} onClick={() => setLayout("column")} className={seg(layout === "column")}>{t("One column")}</button>
            </div>
          </div>
          {layout === "grid" && (
            <div className="flex flex-col gap-1.5">
              <label htmlFor="sprite-cols" className={label}>{t("Columns")}</label>
              <input id="sprite-cols" type="number" min={1} max={sheet.frames.length} value={colsStr} onChange={(e) => setColsStr(e.target.value)} className={`${fieldCls} tabular-nums`} />
            </div>
          )}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="sprite-keep" className={label}>{t("Frames")}</label>
            <select id="sprite-keep" value={keepEvery} onChange={(e) => setKeepEvery(Number(e.target.value))} className={fieldCls}>
              <option value={1}>{t("Keep all frames")}</option>
              <option value={2}>{t("Keep every 2nd frame")}</option>
              <option value={3}>{t("Keep every 3rd frame")}</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className={label}>{t("Frame size")}</span>
            <div className="flex flex-wrap gap-1.5">
              {SCALES.map((s) => <button key={s} type="button" onClick={() => setScale(s)} className={chip(scale === s)}>{`${s}%`}</button>)}
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className={label}>{t("Space between frames")}</span>
            <div className="flex flex-wrap gap-1.5">
              {/* i18n-raw: a pixel count; "px" is the same in every locale */}
              {GAPS.map((g) => <button key={g} type="button" onClick={() => setGap(g)} className={chip(gap === g)}>{`${g} px`}</button>)}
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="flex items-center gap-2.5 cursor-pointer">
              <input type="checkbox" checked={transparentBg} onChange={(e) => setTransparentBg(e.target.checked)} className="w-4 h-4 accent-secondary" />
              <span className="text-body-md text-on-surface">{t("Transparent background")}</span>
            </label>
            {!transparentBg && (
              <label className="flex items-center gap-2.5">
                <input type="color" value={bg} onChange={(e) => setBg(e.target.value)} aria-label={t("Background colour")} className="h-9 w-12 cursor-pointer rounded border border-surface-variant bg-transparent" />
                <span className="text-label-sm font-label-sm text-on-surface-variant tabular-nums">{bg.toUpperCase()}</span>
              </label>
            )}
          </div>
          <p className="text-body-md text-on-surface tabular-nums">
            {t("{n} frames of {w} × {h} px, {cols} × {rows}", { n: sheet.frames.length, w: sheet.fw, h: sheet.fh, cols: sheet.grid.cols, rows: sheet.grid.rows })}
          </p>
          {!sheet.fits && (
            <p className="text-label-sm font-label-sm text-error">{t("This sheet is too large for a browser to create. Keep fewer frames, choose a smaller frame size or use a grid.")}</p>
          )}
        </>
      )}
      <p className="text-label-sm font-label-sm text-on-surface-variant/80">{t("Your file is processed in your browser and never uploaded.")}</p>
    </>
  );

  const railNote = mode === "sprite" && sheet
    ? t("Output: {w} × {h} px", { w: sheet.grid.width, h: sheet.grid.height })
    : t("Output: {w} × {h} px", { w: src.width, h: src.height });
  const icon = mode === "sprite" ? "grid_view" : "sync_alt";

  return (
    <>
      <TopLoadingBar active={isWorking} />
      <ToolWorkspace
        mobile={{
          ...filesHeader([file]),
          onBack: reset,
          backLabel: t("Clear image"),
          settingsTitle: t("Settings"),
          cta: result
            ? { icon: "download", label: t("Download"), busyLabel: t("Saving…"), busy: false, onClick: download }
            : { icon, label: actionLabel, busyLabel: working, busy: isWorking, onClick: run, disabled: !ready },
        }}
        main={main}
        rail={
          <SettingsRail
            title={t("Settings")}
            icon={icon}
            accent={ACCENT}
            footer={
              <>
                <RailNote>{railNote}</RailNote>
                <RailAction onClick={run} busy={isWorking} busyLabel={working} icon={icon} disabled={!ready}>
                  {actionLabel}
                </RailAction>
                {result && (
                  <button type="button" onClick={download} className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-secondary px-4 py-2.5 text-label-lg font-semibold text-secondary hover:bg-secondary/10">
                    <Icon name="download" className="text-[18px]" /> {t("Download")}
                  </button>
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

"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { ToolWorkspace, filesHeader } from "@/components/tool/ToolWorkspace";
import { SettingsRail, RailAction, RailNote } from "@/components/tool/SettingsRail";
import { baseName, downloadBlob } from "@/lib/image/raster";
import { encodeGif } from "@/lib/image/gif-encode";
import { fpsDelays, grabFrames, loadVideo, type LoadedVideo } from "@/lib/gif/video";
import { useHandoff } from "@/lib/tool-handoff";
import { useFormatBytes, useLocale, useT } from "@/i18n/I18nScope";
import { translateError } from "@/i18n/errors";

const ACCENT = "#C56A9A";
const ACCEPT = "video/mp4,video/webm,video/quicktime,video/x-m4v,.mp4,.webm,.mov,.m4v";
const FPS = [5, 10, 15, 20, 25];
const WIDTHS = [240, 320, 480, 640];
type Quality = "high" | "medium" | "small";
const QUALITY: Record<Quality, { colors: number; fuzz: number }> = {
  high: { colors: 256, fuzz: 4 },
  medium: { colors: 128, fuzz: 10 },
  small: { colors: 64, fuzz: 18 },
};
const QUALITY_LABEL: Record<Quality, string> = { high: "High", medium: "Medium", small: "Small file" };
/**
 * Frames are held as RGBA until encoding, so a clip's pixel count is capped:
 * 60 M pixels ≈ 240 MB, which phones and laptops both survive.
 */
const PIXEL_BUDGET = 60_000_000;

export function VideoToGifTool() {
  const t = useT();
  const locale = useLocale();
  const formatBytes = useFormatBytes();
  const [file, setFile] = useState<File | null>(null);
  const [video, setVideo] = useState<LoadedVideo | null>(null);
  const [start, setStart] = useState("0");
  const [end, setEnd] = useState("0");
  const [fps, setFps] = useState(10);
  const [width, setWidth] = useState(480);
  const [quality, setQuality] = useState<Quality>("medium");
  const [loop, setLoop] = useState(true);
  const [isWorking, setIsWorking] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<{ blob: Blob; url: string; w: number; h: number; frames: number } | null>(null);
  const previewRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => () => { if (video) URL.revokeObjectURL(video.url); }, [video]);
  useEffect(() => () => { if (result) URL.revokeObjectURL(result.url); }, [result]);

  const fmt = useMemo(() => new Intl.NumberFormat(locale, { maximumFractionDigits: 1 }), [locale]);
  const num = (s: string) => { const n = parseFloat(s.replace(",", ".")); return Number.isFinite(n) ? n : 0; };

  const onFiles = useCallback(async (incoming: FileList | File[]) => {
    const f = Array.from(incoming).find((x) => x.type.startsWith("video/") || /\.(mp4|webm|mov|m4v)$/i.test(x.name));
    if (!f) { toast.error(t("Please select a video file.")); return; }
    try {
      const v = await loadVideo(f);
      setFile(f);
      setVideo(v);
      setResult(null);
      setStart("0");
      // GIFs are for short moments: start with the first 5 seconds.
      setEnd(String(Math.round(Math.min(v.duration, 5) * 10) / 10));
      setWidth(v.width >= 480 ? 480 : v.width);
    } catch (err) {
      toast.error(translateError(err, t, "This video can't be played in your browser."));
    }
  }, [t]);

  useHandoff(onFiles);

  const reset = () => { setFile(null); setVideo(null); setResult(null); };

  const s0 = video ? Math.max(0, Math.min(num(start), video.duration)) : 0;
  const s1 = video ? Math.max(s0, Math.min(num(end), video.duration)) : 0;
  const clip = s1 - s0;
  const outW = video ? Math.min(width, video.width) : 0;
  const outH = video ? Math.max(1, Math.round((outW * video.height) / video.width)) : 0;
  const frames = Math.max(1, Math.round(clip * fps));
  const tooBig = frames * outW * outH > PIXEL_BUDGET;

  const markStart = () => { const v = previewRef.current; if (v) setStart(String(Math.round(v.currentTime * 10) / 10)); };
  const markEnd = () => { const v = previewRef.current; if (v) setEnd(String(Math.round(v.currentTime * 10) / 10)); };

  const run = async () => {
    if (!video || !file || clip <= 0 || tooBig) return;
    setIsWorking(true);
    setProgress(0);
    setResult(null);
    try {
      const rgba = await grabFrames(video, { start: s0, end: s1, fps, width: outW, height: outH, onProgress: (p) => setProgress(p * 0.5) });
      const delays = fpsDelays(rgba.length, fps);
      const q = QUALITY[quality];
      const bytes = await encodeGif(
        { count: rgba.length, delay: (i) => delays[i], pixels: (i) => rgba[i] },
        { width: outW, height: outH, colors: q.colors, fuzz: q.fuzz, optimize: true, repeat: loop ? 0 : -1, onProgress: (d, n) => setProgress(0.5 + (d / n) * 0.5) },
      );
      const blob = new Blob([bytes as BlobPart], { type: "image/gif" });
      setResult({ blob, url: URL.createObjectURL(blob), w: outW, h: outH, frames: rgba.length });
    } catch (err) {
      toast.error(translateError(err, t, "Processing failed."));
    } finally {
      setIsWorking(false);
    }
  };

  const download = () => { if (result && file) downloadBlob(result.blob, `${baseName(file.name)}.gif`); };

  if (!file || !video) {
    return (
      <section>
        <Dropzone onFiles={onFiles} accept={ACCEPT} accent={ACCENT} icon="gif_box" multiple={false} camera={false} buttonLabel={t("Select a video")} hint={t("or drop an MP4, WEBM or MOV video here")} />
      </section>
    );
  }

  const chip = (on: boolean) =>
    `rounded-full border px-2.5 py-1 text-label-sm font-semibold tabular-nums transition-colors ${on ? "border-secondary bg-secondary/10 text-secondary" : "border-outline-variant/60 text-on-surface-variant hover:border-secondary hover:text-secondary"}`;
  const fieldCls = "w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";
  const label = "text-label-sm font-label-sm text-on-surface-variant";
  const workingLabel = t("Working… {p}%", { p: Math.round(progress * 100) });

  return (
    <>
      <TopLoadingBar active={isWorking} />
      <ToolWorkspace
        mobile={{
          ...filesHeader([file]),
          onBack: reset,
          backLabel: t("Clear video"),
          settingsTitle: t("GIF settings"),
          cta: result
            ? { icon: "download", label: t("Download GIF"), busyLabel: t("Saving…"), busy: false, onClick: download }
            : { icon: "gif_box", label: t("Make GIF"), busyLabel: workingLabel, busy: isWorking, onClick: run },
        }}
        main={
          <div className="flex flex-col gap-3">
            <div className="grid gap-4 md:grid-cols-2">
              <figure className="flex flex-col gap-2">
                <figcaption className="text-label-md font-semibold text-on-surface-variant">{t("Video")}</figcaption>
                <video ref={previewRef} src={video.url} controls muted playsInline className="max-h-[42vh] w-full rounded-xl bg-black" />
                <div className="flex flex-wrap gap-2">
                  <button type="button" onClick={markStart} className={chip(false)}>{t("Start here")}</button>
                  <button type="button" onClick={markEnd} className={chip(false)}>{t("End here")}</button>
                </div>
              </figure>
              {result ? (
                <figure className="flex flex-col gap-2">
                  <figcaption className="text-label-md font-semibold text-secondary">{t("GIF")}</figcaption>
                  <div className="flex min-h-[200px] items-center justify-center rounded-xl border border-surface-variant bg-surface-container p-3">
                    {/* eslint-disable-next-line @next/next/no-img-element -- object URL of the GIF just made */}
                    <img src={result.url} alt={t("GIF")} className="max-h-[42vh] max-w-full rounded shadow-sm" />
                  </div>
                  <p className="text-label-sm font-label-sm text-on-surface-variant tabular-nums">
                    {/* i18n-raw: dimensions joined to already-translated parts */}
                    {`${result.w} × ${result.h} px · ${t("{n} frames", { n: result.frames })} · ${formatBytes(result.blob.size)}`}
                  </p>
                </figure>
              ) : (
                <div className="flex min-h-[200px] flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-outline-variant/60 p-6 text-center text-body-md text-on-surface-variant">
                  {isWorking ? (
                    <>
                      <Icon name="progress_activity" className="animate-spin text-[24px] text-secondary" />
                      <span className="tabular-nums">{workingLabel}</span>
                    </>
                  ) : (
                    <span>{t("Your GIF will appear here.")}</span>
                  )}
                </div>
              )}
            </div>
            <div className="flex justify-end">
              <button type="button" onClick={reset} className="inline-flex items-center gap-1.5 text-label-md font-medium text-on-surface-variant hover:text-error">
                <Icon name="close" className="text-[18px]" /> {t("Change video")}
              </button>
            </div>
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
                  {tooBig
                    ? t("Too long for this size — shorten the clip, lower the frame rate or the width.")
                    : t("{n} frames at {w} × {h} px", { n: frames, w: outW, h: outH })}
                </RailNote>
                <RailAction onClick={run} busy={isWorking} busyLabel={workingLabel} icon="gif_box" disabled={tooBig || clip <= 0}>
                  {t("Make GIF")}
                </RailAction>
                {result && (
                  <button type="button" onClick={download} className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-secondary px-4 py-2.5 text-label-lg font-semibold text-secondary hover:bg-secondary/10">
                    <Icon name="download" className="text-[18px]" /> {t("Download GIF")}
                  </button>
                )}
              </>
            }
          >
            <div className="flex flex-col gap-1.5">
              <span className={label}>{t("Clip (seconds)")}</span>
              <div className="grid grid-cols-2 gap-3">
                <input type="text" inputMode="decimal" value={start} onChange={(e) => setStart(e.target.value)} aria-label={t("Start")} className={`${fieldCls} tabular-nums`} />
                <input type="text" inputMode="decimal" value={end} onChange={(e) => setEnd(e.target.value)} aria-label={t("End")} className={`${fieldCls} tabular-nums`} />
              </div>
              <p className="text-label-sm font-label-sm text-on-surface-variant/70">
                {t("{len} s of {total} s. Use Start here and End here while the video plays.", { len: fmt.format(clip), total: fmt.format(video.duration) })}
              </p>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className={label}>{t("Frames per second")}</span>
              <div className="flex flex-wrap gap-1.5">
                {FPS.map((f) => <button key={f} type="button" onClick={() => setFps(f)} className={chip(fps === f)}>{f}</button>)}
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className={label}>{t("Width (px)")}</span>
              <div className="flex flex-wrap gap-1.5">
                {WIDTHS.filter((w) => w < video.width).map((w) => <button key={w} type="button" onClick={() => setWidth(w)} className={chip(width === w)}>{w}</button>)}
                <button type="button" onClick={() => setWidth(video.width)} className={chip(width >= video.width)}>{t("Original ({w})", { w: video.width })}</button>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className={label}>{t("Quality")}</span>
              <div role="radiogroup" aria-label={t("Quality")} className="grid grid-cols-3 gap-1 rounded-lg bg-surface-container p-1">
                {(Object.keys(QUALITY) as Quality[]).map((q) => (
                  <button key={q} type="button" role="radio" aria-checked={quality === q} onClick={() => setQuality(q)}
                    className={`rounded-md px-2 py-1.5 text-label-md font-semibold ${quality === q ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant"}`}>
                    {t(QUALITY_LABEL[q])}
                  </button>
                ))}
              </div>
            </div>
            <label className="flex items-center gap-2.5 cursor-pointer">
              <input type="checkbox" checked={loop} onChange={(e) => setLoop(e.target.checked)} className="w-4 h-4 accent-secondary" />
              <span className="text-body-md text-on-surface">{t("Loop forever")}</span>
            </label>
            <p className="text-label-sm font-label-sm text-on-surface-variant/80">{t("Your video is converted in your browser and never uploaded.")}</p>
          </SettingsRail>
        }
      />
    </>
  );
}

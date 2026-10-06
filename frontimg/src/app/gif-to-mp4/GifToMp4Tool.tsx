"use client";

import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { ToolWorkspace, filesHeader } from "@/components/tool/ToolWorkspace";
import { SettingsRail, RailAction, RailNote } from "@/components/tool/SettingsRail";
import { baseName, downloadBlob } from "@/lib/image/raster";
import { openGif, totalDuration, type FrameSource } from "@/lib/gif/frames";
import { framesToMp4 } from "@/lib/gif/to-mp4";
import { useHandoff } from "@/lib/tool-handoff";
import { useFormatBytes, useLocale, useT } from "@/i18n/I18nScope";
import { translateError } from "@/i18n/errors";

const ACCENT = "#C56A9A";
const REPEATS = [1, 2, 3, 5];

export function GifToMp4Tool() {
  const t = useT();
  const locale = useLocale();
  const formatBytes = useFormatBytes();
  const [file, setFile] = useState<File | null>(null);
  const [src, setSrc] = useState<FrameSource | null>(null);
  const [origUrl, setOrigUrl] = useState<string | null>(null);
  const [background, setBackground] = useState("#ffffff");
  const [repeat, setRepeat] = useState(1);
  const [isWorking, setIsWorking] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<{ blob: Blob; url: string } | null>(null);

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
    } catch (err) {
      toast.error(translateError(err, t, "Could not read this image."));
    }
  }, [t]);

  useHandoff(onFiles);

  const reset = () => { setFile(null); setSrc(null); setOrigUrl(null); setResult(null); };

  const run = async () => {
    if (!src) return;
    setIsWorking(true);
    setProgress(0);
    setResult(null);
    try {
      const blob = await framesToMp4(src, { background, repeat, onProgress: setProgress });
      setResult({ blob, url: URL.createObjectURL(blob) });
    } catch (err) {
      toast.error(translateError(err, t, "Processing failed."));
    } finally {
      setIsWorking(false);
    }
  };

  const download = () => { if (result && file) downloadBlob(result.blob, `${baseName(file.name)}.mp4`); };

  if (!file || !src || !origUrl) {
    return (
      <section>
        <Dropzone onFiles={onFiles} accept="image/gif,.gif" accent={ACCENT} icon="gif_box" multiple={false} camera={false} buttonLabel={t("Select a GIF")} hint={t("or drop a GIF here")} />
      </section>
    );
  }

  const fmt = new Intl.NumberFormat(locale, { maximumFractionDigits: 1 });
  const seconds = totalDuration(src) / 1000;
  const n = src.delays.length;
  const workingLabel = t("Working… {p}%", { p: Math.round(progress * 100) });
  const chip = (on: boolean) =>
    `rounded-full border px-2.5 py-1 text-label-sm font-semibold tabular-nums transition-colors ${on ? "border-secondary bg-secondary/10 text-secondary" : "border-outline-variant/60 text-on-surface-variant hover:border-secondary hover:text-secondary"}`;
  const label = "text-label-sm font-label-sm text-on-surface-variant";

  return (
    <>
      <TopLoadingBar active={isWorking} />
      <ToolWorkspace
        mobile={{
          ...filesHeader([file]),
          onBack: reset,
          backLabel: t("Clear image"),
          settingsTitle: t("MP4 settings"),
          cta: result
            ? { icon: "download", label: t("Download MP4"), busyLabel: t("Saving…"), busy: false, onClick: download }
            : { icon: "gif_box", label: t("Convert to MP4"), busyLabel: workingLabel, busy: isWorking, onClick: run },
        }}
        main={
          <div className="flex flex-col gap-3">
            <div className="grid gap-4 md:grid-cols-2">
              <figure className="flex flex-col gap-2">
                <figcaption className="text-label-md font-semibold text-on-surface-variant">{t("GIF")}</figcaption>
                <div className="flex min-h-[200px] items-center justify-center rounded-xl border border-surface-variant bg-surface-container p-3">
                  {/* eslint-disable-next-line @next/next/no-img-element -- object URL of the user's own GIF */}
                  <img src={origUrl} alt={t("GIF")} className="max-h-[42vh] max-w-full rounded shadow-sm" />
                </div>
                <p className="text-label-sm font-label-sm text-on-surface-variant tabular-nums">
                  {/* i18n-raw: dimensions joined to already-translated parts */}
                  {`${src.width} × ${src.height} px · ${t("{n} frames", { n })} · ${t("{s} s", { s: fmt.format(seconds) })} · ${formatBytes(file.size)}`}
                </p>
              </figure>
              {result ? (
                <figure className="flex flex-col gap-2">
                  <figcaption className="text-label-md font-semibold text-secondary">{t("MP4")}</figcaption>
                  <video src={result.url} controls autoPlay loop muted playsInline className="max-h-[42vh] w-full rounded-xl bg-black" />
                  <p className="text-label-sm font-label-sm text-on-surface-variant tabular-nums">
                    {`${formatBytes(result.blob.size)}${result.blob.size < file.size ? ` · ${t("{p}% smaller", { p: Math.round((1 - result.blob.size / file.size) * 100) })}` : ""}`}
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
                    <span>{t("Your MP4 will appear here.")}</span>
                  )}
                </div>
              )}
            </div>
            <div className="flex justify-end">
              <button type="button" onClick={reset} className="inline-flex items-center gap-1.5 text-label-md font-medium text-on-surface-variant hover:text-error">
                <Icon name="close" className="text-[18px]" /> {t("Change image")}
              </button>
            </div>
          </div>
        }
        rail={
          <SettingsRail
            title={t("MP4 settings")}
            icon="gif_box"
            accent={ACCENT}
            footer={
              <>
                <RailNote>{t("Encoded by your browser as H.264 — plays everywhere.")}</RailNote>
                <RailAction onClick={run} busy={isWorking} busyLabel={workingLabel} icon="gif_box">{t("Convert to MP4")}</RailAction>
                {result && (
                  <button type="button" onClick={download} className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-secondary px-4 py-2.5 text-label-lg font-semibold text-secondary hover:bg-secondary/10">
                    <Icon name="download" className="text-[18px]" /> {t("Download MP4")}
                  </button>
                )}
              </>
            }
          >
            <div className="flex flex-col gap-1.5">
              <span className={label}>{t("Play the animation")}</span>
              <div className="flex flex-wrap gap-1.5">
                {REPEATS.map((r) => <button key={r} type="button" onClick={() => setRepeat(r)} className={chip(repeat === r)}>{t("{n}×", { n: r })}</button>)}
              </div>
              <p className="text-label-sm font-label-sm text-on-surface-variant/70">
                {t("Video doesn't loop by itself on most sites. Repeat a short GIF so the MP4 lasts a few seconds — {s} s now.", { s: fmt.format(seconds * repeat) })}
              </p>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className={label}>{t("Background for transparent areas")}</span>
              <input type="color" value={background} onChange={(e) => setBackground(e.target.value)} aria-label={t("Background for transparent areas")} className="h-10 w-full cursor-pointer rounded-lg border border-surface-variant bg-surface-container-lowest" />
            </div>
            <p className="text-label-sm font-label-sm text-on-surface-variant/80">{t("Your GIF is converted in your browser and never uploaded.")}</p>
          </SettingsRail>
        }
      />
    </>
  );
}

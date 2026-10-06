"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { CropCanvas } from "@/components/image/CropCanvas";
import { ToolWorkspace, filesHeader } from "@/components/tool/ToolWorkspace";
import { SettingsRail, RailAction, RailNote } from "@/components/tool/SettingsRail";
import { baseName, downloadBlob } from "@/lib/image/raster";
import { applyAspect, centeredCrop, clampCrop, NO_TRANSFORM, type CropSel } from "@/lib/image/crop";
import { openGif, type FrameSource } from "@/lib/gif/frames";
import { reencodeAsGif, type PlannedFrame } from "@/lib/gif/reencode";
import { fixedPlan, isRetimeOnly, MIN_DELAY, setGifDelays, speedPlan } from "@/lib/gif/retime";
import { useHandoff } from "@/lib/tool-handoff";
import { useFormatBytes, useLocale, useT } from "@/i18n/I18nScope";
import { translateError } from "@/i18n/errors";

/**
 * crop — gif-cropper; rotate — rotate-gif; reverse — reverse-gif;
 * speed — gif-speed-changer; cut — gif-cutter.
 *
 * Every mode re-encodes through lib/gif/reencode.ts, which keeps the GIF's own
 * colours whenever they fit in one palette — so cropping, turning, reversing
 * or cutting a typical GIF changes no pixel. A speed change that only alters
 * delays skips encoding altogether and rewrites them in place.
 */
export type GifEditMode = "crop" | "rotate" | "reverse" | "speed" | "cut";

const ACCENT = "#C56A9A";

const ASPECTS: { label: string; value: number | null }[] = [
  { label: "Free", value: null },
  { label: "1:1", value: 1 },
  { label: "4:3", value: 4 / 3 },
  { label: "3:2", value: 3 / 2 },
  { label: "16:9", value: 16 / 9 },
  { label: "9:16", value: 9 / 16 },
  { label: "4:5", value: 4 / 5 },
];
const SPEEDS = [0.25, 0.5, 0.75, 1.5, 2, 3];
const ICON: Record<GifEditMode, string> = { crop: "crop", rotate: "rotate_right", reverse: "history", speed: "speed", cut: "burst_mode" };
const SUFFIX: Record<GifEditMode, string> = { crop: "_cropped", rotate: "_rotated", reverse: "_reversed", speed: "_speed", cut: "_cut" };

const toInt = (s: string) => { const n = parseInt(s, 10); return Number.isFinite(n) ? n : 0; };
const toNum = (s: string) => { const n = parseFloat(s.replace(",", ".")); return Number.isFinite(n) ? n : 0; };

export function GifEditTool({ mode }: { mode: GifEditMode }) {
  const t = useT();
  const locale = useLocale();
  const formatBytes = useFormatBytes();

  const [file, setFile] = useState<File | null>(null);
  const [src, setSrc] = useState<FrameSource | null>(null);
  const [origUrl, setOrigUrl] = useState<string | null>(null);
  const [isWorking, setIsWorking] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<{ blob: Blob; url: string; w: number; h: number; frames: number; ms: number } | null>(null);

  // crop
  const [sel, setSel] = useState<CropSel>({ x: 0.1, y: 0.1, w: 0.8, h: 0.8 });
  const [aspect, setAspect] = useState<number | null>(null);
  const [shown, setShown] = useState(0);
  const [bmp, setBmp] = useState<ImageBitmap | null>(null);
  // rotate
  const [turns, setTurns] = useState<0 | 1 | 2 | 3>(1);
  const [flipX, setFlipX] = useState(false);
  const [flipY, setFlipY] = useState(false);
  // reverse
  const [boomerang, setBoomerang] = useState(false);
  // speed
  const [by, setBy] = useState<"speed" | "delay">("speed");
  const [speedStr, setSpeedStr] = useState("2");
  const [delayStr, setDelayStr] = useState("100");
  // cut
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [removePart, setRemovePart] = useState(false);
  const startRef = useRef<HTMLCanvasElement>(null);
  const endRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => () => { if (origUrl) URL.revokeObjectURL(origUrl); }, [origUrl]);
  useEffect(() => () => { if (result) URL.revokeObjectURL(result.url); }, [result]);
  useEffect(() => () => { bmp?.close(); }, [bmp]);

  const onFiles = useCallback(async (incoming: FileList | File[]) => {
    const f = Array.from(incoming).find((x) => /gif$/i.test(x.type) || /\.gif$/i.test(x.name));
    if (!f) { toast.error(t("Please select a GIF.")); return; }
    try {
      const s = await openGif(f);
      setFile(f);
      setSrc(s);
      setOrigUrl(URL.createObjectURL(f));
      setResult(null);
      setSel(centeredCrop(null, s.width, s.height, 0.8));
      setAspect(null);
      setShown(0);
      setStart(0);
      setEnd(s.delays.length - 1);
      const avg = s.delays.reduce((a, b) => a + b, 0) / s.delays.length;
      setDelayStr(String(Math.max(MIN_DELAY, Math.round(avg / 10) * 10)));
    } catch (err) {
      toast.error(translateError(err, t, "Could not read this image."));
    }
  }, [t]);

  useHandoff(onFiles);

  const reset = () => { setFile(null); setSrc(null); setOrigUrl(null); setResult(null); setBmp(null); };

  const n = src?.delays.length ?? 0;
  const W = src?.width ?? 0;
  const H = src?.height ?? 0;

  /** The crop in source pixels. */
  const rect = useMemo(() => {
    if (!W || !H) return { x: 0, y: 0, w: 1, h: 1 };
    const x = Math.min(W - 1, Math.round(sel.x * W));
    const y = Math.min(H - 1, Math.round(sel.y * H));
    return { x, y, w: Math.max(1, Math.min(W - x, Math.round(sel.w * W))), h: Math.max(1, Math.min(H - y, Math.round(sel.h * H))) };
  }, [sel, W, H]);

  const out = useMemo(() => {
    if (mode === "crop") return { w: rect.w, h: rect.h };
    if (mode === "rotate" && turns % 2) return { w: H, h: W };
    return { w: W, h: H };
  }, [mode, rect, turns, W, H]);

  const speed = Math.max(0.1, Math.min(10, toNum(speedStr)));
  const delayMs = Math.max(MIN_DELAY, Math.min(10000, toInt(delayStr)));

  /** Output frames in order, or null when the settings leave nothing to write. */
  const plan = useMemo((): PlannedFrame[] | null => {
    if (!src) return null;
    const d = src.delays;
    const all = d.map((delay, index) => ({ index, delay }));
    if (mode === "reverse") {
      const back = [...all].reverse();
      return boomerang ? [...all, ...back.slice(1, -1)] : back;
    }
    if (mode === "speed") return by === "speed" ? speedPlan(d, speed) : fixedPlan(d.length, delayMs);
    if (mode === "cut") {
      const lo = Math.min(start, end);
      const hi = Math.max(start, end);
      const kept = all.filter((f) => (f.index >= lo && f.index <= hi) !== removePart);
      return kept.length ? kept : null;
    }
    return all;
  }, [src, mode, boomerang, by, speed, delayMs, start, end, removePart]);

  const planMs = plan ? plan.reduce((a, p) => a + p.delay, 0) : 0;
  const srcMs = src ? src.delays.reduce((a, b) => a + b, 0) : 0;
  const lossless = mode === "speed" && !!plan && isRetimeOnly(plan, n);
  const merged = mode === "speed" && plan ? n - plan.length : 0;

  // A result describes the settings it was made with; drop it when they change.
  const settingsKey = JSON.stringify([rect, turns, flipX, flipY, boomerang, by, speed, delayMs, start, end, removePart]);
  useEffect(() => { setResult(null); }, [settingsKey]);

  // crop: the frame under the crop box
  useEffect(() => {
    if (mode !== "crop" || !src) return;
    let alive = true;
    src.frame(Math.min(shown, src.delays.length - 1))
      .then((c) => createImageBitmap(c))
      .then((b) => { if (alive) setBmp(b); else b.close(); })
      .catch(() => {});
    return () => { alive = false; };
  }, [mode, src, shown]);

  // cut: thumbnails of the first and last frame of the selection
  useEffect(() => {
    if (mode !== "cut" || !src) return;
    let alive = true;
    const draw = async (i: number, el: HTMLCanvasElement | null) => {
      const c = await src.frame(i);
      if (!alive || !el) return;
      const k = Math.min(1, 160 / src.width, 120 / src.height);
      el.width = Math.max(1, Math.round(src.width * k));
      el.height = Math.max(1, Math.round(src.height * k));
      const g = el.getContext("2d");
      if (!g) return;
      g.clearRect(0, 0, el.width, el.height);
      g.drawImage(c, 0, 0, el.width, el.height);
    };
    const timer = setTimeout(() => {
      draw(Math.min(start, end), startRef.current).then(() => draw(Math.max(start, end), endRef.current)).catch(() => {});
    }, 60);
    return () => { alive = false; clearTimeout(timer); };
  }, [mode, src, start, end]);

  const pickAspect = (a: number | null) => {
    setAspect(a);
    if (a !== null && W) setSel((s) => applyAspect(s, a, W, H, "center"));
  };

  /** Numeric crop edits go through applyAspect, so the lock holds. */
  const setField = (key: "x" | "y" | "w" | "h", px: number) => {
    if (!W) return;
    const v = Math.max(0, px) / (key === "x" || key === "w" ? W : H);
    const next = clampCrop({ ...sel, [key]: v });
    setSel(aspect == null || key === "x" || key === "y" ? next : applyAspect(next, aspect, W, H, "center"));
  };

  const selectWhole = () => {
    const whole = clampCrop({ x: 0, y: 0, w: 1, h: 1 });
    setSel(aspect == null ? whole : applyAspect(whole, aspect, W, H, "center"));
  };

  const run = async () => {
    if (!src || !file || !plan) return;
    setIsWorking(true);
    setProgress(0);
    setResult(null);
    try {
      let blob: Blob;
      if (lossless) {
        const bytes = setGifDelays(new Uint8Array(await file.arrayBuffer()), plan.map((p) => p.delay));
        blob = new Blob([bytes as BlobPart], { type: "image/gif" });
      } else {
        const r = await reencodeAsGif(src, {
          width: out.w,
          height: out.h,
          plan,
          crop: mode === "crop" ? rect : undefined,
          turns: mode === "rotate" ? turns : 0,
          flipX: mode === "rotate" && flipX,
          flipY: mode === "rotate" && flipY,
          onProgress: setProgress,
        });
        blob = new Blob([r.bytes as BlobPart], { type: "image/gif" });
      }
      setResult({ blob, url: URL.createObjectURL(blob), w: out.w, h: out.h, frames: plan.length, ms: planMs });
    } catch (err) {
      toast.error(translateError(err, t, "Processing failed."));
    } finally {
      setIsWorking(false);
    }
  };

  const download = () => {
    if (!result || !file) return;
    downloadBlob(result.blob, `${baseName(file.name)}${mode === "reverse" && boomerang ? "_boomerang" : SUFFIX[mode]}.gif`);
  };

  if (!file || !src || !origUrl) {
    return (
      <section>
        <Dropzone onFiles={onFiles} accept="image/gif,.gif" accent={ACCENT} icon="gif_box" multiple={false} camera={false} buttonLabel={t("Select a GIF")} hint={t("or drop a GIF here")} />
      </section>
    );
  }

  const nf = new Intl.NumberFormat(locale, { maximumFractionDigits: 2 });
  const secs = (ms: number) => t("{s} s", { s: nf.format(ms / 1000) });
  const still = n === 1 && (mode === "reverse" || mode === "speed" || mode === "cut");
  const ready = !!plan && !still && !(mode === "rotate" && !turns && !flipX && !flipY);
  const actionLabel = mode === "crop" ? t("Crop GIF") : mode === "rotate" ? t("Rotate GIF") : mode === "reverse" ? t("Reverse GIF") : mode === "speed" ? t("Change speed") : t("Cut GIF");
  const working = t("Working… {p}%", { p: Math.round(progress * 100) });

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
        {/* eslint-disable-next-line @next/next/no-img-element -- object URL of the user's own animation */}
        <img src={url} alt={title} style={checker} className="max-h-[42vh] max-w-full rounded shadow-sm" />
      </div>
      <p className="text-label-sm font-label-sm text-on-surface-variant tabular-nums">{meta}</p>
    </figure>
  );

  const origMeta = `${W} × ${H} px · ${t("{n} frames", { n })} · ${secs(srcMs)} · ${formatBytes(file.size)}`;
  const resultPanel = result
    ? panel(t("Result"), result.url, `${result.w} × ${result.h} px · ${t("{n} frames", { n: result.frames })} · ${secs(result.ms)} · ${formatBytes(result.blob.size)}`, true)
    : null;

  // rotate: the turn previewed live on the playing original, in a square box
  // so that a quarter turn never overflows it.
  const rotatePreview = (
    <figure className="flex flex-col gap-2">
      <figcaption className="text-label-md font-semibold text-on-surface-variant">{t("Preview")}</figcaption>
      <div className="flex items-center justify-center rounded-xl border border-surface-variant bg-surface-container p-3">
        <div className="relative aspect-square w-full max-w-[42vh]">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element -- object URL of the user's own animation */}
            <img
              src={origUrl}
              alt={t("Preview")}
              style={{ ...checker, transform: `scale(${flipX ? -1 : 1}, ${flipY ? -1 : 1}) rotate(${turns * 90}deg)` }}
              className="max-h-full max-w-full rounded shadow-sm transition-transform duration-200"
            />
          </div>
        </div>
      </div>
      <p className="text-label-sm font-label-sm text-on-surface-variant tabular-nums">{t("Output: {w} × {h} px", { w: out.w, h: out.h })}</p>
    </figure>
  );

  const placeholder = (
    <div className="flex min-h-[200px] flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-outline-variant/60 p-6 text-center text-body-md text-on-surface-variant">
      {isWorking ? (
        <>
          <Icon name="progress_activity" className="animate-spin text-[24px] text-secondary" />
          <span className="tabular-nums">{working}</span>
        </>
      ) : (
        <span>{t("Your GIF will appear here.")}</span>
      )}
    </div>
  );

  const cropPane = (
    <div className="flex flex-col gap-2">
      <div className="bg-surface-container rounded-xl border border-surface-variant p-4 flex items-center justify-center overflow-auto" style={{ minHeight: 300 }}>
        <CropCanvas
          bitmap={bmp}
          sel={sel}
          onChange={setSel}
          shape="rect"
          radius={0}
          aspect={aspect}
          transform={NO_TRANSFORM}
          zoom={1}
          accent={ACCENT}
          disabled={isWorking}
        />
      </div>
      <p className="text-center text-label-sm font-label-sm text-on-surface-variant tabular-nums">
        {t("Drag the box to choose the area to keep · output {w} × {h} px", { w: rect.w, h: rect.h })}
      </p>
      {n > 1 && (
        <label className="flex items-center gap-3">
          <span className={`${label} shrink-0 tabular-nums`}>{t("Frame {i} of {n}", { i: shown + 1, n })}</span>
          <input type="range" min={0} max={n - 1} value={shown} onChange={(e) => setShown(Number(e.target.value))} disabled={isWorking} className="w-full accent-secondary" aria-label={t("Frame shown under the crop box")} />
        </label>
      )}
    </div>
  );

  const changeImage = (
    <div className="flex justify-end">
      <button type="button" onClick={reset} className="inline-flex items-center gap-1.5 text-label-md font-medium text-on-surface-variant hover:text-error">
        <Icon name="close" className="text-[18px]" /> {t("Change image")}
      </button>
    </div>
  );

  const main = mode === "crop" ? (
    <div className="flex flex-col gap-4">
      {cropPane}
      {(result || isWorking) && <div className="grid gap-4 md:grid-cols-2">{panel(t("Original"), origUrl, origMeta)}{resultPanel ?? placeholder}</div>}
      {changeImage}
    </div>
  ) : (
    <div className="flex flex-col gap-3">
      <div className="grid gap-4 md:grid-cols-2">
        {panel(t("Original"), origUrl, origMeta)}
        {resultPanel ?? (mode === "rotate" && !isWorking ? rotatePreview : placeholder)}
      </div>
      {changeImage}
      {still && <p className="text-label-sm font-label-sm text-on-surface-variant/80">{t("This GIF has only one frame, so it isn't animated.")}</p>}
    </div>
  );

  const frameLabel = (i: number) => {
    const at = src.delays.slice(0, i).reduce((a, b) => a + b, 0);
    return t("Frame {i} · {s} s", { i: i + 1, s: nf.format(at / 1000) });
  };

  const controls = (
    <>
      {mode === "crop" && (
        <>
          <div className="flex flex-col gap-1.5">
            <span className={label}>{t("Aspect ratio")}</span>
            <div className="flex flex-wrap gap-1.5">
              {ASPECTS.map((a) => <button key={a.label} type="button" onClick={() => pickAspect(a.value)} className={chip(aspect === a.value)}>{a.value === null ? t("Free") : a.label}</button>)}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {([["x", t("Left (px)"), rect.x], ["y", t("Top (px)"), rect.y], ["w", t("Width (px)"), rect.w], ["h", t("Height (px)"), rect.h]] as const).map(([k, l, v]) => (
              <div key={k} className="flex flex-col gap-1.5">
                <label htmlFor={`gif-crop-${k}`} className={label}>{l}</label>
                <input id={`gif-crop-${k}`} type="number" min={0} value={v} onChange={(e) => setField(k, toInt(e.target.value))} className={`${fieldCls} tabular-nums`} />
              </div>
            ))}
          </div>
          <button type="button" onClick={selectWhole} className="inline-flex items-center gap-1.5 self-start text-label-md font-semibold text-secondary hover:underline">
            <Icon name="select_all" className="text-[18px]" /> {t("Select the whole frame")}
          </button>
          <p className={hint}>{t("Every frame is cropped to the same area and keeps its timing.")}</p>
        </>
      )}
      {mode === "rotate" && (
        <>
          <div className="flex flex-col gap-1.5">
            <span className={label}>{t("Rotate")}</span>
            <div className="grid grid-cols-3 gap-1.5">
              {([[3, "rotate_left", t("90° left")], [1, "rotate_right", t("90° right")], [2, "sync_alt", "180°"]] as const).map(([v, icon, l]) => (
                <button key={v} type="button" onClick={() => setTurns((cur) => (cur === v ? 0 : v))} aria-pressed={turns === v}
                  className={`flex flex-col items-center gap-1 rounded-lg border px-2 py-2 text-label-sm font-semibold ${turns === v ? "border-secondary bg-secondary/10 text-secondary" : "border-outline-variant/60 text-on-surface-variant hover:border-secondary"}`}>
                  <Icon name={icon} className="text-[20px]" />
                  {l}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className={label}>{t("Flip")}</span>
            <div className="grid grid-cols-2 gap-1.5">
              <button type="button" onClick={() => setFlipX((v) => !v)} aria-pressed={flipX}
                className={`inline-flex items-center justify-center gap-1.5 rounded-lg border px-2 py-2 text-label-sm font-semibold ${flipX ? "border-secondary bg-secondary/10 text-secondary" : "border-outline-variant/60 text-on-surface-variant hover:border-secondary"}`}>
                <Icon name="flip" className="text-[18px]" /> {t("Horizontal")}
              </button>
              <button type="button" onClick={() => setFlipY((v) => !v)} aria-pressed={flipY}
                className={`inline-flex items-center justify-center gap-1.5 rounded-lg border px-2 py-2 text-label-sm font-semibold ${flipY ? "border-secondary bg-secondary/10 text-secondary" : "border-outline-variant/60 text-on-surface-variant hover:border-secondary"}`}>
                <Icon name="flip" className="rotate-90 text-[18px]" /> {t("Vertical")}
              </button>
            </div>
          </div>
          <p className={hint}>{t("Every frame is turned the same way and keeps its timing.")}</p>
        </>
      )}
      {mode === "reverse" && (
        <div className="flex flex-col gap-1.5">
          <div role="radiogroup" aria-label={t("Direction")} className="grid grid-cols-2 gap-1 rounded-lg bg-surface-container p-1">
            <button type="button" role="radio" aria-checked={!boomerang} onClick={() => setBoomerang(false)} className={seg(!boomerang)}>{t("Reverse")}</button>
            <button type="button" role="radio" aria-checked={boomerang} onClick={() => setBoomerang(true)} className={seg(boomerang)}>{t("Boomerang")}</button>
          </div>
          <p className={hint}>
            {boomerang
              ? t("Plays forwards, then backwards, as one seamless loop.")
              : t("Plays the frames in reverse order, each with its own timing.")}
          </p>
        </div>
      )}
      {mode === "speed" && (
        <>
          <div role="radiogroup" aria-label={t("Change")} className="grid grid-cols-2 gap-1 rounded-lg bg-surface-container p-1">
            <button type="button" role="radio" aria-checked={by === "speed"} onClick={() => setBy("speed")} className={seg(by === "speed")}>{t("By speed")}</button>
            <button type="button" role="radio" aria-checked={by === "delay"} onClick={() => setBy("delay")} className={seg(by === "delay")}>{t("Frame delay")}</button>
          </div>
          {by === "speed" ? (
            <div className="flex flex-col gap-1.5">
              <div className="flex flex-wrap items-center gap-1.5">
                {SPEEDS.map((s) => <button key={s} type="button" onClick={() => setSpeedStr(String(s))} className={chip(speed === s)}>{`${nf.format(s)}×`}</button>)}
                <input type="number" min={0.1} max={10} step={0.05} value={speedStr} onChange={(e) => setSpeedStr(e.target.value)} aria-label={t("Speed")} className={`${fieldCls.replace("w-full", "w-20")} tabular-nums`} />
                <span className="text-body-md text-on-surface-variant">×</span>
              </div>
              <p className={hint}>{t("Above 1× is faster, below 1× is slower.")}</p>
            </div>
          ) : (
            <div className="flex flex-col gap-1.5">
              <label htmlFor="gif-delay" className={label}>{t("Every frame (ms)")}</label>
              <input id="gif-delay" type="number" min={MIN_DELAY} max={10000} step={10} value={delayStr} onChange={(e) => setDelayStr(e.target.value)} className={`${fieldCls} tabular-nums`} />
              <p className={hint}>{t("{fps} frames per second", { fps: nf.format(1000 / delayMs) })}</p>
            </div>
          )}
          <p className="text-body-md text-on-surface tabular-nums">{t("Length: {a} → {b}", { a: secs(srcMs), b: secs(planMs) })}</p>
          {lossless ? (
            <p className={hint}>{t("Only the timing changes — every frame and pixel stays as it was.")}</p>
          ) : merged > 0 ? (
            <p className={hint}>{t("To play this fast, {n} frames are merged: browsers slow down frames shorter than 0.02 s.", { n: merged })}</p>
          ) : null}
        </>
      )}
      {mode === "cut" && (
        <>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="gif-start" className={label}>{t("Start")} · <span className="tabular-nums">{frameLabel(start)}</span></label>
            <input id="gif-start" type="range" min={0} max={Math.max(0, n - 1)} value={start} onChange={(e) => { const v = Number(e.target.value); setStart(v); if (v > end) setEnd(v); }} disabled={isWorking || n < 2} className="w-full accent-secondary" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="gif-end" className={label}>{t("End")} · <span className="tabular-nums">{frameLabel(end)}</span></label>
            <input id="gif-end" type="range" min={0} max={Math.max(0, n - 1)} value={end} onChange={(e) => { const v = Number(e.target.value); setEnd(v); if (v < start) setStart(v); }} disabled={isWorking || n < 2} className="w-full accent-secondary" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[startRef, endRef].map((r, k) => (
              <figure key={k} className="flex flex-col items-center gap-1">
                <canvas ref={r} style={checker} className="max-w-full rounded border border-surface-variant" />
                <figcaption className="text-label-sm font-label-sm text-on-surface-variant">{k === 0 ? t("First frame") : t("Last frame")}</figcaption>
              </figure>
            ))}
          </div>
          <div role="radiogroup" aria-label={t("Selected part")} className="grid grid-cols-2 gap-1 rounded-lg bg-surface-container p-1">
            <button type="button" role="radio" aria-checked={!removePart} onClick={() => setRemovePart(false)} className={seg(!removePart)}>{t("Keep it")}</button>
            <button type="button" role="radio" aria-checked={removePart} onClick={() => setRemovePart(true)} className={seg(removePart)}>{t("Remove it")}</button>
          </div>
          <p className="text-body-md text-on-surface tabular-nums">
            {plan ? t("Result: {n} frames · {s}", { n: plan.length, s: secs(planMs) }) : t("Keep at least one frame.")}
          </p>
        </>
      )}
      <p className="text-label-sm font-label-sm text-on-surface-variant/80">{t("Your file is processed in your browser and never uploaded.")}</p>
    </>
  );

  return (
    <>
      <TopLoadingBar active={isWorking} />
      <ToolWorkspace
        mobile={{
          ...filesHeader([file]),
          onBack: reset,
          backLabel: t("Clear image"),
          ...(mode === "crop" ? { body: <div className="flex flex-col gap-4">{cropPane}{resultPanel}</div> } : {}),
          settingsTitle: t("GIF settings"),
          cta: result
            ? { icon: "download", label: t("Download GIF"), busyLabel: t("Saving…"), busy: false, onClick: download }
            : { icon: ICON[mode], label: actionLabel, busyLabel: working, busy: isWorking, onClick: run, disabled: !ready },
        }}
        main={main}
        rail={
          <SettingsRail
            title={t("GIF settings")}
            icon={ICON[mode]}
            accent={ACCENT}
            footer={
              <>
                <RailNote>{t("Output: {w} × {h} px", { w: out.w, h: out.h })}</RailNote>
                <RailAction onClick={run} busy={isWorking} busyLabel={working} icon={ICON[mode]} disabled={!ready}>
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
            {controls}
          </SettingsRail>
        }
      />
    </>
  );
}

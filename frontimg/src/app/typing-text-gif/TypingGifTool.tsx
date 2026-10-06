"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { ToolWorkspace } from "@/components/tool/ToolWorkspace";
import { SettingsRail, RailAction, RailNote } from "@/components/tool/SettingsRail";
import { downloadBlob } from "@/lib/image/raster";
import { encodeGif } from "@/lib/image/gif-encode";
import { ensureFont, fontStack, graphemes, wrapLines, type FontKey } from "@/lib/gif/text";
import { useFormatBytes, useLocale, useT } from "@/i18n/I18nScope";
import { translateError } from "@/i18n/errors";

/**
 * Typing Text GIF: text that appears letter by letter, as if typed, with an
 * optional blinking cursor. Nothing to upload — the GIF is drawn from the text.
 */
const ACCENT = "#C56A9A";
const WIDTHS = [320, 480, 640, 800];
const SPEEDS = [6, 10, 15, 25];
const HOLDS = [1, 2, 3, 5];

interface Settings {
  text: string;
  font: FontKey;
  px: number;
  color: string;
  bg: string;
  transparent: boolean;
  width: number;
  center: boolean;
  cps: number;
  cursor: boolean;
  hold: number;
  loop: boolean;
}

interface Layout { W: number; H: number; px: number; pad: number; lh: number; font: string; lines: string[][]; full: number[] }
interface Frame { shown: number; cursor: boolean; delay: number }

/** Wrap the whole text once, so lines never jump as letters appear. */
function layout(ctx: CanvasRenderingContext2D, s: Settings): Layout {
  const px = s.px;
  const font = `600 ${px}px ${fontStack(s.font)}`;
  ctx.font = font;
  const pad = Math.round(px * 0.7);
  const lines = wrapLines(ctx, s.text, s.width - pad * 2);
  const lh = Math.round(px * 1.35);
  const H = Math.max(px * 2, lines.length * lh + pad * 2);
  return {
    W: s.width, H: H + (H % 2), px, pad, lh, font,
    lines: lines.map(graphemes),
    full: lines.map((l) => ctx.measureText(l).width),
  };
}

/**
 * One frame per typed step. Below 20 ms per letter browsers would slow the
 * GIF down, so fast speeds type several letters per frame. Sentence ends and
 * line breaks get a short beat, like a person typing.
 */
function plan(L: Layout, s: Settings): Frame[] {
  const total = L.lines.reduce((a, l) => a + l.length, 0);
  const per = 1000 / s.cps;
  const step = Math.max(1, Math.ceil(20 / per));
  const chars = L.lines.flat();
  const lineEnds = new Set<number>();
  L.lines.reduce((acc, l) => { lineEnds.add(acc + l.length); return acc + l.length; }, 0);
  const frames: Frame[] = [{ shown: 0, cursor: true, delay: 400 }];
  for (let shown = step; shown < total + step; shown += step) {
    const k = Math.min(total, shown);
    const last = chars[k - 1] ?? "";
    const beat = /[.!?।]$/.test(last) ? 350 : lineEnds.has(k) && k < total ? 200 : /[,;:]$/.test(last) ? 150 : 0;
    frames.push({ shown: k, cursor: true, delay: Math.max(20, Math.round((per * step + beat) / 10) * 10) });
  }
  // Hold the finished text, the cursor blinking every half second.
  const hold = s.hold * 1000;
  if (s.cursor) {
    for (let t = 0; t < hold; t += 500) frames.push({ shown: total, cursor: (t / 500) % 2 === 1, delay: Math.min(500, hold - t) });
  } else {
    frames[frames.length - 1].delay += hold;
  }
  return frames;
}

function paint(ctx: CanvasRenderingContext2D, L: Layout, s: Settings, f: Frame) {
  ctx.clearRect(0, 0, L.W, L.H);
  if (!s.transparent) { ctx.fillStyle = s.bg; ctx.fillRect(0, 0, L.W, L.H); }
  ctx.font = L.font;
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillStyle = s.color;
  let left = f.shown;
  let cx = L.pad;
  let cy = L.pad;
  for (let i = 0; i < L.lines.length; i++) {
    const g = L.lines[i];
    const x = s.center ? (L.W - L.full[i]) / 2 : L.pad;
    const y = L.pad + i * L.lh + (L.lh - L.px) / 2;
    const part = g.slice(0, Math.max(0, Math.min(g.length, left))).join("");
    if (part) ctx.fillText(part, x, y);
    if (left >= 0 && (left <= g.length || i === L.lines.length - 1)) {
      cx = x + ctx.measureText(part).width;
      cy = y;
    }
    left -= g.length;
    if (left < 0) break;
  }
  const showCursor = s.cursor && (f.cursor || f.shown < L.lines.reduce((a, l) => a + l.length, 0));
  if (showCursor) ctx.fillRect(Math.round(cx + L.px * 0.06), Math.round(cy - L.px * 0.05), Math.max(2, Math.round(L.px * 0.09)), Math.round(L.px * 1.1));
}

export function TypingGifTool() {
  const t = useT();
  const locale = useLocale();
  const formatBytes = useFormatBytes();
  const previewRef = useRef<HTMLCanvasElement>(null);
  const measure = useMemo(() => (typeof document === "undefined" ? null : document.createElement("canvas").getContext("2d")), []);

  // The default text is drawn INTO the GIF, so it follows the page language.
  const [s, setS] = useState<Settings>(() => ({
    text: t("Hello! This GIF types your text, letter by letter."),
    font: "mono", px: 32, color: "#111827", bg: "#ffffff", transparent: false, width: 480, center: false,
    cps: 10, cursor: true, hold: 2, loop: true,
  }));
  const set = <K extends keyof Settings>(k: K, v: Settings[K]) => setS((p) => ({ ...p, [k]: v }));
  const [fontTick, setFontTick] = useState(0);
  // The workspace hides the page's own content while it is open (ToolWorkspace's
  // marker), so it opens only once the user starts — as an upload tool's does.
  const [active, setActive] = useState(false);
  const [isWorking, setIsWorking] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<{ blob: Blob; url: string } | null>(null);

  useEffect(() => () => { if (result) URL.revokeObjectURL(result.url); }, [result]);

  // Measure only once the font is there, then lay out again.
  useEffect(() => {
    let alive = true;
    void ensureFont(`600 ${s.px}px ${fontStack(s.font)}`, s.text).then(() => { if (alive) setFontTick((n) => n + 1); });
    return () => { alive = false; };
  }, [s.font, s.px, s.text]);

  const L = useMemo(() => (measure && s.text.trim() ? layout(measure, s) : null), [measure, s, fontTick]); // eslint-disable-line react-hooks/exhaustive-deps
  const frames = useMemo(() => (L ? plan(L, s) : []), [L, s]);
  const totalMs = frames.reduce((a, f) => a + f.delay, 0);

  const key = JSON.stringify(s);
  useEffect(() => { setResult(null); }, [key]);

  // Live preview, reading the newest layout and frames on every tick.
  const live = useRef({ L, frames, s });
  useEffect(() => { live.current = { L, frames, s }; }, [L, frames, s]);
  useEffect(() => {
    if (isWorking || !active) return;
    let alive = true;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let i = 0;
    const tick = () => {
      if (!alive) return;
      const { L: l, frames: fs, s: st } = live.current;
      const c = previewRef.current;
      if (!l || !fs.length || !c) { timer = setTimeout(tick, 200); return; }
      if (i >= fs.length) i = 0;
      if (c.width !== l.W || c.height !== l.H) { c.width = l.W; c.height = l.H; }
      const g = c.getContext("2d");
      if (g) paint(g, l, st, fs[i]);
      const d = fs[i].delay + (i === fs.length - 1 && !st.loop ? 1500 : 0);
      i += 1;
      timer = setTimeout(tick, d);
    };
    tick();
    return () => { alive = false; if (timer) clearTimeout(timer); };
  }, [isWorking, active]);

  const run = async () => {
    if (!L || !frames.length) return;
    setIsWorking(true);
    setProgress(0);
    setResult(null);
    try {
      const st = { ...s };
      const canvas = document.createElement("canvas");
      canvas.width = L.W;
      canvas.height = L.H;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) throw new Error("Canvas is not supported in this browser.");
      let reads = 0;
      const bytes = await encodeGif(
        {
          count: frames.length,
          delay: (i) => frames[i].delay,
          pixels: (i) => {
            paint(ctx, L, st, frames[i]);
            setProgress(Math.min(1, ++reads / (frames.length * 2)));
            return ctx.getImageData(0, 0, L.W, L.H).data;
          },
        },
        { width: L.W, height: L.H, colors: 256, repeat: st.loop ? 0 : -1, transparent: st.transparent, optimize: !st.transparent, exact: true },
      );
      const blob = new Blob([bytes as BlobPart], { type: "image/gif" });
      setResult({ blob, url: URL.createObjectURL(blob) });
    } catch (err) {
      toast.error(translateError(err, t, "Processing failed."));
    } finally {
      setIsWorking(false);
    }
  };

  const download = () => { if (result) downloadBlob(result.blob, "typing.gif"); };

  const fieldIdle = "w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";
  if (!active) {
    return (
      <section className="flex flex-col gap-4 rounded-2xl border-2 border-dashed border-outline-variant/60 bg-surface-container-lowest p-5 md:p-8">
        <label htmlFor="typing-start" className="text-body-lg font-semibold text-primary">{t("What should the GIF type?")}</label>
        <textarea id="typing-start" rows={3} maxLength={500} value={s.text} onChange={(e) => set("text", e.target.value)} className={`${fieldIdle} resize-y`} />
        <div className="flex flex-wrap items-center gap-3">
          <button type="button" onClick={() => setActive(true)} disabled={!s.text.trim()} className="inline-flex items-center gap-2 rounded-xl bg-secondary px-5 py-3 text-label-lg font-semibold text-on-secondary hover:opacity-90 disabled:opacity-40">
            <Icon name="terminal" className="text-[20px]" /> {t("Start")}
          </button>
          <span className="text-label-sm font-label-sm text-on-surface-variant">{t("Next you can change the speed, font, colours and cursor.")}</span>
        </div>
      </section>
    );
  }

  const nf = new Intl.NumberFormat(locale, { maximumFractionDigits: 1 });
  const working = t("Working… {p}%", { p: Math.round(progress * 100) });
  const checker = { backgroundColor: "#fff", backgroundImage: "linear-gradient(45deg,#cbd5e1 25%,transparent 25%),linear-gradient(-45deg,#cbd5e1 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#cbd5e1 75%),linear-gradient(-45deg,transparent 75%,#cbd5e1 75%)", backgroundSize: "16px 16px", backgroundPosition: "0 0,0 8px,8px -8px,-8px 0" };
  const chip = (on: boolean) =>
    `rounded-full border px-2.5 py-1 text-label-sm font-semibold tabular-nums transition-colors ${on ? "border-secondary bg-secondary/10 text-secondary" : "border-outline-variant/60 text-on-surface-variant hover:border-secondary hover:text-secondary"}`;
  const seg = (on: boolean) => `rounded-md px-2 py-1.5 text-label-md font-semibold ${on ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant"}`;
  const fieldCls = "w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";
  const label = "text-label-sm font-label-sm text-on-surface-variant";
  const meta = L ? `${L.W} × ${L.H} px · ${t("{n} frames", { n: frames.length })} · ${t("{s} s", { s: nf.format(totalMs / 1000) })}` : "";

  const main = (
    <div className="flex flex-col gap-3">
      <div className="grid gap-4 md:grid-cols-2">
        <figure className="flex flex-col gap-2">
          <figcaption className="text-label-md font-semibold text-on-surface-variant">{t("Preview")}</figcaption>
          <div className="flex min-h-[200px] items-center justify-center rounded-xl border border-surface-variant bg-surface-container p-3">
            {L ? <canvas ref={previewRef} style={checker} className="max-h-[42vh] max-w-full rounded shadow-sm" aria-label={t("Preview")} /> : <span className="text-body-md text-on-surface-variant">{t("Type some text to see the preview.")}</span>}
          </div>
          {/* i18n-raw: dimensions joined to already-translated parts */}
          <p className="text-label-sm font-label-sm text-on-surface-variant tabular-nums">{meta}</p>
        </figure>
        {result ? (
          <figure className="flex flex-col gap-2">
            <figcaption className="text-label-md font-semibold text-secondary">{t("Result")}</figcaption>
            <div className="flex min-h-[200px] items-center justify-center rounded-xl border border-surface-variant bg-surface-container p-3">
              {/* eslint-disable-next-line @next/next/no-img-element -- object URL of the GIF just made */}
              <img src={result.url} alt={t("Result")} style={checker} className="max-h-[42vh] max-w-full rounded shadow-sm" />
            </div>
            <p className="text-label-sm font-label-sm text-on-surface-variant tabular-nums">{formatBytes(result.blob.size)}</p>
          </figure>
        ) : (
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
        )}
      </div>
    </div>
  );

  const controls = (
    <>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="typing-text" className={label}>{t("Text")}</label>
        <textarea id="typing-text" rows={4} maxLength={500} value={s.text} onChange={(e) => set("text", e.target.value)} className={`${fieldCls} resize-y`} />
      </div>
      <div className="flex flex-col gap-1.5">
        <span className={label}>{t("Typing speed")}</span>
        <div className="flex flex-wrap gap-1.5">
          {SPEEDS.map((v) => <button key={v} type="button" onClick={() => set("cps", v)} className={chip(s.cps === v)}>{t("{n} letters/s", { n: v })}</button>)}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="typing-font" className={label}>{t("Font")}</label>
          <select id="typing-font" value={s.font} onChange={(e) => set("font", e.target.value as FontKey)} className={fieldCls}>
            <option value="mono">{t("Typewriter")}</option>
            <option value="sans">{t("Sans-serif")}</option>
            <option value="serif">{t("Serif")}</option>
            <option value="impact">{t("Impact (meme)")}</option>
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          {/* i18n-raw: a pixel count; "px" is the same in every locale */}
          <label htmlFor="typing-px" className={`${label} flex justify-between`}><span>{t("Size")}</span><span className="tabular-nums">{`${s.px} px`}</span></label>
          <input id="typing-px" type="range" min={14} max={96} value={s.px} onChange={(e) => set("px", Number(e.target.value))} className="mt-2 w-full accent-secondary" />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <span className={label}>{t("Width")}</span>
        <div className="flex flex-wrap gap-1.5">
          {/* i18n-raw: pixel widths */}
          {WIDTHS.map((w) => <button key={w} type="button" onClick={() => set("width", w)} className={chip(s.width === w)}>{`${w} px`}</button>)}
        </div>
      </div>
      <div role="radiogroup" aria-label={t("Alignment")} className="grid grid-cols-2 gap-1 rounded-lg bg-surface-container p-1">
        <button type="button" role="radio" aria-checked={!s.center} onClick={() => set("center", false)} className={seg(!s.center)}>{t("Left")}</button>
        <button type="button" role="radio" aria-checked={s.center} onClick={() => set("center", true)} className={seg(s.center)}>{t("Centre")}</button>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <label className="flex items-center gap-2.5">
          <input type="color" value={s.color} onChange={(e) => set("color", e.target.value)} className="h-9 w-12 cursor-pointer rounded border border-surface-variant bg-transparent" />
          <span className="text-body-md text-on-surface">{t("Text colour")}</span>
        </label>
        <label className={`flex items-center gap-2.5 ${s.transparent ? "opacity-40" : ""}`}>
          <input type="color" value={s.bg} disabled={s.transparent} onChange={(e) => set("bg", e.target.value)} className="h-9 w-12 cursor-pointer rounded border border-surface-variant bg-transparent" />
          <span className="text-body-md text-on-surface">{t("Background colour")}</span>
        </label>
      </div>
      <label className="flex items-center gap-2.5 cursor-pointer">
        <input type="checkbox" checked={s.transparent} onChange={(e) => set("transparent", e.target.checked)} className="w-4 h-4 accent-secondary" />
        <span className="text-body-md text-on-surface">{t("Transparent background")}</span>
      </label>
      {s.transparent && <p className="text-label-sm font-label-sm text-on-surface-variant/70">{t("GIF transparency has no soft edges, so text looks smoothest on a solid background.")}</p>}
      <label className="flex items-center gap-2.5 cursor-pointer">
        <input type="checkbox" checked={s.cursor} onChange={(e) => set("cursor", e.target.checked)} className="w-4 h-4 accent-secondary" />
        <span className="text-body-md text-on-surface">{t("Blinking cursor")}</span>
      </label>
      <div className="flex flex-col gap-1.5">
        <span className={label}>{t("Pause at the end")}</span>
        <div className="flex flex-wrap gap-1.5">
          {HOLDS.map((h) => <button key={h} type="button" onClick={() => set("hold", h)} className={chip(s.hold === h)}>{t("{s} s", { s: h })}</button>)}
        </div>
      </div>
      <label className="flex items-center gap-2.5 cursor-pointer">
        <input type="checkbox" checked={s.loop} onChange={(e) => set("loop", e.target.checked)} className="w-4 h-4 accent-secondary" />
        <span className="text-body-md text-on-surface">{t("Repeat forever")}</span>
      </label>
      <p className="text-label-sm font-label-sm text-on-surface-variant/80">{t("Everything happens in your browser; nothing is uploaded.")}</p>
    </>
  );

  return (
    <>
      <TopLoadingBar active={isWorking} />
      <ToolWorkspace
        mobile={{
          title: t("Typing Text GIF"),
          meta,
          onBack: () => setActive(false),
          backLabel: t("Back"),
          settingsTitle: t("Text settings"),
          cta: result
            ? { icon: "download", label: t("Download GIF"), busyLabel: t("Saving…"), busy: false, onClick: download }
            : { icon: "terminal", label: t("Make GIF"), busyLabel: working, busy: isWorking, onClick: run, disabled: !L },
        }}
        main={main}
        rail={
          <SettingsRail
            title={t("Text settings")}
            icon="terminal"
            accent={ACCENT}
            footer={
              <>
                <RailNote>{L ? t("Output: {w} × {h} px", { w: L.W, h: L.H }) : null}</RailNote>
                <RailAction onClick={run} busy={isWorking} busyLabel={working} icon="terminal" disabled={!L}>
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
            {controls}
          </SettingsRail>
        }
      />
    </>
  );
}

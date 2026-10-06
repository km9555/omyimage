"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { ToolWorkspace, filesHeader } from "@/components/tool/ToolWorkspace";
import { SettingsRail, RailAction, RailNote } from "@/components/tool/SettingsRail";
import { baseName, downloadBlob } from "@/lib/image/raster";
import { openGif, totalDuration, type FrameSource } from "@/lib/gif/frames";
import { reencodeAsGif } from "@/lib/gif/reencode";
import { drawLines, ensureFont, fontStack, wrapLines, type FontKey } from "@/lib/gif/text";
import { useHandoff } from "@/lib/tool-handoff";
import { useFormatBytes, useLocale, useT } from "@/i18n/I18nScope";
import { translateError } from "@/i18n/errors";

/**
 * Add Text to GIF: a caption drawn onto every frame (or a range of frames),
 * previewed live on the playing animation before anything is encoded.
 */
const ACCENT = "#C56A9A";

type Spot = "tl" | "tc" | "tr" | "ml" | "mc" | "mr" | "bl" | "bc" | "br";
const SPOTS: Spot[] = ["tl", "tc", "tr", "ml", "mc", "mr", "bl", "bc", "br"];

interface Caption {
  text: string;
  font: FontKey;
  sizePct: number;
  color: string;
  outline: string;
  outlinePct: number;
  box: boolean;
  upper: boolean;
  spot: Spot;
  part: boolean;
  start: number;
  end: number;
}

/** Draw the caption for frame `i` onto a canvas that already holds the frame. */
function paintCaption(ctx: CanvasRenderingContext2D, W: number, H: number, i: number, c: Caption) {
  if (c.part && (i < Math.min(c.start, c.end) || i > Math.max(c.start, c.end))) return;
  const text = c.upper ? c.text.toUpperCase() : c.text;
  if (!text.trim()) return;
  const px = Math.max(10, Math.round((Math.min(W, H) * c.sizePct) / 100));
  ctx.font = `bold ${px}px ${fontStack(c.font)}`;
  const margin = Math.max(4, Math.round(Math.min(W, H) * 0.04 + px * c.outlinePct / 200));
  const lines = wrapLines(ctx, text, W - margin * 2);
  const lh = px * 1.15;
  const blockH = lines.length * lh;
  const col = c.spot[1];
  const row = c.spot[0];
  ctx.textAlign = col === "l" ? "left" : col === "r" ? "right" : "center";
  const x = col === "l" ? margin : col === "r" ? W - margin : W / 2;
  const y = row === "t" ? margin : row === "b" ? H - margin - blockH : (H - blockH) / 2;
  const box = c.box ? `${c.outline}99` : null;
  drawLines(ctx, lines, x, y, px, lh, { color: c.color, outline: c.outline, outlineWidth: c.outlinePct / 100, box });
}

export function GifTextTool() {
  const t = useT();
  const locale = useLocale();
  const formatBytes = useFormatBytes();
  const previewRef = useRef<HTMLCanvasElement>(null);

  const [file, setFile] = useState<File | null>(null);
  const [src, setSrc] = useState<FrameSource | null>(null);
  const [isWorking, setIsWorking] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<{ blob: Blob; url: string } | null>(null);
  // The default caption is drawn INTO the GIF, so it follows the page language.
  const [cap, setCap] = useState<Caption>(() => ({
    text: t("Your text here"), font: "impact", sizePct: 10, color: "#ffffff", outline: "#000000", outlinePct: 12,
    box: false, upper: false, spot: "bc", part: false, start: 0, end: 0,
  }));
  const set = <K extends keyof Caption>(k: K, v: Caption[K]) => setCap((c) => ({ ...c, [k]: v }));

  useEffect(() => () => { if (result) URL.revokeObjectURL(result.url); }, [result]);

  const onFiles = useCallback(async (incoming: FileList | File[]) => {
    const f = Array.from(incoming).find((x) => /gif$/i.test(x.type) || /\.gif$/i.test(x.name));
    if (!f) { toast.error(t("Please select a GIF.")); return; }
    try {
      const s = await openGif(f);
      setFile(f);
      setSrc(s);
      setResult(null);
      setCap((c) => ({ ...c, start: 0, end: s.delays.length - 1 }));
    } catch (err) {
      toast.error(translateError(err, t, "Could not read this image."));
    }
  }, [t]);

  useHandoff(onFiles);

  const reset = () => { setFile(null); setSrc(null); setResult(null); };

  // Settings change → the old result no longer matches.
  const capKey = JSON.stringify(cap);
  useEffect(() => { setResult(null); }, [capKey]);

  // Load the chosen font before the preview or the encoder draws with it.
  useEffect(() => { void ensureFont(`bold 40px ${fontStack(cap.font)}`, cap.text); }, [cap.font, cap.text]);

  // Live preview: play the animation with the caption, reading the latest settings each frame.
  const capRef = useRef(cap);
  useEffect(() => { capRef.current = cap; }, [cap]);
  useEffect(() => {
    if (!src || isWorking) return;
    let alive = true;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let i = 0;
    const tick = async () => {
      if (!alive) return;
      const f = await src.frame(i);
      const c = previewRef.current;
      if (!alive) return;
      if (c) {
        if (c.width !== src.width || c.height !== src.height) { c.width = src.width; c.height = src.height; }
        const g = c.getContext("2d");
        if (g) {
          g.clearRect(0, 0, c.width, c.height);
          g.drawImage(f, 0, 0);
          paintCaption(g, src.width, src.height, i, capRef.current);
        }
      }
      const d = src.delays[i];
      i = (i + 1) % src.delays.length;
      timer = setTimeout(tick, d);
    };
    void tick();
    return () => { alive = false; if (timer) clearTimeout(timer); };
  }, [src, isWorking]);

  const run = async () => {
    if (!src) return;
    setIsWorking(true);
    setProgress(0);
    setResult(null);
    try {
      const c = { ...cap };
      await ensureFont(`bold 40px ${fontStack(c.font)}`, c.text);
      const canvas = document.createElement("canvas");
      canvas.width = src.width;
      canvas.height = src.height;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) throw new Error("Canvas is not supported in this browser.");
      const captioned: FrameSource = {
        width: src.width,
        height: src.height,
        delays: src.delays,
        repeat: src.repeat,
        frame: async (i) => {
          const f = await src.frame(i);
          ctx.clearRect(0, 0, src.width, src.height);
          ctx.drawImage(f, 0, 0);
          paintCaption(ctx, src.width, src.height, i, c);
          return canvas;
        },
      };
      const r = await reencodeAsGif(captioned, { width: src.width, height: src.height, onProgress: setProgress });
      const blob = new Blob([r.bytes as BlobPart], { type: "image/gif" });
      setResult({ blob, url: URL.createObjectURL(blob) });
    } catch (err) {
      toast.error(translateError(err, t, "Processing failed."));
    } finally {
      setIsWorking(false);
    }
  };

  const download = () => { if (result && file) downloadBlob(result.blob, `${baseName(file.name)}_text.gif`); };

  const n = src?.delays.length ?? 0;
  const nf = useMemo(() => new Intl.NumberFormat(locale, { maximumFractionDigits: 2 }), [locale]);

  if (!file || !src) {
    return (
      <section>
        <Dropzone onFiles={onFiles} accept="image/gif,.gif" accent={ACCENT} icon="gif_box" multiple={false} camera={false} buttonLabel={t("Select a GIF")} hint={t("or drop a GIF here")} />
      </section>
    );
  }

  const working = t("Working… {p}%", { p: Math.round(progress * 100) });
  const checker = { backgroundColor: "#fff", backgroundImage: "linear-gradient(45deg,#cbd5e1 25%,transparent 25%),linear-gradient(-45deg,#cbd5e1 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#cbd5e1 75%),linear-gradient(-45deg,transparent 75%,#cbd5e1 75%)", backgroundSize: "16px 16px", backgroundPosition: "0 0,0 8px,8px -8px,-8px 0" };
  const seg = (on: boolean) => `rounded-md px-2 py-1.5 text-label-md font-semibold ${on ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant"}`;
  const fieldCls = "w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";
  const label = "text-label-sm font-label-sm text-on-surface-variant";
  const hint = "text-label-sm font-label-sm text-on-surface-variant/70";
  const frameLabel = (i: number) => t("Frame {i} · {s} s", { i: i + 1, s: nf.format(src.delays.slice(0, i).reduce((a, b) => a + b, 0) / 1000) });
  const spotLabel: Record<Spot, string> = {
    tl: t("Top left"), tc: t("Top"), tr: t("Top right"),
    ml: t("Left"), mc: t("Middle"), mr: t("Right"),
    bl: t("Bottom left"), bc: t("Bottom"), br: t("Bottom right"),
  };

  const main = (
    <div className="flex flex-col gap-3">
      <div className="grid gap-4 md:grid-cols-2">
        <figure className="flex flex-col gap-2">
          <figcaption className="text-label-md font-semibold text-on-surface-variant">{t("Preview")}</figcaption>
          <div className="flex min-h-[200px] items-center justify-center rounded-xl border border-surface-variant bg-surface-container p-3">
            <canvas ref={previewRef} style={checker} className="max-h-[42vh] max-w-full rounded shadow-sm" aria-label={t("Preview")} />
          </div>
          <p className="text-label-sm font-label-sm text-on-surface-variant tabular-nums">
            {/* i18n-raw: dimensions joined to already-translated parts */}
            {`${src.width} × ${src.height} px · ${t("{n} frames", { n })} · ${t("{s} s", { s: nf.format(totalDuration(src) / 1000) })} · ${formatBytes(file.size)}`}
          </p>
        </figure>
        {result ? (
          <figure className="flex flex-col gap-2">
            <figcaption className="text-label-md font-semibold text-secondary">{t("Result")}</figcaption>
            <div className="flex min-h-[200px] items-center justify-center rounded-xl border border-surface-variant bg-surface-container p-3">
              {/* eslint-disable-next-line @next/next/no-img-element -- object URL of the captioned GIF */}
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
              <span>{t("The preview plays your text live. Add it to the GIF when it looks right.")}</span>
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
  );

  const controls = (
    <>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="gif-caption" className={label}>{t("Text")}</label>
        <textarea id="gif-caption" rows={3} maxLength={300} value={cap.text} onChange={(e) => set("text", e.target.value)} className={`${fieldCls} resize-y`} />
      </div>
      <div className="flex flex-col gap-1.5">
        <span className={label}>{t("Position")}</span>
        <div role="radiogroup" aria-label={t("Position")} className="grid w-36 grid-cols-3 gap-1 rounded-lg bg-surface-container p-1">
          {SPOTS.map((s) => (
            <button key={s} type="button" role="radio" aria-checked={cap.spot === s} aria-label={spotLabel[s]} title={spotLabel[s]} onClick={() => set("spot", s)}
              className={`flex h-8 items-center justify-center rounded-md ${cap.spot === s ? "bg-secondary text-on-secondary" : "bg-surface-container-lowest text-on-surface-variant hover:text-secondary"}`}>
              <span className={`block h-1.5 w-3 rounded-full ${cap.spot === s ? "bg-current" : "bg-outline-variant"}`} />
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="gif-font" className={label}>{t("Font")}</label>
          <select id="gif-font" value={cap.font} onChange={(e) => set("font", e.target.value as FontKey)} className={fieldCls}>
            <option value="impact">{t("Impact (meme)")}</option>
            <option value="sans">{t("Sans-serif")}</option>
            <option value="serif">{t("Serif")}</option>
            <option value="mono">{t("Typewriter")}</option>
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="gif-size" className={`${label} flex justify-between`}><span>{t("Size")}</span><span className="tabular-nums">{`${cap.sizePct}%`}</span></label>
          <input id="gif-size" type="range" min={4} max={22} value={cap.sizePct} onChange={(e) => set("sizePct", Number(e.target.value))} className="mt-2 w-full accent-secondary" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <label className="flex items-center gap-2.5">
          <input type="color" value={cap.color} onChange={(e) => set("color", e.target.value)} className="h-9 w-12 cursor-pointer rounded border border-surface-variant bg-transparent" />
          <span className="text-body-md text-on-surface">{t("Text colour")}</span>
        </label>
        <label className="flex items-center gap-2.5">
          <input type="color" value={cap.outline} onChange={(e) => set("outline", e.target.value)} className="h-9 w-12 cursor-pointer rounded border border-surface-variant bg-transparent" />
          <span className="text-body-md text-on-surface">{t("Outline colour")}</span>
        </label>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="gif-outline" className={`${label} flex justify-between`}><span>{t("Outline thickness")}</span><span className="tabular-nums">{`${cap.outlinePct}%`}</span></label>
        <input id="gif-outline" type="range" min={0} max={24} value={cap.outlinePct} onChange={(e) => set("outlinePct", Number(e.target.value))} className="w-full accent-secondary" />
      </div>
      <label className="flex items-center gap-2.5 cursor-pointer">
        <input type="checkbox" checked={cap.box} onChange={(e) => set("box", e.target.checked)} className="w-4 h-4 accent-secondary" />
        <span className="text-body-md text-on-surface">{t("Box behind the text")}</span>
      </label>
      <label className="flex items-center gap-2.5 cursor-pointer">
        <input type="checkbox" checked={cap.upper} onChange={(e) => set("upper", e.target.checked)} className="w-4 h-4 accent-secondary" />
        <span className="text-body-md text-on-surface">{t("CAPITAL LETTERS")}</span>
      </label>
      <div className="flex flex-col gap-1.5">
        <span className={label}>{t("Show the text")}</span>
        <div role="radiogroup" aria-label={t("Show the text")} className="grid grid-cols-2 gap-1 rounded-lg bg-surface-container p-1">
          <button type="button" role="radio" aria-checked={!cap.part} onClick={() => set("part", false)} className={seg(!cap.part)}>{t("Whole GIF")}</button>
          <button type="button" role="radio" aria-checked={cap.part} onClick={() => set("part", true)} className={seg(cap.part)}>{t("Some frames")}</button>
        </div>
      </div>
      {cap.part && (
        <>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="gif-text-start" className={label}>{t("From")} · <span className="tabular-nums">{frameLabel(cap.start)}</span></label>
            <input id="gif-text-start" type="range" min={0} max={Math.max(0, n - 1)} value={cap.start} onChange={(e) => { const v = Number(e.target.value); setCap((c) => ({ ...c, start: v, end: Math.max(v, c.end) })); }} className="w-full accent-secondary" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="gif-text-end" className={label}>{t("To")} · <span className="tabular-nums">{frameLabel(cap.end)}</span></label>
            <input id="gif-text-end" type="range" min={0} max={Math.max(0, n - 1)} value={cap.end} onChange={(e) => { const v = Number(e.target.value); setCap((c) => ({ ...c, end: v, start: Math.min(v, c.start) })); }} className="w-full accent-secondary" />
          </div>
        </>
      )}
      <p className={hint}>{t("Long text wraps onto new lines by itself. Press Enter to start a new line.")}</p>
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
          settingsTitle: t("Text settings"),
          cta: result
            ? { icon: "download", label: t("Download GIF"), busyLabel: t("Saving…"), busy: false, onClick: download }
            : { icon: "text_fields", label: t("Add text to GIF"), busyLabel: working, busy: isWorking, onClick: run, disabled: !cap.text.trim() },
        }}
        main={main}
        rail={
          <SettingsRail
            title={t("Text settings")}
            icon="text_fields"
            accent={ACCENT}
            footer={
              <>
                <RailNote>{t("Output: {w} × {h} px", { w: src.width, h: src.height })}</RailNote>
                <RailAction onClick={run} busy={isWorking} busyLabel={working} icon="text_fields" disabled={!cap.text.trim()}>
                  {t("Add text to GIF")}
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

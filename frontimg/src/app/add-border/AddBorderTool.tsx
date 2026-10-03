"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { ToolWorkspace, filesHeader } from "@/components/tool/ToolWorkspace";
import { FileTray, TrayAction, type TrayEntry } from "@/components/tool/FileTray";
import { SettingsRail, RailAction, RailSecondaryAction } from "@/components/tool/SettingsRail";
import { BackgroundPicker } from "@/components/BackgroundPicker";
import { HelpTip } from "@/components/HelpTip";
import {
  decodeBitmap, canvasToBlob, downloadBlob, zipAndDownload, baseName, mimeExt, type ExportMime,
} from "@/lib/image/raster";
import {
  paintFrame, layoutFrame, ASPECT_PRESETS, BORDER_STYLES, FRAME_PRESETS,
  type BorderStyle, type FrameOptions, type FramePreset,
} from "@/lib/image/frame";
import { useHandoff } from "@/lib/tool-handoff";
import { useFormatBytes, useLocale, useT } from "@/i18n/I18nScope";
import { translateError } from "@/i18n/errors";

const ACCENT = "#D08048";
const ACCEPT = "image/jpeg,image/png,image/webp";

type Format = "original" | ExportMime;
type Item = { id: string; file: File; url: string; result?: { blob: Blob; size: number; name: string } };

// FORMATS here, and FRAME_PRESETS / BORDER_STYLES / ASPECT_PRESETS in
// lib/image/frame.ts, are module scope: labels are translated at the render
// site, keys in add-border.<loc>.ts (conversion.md §4.2).
const FORMATS: { label: string; value: Format }[] = [
  { label: "Auto", value: "original" },
  { label: "PNG", value: "image/png" },
  { label: "JPG", value: "image/jpeg" },
  { label: "WEBP", value: "image/webp" },
];

/** Longest side of the bitmap the preset tiles are drawn from. */
const THUMB_SIDE = 132;

/*
  The standard transparency checkerboard, matching the one BackgroundPicker
  paints on its Transparent swatch. Without it a transparent export looks
  identical to a white one on a pale page, and the option reads as broken.
*/
const CHECKER: React.CSSProperties = {
  backgroundColor: "#fff",
  backgroundImage:
    "linear-gradient(45deg,#cbd5e1 25%,transparent 25%),linear-gradient(-45deg,#cbd5e1 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#cbd5e1 75%),linear-gradient(-45deg,transparent 75%,#cbd5e1 75%)",
  backgroundSize: "16px 16px",
  backgroundPosition: "0 0,0 8px,8px -8px,-8px 0",
};

let counter = 0;
const uid = () => `f${Date.now()}_${counter++}`;

function outMimeFor(file: File, fmt: Format): ExportMime {
  if (fmt !== "original") return fmt;
  const t = file.type;
  return t === "image/jpeg" || t === "image/webp" || t === "image/png" ? (t as ExportMime) : "image/png";
}

/**
 * One preset tile, drawn from the user's own photo.
 *
 * Showing the actual image rather than a generic swatch is the whole point —
 * "Vintage" means nothing until you see your picture inside it.
 */
function PresetTile({
  preset,
  thumb,
  active,
  transparentOutside,
  onClick,
}: {
  preset: FramePreset;
  thumb: HTMLCanvasElement | null;
  active: boolean;
  transparentOutside: boolean;
  onClick: () => void;
}) {
  const t = useT();
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (!thumb) {
      canvas.width = 0;
      canvas.height = 0;
      return;
    }
    paintFrame(canvas, thumb, thumb.width, thumb.height, {
      ...preset.options,
      aspect: null,
      caption: null,
      transparentOutside,
    });
  }, [preset, thumb, transparentOutside]);

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex flex-col items-center gap-1.5 rounded-lg border p-2 transition-colors ${
        active
          ? "border-secondary bg-secondary/10"
          : "border-surface-variant bg-surface-container-lowest hover:border-secondary/50"
      }`}
    >
      <span className="flex h-[58px] w-full items-center justify-center overflow-hidden rounded bg-surface-container">
        <canvas ref={ref} className="max-h-full max-w-full" />
      </span>
      <span className={`text-label-sm font-label-sm ${active ? "font-semibold text-secondary" : "text-on-surface-variant"}`}>
        {t(preset.label)}
      </span>
    </button>
  );
}

export function AddBorderTool() {
  const t = useT();
  const locale = useLocale();
  const formatBytes = useFormatBytes();
  // Half-step sliders print "2.5%" in English and must print "2,5%" in Portuguese.
  const num = (n: number) => new Intl.NumberFormat(locale).format(n);
  const [items, setItems] = useState<Item[]>([]);

  // Border.
  const [thickness, setThickness] = useState(5);
  const [color, setColor] = useState("#3a3a3a");
  const [style, setStyle] = useState<BorderStyle>("solid");
  const [radius, setRadius] = useState(0);
  const [bottomExtra, setBottomExtra] = useState(0);
  // Inner mat.
  const [matOn, setMatOn] = useState(true);
  const [matWidth, setMatWidth] = useState(2.5);
  const [matColor, setMatColor] = useState("#f4efe6");
  // Shape and caption.
  const [aspect, setAspect] = useState<number | null>(null);
  const [transparentOutside, setTransparentOutside] = useState(false);
  const [captionOn, setCaptionOn] = useState(false);
  const [captionText, setCaptionText] = useState("");
  const [captionSize, setCaptionSize] = useState(4);
  // Output.
  const [format, setFormat] = useState<Format>("original");
  const [quality, setQuality] = useState(0.92);

  const [isWorking, setIsWorking] = useState(false);
  const [done, setDone] = useState(false);

  const previewRef = useRef<HTMLCanvasElement>(null);
  const firstBmp = useRef<ImageBitmap | null>(null);
  const [thumb, setThumb] = useState<HTMLCanvasElement | null>(null);
  const [srcSize, setSrcSize] = useState<{ w: number; h: number } | null>(null);

  useEffect(() => () => { items.forEach((i) => URL.revokeObjectURL(i.url)); }, [items]);

  const options: FrameOptions = useMemo(
    () => ({
      thickness,
      color,
      style,
      radius,
      bottomExtra,
      mat: matOn ? { width: matWidth, color: matColor } : null,
      aspect,
      transparentOutside,
      caption: captionOn && captionText.trim() ? { text: captionText.trim(), size: captionSize, color } : null,
    }),
    [thickness, color, style, radius, bottomExtra, matOn, matWidth, matColor, aspect, transparentOutside, captionOn, captionText, captionSize]
  );

  /* Which preset the current settings match, rather than a flag set on click.
     Derived means nudging a slider drops the highlight on its own, and clicking
     the same preset twice cannot leave it out of step. */
  const activePreset = useMemo(() => {
    const same = (p: FramePreset) => {
      const o = p.options;
      return (
        o.thickness === thickness &&
        o.color === color &&
        o.style === style &&
        o.radius === radius &&
        (o.bottomExtra ?? 0) === bottomExtra &&
        (o.mat ? matOn && o.mat.width === matWidth && o.mat.color === matColor : !matOn)
      );
    };
    return FRAME_PRESETS.find(same)?.id ?? null;
  }, [thickness, color, style, radius, bottomExtra, matOn, matWidth, matColor]);

  const applyPreset = (p: FramePreset) => {
    const o = p.options;
    setThickness(o.thickness);
    setColor(o.color);
    setStyle(o.style);
    setRadius(o.radius);
    setBottomExtra(o.bottomExtra ?? 0);
    setMatOn(!!o.mat);
    if (o.mat) { setMatWidth(o.mat.width); setMatColor(o.mat.color); }
    setDone(false);
  };

  const repaint = useCallback(() => {
    const bmp = firstBmp.current;
    if (previewRef.current && bmp) paintFrame(previewRef.current, bmp, bmp.width, bmp.height, options);
  }, [options]);

  // Decode the first image once: the live preview draws from it, and a small
  // copy feeds every preset tile so nine frames do not each scale a full photo.
  useEffect(() => {
    let alive = true;
    const first = items[0];
    if (!first) {
      firstBmp.current = null;
      setThumb(null);
      setSrcSize(null);
      return;
    }
    decodeBitmap(first.file)
      .then((b) => {
        if (!alive) { b.close(); return; }
        firstBmp.current = b;
        setSrcSize({ w: b.width, h: b.height });
        const scale = THUMB_SIDE / Math.max(b.width, b.height);
        const t = document.createElement("canvas");
        t.width = Math.max(1, Math.round(b.width * scale));
        t.height = Math.max(1, Math.round(b.height * scale));
        t.getContext("2d")?.drawImage(b, 0, 0, t.width, t.height);
        setThumb(t);
        repaint();
      })
      .catch(() => {});
    return () => { alive = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items[0]?.id]);

  useEffect(() => { repaint(); }, [repaint]);

  const addFiles = useCallback((incoming: FileList | File[]) => {
    const imgs = Array.from(incoming).filter((f) => f.type.startsWith("image/"));
    if (imgs.length === 0) { toast.error(t("Please select image files.")); return; }
    setDone(false);
    // Prefill the caption so turning it on never shows an empty band.
    setCaptionText((cur) => (cur === "" ? baseName(imgs[0].name) : cur));
    setItems((prev) => [...prev, ...imgs.map((file) => ({ id: uid(), file, url: URL.createObjectURL(file) }))]);
  }, [t]);

  useHandoff(addFiles);

  const removeItem = (id: string) => setItems((prev) => { const it = prev.find((p) => p.id === id); if (it) URL.revokeObjectURL(it.url); return prev.filter((p) => p.id !== id); });
  const reset = () => { items.forEach((i) => URL.revokeObjectURL(i.url)); setItems([]); setDone(false); };

  const outSize = useMemo(
    () => (srcSize ? layoutFrame(srcSize.w, srcSize.h, options) : null),
    [srcSize, options]
  );

  /* True when transparency is asked for but the chosen format would flatten it.
     "Auto" is judged against the first file, since that is what it resolves to. */
  const alphaLost =
    transparentOutside && items[0] ? outMimeFor(items[0].file, format) === "image/jpeg" : false;

  const applyAll = async () => {
    if (items.length === 0) return;
    setIsWorking(true);
    try {
      const canvas = document.createElement("canvas");
      const out: Item[] = [];
      for (const it of items) {
        const bmp = await decodeBitmap(it.file);
        const mime = outMimeFor(it.file, format);
        /* Per-image caption text: in a batch the same words under every photo
           is rarely what anyone wants, so each file captions with its own name
           unless the text was edited away from the prefill. */
        const opts: FrameOptions =
          options.caption && items.length > 1 && captionText.trim() === baseName(items[0].file.name)
            ? { ...options, caption: { ...options.caption, text: baseName(it.file.name) } }
            : options;
        paintFrame(canvas, bmp, bmp.width, bmp.height, opts);
        bmp.close();
        const blob = await canvasToBlob(canvas, mime, quality);
        out.push({ ...it, result: { blob, size: blob.size, name: `${baseName(it.file.name)}_bordered.${mimeExt(mime)}` } });
      }
      setItems(out);
      setDone(true);
      if (out.length === 1 && out[0].result) downloadBlob(out[0].result.blob, out[0].result.name);
      else await zipAndDownload(out.map((o) => ({ name: o.result!.name, blob: o.result!.blob })), "omyimage_bordered.zip");
      toast.success(out.length === 1 ? t("Added a border to 1 image.") : t("Added a border to {n} images.", { n: out.length }));
    } catch (err) {
      console.error(err);
      toast.error(translateError(err, t, "Adding the border failed."));
    } finally {
      setIsWorking(false);
    }
  };

  const fieldCls = "w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";
  const seg = (on: boolean) =>
    `rounded-md px-2 py-2 text-label-md font-semibold transition-colors ${
      on ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant hover:text-primary"
    }`;
  const sectionLabel = "text-label-sm font-label-sm font-semibold uppercase tracking-wide text-on-surface-variant";

  if (items.length === 0) {
    return (
      <section>
        <TopLoadingBar active={isWorking} />
        <Dropzone onFiles={addFiles} accept={ACCEPT} accent={ACCENT} icon="crop_din" hint={t("or drop JPG, PNG or WEBP images here")} />
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
          backLabel: t("Clear files"),
          settingsTitle: t("Border settings"),
          cta: {
            icon: "crop_din",
            label: t("Add border"),
            busyLabel: t("Adding…"),
            busy: isWorking,
            onClick: applyAll,
          },
        }}
        main={
          <>
            <div
              className={`rounded-xl border border-surface-variant p-4 flex items-center justify-center overflow-hidden ${transparentOutside ? "" : "bg-surface-container"}`}
              style={transparentOutside ? { minHeight: 220, ...CHECKER } : { minHeight: 220 }}
            >
              <canvas ref={previewRef} className="max-w-full max-h-[46vh] rounded" />
            </div>
            <p className="text-center text-label-sm font-label-sm text-on-surface-variant">
              {t("Live preview of")} <span className="font-semibold text-on-surface">{items[0].file.name}</span>
              {items.length > 1 && <> {t("— applied to all {n} images.", { n: items.length })}</>}
              {outSize && <> · {outSize.W} × {outSize.H} px</>}
            </p>
            <FileTray entries={entries} accept={ACCEPT} onFiles={addFiles} onClear={reset} busy={isWorking} />
          </>
        }
        rail={
          <SettingsRail
            title={t("Border Settings")}
            icon="crop_din"
            accent={ACCENT}
            footer={
              <>
                <RailAction onClick={applyAll} busy={isWorking} busyLabel={t("Adding…")} icon="crop_din">
                  {items.length > 1 ? t("Add border to {n}", { n: items.length }) : t("Add border & download")}
                </RailAction>
                {done && items.length > 1 && (
                  <RailSecondaryAction
                    icon="folder_zip"
                    onClick={() => zipAndDownload(items.filter((i) => i.result).map((i) => ({ name: i.result!.name, blob: i.result!.blob })), "omyimage_bordered.zip")}
                  >
                    {t("Download all (ZIP)")}
                  </RailSecondaryAction>
                )}
              </>
            }
          >
          <div className="flex flex-col gap-2">
            <span className={sectionLabel}>{t("Presets")}</span>
            <div className="grid grid-cols-3 gap-2">
              {FRAME_PRESETS.map((p) => (
                <PresetTile key={p.id} preset={p} thumb={thumb} active={activePreset === p.id} transparentOutside={transparentOutside} onClick={() => applyPreset(p)} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className={sectionLabel}>{t("Aspect ratio")}</span>
            <div className="grid grid-cols-4 gap-1.5">
              {ASPECT_PRESETS.map((a) => (
                <button
                  key={a.label}
                  type="button"
                  onClick={() => setAspect(a.ratio)}
                  aria-pressed={aspect === a.ratio}
                  className={`flex flex-col items-center gap-0.5 rounded-lg border px-1 py-2 transition-colors ${
                    aspect === a.ratio ? "border-secondary bg-secondary/10" : "border-surface-variant hover:border-secondary/50"
                  }`}
                >
                  {/* Translated, not raw: every other label in this list is a
                      ratio that passes through t() unchanged ("1:1", "4:5"),
                      but the first one is the word "Original", which was
                      rendering in English on /hi and /ru. Both already define
                      it in common.ts. */}
                  <span className={`text-label-md font-semibold ${aspect === a.ratio ? "text-secondary" : "text-primary"}`}>{t(a.label)}</span>
                  {a.hint && <span className="text-[10px] leading-tight text-on-surface-variant">{t(a.hint)}</span>}
                </button>
              ))}
            </div>
            <p className="text-label-sm font-label-sm text-on-surface-variant/70">
              {t("The frame grows to reach the shape — the photo is never cropped.")}
            </p>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-label-sm font-label-sm text-on-surface-variant">{t("Style")}</label>
            <select value={style} onChange={(e) => setStyle(e.target.value as BorderStyle)} className={fieldCls}>
              {BORDER_STYLES.map((s) => <option key={s.value} value={s.value}>{t(s.label)}</option>)}
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>{t("Thickness")}</span><span className="text-primary font-semibold">{num(thickness)}%</span></label>
            <input type="range" min={0} max={25} step={0.5} value={thickness} onChange={(e) => setThickness(parseFloat(e.target.value))} className="w-full accent-secondary" disabled={style === "none"} />
            <p className="text-label-sm font-label-sm text-on-surface-variant/70">{t("As a percentage of the image's shortest side, so it scales with any size.")}</p>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>{t("Corner radius")}</span><span className="text-primary font-semibold">{radius}%</span></label>
            <input type="range" min={0} max={50} step={1} value={radius} onChange={(e) => setRadius(parseInt(e.target.value, 10))} className="w-full accent-secondary" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>{t("Extra depth below")}</span><span className="text-primary font-semibold">{bottomExtra}%</span></label>
            <input type="range" min={0} max={30} step={1} value={bottomExtra} onChange={(e) => setBottomExtra(parseInt(e.target.value, 10))} className="w-full accent-secondary" />
            <p className="text-label-sm font-label-sm text-on-surface-variant/70">{t("A deeper bottom edge, the way a Polaroid has one.")}</p>
          </div>

          <BackgroundPicker value={{ transparent: false, color }} onChange={(v) => setColor(v.color)} allowTransparent={false} label={t("Border colour")} />

          <div className="flex flex-col gap-2 rounded-lg border border-outline-variant/40 bg-surface-bright p-3.5">
            <label className="flex items-center gap-2.5 cursor-pointer">
              <input type="checkbox" checked={matOn} onChange={(e) => setMatOn(e.target.checked)} className="w-4 h-4 accent-secondary" />
              <span className="text-body-md text-on-surface">{t("Inner mat")}</span>
            </label>
            <p className="text-label-sm font-label-sm text-on-surface-variant/70">
              {t("The thin second frame between the photo and the border, as in a mounted print.")}
            </p>
            {matOn && (
              <>
                <label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>{t("Mat width")}</span><span className="text-primary font-semibold">{num(matWidth)}%</span></label>
                <input type="range" min={0.5} max={12} step={0.5} value={matWidth} onChange={(e) => setMatWidth(parseFloat(e.target.value))} className="w-full accent-secondary" />
                <BackgroundPicker value={{ transparent: false, color: matColor }} onChange={(v) => setMatColor(v.color)} allowTransparent={false} label={t("Mat colour")} />
              </>
            )}
          </div>

          <div className="flex flex-col gap-2 rounded-lg border border-outline-variant/40 bg-surface-bright p-3.5">
            <label className="flex items-center gap-2.5 cursor-pointer">
              <input type="checkbox" checked={captionOn} onChange={(e) => setCaptionOn(e.target.checked)} className="w-4 h-4 accent-secondary" />
              <span className="text-body-md text-on-surface">{t("Caption")}</span>
            </label>
            {captionOn && (
              <>
                <input
                  type="text"
                  value={captionText}
                  onChange={(e) => setCaptionText(e.target.value)}
                  placeholder={t("Caption text")}
                  className={fieldCls}
                  maxLength={120}
                />
                <label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>{t("Text size")}</span><span className="text-primary font-semibold">{num(captionSize)}%</span></label>
                <input type="range" min={1.5} max={10} step={0.5} value={captionSize} onChange={(e) => setCaptionSize(parseFloat(e.target.value))} className="w-full accent-secondary" />
                <p className="text-label-sm font-label-sm text-on-surface-variant/70">
                  {items.length > 1 && captionText.trim() === baseName(items[0].file.name)
                    ? t("Each image is captioned with its own filename. Type something to use one caption for all of them.")
                    : t("Drawn in the band below the photo, which deepens to make room.")}
                </p>
              </>
            )}
          </div>

          <div className="flex flex-col gap-2 rounded-lg border border-outline-variant/40 bg-surface-bright p-3.5">
            <label className="flex items-center gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={transparentOutside}
                onChange={(e) => {
                  const on = e.target.checked;
                  setTransparentOutside(on);
                  /* Move off a format that cannot hold alpha the moment it
                     starts mattering, rather than letting someone discover it
                     from a file with black corners. "Auto" counts: a JPG source
                     resolves straight back to JPEG. */
                  if (on && (format === "original" || format === "image/jpeg")) setFormat("image/png");
                }}
                className="w-4 h-4 accent-secondary"
              />
              <span className="text-body-md text-on-surface flex items-center gap-1.5">
                {t("Transparent background")}
                <HelpTip text={t("Leaves everything outside the frame empty instead of filled, so the framed photo can sit on any background. The corners follow the Corner radius slider, and an aspect ratio leaves empty space around the frame rather than a thicker border.")} />
              </span>
            </label>
            {transparentOutside && (
              alphaLost ? (
                <p className="text-label-sm font-label-sm text-error">
                  {t("{format} cannot store transparency — the empty areas will export as solid black. Choose PNG or WEBP.", { format: t(FORMATS.find((f) => f.value === format)?.label ?? "") })}
                </p>
              ) : (
                <p className="text-label-sm font-label-sm text-on-surface-variant/70">
                  {t("Saved as {format}, which can store transparency. Raise Corner radius to round the frame's outer edge.", { format: format === "image/webp" ? "WEBP" : "PNG" })}
                </p>
              )
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <span className={sectionLabel}>{t("Save as")}</span>
            <div className="grid grid-cols-4 gap-1 rounded-lg bg-surface-container p-1">
              {FORMATS.map((f) => (
                <button key={f.value} type="button" onClick={() => setFormat(f.value)} className={seg(format === f.value)}>
                  {t(f.label)}
                </button>
              ))}
            </div>
          </div>

          {format !== "image/png" && (
            <div className="flex flex-col gap-1.5">
              <label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>{t("Quality")}</span><span className="text-primary font-semibold">{Math.round(quality * 100)}%</span></label>
              <input type="range" min={0.5} max={1} step={0.01} value={quality} onChange={(e) => setQuality(parseFloat(e.target.value))} className="w-full accent-secondary" />
            </div>
          )}
          </SettingsRail>
        }
      />
    </>
  );
}

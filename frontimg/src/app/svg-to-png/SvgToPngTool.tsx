"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { ToolWorkspace, filesHeader } from "@/components/tool/ToolWorkspace";
import { SettingsRail, RailAction, RailNote } from "@/components/tool/SettingsRail";
import { baseName, canvasToBlob, downloadBlob, zipAndDownload } from "@/lib/image/raster";
import { isSvgFile, rasterizeSvg, readSvg, svgOutputSize, SVG_MAX_SIDE, type SvgSource } from "@/lib/image/svg-raster";
import { useHandoff } from "@/lib/tool-handoff";
import { useFormatBytes, useT } from "@/i18n/I18nScope";
import { translateError } from "@/i18n/errors";

const ACCENT = "#B5703A";
const ACCEPT = "image/svg+xml,.svg";
/** Longest side of the on-screen preview; the download is drawn separately. */
const PREVIEW_SIDE = 900;

type SizeMode = 1 | 2 | 4 | "width";
type Bg = "transparent" | "white" | "custom";

const CHECKER: React.CSSProperties = {
  backgroundColor: "#fff",
  backgroundImage:
    "linear-gradient(45deg,#cbd5e1 25%,transparent 25%),linear-gradient(-45deg,#cbd5e1 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#cbd5e1 75%),linear-gradient(-45deg,transparent 75%,#cbd5e1 75%)",
  backgroundSize: "16px 16px",
  backgroundPosition: "0 0,0 8px,8px -8px,-8px 0",
};

export function SvgToPngTool() {
  const t = useT();
  const formatBytes = useFormatBytes();

  const [items, setItems] = useState<{ file: File; svg: SvgSource }[]>([]);
  const [mode, setMode] = useState<SizeMode>(2);
  const [width, setWidth] = useState(1024);
  const [bg, setBg] = useState<Bg>("transparent");
  const [custom, setCustom] = useState("#1f2937");
  const [isWorking, setIsWorking] = useState(false);
  const [last, setLast] = useState<{ size: number; count: number } | null>(null);
  const [view, setView] = useState<HTMLCanvasElement | null>(null);

  const onFiles = useCallback(async (incoming: FileList | File[]) => {
    const files = Array.from(incoming).filter(isSvgFile);
    if (!files.length) { toast.error(t("Please select SVG files.")); return; }
    const read: { file: File; svg: SvgSource }[] = [];
    for (const f of files) {
      try { read.push({ file: f, svg: await readSvg(f) }); }
      catch { toast.error(t("{name} is not a valid SVG.", { name: f.name })); }
    }
    if (read.length) { setItems(read); setLast(null); }
  }, [t]);

  useHandoff(onFiles);

  const reset = () => { setItems([]); setLast(null); };

  const background = bg === "white" ? "#ffffff" : bg === "custom" ? custom : undefined;
  const sizeOf = useCallback(
    (svg: SvgSource) => svgOutputSize(svg, mode === "width" ? { width: Math.max(1, Math.min(SVG_MAX_SIDE, width || 1)) } : { scale: mode }),
    [mode, width],
  );
  const first = items[0];
  const out = useMemo(() => (first ? sizeOf(first.svg) : null), [first, sizeOf]);

  // Live preview of the first file, drawn at most PREVIEW_SIDE wide so a 4×
  // poster does not allocate a huge canvas just to be shown small.
  useEffect(() => {
    if (!first || !out || !view) return;
    let cancelled = false;
    const k = Math.min(1, PREVIEW_SIDE / Math.max(out.w, out.h));
    rasterizeSvg(first.svg, Math.max(1, Math.round(out.w * k)), Math.max(1, Math.round(out.h * k)), background)
      .then((c) => {
        if (cancelled) return;
        view.width = c.width; view.height = c.height;
        view.getContext("2d")?.drawImage(c, 0, 0);
      })
      .catch((err) => { if (!cancelled) toast.error(translateError(err, t, "Processing failed.")); });
    return () => { cancelled = true; };
  }, [first, out, view, background, t]);

  const suffix = mode === "width" ? null : mode === 1 ? "" : `@${mode}x`;

  const download = async () => {
    if (!items.length) return;
    setIsWorking(true);
    try {
      const results: { name: string; blob: Blob }[] = [];
      for (const it of items) {
        const s = sizeOf(it.svg);
        const canvas = await rasterizeSvg(it.svg, s.w, s.h, background);
        const blob = await canvasToBlob(canvas, "image/png");
        const name = `${baseName(it.file.name)}${suffix ?? `_${s.w}px`}.png`;
        results.push({ name, blob });
      }
      if (results.length === 1) downloadBlob(results[0].blob, results[0].name);
      else await zipAndDownload(results, "omyimage_svg_to_png.zip");
      setLast({ size: results.reduce((n, r) => n + r.blob.size, 0), count: results.length });
    } catch (err) {
      toast.error(translateError(err, t, "Processing failed."));
    } finally {
      setIsWorking(false);
    }
  };

  if (!items.length) {
    return (
      <section>
        <Dropzone onFiles={onFiles} accept={ACCEPT} accent={ACCENT} icon="layers" camera={false} buttonLabel={t("Select SVG files")} hint={t("or drop SVG files here")} />
      </section>
    );
  }

  const fieldCls = "w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";
  const segBtn = (active: boolean) =>
    `rounded-md px-2 py-1.5 text-label-md font-semibold ${active ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant"}`;
  const files = items.map((i) => i.file);
  const ctaLabel = items.length > 1 ? t("Download PNGs (ZIP)") : t("Download PNG");

  return (
    <>
      <TopLoadingBar active={isWorking} />
      <ToolWorkspace
        mobile={{
          ...filesHeader(files),
          onBack: reset,
          backLabel: t("Clear images"),
          settingsTitle: t("PNG settings"),
          cta: { icon: "download", label: ctaLabel, busyLabel: t("Converting…"), busy: isWorking, onClick: download },
        }}
        main={
          <div className="flex flex-col gap-3">
            <div className="rounded-xl border border-surface-variant bg-surface-container p-4 flex items-center justify-center" style={{ minHeight: 240 }}>
              <canvas ref={setView} aria-label={t("Preview")} style={background ? undefined : CHECKER} className="max-h-[52vh] max-w-full h-auto w-auto rounded shadow-sm border border-outline-variant/40" />
            </div>
            <div className="flex items-center justify-between gap-2">
              <p className="text-label-sm font-label-sm text-on-surface-variant">
                {out ? t("Output: {w} × {h} px", { w: out.w, h: out.h }) : ""}
                {items.length > 1 ? ` · ${t("Preview shows the first of {n} files", { n: items.length })}` : ""}
                {last ? ` · ${t("Last download: {size}", { size: formatBytes(last.size) })}` : ""}
              </p>
              <button type="button" onClick={reset} className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap text-label-md font-medium text-on-surface-variant hover:text-error">
                <Icon name="close" className="text-[18px]" /> {t("Change files")}
              </button>
            </div>
            {!first.svg.sized && (
              <p className="text-label-sm font-label-sm text-on-surface-variant/80">
                {t("This SVG sets no size, so it is treated as 300 × 150 px — the browser default. Use a width to choose the output size.")}
              </p>
            )}
          </div>
        }
        rail={
          <SettingsRail
            title={t("PNG settings")}
            icon="layers"
            accent={ACCENT}
            footer={
              <>
                <RailNote>{t("Your SVG files are converted in your browser and never uploaded.")}</RailNote>
                <RailAction onClick={download} busy={isWorking} busyLabel={t("Converting…")} icon="download">
                  {ctaLabel}
                </RailAction>
              </>
            }
          >
            <div className="flex flex-col gap-1.5">
              <span className="text-label-sm font-label-sm text-on-surface-variant">{t("Size")}</span>
              <div role="radiogroup" aria-label={t("Size")} className="grid grid-cols-4 gap-1 rounded-lg bg-surface-container p-1">
                {([1, 2, 4] as const).map((s) => (
                  <button key={s} type="button" role="radio" aria-checked={mode === s} onClick={() => setMode(s)} className={segBtn(mode === s)}>
                    {`${s}×`}
                  </button>
                ))}
                <button type="button" role="radio" aria-checked={mode === "width"} onClick={() => setMode("width")} className={segBtn(mode === "width")}>
                  {t("Width")}
                </button>
              </div>
              {mode === "width" ? (
                <div className="flex items-center gap-2">
                  <input type="number" min={1} max={SVG_MAX_SIDE} value={width || ""} onChange={(e) => setWidth(parseInt(e.target.value || "0", 10))} aria-label={t("Width (px)")} className={`${fieldCls.replace("w-full", "w-28")} tabular-nums`} />
                  <span className="text-label-sm text-on-surface-variant">px</span>
                </div>
              ) : (
                <p className="text-label-sm font-label-sm text-on-surface-variant/70">
                  {t("Multiplies the size set in the SVG. 2× is sharp on high-resolution screens.")}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-label-sm font-label-sm text-on-surface-variant">{t("Background")}</span>
              <div role="radiogroup" aria-label={t("Background")} className="grid grid-cols-3 gap-1 rounded-lg bg-surface-container p-1">
                {([["transparent", "Transparent"], ["white", "White"], ["custom", "Colour"]] as const).map(([id, label]) => (
                  <button key={id} type="button" role="radio" aria-checked={bg === id} onClick={() => setBg(id)} className={segBtn(bg === id)}>
                    {t(label)}
                  </button>
                ))}
              </div>
              {bg === "custom" && (
                <input type="color" value={custom} onChange={(e) => setCustom(e.target.value)} aria-label={t("Background colour")} className="h-10 w-full cursor-pointer rounded-lg border border-surface-variant bg-surface-container-lowest" />
              )}
            </div>
          </SettingsRail>
        }
      />
    </>
  );
}

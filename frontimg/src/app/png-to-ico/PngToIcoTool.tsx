"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { ToolWorkspace, filesHeader } from "@/components/tool/ToolWorkspace";
import { SettingsRail, RailAction, RailNote } from "@/components/tool/SettingsRail";
import { baseName, decodeBitmap, downloadBlob } from "@/lib/image/raster";
import { isSvgFile, rasterizeSvg, readSvg, svgOutputSize } from "@/lib/image/svg-raster";
import { ICO_SIZES, encodeIco, squareAt, type IcoFit, type IcoSize } from "@/lib/image/ico";
import { useHandoff } from "@/lib/tool-handoff";
import { useFormatBytes, useT } from "@/i18n/I18nScope";
import { translateError } from "@/i18n/errors";

const ACCENT = "#6A6FC0";
const ACCEPT = "image/png,image/jpeg,image/webp,image/gif,image/bmp,image/svg+xml,.svg";
/** An SVG is drawn at this long side once, then reduced like any bitmap. */
const SVG_SOURCE_SIDE = 1024;

const PRESETS: { id: string; label: string; sizes: IcoSize[] }[] = [
  { id: "favicon", label: "Favicon", sizes: [16, 32, 48] },
  { id: "windows", label: "Windows icon", sizes: [16, 24, 32, 48, 64, 128, 256] },
];

const CHECKER: React.CSSProperties = {
  backgroundColor: "#fff",
  backgroundImage:
    "linear-gradient(45deg,#cbd5e1 25%,transparent 25%),linear-gradient(-45deg,#cbd5e1 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#cbd5e1 75%),linear-gradient(-45deg,transparent 75%,#cbd5e1 75%)",
  backgroundSize: "8px 8px",
  backgroundPosition: "0 0,0 4px,4px -4px,-4px 0",
};

/** One rendered size, shown at its real pixel size. */
function SizeTile({ canvas, label }: { canvas: HTMLCanvasElement; label: string }) {
  const [el, setEl] = useState<HTMLCanvasElement | null>(null);
  useEffect(() => {
    if (!el) return;
    el.width = canvas.width; el.height = canvas.height;
    el.getContext("2d")?.drawImage(canvas, 0, 0);
  }, [el, canvas]);
  return (
    <figure className="flex flex-col items-center gap-1.5">
      <div className="flex items-center justify-center rounded border border-outline-variant/40" style={{ ...CHECKER, width: Math.max(40, canvas.width + 12), height: Math.max(40, canvas.height + 12) }}>
        <canvas ref={setEl} style={{ width: canvas.width, height: canvas.height }} />
      </div>
      <figcaption className="text-label-sm font-label-sm tabular-nums text-on-surface-variant">{label}</figcaption>
    </figure>
  );
}

export function PngToIcoTool() {
  const t = useT();
  const formatBytes = useFormatBytes();

  const [file, setFile] = useState<File | null>(null);
  const [source, setSource] = useState<HTMLCanvasElement | ImageBitmap | null>(null);
  const [sizes, setSizes] = useState<IcoSize[]>(PRESETS[0].sizes);
  const [fit, setFit] = useState<IcoFit>("contain");
  const [white, setWhite] = useState(false);
  const [isWorking, setIsWorking] = useState(false);
  const [last, setLast] = useState<number | null>(null);

  useEffect(() => () => { if (source && "close" in source) source.close(); }, [source]);

  const onFiles = useCallback(async (incoming: FileList | File[]) => {
    const f = Array.from(incoming).find((x) => x.type.startsWith("image/") || isSvgFile(x));
    if (!f) { toast.error(t("Please select an image.")); return; }
    try {
      let src: HTMLCanvasElement | ImageBitmap;
      if (isSvgFile(f)) {
        const svg = await readSvg(f);
        const s = svgOutputSize(svg, { scale: SVG_SOURCE_SIDE / Math.max(svg.width, svg.height) });
        src = await rasterizeSvg(svg, s.w, s.h);
      } else {
        src = await decodeBitmap(f, true);
      }
      setFile(f); setSource(src); setLast(null);
    } catch (err) {
      toast.error(translateError(err, t, "Could not read this image."));
    }
  }, [t]);

  useHandoff(onFiles);

  const reset = () => { setFile(null); setSource(null); setLast(null); };

  const rendered = useMemo(
    () => (source ? [...sizes].sort((a, b) => a - b).map((s) => squareAt(source, s, fit, white ? "#ffffff" : undefined)) : []),
    [source, sizes, fit, white],
  );

  const toggle = (s: IcoSize) =>
    setSizes((cur) => (cur.includes(s) ? (cur.length > 1 ? cur.filter((x) => x !== s) : cur) : [...cur, s]));

  const download = async () => {
    if (!file || !rendered.length) return;
    setIsWorking(true);
    try {
      const blob = await encodeIco(rendered);
      downloadBlob(blob, `${baseName(file.name)}.ico`);
      setLast(blob.size);
    } catch (err) {
      toast.error(translateError(err, t, "Processing failed."));
    } finally {
      setIsWorking(false);
    }
  };

  if (!file || !source) {
    return (
      <section>
        <Dropzone onFiles={onFiles} accept={ACCEPT} accent={ACCENT} icon="apps" multiple={false} camera={false} buttonLabel={t("Select an image")} hint={t("or drop a PNG, JPG, WEBP or SVG image here")} />
      </section>
    );
  }

  const square = Math.abs(source.width - source.height) <= 1;
  const segBtn = (active: boolean) =>
    `rounded-md px-2 py-1.5 text-label-md font-semibold ${active ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant"}`;
  const presetActive = (p: IcoSize[]) => p.length === sizes.length && p.every((s) => sizes.includes(s));

  return (
    <>
      <TopLoadingBar active={isWorking} />
      <ToolWorkspace
        mobile={{
          ...filesHeader([file]),
          onBack: reset,
          backLabel: t("Clear image"),
          settingsTitle: t("Icon settings"),
          cta: { icon: "download", label: t("Download ICO"), busyLabel: t("Saving…"), busy: isWorking, onClick: download },
        }}
        main={
          <div className="flex flex-col gap-3">
            <div className="rounded-xl border border-surface-variant bg-surface-container p-4 flex flex-wrap items-end justify-center gap-4" style={{ minHeight: 220 }}>
              {rendered.map((c) => <SizeTile key={c.width} canvas={c} label={`${c.width} × ${c.height}`} />)}
            </div>
            <div className="flex items-center justify-between gap-2">
              <p className="text-label-sm font-label-sm text-on-surface-variant">
                {t("Shown at actual size")}
                {last ? ` · ${t("Last download: {size}", { size: formatBytes(last) })}` : ""}
              </p>
              <button type="button" onClick={reset} className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap text-label-md font-medium text-on-surface-variant hover:text-error">
                <Icon name="close" className="text-[18px]" /> {t("Change image")}
              </button>
            </div>
            {Math.max(source.width, source.height) < Math.max(...sizes) && (
              <p className="text-label-sm font-label-sm text-on-surface-variant/80">
                {t("Your image is smaller than the largest icon size, so that size is enlarged and will look soft.")}
              </p>
            )}
          </div>
        }
        rail={
          <SettingsRail
            title={t("Icon settings")}
            icon="apps"
            accent={ACCENT}
            footer={
              <>
                <RailNote>{t("Your image is converted in your browser and never uploaded.")}</RailNote>
                <RailAction onClick={download} busy={isWorking} busyLabel={t("Saving…")} icon="download">
                  {t("Download ICO")}
                </RailAction>
              </>
            }
          >
            <div className="flex flex-col gap-1.5">
              <span className="text-label-sm font-label-sm text-on-surface-variant">{t("Icon sizes")}</span>
              <div className="flex flex-wrap gap-1.5">
                {PRESETS.map((p) => (
                  <button key={p.id} type="button" onClick={() => setSizes(p.sizes)}
                    className={`rounded-full border px-2.5 py-1 text-label-sm font-semibold transition-colors ${presetActive(p.sizes) ? "border-secondary bg-secondary/10 text-secondary" : "border-outline-variant/60 text-on-surface-variant hover:border-secondary hover:text-secondary"}`}>
                    {t(p.label)}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-4 gap-x-2 gap-y-1.5 pt-1">
                {ICO_SIZES.map((s) => (
                  <label key={s} className="flex items-center gap-1.5 cursor-pointer text-body-md text-on-surface tabular-nums">
                    <input type="checkbox" checked={sizes.includes(s)} onChange={() => toggle(s)} className="w-4 h-4 accent-secondary" />
                    {s}
                  </label>
                ))}
              </div>
              <p className="text-label-sm font-label-sm text-on-surface-variant/70">
                {t("Sizes in pixels. A favicon needs 16, 32 and 48; Windows uses up to 256.")}
              </p>
            </div>
            {!square && (
              <div className="flex flex-col gap-1.5">
                <span className="text-label-sm font-label-sm text-on-surface-variant">{t("Shape")}</span>
                <div role="radiogroup" aria-label={t("Shape")} className="grid grid-cols-2 gap-1 rounded-lg bg-surface-container p-1">
                  <button type="button" role="radio" aria-checked={fit === "contain"} onClick={() => setFit("contain")} className={segBtn(fit === "contain")}>{t("Fit whole image")}</button>
                  <button type="button" role="radio" aria-checked={fit === "cover"} onClick={() => setFit("cover")} className={segBtn(fit === "cover")}>{t("Crop to square")}</button>
                </div>
                <p className="text-label-sm font-label-sm text-on-surface-variant/70">
                  {t("Icons are square. Fit keeps everything and fills the sides; crop trims the longer side.")}
                </p>
              </div>
            )}
            <label className="flex items-center gap-2.5 cursor-pointer">
              <input type="checkbox" checked={white} onChange={(e) => setWhite(e.target.checked)} className="w-4 h-4 accent-secondary" />
              <span className="text-body-md text-on-surface">{t("White background instead of transparent")}</span>
            </label>
          </SettingsRail>
        }
      />
    </>
  );
}

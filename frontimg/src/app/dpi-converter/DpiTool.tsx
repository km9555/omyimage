"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { ToolWorkspace, filesHeader } from "@/components/tool/ToolWorkspace";
import { FileTray, TrayAction, TrayIconButton, type TrayEntry } from "@/components/tool/FileTray";
import { SettingsRail, RailAction, RailSecondaryAction, RailNote } from "@/components/tool/SettingsRail";
import { baseName, canvasToBlob, decodeBitmap, downloadBlob, imageSize, zipAndDownload } from "@/lib/image/raster";
import { canStoreDpi, readDpi, setDpi, type DpiInfo } from "@/lib/image/dpi";
import { stashFiles, useHandoff } from "@/lib/tool-handoff";
import { toolHref } from "@/lib/i18n/links";
import { useFormatBytes, useLocale, useT } from "@/i18n/I18nScope";
import { translateError } from "@/i18n/errors";

const ACCENT = "#5B7FA6";
const ACCEPT = "image/jpeg,image/png,image/webp,image/gif,image/bmp";
const DPI_PRESETS = [72, 96, 150, 200, 300, 600];
/** The print resolution photo labs and most print guides work to. */
const PRINT_DPI = 300;

type Item = {
  id: string;
  file: File;
  url: string;
  w?: number;
  h?: number;
  /** undefined = still reading; null = a format readDpi cannot parse. */
  dpi?: DpiInfo | null;
  result?: { blob: Blob; name: string; dpi: number };
};

let counter = 0;
const uid = () => `d${Date.now()}_${counter++}`;

/** Source → the sentence the results panel shows. Module scope, translated at render. */
const SOURCE_LABEL: Record<DpiInfo["source"], string> = {
  jfif: "Stored in the JFIF header",
  exif: "Stored in the EXIF data",
  png: "Stored in the PNG pHYs chunk",
  bmp: "Stored in the BMP header",
  aspect: "Only an aspect ratio is stored, not a DPI",
  none: "No DPI stored",
};

/**
 * DPI converter (`mode="convert"`) and DPI checker (`mode="check"`).
 *
 * Converting rewrites only the density field (lib/image/dpi.ts) — the pixels
 * are byte-for-byte the same. WEBP, GIF and BMP cannot hold a DPI a browser
 * can write, so those are converted to PNG (lossless) first. The checker reads
 * the same field and turns it into print sizes; its CTA hands the files to the
 * converter.
 */
export function DpiTool({ mode }: { mode: "convert" | "check" }) {
  const t = useT();
  const locale = useLocale();
  const router = useRouter();
  const formatBytes = useFormatBytes();
  const [items, setItems] = useState<Item[]>([]);
  const [dpiStr, setDpiStr] = useState(String(PRINT_DPI));
  const [isWorking, setIsWorking] = useState(false);
  const [done, setDone] = useState(false);

  const itemsRef = useRef<Item[]>([]);
  useEffect(() => { itemsRef.current = items; }, [items]);
  useEffect(() => () => { itemsRef.current.forEach((i) => URL.revokeObjectURL(i.url)); }, []);

  const cm = useMemo(() => new Intl.NumberFormat(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 }), [locale]);
  const inch = useMemo(() => new Intl.NumberFormat(locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 }), [locale]);
  const printSize = (w: number, h: number, dpi: number) =>
    t("{w} × {h} cm ({wi} × {hi} in)", {
      w: cm.format((w / dpi) * 2.54), h: cm.format((h / dpi) * 2.54),
      wi: inch.format(w / dpi), hi: inch.format(h / dpi),
    });
  const dpiLabel = (d: DpiInfo) =>
    d.x === d.y ? t("{dpi} DPI", { dpi: d.x ?? 0 }) : t("{x} × {y} DPI", { x: d.x ?? 0, y: d.y ?? 0 });

  const addFiles = useCallback((incoming: FileList | File[]) => {
    const imgs = Array.from(incoming).filter((f) => f.type.startsWith("image/"));
    if (imgs.length === 0) { toast.error(t("Please select image files.")); return; }
    setDone(false);
    const next: Item[] = imgs.map((file) => ({ id: uid(), file, url: URL.createObjectURL(file) }));
    setItems((prev) => [...prev, ...next]);
    next.forEach(async (it) => {
      const [size, dpi] = await Promise.all([
        imageSize(it.file).catch(() => null),
        readDpi(it.file).catch(() => null),
      ]);
      setItems((prev) => prev.map((p) => (p.id === it.id ? { ...p, w: size?.w, h: size?.h, dpi } : p)));
    });
  }, [t]);

  useHandoff(addFiles);

  const removeItem = (id: string) => setItems((prev) => {
    const it = prev.find((p) => p.id === id);
    if (it) URL.revokeObjectURL(it.url);
    return prev.filter((p) => p.id !== id);
  });

  const reset = () => {
    items.forEach((i) => URL.revokeObjectURL(i.url));
    setItems([]);
    setDone(false);
  };

  const dpi = Math.max(1, Math.min(4800, parseInt(dpiStr, 10) || 0));
  const dpiValid = (parseInt(dpiStr, 10) || 0) >= 1;
  const first = items[0];
  const anyConverted = items.some((it) => !/^image\/(jpeg|png)$/.test(it.file.type));

  const convertAll = async () => {
    if (!items.length) return;
    if (!dpiValid) { toast.error(t("Enter a DPI of at least 1.")); return; }
    setIsWorking(true);
    try {
      const out: Item[] = [];
      for (const it of items) {
        let blob: Blob;
        let ext: string;
        if (await canStoreDpi(it.file)) {
          blob = await setDpi(it.file, dpi);
          ext = it.file.type === "image/png" ? "png" : "jpg";
        } else {
          // WEBP / GIF / BMP: decode once into a lossless PNG, then label it.
          const bmp = await decodeBitmap(it.file, true);
          try {
            const canvas = document.createElement("canvas");
            canvas.width = bmp.width;
            canvas.height = bmp.height;
            canvas.getContext("2d")!.drawImage(bmp, 0, 0);
            blob = await setDpi(await canvasToBlob(canvas, "image/png"), dpi);
          } finally {
            bmp.close();
          }
          ext = "png";
        }
        out.push({ ...it, result: { blob, name: `${baseName(it.file.name)}_${dpi}dpi.${ext}`, dpi } });
      }
      setItems(out);
      setDone(true);
      if (out.length === 1) downloadBlob(out[0].result!.blob, out[0].result!.name);
      else await zipAndDownload(out.map((o) => ({ name: o.result!.name, blob: o.result!.blob })), "omyimage_dpi.zip");
      toast.success(out.length === 1 ? t("Changed the DPI of 1 image.") : t("Changed the DPI of {n} images.", { n: out.length }));
    } catch (err) {
      toast.error(translateError(err, t, "Processing failed."));
    } finally {
      setIsWorking(false);
    }
  };

  const openConverter = () => {
    stashFiles(items.map((i) => i.file));
    router.push(toolHref("dpi-converter", locale));
  };

  if (items.length === 0) {
    return (
      <section>
        <Dropzone
          onFiles={addFiles}
          accept={ACCEPT}
          accent={ACCENT}
          icon={mode === "check" ? "info" : "high_quality"}
          camera={false}
          hint={t("or drop JPG, PNG, WEBP, GIF or BMP images here")}
        />
      </section>
    );
  }

  const fieldCls = "w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";
  const chipCls = (on: boolean) =>
    `rounded-full border px-2.5 py-1 text-label-sm font-semibold tabular-nums transition-colors ${on ? "border-secondary bg-secondary/10 text-secondary" : "border-outline-variant/60 text-on-surface-variant hover:border-secondary hover:text-secondary"}`;

  const entries: TrayEntry[] = items.map((it) => {
    const known = it.dpi && it.dpi.x && it.dpi.y ? it.dpi : null;
    const current = it.dpi === undefined ? "…" : known ? dpiLabel(known) : t("No DPI");
    return {
      id: it.id,
      name: it.file.name,
      url: it.url,
      meta: (
        <>
          {/* i18n-raw: dimensions, not copy */}
          {it.w && it.h ? `${it.w} × ${it.h} px` : "…"} · {formatBytes(it.file.size)} · {current}
          {it.result && (
            <>
              <Icon name="arrow_forward" className="text-[13px] mx-1 align-middle" />
              <span className="text-on-surface font-semibold">{t("{dpi} DPI", { dpi: it.result.dpi })}</span>
            </>
          )}
        </>
      ),
      action: it.result ? (
        <TrayAction icon="download" tone="accent" label={t("Download")} onClick={() => downloadBlob(it.result!.blob, it.result!.name)} />
      ) : undefined,
      toolbar: it.result ? undefined : (
        <TrayIconButton icon="close" label={t("Remove")} tone="danger" disabled={isWorking} onClick={() => removeItem(it.id)} />
      ),
      controls: mode === "check" && it.dpi !== undefined ? (
        <dl className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-0.5 rounded-lg bg-surface-container px-2.5 py-2 text-label-sm font-label-sm">
          <dt className="text-on-surface-variant">{t("DPI")}</dt>
          <dd className="font-semibold text-secondary">{known ? dpiLabel(known) : t("Not set")}</dd>
          <dt className="text-on-surface-variant">{t("Where")}</dt>
          <dd className="text-on-surface">{it.dpi ? t(SOURCE_LABEL[it.dpi.source]) : t("This format can't be read for DPI")}</dd>
          {known && it.w && it.h && (
            <>
              <dt className="text-on-surface-variant">{t("Print size")}</dt>
              <dd className="text-on-surface">{printSize(it.w, it.h, known.x!)}</dd>
            </>
          )}
          {it.w && it.h && (
            <>
              <dt className="text-on-surface-variant">{t("Sharp at 300 DPI")}</dt>
              <dd className="text-on-surface">{printSize(it.w, it.h, PRINT_DPI)}</dd>
            </>
          )}
          {!known && <dd className="col-span-2 text-on-surface-variant/80">{t("Most programs then assume 72 or 96 DPI.")}</dd>}
        </dl>
      ) : undefined,
    };
  });

  const checkCta = { icon: "high_quality", label: t("Change DPI"), busyLabel: t("Change DPI"), busy: false, onClick: openConverter };
  const convertCta = {
    icon: "high_quality",
    label: items.length > 1 ? t("Change DPI of {n} images", { n: items.length }) : t("Change DPI"),
    busyLabel: t("Saving…"),
    busy: isWorking,
    onClick: convertAll,
  };

  return (
    <>
      <TopLoadingBar active={isWorking} />
      <ToolWorkspace
        mobile={{
          ...filesHeader(items.map((i) => i.file)),
          onBack: reset,
          backLabel: t("Clear files"),
          settingsTitle: mode === "check" ? t("DPI check") : t("DPI settings"),
          cta: mode === "check" ? checkCta : convertCta,
        }}
        main={<FileTray entries={entries} accept={ACCEPT} onFiles={addFiles} onClear={reset} busy={isWorking} />}
        rail={
          <SettingsRail
            title={mode === "check" ? t("DPI check") : t("DPI settings")}
            icon={mode === "check" ? "info" : "high_quality"}
            accent={ACCENT}
            footer={
              mode === "check" ? (
                <>
                  <RailNote>{t("Your images are read in your browser and never uploaded.")}</RailNote>
                  <RailAction onClick={openConverter} icon="high_quality">{t("Change DPI")}</RailAction>
                </>
              ) : (
                <>
                  <RailNote>
                    {first?.w && first?.h && dpiValid
                      ? t("First image prints at {size}", { size: printSize(first.w, first.h, dpi) })
                      : t("Your images are changed in your browser and never uploaded.")}
                  </RailNote>
                  <RailAction onClick={convertAll} busy={isWorking} busyLabel={t("Saving…")} icon="high_quality">
                    {convertCta.label}
                  </RailAction>
                  {done && items.length > 1 && (
                    <RailSecondaryAction
                      icon="folder_zip"
                      onClick={() => zipAndDownload(items.filter((i) => i.result).map((i) => ({ name: i.result!.name, blob: i.result!.blob })), "omyimage_dpi.zip")}
                    >
                      {t("Download all (ZIP)")}
                    </RailSecondaryAction>
                  )}
                </>
              )
            }
          >
            {mode === "check" ? (
              <div className="flex flex-col gap-2 text-body-md text-on-surface">
                <p>{t("DPI only tells a printer how large to print the pixels. It never changes the pixels themselves.")}</p>
                <p className="text-label-sm font-label-sm text-on-surface-variant">
                  {t("For a sharp print, divide the pixels by 300: that is the largest size in inches that prints at photo quality.")}
                </p>
              </div>
            ) : (
              <>
                <div className="flex flex-col gap-1.5">
                  <span className="text-label-sm font-label-sm text-on-surface-variant">{t("New DPI")}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {DPI_PRESETS.map((d) => (
                      <button key={d} type="button" onClick={() => setDpiStr(String(d))} className={chipCls(dpiValid && dpi === d)}>
                        {d}
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="number" min={1} max={4800} value={dpiStr} onChange={(e) => setDpiStr(e.target.value)} aria-label={t("New DPI")} className={`${fieldCls.replace("w-full", "w-28")} tabular-nums`} />
                    <span className="text-body-md text-on-surface-variant">{t("DPI")}</span>
                  </div>
                </div>
                <p className="text-label-sm font-label-sm text-on-surface-variant/80">
                  {t("Only the DPI label changes — the pixels and quality stay exactly the same.")}
                </p>
                {anyConverted && (
                  <p className="text-label-sm font-label-sm text-on-surface-variant/80">
                    {t("WEBP, GIF and BMP files are saved as PNG, because only JPG and PNG can store a DPI.")}
                  </p>
                )}
              </>
            )}
          </SettingsRail>
        }
      />
    </>
  );
}

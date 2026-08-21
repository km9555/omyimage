"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { HelpTip } from "@/components/HelpTip";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { ToolWorkspace, filesHeader } from "@/components/tool/ToolWorkspace";
import { FileTray, TrayAction, type TrayEntry } from "@/components/tool/FileTray";
import { SettingsRail, RailAction, RailSecondaryAction } from "@/components/tool/SettingsRail";
import { BackgroundPicker, resolveBg, type BgValue } from "@/components/BackgroundPicker";
import { RegionEditor } from "@/components/image/RegionEditor";
import {
  decodeBitmap, canvasToBlob, downloadBlob, zipAndDownload, formatBytes, baseName, mimeExt, type ExportMime,
} from "@/lib/image/raster";
import { renderRedacted, type RedactStyle, type Region, type RegionShape } from "@/lib/image/redact";
import { useHandoff } from "@/lib/tool-handoff";

const ACCENT = "#3E8CA6";
const ACCEPT = "image/jpeg,image/png,image/webp";

type Format = "original" | ExportMime;
type Mode = "whole" | "selective";
type Item = { id: string; file: File; url: string; result?: { blob: Blob; size: number; name: string } };

const FORMATS: { label: string; value: Format }[] = [
  { label: "Same as original", value: "original" },
  { label: "JPG", value: "image/jpeg" },
  { label: "PNG", value: "image/png" },
  { label: "WEBP", value: "image/webp" },
];

const STYLES: { value: RedactStyle; label: string }[] = [
  { value: "blur", label: "Blur" },
  { value: "pixelate", label: "Pixelate" },
  { value: "solid", label: "Solid" },
];

let counter = 0;
const uid = () => `f${Date.now()}_${counter++}`;

function outMimeFor(file: File, fmt: Format): ExportMime {
  if (fmt !== "original") return fmt;
  const t = file.type;
  return t === "image/jpeg" || t === "image/webp" || t === "image/png" ? (t as ExportMime) : "image/png";
}

/**
 * A full-image region, used when the tool is in "whole image" mode so both
 * modes share one rendering path in `renderRedacted`.
 */
const WHOLE: Region[] = [{ id: "whole", shape: "rect", x: 0, y: 0, w: 1, h: 1 }];

export function BlurImageTool() {
  const [items, setItems] = useState<Item[]>([]);
  const [mode, setMode] = useState<Mode>("whole");
  const [style, setStyle] = useState<RedactStyle>("blur");
  const [radius, setRadius] = useState(8);
  const [regions, setRegions] = useState<Region[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [shape, setShape] = useState<RegionShape>("rect");
  const [invert, setInvert] = useState(false);
  const [format, setFormat] = useState<Format>("original");
  const [quality, setQuality] = useState(0.92);
  const [bg, setBg] = useState<BgValue>({ transparent: false, color: "#ffffff" });
  const [isWorking, setIsWorking] = useState(false);
  const [done, setDone] = useState(false);
  const [bmpTick, setBmpTick] = useState(0);

  const previewRef = useRef<HTMLCanvasElement>(null);
  const firstBmp = useRef<ImageBitmap | null>(null);

  /*
    Revoke preview URLs on UNMOUNT only. This effect used to depend on `items`,
    so `applyAll`'s `setItems(out)` — which carries the SAME url strings —
    revoked the URLs the very next render still displays in the tray. Identical
    bug and fix to ConvertTool.tsx:97-112.
  */
  const itemsRef = useRef<Item[]>([]);
  useEffect(() => { itemsRef.current = items; }, [items]);
  useEffect(() => () => { itemsRef.current.forEach((i) => URL.revokeObjectURL(i.url)); }, []);
  useEffect(() => () => { firstBmp.current?.close(); firstBmp.current = null; }, []);

  const first = items[0];

  /*
    Decode the previewed image ONCE per file.

    This effect used to list `repaint` in its dependencies, and `repaint` was
    memoised on the blur radius — so every tick of the strength slider called
    decodeBitmap() again and allocated a fresh ImageBitmap. Keying on the file
    id alone fixes it.
  */
  useEffect(() => {
    let alive = true;
    if (!first) {
      firstBmp.current?.close();
      firstBmp.current = null;
      setBmpTick((n) => n + 1);
      return;
    }
    decodeBitmap(first.file)
      .then((b) => {
        if (!alive) { b.close(); return; }
        firstBmp.current?.close();
        firstBmp.current = b;
        setBmpTick((n) => n + 1);
      })
      .catch(() => { if (alive) toast.error("Couldn't read that image."); });
    return () => { alive = false; };
  }, [first?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  const activeBmp = useMemo(() => { void bmpTick; return firstBmp.current; }, [bmpTick]);
  const effRegions = mode === "whole" ? WHOLE : regions;
  const effInvert = mode === "selective" && invert;

  // Whole-image preview. Selective mode renders through RegionEditor instead.
  useEffect(() => {
    if (mode !== "whole") return;
    const canvas = previewRef.current;
    const bmp = activeBmp;
    if (!canvas || !bmp) return;
    renderRedacted(canvas, bmp, WHOLE, { style, strength: radius, solidColor: resolveBg(bg) ?? "#000000" });
  }, [mode, activeBmp, style, radius, bg]);

  const addFiles = useCallback((incoming: FileList | File[]) => {
    const imgs = Array.from(incoming).filter((f) => f.type.startsWith("image/"));
    if (imgs.length === 0) { toast.error("Please select image files."); return; }
    setDone(false);
    setItems((prev) => [...prev, ...imgs.map((file) => ({ id: uid(), file, url: URL.createObjectURL(file) }))]);
  }, []);

  useHandoff(addFiles);

  const removeItem = (id: string) => setItems((prev) => {
    const it = prev.find((p) => p.id === id);
    if (it) URL.revokeObjectURL(it.url);
    return prev.filter((p) => p.id !== id);
  });
  const reset = () => { items.forEach((i) => URL.revokeObjectURL(i.url)); setItems([]); setDone(false); setRegions([]); };

  const needsJpegBg = items.some((i) => outMimeFor(i.file, format) === "image/jpeg");

  const applyAll = async () => {
    if (items.length === 0) return;
    if (mode === "selective" && regions.length === 0) {
      toast.error("Draw at least one area, or switch to Whole image.");
      return;
    }
    setIsWorking(true);
    try {
      const canvas = document.createElement("canvas");
      const out: Item[] = [];
      for (const it of items) {
        const mime = outMimeFor(it.file, format);
        const bmp = await decodeBitmap(it.file);
        try {
          renderRedacted(canvas, bmp, effRegions, {
            style,
            strength: radius,
            solidColor: resolveBg(bg) ?? "#000000",
            invert: effInvert,
            background: mime === "image/jpeg" ? resolveBg(bg) ?? "#ffffff" : null,
          });
        } finally {
          bmp.close();
        }
        const blob = await canvasToBlob(canvas, mime, quality);
        out.push({ ...it, result: { blob, size: blob.size, name: `${baseName(it.file.name)}_blurred.${mimeExt(mime)}` } });
      }
      setItems(out);
      setDone(true);
      if (out.length === 1 && out[0].result) downloadBlob(out[0].result.blob, out[0].result.name);
      else await zipAndDownload(out.map((o) => ({ name: o.result!.name, blob: o.result!.blob })), "omyimage_blurred.zip");
      toast.success(`Blurred ${out.length} image${out.length === 1 ? "" : "s"}.`);
    } catch (err) {
      console.error(err);
      toast.error(err instanceof Error ? err.message : "Blur failed.");
    } finally {
      setIsWorking(false);
    }
  };

  const fieldCls = "w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";
  const seg = (on: boolean) =>
    `rounded-md px-2 py-2 text-label-sm font-label-sm font-semibold transition-colors ${
      on ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant hover:text-primary"
    }`;

  if (items.length === 0) {
    return (
      <section>
        <TopLoadingBar active={isWorking} />
        <Dropzone onFiles={addFiles} accept={ACCEPT} accent={ACCENT} icon="lens_blur" hint="or drop JPG, PNG or WEBP images here" />
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
        {it.result && <><Icon name="check" className="text-[13px] mx-1 align-middle" style={{ color: ACCENT }} />done · {formatBytes(it.result.size)}</>}
      </>
    ),
    action: it.result ? (
      <TrayAction icon="download" tone="accent" label="Download" onClick={() => downloadBlob(it.result!.blob, it.result!.name)} />
    ) : (
      <TrayAction icon="close" label="Remove" disabled={isWorking} onClick={() => removeItem(it.id)} />
    ),
  }));

  /*
    Named so the mobile shell can show the canvas without the tray beneath
    it. The preview surface claims touch gestures, so anything stacked under
    it on a phone cannot be scrolled to — the tray gets its own tab instead.
  */
  const canvasPane = (
    <>
        <div className="bg-surface-container rounded-xl border border-surface-variant p-4 flex items-center justify-center overflow-hidden" style={{ minHeight: 260 }}>
          {mode === "whole" ? (
            <canvas ref={previewRef} className="max-w-full max-h-[46dvh] rounded" />
          ) : (
            <RegionEditor
              bitmap={activeBmp}
              regions={regions}
              onChange={(next) => { setRegions(next); setDone(false); }}
              selectedId={selectedRegion}
              onSelect={setSelectedRegion}
              style={style}
              strength={radius}
              solidColor={resolveBg(bg) ?? "#000000"}
              invert={invert}
              shape={shape}
              accent={ACCENT}
              disabled={isWorking}
            />
          )}
        </div>
        <p className="text-center text-label-sm font-label-sm text-on-surface-variant">
          {mode === "whole" ? (
            <>Live preview of <span className="font-semibold text-on-surface">{items[0].file.name}</span>{items.length > 1 && <> — applied to all {items.length} images.</>}</>
          ) : (
            <>Drag to draw an area, click one to select, drag its handles to resize, Delete to remove.{regions.length > 0 && <span className="font-semibold text-on-surface"> {regions.length} area{regions.length === 1 ? "" : "s"}.</span>}</>
          )}
        </p>
    </>
  );

  const tray = (
    <>
        <FileTray entries={entries} accept={ACCEPT} onFiles={addFiles} onClear={reset} busy={isWorking} />
    </>
  );

  return (
    <>
      <TopLoadingBar active={isWorking} />
      <ToolWorkspace
        /* Below `md` the preview becomes the whole body and the file list
           moves into its own tab — see `body` on ToolMobileShell. */
        mobile={{
          ...filesHeader(items.map((i) => i.file)),
          onBack: reset,
          backLabel: "Clear images",
          body: canvasPane,
          tabs: [
            {
              id: "files",
              icon: "photo_library",
              label: "Files",
              badge: items.length > 1 ? items.length : undefined,
              sheetTitle: `${items.length} image${items.length === 1 ? "" : "s"}`,
              sheet: tray,
            },
          ],
          settingsTitle: "Blur settings",
          cta: {
            icon: "lens_blur",
            label: "Blur",
            busyLabel: "Blurring…",
            busy: isWorking,
            onClick: applyAll,
          },
        }}
        main={
          <>
            {canvasPane}
            {tray}
          </>
        }
        rail={
          <SettingsRail
            title="Blur Settings"
            icon="lens_blur"
            accent={ACCENT}
            footer={
              <>
                <RailAction onClick={applyAll} busy={isWorking} busyLabel="Blurring…" icon="lens_blur">
                  {items.length > 1 ? `Blur ${items.length} images` : "Blur & download"}
                </RailAction>
                {done && items.length > 1 && (
                  <RailSecondaryAction
                    icon="folder_zip"
                    onClick={() => zipAndDownload(items.filter((i) => i.result).map((i) => ({ name: i.result!.name, blob: i.result!.blob })), "omyimage_blurred.zip")}
                  >
                    Download all (ZIP)
                  </RailSecondaryAction>
                )}
              </>
            }
          >
            <div className="flex flex-col gap-1.5">
              <span className="flex items-center gap-1.5 text-label-sm font-label-sm text-on-surface-variant">
                What to blur
                <HelpTip text="Whole image softens everything. Selective blurs only the areas you draw — or everything except them, with Invert on." />
              </span>
              <div className="grid grid-cols-2 gap-1 rounded-lg bg-surface-container p-1">
                <button type="button" onClick={() => setMode("whole")} className={seg(mode === "whole")}>Whole image</button>
                <button type="button" onClick={() => setMode("selective")} className={seg(mode === "selective")}>Selective</button>
              </div>
            </div>

            {mode === "selective" && (
              <>
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input type="checkbox" checked={invert} onChange={(e) => setInvert(e.target.checked)} className="w-4 h-4 accent-secondary" />
                  <span className="text-body-md text-on-surface">Blur everything <em>except</em> these areas</span>
                </label>
                <div className="flex flex-col gap-1.5">
                  <span className="text-label-sm font-label-sm text-on-surface-variant">New area shape</span>
                  <div className="grid grid-cols-2 gap-1 rounded-lg bg-surface-container p-1">
                    {(["rect", "ellipse"] as RegionShape[]).map((s) => (
                      <button key={s} type="button" onClick={() => setShape(s)} className={seg(shape === s)}>{s === "ellipse" ? "Ellipse" : "Rectangle"}</button>
                    ))}
                  </div>
                </div>
                <RailSecondaryAction icon="delete_sweep" onClick={() => { setRegions([]); setSelectedRegion(null); }}>Clear areas</RailSecondaryAction>
              </>
            )}

            <div className="flex flex-col gap-1.5">
              <span className="text-label-sm font-label-sm text-on-surface-variant">Effect</span>
              <div className="grid grid-cols-3 gap-1 rounded-lg bg-surface-container p-1">
                {STYLES.map((s) => (
                  <button key={s.value} type="button" onClick={() => setStyle(s.value)} className={seg(style === s.value)}>{s.label}</button>
                ))}
              </div>
            </div>

            {style !== "solid" && (
              <div className="flex flex-col gap-1.5">
                <label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
                  <span>{style === "blur" ? "Blur strength" : "Pixel size"}</span>
                  <span className="text-primary font-semibold">{radius}px</span>
                </label>
                <input type="range" min={1} max={50} step={1} value={radius} onChange={(e) => setRadius(parseInt(e.target.value, 10))} className="w-full accent-secondary" />
              </div>
            )}

            <div className="flex flex-col gap-1.5">
              <label className="text-label-sm font-label-sm text-on-surface-variant">Output format</label>
              <select value={format} onChange={(e) => setFormat(e.target.value as Format)} className={fieldCls}>
                {FORMATS.map((f) => <option key={f.value} value={f.value}>{f.label}</option>)}
              </select>
            </div>

            {format !== "image/png" && (
              <div className="flex flex-col gap-1.5">
                <label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
                  <span>Quality</span><span className="text-primary font-semibold">{Math.round(quality * 100)}%</span>
                </label>
                <input type="range" min={0.5} max={1} step={0.01} value={quality} onChange={(e) => setQuality(parseFloat(e.target.value))} className="w-full accent-secondary" />
              </div>
            )}

            {(needsJpegBg || style === "solid") && (
              <BackgroundPicker
                value={bg}
                onChange={setBg}
                allowTransparent={false}
                label={style === "solid" ? "Fill colour" : "JPG background"}
              />
            )}
          </SettingsRail>
        }
      />
    </>
  );
}

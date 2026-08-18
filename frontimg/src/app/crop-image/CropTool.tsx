"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { HelpTip } from "@/components/HelpTip";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { CropCanvas } from "@/components/image/CropCanvas";
import { ToolWorkspace } from "@/components/tool/ToolWorkspace";
import { FileTray, TrayAction, type TrayEntry } from "@/components/tool/FileTray";
import { SettingsRail, RailAction, RailSecondaryAction, RailNote } from "@/components/tool/SettingsRail";
import { BackgroundPicker, resolveBg, type BgValue } from "@/components/BackgroundPicker";
import {
  decodeBitmap, canvasToBlob, downloadBlob, zipAndDownload, formatBytes, baseName, mimeExt, type ExportMime,
} from "@/lib/image/raster";
import {
  applyAspect, centeredCrop, clampCrop, outputSize, renderCrop, transformedSize,
  NO_TRANSFORM, type CropSel, type CropShape, type CropTransform, type OutputTarget,
} from "@/lib/image/crop";
import { useHandoff } from "@/lib/tool-handoff";

const ACCENT = "#3E9A90";
const ACCEPT = "image/jpeg,image/png,image/webp,image/gif,image/bmp";

type Format = "original" | ExportMime;
type Item = { id: string; file: File; url: string; result?: { blob: Blob; size: number; name: string } };

const FORMATS: { label: string; value: Format }[] = [
  { label: "Same as original", value: "original" },
  { label: "JPG", value: "image/jpeg" },
  { label: "PNG", value: "image/png" },
  { label: "WEBP", value: "image/webp" },
];

/** Shape presets. Square and Circle are a shape plus a 1:1 lock. */
const SHAPES: { label: string; icon: string; shape: CropShape; aspect: number | null }[] = [
  { label: "Rectangle", icon: "crop_landscape", shape: "rect", aspect: null },
  { label: "Square", icon: "crop_square", shape: "rect", aspect: 1 },
  { label: "Circle", icon: "circle", shape: "ellipse", aspect: 1 },
  { label: "Ellipse", icon: "blur_circular", shape: "ellipse", aspect: null },
  { label: "Rounded", icon: "rounded_corner", shape: "rounded", aspect: null },
];

const ASPECTS: { label: string; value: number | null }[] = [
  { label: "Free", value: null },
  { label: "1:1", value: 1 },
  { label: "4:3", value: 4 / 3 },
  { label: "3:2", value: 3 / 2 },
  { label: "16:9", value: 16 / 9 },
  { label: "3:4", value: 3 / 4 },
  { label: "4:5", value: 4 / 5 },
  { label: "9:16", value: 9 / 16 },
  { label: "4:1", value: 4 },
];

const OUTPUT_TARGETS: { label: string; value: OutputTarget }[] = [
  { label: "Original", value: "original" },
  { label: "256px", value: 256 },
  { label: "512px", value: 512 },
  { label: "1024px", value: 1024 },
];

let counter = 0;
const uid = () => `f${Date.now()}_${counter++}`;

function outMimeFor(file: File, fmt: Format): ExportMime {
  if (fmt !== "original") return fmt;
  const t = file.type;
  return t === "image/jpeg" || t === "image/webp" || t === "image/png" ? (t as ExportMime) : "image/png";
}

export function CropTool() {
  const [items, setItems] = useState<Item[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [sel, setSel] = useState<CropSel>({ x: 0.1, y: 0.1, w: 0.8, h: 0.8 });
  const [shapeIdx, setShapeIdx] = useState(0);
  const [radius, setRadius] = useState(0.15);
  const [aspect, setAspect] = useState<number | null>(null);
  const [transform, setTransform] = useState<CropTransform>(NO_TRANSFORM);
  const [zoom, setZoom] = useState(1);
  const [target, setTarget] = useState<OutputTarget>("original");
  const [format, setFormat] = useState<Format>("original");
  const [quality, setQuality] = useState(0.92);
  const [bg, setBg] = useState<BgValue>({ transparent: true, color: "#ffffff" });
  const [isWorking, setIsWorking] = useState(false);
  const [done, setDone] = useState(false);
  const [bmpTick, setBmpTick] = useState(0);

  const bmps = useRef<Map<string, ImageBitmap>>(new Map());

  /*
    Revoke preview URLs on UNMOUNT only — the ref-mirror pattern from
    ConvertTool.tsx:97-112, so a second batch cannot revoke the first batch's
    thumbnails.
  */
  const itemsRef = useRef<Item[]>([]);
  useEffect(() => { itemsRef.current = items; }, [items]);
  useEffect(() => () => { itemsRef.current.forEach((i) => URL.revokeObjectURL(i.url)); }, []);
  useEffect(() => () => { bmps.current.forEach((b) => b.close()); bmps.current.clear(); }, []);

  const active = useMemo(() => items.find((i) => i.id === activeId) ?? items[0] ?? null, [items, activeId]);

  /*
    Decode each file exactly once, with EXIF orientation applied.

    The old tool used a plain <img> and never read the orientation tag, so a
    phone photo was displayed — and cropped — the wrong way up.
  */
  useEffect(() => {
    let alive = true;
    const ids = new Set(items.map((i) => i.id));
    for (const [id, b] of bmps.current) if (!ids.has(id)) { b.close(); bmps.current.delete(id); }
    const missing = items.filter((i) => !bmps.current.has(i.id));
    if (missing.length === 0) return;
    Promise.all(
      missing.map(async (it) => {
        try {
          const bmp = await decodeBitmap(it.file, true);
          if (!alive || !itemsRef.current.some((p) => p.id === it.id)) { bmp.close(); return; }
          bmps.current.set(it.id, bmp);
        } catch {
          toast.error(`Couldn't read ${it.file.name}.`);
        }
      })
    ).then(() => { if (alive) setBmpTick((n) => n + 1); });
    return () => { alive = false; };
  }, [items]);

  const activeBmp = useMemo(() => {
    void bmpTick;
    return active ? bmps.current.get(active.id) ?? null : null;
  }, [active, bmpTick]);

  const tSize = useMemo(
    () => (activeBmp ? transformedSize(activeBmp.width, activeBmp.height, transform) : { w: 0, h: 0 }),
    [activeBmp, transform]
  );

  const shapeDef = SHAPES[shapeIdx];
  const effMime = active ? outMimeFor(active.file, format) : "image/png";
  const isShaped = shapeDef.shape !== "rect";
  // JPG cannot hold the transparent corners a circle crop produces.
  const bgFill = effMime === "image/jpeg" ? resolveBg(bg) ?? "#ffffff" : bg.transparent ? null : resolveBg(bg);

  const out = useMemo(
    () => (activeBmp ? outputSize(sel, activeBmp.width, activeBmp.height, transform, target) : { w: 0, h: 0 }),
    [activeBmp, sel, transform, target]
  );

  const pickShape = (i: number) => {
    setShapeIdx(i);
    const a = SHAPES[i].aspect;
    if (a !== null) {
      setAspect(a);
      if (tSize.w) setSel((s) => applyAspect(s, a, tSize.w, tSize.h, "center"));
    }
  };

  const pickAspect = (a: number | null) => {
    setAspect(a);
    if (a !== null && tSize.w) setSel((s) => applyAspect(s, a, tSize.w, tSize.h, "center"));
  };

  /** Every numeric edit goes through applyAspect, so the lock cannot be broken. */
  const setField = (key: "x" | "y" | "w" | "h", pxValue: number) => {
    if (!tSize.w) return;
    const denom = key === "x" || key === "w" ? tSize.w : tSize.h;
    const v = Math.max(0, pxValue) / denom;
    const next = clampCrop({ ...sel, [key]: v });
    setSel(aspect == null || key === "x" || key === "y" ? next : applyAspect(next, aspect, tSize.w, tSize.h, "center"));
    setDone(false);
  };

  const selectWhole = () => {
    const whole = clampCrop({ x: 0, y: 0, w: 1, h: 1 });
    setSel(aspect == null ? whole : applyAspect(whole, aspect, tSize.w, tSize.h, "center"));
  };

  const rotate = (dir: 1 | -1) =>
    setTransform((t) => ({ ...t, rotate: (((t.rotate + dir * 90) % 360) + 360) % 360 as CropTransform["rotate"] }));

  const addFiles = useCallback((incoming: FileList | File[]) => {
    const imgs = Array.from(incoming).filter((f) => f.type.startsWith("image/"));
    if (imgs.length === 0) { toast.error("Please select image files."); return; }
    setDone(false);
    const added = imgs.map((file) => ({ id: uid(), file, url: URL.createObjectURL(file) }));
    setItems((prev) => [...prev, ...added]);
    setActiveId((cur) => cur ?? added[0].id);
  }, []);

  useHandoff(addFiles);

  // Start from a sensible centred crop once the first image is measured.
  const seeded = useRef(false);
  useEffect(() => {
    if (seeded.current || !tSize.w) return;
    seeded.current = true;
    setSel(centeredCrop(aspect, tSize.w, tSize.h));
  }, [tSize.w, tSize.h, aspect]);

  const removeItem = (id: string) => setItems((prev) => {
    const it = prev.find((p) => p.id === id);
    if (it) URL.revokeObjectURL(it.url);
    const next = prev.filter((p) => p.id !== id);
    if (activeId === id) setActiveId(next[0]?.id ?? null);
    return next;
  });
  const reset = () => {
    items.forEach((i) => URL.revokeObjectURL(i.url));
    setItems([]); setActiveId(null); setDone(false); seeded.current = false;
    setTransform(NO_TRANSFORM); setZoom(1);
  };

  const cropAll = async () => {
    if (items.length === 0) return;
    setIsWorking(true);
    try {
      const canvas = document.createElement("canvas");
      const outItems: Item[] = [];
      for (const it of items) {
        const bmp = bmps.current.get(it.id) ?? (await decodeBitmap(it.file, true));
        const mime = outMimeFor(it.file, format);
        renderCrop(canvas, bmp, sel, shapeDef.shape, transform, {
          target,
          radius,
          background: mime === "image/jpeg" ? resolveBg(bg) ?? "#ffffff" : bg.transparent ? null : resolveBg(bg),
        });
        const blob = await canvasToBlob(canvas, mime, quality);
        outItems.push({ ...it, result: { blob, size: blob.size, name: `${baseName(it.file.name)}_cropped.${mimeExt(mime)}` } });
      }
      setItems(outItems);
      setDone(true);
      if (outItems.length === 1 && outItems[0].result) downloadBlob(outItems[0].result.blob, outItems[0].result.name);
      else await zipAndDownload(outItems.map((o) => ({ name: o.result!.name, blob: o.result!.blob })), "omyimage_cropped.zip");
      toast.success(`Cropped ${outItems.length} image${outItems.length === 1 ? "" : "s"}.`);
    } catch (err) {
      console.error(err);
      toast.error(err instanceof Error ? err.message : "Crop failed.");
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
        <Dropzone onFiles={addFiles} accept={ACCEPT} accent={ACCENT} icon="crop" hint="or drop JPG, PNG, WEBP, GIF or BMP images here" />
      </section>
    );
  }

  const entries: TrayEntry[] = items.map((it) => ({
    id: it.id,
    name: it.file.name,
    url: it.url,
    badge: (
      <button
        type="button"
        onClick={() => setActiveId(it.id)}
        aria-label={`Preview ${it.file.name}`}
        aria-pressed={active?.id === it.id}
        className="grid place-items-center w-7 h-7 rounded-full shrink-0 transition-colors"
        style={{ backgroundColor: active?.id === it.id ? ACCENT : `${ACCENT}1A`, color: active?.id === it.id ? "#fff" : ACCENT }}
      >
        <Icon name={active?.id === it.id ? "visibility" : "visibility_off"} className="text-[15px]" />
      </button>
    ),
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

  const px = (v: number, dim: "w" | "h") => Math.round(v * (dim === "w" ? tSize.w : tSize.h));

  return (
    <>
      <TopLoadingBar active={isWorking} />
      <ToolWorkspace
        main={
          <>
            <div className="bg-surface-container rounded-xl border border-surface-variant p-4 flex items-center justify-center overflow-auto" style={{ minHeight: 300 }}>
              <CropCanvas
                bitmap={activeBmp}
                sel={sel}
                onChange={(s) => { setSel(s); setDone(false); }}
                shape={shapeDef.shape}
                radius={radius}
                aspect={aspect}
                transform={transform}
                zoom={zoom}
                accent={ACCENT}
                disabled={isWorking}
              />
            </div>
            <p className="text-center text-label-sm font-label-sm text-on-surface-variant">
              Drag inside the box to move it, or a handle to resize · output {out.w} × {out.h} px
              {items.length > 1 && <> — the same crop is applied to all {items.length} images</>}
            </p>
            <FileTray
              entries={entries}
              title={`${items.length} image${items.length === 1 ? "" : "s"}`}
              accept={ACCEPT}
              onFiles={addFiles}
              onClear={reset}
              busy={isWorking}
            />
          </>
        }
        rail={
          <SettingsRail
            title="Crop Settings"
            icon="crop"
            accent={ACCENT}
            footer={
              <>
                <RailNote>Output: {out.w} × {out.h} px — nothing is uploaded.</RailNote>
                <RailAction onClick={cropAll} busy={isWorking} busyLabel="Cropping…" icon="crop">
                  {items.length > 1 ? `Crop ${items.length} images` : "Crop & download"}
                </RailAction>
                {done && items.length > 1 && (
                  <RailSecondaryAction
                    icon="folder_zip"
                    onClick={() => zipAndDownload(items.filter((i) => i.result).map((i) => ({ name: i.result!.name, blob: i.result!.blob })), "omyimage_cropped.zip")}
                  >
                    Download all (ZIP)
                  </RailSecondaryAction>
                )}
              </>
            }
          >
            <div className="flex flex-col gap-1.5">
              <span className="flex items-center gap-1.5 text-label-sm font-label-sm text-on-surface-variant">
                Shape
                <HelpTip text="Circle and Ellipse cut away the corners — export as PNG or WEBP to keep them transparent. JPG has no transparency, so those corners take the background colour instead." />
              </span>
              <div className="grid grid-cols-5 gap-1 rounded-lg bg-surface-container p-1">
                {SHAPES.map((s, i) => (
                  <button
                    key={s.label}
                    type="button"
                    onClick={() => pickShape(i)}
                    title={s.label}
                    aria-label={s.label}
                    aria-pressed={shapeIdx === i}
                    className={`flex items-center justify-center rounded-md py-2 transition-colors ${
                      shapeIdx === i ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant hover:text-primary"
                    }`}
                  >
                    <Icon name={s.icon} className="text-[18px]" />
                  </button>
                ))}
              </div>
              <p className="text-label-sm font-label-sm text-on-surface-variant">{shapeDef.label}</p>
            </div>

            {shapeDef.shape === "rounded" && (
              <div className="flex flex-col gap-1.5">
                <label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
                  <span>Corner radius</span><span className="text-primary font-semibold">{Math.round(radius * 100)}%</span>
                </label>
                <input type="range" min={0} max={50} step={1} value={Math.round(radius * 100)} onChange={(e) => setRadius(parseInt(e.target.value, 10) / 100)} className="w-full accent-secondary" />
              </div>
            )}

            <div className="flex flex-col gap-1.5">
              <span className="text-label-sm font-label-sm text-on-surface-variant">Aspect ratio</span>
              <div className="grid grid-cols-3 gap-1 rounded-lg bg-surface-container p-1">
                {ASPECTS.map((a) => (
                  <button key={a.label} type="button" onClick={() => pickAspect(a.value)} className={seg(aspect === a.value)}>{a.label}</button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-label-sm font-label-sm text-on-surface-variant">Rotate &amp; flip</span>
              <div className="grid grid-cols-4 gap-1">
                <button type="button" onClick={() => rotate(-1)} title="Rotate left" aria-label="Rotate left" className="flex items-center justify-center rounded-lg border border-surface-variant py-2 text-on-surface-variant hover:text-primary transition-colors"><Icon name="rotate_90_degrees_ccw" className="text-[18px]" /></button>
                <button type="button" onClick={() => rotate(1)} title="Rotate right" aria-label="Rotate right" className="flex items-center justify-center rounded-lg border border-surface-variant py-2 text-on-surface-variant hover:text-primary transition-colors"><Icon name="rotate_90_degrees_cw" className="text-[18px]" /></button>
                <button type="button" onClick={() => setTransform((t) => ({ ...t, flipH: !t.flipH }))} title="Flip horizontally" aria-label="Flip horizontally" aria-pressed={transform.flipH} className={`flex items-center justify-center rounded-lg border py-2 transition-colors ${transform.flipH ? "border-secondary text-secondary" : "border-surface-variant text-on-surface-variant hover:text-primary"}`}><Icon name="flip" className="text-[18px]" /></button>
                <button type="button" onClick={() => setTransform((t) => ({ ...t, flipV: !t.flipV }))} title="Flip vertically" aria-label="Flip vertically" aria-pressed={transform.flipV} className={`flex items-center justify-center rounded-lg border py-2 transition-colors ${transform.flipV ? "border-secondary text-secondary" : "border-surface-variant text-on-surface-variant hover:text-primary"}`}><Icon name="flip" className="text-[18px] rotate-90" /></button>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
                <span className="flex items-center gap-1.5">Straighten <HelpTip text="Fine rotation for levelling a horizon. The image is zoomed just enough that no empty corners appear." /></span>
                <span className="text-primary font-semibold">{transform.straighten}°</span>
              </label>
              <input type="range" min={-15} max={15} step={0.5} value={transform.straighten} onChange={(e) => setTransform((t) => ({ ...t, straighten: parseFloat(e.target.value) }))} className="w-full accent-secondary" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
                <span>Zoom</span><span className="text-primary font-semibold">{zoom.toFixed(1)}x</span>
              </label>
              <input type="range" min={1} max={4} step={0.1} value={zoom} onChange={(e) => setZoom(parseFloat(e.target.value))} className="w-full accent-secondary" />
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="flex items-center gap-1.5 text-label-sm font-label-sm text-on-surface-variant">
                Selection (px)
                <HelpTip text="Exact pixel position and size of the crop on the image, after any rotation." />
              </span>
              <div className="grid grid-cols-2 gap-2">
                {([["X","x"],["Y","y"],["Width","w"],["Height","h"]] as [string, "x"|"y"|"w"|"h"][]).map(([label, key]) => (
                  <label key={key} className="flex flex-col gap-1 text-label-sm font-label-sm text-on-surface-variant">
                    {label}
                    <input
                      type="number"
                      min={0}
                      value={px(sel[key], key === "y" || key === "h" ? "h" : "w")}
                      onChange={(e) => setField(key, parseInt(e.target.value, 10) || 0)}
                      className={fieldCls}
                    />
                  </label>
                ))}
              </div>
              <RailSecondaryAction icon="select_all" onClick={selectWhole}>Select whole image</RailSecondaryAction>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-label-sm font-label-sm text-on-surface-variant">Output size</span>
              <div className="grid grid-cols-4 gap-1 rounded-lg bg-surface-container p-1">
                {OUTPUT_TARGETS.map((o) => (
                  <button key={String(o.value)} type="button" onClick={() => setTarget(o.value)} className={seg(target === o.value)}>{o.label}</button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-outline-variant/60 pt-5">
              <h3 className="text-body-lg font-bold text-primary">Output</h3>
              <select value={format} onChange={(e) => setFormat(e.target.value as Format)} className={fieldCls}>
                {FORMATS.map((f) => <option key={f.value} value={f.value}>{f.label}</option>)}
              </select>
              {effMime !== "image/png" && (
                <div className="flex flex-col gap-1.5">
                  <label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
                    <span>Quality</span><span className="text-primary font-semibold">{Math.round(quality * 100)}%</span>
                  </label>
                  <input type="range" min={0.5} max={1} step={0.01} value={quality} onChange={(e) => setQuality(parseFloat(e.target.value))} className="w-full accent-secondary" />
                </div>
              )}
              {isShaped && (
                <BackgroundPicker
                  value={bg}
                  onChange={setBg}
                  allowTransparent={effMime !== "image/jpeg"}
                  label={effMime === "image/jpeg" ? "Corner fill (JPG has no transparency)" : "Outside the shape"}
                />
              )}
            </div>
          </SettingsRail>
        }
      />
    </>
  );
}

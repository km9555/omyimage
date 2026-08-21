"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { HelpTip } from "@/components/HelpTip";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { CropCanvas } from "@/components/image/CropCanvas";
import { ToolWorkspace, filesHeader } from "@/components/tool/ToolWorkspace";
import { FileTray, TrayAction, type TrayEntry } from "@/components/tool/FileTray";
import { SettingsRail, RailAction, RailSecondaryAction } from "@/components/tool/SettingsRail";
import { BackgroundPicker, resolveBg, type BgValue } from "@/components/BackgroundPicker";
import {
  decodeBitmap, canvasToBlob, downloadBlob, zipAndDownload, formatBytes, baseName, mimeExt, type ExportMime,
} from "@/lib/image/raster";
import {
  applyAspect, centeredCrop, outputSize, renderCrop, transformedSize,
  NO_TRANSFORM, type CropSel, type OutputTarget,
} from "@/lib/image/crop";
import { useHandoff } from "@/lib/tool-handoff";

const ACCENT = "#3E96AE";
const ACCEPT = "image/jpeg,image/png,image/webp";

type Format = ExportMime;
type Item = { id: string; file: File; url: string; result?: { blob: Blob; size: number; name: string } };

const FORMATS: { label: string; value: Format }[] = [
  { label: "PNG (transparent)", value: "image/png" },
  { label: "WEBP (transparent)", value: "image/webp" },
  { label: "JPG", value: "image/jpeg" },
];

const OUTPUT_TARGETS: { label: string; value: OutputTarget }[] = [
  { label: "Original", value: "original" },
  { label: "256px", value: 256 },
  { label: "512px", value: 512 },
  { label: "1024px", value: 1024 },
];

let counter = 0;
const uid = () => `f${Date.now()}_${counter++}`;

/**
 * Round avatar cropper.
 *
 * This is the shared crop engine (`lib/image/crop.ts` + `CropCanvas`) locked to
 * an ellipse at 1:1 — not a second implementation. The circle crop is the same
 * feature as /crop-image with one shape preselected, and keeping one engine is
 * what stops the two pages drifting apart the way earlier duplicated tools did.
 */
export function CircleCropTool() {
  const [items, setItems] = useState<Item[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [sel, setSel] = useState<CropSel>({ x: 0.1, y: 0.1, w: 0.8, h: 0.8 });
  const [zoom, setZoom] = useState(1);
  const [target, setTarget] = useState<OutputTarget>("original");
  const [ringPct, setRingPct] = useState(0);
  const [ringColor, setRingColor] = useState("#ffffff");
  const [bg, setBg] = useState<BgValue>({ transparent: true, color: "#ffffff" });
  const [format, setFormat] = useState<Format>("image/png");
  const [quality, setQuality] = useState(0.92);
  const [isWorking, setIsWorking] = useState(false);
  const [done, setDone] = useState(false);
  const [bmpTick, setBmpTick] = useState(0);

  const bmps = useRef<Map<string, ImageBitmap>>(new Map());

  // Revoke on unmount only — the ref-mirror pattern from ConvertTool.tsx:97-112.
  const itemsRef = useRef<Item[]>([]);
  useEffect(() => { itemsRef.current = items; }, [items]);
  useEffect(() => () => { itemsRef.current.forEach((i) => URL.revokeObjectURL(i.url)); }, []);
  useEffect(() => () => { bmps.current.forEach((b) => b.close()); bmps.current.clear(); }, []);

  const active = useMemo(() => items.find((i) => i.id === activeId) ?? items[0] ?? null, [items, activeId]);

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

  const activeBmp = useMemo(() => { void bmpTick; return active ? bmps.current.get(active.id) ?? null : null; }, [active, bmpTick]);
  const tSize = useMemo(
    () => (activeBmp ? transformedSize(activeBmp.width, activeBmp.height, NO_TRANSFORM) : { w: 0, h: 0 }),
    [activeBmp]
  );

  // Seed a centred circle as soon as the first image is measured.
  const seeded = useRef(false);
  useEffect(() => {
    if (seeded.current || !tSize.w) return;
    seeded.current = true;
    setSel(centeredCrop(1, tSize.w, tSize.h));
  }, [tSize.w, tSize.h]);

  const effMime: ExportMime = format;
  const bgFill = effMime === "image/jpeg" ? resolveBg(bg) ?? "#ffffff" : bg.transparent ? null : resolveBg(bg);
  const out = useMemo(
    () => (activeBmp ? outputSize(sel, activeBmp.width, activeBmp.height, NO_TRANSFORM, target) : { w: 0, h: 0 }),
    [activeBmp, sel, target]
  );

  const addFiles = useCallback((incoming: FileList | File[]) => {
    const imgs = Array.from(incoming).filter((f) => f.type.startsWith("image/"));
    if (imgs.length === 0) { toast.error("Please select image files."); return; }
    setDone(false);
    const added = imgs.map((file) => ({ id: uid(), file, url: URL.createObjectURL(file) }));
    setItems((prev) => [...prev, ...added]);
    setActiveId((cur) => cur ?? added[0].id);
  }, []);

  useHandoff(addFiles);

  const removeItem = (id: string) => setItems((prev) => {
    const it = prev.find((p) => p.id === id);
    if (it) URL.revokeObjectURL(it.url);
    const next = prev.filter((p) => p.id !== id);
    if (activeId === id) setActiveId(next[0]?.id ?? null);
    return next;
  });
  const reset = () => {
    items.forEach((i) => URL.revokeObjectURL(i.url));
    setItems([]); setActiveId(null); setDone(false); seeded.current = false; setZoom(1);
  };
  const recenter = () => { if (tSize.w) setSel(centeredCrop(1, tSize.w, tSize.h)); setZoom(1); };

  const applyAll = async () => {
    if (items.length === 0) return;
    setIsWorking(true);
    try {
      const canvas = document.createElement("canvas");
      const outItems: Item[] = [];
      for (const it of items) {
        const bmp = bmps.current.get(it.id) ?? (await decodeBitmap(it.file, true));
        renderCrop(canvas, bmp, sel, "ellipse", NO_TRANSFORM, {
          target,
          background: bgFill,
          ringPct,
          ringColor,
        });
        const blob = await canvasToBlob(canvas, effMime, quality);
        outItems.push({ ...it, result: { blob, size: blob.size, name: `${baseName(it.file.name)}_circle.${mimeExt(effMime)}` } });
      }
      setItems(outItems);
      setDone(true);
      if (outItems.length === 1 && outItems[0].result) downloadBlob(outItems[0].result.blob, outItems[0].result.name);
      else await zipAndDownload(outItems.map((o) => ({ name: o.result!.name, blob: o.result!.blob })), "omyimage_circle.zip");
      toast.success(`Circle-cropped ${outItems.length} image${outItems.length === 1 ? "" : "s"}.`);
    } catch (err) {
      console.error(err);
      toast.error(err instanceof Error ? err.message : "Circle crop failed.");
    } finally {
      setIsWorking(false);
    }
  };

  const fieldCls = "w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";
  const seg = (on: boolean) =>
    `rounded-md px-2 py-2 text-label-sm font-label-sm font-semibold transition-colors ${
      on ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant hover:text-primary"
    }`;
  const CHECKER: React.CSSProperties = {
    backgroundColor: "#fff",
    backgroundImage:
      "linear-gradient(45deg,#e2e8f0 25%,transparent 25%),linear-gradient(-45deg,#e2e8f0 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#e2e8f0 75%),linear-gradient(-45deg,transparent 75%,#e2e8f0 75%)",
    backgroundSize: "20px 20px",
    backgroundPosition: "0 0,0 10px,10px -10px,-10px 0",
  };

  if (items.length === 0) {
    return (
      <section>
        <TopLoadingBar active={isWorking} />
        <Dropzone onFiles={addFiles} accept={ACCEPT} accent={ACCENT} icon="panorama_fish_eye" hint="or drop JPG, PNG or WEBP images here" />
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

  /*
    Named so the mobile shell can show the canvas without the tray beneath
    it. The preview surface claims touch gestures, so anything stacked under
    it on a phone cannot be scrolled to — the tray gets its own tab instead.
  */
  const canvasPane = (
    <>
        <div
          className="rounded-xl border border-surface-variant p-4 flex items-center justify-center overflow-auto"
          style={{ minHeight: 260, ...(bg.transparent && effMime !== "image/jpeg" ? CHECKER : { backgroundColor: "var(--color-surface-container)" }) }}
        >
          <CropCanvas
            bitmap={activeBmp}
            sel={sel}
            onChange={(s) => { setSel(s); setDone(false); }}
            shape="ellipse"
            radius={0}
            aspect={1}
            transform={NO_TRANSFORM}
            zoom={zoom}
            accent={ACCENT}
            disabled={isWorking}
          />
        </div>
        <p className="text-center text-label-sm font-label-sm text-on-surface-variant">
          Drag the circle to move it, or a corner handle to resize · exports at {out.w} × {out.h} px
          {items.length > 1 && <> — applied to all {items.length} images</>}
        </p>
    </>
  );

  const tray = (
    <>
        <FileTray
          entries={entries}
          title={`${items.length} image${items.length === 1 ? "" : "s"}`}
          accept={ACCEPT}
          onFiles={addFiles}
          onClear={reset}
          busy={isWorking}
        />
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
          settingsTitle: "Circle crop settings",
          cta: {
            icon: "panorama_fish_eye",
            label: "Crop",
            busyLabel: "Cropping…",
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
            title="Circle Crop Settings"
            icon="panorama_fish_eye"
            accent={ACCENT}
            footer={
              <>
                <RailAction onClick={applyAll} busy={isWorking} busyLabel="Cropping…" icon="panorama_fish_eye">
                  {items.length > 1 ? `Circle crop ${items.length}` : "Circle crop & download"}
                </RailAction>
                {done && items.length > 1 && (
                  <RailSecondaryAction
                    icon="folder_zip"
                    onClick={() => zipAndDownload(items.filter((i) => i.result).map((i) => ({ name: i.result!.name, blob: i.result!.blob })), "omyimage_circle.zip")}
                  >
                    Download all (ZIP)
                  </RailSecondaryAction>
                )}
              </>
            }
          >
            <div className="flex flex-col gap-1.5">
              <label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
                <span>Zoom</span><span className="text-primary font-semibold">{zoom.toFixed(1)}x</span>
              </label>
              <input type="range" min={1} max={5} step={0.1} value={zoom} onChange={(e) => setZoom(parseFloat(e.target.value))} className="w-full accent-secondary" />
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="flex items-center gap-1.5 text-label-sm font-label-sm text-on-surface-variant">
                Output size
                <HelpTip text="Original exports the circle at its own resolution in the source image — it never upscales. The fixed sizes suit avatars with a set slot to fill." />
              </span>
              <div className="grid grid-cols-4 gap-1 rounded-lg bg-surface-container p-1">
                {OUTPUT_TARGETS.map((o) => (
                  <button key={String(o.value)} type="button" onClick={() => setTarget(o.value)} className={seg(target === o.value)}>{o.label}</button>
                ))}
              </div>
            </div>

            <RailSecondaryAction icon="restart_alt" onClick={recenter}>Recentre &amp; reset zoom</RailSecondaryAction>

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

            <BackgroundPicker value={bg} onChange={setBg} allowTransparent={effMime !== "image/jpeg"} label="Background" />

            <div className="flex flex-col gap-1.5">
              <label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
                <span>Ring thickness</span><span className="text-primary font-semibold">{ringPct}%</span>
              </label>
              <input type="range" min={0} max={15} step={1} value={ringPct} onChange={(e) => setRingPct(parseInt(e.target.value, 10))} className="w-full accent-secondary" />
            </div>
            {ringPct > 0 && (
              <BackgroundPicker value={{ transparent: false, color: ringColor }} onChange={(v) => setRingColor(v.color)} allowTransparent={false} label="Ring color" />
            )}
          </SettingsRail>
        }
      />
    </>
  );
}

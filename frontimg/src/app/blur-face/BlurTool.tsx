"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { HelpTip } from "@/components/HelpTip";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { ToolWorkspace, filesHeader } from "@/components/tool/ToolWorkspace";
import { FileTray, TrayAction, type TrayEntry } from "@/components/tool/FileTray";
import { SettingsRail, RailAction, RailSecondaryAction, RailNote } from "@/components/tool/SettingsRail";
import { Dropzone } from "@/components/image/Dropzone";
import { RegionEditor } from "@/components/image/RegionEditor";
import {
  decodeBitmap, canvasToBlob, downloadBlob, zipAndDownload, formatBytes, baseName, mimeExt, type ExportMime,
} from "@/lib/image/raster";
import { renderRedacted, type RedactStyle, type Region, type RegionShape } from "@/lib/image/redact";
import { detectFaces, disposeFaceDetector, SENSITIVITY_LABELS, type Sensitivity } from "@/lib/image/face-detect";
import { useHandoff } from "@/lib/tool-handoff";

const ACCENT = "#5D7091";
const ACCEPT = "image/jpeg,image/png,image/webp";

type Item = {
  id: string;
  file: File;
  url: string;
  regions: Region[];
  result?: { blob: Blob; size: number; name: string };
};

let counter = 0;
const uid = () => `f${Date.now()}_${counter++}`;

const STYLES: { value: RedactStyle; label: string }[] = [
  { value: "blur", label: "Blur" },
  { value: "pixelate", label: "Pixelate" },
  { value: "solid", label: "Blackout" },
];

export function BlurTool() {
  const [items, setItems] = useState<Item[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [style, setStyle] = useState<RedactStyle>("blur");
  const [strength, setStrength] = useState(16);
  const [shape, setShape] = useState<RegionShape>("ellipse");
  const [sensitivity, setSensitivity] = useState<Sensitivity>("balanced");
  const [format, setFormat] = useState<ExportMime>("image/jpeg");
  const [quality, setQuality] = useState(0.92);
  const [isWorking, setIsWorking] = useState(false);
  const [isDetecting, setIsDetecting] = useState(false);
  const [bmpTick, setBmpTick] = useState(0);

  /** Decoded bitmaps keyed by item id — decoded ONCE per file, never per repaint. */
  const bmps = useRef<Map<string, ImageBitmap>>(new Map());

  /*
    Revoke preview URLs on UNMOUNT only. `[items]` as a dependency would revoke
    URLs the next render still shows — the bug fixed in ConvertTool.tsx:97-112
    and since repeated in ImageToPdfTool, GifMakerTool and CircleCropTool.
  */
  const itemsRef = useRef<Item[]>([]);
  useEffect(() => { itemsRef.current = items; }, [items]);
  useEffect(() => () => { itemsRef.current.forEach((i) => URL.revokeObjectURL(i.url)); }, []);

  // Bitmaps and the wasm detector are both expensive resources; release them.
  useEffect(() => () => {
    bmps.current.forEach((b) => b.close());
    bmps.current.clear();
    void disposeFaceDetector();
  }, []);

  // Decode newly-added files once; drop bitmaps whose items are gone.
  useEffect(() => {
    let alive = true;
    const ids = new Set(items.map((i) => i.id));
    for (const [id, b] of bmps.current) if (!ids.has(id)) { b.close(); bmps.current.delete(id); }
    const missing = items.filter((i) => !bmps.current.has(i.id));
    if (missing.length === 0) return;
    Promise.all(
      missing.map(async (it) => {
        try {
          const bmp = await decodeBitmap(it.file);
          if (!alive || !itemsRef.current.some((p) => p.id === it.id)) { bmp.close(); return; }
          bmps.current.set(it.id, bmp);
        } catch {
          toast.error(`Couldn't read ${it.file.name}.`);
        }
      })
    ).then(() => { if (alive) setBmpTick((n) => n + 1); });
    return () => { alive = false; };
  }, [items]);

  const active = useMemo(
    () => items.find((i) => i.id === activeId) ?? items[0] ?? null,
    [items, activeId]
  );
  const activeBmp = useMemo(() => {
    void bmpTick;
    return active ? bmps.current.get(active.id) ?? null : null;
  }, [active, bmpTick]);

  const setRegions = useCallback((next: Region[]) => {
    if (!active) return;
    setItems((prev) => prev.map((i) => (i.id === active.id ? { ...i, regions: next, result: undefined } : i)));
  }, [active]);

  const addFiles = useCallback((incoming: FileList | File[]) => {
    const imgs = Array.from(incoming).filter((f) => f.type.startsWith("image/"));
    if (imgs.length === 0) { toast.error("Please select image files."); return; }
    const added = imgs.map((file) => ({ id: uid(), file, url: URL.createObjectURL(file), regions: [] as Region[] }));
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
    setItems([]);
    setActiveId(null);
    setSelectedRegion(null);
  };

  /** Detect faces on the current image, or across the whole batch. */
  const detect = async (all: boolean) => {
    const targets = all ? items : active ? [active] : [];
    if (targets.length === 0) return;
    setIsDetecting(true);
    try {
      let found = 0;
      const updates = new Map<string, Region[]>();
      for (const it of targets) {
        const bmp = bmps.current.get(it.id) ?? (await decodeBitmap(it.file));
        if (!bmps.current.has(it.id)) bmps.current.set(it.id, bmp);
        const faces = await detectFaces(bmp, { sensitivity, shape });
        found += faces.length;
        updates.set(it.id, [...it.regions, ...faces]);
      }
      setItems((prev) =>
        prev.map((i) => (updates.has(i.id) ? { ...i, regions: updates.get(i.id)!, result: undefined } : i))
      );
      toast[found > 0 ? "success" : "error"](
        found > 0
          ? `Found ${found} face${found === 1 ? "" : "s"} in ${targets.length} image${targets.length === 1 ? "" : "s"}.`
          : "No faces detected — try a higher sensitivity, or draw the areas by hand."
      );
    } catch (err) {
      console.error(err);
      toast.error("Face detection couldn't start. You can still draw areas by hand.");
    } finally {
      setIsDetecting(false);
    }
  };

  const clearRegions = () => setRegions([]);
  const deleteSelected = () => {
    if (!active || !selectedRegion) return;
    setRegions(active.regions.filter((r) => r.id !== selectedRegion));
    setSelectedRegion(null);
  };

  const totalRegions = useMemo(() => items.reduce((s, i) => s + i.regions.length, 0), [items]);

  const exportAll = async () => {
    if (items.length === 0) return;
    if (totalRegions === 0) { toast.error("Add at least one area to censor."); return; }
    setIsWorking(true);
    try {
      const canvas = document.createElement("canvas");
      const out: Item[] = [];
      for (const it of items) {
        const bmp = bmps.current.get(it.id) ?? (await decodeBitmap(it.file));
        renderRedacted(canvas, bmp, it.regions, {
          style,
          strength,
          solidColor: "#000000",
          background: format === "image/jpeg" ? "#ffffff" : null,
        });
        const blob = await canvasToBlob(canvas, format, quality);
        out.push({ ...it, result: { blob, size: blob.size, name: `${baseName(it.file.name)}_blurred.${mimeExt(format)}` } });
      }
      setItems(out);
      if (out.length === 1 && out[0].result) downloadBlob(out[0].result.blob, out[0].result.name);
      else await zipAndDownload(out.map((o) => ({ name: o.result!.name, blob: o.result!.blob })), "omyimage_censored.zip");
      toast.success(`Exported ${out.length} image${out.length === 1 ? "" : "s"}.`);
    } catch (err) {
      console.error(err);
      toast.error(err instanceof Error ? err.message : "Export failed.");
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
        <Dropzone onFiles={addFiles} accept={ACCEPT} accent={ACCENT} icon="blur_on" hint="or drop JPG, PNG or WEBP images here" />
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
        onClick={() => { setActiveId(it.id); setSelectedRegion(null); }}
        aria-label={`Edit ${it.file.name}`}
        aria-pressed={active?.id === it.id}
        className={`grid place-items-center w-7 h-7 rounded-full text-label-sm font-bold shrink-0 transition-colors ${
          active?.id === it.id ? "text-on-secondary" : "text-on-surface-variant"
        }`}
        style={{ backgroundColor: active?.id === it.id ? ACCENT : `${ACCENT}1A` }}
      >
        <Icon name={active?.id === it.id ? "edit" : "edit_off"} className="text-[15px]" />
      </button>
    ),
    meta: (
      <>
        {formatBytes(it.file.size)}
        {it.regions.length > 0 && <span className="ml-1 text-on-surface font-semibold">· {it.regions.length} area{it.regions.length === 1 ? "" : "s"}</span>}
        {it.result && <><Icon name="check" className="text-[13px] mx-1 align-middle" style={{ color: ACCENT }} />done</>}
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
        <div className="bg-surface-container rounded-xl border border-surface-variant p-4 flex items-center justify-center overflow-hidden" style={{ minHeight: 300 }}>
          <RegionEditor
            bitmap={activeBmp}
            regions={active?.regions ?? []}
            onChange={setRegions}
            selectedId={selectedRegion}
            onSelect={setSelectedRegion}
            style={style}
            strength={strength}
            solidColor="#000000"
            shape={shape}
            accent={ACCENT}
            disabled={isWorking || isDetecting}
          />
        </div>
        <p className="text-center text-label-sm font-label-sm text-on-surface-variant">
          Drag to draw an area, click one to select, drag its handles to resize, Delete to remove.
          {active && active.regions.length > 0 && (
            <span className="font-semibold text-on-surface"> {active.regions.length} area{active.regions.length === 1 ? "" : "s"} on this image.</span>
          )}
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
      <TopLoadingBar active={isWorking || isDetecting} />
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
            icon: "download",
            label: "Export",
            busyLabel: "Exporting…",
            busy: isWorking,
            onClick: exportAll,
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
            title="Censor Settings"
            icon="blur_on"
            accent={ACCENT}
            footer={
              <>
                <RailNote>Censoring is baked into the exported file — all in your browser.</RailNote>
                <RailAction onClick={exportAll} busy={isWorking} busyLabel="Exporting…" icon="download">
                  {items.length > 1 ? `Export ${items.length} images` : "Export image"}
                </RailAction>
              </>
            }
          >
            <div className="flex flex-col gap-2 rounded-lg border border-outline-variant/40 bg-surface-bright p-3.5">
              <span className="flex items-center gap-1.5 text-label-sm font-label-sm font-semibold text-on-surface">
                <Icon name="face_retouching_natural" className="text-[18px]" style={{ color: ACCENT }} />
                Automatic face detection
                <HelpTip text="Runs a face-detection model downloaded to your browser. Your photo is never uploaded — detection happens on your device." />
              </span>
              <select value={sensitivity} onChange={(e) => setSensitivity(e.target.value as Sensitivity)} className={fieldCls} disabled={isDetecting}>
                {SENSITIVITY_LABELS.map((s) => <option key={s.value} value={s.value}>{s.label} — {s.hint}</option>)}
              </select>
              <div className="grid grid-cols-2 gap-2">
                <RailSecondaryAction icon="person_search" onClick={() => detect(false)}>
                  {isDetecting ? "Detecting…" : "This image"}
                </RailSecondaryAction>
                <RailSecondaryAction icon="groups" onClick={() => detect(true)}>
                  All {items.length}
                </RailSecondaryAction>
              </div>
              <p className="text-label-sm font-label-sm text-on-surface-variant">
                Detected faces become normal areas — nudge, resize or delete any of them.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-label-sm font-label-sm text-on-surface-variant">Censor style</span>
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
                  <span className="text-primary font-semibold">{strength}px</span>
                </label>
                <input type="range" min={4} max={60} step={1} value={strength} onChange={(e) => setStrength(parseInt(e.target.value, 10))} className="w-full accent-secondary" />
              </div>
            )}

            <div className="flex flex-col gap-1.5">
              <span className="flex items-center gap-1.5 text-label-sm font-label-sm text-on-surface-variant">
                New area shape
                <HelpTip text="Ellipse follows the shape of a head more closely and looks less like a redaction box. Rectangle is better for signs, plates and documents." />
              </span>
              <div className="grid grid-cols-2 gap-1 rounded-lg bg-surface-container p-1">
                {(["ellipse", "rect"] as RegionShape[]).map((s) => (
                  <button key={s} type="button" onClick={() => setShape(s)} className={seg(shape === s)}>{s === "ellipse" ? "Ellipse" : "Rectangle"}</button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <RailSecondaryAction icon="backspace" onClick={deleteSelected}>Delete area</RailSecondaryAction>
              <RailSecondaryAction icon="delete_sweep" onClick={clearRegions}>Clear all</RailSecondaryAction>
            </div>

            <div className="flex flex-col gap-3 border-t border-outline-variant/60 pt-5">
              <h3 className="text-body-lg font-bold text-primary">Export</h3>
              <select value={format} onChange={(e) => setFormat(e.target.value as ExportMime)} className={fieldCls}>
                <option value="image/jpeg">JPG</option>
                <option value="image/png">PNG</option>
                <option value="image/webp">WEBP</option>
              </select>
              {format !== "image/png" && (
                <div className="flex flex-col gap-1.5">
                  <label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
                    <span>Quality</span><span className="text-primary font-semibold">{Math.round(quality * 100)}%</span>
                  </label>
                  <input type="range" min={0.5} max={1} step={0.01} value={quality} onChange={(e) => setQuality(parseFloat(e.target.value))} className="w-full accent-secondary" />
                </div>
              )}
            </div>
          </SettingsRail>
        }
      />
    </>
  );
}

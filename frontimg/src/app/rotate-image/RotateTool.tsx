"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import {
  rasterize,
  downloadBlob,
  zipAndDownload,
  formatBytes,
  baseName,
  mimeExt,
  type ExportMime,
} from "@/lib/image/raster";
import { ToolWorkspace } from "@/components/tool/ToolWorkspace";
import { FileTray, TrayAction, type TrayEntry } from "@/components/tool/FileTray";
import { SettingsRail, RailAction, RailSecondaryAction, RailNote } from "@/components/tool/SettingsRail";
import { BackgroundPicker, resolveBg, type BgValue } from "@/components/BackgroundPicker";
import { shouldUseServerForFile, toServerFormat, processOnServer } from "@/lib/process-router";
import { useHandoff } from "@/lib/tool-handoff";

const ACCENT = "#8A6FC4";

type Item = { id: string; file: File; url: string; result?: { blob: Blob; size: number; name: string } };
type Format = "original" | ExportMime;

const FORMATS: { label: string; value: Format }[] = [
  { label: "Same as original", value: "original" },
  { label: "JPG", value: "image/jpeg" },
  { label: "PNG", value: "image/png" },
  { label: "WEBP", value: "image/webp" },
];

// Background swatches live in the shared <BackgroundPicker /> component.

let counter = 0;
const uid = () => `f${Date.now()}_${counter++}`;

function outMimeFor(file: File, fmt: Format): ExportMime {
  if (fmt !== "original") return fmt;
  const t = file.type;
  return t === "image/jpeg" || t === "image/webp" || t === "image/png" ? (t as ExportMime) : "image/png";
}

export function RotateTool() {
  const [items, setItems] = useState<Item[]>([]);
  const [angle, setAngle] = useState(0); // clockwise degrees, normalized 0..359
  const [flipH, setFlipH] = useState(false);
  const [flipV, setFlipV] = useState(false);
  const [format, setFormat] = useState<Format>("original");
  const [quality, setQuality] = useState(0.92);
  const [bg, setBg] = useState<BgValue>({ transparent: true, color: "#ffffff" });
  const [isWorking, setIsWorking] = useState(false);
  const [done, setDone] = useState(false);
  const [isDropping, setIsDropping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => () => { items.forEach((i) => URL.revokeObjectURL(i.url)); }, [items]);

  const addFiles = useCallback((incoming: FileList | File[]) => {
    const imgs = Array.from(incoming).filter((f) => f.type.startsWith("image/"));
    if (imgs.length === 0) { toast.error("Please select image files."); return; }
    setDone(false);
    setItems((prev) => [...prev, ...imgs.map((file) => ({ id: uid(), file, url: URL.createObjectURL(file) }))]);
  }, []);

  useHandoff(addFiles);

  const removeItem = (id: string) =>
    setItems((prev) => {
      const it = prev.find((p) => p.id === id);
      if (it) URL.revokeObjectURL(it.url);
      return prev.filter((p) => p.id !== id);
    });

  const reset = () => { items.forEach((i) => URL.revokeObjectURL(i.url)); setItems([]); setDone(false); };
  const resetTransform = () => { setAngle(0); setFlipH(false); setFlipV(false); };

  const rotateBy = (delta: number) => setAngle((a) => (((a + delta) % 360) + 360) % 360);

  const background = resolveBg(bg);
  const showQuality = useMemo(
    () => items.some((it) => { const m = outMimeFor(it.file, format); return m === "image/jpeg" || m === "image/webp"; }),
    [items, format]
  );

  const apply = async () => {
    if (items.length === 0) return;
    setIsWorking(true);
    try {
      const out: Item[] = [];
      for (const it of items) {
        const mime = outMimeFor(it.file, format);
        let blob: Blob;
        if (await shouldUseServerForFile(it.file)) {
          // Past the browser's canvas ceiling or the byte cap → offload to the
          // shared oMyPDF backend (Sharp, /api/image/*).
          const r = await processOnServer("/api/image/rotate", it.file, {
            angle, flipH, flipV, format: toServerFormat(mime), quality,
            background: background ?? undefined,
          });
          blob = r.blob;
        } else {
          const r = await rasterize(it.file, { mime, quality, background, rotate: angle, flipH, flipV, autoOrient: false });
          blob = r.blob;
        }
        out.push({ ...it, result: { blob, size: blob.size, name: `${baseName(it.file.name)}_rotated.${mimeExt(mime)}` } });
      }
      setItems(out);
      setDone(true);
      if (out.length === 1 && out[0].result) downloadBlob(out[0].result.blob, out[0].result.name);
      else await zipAndDownload(out.map((o) => ({ name: o.result!.name, blob: o.result!.blob })), "omyimage_rotated.zip");
      toast.success(`Rotated ${out.length} image${out.length === 1 ? "" : "s"}.`);
    } catch (err) {
      console.error(err);
      toast.error(err instanceof Error ? err.message : "Rotation failed.");
    } finally {
      setIsWorking(false);
    }
  };

  const openPicker = () => inputRef.current?.click();
  const fieldCls =
    "w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";

  const fileInput = (
    <input ref={inputRef} type="file" accept="image/*" multiple className="hidden"
      onChange={(e) => { if (e.target.files) addFiles(e.target.files); e.target.value = ""; }} />
  );

  // ── Empty ───────────────────────────────────────────────────────────────
  if (items.length === 0) {
    return (
      <section>
        <TopLoadingBar active={isWorking} />
        {fileInput}
        <div
          onClick={openPicker}
          onDragOver={(e) => { e.preventDefault(); setIsDropping(true); }}
          onDragLeave={() => setIsDropping(false)}
          onDrop={(e) => { e.preventDefault(); setIsDropping(false); addFiles(e.dataTransfer.files); }}
          className={`relative w-full rounded-xl border-2 border-dashed py-14 px-6 flex flex-col items-center justify-center gap-3 bg-surface-container-lowest ambient-shadow cursor-pointer transition-all ${
            isDropping ? "drag-active" : "border-outline-variant hover:border-secondary/50"
          }`}
        >
          <div className="hidden sm:flex w-11 h-11 bg-surface-container rounded-full items-center justify-center">
            <Icon name="rotate_90_degrees_cw" fill className="text-[22px]" style={{ color: ACCENT }} />
          </div>
          <div className="flex flex-col items-center gap-1 text-center">
            <span className="bg-secondary hover:bg-secondary-container text-on-secondary text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors">Select images</span>
            <p className="text-body-md text-on-surface-variant mt-2">or drop JPG, PNG, WEBP or GIF images here</p>
          </div>
          <p className="text-label-sm font-label-sm text-on-surface-variant/70 mt-1 flex items-center gap-1.5">
            <Icon name="lock" className="text-[14px]" /> Rotated in your browser — your images never leave your device.
          </p>
        </div>
      </section>
    );
  }

  const preview = items[0];
  const previewTransform = `rotate(${angle}deg) scale(${flipH ? -1 : 1}, ${flipV ? -1 : 1})`;
  const swap = angle % 180 !== 0; // 90/270 → preview box uses rotated footprint

  const entries: TrayEntry[] = items.map((it) => ({
    id: it.id,
    name: it.file.name,
    url: it.url,
    meta: (
      <>
        {formatBytes(it.file.size)}
        {it.result && <><Icon name="arrow_forward" className="text-[13px] mx-1 align-middle" /><span className="text-on-surface font-semibold">{formatBytes(it.result.size)}</span></>}
      </>
    ),
    action: it.result ? (
      <TrayAction icon="download" tone="accent" label="Download" onClick={() => downloadBlob(it.result!.blob, it.result!.name)} />
    ) : (
      <TrayAction icon="close" label="Remove" disabled={isWorking} onClick={() => removeItem(it.id)} />
    ),
  }));

  // ── Loaded ──────────────────────────────────────────────────────────────
  return (
    <>
      <TopLoadingBar active={isWorking} />
      <ToolWorkspace
        main={
          <>
            <div className="bg-surface-container rounded-xl border border-surface-variant p-4 flex items-center justify-center overflow-hidden" style={{ minHeight: 220 }}>
              <div className="flex items-center justify-center" style={{ width: "100%", height: swap ? "44vw" : "auto", maxHeight: "44vh" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={preview.url}
                  alt="Rotation preview"
                  draggable={false}
                  className="max-w-full max-h-[42vh] object-contain rounded transition-transform duration-200"
                  style={{ transform: previewTransform }}
                />
              </div>
            </div>
            <p className="text-center text-label-sm font-label-sm text-on-surface-variant">
              Preview of <span className="font-semibold text-on-surface">{preview.file.name}</span>
              {items.length > 1 && <> — the same transform applies to all {items.length} images.</>}
            </p>
            <FileTray entries={entries} accept="image/*" onFiles={addFiles} onClear={reset} busy={isWorking} />
          </>
        }
        rail={
          <SettingsRail
            title="Transform Settings"
            icon="rotate_90_degrees_cw"
            accent={ACCENT}
            footer={
              <>
                <RailNote>90° steps straighten; the angle slider gives a custom tilt.</RailNote>
                <RailAction onClick={apply} busy={isWorking} busyLabel="Rotating…" icon="rotate_90_degrees_cw">
                  Rotate {items.length > 1 ? `${items.length} images` : "& download"}
                </RailAction>
                {done && items.length > 1 && (
                  <RailSecondaryAction
                    icon="folder_zip"
                    onClick={() => zipAndDownload(items.filter((i) => i.result).map((i) => ({ name: i.result!.name, blob: i.result!.blob })), "omyimage_rotated.zip")}
                  >
                    Download all (ZIP)
                  </RailSecondaryAction>
                )}
              </>
            }
          >
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-body-lg font-bold text-primary">Transform</h3>
            <button type="button" onClick={resetTransform} className="text-label-sm font-label-sm font-semibold text-secondary hover:underline">Reset</button>
          </div>

          <div className="grid grid-cols-4 gap-1.5">
            <button type="button" onClick={() => rotateBy(-90)} className="flex flex-col items-center gap-1 rounded-lg border border-surface-variant py-2 text-on-surface-variant hover:text-primary hover:border-secondary/40 transition-colors" aria-label="Rotate left">
              <Icon name="rotate_left" className="text-[20px]" /><span className="text-[11px]">-90°</span>
            </button>
            <button type="button" onClick={() => rotateBy(90)} className="flex flex-col items-center gap-1 rounded-lg border border-surface-variant py-2 text-on-surface-variant hover:text-primary hover:border-secondary/40 transition-colors" aria-label="Rotate right">
              <Icon name="rotate_right" className="text-[20px]" /><span className="text-[11px]">+90°</span>
            </button>
            <button type="button" onClick={() => setFlipH((v) => !v)} className={`flex flex-col items-center gap-1 rounded-lg border py-2 transition-colors ${flipH ? "border-secondary text-primary bg-secondary/10" : "border-surface-variant text-on-surface-variant hover:text-primary"}`} aria-label="Flip horizontal">
              <Icon name="flip" className="text-[20px]" /><span className="text-[11px]">Flip H</span>
            </button>
            <button type="button" onClick={() => setFlipV((v) => !v)} className={`flex flex-col items-center gap-1 rounded-lg border py-2 transition-colors ${flipV ? "border-secondary text-primary bg-secondary/10" : "border-surface-variant text-on-surface-variant hover:text-primary"}`} aria-label="Flip vertical">
              <Icon name="flip" className="text-[20px] rotate-90" /><span className="text-[11px]">Flip V</span>
            </button>
          </div>

          {/* Fine angle */}
          <div className="flex flex-col gap-1.5">
            <label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
              <span>Angle</span>
              <span className="text-primary font-semibold">{angle}°</span>
            </label>
            <input type="range" min={0} max={359} step={1} value={angle} onChange={(e) => setAngle(parseInt(e.target.value, 10))} className="w-full accent-secondary" />
          </div>
        </div>

        {/* Output */}
        <div className="flex flex-col gap-3 border-t border-outline-variant/60 pt-5">
          <h3 className="text-body-lg font-bold text-primary">Output</h3>
          <div className="flex flex-col gap-1.5">
            <label className="text-label-sm font-label-sm text-on-surface-variant">Format</label>
            <select value={format} onChange={(e) => setFormat(e.target.value as Format)} className={fieldCls}>
              {FORMATS.map((f) => <option key={f.value} value={f.value}>{f.label}</option>)}
            </select>
          </div>
          <BackgroundPicker value={bg} onChange={setBg} label="Background (for angled corners)" />
          {showQuality && (
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

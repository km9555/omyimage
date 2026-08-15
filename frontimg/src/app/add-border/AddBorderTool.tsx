"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { ToolWorkspace } from "@/components/tool/ToolWorkspace";
import { FileTray, TrayAction, type TrayEntry } from "@/components/tool/FileTray";
import { SettingsRail, RailAction, RailSecondaryAction } from "@/components/tool/SettingsRail";
import { BackgroundPicker } from "@/components/BackgroundPicker";
import {
  decodeBitmap, canvasToBlob, downloadBlob, zipAndDownload, formatBytes, baseName, mimeExt, type ExportMime,
} from "@/lib/image/raster";
import { useHandoff } from "@/lib/tool-handoff";

const ACCENT = "#D08048";
const ACCEPT = "image/jpeg,image/png,image/webp";

type Format = "original" | ExportMime;
type Item = { id: string; file: File; url: string; result?: { blob: Blob; size: number; name: string } };

const FORMATS: { label: string; value: Format }[] = [
  { label: "Same as original", value: "original" },
  { label: "JPG", value: "image/jpeg" },
  { label: "PNG", value: "image/png" },
  { label: "WEBP", value: "image/webp" },
];

let counter = 0;
const uid = () => `f${Date.now()}_${counter++}`;

function outMimeFor(file: File, fmt: Format): ExportMime {
  if (fmt !== "original") return fmt;
  const t = file.type;
  return t === "image/jpeg" || t === "image/webp" || t === "image/png" ? (t as ExportMime) : "image/png";
}

/** Draw the image inside a colored frame of `pct`% of the shortest side, with optional rounded inner corners. */
function paint(canvas: HTMLCanvasElement, bmp: ImageBitmap, pct: number, color: string, radiusPct: number) {
  const side = Math.min(bmp.width, bmp.height);
  const b = Math.round((side * pct) / 100);
  const W = bmp.width + 2 * b, H = bmp.height + 2 * b;
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, W, H);
  const r = Math.round((Math.min(bmp.width, bmp.height) * radiusPct) / 100);
  if (r > 0) {
    ctx.save();
    ctx.beginPath();
    const x = b, y = b, w = bmp.width, h = bmp.height;
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
    ctx.clip();
  }
  ctx.drawImage(bmp, b, b);
  if (r > 0) ctx.restore();
}

export function AddBorderTool() {
  const [items, setItems] = useState<Item[]>([]);
  const [pct, setPct] = useState(4);
  const [radius, setRadius] = useState(0);
  const [color, setColor] = useState("#ffffff");
  const [format, setFormat] = useState<Format>("original");
  const [quality, setQuality] = useState(0.92);
  const [isWorking, setIsWorking] = useState(false);
  const [done, setDone] = useState(false);

  const previewRef = useRef<HTMLCanvasElement>(null);
  const firstBmp = useRef<ImageBitmap | null>(null);

  useEffect(() => () => { items.forEach((i) => URL.revokeObjectURL(i.url)); }, [items]);

  const repaint = useCallback(() => {
    if (previewRef.current && firstBmp.current) paint(previewRef.current, firstBmp.current, pct, color, radius);
  }, [pct, color, radius]);

  useEffect(() => {
    let alive = true;
    if (items[0]) {
      decodeBitmap(items[0].file).then((b) => { if (alive) { firstBmp.current = b; repaint(); } }).catch(() => {});
    } else {
      firstBmp.current = null;
    }
    return () => { alive = false; };
  }, [items, repaint]);

  useEffect(() => { repaint(); }, [repaint]);

  const addFiles = useCallback((incoming: FileList | File[]) => {
    const imgs = Array.from(incoming).filter((f) => f.type.startsWith("image/"));
    if (imgs.length === 0) { toast.error("Please select image files."); return; }
    setDone(false);
    setItems((prev) => [...prev, ...imgs.map((file) => ({ id: uid(), file, url: URL.createObjectURL(file) }))]);
  }, []);

  useHandoff(addFiles);

  const removeItem = (id: string) => setItems((prev) => { const it = prev.find((p) => p.id === id); if (it) URL.revokeObjectURL(it.url); return prev.filter((p) => p.id !== id); });
  const reset = () => { items.forEach((i) => URL.revokeObjectURL(i.url)); setItems([]); setDone(false); };

  const applyAll = async () => {
    if (items.length === 0) return;
    setIsWorking(true);
    try {
      const canvas = document.createElement("canvas");
      const out: Item[] = [];
      for (const it of items) {
        const bmp = await decodeBitmap(it.file);
        const mime = outMimeFor(it.file, format);
        paint(canvas, bmp, pct, color, radius);
        bmp.close();
        const blob = await canvasToBlob(canvas, mime, quality);
        out.push({ ...it, result: { blob, size: blob.size, name: `${baseName(it.file.name)}_bordered.${mimeExt(mime)}` } });
      }
      setItems(out);
      setDone(true);
      if (out.length === 1 && out[0].result) downloadBlob(out[0].result.blob, out[0].result.name);
      else await zipAndDownload(out.map((o) => ({ name: o.result!.name, blob: o.result!.blob })), "omyimage_bordered.zip");
      toast.success(`Added a border to ${out.length} image${out.length === 1 ? "" : "s"}.`);
    } catch (err) {
      console.error(err);
      toast.error(err instanceof Error ? err.message : "Adding the border failed.");
    } finally {
      setIsWorking(false);
    }
  };

  const fieldCls = "w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";

  if (items.length === 0) {
    return (
      <section>
        <TopLoadingBar active={isWorking} />
        <Dropzone onFiles={addFiles} accept={ACCEPT} accent={ACCENT} icon="crop_din" hint="or drop JPG, PNG or WEBP images here" />
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
        {it.result && <><Icon name="check" className="text-[13px] mx-1 align-middle" style={{ color: ACCENT }} />done</>}
      </>
    ),
    action: it.result ? (
      <TrayAction icon="download" tone="accent" label="Download" onClick={() => downloadBlob(it.result!.blob, it.result!.name)} />
    ) : (
      <TrayAction icon="close" label="Remove" disabled={isWorking} onClick={() => removeItem(it.id)} />
    ),
  }));

  return (
    <>
      <TopLoadingBar active={isWorking} />
      <ToolWorkspace
        main={
          <>
            <div className="bg-surface-container rounded-xl border border-surface-variant p-4 flex items-center justify-center overflow-hidden" style={{ minHeight: 220 }}>
              <canvas ref={previewRef} className="max-w-full max-h-[46vh] rounded" />
            </div>
            <p className="text-center text-label-sm font-label-sm text-on-surface-variant">
              Live preview of <span className="font-semibold text-on-surface">{items[0].file.name}</span>
              {items.length > 1 && <> — applied to all {items.length} images.</>}
            </p>
            <FileTray entries={entries} accept={ACCEPT} onFiles={addFiles} onClear={reset} busy={isWorking} />
          </>
        }
        rail={
          <SettingsRail
            title="Border Settings"
            icon="crop_din"
            accent={ACCENT}
            footer={
              <>
                <RailAction onClick={applyAll} busy={isWorking} busyLabel="Adding…" icon="crop_din">
                  Add border {items.length > 1 ? `to ${items.length}` : "& download"}
                </RailAction>
                {done && items.length > 1 && (
                  <RailSecondaryAction
                    icon="folder_zip"
                    onClick={() => zipAndDownload(items.filter((i) => i.result).map((i) => ({ name: i.result!.name, blob: i.result!.blob })), "omyimage_bordered.zip")}
                  >
                    Download all (ZIP)
                  </RailSecondaryAction>
                )}
              </>
            }
          >
          <div className="flex flex-col gap-1.5">
            <label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>Thickness</span><span className="text-primary font-semibold">{pct}%</span></label>
            <input type="range" min={1} max={25} step={1} value={pct} onChange={(e) => setPct(parseInt(e.target.value, 10))} className="w-full accent-secondary" />
            <p className="text-label-sm font-label-sm text-on-surface-variant/70">As a percentage of the image's shortest side, so it scales with any size.</p>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>Corner rounding</span><span className="text-primary font-semibold">{radius}%</span></label>
            <input type="range" min={0} max={50} step={1} value={radius} onChange={(e) => setRadius(parseInt(e.target.value, 10))} className="w-full accent-secondary" />
          </div>
          <BackgroundPicker value={{ transparent: false, color }} onChange={(v) => setColor(v.color)} allowTransparent={false} label="Border color" />
          <div className="flex flex-col gap-1.5">
            <label className="text-label-sm font-label-sm text-on-surface-variant">Output format</label>
            <select value={format} onChange={(e) => setFormat(e.target.value as Format)} className={fieldCls}>{FORMATS.map((f) => <option key={f.value} value={f.value}>{f.label}</option>)}</select>
          </div>
          {format !== "image/png" && (
            <div className="flex flex-col gap-1.5"><label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>Quality</span><span className="text-primary font-semibold">{Math.round(quality * 100)}%</span></label><input type="range" min={0.5} max={1} step={0.01} value={quality} onChange={(e) => setQuality(parseFloat(e.target.value))} className="w-full accent-secondary" /></div>
          )}
          </SettingsRail>
        }
      />
    </>
  );
}

"use client";

import { useCallback, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { downloadBlob, zipAndDownload, formatBytes, baseName } from "@/lib/image/raster";

const ACCENT = "#F2994A";
const ACCEPT = ".heic,.heif,image/heic,image/heif";

type Target = "image/jpeg" | "image/png";
type Item = { id: string; file: File; result?: { blob: Blob; size: number; name: string } };

let counter = 0;
const uid = () => `f${Date.now()}_${counter++}`;

function isHeic(f: File): boolean {
  const n = f.name.toLowerCase();
  return f.type === "image/heic" || f.type === "image/heif" || n.endsWith(".heic") || n.endsWith(".heif");
}

export function HeicTool() {
  const [items, setItems] = useState<Item[]>([]);
  const [target, setTarget] = useState<Target>("image/jpeg");
  const [quality, setQuality] = useState(0.92);
  const [isWorking, setIsWorking] = useState(false);
  const [done, setDone] = useState(false);

  const addFiles = useCallback((incoming: FileList | File[]) => {
    const heics = Array.from(incoming).filter(isHeic);
    if (heics.length === 0) { toast.error("Please select HEIC or HEIF images."); return; }
    setDone(false);
    setItems((prev) => [...prev, ...heics.map((file) => ({ id: uid(), file }))]);
  }, []);

  const removeItem = (id: string) => setItems((prev) => prev.filter((p) => p.id !== id));
  const reset = () => { setItems([]); setDone(false); };

  const convertAll = async () => {
    if (items.length === 0) return;
    setIsWorking(true);
    try {
      const heic2any = (await import("heic2any")).default;
      const ext = target === "image/jpeg" ? "jpg" : "png";
      const out: Item[] = [];
      for (const it of items) {
        const res = await heic2any({ blob: it.file, toType: target, quality });
        const blob = Array.isArray(res) ? res[0] : res;
        out.push({ ...it, result: { blob, size: blob.size, name: `${baseName(it.file.name)}.${ext}` } });
      }
      setItems(out);
      setDone(true);
      if (out.length === 1 && out[0].result) downloadBlob(out[0].result.blob, out[0].result.name);
      else await zipAndDownload(out.map((o) => ({ name: o.result!.name, blob: o.result!.blob })), "omyimage_heic.zip");
      toast.success(`Converted ${out.length} HEIC image${out.length === 1 ? "" : "s"}.`);
    } catch (err) {
      console.error(err);
      toast.error("Conversion failed. Please make sure these are valid HEIC files.");
    } finally {
      setIsWorking(false);
    }
  };

  if (items.length === 0) {
    return (
      <section>
        <TopLoadingBar active={isWorking} />
        <Dropzone onFiles={addFiles} accept={ACCEPT} accent={ACCENT} icon="photo_camera" hint="or drop .heic / .heif photos here" />
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 items-start">
      <span data-tool-active hidden aria-hidden="true" />
      <TopLoadingBar active={isWorking} />

      <div className="flex flex-col gap-3 lg:sticky lg:top-24 lg:self-start">
        <div className="flex items-center justify-between">
          <h2 className="text-headline-md font-bold text-primary">{items.length} HEIC image{items.length === 1 ? "" : "s"}</h2>
          <button type="button" onClick={reset} className="inline-flex items-center gap-1.5 text-label-md font-medium text-on-surface-variant hover:text-error"><Icon name="delete_sweep" className="text-[18px]" /> Clear</button>
        </div>
        <ul className="flex flex-col gap-2 max-h-[24vh] overflow-y-auto pr-1">
          {items.map((it) => (
            <li key={it.id} className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-3 flex items-center gap-3">
              <span className="w-12 h-12 rounded-lg grid place-items-center shrink-0" style={{ backgroundColor: `${ACCENT}1A` }}><Icon name="photo_camera" fill className="text-[22px]" style={{ color: ACCENT }} /></span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-body-md font-semibold text-primary">{it.file.name}</p>
                <p className="text-label-sm font-label-sm text-on-surface-variant">
                  {formatBytes(it.file.size)}
                  {it.result && <><Icon name="arrow_forward" className="text-[13px] mx-1 align-middle" /><span className="text-on-surface font-semibold">{formatBytes(it.result.size)}</span><span className="ml-1 uppercase text-[10px] rounded bg-secondary/15 text-on-secondary-fixed-variant px-1.5 py-0.5">{target === "image/jpeg" ? "JPG" : "PNG"}</span></>}
                </p>
              </div>
              {it.result ? (
                <button type="button" onClick={() => downloadBlob(it.result!.blob, it.result!.name)} aria-label="Download" className="flex h-9 w-9 items-center justify-center rounded-lg text-secondary hover:bg-secondary/10 transition-colors"><Icon name="download" className="text-[20px]" /></button>
              ) : (
                <button type="button" onClick={() => removeItem(it.id)} disabled={isWorking} aria-label="Remove" className="flex h-9 w-9 items-center justify-center rounded-lg text-on-surface-variant hover:bg-error-container hover:text-error transition-colors disabled:opacity-40"><Icon name="close" className="text-[20px]" /></button>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:sticky lg:top-24 flex flex-col gap-4">
        <div className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-5 flex flex-col gap-4">
          <h2 className="text-headline-md font-bold text-primary">Convert to</h2>
          <div className="grid grid-cols-2 gap-1 rounded-lg bg-surface-container p-1">
            {([["image/jpeg", "JPG"], ["image/png", "PNG"]] as [Target, string][]).map(([v, l]) => (
              <button key={v} type="button" onClick={() => setTarget(v)} className={`rounded-md px-3 py-2 text-body-md font-semibold transition-colors ${target === v ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant hover:text-primary"}`}>{l}</button>
            ))}
          </div>
          {target === "image/jpeg" && (
            <div className="flex flex-col gap-1.5"><label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>Quality</span><span className="text-primary font-semibold">{Math.round(quality * 100)}%</span></label><input type="range" min={0.5} max={1} step={0.01} value={quality} onChange={(e) => setQuality(parseFloat(e.target.value))} className="w-full accent-secondary" /></div>
          )}
        </div>

        <button type="button" onClick={convertAll} disabled={isWorking} className="w-full inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-container text-on-secondary font-semibold py-3.5 rounded-lg transition-colors disabled:opacity-50">
          {isWorking ? (<><Icon name="progress_activity" className="animate-spin text-[20px]" /> Converting…</>) : (<><Icon name="sync_alt" fill className="text-[20px]" /> Convert {items.length > 1 ? `${items.length} images` : "& download"}</>)}
        </button>

        {done && items.length > 1 && (
          <button type="button" onClick={() => zipAndDownload(items.filter((i) => i.result).map((i) => ({ name: i.result!.name, blob: i.result!.blob })), "omyimage_heic.zip")} className="w-full inline-flex items-center justify-center gap-2 border border-secondary text-secondary font-semibold py-2.5 rounded-lg hover:bg-secondary/10 transition-colors">
            <Icon name="folder_zip" className="text-[20px]" /> Download all (ZIP)
          </button>
        )}

        <div className="rounded-xl border border-outline-variant/40 bg-surface-bright p-4 flex items-start gap-2.5">
          <Icon name="lightbulb" className="text-[18px] mt-0.5" style={{ color: ACCENT }} />
          <p className="text-label-sm font-label-sm text-on-surface-variant"><strong className="text-on-surface">Tip:</strong> HEIC is Apple's photo format. JPG works everywhere. All conversion is done in your browser.</p>
        </div>
      </div>
    </section>
  );
}

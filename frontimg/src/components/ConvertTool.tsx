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
import { BackgroundPicker, resolveBg, type BgValue } from "@/components/BackgroundPicker";
import { shouldUseServer, toServerFormat, processOnServer } from "@/lib/process-router";
import { useHandoff } from "@/lib/tool-handoff";

export interface ConvertConfig {
  accent: string;
  /** input `accept` attribute. */
  accept: string;
  targetMime: ExportMime;
  /** "JPG" / "PNG" — shown on buttons & badges. */
  targetLabel: string;
  /** Show the background-flatten control (true for JPG targets). */
  flatten: boolean;
  /** Show the quality slider (true for JPG/WEBP targets). */
  quality: boolean;
  /** Short note shown in the drop zone. */
  dropHint: string;
}

type Item = {
  id: string;
  file: File;
  url: string;
  result?: { blob: Blob; size: number; name: string };
};

let counter = 0;
const uid = () => `f${Date.now()}_${counter++}`;

export function ConvertTool({ config }: { config: ConvertConfig }) {
  const { accent, accept, targetMime, targetLabel, flatten, quality } = config;
  const [items, setItems] = useState<Item[]>([]);
  const [quality_, setQuality] = useState(0.92);
  const [bg, setBg] = useState<BgValue>({ transparent: false, color: "#ffffff" });
  const [autoOrient, setAutoOrient] = useState(true);
  const [isWorking, setIsWorking] = useState(false);
  const [isDropping, setIsDropping] = useState(false);
  const [done, setDone] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => () => { items.forEach((i) => URL.revokeObjectURL(i.url)); }, [items]);

  const addFiles = useCallback((incoming: FileList | File[]) => {
    const imgs = Array.from(incoming).filter((f) => f.type.startsWith("image/"));
    if (imgs.length === 0) {
      toast.error("Please select image files.");
      return;
    }
    setDone(false);
    setItems((prev) => [
      ...prev,
      ...imgs.map((file) => ({ id: uid(), file, url: URL.createObjectURL(file) })),
    ]);
  }, []);

  useHandoff(addFiles);

  const removeItem = (id: string) =>
    setItems((prev) => {
      const it = prev.find((p) => p.id === id);
      if (it) URL.revokeObjectURL(it.url);
      return prev.filter((p) => p.id !== id);
    });

  const reset = () => {
    items.forEach((i) => URL.revokeObjectURL(i.url));
    setItems([]);
    setDone(false);
  };

  const ext = mimeExt(targetMime);

  const convertAll = async () => {
    if (items.length === 0) return;
    setIsWorking(true);
    try {
      const out: Item[] = [];
      for (const it of items) {
        const name = `${baseName(it.file.name)}.${ext}`;
        let blob: Blob;
        if (shouldUseServer(it.file.size)) {
          // > 15 MB → offload to the shared oMyPDF backend (Sharp, /api/image/*).
          const r = await processOnServer("/api/image/convert", it.file, {
            format: toServerFormat(targetMime),
            quality: quality_,
            background: flatten ? resolveBg(bg) ?? undefined : undefined,
          });
          blob = r.blob;
        } else {
          const r = await rasterize(it.file, {
            mime: targetMime,
            quality: quality_,
            background: flatten ? resolveBg(bg) : null,
            autoOrient,
          });
          blob = r.blob;
        }
        out.push({ ...it, result: { blob, size: blob.size, name } });
      }
      setItems(out);
      setDone(true);
      // Auto-download: single file directly, multiple as a ZIP.
      if (out.length === 1 && out[0].result) {
        downloadBlob(out[0].result.blob, out[0].result.name);
      } else {
        await zipAndDownload(
          out.map((o) => ({ name: o.result!.name, blob: o.result!.blob })),
          `omyimage_${targetLabel.toLowerCase()}.zip`
        );
      }
      toast.success(`Converted ${out.length} image${out.length === 1 ? "" : "s"} to ${targetLabel}.`);
    } catch (err) {
      console.error(err);
      toast.error(err instanceof Error ? err.message : "Conversion failed.");
    } finally {
      setIsWorking(false);
    }
  };

  const totalIn = useMemo(() => items.reduce((s, i) => s + i.file.size, 0), [items]);
  const totalOut = useMemo(
    () => items.reduce((s, i) => s + (i.result?.size ?? 0), 0),
    [items]
  );

  const openPicker = () => inputRef.current?.click();
  const fieldCls =
    "w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";

  const fileInput = (
    <input
      ref={inputRef}
      type="file"
      accept={accept}
      multiple
      className="hidden"
      onChange={(e) => {
        if (e.target.files) addFiles(e.target.files);
        e.target.value = "";
      }}
    />
  );

  // ── Empty state ───────────────────────────────────────────────────────────
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
            <Icon name="sync_alt" fill className="text-[22px]" style={{ color: accent }} />
          </div>
          <div className="flex flex-col items-center gap-1 text-center">
            <span className="bg-secondary hover:bg-secondary-container text-on-secondary text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors">
              Select images
            </span>
            <p className="text-body-md text-on-surface-variant mt-2">{config.dropHint}</p>
          </div>
          <p className="text-label-sm font-label-sm text-on-surface-variant/70 mt-1 flex items-center gap-1.5">
            <Icon name="lock" className="text-[14px]" /> Converted in your browser — your images never leave your device.
          </p>
        </div>
      </section>
    );
  }

  // ── Loaded state ──────────────────────────────────────────────────────────
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 items-start">
      <span data-tool-active hidden aria-hidden="true" />
      <TopLoadingBar active={isWorking} />
      {fileInput}

      {/* Files */}
      <div className="flex flex-col gap-3 lg:sticky lg:top-24 lg:self-start">
        <div className="flex items-center justify-between">
          <h2 className="text-headline-md font-bold text-primary">
            {items.length} image{items.length === 1 ? "" : "s"}
          </h2>
          <div className="flex items-center gap-2">
            <button type="button" onClick={openPicker} className="inline-flex items-center gap-1.5 text-label-md font-semibold text-secondary hover:underline">
              <Icon name="add" className="text-[18px]" /> Add more
            </button>
            <button type="button" onClick={reset} className="inline-flex items-center gap-1.5 text-label-md font-medium text-on-surface-variant hover:text-error">
              <Icon name="delete_sweep" className="text-[18px]" /> Clear
            </button>
          </div>
        </div>

        <ul className="flex flex-col gap-2 max-h-[24vh] overflow-y-auto pr-1">
          {items.map((it) => (
            <li key={it.id} className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-3 flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={it.url} alt="" className="w-12 h-12 rounded-lg object-cover bg-surface-container shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-body-md font-semibold text-primary">{it.file.name}</p>
                <p className="text-label-sm font-label-sm text-on-surface-variant">
                  {formatBytes(it.file.size)}
                  {it.result && (
                    <>
                      <Icon name="arrow_forward" className="text-[13px] mx-1 align-middle" />
                      <span className="text-on-surface font-semibold">{formatBytes(it.result.size)}</span>
                      <span className="ml-1 uppercase text-[10px] rounded bg-secondary/15 text-on-secondary-fixed-variant px-1.5 py-0.5">{targetLabel}</span>
                    </>
                  )}
                </p>
              </div>
              {it.result ? (
                <button
                  type="button"
                  onClick={() => downloadBlob(it.result!.blob, it.result!.name)}
                  aria-label={`Download ${it.result.name}`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-secondary hover:bg-secondary/10 transition-colors"
                >
                  <Icon name="download" className="text-[20px]" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => removeItem(it.id)}
                  disabled={isWorking}
                  aria-label="Remove"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-on-surface-variant hover:bg-error-container hover:text-error transition-colors disabled:opacity-40"
                >
                  <Icon name="close" className="text-[20px]" />
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Options + action */}
      <div className="lg:sticky lg:top-24 flex flex-col gap-4">
        <div className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-5 flex flex-col gap-4">
          <h2 className="text-headline-md font-bold text-primary">Output: {targetLabel}</h2>

          {quality && (
            <div className="flex flex-col gap-1.5">
              <label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
                <span>Quality</span>
                <span className="text-primary font-semibold">{Math.round(quality_ * 100)}%</span>
              </label>
              <input type="range" min={0.5} max={1} step={0.01} value={quality_} onChange={(e) => setQuality(parseFloat(e.target.value))} className="w-full accent-secondary" />
            </div>
          )}

          {flatten && (
            <BackgroundPicker value={bg} onChange={setBg} allowTransparent={false} label="Background (replaces transparency)" />
          )}

          <label className="flex items-center gap-2.5 cursor-pointer">
            <input type="checkbox" checked={autoOrient} onChange={(e) => setAutoOrient(e.target.checked)} className="w-4 h-4 accent-secondary" />
            <span className="text-body-md text-on-surface">Auto-rotate by EXIF orientation</span>
          </label>
        </div>

        <button
          type="button"
          onClick={convertAll}
          disabled={isWorking}
          className="w-full inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-container text-on-secondary font-semibold py-3.5 rounded-lg transition-colors disabled:opacity-50"
        >
          {isWorking ? (
            <><Icon name="progress_activity" className="animate-spin text-[20px]" /> Converting…</>
          ) : (
            <><Icon name="sync_alt" fill className="text-[20px]" /> Convert {items.length > 1 ? `${items.length} to ${targetLabel}` : `to ${targetLabel}`}</>
          )}
        </button>

        {done && items.length > 1 && (
          <button
            type="button"
            onClick={() => zipAndDownload(items.filter((i) => i.result).map((i) => ({ name: i.result!.name, blob: i.result!.blob })), `omyimage_${targetLabel.toLowerCase()}.zip`)}
            className="w-full inline-flex items-center justify-center gap-2 border border-secondary text-secondary font-semibold py-2.5 rounded-lg hover:bg-secondary/10 transition-colors"
          >
            <Icon name="folder_zip" className="text-[20px]" /> Download all (ZIP)
          </button>
        )}

        <div className="rounded-xl border border-outline-variant/40 bg-surface-bright p-4 flex items-start gap-2.5">
          <Icon name="lightbulb" className="text-[18px] mt-0.5" style={{ color: accent }} />
          <p className="text-label-sm font-label-sm text-on-surface-variant">
            {done
              ? <><strong className="text-on-surface">Total:</strong> {formatBytes(totalIn)} → {formatBytes(totalOut)}. Everything runs in your browser.</>
              : <><strong className="text-on-surface">{items.length} ready.</strong> Multiple files download together as a ZIP.</>}
          </p>
        </div>
      </div>
    </section>
  );
}

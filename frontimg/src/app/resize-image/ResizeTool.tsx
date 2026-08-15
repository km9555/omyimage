"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { BackgroundPicker, resolveBg, type BgValue } from "@/components/BackgroundPicker";
import { ToolWorkspace } from "@/components/tool/ToolWorkspace";
import { FileTray, TrayAction, type TrayEntry } from "@/components/tool/FileTray";
import { SettingsRail, RailAction, RailSecondaryAction, RailNote } from "@/components/tool/SettingsRail";
import { shouldUseServer, toServerFormat, processOnServer } from "@/lib/process-router";
import {
  rasterize, imageSize, downloadBlob, zipAndDownload, formatBytes, baseName, mimeExt, type ExportMime,
} from "@/lib/image/raster";
import { useHandoff } from "@/lib/tool-handoff";

const ACCENT = "#4B8FC7";
const ACCEPT = "image/jpeg,image/png,image/webp,image/gif,image/bmp";

type Mode = "pixels" | "percent";
type Format = "original" | ExportMime;
type Item = { id: string; file: File; url: string; w?: number; h?: number; result?: { blob: Blob; size: number; name: string; w: number; h: number } };

const FORMATS: { label: string; value: Format }[] = [
  { label: "Same as original", value: "original" },
  { label: "JPG", value: "image/jpeg" },
  { label: "PNG", value: "image/png" },
  { label: "WEBP", value: "image/webp" },
];

let counter = 0;
const uid = () => `f${Date.now()}_${counter++}`;
const toInt = (s: string) => { const n = parseInt(s, 10); return Number.isFinite(n) ? n : 0; };

function outMimeFor(file: File, fmt: Format): ExportMime {
  if (fmt !== "original") return fmt;
  const t = file.type;
  return t === "image/jpeg" || t === "image/webp" || t === "image/png" ? (t as ExportMime) : "image/png";
}

export function ResizeTool() {
  const [items, setItems] = useState<Item[]>([]);
  const [mode, setMode] = useState<Mode>("pixels");
  const [widthStr, setWidthStr] = useState("");
  const [heightStr, setHeightStr] = useState("");
  const [keepAspect, setKeepAspect] = useState(true);
  const [percentStr, setPercentStr] = useState("50");
  const [format, setFormat] = useState<Format>("original");
  const [quality, setQuality] = useState(0.92);
  const [bg, setBg] = useState<BgValue>({ transparent: false, color: "#ffffff" });
  const [isWorking, setIsWorking] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => () => { items.forEach((i) => URL.revokeObjectURL(i.url)); }, [items]);

  const first = items[0];

  const addFiles = useCallback((incoming: FileList | File[]) => {
    const imgs = Array.from(incoming).filter((f) => f.type.startsWith("image/"));
    if (imgs.length === 0) { toast.error("Please select image files."); return; }
    setDone(false);
    const next = imgs.map((file) => ({ id: uid(), file, url: URL.createObjectURL(file) }));
    setItems((prev) => [...prev, ...next]);
    next.forEach(async (it) => {
      try {
        const { w, h } = await imageSize(it.file);
        setItems((prev) => prev.map((p) => (p.id === it.id ? { ...p, w, h } : p)));
        // Prefill dimensions from the first image.
        setWidthStr((cur) => (cur === "" ? String(w) : cur));
        setHeightStr((cur) => (cur === "" ? String(h) : cur));
      } catch { /* ignore */ }
    });
  }, []);

  useHandoff(addFiles);

  const removeItem = (id: string) => setItems((prev) => { const it = prev.find((p) => p.id === id); if (it) URL.revokeObjectURL(it.url); return prev.filter((p) => p.id !== id); });
  const reset = () => { items.forEach((i) => URL.revokeObjectURL(i.url)); setItems([]); setWidthStr(""); setHeightStr(""); setDone(false); };

  // Lock-aspect: editing one dimension recomputes the other from the first image.
  const onWidth = (v: string) => {
    setWidthStr(v);
    if (keepAspect && first?.w && first?.h) { const w = toInt(v); if (w > 0) setHeightStr(String(Math.round(w * (first.h / first.w)))); }
  };
  const onHeight = (v: string) => {
    setHeightStr(v);
    if (keepAspect && first?.w && first?.h) { const h = toInt(v); if (h > 0) setWidthStr(String(Math.round(h * (first.w / first.h)))); }
  };

  const targetFor = (it: Item): { width: number; height: number } | null => {
    if (!it.w || !it.h) return null;
    if (mode === "percent") { const p = Math.max(1, toInt(percentStr)) / 100; return { width: Math.max(1, Math.round(it.w * p)), height: Math.max(1, Math.round(it.h * p)) }; }
    const W = toInt(widthStr), H = toInt(heightStr);
    if (W <= 0 && H <= 0) return null;
    if (keepAspect) {
      const s = Math.min(W > 0 ? W / it.w : Infinity, H > 0 ? H / it.h : Infinity);
      return { width: Math.max(1, Math.round(it.w * s)), height: Math.max(1, Math.round(it.h * s)) };
    }
    return { width: Math.max(1, W || it.w), height: Math.max(1, H || it.h) };
  };

  const previewDims = useMemo(() => (first ? targetFor(first) : null), [first, mode, widthStr, heightStr, percentStr, keepAspect]); // eslint-disable-line react-hooks/exhaustive-deps
  const showBg = items.some((it) => outMimeFor(it.file, format) === "image/jpeg");
  const showQuality = format !== "image/png";

  const resizeAll = async () => {
    if (items.length === 0) return;
    setIsWorking(true);
    try {
      const out: Item[] = [];
      for (const it of items) {
        const t = targetFor(it);
        if (!t) { out.push(it); continue; }
        const mime = outMimeFor(it.file, format);
        let blob: Blob; let width = t.width; let height = t.height;
        if (shouldUseServer(it.file.size)) {
          // > 15 MB → offload to the shared oMyPDF backend (Sharp, /api/image/*). Dimensions already computed per file → exact fit.
          const r = await processOnServer("/api/image/resize", it.file, {
            width: t.width, height: t.height, fit: "fill",
            format: toServerFormat(mime), quality,
            background: mime === "image/jpeg" ? resolveBg(bg) ?? undefined : undefined,
          });
          blob = r.blob;
        } else {
          const r = await rasterize(it.file, { mime, quality, background: mime === "image/jpeg" ? resolveBg(bg) : null, resize: t, autoOrient: true });
          blob = r.blob; width = r.width; height = r.height;
        }
        out.push({ ...it, result: { blob, size: blob.size, name: `${baseName(it.file.name)}_resized.${mimeExt(mime)}`, w: width, h: height } });
      }
      setItems(out);
      setDone(true);
      if (out.length === 1 && out[0].result) downloadBlob(out[0].result.blob, out[0].result.name);
      else await zipAndDownload(out.filter((o) => o.result).map((o) => ({ name: o.result!.name, blob: o.result!.blob })), "omyimage_resized.zip");
      toast.success(`Resized ${out.filter((o) => o.result).length} image${out.length === 1 ? "" : "s"}.`);
    } catch (err) {
      console.error(err);
      toast.error(err instanceof Error ? err.message : "Resize failed.");
    } finally {
      setIsWorking(false);
    }
  };

  const fieldCls = "w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";

  if (items.length === 0) {
    return (
      <section>
        <TopLoadingBar active={isWorking} />
        <Dropzone onFiles={addFiles} accept={ACCEPT} accent={ACCENT} icon="photo_size_select_large" hint="or drop JPG, PNG, WEBP or GIF images here" />
      </section>
    );
  }

  const entries: TrayEntry[] = items.map((it) => ({
    id: it.id,
    name: it.file.name,
    url: it.url,
    meta: (
      <>
        {it.w && it.h ? `${it.w} × ${it.h}` : "…"} · {formatBytes(it.file.size)}
        {it.result && <><Icon name="arrow_forward" className="text-[13px] mx-1 align-middle" /><span className="text-on-surface font-semibold">{it.result.w} × {it.result.h}</span></>}
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
        main={<FileTray entries={entries} accept={ACCEPT} onFiles={addFiles} onClear={reset} busy={isWorking} />}
        rail={
          <SettingsRail
            title="Resize Settings"
            icon="photo_size_select_large"
            accent={ACCENT}
            footer={
              <>
                <RailNote>
                  {previewDims
                    ? <>First image → {previewDims.width} × {previewDims.height} px{items.length > 1 && keepAspect ? " — each keeps its own ratio" : ""}</>
                    : "Keep aspect ratio on to avoid stretching."}
                </RailNote>
                <RailAction onClick={resizeAll} busy={isWorking} busyLabel="Resizing…" icon="photo_size_select_large">
                  Resize {items.length > 1 ? `${items.length} images` : "& download"}
                </RailAction>
                {done && items.length > 1 && (
                  <RailSecondaryAction
                    icon="folder_zip"
                    onClick={() => zipAndDownload(items.filter((i) => i.result).map((i) => ({ name: i.result!.name, blob: i.result!.blob })), "omyimage_resized.zip")}
                  >
                    Download all (ZIP)
                  </RailSecondaryAction>
                )}
              </>
            }
          >
          <div className="grid grid-cols-2 gap-1 rounded-lg bg-surface-container p-1">
            {(["pixels", "percent"] as Mode[]).map((m) => (
              <button key={m} type="button" onClick={() => setMode(m)} className={`rounded-md px-3 py-2 text-body-md font-semibold capitalize transition-colors ${mode === m ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant hover:text-primary"}`}>
                {m === "pixels" ? "By pixels" : "By percent"}
              </button>
            ))}
          </div>

          {mode === "pixels" ? (
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5"><label className="text-label-sm font-label-sm text-on-surface-variant">Width (px)</label><input type="number" min={1} value={widthStr} onChange={(e) => onWidth(e.target.value)} className={fieldCls} /></div>
                <div className="flex flex-col gap-1.5"><label className="text-label-sm font-label-sm text-on-surface-variant">Height (px)</label><input type="number" min={1} value={heightStr} onChange={(e) => onHeight(e.target.value)} className={fieldCls} /></div>
              </div>
              <label className="flex items-center gap-2.5 cursor-pointer">
                <input type="checkbox" checked={keepAspect} onChange={(e) => setKeepAspect(e.target.checked)} className="w-4 h-4 accent-secondary" />
                <span className="text-body-md text-on-surface flex items-center gap-1.5"><Icon name="link" className="text-[18px]" /> Keep aspect ratio (fit)</span>
              </label>
            </div>
          ) : (
            <div className="flex flex-col gap-1.5">
              <label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>Scale</span><span className="text-primary font-semibold">{Math.max(1, toInt(percentStr))}%</span></label>
              <input type="range" min={1} max={200} step={1} value={Math.max(1, toInt(percentStr))} onChange={(e) => setPercentStr(e.target.value)} className="w-full accent-secondary" />
            </div>
          )}

          <div className="flex flex-col gap-1.5">
            <label className="text-label-sm font-label-sm text-on-surface-variant">Output format</label>
            <select value={format} onChange={(e) => setFormat(e.target.value as Format)} className={fieldCls}>{FORMATS.map((f) => <option key={f.value} value={f.value}>{f.label}</option>)}</select>
          </div>
          {showQuality && (
            <div className="flex flex-col gap-1.5">
              <label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>Quality</span><span className="text-primary font-semibold">{Math.round(quality * 100)}%</span></label>
              <input type="range" min={0.5} max={1} step={0.01} value={quality} onChange={(e) => setQuality(parseFloat(e.target.value))} className="w-full accent-secondary" />
            </div>
          )}
          {showBg && <BackgroundPicker value={bg} onChange={setBg} allowTransparent={false} label="JPG background" />}
          </SettingsRail>
        }
      />
    </>
  );
}

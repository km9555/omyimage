"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { CropDialog, type Quarter } from "@/components/image/CropDialog";
import { BackgroundPicker, resolveBg, type BgValue } from "@/components/BackgroundPicker";
import { ToolWorkspace, filesHeader } from "@/components/tool/ToolWorkspace";
import { FileTray, TrayAction, TrayIconButton, type TrayEntry } from "@/components/tool/FileTray";
import { SettingsRail, RailAction, RailSecondaryAction, RailNote } from "@/components/tool/SettingsRail";
import {
  shouldUseServer, shouldUseServerForFile, toServerFormat, processOnServer, canBrowserHandlePixels,
} from "@/lib/process-router";
import {
  rasterize, imageSize, downloadBlob, zipAndDownload, formatBytes, baseName, mimeExt,
  decodeBitmap, canvasToBlob, type ExportMime,
} from "@/lib/image/raster";
import { renderCrop, type CropSel } from "@/lib/image/crop";
import { fitBox, FIT_NOTE, type FitMode } from "@/lib/image/fit";
import { SOCIAL_PLATFORMS, presetLabel, CUSTOM_PRESET } from "@/lib/social-presets";
import { useHandoff } from "@/lib/tool-handoff";

const ACCENT = "#4B8FC7";
const ACCEPT = "image/jpeg,image/png,image/webp,image/gif,image/bmp";

type Mode = "pixels" | "percent" | "social";
type Format = "original" | ExportMime;

type Item = {
  id: string;
  /** The file as it was added. Never mutated — every edit re-renders from it. */
  original: File;
  /** What gets resized: `original` until a crop or rotation is applied. */
  file: File;
  /** Object URL for `file`. Replaced (and revoked) whenever `file` changes. */
  url: string;
  /** Dimensions of `file`, i.e. after any edit. */
  w?: number;
  h?: number;
  /** Dimensions of `original`. */
  ow?: number;
  oh?: number;
  rotate: Quarter;
  /** Normalised 0–1, in post-rotation space. null = the whole frame. */
  crop: CropSel | null;
  result?: { blob: Blob; size: number; name: string; w: number; h: number };
};

/**
 * What one file will be turned into.
 *
 * `content` is the drawn size and `out` the exported size — they differ only
 * when a social preset pads. `serverFit`/`serverSize` are the same intent
 * expressed for sharp, since the >16MP path cannot pre-compute pixels locally.
 */
type Plan = {
  content: { width: number; height: number };
  out: { width: number; height: number };
  source?: { x: number; y: number; w: number; h: number };
  serverFit: "fill" | FitMode;
  serverSize: { width: number; height: number };
};

const FORMATS: { label: string; value: Format }[] = [
  { label: "Same as original", value: "original" },
  { label: "JPG", value: "image/jpeg" },
  { label: "PNG", value: "image/png" },
  { label: "WEBP", value: "image/webp" },
];

const MODES: { value: Mode; label: string }[] = [
  { value: "pixels", label: "By pixels" },
  { value: "percent", label: "By percent" },
  { value: "social", label: "Social media" },
];

const FITS: { value: FitMode; label: string; hint: string }[] = [
  { value: "cover", label: "Crop to fill", hint: "Exactly the preset size, overflow trimmed off the edges." },
  { value: "contain", label: "Pad", hint: "Exactly the preset size, the whole image kept, bars filled in." },
  { value: "inside", label: "Fit inside", hint: "Keeps the ratio, so the output is smaller than the preset." },
];

const FULL_SEL: CropSel = { x: 0, y: 0, w: 1, h: 1 };

let counter = 0;
const uid = () => `f${Date.now()}_${counter++}`;
const toInt = (s: string) => { const n = parseInt(s, 10); return Number.isFinite(n) ? n : 0; };

function outMimeFor(file: File, fmt: Format): ExportMime {
  if (fmt !== "original") return fmt;
  const t = file.type;
  return t === "image/jpeg" || t === "image/webp" || t === "image/png" ? (t as ExportMime) : "image/png";
}

/**
 * Format an edited working file is held in between the edit and the export.
 *
 * PNG for anything that might carry alpha, so a cropped GIF or BMP does not
 * gain a white background on the way through. The single JPG re-encode only
 * happens to files that were already JPG.
 */
function workingMime(file: File): ExportMime {
  if (file.type === "image/jpeg") return "image/jpeg";
  if (file.type === "image/webp") return "image/webp";
  return "image/png";
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

  // Per-image editing.
  const [cropId, setCropId] = useState<string | null>(null);
  const [infoId, setInfoId] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Social media mode.
  const [platformId, setPlatformId] = useState(SOCIAL_PLATFORMS[0].id);
  const [presetKey, setPresetKey] = useState("0");
  const [socialW, setSocialW] = useState(String(SOCIAL_PLATFORMS[0].presets[0].w));
  const [socialH, setSocialH] = useState(String(SOCIAL_PLATFORMS[0].presets[0].h));
  const [fit, setFit] = useState<FitMode>("cover");

  /*
    Revoke preview URLs on UNMOUNT only — the ref-mirror pattern from
    CropTool/ConvertTool. Revoking in a `[items]` cleanup (as this tool used to)
    tears down every thumbnail on each state change, and now that an edit swaps
    a file's URL for a fresh one it would break the images outright. URLs that
    an edit replaces are revoked explicitly at the point of replacement.
  */
  const itemsRef = useRef<Item[]>([]);
  useEffect(() => { itemsRef.current = items; }, [items]);
  useEffect(() => () => { itemsRef.current.forEach((i) => URL.revokeObjectURL(i.url)); }, []);

  const first = items[0];

  /*
    Whether a drop has already claimed the right to prefill Width/Height.

    `imageSize` decodes every file independently, so a prefill written from
    inside the per-file loop is won by whichever image RESOLVED first — on a
    multi-file drop that is usually the smallest file, not the one the user
    dropped first. The claim is therefore taken synchronously, at drop time,
    and only `next[0]` of the claiming drop may fill the boxes. It is released
    again if that file fails to decode, so a later drop can still prefill.
  */
  const prefilledRef = useRef(false);

  const addFiles = useCallback((incoming: FileList | File[]) => {
    const imgs = Array.from(incoming).filter((f) => f.type.startsWith("image/"));
    if (imgs.length === 0) { toast.error("Please select image files."); return; }
    setDone(false);
    const next: Item[] = imgs.map((file) => ({
      id: uid(), original: file, file, url: URL.createObjectURL(file), rotate: 0, crop: null,
    }));
    setItems((prev) => [...prev, ...next]);

    // One decode per file, shared by the recording pass and the prefill below.
    const sizes = next.map((it) => imageSize(it.file));

    // Every file records its own dimensions, in whatever order it resolves.
    next.forEach(async (it, i) => {
      try {
        const { w, h } = await sizes[i];
        setItems((prev) => prev.map((p) => (p.id === it.id ? { ...p, w, h, ow: w, oh: h } : p)));
      } catch { /* ignore */ }
    });

    // Prefill dimensions from the first image of this drop. `cur === ""` still
    // leaves a value the user has already typed alone.
    if (prefilledRef.current) return;
    prefilledRef.current = true;
    void (async () => {
      try {
        const { w, h } = await sizes[0];
        setWidthStr((cur) => (cur === "" ? String(w) : cur));
        setHeightStr((cur) => (cur === "" ? String(h) : cur));
      } catch { prefilledRef.current = false; }
    })();
  }, []);

  useHandoff(addFiles);

  const removeItem = (id: string) => setItems((prev) => {
    const it = prev.find((p) => p.id === id);
    if (it) URL.revokeObjectURL(it.url);
    return prev.filter((p) => p.id !== id);
  });

  const reset = () => {
    items.forEach((i) => URL.revokeObjectURL(i.url));
    setItems([]);
    setWidthStr("");
    setHeightStr("");
    prefilledRef.current = false;
    setDone(false);
    setInfoId(null);
    setCropId(null);
  };

  /*
    Apply a crop and/or rotation by re-rendering the working file FROM THE
    ORIGINAL, never from the last render. Four rotate clicks therefore cost one
    generational re-encode rather than four, and the whole export path below
    stays untouched: it only ever sees `it.file` and `it.w`/`it.h`.
  */
  const applyEdit = useCallback(async (id: string, crop: CropSel | null, rotate: Quarter) => {
    const it = itemsRef.current.find((p) => p.id === id);
    if (!it) return;
    setEditingId(id);
    setDone(false);
    try {
      let file = it.original;
      let w = it.ow;
      let h = it.oh;

      if (crop || rotate !== 0) {
        const bmp = await decodeBitmap(it.original, true);
        try {
          const canvas = document.createElement("canvas");
          renderCrop(
            canvas, bmp, crop ?? FULL_SEL, "rect",
            { rotate, flipH: false, flipV: false, straighten: 0 },
            { target: "original", background: null }
          );
          const mime = workingMime(it.original);
          const blob = await canvasToBlob(canvas, mime, 0.95);
          file = new File([blob], it.original.name, { type: mime });
          w = canvas.width;
          h = canvas.height;
        } finally {
          bmp.close();
        }
      }

      const url = URL.createObjectURL(file);
      setItems((prev) => prev.map((p) => {
        if (p.id !== id) return p;
        URL.revokeObjectURL(p.url);
        return { ...p, file, url, w, h, crop, rotate, result: undefined };
      }));
    } catch (err) {
      console.error(err);
      toast.error("Couldn't apply that edit.");
    } finally {
      setEditingId(null);
    }
  }, []);

  const rotateBy = (it: Item, dir: 1 | -1) =>
    applyEdit(it.id, it.crop, ((((it.rotate + dir * 90) % 360) + 360) % 360) as Quarter);

  /** Editing needs a canvas of the source's own size, which has a browser ceiling. */
  const canEdit = (it: Item) => !!it.ow && !!it.oh && canBrowserHandlePixels(it.ow * it.oh);

  // Lock-aspect: editing one dimension recomputes the other from the first image.
  const onWidth = (v: string) => {
    setWidthStr(v);
    if (keepAspect && first?.w && first?.h) { const w = toInt(v); if (w > 0) setHeightStr(String(Math.round(w * (first.h / first.w)))); }
  };
  const onHeight = (v: string) => {
    setHeightStr(v);
    if (keepAspect && first?.w && first?.h) { const h = toInt(v); if (h > 0) setWidthStr(String(Math.round(h * (first.w / first.h)))); }
  };

  const platform = SOCIAL_PLATFORMS.find((p) => p.id === platformId) ?? SOCIAL_PLATFORMS[0];

  const pickPlatform = (id: string) => {
    const p = SOCIAL_PLATFORMS.find((x) => x.id === id) ?? SOCIAL_PLATFORMS[0];
    setPlatformId(id);
    setPresetKey("0");
    setSocialW(String(p.presets[0].w));
    setSocialH(String(p.presets[0].h));
  };

  const pickPreset = (key: string) => {
    setPresetKey(key);
    const p = platform.presets[Number(key)];
    if (p) { setSocialW(String(p.w)); setSocialH(String(p.h)); }
  };

  /* Typing a size means the preset no longer describes it — say so rather than
     leaving the dropdown quietly disagreeing with the numbers below it. */
  const onSocialW = (v: string) => { setSocialW(v); setPresetKey(CUSTOM_PRESET); };
  const onSocialH = (v: string) => { setSocialH(v); setPresetKey(CUSTOM_PRESET); };

  const planFor = (it: Item): Plan | null => {
    if (!it.w || !it.h) return null;

    if (mode === "social") {
      const W = toInt(socialW);
      const H = toInt(socialH);
      if (W <= 0 || H <= 0) return null;
      const f = fitBox(it.w, it.h, W, H, fit);
      return {
        content: { width: f.content.w, height: f.content.h },
        out: { width: f.canvas.w, height: f.canvas.h },
        source: f.source,
        serverFit: fit,
        serverSize: { width: W, height: H },
      };
    }

    if (mode === "percent") {
      const p = Math.max(1, toInt(percentStr)) / 100;
      const d = { width: Math.max(1, Math.round(it.w * p)), height: Math.max(1, Math.round(it.h * p)) };
      return { content: d, out: d, serverFit: "fill", serverSize: d };
    }

    const W = toInt(widthStr);
    const H = toInt(heightStr);
    if (W <= 0 && H <= 0) return null;
    const d = keepAspect
      ? (() => {
          const s = Math.min(W > 0 ? W / it.w : Infinity, H > 0 ? H / it.h : Infinity);
          return { width: Math.max(1, Math.round(it.w * s)), height: Math.max(1, Math.round(it.h * s)) };
        })()
      : { width: Math.max(1, W || it.w), height: Math.max(1, H || it.h) };
    return { content: d, out: d, serverFit: "fill", serverSize: d };
  };

  const previewPlan = useMemo(
    () => (first ? planFor(first) : null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [first, mode, widthStr, heightStr, percentStr, keepAspect, socialW, socialH, fit]
  );

  const anyJpg = items.some((it) => outMimeFor(it.file, format) === "image/jpeg");
  const isPadding = mode === "social" && fit === "contain";
  const showBg = anyJpg || isPadding;
  const showQuality = format !== "image/png";

  const resizeAll = async () => {
    if (items.length === 0) return;
    setIsWorking(true);
    try {
      const out: Item[] = [];
      for (const it of items) {
        const plan = planFor(it);
        if (!plan) { out.push(it); continue; }
        const mime = outMimeFor(it.file, format);
        // Padding needs a fill even on a format that could stay transparent,
        // unless the user explicitly chose transparent.
        const padding = plan.out.width !== plan.content.width || plan.out.height !== plan.content.height;
        const fill = mime === "image/jpeg" || padding ? resolveBg(bg) : null;
        let blob: Blob;
        let width = plan.out.width;
        let height = plan.out.height;
        // Pixels, not bytes — see process-router.ts.
        const useServer = it.w && it.h
          ? shouldUseServer(it.file.size, { width: it.w, height: it.h })
          : await shouldUseServerForFile(it.file);
        if (useServer) {
          // Past the browser's canvas ceiling or the byte cap → offload to the
          // shared oMyPDF backend (Sharp, /api/image/*). It takes the same fit
          // names, so a social preset crops or pads server-side identically.
          const r = await processOnServer("/api/image/resize", it.file, {
            width: plan.serverSize.width, height: plan.serverSize.height,
            fit: plan.serverFit,
            format: toServerFormat(mime), quality,
            background: fill ?? undefined,
          });
          blob = r.blob;
        } else {
          const r = await rasterize(it.file, {
            mime, quality, background: fill,
            resize: plan.content,
            source: plan.source,
            canvas: plan.out,
            autoOrient: true,
          });
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
  const segCls = (on: boolean) =>
    `rounded-md px-2 py-2 text-body-md font-semibold transition-colors ${
      on ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant hover:text-primary"
    }`;

  if (items.length === 0) {
    return (
      <section>
        <TopLoadingBar active={isWorking} />
        <Dropzone onFiles={addFiles} accept={ACCEPT} accent={ACCENT} icon="photo_size_select_large" hint="or drop JPG, PNG, WEBP or GIF images here" />
      </section>
    );
  }

  const cropItem = items.find((i) => i.id === cropId) ?? null;

  const entries: TrayEntry[] = items.map((it) => {
    const plan = planFor(it);
    const edited = it.crop !== null || it.rotate !== 0;
    const busy = editingId === it.id;
    const editable = canEdit(it) && !busy && !isWorking;
    const tooBig = !canEdit(it);
    const why = tooBig ? "This image is too large to edit in the browser" : undefined;

    return {
      id: it.id,
      name: it.file.name,
      url: it.url,
      meta: (
        <>
          {it.w && it.h ? `${it.w} × ${it.h}` : "…"} · {formatBytes(it.file.size)}
          {edited && <span className="ml-1.5 text-secondary font-semibold">· edited</span>}
          {it.result && <><Icon name="arrow_forward" className="text-[13px] mx-1 align-middle" /><span className="text-on-surface font-semibold">{it.result.w} × {it.result.h}</span></>}
        </>
      ),
      /* The edit buttons live in their own band above the thumbnail, never over
         it — five of them floated on a ~133px card cover the picture the user
         is trying to judge the crop against. The download, once there is one,
         is a single button and reads fine in the corner. */
      action: it.result ? (
        <TrayAction icon="download" tone="accent" label="Download" onClick={() => downloadBlob(it.result!.blob, it.result!.name)} />
      ) : undefined,
      toolbar: it.result ? undefined : (
        <>
          {busy ? (
            <span className="flex h-6 w-6 items-center justify-center text-secondary">
              <Icon name="progress_activity" className="animate-spin text-[15px]" />
            </span>
          ) : (
            <TrayIconButton icon="crop" label={why ?? "Crop"} disabled={!editable} onClick={() => setCropId(it.id)} />
          )}
          <TrayIconButton icon="rotate_left" label={why ?? "Rotate left"} disabled={!editable} onClick={() => rotateBy(it, -1)} />
          <TrayIconButton icon="rotate_right" label={why ?? "Rotate right"} disabled={!editable} onClick={() => rotateBy(it, 1)} />
          <TrayIconButton icon="info" label="Details" active={infoId === it.id} onClick={() => setInfoId((cur) => (cur === it.id ? null : it.id))} />
          <TrayIconButton icon="close" label="Remove" tone="danger" disabled={isWorking} onClick={() => removeItem(it.id)} />
        </>
      ),
      controls: infoId === it.id ? (
        <dl className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-0.5 rounded-lg bg-surface-container px-2.5 py-2 text-label-sm font-label-sm">
          <dt className="text-on-surface-variant">Type</dt>
          <dd className="truncate text-on-surface">{it.file.type || "unknown"}</dd>
          <dt className="text-on-surface-variant">Original</dt>
          <dd className="text-on-surface">{it.ow && it.oh ? `${it.ow} × ${it.oh} px` : "…"}</dd>
          <dt className="text-on-surface-variant">Current</dt>
          <dd className="text-on-surface">{it.w && it.h ? `${it.w} × ${it.h} px` : "…"}</dd>
          <dt className="text-on-surface-variant">Size</dt>
          <dd className="text-on-surface">{formatBytes(it.file.size)}</dd>
          <dt className="text-on-surface-variant">Target</dt>
          <dd className="font-semibold text-secondary">{plan ? `${plan.out.width} × ${plan.out.height} px` : "set a size"}</dd>
        </dl>
      ) : undefined,
    };
  });

  return (
    <>
      <TopLoadingBar active={isWorking || editingId !== null} />
      <ToolWorkspace
        /* Below `md` this becomes the full-screen app shell: the tray is the
           body, the rail moves into a sheet, and this tool's primary action
           becomes the bottom bar CTA. Desktop is untouched. */
        mobile={{
          ...filesHeader(items.map((i) => i.file)),
          onBack: reset,
          backLabel: "Clear files",
          settingsTitle: "Resize settings",
          cta: {
            icon: "photo_size_select_large",
            label: "Resize",
            busyLabel: "Resizing…",
            busy: isWorking,
            onClick: resizeAll,
          },
        }}
        main={<FileTray entries={entries} accept={ACCEPT} onFiles={addFiles} onClear={reset} busy={isWorking} />}
        rail={
          <SettingsRail
            title="Resize Settings"
            icon="photo_size_select_large"
            accent={ACCENT}
            footer={
              <>
                <RailNote>
                  {previewPlan
                    ? <>
                        First image → {previewPlan.out.width} × {previewPlan.out.height} px
                        {mode === "social" ? ` · ${FIT_NOTE[fit]}` : items.length > 1 && keepAspect ? " — each keeps its own ratio" : ""}
                      </>
                    : mode === "social" ? "Pick a platform and a preset size." : "Keep aspect ratio on to avoid stretching."}
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
          <div className="grid grid-cols-3 gap-1 rounded-lg bg-surface-container p-1">
            {MODES.map((m) => (
              <button key={m.value} type="button" onClick={() => setMode(m.value)} className={segCls(mode === m.value)}>
                {m.label}
              </button>
            ))}
          </div>

          {mode === "pixels" && (
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
          )}

          {mode === "percent" && (
            <div className="flex flex-col gap-1.5">
              <label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>Scale</span><span className="text-primary font-semibold">{Math.max(1, toInt(percentStr))}%</span></label>
              <input type="range" min={1} max={200} step={1} value={Math.max(1, toInt(percentStr))} onChange={(e) => setPercentStr(e.target.value)} className="w-full accent-secondary" />
            </div>
          )}

          {mode === "social" && (
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-label-sm font-label-sm text-on-surface-variant">Choose the social media platform</label>
                <select value={platformId} onChange={(e) => pickPlatform(e.target.value)} className={fieldCls}>
                  {SOCIAL_PLATFORMS.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-label-sm font-label-sm text-on-surface-variant">Preset type</label>
                <select value={presetKey} onChange={(e) => pickPreset(e.target.value)} className={fieldCls}>
                  {platform.presets.map((p, i) => <option key={p.label} value={String(i)}>{presetLabel(p)}</option>)}
                  <option value={CUSTOM_PRESET}>Custom size</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5"><label className="text-label-sm font-label-sm text-on-surface-variant">Width (px)</label><input type="number" min={1} value={socialW} onChange={(e) => onSocialW(e.target.value)} className={fieldCls} /></div>
                <div className="flex flex-col gap-1.5"><label className="text-label-sm font-label-sm text-on-surface-variant">Height (px)</label><input type="number" min={1} value={socialH} onChange={(e) => onSocialH(e.target.value)} className={fieldCls} /></div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-label-sm font-label-sm text-on-surface-variant">How to fit the image</label>
                <div className="grid grid-cols-3 gap-1 rounded-lg bg-surface-container p-1">
                  {FITS.map((f) => (
                    <button key={f.value} type="button" title={f.hint} onClick={() => setFit(f.value)} className={`${segCls(fit === f.value)} text-label-md`}>
                      {f.label}
                    </button>
                  ))}
                </div>
                <p className="text-label-sm font-label-sm text-on-surface-variant">{FITS.find((f) => f.value === fit)?.hint}</p>
              </div>
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
          {showBg && (
            <BackgroundPicker
              value={bg}
              onChange={setBg}
              /* Transparent is only honest when nothing in the batch exports as
                 JPG, which cannot store it. */
              allowTransparent={isPadding && !anyJpg}
              label={isPadding ? "Padding colour" : "JPG background"}
            />
          )}
          </SettingsRail>
        }
      />

      {cropItem && (
        <CropDialog
          file={cropItem.original}
          initialSel={cropItem.crop}
          initialRotate={cropItem.rotate}
          accent={ACCENT}
          onCancel={() => setCropId(null)}
          onApply={(sel, rotate) => { setCropId(null); void applyEdit(cropItem.id, sel, rotate); }}
        />
      )}
    </>
  );
}

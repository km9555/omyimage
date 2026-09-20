"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { HelpTip } from "@/components/HelpTip";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { MergeCanvas } from "@/components/image/MergeCanvas";
import { ToolWorkspace, filesHeader } from "@/components/tool/ToolWorkspace";
import { FileTray, TrayAction, type TrayEntry } from "@/components/tool/FileTray";
import { SettingsRail, RailAction, RailNote } from "@/components/tool/SettingsRail";
import { BackgroundPicker, resolveBg, type BgValue } from "@/components/BackgroundPicker";
import {
  decodeBitmap, canvasToBlob, downloadBlob, mimeExt, type ExportMime,
} from "@/lib/image/raster";
import {
  layoutAuto, paintMerge, CELL_FITS, type CellFit, type MergeLayout, type MergePlacement,
} from "@/lib/image/merge";
import { boundsOf, translateAll } from "@/lib/image/obb";
import { ASPECT_PRESETS } from "@/lib/image/frame";
import { useHandoff } from "@/lib/tool-handoff";
import { useFormatBytes, useT } from "@/i18n/I18nScope";

const ACCENT = "#C99B47";
const ACCEPT = "image/jpeg,image/png,image/webp";

type Item = { id: string; file: File; url: string; w?: number; h?: number };

const FORMATS: { label: string; value: ExportMime }[] = [
  { label: "PNG", value: "image/png" },
  { label: "JPG", value: "image/jpeg" },
  { label: "WEBP", value: "image/webp" },
];

// LAYOUTS, CELL_FITS and ASPECT_PRESETS are module scope: labels and hints are
// translated at the render site, keys in merge-images.<loc>.ts (conversion.md §4.2).
const LAYOUTS: { value: MergeLayout; label: string; icon: string; hint: string }[] = [
  { value: "horizontal", label: "Side by side", icon: "view_column", hint: "One row, left to right" },
  { value: "vertical", label: "Stacked", icon: "view_stream", hint: "One column, top to bottom" },
  { value: "grid", label: "Grid", icon: "grid_view", hint: "Rows and columns" },
  { value: "custom", label: "Custom", icon: "open_with", hint: "Move, rotate and resize by hand" },
];

const CHECKER: React.CSSProperties = {
  backgroundColor: "#fff",
  backgroundImage:
    "linear-gradient(45deg,#cbd5e1 25%,transparent 25%),linear-gradient(-45deg,#cbd5e1 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#cbd5e1 75%),linear-gradient(-45deg,transparent 75%,#cbd5e1 75%)",
  backgroundSize: "16px 16px",
  backgroundPosition: "0 0,0 8px,8px -8px,-8px 0",
};

let counter = 0;
const uid = () => `f${Date.now()}_${counter++}`;

/** A miniature of each arrangement, for the layout tiles. */
function LayoutGlyph({ kind, on }: { kind: MergeLayout; on: boolean }) {
  const fill = on ? ACCENT : "currentColor";
  const box = (x: number, y: number, w: number, h: number, r = 1.5, rot = 0) => (
    <rect key={`${x}-${y}-${rot}`} x={x} y={y} width={w} height={h} rx={r} fill={fill} opacity={on ? 0.9 : 0.45}
      transform={rot ? `rotate(${rot} ${x + w / 2} ${y + h / 2})` : undefined} />
  );
  return (
    <svg viewBox="0 0 40 28" className="h-7 w-10" aria-hidden="true">
      {kind === "horizontal" && [box(3, 5, 10, 18), box(15, 5, 10, 18), box(27, 5, 10, 18)]}
      {kind === "vertical" && [box(6, 3, 28, 6), box(6, 11, 28, 6), box(6, 19, 28, 6)]}
      {kind === "grid" && [box(5, 4, 14, 9), box(21, 4, 14, 9), box(5, 15, 14, 9), box(21, 15, 14, 9)]}
      {kind === "custom" && [box(4, 6, 15, 12, 1.5, -12), box(18, 9, 17, 13, 1.5, 9)]}
    </svg>
  );
}

export function MergeTool() {
  const t = useT();
  const formatBytes = useFormatBytes();
  const [items, setItems] = useState<Item[]>([]);
  const [layout, setLayout] = useState<MergeLayout>("horizontal");
  /* The arrangement Custom was seeded from, so Re-arrange tidies back into the
     layout you actually came from rather than always falling to a row. */
  const [lastAuto, setLastAuto] = useState<"horizontal" | "vertical" | "grid">("horizontal");
  const [gap, setGap] = useState(0);
  const [cols, setCols] = useState<number | null>(null);
  const [fit, setFit] = useState<CellFit>("original");
  const [bg, setBg] = useState<BgValue>({ transparent: false, color: "#ffffff" });
  const [format, setFormat] = useState<ExportMime>("image/png");
  const [quality, setQuality] = useState(0.92);
  const [isWorking, setIsWorking] = useState(false);
  const [ready, setReady] = useState(0);

  /* Custom mode. `custom` is null until the mode is first entered, at which
     point it is seeded from whatever the auto layout had just produced — that
     seeding is the whole point of the mode, so there is nothing to convert and
     nothing jumps when you switch. */
  const [custom, setCustom] = useState<{ W: number; H: number; placements: MergePlacement[] } | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [ratio, setRatio] = useState<number | null>(null);

  const bmps = useRef<Map<string, ImageBitmap>>(new Map());

  const bgFill = format === "image/jpeg" ? resolveBg(bg) ?? "#ffffff" : bg.transparent ? null : resolveBg(bg);

  /* Revoke preview URLs on UNMOUNT only. Depending on `items` runs the cleanup
     on every list change — a reorder included — revoking URLs the very next
     render still points at, which shows as broken thumbnails. Reordering is now
     a drag away, so this had to be fixed. */
  const itemsRef = useRef<Item[]>([]);
  useEffect(() => { itemsRef.current = items; }, [items]);
  useEffect(() => () => { itemsRef.current.forEach((i) => URL.revokeObjectURL(i.url)); }, []);

  // Decode newly-added images; drop bitmaps for removed ones.
  useEffect(() => {
    let alive = true;
    const ids = new Set(items.map((i) => i.id));
    for (const [id, b] of bmps.current) if (!ids.has(id)) { b.close(); bmps.current.delete(id); }
    const missing = items.filter((i) => !bmps.current.has(i.id));
    if (missing.length === 0) { setReady((n) => n + 1); return; }
    Promise.all(missing.map(async (it) => {
      try {
        const b = await decodeBitmap(it.file);
        bmps.current.set(it.id, b);
        setItems((prev) => prev.map((p) => (p.id === it.id ? { ...p, w: b.width, h: b.height } : p)));
      } catch { /* skip */ }
    })).then(() => { if (alive) setReady((n) => n + 1); });
    return () => { alive = false; };
  }, [items]);

  const sizes = useMemo(
    () => items.filter((i) => i.w && i.h).map((i) => ({ id: i.id, w: i.w!, h: i.h! })),
    [items]
  );

  const auto = useMemo(
    () => layoutAuto(sizes, { layout: layout === "custom" ? lastAuto : layout, gap, cols, fit }),
    [sizes, layout, lastAuto, gap, cols, fit]
  );

  /* What is actually drawn. Custom uses its own placements; every other mode
     recomputes from scratch, which is what makes switching back re-tidy. */
  const scene = layout === "custom" && custom ? custom : auto;

  // Entering Custom seeds from the arrangement on screen a moment ago.
  const chooseLayout = (next: MergeLayout) => {
    if (next !== "custom") setLastAuto(next);
    if (next === "custom" && !custom) {
      const from = layout === "custom" ? lastAuto : layout;
      const seed = layoutAuto(sizes, { layout: from, gap, cols, fit });
      setCustom({ W: seed.W, H: seed.H, placements: seed.placements });
    }
    setLayout(next);
    setSelectedId(null);
  };

  const reseedCustom = () => {
    const seed = layoutAuto(sizes, { layout: lastAuto, gap, cols, fit });
    setCustom({ W: seed.W, H: seed.H, placements: seed.placements });
    setSelectedId(null);
    setRatio(null);
  };

  /** Resize the custom canvas to a ratio, keeping the content centred. */
  const applyRatio = (r: number | null) => {
    setRatio(r);
    if (!custom) return;
    if (r === null) return;
    const baseW = custom.W;
    const baseH = custom.H;
    let W = baseW;
    let H = baseH;
    if (baseW / baseH < r) W = Math.round(baseH * r);
    else H = Math.round(baseW / r);
    setCustom({ W, H, placements: translateAll(custom.placements, (W - baseW) / 2, (H - baseH) / 2) });
  };

  const fitToContent = () => {
    if (!custom) return;
    const b = boundsOf(custom.placements);
    if (!b || b.w <= 0 || b.h <= 0) return;
    setCustom({
      W: Math.round(b.w),
      H: Math.round(b.h),
      placements: translateAll(custom.placements, -b.x, -b.y),
    });
    setRatio(null);
  };

  const addFiles = useCallback((incoming: FileList | File[]) => {
    const imgs = Array.from(incoming).filter((f) => f.type.startsWith("image/"));
    if (imgs.length === 0) { toast.error(t("Please select image files.")); return; }
    setItems((prev) => [...prev, ...imgs.map((file) => ({ id: uid(), file, url: URL.createObjectURL(file) }))]);
    // A new image has no place in an existing hand-made arrangement, so the
    // custom seed is dropped rather than leaving the newcomer invisible.
    setCustom(null);
  }, [t]);

  useHandoff(addFiles);

  const removeItem = (id: string) => {
    setItems((prev) => { const it = prev.find((p) => p.id === id); if (it) URL.revokeObjectURL(it.url); return prev.filter((p) => p.id !== id); });
    setCustom((c) => (c ? { ...c, placements: c.placements.filter((p) => p.id !== id) } : c));
    if (selectedId === id) setSelectedId(null);
  };
  const reset = () => {
    items.forEach((i) => URL.revokeObjectURL(i.url));
    setItems([]);
    setCustom(null);
    setSelectedId(null);
  };

  const move = (i: number, dir: -1 | 1) => setItems((prev) => {
    const j = i + dir;
    if (j < 0 || j >= prev.length) return prev;
    const next = [...prev];
    [next[i], next[j]] = [next[j], next[i]];
    return next;
  });

  const reorder = (from: number, to: number) => setItems((prev) => {
    if (from === to || from < 0 || to < 0 || from >= prev.length || to >= prev.length) return prev;
    const next = [...prev];
    const [moved] = next.splice(from, 1);
    next.splice(to, 0, moved);
    return next;
  });

  /** Raise or lower the selected image in the stack. Custom mode only. */
  const restack = (dir: -1 | 1) => {
    if (!custom || !selectedId) return;
    const i = custom.placements.findIndex((p) => p.id === selectedId);
    const j = i + dir;
    if (i < 0 || j < 0 || j >= custom.placements.length) return;
    const next = [...custom.placements];
    [next[i], next[j]] = [next[j], next[i]];
    setCustom({ ...custom, placements: next });
  };

  const exportMerged = async () => {
    if (items.length < 1) return;
    setIsWorking(true);
    try {
      if (!scene.W || !scene.H || scene.placements.length === 0) {
        throw new Error(t("Images are still loading — try again in a moment."));
      }
      const canvas = document.createElement("canvas");
      // The same painter the preview uses, at full size — so the download is
      // exactly what was on screen.
      paintMerge(canvas, bmps.current as Map<string, CanvasImageSource>, scene.W, scene.H, scene.placements, bgFill);
      const blob = await canvasToBlob(canvas, format, quality);
      downloadBlob(blob, `omyimage_merged.${mimeExt(format)}`);
      toast.success(scene.placements.length === 1 ? t("Merged 1 image.") : t("Merged {n} images.", { n: scene.placements.length }));
    } catch (err) {
      console.error(err);
      toast.error(err instanceof Error ? err.message : t("Merge failed."));
    } finally {
      setIsWorking(false);
    }
  };

  const fieldCls = "w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";
  const sectionLabel = "text-label-sm font-label-sm font-semibold uppercase tracking-wide text-on-surface-variant";

  if (items.length === 0) {
    return (
      <section>
        <TopLoadingBar active={isWorking} />
        <Dropzone onFiles={addFiles} accept={ACCEPT} accent={ACCENT} icon="grid_view" hint={t("or drop two or more JPG, PNG or WEBP images here")} />
      </section>
    );
  }

  const entries: TrayEntry[] = items.map((it, i) => ({
    id: it.id,
    name: it.file.name,
    url: it.url,
    badge: (
      <span className="grid place-items-center w-7 h-7 rounded-full text-label-sm font-bold shrink-0" style={{ backgroundColor: `${ACCENT}1A`, color: ACCENT }}>{i + 1}</span>
    ),
    meta: <>{it.w && it.h ? `${it.w} × ${it.h} · ` : ""}{formatBytes(it.file.size)}</>,
    action: <TrayAction icon="close" label={t("Remove")} disabled={isWorking} onClick={() => removeItem(it.id)} />,
  }));

  const canvasPane = (
    <>
      <div
        className="rounded-xl border border-surface-variant p-4 flex items-center justify-center overflow-hidden"
        style={{ minHeight: 220, ...(bgFill ? { backgroundColor: "var(--color-surface-container)" } : CHECKER) }}
      >
        <MergeCanvas
          W={scene.W}
          H={scene.H}
          placements={scene.placements}
          bmps={bmps.current as Map<string, CanvasImageSource>}
          bg={bgFill}
          selectedId={selectedId}
          onSelect={setSelectedId}
          onChange={(next) => setCustom((c) => (c ? { ...c, placements: next } : c))}
          accent={ACCENT}
          disabled={layout !== "custom"}
        />
      </div>
      <p className="text-center text-label-sm font-label-sm text-on-surface-variant">
        {layout === "custom"
          ? t("Drag to move, corners to resize, the top handle to rotate. Shift snaps the angle, Alt turns off snapping.")
          : t("Live preview of the merged image.")}
        {scene.W > 0 && <> · <span className="font-semibold text-on-surface">{scene.W} × {scene.H} px</span></>}
      </p>
    </>
  );

  const tray = (
    <FileTray
      entries={entries}
      accept={ACCEPT}
      onFiles={addFiles}
      onClear={reset}
      onMove={move}
      onReorder={reorder}
      busy={isWorking}
    />
  );

  return (
    <>
      <TopLoadingBar active={isWorking} />
      <ToolWorkspace
        /* Below `md` this becomes the full-screen app shell. The canvas is a
           `touch-action: none` surface once Custom is on, so the tray has to
           move into its own tab or the swipe that would scroll to it gets eaten
           by the canvas. */
        mobile={{
          ...filesHeader(items.map((i) => i.file)),
          onBack: reset,
          backLabel: t("Clear images"),
          body: canvasPane,
          tabs: [{
            id: "files",
            icon: "photo_library",
            label: t("Files"),
            badge: items.length > 1 ? items.length : undefined,
            sheetTitle: items.length === 1 ? t("1 image") : t("{n} images", { n: items.length }),
            sheet: tray,
          }],
          settingsTitle: t("Merge settings"),
          cta: {
            icon: "grid_view",
            label: t("Merge"),
            busyLabel: t("Merging…"),
            busy: isWorking,
            onClick: exportMerged,
          },
        }}
        main={<>{canvasPane}{tray}</>}
        rail={
          <SettingsRail
            title={t("Merge Settings")}
            icon="grid_view"
            accent={ACCENT}
            footer={
              <>
                <RailNote>
                  {layout === "custom"
                    ? t("Images keep their stacking order — use the layer arrows to change which sits on top.")
                    : t("Drag a thumbnail to reorder. A transparent PNG background keeps the gaps see-through.")}
                </RailNote>
                <RailAction onClick={exportMerged} busy={isWorking} busyLabel={t("Merging…")} icon="grid_view">
                  {t("Merge & download")}
                </RailAction>
              </>
            }
          >
          <div className="flex flex-col gap-2">
            <span className={sectionLabel}>{t("Layout")}</span>
            <div className="grid grid-cols-2 gap-2">
              {LAYOUTS.map((l) => (
                <button
                  key={l.value}
                  type="button"
                  onClick={() => chooseLayout(l.value)}
                  aria-pressed={layout === l.value}
                  title={t(l.hint)}
                  className={`flex flex-col items-center gap-1 rounded-lg border p-2.5 transition-colors ${
                    layout === l.value
                      ? "border-secondary bg-secondary/10"
                      : "border-surface-variant bg-surface-container-lowest hover:border-secondary/50"
                  }`}
                >
                  <span className={layout === l.value ? "text-secondary" : "text-on-surface-variant"}>
                    <LayoutGlyph kind={l.value} on={layout === l.value} />
                  </span>
                  <span className={`text-label-sm font-label-sm ${layout === l.value ? "font-semibold text-secondary" : "text-on-surface-variant"}`}>
                    {t(l.label)}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {layout === "custom" ? (
            <>
              <div className="flex flex-col gap-2">
                <span className={sectionLabel}>{t("Canvas")}</span>
                <div className="grid grid-cols-4 gap-1.5">
                  {ASPECT_PRESETS.map((a) => (
                    <button
                      key={a.label}
                      type="button"
                      onClick={() => applyRatio(a.ratio)}
                      aria-pressed={ratio === a.ratio}
                      className={`flex flex-col items-center gap-0.5 rounded-lg border px-1 py-2 transition-colors ${
                        ratio === a.ratio ? "border-secondary bg-secondary/10" : "border-surface-variant hover:border-secondary/50"
                      }`}
                    >
                      <span className={`text-label-md font-semibold ${ratio === a.ratio ? "text-secondary" : "text-primary"}`}>
                        {a.label === "Original" ? t("Auto") : a.label}
                      </span>
                      {a.hint && <span className="text-[10px] leading-tight text-on-surface-variant">{t(a.hint)}</span>}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button type="button" onClick={fitToContent} className="flex items-center justify-center gap-1.5 rounded-lg border border-surface-variant px-3 py-2.5 text-label-md font-semibold text-primary transition-colors hover:bg-surface-container">
                    <Icon name="crop_free" className="text-[18px]" /> {t("Fit to content")}
                  </button>
                  <button type="button" onClick={reseedCustom} className="flex items-center justify-center gap-1.5 rounded-lg border border-surface-variant px-3 py-2.5 text-label-md font-semibold text-primary transition-colors hover:bg-surface-container">
                    <Icon name="restart_alt" className="text-[18px]" /> {t("Re-arrange")}
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="flex items-center gap-1.5 text-label-sm font-label-sm text-on-surface-variant">
                  {t("Selected image")}
                  <HelpTip text={t("Click an image on the canvas to select it. Drag to move, use the corner handles to resize, and the handle above the top edge to rotate. Arrow keys nudge, Shift makes them move further.")} />
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button type="button" disabled={!selectedId} onClick={() => restack(1)} className="flex items-center justify-center gap-1.5 rounded-lg border border-surface-variant px-3 py-2.5 text-label-md font-semibold text-primary transition-colors hover:bg-surface-container disabled:opacity-40">
                    <Icon name="flip_to_front" className="text-[18px]" /> {t("Bring forward")}
                  </button>
                  <button type="button" disabled={!selectedId} onClick={() => restack(-1)} className="flex items-center justify-center gap-1.5 rounded-lg border border-surface-variant px-3 py-2.5 text-label-md font-semibold text-primary transition-colors hover:bg-surface-container disabled:opacity-40">
                    <Icon name="flip_to_back" className="text-[18px]" /> {t("Send back")}
                  </button>
                </div>
                {!selectedId && (
                  <p className="text-label-sm font-label-sm text-on-surface-variant/70">
                    {t("Nothing selected — click an image on the canvas.")}
                  </p>
                )}
              </div>
            </>
          ) : (
            <>
              {layout === "grid" && (
                <div className="flex flex-col gap-1.5">
                  <label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
                    <span>{t("Columns")}</span>
                    <span className="text-primary font-semibold">{cols ?? t("Auto")}</span>
                  </label>
                  <input type="range" min={0} max={6} step={1} value={cols ?? 0} onChange={(e) => { const v = parseInt(e.target.value, 10); setCols(v === 0 ? null : v); }} className="w-full accent-secondary" />
                  <p className="text-label-sm font-label-sm text-on-surface-variant/70">{t("Auto squares the grid off for you.")}</p>
                </div>
              )}

              <div className="flex flex-col gap-1.5">
                <span className="text-label-sm font-label-sm text-on-surface-variant">{t("Image sizes")}</span>
                <div className="grid grid-cols-3 gap-1 rounded-lg bg-surface-container p-1">
                  {CELL_FITS.map((f) => (
                    <button key={f.value} type="button" onClick={() => setFit(f.value)} title={t(f.hint)}
                      className={`rounded-md px-2 py-2 text-label-md font-semibold transition-colors ${fit === f.value ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant hover:text-primary"}`}>
                      {t(f.label)}
                    </button>
                  ))}
                </div>
                <p className="text-label-sm font-label-sm text-on-surface-variant/70">
                  {t(CELL_FITS.find((f) => f.value === fit)?.hint ?? "")}.
                </p>
              </div>
            </>
          )}

          <div className="flex flex-col gap-1.5">
            <label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>{t("Spacing")}</span><span className="text-primary font-semibold">{gap}px</span></label>
            <input type="range" min={0} max={100} step={1} value={gap} onChange={(e) => setGap(parseInt(e.target.value, 10))} className="w-full accent-secondary" disabled={layout === "custom"} />
          </div>

          <BackgroundPicker value={bg} onChange={setBg} allowTransparent label={t("Background")} />

          <div className="flex flex-col gap-1.5">
            <label className="text-label-sm font-label-sm text-on-surface-variant">{t("Output format")}</label>
            <select value={format} onChange={(e) => setFormat(e.target.value as ExportMime)} className={fieldCls}>{FORMATS.map((f) => <option key={f.value} value={f.value}>{f.label}</option>)}</select>
          </div>
          {format !== "image/png" && (
            <div className="flex flex-col gap-1.5"><label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>{t("Quality")}</span><span className="text-primary font-semibold">{Math.round(quality * 100)}%</span></label><input type="range" min={0.5} max={1} step={0.01} value={quality} onChange={(e) => setQuality(parseFloat(e.target.value))} className="w-full accent-secondary" /></div>
          )}
          </SettingsRail>
        }
      />
    </>
  );
}

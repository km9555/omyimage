"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { ToolWorkspace, filesHeader } from "@/components/tool/ToolWorkspace";
import { FileTray, TrayAction, type TrayEntry } from "@/components/tool/FileTray";
import { SettingsRail, RailAction, RailSecondaryAction } from "@/components/tool/SettingsRail";
import { BackgroundPicker, resolveBg, type BgValue } from "@/components/BackgroundPicker";
import {
  decodeBitmap, canvasToBlob, downloadBlob, zipAndDownload, baseName, mimeExt, type ExportMime,
} from "@/lib/image/raster";
import { previewSource } from "@/lib/image/fx";
import {
  MAX_PIECES, IG_WIDTH, drawPiece, gridPieces, igPieces, igWindow, pad, postNumber, tileCount, tilePieces,
  type IgKind, type IgShape, type Piece,
} from "@/lib/image/split";
import { useHandoff } from "@/lib/tool-handoff";
import { useFormatBytes, useT } from "@/i18n/I18nScope";
import { translateError } from "@/i18n/errors";

/**
 * split-image — a batch of pictures cut into an equal grid or fixed-size tiles.
 * instagram-grid-maker (preset mode "instagram") — one picture cut into 3-wide
 * profile-grid posts or a swipeable carousel, Instagram-sized and numbered in
 * posting order. lib/image/split.ts does the geometry.
 */
const ACCENT = "#4F8FA8";
const ACCEPT = "image/jpeg,image/png,image/webp";

type Format = "original" | ExportMime;
type Out = { name: string; blob: Blob };
type Item = { id: string; file: File; url: string; result?: Out[] };
type How = "grid" | "size";
type Tile = Out & { url: string; label: number };

export type SplitPreset = { mode?: "instagram" };

/** [columns, rows] — written "columns × rows", like width × height. */
const GRID_PRESETS: readonly (readonly [number, number])[] = [[2, 1], [1, 2], [3, 1], [1, 3], [2, 2], [3, 3], [4, 4]];

let counter = 0;
const uid = () => `f${Date.now()}_${counter++}`;
const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

function outMimeFor(file: File, fmt: Format): ExportMime {
  if (fmt !== "original") return fmt;
  const t = file.type;
  return t === "image/jpeg" || t === "image/webp" || t === "image/png" ? (t as ExportMime) : "image/png";
}

export function SplitTool({ preset }: { preset?: SplitPreset }) {
  const ig = preset?.mode === "instagram";
  const t = useT();
  const formatBytes = useFormatBytes();
  const [items, setItems] = useState<Item[]>([]);

  // Split image: an equal grid, or tiles of a fixed size.
  const [how, setHow] = useState<How>("grid");
  const [cols, setCols] = useState(3);
  const [rows, setRows] = useState(3);
  const [tw, setTw] = useState(500);
  const [th, setTh] = useState(500);
  // Instagram: a 3-wide profile grid or a one-row carousel, cut from a window
  // of the picture that `fx` / `fy` slide around.
  const [kind, setKind] = useState<IgKind>("grid");
  const [igRows, setIgRows] = useState(3);
  const [slides, setSlides] = useState(3);
  const [shape, setShape] = useState<IgShape>("3:4");
  const [fx, setFx] = useState(0.5);
  const [fy, setFy] = useState(0.5);

  const [format, setFormat] = useState<Format>(ig ? "image/jpeg" : "original");
  const [quality, setQuality] = useState(0.92);
  const [bg, setBg] = useState<BgValue>({ transparent: false, color: "#ffffff" });
  const [isWorking, setIsWorking] = useState(false);
  const [done, setDone] = useState(false);
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [tileCols, setTileCols] = useState(1);

  const igCols = kind === "grid" ? 3 : slides;
  const igRowCount = kind === "grid" ? igRows : 1;

  // Held in state, not a ref: below `md` ToolWorkspace swaps to the mobile
  // shell after its first render, which mounts a NEW canvas — the draw effect
  // must re-run for it.
  const [previewEl, setPreviewEl] = useState<HTMLCanvasElement | null>(null);
  const pv = useRef<{ canvas: HTMLCanvasElement; k: number; w: number; h: number; W: number; H: number } | null>(null);
  const [pvTick, setPvTick] = useState(0);
  const drag = useRef<{ x: number; y: number; fx: number; fy: number } | null>(null);

  // Revoke object URLs on unmount only (the ConvertTool ref-mirror pattern).
  const itemsRef = useRef<Item[]>([]);
  const tilesRef = useRef<Tile[]>([]);
  useEffect(() => { itemsRef.current = items; }, [items]);
  useEffect(() => { tilesRef.current = tiles; }, [tiles]);
  useEffect(() => () => {
    itemsRef.current.forEach((i) => URL.revokeObjectURL(i.url));
    tilesRef.current.forEach((p) => URL.revokeObjectURL(p.url));
  }, []);

  const firstFile = items[0]?.file;
  useEffect(() => {
    let alive = true;
    if (!firstFile) { pv.current = null; return; }
    decodeBitmap(firstFile).then((b) => {
      if (!alive) { b.close(); return; }
      const p = previewSource(b);
      pv.current = { ...p, w: p.canvas.width, h: p.canvas.height, W: b.width, H: b.height };
      b.close();
      setPvTick((n) => n + 1);
    }).catch(() => {});
    return () => { alive = false; };
  }, [firstFile]);

  /** Columns × rows the current settings make of a W × H picture — without cutting anything. */
  const countFor = useCallback((W: number, H: number) => {
    if (ig) return { cols: igCols, rows: igRowCount };
    if (how === "grid") return { cols: Math.min(cols, W), rows: Math.min(rows, H) };
    return tileCount(W, H, tw, th);
  }, [ig, igCols, igRowCount, how, cols, rows, tw, th]);

  const piecesFor = useCallback((W: number, H: number): Piece[] => {
    if (ig) return igPieces(W, H, igCols, igRowCount, shape, fx, fy);
    return how === "grid" ? gridPieces(W, H, rows, cols) : tilePieces(W, H, tw, th);
  }, [ig, igCols, igRowCount, shape, fx, fy, how, rows, cols, tw, th]);

  /** The number drawn on a piece: posting order for a profile grid, else reading order. */
  const labelFor = useCallback((i: number, count: number) => (ig && kind === "grid" ? postNumber(i, count) : i + 1), [ig, kind]);

  // Any change of settings makes earlier pieces stale.
  const sig = JSON.stringify([how, cols, rows, tw, th, kind, igRows, slides, shape, fx, fy, format, quality, bg]);
  useEffect(() => {
    setDone(false);
    setTiles((old) => { old.forEach((p) => URL.revokeObjectURL(p.url)); return []; });
    setItems((prev) => (prev.some((i) => i.result) ? prev.map((i) => ({ ...i, result: undefined })) : prev));
  }, [sig]);

  useEffect(() => {
    const c = previewEl;
    const p = pv.current;
    if (!c || !p) return;
    c.width = p.w;
    c.height = p.h;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    ctx.drawImage(p.canvas, 0, 0);
    const n = countFor(p.W, p.H);
    if (n.cols * n.rows > MAX_PIECES) return;
    const pieces = piecesFor(p.W, p.H);
    const k = p.k;
    if (ig) {
      // Shade what will not be posted.
      const win = igWindow(p.W, p.H, igCols, igRowCount, shape, fx, fy);
      ctx.save();
      ctx.fillStyle = "rgba(0,0,0,0.55)";
      ctx.beginPath();
      ctx.rect(0, 0, p.w, p.h);
      ctx.rect(win.x * k, win.y * k, win.w * k, win.h * k);
      ctx.fill("evenodd");
      ctx.restore();
    }
    ctx.save();
    for (const [width, colour] of [[3, "rgba(0,0,0,0.55)"], [1.25, "#ffffff"]] as const) {
      ctx.lineWidth = width;
      ctx.strokeStyle = colour;
      for (const q of pieces) ctx.strokeRect(q.sx * k, q.sy * k, q.sw * k, q.sh * k);
    }
    if (pieces.length <= 100) {
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.lineJoin = "round";
      pieces.forEach((q, i) => {
        const size = Math.max(10, Math.min(40, Math.min(q.sw, q.sh) * k * 0.3));
        ctx.font = `700 ${size}px system-ui, sans-serif`;
        const x = (q.sx + q.sw / 2) * k;
        const y = (q.sy + q.sh / 2) * k;
        const label = String(labelFor(i, pieces.length));
        ctx.lineWidth = Math.max(2, size / 6);
        ctx.strokeStyle = "rgba(0,0,0,0.6)";
        ctx.strokeText(label, x, y);
        ctx.fillStyle = "#ffffff";
        ctx.fillText(label, x, y);
      });
    }
    ctx.restore();
  }, [pvTick, countFor, piecesFor, labelFor, ig, igCols, igRowCount, shape, fx, fy, previewEl]);

  const addFiles = useCallback((incoming: FileList | File[]) => {
    const imgs = Array.from(incoming).filter((f) => f.type.startsWith("image/"));
    if (imgs.length === 0) { toast.error(t("Please select image files.")); return; }
    setDone(false);
    if (ig) {
      // One picture at a time: a new one replaces it.
      setItems((prev) => {
        prev.forEach((i) => URL.revokeObjectURL(i.url));
        return [{ id: uid(), file: imgs[0], url: URL.createObjectURL(imgs[0]) }];
      });
      setFx(0.5);
      setFy(0.5);
      return;
    }
    setItems((prev) => [...prev, ...imgs.map((file) => ({ id: uid(), file, url: URL.createObjectURL(file) }))]);
  }, [ig, t]);

  useHandoff(addFiles);

  const removeItem = (id: string) => setItems((prev) => { const it = prev.find((p) => p.id === id); if (it) URL.revokeObjectURL(it.url); return prev.filter((p) => p.id !== id); });
  const reset = () => {
    items.forEach((i) => URL.revokeObjectURL(i.url));
    setItems([]);
    setDone(false);
    setTiles((old) => { old.forEach((p) => URL.revokeObjectURL(p.url)); return []; });
  };

  const mimeFor = (file: File): ExportMime => (ig ? (format === "image/png" ? "image/png" : "image/jpeg") : outMimeFor(file, format));
  const zipNameFor = (list: Item[]) => {
    const base = baseName(list[0].file.name);
    if (ig) return `${base}_${kind === "grid" ? "instagram-grid" : "carousel"}.zip`;
    return list.length > 1 ? "omyimage_split.zip" : `${base}_split.zip`;
  };

  const nameFor = (base: string, q: Piece, i: number, count: number, last: Piece, ext: string) => {
    if (ig) return kind === "grid" ? `${base}_post-${pad(postNumber(i, count), count)}.${ext}` : `${base}_slide-${pad(i + 1, count)}.${ext}`;
    return `${base}_r${pad(q.row + 1, last.row + 1)}_c${pad(q.col + 1, last.col + 1)}.${ext}`;
  };

  const applyAll = async () => {
    if (items.length === 0) return;
    setIsWorking(true);
    try {
      const canvas = document.createElement("canvas");
      const many = items.length > 1;
      const out: Item[] = [];
      const all: Out[] = [];
      for (const it of items) {
        const bmp = await decodeBitmap(it.file);
        const n = countFor(bmp.width, bmp.height);
        if (n.cols * n.rows > MAX_PIECES) {
          bmp.close();
          toast.error(t("Too many pieces — use bigger tiles (up to 400 pieces per image)."));
          return;
        }
        const pieces = piecesFor(bmp.width, bmp.height);
        const mime = mimeFor(it.file);
        const fill = mime === "image/jpeg" ? (resolveBg({ ...bg, transparent: false }) ?? "#ffffff") : null;
        const base = baseName(it.file.name);
        const last = pieces[pieces.length - 1];
        const res: Out[] = [];
        for (let i = 0; i < pieces.length; i++) {
          drawPiece(canvas, bmp, pieces[i], fill);
          res.push({ name: nameFor(base, pieces[i], i, pieces.length, last, mimeExt(mime)), blob: await canvasToBlob(canvas, mime, quality) });
        }
        bmp.close();
        out.push({ ...it, result: res });
        for (const r of res) all.push({ name: many ? `${base}/${r.name}` : r.name, blob: r.blob });
        if (it === items[0]) {
          setTileCols(last.col + 1);
          setTiles((old) => {
            old.forEach((p) => URL.revokeObjectURL(p.url));
            return res.map((r, i) => ({ ...r, url: URL.createObjectURL(r.blob), label: labelFor(i, res.length) }));
          });
        }
      }
      setItems(out);
      setDone(true);
      if (all.length === 1) downloadBlob(all[0].blob, all[0].name);
      else await zipAndDownload(all, zipNameFor(out));
      toast.success(all.length === 1 ? t("Done — 1 image saved.") : t("Done — {n} pieces saved.", { n: all.length }));
    } catch (err) {
      toast.error(translateError(err, t, "Processing failed."));
    } finally {
      setIsWorking(false);
    }
  };

  // Drag the Instagram window around the picture.
  const onPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!ig) return;
    try { e.currentTarget.setPointerCapture(e.pointerId); } catch { /* not an active pointer */ }
    drag.current = { x: e.clientX, y: e.clientY, fx, fy };
  };
  const onPointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const d = drag.current;
    const p = pv.current;
    if (!d || !p) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const win = igWindow(p.W, p.H, igCols, igRowCount, shape, 0, 0);
    const slackX = p.W - win.w;
    const slackY = p.H - win.h;
    if (slackX > 0.5) setFx(clamp01(d.fx + ((e.clientX - d.x) * (p.W / rect.width)) / slackX));
    if (slackY > 0.5) setFy(clamp01(d.fy + ((e.clientY - d.y) * (p.H / rect.height)) / slackY));
  };
  const endDrag = () => { drag.current = null; };

  const fieldCls = "w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";
  const label = "flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant";
  const hint = "text-label-sm font-label-sm text-on-surface-variant/70";
  const seg = (on: boolean) => `rounded-md px-2 py-1.5 text-label-md font-semibold ${on ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant"}`;
  const checker = { backgroundColor: "#fff", backgroundImage: "linear-gradient(45deg,#cbd5e1 25%,transparent 25%),linear-gradient(-45deg,#cbd5e1 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#cbd5e1 75%),linear-gradient(-45deg,transparent 75%,#cbd5e1 75%)", backgroundSize: "16px 16px", backgroundPosition: "0 0,0 8px,8px -8px,-8px 0" };

  // English has no plural forms in t(), so one piece is its own key.
  const piecesText = (count: number) => (count === 1 ? t("1 piece") : t("{n} pieces", { n: count }));

  const icon = ig ? "photo_library" : "view_column";
  const action = !ig ? t("Split image") : kind === "grid" ? t("Make the grid") : t("Make the carousel");

  if (items.length === 0) {
    return (
      <section>
        <TopLoadingBar active={isWorking} />
        <Dropzone onFiles={addFiles} accept={ACCEPT} accent={ACCENT} icon={icon} multiple={!ig} hint={ig ? t("or drop a JPG, PNG or WEBP image here") : t("or drop JPG, PNG or WEBP images here")} />
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
        {it.result && <><Icon name="check" className="text-[13px] mx-1 align-middle" style={{ color: ACCENT }} />{piecesText(it.result.length)}</>}
      </>
    ),
    action: it.result ? (
      <TrayAction icon="folder_zip" tone="accent" label={t("Download")} onClick={() => zipAndDownload(it.result!, zipNameFor([it]))} />
    ) : (
      <TrayAction icon="close" label={t("Remove")} disabled={isWorking} onClick={() => removeItem(it.id)} />
    ),
  }));

  // What the first picture turns into, for the summary under the settings.
  const p = pv.current;
  const n = p ? countFor(p.W, p.H) : null;
  const tooMany = !!n && n.cols * n.rows > MAX_PIECES;
  const first = p && n && !tooMany ? piecesFor(p.W, p.H)[0] : null;
  const uneven = !!p && !ig && (how === "grid" ? p.W % cols !== 0 || p.H % rows !== 0 : p.W % tw !== 0 || p.H % th !== 0);
  const win = ig && p ? igWindow(p.W, p.H, igCols, igRowCount, shape, 0, 0) : null;
  const anyJpg = items.some((it) => mimeFor(it.file) === "image/jpeg");

  const slider = (id: string, text: string, value: number, min: number, max: number, onChange: (v: number) => void, shown?: string) => (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className={label}><span>{text}</span><span className="text-primary font-semibold tabular-nums">{shown ?? value}</span></label>
      <input id={id} type="range" min={min} max={max} step={1} value={value} onChange={(e) => onChange(Number(e.target.value))} className="w-full accent-secondary" />
    </div>
  );

  const pxInput = (id: string, text: string, value: number, onChange: (v: number) => void) => (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-label-sm font-label-sm text-on-surface-variant">{text}</label>
      <input
        id={id}
        type="number"
        inputMode="numeric"
        min={16}
        step={1}
        value={value}
        onChange={(e) => { const v = Math.round(Number(e.target.value)); if (Number.isFinite(v)) onChange(Math.max(1, v)); }}
        onBlur={() => onChange(Math.max(16, value))}
        className={fieldCls}
      />
    </div>
  );

  const splitControls = (
    <>
      <div role="radiogroup" aria-label={t("Split by")} className="grid grid-cols-2 gap-1 rounded-lg bg-surface-container p-1">
        <button type="button" role="radio" aria-checked={how === "grid"} onClick={() => setHow("grid")} className={seg(how === "grid")}>{t("Equal grid")}</button>
        <button type="button" role="radio" aria-checked={how === "size"} onClick={() => setHow("size")} className={seg(how === "size")}>{t("Tile size")}</button>
      </div>
      {how === "grid" ? (
        <>
          <div className="flex flex-wrap gap-1.5">
            {GRID_PRESETS.map(([c, r]) => {
              const on = c === cols && r === rows;
              return (
                <button
                  key={`${c}x${r}`}
                  type="button"
                  aria-pressed={on}
                  onClick={() => { setCols(c); setRows(r); }}
                  className={`flex flex-col items-center gap-1 rounded-lg border px-2 py-1.5 ${on ? "border-secondary bg-secondary/10 text-secondary" : "border-surface-variant text-on-surface-variant hover:border-secondary/40"}`}
                >
                  <span className="grid h-6 w-7 gap-[2px]" style={{ gridTemplateColumns: `repeat(${c},1fr)`, gridTemplateRows: `repeat(${r},1fr)` }} aria-hidden="true">
                    {Array.from({ length: c * r }).map((_, i) => <span key={i} className="rounded-[1px] bg-current opacity-60" />)}
                  </span>
                  <span className="text-label-sm font-semibold tabular-nums">{`${c} × ${r}`}{/* i18n-raw: columns × rows in numbers */}</span>
                </button>
              );
            })}
          </div>
          {slider("split-cols", t("Columns"), cols, 1, 20, setCols)}
          {slider("split-rows", t("Rows"), rows, 1, 20, setRows)}
        </>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          {pxInput("split-tw", t("Tile width (px)"), tw, setTw)}
          {pxInput("split-th", t("Tile height (px)"), th, setTh)}
        </div>
      )}
      {n && (
        <div className="flex flex-col gap-1 rounded-lg bg-surface-container px-3 py-2.5">
          <p className="text-body-md font-semibold text-primary">{piecesText(n.cols * n.rows)}</p>
          {first && (
            <p className={hint}>
              {t("Each piece:")} <span className="tabular-nums">{`${first.w} × ${first.h} px`}</span>{/* i18n-raw: pixel dimensions */}
            </p>
          )}
          {tooMany && <p className="text-label-sm font-label-sm text-error">{t("Too many pieces — use bigger tiles (up to 400 pieces per image).")}</p>}
          {!tooMany && uneven && (
            <p className={hint}>
              {how === "grid"
                ? t("The size does not divide evenly, so some pieces are 1 px wider or taller.")
                : t("The last row and column are smaller — they take what is left.")}
            </p>
          )}
          {items.length > 1 && <p className={hint}>{t("For the first image — every image is split the same way.")}</p>}
        </div>
      )}
    </>
  );

  const shapes: readonly IgShape[] = kind === "grid" ? ["3:4", "4:5", "1:1"] : ["4:5", "1:1"];
  const shapeHint =
    kind === "carousel" ? (shape === "4:5" ? t("Tall slides that fill the most screen.") : t("Square slides.")) :
    shape === "3:4" ? t("Matches the profile grid exactly.") :
    shape === "4:5" ? t("The classic tall post. The grid trims a sliver off each side.") :
    t("Square posts. The grid trims their sides.");

  const igControls = (
    <>
      <div role="radiogroup" aria-label={t("Layout")} className="grid grid-cols-2 gap-1 rounded-lg bg-surface-container p-1">
        <button type="button" role="radio" aria-checked={kind === "grid"} onClick={() => { setKind("grid"); setShape("3:4"); }} className={seg(kind === "grid")}>{t("Profile grid")}</button>
        <button type="button" role="radio" aria-checked={kind === "carousel"} onClick={() => { setKind("carousel"); setShape("4:5"); }} className={seg(kind === "carousel")}>{t("Carousel")}</button>
      </div>
      {kind === "grid" ? (
        <>
          {slider("ig-rows", t("Rows"), igRows, 1, 5, setIgRows)}
          <p className={hint}>{t("Three posts per row, like your profile.")}</p>
        </>
      ) : (
        slider("ig-slides", t("Slides"), slides, 2, 10, setSlides)
      )}
      <div className="flex flex-col gap-1.5">
        <span className={label}>{t("Post shape")}</span>
        <div role="radiogroup" aria-label={t("Post shape")} className="grid gap-1 rounded-lg bg-surface-container p-1" style={{ gridTemplateColumns: `repeat(${shapes.length},1fr)` }}>
          {shapes.map((sh) => (
            <button key={sh} type="button" role="radio" aria-checked={shape === sh} onClick={() => setShape(sh)} className={seg(shape === sh)}>
              {sh}{/* i18n-raw: an aspect ratio */}
            </button>
          ))}
        </div>
        <p className={hint}>{shapeHint}</p>
      </div>
      {p && win && p.W - win.w > 0.5 && slider("ig-x", t("Horizontal position"), Math.round(fx * 100), 0, 100, (v) => setFx(v / 100), `${Math.round(fx * 100)}%`)}
      {p && win && p.H - win.h > 0.5 && slider("ig-y", t("Vertical position"), Math.round(fy * 100), 0, 100, (v) => setFy(v / 100), `${Math.round(fy * 100)}%`)}
      {first && (
        <div className="flex flex-col gap-1 rounded-lg bg-surface-container px-3 py-2.5">
          <p className="text-body-md font-semibold text-primary">{kind === "grid" ? t("{n} posts", { n: igCols * igRowCount }) : t("{n} slides", { n: slides })}</p>
          <p className={hint}>
            {t("Each one:")} <span className="tabular-nums">{`${first.w} × ${first.h} px`}</span>{/* i18n-raw: pixel dimensions */}
          </p>
          {first.w < IG_WIDTH && <p className={hint}>{t("Your picture is narrower than Instagram's 1080 px per post, so the pieces keep its own resolution.")}</p>}
          <p className={hint}>
            {kind === "grid"
              ? t("Post them in number order: 1 first, the top-left piece last.")
              : t("Add the slides to one post in number order, 1 first.")}
          </p>
        </div>
      )}
    </>
  );

  const controls = (
    <>
      {ig ? igControls : splitControls}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="split-format" className="text-label-sm font-label-sm text-on-surface-variant">{t("Output format")}</label>
        <select id="split-format" value={format} onChange={(e) => setFormat(e.target.value as Format)} className={fieldCls}>
          {!ig && <option value="original">{t("Same as original")}</option>}
          {/* i18n-raw: format names are the same in every language */}
          <option value="image/jpeg">JPG</option>
          <option value="image/png">PNG</option>
          {!ig && <option value="image/webp">WEBP</option>}
        </select>
      </div>
      {items.some((it) => mimeFor(it.file) !== "image/png") && (
        <div className="flex flex-col gap-1.5">
          <label htmlFor="split-quality" className={label}><span>{t("Quality")}</span><span className="text-primary font-semibold">{`${Math.round(quality * 100)}%`}</span></label>
          <input id="split-quality" type="range" min={0.5} max={1} step={0.01} value={quality} onChange={(e) => setQuality(parseFloat(e.target.value))} className="w-full accent-secondary" />
        </div>
      )}
      {anyJpg && <BackgroundPicker value={{ ...bg, transparent: false }} onChange={setBg} allowTransparent={false} label={t("JPG background")} />}
      <p className="text-label-sm font-label-sm text-on-surface-variant/80">{t("Your images are processed in your browser and never uploaded.")}</p>
    </>
  );

  return (
    <>
      <TopLoadingBar active={isWorking} />
      <ToolWorkspace
        mobile={{
          ...filesHeader(items.map((i) => i.file)),
          onBack: reset,
          backLabel: t("Clear files"),
          settingsTitle: t("Settings"),
          cta: { icon, label: action, busyLabel: t("Working…"), busy: isWorking, onClick: applyAll },
        }}
        main={
          <>
            <div className="bg-surface-container rounded-xl border border-surface-variant p-4 flex items-center justify-center overflow-hidden" style={{ minHeight: 220 }}>
              <canvas
                ref={setPreviewEl}
                style={{ ...checker, touchAction: ig ? "none" : undefined, cursor: ig ? "move" : undefined }}
                className="max-w-full max-h-[52vh] rounded"
                aria-label={t("Preview")}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
              />
            </div>
            <p className="text-center text-label-sm font-label-sm text-on-surface-variant">
              {ig ? t("Drag the picture to choose what goes into the posts.") : t("The lines show where the image will be cut.")}
            </p>
            {tiles.length > 0 && (
              <div className="flex flex-col gap-2 rounded-xl border border-surface-variant bg-surface-container-lowest p-3">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-body-md font-bold text-primary">{t("Pieces")}</h3>
                  <span className={hint}>{t("Click a piece to download just that one.")}</span>
                </div>
                <div className="grid max-h-[50vh] gap-1.5 overflow-auto" style={{ gridTemplateColumns: `repeat(${tileCols}, minmax(48px, 1fr))` }}>
                  {tiles.map((tile) => (
                    <button
                      key={tile.name}
                      type="button"
                      onClick={() => downloadBlob(tile.blob, tile.name)}
                      title={tile.name}
                      className="group relative overflow-hidden rounded border border-surface-variant bg-surface-container hover:border-secondary"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={tile.url} alt={tile.name} className="block h-full w-full object-contain" />
                      <span className="absolute left-1 top-1 rounded bg-black/60 px-1 text-[11px] font-bold leading-4 text-white tabular-nums">{tile.label}</span>
                      <Icon name="download" className="absolute bottom-1 right-1 rounded bg-black/60 p-0.5 text-[16px] text-white opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100" />
                    </button>
                  ))}
                </div>
              </div>
            )}
            <FileTray entries={entries} accept={ACCEPT} onFiles={addFiles} onClear={reset} busy={isWorking} />
          </>
        }
        rail={
          <SettingsRail
            title={t("Settings")}
            icon={icon}
            accent={ACCENT}
            footer={
              <>
                <RailAction onClick={applyAll} busy={isWorking} busyLabel={t("Working…")} icon={icon} disabled={tooMany}>
                  {action}
                </RailAction>
                {done && (
                  <RailSecondaryAction
                    icon="folder_zip"
                    onClick={() => {
                      const many = items.length > 1;
                      const all = items.flatMap((i) => (i.result ?? []).map((r) => ({ name: many ? `${baseName(i.file.name)}/${r.name}` : r.name, blob: r.blob })));
                      if (all.length) void zipAndDownload(all, zipNameFor(items));
                    }}
                  >
                    {t("Download all (ZIP)")}
                  </RailSecondaryAction>
                )}
              </>
            }
          >
            {controls}
          </SettingsRail>
        }
      />
    </>
  );
}

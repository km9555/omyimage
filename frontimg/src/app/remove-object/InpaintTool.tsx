"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { ToolWorkspace } from "@/components/tool/ToolWorkspace";
import { SettingsRail, RailAction, RailSecondaryAction } from "@/components/tool/SettingsRail";
import { decodeBitmap, canvasToBlob, downloadBlob, baseName, mimeExt, type ExportMime } from "@/lib/image/raster";
import { MAX_PIXELS, MODEL, fillMarked, loadInpainter, type LoadProgress, type Patch } from "@/lib/image/inpaint";
import { useHandoff } from "@/lib/tool-handoff";
import { useFormatBytes, useT } from "@/i18n/I18nScope";
import { translateError } from "@/i18n/errors";

/**
 * object — remove-object; watermark — remove-watermark. Mark what should go
 * (brush, box, eraser) on a layer over the picture, then MI-GAN fills it in the
 * browser (lib/image/inpaint.ts). Each removal is kept as changed rectangles
 * for undo and redo, so history costs only the areas that changed.
 */
type Mode = "object" | "watermark";
type Tool = "brush" | "box" | "erase";
type Format = "original" | ExportMime;
type Pt = { x: number; y: number };

const ACCENT = "#7B79C9";
const ACCEPT = "image/jpeg,image/png,image/webp";
const MARK = "rgb(255,56,120)";
const MB = (n: number) => (n / 1048576).toFixed(0);

export function InpaintTool({ mode }: { mode: Mode }) {
  const t = useT();
  const formatBytes = useFormatBytes();
  const [file, setFile] = useState<File | null>(null);
  const [size, setSize] = useState<{ W: number; H: number; scaled: boolean } | null>(null);
  const originalRef = useRef<HTMLCanvasElement | null>(null);
  const workRef = useRef<HTMLCanvasElement | null>(null);
  const viewRef = useRef<HTMLCanvasElement>(null);
  const maskRef = useRef<HTMLCanvasElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [disp, setDisp] = useState<{ w: number; h: number } | null>(null);

  const [tool, setTool] = useState<Tool>(mode === "watermark" ? "box" : "brush");
  const [brush, setBrush] = useState(mode === "watermark" ? 18 : 32);
  const [hasMarks, setHasMarks] = useState(false);
  const [done, setDone] = useState<Patch[][]>([]);
  const [undone, setUndone] = useState<Patch[][]>([]);
  const [busy, setBusy] = useState(false);
  const [comparing, setComparing] = useState(false);
  const [model, setModel] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [progress, setProgress] = useState<LoadProgress | null>(null);
  const [format, setFormat] = useState<Format>("original");
  const [quality, setQuality] = useState(0.92);
  const [boxRect, setBoxRect] = useState<{ x: number; y: number; w: number; h: number } | null>(null);
  const [cursor, setCursor] = useState<Pt | null>(null);
  const last = useRef<Pt | null>(null);
  const boxStart = useRef<{ img: Pt; css: Pt } | null>(null);

  const startModel = useCallback(() => {
    setModel((m) => (m === "ready" ? m : "loading"));
    loadInpainter(setProgress).then(() => setModel("ready")).catch(() => setModel("error"));
  }, []);

  const load = useCallback(async (f: File) => {
    try {
      const bmp = await decodeBitmap(f);
      let W = bmp.width;
      let H = bmp.height;
      const scaled = W * H > MAX_PIXELS;
      if (scaled) {
        const k = Math.sqrt(MAX_PIXELS / (W * H));
        W = Math.floor(W * k);
        H = Math.floor(H * k);
      }
      const orig = document.createElement("canvas");
      orig.width = W;
      orig.height = H;
      const oc = orig.getContext("2d");
      if (!oc) throw new Error("Processing failed.");
      oc.imageSmoothingQuality = "high";
      oc.drawImage(bmp, 0, 0, W, H);
      bmp.close();
      const work = document.createElement("canvas");
      work.width = W;
      work.height = H;
      work.getContext("2d", { willReadFrequently: true })?.drawImage(orig, 0, 0);
      originalRef.current = orig;
      workRef.current = work;
      setFile(f);
      setSize({ W, H, scaled });
      setDone([]);
      setUndone([]);
      setHasMarks(false);
      startModel();
    } catch (err) {
      toast.error(translateError(err, t, "Processing failed."));
    }
  }, [startModel, t]);

  const addFiles = useCallback((incoming: FileList | File[]) => {
    const img = Array.from(incoming).find((f) => f.type.startsWith("image/"));
    if (!img) { toast.error(t("Please select image files.")); return; }
    void load(img);
  }, [load, t]);

  useHandoff(addFiles);

  // Fit the picture to the stage: its width, and at most 62 % of the window's height.
  useEffect(() => {
    const el = stageRef.current;
    if (!el || !size) return;
    const fit = () => {
      const k = Math.min((el.clientWidth - 24) / size.W, (window.innerHeight * 0.62) / size.H, 4);
      setDisp({ w: Math.max(1, Math.floor(size.W * k)), h: Math.max(1, Math.floor(size.H * k)) });
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    window.addEventListener("resize", fit);
    return () => { ro.disconnect(); window.removeEventListener("resize", fit); };
  }, [size]);

  // A new picture gets a fresh, empty mark layer at its own resolution.
  useEffect(() => {
    const m = maskRef.current;
    if (!m || !size) return;
    m.width = size.W;
    m.height = size.H;
  }, [size]);

  const redraw = useCallback(() => {
    const v = viewRef.current;
    const src = comparing ? originalRef.current : workRef.current;
    if (!v || !src) return;
    if (v.width !== src.width || v.height !== src.height) {
      v.width = src.width;
      v.height = src.height;
    }
    v.getContext("2d")?.drawImage(src, 0, 0);
  }, [comparing]);
  useEffect(() => { redraw(); }, [redraw, size, done, undone, disp]);

  const clearMarks = () => {
    const m = maskRef.current;
    m?.getContext("2d")?.clearRect(0, 0, m.width, m.height);
    setHasMarks(false);
  };

  const reset = () => {
    setFile(null);
    setSize(null);
    setDisp(null);
    setDone([]);
    setUndone([]);
    setHasMarks(false);
    originalRef.current = null;
    workRef.current = null;
  };

  // ── Marking ───────────────────────────────────────────────────────────────
  const locate = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const W = e.currentTarget.width;
    const H = e.currentTarget.height;
    const cx = e.clientX - r.left;
    const cy = e.clientY - r.top;
    return { img: { x: (cx * W) / r.width, y: (cy * H) / r.height }, css: { x: cx, y: cy }, k: W / r.width };
  };

  const dab = (from: Pt, to: Pt, k: number) => {
    const ctx = maskRef.current?.getContext("2d");
    if (!ctx) return;
    ctx.globalCompositeOperation = tool === "erase" ? "destination-out" : "source-over";
    ctx.strokeStyle = MARK;
    ctx.fillStyle = MARK;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = brush * k;
    ctx.beginPath();
    ctx.arc(to.x, to.y, (brush * k) / 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
  };

  const onPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (busy || comparing) return;
    try { e.currentTarget.setPointerCapture(e.pointerId); } catch { /* not an active pointer */ }
    const p = locate(e);
    if (tool === "box") {
      boxStart.current = { img: p.img, css: p.css };
      setBoxRect({ x: p.css.x, y: p.css.y, w: 0, h: 0 });
      return;
    }
    last.current = p.img;
    dab(p.img, p.img, p.k);
    if (tool === "brush") setHasMarks(true);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const p = locate(e);
    setCursor(p.css);
    if (tool === "box") {
      const s = boxStart.current;
      if (s) setBoxRect({ x: Math.min(s.css.x, p.css.x), y: Math.min(s.css.y, p.css.y), w: Math.abs(p.css.x - s.css.x), h: Math.abs(p.css.y - s.css.y) });
      return;
    }
    if (!last.current) return;
    dab(last.current, p.img, p.k);
    last.current = p.img;
  };

  const onPointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    last.current = null;
    const s = boxStart.current;
    boxStart.current = null;
    setBoxRect(null);
    if (tool !== "box" || !s) return;
    const p = locate(e);
    const x = Math.min(s.img.x, p.img.x);
    const y = Math.min(s.img.y, p.img.y);
    const w = Math.abs(p.img.x - s.img.x);
    const h = Math.abs(p.img.y - s.img.y);
    if (w < 2 || h < 2) return;
    const ctx = maskRef.current?.getContext("2d");
    if (!ctx) return;
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = MARK;
    ctx.fillRect(x, y, w, h);
    setHasMarks(true);
  };

  // ── Removing, undo, redo ──────────────────────────────────────────────────
  const remove = async () => {
    const m = maskRef.current;
    const work = workRef.current;
    if (!m || !work || busy) return;
    const W = work.width;
    const H = work.height;
    const px = m.getContext("2d")?.getImageData(0, 0, W, H).data;
    if (!px) return;
    const mask = new Uint8Array(W * H);
    let any = false;
    for (let i = 0; i < W * H; i++) if (px[i * 4 + 3] > 32) { mask[i] = 1; any = true; }
    if (!any) { toast.error(mode === "watermark" ? t("Mark the watermark first — draw a box around it or paint over it.") : t("Paint over what you want to remove first.")); return; }
    setBusy(true);
    try {
      if (model !== "ready") startModel();
      await loadInpainter(setProgress);
      setModel("ready");
      const ctx = work.getContext("2d", { willReadFrequently: true });
      if (!ctx) throw new Error("Processing failed.");
      const patches = await fillMarked(ctx, mask, W, H);
      setDone((d) => [...d, patches]);
      setUndone([]);
      clearMarks();
    } catch (err) {
      toast.error(translateError(err, t, "Processing failed."));
    } finally {
      setBusy(false);
    }
  };

  const undo = useCallback(() => {
    const ctx = workRef.current?.getContext("2d", { willReadFrequently: true });
    const step = done[done.length - 1];
    if (!ctx || !step || busy) return;
    for (const p of [...step].reverse()) ctx.putImageData(p.before, p.x, p.y);
    setDone((d) => d.slice(0, -1));
    setUndone((u) => [...u, step]);
  }, [done, busy]);

  const redo = useCallback(() => {
    const ctx = workRef.current?.getContext("2d", { willReadFrequently: true });
    const step = undone[undone.length - 1];
    if (!ctx || !step || busy) return;
    for (const p of step) ctx.putImageData(p.after, p.x, p.y);
    setUndone((u) => u.slice(0, -1));
    setDone((d) => [...d, step]);
  }, [undone, busy]);

  const startOver = () => {
    const work = workRef.current;
    const orig = originalRef.current;
    if (!work || !orig || busy) return;
    work.getContext("2d", { willReadFrequently: true })?.drawImage(orig, 0, 0);
    setDone([]);
    setUndone([]);
    clearMarks();
  };

  // Ctrl/⌘+Z undoes, Ctrl/⌘+Shift+Z or Ctrl+Y redoes — outside text fields.
  useEffect(() => {
    if (!size) return;
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;
      if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.tagName === "SELECT" || el.isContentEditable)) return;
      if (!(e.ctrlKey || e.metaKey)) return;
      const key = e.key.toLowerCase();
      if (key === "z" && !e.shiftKey) { e.preventDefault(); undo(); }
      else if ((key === "z" && e.shiftKey) || key === "y") { e.preventDefault(); redo(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [size, undo, redo]);

  const save = async () => {
    const work = workRef.current;
    if (!work || !file) return;
    const mime: ExportMime = format !== "original" ? format
      : file.type === "image/jpeg" || file.type === "image/webp" ? (file.type as ExportMime) : "image/png";
    try {
      let src = work;
      if (mime === "image/jpeg") {
        // JPG has no transparency: flatten onto white.
        src = document.createElement("canvas");
        src.width = work.width;
        src.height = work.height;
        const c = src.getContext("2d");
        if (c) { c.fillStyle = "#ffffff"; c.fillRect(0, 0, src.width, src.height); c.drawImage(work, 0, 0); }
      }
      const blob = await canvasToBlob(src, mime, quality);
      downloadBlob(blob, `${baseName(file.name)}_${mode === "watermark" ? "no-watermark" : "cleaned"}.${mimeExt(mime)}`);
    } catch (err) {
      toast.error(translateError(err, t, "Processing failed."));
    }
  };

  const fieldCls = "w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";
  const label = "flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant";
  const hint = "text-label-sm font-label-sm text-on-surface-variant/70";
  const seg = (on: boolean) => `flex items-center justify-center gap-1 rounded-md px-2 py-1.5 text-label-md font-semibold ${on ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant"}`;
  const small = "inline-flex items-center gap-1 text-label-md font-semibold text-secondary hover:underline disabled:opacity-40 disabled:no-underline";
  const checker = { backgroundColor: "#fff", backgroundImage: "linear-gradient(45deg,#cbd5e1 25%,transparent 25%),linear-gradient(-45deg,#cbd5e1 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#cbd5e1 75%),linear-gradient(-45deg,transparent 75%,#cbd5e1 75%)", backgroundSize: "16px 16px", backgroundPosition: "0 0,0 8px,8px -8px,-8px 0" };

  const icon = mode === "watermark" ? "auto_fix_high" : "ink_eraser";
  const action = mode === "watermark" ? t("Remove watermark") : t("Remove object");

  if (!file || !size) {
    return (
      <section>
        <Dropzone onFiles={addFiles} accept={ACCEPT} accent={ACCENT} icon={icon} multiple={false} hint={t("or drop a JPG, PNG or WEBP image here")} />
      </section>
    );
  }

  const modelPanel = (
    <div className="flex flex-col gap-1.5 rounded-lg bg-surface-container px-3 py-2.5">
      {model === "ready" ? (
        <p className="inline-flex items-center gap-1.5 text-label-md font-semibold text-primary">
          <Icon name="check_circle" className="text-[18px]" style={{ color: ACCENT }} /> {t("AI model ready — it runs on your device.")}
        </p>
      ) : model === "error" ? (
        <>
          <p className="text-label-md font-semibold text-error">{t("The AI model could not be loaded.")}</p>
          <button type="button" onClick={startModel} className={small}><Icon name="restart_alt" className="text-[18px]" /> {t("Try again")}</button>
        </>
      ) : (
        <>
          <div className="flex items-center justify-between text-label-md font-semibold text-primary">
            <span>{t("Loading the AI model…")}</span>
            <span className="tabular-nums text-on-surface-variant">{progress ? `${MB(progress.loaded)} / ${MB(progress.total)} MB` : `${MB(MODEL.bytes)} MB`}{/* i18n-raw: megabytes */}</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-surface-variant">
            <div className="h-full rounded-full transition-[width]" style={{ width: `${progress ? Math.round((progress.loaded / progress.total) * 100) : 0}%`, background: ACCENT }} />
          </div>
          <p className={hint}>{t("Only on the first visit — after that your browser keeps it.")}</p>
        </>
      )}
    </div>
  );

  const tools: [Tool, string, string][] = [
    ["brush", "brush", t("Brush")],
    ["box", "crop_square", t("Box")],
    ["erase", "ink_eraser", t("Eraser")],
  ];

  const controls = (
    <>
      <div className="flex flex-col gap-1.5">
        <div role="radiogroup" aria-label={t("Marking tool")} className="grid grid-cols-3 gap-1 rounded-lg bg-surface-container p-1">
          {tools.map(([id, ic, text]) => (
            <button key={id} type="button" role="radio" aria-checked={tool === id} onClick={() => setTool(id)} className={seg(tool === id)}>
              <Icon name={ic} className="text-[18px]" /> {text}
            </button>
          ))}
        </div>
        <p className={hint}>
          {tool === "box" ? t("Drag a box over the area to remove.")
            : tool === "erase" ? t("Paint over a mark to take it back.")
            : mode === "watermark" ? t("Paint over every letter of the watermark, including its outline or shadow.")
            : t("Paint over the whole object, including its shadow and reflection.")}
        </p>
      </div>
      {tool !== "box" && (
        <div className="flex flex-col gap-1.5">
          <label htmlFor="ip-brush" className={label}><span>{t("Brush size")}</span><span className="text-primary font-semibold tabular-nums">{`${brush} px`}{/* i18n-raw: a number with the px unit */}</span></label>
          <input id="ip-brush" type="range" min={4} max={120} step={1} value={brush} onChange={(e) => setBrush(Number(e.target.value))} className="w-full accent-secondary" />
        </div>
      )}
      <button type="button" onClick={clearMarks} disabled={!hasMarks || busy} className={`${small} self-start`}>
        <Icon name="delete_sweep" className="text-[18px]" /> {t("Clear marks")}
      </button>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-outline-variant/60 pt-3">
        <button type="button" onClick={undo} disabled={done.length === 0 || busy} className={small}><Icon name="undo" className="text-[18px]" /> {t("Undo")}</button>
        <button type="button" onClick={redo} disabled={undone.length === 0 || busy} className={small}><Icon name="redo" className="text-[18px]" /> {t("Redo")}</button>
        <button type="button" onClick={startOver} disabled={done.length === 0 || busy} className={small}><Icon name="restart_alt" className="text-[18px]" /> {t("Start over")}</button>
      </div>
      {modelPanel}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="ip-format" className="text-label-sm font-label-sm text-on-surface-variant">{t("Output format")}</label>
        <select id="ip-format" value={format} onChange={(e) => setFormat(e.target.value as Format)} className={fieldCls}>
          <option value="original">{t("Same as original")}</option>
          {/* i18n-raw: format names are the same in every language */}
          <option value="image/jpeg">JPG</option>
          <option value="image/png">PNG</option>
          <option value="image/webp">WEBP</option>
        </select>
      </div>
      {(format === "original" ? file.type === "image/jpeg" || file.type === "image/webp" : format !== "image/png") && (
        <div className="flex flex-col gap-1.5">
          <label htmlFor="ip-quality" className={label}><span>{t("Quality")}</span><span className="text-primary font-semibold">{`${Math.round(quality * 100)}%`}</span></label>
          <input id="ip-quality" type="range" min={0.5} max={1} step={0.01} value={quality} onChange={(e) => setQuality(parseFloat(e.target.value))} className="w-full accent-secondary" />
        </div>
      )}
      <p className="text-label-sm font-label-sm text-on-surface-variant/80">{t("Your image never leaves your device: the AI runs in your browser.")}</p>
    </>
  );

  return (
    <>
      <TopLoadingBar active={busy} />
      <ToolWorkspace
        mobile={{
          title: file.name,
          meta: formatBytes(file.size),
          onBack: reset,
          backLabel: t("Clear files"),
          settingsTitle: t("Settings"),
          topAction: { icon: "undo", label: t("Undo"), onClick: undo, disabled: done.length === 0 || busy },
          cta: { icon, label: action, busyLabel: t("Removing…"), busy, onClick: () => { void remove(); } },
        }}
        main={
          <>
            <div ref={stageRef} className="bg-surface-container rounded-xl border border-surface-variant p-3 flex items-center justify-center overflow-hidden" style={{ minHeight: 260 }}>
              <div className="relative select-none" style={disp ? { width: disp.w, height: disp.h } : { width: "100%", height: 240 }}>
                <canvas ref={viewRef} style={checker} className="absolute inset-0 h-full w-full rounded" aria-hidden="true" />
                <canvas
                  ref={maskRef}
                  className="absolute inset-0 h-full w-full rounded"
                  style={{ opacity: comparing ? 0 : 0.5, touchAction: "none", cursor: tool === "box" ? "crosshair" : "none" }}
                  aria-label={mode === "watermark" ? t("Picture — mark the watermark here") : t("Picture — mark what to remove here")}
                  onPointerDown={onPointerDown}
                  onPointerMove={onPointerMove}
                  onPointerUp={onPointerUp}
                  onPointerCancel={onPointerUp}
                  onPointerLeave={() => setCursor(null)}
                />
                {boxRect && (
                  <div className="pointer-events-none absolute rounded-sm border-2 border-dashed" style={{ left: boxRect.x, top: boxRect.y, width: boxRect.w, height: boxRect.h, borderColor: MARK, background: "rgba(255,56,120,0.25)" }} />
                )}
                {cursor && tool !== "box" && !busy && (
                  <div className="pointer-events-none absolute rounded-full border-2 border-white" style={{ left: cursor.x - brush / 2, top: cursor.y - brush / 2, width: brush, height: brush, boxShadow: "0 0 0 1px rgba(0,0,0,0.6)" }} />
                )}
                {busy && (
                  <div className="absolute inset-0 grid place-items-center rounded bg-black/30">
                    <span className="inline-flex items-center gap-2 rounded-full bg-surface-container-lowest px-4 py-2 text-label-md font-semibold text-primary shadow">
                      <Icon name="progress_activity" className="animate-spin text-[18px]" /> {t("Removing…")}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-label-sm font-label-sm text-on-surface-variant">
              <span>{mode === "watermark" ? t("Mark the watermark, then click Remove watermark.") : t("Mark what you want gone, then click Remove object.")}</span>
              <button
                type="button"
                onPointerDown={() => setComparing(true)}
                onPointerUp={() => setComparing(false)}
                onPointerLeave={() => setComparing(false)}
                onKeyDown={(e) => { if (e.key === " " || e.key === "Enter") setComparing(true); }}
                onKeyUp={() => setComparing(false)}
                className="inline-flex select-none items-center gap-1 font-semibold text-secondary"
              >
                <Icon name="visibility" className="text-[16px]" /> {t("Hold to see the original")}
              </button>
            </div>
            {size.scaled && (
              <p className="text-center text-label-sm font-label-sm text-on-surface-variant/80">
                {t("This photo is very large, so it is edited and saved at {w} × {h} px.", { w: size.W, h: size.H })}
              </p>
            )}
          </>
        }
        rail={
          <SettingsRail
            title={t("Settings")}
            icon={icon}
            accent={ACCENT}
            footer={
              <>
                <RailAction onClick={() => { void remove(); }} busy={busy} busyLabel={t("Removing…")} icon={icon}>
                  {action}
                </RailAction>
                <RailSecondaryAction icon="download" onClick={() => { void save(); }}>
                  {t("Download image")}
                </RailSecondaryAction>
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

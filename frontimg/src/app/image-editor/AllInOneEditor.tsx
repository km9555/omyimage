"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { SettingsRail, RailAction } from "@/components/tool/SettingsRail";
import { AdSlot } from "@/components/tool/AdSlot";
import { Dropzone } from "@/components/image/Dropzone";
import { BackgroundPicker, resolveBg, type BgValue } from "@/components/BackgroundPicker";
import { decodeBitmap, canvasToBlob, downloadBlob, baseName, mimeExt, type ExportMime } from "@/lib/image/raster";
import { useHandoff } from "@/lib/tool-handoff";

const ACCENT = "#7B5CC4";
const ACCEPT = "image/jpeg,image/png,image/webp,image/gif,image/bmp";
const HISTORY_CAP = 20;

type Tool = "crop" | "transform" | "resize" | "adjust" | "grayscale" | "blur" | "border" | "circle" | "watermark" | "annotate";

const RIBBON: { tool: Tool; icon: string; label: string }[] = [
  { tool: "crop", icon: "crop", label: "Crop" },
  { tool: "transform", icon: "rotate_90_degrees_cw", label: "Rotate" },
  { tool: "resize", icon: "photo_size_select_large", label: "Resize" },
  { tool: "adjust", icon: "tune", label: "Adjust" },
  { tool: "grayscale", icon: "filter_b_and_w", label: "Gray" },
  { tool: "blur", icon: "lens_blur", label: "Blur" },
  { tool: "border", icon: "crop_din", label: "Border" },
  { tool: "circle", icon: "panorama_fish_eye", label: "Round" },
  { tool: "watermark", icon: "branding_watermark", label: "Mark" },
  { tool: "annotate", icon: "draw", label: "Draw" },
];

// ── Crop helpers (ported from CropTool) ─────────────────────────────────────
type Crop = { x: number; y: number; w: number; h: number };
type Handle = "move" | "n" | "s" | "e" | "w" | "ne" | "nw" | "se" | "sw";
const MIN_CROP = 10;
const ASPECTS: { label: string; value: number | null }[] = [
  { label: "Free", value: null }, { label: "1:1", value: 1 }, { label: "4:3", value: 4 / 3 },
  { label: "3:2", value: 3 / 2 }, { label: "16:9", value: 16 / 9 }, { label: "3:4", value: 3 / 4 }, { label: "9:16", value: 9 / 16 },
];
function clampCrop(c: Crop, natW: number, natH: number, minSize = MIN_CROP): Crop {
  const w = Math.max(minSize, Math.min(c.w, natW));
  const h = Math.max(minSize, Math.min(c.h, natH));
  const x = Math.max(0, Math.min(c.x, natW - w));
  const y = Math.max(0, Math.min(c.y, natH - h));
  return { x: Math.round(x), y: Math.round(y), w: Math.round(w), h: Math.round(h) };
}
function centeredAspect(natW: number, natH: number, aspect: number | null): Crop {
  if (aspect == null) { const w = Math.round(natW * 0.8), h = Math.round(natH * 0.8); return { x: Math.round((natW - w) / 2), y: Math.round((natH - h) / 2), w, h }; }
  let w = natW, h = w / aspect;
  if (h > natH) { h = natH; w = h * aspect; }
  w = Math.round(w * 0.9); h = Math.round(h * 0.9);
  return { x: Math.round((natW - w) / 2), y: Math.round((natH - h) / 2), w, h };
}

// ── Adjust / filter ─────────────────────────────────────────────────────────
interface Adj { brightness: number; contrast: number; saturate: number; grayscale: number; sepia: number; hue: number }
const NEUTRAL: Adj = { brightness: 1, contrast: 1, saturate: 1, grayscale: 0, sepia: 0, hue: 0 };
const PRESETS: { name: string; adj: Adj }[] = [
  { name: "Original", adj: NEUTRAL },
  { name: "Vivid", adj: { ...NEUTRAL, brightness: 1.05, contrast: 1.1, saturate: 1.45 } },
  { name: "B&W", adj: { ...NEUTRAL, contrast: 1.05, grayscale: 1 } },
  { name: "Sepia", adj: { ...NEUTRAL, sepia: 0.75 } },
  { name: "Cool", adj: { ...NEUTRAL, contrast: 1.05, saturate: 1.1, hue: -12 } },
  { name: "Warm", adj: { ...NEUTRAL, brightness: 1.03, saturate: 1.15, sepia: 0.18, hue: 8 } },
];
const ADJ_SLIDERS: { key: keyof Adj; label: string; min: number; max: number; step: number; fmt: (v: number) => string }[] = [
  { key: "brightness", label: "Brightness", min: 0.5, max: 1.5, step: 0.01, fmt: (v) => `${Math.round(v * 100)}%` },
  { key: "contrast", label: "Contrast", min: 0.5, max: 1.5, step: 0.01, fmt: (v) => `${Math.round(v * 100)}%` },
  { key: "saturate", label: "Saturation", min: 0, max: 2, step: 0.01, fmt: (v) => `${Math.round(v * 100)}%` },
  { key: "hue", label: "Hue", min: -180, max: 180, step: 1, fmt: (v) => `${v}°` },
  { key: "sepia", label: "Sepia", min: 0, max: 1, step: 0.01, fmt: (v) => `${Math.round(v * 100)}%` },
];
const adjFilter = (a: Adj) => `brightness(${a.brightness}) contrast(${a.contrast}) saturate(${a.saturate}) grayscale(${a.grayscale}) sepia(${a.sepia}) hue-rotate(${a.hue}deg)`;

// ── Watermark ───────────────────────────────────────────────────────────────
const FONTS = [
  { label: "Sans", value: "Inter, Arial, sans-serif" },
  { label: "Serif", value: "Georgia, 'Times New Roman', serif" },
  { label: "Impact", value: "Impact, Haettenschweiler, sans-serif" },
  { label: "Mono", value: "'Courier New', monospace" },
];
interface WmOpts { type: "text" | "image"; text: string; fontPct: number; fontFamily: string; bold: boolean; color: string; outline: boolean; outlineColor: string; opacity: number; rotation: number; scalePct: number; marginPct: number; pos: number }
const WM_DEFAULT: WmOpts = { type: "text", text: "© oMyImage", fontPct: 6, fontFamily: FONTS[0].value, bold: true, color: "#ffffff", outline: true, outlineColor: "#000000", opacity: 0.6, rotation: 0, scalePct: 25, marginPct: 4, pos: 8 };

function paintWatermark(ctx: CanvasRenderingContext2D, W: number, H: number, o: WmOpts, logo: ImageBitmap | null) {
  const row = Math.floor(o.pos / 3), col = o.pos % 3;
  const mx = (W * o.marginPct) / 100, my = (H * o.marginPct) / 100;
  ctx.save();
  ctx.globalAlpha = o.opacity;
  if (o.type === "text" && o.text.trim()) {
    const px = Math.max(8, (W * o.fontPct) / 100);
    ctx.font = `${o.bold ? "bold " : ""}${px}px ${o.fontFamily}`;
    let x: number, y: number;
    if (col === 0) { x = mx; ctx.textAlign = "left"; } else if (col === 1) { x = W / 2; ctx.textAlign = "center"; } else { x = W - mx; ctx.textAlign = "right"; }
    if (row === 0) { y = my; ctx.textBaseline = "top"; } else if (row === 1) { y = H / 2; ctx.textBaseline = "middle"; } else { y = H - my; ctx.textBaseline = "bottom"; }
    ctx.translate(x, y);
    if (o.rotation) ctx.rotate((o.rotation * Math.PI) / 180);
    if (o.outline) { ctx.lineWidth = Math.max(1, px * 0.07); ctx.strokeStyle = o.outlineColor; ctx.lineJoin = "round"; ctx.strokeText(o.text, 0, 0); }
    ctx.fillStyle = o.color; ctx.fillText(o.text, 0, 0);
  } else if (o.type === "image" && logo) {
    const lw = (W * o.scalePct) / 100, lh = lw * (logo.height / logo.width);
    let cx: number, cy: number;
    if (col === 0) cx = mx + lw / 2; else if (col === 1) cx = W / 2; else cx = W - mx - lw / 2;
    if (row === 0) cy = my + lh / 2; else if (row === 1) cy = H / 2; else cy = H - my - lh / 2;
    ctx.translate(cx, cy);
    if (o.rotation) ctx.rotate((o.rotation * Math.PI) / 180);
    ctx.drawImage(logo, -lw / 2, -lh / 2, lw, lh);
  }
  ctx.restore();
}

// ── Annotate ────────────────────────────────────────────────────────────────
type Shape = "pen" | "line" | "arrow" | "rect" | "ellipse" | "text";
type Op = { shape: Shape; color: string; width: number; points: { x: number; y: number }[]; text?: string };

function drawArrowHead(ctx: CanvasRenderingContext2D, from: { x: number; y: number }, to: { x: number; y: number }, size: number) {
  const ang = Math.atan2(to.y - from.y, to.x - from.x);
  ctx.beginPath();
  ctx.moveTo(to.x, to.y);
  ctx.lineTo(to.x - size * Math.cos(ang - Math.PI / 6), to.y - size * Math.sin(ang - Math.PI / 6));
  ctx.moveTo(to.x, to.y);
  ctx.lineTo(to.x - size * Math.cos(ang + Math.PI / 6), to.y - size * Math.sin(ang + Math.PI / 6));
  ctx.stroke();
}
function drawOp(ctx: CanvasRenderingContext2D, op: Op) {
  ctx.save();
  ctx.strokeStyle = op.color; ctx.fillStyle = op.color; ctx.lineWidth = op.width; ctx.lineCap = "round"; ctx.lineJoin = "round";
  const p = op.points;
  if (op.shape === "pen") {
    if (p.length) { ctx.beginPath(); ctx.moveTo(p[0].x, p[0].y); for (let i = 1; i < p.length; i++) ctx.lineTo(p[i].x, p[i].y); ctx.stroke(); }
  } else if (op.shape === "text") {
    if (op.text) { ctx.font = `${Math.max(12, op.width * 6)}px Inter, Arial, sans-serif`; ctx.textBaseline = "top"; ctx.fillText(op.text, p[0].x, p[0].y); }
  } else if (p.length >= 2) {
    const a = p[0], b = p[p.length - 1];
    if (op.shape === "line") { ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
    else if (op.shape === "arrow") { ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); drawArrowHead(ctx, a, b, Math.max(10, op.width * 4)); }
    else if (op.shape === "rect") ctx.strokeRect(Math.min(a.x, b.x), Math.min(a.y, b.y), Math.abs(b.x - a.x), Math.abs(b.y - a.y));
    else if (op.shape === "ellipse") { ctx.beginPath(); ctx.ellipse((a.x + b.x) / 2, (a.y + b.y) / 2, Math.abs(b.x - a.x) / 2, Math.abs(b.y - a.y) / 2, 0, 0, Math.PI * 2); ctx.stroke(); }
  }
  ctx.restore();
}

const fieldCls = "w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";
const CHECKER: React.CSSProperties = {
  backgroundColor: "#fff",
  backgroundImage: "linear-gradient(45deg,#e2e8f0 25%,transparent 25%),linear-gradient(-45deg,#e2e8f0 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#e2e8f0 75%),linear-gradient(-45deg,transparent 75%,#e2e8f0 75%)",
  backgroundSize: "20px 20px", backgroundPosition: "0 0,0 10px,10px -10px,-10px 0",
};

export function AllInOneEditor() {
  const [file, setFile] = useState<File | null>(null);
  const [tool, setTool] = useState<Tool>("adjust");
  const [dims, setDims] = useState<{ w: number; h: number } | null>(null); // working dims
  const [, force] = useState(0);
  const rerender = () => force((n) => n + 1);
  const [isWorking, setIsWorking] = useState(false);
  const [scale, setScale] = useState(1);
  const [hasAlpha, setHasAlpha] = useState(false);

  // Image / history (kept in refs; rerender() bumps the view).
  const srcRef = useRef<ImageBitmap | null>(null);
  const workRef = useRef<ImageBitmap | null>(null);
  const undoRef = useRef<ImageBitmap[]>([]);
  const redoRef = useRef<ImageBitmap[]>([]);

  // Tool drafts
  const [crop, setCrop] = useState<Crop>({ x: 0, y: 0, w: 0, h: 0 });
  const [aspect, setAspect] = useState<number | null>(null);
  const [rot, setRot] = useState({ angle: 0, flipH: false, flipV: false });
  const [resize, setResize] = useState({ w: 0, h: 0, keep: true });
  const [adj, setAdj] = useState<Adj>(NEUTRAL);
  const [gray, setGray] = useState(1);
  const [blur, setBlur] = useState(8);
  const [border, setBorder] = useState({ pct: 4, color: "#ffffff", radius: 0 });
  const [circle, setCircle] = useState<{ ring: number; ringColor: string; bg: BgValue }>({ ring: 0, ringColor: "#ffffff", bg: { transparent: true, color: "#ffffff" } });
  const [wm, setWm] = useState<WmOpts>(WM_DEFAULT);
  const logoRef = useRef<ImageBitmap | null>(null);
  const logoInput = useRef<HTMLInputElement>(null);
  const [annot, setAnnot] = useState<{ shape: Shape; color: string; width: number; text: string }>({ shape: "pen", color: "#ef4444", width: 6, text: "Label" });
  const opsRef = useRef<Op[]>([]);

  // Export
  const [format, setFormat] = useState<ExportMime>("image/png");
  const [quality, setQuality] = useState(0.92);
  const [jpgBg, setJpgBg] = useState<BgValue>({ transparent: false, color: "#ffffff" });

  const previewRef = useRef<HTMLCanvasElement>(null);
  const overlayRef = useRef<HTMLCanvasElement>(null); // annotation layer (natural res)
  const wrapRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{ handle: Handle; sx: number; sy: number; orig: Crop } | null>(null);
  const drawing = useRef<Op | null>(null);

  // ── Compose the working bitmap + active tool's live effect into a canvas ──
  const compose = useCallback((t: Tool | null): HTMLCanvasElement => {
    const bmp = workRef.current!;
    const canvas = document.createElement("canvas");
    const W = bmp.width, H = bmp.height;

    if (t === "transform") {
      const deg = ((rot.angle % 360) + 360) % 360;
      const rad = (deg * Math.PI) / 180;
      const sin = Math.abs(Math.sin(rad)), cos = Math.abs(Math.cos(rad));
      const cw = Math.max(1, Math.round(W * cos + H * sin)), ch = Math.max(1, Math.round(W * sin + H * cos));
      canvas.width = cw; canvas.height = ch;
      const ctx = canvas.getContext("2d")!;
      ctx.translate(cw / 2, ch / 2);
      if (rad) ctx.rotate(rad);
      ctx.scale(rot.flipH ? -1 : 1, rot.flipV ? -1 : 1);
      ctx.drawImage(bmp, -W / 2, -H / 2);
      return canvas;
    }
    if (t === "crop") {
      const c = clampCrop(crop, W, H);
      canvas.width = c.w; canvas.height = c.h;
      canvas.getContext("2d")!.drawImage(bmp, c.x, c.y, c.w, c.h, 0, 0, c.w, c.h);
      return canvas;
    }
    if (t === "resize") {
      const w = Math.max(1, Math.round(resize.w || W)), h = Math.max(1, Math.round(resize.h || H));
      canvas.width = w; canvas.height = h;
      const ctx = canvas.getContext("2d")!; ctx.imageSmoothingQuality = "high";
      ctx.drawImage(bmp, 0, 0, w, h);
      return canvas;
    }
    if (t === "border") {
      const side = Math.min(W, H);
      const b = Math.round((side * border.pct) / 100);
      const cw = W + 2 * b, ch = H + 2 * b;
      canvas.width = cw; canvas.height = ch;
      const ctx = canvas.getContext("2d")!;
      ctx.fillStyle = border.color; ctx.fillRect(0, 0, cw, ch);
      const r = Math.round((side * border.radius) / 100);
      if (r > 0) { ctx.save(); roundRect(ctx, b, b, W, H, r); ctx.clip(); }
      ctx.drawImage(bmp, b, b);
      if (r > 0) ctx.restore();
      return canvas;
    }
    if (t === "circle") {
      const side = Math.min(W, H), sx = (W - side) / 2, sy = (H - side) / 2, r = side / 2;
      canvas.width = side; canvas.height = side;
      const ctx = canvas.getContext("2d")!;
      const fill = circle.bg.transparent ? null : resolveBg(circle.bg);
      if (fill) { ctx.beginPath(); ctx.arc(r, r, r, 0, Math.PI * 2); ctx.fillStyle = fill; ctx.fill(); }
      const ring = Math.round((r * circle.ring) / 100);
      ctx.save(); ctx.beginPath(); ctx.arc(r, r, Math.max(0, r - ring), 0, Math.PI * 2); ctx.clip();
      ctx.drawImage(bmp, sx, sy, side, side, 0, 0, side, side); ctx.restore();
      if (ring > 0) { ctx.beginPath(); ctx.arc(r, r, r - ring / 2, 0, Math.PI * 2); ctx.lineWidth = ring; ctx.strokeStyle = circle.ringColor; ctx.stroke(); }
      return canvas;
    }

    // Same-size operations (filters, watermark, annotate, none)
    canvas.width = W; canvas.height = H;
    const ctx = canvas.getContext("2d")!;
    if (t === "adjust") ctx.filter = adjFilter(adj);
    else if (t === "grayscale") ctx.filter = `grayscale(${gray})`;
    else if (t === "blur") ctx.filter = blur > 0 ? `blur(${blur}px)` : "none";
    ctx.drawImage(bmp, 0, 0);
    ctx.filter = "none";
    if (t === "watermark") paintWatermark(ctx, W, H, wm, logoRef.current);
    if (t === "annotate") opsRef.current.forEach((op) => drawOp(ctx, op));
    return canvas;
  }, [rot, crop, resize, border, circle, adj, gray, blur, wm, annot]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Render the live preview canvas ──
  const renderPreview = useCallback(() => {
    if (!workRef.current || !previewRef.current) return;
    const baked = compose(tool === "annotate" || tool === "crop" ? null : tool);
    const pc = previewRef.current;
    pc.width = baked.width; pc.height = baked.height;
    pc.getContext("2d")!.drawImage(baked, 0, 0);
    setDims({ w: baked.width, h: baked.height });
  }, [compose, tool]);

  useEffect(() => { renderPreview(); }, [renderPreview]);

  // Render annotation overlay (natural res, only in annotate mode).
  useEffect(() => {
    if (tool !== "annotate" || !overlayRef.current || !workRef.current) return;
    const oc = overlayRef.current;
    oc.width = workRef.current.width; oc.height = workRef.current.height;
    const ctx = oc.getContext("2d")!;
    ctx.clearRect(0, 0, oc.width, oc.height);
    opsRef.current.forEach((op) => drawOp(ctx, op));
    if (drawing.current) drawOp(ctx, drawing.current);
  });

  // Keep the on-screen scale in sync for crop/annotate overlays.
  const measure = useCallback(() => {
    const pc = previewRef.current;
    if (pc && workRef.current) setScale(pc.clientWidth / pc.width);
  }, []);
  useEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (previewRef.current) ro.observe(previewRef.current);
    window.addEventListener("resize", measure);
    return () => { ro.disconnect(); window.removeEventListener("resize", measure); };
  }, [measure, dims]);

  // ── Load / reset ──
  const loadFile = useCallback(async (incoming: FileList | File[]) => {
    const f = Array.from(incoming).find((x) => x.type.startsWith("image/"));
    if (!f) { toast.error("Please select an image file."); return; }
    setIsWorking(true);
    try {
      const src = await decodeBitmap(f);
      const work = await createImageBitmap(src);
      srcRef.current = src; workRef.current = work;
      undoRef.current = []; redoRef.current = []; opsRef.current = [];
      setHasAlpha(f.type === "image/png" || f.type === "image/webp" || f.type === "image/gif");
      setFile(f); setTool("adjust"); setAdj(NEUTRAL);
      setResize({ w: work.width, h: work.height, keep: true });
      rerender();
    } catch {
      toast.error("Couldn't read that image.");
    } finally {
      setIsWorking(false);
    }
  }, []);

  useHandoff(loadFile);

  const fullReset = () => {
    srcRef.current?.close(); workRef.current?.close();
    undoRef.current.forEach((b) => b.close()); redoRef.current.forEach((b) => b.close());
    srcRef.current = null; workRef.current = null; undoRef.current = []; redoRef.current = []; opsRef.current = [];
    logoRef.current = null;
    setFile(null);
  };
  useEffect(() => () => fullReset(), []); // eslint-disable-line react-hooks/exhaustive-deps

  // Initialize a tool's draft from the current working image when it's opened.
  const openTool = (t: Tool) => {
    const work = workRef.current; if (!work) return;
    if (t === "crop") { setAspect(null); setCrop(centeredAspect(work.width, work.height, null)); }
    if (t === "resize") setResize({ w: work.width, h: work.height, keep: true });
    if (t === "transform") setRot({ angle: 0, flipH: false, flipV: false });
    if (t === "grayscale") setGray(1);
    if (t === "blur") setBlur(8);
    setTool(t);
  };

  // Reset only the active tool's draft (Cancel).
  const resetDraft = () => {
    const work = workRef.current; if (!work) return;
    switch (tool) {
      case "crop": setCrop(centeredAspect(work.width, work.height, aspect)); break;
      case "transform": setRot({ angle: 0, flipH: false, flipV: false }); break;
      case "resize": setResize({ w: work.width, h: work.height, keep: true }); break;
      case "adjust": setAdj(NEUTRAL); break;
      case "grayscale": setGray(1); break;
      case "blur": setBlur(8); break;
      case "border": setBorder({ pct: 4, color: "#ffffff", radius: 0 }); break;
      case "circle": setCircle({ ring: 0, ringColor: "#ffffff", bg: { transparent: true, color: "#ffffff" } }); break;
      case "annotate": opsRef.current = []; rerender(); break;
    }
  };

  const pushWorking = async (canvas: HTMLCanvasElement) => {
    const next = await createImageBitmap(canvas);
    if (workRef.current) undoRef.current.push(workRef.current);
    while (undoRef.current.length > HISTORY_CAP) undoRef.current.shift()?.close();
    redoRef.current.forEach((b) => b.close()); redoRef.current = [];
    workRef.current = next;
    if (next.width !== next.height) setHasAlpha((a) => a || tool === "circle");
  };

  const apply = async () => {
    if (!workRef.current) return;
    setIsWorking(true);
    try {
      const canvas = compose(tool);
      await pushWorking(canvas);
      if (tool === "circle") setHasAlpha(true);
      if (tool === "annotate") { opsRef.current = []; }
      // Reset drafts that are dimension-derived so they re-init next open.
      const w = workRef.current!;
      setResize({ w: w.width, h: w.height, keep: true });
      if (tool === "adjust") setAdj(NEUTRAL);
      if (tool === "transform") setRot({ angle: 0, flipH: false, flipV: false });
      if (tool === "grayscale") setGray(1);
      if (tool === "blur") setBlur(8);
      if (tool === "crop") { setAspect(null); setCrop(centeredAspect(w.width, w.height, null)); }
      rerender();
      toast.success("Applied.");
    } catch (err) {
      console.error(err); toast.error("Couldn't apply that edit.");
    } finally {
      setIsWorking(false);
    }
  };

  const undo = () => {
    const prev = undoRef.current.pop(); if (!prev || !workRef.current) return;
    redoRef.current.push(workRef.current); workRef.current = prev;
    opsRef.current = [];
    const w = prev; setResize({ w: w.width, h: w.height, keep: true });
    rerender();
  };
  const redo = () => {
    const next = redoRef.current.pop(); if (!next || !workRef.current) return;
    undoRef.current.push(workRef.current); workRef.current = next;
    const w = next; setResize({ w: w.width, h: w.height, keep: true });
    rerender();
  };
  const revertOriginal = async () => {
    if (!srcRef.current || !workRef.current) return;
    const fresh = await createImageBitmap(srcRef.current);
    undoRef.current.push(workRef.current);
    while (undoRef.current.length > HISTORY_CAP) undoRef.current.shift()?.close();
    redoRef.current.forEach((b) => b.close()); redoRef.current = [];
    workRef.current = fresh; opsRef.current = [];
    setResize({ w: fresh.width, h: fresh.height, keep: true });
    rerender();
  };

  const exportImage = async () => {
    if (!workRef.current) return;
    setIsWorking(true);
    try {
      const baked = compose(tool); // bake the currently-previewed tool too
      let out = baked;
      if (format === "image/jpeg") {
        const flat = document.createElement("canvas");
        flat.width = baked.width; flat.height = baked.height;
        const ctx = flat.getContext("2d")!;
        ctx.fillStyle = resolveBg(jpgBg) ?? "#ffffff"; ctx.fillRect(0, 0, flat.width, flat.height);
        ctx.drawImage(baked, 0, 0); out = flat;
      }
      const blob = await canvasToBlob(out, format, quality);
      downloadBlob(blob, `${baseName(file!.name)}_edited.${mimeExt(format)}`);
      toast.success("Exported your edited image.");
    } catch (err) {
      console.error(err); toast.error("Export failed.");
    } finally {
      setIsWorking(false);
    }
  };

  // ── Crop pointer drag ──
  const onCropDown = (handle: Handle) => (e: React.PointerEvent) => {
    e.preventDefault(); e.stopPropagation();
    drag.current = { handle, sx: e.clientX, sy: e.clientY, orig: crop };
    const move = (ev: PointerEvent) => {
      const d = drag.current, w = workRef.current; if (!d || !w) return;
      const sc = scale || 1;
      const dx = (ev.clientX - d.sx) / sc, dy = (ev.clientY - d.sy) / sc, o = d.orig;
      if (d.handle === "move") { setCrop(clampCrop({ ...o, x: o.x + dx, y: o.y + dy }, w.width, w.height)); return; }
      let { x, y, w: cw, h: ch } = o;
      if (d.handle.includes("e")) cw = o.w + dx;
      if (d.handle.includes("s")) ch = o.h + dy;
      if (d.handle.includes("w")) { const r = o.x + o.w; x = o.x + dx; cw = r - x; }
      if (d.handle.includes("n")) { const b = o.y + o.h; y = o.y + dy; ch = b - y; }
      if (aspect != null) { ch = cw / aspect; if (d.handle.includes("n")) y = o.y + o.h - ch; }
      setCrop(clampCrop({ x, y, w: cw, h: ch }, w.width, w.height));
    };
    const up = () => { drag.current = null; window.removeEventListener("pointermove", move); window.removeEventListener("pointerup", up); };
    window.addEventListener("pointermove", move); window.addEventListener("pointerup", up);
  };
  const applyAspect = (a: number | null) => { setAspect(a); const w = workRef.current; if (w) setCrop(centeredAspect(w.width, w.height, a)); };

  // ── Annotate pointer ──
  const toNat = (e: React.PointerEvent): { x: number; y: number } => {
    const oc = overlayRef.current!; const rect = oc.getBoundingClientRect();
    return { x: ((e.clientX - rect.left) / rect.width) * oc.width, y: ((e.clientY - rect.top) / rect.height) * oc.height };
  };
  const onDrawDown = (e: React.PointerEvent) => {
    if (tool !== "annotate") return;
    e.preventDefault();
    const pt = toNat(e);
    if (annot.shape === "text") { opsRef.current.push({ shape: "text", color: annot.color, width: annot.width, points: [pt], text: annot.text || "Text" }); rerender(); return; }
    drawing.current = { shape: annot.shape, color: annot.color, width: annot.width, points: [pt] };
    (e.target as Element).setPointerCapture?.(e.pointerId);
  };
  const onDrawMove = (e: React.PointerEvent) => {
    if (!drawing.current) return;
    const pt = toNat(e);
    if (drawing.current.shape === "pen") drawing.current.points.push(pt);
    else drawing.current.points = [drawing.current.points[0], pt];
    rerender();
  };
  const onDrawUp = () => { if (drawing.current) { opsRef.current.push(drawing.current); drawing.current = null; rerender(); } };

  const onLogo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]; e.target.value = "";
    if (!f) return;
    decodeBitmap(f, false).then((b) => { logoRef.current = b; setWm((o) => ({ ...o, type: "image" })); rerender(); }).catch(() => toast.error("Couldn't read that logo."));
  };

  const activePreset = useMemo(() => PRESETS.find((p) => JSON.stringify(p.adj) === JSON.stringify(adj))?.name, [adj]);
  const canUndo = undoRef.current.length > 0, canRedo = redoRef.current.length > 0;
  const cropInteractive = tool === "crop" && dims;
  const showChecker = hasAlpha && tool !== "watermark";

  if (!file) {
    return (
      <section>
        <TopLoadingBar active={isWorking} />
        <Dropzone onFiles={loadFile} accept={ACCEPT} accent={ACCENT} multiple={false} buttonLabel="Open an image" icon="dashboard_customize" hint="or drop a JPG, PNG, WEBP or GIF to start editing" />
      </section>
    );
  }

  return (
    <section className="flex flex-col items-stretch lg:flex-row">
      <span data-tool-active hidden aria-hidden="true" />
      <TopLoadingBar active={isWorking} />

      {/* This one is a flex row rather than ToolWorkspace's grid, so it sizes
          the reserved ad slot itself — same footer-matching width, expressed as
          a flex basis because there is no grid track to carry it. */}
      <AdSlot className="shrink-0 grow-0 basis-[calc((100%-var(--container-content))/2)]" />

      {/* Ribbon + canvas share the padded column; the rail docks to the edge. */}
      <div className="flex min-w-0 flex-1 flex-col gap-4 px-margin-mobile pt-stack-md pb-stack-lg md:px-gutter lg:flex-row">
      {/* Ribbon */}
      <div className="flex lg:flex-col gap-1.5 overflow-x-auto lg:overflow-visible rounded-xl border border-surface-variant bg-surface-container-lowest ambient-shadow p-1.5 lg:sticky lg:top-24 lg:self-start shrink-0">
        {RIBBON.map((r) => (
          <button key={r.tool} type="button" onClick={() => openTool(r.tool)} aria-label={r.label} title={r.label}
            className={`flex flex-col items-center justify-center gap-0.5 rounded-lg w-16 lg:w-16 py-2 transition-colors shrink-0 ${tool === r.tool ? "bg-secondary text-on-secondary" : "text-on-surface-variant hover:bg-surface-container hover:text-primary"}`}>
            <Icon name={r.icon} fill={tool === r.tool} className="text-[22px]" />
            <span className="text-[10px] font-semibold">{r.label}</span>
          </button>
        ))}
      </div>

      {/* Canvas + toolbar */}
      <div className="flex flex-col gap-3 flex-1 min-w-0 order-first lg:order-none">
        <div className="flex items-center justify-between gap-2 rounded-xl border border-surface-variant bg-surface-container-lowest ambient-shadow px-3 py-2">
          <div className="flex items-center gap-1">
            <button type="button" onClick={undo} disabled={!canUndo} aria-label="Undo" className="flex h-9 w-9 items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container disabled:opacity-30 transition-colors"><Icon name="undo" className="text-[20px]" /></button>
            <button type="button" onClick={redo} disabled={!canRedo} aria-label="Redo" className="flex h-9 w-9 items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container disabled:opacity-30 transition-colors"><Icon name="redo" className="text-[20px]" /></button>
            <button type="button" onClick={revertOriginal} aria-label="Revert to original" title="Revert to original" className="flex h-9 w-9 items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors"><Icon name="restart_alt" className="text-[20px]" /></button>
          </div>
          <p className="text-label-sm font-label-sm text-on-surface-variant truncate hidden sm:block flex-1 text-center">{file.name}{dims && <> · {dims.w} × {dims.h}</>}</p>
          <button type="button" onClick={() => setFile(null)} className="inline-flex items-center gap-1.5 text-label-md font-medium text-on-surface-variant hover:text-error shrink-0"><Icon name="close" className="text-[18px]" /> Change</button>
        </div>

        <div className="rounded-xl border border-surface-variant p-3 flex items-center justify-center overflow-hidden" style={{ minHeight: 320, ...(showChecker ? CHECKER : { backgroundColor: "var(--color-surface-container)" }) }}>
          <div ref={wrapRef} className="relative max-w-full" style={{ lineHeight: 0 }}>
            <canvas ref={previewRef} className="block max-w-full max-h-[calc(100vh-15rem)] rounded" />

            {/* Crop overlay */}
            {cropInteractive && (
              <>
                <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: "0 0 0 9999px rgba(0,0,0,0.45)" }} aria-hidden />
                <div onPointerDown={onCropDown("move")} className="absolute cursor-move touch-none" style={{ left: crop.x * scale, top: crop.y * scale, width: crop.w * scale, height: crop.h * scale, outline: `2px solid ${ACCENT}`, boxShadow: "0 0 0 9999px rgba(0,0,0,0.45)" }}>
                  {(["nw", "ne", "sw", "se"] as Handle[]).map((h) => (
                    <span key={h} onPointerDown={onCropDown(h)} className="absolute w-3 h-3 bg-white border-2 rounded-sm touch-none" style={{ borderColor: ACCENT, cursor: h === "nw" || h === "se" ? "nwse-resize" : "nesw-resize", top: h[0] === "n" ? -6 : undefined, bottom: h[0] === "s" ? -6 : undefined, left: h[1] === "w" ? -6 : undefined, right: h[1] === "e" ? -6 : undefined }} />
                  ))}
                </div>
              </>
            )}

            {/* Annotate overlay */}
            {tool === "annotate" && (
              <canvas ref={overlayRef} onPointerDown={onDrawDown} onPointerMove={onDrawMove} onPointerUp={onDrawUp}
                className="absolute inset-0 w-full h-full touch-none" style={{ cursor: "crosshair" }} />
            )}
          </div>
        </div>
        <p className="text-center text-label-sm font-label-sm text-on-surface-variant">
          {tool === "crop" ? "Drag the box or its corners to set the crop, then Apply." : tool === "annotate" ? "Draw on the image, then Apply to bake it in." : "Live preview — adjust on the right, then Apply."}
        </p>
      </div>
      </div>

      {/* Options panel */}
      <SettingsRail
        title={RIBBON.find((r) => r.tool === tool)?.label === "Mark" ? "Watermark" : RIBBON.find((r) => r.tool === tool)?.label ?? "Editor"}
        icon="dashboard_customize"
        accent={ACCENT}
        className="lg:w-[380px] lg:shrink-0 xl:w-[420px]"
        footer={
          <RailAction onClick={exportImage} busy={isWorking} busyLabel="Working…" icon="download">
            Export image
          </RailAction>
        }
      >
        <div className="flex flex-col gap-4">

          {tool === "crop" && (
            <div className="grid grid-cols-4 gap-1.5">
              {ASPECTS.map((a) => (
                <button key={a.label} type="button" onClick={() => applyAspect(a.value)} className={`rounded-md px-2 py-1.5 text-label-sm font-label-sm font-semibold transition-colors ${aspect === a.value ? "bg-secondary text-on-secondary" : "bg-surface-container text-on-surface-variant hover:text-primary"}`}>{a.label}</button>
              ))}
            </div>
          )}

          {tool === "transform" && (
            <>
              <div className="grid grid-cols-4 gap-1.5">
                <button type="button" onClick={() => setRot((r) => ({ ...r, angle: r.angle - 90 }))} className="flex flex-col items-center gap-1 rounded-lg border border-surface-variant py-2 text-on-surface-variant hover:text-primary"><Icon name="rotate_left" className="text-[20px]" /><span className="text-[11px]">Left</span></button>
                <button type="button" onClick={() => setRot((r) => ({ ...r, angle: r.angle + 90 }))} className="flex flex-col items-center gap-1 rounded-lg border border-surface-variant py-2 text-on-surface-variant hover:text-primary"><Icon name="rotate_right" className="text-[20px]" /><span className="text-[11px]">Right</span></button>
                <button type="button" onClick={() => setRot((r) => ({ ...r, flipH: !r.flipH }))} className={`flex flex-col items-center gap-1 rounded-lg border py-2 ${rot.flipH ? "border-secondary text-primary bg-secondary/10" : "border-surface-variant text-on-surface-variant hover:text-primary"}`}><Icon name="flip" className="text-[20px]" /><span className="text-[11px]">Flip H</span></button>
                <button type="button" onClick={() => setRot((r) => ({ ...r, flipV: !r.flipV }))} className={`flex flex-col items-center gap-1 rounded-lg border py-2 ${rot.flipV ? "border-secondary text-primary bg-secondary/10" : "border-surface-variant text-on-surface-variant hover:text-primary"}`}><Icon name="flip" className="text-[20px] rotate-90" /><span className="text-[11px]">Flip V</span></button>
              </div>
              <div className="flex flex-col gap-1.5"><label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>Fine angle</span><span className="text-primary font-semibold">{rot.angle}°</span></label><input type="range" min={-180} max={180} step={1} value={((rot.angle % 360) + 360) % 360 > 180 ? (((rot.angle % 360) + 360) % 360) - 360 : ((rot.angle % 360) + 360) % 360} onChange={(e) => setRot((r) => ({ ...r, angle: parseInt(e.target.value, 10) }))} className="w-full accent-secondary" /></div>
            </>
          )}

          {tool === "resize" && (
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5"><label className="text-label-sm font-label-sm text-on-surface-variant">Width</label><input type="number" min={1} value={resize.w} onChange={(e) => { const w = parseInt(e.target.value || "0", 10); setResize((s) => ({ ...s, w, h: s.keep && dims ? Math.round(w * (dims.h / dims.w)) : s.h })); }} className={fieldCls} /></div>
                <div className="flex flex-col gap-1.5"><label className="text-label-sm font-label-sm text-on-surface-variant">Height</label><input type="number" min={1} value={resize.h} onChange={(e) => { const h = parseInt(e.target.value || "0", 10); setResize((s) => ({ ...s, h, w: s.keep && dims ? Math.round(h * (dims.w / dims.h)) : s.w })); }} className={fieldCls} /></div>
              </div>
              <label className="flex items-center gap-2.5 cursor-pointer"><input type="checkbox" checked={resize.keep} onChange={(e) => setResize((s) => ({ ...s, keep: e.target.checked }))} className="w-4 h-4 accent-secondary" /><span className="text-body-md text-on-surface flex items-center gap-1.5"><Icon name="link" className="text-[18px]" /> Lock aspect ratio</span></label>
            </div>
          )}

          {tool === "adjust" && (
            <>
              <div className="grid grid-cols-3 gap-1.5">
                {PRESETS.map((p) => (<button key={p.name} type="button" onClick={() => setAdj(p.adj)} className={`rounded-md px-2 py-1.5 text-label-sm font-label-sm font-semibold border transition-colors ${activePreset === p.name ? "border-secondary text-primary bg-secondary/10" : "border-surface-variant text-on-surface-variant hover:text-primary"}`}>{p.name}</button>))}
              </div>
              {ADJ_SLIDERS.map((s) => (
                <div key={s.key} className="flex flex-col gap-1"><label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>{s.label}</span><span className="text-primary font-semibold">{s.fmt(adj[s.key])}</span></label><input type="range" min={s.min} max={s.max} step={s.step} value={adj[s.key]} onChange={(e) => setAdj((a) => ({ ...a, [s.key]: parseFloat(e.target.value) }))} className="w-full accent-secondary" /></div>
              ))}
            </>
          )}

          {tool === "grayscale" && (
            <div className="flex flex-col gap-1.5"><label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>Intensity</span><span className="text-primary font-semibold">{Math.round(gray * 100)}%</span></label><input type="range" min={0} max={1} step={0.01} value={gray} onChange={(e) => setGray(parseFloat(e.target.value))} className="w-full accent-secondary" /></div>
          )}

          {tool === "blur" && (
            <div className="flex flex-col gap-1.5"><label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>Blur strength</span><span className="text-primary font-semibold">{blur}px</span></label><input type="range" min={0} max={50} step={1} value={blur} onChange={(e) => setBlur(parseInt(e.target.value, 10))} className="w-full accent-secondary" /></div>
          )}

          {tool === "border" && (
            <>
              <div className="flex flex-col gap-1.5"><label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>Thickness</span><span className="text-primary font-semibold">{border.pct}%</span></label><input type="range" min={1} max={25} step={1} value={border.pct} onChange={(e) => setBorder((b) => ({ ...b, pct: parseInt(e.target.value, 10) }))} className="w-full accent-secondary" /></div>
              <div className="flex flex-col gap-1.5"><label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>Corner rounding</span><span className="text-primary font-semibold">{border.radius}%</span></label><input type="range" min={0} max={50} step={1} value={border.radius} onChange={(e) => setBorder((b) => ({ ...b, radius: parseInt(e.target.value, 10) }))} className="w-full accent-secondary" /></div>
              <BackgroundPicker value={{ transparent: false, color: border.color }} onChange={(v) => setBorder((b) => ({ ...b, color: v.color }))} allowTransparent={false} label="Border color" />
            </>
          )}

          {tool === "circle" && (
            <>
              <BackgroundPicker value={circle.bg} onChange={(v) => setCircle((c) => ({ ...c, bg: v }))} allowTransparent label="Background" />
              <div className="flex flex-col gap-1.5"><label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>Ring thickness</span><span className="text-primary font-semibold">{circle.ring}%</span></label><input type="range" min={0} max={15} step={1} value={circle.ring} onChange={(e) => setCircle((c) => ({ ...c, ring: parseInt(e.target.value, 10) }))} className="w-full accent-secondary" /></div>
              {circle.ring > 0 && <BackgroundPicker value={{ transparent: false, color: circle.ringColor }} onChange={(v) => setCircle((c) => ({ ...c, ringColor: v.color }))} allowTransparent={false} label="Ring color" />}
            </>
          )}

          {tool === "watermark" && (
            <>
              <div className="grid grid-cols-2 gap-1 rounded-lg bg-surface-container p-1">
                {(["text", "image"] as const).map((t) => (<button key={t} type="button" onClick={() => setWm((o) => ({ ...o, type: t }))} className={`rounded-md px-3 py-2 text-body-md font-semibold transition-colors ${wm.type === t ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant hover:text-primary"}`}>{t === "text" ? "Text" : "Logo"}</button>))}
              </div>
              {wm.type === "text" ? (
                <>
                  <input type="text" value={wm.text} onChange={(e) => setWm((o) => ({ ...o, text: e.target.value }))} className={fieldCls} />
                  <div className="grid grid-cols-2 gap-3">
                    <select value={wm.fontFamily} onChange={(e) => setWm((o) => ({ ...o, fontFamily: e.target.value }))} className={fieldCls}>{FONTS.map((f) => <option key={f.value} value={f.value}>{f.label}</option>)}</select>
                    <div className="flex flex-col gap-1"><label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>Size</span><span className="text-primary font-semibold">{wm.fontPct}%</span></label><input type="range" min={2} max={20} step={1} value={wm.fontPct} onChange={(e) => setWm((o) => ({ ...o, fontPct: parseInt(e.target.value, 10) }))} className="w-full accent-secondary" /></div>
                  </div>
                  <BackgroundPicker value={{ transparent: false, color: wm.color }} onChange={(v) => setWm((o) => ({ ...o, color: v.color }))} allowTransparent={false} label="Text color" />
                </>
              ) : (
                <>
                  <input ref={logoInput} type="file" accept="image/png,image/webp,image/svg+xml,image/jpeg" className="hidden" onChange={onLogo} />
                  <button type="button" onClick={() => logoInput.current?.click()} className="inline-flex items-center justify-center gap-2 rounded-lg border border-surface-variant py-2.5 text-body-md font-semibold text-primary hover:border-secondary/50"><Icon name="upload" className="text-[18px]" /> {logoRef.current ? "Change logo" : "Upload logo"}</button>
                  <div className="flex flex-col gap-1"><label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>Logo size</span><span className="text-primary font-semibold">{wm.scalePct}%</span></label><input type="range" min={5} max={80} step={1} value={wm.scalePct} onChange={(e) => setWm((o) => ({ ...o, scalePct: parseInt(e.target.value, 10) }))} className="w-full accent-secondary" /></div>
                </>
              )}
              <div className="flex flex-col gap-1"><label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>Opacity</span><span className="text-primary font-semibold">{Math.round(wm.opacity * 100)}%</span></label><input type="range" min={0.05} max={1} step={0.01} value={wm.opacity} onChange={(e) => setWm((o) => ({ ...o, opacity: parseFloat(e.target.value) }))} className="w-full accent-secondary" /></div>
              <div className="flex flex-col gap-1.5">
                <label className="text-label-sm font-label-sm text-on-surface-variant">Position</label>
                <div className="grid grid-cols-3 gap-1.5 w-fit">{Array.from({ length: 9 }).map((_, i) => (<button key={i} type="button" aria-label={`Position ${i + 1}`} onClick={() => setWm((o) => ({ ...o, pos: i }))} className={`h-8 w-8 rounded-md border grid place-items-center ${wm.pos === i ? "border-secondary bg-secondary/10" : "border-surface-variant hover:border-secondary/40"}`}><span className={`h-2 w-2 rounded-full ${wm.pos === i ? "bg-secondary" : "bg-outline-variant"}`} /></button>))}</div>
              </div>
            </>
          )}

          {tool === "annotate" && (
            <>
              <div className="grid grid-cols-6 gap-1">
                {([["pen", "draw"], ["line", "horizontal_rule"], ["arrow", "north_east"], ["rect", "crop_din"], ["ellipse", "circle"], ["text", "title"]] as [Shape, string][]).map(([s, ic]) => (
                  <button key={s} type="button" onClick={() => setAnnot((a) => ({ ...a, shape: s }))} aria-label={s} className={`flex items-center justify-center rounded-lg py-2 transition-colors ${annot.shape === s ? "bg-secondary text-on-secondary" : "bg-surface-container text-on-surface-variant hover:text-primary"}`}><Icon name={ic} className="text-[18px]" /></button>
                ))}
              </div>
              {annot.shape === "text" && <input type="text" value={annot.text} onChange={(e) => setAnnot((a) => ({ ...a, text: e.target.value }))} placeholder="Text to stamp" className={fieldCls} />}
              <BackgroundPicker value={{ transparent: false, color: annot.color }} onChange={(v) => setAnnot((a) => ({ ...a, color: v.color }))} allowTransparent={false} label="Color" />
              <div className="flex flex-col gap-1"><label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>Stroke / size</span><span className="text-primary font-semibold">{annot.width}px</span></label><input type="range" min={1} max={40} step={1} value={annot.width} onChange={(e) => setAnnot((a) => ({ ...a, width: parseInt(e.target.value, 10) }))} className="w-full accent-secondary" /></div>
              <button type="button" onClick={() => { opsRef.current = []; rerender(); }} className="self-start text-label-sm font-label-sm font-semibold text-secondary hover:underline">Clear drawing</button>
            </>
          )}

          <div className="flex gap-2 pt-1">
            <button type="button" onClick={apply} disabled={isWorking} className="flex-1 inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-container text-on-secondary font-semibold py-2.5 rounded-lg transition-colors disabled:opacity-50"><Icon name="check" className="text-[18px]" /> Apply</button>
            <button type="button" onClick={resetDraft} className="inline-flex items-center justify-center gap-1.5 border border-surface-variant text-on-surface-variant font-semibold px-3 py-2.5 rounded-lg hover:text-primary transition-colors"><Icon name="restart_alt" className="text-[18px]" /></button>
          </div>
        </div>

        {/* Export */}
        <div className="flex flex-col gap-3 border-t border-outline-variant/60 pt-5">
          <h3 className="text-body-lg font-bold text-primary">Export</h3>
          <select value={format} onChange={(e) => setFormat(e.target.value as ExportMime)} className={fieldCls}>
            <option value="image/png">PNG</option>
            <option value="image/jpeg">JPG</option>
            <option value="image/webp">WEBP</option>
          </select>
          {format !== "image/png" && (<div className="flex flex-col gap-1.5"><label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>Quality</span><span className="text-primary font-semibold">{Math.round(quality * 100)}%</span></label><input type="range" min={0.5} max={1} step={0.01} value={quality} onChange={(e) => setQuality(parseFloat(e.target.value))} className="w-full accent-secondary" /></div>)}
          {format === "image/jpeg" && <BackgroundPicker value={jpgBg} onChange={setJpgBg} allowTransparent={false} label="JPG background" />}
        </div>
      </SettingsRail>
    </section>
  );
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

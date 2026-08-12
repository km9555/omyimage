"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { HelpTip } from "@/components/HelpTip";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { useHandoff } from "@/lib/tool-handoff";

const ACCENT = "#3E9A90";
const MIN = 10; // minimum crop size in natural px

type Crop = { x: number; y: number; w: number; h: number };
type Handle = "move" | "n" | "s" | "e" | "w" | "ne" | "nw" | "se" | "sw";
type Format = "original" | "image/jpeg" | "image/png" | "image/webp";

const ACCEPT = "image/jpeg,image/png,image/webp,image/gif,image/bmp,.jpg,.jpeg,.png,.webp,.gif,.bmp";

const ASPECTS: { label: string; value: number | null }[] = [
  { label: "Free", value: null },
  { label: "1:1", value: 1 },
  { label: "4:3", value: 4 / 3 },
  { label: "3:2", value: 3 / 2 },
  { label: "16:9", value: 16 / 9 },
  { label: "3:4", value: 3 / 4 },
  { label: "9:16", value: 9 / 16 },
];

const FORMATS: { label: string; value: Format }[] = [
  { label: "Same as original", value: "original" },
  { label: "JPG", value: "image/jpeg" },
  { label: "PNG", value: "image/png" },
  { label: "WEBP", value: "image/webp" },
];

function formatBytes(n: number): string {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(0)} KB`;
  return `${(n / (1024 * 1024)).toFixed(2)} MB`;
}

function clampCrop(c: Crop, natW: number, natH: number, minSize = MIN): Crop {
  const w = Math.max(minSize, Math.min(c.w, natW));
  const h = Math.max(minSize, Math.min(c.h, natH));
  const x = Math.max(0, Math.min(c.x, natW - w));
  const y = Math.max(0, Math.min(c.y, natH - h));
  return { x: Math.round(x), y: Math.round(y), w: Math.round(w), h: Math.round(h) };
}

/**
 * A number input that lets you type freely (keeps your raw text while focused)
 * and only normalizes to the 0…max range on blur. Defined at module scope so it
 * keeps a stable identity and never loses focus when the parent re-renders.
 */
function NumberField({
  label,
  value,
  max,
  onCommit,
  className,
}: {
  label: string;
  value: number;
  max: number;
  onCommit: (n: number) => void;
  className: string;
}) {
  const [val, setVal] = useState(String(value));
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (!focused) setVal(String(value));
  }, [value, focused]);

  const commit = (raw: string, blur: boolean) => {
    if (raw === "" || raw === "-") {
      if (blur) { setVal("0"); onCommit(0); }
      return;
    }
    let n = parseInt(raw, 10);
    if (!Number.isFinite(n)) {
      if (blur) { setVal("0"); onCommit(0); }
      return;
    }
    n = Math.max(0, Math.min(max, n)); // min 0, max = image size
    if (blur) setVal(String(n));
    onCommit(n);
  };

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-label-sm font-label-sm text-on-surface-variant">{label}</label>
      <input
        type="number"
        min={0}
        max={max}
        value={val}
        onFocus={() => setFocused(true)}
        onChange={(e) => { setVal(e.target.value); commit(e.target.value, false); }}
        onBlur={() => { setFocused(false); commit(val, true); }}
        className={className}
      />
    </div>
  );
}

/** Largest crop of the given aspect, centered in the image. */
function centeredAspect(natW: number, natH: number, aspect: number | null): Crop {
  if (aspect == null) {
    const w = Math.round(natW * 0.8);
    const h = Math.round(natH * 0.8);
    return { x: Math.round((natW - w) / 2), y: Math.round((natH - h) / 2), w, h };
  }
  let w = natW;
  let h = w / aspect;
  if (h > natH) {
    h = natH;
    w = h * aspect;
  }
  w = Math.round(w * 0.9);
  h = Math.round(h * 0.9);
  return { x: Math.round((natW - w) / 2), y: Math.round((natH - h) / 2), w, h };
}

export function CropTool() {
  const [file, setFile] = useState<File | null>(null);
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const [nat, setNat] = useState<{ w: number; h: number } | null>(null);
  const [crop, setCrop] = useState<Crop>({ x: 0, y: 0, w: 0, h: 0 });
  const [aspect, setAspect] = useState<number | null>(null);
  const [format, setFormat] = useState<Format>("original");
  const [quality, setQuality] = useState(0.92);
  const [isWorking, setIsWorking] = useState(false);
  const [isDropping, setIsDropping] = useState(false);
  const [scale, setScale] = useState(1);

  const inputRef = useRef<HTMLInputElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const drag = useRef<{ handle: Handle; sx: number; sy: number; orig: Crop; rect: DOMRect } | null>(null);

  // Keep the on-screen scale (rendered px ÷ natural px) in sync with layout.
  const measure = useCallback(() => {
    const img = imgRef.current;
    if (img && nat) setScale(img.clientWidth / nat.w);
  }, [nat]);

  useEffect(() => {
    if (!nat) return;
    measure();
    const ro = new ResizeObserver(measure);
    if (imgRef.current) ro.observe(imgRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [nat, measure]);

  useEffect(() => () => { if (imgUrl) URL.revokeObjectURL(imgUrl); }, [imgUrl]);

  const loadFile = useCallback((incoming: FileList | File[]) => {
    const f = Array.from(incoming).find((x) => x.type.startsWith("image/"));
    if (!f) {
      toast.error("Please select an image file (JPG, PNG, WEBP, GIF, BMP).");
      return;
    }
    const url = URL.createObjectURL(f);
    const img = new window.Image();
    img.onload = () => {
      const w = img.naturalWidth;
      const h = img.naturalHeight;
      setFile(f);
      setImgUrl(url);
      setNat({ w, h });
      setAspect(null);
      setCrop(centeredAspect(w, h, null));
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      toast.error(`Couldn't read "${f.name}" — is it a valid image?`);
    };
    img.src = url;
  }, []);

  useHandoff(loadFile);

  const reset = () => {
    if (imgUrl) URL.revokeObjectURL(imgUrl);
    setFile(null);
    setImgUrl(null);
    setNat(null);
    setCrop({ x: 0, y: 0, w: 0, h: 0 });
    setAspect(null);
  };

  const applyAspect = (a: number | null) => {
    setAspect(a);
    if (nat) setCrop(centeredAspect(nat.w, nat.h, a));
  };

  // ── Pointer drag (move + resize) ─────────────────────────────────────────
  const onPointerDown = (handle: Handle) => (e: React.PointerEvent) => {
    if (!wrapRef.current) return;
    e.preventDefault();
    e.stopPropagation();
    drag.current = {
      handle,
      sx: e.clientX,
      sy: e.clientY,
      orig: crop,
      rect: wrapRef.current.getBoundingClientRect(),
    };
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  };

  const onPointerMove = useCallback(
    (e: PointerEvent) => {
      const d = drag.current;
      if (!d || !nat) return;
      const sc = scale || 1;
      const dx = (e.clientX - d.sx) / sc;
      const dy = (e.clientY - d.sy) / sc;
      const o = d.orig;

      if (d.handle === "move") {
        setCrop(clampCrop({ ...o, x: o.x + dx, y: o.y + dy }, nat.w, nat.h));
        return;
      }

      // Aspect-locked → corner drag anchored at the opposite corner.
      if (aspect != null && (d.handle.length === 2)) {
        const ax = d.handle.includes("w") ? o.x + o.w : o.x; // fixed x
        const ay = d.handle.includes("n") ? o.y + o.h : o.y; // fixed y
        const px = Math.max(0, Math.min(nat.w, (e.clientX - d.rect.left) / sc));
        const py = Math.max(0, Math.min(nat.h, (e.clientY - d.rect.top) / sc));
        let w = Math.abs(px - ax);
        let h = w / aspect;
        if (h > Math.abs(py - ay)) {
          h = Math.abs(py - ay);
          w = h * aspect;
        }
        w = Math.max(MIN, w);
        h = Math.max(MIN, h);
        const x = px < ax ? ax - w : ax;
        const y = py < ay ? ay - h : ay;
        setCrop(clampCrop({ x, y, w, h }, nat.w, nat.h));
        return;
      }

      // Free resize — adjust only the dragged edge(s).
      let { x, y, w, h } = o;
      if (d.handle.includes("e")) w = o.w + dx;
      if (d.handle.includes("s")) h = o.h + dy;
      if (d.handle.includes("w")) { const r = o.x + o.w; x = o.x + dx; w = r - x; }
      if (d.handle.includes("n")) { const b = o.y + o.h; y = o.y + dy; h = b - y; }
      if (w < MIN) { if (d.handle.includes("w")) x = o.x + o.w - MIN; w = MIN; }
      if (h < MIN) { if (d.handle.includes("n")) y = o.y + o.h - MIN; h = MIN; }
      setCrop(clampCrop({ x, y, w, h }, nat.w, nat.h));
    },
    [nat, scale, aspect]
  );

  const onPointerUp = useCallback(() => {
    drag.current = null;
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", onPointerUp);
  }, [onPointerMove]);

  // Commit a manually-entered field value: min 0, max = image size, and keep
  // the box inside the image. Uses minSize 0 so typing small values isn't fought.
  const commitField = (k: keyof Crop, n: number) => {
    if (!nat) return;
    setCrop((c) => clampCrop({ ...c, [k]: n }, nat.w, nat.h, 0));
  };

  const outMime = useMemo<string>(() => {
    if (format !== "original") return format;
    const t = file?.type || "image/png";
    return t === "image/gif" || t === "image/bmp" ? "image/png" : t;
  }, [format, file]);

  const baseName = useMemo(
    () => (file?.name || "image").replace(/\.[^.]+$/, ""),
    [file]
  );

  const handleCrop = async () => {
    if (!file || !imgUrl || !nat) return;
    setIsWorking(true);
    try {
      const img = new window.Image();
      img.src = imgUrl;
      await img.decode();
      const c = clampCrop(crop, nat.w, nat.h);
      const canvas = document.createElement("canvas");
      canvas.width = c.w;
      canvas.height = c.h;
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Canvas not supported");
      if (outMime === "image/jpeg") {
        ctx.fillStyle = "#ffffff"; // flatten transparency for JPG
        ctx.fillRect(0, 0, c.w, c.h);
      }
      ctx.drawImage(img, c.x, c.y, c.w, c.h, 0, 0, c.w, c.h);
      const useQuality = outMime === "image/jpeg" || outMime === "image/webp";
      const blob: Blob | null = await new Promise((res) =>
        canvas.toBlob(res, outMime, useQuality ? quality : undefined)
      );
      if (!blob) throw new Error("Could not export image");
      const ext = outMime.split("/")[1].replace("jpeg", "jpg");
      const a = document.createElement("a");
      const dl = URL.createObjectURL(blob);
      a.href = dl;
      a.download = `${baseName}_cropped.${ext}`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(dl), 1000);
      toast.success("Cropped — download started.");
    } catch (err) {
      console.error(err);
      toast.error(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setIsWorking(false);
    }
  };

  const openPicker = () => inputRef.current?.click();
  const fieldCls =
    "w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";

  // ── Empty state ───────────────────────────────────────────────────────────
  if (!file || !imgUrl || !nat) {
    return (
      <section>
        <TopLoadingBar active={isWorking} />
        <input
          ref={inputRef}
          type="file"
          accept={ACCEPT}
          className="hidden"
          onChange={(e) => {
            if (e.target.files) loadFile(e.target.files);
            e.target.value = "";
          }}
        />
        <div
          onClick={openPicker}
          onDragOver={(e) => { e.preventDefault(); setIsDropping(true); }}
          onDragLeave={() => setIsDropping(false)}
          onDrop={(e) => { e.preventDefault(); setIsDropping(false); loadFile(e.dataTransfer.files); }}
          className={`relative w-full rounded-xl border-2 border-dashed py-14 px-6 flex flex-col items-center justify-center gap-3 bg-surface-container-lowest ambient-shadow cursor-pointer transition-all ${
            isDropping ? "drag-active" : "border-outline-variant hover:border-secondary/50"
          }`}
        >
          <div className="hidden sm:flex w-11 h-11 bg-surface-container rounded-full items-center justify-center">
            <Icon name="crop" fill className="text-[22px]" style={{ color: ACCENT }} />
          </div>
          <div className="flex flex-col items-center gap-1 text-center">
            <span className="bg-secondary hover:bg-secondary-container text-on-secondary text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors">
              Select an image
            </span>
            <p className="text-body-md text-on-surface-variant mt-2">or drop a JPG, PNG, WEBP or GIF here</p>
          </div>
          <p className="text-label-sm font-label-sm text-on-surface-variant/70 mt-1 flex items-center gap-1.5">
            <Icon name="lock" className="text-[14px]" /> Cropped entirely in your browser — your image never leaves your device.
          </p>
        </div>
      </section>
    );
  }

  // ── Loaded state ──────────────────────────────────────────────────────────
  const showEdges = aspect == null;
  const handleBase =
    "absolute w-3 h-3 bg-surface-container-lowest border-2 rounded-sm";
  const handleStyle = { borderColor: ACCENT } as const;

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 items-start">
      <span data-tool-active hidden aria-hidden="true" />
      <TopLoadingBar active={isWorking} />

      {/* Workspace */}
      <div className="flex flex-col gap-3 lg:sticky lg:top-24 lg:self-start">
        {/* File card */}
        <div className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-4 flex items-center gap-3">
          <span className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${ACCENT}1A` }}>
            <Icon name="image" fill className="text-[22px]" style={{ color: ACCENT }} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-body-md font-semibold text-primary">{file.name}</p>
            <p className="text-label-sm font-label-sm text-on-surface-variant">
              {nat.w} × {nat.h} px · {formatBytes(file.size)}
            </p>
          </div>
          <button
            type="button"
            onClick={reset}
            disabled={isWorking}
            aria-label="Remove image"
            className="flex h-8 w-8 items-center justify-center rounded text-on-surface-variant hover:bg-error-container hover:text-error transition-colors disabled:opacity-40"
          >
            <Icon name="close" className="text-[20px]" />
          </button>
        </div>

        {/* Crop canvas — the frame hugs the image so the crop is clear at any size/aspect */}
        <div className="flex justify-center w-full">
          <div className="bg-surface-container rounded-xl border border-surface-variant p-3 inline-block max-w-full overflow-hidden">
          <div ref={wrapRef} className="relative max-w-full select-none" style={{ lineHeight: 0, touchAction: "none" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={imgRef}
              src={imgUrl}
              alt="To crop"
              onLoad={measure}
              draggable={false}
              className="block w-auto h-auto max-w-full max-h-[46vh] rounded"
            />
            {/* Dim overlay outside the crop */}
            <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: "0 0 0 9999px rgba(0,0,0,0.45)", clipPath: "inset(0)" }} aria-hidden />
            {/* Crop rectangle */}
            <div
              onPointerDown={onPointerDown("move")}
              className="absolute cursor-move"
              style={{
                left: crop.x * scale,
                top: crop.y * scale,
                width: crop.w * scale,
                height: crop.h * scale,
                outline: `2px solid ${ACCENT}`,
                boxShadow: "0 0 0 9999px rgba(0,0,0,0.45)",
              }}
            >
              {/* rule-of-thirds guides */}
              <div className="absolute inset-0 pointer-events-none opacity-60" style={{
                backgroundImage:
                  `linear-gradient(${ACCENT} 1px, transparent 1px), linear-gradient(90deg, ${ACCENT} 1px, transparent 1px)`,
                backgroundSize: "33.33% 33.33%",
                backgroundPosition: "0 0",
                mixBlendMode: "screen",
                opacity: 0.25,
              }} aria-hidden />
              {/* corner handles */}
              <span className={`${handleBase} -top-1.5 -left-1.5 cursor-nwse-resize`} style={handleStyle} onPointerDown={onPointerDown("nw")} />
              <span className={`${handleBase} -top-1.5 -right-1.5 cursor-nesw-resize`} style={handleStyle} onPointerDown={onPointerDown("ne")} />
              <span className={`${handleBase} -bottom-1.5 -left-1.5 cursor-nesw-resize`} style={handleStyle} onPointerDown={onPointerDown("sw")} />
              <span className={`${handleBase} -bottom-1.5 -right-1.5 cursor-nwse-resize`} style={handleStyle} onPointerDown={onPointerDown("se")} />
              {/* edge handles (free mode only) */}
              {showEdges && (
                <>
                  <span className={`${handleBase} -top-1.5 left-1/2 -translate-x-1/2 cursor-ns-resize`} style={handleStyle} onPointerDown={onPointerDown("n")} />
                  <span className={`${handleBase} -bottom-1.5 left-1/2 -translate-x-1/2 cursor-ns-resize`} style={handleStyle} onPointerDown={onPointerDown("s")} />
                  <span className={`${handleBase} top-1/2 -left-1.5 -translate-y-1/2 cursor-ew-resize`} style={handleStyle} onPointerDown={onPointerDown("w")} />
                  <span className={`${handleBase} top-1/2 -right-1.5 -translate-y-1/2 cursor-ew-resize`} style={handleStyle} onPointerDown={onPointerDown("e")} />
                </>
              )}
            </div>
          </div>
          </div>
        </div>
        <p className="text-center text-label-sm font-label-sm text-on-surface-variant">
          Drag inside the box to move it, or drag a handle to resize.
        </p>
      </div>

      {/* Settings + action (right) */}
      <div className="lg:sticky lg:top-24 flex flex-col gap-4">
        {/* Aspect ratio */}
        <div className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-5 flex flex-col gap-3">
          <h2 className="text-headline-md font-bold text-primary">Aspect ratio</h2>
          <div className="grid grid-cols-4 gap-1.5">
            {ASPECTS.map((a) => {
              const active = aspect === a.value;
              return (
                <button
                  key={a.label}
                  type="button"
                  onClick={() => applyAspect(a.value)}
                  className={`rounded-md px-2 py-1.5 text-label-sm font-label-sm font-semibold transition-colors ${
                    active
                      ? "bg-secondary text-on-secondary"
                      : "bg-surface-container text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {a.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Crop dimensions */}
        <div className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-5 flex flex-col gap-3">
          <span className="flex items-center gap-1.5 text-headline-md font-bold text-primary">
            Selection
            <HelpTip text="Values are in pixels of the original image. Adjust them for a precise crop." />
          </span>
          <div className="grid grid-cols-2 gap-3">
            <NumberField label="X" value={crop.x} max={nat.w} onCommit={(n) => commitField("x", n)} className={fieldCls} />
            <NumberField label="Y" value={crop.y} max={nat.h} onCommit={(n) => commitField("y", n)} className={fieldCls} />
            <NumberField label="Width" value={crop.w} max={nat.w} onCommit={(n) => commitField("w", n)} className={fieldCls} />
            <NumberField label="Height" value={crop.h} max={nat.h} onCommit={(n) => commitField("h", n)} className={fieldCls} />
          </div>
          <button
            type="button"
            onClick={() => nat && setCrop({ x: 0, y: 0, w: nat.w, h: nat.h })}
            className="self-start text-label-sm font-label-sm font-semibold text-secondary hover:underline"
          >
            Select whole image
          </button>
        </div>

        {/* Output */}
        <div className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-5 flex flex-col gap-3">
          <h2 className="text-headline-md font-bold text-primary">Output</h2>
          <div className="flex flex-col gap-1.5">
            <label className="text-label-sm font-label-sm text-on-surface-variant">Format</label>
            <select value={format} onChange={(e) => setFormat(e.target.value as Format)} className={fieldCls}>
              {FORMATS.map((f) => <option key={f.value} value={f.value}>{f.label}</option>)}
            </select>
          </div>
          {(outMime === "image/jpeg" || outMime === "image/webp") && (
            <div className="flex flex-col gap-1.5">
              <label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
                <span>Quality</span>
                <span className="text-primary font-semibold">{Math.round(quality * 100)}%</span>
              </label>
              <input type="range" min={0.5} max={1} step={0.01} value={quality} onChange={(e) => setQuality(parseFloat(e.target.value))} className="w-full accent-secondary" />
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={handleCrop}
          disabled={isWorking}
          className="w-full inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-container text-on-secondary font-semibold py-3.5 rounded-lg transition-colors disabled:opacity-50"
        >
          {isWorking ? (
            <><Icon name="progress_activity" className="animate-spin text-[20px]" /> Cropping…</>
          ) : (
            <><Icon name="crop" fill className="text-[20px]" /> Crop &amp; download</>
          )}
        </button>

        <div className="rounded-xl border border-outline-variant/40 bg-surface-bright p-4 flex items-start gap-2.5">
          <Icon name="lightbulb" className="text-[18px] mt-0.5" style={{ color: ACCENT }} />
          <p className="text-label-sm font-label-sm text-on-surface-variant">
            <strong className="text-on-surface">Output:</strong> {crop.w} × {crop.h} px. Everything runs in your browser — nothing is uploaded.
          </p>
        </div>
      </div>
    </section>
  );
}

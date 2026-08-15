"use client";

import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { ToolWorkspace } from "@/components/tool/ToolWorkspace";
import { SettingsRail, RailAction, RailSecondaryAction } from "@/components/tool/SettingsRail";
import { downloadBlob, canvasToBlob, mimeExt, type ExportMime } from "@/lib/image/raster";

const ACCENT = "#8064C6";

/** Guess the image mime from the first bytes of a raw Base64 string. */
function detectMime(raw: string): string {
  if (raw.startsWith("iVBORw0")) return "image/png";
  if (raw.startsWith("/9j/")) return "image/jpeg";
  if (raw.startsWith("R0lGOD")) return "image/gif";
  if (raw.startsWith("UklGR")) return "image/webp";
  if (raw.startsWith("Qk")) return "image/bmp";
  if (raw.startsWith("PHN2Zy") || raw.startsWith("PD94bWw")) return "image/svg+xml";
  return "image/png";
}

function toDataUri(input: string): string {
  const s = input.trim();
  if (!s) return "";
  if (s.startsWith("data:")) return s;
  const raw = s.replace(/\s+/g, "");
  return `data:${detectMime(raw)};base64,${raw}`;
}

const FORMATS: { label: string; value: ExportMime }[] = [
  { label: "PNG", value: "image/png" },
  { label: "JPG", value: "image/jpeg" },
  { label: "WEBP", value: "image/webp" },
];

export function Base64ToImageTool() {
  const [input, setInput] = useState("");
  const [dataUri, setDataUri] = useState("");
  const [dims, setDims] = useState<{ w: number; h: number } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [format, setFormat] = useState<ExportMime>("image/png");
  const [quality, setQuality] = useState(0.92);
  const [isWorking, setIsWorking] = useState(false);

  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const uri = toDataUri(input);
    setDataUri(uri);
    setDims(null);
    if (!uri) { setError(null); return; }
    const img = new window.Image();
    img.onload = () => { setDims({ w: img.naturalWidth, h: img.naturalHeight }); setError(null); };
    img.onerror = () => { setError("That doesn't look like a valid Base64 image string."); };
    img.src = uri;
  }, [input]);

  const valid = !!dims && !error;

  const downloadNative = async () => {
    if (!valid) return;
    setIsWorking(true);
    try {
      const blob = await (await fetch(dataUri)).blob();
      const ext = (blob.type.split("/")[1] || "png").replace("jpeg", "jpg").replace("svg+xml", "svg");
      downloadBlob(blob, `omyimage_decoded.${ext}`);
      toast.success("Image downloaded.");
    } catch {
      toast.error("Couldn't decode that string.");
    } finally {
      setIsWorking(false);
    }
  };

  const downloadConverted = async () => {
    if (!valid || !dims) return;
    setIsWorking(true);
    try {
      const img = new window.Image();
      img.src = dataUri;
      await img.decode();
      const canvas = document.createElement("canvas");
      canvas.width = dims.w; canvas.height = dims.h;
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Canvas not supported.");
      if (format === "image/jpeg") { ctx.fillStyle = "#ffffff"; ctx.fillRect(0, 0, dims.w, dims.h); }
      ctx.drawImage(img, 0, 0);
      const blob = await canvasToBlob(canvas, format, quality);
      downloadBlob(blob, `omyimage_decoded.${mimeExt(format)}`);
      toast.success(`Downloaded as ${mimeExt(format).toUpperCase()}.`);
    } catch {
      toast.error("Conversion failed.");
    } finally {
      setIsWorking(false);
    }
  };

  const fieldCls = "w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";

  return (
    <>
      <TopLoadingBar active={isWorking} />
      <ToolWorkspace
        main={
          <>
        <div className="bg-surface-container rounded-xl border border-surface-variant p-4 flex items-center justify-center overflow-hidden" style={{ minHeight: 220 }}>
          {valid ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img ref={imgRef} src={dataUri} alt="Decoded" className="max-w-full max-h-[calc(100vh-12rem)] rounded shadow" />
          ) : (
            <div className="flex flex-col items-center gap-2 text-on-surface-variant text-center px-4">
              <Icon name={error ? "error" : "image"} className="text-[40px]" style={{ color: error ? "#EF4444" : ACCENT }} />
              <p className="text-body-md">{error ?? "Paste a Base64 string to preview the image here."}</p>
            </div>
          )}
        </div>
        {valid && dims && (
          <p className="text-center text-label-sm font-label-sm text-on-surface-variant">{dims.w} × {dims.h} px · decoded preview</p>
        )}
          </>
        }
        rail={
          <SettingsRail
            title="Base64 Input"
            icon="image"
            accent={ACCENT}
            footer={
              <>
                <RailAction onClick={downloadNative} disabled={!valid || isWorking} icon="download">
                  Download image
                </RailAction>
                <RailSecondaryAction icon="sync_alt" onClick={downloadConverted}>
                  Download as {mimeExt(format).toUpperCase()}
                </RailSecondaryAction>
              </>
            }
          >
        <div className="flex flex-col gap-4">
          <textarea value={input} onChange={(e) => setInput(e.target.value)} rows={7} placeholder="Paste a data URI (data:image/png;base64,…) or raw Base64" className={`${fieldCls} font-label-sm resize-y break-all`} style={{ wordBreak: "break-all" }} />
          {input && (error ? <p className="text-label-sm font-label-sm text-error flex items-center gap-1"><Icon name="error" className="text-[16px]" /> {error}</p> : valid ? <p className="text-label-sm font-label-sm text-on-surface-variant flex items-center gap-1"><Icon name="check_circle" className="text-[16px]" style={{ color: ACCENT }} /> Valid image detected.</p> : null)}
        </div>

        <div className="flex flex-col gap-3 border-t border-outline-variant/60 pt-5">
          <h3 className="text-body-lg font-bold text-primary">Convert &amp; download</h3>
          <select value={format} onChange={(e) => setFormat(e.target.value as ExportMime)} className={fieldCls}>{FORMATS.map((f) => <option key={f.value} value={f.value}>{f.label}</option>)}</select>
          {format !== "image/png" && (
            <div className="flex flex-col gap-1.5"><label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>Quality</span><span className="text-primary font-semibold">{Math.round(quality * 100)}%</span></label><input type="range" min={0.5} max={1} step={0.01} value={quality} onChange={(e) => setQuality(parseFloat(e.target.value))} className="w-full accent-secondary" /></div>
          )}
        </div>
          </SettingsRail>
        }
      />
    </>
  );
}

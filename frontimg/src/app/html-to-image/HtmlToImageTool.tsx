"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { postJsonForImage } from "@/lib/process-router";
import { downloadBlob, formatBytes } from "@/lib/image/raster";

const ACCENT = "#C96A48";
type Mode = "url" | "html";

export function HtmlToImageTool() {
  const [mode, setMode] = useState<Mode>("url");
  const [url, setUrl] = useState("");
  const [html, setHtml] = useState("<h1 style=\"font-family:sans-serif;color:#1f1d18\">Hello from oMyImage 👋</h1>");
  const [format, setFormat] = useState<"png" | "jpeg">("png");
  const [width, setWidth] = useState(1280);
  const [height, setHeight] = useState(720);
  const [fullPage, setFullPage] = useState(false);
  const [result, setResult] = useState<{ url: string; blob: Blob; name: string } | null>(null);
  const [isWorking, setIsWorking] = useState(false);

  useEffect(() => () => { if (result) URL.revokeObjectURL(result.url); }, [result]);

  const run = async () => {
    if (mode === "url" && !/^https?:\/\//i.test(url.trim())) { toast.error("Enter a valid URL (https://…)."); return; }
    if (mode === "html" && !html.trim()) { toast.error("Enter some HTML to render."); return; }
    setIsWorking(true);
    try {
      const body = {
        ...(mode === "url" ? { url: url.trim() } : { html }),
        format, width, height, fullPage,
      };
      const r = await postJsonForImage("/api/image/html-to-image", body);
      const u = URL.createObjectURL(r.blob);
      setResult((prev) => { if (prev) URL.revokeObjectURL(prev.url); return { url: u, blob: r.blob, name: r.filename }; });
      toast.success("Rendered — your image is ready.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Rendering failed.");
    } finally {
      setIsWorking(false);
    }
  };

  const fieldCls = "w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 items-start">
      <span data-tool-active hidden aria-hidden="true" />
      <TopLoadingBar active={isWorking} />

      {/* Preview / result */}
      <div className="flex flex-col gap-3 lg:sticky lg:top-24 lg:self-start">
        <div className="rounded-xl border border-surface-variant bg-surface-container p-4 flex items-center justify-center overflow-hidden" style={{ minHeight: 220 }}>
          {result ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={result.url} alt="Rendered" className="max-w-full max-h-[calc(100vh-12rem)] rounded shadow" />
          ) : (
            <div className="flex flex-col items-center gap-2 text-on-surface-variant">
              <Icon name="image" className="text-[40px]" style={{ color: ACCENT }} />
              <p className="text-body-md">Your rendered image will appear here.</p>
            </div>
          )}
        </div>
        {result && (
          <button type="button" onClick={() => downloadBlob(result.blob, result.name)} className="self-start inline-flex items-center gap-2 border border-secondary text-secondary font-semibold px-4 py-2 rounded-lg hover:bg-secondary/10 transition-colors">
            <Icon name="download" className="text-[20px]" /> Download ({formatBytes(result.blob.size)})
          </button>
        )}
      </div>

      {/* Controls */}
      <div className="lg:sticky lg:top-24 flex flex-col gap-4">
        <div className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-5 flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-1 rounded-lg bg-surface-container p-1">
            {(["url", "html"] as Mode[]).map((m) => (
              <button key={m} type="button" onClick={() => setMode(m)} className={`rounded-md px-3 py-2 text-body-md font-semibold uppercase transition-colors ${mode === m ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant hover:text-primary"}`}>{m}</button>
            ))}
          </div>

          {mode === "url" ? (
            <div className="flex flex-col gap-1.5">
              <label className="text-label-sm font-label-sm text-on-surface-variant">Web page URL</label>
              <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://example.com" className={fieldCls} />
            </div>
          ) : (
            <div className="flex flex-col gap-1.5">
              <label className="text-label-sm font-label-sm text-on-surface-variant">HTML</label>
              <textarea value={html} onChange={(e) => setHtml(e.target.value)} rows={6} className={`${fieldCls} font-label-sm resize-y`} />
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5"><label className="text-label-sm font-label-sm text-on-surface-variant">Width</label><input type="number" min={100} max={3840} value={width} onChange={(e) => setWidth(Math.max(100, parseInt(e.target.value || "0", 10)))} className={fieldCls} /></div>
            <div className="flex flex-col gap-1.5"><label className="text-label-sm font-label-sm text-on-surface-variant">Height</label><input type="number" min={100} max={3840} value={height} onChange={(e) => setHeight(Math.max(100, parseInt(e.target.value || "0", 10)))} className={fieldCls} /></div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-label-sm font-label-sm text-on-surface-variant">Format</label>
            <div className="grid grid-cols-2 gap-1 rounded-lg bg-surface-container p-1">
              {(["png", "jpeg"] as const).map((f) => (
                <button key={f} type="button" onClick={() => setFormat(f)} className={`rounded-md px-3 py-2 text-body-md font-semibold uppercase transition-colors ${format === f ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant hover:text-primary"}`}>{f === "jpeg" ? "JPG" : "PNG"}</button>
              ))}
            </div>
          </div>

          <label className="flex items-center gap-2.5 cursor-pointer"><input type="checkbox" checked={fullPage} onChange={(e) => setFullPage(e.target.checked)} className="w-4 h-4 accent-secondary" /><span className="text-body-md text-on-surface">Capture full page (scroll height)</span></label>
        </div>

        <button type="button" onClick={run} disabled={isWorking} className="w-full inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-container text-on-secondary font-semibold py-3.5 rounded-lg transition-colors disabled:opacity-50">
          {isWorking ? (<><Icon name="progress_activity" className="animate-spin text-[20px]" /> Rendering…</>) : (<><Icon name="screenshot_monitor" fill className="text-[20px]" /> Render to image</>)}
        </button>

        <div className="rounded-xl border border-outline-variant/40 bg-surface-bright p-4 flex items-start gap-2.5">
          <Icon name="lightbulb" className="text-[18px] mt-0.5" style={{ color: ACCENT }} />
          <p className="text-label-sm font-label-sm text-on-surface-variant"><strong className="text-on-surface">Server tool:</strong> rendering uses headless Chromium (open-source Puppeteer) on our servers.</p>
        </div>
      </div>
    </section>
  );
}

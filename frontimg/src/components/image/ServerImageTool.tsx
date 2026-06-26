"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { processOnServer } from "@/lib/process-router";
import { downloadBlob, formatBytes } from "@/lib/image/raster";

const CHECKER: React.CSSProperties = {
  backgroundColor: "#fff",
  backgroundImage:
    "linear-gradient(45deg,#e2e8f0 25%,transparent 25%),linear-gradient(-45deg,#e2e8f0 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#e2e8f0 75%),linear-gradient(-45deg,transparent 75%,#e2e8f0 75%)",
  backgroundSize: "20px 20px",
  backgroundPosition: "0 0,0 10px,10px -10px,-10px 0",
};

/**
 * Generic single-image tool that offloads work to a backimg server route
 * (used by the AI tools: remove background, upscale, enhance). Shows the input,
 * the processed result (on a checkerboard for transparent output), and a clear
 * message if the server feature isn't enabled (501).
 */
export function ServerImageTool({
  accent,
  icon,
  accept,
  endpoint,
  dropHint,
  actionLabel = "Process",
  processingLabel = "Processing…",
  resultTransparent = false,
  initialOptions = {},
  controls,
  note,
}: {
  accent: string;
  icon: string;
  accept: string;
  endpoint: string;
  dropHint: string;
  actionLabel?: string;
  processingLabel?: string;
  resultTransparent?: boolean;
  initialOptions?: Record<string, unknown>;
  controls?: (o: Record<string, unknown>, set: (k: string, v: unknown) => void) => ReactNode;
  note?: ReactNode;
}) {
  const [file, setFile] = useState<File | null>(null);
  const [inUrl, setInUrl] = useState<string | null>(null);
  const [opts, setOpts] = useState<Record<string, unknown>>(initialOptions);
  const [result, setResult] = useState<{ url: string; blob: Blob; name: string } | null>(null);
  const [isWorking, setIsWorking] = useState(false);

  useEffect(() => () => {
    if (inUrl) URL.revokeObjectURL(inUrl);
    if (result) URL.revokeObjectURL(result.url);
  }, [inUrl, result]);

  const onFiles = useCallback((incoming: FileList | File[]) => {
    const f = Array.from(incoming).find((x) => x.type.startsWith("image/"));
    if (!f) { toast.error("Please select an image."); return; }
    setInUrl((prev) => { if (prev) URL.revokeObjectURL(prev); return URL.createObjectURL(f); });
    setResult((prev) => { if (prev) URL.revokeObjectURL(prev.url); return null; });
    setFile(f);
  }, []);

  const set = (k: string, v: unknown) => setOpts((o) => ({ ...o, [k]: v }));

  const run = async () => {
    if (!file) return;
    setIsWorking(true);
    try {
      const r = await processOnServer(endpoint, file, opts);
      const url = URL.createObjectURL(r.blob);
      setResult((prev) => { if (prev) URL.revokeObjectURL(prev.url); return { url, blob: r.blob, name: r.filename }; });
      toast.success("Done — your image is ready.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Processing failed.");
    } finally {
      setIsWorking(false);
    }
  };

  const reset = () => {
    if (inUrl) URL.revokeObjectURL(inUrl);
    if (result) URL.revokeObjectURL(result.url);
    setFile(null); setInUrl(null); setResult(null);
  };

  if (!file) {
    return (
      <section>
        <TopLoadingBar active={isWorking} />
        <Dropzone onFiles={onFiles} accept={accept} accent={accent} icon={icon} multiple={false} buttonLabel="Select an image" hint={dropHint} />
        <div className="mt-4 rounded-xl border border-outline-variant/40 bg-surface-bright p-4 flex items-start gap-2.5 max-w-xl mx-auto">
          <Icon name="cloud" className="text-[18px] mt-0.5" style={{ color: accent }} />
          <p className="text-label-sm font-label-sm text-on-surface-variant">
            This is a server-powered tool. Start the <code className="font-label-sm">backimg</code> backend to use it; large images may take a few seconds.
          </p>
        </div>
      </section>
    );
  }

  const shown = result ?? { url: inUrl!, blob: file, name: file.name };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 items-start">
      <span data-tool-active hidden aria-hidden="true" />
      <TopLoadingBar active={isWorking} />

      <div className="flex flex-col gap-3 lg:sticky lg:top-24 lg:self-start">
        <div className="rounded-xl border border-surface-variant p-4 flex items-center justify-center overflow-hidden" style={{ minHeight: 220, ...(result && resultTransparent ? CHECKER : { backgroundColor: "var(--color-surface-container)" }) }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={shown.url} alt={result ? "Result" : "Original"} className="max-w-full max-h-[46vh] rounded" />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-label-sm font-label-sm text-on-surface-variant truncate">
            {result ? <span className="font-semibold" style={{ color: accent }}>Result</span> : "Original"} · {file.name}
          </p>
          <button type="button" onClick={reset} className="inline-flex items-center gap-1.5 text-label-md font-medium text-on-surface-variant hover:text-error"><Icon name="close" className="text-[18px]" /> Change image</button>
        </div>
      </div>

      <div className="lg:sticky lg:top-24 flex flex-col gap-4">
        {controls && (
          <div className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-5 flex flex-col gap-4">
            <h2 className="text-headline-md font-bold text-primary">Options</h2>
            {controls(opts, set)}
          </div>
        )}

        <button type="button" onClick={run} disabled={isWorking} className="w-full inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-container text-on-secondary font-semibold py-3.5 rounded-lg transition-colors disabled:opacity-50">
          {isWorking ? (<><Icon name="progress_activity" className="animate-spin text-[20px]" /> {processingLabel}</>) : (<><Icon name={icon} fill className="text-[20px]" /> {actionLabel}</>)}
        </button>

        {result && (
          <button type="button" onClick={() => downloadBlob(result.blob, result.name)} className="w-full inline-flex items-center justify-center gap-2 border border-secondary text-secondary font-semibold py-2.5 rounded-lg hover:bg-secondary/10 transition-colors">
            <Icon name="download" className="text-[20px]" /> Download ({formatBytes(result.blob.size)})
          </button>
        )}

        <div className="rounded-xl border border-outline-variant/40 bg-surface-bright p-4 flex items-start gap-2.5">
          <Icon name="lightbulb" className="text-[18px] mt-0.5" style={{ color: accent }} />
          <p className="text-label-sm font-label-sm text-on-surface-variant">{note}</p>
        </div>
      </div>
    </section>
  );
}

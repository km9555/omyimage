"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { ToolWorkspace, filesHeader } from "@/components/tool/ToolWorkspace";
import { SettingsRail, RailAction, RailSecondaryAction, RailNote } from "@/components/tool/SettingsRail";
import { Dropzone } from "@/components/image/Dropzone";
import { CompareSlider } from "@/components/image/CompareSlider";
import { TrayAction } from "@/components/tool/FileTray";
import { processOnServer } from "@/lib/process-router";
import { downloadBlob, formatBytes } from "@/lib/image/raster";
import { useHandoff } from "@/lib/tool-handoff";

const CHECKER: React.CSSProperties = {
  backgroundColor: "#fff",
  backgroundImage:
    "linear-gradient(45deg,#e2e8f0 25%,transparent 25%),linear-gradient(-45deg,#e2e8f0 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#e2e8f0 75%),linear-gradient(-45deg,transparent 75%,#e2e8f0 75%)",
  backgroundSize: "20px 20px",
  backgroundPosition: "0 0,0 10px,10px -10px,-10px 0",
};

/**
 * Generic single-image tool that offloads work to a shared oMyPDF backend route (/api/image/*)
 * (used by the AI tools: remove background, upscale). Shows the input,
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
  compare = false,
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
  /**
   * Show a drag-to-compare slider once a result exists, instead of swapping the
   * single preview over to it. Opt-in: remove-background's result is a cut-out on
   * a transparency checkerboard, which has nothing meaningful to compare against.
   */
  compare?: boolean;
  initialOptions?: Record<string, unknown>;
  controls?: (o: Record<string, unknown>, set: (k: string, v: unknown) => void) => ReactNode;
  note?: ReactNode;
}) {
  const [file, setFile] = useState<File | null>(null);
  const [inUrl, setInUrl] = useState<string | null>(null);
  const [opts, setOpts] = useState<Record<string, unknown>>(initialOptions);
  const [result, setResult] = useState<{ url: string; blob: Blob; name: string } | null>(null);
  const [isWorking, setIsWorking] = useState(false);

  // One effect per URL, each owning only its own lifetime. These used to share a
  // dependency array, which meant a result arriving ran the cleanup and revoked
  // `inUrl` — the original — while it was still live. That was invisible while the
  // preview swapped away from the original at the same moment, but the comparison
  // slider needs both alive at once. Revoking is now the effects' job alone: no
  // state updater below does it, since updaters can run twice under StrictMode.
  useEffect(() => () => { if (inUrl) URL.revokeObjectURL(inUrl); }, [inUrl]);
  useEffect(() => {
    const u = result?.url;
    return () => { if (u) URL.revokeObjectURL(u); };
  }, [result]);

  const onFiles = useCallback((incoming: FileList | File[]) => {
    const f = Array.from(incoming).find((x) => x.type.startsWith("image/"));
    if (!f) { toast.error("Please select an image."); return; }
    // Created outside the updater on purpose — a StrictMode double-invoke would
    // otherwise mint two object URLs and leak one.
    const url = URL.createObjectURL(f);
    setInUrl(url);
    setResult(null);
    setFile(f);
  }, []);

  useHandoff(onFiles);

  const set = (k: string, v: unknown) => setOpts((o) => ({ ...o, [k]: v }));

  const run = async () => {
    if (!file) return;
    setIsWorking(true);
    try {
      const r = await processOnServer(endpoint, file, opts);
      const url = URL.createObjectURL(r.blob);
      setResult({ url, blob: r.blob, name: r.filename });
      toast.success("Done — your image is ready.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Processing failed.");
    } finally {
      setIsWorking(false);
    }
  };

  const reset = () => {
    // No manual revokes: setting these to null runs each effect's cleanup, which
    // is the single owner of those URLs.
    setFile(null); setInUrl(null); setResult(null);
  };

  if (!file) {
    return (
      <section>
        <TopLoadingBar active={isWorking} />
        {/* Always server-side (remove-background, upscale), so the default
            browser-local wording would contradict the panel below. */}
        <Dropzone onFiles={onFiles} accept={accept} accent={accent} icon={icon} multiple={false} buttonLabel="Select an image" hint={dropHint} privacyNote="Processed on our server over an encrypted connection — files are deleted right after." />
        <div className="mt-4 rounded-xl border border-outline-variant/40 bg-surface-bright p-4 flex items-start gap-2.5 max-w-xl mx-auto">
          <Icon name="cloud" className="text-[18px] mt-0.5" style={{ color: accent }} />
          <p className="text-label-sm font-label-sm text-on-surface-variant">
            This is a server-powered tool, so large images may take a few seconds.
          </p>
        </div>
      </section>
    );
  }

  const shown = result ?? { url: inUrl!, blob: file, name: file.name };

  return (
    <>
      <TopLoadingBar active={isWorking} />
      <ToolWorkspace
        /* Below `md` this becomes the full-screen app shell. One image, so the
           header names it directly and the rail moves into a sheet. */
        mobile={{
          ...filesHeader(file ? [file] : []),
          onBack: reset,
          backLabel: "Clear image",
          settingsTitle: "Options",
          cta: {
            icon: icon,
            label: actionLabel,
            busyLabel: processingLabel,
            busy: isWorking,
            onClick: run,
          },
        }}
        main={
          <>
        {compare && result && inUrl ? (
          <CompareSlider beforeUrl={inUrl} afterUrl={result.url} accent={accent} />
        ) : (
          <div className="rounded-xl border border-surface-variant p-4 flex items-center justify-center overflow-hidden" style={{ minHeight: 220, ...(result && resultTransparent ? CHECKER : { backgroundColor: "var(--color-surface-container)" }) }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={shown.url} alt={result ? "Result" : "Original"} className="max-w-full max-h-[46vh] rounded" />
          </div>
        )}
        {compare && result ? (
          /* Result card. Mirrors FileTray's list-row styling rather than reusing
             FileTray itself, which always renders a "Selected files (n)" heading
             there is no prop to suppress — wrong copy and wrong hierarchy for a
             single-image tool. Also puts a real Download button in the mobile
             shell body, where it otherwise only exists inside the settings sheet. */
          <div className="flex items-center gap-3 rounded-xl border border-surface-variant bg-surface-container-lowest ambient-shadow p-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={result.url} alt="" className="h-12 w-12 shrink-0 rounded-lg bg-surface-container object-cover" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-body-md font-semibold text-primary">{result.name}</p>
              <p className="text-label-sm font-label-sm text-on-surface-variant">
                <span className="line-through opacity-60">{formatBytes(file.size)}</span>
                <Icon name="arrow_forward" className="mx-1 align-middle text-[13px]" />
                <span className="font-semibold text-on-surface">{formatBytes(result.blob.size)}</span>
              </p>
            </div>
            <TrayAction icon="download" label="Download" tone="accent" onClick={() => downloadBlob(result.blob, result.name)} />
          </div>
        ) : null}
        <div className="flex items-center justify-between">
          {/* When the result card is up it already names the file, so this line
              would just repeat it under a different name. Keep the row for the
              reset button and drop the duplicate label — but only where the card
              actually renders, so remove-background keeps its original wording. */}
          <p className="text-label-sm font-label-sm text-on-surface-variant truncate">
            {compare && result ? "" : (
              <>
                {result ? <span className="font-semibold" style={{ color: accent }}>Result</span> : "Original"} · {file.name}
              </>
            )}
          </p>
          <button type="button" onClick={reset} className="inline-flex items-center gap-1.5 text-label-md font-medium text-on-surface-variant hover:text-error"><Icon name="close" className="text-[18px]" /> Change image</button>
        </div>
          </>
        }
        rail={
          <SettingsRail
            title="Options"
            icon="tune"
            accent={accent}
            footer={
              <>
                {/* Guarded: RailNote renders a bare <p>, and the footer is a
                    `flex flex-col gap-3`, so an empty one still costs a 12px gap
                    above the action button. Upscale passes no note. */}
                {note && <RailNote>{note}</RailNote>}
                <RailAction onClick={run} busy={isWorking} busyLabel={processingLabel} icon={icon}>
                  {actionLabel}
                </RailAction>
                {result && (
                  <RailSecondaryAction icon="download" onClick={() => downloadBlob(result.blob, result.name)}>
                    Download ({formatBytes(result.blob.size)})
                  </RailSecondaryAction>
                )}
              </>
            }
          >
        {controls && controls(opts, set)}
          </SettingsRail>
        }
      />
    </>
  );
}

"use client";

import { useCallback, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { ToolWorkspace } from "@/components/tool/ToolWorkspace";
import { FileTray, TrayAction, type TrayEntry } from "@/components/tool/FileTray";
import { SettingsRail, RailAction, RailSecondaryAction, RailNote } from "@/components/tool/SettingsRail";
import { downloadBlob, zipAndDownload, formatBytes, baseName } from "@/lib/image/raster";
import { processOnServer } from "@/lib/process-router";
import { useHandoff } from "@/lib/tool-handoff";

/**
 * HEIC conversion runs on the server, unlike every other converter here.
 * That's a licensing constraint, not a performance one: all JS HEIC decoders
 * bundle libheif (LGPL-3.0), and shipping it to the browser would be
 * distribution. See LICENSE-AUDIT.md (F1). Don't "optimise" this back into the
 * browser with heic2any/heic-decode/heic-convert — they're all the same libheif.
 */

const ACCENT = "#D4855A";
const ACCEPT = ".heic,.heif,image/heic,image/heif";

type Target = "image/jpeg" | "image/png";
type Item = { id: string; file: File; result?: { blob: Blob; size: number; name: string } };

let counter = 0;
const uid = () => `f${Date.now()}_${counter++}`;

function isHeic(f: File): boolean {
  const n = f.name.toLowerCase();
  return f.type === "image/heic" || f.type === "image/heif" || n.endsWith(".heic") || n.endsWith(".heif");
}

/**
 * `defaultTarget` lets /heic-to-png reuse this component with PNG preselected.
 * The toggle stays visible either way — the prop sets the starting point, it
 * does not lock the tool down.
 */
export function HeicTool({ defaultTarget = "image/jpeg" }: { defaultTarget?: Target } = {}) {
  const [items, setItems] = useState<Item[]>([]);
  const [target, setTarget] = useState<Target>(defaultTarget);
  const [quality, setQuality] = useState(0.92);
  const [isWorking, setIsWorking] = useState(false);
  const [done, setDone] = useState(false);

  const addFiles = useCallback((incoming: FileList | File[]) => {
    const heics = Array.from(incoming).filter(isHeic);
    if (heics.length === 0) { toast.error("Please select HEIC or HEIF images."); return; }
    setDone(false);
    setItems((prev) => [...prev, ...heics.map((file) => ({ id: uid(), file }))]);
  }, []);

  useHandoff(addFiles);

  const removeItem = (id: string) => setItems((prev) => prev.filter((p) => p.id !== id));
  const reset = () => { setItems([]); setDone(false); };

  const convertAll = async () => {
    if (items.length === 0) return;
    setIsWorking(true);
    try {
      const ext = target === "image/jpeg" ? "jpg" : "png";
      const out: Item[] = [];
      for (const it of items) {
        const r = await processOnServer("/api/image/heic", it.file, {
          format: target === "image/png" ? "png" : "jpeg",
          quality: Math.round(quality * 100),
        });
        out.push({ ...it, result: { blob: r.blob, size: r.blob.size, name: r.filename || `${baseName(it.file.name)}.${ext}` } });
      }
      setItems(out);
      setDone(true);
      if (out.length === 1 && out[0].result) downloadBlob(out[0].result.blob, out[0].result.name);
      else await zipAndDownload(out.map((o) => ({ name: o.result!.name, blob: o.result!.blob })), "omyimage_heic.zip");
      toast.success(`Converted ${out.length} HEIC image${out.length === 1 ? "" : "s"}.`);
    } catch (err) {
      console.error(err);
      // processOnServer surfaces the server's own message, including the 501
      // "not enabled on this server" when ImageMagick is missing.
      toast.error(err instanceof Error ? err.message : "Conversion failed.");
    } finally {
      setIsWorking(false);
    }
  };

  if (items.length === 0) {
    return (
      <section>
        <TopLoadingBar active={isWorking} />
        {/* Server-backed by licence necessity (LICENSE-AUDIT F1), so the
            default browser-local wording would be false here. */}
        <Dropzone onFiles={addFiles} accept={ACCEPT} accent={ACCENT} icon="photo_camera" hint="or drop .heic / .heif photos here" privacyNote="Converted on our server over an encrypted connection — files are deleted right after." />
      </section>
    );
  }

  const entries: TrayEntry[] = items.map((it) => ({
    id: it.id,
    name: it.file.name,
    // HEIC has no browser-decodable preview, so the tray falls back to an icon.
    icon: "photo_camera",
    meta: (
      <>
        {formatBytes(it.file.size)}
        {it.result && <><Icon name="arrow_forward" className="text-[13px] mx-1 align-middle" /><span className="text-on-surface font-semibold">{formatBytes(it.result.size)}</span><span className="ml-1 uppercase text-[10px] rounded bg-secondary/15 text-on-secondary-fixed-variant px-1.5 py-0.5">{target === "image/jpeg" ? "JPG" : "PNG"}</span></>}
      </>
    ),
    action: it.result ? (
      <TrayAction icon="download" tone="accent" label="Download" onClick={() => downloadBlob(it.result!.blob, it.result!.name)} />
    ) : (
      <TrayAction icon="close" label="Remove" disabled={isWorking} onClick={() => removeItem(it.id)} />
    ),
  }));

  return (
    <>
      <TopLoadingBar active={isWorking} />
      <ToolWorkspace
        main={
          <FileTray
            entries={entries}
            title={`${items.length} HEIC image${items.length === 1 ? "" : "s"}`}
            accept={ACCEPT}
            onFiles={addFiles}
            onClear={reset}
            busy={isWorking}
          />
        }
        rail={
          <SettingsRail
            title="Conversion Settings"
            icon="sync_alt"
            accent={ACCENT}
            footer={
              <>
                <RailNote>Conversion runs on our server; results are auto-deleted within an hour.</RailNote>
                <RailAction onClick={convertAll} busy={isWorking} busyLabel="Converting…" icon="sync_alt">
                  Convert {items.length > 1 ? `${items.length} images` : "& download"}
                </RailAction>
                {done && items.length > 1 && (
                  <RailSecondaryAction
                    icon="folder_zip"
                    onClick={() => zipAndDownload(items.filter((i) => i.result).map((i) => ({ name: i.result!.name, blob: i.result!.blob })), "omyimage_heic.zip")}
                  >
                    Download all (ZIP)
                  </RailSecondaryAction>
                )}
              </>
            }
          >
          <div className="grid grid-cols-2 gap-1 rounded-lg bg-surface-container p-1">
            {([["image/jpeg", "JPG"], ["image/png", "PNG"]] as [Target, string][]).map(([v, l]) => (
              <button key={v} type="button" onClick={() => setTarget(v)} className={`rounded-md px-3 py-2 text-body-md font-semibold transition-colors ${target === v ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant hover:text-primary"}`}>{l}</button>
            ))}
          </div>
          {target === "image/jpeg" && (
            <div className="flex flex-col gap-1.5"><label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"><span>Quality</span><span className="text-primary font-semibold">{Math.round(quality * 100)}%</span></label><input type="range" min={0.5} max={1} step={0.01} value={quality} onChange={(e) => setQuality(parseFloat(e.target.value))} className="w-full accent-secondary" /></div>
          )}
          </SettingsRail>
        }
      />
    </>
  );
}

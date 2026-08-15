"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import {
  rasterize,
  downloadBlob,
  zipAndDownload,
  formatBytes,
  baseName,
  mimeExt,
  type ExportMime,
} from "@/lib/image/raster";
import { BackgroundPicker, resolveBg, type BgValue } from "@/components/BackgroundPicker";
import { ToolWorkspace } from "@/components/tool/ToolWorkspace";
import { FileTray, TrayAction, type TrayEntry } from "@/components/tool/FileTray";
import {
  SettingsRail,
  RailAction,
  RailSecondaryAction,
  RailNote,
} from "@/components/tool/SettingsRail";
import { shouldUseServer, toServerFormat, processOnServer } from "@/lib/process-router";
import { useHandoff } from "@/lib/tool-handoff";
import { kindOf, type FileKind } from "@/lib/file-actions";

export interface ConvertConfig {
  accent: string;
  /** input `accept` attribute. */
  accept: string;
  targetMime: ExportMime;
  /** "JPG" / "PNG" — shown on buttons & badges. */
  targetLabel: string;
  /** Show the background-flatten control (true for JPG targets). */
  flatten: boolean;
  /** Show the quality slider (true for JPG/WEBP targets). */
  quality: boolean;
  /** Short note shown in the drop zone. */
  dropHint: string;
  /**
   * Which file kinds this converter accepts, as `file-actions` classifier
   * kinds. Optional for back-compat; when set, the drop handler uses `kindOf`
   * instead of sniffing `file.type`.
   *
   * This matters more than it looks: browsers report an EMPTY `type` for .avif
   * and .heic (and often .tif), so the old `f.type.startsWith("image/")` guard
   * silently rejected them before any decode was attempted. `kindOf` falls back
   * to the extension, which is what makes AVIF and JFIF sources possible at all.
   */
  sourceKinds?: FileKind[];
  /** Source format shown in the rejection toast, e.g. "AVIF". */
  sourceLabel?: string;
  /**
   * May an oversize file be offloaded to the backend? Defaults true.
   * MUST be false when the SOURCE is a format Sharp cannot decode — BMP is the
   * live case: `looksLikeImage()` accepts BMP magic bytes so the upload passes
   * validation, then libvips has no BMP loader and the conversion throws.
   */
  serverFallback?: boolean;
  /**
   * Privacy line under the drop zone. Must describe what actually happens:
   * anything over BROWSER_MAX_BYTES is POSTed to the backend even on an
   * otherwise browser-only conversion, so the old hardcoded "never leave your
   * device" was false for large files. See LICENSE-AUDIT.md F4.
   */
  privacyNote?: string;
}

const DEFAULT_PRIVACY_NOTE =
  "Converted in your browser — files stay on your device (large files are processed on our server).";

type Item = {
  id: string;
  file: File;
  url: string;
  result?: { blob: Blob; size: number; name: string };
};

let counter = 0;
const uid = () => `f${Date.now()}_${counter++}`;

export function ConvertTool({ config }: { config: ConvertConfig }) {
  const { accent, accept, targetMime, targetLabel, flatten, quality } = config;
  const serverFallback = config.serverFallback ?? true;
  const [items, setItems] = useState<Item[]>([]);
  const [quality_, setQuality] = useState(0.92);
  const [bg, setBg] = useState<BgValue>({ transparent: false, color: "#ffffff" });
  const [autoOrient, setAutoOrient] = useState(true);
  const [isWorking, setIsWorking] = useState(false);
  const [isDropping, setIsDropping] = useState(false);
  const [done, setDone] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  /*
    Revoke preview URLs on UNMOUNT only.

    This used to depend on `items`, so React ran the cleanup on every change to
    the list — including the `setItems(out)` inside convertAll, whose items
    carry the SAME `url` strings. The effect therefore revoked URLs the very
    next render still points at, leaving broken thumbnails after conversion
    (usually masked by Chrome's cache, reliably visible in Firefox).

    A ref mirror keeps the unmount cleanup pointed at the current list without
    making the effect re-run. Per-item revocation on remove/reset is handled
    explicitly in `removeItem` and `reset`.
  */
  const itemsRef = useRef<Item[]>([]);
  useEffect(() => { itemsRef.current = items; }, [items]);
  useEffect(() => () => { itemsRef.current.forEach((i) => URL.revokeObjectURL(i.url)); }, []);

  const addFiles = useCallback((incoming: FileList | File[]) => {
    const kinds = config.sourceKinds;
    const imgs = Array.from(incoming).filter((f) =>
      kinds ? kinds.includes(kindOf(f)) : f.type.startsWith("image/"),
    );
    if (imgs.length === 0) {
      toast.error(
        config.sourceLabel
          ? `Please select ${config.sourceLabel} files.`
          : "Please select image files.",
      );
      return;
    }
    setDone(false);
    setItems((prev) => [
      ...prev,
      ...imgs.map((file) => ({ id: uid(), file, url: URL.createObjectURL(file) })),
    ]);
  }, []);

  useHandoff(addFiles);

  const removeItem = (id: string) =>
    setItems((prev) => {
      const it = prev.find((p) => p.id === id);
      if (it) URL.revokeObjectURL(it.url);
      return prev.filter((p) => p.id !== id);
    });

  const reset = () => {
    items.forEach((i) => URL.revokeObjectURL(i.url));
    setItems([]);
    setDone(false);
  };

  const ext = mimeExt(targetMime);

  const convertAll = async () => {
    if (items.length === 0) return;
    setIsWorking(true);
    try {
      const out: Item[] = [];
      for (const it of items) {
        const name = `${baseName(it.file.name)}.${ext}`;
        let blob: Blob;
        if (serverFallback && shouldUseServer(it.file.size)) {
          // > 15 MB → offload to the shared oMyPDF backend (Sharp, /api/image/*).
          // Gated on `serverFallback`: Sharp/libvips cannot DECODE bmp, so a
          // large BMP sent here throws instead of converting. Those pairs keep
          // everything in the browser, where canvas handles BMP fine.
          const r = await processOnServer("/api/image/convert", it.file, {
            format: toServerFormat(targetMime),
            quality: quality_,
            background: flatten ? resolveBg(bg) ?? undefined : undefined,
          });
          blob = r.blob;
        } else {
          const r = await rasterize(it.file, {
            mime: targetMime,
            quality: quality_,
            background: flatten ? resolveBg(bg) : null,
            autoOrient,
          });
          blob = r.blob;
        }
        out.push({ ...it, result: { blob, size: blob.size, name } });
      }
      setItems(out);
      setDone(true);
      // Auto-download: single file directly, multiple as a ZIP.
      if (out.length === 1 && out[0].result) {
        downloadBlob(out[0].result.blob, out[0].result.name);
      } else {
        await zipAndDownload(
          out.map((o) => ({ name: o.result!.name, blob: o.result!.blob })),
          `omyimage_${targetLabel.toLowerCase()}.zip`
        );
      }
      toast.success(`Converted ${out.length} image${out.length === 1 ? "" : "s"} to ${targetLabel}.`);
    } catch (err) {
      console.error(err);
      toast.error(err instanceof Error ? err.message : "Conversion failed.");
    } finally {
      setIsWorking(false);
    }
  };

  const totalIn = useMemo(() => items.reduce((s, i) => s + i.file.size, 0), [items]);
  const totalOut = useMemo(
    () => items.reduce((s, i) => s + (i.result?.size ?? 0), 0),
    [items]
  );

  const openPicker = () => inputRef.current?.click();
  const fieldCls =
    "w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";

  const fileInput = (
    <input
      ref={inputRef}
      type="file"
      accept={accept}
      multiple
      className="hidden"
      onChange={(e) => {
        if (e.target.files) addFiles(e.target.files);
        e.target.value = "";
      }}
    />
  );

  // ── Empty state ───────────────────────────────────────────────────────────
  if (items.length === 0) {
    return (
      <section>
        <TopLoadingBar active={isWorking} />
        {fileInput}
        <div
          onClick={openPicker}
          onDragOver={(e) => { e.preventDefault(); setIsDropping(true); }}
          onDragLeave={() => setIsDropping(false)}
          onDrop={(e) => { e.preventDefault(); setIsDropping(false); addFiles(e.dataTransfer.files); }}
          className={`relative w-full rounded-xl border-2 border-dashed py-14 px-6 flex flex-col items-center justify-center gap-3 bg-surface-container-lowest ambient-shadow cursor-pointer transition-all ${
            isDropping ? "drag-active" : "border-outline-variant hover:border-secondary/50"
          }`}
        >
          <div className="hidden sm:flex w-11 h-11 bg-surface-container rounded-full items-center justify-center">
            <Icon name="sync_alt" fill className="text-[22px]" style={{ color: accent }} />
          </div>
          <div className="flex flex-col items-center gap-1 text-center">
            <span className="bg-secondary hover:bg-secondary-container text-on-secondary text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors">
              Select images
            </span>
            <p className="text-body-md text-on-surface-variant mt-2">{config.dropHint}</p>
          </div>
          <p className="text-label-sm font-label-sm text-on-surface-variant/70 mt-1 flex items-center gap-1.5">
            <Icon name="lock" className="text-[14px]" /> {config.privacyNote ?? DEFAULT_PRIVACY_NOTE}
          </p>
        </div>
      </section>
    );
  }

  // ── Loaded state ──────────────────────────────────────────────────────────
  const entries: TrayEntry[] = items.map((it) => ({
    id: it.id,
    name: it.file.name,
    url: it.url,
    meta: (
      <>
        {formatBytes(it.file.size)}
        {it.result && (
          <>
            <Icon name="arrow_forward" className="text-[13px] mx-1 align-middle" />
            <span className="text-on-surface font-semibold">{formatBytes(it.result.size)}</span>
            <span className="ml-1 uppercase text-[10px] rounded bg-secondary/15 text-on-secondary-fixed-variant px-1.5 py-0.5">{targetLabel}</span>
          </>
        )}
      </>
    ),
    action: it.result ? (
      <TrayAction
        icon="download"
        tone="accent"
        label={`Download ${it.result.name}`}
        onClick={() => downloadBlob(it.result!.blob, it.result!.name)}
      />
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
            accept={accept}
            onFiles={addFiles}
            onClear={reset}
            busy={isWorking}
          />
        }
        rail={
          <SettingsRail
            title="Conversion Settings"
            icon="tune"
            accent={accent}
            footer={
              <>
                <RailNote>
                  {done ? (
                    <>Total: {formatBytes(totalIn)} → {formatBytes(totalOut)}</>
                  ) : (
                    <>{items.length} file{items.length === 1 ? "" : "s"} ready{items.length > 1 ? " — downloads as a ZIP" : ""}</>
                  )}
                </RailNote>
                <RailAction
                  onClick={convertAll}
                  busy={isWorking}
                  busyLabel="Converting…"
                  icon="sync_alt"
                >
                  Convert {items.length > 1 ? `${items.length} to ${targetLabel}` : `to ${targetLabel}`}
                </RailAction>
                {done && items.length > 1 && (
                  <RailSecondaryAction
                    icon="folder_zip"
                    onClick={() =>
                      zipAndDownload(
                        items.filter((i) => i.result).map((i) => ({ name: i.result!.name, blob: i.result!.blob })),
                        `omyimage_${targetLabel.toLowerCase()}.zip`,
                      )
                    }
                  >
                    Download all (ZIP)
                  </RailSecondaryAction>
                )}
              </>
            }
          >
            <div className="rounded-lg border border-outline-variant/40 bg-surface-bright p-3.5 flex items-start gap-2.5">
              <Icon name="lightbulb" className="text-[18px] mt-0.5 shrink-0" style={{ color: accent }} />
              <p className="text-label-sm font-label-sm text-on-surface-variant">
                Output: <strong className="text-on-surface">{targetLabel}</strong>.{" "}
                {config.privacyNote ?? DEFAULT_PRIVACY_NOTE}
              </p>
            </div>

            {quality && (
              <div className="flex flex-col gap-1.5">
                <label className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
                  <span>Quality</span>
                  <span className="text-primary font-semibold">{Math.round(quality_ * 100)}%</span>
                </label>
                <input type="range" min={0.5} max={1} step={0.01} value={quality_} onChange={(e) => setQuality(parseFloat(e.target.value))} className="w-full accent-secondary" />
              </div>
            )}

            {flatten && (
              <BackgroundPicker value={bg} onChange={setBg} allowTransparent={false} label="Background (replaces transparency)" />
            )}

            <label className="flex items-center gap-2.5 cursor-pointer">
              <input type="checkbox" checked={autoOrient} onChange={(e) => setAutoOrient(e.target.checked)} className="w-4 h-4 accent-secondary" />
              <span className="text-body-md text-on-surface">Auto-rotate by EXIF orientation</span>
            </label>
          </SettingsRail>
        }
      />
    </>
  );
}

"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { HelpTip } from "@/components/HelpTip";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { ToolWorkspace, filesHeader } from "@/components/tool/ToolWorkspace";
import { FileTray, TrayAction, type TrayEntry } from "@/components/tool/FileTray";
import { SettingsRail, RailAction, RailNote } from "@/components/tool/SettingsRail";
import { BackgroundPicker, resolveBg, type BgValue } from "@/components/BackgroundPicker";
import { PagePreview } from "./PagePreview";
import { decodeBitmap, downloadBlob, formatBytes, baseName, rasterize } from "@/lib/image/raster";
import { readJpegOrientation } from "@/lib/image/exif-orientation";
import {
  imagesToPdf,
  planPages,
  type PageSizeKey,
  type Orientation,
  type PerImageOrientation,
  type FitMode,
  type ImagesPerPage,
  type ImageInput,
} from "@/lib/pdf/images-to-pdf";
import { stashFiles, useHandoff } from "@/lib/tool-handoff";

const ACCENT = "#C55F4E";
const ACCEPT = "image/jpeg,image/png,image/webp,image/gif,image/bmp";

/**
 * Total input size past which we suggest compressing first. Images are embedded
 * without recompression, so the PDF lands at roughly the sum of the inputs —
 * and 10 MB is already past what most mail servers and upload forms accept.
 */
const NUDGE_BYTES = 10 * 1024 * 1024;

type Item = {
  id: string;
  file: File;
  url: string;
  /** EXIF-corrected pixel size, filled in asynchronously after the file lands. */
  dims?: { w: number; h: number };
  orientation: PerImageOrientation;
};

const PAGE_SIZES: { v: PageSizeKey; label: string }[] = [
  { v: "fit", label: "Fit to image" },
  { v: "a4", label: "A4" },
  { v: "letter", label: "Letter" },
  { v: "legal", label: "Legal" },
  { v: "a3", label: "A3" },
  { v: "a5", label: "A5" },
];

const ORIENTATIONS: { v: Orientation; label: string }[] = [
  { v: "auto", label: "Auto (match image)" },
  { v: "portrait", label: "Portrait" },
  { v: "landscape", label: "Landscape" },
  { v: "custom", label: "Custom (per image)" },
];

const PER_IMAGE: { v: PerImageOrientation; icon: string; label: string }[] = [
  { v: "auto", icon: "crop_free", label: "Auto" },
  { v: "portrait", icon: "crop_portrait", label: "Portrait" },
  { v: "landscape", icon: "crop_landscape", label: "Landscape" },
];

let counter = 0;
const uid = () => `f${Date.now()}_${counter++}`;

const seg = (active: boolean) =>
  `rounded-md px-2 py-2 text-label-sm font-label-sm font-semibold capitalize transition-colors ${
    active
      ? "bg-surface-container-lowest text-primary shadow-sm"
      : "text-on-surface-variant hover:text-primary"
  }`;

const fieldCls =
  "w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";

/**
 * Turn a picked file into bytes pdf-lib can embed.
 *
 * PNG and JPEG go through **untouched** — pdf-lib embeds them as-is, so the
 * PDF carries the original pixels with no recompression and PNG alpha stays
 * intact. (The old code rasterized every input to JPEG q0.9 on white, which
 * silently destroyed transparency and put JPEG ringing on screenshots and line
 * art.) Two exceptions have to be decoded:
 *
 *   - A JPEG with a non-trivial EXIF orientation. Nothing decodes an embedded
 *     JPEG, and PDF viewers ignore EXIF, so a sideways phone photo would stay
 *     sideways. Re-encode those at q0.95 with the rotation baked in.
 *   - WEBP/GIF/BMP, which pdf-lib cannot embed at all → canvas → PNG, keeping
 *     alpha (`background: null`).
 */
async function normalize(file: File): Promise<ImageInput> {
  const lower = (file.type || "").toLowerCase();
  const isPng = lower.includes("png");
  const isJpeg = lower.includes("jpeg") || lower.includes("jpg");

  if (isPng) {
    return { name: file.name, type: "image/png", bytes: new Uint8Array(await file.arrayBuffer()) };
  }

  if (isJpeg) {
    const bytes = new Uint8Array(await file.arrayBuffer());
    if (readJpegOrientation(bytes) === 1) {
      return { name: file.name, type: "image/jpeg", bytes };
    }
    const { blob } = await rasterize(file, {
      mime: "image/jpeg",
      quality: 0.95,
      background: null,
      autoOrient: true,
    });
    return { name: file.name, type: "image/jpeg", bytes: new Uint8Array(await blob.arrayBuffer()) };
  }

  const { blob } = await rasterize(file, {
    mime: "image/png",
    background: null,
    autoOrient: true,
  });
  return {
    name: `${baseName(file.name)}.png`,
    type: "image/png",
    bytes: new Uint8Array(await blob.arrayBuffer()),
  };
}

export function ImageToPdfTool() {
  const router = useRouter();
  const [items, setItems] = useState<Item[]>([]);
  const [pageSize, setPageSize] = useState<PageSizeKey>("a4");
  const [orientation, setOrientation] = useState<Orientation>("auto");
  const [imagesPerPage, setImagesPerPage] = useState<ImagesPerPage>(1);
  const [fit, setFit] = useState<FitMode>("contain");
  const [margin, setMargin] = useState(24);
  const [bg, setBg] = useState<BgValue>({ transparent: false, color: "#ffffff" });
  const [isWorking, setIsWorking] = useState(false);

  /*
    Revoke preview URLs on UNMOUNT only.

    This effect used to depend on `items`, so React ran its cleanup on every
    change to the list — including a reorder, whose items carry the SAME `url`
    strings. It therefore revoked URLs the very next render still points at,
    leaving broken thumbnails after moving a page (usually masked by Chrome's
    cache, reliably visible in Firefox). Same bug, same fix as `ConvertTool`:
    a ref mirror keeps the unmount cleanup pointed at the current list without
    making the effect re-run. Per-item revocation on remove/clear is handled
    explicitly in `removeItem` and `reset`.
  */
  const itemsRef = useRef<Item[]>([]);
  useEffect(() => { itemsRef.current = items; }, [items]);
  useEffect(() => () => { itemsRef.current.forEach((i) => URL.revokeObjectURL(i.url)); }, []);

  const addFiles = useCallback((incoming: FileList | File[]) => {
    const imgs = Array.from(incoming).filter((f) => f.type.startsWith("image/"));
    if (imgs.length === 0) { toast.error("Please select image files."); return; }
    const added: Item[] = imgs.map((file) => ({
      id: uid(),
      file,
      url: URL.createObjectURL(file),
      orientation: "auto" as PerImageOrientation,
    }));
    setItems((prev) => [...prev, ...added]);

    // Measure asynchronously — the preview needs real pixel dimensions, and
    // decoding a large batch inline would stall the drop. EXIF-corrected, to
    // match what `normalize` will actually embed.
    added.forEach(async (it) => {
      try {
        const bmp = await decodeBitmap(it.file, true);
        const dims = { w: bmp.width, h: bmp.height };
        bmp.close();
        setItems((prev) => prev.map((p) => (p.id === it.id ? { ...p, dims } : p)));
      } catch {
        /* Undecodable here still gets a chance to fail loudly at build time. */
      }
    });
  }, []);

  useHandoff(addFiles);

  const removeItem = (id: string) => setItems((prev) => { const it = prev.find((p) => p.id === id); if (it) URL.revokeObjectURL(it.url); return prev.filter((p) => p.id !== id); });
  const reset = () => { items.forEach((i) => URL.revokeObjectURL(i.url)); setItems([]); };
  const move = (i: number, dir: -1 | 1) => setItems((prev) => {
    const j = i + dir;
    if (j < 0 || j >= prev.length) return prev;
    const next = [...prev]; [next[i], next[j]] = [next[j], next[i]]; return next;
  });
  const setItemOrientation = (id: string, o: PerImageOrientation) =>
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, orientation: o } : it)));

  const opts = useMemo(
    () => ({
      pageSize,
      orientation,
      margin,
      fit,
      background: resolveBg(bg),
      imagesPerPage,
      perImageOrientation: items.map((it) => it.orientation),
    }),
    [pageSize, orientation, margin, fit, bg, imagesPerPage, items]
  );

  // Preview only once every image has been measured — a partial plan would
  // jump around as dimensions trickle in.
  const plans = useMemo(() => {
    if (items.length === 0 || items.some((it) => !it.dims)) return [];
    return planPages(items.map((it) => ({ width: it.dims!.w, height: it.dims!.h })), opts);
  }, [items, opts]);

  const thumbs = useMemo(() => items.map((it) => it.url), [items]);
  const totalIn = useMemo(() => items.reduce((s, i) => s + i.file.size, 0), [items]);

  const compressFirst = () => {
    stashFiles(items.map((i) => i.file));
    router.push("/compress-image");
  };

  const buildPdf = async () => {
    if (items.length === 0) return;
    setIsWorking(true);
    try {
      const inputs = await Promise.all(items.map((it) => normalize(it.file)));
      const bytes = await imagesToPdf(inputs, opts);
      const name = items.length === 1 ? `${baseName(items[0].file.name)}.pdf` : "omyimage.pdf";
      downloadBlob(new Blob([bytes as BlobPart], { type: "application/pdf" }), name);
      const pages = Math.ceil(items.length / imagesPerPage);
      toast.success(`Created a PDF with ${pages} page${pages === 1 ? "" : "s"}.`);
    } catch (err) {
      console.error(err);
      toast.error(err instanceof Error ? err.message : "Couldn't create the PDF.");
    } finally {
      setIsWorking(false);
    }
  };

  if (items.length === 0) {
    return (
      <section>
        <TopLoadingBar active={isWorking} />
        <Dropzone onFiles={addFiles} accept={ACCEPT} accent={ACCENT} icon="picture_as_pdf" hint="or drop JPG, PNG, WEBP or GIF images here" />
      </section>
    );
  }

  const entries: TrayEntry[] = items.map((it, i) => ({
    id: it.id,
    name: it.file.name,
    url: it.url,
    badge: (
      <span className="grid place-items-center w-7 h-7 rounded-full text-label-sm font-bold shrink-0" style={{ backgroundColor: `${ACCENT}1A`, color: ACCENT }}>{i + 1}</span>
    ),
    meta: (
      <>
        {formatBytes(it.file.size)}
        {it.dims && ` · ${it.dims.w} × ${it.dims.h}`}
      </>
    ),
    controls: orientation === "custom" ? (
      <div className="flex items-center gap-0.5 rounded-md bg-surface-container p-0.5">
        {PER_IMAGE.map((o) => (
          <button
            key={o.v}
            type="button"
            title={o.label}
            aria-label={`${o.label} — ${it.file.name}`}
            aria-pressed={it.orientation === o.v}
            onClick={() => setItemOrientation(it.id, o.v)}
            className={`flex flex-1 items-center justify-center rounded py-0.5 transition-colors ${
              it.orientation === o.v
                ? "bg-surface-container-lowest text-secondary shadow-sm"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            <Icon name={o.icon} className="text-[16px]" />
          </button>
        ))}
      </div>
    ) : undefined,
    action: <TrayAction icon="close" label="Remove" disabled={isWorking} onClick={() => removeItem(it.id)} />,
  }));

  const pageCount = Math.ceil(items.length / imagesPerPage);

  return (
    <>
      <TopLoadingBar active={isWorking} />
      <ToolWorkspace
        /* Below `md` this becomes the full-screen app shell: the tray is the
           body, the rail moves into a sheet, and this tool's primary action
           becomes the bottom bar CTA. Desktop is untouched. */
        mobile={{
          ...filesHeader(items.map((i) => i.file)),
          onBack: reset,
          backLabel: "Clear images",
          settingsTitle: "PDF settings",
          cta: {
            icon: "picture_as_pdf",
            label: "Build",
            busyLabel: "Building PDF…",
            busy: isWorking,
            onClick: buildPdf,
          },
        }}
        main={
          <>
            <PagePreview plans={plans} thumbs={thumbs} background={resolveBg(bg)} accent={ACCENT} />
            <FileTray
              entries={entries}
              title={`${items.length} image${items.length === 1 ? "" : "s"}`}
              accept={ACCEPT}
              onFiles={addFiles}
              onClear={reset}
              onMove={move}
              busy={isWorking}
            />
          </>
        }
        rail={
          <SettingsRail
            title="PDF Settings"
            icon="picture_as_pdf"
            accent={ACCENT}
            footer={
              <>
                <RailNote>
                  {items.length} image{items.length === 1 ? "" : "s"} → {pageCount} page{pageCount === 1 ? "" : "s"}. Use the arrows to reorder.
                </RailNote>
                <RailAction onClick={buildPdf} busy={isWorking} busyLabel="Building PDF…" icon="picture_as_pdf">
                  Create PDF
                </RailAction>
              </>
            }
          >
            {totalIn > NUDGE_BYTES && (
              <div className="flex flex-col gap-2 rounded-lg border border-outline-variant/40 bg-surface-bright p-3.5">
                <p className="flex items-start gap-2.5 text-label-sm font-label-sm text-on-surface-variant">
                  <Icon name="info" className="mt-0.5 shrink-0 text-[18px]" style={{ color: ACCENT }} />
                  <span>
                    That&apos;s <strong className="text-on-surface">{formatBytes(totalIn)}</strong> of images. They&apos;re embedded without
                    recompression, so the PDF will be about that big — likely too large to email.
                  </span>
                </p>
                <button
                  type="button"
                  onClick={compressFirst}
                  disabled={isWorking}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-secondary py-2 text-label-md font-semibold text-secondary transition-colors hover:bg-secondary/10 disabled:opacity-50"
                >
                  <Icon name="compress" className="text-[18px]" /> Compress these first
                </button>
              </div>
            )}

            <div className="flex flex-col gap-1.5">
              <label htmlFor="pdf-page-size" className="text-label-sm font-label-sm text-on-surface-variant">Page size</label>
              <select id="pdf-page-size" value={pageSize} onChange={(e) => setPageSize(e.target.value as PageSizeKey)} className={fieldCls}>
                {PAGE_SIZES.map((s) => (
                  <option key={s.v} value={s.v}>{s.label}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="pdf-orientation" className="text-label-sm font-label-sm text-on-surface-variant">Orientation</label>
              <select id="pdf-orientation" value={orientation} onChange={(e) => setOrientation(e.target.value as Orientation)} className={fieldCls} disabled={pageSize === "fit"}>
                {ORIENTATIONS.map((o) => (
                  <option key={o.v} value={o.v}>{o.label}</option>
                ))}
              </select>
              {pageSize === "fit" ? (
                <p className="text-label-sm font-label-sm text-on-surface-variant">Each page already takes its image&apos;s shape.</p>
              ) : orientation === "custom" ? (
                <p className="text-label-sm font-label-sm text-on-surface-variant">
                  Set each image&apos;s orientation on its card{imagesPerPage > 1 ? " — the first image on a page decides that page." : "."}
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-label-sm font-label-sm text-on-surface-variant">Images per page</label>
              <div className="grid grid-cols-5 gap-1 rounded-lg bg-surface-container p-1">
                {([1, 2, 4, 6, 9] as ImagesPerPage[]).map((n) => (
                  <button key={n} type="button" onClick={() => setImagesPerPage(n)} className={seg(imagesPerPage === n)}>{n}</button>
                ))}
              </div>
              {imagesPerPage > 1 && pageSize === "fit" && (
                <p className="text-label-sm font-label-sm text-on-surface-variant">Multi-up pages are laid out on A4.</p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="flex items-center gap-1.5 text-label-sm font-label-sm text-on-surface-variant">
                Fit
                <HelpTip text="Contain keeps the whole image (may add margins). Cover fills the area (may crop). Stretch distorts to fill exactly." />
              </span>
              <div className="grid grid-cols-3 gap-1 rounded-lg bg-surface-container p-1">
                {(["contain", "cover", "stretch"] as FitMode[]).map((f) => (
                  <button key={f} type="button" onClick={() => setFit(f)} className={seg(fit === f)}>{f}</button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="pdf-margin" className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
                <span>Margin</span>
                <span className="text-primary font-semibold tabular-nums">{margin} pt</span>
              </label>
              <input id="pdf-margin" type="range" min={0} max={96} step={2} value={margin} onChange={(e) => setMargin(Number(e.target.value))} className="w-full accent-secondary" />
              <p className="text-label-sm font-label-sm text-on-surface-variant">Space around images (and between them on multi-up pages).</p>
            </div>

            <BackgroundPicker value={bg} onChange={setBg} label="Page background" />
          </SettingsRail>
        }
      />
    </>
  );
}

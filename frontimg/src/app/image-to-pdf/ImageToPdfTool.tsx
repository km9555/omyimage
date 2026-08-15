"use client";

import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { ToolWorkspace } from "@/components/tool/ToolWorkspace";
import { FileTray, TrayAction, type TrayEntry } from "@/components/tool/FileTray";
import { SettingsRail, RailAction, RailNote } from "@/components/tool/SettingsRail";
import { rasterize, downloadBlob, formatBytes } from "@/lib/image/raster";
import { useHandoff } from "@/lib/tool-handoff";

const ACCENT = "#C55F4E";
const ACCEPT = "image/jpeg,image/png,image/webp,image/gif,image/bmp";

type Item = { id: string; file: File; url: string };
type PageSize = "fit" | "a4" | "letter";
type Orientation = "portrait" | "landscape";

const SIZES: Record<Exclude<PageSize, "fit">, [number, number]> = {
  a4: [595.28, 841.89],
  letter: [612, 792],
};
const MARGINS: { label: string; value: number }[] = [
  { label: "None", value: 0 },
  { label: "Small", value: 18 },
  { label: "Medium", value: 36 },
  { label: "Large", value: 54 },
];

let counter = 0;
const uid = () => `f${Date.now()}_${counter++}`;

export function ImageToPdfTool() {
  const [items, setItems] = useState<Item[]>([]);
  const [pageSize, setPageSize] = useState<PageSize>("fit");
  const [orientation, setOrientation] = useState<Orientation>("portrait");
  const [margin, setMargin] = useState(0);
  const [isWorking, setIsWorking] = useState(false);

  useEffect(() => () => { items.forEach((i) => URL.revokeObjectURL(i.url)); }, [items]);

  const addFiles = useCallback((incoming: FileList | File[]) => {
    const imgs = Array.from(incoming).filter((f) => f.type.startsWith("image/"));
    if (imgs.length === 0) { toast.error("Please select image files."); return; }
    setItems((prev) => [...prev, ...imgs.map((file) => ({ id: uid(), file, url: URL.createObjectURL(file) }))]);
  }, []);

  useHandoff(addFiles);

  const removeItem = (id: string) => setItems((prev) => { const it = prev.find((p) => p.id === id); if (it) URL.revokeObjectURL(it.url); return prev.filter((p) => p.id !== id); });
  const reset = () => { items.forEach((i) => URL.revokeObjectURL(i.url)); setItems([]); };
  const move = (i: number, dir: -1 | 1) => setItems((prev) => {
    const j = i + dir;
    if (j < 0 || j >= prev.length) return prev;
    const next = [...prev]; [next[i], next[j]] = [next[j], next[i]]; return next;
  });

  const buildPdf = async () => {
    if (items.length === 0) return;
    setIsWorking(true);
    try {
      const { PDFDocument } = await import("pdf-lib");
      const pdf = await PDFDocument.create();
      for (const it of items) {
        const { blob, width, height } = await rasterize(it.file, { mime: "image/jpeg", quality: 0.9, background: "#ffffff", autoOrient: true });
        const bytes = new Uint8Array(await blob.arrayBuffer());
        const img = await pdf.embedJpg(bytes);
        if (pageSize === "fit") {
          const page = pdf.addPage([width + margin * 2, height + margin * 2]);
          page.drawImage(img, { x: margin, y: margin, width, height });
        } else {
          let [pw, ph] = SIZES[pageSize];
          if (orientation === "landscape") [pw, ph] = [ph, pw];
          const aw = pw - margin * 2, ah = ph - margin * 2;
          const scale = Math.min(aw / width, ah / height);
          const dw = width * scale, dh = height * scale;
          const page = pdf.addPage([pw, ph]);
          page.drawImage(img, { x: (pw - dw) / 2, y: (ph - dh) / 2, width: dw, height: dh });
        }
      }
      const out = await pdf.save();
      downloadBlob(new Blob([out as BlobPart], { type: "application/pdf" }), "omyimage.pdf");
      toast.success(`Created a PDF with ${items.length} page${items.length === 1 ? "" : "s"}.`);
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
    meta: formatBytes(it.file.size),
    action: <TrayAction icon="close" label="Remove" disabled={isWorking} onClick={() => removeItem(it.id)} />,
  }));

  return (
    <>
      <TopLoadingBar active={isWorking} />
      <ToolWorkspace
        main={
          <FileTray
            entries={entries}
            title={`${items.length} page${items.length === 1 ? "" : "s"}`}
            accept={ACCEPT}
            onFiles={addFiles}
            onClear={reset}
            onMove={move}
            busy={isWorking}
          />
        }
        rail={
          <SettingsRail
            title="PDF Settings"
            icon="picture_as_pdf"
            accent={ACCENT}
            footer={
              <>
                <RailNote>Use the arrows to reorder pages. Everything runs in your browser.</RailNote>
                <RailAction onClick={buildPdf} busy={isWorking} busyLabel="Building PDF…" icon="picture_as_pdf">
                  Create PDF
                </RailAction>
              </>
            }
          >
          <div className="flex flex-col gap-1.5">
            <label className="text-label-sm font-label-sm text-on-surface-variant">Page size</label>
            <div className="grid grid-cols-3 gap-1 rounded-lg bg-surface-container p-1">
              {(["fit", "a4", "letter"] as PageSize[]).map((s) => (
                <button key={s} type="button" onClick={() => setPageSize(s)} className={`rounded-md px-2 py-2 text-label-sm font-label-sm font-semibold uppercase transition-colors ${pageSize === s ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant hover:text-primary"}`}>
                  {s === "fit" ? "Fit image" : s}
                </button>
              ))}
            </div>
          </div>
          {pageSize !== "fit" && (
            <div className="flex flex-col gap-1.5">
              <label className="text-label-sm font-label-sm text-on-surface-variant">Orientation</label>
              <div className="grid grid-cols-2 gap-1 rounded-lg bg-surface-container p-1">
                {(["portrait", "landscape"] as Orientation[]).map((o) => (
                  <button key={o} type="button" onClick={() => setOrientation(o)} className={`rounded-md px-3 py-2 text-body-md font-semibold capitalize transition-colors ${orientation === o ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant hover:text-primary"}`}>{o}</button>
                ))}
              </div>
            </div>
          )}
          <div className="flex flex-col gap-1.5">
            <label className="text-label-sm font-label-sm text-on-surface-variant">Margin</label>
            <div className="grid grid-cols-4 gap-1.5">
              {MARGINS.map((m) => (
                <button key={m.label} type="button" onClick={() => setMargin(m.value)} className={`rounded-md px-2 py-1.5 text-label-sm font-label-sm font-semibold border transition-colors ${margin === m.value ? "border-secondary text-primary" : "border-surface-variant text-on-surface-variant hover:text-primary"}`}>{m.label}</button>
              ))}
            </div>
          </div>
          </SettingsRail>
        }
      />
    </>
  );
}

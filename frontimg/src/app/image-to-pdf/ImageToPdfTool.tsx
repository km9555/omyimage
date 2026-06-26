"use client";

import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { rasterize, downloadBlob, formatBytes } from "@/lib/image/raster";

const ACCENT = "#E5533D";
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

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 items-start">
      <span data-tool-active hidden aria-hidden="true" />
      <TopLoadingBar active={isWorking} />

      <div className="flex flex-col gap-3 lg:sticky lg:top-24 lg:self-start">
        <div className="flex items-center justify-between">
          <h2 className="text-headline-md font-bold text-primary">{items.length} page{items.length === 1 ? "" : "s"}</h2>
          <button type="button" onClick={reset} className="inline-flex items-center gap-1.5 text-label-md font-medium text-on-surface-variant hover:text-error"><Icon name="delete_sweep" className="text-[18px]" /> Clear</button>
        </div>
        <ul className="flex flex-col gap-2 max-h-[24vh] overflow-y-auto pr-1">
          {items.map((it, i) => (
            <li key={it.id} className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-3 flex items-center gap-3">
              <span className="grid place-items-center w-7 h-7 rounded-full text-label-sm font-bold shrink-0" style={{ backgroundColor: `${ACCENT}1A`, color: ACCENT }}>{i + 1}</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={it.url} alt="" className="w-12 h-12 rounded-lg object-cover bg-surface-container shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-body-md font-semibold text-primary">{it.file.name}</p>
                <p className="text-label-sm font-label-sm text-on-surface-variant">{formatBytes(it.file.size)}</p>
              </div>
              <div className="flex items-center">
                <button type="button" onClick={() => move(i, -1)} disabled={i === 0 || isWorking} aria-label="Move up" className="flex h-8 w-8 items-center justify-center rounded text-on-surface-variant hover:bg-surface-container disabled:opacity-30 transition-colors"><Icon name="arrow_upward" className="text-[18px]" /></button>
                <button type="button" onClick={() => move(i, 1)} disabled={i === items.length - 1 || isWorking} aria-label="Move down" className="flex h-8 w-8 items-center justify-center rounded text-on-surface-variant hover:bg-surface-container disabled:opacity-30 transition-colors"><Icon name="arrow_downward" className="text-[18px]" /></button>
                <button type="button" onClick={() => removeItem(it.id)} disabled={isWorking} aria-label="Remove" className="flex h-8 w-8 items-center justify-center rounded text-on-surface-variant hover:bg-error-container hover:text-error transition-colors disabled:opacity-40"><Icon name="close" className="text-[18px]" /></button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:sticky lg:top-24 flex flex-col gap-4">
        <div className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-5 flex flex-col gap-4">
          <h2 className="text-headline-md font-bold text-primary">PDF settings</h2>
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
        </div>

        <button type="button" onClick={buildPdf} disabled={isWorking} className="w-full inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-container text-on-secondary font-semibold py-3.5 rounded-lg transition-colors disabled:opacity-50">
          {isWorking ? (<><Icon name="progress_activity" className="animate-spin text-[20px]" /> Building PDF…</>) : (<><Icon name="picture_as_pdf" fill className="text-[20px]" /> Create PDF</>)}
        </button>

        <div className="rounded-xl border border-outline-variant/40 bg-surface-bright p-4 flex items-start gap-2.5">
          <Icon name="lightbulb" className="text-[18px] mt-0.5" style={{ color: ACCENT }} />
          <p className="text-label-sm font-label-sm text-on-surface-variant"><strong className="text-on-surface">Tip:</strong> use the arrows to reorder pages. Everything runs in your browser.</p>
        </div>
      </div>
    </section>
  );
}

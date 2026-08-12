"use client";

import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { downloadBlob, formatBytes, baseName } from "@/lib/image/raster";
import { useHandoff } from "@/lib/tool-handoff";

const ACCENT = "#6E71C4";
const ACCEPT = "image/jpeg,image/png,image/webp,image/gif,image/bmp,image/svg+xml,image/avif";

type Tab = "datauri" | "raw" | "css" | "html";
const TABS: { label: string; value: Tab }[] = [
  { label: "Data URI", value: "datauri" },
  { label: "Raw Base64", value: "raw" },
  { label: "CSS", value: "css" },
  { label: "HTML", value: "html" },
];

export function ImageToBase64Tool() {
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState<string | null>(null);
  const [dataUri, setDataUri] = useState<string>("");
  const [tab, setTab] = useState<Tab>("datauri");
  const [isWorking, setIsWorking] = useState(false);

  useEffect(() => () => { if (url) URL.revokeObjectURL(url); }, [url]);

  const loadFile = useCallback((incoming: FileList | File[]) => {
    const f = Array.from(incoming).find((x) => x.type.startsWith("image/"));
    if (!f) { toast.error("Please select an image file."); return; }
    setIsWorking(true);
    const reader = new FileReader();
    reader.onload = () => {
      setDataUri(typeof reader.result === "string" ? reader.result : "");
      setUrl((prev) => { if (prev) URL.revokeObjectURL(prev); return URL.createObjectURL(f); });
      setFile(f);
      setIsWorking(false);
    };
    reader.onerror = () => { toast.error("Couldn't read that image."); setIsWorking(false); };
    reader.readAsDataURL(f);
  }, []);

  useHandoff(loadFile);

  const reset = () => { if (url) URL.revokeObjectURL(url); setFile(null); setUrl(null); setDataUri(""); };

  const raw = dataUri.includes(",") ? dataUri.slice(dataUri.indexOf(",") + 1) : dataUri;
  const output =
    tab === "datauri" ? dataUri
      : tab === "raw" ? raw
        : tab === "css" ? `background-image: url("${dataUri}");`
          : `<img src="${dataUri}" alt="${file?.name ?? ""}" />`;

  const copy = () => { navigator.clipboard?.writeText(output).then(() => toast.success("Copied to clipboard")).catch(() => toast.error("Copy failed.")); };
  const downloadTxt = () => downloadBlob(new Blob([output], { type: "text/plain" }), `${baseName(file?.name ?? "image")}_base64.txt`);

  if (!file || !url) {
    return (
      <section>
        <TopLoadingBar active={isWorking} />
        <Dropzone onFiles={loadFile} accept={ACCEPT} accent={ACCENT} icon="data_object" multiple={false} buttonLabel="Select an image" hint="or drop a JPG, PNG, WEBP, GIF or SVG here" />
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 items-start">
      <span data-tool-active hidden aria-hidden="true" />
      <TopLoadingBar active={isWorking} />

      <div className="flex flex-col gap-3 lg:sticky lg:top-24 lg:self-start">
        <div className="bg-surface-container rounded-xl border border-surface-variant p-3 flex items-center justify-center overflow-hidden" style={{ minHeight: 220 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={url} alt={file.name} className="max-w-full max-h-[40vh] rounded" />
        </div>
        <p className="text-center text-label-sm font-label-sm text-on-surface-variant truncate">
          <span className="font-semibold text-on-surface">{file.name}</span> · {formatBytes(file.size)} → {formatBytes(dataUri.length)} encoded
        </p>
        <button type="button" onClick={reset} className="self-center inline-flex items-center gap-1.5 text-label-md font-medium text-on-surface-variant hover:text-error"><Icon name="close" className="text-[18px]" /> Change image</button>
      </div>

      <div className="lg:sticky lg:top-24 flex flex-col gap-4">
        <div className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-5 flex flex-col gap-4">
          <h2 className="text-headline-md font-bold text-primary">Output</h2>
          <div className="grid grid-cols-4 gap-1 rounded-lg bg-surface-container p-1">
            {TABS.map((t) => (
              <button key={t.value} type="button" onClick={() => setTab(t.value)} className={`rounded-md px-1 py-2 text-label-sm font-label-sm font-semibold transition-colors ${tab === t.value ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant hover:text-primary"}`}>{t.label}</button>
            ))}
          </div>
          <textarea readOnly value={output} rows={8} className="w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant outline-none text-label-sm font-label-sm text-primary resize-y break-all" style={{ wordBreak: "break-all" }} onFocus={(e) => e.currentTarget.select()} />
          <div className="flex gap-2">
            <button type="button" onClick={copy} className="flex-1 inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-container text-on-secondary font-semibold py-2.5 rounded-lg transition-colors"><Icon name="content_copy" className="text-[18px]" /> Copy</button>
            <button type="button" onClick={downloadTxt} className="inline-flex items-center justify-center gap-2 border border-secondary text-secondary font-semibold px-4 py-2.5 rounded-lg hover:bg-secondary/10 transition-colors"><Icon name="download" className="text-[18px]" /> .txt</button>
          </div>
        </div>

        <div className="rounded-xl border border-outline-variant/40 bg-surface-bright p-4 flex items-start gap-2.5">
          <Icon name="lightbulb" className="text-[18px] mt-0.5" style={{ color: ACCENT }} />
          <p className="text-label-sm font-label-sm text-on-surface-variant"><strong className="text-on-surface">Tip:</strong> Base64 strings are about 33% larger than the file — best for small icons inlined in CSS or HTML. Everything runs in your browser.</p>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { ToolWorkspace, filesHeader } from "@/components/tool/ToolWorkspace";
import { SettingsRail } from "@/components/tool/SettingsRail";
import { Dropzone } from "@/components/image/Dropzone";
import { downloadBlob, baseName } from "@/lib/image/raster";
import { useHandoff } from "@/lib/tool-handoff";
import { useFormatBytes, useT } from "@/i18n/I18nScope";

const ACCENT = "#6E71C4";
const ACCEPT = "image/jpeg,image/png,image/webp,image/gif,image/bmp,image/svg+xml,image/avif";

type Tab = "datauri" | "raw" | "css" | "html";
/* Module scope: the labels are format names ("Data URI", "CSS", "HTML") and
   pass through t() unchanged in most languages — only "Raw Base64" carries a
   word (conversion.md §4.2). */
const TABS: { label: string; value: Tab }[] = [
  { label: "Data URI", value: "datauri" },
  { label: "Raw Base64", value: "raw" },
  { label: "CSS", value: "css" },
  { label: "HTML", value: "html" },
];

export function ImageToBase64Tool() {
  const t = useT();
  const formatBytes = useFormatBytes();
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState<string | null>(null);
  const [dataUri, setDataUri] = useState<string>("");
  const [tab, setTab] = useState<Tab>("datauri");
  const [isWorking, setIsWorking] = useState(false);

  useEffect(() => () => { if (url) URL.revokeObjectURL(url); }, [url]);

  const loadFile = useCallback((incoming: FileList | File[]) => {
    const f = Array.from(incoming).find((x) => x.type.startsWith("image/"));
    if (!f) { toast.error(t("Please select an image file.")); return; }
    setIsWorking(true);
    const reader = new FileReader();
    reader.onload = () => {
      setDataUri(typeof reader.result === "string" ? reader.result : "");
      setUrl((prev) => { if (prev) URL.revokeObjectURL(prev); return URL.createObjectURL(f); });
      setFile(f);
      setIsWorking(false);
    };
    reader.onerror = () => { toast.error(t("Couldn't read that image.")); setIsWorking(false); };
    reader.readAsDataURL(f);
  }, [t]);

  useHandoff(loadFile);

  const reset = () => { if (url) URL.revokeObjectURL(url); setFile(null); setUrl(null); setDataUri(""); };

  const raw = dataUri.includes(",") ? dataUri.slice(dataUri.indexOf(",") + 1) : dataUri;
  const output =
    tab === "datauri" ? dataUri
      : tab === "raw" ? raw
        : tab === "css" ? `background-image: url("${dataUri}");`
          : `<img src="${dataUri}" alt="${file?.name ?? ""}" />`;

  const copy = () => { navigator.clipboard?.writeText(output).then(() => toast.success(t("Copied to clipboard"))).catch(() => toast.error(t("Copy failed."))); };
  const downloadTxt = () => downloadBlob(new Blob([output], { type: "text/plain" }), `${baseName(file?.name ?? "image")}_base64.txt`);

  if (!file || !url) {
    return (
      <section>
        <TopLoadingBar active={isWorking} />
        <Dropzone onFiles={loadFile} accept={ACCEPT} accent={ACCENT} icon="data_object" multiple={false} buttonLabel={t("Select an image")} hint={t("or drop a JPG, PNG, WEBP, GIF or SVG here")} />
      </section>
    );
  }

  return (
    <>
      <TopLoadingBar active={isWorking} />
      <ToolWorkspace
        /* Below `md` this becomes the full-screen app shell. One image, so the
           header names it directly and the rail moves into a sheet. */
        mobile={{
          ...filesHeader(file ? [file] : []),
          onBack: reset,
          backLabel: t("Change image"),
          settingsTitle: t("Encoding options"),
          cta: {
            icon: "content_copy",
            label: t("Copy"),
            busy: isWorking,
            onClick: copy,
          },
        }}
        main={
          <>
        <div className="bg-surface-container rounded-xl border border-surface-variant p-3 flex items-center justify-center overflow-hidden" style={{ minHeight: 220 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={url} alt={file.name} className="max-w-full max-h-[40vh] rounded" />
        </div>
        <p className="text-center text-label-sm font-label-sm text-on-surface-variant truncate">
          <span className="font-semibold text-on-surface">{file.name}</span> · {formatBytes(file.size)} → {t("{size} encoded", { size: formatBytes(dataUri.length) })}
        </p>
        <button type="button" onClick={reset} className="self-center inline-flex items-center gap-1.5 text-label-md font-medium text-on-surface-variant hover:text-error"><Icon name="close" className="text-[18px]" /> {t("Change image")}</button>
          </>
        }
        rail={
          <SettingsRail
            title={t("Base64 Output")}
            icon="code"
            accent={ACCENT}
          >
        <div className="flex flex-col gap-4">
          <h2 className="text-headline-md font-bold text-primary">{t("Output")}</h2>
          <div className="grid grid-cols-4 gap-1 rounded-lg bg-surface-container p-1">
            {TABS.map((tb) => (
              <button key={tb.value} type="button" onClick={() => setTab(tb.value)} className={`rounded-md px-1 py-2 text-label-sm font-label-sm font-semibold transition-colors ${tab === tb.value ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant hover:text-primary"}`}>{t(tb.label)}</button>
            ))}
          </div>
          <textarea readOnly value={output} rows={8} className="w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant outline-none text-label-sm font-label-sm text-primary resize-y break-all" style={{ wordBreak: "break-all" }} onFocus={(e) => e.currentTarget.select()} />
          <div className="flex gap-2">
            <button type="button" onClick={copy} className="flex-1 inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-container text-on-secondary font-semibold py-2.5 rounded-lg transition-colors"><Icon name="content_copy" className="text-[18px]" /> {t("Copy")}</button>
            <button type="button" onClick={downloadTxt} className="inline-flex items-center justify-center gap-2 border border-secondary text-secondary font-semibold px-4 py-2.5 rounded-lg hover:bg-secondary/10 transition-colors">{/* i18n-raw: a file extension */}
            <Icon name="download" className="text-[18px]" /> .txt</button>
          </div>
        </div>

        <div className="rounded-xl border border-outline-variant/40 bg-surface-bright p-4 flex items-start gap-2.5">
          <Icon name="lightbulb" className="text-[18px] mt-0.5" style={{ color: ACCENT }} />
          <p className="text-label-sm font-label-sm text-on-surface-variant"><strong className="text-on-surface">{t("Tip:")}</strong> {t("Base64 strings are about 33% larger than the file — best for small icons inlined in CSS or HTML. Everything runs in your browser.")}</p>
        </div>
          </SettingsRail>
        }
      />
    </>
  );
}

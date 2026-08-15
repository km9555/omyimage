"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { Dropzone } from "@/components/image/Dropzone";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { ToolWorkspace } from "@/components/tool/ToolWorkspace";
import { SettingsRail, RailAction } from "@/components/tool/SettingsRail";
import { downloadBlob, baseName, formatBytes } from "@/lib/image/raster";
import { useHandoff } from "@/lib/tool-handoff";
import type { Worker } from "tesseract.js";

const ACCENT = "#4B8FC7";
const ACCEPT = "image/jpeg,image/png,image/webp,image/bmp,.jfif";

/**
 * Optical character recognition, entirely in the browser.
 *
 * Engine choice is a licensing decision as much as a technical one:
 * tesseract.js and tesseract.js-core are Apache-2.0, and the WASM bundles
 * Leptonica (BSD-2), zlib, libtiff, libjpeg and libpng — all permissive. Both
 * dists were grepped for GPL/LGPL strings and came back clean, per
 * LICENSE-AUDIT.md rule 1. That is what makes this shippable to a browser at
 * all, unlike the HEIC decoders (finding F1), which are LGPL libheif
 * underneath whatever the npm manifest claims.
 *
 * The engine is imported dynamically so its ~3 MB WASM core never lands in a
 * shared chunk — it must only ever download on this route, and only once the
 * user actually asks for text.
 */

/** Tesseract codes we offer. The traineddata for each is fetched on demand. */
const LANGUAGES: { code: string; label: string }[] = [
  { code: "eng", label: "English" },
  { code: "spa", label: "Spanish" },
  { code: "fra", label: "French" },
  { code: "deu", label: "German" },
  { code: "ita", label: "Italian" },
  { code: "por", label: "Portuguese" },
  { code: "nld", label: "Dutch" },
  { code: "rus", label: "Russian" },
  { code: "ara", label: "Arabic" },
  { code: "hin", label: "Hindi" },
  { code: "chi_sim", label: "Chinese (Simplified)" },
  { code: "jpn", label: "Japanese" },
  { code: "kor", label: "Korean" },
];

/** Map tesseract's status strings onto something a human can read. */
function humanStatus(status: string): string {
  if (status.includes("loading language") || status.includes("loading tesseract")) {
    return "Downloading the recognition model (first run only)…";
  }
  if (status.includes("initializ")) return "Starting the engine…";
  if (status.includes("recognizing")) return "Reading the text…";
  return "Working…";
}

export function ImageToTextTool() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [lang, setLang] = useState("eng");
  const [text, setText] = useState<string | null>(null);
  const [isWorking, setIsWorking] = useState(false);
  const [status, setStatus] = useState("");
  const [progress, setProgress] = useState(0);
  const workerRef = useRef<Worker | null>(null);

  const loadFile = useCallback((incoming: FileList | File[]) => {
    const f = Array.from(incoming).find((x) =>
      x.type.startsWith("image/") || /\.(jpe?g|jfif|png|webp|bmp)$/i.test(x.name),
    );
    if (!f) {
      toast.error("Please select a JPG, PNG, WEBP or BMP image.");
      return;
    }
    setPreview((old) => {
      if (old) URL.revokeObjectURL(old);
      return URL.createObjectURL(f);
    });
    setFile(f);
    setText(null);
  }, []);

  useHandoff(loadFile);

  // Tear the worker down on unmount — it owns a web worker and several MB of
  // WASM heap, and navigating away without terminating leaks both.
  useEffect(() => {
    return () => {
      workerRef.current?.terminate();
      workerRef.current = null;
    };
  }, []);

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const run = async () => {
    if (!file) return;
    setIsWorking(true);
    setText(null);
    setProgress(0);
    setStatus("Loading the recognition engine…");

    try {
      const { createWorker } = await import("tesseract.js");

      // A worker is bound to its language at creation, so a language change
      // means a fresh one. Terminate the old one rather than stacking them.
      await workerRef.current?.terminate();
      workerRef.current = null;

      const worker = await createWorker(lang, 1, {
        logger: (m: { status: string; progress: number }) => {
          setStatus(humanStatus(m.status));
          setProgress(Math.round((m.progress ?? 0) * 100));
        },
      });
      workerRef.current = worker;

      const { data } = await worker.recognize(file);
      const out = (data.text ?? "").trim();
      setText(out);
      if (out.length === 0) {
        toast("No text found in this image", {
          description: "Try a sharper or higher-contrast scan.",
        });
      } else {
        toast.success(`Extracted ${out.split(/\s+/).filter(Boolean).length} words`);
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not read this image.");
    } finally {
      setIsWorking(false);
      setProgress(0);
      setStatus("");
    }
  };

  const copy = async () => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Text copied to clipboard");
    } catch {
      toast.error("Couldn't access the clipboard.");
    }
  };

  const saveTxt = () => {
    if (!text || !file) return;
    downloadBlob(new Blob([text], { type: "text/plain;charset=utf-8" }), `${baseName(file.name)}.txt`);
  };

  const reset = () => {
    setFile(null);
    setText(null);
    setPreview((old) => {
      if (old) URL.revokeObjectURL(old);
      return null;
    });
  };

  if (!file) {
    return (
      <section>
        <Dropzone
          onFiles={loadFile}
          accept={ACCEPT}
          accent={ACCENT}
          icon="document_scanner"
          multiple={false}
          buttonLabel="Select an image"
          hint="or drop a JPG, PNG, WEBP or BMP here"
        />
      </section>
    );
  }

  const words = text ? text.split(/\s+/).filter(Boolean).length : 0;

  return (
    <>
      <TopLoadingBar active={isWorking} />
      <ToolWorkspace
        main={
          <>
        <div className="rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-4 ambient-shadow">
          <div className="flex items-center gap-3 mb-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={preview ?? ""} alt="" className="h-12 w-12 rounded-md object-cover bg-surface-container" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-body-md font-semibold text-primary">{file.name}</p>
              <p className="text-label-sm font-label-sm text-on-surface-variant">
                {formatBytes(file.size)}
              </p>
            </div>
            <button
              type="button"
              onClick={reset}
              aria-label="Remove image"
              className="grid place-items-center h-9 w-9 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors"
            >
              <Icon name="close" className="text-[20px]" />
            </button>
          </div>

          {text !== null ? (
            <>
              <label htmlFor="ocr-output" className="sr-only">
                Extracted text
              </label>
              <textarea
                id="ocr-output"
                value={text}
                onChange={(e) => setText(e.target.value)}
                spellCheck={false}
                className="w-full h-72 resize-y rounded-lg border border-outline-variant bg-surface-container-lowest p-3 text-body-sm font-mono text-primary outline-none focus:border-secondary/70"
              />
              <p className="mt-2 text-label-sm font-label-sm text-on-surface-variant">
                {words} words · editable before you copy or download
              </p>
            </>
          ) : (
            <div className="rounded-lg border border-dashed border-outline-variant p-8 text-center">
              {isWorking ? (
                <>
                  <p className="text-body-md text-primary">{status}</p>
                  <div className="mt-3 h-2 w-full rounded-full bg-surface-container overflow-hidden">
                    <div
                      className="h-full rounded-full bg-secondary transition-all duration-200"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="mt-2 text-label-sm font-label-sm text-on-surface-variant">
                    {progress}%
                  </p>
                </>
              ) : (
                <p className="text-body-md text-on-surface-variant">
                  Choose a language, then press Extract text.
                </p>
              )}
            </div>
          )}
        </div>
          </>
        }
        rail={
          <SettingsRail
            title="OCR Settings"
            icon="document_scanner"
            accent={ACCENT}
            footer={
              <RailAction onClick={run} busy={isWorking} busyLabel="Reading…" icon="document_scanner">
                {text !== null ? "Read again" : "Extract text"}
              </RailAction>
            }
          >
        <div>
          <label
            htmlFor="ocr-lang"
            className="block text-label-sm font-label-sm font-bold uppercase tracking-wide text-on-surface-variant mb-2"
          >
            Language of the text
          </label>
          <select
            id="ocr-lang"
            value={lang}
            onChange={(e) => { setLang(e.target.value); setText(null); }}
            disabled={isWorking}
            className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-3 h-11 text-body-md text-primary outline-none focus:border-secondary/70 disabled:opacity-50"
          >
            {LANGUAGES.map((l) => (
              <option key={l.code} value={l.code}>{l.label}</option>
            ))}
          </select>
          <p className="mt-2 text-label-sm font-label-sm text-on-surface-variant">
            Picking the right language matters more than anything else for accuracy.
          </p>
        </div>

        {text !== null && (
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={copy}
              className="w-full inline-flex items-center justify-center gap-2 border border-secondary text-secondary font-semibold py-2.5 rounded-lg hover:bg-secondary/10 transition-colors"
            >
              <Icon name="content_copy" className="text-[18px]" /> Copy text
            </button>
            <button
              type="button"
              onClick={saveTxt}
              className="w-full inline-flex items-center justify-center gap-2 border border-outline-variant text-on-surface-variant font-semibold py-2.5 rounded-lg hover:bg-surface-container transition-colors"
            >
              <Icon name="download" className="text-[18px]" /> Download .txt
            </button>
          </div>
        )}

        <p className="text-label-sm font-label-sm text-on-surface-variant/80 flex items-start gap-1.5">
          <Icon name="lock" className="text-[14px] mt-0.5 shrink-0" />
          Your image is read on your own device and never uploaded. The recognition
          model itself is downloaded once and cached by your browser.
        </p>
          </SettingsRail>
        }
      />
    </>
  );
}

"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { ToolWorkspace, filesHeader } from "@/components/tool/ToolWorkspace";
import { SettingsRail, RailAction, RailNote } from "@/components/tool/SettingsRail";
import { downloadBlob } from "@/lib/image/raster";
import { openGif, totalDuration, type FrameSource } from "@/lib/gif/frames";
import { concatSources, type MergeFit } from "@/lib/gif/merge";
import { reencodeAsGif } from "@/lib/gif/reencode";
import { useHandoff } from "@/lib/tool-handoff";
import { useFormatBytes, useLocale, useT } from "@/i18n/I18nScope";
import { translateError } from "@/i18n/errors";

/**
 * Plays several GIFs one after another as one GIF. Every frame keeps its
 * timing; GIFs of other sizes are fitted into the output size.
 */
const ACCENT = "#C56A9A";

type SizeFrom = "first" | "largest" | "smallest";
interface Item { id: string; file: File; url: string; src: FrameSource }

let seq = 0;
const uid = () => `g${++seq}`;

export function GifMergerTool() {
  const t = useT();
  const locale = useLocale();
  const formatBytes = useFormatBytes();
  const addRef = useRef<HTMLInputElement>(null);

  const [items, setItems] = useState<Item[]>([]);
  const [sizeFrom, setSizeFrom] = useState<SizeFrom>("first");
  const [fit, setFit] = useState<MergeFit>("contain");
  const [transparentBg, setTransparentBg] = useState(true);
  const [bg, setBg] = useState("#ffffff");
  const [isWorking, setIsWorking] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<{ blob: Blob; url: string; w: number; h: number; frames: number; ms: number } | null>(null);

  // Revoke thumbnails on unmount only (the ConvertTool ref-mirror pattern).
  const itemsRef = useRef<Item[]>([]);
  useEffect(() => { itemsRef.current = items; }, [items]);
  useEffect(() => () => { itemsRef.current.forEach((i) => URL.revokeObjectURL(i.url)); }, []);
  useEffect(() => () => { if (result) URL.revokeObjectURL(result.url); }, [result]);

  const onFiles = useCallback(async (incoming: FileList | File[]) => {
    const gifs = Array.from(incoming).filter((x) => /gif$/i.test(x.type) || /\.gif$/i.test(x.name));
    if (!gifs.length) { toast.error(t("Please select GIF files.")); return; }
    const added: Item[] = [];
    for (const file of gifs) {
      try {
        added.push({ id: uid(), file, url: URL.createObjectURL(file), src: await openGif(file) });
      } catch (err) {
        toast.error(`${file.name}: ${translateError(err, t, "Could not read this image.")}`);
      }
    }
    if (added.length) { setItems((prev) => [...prev, ...added]); setResult(null); }
  }, [t]);

  useHandoff(onFiles);

  const reset = () => { items.forEach((i) => URL.revokeObjectURL(i.url)); setItems([]); setResult(null); };
  const remove = (id: string) => setItems((prev) => {
    const it = prev.find((p) => p.id === id);
    if (it) URL.revokeObjectURL(it.url);
    return prev.filter((p) => p.id !== id);
  });
  const move = (k: number, d: -1 | 1) => setItems((prev) => {
    const next = [...prev];
    const j = k + d;
    if (j < 0 || j >= next.length) return prev;
    [next[k], next[j]] = [next[j], next[k]];
    return next;
  });

  const out = useMemo(() => {
    if (!items.length) return null;
    const area = (i: Item) => i.src.width * i.src.height;
    const pick = sizeFrom === "first" ? items[0]
      : items.reduce((a, b) => (sizeFrom === "largest" ? (area(b) > area(a) ? b : a) : (area(b) < area(a) ? b : a)));
    return { w: pick.src.width, h: pick.src.height };
  }, [items, sizeFrom]);

  const settingsKey = JSON.stringify([items.map((i) => i.id), sizeFrom, fit, transparentBg, bg]);
  useEffect(() => { setResult(null); }, [settingsKey]);

  const run = async () => {
    if (items.length < 2 || !out) return;
    setIsWorking(true);
    setProgress(0);
    setResult(null);
    try {
      const merged = concatSources(items.map((i) => i.src), { width: out.w, height: out.h, fit, background: transparentBg ? null : bg });
      const r = await reencodeAsGif(merged, { width: out.w, height: out.h, onProgress: setProgress });
      const blob = new Blob([r.bytes as BlobPart], { type: "image/gif" });
      setResult({ blob, url: URL.createObjectURL(blob), w: out.w, h: out.h, frames: r.frames, ms: totalDuration(merged) });
    } catch (err) {
      toast.error(translateError(err, t, "Processing failed."));
    } finally {
      setIsWorking(false);
    }
  };

  const download = () => { if (result) downloadBlob(result.blob, "merged.gif"); };

  if (!items.length) {
    return (
      <section>
        <Dropzone onFiles={onFiles} accept="image/gif,.gif" accent={ACCENT} icon="gif_box" multiple camera={false} buttonLabel={t("Select GIFs")} hint={t("or drop two or more GIFs here")} />
      </section>
    );
  }

  const nf = new Intl.NumberFormat(locale, { maximumFractionDigits: 2 });
  const secs = (ms: number) => t("{s} s", { s: nf.format(ms / 1000) });
  const ready = items.length >= 2;
  const working = t("Working… {p}%", { p: Math.round(progress * 100) });
  const seg = (on: boolean) => `rounded-md px-2 py-1.5 text-label-md font-semibold ${on ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant"}`;
  const label = "text-label-sm font-label-sm text-on-surface-variant";
  const hint = "text-label-sm font-label-sm text-on-surface-variant/70";
  const checker = { backgroundColor: "#fff", backgroundImage: "linear-gradient(45deg,#cbd5e1 25%,transparent 25%),linear-gradient(-45deg,#cbd5e1 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#cbd5e1 75%),linear-gradient(-45deg,transparent 75%,#cbd5e1 75%)", backgroundSize: "16px 16px", backgroundPosition: "0 0,0 8px,8px -8px,-8px 0" };
  const iconBtn = "inline-flex h-8 w-8 items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container-high disabled:opacity-30";

  const list = (
    <ol className="flex flex-col gap-2">
      {items.map((it, k) => (
        <li key={it.id} className="flex items-center gap-3 rounded-xl border border-surface-variant bg-surface-container-lowest p-2">
          <span className="w-5 shrink-0 text-center text-label-md font-semibold text-on-surface-variant tabular-nums">{k + 1}</span>
          {/* eslint-disable-next-line @next/next/no-img-element -- object URL of the user's own GIF */}
          <img src={it.url} alt="" style={checker} className="h-14 w-20 shrink-0 rounded object-contain" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-body-md font-medium text-on-surface">{it.file.name}</p>
            <p className="text-label-sm font-label-sm text-on-surface-variant tabular-nums">
              {/* i18n-raw: dimensions joined to already-translated parts */}
              {`${it.src.width} × ${it.src.height} px · ${t("{n} frames", { n: it.src.delays.length })} · ${secs(totalDuration(it.src))}`}
            </p>
          </div>
          <button type="button" onClick={() => move(k, -1)} disabled={k === 0 || isWorking} aria-label={t("Move up")} className={iconBtn}><Icon name="arrow_upward" className="text-[18px]" /></button>
          <button type="button" onClick={() => move(k, 1)} disabled={k === items.length - 1 || isWorking} aria-label={t("Move down")} className={iconBtn}><Icon name="arrow_downward" className="text-[18px]" /></button>
          <button type="button" onClick={() => remove(it.id)} disabled={isWorking} aria-label={t("Remove")} className={`${iconBtn} hover:text-error`}><Icon name="close" className="text-[18px]" /></button>
        </li>
      ))}
    </ol>
  );

  const main = (
    <div className="flex flex-col gap-4">
      {list}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <button type="button" onClick={() => addRef.current?.click()} disabled={isWorking} className="inline-flex items-center gap-1.5 rounded-xl border border-secondary px-3 py-2 text-label-md font-semibold text-secondary hover:bg-secondary/10">
          <Icon name="add" className="text-[18px]" /> {t("Add GIFs")}
        </button>
        <input ref={addRef} type="file" accept="image/gif,.gif" multiple className="hidden" onChange={(e) => { if (e.target.files) onFiles(e.target.files); e.target.value = ""; }} />
        <button type="button" onClick={reset} className="inline-flex items-center gap-1.5 text-label-md font-medium text-on-surface-variant hover:text-error">
          <Icon name="close" className="text-[18px]" /> {t("Clear all")}
        </button>
      </div>
      {!ready && <p className={hint}>{t("Add at least two GIFs to merge them.")}</p>}
      {(result || isWorking) && (
        <figure className="flex flex-col gap-2">
          <figcaption className="text-label-md font-semibold text-secondary">{t("Result")}</figcaption>
          <div className="flex min-h-[200px] items-center justify-center rounded-xl border border-surface-variant bg-surface-container p-3">
            {result ? (
              /* eslint-disable-next-line @next/next/no-img-element -- object URL of the merged GIF */
              <img src={result.url} alt={t("Result")} style={checker} className="max-h-[42vh] max-w-full rounded shadow-sm" />
            ) : (
              <span className="inline-flex items-center gap-2 text-body-md text-on-surface-variant tabular-nums">
                <Icon name="progress_activity" className="animate-spin text-[24px] text-secondary" /> {working}
              </span>
            )}
          </div>
          {result && (
            <p className="text-label-sm font-label-sm text-on-surface-variant tabular-nums">
              {/* i18n-raw: dimensions joined to already-translated parts */}
              {`${result.w} × ${result.h} px · ${t("{n} frames", { n: result.frames })} · ${secs(result.ms)} · ${formatBytes(result.blob.size)}`}
            </p>
          )}
        </figure>
      )}
    </div>
  );

  const rail = (
    <SettingsRail
      title={t("Merge settings")}
      icon="layers"
      accent={ACCENT}
      footer={
        <>
          <RailNote>{out ? t("Output: {w} × {h} px", { w: out.w, h: out.h }) : null}</RailNote>
          <RailAction onClick={run} busy={isWorking} busyLabel={working} icon="layers" disabled={!ready}>
            {t("Merge GIFs")}
          </RailAction>
          {result && (
            <button type="button" onClick={download} className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-secondary px-4 py-2.5 text-label-lg font-semibold text-secondary hover:bg-secondary/10">
              <Icon name="download" className="text-[18px]" /> {t("Download GIF")}
            </button>
          )}
        </>
      }
    >
      <div className="flex flex-col gap-1.5">
        <span className={label}>{t("Size")}</span>
        <div role="radiogroup" aria-label={t("Size")} className="grid grid-cols-3 gap-1 rounded-lg bg-surface-container p-1">
          <button type="button" role="radio" aria-checked={sizeFrom === "first"} onClick={() => setSizeFrom("first")} className={seg(sizeFrom === "first")}>{t("First GIF")}</button>
          <button type="button" role="radio" aria-checked={sizeFrom === "largest"} onClick={() => setSizeFrom("largest")} className={seg(sizeFrom === "largest")}>{t("Largest")}</button>
          <button type="button" role="radio" aria-checked={sizeFrom === "smallest"} onClick={() => setSizeFrom("smallest")} className={seg(sizeFrom === "smallest")}>{t("Smallest")}</button>
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <span className={label}>{t("GIFs of another size")}</span>
        <div role="radiogroup" aria-label={t("GIFs of another size")} className="grid grid-cols-2 gap-1 rounded-lg bg-surface-container p-1">
          <button type="button" role="radio" aria-checked={fit === "contain"} onClick={() => setFit("contain")} className={seg(fit === "contain")}>{t("Fit inside")}</button>
          <button type="button" role="radio" aria-checked={fit === "cover"} onClick={() => setFit("cover")} className={seg(fit === "cover")}>{t("Fill and crop")}</button>
        </div>
        <p className={hint}>
          {fit === "contain" ? t("The whole frame stays visible, with borders where the shapes differ.") : t("The frame fills the output; edges that stick out are cropped.")}
        </p>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="flex items-center gap-2.5 cursor-pointer">
          <input type="checkbox" checked={transparentBg} onChange={(e) => setTransparentBg(e.target.checked)} className="w-4 h-4 accent-secondary" />
          <span className="text-body-md text-on-surface">{t("Transparent background")}</span>
        </label>
        {!transparentBg && (
          <label className="flex items-center gap-2.5">
            <input type="color" value={bg} onChange={(e) => setBg(e.target.value)} aria-label={t("Background colour")} className="h-9 w-12 cursor-pointer rounded border border-surface-variant bg-transparent" />
            <span className="text-label-sm font-label-sm text-on-surface-variant tabular-nums">{bg.toUpperCase()}</span>
          </label>
        )}
      </div>
      <p className={hint}>{t("The GIFs play in the order of the list, each frame with its own timing.")}</p>
      <p className="text-label-sm font-label-sm text-on-surface-variant/80">{t("Your files are processed in your browser and never uploaded.")}</p>
    </SettingsRail>
  );

  return (
    <>
      <TopLoadingBar active={isWorking} />
      <ToolWorkspace
        mobile={{
          ...filesHeader(items.map((i) => i.file)),
          onBack: reset,
          backLabel: t("Clear all"),
          settingsTitle: t("Merge settings"),
          cta: result
            ? { icon: "download", label: t("Download GIF"), busyLabel: t("Saving…"), busy: false, onClick: download }
            : { icon: "layers", label: t("Merge GIFs"), busyLabel: working, busy: isWorking, onClick: run, disabled: !ready },
        }}
        main={main}
        rail={rail}
      />
    </>
  );
}

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { HelpTip } from "@/components/HelpTip";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { ToolWorkspace } from "@/components/tool/ToolWorkspace";
import { SettingsRail, RailAction, RailSecondaryAction, RailNote } from "@/components/tool/SettingsRail";
import { postJsonForImage } from "@/lib/process-router";
import { downloadBlob, zipAndDownload, formatBytes, baseName } from "@/lib/image/raster";

const ACCENT = "#C96A48";

type Mode = "url" | "html";
type Format = "png" | "jpeg" | "webp";
type Orientation = "portrait" | "landscape";

/** One HTML document in the batch. Each renders to its own image. */
type Page = { id: string; name: string; html: string };

/** One rendered output, keyed back to the page that produced it. */
type Result = { pageId: string; url: string; blob: Blob; name: string };

const VIEWPORTS: { id: string; label: string; w: number; h: number }[] = [
  { id: "desktop", label: "Desktop — 1920 × 1080", w: 1080, h: 1920 },
  { id: "laptop", label: "Laptop — 1440 × 900", w: 900, h: 1440 },
  { id: "standard", label: "Standard — 1280 × 720", w: 720, h: 1280 },
  { id: "tablet", label: "Tablet — 768 × 1024", w: 768, h: 1024 },
  { id: "mobile", label: "Mobile — 390 × 844", w: 390, h: 844 },
  { id: "custom", label: "Custom size…", w: 0, h: 0 },
];

const FORMATS: { value: Format; label: string }[] = [
  { value: "png", label: "PNG — lossless, supports transparency" },
  { value: "jpeg", label: "JPG — smallest for photos" },
  { value: "webp", label: "WEBP — small + transparency" },
];

const STARTER_HTML = '<h1 style="font-family:sans-serif;color:#1f1d18">Hello from oMyImage 👋</h1>';

const toInt = (s: string) => {
  const n = parseInt(s || "0", 10);
  return Number.isFinite(n) ? n : 0;
};

let counter = 0;
const uid = () => `p${Date.now()}_${counter++}`;

/** Filesystem-safe stem for a downloaded file. */
const safeName = (s: string) => s.replace(/[^a-z0-9._-]+/gi, "_").replace(/^_+|_+$/g, "") || "page";

export function HtmlToImageTool() {
  const [mode, setMode] = useState<Mode>("url");
  const [url, setUrl] = useState("");

  // HTML mode is a batch: several documents, each rendered separately.
  const [pages, setPages] = useState<Page[]>([{ id: uid(), name: "Page 1", html: STARTER_HTML }]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const uploadRef = useRef<HTMLInputElement>(null);

  // Capture
  const [preset, setPreset] = useState("standard");
  const [orientation, setOrientation] = useState<Orientation>("landscape");
  const [customW, setCustomW] = useState(1280);
  const [customH, setCustomH] = useState(720);
  const [fullPage, setFullPage] = useState(false);
  const [selector, setSelector] = useState("");
  const [scale, setScale] = useState(1);

  // Output
  const [format, setFormat] = useState<Format>("png");
  const [quality, setQuality] = useState(88);
  const [transparent, setTransparent] = useState(false);
  const [padding, setPadding] = useState(0);

  // Advanced
  const [waitMs, setWaitMs] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [hideBanners, setHideBanners] = useState(true);
  const [css, setCss] = useState("");

  const [results, setResults] = useState<Result[]>([]);
  const [isWorking, setIsWorking] = useState(false);
  const [progress, setProgress] = useState({ done: 0, total: 0 });

  const active = pages.find((p) => p.id === activeId) ?? pages[0];

  /*
    Revoke preview URLs on UNMOUNT only.

    A `[results]` dependency would revoke the URLs the very next render still
    points at every time the list changes, leaving broken thumbnails — the same
    trap ConvertTool documents. Per-item revocation on re-render is handled
    explicitly where the list is replaced.
  */
  const resultsRef = useRef<Result[]>([]);
  useEffect(() => { resultsRef.current = results; }, [results]);
  useEffect(() => () => { resultsRef.current.forEach((r) => URL.revokeObjectURL(r.url)); }, []);

  const clearResults = () => {
    resultsRef.current.forEach((r) => URL.revokeObjectURL(r.url));
    setResults([]);
  };

  // ── Page management ───────────────────────────────────────────────────────
  const addPage = () => {
    const p: Page = { id: uid(), name: `Page ${pages.length + 1}`, html: "" };
    setPages((prev) => [...prev, p]);
    setActiveId(p.id);
  };

  const removePage = (id: string) => {
    setPages((prev) => {
      if (prev.length === 1) return prev; // never leave the editor with nothing
      const next = prev.filter((p) => p.id !== id);
      if (activeId === id) setActiveId(next[0].id);
      return next;
    });
    setResults((prev) => {
      prev.filter((r) => r.pageId === id).forEach((r) => URL.revokeObjectURL(r.url));
      return prev.filter((r) => r.pageId !== id);
    });
  };

  const updateActive = (html: string) =>
    setPages((prev) => prev.map((p) => (p.id === active.id ? { ...p, html } : p)));

  const renameActive = (name: string) =>
    setPages((prev) => prev.map((p) => (p.id === active.id ? { ...p, name } : p)));

  /** Read dropped/picked .html files into new pages. */
  const importFiles = async (files: FileList | File[]) => {
    const list = Array.from(files).filter((f) => /\.html?$/i.test(f.name) || f.type === "text/html");
    if (list.length === 0) {
      toast.error("Please choose .html files.");
      return;
    }
    const added: Page[] = [];
    for (const f of list) {
      added.push({ id: uid(), name: baseName(f.name), html: await f.text() });
    }
    setPages((prev) => {
      // Replace a single untouched starter page rather than stacking on it.
      const starterOnly = prev.length === 1 && (prev[0].html === STARTER_HTML || !prev[0].html.trim());
      return starterOnly ? added : [...prev, ...added];
    });
    setActiveId(added[0].id);
    toast.success(`Added ${added.length} page${added.length === 1 ? "" : "s"}.`);
  };

  // ── Derived settings ──────────────────────────────────────────────────────
  const { width, height } = useMemo(() => {
    const p = VIEWPORTS.find((v) => v.id === preset);
    const base = !p || p.id === "custom" ? { w: customW, h: customH } : { w: p.w, h: p.h };
    if (p?.id === "custom") return { width: base.w, height: base.h };
    return orientation === "landscape"
      ? { width: base.h, height: base.w }
      : { width: base.w, height: base.h };
  }, [preset, orientation, customW, customH]);

  const lossy = format !== "png";
  const canBeTransparent = format !== "jpeg";
  const capturingElement = selector.trim().length > 0;
  const ext = format === "jpeg" ? "jpg" : format;

  const renderable = mode === "html" ? pages.filter((p) => p.html.trim()) : [];
  const jobCount = mode === "url" ? 1 : renderable.length;

  // ── Run ───────────────────────────────────────────────────────────────────
  const settingsBody = () => ({
    format,
    width,
    height,
    fullPage: capturingElement ? false : fullPage,
    scale,
    ...(lossy ? { quality } : {}),
    ...(capturingElement ? { selector: selector.trim() } : {}),
    ...(transparent && canBeTransparent ? { transparent: true } : {}),
    ...(padding > 0 ? { padding } : {}),
    ...(waitMs > 0 ? { waitMs } : {}),
    ...(darkMode ? { darkMode: true } : {}),
    ...(css.trim() ? { css } : {}),
  });

  const run = async () => {
    if (mode === "url" && !/^https?:\/\//i.test(url.trim())) {
      toast.error("Enter a valid URL (https://…).");
      return;
    }
    if (mode === "html" && renderable.length === 0) {
      toast.error("Add some HTML to at least one page.");
      return;
    }
    if (width < 100 || height < 100) {
      toast.error("Width and height must be at least 100px.");
      return;
    }

    setIsWorking(true);
    clearResults();
    setProgress({ done: 0, total: jobCount });
    const out: Result[] = [];
    try {
      if (mode === "url") {
        const r = await postJsonForImage("/api/image/html-to-image", {
          url: url.trim(),
          ...settingsBody(),
          ...(hideBanners ? { hideBanners: true } : {}),
        });
        out.push({ pageId: "url", url: URL.createObjectURL(r.blob), blob: r.blob, name: r.filename });
        setProgress({ done: 1, total: 1 });
      } else {
        // Sequential on purpose: every request launches its own Chromium and
        // the backend caps concurrent heavy jobs, so firing the batch in
        // parallel just trades a queue for rate-limit rejections.
        for (const [i, p] of renderable.entries()) {
          const r = await postJsonForImage("/api/image/html-to-image", {
            html: p.html,
            ...settingsBody(),
          });
          out.push({
            pageId: p.id,
            url: URL.createObjectURL(r.blob),
            blob: r.blob,
            name: `${safeName(p.name)}.${ext}`,
          });
          setProgress({ done: i + 1, total: renderable.length });
        }
      }
      setResults(out);
      toast.success(`Rendered ${out.length} image${out.length === 1 ? "" : "s"}.`);
    } catch (err) {
      // Keep whatever finished — a rate limit on page 7 shouldn't bin pages 1–6.
      setResults(out);
      toast.error(err instanceof Error ? err.message : "Rendering failed.");
    } finally {
      setIsWorking(false);
    }
  };

  const fieldCls =
    "w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";
  const smallField =
    "w-full px-2.5 py-2 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-body-md text-primary";

  return (
    <>
      <TopLoadingBar active={isWorking} />
      <input
        ref={uploadRef}
        type="file"
        accept=".html,.htm,text/html"
        multiple
        className="hidden"
        onChange={(e) => {
          if (e.target.files?.length) importFiles(e.target.files);
          e.target.value = "";
        }}
      />
      <ToolWorkspace
        main={
          <>
            {/* Source lives in the centre column, not the rail: a rail is ~380px
                wide, which turns any real document into a 6-line peephole. */}
            <div className="grid w-full max-w-[320px] grid-cols-2 gap-1 rounded-lg bg-surface-container p-1">
              {(["url", "html"] as Mode[]).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMode(m)}
                  className={`rounded-md px-3 py-2 text-body-md font-semibold uppercase transition-colors ${
                    mode === m
                      ? "bg-surface-container-lowest text-primary shadow-sm"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>

            {mode === "url" ? (
              <div className="flex flex-col gap-1.5">
                <label className="flex items-center gap-1.5 text-label-sm font-label-sm text-on-surface-variant">
                  Web page URL
                  <HelpTip text="Any public http(s) address. Private and local addresses are rejected by the server." />
                </label>
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com"
                  className={fieldCls}
                />
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {/* Page strip */}
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-headline-md font-bold text-primary">
                    {pages.length} page{pages.length === 1 ? "" : "s"}
                  </h2>
                  <div className="ml-auto flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => uploadRef.current?.click()}
                      disabled={isWorking}
                      className="inline-flex items-center gap-1.5 text-label-md font-medium text-on-surface-variant transition-colors hover:text-secondary disabled:opacity-40"
                    >
                      <Icon name="upload_file" className="text-[18px]" /> Import .html
                    </button>
                    <button
                      type="button"
                      onClick={addPage}
                      disabled={isWorking}
                      aria-label="Add page"
                      title="Add page"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-on-secondary shadow-md shadow-secondary/30 transition-all hover:bg-secondary-container disabled:opacity-50"
                    >
                      <Icon name="add" className="text-[22px]" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {pages.map((p) => {
                    const isActive = p.id === active.id;
                    const done = results.some((r) => r.pageId === p.id);
                    return (
                      <div
                        key={p.id}
                        className={`group flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 transition-colors ${
                          isActive
                            ? "border-secondary bg-secondary/10 text-primary"
                            : "border-surface-variant bg-surface-container-lowest text-on-surface-variant hover:text-primary"
                        }`}
                      >
                        <button type="button" onClick={() => setActiveId(p.id)} className="flex items-center gap-1.5">
                          {done && <Icon name="check_circle" className="text-[14px]" style={{ color: ACCENT }} />}
                          <span className="max-w-[140px] truncate text-body-sm font-semibold">{p.name}</span>
                        </button>
                        {pages.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removePage(p.id)}
                            aria-label={`Remove ${p.name}`}
                            className="flex h-5 w-5 items-center justify-center rounded text-on-surface-variant transition-colors hover:bg-error-container hover:text-error"
                          >
                            <Icon name="close" className="text-[14px]" />
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Editor for the active page */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <label className="flex items-center gap-1.5 text-label-sm font-label-sm text-on-surface-variant">
                      Page name
                      <HelpTip text="Used as the downloaded file name for this page's image." />
                    </label>
                    <input
                      type="text"
                      value={active.name}
                      onChange={(e) => renameActive(e.target.value)}
                      className="max-w-[240px] flex-1 rounded-lg border border-surface-variant bg-surface-container-lowest px-2.5 py-1.5 text-body-sm text-primary outline-none focus:border-secondary"
                    />
                  </div>
                  <textarea
                    value={active.html}
                    onChange={(e) => updateActive(e.target.value)}
                    spellCheck={false}
                    placeholder="<!doctype html> …"
                    rows={18}
                    className={`${fieldCls} resize-y font-label-sm leading-relaxed`}
                  />
                  <p className="text-label-sm font-label-sm text-on-surface-variant/70">
                    {active.html.length.toLocaleString()} characters · a full document or a fragment both work.
                  </p>
                </div>
              </div>
            )}

            {/* ── Results ──────────────────────────────────────────────── */}
            <div className="flex flex-col gap-3 border-t border-outline-variant/60 pt-4">
              {results.length === 0 ? (
                <div
                  className="flex items-center justify-center rounded-xl border border-surface-variant bg-surface-container p-4"
                  style={{ minHeight: 180 }}
                >
                  <div className="flex flex-col items-center gap-2 text-on-surface-variant">
                    <Icon name="image" className="text-[40px]" style={{ color: ACCENT }} />
                    <p className="text-body-md">
                      {isWorking
                        ? `Rendering ${progress.done + 1} of ${progress.total}…`
                        : "Your rendered image will appear here."}
                    </p>
                    <p className="text-label-sm font-label-sm">
                      Capturing at {width} × {height}
                      {scale > 1 ? ` @${scale}×` : ""} · {format.toUpperCase()}
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="text-headline-md font-bold text-primary">
                      {results.length} image{results.length === 1 ? "" : "s"}
                    </h2>
                    <button
                      type="button"
                      onClick={clearResults}
                      className="inline-flex items-center gap-1.5 text-label-md font-medium text-on-surface-variant transition-colors hover:text-error"
                    >
                      <Icon name="delete_sweep" className="text-[18px]" /> Clear
                    </button>
                  </div>
                  <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {results.map((r) => (
                      <li
                        key={r.pageId}
                        className="flex flex-col overflow-hidden rounded-xl border border-surface-variant bg-surface-container-lowest ambient-shadow"
                      >
                        <div className="relative flex items-center justify-center overflow-hidden bg-surface-container p-3">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={r.url} alt={r.name} className="max-h-[40vh] max-w-full rounded object-contain" />
                          <div className="absolute right-2 top-2">
                            <button
                              type="button"
                              onClick={() => downloadBlob(r.blob, r.name)}
                              aria-label={`Download ${r.name}`}
                              className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-container-lowest/85 text-secondary backdrop-blur-sm transition-colors hover:bg-secondary/10"
                            >
                              <Icon name="download" className="text-[20px]" />
                            </button>
                          </div>
                        </div>
                        <div className="flex flex-col gap-0.5 border-t border-surface-variant px-3 py-3">
                          <p className="truncate text-body-md font-semibold text-primary" title={r.name}>
                            {r.name}
                          </p>
                          <p className="text-label-sm font-label-sm text-on-surface-variant">
                            {formatBytes(r.blob.size)}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </>
        }
        rail={
          <SettingsRail
            title="Capture Settings"
            icon="screenshot_monitor"
            accent={ACCENT}
            footer={
              <>
                <RailNote>
                  {isWorking && progress.total > 1
                    ? `Rendering ${progress.done} of ${progress.total}…`
                    : "Rendering uses headless Chromium on our servers."}
                </RailNote>
                <RailAction
                  onClick={run}
                  busy={isWorking}
                  busyLabel="Rendering…"
                  disabled={jobCount === 0}
                  icon="screenshot_monitor"
                >
                  {jobCount > 1 ? `Render ${jobCount} pages` : "Render to image"}
                </RailAction>
                {results.length > 1 && (
                  <RailSecondaryAction
                    icon="folder_zip"
                    onClick={() =>
                      zipAndDownload(
                        results.map((r) => ({ name: r.name, blob: r.blob })),
                        "omyimage_html.zip",
                      )
                    }
                  >
                    Download all (ZIP)
                  </RailSecondaryAction>
                )}
              </>
            }
          >
            {/* ── Viewport ───────────────────────────────────────────── */}
            <div className="flex flex-col gap-3">
              <h3 className="flex items-center gap-1.5 text-body-lg font-bold text-primary">
                <Icon name="aspect_ratio" className="text-[18px]" style={{ color: ACCENT }} />
                Viewport
              </h3>

              <div className="flex flex-col gap-1.5">
                <label className="flex items-center gap-1.5 text-label-sm font-label-sm text-on-surface-variant">
                  Screen size
                  <HelpTip text="The browser window the page is laid out in. Responsive sites render their tablet or mobile layout at those widths." />
                </label>
                <select value={preset} onChange={(e) => setPreset(e.target.value)} className={fieldCls}>
                  {VIEWPORTS.map((v) => (
                    <option key={v.id} value={v.id}>
                      {v.label}
                    </option>
                  ))}
                </select>
              </div>

              {preset === "custom" ? (
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-label-sm font-label-sm text-on-surface-variant">Width (px)</label>
                    <input type="number" min={100} max={3840} value={customW} onChange={(e) => setCustomW(toInt(e.target.value))} className={smallField} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-label-sm font-label-sm text-on-surface-variant">Height (px)</label>
                    <input type="number" min={100} max={3840} value={customH} onChange={(e) => setCustomH(toInt(e.target.value))} className={smallField} />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-1.5">
                  <label className="flex items-center gap-1.5 text-label-sm font-label-sm text-on-surface-variant">
                    Orientation
                    <HelpTip text="Swaps the width and height of the chosen screen size." />
                  </label>
                  <div className="grid grid-cols-2 gap-1 rounded-lg bg-surface-container p-1">
                    {(["portrait", "landscape"] as Orientation[]).map((o) => (
                      <button
                        key={o}
                        type="button"
                        onClick={() => setOrientation(o)}
                        className={`rounded-md px-3 py-2 text-body-md font-semibold capitalize transition-colors ${
                          orientation === o
                            ? "bg-surface-container-lowest text-primary shadow-sm"
                            : "text-on-surface-variant hover:text-primary"
                        }`}
                      >
                        {o}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-1.5">
                <label className="flex items-center gap-1.5 text-label-sm font-label-sm text-on-surface-variant">
                  Resolution
                  <HelpTip text="2× renders twice the pixels for a retina-sharp result — the same layout, a bigger file." />
                </label>
                <div className="grid grid-cols-3 gap-1 rounded-lg bg-surface-container p-1">
                  {[1, 2, 3].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setScale(s)}
                      className={`rounded-md px-3 py-2 text-body-md font-semibold transition-colors ${
                        scale === s
                          ? "bg-surface-container-lowest text-primary shadow-sm"
                          : "text-on-surface-variant hover:text-primary"
                      }`}
                    >
                      {s}×
                    </button>
                  ))}
                </div>
              </div>

              <label className={`flex items-center gap-2.5 ${capturingElement ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}>
                <input
                  type="checkbox"
                  checked={fullPage && !capturingElement}
                  disabled={capturingElement}
                  onChange={(e) => setFullPage(e.target.checked)}
                  className="h-4 w-4 accent-secondary"
                />
                <span className="flex items-center gap-1.5 text-body-md text-on-surface">
                  Capture full page
                  <HelpTip text="Scrolls to the bottom and stitches the whole document instead of just the visible window." />
                </span>
              </label>

              <div className="flex flex-col gap-1.5">
                <label className="flex items-center gap-1.5 text-label-sm font-label-sm text-on-surface-variant">
                  Capture one element (optional)
                  <HelpTip text="A CSS selector, e.g. #pricing or .hero. Only that element is captured, which overrides full page." />
                </label>
                <input
                  type="text"
                  value={selector}
                  onChange={(e) => setSelector(e.target.value)}
                  placeholder="#main, .card, header…"
                  className={`${fieldCls} font-label-sm`}
                />
              </div>
            </div>

            {/* ── Output ─────────────────────────────────────────────── */}
            <div className="flex flex-col gap-3 border-t border-outline-variant/60 pt-5">
              <h3 className="flex items-center gap-1.5 text-body-lg font-bold text-primary">
                <Icon name="image" className="text-[18px]" style={{ color: ACCENT }} />
                Output
              </h3>

              <div className="flex flex-col gap-1.5">
                <label className="text-label-sm font-label-sm text-on-surface-variant">Format</label>
                <select value={format} onChange={(e) => setFormat(e.target.value as Format)} className={fieldCls}>
                  {FORMATS.map((f) => (
                    <option key={f.value} value={f.value}>
                      {f.label}
                    </option>
                  ))}
                </select>
              </div>

              {lossy && (
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <label className="flex items-center gap-1.5 text-label-sm font-label-sm text-on-surface-variant">
                      Quality
                      <HelpTip text="Higher keeps more detail and makes a bigger file. 80–90 is the sweet spot for screenshots." />
                    </label>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => setQuality((q) => Math.max(1, q - 1))}
                        aria-label="Lower quality"
                        className="flex h-7 w-7 items-center justify-center rounded-md border border-surface-variant text-on-surface-variant transition-colors hover:text-primary"
                      >
                        <Icon name="remove" className="text-[16px]" />
                      </button>
                      <span className="w-11 text-center text-body-md font-semibold text-primary">{quality}%</span>
                      <button
                        type="button"
                        onClick={() => setQuality((q) => Math.min(100, q + 1))}
                        aria-label="Higher quality"
                        className="flex h-7 w-7 items-center justify-center rounded-md border border-surface-variant text-on-surface-variant transition-colors hover:text-primary"
                      >
                        <Icon name="add" className="text-[16px]" />
                      </button>
                    </div>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={100}
                    step={1}
                    value={quality}
                    onChange={(e) => setQuality(parseInt(e.target.value, 10))}
                    className="w-full accent-secondary"
                  />
                  <div className="flex justify-between text-label-sm font-label-sm text-on-surface-variant/70">
                    <span>Smaller file</span>
                    <span>Higher quality</span>
                  </div>
                </div>
              )}

              <label className={`flex items-center gap-2.5 ${canBeTransparent ? "cursor-pointer" : "cursor-not-allowed opacity-50"}`}>
                <input
                  type="checkbox"
                  checked={transparent && canBeTransparent}
                  disabled={!canBeTransparent}
                  onChange={(e) => setTransparent(e.target.checked)}
                  className="h-4 w-4 accent-secondary"
                />
                <span className="flex items-center gap-1.5 text-body-md text-on-surface">
                  Transparent background
                  <HelpTip
                    text={
                      canBeTransparent
                        ? "Skips the page background so the image keeps an alpha channel."
                        : "JPG has no alpha channel — switch to PNG or WEBP for transparency."
                    }
                  />
                </span>
              </label>

              <div className="flex flex-col gap-1.5">
                <label className="flex items-center gap-1.5 text-label-sm font-label-sm text-on-surface-variant">
                  Padding (px)
                  <HelpTip text="Breathing room added around the page content before the shot is taken." />
                </label>
                <input type="number" min={0} max={200} value={padding} onChange={(e) => setPadding(toInt(e.target.value))} className={smallField} />
              </div>
            </div>

            {/* ── Advanced ───────────────────────────────────────────── */}
            <div className="flex flex-col gap-3 border-t border-outline-variant/60 pt-5">
              <h3 className="flex items-center gap-1.5 text-body-lg font-bold text-primary">
                <Icon name="tune" className="text-[18px]" style={{ color: ACCENT }} />
                Advanced
              </h3>

              <div className="flex flex-col gap-1.5">
                <label className="flex items-center gap-1.5 text-label-sm font-label-sm text-on-surface-variant">
                  Wait before capture (ms)
                  <HelpTip text="Extra settle time after the page loads — useful for animations, fonts or lazy-loaded images. Max 10000." />
                </label>
                <input type="number" min={0} max={10000} step={100} value={waitMs} onChange={(e) => setWaitMs(toInt(e.target.value))} className={smallField} />
              </div>

              <label className="flex cursor-pointer items-center gap-2.5">
                <input type="checkbox" checked={darkMode} onChange={(e) => setDarkMode(e.target.checked)} className="h-4 w-4 accent-secondary" />
                <span className="flex items-center gap-1.5 text-body-md text-on-surface">
                  Emulate dark mode
                  <HelpTip text="Reports prefers-color-scheme: dark, so sites with a dark theme render it." />
                </span>
              </label>

              <label className={`flex items-center gap-2.5 ${mode === "url" ? "cursor-pointer" : "cursor-not-allowed opacity-50"}`}>
                <input
                  type="checkbox"
                  checked={hideBanners && mode === "url"}
                  disabled={mode !== "url"}
                  onChange={(e) => setHideBanners(e.target.checked)}
                  className="h-4 w-4 accent-secondary"
                />
                <span className="flex items-center gap-1.5 text-body-md text-on-surface">
                  Hide cookie banners
                  <HelpTip
                    text={
                      mode === "url"
                        ? "Hides the common consent overlays that would otherwise cover the shot."
                        : "Only applies when capturing a URL."
                    }
                  />
                </span>
              </label>

              <div className="flex flex-col gap-1.5">
                <label className="flex items-center gap-1.5 text-label-sm font-label-sm text-on-surface-variant">
                  Custom CSS (optional)
                  <HelpTip text="Injected last, so it overrides the page's own styles. Applies to every page in the batch." />
                </label>
                <textarea
                  value={css}
                  onChange={(e) => setCss(e.target.value)}
                  rows={4}
                  placeholder={".ad, .newsletter-popup { display: none !important; }"}
                  className={`${fieldCls} resize-y font-label-sm`}
                />
              </div>
            </div>
          </SettingsRail>
        }
      />
    </>
  );
}

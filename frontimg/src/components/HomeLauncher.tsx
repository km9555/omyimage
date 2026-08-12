"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@/components/Icon";
import { formatBytes } from "@/lib/image/raster";
import { stashFiles } from "@/lib/tool-handoff";
import { applicableTools } from "@/lib/file-actions";
import type { Tool } from "@/lib/tools";

/**
 * Homepage upload-first launcher: drop images → pick a tool that can process
 * them from a searchable dropdown → Continue opens that tool with the files
 * already loaded (via the in-memory handoff store, consumed by each tool's
 * `useHandoff`).
 */

type Staged = { file: File; url: string };

const ACCEPT = "image/*,.heic,.heif";
const CHIPS = ["JPG, PNG, WEBP", "GIF, HEIC, BMP", "+ More"];

export function HomeLauncher() {
  const router = useRouter();
  const [staged, setStaged] = useState<Staged[]>([]);
  const [isDropping, setIsDropping] = useState(false);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [chosen, setChosen] = useState<Tool | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const comboRef = useRef<HTMLDivElement>(null);

  const files = useMemo(() => staged.map((s) => s.file), [staged]);
  const applicable = useMemo(() => applicableTools(files), [files]);

  // Revoke every preview URL when the component goes away.
  useEffect(() => {
    return () => { staged.forEach((s) => URL.revokeObjectURL(s.url)); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // When the staged set changes, drop a chosen action that's no longer valid.
  useEffect(() => {
    if (chosen && !applicable.some((t) => t.slug === chosen.slug)) setChosen(null);
  }, [applicable, chosen]);

  // Filtered options for the dropdown.
  const options = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return applicable;
    return applicable.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.shortDescription.toLowerCase().includes(q) ||
        t.primaryKeyword.toLowerCase().includes(q),
    );
  }, [query, applicable]);

  // Close the dropdown on outside click / Escape.
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (comboRef.current && !comboRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const addStaged = (incoming: FileList | File[]) => {
    const list = Array.from(incoming);
    if (list.length === 0) return;
    setStaged((prev) => {
      const seen = new Set(prev.map((s) => `${s.file.name}:${s.file.size}`));
      const next = [...prev];
      for (const file of list) {
        const key = `${file.name}:${file.size}`;
        if (seen.has(key)) continue;
        seen.add(key);
        next.push({ file, url: URL.createObjectURL(file) });
      }
      return next;
    });
  };

  const removeFile = (i: number) =>
    setStaged((prev) => {
      const target = prev[i];
      if (target) URL.revokeObjectURL(target.url);
      return prev.filter((_, idx) => idx !== i);
    });

  const openPicker = () => inputRef.current?.click();
  const pick = (t: Tool) => { setChosen(t); setQuery(t.name); setOpen(false); };

  const cont = () => {
    if (!chosen || files.length === 0) return;
    stashFiles(files);
    router.push(`/${chosen.slug}`);
  };

  const noneApplicable = files.length > 0 && applicable.length === 0;

  return (
    <section className="relative bg-surface-container-low px-margin-mobile md:px-gutter py-10 md:py-16">
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 50% 30%, var(--color-secondary) 0%, transparent 55%)" }}
      />
      <div className="relative z-10 max-w-content mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left — marketing */}
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-outline-variant bg-surface-container-lowest px-3 py-1 text-label-sm font-label-sm text-on-surface-variant">
            <span className="h-2 w-2 rounded-full bg-secondary" />
            Free tools — most run right in your browser
          </span>
          {/* No hard px size/leading here any more — `text-display-lg` is a
              clamp() that interpolates from 30px to 48px across the viewport,
              so the headline stays in proportion with the upload card beside
              it instead of staying 48px inside a 456px column at 1024. */}
          <h1 className="mt-5 text-display-lg font-black tracking-tight text-primary">
            Effortless Power for Image Workflows.
          </h1>
          <p className="mt-4 text-body-lg text-on-surface-variant max-w-md mx-auto lg:mx-0">
            Drop your images, pick what to do — compress, resize, convert and more — and
            we&apos;ll open the right tool with everything loaded. No signup, no quality loss.
          </p>
        </div>

        {/* Right — upload / action card */}
        <div className="min-w-0 rounded-2xl border border-surface-variant bg-surface-container-lowest ambient-shadow p-5 sm:p-6 flex flex-col gap-5">
          <input
            ref={inputRef}
            type="file"
            accept={ACCEPT}
            multiple
            className="hidden"
            onChange={(e) => { if (e.target.files) addStaged(e.target.files); e.target.value = ""; }}
          />

          {/* Step 1 — upload */}
          <div>
            <p className="text-label-sm font-label-sm font-bold uppercase tracking-wide text-on-surface-variant mb-2">
              Step 1 · Upload your images
            </p>
            <div
              onClick={openPicker}
              onDragOver={(e) => { e.preventDefault(); setIsDropping(true); }}
              onDragLeave={() => setIsDropping(false)}
              onDrop={(e) => { e.preventDefault(); setIsDropping(false); addStaged(e.dataTransfer.files); }}
              className={`rounded-xl border-2 border-dashed px-4 py-6 flex flex-col items-center gap-3 cursor-pointer transition-all ${
                isDropping ? "drag-active" : "border-outline-variant hover:border-secondary/50"
              }`}
            >
              <span className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-container text-on-secondary text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">
                <Icon name="upload" className="text-[18px]" /> Add images
              </span>
              <p className="text-body-sm text-on-surface-variant">Drag &amp; drop images or click to browse</p>
              <div className="flex flex-wrap justify-center gap-1.5">
                {CHIPS.map((c) => (
                  <span key={c} className="rounded-md bg-surface-container px-2 py-0.5 text-label-sm font-label-sm text-on-surface-variant">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {staged.length > 0 && (
              <ul className="mt-3 flex flex-col gap-1.5 max-h-40 overflow-y-auto">
                {staged.map((s, i) => (
                  <li
                    key={`${s.file.name}:${s.file.size}:${i}`}
                    className="flex items-center gap-2.5 rounded-lg bg-surface-container px-2.5 py-1.5"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.url}
                      alt=""
                      className="h-8 w-8 shrink-0 rounded-md object-cover bg-surface-container-highest"
                    />
                    <span className="min-w-0 flex-1 truncate text-body-sm text-primary">{s.file.name}</span>
                    <span className="shrink-0 text-label-sm font-label-sm text-on-surface-variant">
                      {formatBytes(s.file.size)}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeFile(i)}
                      aria-label={`Remove ${s.file.name}`}
                      className="shrink-0 grid place-items-center h-6 w-6 rounded-md text-on-surface-variant hover:bg-error-container hover:text-error transition-colors"
                    >
                      <Icon name="close" className="text-[15px]" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Step 2 — choose action */}
          <div ref={comboRef} className="relative">
            <p className="text-label-sm font-label-sm font-bold uppercase tracking-wide text-on-surface-variant mb-2">
              Step 2 · Choose an action
            </p>
            <div
              className={`flex items-center gap-2 rounded-lg border px-3 h-11 transition-colors ${
                files.length === 0
                  ? "border-outline-variant bg-surface-container/40 opacity-60"
                  : "border-outline-variant bg-surface-container-lowest focus-within:border-secondary/70"
              }`}
            >
              <Icon name="search" className="text-[19px] text-on-surface-variant shrink-0" />
              <input
                type="text"
                disabled={files.length === 0}
                value={query}
                onChange={(e) => { setQuery(e.target.value); setChosen(null); setOpen(true); }}
                onFocus={() => setOpen(true)}
                placeholder={files.length === 0 ? "Upload an image first" : "What do you want to do? — e.g. compress, resize"}
                role="combobox"
                aria-expanded={open}
                aria-controls="launcher-actions"
                autoComplete="off"
                className="flex-1 bg-transparent outline-none text-body-md text-primary placeholder:text-on-surface-variant/70 min-w-0 disabled:cursor-not-allowed"
              />
              {chosen && <Icon name="check" className="text-[18px] text-secondary shrink-0" />}
            </div>

            {open && files.length > 0 && (
              <div
                id="launcher-actions"
                role="listbox"
                className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 max-h-[42vh] overflow-y-auto rounded-xl border border-outline-variant bg-surface-container-lowest ambient-shadow py-1.5"
              >
                {noneApplicable ? (
                  <p className="px-4 py-5 text-center text-body-sm text-on-surface-variant">
                    We can&apos;t process this file type yet.
                  </p>
                ) : options.length > 0 ? (
                  options.map((t) => (
                    <button
                      key={t.slug}
                      type="button"
                      role="option"
                      aria-selected={chosen?.slug === t.slug}
                      onClick={() => pick(t)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors hover:bg-surface-container ${
                        chosen?.slug === t.slug ? "bg-surface-container" : ""
                      }`}
                    >
                      <Icon name={t.icon} className="text-[20px] text-secondary/80 shrink-0" />
                      <span className="min-w-0 flex-1 truncate text-body-md text-primary">{t.name}</span>
                    </button>
                  ))
                ) : (
                  <p className="px-4 py-5 text-center text-body-sm text-on-surface-variant">No matching action.</p>
                )}
              </div>
            )}
          </div>

          {/* Step 3 — continue */}
          <button
            type="button"
            onClick={cont}
            disabled={!chosen || files.length === 0}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary text-on-secondary font-semibold px-6 py-3 shadow-md shadow-secondary/30 hover:bg-secondary-container transition-colors disabled:opacity-40 disabled:pointer-events-none"
          >
            Continue <Icon name="arrow_forward" className="text-[19px]" />
          </button>
        </div>
      </div>
    </section>
  );
}

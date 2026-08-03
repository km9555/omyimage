"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Icon } from "@/components/Icon";
import { TOOLS, CATEGORIES } from "@/lib/tools";
import { searchTools } from "@/lib/tool-search";

const CATEGORY_LABEL: Record<string, string> = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c.navLabel.toUpperCase()]),
);

/** Wraps the matched substring so users can see *why* a result came back. */
function highlightMatch(text: string, q: string) {
  if (!q) return text;
  const i = text.toLowerCase().indexOf(q.toLowerCase());
  if (i === -1) return text;
  return (
    <>
      {text.slice(0, i)}
      <mark className="bg-secondary/20 text-primary rounded px-0.5">{text.slice(i, i + q.length)}</mark>
      {text.slice(i + q.length)}
    </>
  );
}

/**
 * Compact header search. Reuses the shared ranked matcher (searchTools) so
 * result order and synonym handling stay identical everywhere search appears.
 */
export function HeaderSearch({ className = "" }: { className?: string }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const activeItemRef = useRef<HTMLAnchorElement>(null);

  const normalized = query.trim().toLowerCase();

  const results = useMemo(
    () => (normalized ? searchTools(query, TOOLS).slice(0, 8) : []),
    [query, normalized],
  );

  // Close on outside click / Escape.
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => { setActiveIndex(0); }, [normalized]);
  useEffect(() => { activeItemRef.current?.scrollIntoView({ block: "nearest" }); }, [activeIndex]);

  const goToResult = (i: number) => {
    const tool = results[i] ?? results[0];
    if (tool) { setOpen(false); setQuery(""); router.push(`/${tool.slug}`); }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown" && results.length) {
      e.preventDefault(); setOpen(true);
      setActiveIndex((i) => (i + 1) % results.length);
    } else if (e.key === "ArrowUp" && results.length) {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault(); goToResult(activeIndex);
    }
  };

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <div className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant rounded-lg pl-3 pr-1.5 h-10 focus-within:border-secondary/70 focus-within:shadow-[0_0_0_3px_color-mix(in_srgb,var(--color-secondary)_15%,transparent)] transition-all duration-200">
        <Icon name="search" className="text-on-surface-variant text-[19px] shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          placeholder="Search tools…"
          aria-label="Search tools"
          role="combobox"
          aria-expanded={open && results.length > 0}
          aria-controls="header-search-results"
          aria-activedescendant={open && results[activeIndex] ? `header-result-${results[activeIndex].id}` : undefined}
          autoComplete="off"
          className="flex-1 bg-transparent outline-none text-body-md text-primary placeholder:text-on-surface-variant/70 truncate min-w-0"
        />
        {query && (
          <button
            type="button"
            onClick={() => { setQuery(""); setOpen(false); }}
            aria-label="Clear search"
            className="shrink-0 grid place-items-center w-7 h-7 rounded-md text-on-surface-variant hover:bg-surface-container transition-colors"
          >
            <Icon name="close" className="text-[16px]" />
          </button>
        )}
      </div>

      {open && normalized !== "" && (
        <div
          id="header-search-results"
          role="listbox"
          /* Anchored to the input's right edge and allowed to grow leftwards past
             it: in the narrow header slot there is otherwise too little room for
             the tool name once the category chip is drawn. */
          className="absolute right-0 top-[calc(100%+8px)] z-50 w-full min-w-[27rem] max-w-[calc(100vw-1.5rem)] max-h-[60vh] overflow-y-auto rounded-xl border border-outline-variant bg-surface-container-lowest ambient-shadow py-1.5"
        >
          {results.length > 0 ? (
            results.map((tool, idx) => (
              <Link
                key={tool.id}
                id={`header-result-${tool.id}`}
                ref={idx === activeIndex ? activeItemRef : undefined}
                href={`/${tool.slug}`}
                role="option"
                aria-selected={idx === activeIndex}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => { setOpen(false); setQuery(""); }}
                className={`flex items-center justify-between gap-3 px-4 py-2.5 transition-colors ${idx === activeIndex ? "bg-surface-container" : ""}`}
              >
                <span className="flex flex-1 items-center gap-3 min-w-0">
                  <Icon name={tool.icon} className="text-[20px] text-secondary/80 shrink-0" />
                  <span className="text-body-md text-primary truncate" title={tool.name}>
                    {highlightMatch(tool.name, query.trim())}
                  </span>
                </span>
                {/* The chip gives way before the tool name does. */}
                <span className="shrink min-w-0 truncate text-label-sm font-label-sm uppercase tracking-wide text-on-surface-variant/70 bg-surface-container rounded-md px-2 py-0.5">
                  {CATEGORY_LABEL[tool.categoryId] ?? "TOOL"}
                </span>
              </Link>
            ))
          ) : (
            <p className="px-4 py-6 text-center text-body-sm text-on-surface-variant">
              No tools match &quot;{query.trim()}&quot;.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

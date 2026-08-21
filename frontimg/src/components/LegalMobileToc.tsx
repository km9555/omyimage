"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";
import { MobileSheet } from "@/components/tool/mobile-chrome";

/**
 * Phone navigation for the long-form legal pages.
 *
 * On `lg` and up those pages carry a sticky sidebar of contents. Below that the
 * sidebar unsticks into a full-width card of 12px links sitting between the
 * page heading and the first paragraph — a wall of small targets you scroll
 * past once and can never get back to without returning to the top.
 *
 * This replaces it under `md` with a bar that stays under the navbar, opening
 * the same list as a sheet of proper 48px rows, plus a back-to-top control once
 * you are far enough down to want one. The `md` gate matches `MobileSheet`'s
 * own; between `md` and `lg` the stacked card is still perfectly usable because
 * there is width for it.
 */
export function LegalMobileToc({ toc }: { toc: { id: string; title: string }[] }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [current, setCurrent] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track the section currently under the top of the viewport, so the bar can
  // say where you are rather than just what the page is.
  useEffect(() => {
    if (toc.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setCurrent(e.target.id);
        }
      },
      // A band just below the sticky navbar: whichever heading sits in it wins.
      { rootMargin: "-80px 0px -75% 0px", threshold: 0 },
    );
    for (const s of toc) {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, [toc]);

  const currentTitle = toc.find((s) => s.id === current)?.title;

  return (
    <div className="md:hidden">
      {/* `top-16` is the navbar's 64px height. */}
      <div className="sticky top-16 z-30 -mx-margin-mobile mb-6 border-y border-outline-variant bg-background/95 px-margin-mobile backdrop-blur-md">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          className="flex min-h-12 w-full items-center gap-2 text-left"
        >
          <Icon name="list" className="shrink-0 text-[20px] text-on-surface-variant" />
          <span className="min-w-0 flex-1 truncate text-body-md text-on-surface">
            {currentTitle ?? "On this page"}
          </span>
          <Icon name="expand_more" className="shrink-0 text-[20px] text-on-surface-variant" />
        </button>
      </div>

      {scrolled && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-4 right-4 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-outline-variant bg-surface-container-lowest text-on-surface-variant ambient-shadow active:bg-surface-container"
          style={{ bottom: "calc(1rem + env(safe-area-inset-bottom, 0px))" }}
        >
          <Icon name="arrow_upward" className="text-[22px]" />
        </button>
      )}

      {open && (
        <MobileSheet title="On this page" onClose={() => setOpen(false)}>
          {/*
            Real hash links rather than a scripted `scrollIntoView`: the browser
            does the scrolling (honouring the sections' `scroll-mt-24`), the URL
            becomes shareable, and the list still works if the script never runs
            — which is what the sidebar this replaces already did.
          */}
          <nav className="flex flex-col">
            {toc.map((s) => {
              const active = s.id === current;
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "true" : undefined}
                  className={`flex min-h-12 items-center gap-2 rounded-lg px-2 text-left text-body-md transition-colors active:bg-surface-container ${
                    active ? "font-semibold text-secondary" : "text-on-surface"
                  }`}
                >
                  <span className="min-w-0 flex-1">{s.title}</span>
                  {active && <Icon name="check" className="shrink-0 text-[18px]" />}
                </a>
              );
            })}
          </nav>
        </MobileSheet>
      )}
    </div>
  );
}

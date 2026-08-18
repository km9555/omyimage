"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";
import { topOf, type PagePlan } from "@/lib/pdf/images-to-pdf";

/**
 * Live preview of the laid-out pages.
 *
 * Runs off the exact `PagePlan[]` the exporter draws from, so what is on screen
 * and what lands in the PDF cannot disagree. Everything is expressed as a
 * percentage of the page box, which lets one CSS aspect-ratio container stand in
 * for any paper size without a second copy of the layout maths.
 *
 * Plans are in PDF coordinates (origin bottom-left); `topOf` flips each rect
 * into the top-down space the DOM works in.
 */
export function PagePreview({
  plans,
  thumbs,
  background,
  accent,
}: {
  plans: PagePlan[];
  /** Object URLs, index-aligned with the images the plans refer to. */
  thumbs: string[];
  /** Page fill, or null for "no background" (drawn as a checkerboard). */
  background: string | null;
  accent: string;
}) {
  const [page, setPage] = useState(0);
  const count = plans.length;

  // Options change the page count (N-up, adding files), which can strand the
  // viewer past the end of the deck.
  useEffect(() => {
    setPage((p) => (p > count - 1 ? Math.max(0, count - 1) : p));
  }, [count]);

  if (count === 0) return null;
  const plan = plans[Math.min(page, count - 1)];

  return (
    <section className="flex flex-col gap-2 rounded-xl border border-surface-variant bg-surface-container-lowest ambient-shadow p-4">
      <div className="flex items-center justify-between gap-3">
        <h2 className="flex items-center gap-2 text-body-md font-semibold text-primary">
          <Icon name="visibility" fill className="text-[18px]" style={{ color: accent }} />
          Preview
        </h2>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            aria-label="Previous page"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-on-surface-variant transition-colors hover:bg-surface-container disabled:opacity-30"
          >
            <Icon name="chevron_left" className="text-[20px]" />
          </button>
          <span className="text-label-sm font-label-sm tabular-nums text-on-surface-variant">
            {page + 1} / {count}
          </span>
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(count - 1, p + 1))}
            disabled={page >= count - 1}
            aria-label="Next page"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-on-surface-variant transition-colors hover:bg-surface-container disabled:opacity-30"
          >
            <Icon name="chevron_right" className="text-[20px]" />
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <div
          className="relative max-h-[46vh] w-auto max-w-full overflow-hidden rounded-sm shadow-md ring-1 ring-outline-variant/50"
          style={{
            aspectRatio: `${plan.width} / ${plan.height}`,
            // Height-first so a landscape page shrinks to fit rather than
            // overflowing the column; width follows from the aspect ratio.
            height: "46vh",
            ...(background
              ? { backgroundColor: background }
              : {
                  // Checkerboard = "no background", matching BackgroundPicker.
                  backgroundColor: "#fff",
                  backgroundImage:
                    "linear-gradient(45deg,#cbd5e1 25%,transparent 25%),linear-gradient(-45deg,#cbd5e1 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#cbd5e1 75%),linear-gradient(-45deg,transparent 75%,#cbd5e1 75%)",
                  backgroundSize: "12px 12px",
                  backgroundPosition: "0 0,0 6px,6px -6px,-6px 0",
                }),
          }}
        >
          {plan.items.map((item) => (
            // The slot clips, exactly as the PDF's clipping path does, so a
            // "cover" image cannot bleed into the neighbouring cell here either.
            <div
              key={item.index}
              className="absolute overflow-hidden"
              style={{
                left: `${(item.slot.x / plan.width) * 100}%`,
                top: `${(topOf(plan, item.slot) / plan.height) * 100}%`,
                width: `${(item.slot.w / plan.width) * 100}%`,
                height: `${(item.slot.h / plan.height) * 100}%`,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={thumbs[item.index]}
                alt=""
                className="absolute"
                style={{
                  // Positioned relative to the SLOT, so these percentages use
                  // the slot's dimensions rather than the page's.
                  left: `${((item.box.x - item.slot.x) / item.slot.w) * 100}%`,
                  top: `${((topOf(plan, item.box) - topOf(plan, item.slot)) / item.slot.h) * 100}%`,
                  width: `${(item.box.w / item.slot.w) * 100}%`,
                  height: `${(item.box.h / item.slot.h) * 100}%`,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-label-sm font-label-sm text-on-surface-variant">
        {Math.round(plan.width)} × {Math.round(plan.height)} pt
      </p>
    </section>
  );
}

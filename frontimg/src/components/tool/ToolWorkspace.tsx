"use client";

import type { ReactNode } from "react";
import { AdSlot } from "@/components/tool/AdSlot";

/**
 * The workspace every tool switches to once it holds a file.
 *
 * Replaces the `grid grid-cols-1 lg:grid-cols-[1fr_340px]` + hidden
 * `data-tool-active` marker that used to be copy-pasted into ~24 tool
 * components. It also owns that marker, which is what flips the page shell
 * full-bleed (see the `body:has([data-tool-active])` block in globals.css).
 *
 * Three columns from `2xl` up — reserved ad slot, files, settings rail — and
 * two below that, where the ad slot takes itself out of the layout entirely
 * (`display: none` means it is not a grid item, so the remaining tracks line
 * up without a separate rule). Below `lg` it all stacks.
 *
 * The gate is the stock `2xl` rather than an arbitrary `min-[…]`: Tailwind
 * sorts a custom min-width variant ahead of `xl`, so the two-column rule won
 * and the ad slot landed in the `1fr` track — the file column ended up 420px
 * wide with the rail pushed off-screen.
 *
 * The ad track is `(100% - var(--container-content)) / 2`: the same margin the
 * footer and SEO copy get from `max-w-content mx-auto`, so the file column
 * starts on the footer's left edge. Percentages in `grid-template-columns`
 * resolve against the grid container, which is the full-bleed workspace — that
 * is why this is not `100vw`, which would include the scrollbar.
 *
 * The horizontal padding lives HERE rather than on the page shell: the rail
 * has to reach the right edge of the viewport, so the shell's `px-gutter` is
 * zeroed while a tool is active and the columns re-apply it themselves.
 */
export function ToolWorkspace({
  main,
  rail,
}: {
  /** Middle column — the file tray, canvas or preview. */
  main: ReactNode;
  /** Right column. Expected to be a <SettingsRail>, which renders the <aside>. */
  rail: ReactNode;
}) {
  return (
    <section className="grid grid-cols-1 items-start lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] 2xl:grid-cols-[calc((100%-var(--container-content))/2)_1fr_420px]">
      <span data-tool-active hidden aria-hidden="true" />
      <AdSlot />
      <div className="flex min-w-0 flex-col gap-4 px-margin-mobile pt-stack-md pb-stack-lg md:px-gutter">
        {main}
      </div>
      {rail}
    </section>
  );
}

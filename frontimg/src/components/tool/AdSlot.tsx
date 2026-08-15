/**
 * Reserved — and deliberately empty — column on the left of a tool workspace.
 *
 * There is no ad network wired up yet; this exists so the space is already held
 * open and the layout does not shift the day one is dropped in. To fill it,
 * render the unit inside the inner box (or target `[data-ad-slot="tool-left"]`
 * from a loader script) — nothing else about the workspace has to change.
 *
 * WIDTH IS NOT SET HERE. The caller sizes the column to
 * `(100% - var(--container-content)) / 2` — the exact margin the footer and the
 * SEO copy get from their `max-w-content mx-auto` wrapper. That is what makes
 * the file column start on the same vertical line as the footer's logo instead
 * of on an arbitrary one. It is a percentage of the workspace rather than
 * `100vw` on purpose: `vw` includes the scrollbar, which would push everything
 * ~8px out of true.
 *
 * `pl-gutter` below is the page's own 24px gutter, so the unit does not sit
 * flush against the viewport edge.
 *
 * Only appears from `2xl` (1536px) up, where the reserved width works out at
 * (1536 - 1107) / 2 - 24 = 190px. Below that it is too narrow for even a wide
 * skyscraper, and taking the space would only squeeze the file grid.
 */
export function AdSlot({ className = "" }: { className?: string }) {
  return (
    <div
      data-ad-slot="tool-left"
      aria-hidden="true"
      className={`hidden pl-gutter 2xl:block ${className}`}
    >
      {/* Fills the reserved width up to a 300 × 600 half-page — so a 160 × 600
          wide skyscraper fits at 1536px and a 300 × 600 once the viewport is
          wide enough to afford it. Sticky, so the unit follows the reader down
          a long file list the way the settings rail does. */}
      <div className="sticky top-20 h-[600px] w-full max-w-[300px]" />
    </div>
  );
}

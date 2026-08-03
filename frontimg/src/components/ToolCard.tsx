import type { CSSProperties } from "react";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { toolColor, toolColorTint, type Tool } from "@/lib/tools";

export function ToolCard({ tool }: { tool: Tool }) {
  const color = toolColor(tool);

  const inner = (
    <>
      {/* Header row: icon + title (heart overlay sits top-right, added by the grid) */}
      <div className="flex items-center gap-2.5 pr-7">
        <span
          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[var(--tint)]"
          style={{ "--tint": toolColorTint(tool, "1F") } as CSSProperties}
        >
          <Icon name={tool.icon} bold style={{ color, fontSize: 22 }} />
        </span>
        <h3 className="text-body-md font-bold text-primary leading-tight">{tool.name}</h3>
      </div>
      <p className="mt-2 text-label-sm font-label-sm text-on-surface-variant leading-snug line-clamp-2 min-h-[2.5em]">
        {tool.shortDescription}
      </p>
      {tool.status === "planned" && (
        <span className="mt-2 inline-block self-start rounded-full bg-surface-container px-2.5 py-0.5 text-label-sm font-label-sm text-on-surface-variant">
          Coming soon
        </span>
      )}
      {/* Premium = icon only (no pill) in the corner, so it never changes card
          height. Hover shows the native tooltip explaining the daily limit. */}
      {tool.status !== "planned" && tool.premium && (
        <span
          title="Premium tool — Free plan includes a limited number per day"
          aria-label="Premium tool"
          className="absolute bottom-2.5 right-2.5 inline-flex items-center justify-center w-5 h-5 rounded-md bg-secondary/15 text-on-secondary-fixed-variant"
        >
          <Icon name="workspace_premium" fill className="text-[14px]" />
        </span>
      )}
    </>
  );

  const cardClass =
    "group relative bg-surface-container-lowest border border-surface-variant rounded-lg p-4 flex flex-col items-stretch text-left ambient-shadow";

  if (tool.status === "live") {
    return (
      <Link
        href={`/${tool.slug}`}
        className={`${cardClass} hover-lift hover:border-secondary/50`}
      >
        {inner}
      </Link>
    );
  }

  return (
    <div className={`${cardClass} opacity-70`} aria-disabled="true">
      {inner}
    </div>
  );
}

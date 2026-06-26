import type { CSSProperties } from "react";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { toolColor, toolColorTint, type Tool } from "@/lib/tools";

export function ToolCard({ tool }: { tool: Tool }) {
  const color = toolColor(tool);

  const inner = (
    <>
      <div
        className="w-[72px] h-[72px] rounded-full flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-[var(--tint)]"
        style={{ "--tint": toolColorTint(tool, "1F") } as CSSProperties}
      >
        <Icon name={tool.icon} bold style={{ color, fontSize: 45 }} />
      </div>
      <h3 className="text-body-lg font-bold text-primary mb-1">{tool.name}</h3>
      <p className="text-label-sm font-label-sm text-on-surface-variant leading-relaxed min-h-[2.6rem]">
        {tool.shortDescription}
      </p>
      {tool.premium && (
        <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-secondary/15 px-2.5 py-0.5 text-label-sm font-label-sm font-semibold text-on-secondary-fixed-variant">
          <Icon name="workspace_premium" className="text-[13px]" />
          Premium
        </span>
      )}
      {tool.status === "planned" && (
        <span className="mt-auto pt-3 inline-block rounded-full bg-surface-container px-2.5 py-0.5 text-label-sm font-label-sm text-on-surface-variant">
          Coming soon
        </span>
      )}
    </>
  );

  const cardClass =
    "group bg-surface-container-lowest border border-surface-variant rounded-lg p-6 flex flex-col items-center text-center ambient-shadow";

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

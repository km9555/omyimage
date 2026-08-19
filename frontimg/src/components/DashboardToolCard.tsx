"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { toolColor, toolColorTint, isPremiumTool, type Tool } from "@/lib/tools";
import { planAllowanceLabel } from "@/lib/plan-limits";

/**
 * Wide tool row for the dashboard's "All tools" grid.
 *
 * The sibling of QuickAccessCard, which is the small square used for Favorites
 * and Last used. Same props on purpose so either can be swapped into a grid.
 */
export function DashboardToolCard({
  tool,
  favorited,
  onToggleFavorite,
  plan,
}: {
  tool: Tool;
  favorited: boolean;
  onToggleFavorite: (slug: string) => void;
  /** Signed-in plan, so the premium tooltip quotes the right allowance. */
  plan?: string | null;
}) {
  const color = toolColor(tool);

  return (
    <div className="group relative">
      <Link
        href={`/${tool.slug}`}
        className="flex items-center gap-3 rounded-xl border border-surface-variant bg-surface-container-lowest p-4 pr-10 ambient-shadow hover:border-secondary/50 hover:-translate-y-0.5 transition-all duration-200"
      >
        <span
          className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[var(--tint)]"
          style={{ "--tint": toolColorTint(tool, "1F") } as CSSProperties}
        >
          <Icon name={tool.icon} bold style={{ color, fontSize: 23 }} />
        </span>
        <span className="min-w-0">
          <span className="flex items-center gap-1">
            <span className="text-body-md font-semibold text-primary truncate">{tool.name}</span>
            {isPremiumTool(tool) && (
              <span
                title={`Runs on our server — ${planAllowanceLabel(plan)}`}
                className="shrink-0 inline-flex items-center"
              >
                <Icon name="workspace_premium" className="text-[14px] text-chip-amber-ink" />
              </span>
            )}
          </span>
          <span className="block text-label-sm font-label-sm text-on-surface-variant truncate">
            {tool.shortDescription}
          </span>
        </span>
      </Link>

      <button
        type="button"
        onClick={(e) => {
          // The card is a Link; without this the favourite toggle navigates.
          e.preventDefault();
          e.stopPropagation();
          onToggleFavorite(tool.slug);
          toast(favorited ? "Removed from Favorites" : "Added to Favorites", {
            description: tool.name,
            icon: favorited ? "♡" : "❤️",
            duration: 2000,
          });
        }}
        aria-label={favorited ? `Remove ${tool.name} from favorites` : `Add ${tool.name} to favorites`}
        aria-pressed={favorited}
        className="absolute top-2.5 right-2.5 grid place-items-center w-7 h-7 rounded-full hover:bg-surface-container transition-colors"
      >
        <Icon
          name="favorite"
          fill={favorited}
          className={`text-[20px] transition-colors ${
            favorited ? "text-secondary" : "text-on-surface-variant/30 group-hover:text-on-surface-variant/60"
          }`}
        />
      </button>
    </div>
  );
}

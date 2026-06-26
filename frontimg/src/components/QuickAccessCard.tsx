"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { toolColor, toolColorTint, type Tool } from "@/lib/tools";

export function QuickAccessCard({
  tool,
  favorited,
  onToggleFavorite,
}: {
  tool: Tool;
  favorited: boolean;
  onToggleFavorite: (slug: string) => void;
}) {
  const color = toolColor(tool);

  return (
    <div className="group relative w-[130px] shrink-0">
      <Link
        href={`/${tool.slug}`}
        className="flex flex-col items-center gap-2.5 rounded-2xl border border-surface-variant bg-surface-container-lowest p-3 pt-4 pb-3.5 ambient-shadow hover:border-secondary/50 hover:-translate-y-0.5 transition-all duration-200"
      >
        <span
          className="w-[60px] h-[60px] rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[var(--tint)]"
          style={{ "--tint": toolColorTint(tool, "1F") } as CSSProperties}
        >
          <Icon name={tool.icon} bold style={{ color, fontSize: 30 }} />
        </span>
        <span className="flex items-center justify-center min-h-[2.5em] text-label-md font-medium text-primary text-center leading-tight line-clamp-2 w-full px-0.5">
          {tool.name}
        </span>
      </Link>

      <button
        type="button"
        onClick={(e) => {
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
        className="absolute top-2 right-2 grid place-items-center w-6 h-6 rounded-full hover:bg-surface-container transition-colors"
      >
        <Icon
          name="favorite"
          fill={favorited}
          className={`text-[16px] transition-colors ${
            favorited
              ? "text-secondary/60"
              : "text-on-surface-variant/30 group-hover:text-on-surface-variant/60"
          }`}
        />
      </button>
    </div>
  );
}

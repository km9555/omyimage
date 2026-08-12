"use client";

import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { HomeLauncher } from "@/components/HomeLauncher";
import { ToolCard } from "@/components/ToolCard";
import { QuickAccessCard } from "@/components/QuickAccessCard";
import { TOOLS } from "@/lib/tools";
import { CATEGORY_PILLS as PILLS } from "@/lib/tool-categories";
import { useFavoriteTools } from "@/lib/useToolPrefs";

const PILL_ICONS: Record<string, string> = {
  all:      "apps",
  optimize: "compress",
  convert:  "swap_horiz",
  edit:     "edit",
  ai:       "auto_awesome",
};

export function ToolDirectory() {
  const [activePill, setActivePill] = useState("all");
  const { favorites, favoriteSlugs, toggle } = useFavoriteTools();

  // Activate the matching category pill when the page loads with a #cat-* fragment
  useEffect(() => {
    const apply = () => {
      const match = /^#cat-(.+)$/.exec(window.location.hash);
      if (match && PILLS.some((p) => p.id === match[1])) {
        setActivePill(match[1]);
        document.getElementById("tools")?.scrollIntoView({ behavior: "smooth" });
      }
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  const pill = PILLS.find((p) => p.id === activePill) ?? PILLS[0];

  // Search lives in the header (HeaderSearch); this grid only filters by pill.
  const tools = useMemo(
    () => TOOLS.filter(pill.match).sort((a, b) => a.priority - b.priority),
    [pill],
  );

  return (
    <>
      {/* Hero — upload-first launcher */}
      <HomeLauncher />

      {/* Favorites row */}
      {favorites.length > 0 && (
        <div id="tools" className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-10">
          <p className="text-center text-label-md font-semibold text-on-surface mb-4">
            Favorites
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {favorites.map((tool) => (
              <QuickAccessCard
                key={tool.id}
                tool={tool}
                favorited
                onToggleFavorite={(slug) => toggle(slug)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Category pills */}
      <div
        id={favorites.length === 0 ? "tools" : undefined}
        className="max-w-content mx-auto px-margin-mobile md:px-gutter mt-10"
      >
        {/* Never `justify-center` here: once the pills overflow, a centered
            flex container clips the leading pill off the left edge where no
            amount of scrolling can reach it. */}
        <div
          className="flex min-w-0 items-center gap-1.5 overflow-x-auto [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none" }}
        >
          {PILLS.map((p) => {
            const active = p.id === activePill;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setActivePill(p.id)}
                className={`flex shrink-0 cursor-pointer items-center gap-1.5 px-3.5 py-2 rounded-lg text-[13.5px] font-medium transition-all ${
                  active
                    ? "bg-secondary text-on-secondary shadow-md shadow-secondary/25"
                    : "bg-surface-container-lowest border border-surface-variant text-on-surface-variant hover:border-secondary/40 hover:text-primary"
                }`}
              >
                {PILL_ICONS[p.id] && (
                  <Icon name={PILL_ICONS[p.id]} className="text-[15px]" />
                )}
                {p.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tools grid */}
      <section className="max-w-content mx-auto px-margin-mobile md:px-gutter py-10">
        {tools.length > 0 ? (
          /* 2 → 3 → 4 columns. The old ramp jumped straight from 2 to 4 at
             `lg`, which meant 408px-wide cards at 900px and 225px ones at
             1024. The 3-up step covers that gap; 4-up resumes at `xl`, so
             every laptop from 1280 CSS px upward sees the same 4×250 grid. */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5">
            {tools.map((tool) => (
              <div key={tool.id} className="group/card relative">
                <ToolCard tool={tool} />
                {tool.status === "live" && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      const isFav = favoriteSlugs.has(tool.slug);
                      toggle(tool.slug);
                      toast(isFav ? "Removed from Favorites" : "Added to Favorites", {
                        description: tool.name,
                        icon: isFav ? "♡" : "❤️",
                        duration: 2000,
                      });
                    }}
                    aria-label={favoriteSlugs.has(tool.slug) ? `Remove ${tool.name} from favorites` : `Add ${tool.name} to favorites`}
                    aria-pressed={favoriteSlugs.has(tool.slug)}
                    className="absolute top-2.5 right-2.5 grid place-items-center w-7 h-7 rounded-full hover:bg-surface-container transition-colors"
                  >
                    <Icon
                      name="favorite"
                      fill={favoriteSlugs.has(tool.slug)}
                      className={`text-[20px] transition-colors ${
                        favoriteSlugs.has(tool.slug)
                          ? "text-secondary"
                          : "text-on-surface-variant/30 group-hover/card:text-on-surface-variant/60"
                      }`}
                    />
                  </button>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-body-lg text-on-surface-variant py-16">
            No tools in {pill.label} yet.
          </p>
        )}
      </section>
    </>
  );
}

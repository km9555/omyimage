"use client";

import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
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
  const [query, setQuery] = useState("");
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

  const normalized = query.trim().toLowerCase();
  const pill = PILLS.find((p) => p.id === activePill) ?? PILLS[0];

  const tools = useMemo(() => {
    return TOOLS.filter(pill.match)
      .filter(
        (t) =>
          normalized === "" ||
          t.name.toLowerCase().includes(normalized) ||
          t.shortDescription.toLowerCase().includes(normalized) ||
          t.primaryKeyword.toLowerCase().includes(normalized)
      )
      .sort((a, b) => a.priority - b.priority);
  }, [pill, normalized]);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface-container-low text-center px-margin-mobile md:px-gutter py-10 md:py-14">
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 40%, var(--color-secondary) 0%, transparent 55%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-display-lg-mobile md:text-display-lg font-black tracking-tight text-primary mb-8">
            Effortless Power for Image Workflows.
          </h1>

          {/* Search */}
          <div className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant rounded-full max-w-xl mx-auto pl-5 pr-2 py-2 focus-within:border-secondary/70 focus-within:shadow-[0_0_0_4px_color-mix(in_srgb,var(--color-secondary)_18%,transparent)] transition-all duration-200">
            <Icon name="search" className="text-secondary/80 text-[20px] shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Search ${TOOLS.length}+ tools — try "compress" or "resize"…`}
              aria-label="Search tools"
              className="flex-1 bg-transparent outline-none text-body-md text-primary placeholder:text-on-surface-variant/60 min-w-0"
            />
            <button
              type="button"
              className="shrink-0 bg-secondary hover:bg-secondary-container text-on-secondary text-label-sm font-label-sm font-semibold uppercase tracking-wide px-5 py-2 rounded-full transition-colors"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Favorites row */}
      {favorites.length > 0 && (
        <div id="tools" className="max-w-[1230px] mx-auto px-margin-mobile md:px-gutter pt-10">
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

      {/* Category pills — contained strip with curved edges */}
      <div id={favorites.length === 0 ? "tools" : undefined} className="max-w-[1230px] mx-auto px-margin-mobile md:px-gutter mt-10">
        <div className="bg-surface-container-lowest border border-surface-variant rounded-2xl py-3 px-4">
        <div className="flex items-center justify-center gap-1.5 overflow-x-auto [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: "none" }}>
          {PILLS.map((p) => {
            const active = p.id === activePill;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setActivePill(p.id)}
                className={`flex shrink-0 cursor-pointer items-center gap-1.5 px-4 py-1 rounded-full text-[13.5px] font-medium transition-all ${
                  active
                    ? "bg-secondary text-on-secondary shadow-md shadow-secondary/25"
                    : "border border-surface-variant text-on-surface-variant hover:border-secondary/40 hover:text-primary hover:bg-surface-container"
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
      </div>

      {/* Tools grid */}
      <section className="max-w-[1230px] mx-auto px-margin-mobile md:px-gutter py-10">
        {tools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
            No tools match &ldquo;{query}&rdquo;.
          </p>
        )}
      </section>
    </>
  );
}

"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { HomeLauncher } from "@/components/HomeLauncher";
import { ToolCard } from "@/components/ToolCard";
import { QuickAccessCard } from "@/components/QuickAccessCard";
import { TOOLS, liveToolCount, type Tool } from "@/lib/tools";
import { toolShippedIn } from "@/i18n/status";
import { CATEGORY_PILLS as PILLS } from "@/lib/tool-categories";
import { useFavoriteTools } from "@/lib/useToolPrefs";
import { useLocale, useT } from "@/i18n/I18nScope";
import { localeHref, toolHref } from "@/lib/i18n/links";
import { presetLabel, toolName } from "@/lib/i18n/tool-labels";

const PILL_ICONS: Record<string, string> = {
  all:      "apps",
  optimize: "compress",
  convert:  "swap_horiz",
  edit:     "edit",
  gif:      "gif_box",
  ai:       "auto_awesome",
};

type PresetLink = {
  id: string;
  href: string;
  /** Full visible text; for a size preset, "50 KB". */
  label: string;
  /** Set for size presets, so the number and the unit can be styled apart. */
  size?: { num: number; unit: string };
};

/**
 * Renders only on the home page, inside HomeShell's <I18nScope>, so its keys
 * live in dictionaries/<loc>/pages/home.ts rather than common.ts.
 */
export function ToolDirectory() {
  const t = useT();
  const locale = useLocale();
  const [activePill, setActivePill] = useState("all");
  const { favorites, favoriteSlugs, toggle } = useFavoriteTools();
  const pillRowRef = useRef<HTMLDivElement>(null);
  const [pillFade, setPillFade] = useState({ left: false, right: false });

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

  // Edge fades on the pill row, only while there is more to scroll to. Six
  // pills overflow a phone in every locale (~620 px in English, ~790 in
  // Russian), and without a fade the row reads as if it ends at the screen
  // edge. Starts false/false so the server HTML and first render agree.
  useEffect(() => {
    const row = pillRowRef.current;
    if (!row) return;
    const update = () => {
      const left = row.scrollLeft > 1;
      const right = row.scrollLeft + row.clientWidth < row.scrollWidth - 1;
      setPillFade((prev) => (prev.left === left && prev.right === right ? prev : { left, right }));
    };
    update();
    row.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(row);
    return () => {
      row.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, [locale]);

  // Keep the active pill inside the row's visible width (a #cat-ai link on a
  // phone would otherwise select a pill that sits off-screen). Horizontal
  // scrollLeft only: scrollIntoView() could also scroll the PAGE, fighting
  // the smooth scroll to #tools above.
  useEffect(() => {
    const row = pillRowRef.current;
    const pill = row?.querySelector<HTMLElement>(`[data-pill="${activePill}"]`);
    if (!row || !pill) return;
    const start = pill.offsetLeft;
    const end = start + pill.offsetWidth;
    if (start < row.scrollLeft) {
      row.scrollTo({ left: Math.max(0, start - 24), behavior: "smooth" });
    } else if (end > row.scrollLeft + row.clientWidth) {
      row.scrollTo({ left: end - row.clientWidth + 40, behavior: "smooth" });
    }
  }, [activePill]);

  const selectPill = (id: string) => {
    setActivePill(id);
    // Mirror the choice in the URL with the same #cat-<id> fragment the tool
    // pages' breadcrumbs link to, so a reload or a shared link keeps the tab.
    // replaceState fires no `hashchange` (the listener above stays idle) and
    // adds no history entry, so Back still leaves the page.
    const { pathname, search } = window.location;
    window.history.replaceState(null, "", id === "all" ? pathname + search : `${pathname}${search}#cat-${id}`);
  };

  const pill = PILLS.find((p) => p.id === activePill) ?? PILLS[0];

  // Search lives in the header (HeaderSearch); this grid only filters by pill.
  // `homeGrid !== false` keeps the long-tail format-pair converters off the
  // home page — they live on /image-converter. Without this the Convert pill
  // becomes forty near-identical cards.
  // Variants (compress-image-to-50kb …) are not cards either: fifteen
  // "Compress Image to …" cards read as repetition (owner, 2026-10-05). They
  // are listed as compact links under the grid instead — see `presetGroups`.
  const tools = useMemo(
    () =>
      TOOLS.filter((t) => t.homeGrid !== false && !t.parentId)
        .filter(pill.match)
        .sort((a, b) => a.priority - b.priority),
    [pill, locale],
  );

  // Variant families as short link chips — "Exact file size: 10 KB · 20 KB ·
  // …". Only variants shipped in this locale, so a chip never links out to an
  // English page. A preset with a size is shown as its size; the others use
  // their short preset label (falling back to the tool name).
  const presetGroups = useMemo(() => {
    const kbOf = (v: Tool) => {
      const p = v.preset ?? {};
      return typeof p.targetKb === "number" ? p.targetKb : typeof p.maxKb === "number" ? p.maxKb : null;
    };
    const link = (v: Tool): PresetLink => {
      const kb = kbOf(v);
      const href = toolHref(v, locale);
      if (kb === null) return { id: v.id, href, label: presetLabel(v, locale) };
      const size = kb >= 1000 ? { num: kb / 1000, unit: t("MB") } : { num: kb, unit: t("KB") };
      return { id: v.id, href, label: `${size.num} ${size.unit}`, size };
    };
    const variantsOf = (...parents: string[]) =>
      TOOLS.filter((v) => v.parentId && parents.includes(v.parentId) && v.status === "live" && toolShippedIn(v.id, locale))
        // Named presets first, then sizes from small to large.
        .sort((a, b) => (kbOf(a) ?? -1) - (kbOf(b) ?? -1) || a.priority - b.priority)
        .map(link);
    // Order matters: the panels flow down CSS columns, so the long size list
    // fills the first column and the short groups stack in the others.
    return [
      {
        id: "size",
        icon: "compress",
        title: t("Exact file size"),
        hint: t("Hit the exact size a form or upload asks for"),
        links: variantsOf("compress-image"),
      },
      {
        id: "social",
        icon: "aspect_ratio",
        title: t("Social and print sizes"),
        hint: t("Thumbnails, covers and print dimensions, ready to go"),
        links: variantsOf("resize-image"),
      },
      {
        id: "ai",
        icon: "auto_awesome",
        title: t("AI presets"),
        hint: t("Sharpen photos or swap the background in one click"),
        links: variantsOf("upscale-image", "remove-background"),
      },
      {
        id: "pdf",
        icon: "picture_as_pdf",
        title: t("PDF under a size limit"),
        hint: t("Scans and photos as a PDF that fits an upload cap"),
        links: variantsOf("image-to-pdf"),
      },
      {
        id: "id-photo",
        icon: "badge",
        title: t("Passport & ID Photos"),
        hint: t("Country-standard photo sizes, ready to print"),
        links: variantsOf("passport-photo-maker"),
      },
      {
        id: "quick",
        icon: "tune",
        title: t("Quick edits"),
        hint: t("Flip, split and other one-step jobs"),
        links: variantsOf("rotate-image", "split-image"),
      },
    ].filter((g) => g.links.length > 0);
  }, [locale, t]);

  const fade = pillFade.left || pillFade.right
    ? `linear-gradient(to right, ${pillFade.left ? "transparent 0, #000 2rem" : "#000 0"}, ${
        pillFade.right ? "#000 calc(100% - 2.5rem), transparent 100%" : "#000 100%"
      })`
    : undefined;
  const pillRowStyle: CSSProperties = {
    scrollbarWidth: "none",
    ...(fade ? { maskImage: fade, WebkitMaskImage: fade } : {}),
  };

  return (
    <>
      {/* Hero — upload-first launcher */}
      <HomeLauncher />

      {/*
        Trust strip. It inherits the job of the old "purpose band": Google's
        OAuth review has to see what this app is for and how it uses Google
        data WITHOUT scrolling past the tool grid, so this stays directly
        below the hero. The hero h1 carries the exact name; item 2 says what
        the app does; item 3 says Drive import is optional, reads only the
        files the visitor picks, and links to the privacy section. Keep all
        three true to lib/google-drive.ts if the Drive scope ever changes.
        It replaced a paragraph that repeated the hero sentence word for word.
      */}
      <section className="border-y border-surface-variant bg-surface-container-lowest px-margin-mobile md:px-gutter py-4">
        <ul className="max-w-content mx-auto grid gap-3 md:grid-cols-3 md:gap-6">
          <li className="flex items-start gap-3">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-secondary-fixed text-secondary">
              <Icon name="privacy_tip" className="text-[18px]" />
            </span>
            <p className="min-w-0 text-label-sm text-on-surface-variant">
              <span className="block text-body-sm font-semibold text-primary">{t("Private by default")}</span>
              {t("Most tools run in your browser, so your images never leave your device.")}
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-secondary-fixed text-secondary">
              <Icon name="apps" className="text-[18px]" />
            </span>
            <p className="min-w-0 text-label-sm text-on-surface-variant">
              <span className="block text-body-sm font-semibold text-primary">
                {t("{n} free image tools", { n: liveToolCount(locale) })}
              </span>
              {t("Compress, resize, convert, edit and make GIFs. No account needed.")}
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-secondary-fixed text-secondary">
              <Icon name="cloud" className="text-[18px]" />
            </span>
            <p className="min-w-0 text-label-sm text-on-surface-variant">
              <span className="block text-body-sm font-semibold text-primary">{t("Google Drive import is optional")}</span>
              {t("oMyImage reads only the files you pick and stores nothing on our servers.")}{" "}
              <Link
                href={localeHref("/privacy#google-drive", locale)}
                className="font-semibold text-secondary underline underline-offset-2 whitespace-nowrap"
              >
                {t("How we use Google data")}
              </Link>
            </p>
          </li>
        </ul>
      </section>

      {/* Favorites row */}
      {favorites.length > 0 && (
        <div id="tools" className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-10">
          <p className="text-center text-label-md font-semibold text-on-surface mb-4">
            {t("Favorites")}
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
        {/* The grid's cards are h3s; this keeps the outline h1 → h2 → h3. */}
        <h2 className="sr-only">{t("All tools")}</h2>
        {/* Never `justify-center` here: once the pills overflow, a centered
            flex container clips the leading pill off the left edge where no
            amount of scrolling can reach it. The p-1/-m-1 pair gives the
            focus ring room inside the scroll container's clip. */}
        <div
          ref={pillRowRef}
          role="group"
          aria-label={t("Tool categories")}
          className="relative -m-1 flex min-w-0 snap-x snap-proximity scroll-px-1 items-center gap-1.5 overflow-x-auto p-1 [&::-webkit-scrollbar]:hidden"
          style={pillRowStyle}
        >
          {PILLS.map((p) => {
            const active = p.id === activePill;
            return (
              <button
                key={p.id}
                type="button"
                data-pill={p.id}
                aria-pressed={active}
                aria-controls="tool-grid"
                onClick={() => selectPill(p.id)}
                className={`flex shrink-0 snap-start cursor-pointer items-center gap-1.5 rounded-lg border px-3.5 py-2 text-[13.5px] font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${
                  active
                    ? "border-secondary bg-secondary text-on-secondary shadow-md shadow-secondary/25"
                    : "border-surface-variant bg-surface-container-lowest text-on-surface-variant hover:border-secondary/40 hover:bg-surface-container-low hover:text-primary"
                }`}
              >
                {PILL_ICONS[p.id] && (
                  <Icon name={PILL_ICONS[p.id]} fill={active} className="text-[15px]" />
                )}
                {/* CATEGORY_PILLS is module scope (lib/tool-categories.ts) — §4.2. */}
                {t(p.label)}
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
          <div id="tool-grid" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5">
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
                      toast(isFav ? t("Removed from Favorites") : t("Added to Favorites"), {
                        description: toolName(tool, locale),
                        icon: isFav ? "♡" : "❤️",
                        duration: 2000,
                      });
                    }}
                    aria-label={
                      favoriteSlugs.has(tool.slug)
                        ? t("Remove {tool} from favorites", { tool: toolName(tool, locale) })
                        : t("Add {tool} to favorites", { tool: toolName(tool, locale) })
                    }
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
          <p id="tool-grid" className="text-center text-body-lg text-on-surface-variant py-16">
            {t("No tools in {category} yet.", { category: t(pill.label) })}
          </p>
        )}

        {/* Variants are hidden from the grid; these chips are how a visitor
            (and a crawler) reaches them from the home page. Panels sit in CSS
            columns rather than a grid: one group has fifteen chips and the
            rest two to six, and a grid row would stretch every short panel to
            the tallest one. The groups also differ per locale. */}
        {presetGroups.length > 0 && (
          <div
            id="presets"
            className="mt-12 rounded-2xl border border-surface-variant bg-surface-container-lowest p-5 ambient-shadow md:p-7"
          >
            <div className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary-fixed text-secondary">
                <Icon name="dashboard_customize" className="text-[22px]" />
              </span>
              <div className="min-w-0">
                <h2 className="text-headline-sm font-semibold text-primary">{t("Sizes and presets")}</h2>
                <p className="mt-1 text-body-md text-on-surface-variant">
                  {t("Shortcuts to the tools above, each set up for one job: a photo at exactly 50 KB, a YouTube thumbnail, a passport photo.")}
                </p>
              </div>
            </div>
            <div className="mt-6 -mb-4 gap-4 md:columns-2 xl:columns-3">
              {presetGroups.map((g) => (
                <div
                  key={g.id}
                  className="mb-4 break-inside-avoid rounded-xl border border-surface-variant bg-surface-container-low p-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-outline-variant/60 bg-surface-container-lowest text-secondary dark:bg-surface-container">
                      <Icon name={g.icon} className="text-[17px]" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-body-md font-semibold leading-snug text-primary">{g.title}</h3>
                      <p className="mt-0.5 text-body-sm text-on-surface-variant">{g.hint}</p>
                    </div>
                  </div>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {g.links.map((l) => (
                      <li key={l.id}>
                        <Link
                          href={l.href}
                          className="group/chip inline-flex items-baseline gap-1 rounded-full border border-outline-variant/60 bg-surface-container-lowest px-3 py-1.5 text-body-sm font-medium text-primary tabular-nums shadow-[0_1px_0_rgba(60,40,25,0.04)] transition-all duration-150 hover:-translate-y-px hover:border-secondary hover:text-secondary hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-container-low dark:bg-surface-container"
                        >
                          {l.size ? (
                            <>
                              <span className="font-semibold">{l.size.num}</span>{" "}
                              <span className="text-label-sm font-medium text-on-surface-variant transition-colors group-hover/chip:text-secondary">
                                {l.size.unit}
                              </span>
                            </>
                          ) : (
                            l.label
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* The format-pair converters are hidden from this grid, so the hub is
            how a visitor (and a crawler) reaches them from the home page. */}
        <div className="mt-8 text-center">
          <Link
            href={localeHref("/image-converter", locale)}
            className="inline-flex items-center gap-2 rounded-lg border border-outline-variant bg-surface-container-lowest px-5 py-3 text-body-md font-semibold text-primary hover-lift"
          >
            <Icon name="swap_horiz" className="text-[20px] text-secondary" />
            {t("Browse all image format converters")}
            <Icon name="arrow_forward" className="text-[18px]" />
          </Link>
        </div>
      </section>
    </>
  );
}

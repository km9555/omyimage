"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Logo } from "@/components/Logo";
import { CreditsBadge } from "@/components/CreditsBadge";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { NAV_SECTIONS, navSectionTools } from "@/lib/nav-sections";
import { searchTools } from "@/lib/tool-search";
import { TOOLS, toolColor, type Tool } from "@/lib/tools";
import { NavbarAuth } from "@/components/NavbarAuth";

/**
 * Mobile navigation drawer, ported from oMyPDF's MobileMenu.
 *
 * The account block is <NavbarAuth />, the same component the desktop header
 * uses, so the signed-in and signed-out states cannot drift between the two.
 *
 * It renders the same NAV_SECTIONS the desktop mega-menu does, so the two
 * cannot drift.
 */

/** One tool row — shared by the search results and the expanded category lists. */
function ToolRow({ tool, onNavigate }: { tool: Tool; onNavigate: () => void }) {
  return (
    <Link
      href={`/${tool.slug}`}
      onClick={onNavigate}
      className="flex items-center gap-2.5 rounded-lg px-2 py-2 text-body-md text-on-surface transition-colors hover:bg-surface-container active:bg-surface-container"
    >
      {/* Icon sits on the plain surface, as in the desktop mega-menu and the
          home page cards — no tinted plate behind it. */}
      <span className="flex h-7 w-7 shrink-0 items-center justify-center">
        <Icon name={tool.icon} bold className="text-[17px]" style={{ color: toolColor(tool) }} />
      </span>
      <span className="min-w-0 flex-1 truncate leading-tight">{tool.name}</span>
      {tool.status === "planned" && (
        <span className="shrink-0 rounded-full bg-surface-container px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-on-surface-variant/50">
          Soon
        </span>
      )}
    </Link>
  );
}

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);

  // Portal target only exists on the client.
  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll + close on Escape while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    setQuery("");
    setExpanded(null);
  };

  // Same ranked matcher the header search uses (name-prefix beats mid-name,
  // synonyms resolve).
  const results = useMemo(() => (query.trim() ? searchTools(query, TOOLS).slice(0, 8) : []), [query]);
  const searching = query.trim().length > 0;

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="flex h-9 w-9 items-center justify-center rounded-lg text-on-surface transition-colors hover:bg-surface-container"
      >
        <Icon name="menu" className="text-[24px]" />
      </button>

      {/* Overlay + drawer are portalled to <body> so the header's backdrop-blur
          (a containing block for fixed elements) doesn't trap them. */}
      {mounted &&
        createPortal(
          <div className="md:hidden">
            <div
              onClick={close}
              className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-[2px] transition-opacity duration-200 ${
                open ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              aria-hidden="true"
            />

            {/* div (no implicit ARIA role) so role="dialog" is valid; aria-label
                gives the dialog its accessible name. */}
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              className={`fixed right-0 top-0 z-[61] flex h-full w-[82%] max-w-[340px] flex-col border-l border-outline-variant bg-background shadow-2xl transition-transform duration-200 ease-out ${
                open ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {/* Header — brand + close */}
              <div className="flex h-14 shrink-0 items-center justify-between gap-2 border-b border-outline-variant px-4">
                <Link href="/" onClick={close} className="flex min-w-0 items-center gap-2">
                  <Logo className="h-7 w-7 shrink-0" />
                  <span className="truncate text-headline-md font-black tracking-tight">
                    <span className="text-primary">oMy</span>
                    <span className="text-secondary">Image</span>
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close menu"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-on-surface transition-colors hover:bg-surface-container"
                >
                  <Icon name="close" className="text-[24px]" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto overscroll-contain">
                {/* Account. NavbarAuth resolves to a Login button or an avatar
                    menu; the wrapper stretches the signed-out button to the
                    drawer width, which the header version doesn't want. */}
                <div className="flex justify-center border-b border-outline-variant px-4 py-4 [&>a]:w-full">
                  <NavbarAuth />
                </div>

                <div className="flex items-center justify-between gap-2 border-b border-outline-variant px-4 py-3">
                  <span className="text-body-sm text-on-surface-variant">Credits</span>
                  <CreditsBadge />
                </div>

                <div className="border-b border-outline-variant px-4 py-4">
                  <div className="relative">
                    <Icon
                      name="search"
                      className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[20px] text-on-surface-variant"
                    />
                    <input
                      type="search"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search tools…"
                      aria-label="Search tools"
                      // Suppress WebKit's built-in clear affordance — we render our own.
                      className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest py-2.5 pl-10 pr-9 text-body-md text-on-surface placeholder:text-on-surface-variant focus:border-secondary/60 focus:outline-none focus:ring-2 focus:ring-secondary/20 [&::-webkit-search-cancel-button]:appearance-none"
                    />
                    {searching && (
                      <button
                        type="button"
                        onClick={() => setQuery("")}
                        aria-label="Clear search"
                        className="absolute right-2 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container"
                      >
                        <Icon name="close" className="text-[16px]" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Search results replace the browse list while typing. */}
                {searching ? (
                  <div className="px-4 py-4">
                    {results.length > 0 ? (
                      <div className="flex flex-col">
                        {results.map((tool) => (
                          <ToolRow key={tool.id} tool={tool} onNavigate={close} />
                        ))}
                      </div>
                    ) : (
                      <p className="px-2 py-6 text-center text-body-md text-on-surface-variant">
                        No tools match “{query.trim()}”.
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="px-4 py-4">
                    <p className="px-1 pb-2 text-label-sm font-semibold uppercase tracking-wide text-on-surface-variant">
                      Browse tools
                    </p>

                    <Link
                      href="/#tools"
                      onClick={close}
                      className="flex items-center gap-2.5 rounded-lg px-2 py-2.5 text-body-md font-semibold text-on-surface transition-colors hover:bg-surface-container"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-secondary/10">
                        <Icon name="apps" bold className="text-[15px] text-secondary" />
                      </span>
                      All tools
                    </Link>

                    {/* Category accordions — tap to reveal that category's tools. */}
                    <div className="mt-1 flex flex-col">
                      {NAV_SECTIONS.map((section) => {
                        const isOpen = expanded === section.id;
                        return (
                          <div key={section.id}>
                            <button
                              type="button"
                              onClick={() => setExpanded(isOpen ? null : section.id)}
                              aria-expanded={isOpen}
                              className="flex w-full items-center gap-2.5 rounded-lg px-2 py-2.5 text-left text-body-md text-on-surface transition-colors hover:bg-surface-container"
                            >
                              <span
                                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md"
                                style={{ background: `${section.color}1A` }}
                              >
                                <Icon
                                  name={section.icon}
                                  className="text-[15px]"
                                  style={{ color: section.color }}
                                />
                              </span>
                              <span className="flex-1">{section.label}</span>
                              <Icon
                                name="expand_more"
                                className={`text-[20px] text-on-surface-variant transition-transform duration-200 ${
                                  isOpen ? "rotate-180" : ""
                                }`}
                              />
                            </button>

                            {isOpen && (
                              <div className="ml-4 flex flex-col border-l border-outline-variant/60 pl-2">
                                {navSectionTools(section).map((tool) => (
                                  <ToolRow key={tool.id} tool={tool} onNavigate={close} />
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-2 border-t border-outline-variant pt-2">
                      <Link
                        href="/pricing"
                        onClick={close}
                        className="flex items-center gap-2.5 rounded-lg px-2 py-2.5 text-body-md text-on-surface transition-colors hover:bg-surface-container"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-surface-container">
                          <Icon name="sell" className="text-[15px] text-on-surface-variant" />
                        </span>
                        Pricing
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Language — pinned below the scroll area; its menu already
                  opens upward so it is never clipped by the drawer edge. */}
              <div className="shrink-0 border-t border-outline-variant px-4 py-3">
                <p className="px-1 pb-2 text-label-sm font-semibold uppercase tracking-wide text-on-surface-variant">
                  Language
                </p>
                <LanguageSwitcher fullWidth />
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { DashboardToolCard } from "@/components/DashboardToolCard";
import { QuickAccessCard } from "@/components/QuickAccessCard";
import { useRequireAuth } from "@/lib/auth/useRequireAuth";
import { useFavoriteTools, useRecentTools } from "@/lib/useToolPrefs";
import { usePremiumUsage } from "@/lib/premium-usage";
import { CATEGORY_PILLS as PILLS } from "@/lib/tool-categories";
import { TOOLS } from "@/lib/tools";
import { searchTools } from "@/lib/tool-search";
import { planLabel, planAllowanceLabel, PLAN_MAX_UPLOAD_MB } from "@/lib/plan-limits";

/**
 * The signed-in home. Ported from oMyPDF, minus two panels it has and oMyImage
 * does not have anything to put in:
 *
 *   • <MyFiles /> — oMyImage has no saved-files/storage feature.
 *   • <UserStats /> — reads /api/me/stats, which counts oMyPDF jobs. Image
 *     tools are anonymous and unmetered by design, so that panel would render
 *     an empty chart forever. The plan card below shows the local AI-run count
 *     instead, which is a number we actually have.
 *
 * Everything else — favourites, recents, search, category pills — is backed by
 * lib/useToolPrefs and lib/tool-search, which oMyImage already had.
 */
export function DashboardClient() {
  const { user, profile, loading, signOut } = useRequireAuth();
  const router = useRouter();
  const [signingOut, setSigningOut] = useState(false);
  const [query, setQuery] = useState("");
  const [activePill, setActivePill] = useState("all");

  const recent = useRecentTools();
  const { favorites, favoriteSlugs, toggle } = useFavoriteTools();
  const usage = usePremiumUsage(profile?.plan);

  const pill = PILLS.find((p) => p.id === activePill) ?? PILLS[0];
  // Ranked, alias-aware search within the active pill; an empty query falls
  // back to priority order. Shared with the home page — see lib/tool-search.ts.
  const browseTools = useMemo(() => {
    const pool = TOOLS.filter((t) => t.status === "live").filter(pill.match);
    return searchTools(query, pool);
  }, [pill, query]);

  if (loading || !user) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <Icon name="progress_activity" className="animate-spin text-[28px] text-on-surface-variant" />
      </div>
    );
  }

  const email = user.email ?? "";
  const firstName = (user.name?.trim() || email.split("@")[0] || "there").split(" ")[0];
  const initial = (firstName[0] ?? email[0] ?? "?").toUpperCase();

  const plan = profile?.plan ?? "free";
  const label = planLabel(plan);
  const isFree = plan === "free";
  const maxUpload = PLAN_MAX_UPLOAD_MB[plan] ?? PLAN_MAX_UPLOAD_MB.free;

  const handleSignOut = () => {
    setSigningOut(true);
    signOut();
    toast.success("Signed out.");
    router.replace("/");
  };

  return (
    <div className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-lg pb-stack-lg flex flex-col gap-stack-lg">
      {/* Greeting */}
      <header className="flex flex-wrap items-center gap-4">
        <span className="w-14 h-14 rounded-full bg-secondary text-on-secondary flex items-center justify-center text-headline-md font-semibold shrink-0">
          {initial}
        </span>
        <div className="min-w-0 flex-1">
          <h1 className="text-headline-md font-semibold text-primary truncate">
            Welcome back, {firstName}
          </h1>
          <p className="text-body-md text-on-surface-variant truncate">
            Jump back into your image workflows.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/account"
            className="inline-flex items-center gap-2 rounded-lg border border-surface-variant bg-surface-container-lowest px-4 py-2 text-body-md font-semibold text-on-surface hover:bg-surface-container transition-colors"
          >
            <Icon name="account_circle" className="text-[20px]" />
            <span className="hidden sm:inline">Account</span>
          </Link>
          <button
            type="button"
            onClick={handleSignOut}
            disabled={signingOut}
            className="inline-flex items-center gap-2 rounded-lg border border-surface-variant bg-surface-container-lowest px-4 py-2 text-body-md font-semibold text-on-surface hover:bg-error-container hover:text-error hover:border-error transition-colors disabled:opacity-50"
          >
            <Icon name={signingOut ? "progress_activity" : "logout"} className={`text-[20px] ${signingOut ? "animate-spin" : ""}`} />
            <span className="hidden sm:inline">Sign out</span>
          </button>
        </div>
      </header>

      {/* Plan, allowance and today's AI usage */}
      <section className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-5 md:p-6 flex flex-wrap items-center gap-4">
        <span className="w-12 h-12 rounded-xl bg-chip-amber-bg flex items-center justify-center shrink-0">
          <Icon name="workspace_premium" fill className="text-[26px] text-chip-amber-ink" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="text-body-lg font-bold text-primary">{label} plan</span>
            {isFree && (
              <span className="rounded-full bg-surface-container px-2 py-0.5 text-label-sm font-label-sm text-on-surface-variant">
                Free
              </span>
            )}
          </div>
          <p className="text-body-md text-on-surface-variant">
            {planAllowanceLabel(plan)} · files up to {maxUpload} MB on our server
            {usage.ready && !usage.unlimited && usage.limit !== null && (
              <> · <strong className="text-on-surface">{usage.used}</strong> used today</>
            )}
          </p>
          <p className="text-label-sm font-label-sm text-on-surface-variant mt-1">
            Everything that runs in your browser stays unlimited and uncounted.
          </p>
        </div>
        {isFree ? (
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 rounded-full bg-secondary text-on-secondary font-semibold px-5 py-2.5 shadow-md shadow-secondary/30 hover:shadow-lg hover:shadow-secondary/40 hover:-translate-y-px transition-all duration-200"
          >
            <Icon name="rocket_launch" className="text-[20px]" />
            See plans
          </Link>
        ) : (
          <span className="inline-flex items-center gap-2 text-body-md font-semibold text-secondary">
            <Icon name="check_circle" fill className="text-[20px]" />
            You&apos;re on {label}
          </span>
        )}
      </section>

      {/* Favorites */}
      {favorites.length > 0 && (
        <section className="flex flex-col gap-3">
          <h2 className="text-headline-md font-semibold text-primary">Favorites</h2>
          <div className="flex flex-wrap gap-3">
            {favorites.map((t) => (
              <QuickAccessCard key={t.id} tool={t} favorited onToggleFavorite={toggle} />
            ))}
          </div>
        </section>
      )}

      {/* Last used */}
      {recent.length > 0 && (
        <section className="flex flex-col gap-3">
          <h2 className="text-headline-md font-semibold text-primary">Last used</h2>
          <div className="flex gap-3 overflow-x-auto pb-1">
            {recent.map((t) => (
              <QuickAccessCard
                key={t.id}
                tool={t}
                favorited={favoriteSlugs.has(t.slug)}
                onToggleFavorite={toggle}
              />
            ))}
          </div>
        </section>
      )}

      {/* Browse all */}
      <section className="flex flex-col gap-stack-md">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-headline-md font-semibold text-primary">All tools</h2>
          <div className="flex items-center gap-2 bg-surface-container-lowest border border-surface-variant rounded-full pl-4 pr-2 py-1.5 focus-within:border-secondary/70 transition-colors">
            <Icon name="search" className="text-on-surface-variant/70 text-[20px] shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tools…"
              aria-label="Search tools"
              className="bg-transparent outline-none text-body-md text-primary placeholder:text-on-surface-variant/60 w-40 sm:w-52"
            />
          </div>
        </div>

        {favorites.length === 0 && (
          <p className="text-label-sm font-label-sm text-on-surface-variant -mt-1">
            Tip: tap the <Icon name="favorite" className="text-[15px] align-text-bottom" /> on any tool card to add it to Favorites.
          </p>
        )}

        <div className="flex flex-wrap items-center gap-2">
          {PILLS.map((p) => {
            const active = p.id === activePill;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setActivePill(p.id)}
                className={`px-4 py-1.5 rounded-lg text-label-md font-medium transition-all ${
                  active
                    ? "bg-secondary text-on-secondary shadow-md shadow-secondary/25"
                    : "border border-surface-variant text-on-surface-variant hover:border-secondary/40 hover:text-primary hover:bg-surface-container"
                }`}
              >
                {p.label}
              </button>
            );
          })}
        </div>

        {browseTools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {browseTools.map((t) => (
              <DashboardToolCard
                key={t.id}
                tool={t}
                favorited={favoriteSlugs.has(t.slug)}
                onToggleFavorite={toggle}
                plan={plan}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-body-md text-on-surface-variant py-10">
            No tools match “{query}”.
          </p>
        )}
      </section>
    </div>
  );
}

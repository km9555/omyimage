"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { useRequireAdmin } from "@/lib/auth/useRequireAdmin";
import { apiFetch } from "@/lib/api";
import { AdminGate } from "../AdminGate";
import { AdminHeader, BarAxis, Card, MiniBars, RankList, StatTile, niceTool } from "../admin-ui";

interface Stats {
  uniqueUsers: number;
  uniqueAnon: number;
  tools: { tool: string; type: string; count: number }[];
  daily: { day: string; runs: number; visits: number }[];
  surfaces: { surface: string; count: number }[];
}

export function AdminAnalyticsClient() {
  const { loading, user, isAdmin } = useRequireAdmin();
  const [stats, setStats] = useState<Stats | null>(null);
  const [loadingStats, setLoadingStats] = useState(true);
  const [forbidden, setForbidden] = useState(false);

  const load = useCallback(async () => {
    setLoadingStats(true);
    try {
      const res = await apiFetch("/api/image/admin/stats");
      if (res.status === 403) { setForbidden(true); return; }
      if (!res.ok) throw new Error("load failed");
      setStats(await res.json() as Stats);
    } catch {
      toast.error("Could not load analytics.");
    } finally {
      setLoadingStats(false);
    }
  }, []);

  useEffect(() => {
    if (!loading && isAdmin) void load();
  }, [loading, isAdmin, load]);

  const runs = stats?.tools.filter((t) => t.type === "run") ?? [];
  const topTools = [...runs].sort((a, b) => b.count - a.count).slice(0, 12);
  const totalRuns = runs.reduce((n, t) => n + t.count, 0);

  return (
    <AdminGate loading={loading} user={user} isAdmin={isAdmin && !forbidden}>
      <div className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md pb-16 flex flex-col gap-stack-md">
        <AdminHeader
          title="Analytics"
          right={
            <Link
              href="/admin/traffic"
              className="inline-flex items-center gap-1 text-sm font-semibold text-secondary hover:underline"
            >
              Site traffic <Icon name="arrow_forward" className="text-[16px]" />
            </Link>
          }
        />

        {loadingStats ? (
          <div className="py-20 flex justify-center">
            <Icon name="progress_activity" className="animate-spin text-[24px] text-on-surface-variant" />
          </div>
        ) : !stats ? (
          <p className="text-body-md text-on-surface-variant py-16 text-center">No data yet.</p>
        ) : (
          <>
            <div className="grid gap-3 sm:grid-cols-3">
              <StatTile icon="bolt" label="Total tool runs" value={totalRuns} hint="visitors who allowed analytics" />
              <StatTile icon="group" label="Signed-in users seen" value={stats.uniqueUsers} hint="all time" />
              {/* Not unique visitors: the anonymous hash rotates daily, so one
                  person on ten days counts ten times. The Traffic page has real
                  per-day visitor counts, for every page rather than just tools. */}
              <StatTile
                icon="person"
                label="Visitor-days on tool pages"
                value={stats.uniqueAnon}
                hint="all time · daily visitors are on Traffic"
              />
            </div>

            <Card title="Tool runs · last 30 days">
              <MiniBars
                emptyText="No activity recorded yet."
                bars={stats.daily.map((d) => ({
                  key: d.day,
                  value: d.runs,
                  title: `${d.day}: ${d.runs} runs, ${d.visits} tool-page visits`,
                }))}
              />
              <BarAxis days={stats.daily.map((d) => d.day)} />
              <p className="text-sm text-on-surface-variant">
                Bar height is tool runs per day. Hover a bar for the exact figures.
              </p>
            </Card>

            <Card title="Most-used tools">
              <RankList
                emptyText="No runs recorded yet."
                rows={topTools.map((t) => ({ key: t.tool, label: niceTool(t.tool), count: t.count }))}
              />
            </Card>

            <Card title="Where work runs">
              <div className="flex flex-wrap gap-2">
                {stats.surfaces.map((s) => (
                  <span
                    key={s.surface}
                    className="rounded-full bg-chip-amber-bg px-3 py-1 text-label-sm font-label-sm font-semibold capitalize text-chip-amber-ink"
                  >
                    {s.surface}: {s.count.toLocaleString()}
                  </span>
                ))}
              </div>
              <p className="text-sm text-on-surface-variant">
                &quot;client&quot; runs happen entirely in the browser and never reach the server.
              </p>
            </Card>
          </>
        )}
      </div>
    </AdminGate>
  );
}

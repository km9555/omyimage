"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Icon } from "@/components/Icon";
import { useRequireAdmin } from "@/lib/auth/useRequireAdmin";
import { apiFetch } from "@/lib/api";
import { AdminGate } from "./AdminGate";
import { BarAxis, Card, MiniBars, StatTile, fmt } from "./admin-ui";

interface StorageHealth {
  disk: { path: string; totalBytes: number; freeBytes: number; usedPct: number } | null;
  store: { files: number; bytes: number };
}

function gb(bytes: number): string {
  return `${(bytes / 1024 ** 3).toFixed(1)} GB`;
}

/**
 * Disk banner. Lives on the admin landing page rather than inside a sub-page
 * because every admin passes through here — a warning nobody navigates to is a
 * warning nobody sees.
 */
function StorageBanner() {
  const [health, setHealth] = useState<StorageHealth | null>(null);

  const load = useCallback(async () => {
    try {
      const res = await apiFetch("/api/image/admin/storage");
      if (res.ok) setHealth((await res.json()) as StorageHealth);
    } catch {
      /* non-critical — the banner just stays hidden */
    }
  }, []);

  useEffect(() => { void load(); }, [load]);

  const disk = health?.disk;
  if (!disk) return null;

  const critical = disk.usedPct >= 90;
  const warn = disk.usedPct >= 80;
  const tone = critical
    ? "bg-error-container text-on-error-container"
    : warn
      ? "bg-chip-amber-bg text-chip-amber-ink"
      : "bg-surface-container text-on-surface-variant";

  return (
    <div className={`flex flex-wrap items-center gap-x-6 gap-y-1 rounded-xl px-4 py-3 ${tone}`}>
      <span className="inline-flex items-center gap-2 text-sm font-medium">
        <Icon name={critical || warn ? "warning" : "hard_drive"} className="text-[18px]" />
        Disk {disk.usedPct}% used
      </span>
      <span className="text-sm">{gb(disk.freeBytes)} free of {gb(disk.totalBytes)}</span>
      <span className="text-sm">
        {health.store.files.toLocaleString()} stored results · {gb(health.store.bytes)}
      </span>
      {critical && (
        <span className="text-sm font-semibold">
          Saves are being refused — run the sweep and check for stranded scratch dirs.
        </span>
      )}
    </div>
  );
}

interface Overview {
  visitors: {
    today: number;
    yesterday: number;
    pageviewsToday: number;
    daily: { day: string; visitors: number; pageviews: number }[];
  } | null;
  signups: {
    today: number;
    yesterday: number;
    last7: number;
    prev7: number;
    total: number;
    daily: { day: string; count: number }[];
  };
  paying: number;
  granted: number;
  runs: { today: number; yesterday: number };
}

/**
 * Headline numbers and two 30-day trends. One request (GET /api/image/admin/overview);
 * if it fails the landing page simply shows the cards without them.
 */
function OverviewPanel() {
  const [o, setO] = useState<Overview | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    void (async () => {
      try {
        const res = await apiFetch("/api/image/admin/overview");
        if (!res.ok) throw new Error("overview failed");
        setO((await res.json()) as Overview);
      } catch {
        setFailed(true);
      }
    })();
  }, []);

  if (failed) return null;
  if (!o) {
    return (
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-5" aria-busy="true">
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i} className="h-28 animate-pulse rounded-xl bg-surface-container" />
        ))}
      </div>
    );
  }

  const v = o.visitors;
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
        <StatTile
          icon="person"
          label="Visitors today"
          value={v ? v.today : "—"}
          {...(v
            ? { delta: { current: v.today, previous: v.yesterday, label: "vs yesterday" } }
            : { hint: "Run migration img_006" })}
        />
        <StatTile icon="visibility" label="Page views today" value={v ? v.pageviewsToday : "—"} hint="visitors who allowed analytics" />
        <StatTile
          icon="person_add"
          label="Sign-ups (7 days)"
          value={o.signups.last7}
          delta={{ current: o.signups.last7, previous: o.signups.prev7, label: "vs prior week" }}
        />
        <StatTile
          icon="workspace_premium"
          label="Paying users"
          value={o.paying}
          hint={o.granted ? `+${fmt(o.granted)} granted` : `of ${fmt(o.signups.total)} accounts`}
        />
        <StatTile
          icon="bolt"
          label="Tool runs today"
          value={o.runs.today}
          delta={{ current: o.runs.today, previous: o.runs.yesterday, label: "vs yesterday" }}
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card
          title="Visitors · 30 days"
          action={
            <Link href="/admin/traffic" className="text-sm font-semibold text-secondary hover:underline">
              Traffic
            </Link>
          }
        >
          {v ? (
            <>
              <MiniBars
                height="h-28"
                emptyText="No visits recorded yet."
                bars={v.daily.map((d) => ({
                  key: d.day,
                  value: d.visitors,
                  title: `${d.day}: ${fmt(d.visitors)} visitors · ${fmt(d.pageviews)} page views`,
                }))}
              />
              <BarAxis days={v.daily.map((d) => d.day)} />
            </>
          ) : (
            <p className="text-sm text-on-surface-variant">
              Visitor counting starts once migration img_006 has been run on this database.
            </p>
          )}
        </Card>
        <Card
          title="Sign-ups · 30 days"
          action={
            <Link href="/admin/users" className="text-sm font-semibold text-secondary hover:underline">
              Users
            </Link>
          }
        >
          <MiniBars
            height="h-28"
            tone="bg-chip-sky-ink/80"
            emptyText="No sign-ups in the last 30 days."
            bars={o.signups.daily.map((d) => ({ key: d.day, value: d.count, title: `${d.day}: ${fmt(d.count)} sign-ups` }))}
          />
          <BarAxis days={o.signups.daily.map((d) => d.day)} />
        </Card>
      </div>
    </div>
  );
}

const CARDS = [
  {
    href: "/admin/users",
    icon: "group",
    title: "Users",
    body: "Every account, 25 to a page — filter by plan, country or sign-up method, see when each was last active, open one for its full history, or export to CSV.",
  },
  {
    href: "/admin/traffic",
    icon: "monitoring",
    title: "Traffic",
    body: "Visitors who allowed analytics, per day — top pages, where visits come from, countries and devices.",
  },
  {
    href: "/admin/billing",
    icon: "credit_card",
    title: "Billing",
    body: "Who is on which plan and until when. Grant or revoke plans, see accounts about to lapse, and read a log of every admin change.",
  },
  {
    href: "/admin/analytics",
    icon: "query_stats",
    title: "Analytics",
    body: "Site-wide tool activity: runs and visits over the last 30 days, most-used tools, browser vs server split.",
  },
  {
    href: "/admin/blog",
    icon: "article",
    title: "Blog",
    body: "Write, edit and publish posts. Publishing triggers a fresh site build, so a new post is live in a few minutes.",
  },
] as const;

export function AdminHomeClient() {
  const { loading, user, isAdmin, profile } = useRequireAdmin();

  return (
    <AdminGate loading={loading} user={user} isAdmin={isAdmin}>
      <div className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md pb-16 flex flex-col gap-stack-md">
        <header className="flex flex-col gap-2">
          <h1 className="text-headline-lg font-black text-primary">Admin</h1>
          <p className="text-body-md text-on-surface-variant">
            Signed in as {user?.email}{profile?.is_owner ? " — owner, unlimited use." : " — admin."}
          </p>
        </header>

        <StorageBanner />

        <OverviewPanel />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group flex flex-col gap-3 rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-5 hover-lift"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-chip-teal-bg text-chip-teal-ink">
                <Icon name={c.icon} className="text-[22px]" />
              </span>
              <span className="text-title-md font-semibold text-primary">{c.title}</span>
              <span className="text-sm text-on-surface-variant">{c.body}</span>
              <span className="mt-auto inline-flex items-center gap-1 text-label-sm font-label-sm font-semibold text-secondary">
                Open
                <Icon
                  name="arrow_forward"
                  className="text-[16px] transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </AdminGate>
  );
}

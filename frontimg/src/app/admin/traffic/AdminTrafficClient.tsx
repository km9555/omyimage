"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { useRequireAdmin } from "@/lib/auth/useRequireAdmin";
import { apiFetch } from "@/lib/api";
import { AdminGate } from "../AdminGate";
import {
  AdminHeader, BarAxis, Card, Flag, MiniBars, RankList, StatTile, countryName, fmt,
} from "../admin-ui";

interface Traffic {
  days: number;
  daily: { day: string; visitors: number; pageviews: number; signedIn: number }[];
  totals: {
    visitorDays: number;
    pageviews: number;
    avgDailyVisitors: number;
    viewsPerVisitor: number;
    signedInShare: number;
    today: number;
  };
  topPages: { path: string; count: number }[];
  entryPages: { path: string; count: number }[];
  sources: { name: string; visitors: number; hosts: string[] }[];
  countries: { code: string | null; count: number }[];
  devices: { device: string; count: number }[];
}

const RANGES = [7, 30, 90] as const;

const DEVICE_STYLE: Record<string, { icon: string; tone: string; label: string }> = {
  desktop: { icon: "computer", tone: "bg-chip-teal-ink/80", label: "Desktop" },
  mobile: { icon: "smartphone", tone: "bg-chip-sky-ink/80", label: "Mobile" },
  tablet: { icon: "tablet", tone: "bg-chip-amber-ink/80", label: "Tablet" },
};

function Segmented<T extends string | number>({
  value,
  options,
  onChange,
  label,
}: {
  value: T;
  options: { value: T; label: string }[];
  onChange: (v: T) => void;
  label: string;
}) {
  return (
    <div role="radiogroup" aria-label={label} className="inline-flex rounded-lg bg-surface-container p-0.5">
      {options.map((o) => (
        <button
          key={String(o.value)}
          type="button"
          role="radio"
          aria-checked={o.value === value}
          onClick={() => onChange(o.value)}
          className={`rounded-md px-3 py-1 text-sm font-medium transition-colors ${
            o.value === value ? "bg-surface-container-lowest text-on-surface shadow-sm" : "text-on-surface-variant hover:text-on-surface"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function AdminTrafficClient() {
  const { loading, user, isAdmin } = useRequireAdmin();
  const [days, setDays] = useState<(typeof RANGES)[number]>(30);
  const [data, setData] = useState<Traffic | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(true);
  const [forbidden, setForbidden] = useState(false);
  const [pageMode, setPageMode] = useState<"top" | "entry">("top");
  const reqIdRef = useRef(0);

  const load = useCallback(async () => {
    const reqId = ++reqIdRef.current;
    setBusy(true);
    try {
      const res = await apiFetch(`/api/image/admin/traffic?days=${days}`);
      if (reqId !== reqIdRef.current) return;
      if (res.status === 403) { setForbidden(true); return; }
      if (!res.ok) {
        const { error: msg } = await res.json().catch(() => ({ error: null }));
        setError(msg ?? "Could not load traffic.");
        return;
      }
      setError(null);
      setData((await res.json()) as Traffic);
    } catch {
      if (reqId === reqIdRef.current) toast.error("Could not load traffic.");
    } finally {
      if (reqId === reqIdRef.current) setBusy(false);
    }
  }, [days]);

  useEffect(() => {
    if (!loading && isAdmin) void load();
  }, [loading, isAdmin, load]);

  const t = data?.totals;
  const deviceTotal = data?.devices.reduce((s, d) => s + d.count, 0) ?? 0;
  const pages = pageMode === "top" ? data?.topPages : data?.entryPages;

  return (
    <AdminGate loading={loading} user={user} isAdmin={isAdmin && !forbidden}>
      <div className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md pb-16 flex flex-col gap-stack-md">
        <AdminHeader
          title="Traffic"
          right={
            <div className="flex items-center gap-2">
              {busy && data && <Icon name="progress_activity" className="animate-spin text-[20px] text-on-surface-variant" />}
              <Segmented
                label="Date range"
                value={days}
                onChange={setDays}
                options={RANGES.map((r) => ({ value: r, label: `${r} days` }))}
              />
            </div>
          }
        />

        {error ? (
          <p className="rounded-xl bg-error-container px-4 py-3 text-sm text-on-error-container">{error}</p>
        ) : !data || !t ? (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-busy="true">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className={`animate-pulse rounded-xl bg-surface-container ${i < 4 ? "h-28" : "h-56 sm:col-span-2"}`} />
            ))}
          </div>
        ) : (
          <div className={`flex flex-col gap-stack-md transition-opacity ${busy ? "opacity-60" : ""}`}>
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              <StatTile
                icon="person"
                label="Visitors today"
                value={t.today}
                delta={{
                  current: t.today,
                  previous: data.daily[data.daily.length - 2]?.visitors ?? 0,
                  label: "vs yesterday",
                }}
              />
              <StatTile icon="groups" label="Avg. visitors / day" value={t.avgDailyVisitors} hint={`over ${days} days`} />
              <StatTile icon="visibility" label="Page views" value={t.pageviews} hint={`${t.viewsPerVisitor} per visitor`} />
              <StatTile
                icon="login"
                label="Signed in"
                value={`${Math.round(t.signedInShare * 100)}%`}
                hint="of visitors"
              />
            </div>

            <Card title="Visitors per day">
              <MiniBars
                height="h-44"
                emptyText="No visits recorded in this range yet."
                bars={data.daily.map((d) => ({
                  key: d.day,
                  value: d.visitors,
                  title: `${d.day}: ${fmt(d.visitors)} visitors · ${fmt(d.pageviews)} page views`,
                }))}
              />
              <BarAxis days={data.daily.map((d) => d.day)} />
            </Card>

            <div className="grid gap-stack-md lg:grid-cols-2">
              <Card
                title="Pages"
                action={
                  <Segmented
                    label="Page list"
                    value={pageMode}
                    onChange={setPageMode}
                    options={[
                      { value: "top", label: "Most viewed" },
                      { value: "entry", label: "Entry pages" },
                    ]}
                  />
                }
              >
                <RankList
                  emptyText="No pages recorded yet."
                  rows={(pages ?? []).slice(0, 12).map((p) => ({
                    key: p.path,
                    label: <span className="font-label-sm text-label-sm">{p.path}</span>,
                    count: p.count,
                    title: p.path,
                  }))}
                />
                <p className="text-sm text-on-surface-variant">
                  {pageMode === "top" ? "Page views per page." : "Where visitors landed first — counted once per visitor."}
                </p>
              </Card>

              <Card title="Sources">
                <RankList
                  tone="bg-chip-sky-ink/80"
                  emptyText="No visits recorded yet."
                  rows={data.sources.map((s) => ({
                    key: s.name,
                    label: s.name,
                    count: s.visitors,
                    title: s.hosts.length ? s.hosts.join(", ") : undefined,
                  }))}
                />
                <p className="text-sm text-on-surface-variant">
                  The site that linked to the entry page. &ldquo;Direct&rdquo; includes typed URLs, bookmarks and apps that hide the referrer.
                </p>
              </Card>

              <Card title="Countries">
                <RankList
                  tone="bg-chip-amber-ink/80"
                  emptyText="No visits recorded yet."
                  rows={data.countries.slice(0, 12).map((c) => ({
                    key: c.code ?? "unknown",
                    label: (
                      <span className="inline-flex items-center gap-1.5">
                        <Flag code={c.code} /> {countryName(c.code)}
                      </span>
                    ),
                    count: c.count,
                  }))}
                />
              </Card>

              <Card title="Devices">
                {deviceTotal === 0 ? (
                  <p className="text-sm text-on-surface-variant">No visits recorded yet.</p>
                ) : (
                  <>
                    <div className="flex h-3 overflow-hidden rounded-full bg-surface-container">
                      {data.devices.map((d) => (
                        <span
                          key={d.device}
                          className={DEVICE_STYLE[d.device]?.tone ?? "bg-outline"}
                          style={{ width: `${(d.count / deviceTotal) * 100}%` }}
                          title={`${DEVICE_STYLE[d.device]?.label ?? d.device}: ${fmt(d.count)}`}
                        />
                      ))}
                    </div>
                    <ul className="grid grid-cols-3 gap-2">
                      {data.devices.map((d) => {
                        const s = DEVICE_STYLE[d.device];
                        return (
                          <li key={d.device} className="flex flex-col gap-0.5 rounded-lg bg-surface-container/60 p-3">
                            <span className="inline-flex items-center gap-1.5 text-sm text-on-surface-variant">
                              <Icon name={s?.icon ?? "devices"} className="text-[17px]" /> {s?.label ?? d.device}
                            </span>
                            <span className="text-body-lg font-bold text-primary tabular-nums">
                              {Math.round((d.count / deviceTotal) * 100)}%
                            </span>
                            <span className="text-label-sm font-label-sm text-on-surface-variant">{fmt(d.count)}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </>
                )}
              </Card>
            </div>

            <p className="flex items-start gap-2 text-sm text-on-surface-variant">
              <Icon name="info" className="mt-0.5 text-[18px]" />
              <span>
                Only visitors who accepted analytics are counted, so these figures run below the true total.
                A visitor is one browser on one network for one UTC day, so the same person on two days counts
                twice and range totals are visitor-days. Bots and admins are not counted. Only visible here.
              </span>
            </p>
          </div>
        )}
      </div>
    </AdminGate>
  );
}

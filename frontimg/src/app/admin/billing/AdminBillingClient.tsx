"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { useRequireAdmin } from "@/lib/auth/useRequireAdmin";
import { apiFetch } from "@/lib/api";
import { AdminGate } from "../AdminGate";
import { BillingUserPanel } from "./BillingUserPanel";
import {
  PLANS, planChip, statusChip, MODE_LABEL, STATUS_LABEL, label,
  formatDate, formatDateTime, daysUntil,
  type BillingOverview, type BillingSubscription, type AuditEntry,
} from "./billing-types";

const PAGE_SIZE = 50;

type View = "overview" | "subscriptions" | "audit";

const VIEWS: { id: View; label: string; icon: string }[] = [
  { id: "overview", label: "Overview", icon: "insights" },
  { id: "subscriptions", label: "Subscriptions", icon: "receipt_long" },
  { id: "audit", label: "Admin log", icon: "history" },
];

const selectCls =
  "rounded-lg border border-outline-variant/60 bg-surface-container-lowest px-3 py-2 text-body-sm text-on-surface focus:border-secondary focus:outline-none";

const cardCls =
  "flex flex-col gap-3 rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-5";

/** Colour the period-end cell by urgency — past due, due soon, or fine. */
function endTone(iso: string | null): string {
  const d = daysUntil(iso);
  if (d === null) return "text-on-surface-variant";
  if (d < 0) return "text-error font-medium";
  if (d <= 7) return "text-chip-amber-ink font-medium";
  return "text-on-surface-variant";
}

export function AdminBillingClient() {
  const { loading, user, isAdmin } = useRequireAdmin();
  const router = useRouter();
  const searchParams = useSearchParams();

  // A per-user detail view is a query param, not a route: the frontend is a
  // static export, so a [id] segment would need generateStaticParams and there
  // is no way to enumerate user ids at build time.
  const selectedUser = searchParams.get("user");
  const prefillPlan = searchParams.get("plan");

  const [view, setView] = useState<View>("subscriptions");
  const [forbidden, setForbidden] = useState(false);

  const [overview, setOverview] = useState<BillingOverview | null>(null);
  const [subs, setSubs] = useState<BillingSubscription[]>([]);
  const [audit, setAudit] = useState<AuditEntry[]>([]);
  const [total, setTotal] = useState(0);
  const [offset, setOffset] = useState(0);
  const [loadingList, setLoadingList] = useState(true);

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [planFilter, setPlanFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [intervalFilter, setIntervalFilter] = useState("");
  const [expiringFilter, setExpiringFilter] = useState("");

  // Debounced so typing doesn't fire a request per keystroke.
  useEffect(() => {
    const t = setTimeout(() => { setQuery(search.trim()); setOffset(0); }, 300);
    return () => clearTimeout(t);
  }, [search]);

  // Stops an older in-flight response from overwriting a newer one.
  const reqIdRef = useRef(0);

  const load = useCallback(async () => {
    const reqId = ++reqIdRef.current;
    setLoadingList(true);
    try {
      const params = new URLSearchParams({ limit: String(PAGE_SIZE), offset: String(offset) });
      if (query) params.set("q", query);
      if (planFilter) params.set("plan", planFilter);
      if (statusFilter) params.set("status", statusFilter);
      if (intervalFilter) params.set("interval", intervalFilter);
      if (expiringFilter) params.set("expiring", expiringFilter);

      const path =
        view === "overview" ? "/api/image/admin/billing/overview"
        : view === "audit" ? `/api/image/admin/billing/audit?${params.toString()}`
        : `/api/image/admin/billing/subscriptions?${params.toString()}`;

      const res = await apiFetch(path);
      if (reqId !== reqIdRef.current) return;
      if (res.status === 403) { setForbidden(true); return; }
      if (!res.ok) {
        const { error } = await res.json().catch(() => ({ error: null }));
        throw new Error(error ?? "load failed");
      }

      if (view === "overview") {
        setOverview(await res.json() as BillingOverview);
      } else if (view === "audit") {
        const data = await res.json() as { entries: AuditEntry[]; total: number };
        setAudit(data.entries);
        setTotal(data.total);
      } else {
        const data = await res.json() as { subscriptions: BillingSubscription[]; total: number };
        setSubs(data.subscriptions);
        setTotal(data.total);
      }
    } catch (err) {
      if (reqId === reqIdRef.current) {
        toast.error(err instanceof Error && err.message !== "load failed" ? err.message : "Could not load billing data.");
      }
    } finally {
      if (reqId === reqIdRef.current) setLoadingList(false);
    }
  }, [view, offset, query, planFilter, statusFilter, intervalFilter, expiringFilter]);

  useEffect(() => {
    if (!loading && isAdmin && !selectedUser) void load();
  }, [loading, isAdmin, selectedUser, load]);

  function openUser(id: string) {
    router.replace(`/admin/billing?user=${id}`);
  }
  function closeUser() {
    router.replace("/admin/billing");
  }

  const pageStart = total === 0 ? 0 : offset + 1;
  const pageEnd = Math.min(offset + PAGE_SIZE, total);
  const filtersOn = Boolean(query || planFilter || statusFilter || intervalFilter || expiringFilter);

  const tiles = overview ? [
    { label: "Paid accounts", value: overview.lifecycle.active, icon: "workspace_premium" },
    { label: "Ending in 7 days", value: overview.lifecycle.expiringSoon, icon: "schedule" },
    { label: "Lapsed", value: overview.lifecycle.lapsed, icon: "history_toggle_off" },
    { label: "Admin grants", value: overview.lifecycle.granted, icon: "card_giftcard" },
  ] : [];

  return (
    <AdminGate loading={loading} user={user} isAdmin={isAdmin && !forbidden}>
      <div className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md pb-16 flex flex-col gap-stack-md">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <Link
              href="/admin"
              className="inline-flex items-center gap-1 text-label-sm font-label-sm text-secondary hover:underline"
            >
              <Icon name="arrow_back" className="text-[18px]" /> Admin
            </Link>
            <h1 className="text-headline-lg font-black text-primary">Billing</h1>
          </div>
        </div>

        {selectedUser ? (
          <BillingUserPanel
            userId={selectedUser}
            initialPlan={prefillPlan}
            onClose={closeUser}
            onChanged={() => { void load(); }}
          />
        ) : (
          <>
            <div className="flex flex-wrap gap-2">
              {VIEWS.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => { setView(v.id); setOffset(0); }}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-label-sm font-label-sm font-semibold ${
                    view === v.id
                      ? "bg-primary text-on-primary"
                      : "bg-surface-container text-on-surface-variant"
                  }`}
                >
                  <Icon name={v.icon} className="text-[18px]" /> {v.label}
                </button>
              ))}
            </div>

            {loadingList ? (
              <div className="py-20 flex justify-center">
                <Icon name="progress_activity" className="animate-spin text-[24px] text-on-surface-variant" />
              </div>
            ) : view === "overview" ? (
              !overview ? (
                <p className="text-body-md text-on-surface-variant py-16 text-center">No billing data yet.</p>
              ) : (
                <>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {tiles.map((t) => (
                      <div key={t.label} className="flex flex-col gap-2 rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-5">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-chip-sky-bg text-chip-sky-ink">
                          <Icon name={t.icon} className="text-[19px]" />
                        </span>
                        <span className="text-headline-md font-black text-primary tabular-nums">
                          {t.value.toLocaleString()}
                        </span>
                        <span className="text-body-sm text-on-surface-variant">{t.label}</span>
                      </div>
                    ))}
                  </div>
                  <p className="-mt-2 text-body-sm text-on-surface-variant">
                    &quot;Lapsed&quot; accounts still read as paid in the database — the downgrade happens
                    when they next make a request, so nothing rewrites the row.
                  </p>

                  <section className={cardCls}>
                    <h2 className="text-title-md font-semibold text-primary">Revenue</h2>
                    <p className="text-body-sm text-on-surface-variant">
                      Payments not live yet. oMyImage has no checkout, so every paid plan here is an admin grant.
                    </p>
                  </section>
                  <PlanBreakdown overview={overview} />
                </>
              )
            ) : view === "audit" ? (
              <AuditTable
                entries={audit}
                total={total}
                offset={offset}
                onPage={setOffset}
                onUser={openUser}
              />
            ) : (
              <>
                <div className="flex flex-col gap-3">
                  <label className="relative flex items-center">
                    <Icon name="search" className="pointer-events-none absolute left-3 text-[20px] text-on-surface-variant" />
                    <input
                      type="search"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search by email or name"
                      className="w-full rounded-lg border border-outline-variant/60 bg-surface-container-lowest py-2.5 pl-10 pr-3 text-body-md text-on-surface placeholder:text-on-surface-variant focus:border-secondary focus:outline-none"
                    />
                  </label>
                  <div className="flex flex-wrap gap-2">
                    <select value={planFilter} onChange={(e) => { setPlanFilter(e.target.value); setOffset(0); }} className={selectCls}>
                      <option value="">All plans</option>
                      {PLANS.filter((p) => p !== "free").map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                    <select value={statusFilter} onChange={(e) => { setStatusFilter(e.target.value); setOffset(0); }} className={selectCls}>
                      <option value="">Any status</option>
                      {Object.keys(STATUS_LABEL).map((s) => (
                        <option key={s} value={s}>{STATUS_LABEL[s]}</option>
                      ))}
                    </select>
                    <select value={intervalFilter} onChange={(e) => { setIntervalFilter(e.target.value); setOffset(0); }} className={selectCls}>
                      <option value="">Monthly &amp; yearly</option>
                      <option value="monthly">Monthly</option>
                      <option value="yearly">Yearly</option>
                    </select>
                    <select value={expiringFilter} onChange={(e) => { setExpiringFilter(e.target.value); setOffset(0); }} className={selectCls}>
                      <option value="">Any end date</option>
                      <option value="soon">Ending within 7 days</option>
                      <option value="lapsed">Already lapsed</option>
                    </select>
                  </div>
                </div>

                {subs.length === 0 ? (
                  <p className="text-body-md text-on-surface-variant py-16 text-center">
                    {filtersOn ? "No accounts match those filters." : "Nobody is on a paid plan yet."}
                  </p>
                ) : (
                  <>
                    {/* Wide table scrolls inside its own container so the page never does. */}
                    <div className="overflow-x-auto rounded-xl border border-outline-variant/40">
                      <table className="w-full min-w-[54rem] border-collapse text-left">
                        <thead>
                          <tr className="bg-surface-container text-label-sm font-label-sm text-on-surface-variant">
                            <th className="px-4 py-3 font-semibold">Account</th>
                            <th className="px-4 py-3 font-semibold">Plan</th>
                            <th className="px-4 py-3 font-semibold">Billing</th>
                            <th className="px-4 py-3 font-semibold">Status</th>
                            <th className="px-4 py-3 font-semibold">Access until</th>
                            <th className="px-4 py-3 font-semibold" />
                          </tr>
                        </thead>
                        <tbody>
                          {subs.map((s) => {
                            const d = daysUntil(s.currentPeriodEnd);
                            return (
                              <tr key={s.id} className="border-t border-outline-variant/30 bg-surface-container-lowest align-middle">
                                <td className="px-4 py-3">
                                  <div className="flex flex-col gap-0.5">
                                    <span className="text-body-md font-medium text-on-surface">{s.name || s.email}</span>
                                    {s.name && <span className="text-body-sm text-on-surface-variant">{s.email}</span>}
                                  </div>
                                </td>
                                <td className="px-4 py-3">
                                  <span className={`rounded-full px-3 py-1 text-label-sm font-label-sm font-semibold capitalize ${planChip[s.plan] ?? planChip.free}`}>
                                    {s.plan}
                                  </span>
                                </td>
                                <td className="px-4 py-3 text-body-sm capitalize text-on-surface-variant">
                                  {s.interval ?? "—"}
                                  <span className="block text-label-sm font-label-sm">{MODE_LABEL[s.purchaseMode]}</span>
                                </td>
                                <td className="px-4 py-3">
                                  <span className={`inline-block whitespace-nowrap rounded-full px-3 py-1 text-label-sm font-label-sm font-semibold ${statusChip[s.status] ?? statusChip.inactive}`}>
                                    {label(STATUS_LABEL, s.status)}
                                  </span>
                                </td>
                                <td className={`px-4 py-3 whitespace-nowrap text-body-sm ${endTone(s.currentPeriodEnd)}`}>
                                  {s.currentPeriodEnd
                                    ? formatDate(s.currentPeriodEnd)
                                    : s.status === "admin_grant" ? "No end date" : "—"}
                                  {d !== null && d >= 0 && d <= 7 && (
                                    <span className="block text-label-sm font-label-sm">in {d} {d === 1 ? "day" : "days"}</span>
                                  )}
                                  {d !== null && d < 0 && (
                                    <span className="block text-label-sm font-label-sm">lapsed</span>
                                  )}
                                </td>
                                <td className="px-4 py-3">
                                  <button
                                    type="button"
                                    onClick={() => openUser(s.id)}
                                    className="inline-flex items-center gap-1 rounded-lg border border-outline-variant/60 px-3 py-1.5 text-label-sm font-label-sm font-semibold"
                                  >
                                    Manage <Icon name="chevron_right" className="text-[16px]" />
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>

                    <Pager total={total} offset={offset} pageStart={pageStart} pageEnd={pageEnd} onPage={setOffset} />
                  </>
                )}
              </>
            )}
          </>
        )}
      </div>
    </AdminGate>
  );
}

// ── Overview sections ────────────────────────────────────────────────────────

function PlanBreakdown({ overview }: { overview: BillingOverview }) {
  const paid = overview.breakdown.filter((b) => b.plan !== "free");
  const totalPaid = paid.reduce((n, b) => n + b.count, 0);
  const free = overview.breakdown.filter((b) => b.plan === "free").reduce((n, b) => n + b.count, 0);

  const byInterval = ["monthly", "yearly", "none"].map((i) => ({
    interval: i,
    count: paid.filter((b) => b.interval === i).reduce((n, b) => n + b.count, 0),
  })).filter((r) => r.count > 0);

  const byMode = (["order", "subscription", "grant", "legacy"] as const).map((m) => ({
    mode: m,
    count: paid.filter((b) => b.purchaseMode === m).reduce((n, b) => n + b.count, 0),
  })).filter((r) => r.count > 0);

  const bar = (n: number) => `${totalPaid ? (n / totalPaid) * 100 : 0}%`;

  return (
    <section className={cardCls}>
      <h2 className="text-title-md font-semibold text-primary">Who is on what</h2>
      <p className="text-body-sm text-on-surface-variant">
        {totalPaid.toLocaleString()} paid {totalPaid === 1 ? "account" : "accounts"} of{" "}
        {(totalPaid + free).toLocaleString()} registered.
      </p>

      {[
        { title: "By billing interval", rows: byInterval.map((r) => ({ key: r.interval === "none" ? "not set" : r.interval, count: r.count })) },
        { title: "By plan", rows: PLANS.filter((p) => p !== "free").map((p) => ({ key: p, count: paid.filter((b) => b.plan === p).reduce((n, b) => n + b.count, 0) })).filter((r) => r.count > 0) },
        { title: "How they bought", rows: byMode.map((r) => ({ key: MODE_LABEL[r.mode], count: r.count })) },
      ].map((group) => (
        group.rows.length > 0 && (
          <div key={group.title} className="flex flex-col gap-2">
            <span className="text-label-sm font-label-sm font-semibold text-on-surface-variant">{group.title}</span>
            <ul className="flex flex-col gap-2">
              {group.rows.map((r) => (
                <li key={r.key} className="flex items-center gap-3">
                  <span className="w-40 shrink-0 truncate text-body-sm capitalize text-on-surface">{r.key}</span>
                  <span className="h-2 flex-1 overflow-hidden rounded-full bg-surface-container">
                    <span className="block h-full rounded-full bg-chip-teal-ink/80" style={{ width: bar(r.count) }} />
                  </span>
                  <span className="w-12 shrink-0 text-right text-body-sm tabular-nums text-on-surface-variant">
                    {r.count.toLocaleString()}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )
      ))}
    </section>
  );
}

// ── Audit log ────────────────────────────────────────────────────────────────

function describeChange(a: AuditEntry): string {
  const keys = ["plan", "plan_interval", "subscription_status", "current_period_end", "role"];
  const diffs = keys
    .filter((k) => String(a.before?.[k] ?? "") !== String(a.after?.[k] ?? ""))
    .map((k) => {
      const from = a.before?.[k];
      const to = a.after?.[k];
      const fmt = (v: unknown) =>
        v == null || v === "" ? "none"
        : k === "current_period_end" ? formatDate(String(v))
        : String(v);
      return `${k.replace(/_/g, " ")}: ${fmt(from)} → ${fmt(to)}`;
    });
  return diffs.length > 0 ? diffs.join(", ") : a.action.replace(/_/g, " ");
}

function AuditTable({
  entries, total, offset, onPage, onUser,
}: {
  entries: AuditEntry[];
  total: number;
  offset: number;
  onPage: (o: number) => void;
  onUser: (id: string) => void;
}) {
  if (entries.length === 0) {
    return <p className="text-body-md text-on-surface-variant py-16 text-center">No admin changes recorded yet.</p>;
  }

  const pageStart = total === 0 ? 0 : offset + 1;
  const pageEnd = Math.min(offset + PAGE_SIZE, total);

  return (
    <>
      <div className="overflow-x-auto rounded-xl border border-outline-variant/40">
        <table className="w-full min-w-[60rem] border-collapse text-left">
          <thead>
            <tr className="bg-surface-container text-label-sm font-label-sm text-on-surface-variant">
              <th className="px-4 py-3 font-semibold">When</th>
              <th className="px-4 py-3 font-semibold">Admin</th>
              <th className="px-4 py-3 font-semibold">Account</th>
              <th className="px-4 py-3 font-semibold">Change</th>
              <th className="px-4 py-3 font-semibold">Reason</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((a) => (
              <tr key={a.id} className="border-t border-outline-variant/30 bg-surface-container-lowest align-top">
                <td className="px-4 py-3 whitespace-nowrap text-body-sm text-on-surface-variant">
                  {formatDateTime(a.createdAt)}
                  {a.ip && <span className="block text-label-sm font-label-sm">{a.ip}</span>}
                </td>
                <td className="px-4 py-3 text-body-sm text-on-surface">{a.adminEmail ?? "—"}</td>
                <td className="px-4 py-3 text-body-sm">
                  {a.targetUserId ? (
                    <button
                      type="button"
                      onClick={() => onUser(a.targetUserId!)}
                      className="text-secondary hover:underline"
                    >
                      {a.targetEmail ?? a.targetUserId}
                    </button>
                  ) : (a.targetEmail ?? "—")}
                </td>
                <td className="px-4 py-3 text-body-sm text-on-surface">
                  <span className={`mb-1 inline-block rounded-full px-2.5 py-0.5 text-label-sm font-label-sm font-semibold ${
                    a.action === "revoke"
                      ? "bg-error-container text-on-error-container"
                      : a.action === "grant"
                        ? "bg-chip-amber-bg text-chip-amber-ink"
                        : "bg-surface-container text-on-surface-variant"
                  }`}>
                    {a.action.replace(/_/g, " ")}
                  </span>
                  <span className="block text-body-sm text-on-surface-variant">{describeChange(a)}</span>
                </td>
                <td className="px-4 py-3 text-body-sm text-on-surface-variant">{a.reason ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pager total={total} offset={offset} pageStart={pageStart} pageEnd={pageEnd} onPage={onPage} />
    </>
  );
}

function Pager({
  total, offset, pageStart, pageEnd, onPage,
}: {
  total: number; offset: number; pageStart: number; pageEnd: number; onPage: (o: number) => void;
}) {
  if (total <= PAGE_SIZE) return null;
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-body-sm text-on-surface-variant">{pageStart}–{pageEnd} of {total}</span>
      <div className="flex items-center gap-2">
        <button
          type="button"
          disabled={offset === 0}
          onClick={() => onPage(Math.max(offset - PAGE_SIZE, 0))}
          className="inline-flex items-center gap-1 rounded-lg border border-outline-variant/60 px-3 py-1.5 text-label-sm font-label-sm disabled:opacity-40"
        >
          <Icon name="chevron_left" className="text-[18px]" /> Previous
        </button>
        <button
          type="button"
          disabled={pageEnd >= total}
          onClick={() => onPage(offset + PAGE_SIZE)}
          className="inline-flex items-center gap-1 rounded-lg border border-outline-variant/60 px-3 py-1.5 text-label-sm font-label-sm disabled:opacity-40"
        >
          Next <Icon name="chevron_right" className="text-[18px]" />
        </button>
      </div>
    </div>
  );
}

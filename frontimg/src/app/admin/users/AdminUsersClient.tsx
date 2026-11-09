"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { useRequireAdmin } from "@/lib/auth/useRequireAdmin";
import { apiFetch } from "@/lib/api";
import { AdminGate } from "../AdminGate";
import { AdminHeader, Flag, countryName, fmt, formatDate, relativeTime } from "../admin-ui";
import { UserDrawer } from "./UserDrawer";
import { billingLine, type AdminUser, type UserSummary } from "./user-types";

const PAGE_SIZES = [25, 50, 100] as const;
const PLANS = ["free", "plus", "pro"] as const;

const planChip: Record<string, string> = {
  free: "bg-surface-container text-on-surface-variant",
  plus: "bg-chip-sky-bg text-chip-sky-ink",
  pro: "bg-chip-teal-bg text-chip-teal-ink",
};

/**
 * Everything the list shows is in the URL — page, size, search, filters, sort
 * and the open drawer — so a refresh, the back button and a pasted link all
 * land on the same view. The URL is the single source of truth: these are read
 * from useSearchParams and written with history.pushState/replaceState, which
 * Next's router observes without a navigation.
 */
const FILTER_KEYS = ["plan", "role", "verified", "method", "country"] as const;
type FilterKey = (typeof FILTER_KEYS)[number];

interface View {
  q: string;
  page: number;
  size: number;
  sort: "joined" | "last_seen";
  dir: "asc" | "desc";
  filters: Record<FilterKey, string>;
  user: string | null;
}

function readView(sp: URLSearchParams): View {
  const size = Number(sp.get("size"));
  return {
    q: sp.get("q") ?? "",
    page: Math.max(1, Math.floor(Number(sp.get("page")) || 1)),
    size: (PAGE_SIZES as readonly number[]).includes(size) ? size : PAGE_SIZES[0],
    sort: sp.get("sort") === "last_seen" ? "last_seen" : "joined",
    dir: sp.get("dir") === "asc" ? "asc" : "desc",
    filters: Object.fromEntries(FILTER_KEYS.map((k) => [k, sp.get(k) ?? ""])) as Record<FilterKey, string>,
    user: sp.get("user"),
  };
}

/** Page numbers to show, with null for an ellipsis: 1 … 4 5 6 … 13 */
function pageList(current: number, count: number): (number | null)[] {
  if (count <= 7) return Array.from({ length: count }, (_, i) => i + 1);
  const out: (number | null)[] = [1];
  const from = Math.max(2, current - 1);
  const to = Math.min(count - 1, current + 1);
  if (from > 2) out.push(null);
  for (let p = from; p <= to; p++) out.push(p);
  if (to < count - 1) out.push(null);
  out.push(count);
  return out;
}

const selectCls =
  "rounded-lg border border-outline-variant/60 bg-surface-container-lowest px-2.5 py-2 text-sm text-on-surface focus:border-secondary focus:outline-none";
const pagerBtn =
  "inline-flex h-9 min-w-9 items-center justify-center rounded-lg border border-outline-variant/60 px-2 text-sm tabular-nums text-on-surface hover:bg-surface-container disabled:pointer-events-none disabled:opacity-40";

export function AdminUsersClient() {
  const { loading, user, isAdmin } = useRequireAdmin();
  const router = useRouter();
  const searchParams = useSearchParams();
  const view = useMemo(() => readView(new URLSearchParams(searchParams.toString())), [searchParams]);

  const [users, setUsers] = useState<AdminUser[]>([]);
  const [total, setTotal] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [loadingList, setLoadingList] = useState(true);
  const [listError, setListError] = useState<string | null>(null);
  const [forbidden, setForbidden] = useState(false);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [summary, setSummary] = useState<UserSummary | null>(null);
  const [exporting, setExporting] = useState(false);

  /**
   * Write view changes to the URL. Any change other than paging or opening a
   * user goes back to page 1 — page 4 of a different filter is meaningless.
   */
  const update = useCallback(
    (patch: Record<string, string | number | null>, mode: "push" | "replace" = "push") => {
      const next = new URLSearchParams(window.location.search);
      if (!("page" in patch) && !("user" in patch)) next.delete("page");
      for (const [k, v] of Object.entries(patch)) {
        const isDefault =
          v === null || v === "" ||
          (k === "page" && v === 1) ||
          (k === "size" && v === PAGE_SIZES[0]) ||
          (k === "sort" && v === "joined") ||
          (k === "dir" && v === "desc");
        if (isDefault) next.delete(k);
        else next.set(k, String(v));
      }
      const qs = next.toString();
      const url = qs ? `?${qs}` : window.location.pathname;
      if (mode === "push") window.history.pushState(null, "", url);
      else window.history.replaceState(null, "", url);
    },
    []
  );

  // The search box is local while typing and debounced into the URL. It also
  // follows the URL, so the back button restores an earlier search — but only
  // for changes it didn't write itself, or a debounce landing mid-word would
  // overwrite the letters typed since.
  const [search, setSearch] = useState(view.q);
  const writtenQ = useRef(view.q);
  useEffect(() => {
    if (view.q !== writtenQ.current) {
      writtenQ.current = view.q;
      setSearch(view.q);
    }
  }, [view.q]);
  useEffect(() => {
    const t = setTimeout(() => {
      const q = search.trim();
      if (q !== writtenQ.current) {
        writtenQ.current = q;
        update({ q }, "replace");
      }
    }, 300);
    return () => clearTimeout(t);
  }, [search, update]);

  // Everything that changes the list, as one stable key (the drawer doesn't).
  const listKey = useMemo(() => {
    const p = new URLSearchParams({ sort: view.sort, dir: view.dir });
    if (view.q) p.set("q", view.q);
    for (const k of FILTER_KEYS) if (view.filters[k]) p.set(k, view.filters[k]);
    return p.toString();
  }, [view.q, view.sort, view.dir, view.filters]);

  // Guards against an older in-flight response overwriting a newer one when the
  // view changes faster than the requests resolve.
  const reqIdRef = useRef(0);

  const load = useCallback(async () => {
    const reqId = ++reqIdRef.current;
    setLoadingList(true);
    try {
      const params = new URLSearchParams(listKey);
      params.set("limit", String(view.size));
      params.set("offset", String((view.page - 1) * view.size));
      const res = await apiFetch(`/api/image/admin/users?${params.toString()}`);
      if (reqId !== reqIdRef.current) return;
      if (res.status === 403) { setForbidden(true); return; }
      if (!res.ok) {
        const { error } = await res.json().catch(() => ({ error: null }));
        setListError(error ?? "Could not load users.");
        return;
      }
      const data = (await res.json()) as { users: AdminUser[]; total: number };
      setListError(null);
      setUsers(data.users);
      setTotal(data.total);
      setLoaded(true);
      // A page past the end (rows deleted, or a stale link) snaps to the last one.
      const last = Math.max(1, Math.ceil(data.total / view.size));
      if (view.page > last) update({ page: last }, "replace");
    } catch {
      if (reqId === reqIdRef.current) toast.error("Could not load users.");
    } finally {
      if (reqId === reqIdRef.current) setLoadingList(false);
    }
  }, [listKey, view.page, view.size, update]);

  useEffect(() => {
    if (!loading && isAdmin) void load();
  }, [loading, isAdmin, load]);

  const loadSummary = useCallback(async () => {
    try {
      const res = await apiFetch("/api/image/admin/users/summary");
      if (res.ok) setSummary((await res.json()) as UserSummary);
    } catch {
      /* header chips and the country list just stay empty */
    }
  }, []);

  useEffect(() => {
    if (!loading && isAdmin) void loadSummary();
  }, [loading, isAdmin, loadSummary]);

  // Role only — plan changes go through the billing console so they carry a
  // duration and a reason.
  async function patchRole(id: string, role: string) {
    setSavingId(id);
    // Optimistic: the row updates immediately and rolls back if the server says no.
    const before = users;
    setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, role } : u)));
    try {
      const res = await apiFetch(`/api/image/admin/users/${id}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ role }),
      });
      if (!res.ok) {
        const { error } = await res.json().catch(() => ({ error: "Update failed." }));
        setUsers(before);
        toast.error(error ?? "Update failed.");
        return;
      }
      toast.success("Updated.");
    } catch {
      setUsers(before);
      toast.error("Update failed.");
    } finally {
      setSavingId(null);
    }
  }

  // The export needs the bearer token, which a plain <a href> can't carry, so
  // it's fetched as a blob and handed to the browser as a download.
  async function exportCsv() {
    setExporting(true);
    try {
      const res = await apiFetch(`/api/image/admin/users/export.csv?${listKey}`);
      if (!res.ok) throw new Error("export failed");
      const blob = await res.blob();
      const name =
        /filename="([^"]+)"/.exec(res.headers.get("content-disposition") ?? "")?.[1] ??
        `omyimage-users-${new Date().toISOString().slice(0, 10)}.csv`;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = name;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch {
      toast.error("Could not export users.");
    } finally {
      setExporting(false);
    }
  }

  function toggleSort(key: View["sort"]) {
    if (view.sort === key) update({ dir: view.dir === "desc" ? "asc" : "desc" });
    else update({ sort: key, dir: "desc" });
  }

  const closeDrawer = useCallback(() => update({ user: null }), [update]);

  const pageCount = Math.max(1, Math.ceil(total / view.size));
  const pageStart = total === 0 ? 0 : (view.page - 1) * view.size + 1;
  const pageEnd = Math.min(view.page * view.size, total);
  const filtered = Boolean(view.q) || FILTER_KEYS.some((k) => view.filters[k]);

  const sortHeader = (key: View["sort"], text: string) => {
    const active = view.sort === key;
    return (
      <th
        className="px-4 py-3 font-semibold"
        aria-sort={active ? (view.dir === "asc" ? "ascending" : "descending") : "none"}
      >
        <button
          type="button"
          onClick={() => toggleSort(key)}
          className={`inline-flex items-center gap-0.5 whitespace-nowrap hover:text-on-surface ${active ? "text-on-surface" : ""}`}
        >
          {text}
          <Icon
            name={active ? (view.dir === "asc" ? "arrow_upward" : "arrow_downward") : "unfold_more"}
            className="text-[16px]"
          />
        </button>
      </th>
    );
  };

  return (
    <AdminGate loading={loading} user={user} isAdmin={isAdmin && !forbidden}>
      <div className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md pb-16 flex flex-col gap-stack-md">
        <AdminHeader
          title="Users"
          right={
            summary && (
              <div className="flex flex-wrap gap-2 text-sm">
                {[
                  [fmt(summary.total), "accounts"],
                  [fmt(summary.new7d), "new this week"],
                  [fmt(summary.active24h), "active today"],
                  [fmt(summary.verified), "verified"],
                  [fmt(summary.google), "via Google"],
                ].map(([n, l]) => (
                  <span key={l} className="rounded-full bg-surface-container px-3 py-1 text-on-surface-variant">
                    <span className="font-semibold text-on-surface tabular-nums">{n}</span> {l}
                  </span>
                ))}
              </div>
            )
          }
        />

        {/* Toolbar */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <label className="relative flex min-w-[14rem] flex-1 items-center">
              <Icon
                name="search"
                className="pointer-events-none absolute left-3 text-[20px] text-on-surface-variant"
              />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by email or name"
                aria-label="Search users"
                className="w-full rounded-lg border border-outline-variant/60 bg-surface-container-lowest py-2 pl-10 pr-3 text-body-md text-on-surface placeholder:text-on-surface-variant focus:border-secondary focus:outline-none"
              />
            </label>
            <button
              type="button"
              onClick={() => void exportCsv()}
              disabled={exporting || total === 0}
              className="inline-flex items-center gap-1.5 rounded-lg border border-outline-variant/60 px-3 py-2 text-sm font-medium text-on-surface hover:bg-surface-container disabled:opacity-40"
              title={filtered ? "Export the users matching these filters" : "Export every user"}
            >
              <Icon
                name={exporting ? "progress_activity" : "download"}
                className={`text-[18px] ${exporting ? "animate-spin" : ""}`}
              />
              Export CSV
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <select aria-label="Plan" value={view.filters.plan} onChange={(e) => update({ plan: e.target.value })} className={selectCls}>
              <option value="">All plans</option>
              {PLANS.map((p) => (
                <option key={p} value={p}>{p[0].toUpperCase() + p.slice(1)}</option>
              ))}
            </select>
            <select aria-label="Role" value={view.filters.role} onChange={(e) => update({ role: e.target.value })} className={selectCls}>
              <option value="">All roles</option>
              <option value="user">Users</option>
              <option value="admin">Admins</option>
            </select>
            <select aria-label="Email verification" value={view.filters.verified} onChange={(e) => update({ verified: e.target.value })} className={selectCls}>
              <option value="">Verified or not</option>
              <option value="yes">Verified</option>
              <option value="no">Not verified</option>
            </select>
            <select aria-label="Sign-up method" value={view.filters.method} onChange={(e) => update({ method: e.target.value })} className={selectCls}>
              <option value="">Any sign-up method</option>
              <option value="google">Google</option>
              <option value="email">Email + password</option>
            </select>
            <select aria-label="Country" value={view.filters.country} onChange={(e) => update({ country: e.target.value })} className={selectCls}>
              <option value="">All countries</option>
              {(summary?.countries ?? []).map((c) => (
                <option key={c.code ?? "unknown"} value={c.code ?? "unknown"}>
                  {c.code ? `${countryName(c.code)} (${c.count})` : `Unknown (${c.count})`}
                </option>
              ))}
            </select>
            {filtered && (
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  update({ q: null, plan: null, role: null, verified: null, method: null, country: null });
                }}
                className="inline-flex items-center gap-1 rounded-lg px-2.5 py-2 text-sm font-medium text-secondary hover:bg-surface-container"
              >
                <Icon name="filter_alt_off" className="text-[18px]" /> Clear
              </button>
            )}
            {loadingList && loaded && (
              <Icon name="progress_activity" className="animate-spin text-[20px] text-on-surface-variant" />
            )}
          </div>
        </div>

        {listError ? (
          <p className="rounded-xl bg-error-container px-4 py-3 text-sm text-on-error-container">{listError}</p>
        ) : !loaded ? (
          // First load only: skeleton rows. Later loads keep the old rows and dim them.
          <div className="flex flex-col gap-2" aria-busy="true">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="h-14 animate-pulse rounded-lg bg-surface-container" />
            ))}
          </div>
        ) : users.length === 0 ? (
          <p className="text-body-md text-on-surface-variant py-16 text-center">
            {filtered ? "No users match these filters." : "No users yet."}
          </p>
        ) : (
          <>
            {/* Wide table scrolls inside its own container so the page never does. */}
            <div
              className={`overflow-x-auto rounded-xl border border-outline-variant/40 transition-opacity ${
                loadingList ? "pointer-events-none opacity-60" : ""
              }`}
              aria-busy={loadingList}
            >
              <table className="w-full min-w-[60rem] border-collapse text-left">
                <thead>
                  <tr className="bg-surface-container text-label-sm font-label-sm text-on-surface-variant">
                    <th className="px-4 py-3 font-semibold">Account</th>
                    <th className="px-4 py-3 font-semibold">Country</th>
                    {sortHeader("joined", "Joined")}
                    {sortHeader("last_seen", "Last active")}
                    <th className="px-4 py-3 font-semibold">Today</th>
                    <th className="px-4 py-3 font-semibold">Plan</th>
                    <th className="px-4 py-3 font-semibold">Billing</th>
                    <th className="px-4 py-3 font-semibold">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => (
                    <tr
                      key={u.id}
                      className="border-t border-outline-variant/30 bg-surface-container-lowest align-middle hover:bg-surface-container/40"
                    >
                      <td className="px-4 py-3">
                        <button
                          type="button"
                          onClick={() => update({ user: u.id })}
                          className="group flex max-w-[20rem] flex-col gap-0.5 text-left"
                          title="Open details"
                        >
                          <span className="flex items-center gap-1.5 text-body-md font-medium text-on-surface group-hover:text-secondary group-hover:underline">
                            <span className="truncate">{u.name || u.email}</span>
                            {u.emailVerified && (
                              // Icon is aria-hidden, so the label carries the meaning.
                              <span title="Email verified" className="inline-flex shrink-0">
                                <Icon name="verified_user" className="text-[15px] text-chip-teal-ink" />
                                <span className="sr-only">Email verified</span>
                              </span>
                            )}
                            {u.viaGoogle && (
                              <span className="shrink-0 rounded-full bg-surface-container px-2 py-0.5 text-label-sm font-label-sm text-on-surface-variant">
                                Google
                              </span>
                            )}
                            {u.isOwner && (
                              <span className="shrink-0 rounded-full bg-chip-amber-bg px-2 py-0.5 text-label-sm font-label-sm font-semibold text-chip-amber-ink">
                                Owner
                              </span>
                            )}
                          </span>
                          {u.name && <span className="truncate text-sm text-on-surface-variant">{u.email}</span>}
                        </button>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">
                        {u.country ? (
                          <span
                            className={`inline-flex items-center gap-1.5 ${
                              u.countrySource === "last_seen" ? "text-on-surface-variant" : "text-on-surface"
                            }`}
                            title={
                              u.countrySource === "last_seen"
                                ? `Last seen from ${countryName(u.country)} — joined before sign-up country was recorded`
                                : `Signed up from ${countryName(u.country)}`
                            }
                          >
                            <Flag code={u.country} /> {u.country}
                            {u.countrySource === "last_seen" && <span className="text-label-sm font-label-sm">· seen</span>}
                          </span>
                        ) : (
                          <span className="text-on-surface-variant">—</span>
                        )}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-on-surface-variant">
                        {formatDate(u.createdAt)}
                      </td>
                      <td
                        className="px-4 py-3 whitespace-nowrap text-sm text-on-surface-variant"
                        title={u.lastSeenAt ? new Date(u.lastSeenAt).toLocaleString() : undefined}
                      >
                        {relativeTime(u.lastSeenAt)}
                      </td>
                      <td className="px-4 py-3 text-sm text-on-surface-variant tabular-nums">
                        {u.role === "admin" ? "—" : u.runsToday}
                      </td>
                      <td className="px-4 py-3">
                        {/* Changing a plan opens the billing console with it
                            pre-selected, rather than writing it straight from
                            here: a plan needs an end date and a reason, and this
                            select fires on every change. */}
                        <select
                          value={u.plan}
                          disabled={savingId === u.id || u.isOwner}
                          onChange={(e) =>
                            router.push(`/admin/billing?user=${u.id}&plan=${e.target.value}`)
                          }
                          title="Opens the billing console to set a duration and reason"
                          aria-label={`Plan for ${u.email}`}
                          className={`rounded-full px-3 py-1 text-label-sm font-label-sm font-semibold capitalize disabled:opacity-50 ${
                            planChip[u.plan] ?? planChip.free
                          }`}
                        >
                          {PLANS.map((p) => (
                            <option key={p} value={p} className="bg-surface text-on-surface">
                              {p}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">
                        <span className={billingLine(u).tone}>{billingLine(u).text}</span>
                        {u.plan !== "free" && u.interval && (
                          <span className="block text-label-sm font-label-sm capitalize text-on-surface-variant">
                            {u.interval}
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <select
                          value={u.role}
                          disabled={savingId === u.id || u.isOwner}
                          onChange={(e) => void patchRole(u.id, e.target.value)}
                          aria-label={`Role for ${u.email}`}
                          className={`rounded-full px-3 py-1 text-label-sm font-label-sm font-semibold capitalize disabled:opacity-50 ${
                            u.role === "admin"
                              ? "bg-chip-amber-bg text-chip-amber-ink"
                              : "bg-surface-container text-on-surface-variant"
                          }`}
                        >
                          <option value="user" className="bg-surface text-on-surface">user</option>
                          <option value="admin" className="bg-surface text-on-surface">admin</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pager — always shown, so it's obvious the list is paged. */}
            <nav className="flex flex-wrap items-center justify-between gap-3" aria-label="Pagination">
              <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                <span className="tabular-nums">
                  {fmt(pageStart)}–{fmt(pageEnd)} of {fmt(total)}
                </span>
                <label className="inline-flex items-center gap-1.5">
                  Rows
                  <select
                    value={view.size}
                    onChange={(e) => update({ size: Number(e.target.value) })}
                    className={selectCls}
                  >
                    {PAGE_SIZES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="flex flex-wrap items-center gap-1">
                <button type="button" className={pagerBtn} disabled={view.page <= 1} onClick={() => update({ page: 1 })} aria-label="First page">
                  <Icon name="first_page" className="text-[18px]" />
                </button>
                <button type="button" className={pagerBtn} disabled={view.page <= 1} onClick={() => update({ page: view.page - 1 })} aria-label="Previous page">
                  <Icon name="chevron_left" className="text-[18px]" />
                </button>
                {pageList(view.page, pageCount).map((p, i) =>
                  p === null ? (
                    <span key={`gap-${i}`} className="px-1 text-sm text-on-surface-variant">…</span>
                  ) : (
                    <button
                      key={p}
                      type="button"
                      onClick={() => update({ page: p })}
                      aria-current={p === view.page ? "page" : undefined}
                      className={`${pagerBtn} ${
                        p === view.page ? "border-chip-teal-border bg-chip-teal-bg font-semibold text-chip-teal-ink" : ""
                      }`}
                    >
                      {p}
                    </button>
                  )
                )}
                <button type="button" className={pagerBtn} disabled={view.page >= pageCount} onClick={() => update({ page: view.page + 1 })} aria-label="Next page">
                  <Icon name="chevron_right" className="text-[18px]" />
                </button>
                <button type="button" className={pagerBtn} disabled={view.page >= pageCount} onClick={() => update({ page: pageCount })} aria-label="Last page">
                  <Icon name="last_page" className="text-[18px]" />
                </button>
              </div>
            </nav>
          </>
        )}
      </div>

      {view.user && <UserDrawer userId={view.user} onClose={closeDrawer} />}
    </AdminGate>
  );
}

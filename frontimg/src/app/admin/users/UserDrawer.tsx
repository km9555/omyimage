"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { apiFetch } from "@/lib/api";
import {
  BarAxis, Flag, MiniBars, RankList, countryName, fmt, formatDate,
  niceTool, relativeTime,
} from "../admin-ui";
import { formatDateTime, label, planChip, type AuditEntry } from "../billing/billing-types";
import { billingLine, type UserDetail } from "./user-types";

interface BillingDetail {
  audit: AuditEntry[];
}

const ACTION_LABEL: Record<string, string> = {
  plan_change: "Plan changed",
  role_change: "Role changed",
  grant: "Plan granted",
  revoke: "Plan revoked",
};

/**
 * Right-hand slide-over with everything about one account. Opened from the
 * users table via ?user=<id>, so it survives a refresh and can be linked.
 *
 * Reads two endpoints in parallel: /api/image/admin/users/:id (profile, activity,
 * storage) and the billing console's existing /api/image/admin/billing/users/:id
 * (payments, admin log) — the billing half isn't duplicated server-side.
 */
export function UserDrawer({ userId, onClose }: { userId: string; onClose: () => void }) {
  const [detail, setDetail] = useState<UserDetail | null>(null);
  const [billing, setBilling] = useState<BillingDetail | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [shown, setShown] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let alive = true;
    setDetail(null);
    setBilling(null);
    setError(null);
    void (async () => {
      try {
        const [d, b] = await Promise.all([
          apiFetch(`/api/image/admin/users/${userId}`),
          apiFetch(`/api/image/admin/billing/users/${userId}`),
        ]);
        if (!alive) return;
        if (!d.ok) {
          const { error: msg } = await d.json().catch(() => ({ error: null }));
          setError(msg ?? "Could not load this user.");
          return;
        }
        setDetail((await d.json()) as UserDetail);
        // Billing is a nice-to-have here: its absence shouldn't blank the drawer.
        if (b.ok) setBilling((await b.json()) as BillingDetail);
      } catch {
        if (alive) setError("Could not load this user.");
      }
    })();
    return () => { alive = false; };
  }, [userId]);

  // Slide in, lock the page behind, close on Escape, and hand focus back to
  // whatever opened the drawer when it goes away.
  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    const raf = requestAnimationFrame(() => setShown(true));
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      opener?.focus?.();
    };
  }, [onClose]);

  const u = detail?.user;
  const a = detail?.activity;

  async function copyEmail() {
    if (!u) return;
    try {
      await navigator.clipboard.writeText(u.email);
      toast.success("Email copied.");
    } catch {
      toast.error("Could not copy.");
    }
  }

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="User details">
      <button
        type="button"
        aria-label="Close"
        tabIndex={-1}
        onClick={onClose}
        className={`absolute inset-0 bg-black/40 transition-opacity duration-200 ${shown ? "opacity-100" : "opacity-0"}`}
      />
      <aside
        className={`absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-surface shadow-2xl transition-transform duration-200 ease-out ${
          shown ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-start justify-between gap-3 border-b border-outline-variant/40 px-5 py-4">
          <div className="flex min-w-0 flex-col gap-1">
            {u ? (
              <>
                <span className="truncate text-title-md font-semibold text-primary">{u.name || u.email}</span>
                <span className="flex min-w-0 items-center gap-1.5 text-sm text-on-surface-variant">
                  <span className="truncate">{u.email}</span>
                  <button
                    type="button"
                    onClick={() => void copyEmail()}
                    title="Copy email"
                    className="inline-flex shrink-0 rounded p-0.5 hover:bg-surface-container"
                  >
                    <Icon name="content_copy" className="text-[15px]" />
                    <span className="sr-only">Copy email</span>
                  </button>
                </span>
              </>
            ) : (
              <span className="h-6 w-48 animate-pulse rounded bg-surface-container" />
            )}
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="inline-flex shrink-0 rounded-lg p-1.5 text-on-surface-variant hover:bg-surface-container"
          >
            <Icon name="close" className="text-[22px]" />
            <span className="sr-only">Close</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {error ? (
            <p className="py-16 text-center text-body-md text-error">{error}</p>
          ) : !u || !a ? (
            <div className="flex flex-col gap-3">
              {Array.from({ length: 6 }, (_, i) => (
                <div key={i} className="h-14 animate-pulse rounded-lg bg-surface-container" />
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-1.5">
                <span className={`rounded-full px-2.5 py-0.5 text-label-sm font-label-sm font-semibold capitalize ${planChip[u.plan] ?? planChip.free}`}>
                  {u.plan}
                </span>
                {u.isOwner && (
                  <span className="rounded-full bg-chip-amber-bg px-2.5 py-0.5 text-label-sm font-label-sm font-semibold text-chip-amber-ink">
                    Owner · unlimited
                  </span>
                )}
                {u.role === "admin" && !u.isOwner && (
                  <span className="rounded-full bg-chip-amber-bg px-2.5 py-0.5 text-label-sm font-label-sm font-semibold text-chip-amber-ink">
                    Admin
                  </span>
                )}
                <span className="rounded-full bg-surface-container px-2.5 py-0.5 text-label-sm font-label-sm text-on-surface-variant">
                  {u.emailVerified ? "Email verified" : "Email not verified"}
                </span>
                <span className="rounded-full bg-surface-container px-2.5 py-0.5 text-label-sm font-label-sm text-on-surface-variant">
                  {u.viaGoogle ? (u.hasPassword ? "Google + password" : "Google") : "Email + password"}
                </span>
              </div>

              <dl className="grid grid-cols-2 gap-x-4 gap-y-3">
                <Fact label="Joined">{formatDate(u.createdAt)}</Fact>
                <Fact label="Sign-up country">
                  {u.signupCountry ? (
                    <span className="inline-flex items-center gap-1.5">
                      <Flag code={u.signupCountry} /> {countryName(u.signupCountry)}
                    </span>
                  ) : (
                    <span className="text-on-surface-variant" title="Joined before sign-up country was recorded">
                      Not recorded
                    </span>
                  )}
                </Fact>
                <Fact label="Last active">
                  <span title={u.lastSeenAt ? formatDateTime(u.lastSeenAt) : undefined}>{relativeTime(u.lastSeenAt)}</span>
                </Fact>
                <Fact label="Last seen from">
                  {u.lastSeenCountry ? (
                    <span className="inline-flex items-center gap-1.5">
                      <Flag code={u.lastSeenCountry} /> {countryName(u.lastSeenCountry)}
                    </span>
                  ) : (
                    "—"
                  )}
                </Fact>
                <Fact label="Billing">
                  <span className={billingLine(u).tone}>{billingLine(u).text}</span>
                </Fact>
                <Fact label="Runs today">{u.role === "admin" ? "Not counted" : fmt(a.runsToday)}</Fact>
              </dl>

              <section className="flex flex-col gap-2">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-body-md font-semibold text-primary">Tool runs · 30 days</h3>
                  <span className="text-sm text-on-surface-variant tabular-nums">
                    {fmt(a.runs30d)} · {fmt(a.runsAllTime)} all time
                  </span>
                </div>
                <MiniBars
                  height="h-20"
                  emptyText="No runs in the last 30 days."
                  bars={a.daily.map((d) => ({ key: d.day, value: d.count, title: `${d.day}: ${d.count} runs` }))}
                />
                <BarAxis days={a.daily.map((d) => d.day)} />
                {a.lastRunAt && (
                  <span className="text-label-sm font-label-sm text-on-surface-variant">
                    Last run {relativeTime(a.lastRunAt)}
                  </span>
                )}
                {a.topTools.length > 0 && (
                  <div className="pt-1">
                    <RankList rows={a.topTools.map((t) => ({ key: t.tool, label: niceTool(t.tool), count: t.count }))} />
                  </div>
                )}
              </section>

              {!u.isOwner && (
                <Link
                  href={`/admin/billing?user=${u.id}`}
                  className="inline-flex w-fit items-center gap-1 text-label-sm font-label-sm font-semibold text-secondary hover:underline"
                >
                  Manage plan <Icon name="arrow_forward" className="text-[15px]" />
                </Link>
              )}

              {billing && billing.audit.length > 0 && (
                <section className="flex flex-col gap-2">
                  <h3 className="text-body-md font-semibold text-primary">Admin changes</h3>
                  <ul className="flex flex-col gap-2">
                    {billing.audit.slice(0, 5).map((e) => (
                      <li key={e.id} className="text-sm">
                        <span className="font-medium text-on-surface">{label(ACTION_LABEL, e.action)}</span>
                        <span className="text-on-surface-variant">
                          {" "}· {e.adminEmail ?? "unknown admin"} · {formatDateTime(e.createdAt)}
                        </span>
                        {e.reason && <span className="block text-on-surface-variant">“{e.reason}”</span>}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}

function Fact({ label: l, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex min-w-0 flex-col gap-0.5">
      <dt className="text-label-sm font-label-sm text-on-surface-variant">{l}</dt>
      <dd className="truncate text-sm text-on-surface">{children}</dd>
    </div>
  );
}


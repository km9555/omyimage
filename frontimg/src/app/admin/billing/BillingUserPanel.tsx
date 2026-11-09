"use client";

import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { apiFetch } from "@/lib/api";
import {
  PLANS, planChip, statusChip, MODE_LABEL, STATUS_LABEL, label,
  formatDate, formatDateTime,
  type BillingSubscription, type AuditEntry,
} from "./billing-types";

const inputCls =
  "w-full rounded-lg border border-outline-variant/60 bg-surface-container-lowest px-3 py-2 text-body-md text-on-surface focus:border-secondary focus:outline-none";
const labelCls = "text-label-sm font-label-sm font-semibold text-on-surface-variant";

type Duration = "1_month" | "1_year" | "custom" | "lifetime";

const DURATIONS: { value: Duration; label: string }[] = [
  { value: "1_month", label: "1 month" },
  { value: "1_year", label: "1 year" },
  { value: "custom", label: "Until a date" },
  { value: "lifetime", label: "Lifetime" },
];

interface Detail {
  user: BillingSubscription & { role: string; emailVerified: boolean; viaGoogle: boolean };
  audit: AuditEntry[];
}

/** Local preview of the end date a grant will produce, for the confirm text. */
function previewEnd(duration: Duration, until: string): string {
  if (duration === "lifetime") return "no end date";
  if (duration === "custom") return until ? formatDate(until) : "a date you pick";
  const d = new Date();
  const day = d.getDate();
  if (duration === "1_year") d.setFullYear(d.getFullYear() + 1);
  else d.setMonth(d.getMonth() + 1);
  if (d.getDate() !== day) d.setDate(0); // clamp, as the server does
  return formatDate(d.toISOString());
}

export function BillingUserPanel({
  userId,
  initialPlan,
  onClose,
  onChanged,
}: {
  userId: string;
  /** Pre-selects the plan when arriving from the Users list. */
  initialPlan?: string | null;
  onClose: () => void;
  onChanged: () => void;
}) {
  const [detail, setDetail] = useState<Detail | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [plan, setPlan] = useState(initialPlan ?? "plus");
  const [duration, setDuration] = useState<Duration>("1_month");
  const [until, setUntil] = useState("");
  const [reason, setReason] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await apiFetch(`/api/image/admin/billing/users/${userId}`);
      if (!res.ok) {
        const { error } = await res.json().catch(() => ({ error: "Could not load this account." }));
        toast.error(error ?? "Could not load this account.");
        return;
      }
      const data = await res.json() as Detail;
      setDetail(data);
      if (!initialPlan) setPlan(data.user.plan === "free" ? "plus" : data.user.plan);
    } catch {
      toast.error("Could not load this account.");
    } finally {
      setLoading(false);
    }
  }, [userId, initialPlan]);

  useEffect(() => { void load(); }, [load]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!detail) return;

    const target = detail.user.email;
    const summary = plan === "free"
      ? `Drop ${target} to Free now? This clears their billing state.`
      : `Grant ${plan} to ${target} — ends ${previewEnd(duration, until)}? This overwrites their current billing state.`;
    // One yes/no on a summarised, hard-to-undo action. The form itself stays
    // inline so the account's current state is visible while filling it in.
    if (!window.confirm(summary)) return;

    setSaving(true);
    try {
      const res = await apiFetch(`/api/image/admin/billing/users/${userId}/grant`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ plan, duration, until: duration === "custom" ? until : null, reason }),
      });
      if (!res.ok) {
        const { error } = await res.json().catch(() => ({ error: "Could not update this plan." }));
        toast.error(error ?? "Could not update this plan.");
        return;
      }
      toast.success(plan === "free" ? "Dropped to Free." : `Granted ${plan}.`);
      setReason("");
      await load();
      onChanged();
    } catch {
      toast.error("Could not update this plan.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="py-20 flex justify-center">
        <Icon name="progress_activity" className="animate-spin text-[24px] text-on-surface-variant" />
      </div>
    );
  }
  if (!detail) return null;

  const u = detail.user;

  return (
    <div className="flex flex-col gap-stack-md">
      <button
        type="button"
        onClick={onClose}
        className="inline-flex w-fit items-center gap-1 text-label-sm font-label-sm text-secondary hover:underline"
      >
        <Icon name="arrow_back" className="text-[18px]" /> All subscriptions
      </button>

      {/* Current state */}
      <section className="flex flex-col gap-3 rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-col gap-0.5">
            <span className="text-title-md font-semibold text-primary">{u.name || u.email}</span>
            {u.name && <span className="text-body-sm text-on-surface-variant">{u.email}</span>}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className={`rounded-full px-3 py-1 text-label-sm font-label-sm font-semibold capitalize ${planChip[u.plan] ?? planChip.free}`}>
              {u.plan}
            </span>
            <span className={`whitespace-nowrap rounded-full px-3 py-1 text-label-sm font-label-sm font-semibold ${statusChip[u.status] ?? statusChip.inactive}`}>
              {label(STATUS_LABEL, u.status)}
            </span>
          </div>
        </div>

        <dl className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
          {[
            ["How they bought", u.plan === "free" ? "—" : MODE_LABEL[u.purchaseMode]],
            ["Billing interval", u.interval ?? "—"],
            [u.currentPeriodEnd && new Date(u.currentPeriodEnd) < new Date() ? "Ended" : "Access until",
              u.currentPeriodEnd ? formatDate(u.currentPeriodEnd) : u.status === "admin_grant" ? "No end date" : "—"],
            ["Joined", formatDate(u.createdAt)],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between gap-4 border-b border-outline-variant/20 py-1.5">
              <dt className={labelCls}>{k}</dt>
              <dd className="text-body-sm text-on-surface text-right break-all">{v}</dd>
            </div>
          ))}
        </dl>

        {u.purchaseMode === "legacy" && u.plan !== "free" && (
          <p className="rounded-lg bg-chip-amber-bg px-3 py-2 text-body-sm text-chip-amber-ink">
            This plan was set directly without a billing state, so nothing will ever expire it.
            Re-issue it below as a grant to give it an end date.
          </p>
        )}
      </section>

      {/* Grant form */}
      {u.isOwner ? (
        <p className="rounded-xl bg-chip-amber-bg px-5 py-4 text-body-sm text-chip-amber-ink">
          This is the owner account. It is unlimited through the server&apos;s ADMIN_EMAILS setting, so its plan
          can&apos;t be changed here.
        </p>
      ) : (
      <section className="flex flex-col gap-3 rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-5">
        <h2 className="text-title-md font-semibold text-primary">Change this plan</h2>
        <p className="text-body-sm text-on-surface-variant">
          Sets the plan, its interval and when access ends, all at once. Marked as an admin grant so
          it is never counted as a payment — and so it expires like one. Choose Free to drop the
          account back down immediately. oMyImage doesn&apos;t enforce plan limits yet, so for now this
          changes what the account shows.
        </p>

        <form onSubmit={submit} className="flex flex-col gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5">
              <span className={labelCls}>Plan</span>
              <select value={plan} onChange={(e) => setPlan(e.target.value)} className={inputCls}>
                {PLANS.map((p) => (
                  <option key={p} value={p} className="bg-surface text-on-surface">{p}</option>
                ))}
              </select>
            </label>

            <fieldset className="flex flex-col gap-1.5">
              <legend className={labelCls}>Length</legend>
              <div className="flex flex-wrap gap-2 pt-1">
                {DURATIONS.map((d) => (
                  <label
                    key={d.value}
                    className={`cursor-pointer rounded-full px-3 py-1.5 text-label-sm font-label-sm font-semibold ${
                      duration === d.value
                        ? "bg-chip-teal-bg text-chip-teal-ink"
                        : "bg-surface-container text-on-surface-variant"
                    } ${plan === "free" && d.value !== "lifetime" ? "opacity-40" : ""}`}
                  >
                    <input
                      type="radio"
                      name="duration"
                      value={d.value}
                      checked={duration === d.value}
                      disabled={plan === "free" && d.value !== "lifetime"}
                      onChange={() => setDuration(d.value)}
                      className="sr-only"
                    />
                    {d.label}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          {duration === "custom" && plan !== "free" && (
            <label className="flex flex-col gap-1.5">
              <span className={labelCls}>Access ends after</span>
              <input
                type="date"
                required
                value={until}
                min={new Date(Date.now() + 86_400_000).toISOString().slice(0, 10)}
                onChange={(e) => setUntil(e.target.value)}
                className={inputCls}
              />
            </label>
          )}

          <label className="flex flex-col gap-1.5">
            <span className={labelCls}>Reason (recorded in the audit log)</span>
            <textarea
              required
              minLength={3}
              maxLength={500}
              rows={2}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Support credit for the failed conversion on 2 Aug"
              className={inputCls}
            />
          </label>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="submit"
              disabled={saving || reason.trim().length < 3}
              className="inline-flex items-center gap-2 rounded-lg bg-primary text-on-primary px-5 py-2.5 text-label-sm font-label-sm font-semibold hover-lift disabled:opacity-60"
            >
              {saving && <Icon name="progress_activity" className="animate-spin text-[18px]" />}
              {plan === "free" ? "Drop to Free" : `Grant ${plan}`}
            </button>
            <span className="text-body-sm text-on-surface-variant">
              {plan === "free"
                ? "Takes effect immediately."
                : `Access ends: ${previewEnd(duration, until)}.`}
            </span>
          </div>
        </form>
      </section>
      )}

      {/* This user's audit trail */}
      <section className="flex flex-col gap-3 rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-5">
        <h2 className="text-title-md font-semibold text-primary">Admin changes</h2>
        {detail.audit.length === 0 ? (
          <p className="text-body-sm text-on-surface-variant">No admin has changed this account.</p>
        ) : (
          <ul className="flex flex-col gap-3">
            {detail.audit.map((a) => (
              <li key={a.id} className="flex flex-col gap-1 border-l-2 border-outline-variant/40 pl-3">
                <span className="text-body-sm text-on-surface">
                  <strong className="font-semibold">{a.adminEmail ?? "Unknown admin"}</strong>
                  {" — "}
                  {a.before?.plan !== a.after?.plan
                    ? `plan ${String(a.before?.plan ?? "none")} → ${String(a.after?.plan ?? "none")}`
                    : a.action.replace(/_/g, " ")}
                </span>
                {a.reason && <span className="text-body-sm text-on-surface-variant">{a.reason}</span>}
                <span className="text-label-sm font-label-sm text-on-surface-variant">
                  {formatDateTime(a.createdAt)}
                  {a.ip ? ` · ${a.ip}` : ""}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

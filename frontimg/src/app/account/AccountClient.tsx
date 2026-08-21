"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { useRequireAuth } from "@/lib/auth/useRequireAuth";
import { authFetch } from "@/lib/api";
import { planLabel, planAllowanceLabel, PLAN_MAX_UPLOAD_MB } from "@/lib/plan-limits";

/**
 * Account settings. Ported from oMyPDF with one section replaced.
 *
 * oMyPDF's Subscription card calls lib/billing (getBillingStatus /
 * cancelSubscription) against Razorpay. oMyImage has no billing layer at all —
 * both paid plans are "Coming soon" on the pricing page — so rather than port a
 * card that would call endpoints that do not exist, this shows the current plan
 * and points at /pricing. Swap it for the real thing when billing lands.
 */
export function AccountClient() {
  const { user, profile, loading, hasPassword, signOut, refreshProfile } = useRequireAuth();
  const router = useRouter();
  const [signingOut, setSigningOut] = useState(false);

  // Display name editor
  const [name, setName] = useState("");
  const [savingName, setSavingName] = useState(false);

  // Change password
  const [currentPw, setCurrentPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [savingPw, setSavingPw] = useState(false);

  // AuthProvider caches the profile from when the SPA first mounted, so re-fetch
  // on arrival. Keyed on user.id, not the user object: refreshProfile replaces
  // `user` with a new object, so depending on the object itself would loop.
  useEffect(() => {
    if (!user?.id) return;
    void refreshProfile();
  }, [user?.id, refreshProfile]);

  useEffect(() => {
    setName(user?.name ?? "");
  }, [user?.name]);

  const saveName = async () => {
    setSavingName(true);
    try {
      const res = await authFetch("/me", {
        method: "PATCH",
        body: JSON.stringify({ name: name.trim() }),
      });
      if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error ?? "Could not save name.");
      await refreshProfile();
      toast.success("Name updated.");
    } catch (e) {
      toast.error((e as Error).message);
    } finally {
      setSavingName(false);
    }
  };

  const changePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPw.length < 6) {
      toast.error("New password must be at least 6 characters.");
      return;
    }
    if (newPw !== confirmPw) {
      toast.error("New passwords don't match.");
      return;
    }
    setSavingPw(true);
    try {
      const res = await authFetch("/change-password", {
        method: "POST",
        body: JSON.stringify({ currentPassword: currentPw, newPassword: newPw }),
      });
      if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error ?? "Could not change password.");
      setCurrentPw(""); setNewPw(""); setConfirmPw("");
      await refreshProfile();
      toast.success(hasPassword ? "Password changed." : "Password set.");
    } catch (e) {
      toast.error((e as Error).message);
    } finally {
      setSavingPw(false);
    }
  };

  if (loading || !user) {
    return (
      <div className="min-h-[calc(100dvh-4rem)] flex items-center justify-center">
        <Icon name="progress_activity" className="animate-spin text-[28px] text-on-surface-variant" />
      </div>
    );
  }

  const email = user.email ?? "—";
  const plan = profile?.plan ?? "free";
  const label = planLabel(plan);
  const memberSince = profile?.created_at
    ? new Date(profile.created_at).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })
    : null;
  const initial = (email[0] ?? "?").toUpperCase();

  const handleSignOut = () => {
    setSigningOut(true);
    signOut();
    toast.success("Signed out.");
    router.replace("/");
  };

  return (
    <div className="max-w-2xl mx-auto px-margin-mobile md:px-gutter pt-stack-lg pb-stack-lg flex flex-col gap-stack-lg">
      <header className="flex items-center gap-4">
        <span className="w-14 h-14 rounded-full bg-secondary text-on-secondary flex items-center justify-center text-headline-md font-semibold shrink-0">
          {initial}
        </span>
        <div className="min-w-0">
          <h1 className="text-headline-md font-semibold text-primary truncate">My Account</h1>
          <p className="text-body-md text-on-surface-variant truncate">{email}</p>
        </div>
      </header>

      <section className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow divide-y divide-surface-variant">
        <Row icon="mail" label="Email" value={email} />
        <Row
          icon="workspace_premium"
          label="Plan"
          value={
            <span className="inline-flex items-center gap-2">
              {label}
              {plan === "free" && (
                <span className="rounded-full bg-surface-container px-2 py-0.5 text-label-sm font-label-sm text-on-surface-variant">
                  Free plan
                </span>
              )}
            </span>
          }
        />
        <Row icon="bolt" label="Allowance" value={planAllowanceLabel(plan)} />
        {memberSince && <Row icon="calendar_today" label="Member since" value={memberSince} />}
      </section>

      {/* ── Display name ─────────────────────────────────────────────────── */}
      <section className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-5 flex flex-col gap-4">
        <h2 className="text-body-lg font-bold text-primary flex items-center gap-2">
          <Icon name="badge" className="text-[20px] text-secondary" />
          Display name
        </h2>
        <p className="text-label-md text-on-surface-variant -mt-2">Optional — we&apos;ll greet you by this name.</p>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={80}
            placeholder="Your name"
            className="flex-1 px-4 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant outline-none text-body-md text-primary placeholder:text-on-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors"
          />
          <button
            type="button"
            onClick={saveName}
            disabled={savingName || name.trim() === (user?.name ?? "")}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary text-on-secondary px-5 py-2.5 text-body-md font-semibold hover:bg-secondary-container transition-colors disabled:opacity-50"
          >
            <Icon name={savingName ? "progress_activity" : "save"} className={`text-[20px] ${savingName ? "animate-spin" : ""}`} />
            Save
          </button>
        </div>
      </section>

      {/* ── Password ─────────────────────────────────────────────────────── */}
      <section className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-5 flex flex-col gap-4">
        <h2 className="text-body-lg font-bold text-primary flex items-center gap-2">
          <Icon name="lock" className="text-[20px] text-secondary" />
          {hasPassword ? "Change password" : "Set a password"}
        </h2>
        {!hasPassword && (
          <p className="text-label-md text-on-surface-variant -mt-2">
            Your account uses Google sign-in. Set a password to also log in with email.
          </p>
        )}
        <form onSubmit={changePassword} className="flex flex-col gap-3">
          {hasPassword && (
            <input
              type="password"
              autoComplete="current-password"
              value={currentPw}
              onChange={(e) => setCurrentPw(e.target.value)}
              placeholder="Current password"
              className="px-4 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant outline-none text-body-md text-primary placeholder:text-on-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors"
            />
          )}
          <input
            type="password"
            autoComplete="new-password"
            value={newPw}
            onChange={(e) => setNewPw(e.target.value)}
            placeholder="New password (at least 6 characters)"
            className="px-4 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant outline-none text-body-md text-primary placeholder:text-on-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors"
          />
          <input
            type="password"
            autoComplete="new-password"
            value={confirmPw}
            onChange={(e) => setConfirmPw(e.target.value)}
            placeholder="Confirm new password"
            className="px-4 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-variant outline-none text-body-md text-primary placeholder:text-on-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors"
          />
          <button
            type="submit"
            disabled={savingPw || !newPw}
            className="self-start inline-flex items-center gap-2 rounded-lg bg-secondary text-on-secondary px-5 py-2.5 text-body-md font-semibold hover:bg-secondary-container transition-colors disabled:opacity-50"
          >
            <Icon name={savingPw ? "progress_activity" : "lock_reset"} className={`text-[20px] ${savingPw ? "animate-spin" : ""}`} />
            {hasPassword ? "Update password" : "Set password"}
          </button>
        </form>
      </section>

      {/* ── Plan ─────────────────────────────────────────────────────────── */}
      <section className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-5 flex flex-col gap-4">
        <h2 className="text-body-lg font-bold text-primary flex items-center gap-2">
          <Icon name="receipt_long" className="text-[20px] text-secondary" />
          Plan
        </h2>
        <p className="text-body-md text-on-surface-variant">
          You&apos;re on the <strong className="text-primary">{label}</strong> plan:{" "}
          {planAllowanceLabel(plan)}, and server processing for files up to{" "}
          {PLAN_MAX_UPLOAD_MB[plan] ?? PLAN_MAX_UPLOAD_MB.free} MB. Everything that runs in your
          browser is unlimited on every plan.
        </p>
        <p className="text-label-md text-on-surface-variant">
          Paid plans aren&apos;t available to buy yet, so there is nothing to cancel and no payment
          method stored.
        </p>
        <Link
          href="/pricing"
          className="self-start inline-flex items-center gap-2 rounded-lg bg-secondary text-on-secondary px-5 py-2.5 text-body-md font-semibold shadow-md shadow-secondary/30 hover:-translate-y-px transition-all"
        >
          <Icon name="workspace_premium" className="text-[20px]" />
          See plans
        </Link>
      </section>

      <button
        type="button"
        onClick={handleSignOut}
        disabled={signingOut}
        className="self-start inline-flex items-center gap-2 rounded-lg border border-surface-variant bg-surface-container-lowest px-5 py-2.5 text-body-md font-semibold text-on-surface hover:bg-error-container hover:text-error hover:border-error transition-colors disabled:opacity-50"
      >
        <Icon name={signingOut ? "progress_activity" : "logout"} className={`text-[20px] ${signingOut ? "animate-spin" : ""}`} />
        Sign out
      </button>
    </div>
  );
}

function Row({ icon, label, value }: { icon: string; label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 px-5 py-4">
      <Icon name={icon} className="text-[22px] text-on-surface-variant shrink-0" />
      <span className="text-body-md text-on-surface-variant w-32 shrink-0">{label}</span>
      <span className="text-body-md font-medium text-on-surface min-w-0 truncate">{value}</span>
    </div>
  );
}

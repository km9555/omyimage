import { formatDate } from "../admin-ui";

/** One row of GET /api/image/admin/users (and the `user` of GET /api/image/admin/users/:id). */
export interface AdminUser {
  id: string;
  email: string;
  name: string | null;
  emailVerified: boolean;
  viaGoogle: boolean;
  createdAt: string;
  plan: string;
  role: string;
  /** In ADMIN_EMAILS. Its role and plan can't be changed from the console. */
  isOwner: boolean;
  subscriptionStatus: string;
  interval: string | null;
  currentPeriodEnd: string | null;
  runsToday: number;
  /** Sign-up country, else last-seen country — see countrySource. */
  country: string | null;
  countrySource: "signup" | "last_seen" | null;
  lastSeenAt: string | null;
  lastSeenCountry: string | null;
}

export interface UserSummary {
  total: number;
  verified: number;
  google: number;
  new7d: number;
  active24h: number;
  plans: { plan: string; count: number }[];
  countries: { code: string | null; count: number }[];
}

export interface UserDetail {
  user: AdminUser & { hasPassword: boolean; signupCountry: string | null };
  activity: {
    runs30d: number;
    runsAllTime: number;
    lastRunAt: string | null;
    runsToday: number;
    daily: { day: string; count: number }[];
    topTools: { tool: string; count: number }[];
  };
}

/** Same wording rule the user sees on their own account page. */
export function billingLine(u: Pick<AdminUser, "plan" | "currentPeriodEnd" | "subscriptionStatus">): {
  text: string;
  tone: string;
} {
  if (u.plan === "free") return { text: "—", tone: "text-on-surface-variant" };
  if (!u.currentPeriodEnd) {
    return u.subscriptionStatus === "admin_grant"
      ? { text: "Granted, no end date", tone: "text-chip-amber-ink" }
      : { text: "No end date set", tone: "text-on-surface-variant" };
  }
  const days = Math.ceil((new Date(u.currentPeriodEnd).getTime() - Date.now()) / 86_400_000);
  const verb = u.subscriptionStatus === "active" ? "Renews" : "Ends";
  if (days < 0) return { text: `Lapsed ${formatDate(u.currentPeriodEnd)}`, tone: "text-error" };
  if (days <= 7) return { text: `${verb} ${formatDate(u.currentPeriodEnd)}`, tone: "text-chip-amber-ink" };
  return { text: `${verb} ${formatDate(u.currentPeriodEnd)}`, tone: "text-on-surface-variant" };
}

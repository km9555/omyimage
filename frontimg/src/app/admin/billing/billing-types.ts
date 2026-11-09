/** Shapes returned by /api/image/admin/billing/*, plus the formatting they share. */

export type PurchaseMode = "order" | "subscription" | "grant" | "legacy";

export interface BillingOverview {
  breakdown: { plan: string; interval: string; status: string; purchaseMode: PurchaseMode; count: number }[];
  lifecycle: { active: number; lapsed: number; expiringSoon: number; granted: number };
  /** False until oMyImage has a payment provider. */
  paymentsEnabled: boolean;
}

export interface BillingSubscription {
  id: string;
  email: string;
  name: string | null;
  createdAt: string | null;
  plan: string;
  interval: string | null;
  status: string;
  currentPeriodEnd: string | null;
  purchaseMode: PurchaseMode;
  isOwner: boolean;
}

export interface AuditEntry {
  id: string;
  adminEmail: string | null;
  targetUserId: string | null;
  targetEmail: string | null;
  action: string;
  before: Record<string, unknown> | null;
  after: Record<string, unknown> | null;
  reason: string | null;
  ip: string | null;
  createdAt: string | null;
}

export const PLANS = ["free", "plus", "pro"] as const;

export const planChip: Record<string, string> = {
  free: "bg-surface-container text-on-surface-variant",
  plus: "bg-chip-sky-bg text-chip-sky-ink",
  pro: "bg-chip-teal-bg text-chip-teal-ink",
};

/**
 * There is no red chip token in globals.css (only teal/sky/amber), so states
 * that need to read as a problem borrow the error container colours.
 */
export const statusChip: Record<string, string> = {
  active: "bg-chip-teal-bg text-chip-teal-ink",
  one_time: "bg-chip-sky-bg text-chip-sky-ink",
  admin_grant: "bg-chip-amber-bg text-chip-amber-ink",
  created: "bg-surface-container text-on-surface-variant",
  inactive: "bg-surface-container text-on-surface-variant",
  cancelled: "bg-error-container text-on-error-container",
  completed: "bg-surface-container text-on-surface-variant",
  halted: "bg-error-container text-on-error-container",
  pending: "bg-error-container text-on-error-container",
};

export const MODE_LABEL: Record<PurchaseMode, string> = {
  order: "One-time order",
  subscription: "Subscription",
  grant: "Admin grant",
  legacy: "Set manually (legacy)",
};

export const STATUS_LABEL: Record<string, string> = {
  active: "Active",
  one_time: "Active (one-time)",
  admin_grant: "Admin grant",
  created: "Checkout started",
  inactive: "Inactive",
  cancelled: "Cancelled",
  completed: "Completed",
  halted: "Payment halted",
  pending: "Payment pending",
};

export function label(map: Record<string, string>, key: string | null): string {
  if (!key) return "—";
  return map[key] ?? key.replace(/_/g, " ");
}

export function formatDate(iso: string | null): string {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric", month: "short", day: "numeric",
  });
}

export function formatDateTime(iso: string | null): string {
  if (!iso) return "—";
  return new Date(iso).toLocaleString(undefined, {
    year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit",
  });
}

/** Days until a period ends; negative once it has passed. */
export function daysUntil(iso: string | null): number | null {
  if (!iso) return null;
  return Math.ceil((new Date(iso).getTime() - Date.now()) / 86_400_000);
}

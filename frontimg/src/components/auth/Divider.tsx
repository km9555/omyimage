"use client";

import { useT } from "@/i18n/I18nScope";

/** "or" divider used between OAuth and email forms. */
export function Divider({ label }: { label?: string }) {
  const t = useT();
  // Resolved here rather than as a default argument, which cannot call a hook
  // (conversion.md §6.2.11).
  const text = label ?? t("or|divider");
  return (
    <div className="flex items-center gap-3">
      <span className="h-px flex-1 bg-surface-variant" />
      <span className="text-label-sm font-label-sm text-on-surface-variant">{text}</span>
      <span className="h-px flex-1 bg-surface-variant" />
    </div>
  );
}

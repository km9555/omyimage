/** "or" divider used between OAuth and email forms. */
export function Divider({ label = "or" }: { label?: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px flex-1 bg-surface-variant" />
      <span className="text-label-sm font-label-sm text-on-surface-variant">{label}</span>
      <span className="h-px flex-1 bg-surface-variant" />
    </div>
  );
}

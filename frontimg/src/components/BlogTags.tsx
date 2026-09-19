/**
 * Blog tag chips. Rotates the site's soothing chip triad (teal / sky / amber)
 * across a post's (up to 3) tags so the palette stays consistent with the rest
 * of the UI. Purely presentational — tags are not clickable filters yet.
 */
const CHIP_CLASSES = [
  "bg-chip-teal-bg text-chip-teal-ink border-chip-teal-border",
  "bg-chip-sky-bg text-chip-sky-ink border-chip-sky-border",
  "bg-chip-amber-bg text-chip-amber-ink border-chip-amber-border",
] as const;

export function TagChips({ tags }: { tags: string[] }) {
  if (!tags?.length) return null;
  return (
    <ul className="flex flex-wrap gap-1.5">
      {tags.map((tag, i) => (
        <li
          key={tag}
          className={`text-label-sm font-label-sm rounded-full border px-2.5 py-0.5 ${CHIP_CLASSES[i % CHIP_CLASSES.length]}`}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

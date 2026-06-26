import type { CSSProperties } from "react";

/**
 * Material Symbols (Outlined) icon.
 * `fill` switches to the solid variant; `bold` keeps it outlined but with a
 * heavier stroke (wght 600) for the premium, no-tile card style.
 */
export function Icon({
  name,
  className = "",
  fill = false,
  bold = false,
  style,
}: {
  name: string;
  className?: string;
  fill?: boolean;
  bold?: boolean;
  style?: CSSProperties;
}) {
  const variant = bold ? " bold" : fill ? " fill" : "";
  return (
    <span
      className={`material-symbols-outlined${variant} ${className}`}
      aria-hidden="true"
      style={style}
    >
      {name}
    </span>
  );
}

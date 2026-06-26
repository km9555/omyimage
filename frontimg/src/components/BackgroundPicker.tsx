"use client";

import { useState } from "react";
import { Icon } from "@/components/Icon";

export interface BgValue {
  transparent: boolean;
  color: string;
}

/** Resolve a background value to a canvas fill (null = keep transparency). */
export function resolveBg(v: BgValue): string | null {
  return v.transparent ? null : v.color;
}

const COLORS: { name: string; value: string }[] = [
  { name: "White", value: "#ffffff" },
  { name: "Black", value: "#000000" },
  { name: "Gray", value: "#9ca3af" },
  { name: "Charcoal", value: "#374151" },
  { name: "Gold", value: "#f5a623" },
  { name: "Red", value: "#ef4444" },
  { name: "Green", value: "#22c55e" },
  { name: "Blue", value: "#3b82f6" },
];

/** Checkerboard fill that signals "transparent". */
const CHECKER: React.CSSProperties = {
  backgroundColor: "#fff",
  backgroundImage:
    "linear-gradient(45deg,#cbd5e1 25%,transparent 25%),linear-gradient(-45deg,#cbd5e1 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#cbd5e1 75%),linear-gradient(-45deg,transparent 75%,#cbd5e1 75%)",
  backgroundSize: "8px 8px",
  backgroundPosition: "0 0,0 4px,4px -4px,-4px 0",
};

/** Readable check/icon color for a given swatch background. */
function contrastOn(hex: string): string {
  const c = hex.replace("#", "");
  const r = parseInt(c.slice(0, 2), 16);
  const g = parseInt(c.slice(2, 4), 16);
  const b = parseInt(c.slice(4, 6), 16);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.6 ? "#1c1a17" : "#ffffff";
}

const swatchCls = (active: boolean) =>
  `relative h-8 w-8 rounded-full border transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/70 ${
    active
      ? "ring-2 ring-secondary ring-offset-2 ring-offset-surface-container-lowest border-transparent"
      : "border-outline-variant/60 hover:border-secondary/60"
  }`;

/**
 * Reusable background swatch picker: a row of color chips, an optional
 * Transparent (checkerboard) chip, and a custom color picker with a palette
 * icon. The active color's name is shown in a fixed-width label (no layout
 * shift / wobble on hover).
 */
export function BackgroundPicker({
  value,
  onChange,
  allowTransparent = true,
  label = "Background",
}: {
  value: BgValue;
  onChange: (v: BgValue) => void;
  allowTransparent?: boolean;
  label?: string;
}) {
  const [hover, setHover] = useState<string | null>(null);
  const matched = COLORS.find((c) => c.value.toLowerCase() === value.color.toLowerCase());
  const isCustom = !value.transparent && !matched;
  const activeName = value.transparent ? "Transparent" : matched?.name ?? "Custom";
  const hoverProps = (name: string) => ({
    onMouseEnter: () => setHover(name),
    onMouseLeave: () => setHover(null),
    onFocus: () => setHover(name),
    onBlur: () => setHover(null),
  });

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-start justify-between gap-2">
        <span className="flex-1 min-w-0 text-label-sm font-label-sm text-on-surface-variant">{label}</span>
        <span className="w-28 shrink-0 text-right text-label-sm font-label-sm font-semibold text-on-surface truncate">
          {hover ?? activeName}
        </span>
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        {allowTransparent && (
          <button
            type="button"
            title="Transparent"
            aria-label="Transparent"
            aria-pressed={value.transparent}
            {...hoverProps("Transparent")}
            onClick={() => onChange({ ...value, transparent: true })}
            className={swatchCls(value.transparent)}
            style={CHECKER}
          >
            {value.transparent && <Icon name="check" className="absolute inset-0 m-auto w-fit h-fit text-[15px]" style={{ color: "#374151" }} />}
          </button>
        )}
        {COLORS.map((c) => {
          const active = !value.transparent && value.color.toLowerCase() === c.value;
          return (
            <button
              key={c.name}
              type="button"
              title={c.name}
              aria-label={c.name}
              aria-pressed={active}
              {...hoverProps(c.name)}
              onClick={() => onChange({ transparent: false, color: c.value })}
              className={swatchCls(active)}
              style={{ backgroundColor: c.value }}
            >
              {active && <Icon name="check" className="absolute inset-0 m-auto w-fit h-fit text-[15px]" style={{ color: contrastOn(c.value) }} />}
            </button>
          );
        })}
        <label
          title="Custom color"
          aria-label="Custom color"
          onMouseEnter={() => setHover("Custom")}
          onMouseLeave={() => setHover(null)}
          className={`relative h-8 w-8 rounded-full border cursor-pointer grid place-items-center transition-shadow focus-within:ring-2 focus-within:ring-secondary/70 ${
            isCustom ? "ring-2 ring-secondary ring-offset-2 ring-offset-surface-container-lowest border-transparent" : "border-outline-variant/60 hover:border-secondary/60"
          }`}
          style={{ backgroundColor: isCustom ? value.color : "var(--color-surface-container)" }}
        >
          <Icon name="palette" fill className="text-[16px]" style={{ color: isCustom ? contrastOn(value.color) : "var(--color-on-surface-variant)" }} />
          <input
            type="color"
            value={value.color}
            onChange={(e) => onChange({ transparent: false, color: e.target.value })}
            onFocus={() => setHover("Custom")}
            onBlur={() => setHover(null)}
            aria-label="Custom background color"
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </label>
      </div>
    </div>
  );
}

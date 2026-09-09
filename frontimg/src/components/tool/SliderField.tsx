"use client";

/**
 * A slider with an editable number box beside it.
 *
 * Every other slider in this codebase pairs a range input with a read-only
 * `<span>` readout, which is fine for a rough setting and useless when someone
 * wants exactly 50. The brush controls need a typeable value, so this is the
 * one place the pairing lives rather than a sixth copy of the span pattern.
 *
 * The box is only committed on blur or Enter, not on every keystroke: clamping
 * mid-type turns "5" into "5" then "50" into "5" as soon as the first digit
 * lands outside the range, and the field fights the user.
 */

import { useEffect, useState } from "react";

export function SliderField({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  suffix,
  disabled = false,
}: {
  label: string;
  value: number;
  onChange: (next: number) => void;
  min: number;
  max: number;
  step?: number;
  /** Shown inside the label, e.g. "px". */
  suffix?: string;
  disabled?: boolean;
}) {
  const [text, setText] = useState(String(value));

  // Follow the value when it changes from elsewhere (a preset, a reset), but
  // never while the box is mid-edit — that is what the focus check is for.
  useEffect(() => {
    setText((cur) => (Number(cur) === value ? cur : String(value)));
  }, [value]);

  const commit = () => {
    const n = Number(text);
    const next = Number.isFinite(n) ? Math.max(min, Math.min(max, n)) : value;
    onChange(next);
    setText(String(next));
  };

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-label-sm font-label-sm text-on-surface-variant">
        {label}
        {suffix ? ` (${suffix})` : ""}
      </label>
      <div className="flex items-center gap-3">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(Number(e.target.value))}
          aria-label={label}
          className="min-w-0 flex-1 accent-secondary disabled:opacity-40"
        />
        <input
          type="number"
          min={min}
          max={max}
          step={step}
          value={text}
          disabled={disabled}
          onChange={(e) => setText(e.target.value)}
          onBlur={commit}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              commit();
            }
          }}
          aria-label={`${label} value`}
          className="w-20 shrink-0 rounded-lg border border-surface-variant bg-surface-container-lowest px-2.5 py-2 text-center text-body-md text-primary outline-none focus:border-secondary focus:ring-1 focus:ring-secondary disabled:opacity-40"
        />
      </div>
    </div>
  );
}

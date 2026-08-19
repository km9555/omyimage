"use client";

import { useState, type InputHTMLAttributes } from "react";
import { Icon } from "@/components/Icon";

interface AuthFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  /** Show a password visibility toggle (renders as type password/text). */
  password?: boolean;
  error?: string | null;
  hint?: string;
}

const baseInput =
  "w-full px-4 py-2.5 rounded-lg bg-surface-container-lowest border outline-none text-body-md text-primary placeholder:text-on-surface-variant focus:ring-1 transition-colors";

export function AuthField({ label, password, error, hint, id, ...props }: AuthFieldProps) {
  const [show, setShow] = useState(false);
  const fieldId = id ?? props.name ?? label.toLowerCase().replace(/\s+/g, "-");
  const borderClass = error
    ? "border-error focus:border-error focus:ring-error"
    : "border-surface-variant focus:border-secondary focus:ring-secondary";

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={fieldId} className="text-body-md font-semibold text-on-surface">
        {label}
      </label>
      <div className="relative">
        <input
          id={fieldId}
          type={password ? (show ? "text" : "password") : props.type ?? "text"}
          className={`${baseInput} ${borderClass} ${password ? "pr-11" : ""}`}
          aria-invalid={!!error}
          {...props}
        />
        {password && (
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            aria-label={show ? "Hide password" : "Show password"}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary"
          >
            <Icon name={show ? "visibility_off" : "visibility"} className="text-[20px]" />
          </button>
        )}
      </div>
      {error ? (
        <p className="text-label-sm font-label-sm text-error">{error}</p>
      ) : hint ? (
        <p className="text-label-sm font-label-sm text-on-surface-variant">{hint}</p>
      ) : null}
    </div>
  );
}

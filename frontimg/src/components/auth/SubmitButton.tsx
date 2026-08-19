"use client";

import { Icon } from "@/components/Icon";

export function SubmitButton({
  children,
  loading,
  disabled,
  type = "submit",
  onClick,
}: {
  children: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  type?: "submit" | "button";
  onClick?: () => void;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className="w-full inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-container text-on-secondary font-semibold py-3 rounded-lg transition-colors disabled:opacity-50"
    >
      {loading && <Icon name="progress_activity" className="animate-spin text-[20px]" />}
      {children}
    </button>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { AuthShell } from "@/components/auth/AuthShell";
import { AuthField } from "@/components/auth/AuthField";
import { SubmitButton } from "@/components/auth/SubmitButton";
import { authFetch } from "@/lib/api";
import { authErrorMessage } from "@/lib/auth/errors";
import { localeHref } from "@/lib/i18n/links";
import { useLocale, useT } from "@/i18n/I18nScope";

export function ResetPasswordForm() {
  const t = useT();
  const locale = useLocale();
  const router = useRouter();
  const params = useSearchParams();
  const token = params.get("token");

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (!token) {
    return (
      <AuthShell
        title={t("Link expired")}
        subtitle={t("This password reset link is invalid or has expired.")}
        footer={
          <Link href={localeHref("/forgot-password", locale)} className="font-semibold text-secondary hover:underline">
            {t("Request a new link")}
          </Link>
        }
      >
        <Link
          href={localeHref("/forgot-password", locale)}
          className="w-full inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-container text-on-secondary font-semibold py-3 rounded-lg transition-colors"
        >
          {t("Request a new link")}
        </Link>
      </AuthShell>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (password.length < 6) {
      setError(t("Password must be at least 6 characters."));
      return;
    }
    if (password !== confirm) {
      setError(t("Passwords don't match."));
      return;
    }
    setLoading(true);
    try {
      const res = await authFetch("/reset-password", {
        method: "POST",
        body: JSON.stringify({ token, password }),
      });
      const data = await res.json() as { error?: string };
      if (!res.ok) {
        toast.error(authErrorMessage(new Error(data.error ?? "Reset failed.")));
        return;
      }
      toast.success(t("Password updated. Please log in."));
      router.replace(localeHref("/login", locale));
    } catch (err) {
      toast.error(authErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthShell title={t("Set a new password")} subtitle={t("Choose a strong password for your account.")}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-stack-md">
        <AuthField
          label={t("New password")}
          name="password"
          password
          autoComplete="new-password"
          placeholder={t("At least 6 characters")}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <AuthField
          label={t("Confirm new password")}
          name="confirm"
          password
          autoComplete="new-password"
          placeholder={t("Re-enter your password")}
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          error={error}
          required
        />
        <SubmitButton loading={loading}>{t("Update password")}</SubmitButton>
      </form>
    </AuthShell>
  );
}

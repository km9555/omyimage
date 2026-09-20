"use client";

import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { AuthShell } from "@/components/auth/AuthShell";
import { AuthField } from "@/components/auth/AuthField";
import { SubmitButton } from "@/components/auth/SubmitButton";
import { Icon } from "@/components/Icon";
import { authFetch } from "@/lib/api";
import { authErrorMessage } from "@/lib/auth/errors";
import { localeHref } from "@/lib/i18n/links";
import { useLocale, useT } from "@/i18n/I18nScope";

export function ForgotPasswordForm() {
  const t = useT();
  const locale = useLocale();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await authFetch("/forgot-password", {
        method: "POST",
        body: JSON.stringify({ email: email.trim() }),
      });
      if (!res.ok) {
        const data = await res.json() as { error?: string };
        toast.error(authErrorMessage(new Error(data.error ?? "Request failed.")));
        return;
      }
      // The backend answers ok whether or not the account exists, and the copy
      // below is hedged to match — confirming an address here would turn this
      // form into an account-enumeration oracle.
      setSent(true);
    } catch (err) {
      toast.error(authErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <AuthShell
        title={t("Check your inbox")}
        subtitle={t("If an account exists for {email}, we sent a password reset link.", { email })}
        footer={
          <Link href={localeHref("/login", locale)} className="font-semibold text-secondary hover:underline">
            {t("Back to login")}
          </Link>
        }
      >
        <div className="flex flex-col items-center gap-3 py-2 text-center">
          <span className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center">
            <Icon name="lock_reset" fill className="text-[34px] text-secondary" />
          </span>
          <p className="text-body-md text-on-surface-variant">
            {t("The link expires in 1 hour. Didn't get it? Check spam or try again.")}
          </p>
        </div>
      </AuthShell>
    );
  }

  return (
    <AuthShell
      title={t("Reset your password")}
      subtitle={t("Enter your email and we'll send you a reset link.")}
      footer={
        <>
          {t("Remembered it?")}{" "}
          <Link href={localeHref("/login", locale)} className="font-semibold text-secondary hover:underline">
            {t("Log in")}
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-stack-md">
        <AuthField
          label={t("Email")}
          name="email"
          type="email"
          autoComplete="email"
          /* i18n-raw: an example address, the same in every language */
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <SubmitButton loading={loading}>{t("Send reset link")}</SubmitButton>
      </form>
    </AuthShell>
  );
}

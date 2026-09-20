"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { AuthShell } from "@/components/auth/AuthShell";
import { AuthField } from "@/components/auth/AuthField";
import { SubmitButton } from "@/components/auth/SubmitButton";
import { GoogleButton } from "@/components/auth/GoogleButton";
import { Divider } from "@/components/auth/Divider";
import { authFetch } from "@/lib/api";
import { useAuth } from "@/lib/auth/useAuth";
import { authErrorMessage } from "@/lib/auth/errors";
import { localeHref } from "@/lib/i18n/links";
import { useLocale, useT } from "@/i18n/I18nScope";

export function LoginForm() {
  const t = useT();
  const locale = useLocale();
  const router = useRouter();
  const params = useSearchParams();
  // Home, not /dashboard — oMyImage has no dashboard route, and on a static
  // export a redirect to a non-existent path is a hard 404.
  const redirect = params.get("redirect") || localeHref("/", locale);
  const { user, loading: authLoading, saveAndLoad } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [needsConfirm, setNeedsConfirm] = useState(false);

  useEffect(() => {
    if (!authLoading && user) router.replace(redirect);
  }, [authLoading, user, redirect, router]);

  // The backend bounces failed email links back here with a reason.
  useEffect(() => {
    const error = params.get("error");
    if (!error) return;
    if (error === "link_expired") toast.error(t("That link has expired. Request a new one below."));
    else if (error === "invalid_link") toast.error(t("That link was not valid."));
    else toast.error(t("Something went wrong. Please try again."));
  }, [params, t]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setNeedsConfirm(false);
    try {
      const res = await authFetch("/login", {
        method: "POST",
        body: JSON.stringify({ email: email.trim(), password }),
      });
      const data = await res.json() as { token?: string; error?: string; code?: string };
      if (!res.ok) {
        if (data.code === "EMAIL_NOT_CONFIRMED") setNeedsConfirm(true);
        toast.error(authErrorMessage(new Error(data.error ?? "Login failed.")));
        return;
      }
      await saveAndLoad(data.token!);
      toast.success(t("Welcome back!"));
      router.replace(redirect);
    } catch (err) {
      toast.error(authErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  const resend = async () => {
    try {
      await authFetch("/resend-verification", {
        method: "POST",
        body: JSON.stringify({ email: email.trim() }),
      });
      toast.success(t("Confirmation email sent — check your inbox."));
    } catch {
      toast.error(t("Could not resend. Please try again."));
    }
  };

  return (
    <AuthShell
      title={t("Welcome back")}
      subtitle={t("Log in to your oMyImage account")}
      footer={
        <>
          {t("Don't have an account?")}{" "}
          <Link href={`${localeHref("/signup", locale)}?redirect=${encodeURIComponent(redirect)}`} className="font-semibold text-secondary hover:underline">
            {t("Sign up")}
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
        <div className="flex flex-col gap-1.5">
          <AuthField
            label={t("Password")}
            name="password"
            password
            autoComplete="current-password"
            placeholder={t("Your password")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Link href={localeHref("/forgot-password", locale)} className="self-end text-label-sm font-label-sm text-secondary hover:underline">
            {t("Forgot password?")}
          </Link>
        </div>

        <SubmitButton loading={loading}>{t("Log in")}</SubmitButton>

        {needsConfirm && (
          <button type="button" onClick={resend} className="text-label-sm font-label-sm text-secondary hover:underline">
            {t("Resend confirmation email")}
          </button>
        )}
      </form>

      <Divider />
      <GoogleButton redirect={redirect} />

      <p className="text-center text-label-sm font-label-sm text-on-surface-variant">
        {t("You don't need an account to use the tools — every one of them works signed out.")}
      </p>
    </AuthShell>
  );
}

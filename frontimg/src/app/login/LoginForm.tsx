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

export function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  // Home, not /dashboard — oMyImage has no dashboard route, and on a static
  // export a redirect to a non-existent path is a hard 404.
  const redirect = params.get("redirect") || "/";
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
    if (error === "link_expired") toast.error("That link has expired. Request a new one below.");
    else if (error === "invalid_link") toast.error("That link was not valid.");
    else toast.error("Something went wrong. Please try again.");
  }, [params]);

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
      toast.success("Welcome back!");
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
      toast.success("Confirmation email sent — check your inbox.");
    } catch {
      toast.error("Could not resend. Please try again.");
    }
  };

  return (
    <AuthShell
      title="Welcome back"
      subtitle="Log in to your oMyImage account"
      footer={
        <>
          Don&apos;t have an account?{" "}
          <Link href={`/signup?redirect=${encodeURIComponent(redirect)}`} className="font-semibold text-secondary hover:underline">
            Sign up
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-stack-md">
        <AuthField
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="flex flex-col gap-1.5">
          <AuthField
            label="Password"
            name="password"
            password
            autoComplete="current-password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Link href="/forgot-password" className="self-end text-label-sm font-label-sm text-secondary hover:underline">
            Forgot password?
          </Link>
        </div>

        <SubmitButton loading={loading}>Log in</SubmitButton>

        {needsConfirm && (
          <button type="button" onClick={resend} className="text-label-sm font-label-sm text-secondary hover:underline">
            Resend confirmation email
          </button>
        )}
      </form>

      <Divider />
      <GoogleButton redirect={redirect} />

      <p className="text-center text-label-sm font-label-sm text-on-surface-variant">
        You don&apos;t need an account to use the tools — every one of them works signed out.
      </p>
    </AuthShell>
  );
}

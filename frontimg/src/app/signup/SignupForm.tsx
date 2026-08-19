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
import { Icon } from "@/components/Icon";
import { authFetch } from "@/lib/api";
import { useAuth } from "@/lib/auth/useAuth";
import { authErrorMessage } from "@/lib/auth/errors";

export function SignupForm() {
  const router = useRouter();
  const params = useSearchParams();
  // Home, not /dashboard — see the note in LoginForm.
  const redirect = params.get("redirect") || "/";
  const { user, loading: authLoading } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!authLoading && user) router.replace(redirect);
  }, [authLoading, user, redirect, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords don't match.");
      return;
    }
    if (!agree) {
      toast.error("Please accept the Terms and Privacy Policy.");
      return;
    }
    setLoading(true);
    try {
      const res = await authFetch("/register", {
        method: "POST",
        body: JSON.stringify({ email: email.trim(), password, name: name.trim() || undefined }),
      });
      const data = await res.json() as { error?: string };
      if (!res.ok) {
        toast.error(authErrorMessage(new Error(data.error ?? "Registration failed.")));
        return;
      }
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
        title="Check your inbox"
        subtitle={`We sent a confirmation link to ${email}. Click it to activate your account.`}
        footer={
          <>
            Wrong email?{" "}
            <button onClick={() => setSent(false)} className="font-semibold text-secondary hover:underline">
              Go back
            </button>
          </>
        }
      >
        <div className="flex flex-col items-center gap-3 py-2 text-center">
          <span className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center">
            <Icon name="mark_email_unread" fill className="text-[34px] text-secondary" />
          </span>
          <p className="text-body-md text-on-surface-variant">
            Didn&apos;t get it? Check spam, or wait a minute and try signing up again.
          </p>
          <Link href="/login" className="font-semibold text-secondary hover:underline">
            Back to login
          </Link>
        </div>
      </AuthShell>
    );
  }

  return (
    <AuthShell
      title="Create your account"
      subtitle="Create a free account — upgrade anytime."
      footer={
        <>
          Already have an account?{" "}
          <Link href={`/login?redirect=${encodeURIComponent(redirect)}`} className="font-semibold text-secondary hover:underline">
            Log in
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-stack-md">
        <AuthField
          label="Name (optional)"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="How should we address you?"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <AuthField
          label="Password"
          name="password"
          password
          autoComplete="new-password"
          placeholder="At least 6 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <AuthField
          label="Confirm password"
          name="confirm"
          password
          autoComplete="new-password"
          placeholder="Re-enter your password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          error={error}
          required
        />

        <label className="flex items-start gap-2.5 cursor-pointer">
          <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="mt-0.5 h-5 w-5 rounded accent-secondary" />
          <span className="text-label-sm font-label-sm text-on-surface-variant">
            I agree to the{" "}
            <Link href="/terms" className="text-secondary hover:underline">Terms</Link> and{" "}
            <Link href="/privacy" className="text-secondary hover:underline">Privacy Policy</Link>.
          </span>
        </label>

        <SubmitButton loading={loading}>Create account</SubmitButton>
      </form>

      <Divider />
      <GoogleButton redirect={redirect} label="Sign up with Google" />

      <p className="text-center text-label-sm font-label-sm text-on-surface-variant">
        The free tools stay free and will never require an account.
      </p>
    </AuthShell>
  );
}

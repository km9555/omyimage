import Link from "next/link";
import { Icon } from "@/components/Icon";

/**
 * Placeholder for /login and /signup.
 *
 * oMyImage has no auth layer — no accounts, no sessions, no backend /api/auth.
 * This page therefore contains NO email or password fields by design: a form
 * that collects credentials with nowhere to send them reads as data harvesting
 * or phishing and would be worse than having no page at all. Replace this with
 * a real form only when there is a backend to receive it.
 */
export function AccountsComingSoon({ mode }: { mode: "login" | "signup" }) {
  const isLogin = mode === "login";

  return (
    <div className="max-w-content mx-auto px-margin-mobile md:px-gutter py-16 md:py-24">
      <div className="mx-auto max-w-lg rounded-2xl border border-surface-variant bg-surface-container-lowest ambient-shadow p-8 sm:p-10 text-center">
        <span className="grid place-items-center w-14 h-14 rounded-full bg-secondary/15 mx-auto">
          <Icon name="schedule" className="text-[28px] text-secondary" />
        </span>

        <h1 className="mt-5 text-headline-md font-bold text-primary">Accounts are coming soon</h1>

        <p className="mt-3 text-body-md text-on-surface-variant leading-relaxed">
          {isLogin
            ? "There's nothing to sign in to yet — oMyImage doesn't have accounts."
            : "There's nothing to sign up for yet — oMyImage doesn't have accounts."}{" "}
          <strong className="text-on-surface">Every tool works right now without one.</strong>
        </p>

        <p className="mt-3 text-body-sm text-on-surface-variant leading-relaxed">
          Accounts will arrive alongside paid plans, for people who need larger files and more AI
          runs. The free tools will stay free and will never require signing in.
        </p>

        <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3 text-body-md font-semibold text-on-secondary shadow-md shadow-secondary/30 hover:bg-secondary-container transition-colors"
          >
            Browse all tools <Icon name="arrow_forward" className="text-[19px]" />
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-surface-variant px-6 py-3 text-body-md font-semibold text-on-surface-variant hover:text-primary hover:border-secondary/40 transition-colors"
          >
            See planned pricing
          </Link>
        </div>

        <p className="mt-7 text-label-sm font-label-sm text-on-surface-variant">
          We are not collecting email addresses or passwords on this page.
        </p>
      </div>
    </div>
  );
}

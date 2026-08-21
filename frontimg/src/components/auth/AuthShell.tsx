import Link from "next/link";
import { Logo } from "@/components/Logo";

/** Centered card layout shared by all auth pages, aligned to the site design. */
export function AuthShell({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <div className="min-h-[calc(100dvh-4rem)] flex flex-col items-center justify-center px-margin-mobile py-stack-lg">
      <div className="w-full max-w-md flex flex-col gap-stack-md">
        <Link href="/" className="flex items-center justify-center gap-2 mb-2">
          <Logo className="h-9 w-9" />
          <span className="text-headline-md font-black tracking-tight">
            <span className="text-primary">oMy</span>
            <span className="text-secondary">Image</span>
          </span>
        </Link>

        <div className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-6 sm:p-8 flex flex-col gap-stack-md">
          <div className="flex flex-col gap-1 text-center">
            <h1 className="text-headline-md font-semibold text-primary">{title}</h1>
            {subtitle && <p className="text-body-md text-on-surface-variant">{subtitle}</p>}
          </div>
          {children}
        </div>

        {footer && (
          <p className="text-center text-body-md text-on-surface-variant">{footer}</p>
        )}
      </div>
    </div>
  );
}

import type { ReactNode } from "react";
import Link from "next/link";

/**
 * Shared layout and prose blocks for the long-form legal pages
 * (/privacy, /terms, /refunds). Header + sticky table of contents + article.
 */

interface Section {
  id: string;
  title: string;
}

interface LegalShellProps {
  title: string;
  subtitle: string;
  updated: string;
  toc: Section[];
  children: ReactNode;
}

export function LegalShell({ title, subtitle, updated, toc, children }: LegalShellProps) {
  return (
    <div className="max-w-content mx-auto px-margin-mobile md:px-gutter py-12">
      {/* Header */}
      <div className="max-w-3xl mb-10">
        <p className="text-label-sm font-label-sm uppercase tracking-widest text-secondary mb-3">Legal</p>
        <h1 className="text-display-md font-black text-primary mb-3">{title}</h1>
        <p className="text-body-lg text-on-surface-variant">{subtitle}</p>
        <p className="text-label-sm font-label-sm text-on-surface-variant mt-3">
          Last updated: <time>{updated}</time>
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Sticky TOC sidebar */}
        <aside className="lg:sticky lg:top-24 lg:w-56 shrink-0 w-full bg-surface-container-lowest border border-surface-variant rounded-xl p-5">
          <p className="text-label-sm font-label-sm uppercase tracking-widest text-on-surface-variant mb-3">
            Contents
          </p>
          <nav className="flex flex-col gap-1.5">
            {toc.map((s) => (
              <Link
                key={s.id}
                href={`#${s.id}`}
                className="text-label-sm font-label-sm text-on-surface-variant hover:text-secondary hover:underline transition-colors leading-snug"
              >
                {s.title}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <article className="flex-1 min-w-0 flex flex-col gap-10 max-w-3xl">{children}</article>
      </div>
    </div>
  );
}

/* ─── Prose building blocks ─────────────────────────────────────── */

export function LegalSection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 flex flex-col gap-4">
      <h2 className="text-headline-sm font-bold text-primary border-b border-surface-variant pb-3">
        {title}
      </h2>
      {children}
    </section>
  );
}

export function LegalSubsection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-title-sm font-semibold text-primary">{title}</h3>
      {children}
    </div>
  );
}

export function LegalP({ children }: { children: ReactNode }) {
  return <p className="text-body-md text-on-surface leading-relaxed">{children}</p>;
}

export function LegalUl({ children }: { children: ReactNode }) {
  return (
    <ul className="list-disc list-outside flex flex-col gap-1.5 text-body-md text-on-surface leading-relaxed ml-5">
      {children}
    </ul>
  );
}

export function LegalCallout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-surface-container border-l-4 border-secondary rounded-lg px-5 py-4">
      <p className="text-body-md text-on-surface leading-relaxed">{children}</p>
    </div>
  );
}

/** Subprocessor / third-party service table. */
export function LegalTable({
  rows,
  headers = ["Service", "Purpose", "Privacy Policy"],
}: {
  rows: [string, string, string][];
  headers?: [string, string, string];
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-surface-variant">
      <table className="w-full text-body-sm text-on-surface">
        <thead className="bg-surface-container">
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                className="text-left px-4 py-3 text-label-sm font-label-sm font-semibold uppercase tracking-wider text-on-surface-variant"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([svc, purpose, url], i) => (
            <tr key={i} className="border-t border-surface-variant">
              <td className="px-4 py-3 font-semibold text-primary whitespace-nowrap">{svc}</td>
              <td className="px-4 py-3 text-on-surface-variant">{purpose}</td>
              <td className="px-4 py-3">
                {url ? (
                  <a
                    href={`https://${url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline text-label-sm font-label-sm"
                  >
                    {url}
                  </a>
                ) : (
                  <span className="text-on-surface-variant/60 text-label-sm font-label-sm">—</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

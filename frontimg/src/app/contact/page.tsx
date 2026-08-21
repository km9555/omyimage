import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the oMyImage team — support, bug reports, privacy questions and business enquiries.",
  alternates: { canonical: "/contact" },
};

const SUPPORT_EMAIL = "support@omyimage.com";

const CHANNELS = [
  {
    icon: "help",
    title: "Support & bug reports",
    body: "Something not working, or a tool giving an odd result? Tell us the tool, your browser, and what you expected — that's usually enough for us to reproduce it.",
    address: SUPPORT_EMAIL,
  },
  {
    icon: "shield",
    title: "Privacy & legal",
    body: "Questions about how your data is handled, takedown requests, or anything relating to our terms.",
    address: SUPPORT_EMAIL,
  },
  {
    icon: "handshake",
    title: "Business & partnerships",
    body: "Bulk use, integrations, or anything commercial.",
    address: SUPPORT_EMAIL,
  },
];

const FAQS = [
  {
    q: "Is oMyImage free?",
    a: "Yes. All 30 tools are free to use with no account. Paid plans are planned for larger files and more AI runs, but nothing is chargeable today.",
  },
  {
    q: "Are my images uploaded?",
    a: "For most tools, no — they run entirely in your browser and the file never leaves your device. Uploads only happen for images too large for a browser tab to handle, the AI tools, and HEIC conversion. Each of those says so on its own page.",
  },
  {
    q: "Why does HEIC conversion upload my photo when other tools don't?",
    a: "Decoding HEIC needs a library we can't ship to browsers under its licence, so that one conversion has to run on our server. The file is deleted within about an hour.",
  },
  {
    q: "How long do you keep processed files?",
    a: "Server-processed results are deleted automatically within roughly an hour. We keep no backups and never reuse your images.",
  },
  {
    q: "A tool says it isn't enabled on this server.",
    a: "That's the AI tools or HEIC conversion reporting that their engine isn't installed on the backend. It's a deployment state, not a fault with your file.",
  },
  {
    q: "Can I use the output commercially?",
    a: "Yes. Your images stay yours, and you can use anything you produce for any lawful purpose.",
  },
];

export default function ContactPage() {
  return (
    <div className="max-w-content mx-auto px-margin-mobile md:px-gutter py-12">
      {/* Header */}
      <div className="max-w-2xl">
        <p className="text-label-sm font-label-sm uppercase tracking-widest text-secondary mb-3">
          Contact
        </p>
        <h1 className="text-display-md font-black text-primary mb-3">Get in touch</h1>
        <p className="text-body-lg text-on-surface-variant">
          We read everything that comes in and usually reply within two business days. There&apos;s a
          good chance the answer is already below.
        </p>
      </div>

      {/* Channels */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {CHANNELS.map((c) => (
          <div
            key={c.title}
            className="rounded-2xl border border-surface-variant bg-surface-container-lowest p-6 ambient-shadow flex flex-col gap-3"
          >
            <span className="grid place-items-center w-11 h-11 rounded-full bg-secondary/15">
              <Icon name={c.icon} className="text-[22px] text-secondary" />
            </span>
            <h2 className="text-body-lg font-bold text-primary">{c.title}</h2>
            <p className="text-body-sm text-on-surface-variant flex-1 leading-relaxed">{c.body}</p>
            {/* On a phone this is the one thing you came to tap, so it gets a
                real 48px target across the card instead of a text-height link.
                From `sm` up it goes back to reading as an inline address. */}
            <a
              href={`mailto:${c.address}`}
              className="inline-flex min-h-12 w-full items-center justify-center gap-1.5 rounded-lg border border-secondary px-3 text-label-md font-semibold text-secondary transition-colors active:bg-secondary/10 sm:min-h-0 sm:w-fit sm:justify-start sm:rounded-none sm:border-0 sm:px-0 sm:hover:underline"
            >
              <Icon name="mail" className="shrink-0 text-[18px]" />
              <span className="truncate">{c.address}</span>
            </a>
          </div>
        ))}
      </div>

      {/* No-form note */}
      <div className="mt-8 rounded-xl border-l-4 border-secondary bg-surface-container px-5 py-4">
        <p className="text-body-md text-on-surface leading-relaxed">
          <strong>Why there&apos;s no contact form:</strong> a form would mean collecting and storing
          your details on our servers. Email keeps that between you and us — nothing about you is
          stored on {SITE.name} at all.
        </p>
      </div>

      {/* FAQ */}
      <section className="mt-14 max-w-3xl">
        <h2 className="text-headline-md font-bold text-primary mb-6">Before you write</h2>
        <div className="flex flex-col gap-4">
          {FAQS.map((f) => (
            <div
              key={f.q}
              className="rounded-xl border border-surface-variant bg-surface-container-lowest px-5 py-4"
            >
              <h3 className="text-body-md font-semibold text-primary mb-1.5">{f.q}</h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer links */}
      <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-body-sm">
        <Link href="/privacy" className="text-secondary hover:underline">
          Privacy Policy
        </Link>
        <Link href="/terms" className="text-secondary hover:underline">
          Terms of Service
        </Link>
        <Link href="/refunds" className="text-secondary hover:underline">
          Refund Policy
        </Link>
        <Link href="/pricing" className="text-secondary hover:underline">
          Pricing
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";
import { Logo } from "@/components/Logo";
import { CookieSettingsLink } from "@/components/CookieSettingsLink";
import { SITE } from "@/lib/site";

const optimize = [
  { label: "Compress Image", href: "/compress-image" },
  { label: "Resize Image", href: "/resize-image" },
  { label: "Crop Image", href: "/crop-image" },
  { label: "Rotate Image", href: "/rotate-image" },
];

const convert = [
  { label: "Convert to JPG", href: "/convert-to-jpg" },
  { label: "PNG to JPG", href: "/png-to-jpg" },
  { label: "WEBP to PNG", href: "/webp-to-png" },
  { label: "HEIC to JPG", href: "/heic-to-jpg" },
  { label: "Image to PDF", href: "/image-to-pdf" },
];

const create = [
  { label: "Watermark Image", href: "/watermark-image" },
  { label: "Image Editor", href: "/image-editor" },
  { label: "Meme Generator", href: "/meme-generator" },
  { label: "Remove Background", href: "/remove-background" },
  { label: "Upscale Image", href: "/upscale-image" },
];

const legal: { label: string; href: string; external?: boolean }[] = [
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Refund Policy", href: "/refunds" },
  { label: "Cookie Policy", href: "/cookies" },
  // A static file in public/, not a route — must be a plain <a>, since next/link
  // would try to client-side navigate to it. Regenerated on every build by
  // scripts/generate-licenses.mjs.
  { label: "Open-Source Licenses", href: "/THIRD-PARTY-NOTICES.txt", external: true },
];

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-label-sm font-label-sm font-bold text-primary uppercase tracking-wider">
        {title}
      </h3>
      <nav className="flex flex-col gap-2">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="text-body-sm text-on-surface-variant hover:text-secondary transition-colors w-fit"
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export function Footer() {
  return (
    // `viewport-fit=cover` (layout.tsx) lets the page paint under the iOS home
    // indicator, so the last thing on the page has to reserve that strip itself
    // or its bottom row sits beneath the bar. Zero everywhere else.
    <footer className="bg-surface-container-low border-t border-outline-variant/60 pb-[env(safe-area-inset-bottom)]">
      <div className="max-w-content mx-auto px-margin-mobile md:px-gutter">
        {/* Main grid. The 4-across layout needs `lg`, not `md`: at 768 it gave
            the three link columns ~148px each, enough to wrap "Remove
            Background" onto three lines. Between `sm` and `lg` the brand takes
            a full row of its own and the link columns sit 3-up beneath it. */}
        <div className="py-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-x-8 gap-y-10">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 w-fit">
              <Logo className="h-9 w-9" />
              <span className="text-headline-md font-black tracking-tight">
                <span className="text-primary">oMy</span>
                <span className="text-secondary">Image</span>
              </span>
            </Link>
            <p className="text-body-sm text-on-surface-variant max-w-[220px] leading-relaxed">
              Free online image tools — fast, private, and no sign-up required.
            </p>
            <Link
              href="/pricing"
              className="text-label-sm font-label-sm font-semibold text-secondary hover:underline w-fit"
            >
              View Pricing →
            </Link>
            {/* Sister site. Plain <a> + new tab: cross-domain, and the tools hold
                in-browser file state that a same-tab navigation would discard. */}
            <a
              href="https://omypdf.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-label-sm font-label-sm font-semibold text-secondary hover:underline w-fit"
            >
              Need PDF tools? oMyPDF →
            </a>
          </div>

          <FooterCol title="Optimize" links={optimize} />
          <FooterCol title="Convert" links={convert} />
          <FooterCol title="Edit & AI" links={create} />
        </div>

        {/* Bottom bar */}
        <div className="border-t border-outline-variant/40 py-6 flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4">
          <p className="text-label-sm font-label-sm text-on-surface-variant">
            © {new Date().getFullYear()} {SITE.brand}. All rights reserved.
          </p>
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {legal.map((l) => {
              const cls =
                "text-label-sm font-label-sm text-on-surface-variant hover:text-secondary transition-colors";
              return l.external ? (
                <a key={l.href} href={l.href} className={cls}>
                  {l.label}
                </a>
              ) : (
                <Link key={l.href} href={l.href} className={cls}>
                  {l.label}
                </Link>
              );
            })}
            <CookieSettingsLink />
          </nav>
        </div>
      </div>
    </footer>
  );
}

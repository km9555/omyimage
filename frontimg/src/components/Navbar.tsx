import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { HeaderSearch } from "@/components/HeaderSearch";
import { AppsMenu } from "@/components/AppsMenu";

const quickLinks = [
  { label: "Compress Image", href: "/compress-image" },
  { label: "Resize Image",   href: "/resize-image" },
  { label: "Crop Image",     href: "/crop-image" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md border-b border-outline-variant">
      {/* Full-width bar (edge-to-edge); page content below stays constrained
          to `max-w-content`, same as oMyPDF. */}
      <div className="flex items-center gap-4 w-full px-margin-mobile md:px-gutter lg:px-8 h-16">
        {/* Brand + quick links */}
        <div className="flex items-center gap-gutter shrink-0">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-8 w-8" />
            <span className="text-headline-md font-black tracking-tight">
              <span className="text-primary">oMy</span>
              <span className="text-secondary">Image</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-body-md px-3 py-1.5 rounded-md text-on-surface-variant hover:bg-secondary/10 hover:text-on-secondary-fixed-variant dark:hover:text-secondary focus-visible:outline-none focus-visible:bg-secondary/10 focus-visible:text-on-secondary-fixed-variant dark:focus-visible:text-secondary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Search — fills the middle but right-aligned so it sits next to the
            actions. Below `md` it moves to its own row (see below). */}
        <div className="hidden md:flex flex-1 min-w-0 justify-end px-2">
          <HeaderSearch className="w-full max-w-[375px]" />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1.5 shrink-0 ml-auto md:ml-0">
          {/* Credits pill is built but intentionally not shown — oMyImage has no
              billing layer yet. Uncomment both blocks once it does. */}
          {/* <div className="hidden md:block"><CreditsBadge /></div> */}
          {/* <div className="md:hidden"><CreditsBadge compact /></div> */}
          {/* Single, prominent Login button — replaces the old Login link +
              Sign-up pill pair. Squared corners, icon-led, matching oMyPDF. */}
          <Link
            href="/login"
            className="inline-flex items-center gap-2 text-body-md bg-secondary text-on-secondary font-semibold px-4 py-2 rounded-lg shadow-md shadow-secondary/30 hover:bg-secondary-container hover:shadow-lg hover:shadow-secondary/40 hover:-translate-y-px transition-all duration-200"
          >
            <Icon name="login" className="text-[19px]" />
            Login
          </Link>
          <ThemeToggle />
          <div className="hidden md:block">
            <AppsMenu />
          </div>
        </div>
      </div>

      {/* Mobile search row. oMyPDF tucks search into a hamburger drawer;
          oMyImage has no drawer, so it gets its own full-width row instead of
          disappearing below `md`. */}
      <div className="md:hidden px-margin-mobile pb-3">
        <HeaderSearch />
      </div>
    </header>
  );
}

import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { HeaderSearch } from "@/components/HeaderSearch";
import { AppsMenu } from "@/components/AppsMenu";
import { NavToolsDropdown } from "@/components/NavToolsDropdown";
import { CreditsBadge } from "@/components/CreditsBadge";

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
      <div className="flex items-center gap-3 xl:gap-4 w-full px-margin-mobile md:px-gutter lg:px-8 h-16">
        {/* Brand + quick links */}
        <div className="flex items-center gap-4 lg:gap-gutter shrink-0">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-8 w-8" />
            <span className="text-headline-md font-black tracking-tight">
              <span className="text-primary">oMy</span>
              <span className="text-secondary">Image</span>
            </span>
          </Link>

          {/*
            The bar is a single flex row of brand + nav + search + actions, and
            the search sits in a `flex-1 min-w-0` slot, so it is always the part
            that gives way when the row gets tight.

            Quick links start at `lg`, not `md`: between 768px and ~1100px the
            three links (~400px at the xl size) left the search nothing —
            measured 71px at 1024 and fully collapsed to 0px at 900 before that
            change.

            They now start at `xl` instead. Adding the Tools mega-menu (86px)
            and the credits pill (96px) pushed the 1024 row to 1134px of content
            in a 1009px bar — a real horizontal overflow. The dropdown reaches
            every tool on its own, so at `lg` it stands in for the three
            shortcuts rather than sitting beside them.
          */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavToolsDropdown />
            <span className="hidden xl:flex items-center gap-1">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-body-sm xl:text-body-md px-2.5 xl:px-3 py-1.5 rounded-md whitespace-nowrap text-on-surface-variant hover:bg-secondary/10 hover:text-on-secondary-fixed-variant dark:hover:text-secondary focus-visible:outline-none focus-visible:bg-secondary/10 focus-visible:text-on-secondary-fixed-variant dark:focus-visible:text-secondary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </span>
          </nav>
        </div>

        {/* Search — fills the middle but right-aligned so it sits next to the
            actions. The floor stops it collapsing when the row gets tight;
            the cap stops it sprawling on a wide desktop. Below `md` it moves
            to its own row (see below). */}
        <div className="hidden md:flex flex-1 min-w-[180px] justify-end px-1 xl:px-2">
          <HeaderSearch className="w-full max-w-[300px] xl:max-w-[380px]" />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1.5 shrink-0 ml-auto md:ml-0">
          {/* Daily premium-run counter. There is still no billing layer, so
              CreditsBadge counts from localStorage — nothing increments
              `omyimage:premium-usage` yet, so this reads 0/10 until a tool
              writes to it. See CreditsBadge for the swap-in point. */}
          <div className="hidden md:block"><CreditsBadge /></div>
          {/* Compact form starts at `sm`, not 0: at 375px the brand (142px) and
              the actions cluster already fill the row, and the 80px pill pushed
              it 30px into horizontal overflow. */}
          <div className="hidden sm:block md:hidden"><CreditsBadge compact /></div>
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

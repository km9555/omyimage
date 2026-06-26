import Link from "next/link";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";

const quickLinks = [
  { label: "Compress Image", href: "/compress-image" },
  { label: "Resize Image",   href: "/resize-image" },
  { label: "Crop Image",     href: "/crop-image" },
  { label: "Pricing",        href: "/pricing" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md border-b border-outline-variant">
      <div className="flex justify-between items-center max-w-[1230px] mx-auto px-margin-mobile md:px-gutter h-16">
        {/* Brand */}
        <div className="flex items-center gap-gutter">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-8 w-8" />
            <span className="text-headline-md font-black tracking-tight">
              <span className="text-primary">oMy</span>
              <span className="text-secondary">Image</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-body-md px-3 py-1.5 rounded-full text-on-surface-variant hover:bg-secondary/10 hover:text-on-secondary-fixed-variant dark:hover:text-secondary focus-visible:outline-none focus-visible:bg-secondary/10 focus-visible:text-on-secondary-fixed-variant dark:focus-visible:text-secondary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <Link
            href="/login"
            className="hidden md:block text-body-md text-on-surface-variant font-medium px-4 py-2 hover:text-primary transition-colors"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="text-body-md bg-secondary text-on-secondary font-semibold px-6 py-2 rounded-full shadow-md shadow-secondary/30 hover:shadow-lg hover:shadow-secondary/40 hover:-translate-y-px transition-all duration-200"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}

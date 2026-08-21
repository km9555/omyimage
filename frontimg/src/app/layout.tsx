import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemedToaster } from "@/components/ThemedToaster";
import { CookieBanner } from "@/components/CookieBanner";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { ThemeProvider } from "@/lib/theme/ThemeProvider";
import { AuthProvider } from "@/lib/auth/AuthProvider";

// Self-hosted at build time (works with `output: "export"`), so no third-party
// request and no flash of fallback text. These define the `--font-*` custom
// properties that globals.css `@theme` maps the type tokens onto.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

// Runs before first paint to apply a previously-chosen dark theme with no flash.
// Default is light: dark only applies when the visitor explicitly opted in.
// Also repoints <meta name="theme-color"> so the mobile browser toolbar matches
// the surface the page is about to paint, rather than flashing the light value.
// Also stamps html[data-cookie-choice] for visitors who already answered the
// consent banner. The banner is server-rendered so it paints with the first
// contentful paint for new visitors; this attribute is what lets globals.css
// hide it again for everyone else BEFORE React hydrates, so returning visitors
// never see it flash.
const NO_FLASH_THEME = `(function(){try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark';document.querySelectorAll('meta[name="theme-color"]').forEach(function(m){m.setAttribute('content','#191512')});}var c=localStorage.getItem('omyimage_cookie_consent');if(c==='accepted'||c==='declined'){document.documentElement.setAttribute('data-cookie-choice','1');}}catch(e){}})();`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  robots: { index: true, follow: true },
  // Search-engine / domain site-verification meta tags.
  // To add a new provider in future, drop its code in here:
  //   • google/yandex/yahoo have dedicated keys below
  //   • anything else (Bing, Meta, Pinterest…) goes in `other` keyed by its
  //     <meta name="…"> value — e.g. Bing uses "msvalidate.01".
  verification: {
    google: "N9pbKXktdiaIOJa3fCoZuqAOeWh8YSB0EZ8ohp1QIXA",
    // yandex: "",
    // yahoo: "",
    other: {
      "msvalidate.01": "84376653A44FBB71E74AC0801E8D0CAD", // Bing Webmaster Tools
      // "facebook-domain-verification": "", // Meta / Facebook
      // "p:domain_verify": "",              // Pinterest
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
};

export const viewport: Viewport = {
  /*
    Android Chrome paints its toolbar with this, so it must match the page
    BACKGROUND, not the brand accent — accent here produced a heavy terracotta
    slab above the header on mobile. Value is `--color-background` (light).
    Dark is not handled with a `prefers-color-scheme` media entry because the
    theme is an explicit opt-in stored in localStorage, not an OS preference:
    an OS-dark visitor who never opted in gets the light page. The no-flash
    script and ThemeProvider.applyTheme repoint this tag instead.
  */
  themeColor: "#FDFBF8",
  /*
    Lets the page paint into the notch / home-indicator area, which is what
    makes `env(safe-area-inset-*)` resolve to a real number on iOS. Without it
    every inset reads 0 and the mobile tool shells' bottom bars sit under the
    home indicator. Chrome that now needs its own bottom inset: Footer and
    CookieBanner.
  */
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        {/* Apply saved theme before paint to avoid a flash of the wrong theme. */}
        <script dangerouslySetInnerHTML={{ __html: NO_FLASH_THEME }} />
        {/* Material Symbols (variable icon font). */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-background" suppressHydrationWarning>
        <ThemeProvider>
          {/* Inside ThemeProvider so ThemedToaster still reads the theme, and
              around Navbar because NavbarAuth needs the session. The provider
              itself renders nothing and does no work until a token exists in
              localStorage, so signed-out visitors pay no request for it. */}
          <AuthProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <ThemedToaster />
            <CookieBanner />
          </AuthProvider>
        </ThemeProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}

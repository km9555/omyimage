import type { Metadata } from "next";
import Link from "next/link";
import { getTool, relatedTools, toolColor, toolColorTint } from "@/lib/tools";
import { absoluteUrl, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import {
  SeoContent,
  type HowToStep,
  type Faq,
  type Feature,
  type SeoSection,
} from "@/components/SeoContent";
import { HtmlToImageTool } from "./HtmlToImageTool";

const tool = getTool("html-to-image")!;
const canonical = absoluteUrl(`/${tool.slug}`);

export const metadata: Metadata = {
  title: { absolute: tool.seoTitle },
  description: tool.seoDescription,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title: tool.seoTitle, description: tool.seoDescription },
  twitter: { card: "summary_large_image", title: tool.seoTitle, description: tool.seoDescription },
};

const steps: HowToStep[] = [
  { title: "Enter URL or HTML", description: "Paste a web page URL, or switch to HTML mode and paste your own markup." },
  { title: "Set the size & format", description: "Choose the viewport width and height, output format, and whether to capture the full page." },
  { title: "Render & download", description: "Click Render to image and download the screenshot as PNG or JPG." },
];

const features: Feature[] = [
  { icon: "link", title: "URL or raw HTML", description: "Screenshot any public web page, or render a snippet of your own HTML and CSS to an image." },
  { icon: "aspect_ratio", title: "Custom viewport", description: "Set the exact width and height, and optionally capture the full scrollable page." },
  { icon: "verified_user", title: "Open-source engine", description: "Rendered with headless Chromium via Puppeteer — free, open-source and commercial-use friendly." },
];

const faqs: Faq[] = [
  { q: "Can I screenshot any website?", a: "Any publicly-reachable URL. Pages that block bots or require login may not render fully." },
  { q: "Can I render my own HTML?", a: "Yes. Switch to HTML mode and paste markup with inline CSS to render it exactly." },
  { q: "What formats can I export?", a: "PNG (lossless) or JPG. You can also capture the full scrollable page height." },
  { q: "Which engine is used?", a: "Headless Chromium via the open-source Puppeteer library, running on our server." },
  { q: "Is it free?", a: "Yes — free, with no watermark and no sign-up." },
  { q: "What is this actually for?", a: "Generating social preview cards, capturing a page for documentation or an archive, producing consistent screenshots for a changelog, previewing an email template as an image, and turning HTML you have written into a picture you can share where HTML will not render." },
  { q: "Why does the result not match my browser exactly?", a: "Because it renders in a clean headless browser with no extensions, no logged-in session and no local fonts beyond the standard set. Content behind a login will show the logged-out view, and a page relying on a font installed only on your machine will fall back to something else." },
  { q: "Can it capture a page that requires signing in?", a: "No. The renderer has no access to your cookies or session, so it sees whatever an anonymous visitor sees. For authenticated pages, a browser screenshot is the practical route." },
  { q: "Why is some content missing from the capture?", a: "Usually lazy loading. Images and sections that only load when scrolled into view may not have appeared before the capture was taken. Content that arrives via a slow API call can be missed for the same reason, and animations are frozen at whatever frame they had reached." },
  { q: "What size should I render at?", a: "1200×630 is the standard for social preview cards and works across most platforms. 1280 or 1440 wide suits documentation screenshots. Full-page capture is the right choice for archiving, though very long pages produce very tall images." },
  { q: "Does it run in my browser like the other tools?", a: "No — this one needs a real browser engine to render the page, which cannot be shipped to your device. The HTML or URL is sent to our server, rendered, and the resulting image returned. Nothing is stored afterwards." },
];

const sections: SeoSection[] = [
  {
    heading: "Turning markup into a picture",
    id: "what",
    body: [
      "A headless browser loads your HTML or URL, lays it out exactly as a normal browser would — applying CSS, running scripts, loading web fonts — and then captures the rendered result as an image. It is a screenshot taken by a browser with no window.",
      "That distinction matters. This is not an approximation of how the page might look; it is the same rendering engine producing the same layout, which is why complex CSS, flexbox, grid and web fonts all come out right where simpler HTML-to-image converters distort them.",
      "The output is an ordinary PNG or JPG, so it can go anywhere an image can go — into a social card, a document, a slide deck, or an email.",
    ],
  },
  {
    heading: "Social preview cards",
    id: "og-images",
    body: [
      "The most common production use is generating Open Graph images — the picture that appears when a link is shared on social media or in a chat app. Designing those by hand for every article does not scale; templating them in HTML and rendering to an image does.",
      "1200×630 pixels is the standard size and is handled sensibly by essentially every platform. Build the card as an HTML template with the title, author and any artwork positioned by CSS, then render one image per article.",
      "Two practical points: keep important content well inside the edges, because some platforms crop to their own aspect ratio, and use large type. These cards are frequently seen at a couple of hundred pixels wide in a feed, so anything below about 32 pixels in the source will be unreadable.",
    ],
  },
  {
    heading: "Why the capture can differ from your screen",
    id: "differences",
    body: [
      "The renderer is a clean browser. It has no extensions, no ad blocker, no logged-in session and no access to fonts installed locally on your machine. A page that looks one way to you can legitimately render differently here, and usually the difference is informative — you are seeing what a first-time anonymous visitor sees.",
      "Lazy loading is the most frequent cause of missing content. Images and sections configured to load when scrolled into view may not have been triggered before the capture, and data arriving from a slow API call can miss the moment entirely.",
      "Animations and transitions are frozen wherever they happened to be. If an element fades in, the capture may catch it mid-fade — a good reason to disable animations in the CSS you render, or to design the template as a static layout in the first place.",
    ],
  },
  {
    heading: "This one runs on our server",
    id: "server",
    body: [
      "Nearly everything on this site works inside your browser tab. Rendering a web page cannot, because it requires a full browser engine — the very thing your browser already is, but not something a page can drive on arbitrary third-party content from inside a tab.",
      "So the URL or HTML you supply is sent to our server over an encrypted connection, rendered in a headless browser there, and the image is returned to you. Nothing is retained afterwards.",
      "Worth noting for private content: since a URL is fetched by our server rather than by you, anything behind a login or on a private network is not reachable. That is a limitation, and also a reason this tool cannot accidentally capture something it should not.",
    ],
  },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} HTML to Image`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.7", ratingCount: "356" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to convert HTML to an image",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Edit & Create", href: "/#cat-edit" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">HTML to Image</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Convert a web page URL or raw HTML into an image online — choose the viewport, format and full-page capture. Powered by open-source headless Chromium.
          </h2>
        </header>

        <HtmlToImageTool />

        {related.length > 0 && (
          <section aria-label="More tools" className="mt-4">
            <h2 className="text-headline-md font-semibold text-primary mb-stack-md">More tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-stack-md">
              {related.map((r) => (
                <Link key={r.id} href={`/${r.slug}`} className="flex items-center gap-3 rounded-lg border border-outline-variant/40 bg-surface-container-lowest p-4 hover-lift">
                  <span className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: toolColorTint(r) }}>
                    <Icon name={r.icon} fill className="text-2xl" style={{ color: toolColor(r) }} />
                  </span>
                  <span className="text-body-md font-semibold text-primary">{r.name}</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      <SeoContent
        toolName="HTML to Image"
        intro="Turn a web page or a snippet of HTML into a crisp image. oMyImage's HTML to Image tool renders a URL or your own markup with headless Chromium and gives you a PNG or JPG at the exact size you choose — handy for thumbnails, previews and social cards. Rendering runs on our server using open-source Puppeteer."
        howToTitle="How to convert HTML to an image"
        steps={steps} features={features} faqs={faqs} sections={sections} fullWidthText
        security="Rendering runs on our server using open-source headless Chromium. Output is stored only briefly behind a private download link and auto-deleted within an hour. We never share or reuse your content."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}

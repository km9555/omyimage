import type { Metadata } from "next";
import Link from "next/link";
import { getTool, relatedTools, toolColor, toolColorTint } from "@/lib/tools";
import { absoluteUrl, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { SeoContent, type HowToStep, type Faq, type Feature } from "@/components/SeoContent";
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
        steps={steps} features={features} faqs={faqs} fullWidthText
        security="Rendering runs on our server using open-source headless Chromium. Output is stored only briefly behind a private download link and auto-deleted within an hour. We never share or reuse your content."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}

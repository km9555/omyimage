import type { Metadata } from "next";
import Link from "next/link";
import { getTool, relatedTools, toolColor, toolColorTint } from "@/lib/tools";
import { absoluteUrl, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { SeoContent, type HowToStep, type Faq, type Feature } from "@/components/SeoContent";
import { RemoveBgTool } from "./RemoveBgTool";

const tool = getTool("remove-background")!;
const canonical = absoluteUrl(`/${tool.slug}`);

export const metadata: Metadata = {
  title: { absolute: tool.seoTitle },
  description: tool.seoDescription,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title: tool.seoTitle, description: tool.seoDescription },
  twitter: { card: "summary_large_image", title: tool.seoTitle, description: tool.seoDescription },
};

const steps: HowToStep[] = [
  { title: "Upload", description: "Select an image, or drag and drop it into the workspace." },
  { title: "Remove background", description: "Click Remove background — our AI detects the subject and cuts out the rest." },
  { title: "Download", description: "Download your subject as a transparent PNG, ready for any background." },
];

const features: Feature[] = [
  { icon: "auto_fix_high", title: "AI subject detection", description: "An open-source neural network finds people, products and objects and removes the background automatically." },
  { icon: "opacity", title: "Transparent PNG", description: "The result is a clean, transparent PNG you can drop onto any color, photo or design." },
  { icon: "verified_user", title: "Open-source engine", description: "Powered by rembg — free, open-source and fine for commercial use." },
];

const faqs: Faq[] = [
  { q: "How does background removal work?", a: "An AI model (U²-Net via the open-source rembg project) identifies the main subject and makes everything else transparent." },
  { q: "What format is the result?", a: "A transparent PNG, so you can place your subject on any new background." },
  { q: "Does it work for products and people?", a: "Yes — it handles people, products, animals and most clear subjects well. Very fine details like wispy hair can vary." },
  { q: "Is it really free and open-source?", a: "Yes. The engine (rembg + U²-Net) is open-source and commercial-use friendly." },
  { q: "Are my images kept?", a: "No. Processed files are stored only briefly for your download link and auto-deleted within an hour." },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} Remove Background`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "974" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to remove an image background",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div className="max-w-[1230px] mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Image AI", href: "/#cat-ai" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Remove Background</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Remove the background from any image automatically with AI and download a clean, transparent PNG. Powered by open-source rembg.
          </h2>
        </header>

        <RemoveBgTool />

        {related.length > 0 && (
          <section aria-label="More tools" className="mt-4">
            <h2 className="text-headline-md font-semibold text-primary mb-stack-md">More tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-stack-md">
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
        toolName="Remove Background"
        intro="Cut out the background of any photo in one click. oMyImage's Remove Background tool uses an open-source AI model to detect the subject — a person, product or object — and turn everything else transparent, giving you a clean PNG for stores, presentations and designs. Heavy AI work runs on our server; the result downloads as a transparent PNG."
        howToTitle="How to remove an image background"
        steps={steps} features={features} faqs={faqs} fullWidthText
        security="Processing runs on our server using the open-source rembg engine. Results are stored only briefly behind a private download link and auto-deleted within an hour. We never share or reuse your images."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}

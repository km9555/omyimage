import type { Metadata } from "next";
import Link from "next/link";
import { getTool, relatedTools, toolColor, toolColorTint } from "@/lib/tools";
import { absoluteUrl, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { SeoContent, type HowToStep, type Faq, type Feature } from "@/components/SeoContent";
import { MemeTool } from "./MemeTool";

const tool = getTool("meme-generator")!;
const canonical = absoluteUrl(`/${tool.slug}`);

export const metadata: Metadata = {
  title: { absolute: tool.seoTitle },
  description: tool.seoDescription,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title: tool.seoTitle, description: tool.seoDescription },
  twitter: { card: "summary_large_image", title: tool.seoTitle, description: tool.seoDescription },
};

const steps: HowToStep[] = [
  { title: "Upload", description: "Select an image or meme template, or drag and drop it into the workspace." },
  { title: "Add captions", description: "Type your top and bottom text and tweak the font, size, color and outline with a live preview." },
  { title: "Export", description: "Click Export to download your meme as a PNG, JPG or WEBP." },
];

const features: Feature[] = [
  { icon: "text_fields", title: "Classic meme text", description: "Bold Impact-style captions with a black outline, auto-uppercase and automatic line wrapping for long text." },
  { icon: "palette", title: "Full styling", description: "Change the font, size, text color and outline color and thickness to match any meme style." },
  { icon: "lock", title: "Private & instant", description: "Your meme is rendered entirely in your browser — the image is never uploaded anywhere." },
];

const faqs: Faq[] = [
  { q: "Can I use my own image?", a: "Yes. Upload any JPG, PNG, WEBP or GIF and add captions — there's no fixed set of templates." },
  { q: "Does long text wrap?", a: "Yes. Captions automatically wrap onto multiple lines so they always fit the image width." },
  { q: "What format can I export?", a: "PNG (lossless), JPG (smaller) or WEBP." },
  { q: "Is it free?", a: "Completely free, with no watermark and no sign-up." },
  { q: "Are my images private?", a: "Yes. Everything is rendered locally in your browser; nothing is uploaded." },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} Meme Generator`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "421" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to make a meme",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 3);

  return (
    <>
      <div className="max-w-[1230px] mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Edit & Create", href: "/#cat-edit" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Meme Generator</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Make memes online — add classic top and bottom captions to any image with a live preview, then export as PNG, JPG or WEBP. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <MemeTool />

        {related.length > 0 && (
          <section aria-label="Related tools" className="mt-4">
            <h2 className="text-headline-md font-semibold text-primary mb-stack-md">Related tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-stack-md">
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
        toolName="Meme Generator"
        intro="Turn any image into a meme in seconds. oMyImage's Meme Generator adds the classic bold, outlined top-and-bottom captions to your own photos or templates, with full control over font, size and colors and a live preview as you type. Long captions wrap automatically. Export as PNG, JPG or WEBP — all in your browser, nothing uploaded."
        howToTitle="How to make a meme"
        steps={steps} features={features} faqs={faqs} fullWidthText
        security="Your images stay private. Memes are rendered entirely in your browser with HTML canvas — nothing is uploaded to a server. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}

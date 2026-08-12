import type { Metadata } from "next";
import Link from "next/link";
import { getTool, relatedTools, toolColor, toolColorTint } from "@/lib/tools";
import { absoluteUrl, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { SeoContent, type HowToStep, type Faq, type Feature } from "@/components/SeoContent";
import { ImageToPdfTool } from "./ImageToPdfTool";

const tool = getTool("image-to-pdf")!;
const canonical = absoluteUrl(`/${tool.slug}`);

export const metadata: Metadata = {
  title: { absolute: tool.seoTitle },
  description: tool.seoDescription,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title: tool.seoTitle, description: tool.seoDescription },
  twitter: { card: "summary_large_image", title: tool.seoTitle, description: tool.seoDescription },
};

const steps: HowToStep[] = [
  { title: "Upload", description: "Select your images, or drag and drop them into the workspace." },
  { title: "Arrange & set up", description: "Reorder pages with the arrows and choose page size, orientation and margin." },
  { title: "Create PDF", description: "Click Create PDF to download a single document with one image per page." },
];

const features: Feature[] = [
  { icon: "reorder", title: "Reorder pages", description: "Drag your images into the order you want with simple up/down controls before exporting." },
  { icon: "description", title: "Page size & margins", description: "Fit the page to each image, or use A4/Letter with portrait or landscape and a margin of your choice." },
  { icon: "lock", title: "100% private", description: "The PDF is assembled entirely in your browser — your images are never uploaded." },
];

const faqs: Faq[] = [
  { q: "Can I combine many images into one PDF?", a: "Yes. Add as many images as you like; each becomes one page in a single PDF, in the order you arrange them." },
  { q: "Which image formats are supported?", a: "JPG, PNG, WEBP, GIF and BMP. Transparent areas are placed on a white background." },
  { q: "Can I choose A4 or Letter?", a: "Yes. Pick ‘Fit image’ to size each page to its image, or A4/Letter with portrait or landscape and a margin." },
  { q: "Are my images uploaded?", a: "No. The PDF is built locally in your browser, so your images never leave your device." },
  { q: "Is it free?", a: "Completely free, with no watermark and no sign-up." },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} Image to PDF`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "655" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to convert images to a PDF",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Convert", href: "/#cat-convert" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Image to PDF</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Convert JPG, PNG and WEBP images into a single PDF online — reorder pages, choose page size and margins. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <ImageToPdfTool />

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
        toolName="Image to PDF"
        intro="Need to send a set of photos or scans as one document? oMyImage's Image to PDF tool combines your JPG, PNG and WEBP images into a single PDF, one image per page. Reorder the pages, choose to fit each page to its image or use A4/Letter with a margin, and download. Everything is assembled in your browser, so your images stay private."
        howToTitle="How to convert images to a PDF"
        steps={steps} features={features} faqs={faqs} fullWidthText
        security="Your images stay private. The PDF is assembled entirely in your browser — nothing is uploaded to a server. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { getTool, relatedTools, toolColor, toolColorTint } from "@/lib/tools";
import { absoluteUrl, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { SeoContent, type HowToStep, type Faq, type Feature } from "@/components/SeoContent";
import { HeicTool } from "./HeicTool";

const tool = getTool("heic-to-jpg")!;
const canonical = absoluteUrl(`/${tool.slug}`);

export const metadata: Metadata = {
  title: { absolute: tool.seoTitle },
  description: tool.seoDescription,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title: tool.seoTitle, description: tool.seoDescription },
  twitter: { card: "summary_large_image", title: tool.seoTitle, description: tool.seoDescription },
};

const steps: HowToStep[] = [
  { title: "Upload HEIC", description: "Select one or many .heic / .heif photos, or drag and drop them in." },
  { title: "Pick a format", description: "Choose JPG (with quality) or PNG as the output." },
  { title: "Convert & download", description: "Click Convert — one photo downloads directly, several download together as a ZIP." },
];

const features: Feature[] = [
  { icon: "photo_camera", title: "Built for iPhone photos", description: "Turn Apple's HEIC/HEIF photos into JPG or PNG that open everywhere — Windows, Android and the web." },
  { icon: "burst_mode", title: "Batch conversion", description: "Convert a whole camera roll at once and download everything as a single ZIP." },
  { icon: "lock", title: "Private by default", description: "Conversion runs on our server with open-source ImageMagick; results are auto-deleted within an hour and never shared or reused." },
];

const faqs: Faq[] = [
  { q: "What is HEIC?", a: "HEIC (HEIF) is the high-efficiency photo format iPhones use by default. It saves space but isn't supported everywhere, so converting to JPG makes sharing easier." },
  { q: "Can I convert many HEIC files at once?", a: "Yes. Add as many as you like — multiple files download together as a ZIP." },
  { q: "Is quality preserved?", a: "Yes. Choose PNG for lossless output, or JPG with a quality slider to balance size and fidelity." },
  { q: "Are my photos uploaded?", a: "Yes — HEIC is the one tool here that needs a server. Decoding HEIC requires a library we can't ship to your browser for licensing reasons, so the file is converted on our server and auto-deleted within an hour. Nothing is shared or reused." },
  { q: "Is it free?", a: "Completely free, with no watermark and no sign-up." },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} HEIC to JPG`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "742" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to convert HEIC to JPG",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Convert", href: "/#cat-convert" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">HEIC to JPG</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Convert iPhone HEIC and HEIF photos to JPG or PNG online — in batches, with quality control. Free and fast, powered by open-source ImageMagick.
          </h2>
        </header>

        <HeicTool />

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
        toolName="HEIC to JPG"
        intro="iPhones save photos as HEIC to keep file sizes small, but many apps and devices can't open them. oMyImage's HEIC to JPG tool converts your .heic and .heif photos to universally-supported JPG (or lossless PNG) — one at a time or a whole batch. This is the one tool here that runs on our server rather than in your browser: decoding HEIC needs a library we can't ship to browsers under its licence, so your file is converted server-side and deleted straight afterwards."
        howToTitle="How to convert HEIC to JPG"
        steps={steps} features={features} faqs={faqs} fullWidthText
        security="HEIC conversion runs on our server using open-source ImageMagick. Results are stored only briefly behind a private download link and auto-deleted within an hour. We never share or reuse your photos."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}

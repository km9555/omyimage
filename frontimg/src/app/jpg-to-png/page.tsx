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
import { ConvertTool } from "@/components/ConvertTool";

const tool = getTool("jpg-to-png")!;
const canonical = absoluteUrl(`/${tool.slug}`);

export const metadata: Metadata = {
  title: { absolute: tool.seoTitle },
  description: tool.seoDescription,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title: tool.seoTitle, description: tool.seoDescription },
  twitter: { card: "summary_large_image", title: tool.seoTitle, description: tool.seoDescription },
};

const steps: HowToStep[] = [
  { title: "Upload JPGs", description: "Select one or many JPG images, or drag and drop them into the workspace." },
  { title: "Review", description: "PNG is lossless, so there are no quality settings to choose — just confirm your files." },
  { title: "Convert & download", description: "Click Convert — one JPG downloads as a PNG, several download together as a ZIP." },
];

const features: Feature[] = [
  { icon: "burst_mode", title: "Bulk JPG → PNG", description: "Convert many JPGs to PNG at once and download them all as a single ZIP archive." },
  { icon: "high_quality", title: "Lossless output", description: "PNG is a lossless format, so your converted images keep every pixel of detail." },
  { icon: "lock", title: "Private & instant", description: "Conversion runs locally in your browser — your JPGs never leave your device." },
];

const faqs: Faq[] = [
  { q: "Why convert JPG to PNG?", a: "PNG is lossless and supports transparency, which is useful for editing, logos and graphics where you don't want JPG compression artifacts." },
  { q: "Will the PNG be larger than the JPG?", a: "Usually yes — PNG is lossless, so photographic images become bigger. The trade-off is no further quality loss." },
  { q: "Can I convert several JPGs at once?", a: "Yes. Add as many as you like — multiple files download together as a ZIP." },
  { q: "Is it free and private?", a: "Completely. No sign-up, no watermark, and every image is processed in your browser." },
  { q: "Does converting JPG to PNG improve quality?", a: "No, and this is the most common misunderstanding about this conversion. PNG is lossless, so it preserves the image perfectly — but the JPG had already discarded detail when it was created, and that detail is gone. You get a faithful lossless copy of a lossy image, not a restored original." },
  { q: "Does it add transparency?", a: "Not by itself. PNG supports an alpha channel, but a JPG has no transparency to carry over, so the result is fully opaque. What converting does is give you a file that can hold transparency once you edit it — which is why designers convert before cutting out a background." },
  { q: "Why is the PNG so much larger?", a: "Because PNG never discards data. A 500 KB JPG photo commonly becomes a 3–5 MB PNG. That is the expected cost of a lossless format and is not a sign anything went wrong." },
  { q: "When should I convert JPG to PNG?", a: "Before editing, when you will re-save several times and want no further degradation; when you need to add transparency; when a system specifically requires PNG; and for screenshots or text-heavy images where JPG artefacts are visible." },
  { q: "Will converting remove JPG compression artefacts?", a: "No. Blocking, banding and the halos around edges are part of the image data now, and PNG stores them faithfully. Nothing short of an AI restoration model can reduce them, and even that is reconstruction rather than recovery." },
];

const sections: SeoSection[] = [
  {
    heading: "What this conversion does and does not do",
    id: "expectations",
    body: [
      "Converting JPG to PNG changes the container, not the contents. PNG will store the image losslessly from this point forward, which is genuinely useful — but it cannot undo the compression the JPG already applied. If the source has visible blocking in the sky or a halo around text, the PNG will reproduce that faithfully.",
      "Think of it as freezing the image where it is. Every subsequent save is lossless, so the degradation stops accumulating. That is the real benefit, and it is why this conversion belongs at the start of an editing workflow rather than at the end.",
    ],
  },
  {
    heading: "Why designers convert before editing",
    id: "editing",
    body: [
      "JPG punishes repetition. Open a JPG, crop it, save it, reopen it, adjust the levels, save again — each cycle re-encodes the whole image and throws away a little more. After a handful of passes the damage is obvious, particularly in smooth gradients and around edges.",
      "PNG has no such penalty. Once converted, you can save as many times as you like with no cumulative loss, which makes it the sensible working format for anything you are actively changing. The other half of the reason is transparency: you cannot erase a background into nothing while the file is a JPG, because the format has nowhere to record it. Converting first gives the alpha channel somewhere to live.",
    ],
  },
  {
    heading: "PNG, or WEBP?",
    id: "webp",
    body: [
      "If your reason for converting is editing or a system requirement, PNG is correct and the file size is simply the cost. If the reason is that you want transparency on a web page, WEBP is usually the better target — it supports a full alpha channel like PNG but at a fraction of the size, and every current browser decodes it.",
      "The practical split is destination. PNG for master files, editors and anything going into print or archive. WEBP for anything being served to a browser. Converting a JPG to a multi-megabyte PNG and then putting that on a website is a common and expensive mistake.",
    ],
  },
  {
    heading: "Screenshots and text",
    id: "screenshots",
    body: [
      "If you have a screenshot that was saved as JPG, converting to PNG stops it getting any worse but will not sharpen the text that is already soft. JPG handles high-contrast edges poorly, and lettering is nothing but high-contrast edges, so the characteristic fuzz around characters is baked in.",
      "The lesson for next time is to capture as PNG in the first place. Every operating system's screenshot tool can be set to do this, and for interface captures PNG is usually both sharper and smaller than the JPG equivalent.",
    ],
  },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} JPG to PNG`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "503" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to convert JPG to PNG",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div data-tool-shell className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Convert", href: "/#cat-convert" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">JPG to PNG</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Convert JPG images to lossless PNG online — in batches, no quality loss. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <ConvertTool config={{ accent: toolColor(tool), accept: "image/jpeg", targetMime: "image/png", targetLabel: "PNG", flatten: false, quality: false, dropHint: "or drop JPG images here" }} />

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
        toolName="JPG to PNG"
        intro="Need a lossless copy of a JPG for editing or graphics work? oMyImage's JPG to PNG converter turns your JPGs into clean PNG files right in your browser — one at a time or in bulk. PNG is lossless and supports transparency, so it's perfect when you don't want any further compression. No uploads, no sign-up, instant results."
        howToTitle="How to convert JPG to PNG"
        steps={steps} features={features} faqs={faqs} sections={sections} fullWidthText
        security="Your images stay private. JPG to PNG conversion happens entirely in your browser with HTML canvas — nothing is uploaded. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}

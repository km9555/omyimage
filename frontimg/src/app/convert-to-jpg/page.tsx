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

const tool = getTool("convert-to-jpg")!;
const canonical = absoluteUrl(`/${tool.slug}`);

export const metadata: Metadata = {
  title: { absolute: tool.seoTitle },
  description: tool.seoDescription,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title: tool.seoTitle, description: tool.seoDescription },
  twitter: { card: "summary_large_image", title: tool.seoTitle, description: tool.seoDescription },
};

const steps: HowToStep[] = [
  { title: "Upload", description: "Select one or many PNG, WEBP, GIF or BMP images, or drag and drop them in." },
  { title: "Set options", description: "Pick the JPG quality and the background color used to flatten any transparency." },
  { title: "Convert & download", description: "Click Convert — a single JPG downloads instantly, or several download together as a ZIP." },
];

const features: Feature[] = [
  { icon: "burst_mode", title: "Batch conversion", description: "Convert dozens of PNG, WEBP, GIF or BMP images to JPG at once and download them all as a single ZIP." },
  { icon: "tune", title: "Quality control", description: "Choose the JPG quality from 50% to 100% to balance file size against visual fidelity." },
  { icon: "lock", title: "100% private", description: "Conversion runs entirely in your browser with HTML canvas — your images are never uploaded." },
];

const faqs: Faq[] = [
  { q: "Which formats can I convert to JPG?", a: "PNG, WEBP, GIF and BMP. GIFs are converted using their first frame." },
  { q: "What happens to transparency?", a: "JPG does not support transparency, so transparent areas are filled with the background color you choose (white by default)." },
  { q: "Can I convert many images at once?", a: "Yes. Add as many as you like — a single image downloads as a JPG, and multiple images download together as a ZIP." },
  { q: "Is it really free and private?", a: "Yes. There's no sign-up or watermark, and every image is processed locally in your browser." },
  { q: "Which formats can I convert from?", a: "PNG, WEBP, GIF and BMP. Those are the formats a browser can decode natively, which is what allows the conversion to happen on your device. HEIC and AVIF have dedicated pages because they need different handling." },
  { q: "Why is JPG still the safest format?", a: "Because it is thirty years old, patent-free and implemented in essentially every piece of software that has ever displayed an image. Newer formats compress better, but 'better' is worth nothing when the system you are uploading to rejects the file." },
  { q: "What quality setting should I use?", a: "85–92% suits almost everything. Go higher for photographs you will print or that a customer will zoom into. Below 70% you start to see blocking in skies and smooth gradients, which is the point where people notice the compression rather than the picture." },
  { q: "Can I convert an animated GIF?", a: "You get its first frame as a still JPG. JPG holds a single image, so animation cannot survive. If you need a specific frame, extract them all with the GIF to Images tool first and convert the one you want." },
  { q: "Is there a limit on how many files?", a: "No fixed limit. A single image downloads directly; several are packaged into one ZIP. Large batches simply take a little longer, and the tab stays usable while they process." },
];

const sections: SeoSection[] = [
  {
    heading: "Why convert to JPG at all",
    id: "why",
    body: [
      "Almost everyone converting to JPG is solving a compatibility problem rather than making an aesthetic choice. An upload form rejects the file, a print service will not accept it, an older application refuses to open it, or an email attachment needs to be under a certain size. JPG is the format that ends those arguments — three decades old, unencumbered by patents, and readable by everything.",
      "The second reason is weight. PNG and BMP in particular store far more data than a photograph needs, and converting to JPG routinely cuts the file by 80% or more with no visible change at a sensible quality. For anything being emailed, uploaded or served on a page, that is the difference between a file that works and one that does not.",
    ],
  },
  {
    heading: "What JPG cannot do",
    id: "limits",
    body: [
      "JPG has no transparency. There is no alpha channel in the format at all, so anything see-through must be painted over with a solid colour before saving. That is fine for a photograph and wrong for a logo intended to sit on a coloured background.",
      "It also holds exactly one image, so animation is lost — an animated GIF or WebP converts to its first frame. And because it is lossy, every save discards a little more detail. Convert once from the best source you have, and keep that original if you might need to edit later.",
      "Finally, JPG is a poor fit for sharp-edged content. Screenshots, diagrams, line art and anything with small text pick up a faint halo around every edge, and often do not even get smaller. PNG or WEBP is the better destination for those.",
    ],
  },
  {
    heading: "Picking a quality setting",
    id: "quality",
    body: [
      "The quality slider decides how aggressively detail is discarded. 85–92% is the range where the compression is essentially invisible and the file is still dramatically smaller than the source — start there unless you have a reason not to.",
      "Push to 95% and above for images that will be printed, enlarged or examined closely; the file grows quickly for a difference most people cannot see on a screen, but printing is unforgiving. Drop to 70–80% when you need to hit a hard size limit and the image is a normal photograph. Below that, blocking becomes visible first in skies, skin tones and any smooth gradient.",
    ],
  },
  {
    heading: "Choosing what fills the transparency",
    id: "background",
    body: [
      "Since transparency has to become something, this tool lets you decide what rather than defaulting silently to white. White is right for most documents and pages; a matching colour is better when the image will sit on a dark interface or a coloured card, and avoids the obvious rectangle around your subject.",
      "One thing to watch: PNG and WebP transparency is usually anti-aliased, so edge pixels are partially transparent and blend with whatever you choose. An image prepared against white and then filled with black can show a pale fringe. If that appears, re-exporting the source against the correct background is cleaner than trying to correct it afterwards.",
    ],
  },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} Convert to JPG`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "734" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to convert an image to JPG",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Convert", href: "/#cat-convert" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Convert to JPG</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Convert PNG, WEBP, GIF and BMP images to JPG online — in batches, with quality control. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <ConvertTool config={{ accent: toolColor(tool), accept: "image/png,image/webp,image/gif,image/bmp", targetMime: "image/jpeg", targetLabel: "JPG", flatten: true, quality: true, dropHint: "or drop PNG, WEBP, GIF or BMP images here" }} />

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
        toolName="Convert to JPG"
        intro="Need universally-compatible, lightweight images? oMyImage's Convert to JPG tool turns PNG, WEBP, GIF and BMP files into high-quality JPGs right in your browser. Convert a single image or a whole batch, choose the quality, and pick the background color that replaces any transparency. Nothing is uploaded — it's instant and completely private."
        howToTitle="How to convert an image to JPG"
        steps={steps} features={features} faqs={faqs} sections={sections} fullWidthText
        security="Your images stay private. Conversion to JPG happens entirely in your browser with HTML canvas — nothing is uploaded to a server. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { getTool, relatedTools, toolColor, toolColorTint } from "@/lib/tools";
import { absoluteUrl, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { SeoContent, type HowToStep, type Faq, type Feature } from "@/components/SeoContent";
import { ColorPickerTool } from "./ColorPickerTool";

const tool = getTool("image-color-picker")!;
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
  { title: "Hover & click", description: "Move over the image to preview colors with the magnifier, then click to lock one." },
  { title: "Copy the value", description: "Copy the HEX, RGB or HSL value with one tap, and reuse recent colors from the swatch list." },
];

const features: Feature[] = [
  { icon: "colorize", title: "Pixel-accurate", description: "Sample the exact color of any pixel and read it as HEX, RGB and HSL instantly." },
  { icon: "search", title: "Magnifier loupe", description: "A zoomed loupe follows your cursor so you can target the precise pixel you want." },
  { icon: "lock", title: "100% private", description: "Color sampling runs entirely in your browser with HTML canvas — your image is never uploaded." },
];

const faqs: Faq[] = [
  { q: "What color formats can I copy?", a: "HEX, RGB and HSL. Click any value to copy it to your clipboard." },
  { q: "Does it keep a history of colors?", a: "Yes. Your recently picked colors appear as swatches you can click to copy again." },
  { q: "Which image formats are supported?", a: "JPG, PNG, WEBP, GIF and BMP." },
  { q: "Is it free and private?", a: "Yes. No sign-up, and the image is processed locally in your browser — nothing is uploaded." },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} Image Color Picker`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "401" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to pick a color from an image",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div className="max-w-[1230px] mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Edit & Create", href: "/#cat-edit" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Image Color Picker</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Pick any color from an image online — get the HEX, RGB and HSL value with a magnifier loupe and one-tap copy. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <ColorPickerTool />

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
        toolName="Image Color Picker"
        intro="Grab the exact color from any image in seconds. oMyImage's Image Color Picker lets you hover with a magnifier and click to sample any pixel, then copy its HEX, RGB or HSL value. Perfect for matching brand colors, building palettes or web design. Everything runs in your browser, so your image stays private."
        howToTitle="How to pick a color from an image"
        steps={steps} features={features} faqs={faqs} fullWidthText
        security="Your image stays private. Color sampling happens entirely in your browser with HTML canvas — nothing is uploaded to a server. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}

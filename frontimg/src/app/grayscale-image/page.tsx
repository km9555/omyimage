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
import { GrayscaleTool } from "./GrayscaleTool";

const tool = getTool("grayscale-image")!;
const canonical = absoluteUrl(`/${tool.slug}`);

export const metadata: Metadata = {
  title: { absolute: tool.seoTitle },
  description: tool.seoDescription,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title: tool.seoTitle, description: tool.seoDescription },
  twitter: { card: "summary_large_image", title: tool.seoTitle, description: tool.seoDescription },
};

const steps: HowToStep[] = [
  { title: "Upload", description: "Select one or many images, or drag and drop them into the workspace." },
  { title: "Adjust intensity", description: "Use the slider for a full black-and-white look or a partial desaturation, with a live preview." },
  { title: "Convert & download", description: "Click Grayscale — one image downloads directly, several download together as a ZIP." },
];

const features: Feature[] = [
  { icon: "filter_b_and_w", title: "Adjustable intensity", description: "Go fully black & white or partially desaturate with a smooth 0–100% slider and instant preview." },
  { icon: "burst_mode", title: "Batch convert", description: "Apply the same grayscale to a whole batch of JPG, PNG or WEBP images and download them as a ZIP." },
  { icon: "lock", title: "100% private", description: "Everything runs in your browser with HTML canvas — your images are never uploaded to a server." },
];

const faqs: Faq[] = [
  { q: "What does the intensity slider do?", a: "At 100% the image is fully black and white; lower values blend the original colors with gray for a faded, partially-desaturated look." },
  { q: "Can I grayscale many images at once?", a: "Yes. Add as many as you like — a single image downloads directly and multiple images download together as a ZIP." },
  { q: "Which formats are supported?", a: "JPG, PNG and WEBP, and you can choose the output format independently of the input." },
  { q: "Is it free and private?", a: "Yes. No sign-up and no watermark, and every image is processed locally in your browser." },
  { q: "Does grayscale make the file smaller?", a: "Usually yes, and sometimes dramatically. Removing colour information leaves less for the encoder to store — PNG in particular can drop by half or more. For photographed documents and scans it is one of the easiest size wins available." },
  { q: "Is black and white the same as grayscale?", a: "Not quite, though the terms get used interchangeably. Grayscale keeps 256 shades from black to white. True black and white is one bit per pixel — pure black or pure white with nothing between — which is what fax machines and some scanners produce, and it looks very different." },
  { q: "Can I get the colour back afterwards?", a: "No. Converting to grayscale discards the colour channels permanently, so keep your original if you might want it. This tool works on a copy and never modifies the file on your disk, but the exported grayscale image is a one-way result." },
  { q: "Why do some colours end up the same shade of grey?", a: "Because grayscale measures brightness, not hue. A saturated red and a saturated green can have almost identical perceived brightness, so they collapse to nearly the same grey. This is why a colourful chart can become unreadable in grayscale — the categories were distinguished by hue alone." },
  { q: "Will it help with printing?", a: "Often. Converting yourself means you decide how the tones map, rather than leaving it to whatever the printer driver does. It also avoids being charged for colour printing on a document that has a single coloured logo on page one." },
  { q: "Can I convert a batch to grayscale?", a: "Yes. Add as many images as you like and they are all converted, then returned as a single ZIP — which is the usual case for a set of scanned pages or a consistent gallery." },
];

const sections: SeoSection[] = [
  {
    heading: "What conversion actually does",
    id: "how",
    body: [
      "A colour image stores three numbers per pixel — red, green and blue. Grayscale stores one: brightness. The conversion has to decide how much each colour channel contributes to that single value, and the answer is not an even split, because human vision is not equally sensitive to the three.",
      "We perceive green as much brighter than blue at the same intensity, so the standard weighting leans heavily on green, moderately on red and only slightly on blue. Averaging the three channels equally is the naive approach and it produces noticeably muddy results — skies too light, foliage too dark.",
      "The consequence worth knowing is that two very different colours can produce the same grey. Brightness is one dimension where colour was three, so information is genuinely lost rather than merely set aside.",
    ],
  },
  {
    heading: "Why black and white can be the better photograph",
    id: "aesthetics",
    body: [
      "Removing colour removes a distraction. What remains is composition, contrast, texture and light — which is why portraiture and documentary photography have never abandoned monochrome. A cluttered background full of competing colours often becomes calm in grayscale, and a face gains structure once skin tone stops dominating.",
      "It also rescues photographs with bad colour. Mixed lighting — daylight through a window and tungsten bulbs overhead — produces colour casts that are difficult to correct and immediately obvious. In grayscale the problem simply does not exist.",
      "The images that suffer are the ones where colour carried the meaning: a sunset, a product whose selling point is that it comes in teal, a chart colour-coded by category. If colour is the subject, converting throws away the subject.",
    ],
  },
  {
    heading: "Documents, scans and file size",
    id: "documents",
    body: [
      "Photographing a document with a phone produces a full-colour image of what is essentially black text on white paper — three channels spent recording something that needed one. Converting to grayscale typically halves the file, sometimes better, with no loss of legibility at all.",
      "It also tidies the result. Phone photos of paper pick up colour casts from whatever light is in the room, so the page comes out faintly yellow, blue or green depending on the bulb. Grayscale removes that entirely and makes a set of pages photographed on different days look consistent.",
      "This pairs well with building a PDF: convert to grayscale first, then merge into a document, and the result is a fraction of the size of the colour version — often the difference between clearing an upload limit and not.",
    ],
  },
  {
    heading: "Print and accessibility",
    id: "print",
    body: [
      "Converting deliberately rather than letting a printer driver do it puts you in control of how the tones map. It also sidesteps a practical annoyance: many office printers charge a colour rate for any page containing colour, so a single coloured logo makes an entire document a colour job.",
      "There is an accessibility angle too. Viewing your work in grayscale is the quickest test of whether it relies on colour alone to convey meaning. If a chart becomes unreadable, or a required form field stops being distinguishable, that is exactly what a colour-blind reader experiences — and the fix is to add a label, a pattern or a shape rather than to change the palette.",
    ],
  },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} Grayscale Image`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "318" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to convert an image to grayscale",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div data-tool-shell className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Edit & Create", href: "/#cat-edit" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Grayscale Image</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Convert images to grayscale (black &amp; white) online — with adjustable intensity, a live preview and batch support. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <GrayscaleTool />

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
        toolName="Grayscale Image"
        intro="Give your photos a timeless black-and-white look. oMyImage's Grayscale Image tool desaturates any image right in your browser, with an intensity slider for everything from a subtle fade to a full monochrome conversion. Process one image or a whole batch and download instantly — nothing is uploaded, so your images stay private."
        howToTitle="How to convert an image to grayscale"
        steps={steps} features={features} faqs={faqs} sections={sections} fullWidthText
        security="Your images stay private. Grayscale conversion happens entirely in your browser with HTML canvas — nothing is uploaded to a server. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}

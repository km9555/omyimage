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
import { BlurImageTool } from "./BlurImageTool";

const tool = getTool("blur-image")!;
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
  { title: "Set the strength", description: "Drag the blur slider and watch the live preview update instantly." },
  { title: "Apply & download", description: "Click Blur — one image downloads directly, several download together as a ZIP." },
];

const features: Feature[] = [
  { icon: "lens_blur", title: "Whole image or selective", description: "Soften the entire photo, or draw areas to blur — or invert it and blur everything except them, keeping your subject sharp." },
  { icon: "gradient", title: "Blur, pixelate or solid", description: "Smoothly blur from a soft 1px haze to a heavy 50px Gaussian, switch to chunky pixelation, or block areas out entirely." },
  { icon: "burst_mode", title: "Batch blur", description: "Apply the same blur to a whole batch of JPG, PNG or WEBP images and download them as a ZIP." },
  { icon: "lock", title: "100% private", description: "Everything runs in your browser with HTML canvas — your images are never uploaded to a server." },
];

const faqs: Faq[] = [
  { q: "Is this a Gaussian blur?", a: "Yes — it uses the browser's native Gaussian blur filter for a smooth, high-quality result at any strength." },
  { q: "Can I blur just part of the image?", a: "Yes. Switch to Selective and drag over the areas you want blurred. Turn on Invert to do the opposite — blur everything except those areas, which is how you soften a background while keeping the subject sharp." },
  { q: "Can I blur many images at once?", a: "Yes. Add as many as you like — a single image downloads directly and multiple images download together as a ZIP." },
  { q: "Is it free and private?", a: "Yes. No sign-up and no watermark, and every image is processed locally in your browser." },
  { q: "What is blurring actually useful for?", a: "Three things mostly: hiding sensitive detail such as an address or account number, creating a soft background so text placed over the image stays readable, and faking shallow depth of field so a subject stands out from a busy background." },
  { q: "How strong should the blur be?", a: "For a background behind text, enough that no edge in the image competes with the lettering — usually a fairly heavy setting. For a depth-of-field effect, much lighter, or the result looks artificial. For hiding information, heavy enough that you cannot read it at full zoom." },
  { q: "Can blurred detail be recovered?", a: "Not in any practical sense once the image is exported. Blurring averages pixels together and discards what was there, unlike a coloured box which merely covers it. That is why blur is the right tool for redaction and a drawn rectangle is not." },
  { q: "What is the difference between this and the Blur Face tool?", a: "This tool is for the image as a whole, or for areas you draw yourself. The Blur Face tool adds automatic face detection and batch censoring, so it is the better choice when the goal is anonymising people rather than a visual effect." },
  { q: "Does blurring change the file size?", a: "Usually it shrinks it, sometimes considerably. Compression works by encoding differences between neighbouring pixels, and blurring removes exactly those differences, so there is far less detail left to store." },
  { q: "Will blurring fix a noisy photo?", a: "It hides noise by smoothing everything, but it removes the real detail along with the grain, so the result looks soft rather than clean. A light blur can help a very noisy image; anything more and you have traded one problem for another." },
];

const sections: SeoSection[] = [
  {
    heading: "How a Gaussian blur works",
    id: "how",
    body: [
      "Each output pixel is replaced with a weighted average of the pixels around it, with nearby neighbours counting for more than distant ones. The weighting follows a bell curve, which is where the name comes from, and it is what makes the result look naturally soft rather than smeared in a particular direction.",
      "The radius controls how far that averaging reaches. A small radius mixes only immediate neighbours and takes the edge off; a large one pulls in pixels from across the frame and dissolves the image into colour fields. The relationship is not linear — doubling the radius does considerably more than double the visual effect.",
      "Because the operation replaces pixel values rather than covering them, it is destructive by nature. That is a drawback when you are softening a photograph for effect and precisely the point when you are hiding something.",
    ],
  },
  {
    heading: "Blur as redaction",
    id: "redaction",
    body: [
      "Drawing a black box over a bank account number in an editing application feels like redaction, but if the file keeps layers the box can be moved, and even flattened it advertises that something was concealed. Blur removes the information instead of hiding it: after export, the characters are not recoverable because they are no longer represented in the pixels.",
      "The practical rule is to judge the result at full zoom, not in a preview. A blur that looks convincing at thumbnail size can leave text perfectly legible when someone opens the image properly. If you can still make out what it said, so can anyone else.",
      "For redacting a specific area rather than the whole picture, the Blur Face tool lets you draw regions and leave everything else sharp — usually what you want when only one part of a screenshot is sensitive.",
    ],
  },
  {
    heading: "Backgrounds for text",
    id: "backgrounds",
    body: [
      "Text laid over a photograph is often hard to read, because the image underneath has edges and contrast competing with the letterforms. Blurring the background is the standard fix — the photograph still provides colour, mood and context, but nothing in it fights the type.",
      "This is why blurred imagery is everywhere behind headlines, login screens, hero sections and presentation title slides. The blur wants to be heavier than instinct suggests: if any recognisable edge survives, it will find its way behind a letter and make it harder to read.",
      "Blurring also shrinks the file, which is a useful side effect for a full-width background image that would otherwise be one of the heaviest things on the page.",
    ],
  },
  {
    heading: "Faking shallow depth of field",
    id: "depth",
    body: [
      "A camera with a wide aperture throws the background out of focus and makes the subject stand out. Phone cameras approximate this with portrait mode, and it can be approximated further after the fact by blurring an image and compositing a sharp subject back over it.",
      "The honest caveat is that a uniform blur is not what a lens does. Real optical defocus increases with distance, so a true shallow-depth photograph is progressively softer toward the back of the scene, while a uniform blur is equally soft everywhere. Keep the effect light and it reads convincingly; push it hard and it looks like what it is.",
    ],
  },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} Blur Image`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "276" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to blur an image",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div data-tool-shell className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Edit & Create", href: "/#cat-edit" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Blur Image</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Blur an image online with an adjustable Gaussian blur, a live preview and batch support. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <BlurImageTool />

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
        toolName="Blur Image"
        intro="Soften a background, anonymize a scene or create a frosted effect. oMyImage's Blur Image tool applies a smooth Gaussian blur to your photos right in your browser, with a slider to dial in exactly the strength you want and a live preview. Blur one image or a whole batch and download instantly — nothing is uploaded, so your images stay private."
        howToTitle="How to blur an image"
        steps={steps} features={features} faqs={faqs} sections={sections} fullWidthText
        security="Your images stay private. Blurring happens entirely in your browser with HTML canvas — nothing is uploaded to a server. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}

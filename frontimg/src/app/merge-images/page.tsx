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
import { MergeTool } from "./MergeTool";

const tool = getTool("merge-images")!;
const canonical = absoluteUrl(`/${tool.slug}`);

export const metadata: Metadata = {
  title: { absolute: tool.seoTitle },
  description: tool.seoDescription,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title: tool.seoTitle, description: tool.seoDescription },
  twitter: { card: "summary_large_image", title: tool.seoTitle, description: tool.seoDescription },
};

const steps: HowToStep[] = [
  { title: "Upload", description: "Select two or more images, or drag and drop them into the workspace." },
  { title: "Arrange & style", description: "Pick side-by-side, stacked or grid, reorder the images, and set spacing and background." },
  { title: "Merge & download", description: "Click Merge — the combined image downloads instantly as PNG, JPG or WEBP." },
];

const features: Feature[] = [
  { icon: "grid_view", title: "Three layouts", description: "Combine photos side by side, stacked vertically, or in a clean grid with adjustable columns." },
  { icon: "space_bar", title: "Spacing & background", description: "Add space between images and a solid or transparent background, with a live preview." },
  { icon: "lock", title: "100% private", description: "Merging runs entirely in your browser with HTML canvas — your images are never uploaded." },
];

const faqs: Faq[] = [
  { q: "How many images can I merge?", a: "As many as you like — add two or more and arrange them side by side, stacked, or in a grid." },
  { q: "Can I reorder the images?", a: "Yes. Use the up and down arrows in the list to set the exact order before merging." },
  { q: "Can I keep a transparent background?", a: "Yes. Choose a transparent background and export as PNG or WEBP to keep the spacing see-through." },
  { q: "Is it free and private?", a: "Yes. No sign-up and no watermark, and every image is processed locally in your browser." },
  { q: "What happens if my images are different sizes?", a: "They are aligned along the joining edge and any leftover space is filled with the background colour you choose. If you would rather they matched exactly, resize them to a common width (for a vertical stack) or height (for a horizontal strip) before merging." },
  { q: "Should I merge horizontally or vertically?", a: "Horizontal for before-and-after pairs and side-by-side comparisons, since the eye compares more easily across than down. Vertical for sequences, step-by-step instructions and anything that will be read on a phone, where a tall image uses the screen better than a wide one." },
  { q: "Can I add space between the images?", a: "Yes — a gap with your chosen background colour. A small gap of ten or twenty pixels makes it obvious that these are separate images rather than one continuous scene, which matters for comparisons where a seamless join would be misleading." },
  { q: "What is this useful for?", a: "Before-and-after edits, product photos from several angles in one listing image, step-by-step tutorials, screenshot sequences for bug reports or documentation, contact sheets, and social posts where the platform only allows one image but you have three things to show." },
  { q: "Does merging reduce quality?", a: "No. The images are drawn onto a canvas at their original pixel dimensions, so nothing is resampled. Exporting as JPG costs the usual small amount of quality; PNG and WEBP keep it exact." },
  { q: "Is there a practical limit on how many I should merge?", a: "There is no hard cap, but a very long strip becomes hard to view — most platforms scale a wide image down to fit, so a ten-image horizontal merge can end up too small to read. Two to four is the practical sweet spot." },
];

const sections: SeoSection[] = [
  {
    heading: "One image instead of several",
    id: "why",
    body: [
      "A great many places accept exactly one image. Marketplace listings, forum posts, review forms, bug trackers, chat messages and most social platforms all have a slot rather than a gallery, and the usual workaround — posting several images in sequence — means the viewer has to remember the first one while looking at the third.",
      "Merging solves that by putting the comparison inside a single frame. A before-and-after sits side by side where the difference is immediately visible; three product angles arrive together; a sequence of screenshots reads as one story. Nothing has to be clicked through.",
      "It is also the simplest way to make a comparison honest. Two images shown together at the same scale are much harder to misrepresent than two images shown one after another.",
    ],
  },
  {
    heading: "Choosing a direction",
    id: "direction",
    body: [
      "Horizontal merging puts images side by side, which is the natural choice for comparisons. The eye moves across easily and the two halves are read as a pair. This is the standard layout for before-and-after edits, product variants and any A-versus-B.",
      "Vertical merging stacks images down the page. It suits sequences and instructions, where the order matters and top-to-bottom implies progression. It is also the better choice for anything that will be viewed on a phone: a tall image fills a portrait screen, whereas a wide one gets scaled down until the detail disappears.",
      "If you are unsure, ask what the viewer is meant to do. Comparing? Go horizontal. Following? Go vertical.",
    ],
  },
  {
    heading: "Sizes, gaps and alignment",
    id: "layout",
    body: [
      "Images of different dimensions are aligned on the joining edge and the remaining space is filled with your background colour. That is a reasonable default, but the result looks noticeably tidier when the images share a dimension — a common width for a vertical stack, a common height for a horizontal strip. Running them through the Resize tool first takes a moment and improves the outcome considerably.",
      "A gap between images is worth adding more often than not. Without one, two photographs with similar edges can appear to be a single continuous scene, which is confusing at best and misleading at worst in a before-and-after. Ten to twenty pixels is usually enough to signal the boundary without looking like a collage.",
      "The background colour fills both the gaps and any leftover space. White suits most contexts; a mid-grey often looks better behind photographs, and matching your brand colour works well for anything being published.",
    ],
  },
  {
    heading: "Merging is lossless",
    id: "quality",
    body: [
      "The images are drawn onto a canvas at their native pixel dimensions, so no resampling happens and nothing is softened. The merged result is exactly as sharp as its inputs.",
      "The only quality consideration is the export format. Choose PNG or WEBP to keep everything exact, or JPG if the result is a photograph and you want a smaller file. If the merge contains screenshots or text, PNG is clearly the better choice — JPG's artefacts cluster around exactly the sharp edges that lettering is made of.",
    ],
  },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} Merge Images`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "289" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to merge images into one",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Edit & Create", href: "/#cat-edit" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Merge Images</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Combine multiple images into one online — side by side, stacked or in a grid, with spacing, background and reordering. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <MergeTool />

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
        toolName="Merge Images"
        intro="Combine several photos into a single image in seconds. oMyImage's Merge Images tool joins your pictures side by side, stacked, or in a grid right in your browser, with control over order, spacing and background. Build collages, before-and-afters or comparison sheets and download instantly — nothing is uploaded, so your images stay private."
        howToTitle="How to merge images into one"
        steps={steps} features={features} faqs={faqs} sections={sections} fullWidthText
        security="Your images stay private. Merging happens entirely in your browser with HTML canvas — nothing is uploaded to a server. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}

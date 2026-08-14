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
import { AllInOneEditor } from "./AllInOneEditor";

const tool = getTool("image-editor")!;
const canonical = absoluteUrl(`/${tool.slug}`);

export const metadata: Metadata = {
  title: { absolute: tool.seoTitle },
  description: tool.seoDescription,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title: tool.seoTitle, description: tool.seoDescription },
  twitter: { card: "summary_large_image", title: tool.seoTitle, description: tool.seoDescription },
};

const steps: HowToStep[] = [
  { title: "Open an image", description: "Select an image, or drag and drop it into the editor." },
  { title: "Pick a tool", description: "Click any icon in the ribbon — crop, rotate, adjust, blur, border, round, watermark or draw — and tweak its options with a live preview." },
  { title: "Apply & repeat", description: "Apply each edit to stack changes, with full undo/redo, then chain as many tools as you like." },
  { title: "Export", description: "Download the final image as PNG, JPG or WEBP." },
];

const features: Feature[] = [
  { icon: "dashboard_customize", title: "Every tool in one place", description: "Crop, resize, rotate, flip, adjust, filter, grayscale, blur, border, round, watermark and draw — without leaving the page." },
  { icon: "history", title: "Undo & redo", description: "Apply edits one after another and step backward or forward freely, or revert to the original at any time." },
  { icon: "lock", title: "100% private", description: "The whole editor runs in your browser with HTML canvas — your image is never uploaded to a server." },
];

const faqs: Faq[] = [
  { q: "What can I do in the editor?", a: "Crop and resize, rotate and flip, adjust brightness/contrast/saturation/hue with filter presets, grayscale, blur, add a border, round into a circle, add a text or logo watermark, and draw or annotate — all on one image." },
  { q: "Can I undo a change?", a: "Yes. Every applied edit is added to a history you can undo and redo, and you can revert to the original at any time." },
  { q: "Will I lose quality?", a: "Edits are composited on a full-resolution canvas. Export as PNG for lossless output, or JPG/WEBP with a quality slider." },
  { q: "Do I need to install anything or sign up?", a: "No. It's a free online editor that runs entirely in your browser — no sign-up, no installation, and your image never leaves your device." },
  { q: "Is it really private?", a: "Yes. All editing happens locally in your browser; nothing is uploaded or stored." },
  { q: "Do I need to install anything?", a: "No. It runs in the browser you already have, on Windows, macOS, Linux, Android and iOS. There is nothing to download, no account to create and no subscription — which is the point, since most edits people need take under a minute and do not justify installing a photo suite." },
  { q: "How does this compare to Photoshop?", a: "It does not, and it is not trying to. There are no layers, masks, curves or blend modes here. What it does cover is the set of operations that account for the overwhelming majority of everyday edits — crop, rotate, resize, adjust, annotate, export — without a launch time or a licence." },
  { q: "Does editing modify my original file?", a: "No. The image is loaded into memory and everything happens on a copy — nothing is committed until you export, and the file on your disk is never touched. Drawing can also be cleared without disturbing the rest of your work." },
  { q: "Which formats can I open and save?", a: "Open JPG, PNG, WEBP, GIF and BMP; save as JPG, PNG or WEBP. Animated GIFs open as their first frame, since the editor works on a single still image." },
  { q: "Will editing reduce the image quality?", a: "Cropping, rotating by right angles and flipping are all lossless. Resizing down is effectively lossless too. The one place quality is spent is the export step, so choose PNG or WEBP if you want to keep everything exact, or JPG at a high quality setting if you want a smaller file." },
  { q: "Does it work on a phone?", a: "Yes. The layout adapts to a small screen and the canvas responds to touch, so cropping and annotating work with a finger. Very large images are limited by the memory your phone gives the browser rather than by the tool." },
];

const sections: SeoSection[] = [
  {
    heading: "The edits people actually need",
    id: "scope",
    body: [
      "Most image editing is not retouching. It is straightening a crooked photo, cropping out a distracting edge, resizing something to fit an upload limit, drawing an arrow on a screenshot, or brightening a picture taken in a dim room. Those jobs share two properties: they take under a minute, and they do not justify opening a professional application.",
      "That is the gap this editor fills. Everything is on one canvas, so you can crop, rotate, adjust and annotate without moving between tools or exporting halfway through. When you are done, one export gives you the finished file.",
      "It is deliberately not a Photoshop replacement. There are no layers, masks or blend modes, because adding them would slow down the ninety per cent of edits that never needed them.",
    ],
  },
  {
    heading: "A sensible order of operations",
    id: "order",
    body: [
      "Composition first: crop and straighten before anything else, so that later steps operate only on pixels you are keeping. Adjusting the exposure of an area you are about to cut away is wasted work, and cropping after resizing throws away resolution you deliberately kept.",
      "Adjustments next — brightness, contrast, saturation — while you still have the full image to judge. Then annotation, since arrows and boxes need to sit in their final positions relative to a frame that is no longer going to change.",
      "Resize last, immediately before export. That way the annotation scales once, at the end, rather than being drawn at one size and squeezed to another. A common frustration is text that looked right on the canvas and is illegible in the exported file, and it almost always comes from resizing after annotating.",
    ],
  },
  {
    heading: "Annotating screenshots",
    id: "annotation",
    body: [
      "Drawing on a screenshot is one of the most common reasons anyone opens an editor at all — marking a bug for a developer, pointing at a setting in a support reply, highlighting a clause in a document.",
      "Two things make annotations work. First, contrast: a red arrow disappears against a red error banner, so pick a colour that fights the interface rather than matching it. Second, restraint: three arrows and a box communicate; fifteen marks do not.",
      "Export screenshots as PNG rather than JPG. Interface captures are almost entirely sharp edges and small text, which is exactly the content JPG handles worst — you get a faint halo around every character and a file that is often no smaller.",
    ],
  },
  {
    heading: "Nothing leaves your device",
    id: "privacy",
    body: [
      "The whole editor runs on an HTML canvas inside your browser tab. Your image is read from disk into memory, edited there, and written back out when you export — it is never uploaded, and there is no copy on a server to be retained or leaked.",
      "That matters more than it might sound, because of what people typically edit. Screenshots contain email addresses, account numbers, internal dashboards and open tabs. Documents photographed for an upload contain everything a document contains. Doing that work locally means the question of who else has a copy does not arise.",
      "A practical side effect: once the page has loaded, the editor keeps working without a connection.",
    ],
  },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} All-in-One Image Editor`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "612" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to edit an image online",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Edit & Create", href: "/#cat-edit" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">All-in-One Image Editor</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Edit images online in one place — crop, resize, rotate, adjust, filter, blur, add borders, round, watermark and draw, with undo/redo. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <AllInOneEditor />

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
        toolName="All-in-One Image Editor"
        intro="One editor for everything. oMyImage's All-in-One Image Editor brings crop, resize, rotate and flip, color adjustments and filters, grayscale, blur, borders, circle crop, text and logo watermarks, and freehand drawing together on a single canvas. Apply edits in any order, undo and redo freely, and export once when you're done. It all runs in your browser, so your image stays completely private."
        howToTitle="How to edit an image online"
        steps={steps} features={features} faqs={faqs} sections={sections} fullWidthText
        security="Your image stays private. The entire editor runs in your browser with HTML canvas — nothing is uploaded to a server. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}

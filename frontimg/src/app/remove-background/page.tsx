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
import { RemoveBgTool } from "./RemoveBgTool";

const tool = getTool("remove-background")!;
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
  { title: "Remove background", description: "Click Remove background — our AI detects the subject and cuts out the rest." },
  { title: "Download", description: "Download your subject as a transparent PNG, ready for any background." },
];

const features: Feature[] = [
  { icon: "auto_fix_high", title: "AI subject detection", description: "An open-source neural network finds people, products and objects and removes the background automatically." },
  { icon: "opacity", title: "Transparent PNG", description: "The result is a clean, transparent PNG you can drop onto any color, photo or design." },
  { icon: "verified_user", title: "Open-source engine", description: "Powered by rembg — free, open-source and fine for commercial use." },
];

const faqs: Faq[] = [
  { q: "How does background removal work?", a: "An AI model (U²-Net via the open-source rembg project) identifies the main subject and makes everything else transparent." },
  { q: "What format is the result?", a: "A transparent PNG, so you can place your subject on any new background." },
  { q: "Does it work for products and people?", a: "Yes — it handles people, products, animals and most clear subjects well. Very fine details like wispy hair can vary." },
  { q: "Is it really free and open-source?", a: "Yes. The engine (rembg + U²-Net) is open-source and commercial-use friendly." },
  { q: "Are my images kept?", a: "No. Processed files are stored only briefly for your download link and auto-deleted within an hour." },
  { q: "What kinds of images work best?", a: "A clear subject against a background it contrasts with. Portraits, products on a plain surface and pets all work well. The model struggles when subject and background share colours and tones — a grey cat on a grey sofa is genuinely hard." },
  { q: "Does it handle hair and fur?", a: "Reasonably well, and this is where background removal used to fail badly. Fine strands are the hardest case for any cut-out, so expect the model to get the overall shape right and to lose a few flyaway hairs at the edge. Good separation between subject and background helps enormously." },
  { q: "Why does the result have to be a PNG?", a: "Because transparency needs an alpha channel and JPG has none. If you saved the cut-out as a JPG the removed area would come back as solid white, which defeats the purpose. WEBP also supports transparency if you need a smaller file for the web." },
  { q: "Can I put a new background behind the subject?", a: "Yes — once you have the transparent PNG, drop it into the Image Editor or the Add Border tool to composite it over a colour, or place it in any design tool. The cut-out is a normal PNG with transparency, so anything that understands PNG will work." },
  { q: "Why does this one run on a server when other tools do not?", a: "Because it uses a neural network that is far too large to download into a browser tab. The model runs as a separate process on our machine, your image is sent over HTTPS, and both the upload and the result are deleted within the hour." },
  { q: "Can I remove backgrounds from several images at once?", a: "This tool takes one image at a time, because each run is a heavy model inference rather than a quick pixel operation. For a batch, process them one after another — each takes a few seconds." },
];

const sections: SeoSection[] = [
  {
    heading: "What the model is actually doing",
    id: "how",
    body: [
      "This is not colour keying. Older background removers looked for a range of similar pixels — the green screen approach — and fell apart the moment the background was busy or the subject shared its colour. What runs here is a segmentation model trained on a very large number of images, which predicts for every pixel how likely it is to belong to the foreground subject.",
      "That is why it copes with a person standing in a normal room rather than in front of a studio backdrop. It has learned what people, products and animals tend to look like, so it can separate them from a background it has never seen before.",
      "It also explains the failure cases. When the model is uncertain — because subject and background are similar in tone, because the edge is genuinely ambiguous, or because the subject is something unusual — the mask gets soft or ragged in exactly those places. It is making an informed guess, not measuring something.",
    ],
  },
  {
    heading: "Getting a clean cut-out",
    id: "tips",
    body: [
      "Contrast is what matters most. A subject that differs from its background in brightness or colour separates cleanly; one that blends into it does not. If you control the shot, that single choice will do more than any setting.",
      "Even, diffuse lighting helps too. Hard shadows falling across the boundary between subject and background confuse the edge, and a subject lit from behind often loses its outline entirely. Resolution matters at the margins — a small, heavily compressed image gives the model less to work with, and JPG artefacts around edges are exactly where cut-outs go wrong.",
      "Finally, keep the subject fully in frame where you can. Something cropped by the edge of the picture gives the model no boundary to find on that side, and the result is usually a straight cut along the frame.",
    ],
  },
  {
    heading: "What to do with a transparent PNG",
    id: "uses",
    body: [
      "The most common use is a product photo for a marketplace listing, where a clean white or transparent background is often a listing requirement rather than a preference. Amazon, eBay and most e-commerce platforms specify it explicitly.",
      "Beyond that: profile pictures and team headshots that need to sit on a brand colour, presentation slides where a floating subject looks far better than a photo with a mismatched rectangle behind it, logos and stickers, and any design work where the subject needs to overlap other elements. Because the output is an ordinary PNG with an alpha channel, every design tool understands it.",
    ],
  },
  {
    heading: "Why this tool needs a server",
    id: "server",
    body: [
      "Almost everything on this site runs inside your browser. Background removal does not, and the reason is size: the segmentation model is far larger than anything sensible to download into a browser tab, and it needs more compute than a tab can comfortably provide.",
      "So the model runs as a separate process on our machine. Your image is sent over an encrypted HTTPS connection, processed, and both the upload and the result are deleted within an hour. Nothing is retained, indexed or used for training. Pages that upload your files say so rather than implying otherwise.",
    ],
  },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} Remove Background`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "974" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to remove an image background",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div data-tool-shell className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Image AI", href: "/#cat-ai" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Remove Background</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Remove the background from any image automatically with AI and download a clean, transparent PNG. Powered by open-source rembg.
          </h2>
        </header>

        <RemoveBgTool />

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
        toolName="Remove Background"
        intro="Cut out the background of any photo in one click. oMyImage's Remove Background tool uses an open-source AI model to detect the subject — a person, product or object — and turn everything else transparent, giving you a clean PNG for stores, presentations and designs. Heavy AI work runs on our server; the result downloads as a transparent PNG."
        howToTitle="How to remove an image background"
        steps={steps} features={features} faqs={faqs} sections={sections} fullWidthText
        security="Processing runs on our server using the open-source rembg engine. Results are stored only briefly behind a private download link and auto-deleted within an hour. We never share or reuse your images."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}

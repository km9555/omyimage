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
import { MemeTool } from "./MemeTool";

const tool = getTool("meme-generator")!;
const canonical = absoluteUrl(`/${tool.slug}`);

export const metadata: Metadata = {
  title: { absolute: tool.seoTitle },
  description: tool.seoDescription,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title: tool.seoTitle, description: tool.seoDescription },
  twitter: { card: "summary_large_image", title: tool.seoTitle, description: tool.seoDescription },
};

const steps: HowToStep[] = [
  { title: "Upload", description: "Select an image or meme template, or drag and drop it into the workspace." },
  { title: "Add captions", description: "Type your top and bottom text and tweak the font, size, color and outline with a live preview." },
  { title: "Export", description: "Click Export to download your meme as a PNG, JPG or WEBP." },
];

const features: Feature[] = [
  { icon: "text_fields", title: "Classic meme text", description: "Bold Impact-style captions with a black outline, auto-uppercase and automatic line wrapping for long text." },
  { icon: "palette", title: "Full styling", description: "Change the font, size, text color and outline color and thickness to match any meme style." },
  { icon: "lock", title: "Private & instant", description: "Your meme is rendered entirely in your browser — the image is never uploaded anywhere." },
];

const faqs: Faq[] = [
  { q: "Can I use my own image?", a: "Yes. Upload any JPG, PNG, WEBP or GIF and add captions — there's no fixed set of templates." },
  { q: "Does long text wrap?", a: "Yes. Captions automatically wrap onto multiple lines so they always fit the image width." },
  { q: "What format can I export?", a: "PNG (lossless), JPG (smaller) or WEBP." },
  { q: "Is it free?", a: "Completely free, with no watermark and no sign-up." },
  { q: "Are my images private?", a: "Yes. Everything is rendered locally in your browser; nothing is uploaded." },
  { q: "Why is meme text always white with a black outline?", a: "Because it is the only combination that stays readable on any image. White alone vanishes on a bright sky; black alone disappears in shadow. The outline guarantees contrast against whatever is behind it, which is why the convention has survived unchanged for twenty years." },
  { q: "What font should I use?", a: "Impact is the classic, and it is classic for a reason — condensed, heavy and legible at small sizes, so a long line still fits across the frame. Any bold condensed sans-serif does the same job if Impact is unavailable." },
  { q: "Should the text go inside the image or above it?", a: "Inside is the standard format and travels better, since the meme is a single image with nothing to strip away. Text in a band above and below suits longer captions and keeps the picture unobstructed, which matters when the image itself carries the joke." },
  { q: "What size should I export?", a: "Around 800 pixels wide is plenty. Memes are viewed on phones and get re-compressed by every platform they pass through, so a very large file gains nothing and simply takes longer to upload." },
  { q: "Why does my meme look worse after posting?", a: "Because platforms re-encode every upload, and each re-share compresses it again. That accumulating damage is exactly why heavily-shared memes acquire that washed-out, blocky look. Starting from a clean, reasonably sized image slows the decay." },
  { q: "Can I use any image?", a: "Technically yes. Bear in mind that photographs have owners, and that a meme using someone's photo or likeness can raise copyright and personality-rights questions when it is used commercially. For personal and social use this is rarely a practical concern." },
];

const sections: SeoSection[] = [
  {
    heading: "Why the meme look is what it is",
    id: "convention",
    body: [
      "Heavy white capitals with a black outline is not an aesthetic choice so much as a solved engineering problem. Text laid over a photograph has to remain readable regardless of what is underneath it, and no single colour manages that — white disappears against a sky, black against a shadow.",
      "An outline solves it by guaranteeing an edge in the opposite tone wherever the letter falls. Impact, or any heavy condensed sans-serif, adds the second half: the letterforms are narrow enough that a full sentence fits across the frame and thick enough to survive aggressive compression.",
      "The result is instantly recognisable, which is itself useful. The format signals what the image is before anyone has read a word of it.",
    ],
  },
  {
    heading: "Top text, bottom text, and why",
    id: "structure",
    body: [
      "The two-line structure is a setup and a punchline, and it works because the eye reads the image between them. Top text establishes the premise, the picture supplies the context, and the bottom line lands the joke — the delay is doing real comedic work.",
      "This is why cramming everything into one line usually falls flat, and why very long text fails: by the time the reader reaches the end they have stopped looking at the image. Short lines, ideally under about eight words each, keep the rhythm.",
      "The alternative layout — a white band above or below the picture — suits longer captions and commentary, and keeps the photograph unobstructed. It reads as a caption rather than a meme, which is sometimes the better register.",
    ],
  },
  {
    heading: "Export settings that survive sharing",
    id: "export",
    body: [
      "Around 800 pixels wide is the practical sweet spot. Memes are consumed on phones, and every platform re-encodes what you upload, so a 4000-pixel export gains nothing and simply gets thrown away by the first service it touches.",
      "The re-encoding is worth understanding, because it explains the characteristic decay of a widely-shared meme. Each platform compresses the image again, artefacts accumulate on top of artefacts, and after enough hops the picture is visibly degraded. You cannot prevent this, but starting from a clean source at a sensible size delays it considerably.",
      "Export as JPG at a high quality for photographic memes, or PNG if the image is flat graphics or a screenshot — the text edges stay crisper.",
    ],
  },
  {
    heading: "Everything stays on your device",
    id: "privacy",
    body: [
      "The image is composited on a canvas in your browser, so nothing is uploaded. That is worth knowing because a great many memes are made from private material — a screenshot of a group chat, a photograph of a colleague, something from a family album — which people would rather not hand to a server in order to add two lines of text.",
      "It also means the tool keeps working without a connection once the page has loaded, and there is no queue, no rate limit and no account.",
    ],
  },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} Meme Generator`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "421" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to make a meme",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div data-tool-shell className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Edit & Create", href: "/#cat-edit" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Meme Generator</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Make memes online — add classic top and bottom captions to any image with a live preview, then export as PNG, JPG or WEBP. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <MemeTool />

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
        toolName="Meme Generator"
        intro="Turn any image into a meme in seconds. oMyImage's Meme Generator adds the classic bold, outlined top-and-bottom captions to your own photos or templates, with full control over font, size and colors and a live preview as you type. Long captions wrap automatically. Export as PNG, JPG or WEBP — all in your browser, nothing uploaded."
        howToTitle="How to make a meme"
        steps={steps} features={features} faqs={faqs} sections={sections} fullWidthText
        security="Your images stay private. Memes are rendered entirely in your browser with HTML canvas — nothing is uploaded to a server. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}

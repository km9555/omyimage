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
import { ImageToBase64Tool } from "./ImageToBase64Tool";

const tool = getTool("image-to-base64")!;
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
  { title: "Choose the format", description: "Switch between a data URI, raw Base64, a CSS background rule or an <img> tag." },
  { title: "Copy or download", description: "Copy the string to your clipboard or download it as a .txt file." },
];

const features: Feature[] = [
  { icon: "data_object", title: "Four output formats", description: "Get a ready-to-use data URI, the raw Base64, a CSS background-image rule, or a complete <img> tag." },
  { icon: "bolt", title: "Instant encoding", description: "Encoding happens the moment you drop the file — no waiting, no upload." },
  { icon: "lock", title: "100% private", description: "Your image is encoded in your browser and never sent to a server." },
];

const faqs: Faq[] = [
  { q: "What is a Base64 data URI?", a: "It's a text representation of your image you can embed directly in HTML or CSS, avoiding a separate file request." },
  { q: "Why is the string larger than my file?", a: "Base64 encoding adds about 33% overhead, so it's best suited to small images like icons and logos." },
  { q: "Which formats are supported?", a: "JPG, PNG, WEBP, GIF, BMP, SVG and AVIF." },
  { q: "Is it free and private?", a: "Yes. No sign-up, and the image is encoded locally in your browser — nothing is uploaded." },
  { q: "Why is the Base64 string bigger than the file?", a: "Because Base64 represents three bytes of binary using four text characters, so the encoded form is about 33% larger, plus a little for the data-URI prefix. That overhead is the price of being able to put binary data somewhere only text is allowed." },
  { q: "When should I actually use a data URI?", a: "For small assets — icons, a logo in an email signature, a placeholder, a texture in a single-file HTML page. Below roughly 5 KB the saved HTTP request usually outweighs the size penalty. Above that, a normal image file served separately is faster." },
  { q: "Why do my inline images not show in email?", a: "Because several major email clients block or ignore data URIs, Outlook on Windows being the persistent offender. For email, host the image and link to it, or use a proper CID attachment — inline Base64 is unreliable in that context." },
  { q: "Does Base64 encryption protect my image?", a: "No, and this is a common misunderstanding. Base64 is an encoding, not encryption — it is trivially reversible by anyone, with no key involved. It makes binary data safe to transport as text; it provides no confidentiality whatsoever." },
  { q: "Can I use Base64 in CSS?", a: "Yes, as a background-image URL, and it is a reasonable way to inline a small icon or pattern. Be aware that a data URI in a stylesheet is downloaded by every visitor whether or not that rule ever matches, and it cannot be cached separately from the CSS." },
  { q: "What formats can I encode?", a: "JPG, PNG, WEBP, GIF, BMP, SVG and AVIF. The output is a complete data URI including the correct MIME type, so you can paste it straight into an img tag or a stylesheet." },
];

const sections: SeoSection[] = [
  {
    heading: "What Base64 encoding is for",
    id: "what",
    body: [
      "Base64 rewrites binary data using only a restricted set of text characters. It exists because a great many systems were built to carry text and behave unpredictably when handed raw bytes — email bodies, JSON payloads, XML documents, HTML attributes, URL parameters and many configuration formats among them.",
      "Encoding an image to Base64 lets you put the picture itself inside one of those text-only channels. Wrapped as a data URI, with the MIME type declared at the front, it can go directly into an img tag's src attribute or a CSS background-image rule, and the browser reconstructs the original bytes.",
      "The cost is size. Four characters carry three bytes, so the text form is roughly a third larger than the file, and there is no compression to recover that.",
    ],
  },
  {
    heading: "When inlining helps and when it hurts",
    id: "tradeoffs",
    body: [
      "The benefit is one fewer network request. For a very small asset the round trip can cost more time than the bytes do, so inlining genuinely makes a page render sooner. Around 5 KB is the usual rule of thumb.",
      "Above that, inlining tends to be a net loss for reasons that are easy to overlook. An inlined image cannot be cached separately, so it is re-downloaded with the HTML on every visit, whereas a normal image file is fetched once and reused. It also cannot be lazy-loaded, and it inflates the document itself, which delays parsing and first paint.",
      "The practical guidance: inline icons, tiny logos and placeholders. Serve photographs normally.",
    ],
  },
  {
    heading: "The email problem",
    id: "email",
    body: [
      "Embedding images as data URIs in HTML email looks like an elegant way to avoid hosting anything, and it fails often enough to be a poor default. Outlook on Windows in particular has long refused to render them, and several other clients strip or block them as a security measure.",
      "The reliable approaches are hosting the image and linking to it, or attaching it and referencing it with a CID reference — the mechanism email clients were actually designed around. Base64 in email is worth using only when you control every recipient's client.",
    ],
  },
  {
    heading: "Encoding is not encryption",
    id: "security",
    body: [
      "Base64 is sometimes mistaken for a form of obfuscation or protection. It is neither. Any browser console, any text editor with a decoder, any of a thousand websites will turn the string back into the original image in a second. There is no key and no secret.",
      "This matters when the image itself is sensitive. Base64-encoding a document, an ID or a private photograph and pasting it into a config file, a ticket or a shared document is exactly as exposed as attaching the image would be, and often less obviously so — the string looks like gibberish, which encourages people to treat it as safe.",
      "The encoding here happens in your browser, so the image is never uploaded. What you do with the resulting string is where the actual privacy question lies.",
    ],
  },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} Image to Base64`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "298" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to convert an image to Base64",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Convert", href: "/#cat-convert" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Image to Base64</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Convert an image to a Base64 string or data URI online — with raw, CSS and HTML output and one-tap copy. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <ImageToBase64Tool />

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
        toolName="Image to Base64"
        intro="Inline your images directly into code. oMyImage's Image to Base64 tool encodes any image into a Base64 data URI right in your browser, and gives you the raw string, a CSS background rule and a ready-made <img> tag too. Perfect for embedding small icons and logos without an extra HTTP request. Nothing is uploaded, so your image stays private."
        howToTitle="How to convert an image to Base64"
        steps={steps} features={features} faqs={faqs} sections={sections} fullWidthText
        security="Your image stays private. Base64 encoding happens entirely in your browser — nothing is uploaded to a server. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}

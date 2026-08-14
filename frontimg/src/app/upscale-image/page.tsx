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
import { UpscaleTool } from "./UpscaleTool";

const tool = getTool("upscale-image")!;
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
  { title: "Choose a scale", description: "Pick 2×, 3× or 4× and click Upscale — the AI adds detail as it enlarges." },
  { title: "Download", description: "Download your larger, sharper image." },
];

const features: Feature[] = [
  { icon: "hd", title: "Up to 4× larger", description: "Enlarge small or low-resolution images while the AI reconstructs detail instead of blurring." },
  { icon: "auto_awesome", title: "Detail recovery", description: "Real-ESRGAN restores edges and textures for crisp results, even on heavily compressed photos." },
  { icon: "verified_user", title: "Open-source engine", description: "Powered by Real-ESRGAN — free, open-source and commercial-use friendly." },
];

const faqs: Faq[] = [
  { q: "How much can I enlarge an image?", a: "Up to 4×. A 500×500 image becomes 2000×2000, with AI-reconstructed detail rather than a soft blur." },
  { q: "Can I use this to enhance a photo rather than enlarge it?", a: "Yes — that's the same operation. Pick 2× for a light pass that sharpens edges, cleans up noise and restores detail in soft or compressed photos. Note the result is still twice the original dimensions; downscale it afterwards if you need the original size." },
  { q: "Which engine is used?", a: "Real-ESRGAN, an open-source super-resolution model that's fine for commercial use." },
  { q: "Why does it take a few seconds?", a: "Upscaling is compute-heavy and runs on our server. Larger images and higher scales take longer." },
  { q: "Will it fix a very blurry photo?", a: "It improves sharpness and detail noticeably, but it can't invent information that isn't there in extreme cases." },
  { q: "Are my images kept?", a: "No. Results are stored only briefly for your download link and auto-deleted within an hour." },
  { q: "How is this different from just resizing?", a: "Resizing interpolates between the pixels you already have, which is why enlarged images go soft — there is no new detail to draw on. This model was trained on millions of image pairs and predicts what the missing detail plausibly looked like, so edges stay sharp and texture is reconstructed rather than smeared." },
  { q: "Is the added detail real?", a: "No, and this matters. The model is inventing plausible detail, not recovering something that was captured. For photography, design and print that is exactly what you want. For anything evidentiary, forensic, medical or scientific it is the wrong tool, because the output contains information that was never in the original." },
  { q: "What images does it work best on?", a: "Photographs with real texture — faces, landscapes, fabric, foliage. It also does well on clean low-resolution graphics. It struggles with images that are already heavily compressed, because it faithfully enlarges the JPG artefacts along with everything else." },
  { q: "Is there a size limit?", a: "Yes. There is a cap on input pixels because upscaling is genuinely expensive to compute — the work grows with the output size, not the input. Very large images are rejected up front rather than timing out halfway through. Crop to the part you actually need if you hit it." },
  { q: "Why is the output always a PNG?", a: "Because re-compressing a freshly reconstructed image with JPG would immediately discard some of the detail the model just produced. PNG is lossless, so you keep everything. Convert to JPG or WEBP afterwards if you need a smaller file." },
  { q: "Can I upscale an image more than once?", a: "You can, but it rarely helps. The second pass works from the first pass's invented detail rather than from real information, so errors compound and the result starts to look artificial. One pass from the best original you have is almost always better." },
];

const sections: SeoSection[] = [
  {
    heading: "Interpolation versus reconstruction",
    id: "how",
    body: [
      "Ordinary resizing has a hard limit built into it. When you double an image's dimensions, three out of every four output pixels have no source pixel behind them, so the resampler averages the neighbours. Averaging produces smooth transitions, which is another way of saying it produces blur — edges soften, fine texture disappears, and the enlargement looks exactly like what it is.",
      "A super-resolution model attacks the problem differently. It was trained on an enormous number of paired images — the same scene at low and high resolution — and from that learned what kinds of detail typically sit behind a blurry edge. Given a new low-resolution image, it predicts the high-resolution version rather than averaging toward it.",
      "The practical difference is most obvious on edges and texture. Where interpolation gives you a soft gradient, the model gives you a sharp boundary; where interpolation gives you flat mush, it gives you plausible grain, pores, fabric weave or foliage.",
    ],
  },
  {
    heading: "The honest limitation",
    id: "limits",
    body: [
      "The detail is invented. That is not a criticism of the technique — it is how it works, and for most purposes it is exactly what you want. But it means the output is a plausible reconstruction rather than a more accurate photograph, and the distinction matters in specific contexts.",
      "Do not use it where the pixels are evidence. Forensic work, medical imaging, scientific measurement, reading a licence plate or a document from a security camera — in all of these the model will happily produce convincing detail that was never there, which is worse than a blurry image because it looks authoritative.",
      "For photography, e-commerce, print and design, none of that applies. You want the image to look right, and it does.",
    ],
  },
  {
    heading: "Start from the best source you have",
    id: "source",
    body: [
      "The model reconstructs from what it is given, so a cleaner input produces a better result. A small original is fine — that is the point — but a small original that has been through several rounds of JPG compression is not, because the blocking and haloing get enlarged and sharpened along with the real detail.",
      "If you have a choice between a 600-pixel PNG and a 600-pixel JPG of the same picture, use the PNG. If you have a larger original that you shrank at some point, go back to it. And if the image is a screenshot of a screenshot, expect the artefacts to be reproduced faithfully and confidently.",
    ],
  },
  {
    heading: "Where upscaling earns its place",
    id: "uses",
    body: [
      "The usual case is an image that is fine on screen and inadequate for print. A 800-pixel product photo looks perfectly good on a web page and falls apart on a flyer, and upscaling is often the difference between reprinting the shoot and not.",
      "Other common uses: old family photographs scanned at low resolution, images pulled from an ageing website with no originals left, thumbnails that need to become hero images, and low-resolution logos that must go on signage. In each case the alternative is not a better image — it is no image at all.",
    ],
  },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} Upscale Image`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "612" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to upscale an image",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Image AI", href: "/#cat-ai" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Upscale Image</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Enlarge and enhance images up to 4× with AI that adds real detail instead of blurring — it sharpens soft, noisy or compressed photos as it goes. Powered by open-source Real-ESRGAN.
          </h2>
        </header>

        <UpscaleTool />

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
        toolName="Upscale Image"
        intro="Make small or low-resolution images bigger without the blur. oMyImage's Upscale Image tool uses the open-source Real-ESRGAN model to enlarge photos up to 4×, reconstructing edges and textures so the result stays sharp. It runs on our server because the AI is compute-heavy, then downloads as a high-resolution image."
        howToTitle="How to upscale an image"
        steps={steps} features={features} faqs={faqs} sections={sections} fullWidthText
        security="Upscaling runs on our server using the open-source Real-ESRGAN engine. Results are stored only briefly behind a private download link and auto-deleted within an hour. We never share or reuse your images."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}

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
  { title: "Hover & click to pick", description: "Move over the image to preview colors with the magnifier, then click any pixel to lock its color." },
  { title: "Read the extracted palette", description: "The dominant colors of the image are pulled out automatically — use the slider to get anywhere from 2 to 16 of them." },
  { title: "Copy or download", description: "Copy any HEX, RGB or HSL value with one tap, copy the whole palette at once, or download it as a PNG swatch sheet." },
];

const features: Feature[] = [
  { icon: "colorize", title: "Pixel-accurate picker", description: "Sample the exact color of any pixel and read it as HEX, RGB and HSL instantly." },
  { icon: "search", title: "Magnifier loupe", description: "A zoomed loupe follows your cursor so you can target the precise pixel you want." },
  { icon: "palette", title: "Full color palette", description: "Extracts 2–16 dominant colors with their share of the image, and keeps small accent colors instead of averaging them away." },
  { icon: "lock", title: "100% private", description: "Both the picker and the palette run entirely in your browser with HTML canvas — your image is never uploaded." },
];

const faqs: Faq[] = [
  { q: "What color formats can I copy?", a: "HEX, RGB and HSL. Click any value to copy it to your clipboard." },
  { q: "How are the palette colors chosen?", a: "The image is sampled at full color fidelity — no blurring or smoothing — then grouped into color regions. The tool over-generates candidate colors and keeps the ones that are both common and visually distinct, so a small but vivid accent still earns a swatch instead of being averaged into the background." },
  { q: "How many colors can I extract?", a: "Between 2 and 16, adjustable with the slider. Each swatch also shows the share of the image closest to that color." },
  { q: "Can I export the palette?", a: "Yes. Copy individual HEX/RGB values, copy the full list at once, or download a PNG swatch sheet with labels." },
  { q: "Does it keep a history of colors?", a: "Yes. Your recently picked colors appear as swatches you can click to copy again." },
  { q: "Which image formats are supported?", a: "JPG, PNG, WEBP, GIF and BMP. For animated images, the colors come from the first frame." },
  { q: "Is it free and private?", a: "Yes. No sign-up, and the image is processed locally in your browser — nothing is uploaded." },
  { q: "What is the difference between HEX, RGB and HSL?", a: "They describe the same colour three ways. HEX is the compact six-digit form used in CSS and design tools. RGB gives the three channel values directly, which is what code and canvas APIs expect. HSL splits colour into hue, saturation and lightness, which is far easier to reason about when building variations of a shade." },
  { q: "Why does the picked colour look different in my design tool?", a: "Usually a colour profile mismatch. An image tagged with a wide-gamut profile such as Display P3 is converted for display, so the value you sample can differ from the value another application reports. Photographs also contain noise, so two adjacent pixels in what looks like flat colour are rarely identical." },
  { q: "How do I build a palette from a photograph?", a: "Take the dominant colour as your base, then pick two or three supporting shades from different areas of the image — a light one for backgrounds and a saturated one for accents. Photographs are a reliable source because natural light already harmonises the colours in a scene." },
  { q: "Will these colours be accessible?", a: "Not automatically. A palette sampled from a photograph is chosen for harmony, not contrast, and mid-tones pulled from an image frequently fail contrast requirements as text. Check any text-and-background pair against WCAG before using it — 4.5:1 for normal text, 3:1 for large." },
  { q: "Can I extract a brand's colours from a screenshot?", a: "Yes, and it is a common use. Take a screenshot of the site or logo and sample from it. Be aware that a screenshot has been through display rendering and image compression, so the result is very close rather than exact — good enough for matching, not for an official brand specification." },
];

const sections: SeoSection[] = [
  {
    heading: "Sampling a colour and reading the value",
    id: "sampling",
    body: [
      "Picking a colour reads the value of a single pixel and reports it in the notations different tools expect. HEX for CSS and design software, RGB for code, HSL when you want to build a family of related shades by adjusting one component at a time.",
      "HSL deserves more use than it gets. Because it separates hue from saturation and lightness, producing a lighter version of a brand colour is a matter of changing one number, whereas doing the same in HEX means guessing at three. For generating hover states, disabled variants and tints from a single base colour, it is much the easier model.",
      "One practical caution: photographs contain noise, so what looks like a flat area is not. Sampling two neighbouring pixels in the same patch of sky will give you two slightly different values, neither of them wrong.",
    ],
  },
  {
    heading: "Extracting a palette",
    id: "palette",
    body: [
      "A dominant-colour analysis looks at the whole image rather than one pixel, groups similar colours together and reports the ones covering the most area. That gives you the palette a viewer actually perceives, which is not always what you would have picked by eye — a colour can feel prominent while occupying very little of the frame.",
      "Photographs make good palette sources because the light in a scene has already harmonised them. Colours lit by the same sun, or the same lamp, share an undertone, and that shared cast is what makes a palette feel coherent rather than assembled.",
      "The usual approach is to take the dominant colour as a base, a light neutral from the image for backgrounds, and one saturated colour for accents. Three or four is plenty; a palette of eight tends to lose its identity.",
    ],
  },
  {
    heading: "Colour harmony is not accessibility",
    id: "contrast",
    body: [
      "This is the mistake worth avoiding. A palette lifted from a photograph is selected for how the colours sit together, and that says nothing about whether text in one of them is legible on another.",
      "Mid-tone colours are the particular trap: they look sophisticated and frequently fail contrast requirements in both directions, being neither light enough to carry dark text nor dark enough to carry light text. WCAG asks for 4.5:1 for normal text and 3:1 for large text, and a good-looking mid-grey-blue on a good-looking mid-tan can land near 2:1.",
      "The workable pattern is to use the sampled palette for accents, borders, illustrations and backgrounds, and to keep text in tones you have explicitly checked. Harmony and contrast are separate problems and need to be solved separately.",
    ],
  },
  {
    heading: "Common uses",
    id: "uses",
    body: [
      "Matching a design to a photograph is the most frequent one — a site whose accent colour is drawn from its hero image feels considered in a way that an arbitrary blue does not. Building a brand palette from a mood board works the same way.",
      "Beyond that: recovering a colour from a logo when nobody can find the brand guidelines, matching a chart's series colours to a product photo, sampling a competitor's palette from a screenshot, and picking colours out of a painting or textile that already work together.",
      "Everything is sampled from a canvas inside your browser, so the image is never uploaded — which matters when the source is unreleased design work or a client's material.",
    ],
  },
];

export default function Page() {
  const software = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `${SITE.name} Image Color Picker & Color Extractor`,
    url: canonical, operatingSystem: "All", applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "401" }, description: tool.seoDescription,
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to pick a color and extract a palette from an image",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.description })),
  };
  const related = relatedTools(tool, 4);

  return (
    <>
      <div data-tool-shell className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Edit & Create", href: "/#cat-edit" }, { label: tool.name }]} />
        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Image Color Picker &amp; Color Extractor</h1>
          <h2 data-tool-subtitle className="text-body-lg text-on-surface-variant">
            Pick any color from an image online and extract its full color palette in one place — get HEX, RGB and HSL values with a magnifier loupe, copy them or download the palette as a swatch sheet. Free, fast and 100% private in your browser.
          </h2>
        </header>

        <ColorPickerTool />

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
        toolName="Image Color Picker & Color Extractor"
        intro="Grab the exact color from any image in seconds — then turn the whole photo into a ready-to-use palette. oMyImage's color picker lets you hover with a magnifier and click to sample any pixel, then copy its HEX, RGB or HSL value. At the same time it extracts the image's dominant colors and shows how much of the picture each one covers, so you can copy the full palette or download a labeled swatch sheet. Perfect for matching brand colors, building moodboards, and web or product design. Everything runs in your browser, so your image stays private."
        howToTitle="How to pick a color and extract a palette from an image"
        steps={steps} features={features} faqs={faqs} sections={sections} fullWidthText
        security="Your image stays private. Color sampling and palette extraction happen entirely in your browser with HTML canvas — nothing is uploaded to a server. No storage, no tracking of your files."
      />

      <JsonLd data={software} />
      <JsonLd data={howTo} />
    </>
  );
}

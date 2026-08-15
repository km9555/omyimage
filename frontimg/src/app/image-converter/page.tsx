import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { getTool, toolColor, toolColorTint } from "@/lib/tools";
import { CONVERTER_PAIRS } from "@/lib/converters/pairs";
import { FORMATS, fmt } from "@/lib/converters/formats";
import type { FormatId } from "@/lib/converters/types";

/**
 * Format-conversion hub.
 *
 * The long-tail converter pages are kept off the home grid (`homeGrid: false`)
 * because forty near-identical cards make a worse home page and split its
 * internal link equity. This page is where that link equity goes instead: one
 * authoritative node linking to every pair, grouped by source format, so each
 * converter has a crawlable path from the site root two clicks deep.
 */

const canonical = absoluteUrl("/image-converter");
const TITLE = "Image Converter — Convert Between JPG, PNG, WEBP, AVIF & More";
const DESCRIPTION =
  "Free online image format converters. Convert between JPG, PNG, WEBP, AVIF, GIF, BMP and JFIF in your browser — batch supported, no sign-up, no watermark.";

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | ${SITE.name}` },
  description: DESCRIPTION,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title: TITLE, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

/** Source formats in the order they should appear, filtered to what exists. */
const SOURCE_ORDER: FormatId[] = ["jpg", "png", "webp", "avif", "gif", "bmp", "jfif", "heic"];

const faqs = [
  {
    q: "Which image format should I convert to?",
    a: "JPG for photographs that need to work everywhere. PNG when you need transparency or a lossless file to keep editing. WebP when the destination is a web page and you want the smallest file that still supports transparency. AVIF is smaller again but far fewer applications can open it.",
  },
  {
    q: "Do these converters upload my images?",
    a: "Almost all of them run entirely inside your browser, so the image never leaves your device. The exceptions are formats a browser cannot decode or encode on its own — HEIC is the main one — and those pages say so directly.",
  },
  {
    q: "Can I convert several files at once?",
    a: "Yes. Every converter here accepts a batch: add as many files as you like and they come back as a single ZIP rather than as individual downloads.",
  },
  {
    q: "Is there a file size limit?",
    a: "There is no hard limit. Files above 15 MB are handed to our server for processing on most converters, since a browser tab cannot comfortably handle them. BMP is the exception and always converts locally.",
  },
  {
    q: "Do I lose quality when converting?",
    a: "It depends on the target. PNG is lossless, so nothing is lost in that step. JPG, WebP and AVIF are lossy and re-encode the image, though at sensible quality settings the change is not visible. Converting repeatedly between lossy formats does accumulate damage, so convert once from the best original you have.",
  },
];

export default function Page() {
  const grouped = SOURCE_ORDER.map((id) => ({
    format: FORMATS[id],
    pairs: CONVERTER_PAIRS.filter((p) => p.from === id),
  })).filter((g) => g.pairs.length > 0);

  const total = CONVERTER_PAIRS.length;

  const collection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: TITLE,
    url: canonical,
    description: DESCRIPTION,
    hasPart: CONVERTER_PAIRS.map((p) => ({
      "@type": "SoftwareApplication",
      name: p.name,
      url: absoluteUrl(`/${p.slug}`),
      applicationCategory: "MultimediaApplication",
      operatingSystem: "All",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    })),
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <div data-tool-shell className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md flex flex-col gap-stack-lg">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Convert", href: "/#cat-convert" },
            { label: "Image Converter" },
          ]}
        />

        <header className="flex flex-col gap-stack-sm mt-2">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Image Converter</h1>
          <p className="text-body-lg text-on-surface-variant max-w-3xl">
            {total} format converters, each one built for a specific pair rather than a generic
            drop-down. Pick your source format below. Everything is free, batch-capable, and runs
            in your browser unless the format makes that impossible.
          </p>
        </header>

        {grouped.map(({ format, pairs }) => (
          <section key={format.id} id={`from-${format.id}`}>
            <h2 className="text-headline-md font-semibold text-primary mb-stack-sm">
              Convert from {format.label}
            </h2>
            <p className="text-body-md text-on-surface-variant max-w-3xl mb-stack-md">
              {format.essay}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-stack-md">
              {pairs.map((p) => {
                const tool = getTool(p.slug);
                if (!tool) return null;
                const to = fmt(p.to);
                return (
                  <Link
                    key={p.slug}
                    href={`/${p.slug}`}
                    className="flex items-center gap-3 rounded-lg border border-outline-variant/40 bg-surface-container-lowest p-4 hover-lift"
                  >
                    <span
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: toolColorTint(tool) }}
                    >
                      <Icon
                        name={tool.icon}
                        fill
                        className="text-2xl"
                        style={{ color: toolColor(tool) }}
                      />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-body-md font-semibold text-primary">
                        {p.name}
                      </span>
                      <span className="block text-label-sm font-label-sm text-on-surface-variant">
                        to {to.prose}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}

        <section>
          <h2 className="text-headline-md font-semibold text-primary mb-stack-md">
            Frequently asked questions
          </h2>
          <div className="flex flex-col gap-3 max-w-3xl">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-lg border border-outline-variant/40 bg-surface-container-lowest"
              >
                <summary className="cursor-pointer px-6 py-4 text-body-md font-semibold text-primary hover:text-secondary transition-colors">
                  {item.q}
                </summary>
                <p className="px-6 pb-4 text-body-md text-on-surface-variant">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="pb-stack-lg" />
      </div>

      <JsonLd data={collection} />
      <JsonLd data={faqSchema} />
    </>
  );
}

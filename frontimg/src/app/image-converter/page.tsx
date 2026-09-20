import type { Metadata } from "next";
import { absoluteUrl, SITE } from "@/lib/site";
import { pageAlternates } from "@/lib/i18n/tool-meta";
import { ConverterHub } from "./ConverterHub";

/* The body moved to ConverterHub so /pt/conversor-de-imagens renders the same
   markup. Metadata is unchanged apart from the hreflang cluster, which only
   appears once a translated hub exists (tool-meta.ts header). */
const canonical = absoluteUrl("/image-converter");
const TITLE = "Image Converter — Convert Between JPG, PNG, WEBP, AVIF & More";
const DESCRIPTION =
  "Free online image format converters. Convert between JPG, PNG, WEBP, AVIF, GIF, BMP and JFIF in your browser — batch supported, no sign-up, no watermark.";

const languages = pageAlternates("/image-converter");

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | ${SITE.name}` },
  description: DESCRIPTION,
  alternates: languages ? { canonical, languages } : { canonical },
  openGraph: { type: "website", url: canonical, title: TITLE, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function Page() {
  // i18n-raw: the English page's own copy — /pt has its own page file.
  return <ConverterHub heading="Image Converter" schemaName={TITLE} description={DESCRIPTION} />;
}

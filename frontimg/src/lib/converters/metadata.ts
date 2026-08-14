/**
 * Metadata for a converter route.
 *
 * Each `src/app/<slug>/page.tsx` does `export const metadata = buildConverterMetadata(SLUG)`.
 * Next evaluates the module during the build rather than parsing the literal,
 * so a derived object is fine under `output: "export"` — but only in that exact
 * shape. Do NOT destructure-and-re-export (`const { metadata } = …; export { metadata }`);
 * that is where the static analysis actually breaks.
 *
 * Titles and descriptions still come from the TOOLS registry, which stays the
 * single source of truth for anything the sitemap or home grid also reads.
 */
import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { getTool } from "@/lib/tools";

export function buildConverterMetadata(slug: string): Metadata {
  const tool = getTool(slug);
  if (!tool) {
    throw new Error(`No TOOLS entry for converter "${slug}" — add it to src/lib/tools.ts.`);
  }
  const canonical = absoluteUrl(`/${tool.slug}`);

  return {
    title: { absolute: tool.seoTitle },
    description: tool.seoDescription,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      title: tool.seoTitle,
      description: tool.seoDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: tool.seoTitle,
      description: tool.seoDescription,
    },
  };
}

import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { toolHref } from "@/lib/i18n/links";
import { toolName } from "@/lib/i18n/tool-labels";
import { toolFamily, type Tool } from "@/lib/tools";

/**
 * The link strip that ties a variant family together: "Compress Image",
 * "Compress Image to 20KB", "… to 50KB", … on the parent page and on every
 * variant. It is the family's internal linking — variants are kept out of
 * `relatedTools()` and off the home grid, so without this strip a variant would
 * be reachable only from the sitemap.
 *
 * Server component (text is in the prerendered HTML, in the page's language).
 * Full tool names are the anchor text on purpose: "Compress image to 50KB" is
 * the query each page targets. Renders nothing for a tool with no variants, so
 * every existing page is unchanged until its first variant ships.
 */
export function VariantLinks({ tool, locale, heading }: { tool: Tool; locale: Locale; heading?: string }) {
  const family = toolFamily(tool);
  if (family.length === 0) return null;
  const title = heading ?? toolName(family[0], locale);

  return (
    <nav aria-label={title} data-variant-links className="mt-2">
      <h2 className="text-headline-sm font-semibold text-primary mb-stack-sm">{title}</h2>
      <ul className="flex flex-wrap gap-2">
        {family.map((v) => {
          const current = v.id === tool.id;
          const label = toolName(v, locale);
          return (
            <li key={v.id}>
              {current ? (
                <span
                  aria-current="page"
                  className="inline-flex items-center rounded-full border border-secondary bg-secondary/10 px-3 py-1.5 text-body-sm font-semibold text-secondary"
                >
                  {label}
                </span>
              ) : (
                <Link
                  href={toolHref(v, locale)}
                  className="inline-flex items-center rounded-full border border-outline-variant/60 bg-surface-container-lowest px-3 py-1.5 text-body-sm text-primary hover:border-secondary hover:text-secondary transition-colors"
                >
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

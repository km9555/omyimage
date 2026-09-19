import Link from "next/link";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl } from "@/lib/site";
import { DEFAULT_LOCALE, type Locale } from "@/i18n/config";
import { getT } from "@/i18n/t";

export interface Crumb {
  label: string;
  /** Omit href for the current (last) page. */
  href?: string;
}

/**
 * Visual breadcrumb trail + BreadcrumbList JSON-LD for SEO.
 *
 * Server component: takes `locale` rather than calling useT() (oMyPDF
 * conversion.md §4.10). Callers pass already-translated labels.
 */
export function Breadcrumbs({ items, locale = DEFAULT_LOCALE }: { items: Crumb[]; locale?: Locale }) {
  const t = getT(locale);
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: absoluteUrl(item.href) } : {}),
    })),
  };

  return (
    <nav aria-label={t("Breadcrumb")} className="text-label-sm font-label-sm text-on-surface-variant">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1">
              {item.href && !isLast ? (
                // A same-page hash on the home page ("/#cat-edit", "/pt#cat-edit") is a
                // plain anchor, so the browser scrolls instead of routing.
                item.href.includes("#") ? (
                  <a href={item.href} className="hover:text-secondary transition-colors">
                    {item.label}
                  </a>
                ) : (
                  <Link href={item.href} className="hover:text-secondary transition-colors">
                    {item.label}
                  </Link>
                )
              ) : (
                <span className={isLast ? "text-primary font-medium" : ""}>{item.label}</span>
              )}
              {!isLast && <Icon name="chevron_right" className="text-[16px]" />}
            </li>
          );
        })}
      </ol>
      <JsonLd data={schema} />
    </nav>
  );
}

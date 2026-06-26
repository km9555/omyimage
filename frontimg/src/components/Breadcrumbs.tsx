import Link from "next/link";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl } from "@/lib/site";

export interface Crumb {
  label: string;
  /** Omit href for the current (last) page. */
  href?: string;
}

/** Visual breadcrumb trail + BreadcrumbList JSON-LD for SEO. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
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
    <nav aria-label="Breadcrumb" className="text-label-sm font-label-sm text-on-surface-variant">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1">
              {item.href && !isLast ? (
                item.href.startsWith("/#") ? (
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

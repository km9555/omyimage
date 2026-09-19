import Link from "next/link";
import { Icon } from "@/components/Icon";
import type { Locale } from "@/i18n/config";
import { getT } from "@/i18n/t";
import { toolHref } from "@/lib/i18n/links";
import { toolName } from "@/lib/i18n/tool-labels";
import { toolColor, toolColorTint, type Tool } from "@/lib/tools";

/**
 * The "More tools" card strip under a tool. Server component — takes `locale`
 * rather than calling useT(), because its text is in the prerendered HTML and
 * must be there in the page's language (oMyPDF conversion.md §4.10).
 *
 * Links go through `toolHref`, so a Portuguese page links to a tool's /pt page
 * once it has shipped and to the English page until then.
 */
export function RelatedTools({ tools, locale }: { tools: Tool[]; locale: Locale }) {
  if (tools.length === 0) return null;
  const t = getT(locale);
  return (
    <section aria-label={t("More tools")} className="mt-4">
      <h2 className="text-headline-md font-semibold text-primary mb-stack-md">{t("More tools")}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-stack-md">
        {tools.map((r) => (
          <Link
            key={r.id}
            href={toolHref(r, locale)}
            className="flex items-center gap-3 rounded-lg border border-outline-variant/40 bg-surface-container-lowest p-4 hover-lift"
          >
            <span
              className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
              style={{ backgroundColor: toolColorTint(r) }}
            >
              <Icon name={r.icon} fill className="text-2xl" style={{ color: toolColor(r) }} />
            </span>
            <span className="text-body-md font-semibold text-primary">{toolName(r, locale)}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

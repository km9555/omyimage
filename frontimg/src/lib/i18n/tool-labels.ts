/**
 * Localized tool names, one-line descriptions and category labels.
 *
 * The registry (`lib/tools.ts`) stays the single source of truth for ids,
 * slugs, icons, colours and English copy; this only overlays the translated
 * label wherever a tool is *listed* — nav menus, footer, home grid,
 * related-tools strip, dashboard cards and search results.
 *
 * Falls back to English, so adding a tool to the registry never breaks a
 * translated build — the new tool just shows up in English until someone
 * writes its entry.
 */
import type { Locale } from "@/i18n/config";
import { ptCategories, ptTools, type LocalizedTool } from "@/i18n/dictionaries/pt/tools";
import { hiCategories, hiTools } from "@/i18n/dictionaries/hi/tools";
import { ruCategories, ruTools } from "@/i18n/dictionaries/ru/tools";
import { idCategories, idTools } from "@/i18n/dictionaries/id/tools";
import { CATEGORIES, type Tool } from "@/lib/tools";

const DICTS: Partial<Record<Locale, Record<string, LocalizedTool>>> = {
  pt: ptTools,
  hi: hiTools,
  ru: ruTools,
  id: idTools,
};

const CATEGORY_DICTS: Partial<Record<Locale, Record<string, { title: string; navLabel: string }>>> = {
  pt: ptCategories,
  hi: hiCategories,
  ru: ruCategories,
  id: idCategories,
};

export function toolName(tool: Tool, locale: Locale): string {
  return DICTS[locale]?.[tool.id]?.name ?? tool.name;
}

export function toolDescription(tool: Tool, locale: Locale): string {
  return DICTS[locale]?.[tool.id]?.shortDescription ?? tool.shortDescription;
}

/** Home-page section heading for a category ("Optimize & Compress"). */
export function categoryTitle(categoryId: string, locale: Locale): string {
  return (
    CATEGORY_DICTS[locale]?.[categoryId]?.title ??
    CATEGORIES.find((c) => c.id === categoryId)?.title ??
    categoryId
  );
}

/** Short category label for pills and breadcrumbs ("Optimize"). */
export function categoryNavLabel(categoryId: string, locale: Locale): string {
  return (
    CATEGORY_DICTS[locale]?.[categoryId]?.navLabel ??
    CATEGORIES.find((c) => c.id === categoryId)?.navLabel ??
    categoryId
  );
}

/**
 * Home category pills → predicates over the tool registry.
 * Pill ids double as the `#cat-<id>` URL fragments.
 */
import type { Tool } from "@/lib/tools";

export interface CategoryPill {
  id: string;
  label: string;
  match: (t: Tool) => boolean;
}

export const CATEGORY_PILLS: CategoryPill[] = [
  { id: "all", label: "All", match: () => true },
  {
    id: "optimize",
    label: "Optimize",
    match: (t) => t.categoryId === "optimize",
  },
  {
    id: "convert",
    label: "Convert",
    match: (t) => t.categoryId === "convert",
  },
  {
    id: "edit",
    label: "Edit & Create",
    match: (t) => t.categoryId === "edit",
  },
  {
    id: "ai",
    label: "Image AI",
    match: (t) => t.categoryId === "ai" || t.processing === "ai",
  },
];

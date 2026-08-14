/**
 * Internal linking for converter pages.
 *
 * `relatedTools()` in tools.ts is `[...sameCategory, ...others].slice(0, n)`
 * with no ranking. That is fine for 29 hand-built tools, but once the convert
 * category holds forty format pairs every one of them would emit the SAME four
 * outbound links — the first four convert entries in registry order — and the
 * new pages would receive almost no inbound links at all. Internal link
 * structure is doing more SEO work here than word count is, so converters get
 * their own ranking.
 *
 * Order: the reverse pair first (genuinely the most useful next click), then
 * pairs sharing a source format, then pairs sharing a target, then anything
 * else live in the category.
 */
import { getTool, relatedTools, type Tool } from "@/lib/tools";
import { CONVERTER_PAIRS } from "./pairs";
import type { ConverterPair } from "./types";

/** The X→Y page for this pair's Y→X, if one exists. */
export function reversePair(pair: ConverterPair): ConverterPair | undefined {
  return CONVERTER_PAIRS.find((p) => p.from === pair.to && p.to === pair.from);
}

function liveTool(slug: string): Tool | undefined {
  const t = getTool(slug);
  return t && t.status === "live" ? t : undefined;
}

export function relatedConverters(pair: ConverterPair, n = 4): Tool[] {
  const seen = new Set<string>([pair.slug]);
  const out: Tool[] = [];

  const push = (slug: string) => {
    if (out.length >= n || seen.has(slug)) return;
    const tool = liveTool(slug);
    if (!tool) return;
    seen.add(slug);
    out.push(tool);
  };

  const rev = reversePair(pair);
  if (rev) push(rev.slug);

  for (const p of CONVERTER_PAIRS) if (p.from === pair.from) push(p.slug);
  for (const p of CONVERTER_PAIRS) if (p.to === pair.to) push(p.slug);
  for (const p of CONVERTER_PAIRS) if (p.from === pair.to || p.to === pair.from) push(p.slug);

  // Backfill from the general registry so early phases (few pairs) still show
  // a full row of cards.
  if (out.length < n) {
    const self = getTool(pair.slug);
    if (self) {
      for (const t of relatedTools(self, n + out.length + 4)) {
        if (out.length >= n) break;
        if (seen.has(t.slug)) continue;
        seen.add(t.slug);
        out.push(t);
      }
    }
  }

  return out.slice(0, n);
}

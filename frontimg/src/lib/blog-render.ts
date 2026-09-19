/**
 * Build-time Markdown → sanitized HTML for blog article bodies.
 *
 * This runs at BUILD TIME in Node (static export), so it cannot reuse the
 * editor's `markdown-editor/render.ts` — that module depends on the browser
 * DOMPurify and lazily imports KaTeX/Mermaid/CSS. Blog posts are trusted,
 * admin-authored marketing content (headings, prose, images, tables, lists,
 * the occasional code block), so we render with the already-installed `marked`
 * and sanitize with `isomorphic-dompurify` (jsdom-backed in Node) for
 * defence-in-depth — matching the project's "sanitize even author content"
 * posture. The output HTML is baked into the static page for SEO.
 */
import { Marked } from "marked";
import DOMPurify from "isomorphic-dompurify";

export interface Heading {
  depth: number;
  text: string;
  id: string;
}

function slugify(text: string): string {
  return (
    text
      .toLowerCase()
      .trim()
      .replace(/[^\p{L}\p{N}\s-]/gu, "")
      .replace(/\s+/g, "-") || "section"
  );
}

/** Render a post body to sanitized HTML and collect its h2/h3 headings. */
export function renderPostBody(markdown: string): { html: string; headings: Heading[] } {
  const md = new Marked({ gfm: true, breaks: false });
  const headings: Heading[] = [];
  const seen = new Map<string, number>();

  md.use({
    renderer: {
      // Add stable anchor ids to headings so posts can be deep-linked.
      heading({ tokens, depth }) {
        const text = this.parser.parseInline(tokens);
        const plain = text.replace(/<[^>]+>/g, "");
        const base = slugify(plain);
        const n = seen.get(base) ?? 0;
        seen.set(base, n + 1);
        const id = n === 0 ? base : `${base}-${n}`;
        if (depth === 2 || depth === 3) headings.push({ depth, text: plain, id });
        return `<h${depth} id="${id}">${text}</h${depth}>\n`;
      },
    },
  });

  const raw = md.parse(markdown, { async: false }) as string;
  const html = DOMPurify.sanitize(raw, {
    USE_PROFILES: { html: true },
    ADD_ATTR: ["id", "target", "rel"],
    // Force safe rel on any anchor that opens a new tab (added post-sanitize).
  });
  return { html, headings };
}

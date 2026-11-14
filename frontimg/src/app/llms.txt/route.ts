import { CATEGORIES, TOOLS } from "@/lib/tools";
import { SITE, absoluteUrl } from "@/lib/site";
import { getPublishedPosts } from "@/lib/blog";
import { toolPath } from "@/i18n/slugs";
import { DEFAULT_LOCALE } from "@/i18n/config";

/**
 * `/llms.txt` (llmstxt.org): a plain-Markdown map of the site for AI
 * assistants and agents. Built from the tool registry at export time, so a new
 * tool appears here with no edit. Google Search ignores this file; it is for
 * ChatGPT/Perplexity/Claude-style retrievers, which robots.txt allows (only
 * training crawlers are blocked). Added by the 2026-11-14 SEO audit.
 */
export const dynamic = "force-static";

export async function GET() {
  const live = TOOLS.filter((t) => t.status === "live");
  const lines: string[] = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.name} is a free online image toolkit: compress, resize, crop, convert, edit and make GIFs. Most tools run entirely in the browser, so the image never leaves the device; very large files, the AI tools and HEIC conversion use a secure server and are deleted within about an hour. No account is needed.`,
    "",
    "Available in English, Portuguese (/pt), Hindi (/hi), Russian (/ru) and Indonesian (/id). Every tool page explains how the tool works, its limits, and an FAQ.",
    "",
  ];

  for (const cat of CATEGORIES) {
    const tools = live.filter((t) => t.categoryId === cat.id && !t.parentId);
    if (tools.length === 0) continue;
    lines.push(`## ${cat.title}`, "");
    for (const t of tools) {
      lines.push(`- [${t.name}](${absoluteUrl(toolPath(t.id, DEFAULT_LOCALE))}): ${t.seoDescription}`);
      for (const v of live.filter((x) => x.parentId === t.id)) {
        lines.push(`  - [${v.name}](${absoluteUrl(toolPath(v.id, DEFAULT_LOCALE))})`);
      }
    }
    lines.push("");
  }

  const posts = await getPublishedPosts();
  if (posts.length > 0) {
    lines.push("## Guides", "");
    for (const p of posts) lines.push(`- [${p.title}](${absoluteUrl(`/blog/${p.slug}`)}): ${p.excerpt}`);
    lines.push("");
  }

  lines.push(
    "## About",
    "",
    `- [About ${SITE.name}](${absoluteUrl("/about")}): who runs the site, how files are handled`,
    `- [Privacy Policy](${absoluteUrl("/privacy")})`,
    `- [Contact](${absoluteUrl("/contact")})`,
    "",
  );

  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}

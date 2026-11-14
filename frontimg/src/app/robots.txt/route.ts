import { SITE } from "@/lib/site";

/**
 * /robots.txt. A route handler rather than `app/robots.ts` because Next's
 * MetadataRoute.Robots has no field for the `Content-Signal` directive.
 *
 * Cloudflare's "Bot Preference Sync" prepends its managed block (the AI
 * training-bot Disallows and `Content-Signal: search=yes,ai-train=no,
 * use=reference`) in front of this file. That managed signal leaves
 * `ai-input` undeclared and the dashboard has no control for it, so this
 * group states the full policy explicitly: search yes, AI answers and
 * retrieval (ai-input) yes, training no — consistent with Cloudflare's line,
 * which only blocks training. Set 2026-11-14 at the owner's request.
 */
export const dynamic = "force-static";

export function GET() {
  const body = [
    "User-Agent: *",
    "Content-Signal: search=yes, ai-input=yes, ai-train=no",
    "Allow: /",
    "",
    `Sitemap: ${SITE.url}/sitemap.xml`,
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}

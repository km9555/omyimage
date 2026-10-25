/**
 * Start hydration AFTER the first contentful paint instead of racing it.
 * Runs as `postbuild`, rewriting every exported page in out/.
 *
 * Why: Next emits its chunks as `<script async>` in <head>. On a fast
 * connection they arrive while the HTML is still being parsed, so React boots
 * before the browser presents a single frame. The page is laid out and painted
 * at ~1.0 s, but that frame is not shown until ~300 ms of chunk evaluation and
 * hydration finish. Lighthouse then sees all of that JavaScript start before
 * the LCP, and its simulation (Lantern) books every script that STARTED
 * evaluating before the observed LCP, plus its download, as LCP-blocking.
 * On a throttled 4G profile that is ~300 KB of JS. Measured on the home page
 * (lighthouse 12.8, mobile, brotli, 2026-10-25): FCP 1.6–1.8 s but LCP
 * 3.8–4.7 s, a score of 78–85, and PageSpeed Insights agreed (FCP 2.1 s,
 * LCP 4.2 s, 82). With no JavaScript at all the same page scores 98–100, so
 * the markup and CSS were never the problem; script timing was.
 *
 * What this does: the async chunk tags (and Next's low-priority preload of
 * the entry chunk) come out of the page, and one inline loader goes in just
 * before </body>. The loader waits for the browser's own
 * `first-contentful-paint` entry, then appends the same scripts, still async,
 * with the same `id`. Next already copes with its chunks running after
 * DOMContentLoaded, since async scripts can always do that, and the RSC
 * payload in `self.__next_f` simply queues until the runtime arrives. The
 * user-visible cost is that hydration starts one frame later. Nobody can
 * click a button they have not seen yet.
 *
 * Two variants that look equivalent and are not:
 *   - requestAnimationFrame + setTimeout fires after the main thread renders
 *     the frame but BEFORE the compositor presents it, so the scripts still
 *     land ahead of FCP. Measured: no change (82–85).
 *   - keeping `<link rel="preload" fetchpriority="low">` for every chunk so
 *     they are cached by FCP: the scripts then evaluate in the same instant
 *     the first frame presents and LCP fell back to 3.0 s (74–85).
 *
 * Fallbacks: a browser without Paint Timing loads the scripts immediately,
 * which is exactly the old behaviour. A safety timer also loads them if no
 * paint entry has arrived after FALLBACK_MS. A visible page always paints, so
 * the timer only matters for a tab opened in the background, where it simply
 * hydrates while hidden.
 *
 * The build FAILS if a page carries a Next chunk script this script does not
 * recognise. That means a Next upgrade changed the markup, and the right
 * response is to look at the new markup, not to ship half the pages deferred.
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "out");
const FALLBACK_MS = 3000;
const MARKER = 'data-defer-hydration=""';

if (!existsSync(out)) {
  console.error("[defer-hydration] out/ not found — this runs after `next build`.");
  process.exit(1);
}

// Exactly what Next 16 emits: `<script src="/_next/static/chunks/x.js" async="">`
// in <head>, and the entry chunk with `id="_R_"` at the end of <body>.
const CHUNK_TAG = /<script src="(\/_next\/static\/chunks\/[^"]+\.js)"(?: id="([^"]+)")? async=""><\/script>/g;
const PRELOAD_TAG = /<link rel="preload" as="script" fetchPriority="low" href="(\/_next\/static\/chunks\/[^"]+\.js)"\/>/g;
// Anything else that would still load a chunk eagerly. The noModule polyfill
// is excluded: modern browsers never run it, old ones need it before anything.
const LEFTOVER = /<script src="\/_next\/static\/chunks\/[^"]+"(?![^>]*noModule)[^>]*>/;

const loader = (chunks) =>
  `<script ${MARKER}>(function(){var c=${JSON.stringify(chunks)},d=0;` +
  `function go(){if(d)return;d=1;for(var i=0;i<c.length;i++){var s=document.createElement("script");s.src=c[i][0];if(c[i][1])s.id=c[i][1];s.async=true;document.head.appendChild(s)}}` +
  `var P=window.PerformanceObserver;` +
  `if(!P||!P.supportedEntryTypes||P.supportedEntryTypes.indexOf("paint")<0)return go();` +
  `try{new P(function(l,o){if(l.getEntriesByName("first-contentful-paint").length){o.disconnect();setTimeout(go,0)}}).observe({type:"paint",buffered:true})}catch(e){return go()}` +
  `setTimeout(go,${FALLBACK_MS})})();</script>`;

function* htmlFiles(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(p);
    else if (entry.name.endsWith(".html")) yield p;
  }
}

let rewritten = 0;
let skipped = 0;
const problems = [];

for (const file of htmlFiles(out)) {
  const html = readFileSync(file, "utf8");
  if (html.includes(MARKER)) {
    skipped++;
    continue;
  }

  const chunks = [];
  let next = html.replace(CHUNK_TAG, (_, src, id) => {
    chunks.push(id ? [src, id] : [src]);
    return "";
  });

  const left = LEFTOVER.exec(next);
  if (left) {
    problems.push(`${relative(out, file)}: unrecognised chunk tag ${left[0]}`);
    continue;
  }
  if (chunks.length === 0) continue;

  const moved = new Set(chunks.map(([src]) => src));
  next = next.replace(PRELOAD_TAG, (tag, href) => (moved.has(href) ? "" : tag));

  if (!next.includes("</body>")) {
    problems.push(`${relative(out, file)}: no </body>`);
    continue;
  }

  writeFileSync(file, next.replace("</body>", `${loader(chunks)}</body>`));
  rewritten++;
}

if (problems.length) {
  console.error(`[defer-hydration] ${problems.length} page(s) not rewritten:\n  ${problems.slice(0, 10).join("\n  ")}`);
  process.exit(1);
}
if (rewritten + skipped === 0) {
  console.error("[defer-hydration] no Next chunk scripts found in out/ — has the markup changed?");
  process.exit(1);
}
console.log(`[defer-hydration] ${rewritten} page(s) now hydrate after first paint${skipped ? `, ${skipped} already done` : ""}.`);

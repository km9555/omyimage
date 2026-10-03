/**
 * Submit every URL in the LIVE sitemap to IndexNow — one POST that reaches
 * Bing, Yandex and the other participating engines (conversion.md §10.9).
 *
 *   npm run indexnow              # after a deploy has finished
 *   npm run indexnow -- --dry-run # count what would be sent, post nothing
 *
 * Run it AFTER the Cloudflare deploy, never from the build: it reads the
 * sitemap that is live, so running it early submits the previous one. Ported
 * from oMyPDF's script of the same name, with two guards added:
 *
 *   • the key file must already be served at the site root with the right
 *     content — otherwise every engine rejects the batch (403) and the run
 *     looks like an outage rather than "deploy first";
 *   • only https://omyimage.com/ URLs are sent — a sitemap built without
 *     NEXT_PUBLIC_SITE_URL would list another host, which IndexNow answers
 *     with 422 for the whole request.
 *
 * The key is public by design (it is served at /<key>.txt); it proves the
 * submitter controls the host, nothing more.
 */
const HOST = "omyimage.com";
const KEY = "942e061e1c972caafc2883c558e2d835";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP = `https://${HOST}/sitemap.xml`;
const ENDPOINT = "https://api.indexnow.org/indexnow";
const MAX_PER_REQUEST = 10_000; // protocol limit
const DRY_RUN = process.argv.includes("--dry-run");

const keyRes = await fetch(KEY_LOCATION, { cache: "no-store" });
const served = keyRes.ok ? (await keyRes.text()).trim() : "";
if (served !== KEY) {
  console.error(
    `Key file ${KEY_LOCATION} is not live (HTTP ${keyRes.status}${keyRes.ok ? ", wrong content" : ""}).` +
      " Deploy public/" + KEY + ".txt first.",
  );
  process.exit(1);
}

const xml = await (await fetch(SITEMAP, { cache: "no-store" })).text();
const all = [...new Set([...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]))];
const urls = all.filter((u) => u.startsWith(`https://${HOST}/`) || u === `https://${HOST}`);
if (!urls.length) {
  console.error(`No https://${HOST} URLs found in ${SITEMAP}`);
  process.exit(1);
}
if (urls.length !== all.length) {
  console.error(`Skipping ${all.length - urls.length} sitemap URL(s) on another host — check NEXT_PUBLIC_SITE_URL.`);
}

// Per-locale breakdown, so a locale that silently fell out of the sitemap
// shows up as a missing line rather than as a total that is merely smaller.
const byLocale = {};
for (const u of urls) {
  const seg = new URL(u).pathname.split("/")[1] ?? "";
  const loc = /^(pt|hi|ru|id)$/.test(seg) ? seg : "en";
  byLocale[loc] = (byLocale[loc] ?? 0) + 1;
}
console.log(
  `${urls.length} URL(s) in the live sitemap — ` +
    Object.entries(byLocale).map(([l, n]) => `${l} ${n}`).join(", "),
);
if (DRY_RUN) {
  console.log("Dry run: nothing submitted.");
  process.exit(0);
}

let failed = false;
for (let i = 0; i < urls.length; i += MAX_PER_REQUEST) {
  const urlList = urls.slice(i, i + MAX_PER_REQUEST);
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  });
  // 200 OK and 202 Accepted (key validation pending) are both success.
  console.log(`Submitted ${urlList.length} URL(s) -> HTTP ${res.status} ${res.statusText}`);
  if (res.status !== 200 && res.status !== 202) {
    failed = true;
    console.error(await res.text());
  }
}
process.exit(failed ? 1 : 0);

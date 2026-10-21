/**
 * Render the site-wide social card, public/og-image.png (1200×630).
 *
 * Every page's og:image / twitter:image points at this one file (OG_IMAGE in
 * src/lib/site.ts). Before it existed no page had an og:image at all, so a link
 * shared to WhatsApp, X, LinkedIn, Slack or Discord unfurled as bare text.
 *
 *   npm run build:og-image      re-render after a brand change (needs network)
 *
 * COMMITTED rather than rendered during `next build`, like the icon font (see
 * build-icon-font.mjs): the build should not depend on Google's CDN, and a
 * file-based `app/opengraph-image.tsx` would not help anyway — Next replaces a
 * parent segment's `openGraph` wholesale when a page sets its own, which every
 * tool page does, so the image has to be named in each `openGraph` block.
 *
 * The card is LANGUAGE-NEUTRAL on purpose: wordmark, format names and domain,
 * no tagline. One file then serves /pt, /hi, /ru and /id too, whose og:title
 * and og:description already carry the translated copy beside it.
 *
 * Rendered with next/og (satori + resvg, already shipped inside `next`), so
 * nothing new is installed. Inter is OFL-1.1; rasterising it into a PNG
 * distributes no font file, so no notice is owed for it.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
// `.js` because `next` has no exports map, so Node's ESM resolver wants the file.
import { ImageResponse } from "next/og.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outFile = join(root, "public", "og-image.png");
const iconFile = join(root, "src", "app", "icon.svg");
const wordmarkFile = join(root, "src", "components", "Wordmark.tsx");

const W = 1200;
const H = 630;

// Brand tokens, light theme (globals.css).
const INK = "#241f19"; // --color-primary / on-background
const MUTED = "#5b5347"; // --color-on-surface-variant
const CLAY = "#c2542c"; // --color-secondary, Terracotta Clay
const CLAY_DEEP = "#a9461f"; // --color-secondary-container
const CREAM = "#fdfbf8"; // --color-background
const PEACH = "#fce7d2"; // --color-secondary-fixed
const LINE = "#d8cfc1"; // --color-outline-variant

// Format names read the same in every locale the site ships.
const FORMATS = ["JPG", "PNG", "WebP", "AVIF", "HEIC", "GIF"];

// ── Fonts ────────────────────────────────────────────────────────────────────
// satori takes TTF/OTF/WOFF but not woff2, and no variable fonts. Google serves
// woff2 to a UA it recognises as modern; Node's default UA gets static TTFs.
async function inter(weight) {
  const css = await (await fetch(`https://fonts.googleapis.com/css2?family=Inter:wght@${weight}`)).text();
  const url = /src:\s*url\((https:[^)]+)\)\s*format\('(?:truetype|opentype)'\)/.exec(css)?.[1];
  if (!url) throw new Error(`Google Fonts returned no TTF for Inter ${weight}:\n${css}`);
  return (await fetch(url)).arrayBuffer();
}

// ── Layout ───────────────────────────────────────────────────────────────────
// satori reads plain { type, props } objects, so no JSX toolchain is needed.
// It also insists every multi-child div say `display: flex`, so that is the
// default here rather than repeated on each node.
const h = (type, style, ...children) => ({
  type,
  props: { style: { display: "flex", ...style }, children: children.length === 1 ? children[0] : children },
});

const svgUri = (svg) => `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;

const icon = svgUri(readFileSync(iconFile));

// The wordmark's own outlines (components/Wordmark.tsx), not Inter set as text,
// so the card carries exactly the mark the navbar draws: "oMy" in ink, "Image"
// in clay. Read from the component so a redrawn mark reaches the card on the
// next run instead of drifting.
const wordmarkPaths = [...readFileSync(wordmarkFile, "utf8").matchAll(/className="fill-(primary|secondary)" d="([^"]+)"/g)];
if (wordmarkPaths.length !== 2) throw new Error(`Expected 2 paths in Wordmark.tsx, found ${wordmarkPaths.length}`);
const wordmark = svgUri(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5116 1210">${wordmarkPaths
    .map(([, tone, d]) => `<path fill="${tone === "primary" ? INK : CLAY}" d="${d}"/>`)
    .join("")}</svg>`,
);
// Sized in em like the component: 5.116em × 1.21em. Its cap band sits centred
// in that box, so centring the box on the logo lines the two up.
const WORDMARK_EM = 112;

/** A stylised photo: sun and two hills on the brand gradient. */
const photo = svgUri(
  `<svg xmlns="http://www.w3.org/2000/svg" width="360" height="280" viewBox="0 0 360 280">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#E8834F"/><stop offset="1" stop-color="${CLAY}"/>
    </linearGradient></defs>
    <rect width="360" height="280" rx="28" fill="url(#g)"/>
    <circle cx="268" cy="78" r="30" fill="${PEACH}"/>
    <path d="M0 236 L96 128 L176 210 L236 156 L360 252 L360 252 Q360 280 332 280 L28 280 Q0 280 0 252 Z" fill="#fff" fill-opacity=".92"/>
    <path d="M0 252 L96 150 L196 280 L28 280 Q0 280 0 252 Z" fill="${CLAY_DEEP}" fill-opacity=".35"/>
  </svg>`,
);

const card = h(
  "div",
  {
    width: W,
    height: H,
    display: "flex",
    backgroundColor: CREAM,
    backgroundImage: `radial-gradient(circle at 92% 8%, ${PEACH} 0%, ${CREAM} 55%)`,
    fontFamily: "Inter",
    color: INK,
    padding: "72px 80px",
  },
  // Left: wordmark, formats, domain.
  h(
    "div",
    { display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 },
    h(
      "div",
      { display: "flex", alignItems: "center" },
      { type: "img", props: { src: icon, width: 112, height: 112, style: { marginRight: 28 } } },
      {
        type: "img",
        props: { src: wordmark, width: Math.round(5.116 * WORDMARK_EM), height: Math.round(1.21 * WORDMARK_EM) },
      },
    ),
    h(
      "div",
      { display: "flex", flexWrap: "wrap", width: 560 },
      ...FORMATS.map((f) =>
        h(
          "div",
          {
            fontSize: 30,
            fontWeight: 600,
            color: MUTED,
            border: `2px solid ${LINE}`,
            backgroundColor: "#ffffff",
            borderRadius: 999,
            padding: "10px 26px",
            margin: "0 16px 16px 0",
          },
          f,
        ),
      ),
    ),
    h("div", { fontSize: 38, fontWeight: 600, color: CLAY }, "omyimage.com"),
  ),
  // Right: a photo card over a tilted back card, read as "images". Bottom-
  // aligned: the wordmark runs past the left column, so the cards sit below it.
  h(
    "div",
    { alignItems: "flex-end", justifyContent: "center", width: 400, paddingBottom: 28, position: "relative" },
    h("div", {
      position: "absolute",
      width: 360,
      height: 280,
      borderRadius: 28,
      backgroundColor: PEACH,
      border: `2px solid ${LINE}`,
      transform: "rotate(-8deg) translate(-18px, 10px)",
    }),
    {
      type: "img",
      props: {
        src: photo,
        width: 360,
        height: 280,
        style: { transform: "rotate(4deg)", boxShadow: "0 24px 48px rgba(36,31,25,0.18)", borderRadius: 28 },
      },
    },
  ),
);

const res = new ImageResponse(card, {
  width: W,
  height: H,
  fonts: [{ name: "Inter", data: await inter(600), weight: 600, style: "normal" }],
});
const png = Buffer.from(await res.arrayBuffer());

// Written as resvg emits it: a lossless sharp recompress saved 0.2 KB of ~97,
// and a palette quantise bands the two gradients visibly.
// Size from the IHDR chunk, which always sits at byte 16.
const [width, height] = [png.readUInt32BE(16), png.readUInt32BE(20)];
if (width !== W || height !== H) throw new Error(`Rendered ${width}×${height}, expected ${W}×${H}`);
writeFileSync(outFile, png);
console.log(`Wrote public/og-image.png — ${W}×${H}, ${(png.length / 1024).toFixed(1)} KB`);

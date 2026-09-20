/**
 * Generate the route stub for every converter pair.
 *
 * Each converter route is a real folder (static export has no dynamic routes)
 * whose page.tsx is five identical lines apart from the slug. Writing those by
 * hand is exactly the kind of copy-paste that produces two pages sharing one
 * slug — which yields duplicate metadata, duplicate canonicals, and NO build
 * error at all. Generating them makes that failure impossible.
 *
 *   npm run gen:converters          write any missing/changed stubs
 *   npm run gen:converters -- --check   exit 1 if anything is out of date (CI)
 *
 * Slugs are read straight out of pairs.ts with a regex rather than by importing
 * it, so this stays a dependency-free node script with no TS toolchain.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pairsFile = join(root, "src", "lib", "converters", "pairs.ts");
const appDir = join(root, "src", "app");

/**
 * Translated routes are generated too, from the same list.
 *
 * A pt converter page exists when BOTH are true: the slug is in
 * `status.ts` (SHIPPED_TOOLS) and `slugs.ts` gives it a Portuguese slug. The
 * page's prose comes from `src/content/converters/<slug>.pt.ts`, which the
 * TypeScript build already requires — so the only thing that can drift is the
 * stub, which is exactly what this script exists to prevent.
 */
const LOCALES = ["pt"];

const src = readFileSync(pairsFile, "utf8");
const slugs = [...src.matchAll(/^\s{4}slug:\s*"([a-z0-9-]+)"/gm)].map((m) => m[1]);

if (slugs.length === 0) {
  console.error("No slugs found in pairs.ts — has the file format changed?");
  process.exit(1);
}
const dupes = slugs.filter((s, i) => slugs.indexOf(s) !== i);
if (dupes.length) {
  console.error(`Duplicate slugs in pairs.ts: ${[...new Set(dupes)].join(", ")}`);
  process.exit(1);
}

const stub = (slug, locale) => `import { ConverterPage } from "@/components/ConverterPage";
import { buildConverterMetadata } from "@/lib/converters/metadata";

const SLUG = "${slug}";
export const metadata = buildConverterMetadata(SLUG${locale ? `, "${locale}"` : ""});
export default function Page() {
  return <ConverterPage slug={SLUG}${locale ? ` locale="${locale}"` : ""} />;
}
`;

/** The slugs each locale ships, read the same dependency-free way. */
function localeRoutes() {
  const statusSrc = readFileSync(join(root, "src", "i18n", "status.ts"), "utf8");
  const slugsSrc = readFileSync(join(root, "src", "i18n", "slugs.ts"), "utf8");
  const routes = [];

  for (const locale of LOCALES) {
    const block = new RegExp(`^  ${locale}: \\[([\\s\\S]*?)^  \\]`, "m").exec(statusSrc);
    const shipped = new Set(
      [...(block?.[1] ?? "").replace(/\/\/.*$/gm, "").matchAll(/"([a-z0-9-]+)"/g)].map((m) => m[1]),
    );
    const mapBlock = new RegExp(
      `${locale.toUpperCase()}_TOOL_SLUGS[^{]*\\{([\\s\\S]*?)^\\};`,
      "m",
    ).exec(slugsSrc);
    const localeSlug = Object.fromEntries(
      [...(mapBlock?.[1] ?? "").matchAll(/"([a-z0-9-]+)":\s*"([a-z0-9-]+)"/g)].map((m) => [m[1], m[2]]),
    );

    for (const slug of slugs) {
      if (!shipped.has(slug) || !localeSlug[slug]) continue;
      routes.push({ slug, locale, dir: join(appDir, locale, localeSlug[slug]) });
    }
  }
  return routes;
}

const check = process.argv.includes("--check");
let stale = 0;
let written = 0;

const targets = [
  ...slugs.map((slug) => ({ slug, locale: null, dir: join(appDir, slug) })),
  ...localeRoutes(),
];

for (const { slug, locale, dir } of targets) {
  const file = join(dir, "page.tsx");
  const rel = relative(root, file).replace(/\\/g, "/");
  const want = stub(slug, locale);
  const have = existsSync(file) ? readFileSync(file, "utf8") : null;
  if (have === want) continue;

  if (check) {
    console.error(`out of date: ${rel}`);
    stale++;
    continue;
  }
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, want, "utf8");
  console.log(`${have === null ? "created" : "updated"}: ${rel}`);
  written++;
}

if (check && stale > 0) {
  console.error(`\n${stale} stub(s) out of date. Run: npm run gen:converters`);
  process.exit(1);
}
console.log(
  check
    ? `All ${targets.length} converter stubs up to date.`
    : `${slugs.length} pairs, ${targets.length} routes, ${written} stub(s) written.`,
);

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
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pairsFile = join(root, "src", "lib", "converters", "pairs.ts");
const appDir = join(root, "src", "app");

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

const stub = (slug) => `import { ConverterPage } from "@/components/ConverterPage";
import { buildConverterMetadata } from "@/lib/converters/metadata";

const SLUG = "${slug}";
export const metadata = buildConverterMetadata(SLUG);
export default function Page() {
  return <ConverterPage slug={SLUG} />;
}
`;

const check = process.argv.includes("--check");
let stale = 0;
let written = 0;

for (const slug of slugs) {
  const file = join(appDir, slug, "page.tsx");
  const want = stub(slug);
  const have = existsSync(file) ? readFileSync(file, "utf8") : null;
  if (have === want) continue;

  if (check) {
    console.error(`out of date: src/app/${slug}/page.tsx`);
    stale++;
    continue;
  }
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, want, "utf8");
  console.log(`${have === null ? "created" : "updated"}: src/app/${slug}/page.tsx`);
  written++;
}

if (check && stale > 0) {
  console.error(`\n${stale} stub(s) out of date. Run: npm run gen:converters`);
  process.exit(1);
}
console.log(
  check
    ? `All ${slugs.length} converter stubs up to date.`
    : `${slugs.length} pairs, ${written} stub(s) written.`,
);

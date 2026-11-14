/**
 * Write the right <html lang> into every exported locale page. Runs as part
 * of `postbuild`, after defer-hydration.
 *
 * Why: a static export renders the root layout's <html> ONCE, with lang="en",
 * so /pt, /hi, /ru and /id pages all shipped `<html lang="en">` in their HTML.
 * An inline script fixes it before paint, and HtmlLang keeps it right after
 * hydration, but a crawler that reads the raw HTML without running JavaScript
 * (Bing's first pass, Yandex, most AI retrievers, screen-reader caches) saw
 * every Hindi or Russian page declared as English. Found by the 2026-11-14 SEO
 * audit. The <html> element carries suppressHydrationWarning, so React does
 * not complain when the attribute already matches what HtmlLang would set.
 *
 * Locales are read from src/i18n/config.ts (LOCALE_META's `prefix` and `tag`),
 * so adding a locale needs no edit here. The build FAILS if a locale page has
 * no `<html lang="en"` to replace — that would mean the root layout changed
 * and this step silently stopped working.
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "out");
if (!existsSync(out)) {
  console.error("[stamp-html-lang] out/ not found — this runs after `next build`.");
  process.exit(1);
}

const config = readFileSync(join(root, "src/i18n/config.ts"), "utf8");
const locales = [...config.matchAll(/^\s*(\w+):\s*\{\s*prefix:\s*"\/(\w+)",\s*tag:\s*"([\w-]+)"/gm)].map(
  ([, , prefix, tag]) => ({ prefix, tag }),
);
if (locales.length === 0) {
  console.error("[stamp-html-lang] no locales parsed from src/i18n/config.ts — has LOCALE_META changed shape?");
  process.exit(1);
}

function* htmlFiles(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(p);
    else if (entry.name.endsWith(".html")) yield p;
  }
}

let failed = false;
for (const { prefix, tag } of locales) {
  const files = [];
  const dir = join(out, prefix);
  if (existsSync(dir)) files.push(...htmlFiles(dir));
  const flat = join(out, `${prefix}.html`); // the locale home is out/pt.html
  if (existsSync(flat)) files.push(flat);

  let stamped = 0;
  for (const file of files) {
    const html = readFileSync(file, "utf8");
    if (html.includes(`<html lang="${tag}"`)) { stamped++; continue; }
    if (!html.includes('<html lang="en"')) {
      console.error(`[stamp-html-lang] ${file}: no <html lang="en"> to replace`);
      failed = true;
      continue;
    }
    writeFileSync(file, html.replace('<html lang="en"', `<html lang="${tag}"`));
    stamped++;
  }
  console.log(`[stamp-html-lang] ${tag}: ${stamped} page(s)`);
  if (stamped === 0) {
    console.error(`[stamp-html-lang] ${tag}: zero pages stamped — is the export layout different?`);
    failed = true;
  }
}
if (failed) process.exit(1);

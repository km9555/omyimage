#!/usr/bin/env node
/**
 * Gate: no hard-coded English copy that bypasses `t()`.
 *
 * `i18n:keys` finds `t("…")` call sites and reports what a locale is missing.
 * It structurally cannot report a string that never reaches `t()` at all — an
 * unwrapped literal is not a missing key, it is not a key. oMyPDF learned this
 * three times (conversion.md §4.19, §4.25, §4.30): German and Hindi read
 * "0 key(s) missing" while ~110 JSX text nodes and ~80 attribute props rendered
 * English, and each regex sweep written to catch them found only one of the
 * shapes.
 *
 * So this one reads the TypeScript AST instead of grepping, and flags every
 * shape in one pass:
 *
 *   <span>Sort</span>                      JSX text (any position — after a
 *   <Icon name="x" />Sort                  self-closing tag, alone on a line…)
 *   title="Bold"                           a text-bearing prop
 *   title={on ? "Hide" : "Show"}           a literal inside a prop expression
 *   {busy ? "Saving…" : "Save"}            a literal rendered as a child
 *   aria-label={`Zoom page ${n}`}          a template literal
 *   toast.error("Could not read file")     a toast message
 *
 * Anything inside a `t(…)` call is fine. Legitimately-untranslated values
 * (format names, product names, units, sample data) are opted out with an
 * `i18n-raw` comment on the line or within the 4 lines above, carrying the
 * reason — each exception is a decision somebody wrote down, not a silent
 * allowlist.
 *
 *   node scripts/i18n-hardcoded.mjs                 # gate: every scanned file
 *   node scripts/i18n-hardcoded.mjs src/app/crop-image src/components/tool
 *                                                   # report for some paths only
 *   node scripts/i18n-hardcoded.mjs --summary       # counts per directory
 *
 * What it cannot see: module-scope config arrays rendered as `{opt.label}`
 * (§4.2 — the literal is not in JSX), and text built in a helper outside JSX.
 * The browser DOM read in the per-batch QA covers those.
 */
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(import.meta.url), "..", "..");
const require = createRequire(join(root, "package.json"));
const ts = require("typescript");

const args = process.argv.slice(2);
const summary = args.includes("--summary");
const paths = args.filter((a) => !a.startsWith("--"));

/**
 * Directories whose files ARE localized copy or are English by decision:
 *   • app/pt — the Portuguese routes (their literals are Portuguese on purpose)
 *   • app/admin — English-only console
 *   • app/blog — English-only by decision (2026-09-19)
 *   • app/auth — OAuth callback, a spinner the reader never reads
 * Every future locale prefix belongs in this list.
 */
const SKIP_DIR = /^src\/app\/(pt|hi|admin|blog|auth)(\/|$)/;

/** Props whose value is read by a human (or a screen reader). */
const TEXT_PROPS = new Set([
  "label", "busyLabel", "placeholder", "title", "aria-label", "alt", "hint",
  "text", "tooltip", "description", "heading", "subtitle", "resetLabel",
  "emptyText", "confirmLabel", "note", "caption", "dropHint", "privacyNote",
  "message", "cta", "ctaLabel", "actionLabel", "doneLabel", "helper",
  "sublabel", "subLabel", "badge", "prompt", "legend", "unitLabel", "aria-description",
]);

/** Object keys whose string value is shown to a human (see check 4). */
const OBJECT_KEYS = new Set([
  "label", "title", "busyLabel", "backLabel", "settingsTitle", "settingsLabel",
  "sheetTitle", "description", "hint", "placeholder", "message", "subtitle",
  "resetLabel", "text", "heading", "tooltip", "caption", "note", "dropHint",
  "privacyNote", "actionLabel", "processingLabel", "buttonLabel", "emptyText",
]);

/** Tokens that are correct untranslated (conversion.md §5 "Never translate"). */
const LITERAL = new Set([
  "PDF", "OCR", "CSV", "JPG", "JPEG", "PNG", "WEBP", "WebP", "BMP", "GIF", "SVG", "TIFF",
  "HEIC", "HEIF", "AVIF", "JFIF", "ICO", "EXIF", "GPS", "RGB", "HEX", "HSL", "CMYK",
  "HTML", "CSS", "URL", "JSON", "ZIP", "Base64", "API", "oMyImage", "oMyPDF",
  "Google", "Dropbox", "Drive", "MediaPipe", "Tesseract", "A4", "A3", "A5", "Letter",
  "Legal", "Instagram", "Facebook", "YouTube", "TikTok", "LinkedIn", "Pinterest",
  "WhatsApp", "Telegram", "X", "Twitter", "iPhone", "Android", "iOS", "Razorpay",
  "Ctrl", "Shift", "Alt", "Esc", "Enter", "Tab", "px", "KB", "MB", "GB", "DPI", "dpi",
]);

/** Does this string look like human-readable English copy? */
function isCopy(s) {
  const text = s.replace(/\s+/g, " ").trim();
  if (!/[A-Za-z]{2,}/.test(text)) return false; // punctuation, numbers, "×", "—"
  if (/^[a-z0-9_]+$/.test(text)) return false; // icon ligature / identifier
  if (/^[a-z][\w-]*(\s+[a-z][\w-:/[\]().%]*)*$/.test(text) && /[-:[]/.test(text)) return false; // class list
  if (/^(https?:|mailto:|\/|#|\.|data:|image\/|application\/)/.test(text)) return false;
  const words = text.split(/[\s/,·•|()→+&–—:]+/).filter(Boolean);
  if (words.length && words.every((w) => LITERAL.has(w) || /^[\d.,%×x°]+$/.test(w) || /^\.[a-z0-9]+$/i.test(w) || /^[A-Z0-9]{2,5}$/.test(w))) return false;
  return true;
}

function walkFiles(p, out = []) {
  const st = statSync(p);
  if (st.isFile()) {
    if (/\.tsx$/.test(p)) out.push(p);
    return out;
  }
  for (const e of readdirSync(p, { withFileTypes: true })) walkFiles(join(p, e.name), out);
  return out;
}

/**
 * Shared components whose sweep is scheduled for a later batch (tracker.csv).
 * The gate skips them until then; this list must only ever shrink, and must be
 * empty when the last batch lands.
 */
const PENDING = new Set([]);

/**
 * Pages translated by a whole-page TWIN rather than by keys.
 *
 * The legal pages are dense with inline `<code>` and `<strong>` and their
 * sentences do not survive being cut into dictionary fragments, so each one
 * has a hand-written `src/app/pt/<slug>/page.tsx` with the same section ids
 * instead — the approach oMyPDF settled on for four locales
 * (conversion.md §6.5). Their English literals are therefore correct, and the
 * thing that would actually break is a MISSING twin, which `i18n:audit`
 * checks against `status.ts`.
 */
const TWIN_TRANSLATED = new Set([
  "src/app/cookies/page.tsx",
  "src/app/privacy/page.tsx",
  "src/app/terms/page.tsx",
  "src/app/refunds/page.tsx",
]);

/**
 * With no paths, gate mode: every shared component, plus the app/ folder of
 * every tool and page some locale SHIPS (i18n/status.ts). An unshipped tool is
 * expected to still hold English literals — it is swept in its own batch —
 * but the moment it ships, its folder is held to the same rule.
 */
function gateTargets() {
  const src = (p) => readFileSync(join(root, "src", p), "utf8");
  const status = src("i18n/status.ts");
  const section = (name) => {
    const start = status.search(new RegExp(`^const ${name}\\b`, "m"));
    const rest = status.slice(start);
    return rest.slice(0, rest.search(/^\};?$/m));
  };
  const quoted = (t) => [...t.replace(/\/\/.*$/gm, "").matchAll(/"([^"]+)"/g)].map((m) => m[1]);
  const out = ["src/components"];
  for (const id of quoted(section("SHIPPED_TOOLS"))) if (existsSync(join(root, "src/app", id))) out.push(`src/app/${id}`);
  for (const p of quoted(section("SHIPPED_PAGES"))) {
    if (p === "/") out.push("src/app/page.tsx");
    else if (existsSync(join(root, "src/app", p))) out.push(`src/app${p}`);
  }
  return [...new Set(out)];
}

const targets = (paths.length ? paths : gateTargets()).map((p) => join(root, p));
const files = targets.flatMap((t) => walkFiles(t)).filter((f) => {
  const rel = relative(root, f).replace(/\\/g, "/");
  if (TWIN_TRANSLATED.has(rel)) return false;
  return !SKIP_DIR.test(rel) && (paths.length || !PENDING.has(rel));
});

const hits = [];

for (const file of files) {
  const rel = relative(root, file).replace(/\\/g, "/");
  const src = readFileSync(file, "utf8");
  const lines = src.split("\n");
  const sf = ts.createSourceFile(file, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);

  const lineOf = (node) => sf.getLineAndCharacterOfPosition(node.getStart(sf)).line;
  const optedOut = (node) => {
    const i = lineOf(node);
    return lines.slice(Math.max(0, i - 4), i + 1).join("\n").includes("i18n-raw");
  };
  const report = (node, value, kind) => {
    if (!isCopy(value) || optedOut(node)) return;
    hits.push({ file: rel, line: lineOf(node) + 1, value: value.replace(/\s+/g, " ").trim(), kind });
  };

  /** Is `node` inside a t(…) / tx(…) call (any depth, stopping at JSX)? */
  const insideT = (node) => {
    for (let p = node.parent; p; p = p.parent) {
      if (ts.isCallExpression(p)) {
        const callee = p.expression.getText(sf);
        if (/^(t|getT\([^)]*\))$/.test(callee)) return true;
      }
      if (ts.isJsxElement(p) || ts.isJsxSelfClosingElement(p) || ts.isJsxFragment(p)) return false;
    }
    return false;
  };

  /** Literal strings reachable in an expression, NOT descending into calls/functions. */
  const literalsIn = (expr, out = []) => {
    if (!expr) return out;
    if (ts.isStringLiteral(expr) || ts.isNoSubstitutionTemplateLiteral(expr)) out.push([expr, expr.text]);
    else if (ts.isTemplateExpression(expr)) out.push([expr, expr.head.text + expr.templateSpans.map((s) => "{x}" + s.literal.text).join("")]);
    else if (ts.isConditionalExpression(expr)) { literalsIn(expr.whenTrue, out); literalsIn(expr.whenFalse, out); }
    else if (ts.isBinaryExpression(expr) && [ts.SyntaxKind.BarBarToken, ts.SyntaxKind.QuestionQuestionToken, ts.SyntaxKind.AmpersandAmpersandToken, ts.SyntaxKind.PlusToken].includes(expr.operatorToken.kind)) { literalsIn(expr.left, out); literalsIn(expr.right, out); }
    else if (ts.isParenthesizedExpression(expr)) literalsIn(expr.expression, out);
    return out;
  };

  const visit = (node) => {
    // 1. JSX text
    if (ts.isJsxText(node)) {
      const text = node.getText(sf);
      if (text.trim()) report(node, text.replace(/&[a-z]+;/g, " "), "text");
    }
    // 2. Text-bearing prop
    if (ts.isJsxAttribute(node) && node.initializer) {
      const name = node.name.getText(sf);
      if (TEXT_PROPS.has(name)) {
        const init = node.initializer;
        if (ts.isStringLiteral(init)) report(init, init.text, `prop ${name}`);
        else if (ts.isJsxExpression(init) && init.expression) {
          for (const [n, v] of literalsIn(init.expression)) if (!insideT(n)) report(n, v, `prop ${name}`);
        }
      }
    }
    // 3. A literal rendered as a JSX child: {busy ? "Saving…" : "Save"}
    if (ts.isJsxExpression(node) && node.expression && (ts.isJsxElement(node.parent) || ts.isJsxFragment(node.parent))) {
      for (const [n, v] of literalsIn(node.expression)) if (!insideT(n)) report(n, v, "child");
    }
    // 4. A text-bearing key in an object literal built INSIDE a function —
    //    `mobile={{ backLabel: "Clear image", settingsTitle: "Options" }}`,
    //    `setError({ title: "Failed" })`. Module-scope arrays are skipped: those
    //    are translated at their render site (§4.2), which this cannot see.
    if (ts.isPropertyAssignment(node) && OBJECT_KEYS.has(node.name.getText(sf).replace(/["']/g, ""))) {
      let inFn = false;
      for (let p = node.parent; p; p = p.parent) {
        if (ts.isFunctionLike(p)) { inFn = true; break; }
      }
      if (inFn) for (const [n, v] of literalsIn(node.initializer)) if (!insideT(n)) report(n, v, `key ${node.name.getText(sf)}`);
    }
    // 5. toast.success("…") / toast("…")
    if (ts.isCallExpression(node)) {
      const callee = node.expression.getText(sf);
      if (/^toast(\.(success|error|info|warning|message|loading))?$/.test(callee) && node.arguments[0]) {
        for (const [n, v] of literalsIn(node.arguments[0])) if (!insideT(n)) report(n, v, "toast");
      }
    }
    ts.forEachChild(node, visit);
  };
  visit(sf);
}

if (summary) {
  const byDir = new Map();
  for (const h of hits) {
    const d = h.file.split("/").slice(0, 3).join("/");
    byDir.set(d, (byDir.get(d) ?? 0) + 1);
  }
  for (const [d, n] of [...byDir].sort((a, b) => b[1] - a[1])) console.log(String(n).padStart(5), d);
  console.log(`${hits.length} total`);
  process.exit(0);
}

if (hits.length) {
  console.error(`\n${hits.length} hard-coded English string(s) — these render untranslated in EVERY locale:\n`);
  let current = "";
  for (const h of hits) {
    if (h.file !== current) {
      current = h.file;
      console.error(`  ${current}`);
    }
    console.error(`    ${String(h.line).padStart(5)}  ${h.kind.padEnd(16)} ${JSON.stringify(h.value)}`);
  }
  console.error(
    `\nWrap each at the render site — t("…"), or t("… {n} …", { n }) for a template —\n` +
      `and add the key to the tool's ui block (or common.ts for a shared component).\n` +
      `If the value is deliberately untranslated, mark it with an \`i18n-raw\` comment giving the reason.\n`,
  );
  process.exit(1);
}

console.log(`No hard-coded English strings in ${files.length} scanned file(s).`);

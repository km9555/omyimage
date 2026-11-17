/**
 * Unit tests for the parity and vocabulary rules in scripts/i18n-audit.mjs.
 * The audit runs its checks on import unless I18N_AUDIT_LIB is set.
 */
import { test } from "node:test";
import assert from "node:assert/strict";

process.env.I18N_AUDIT_LIB = "1";
const { parityProblems, ES_PENINSULAR } = await import("../scripts/i18n-audit.mjs");
const errs = (s) => parityProblems(s).errors;
const warns = (s) => parityProblems(s).warnings;

test("placeholders must survive translation", () => {
  assert.deepEqual(errs(`  "{n} images": "{n} Bilder",`), []);
  assert.equal(errs(`  "{n} images": "Bilder",`).length, 1);
  assert.equal(errs(`  "{n} of {total}": "{n} von {gesamt}",`).length, 1);
});

test("placeholder order may change", () => {
  assert.deepEqual(errs(`  "{done} of {total}": "{total} — {done}",`), []);
});

test("the brand is kept verbatim (error)", () => {
  assert.equal(errs(`  "Why oMyImage?": "Warum wir?",`).length, 1);
  assert.deepEqual(errs(`  "Why oMyImage?": "Warum oMyImage?",`), []);
});

test("format names dropped are warnings, JPEG counts as JPG", () => {
  assert.deepEqual(warns(`  "Convert to JPG": "In JPG umwandeln",`), []);
  assert.deepEqual(warns(`  "Convert to JPG": "Convertir a JPEG",`), []);
  assert.equal(warns(`  "PNG to WebP": "PNG in Web-Bild",`).length, 1);
  assert.deepEqual(errs(`  "PNG to WebP": "PNG in Web-Bild",`), []);
});

test("escaped quotes inside values parse", () => {
  assert.deepEqual(errs(`  "Click \\"Save\\" ({n})": "Klicken Sie auf „Speichern\\" ({n})",`), []);
});

test("neutral Spanish rejects Spain-only words", () => {
  assert.ok(ES_PENINSULAR.test("Sube la foto desde tu ordenador"));
  assert.ok(ES_PENINSULAR.test("Podéis subir vuestras fotos, vosotros"));
  assert.ok(!ES_PENINSULAR.test("Sube la foto desde tu computadora o teléfono"));
});

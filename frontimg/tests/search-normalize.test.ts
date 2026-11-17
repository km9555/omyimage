/**
 * Unit tests for the search normaliser. Run with `npm test`
 * (`node --test`, using Node's built-in TypeScript stripping — no dependency).
 *
 * The German/French cases were written BEFORE the fold existed (TDD): NFD
 * decomposes ä/é/ñ to a base letter plus a combining mark, but ß, œ and æ are
 * single letters with no decomposition, so the word class deleted them and
 * "Bildgröße" became "bildgro e" — a German typing the word the page uses
 * matched nothing.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { collapsed, spaced } from "../src/lib/search-normalize.ts";

test("existing behaviour: separators and case", () => {
  assert.equal(spaced("HEIC to JPG"), "heic to jpg");
  assert.equal(collapsed("PNG to JPG"), "pngtojpg");
});

test("existing behaviour: Portuguese accents fold", () => {
  assert.equal(spaced("Rotação câmera"), "rotacao camera");
});

test("existing behaviour: Cyrillic and Devanagari survive", () => {
  assert.equal(spaced("Сжать фото"), "сжать фото");
  assert.equal(spaced("इमेज कंप्रेस"), "इमेज कंप्रेस");
});

test("German umlauts fold to the base letter", () => {
  assert.equal(spaced("Hintergrund für Bilder ändern"), "hintergrund fur bilder andern");
});

test("German ß folds to ss instead of being erased", () => {
  assert.equal(spaced("Bildgröße ändern"), "bildgrosse andern");
  assert.equal(spaced("schwarz weiß"), "schwarz weiss");
  // ẞ (capital sharp s) lowercases to ß first, then folds.
  assert.equal(spaced("GRÖẞE"), "grosse");
});

test("German: ß and ss spellings of one word match each other", () => {
  assert.equal(collapsed("Größe"), collapsed("Groesse".replace("oe", "o")));
  assert.equal(collapsed("weiß"), collapsed("weiss"));
});

test("French œ and æ fold to oe / ae", () => {
  assert.equal(spaced("Œuvre d'art"), "oeuvre d art");
  assert.equal(spaced("cœur ex æquo"), "coeur ex aequo");
});

test("French and Spanish accents fold", () => {
  assert.equal(spaced("Compresser une image à 100 Ko"), "compresser une image a 100 ko");
  assert.equal(spaced("Reducir tamaño de imágenes"), "reducir tamano de imagenes");
  assert.equal(spaced("¿Cómo quitar el fondo?"), "como quitar el fondo");
});

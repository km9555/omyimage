/**
 * Translating errors that surface in a toast.
 *
 * Library code (lib/) throws, and a component shows `err.message` in a toast.
 * lib/ has no locale in scope, so the message is English — and a Portuguese
 * visitor used to get "Could not download "x.jpg" from Dropbox." in the middle
 * of a Portuguese page.
 *
 * Two shapes are handled:
 *   • a plain `Error` whose message is a fixed English sentence — it IS the
 *     key, so `t(err.message)` resolves it when the key is in common.ts;
 *   • an `I18nError`, for messages with a variable part: it carries the key and
 *     its vars separately, so the sentence is translated whole (§4.5 — never
 *     interpolate before translating). Its `.message` is still the English
 *     sentence, so logs and anything that ignores this helper read correctly.
 *
 * Messages that come back from the SERVER (process-router) are English too;
 * they resolve if the backend's sentence is in common.ts and fall back to the
 * English text otherwise, which is the same degradation `t()` always has.
 */
import type { TFunction } from "@/i18n/t";

export class I18nError extends Error {
  readonly key: string;
  readonly vars?: Record<string, string | number>;

  constructor(key: string, vars?: Record<string, string | number>) {
    super(key.replace(/\{(\w+)\}/g, (m, k: string) => (vars && k in vars ? String(vars[k]) : m)));
    this.key = key;
    this.vars = vars;
  }
}

/** The user-facing text for a caught error, in the page's language. */
export function translateError(err: unknown, t: TFunction, fallback: string): string {
  if (err instanceof I18nError) return t(err.key, err.vars);
  if (err instanceof Error && err.message) return t(err.message);
  return t(fallback);
}

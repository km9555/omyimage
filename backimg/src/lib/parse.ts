/** Safely parse a JSON `options` form field into a plain object. */
export function parseOptions(raw: unknown): Record<string, unknown> {
  if (typeof raw !== "string" || !raw) return {};
  try {
    const v = JSON.parse(raw);
    return v && typeof v === "object" ? (v as Record<string, unknown>) : {};
  } catch {
    return {};
  }
}

export function asNumber(v: unknown, fallback?: number): number | undefined {
  const n = typeof v === "number" ? v : typeof v === "string" ? parseFloat(v) : NaN;
  return Number.isFinite(n) ? n : fallback;
}

export function asString(v: unknown, fallback?: string): string | undefined {
  return typeof v === "string" ? v : fallback;
}

export function asBool(v: unknown): boolean {
  return v === true || v === "true" || v === 1 || v === "1";
}

export function baseName(name: string): string {
  return name.replace(/\.[^./\\]+$/, "") || "image";
}

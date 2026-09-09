"use client";

/**
 * The effect picker: a scrollable strip of tiles, each showing the user's own
 * image with that effect applied.
 *
 * Previewing on the actual photo rather than on a stock swatch is the whole
 * point — "pixelate" and "glass" mean nothing as words, and the difference
 * between them on a particular face is the thing being chosen.
 *
 * Thumbnails are rendered once per image from a small copy (see THUMB_PX) at a
 * FIXED intensity, not the live slider value. Re-rendering eleven effects on
 * every intensity tick would stutter, and the strip is for choosing an effect,
 * not for judging its strength — the big preview does that.
 */

import { useEffect, useMemo, useRef, useState } from "react";
import { Icon } from "@/components/Icon";
import { EFFECTS, renderEffect, type EffectId } from "@/lib/image/effects";

/** Longest side of the source copy the tiles are rendered from. */
const THUMB_PX = 168;
/** Representative strength for the tiles, independent of the live slider. */
const THUMB_INTENSITY = 55;

export function EffectGallery({
  bitmap,
  value,
  onChange,
  color,
  accent,
}: {
  bitmap: ImageBitmap | null;
  value: EffectId;
  onChange: (id: EffectId) => void;
  /** Fill used by the `color` effect, so its tile matches the real output. */
  color?: string;
  accent: string;
}) {
  const [urls, setUrls] = useState<Record<string, string>>({});
  const scrollerRef = useRef<HTMLDivElement>(null);
  /* The URLs currently on screen. Revoking happens AFTER the replacements are
     installed, never in the effect cleanup: cleanup runs before the new render
     finishes, so revoking there kills URLs the tiles are still pointing at and
     the strip flashes broken images (visible when the block colour changes). */
  const liveUrls = useRef<string[]>([]);

  /* Key the render on the bitmap identity and the colour, the only two inputs
     the tiles depend on. Anything else (intensity, mask, selection) must NOT
     invalidate them. */
  const key = useMemo(() => (bitmap ? `${bitmap.width}x${bitmap.height}:${color ?? ""}` : ""), [bitmap, color]);

  useEffect(() => {
    if (!bitmap) {
      setUrls({});
      return;
    }
    let alive = true;
    const made: string[] = [];

    const scale = THUMB_PX / Math.max(bitmap.width, bitmap.height);
    const w = Math.max(1, Math.round(bitmap.width * scale));
    const h = Math.max(1, Math.round(bitmap.height * scale));

    // One canvas reused across all eleven, then one blob URL each.
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    (async () => {
      const next: Record<string, string> = {};
      for (const spec of EFFECTS) {
        renderEffect(ctx, bitmap, w, h, spec.id, THUMB_INTENSITY, color);
        const blob = await new Promise<Blob | null>((r) => canvas.toBlob(r, "image/jpeg", 0.8));
        if (!alive) break;
        if (blob) {
          const url = URL.createObjectURL(blob);
          made.push(url);
          next[spec.id] = url;
        }
      }
      if (!alive) {
        made.forEach((u) => URL.revokeObjectURL(u));
        return;
      }
      setUrls(next);
      const stale = liveUrls.current;
      liveUrls.current = made;
      stale.forEach((u) => URL.revokeObjectURL(u));
    })();

    return () => { alive = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  // The last set has no successor to retire it, so unmount does.
  useEffect(() => () => { liveUrls.current.forEach((u) => URL.revokeObjectURL(u)); }, []);

  const page = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.max(160, el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-label-sm font-label-sm text-on-surface-variant">Select your effect</span>

      <div className="relative">
        <div
          ref={scrollerRef}
          className="flex gap-2 overflow-x-auto scroll-smooth pb-1 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none" }}
        >
          {EFFECTS.map((spec) => {
            const on = spec.id === value;
            return (
              <button
                key={spec.id}
                type="button"
                onClick={() => onChange(spec.id)}
                title={spec.hint}
                aria-pressed={on}
                className="flex shrink-0 flex-col items-center gap-1 focus:outline-none"
              >
                <span
                  className={`block h-[76px] w-[76px] overflow-hidden rounded-xl border-2 bg-surface-container transition-colors ${
                    on ? "border-secondary" : "border-transparent hover:border-outline-variant"
                  }`}
                >
                  {urls[spec.id] ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={urls[spec.id]} alt="" className="h-full w-full object-cover" />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center">
                      <Icon name="image" className="text-[20px] text-on-surface-variant" />
                    </span>
                  )}
                </span>
                <span
                  className={`max-w-[76px] truncate text-label-sm font-label-sm ${
                    on ? "font-semibold text-secondary" : "text-on-surface-variant"
                  }`}
                  style={on ? { color: accent } : undefined}
                >
                  {spec.label}
                </span>
              </button>
            );
          })}
        </div>

        <ArrowButton side="left" onClick={() => page(-1)} />
        <ArrowButton side="right" onClick={() => page(1)} />
      </div>
    </div>
  );
}

/**
 * Paging arrows sit over the strip rather than beside it, so the tiles keep the
 * full rail width. `top-[38px]` centres them on the thumbnail, not on the tile
 * including its caption.
 */
function ArrowButton({ side, onClick }: { side: "left" | "right"; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={side === "left" ? "Previous effects" : "More effects"}
      className={`absolute top-[38px] -translate-y-1/2 ${side === "left" ? "left-0" : "right-0"} flex h-8 w-8 items-center justify-center rounded-full border border-surface-variant bg-surface-container-lowest/95 text-on-surface-variant shadow-md backdrop-blur-sm transition-colors hover:text-primary`}
    >
      <Icon name={side === "left" ? "chevron_left" : "chevron_right"} className="text-[20px]" />
    </button>
  );
}

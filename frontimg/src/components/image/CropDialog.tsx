"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Icon } from "@/components/Icon";
import { CropCanvas } from "@/components/image/CropCanvas";
import { useOverlayScrollLock } from "@/lib/use-is-mobile";
import { decodeBitmap } from "@/lib/image/raster";
import {
  applyAspect, centeredCrop, clampCrop, outputSize, transformedSize,
  type CropSel, type CropTransform,
} from "@/lib/image/crop";

/** Quarter turns. This dialog offers no flip or straighten — /crop-image does. */
export type Quarter = 0 | 90 | 180 | 270;

/** The same list /crop-image offers, so both tools crop to the same ratios. */
const ASPECTS: { label: string; value: number | null }[] = [
  { label: "Free", value: null },
  { label: "1:1", value: 1 },
  { label: "4:3", value: 4 / 3 },
  { label: "3:2", value: 3 / 2 },
  { label: "16:9", value: 16 / 9 },
  { label: "3:4", value: 3 / 4 },
  { label: "4:5", value: 4 / 5 },
  { label: "9:16", value: 9 / 16 },
];

/**
 * Crop and rotate one file, over whatever tool opened it.
 *
 * This is the per-image editor behind /resize-image's card actions. It is a
 * thin shell around `CropCanvas` and the pure geometry in `lib/image/crop.ts`
 * — the same engine /crop-image and /circle-crop use — so the drag handles,
 * touch tolerances and rotation preview are not written a second time.
 *
 * It resolves to a *selection*, not to pixels: the caller decides when to
 * render, which is what lets the resize tool re-render from the untouched
 * original every time instead of stacking one lossy encode on the last.
 */
export function CropDialog({
  file,
  initialSel,
  initialRotate,
  accent,
  onCancel,
  onApply,
}: {
  file: File;
  /** Reopening shows the crop that is already applied. */
  initialSel: CropSel | null;
  initialRotate: Quarter;
  accent: string;
  onCancel: () => void;
  onApply: (sel: CropSel | null, rotate: Quarter) => void;
}) {
  const [bmp, setBmp] = useState<ImageBitmap | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [rotate, setRotate] = useState<Quarter>(initialRotate);
  const [aspect, setAspect] = useState<number | null>(null);
  const [sel, setSel] = useState<CropSel>(initialSel ?? { x: 0.05, y: 0.05, w: 0.9, h: 0.9 });

  useOverlayScrollLock(true);

  // Escape closes, matching MobileSheet.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onCancel(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onCancel]);

  /*
    Decode once. `alive` guards the close: a dialog dismissed mid-decode must
    not leak the bitmap or set state on an unmounted component.
  */
  useEffect(() => {
    let alive = true;
    let local: ImageBitmap | null = null;
    decodeBitmap(file, true)
      .then((b) => {
        local = b;
        if (alive) setBmp(b);
        else b.close();
      })
      .catch(() => { if (alive) setError("Couldn't read this image."); });
    return () => { alive = false; local?.close(); };
  }, [file]);

  const transform: CropTransform = useMemo(
    () => ({ rotate, flipH: false, flipV: false, straighten: 0 }),
    [rotate]
  );

  // The selection sits on the TRANSFORMED image, so every ratio conversion has
  // to use the rotated dimensions — see `normAspect` in crop.ts.
  const tSize = useMemo(
    () => (bmp ? transformedSize(bmp.width, bmp.height, transform) : { w: 0, h: 0 }),
    [bmp, transform]
  );

  const out = useMemo(
    () => (bmp ? outputSize(sel, bmp.width, bmp.height, transform, "original") : { w: 0, h: 0 }),
    [bmp, sel, transform]
  );

  const pickAspect = useCallback((a: number | null) => {
    setAspect(a);
    if (a !== null && tSize.w) setSel((s) => applyAspect(s, a, tSize.w, tSize.h, "center"));
  }, [tSize.w, tSize.h]);

  const turn = (dir: 1 | -1) =>
    setRotate((r) => ((((r + dir * 90) % 360) + 360) % 360) as Quarter);

  const selectWhole = () => {
    const whole = clampCrop({ x: 0, y: 0, w: 1, h: 1 });
    setSel(aspect == null ? whole : applyAspect(whole, aspect, tSize.w, tSize.h, "center"));
  };

  const reset = () => {
    setRotate(0);
    setAspect(null);
    setSel(centeredCrop(null, tSize.w || 1, tSize.h || 1, 1));
  };

  /* A full-frame selection means "no crop" — hand back null so the caller can
     skip re-rendering the file when only the rotation changed. */
  const apply = () => {
    const whole = sel.w >= 0.999 && sel.h >= 0.999 && sel.x <= 0.001 && sel.y <= 0.001;
    onApply(whole ? null : clampCrop(sel), rotate);
  };

  const chipCls = (on: boolean) =>
    `rounded-full px-3 py-1.5 text-label-sm font-label-sm font-semibold transition-colors ${
      on ? "bg-secondary text-on-secondary" : "bg-surface-container text-on-surface-variant hover:text-primary"
    }`;

  return (
    /* Above the tool's mobile shell (z-70) and its settings sheet (z-120). */
    <div
      className="fixed inset-0 z-[130] flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="Crop and rotate image"
    >
      <button
        type="button"
        aria-label="Cancel"
        onClick={onCancel}
        className="absolute inset-0 h-full w-full cursor-default bg-black/60"
      />

      <div className="relative flex max-h-dvh w-full max-w-[640px] flex-col overflow-hidden bg-surface-container-lowest shadow-2xl md:max-h-[92vh] md:rounded-2xl">
        <header className="flex shrink-0 items-center justify-between gap-3 border-b border-surface-variant px-4 py-3">
          <div className="min-w-0">
            <h2 className="truncate text-title-md font-bold text-primary">Crop &amp; rotate</h2>
            <p className="truncate text-label-sm font-label-sm text-on-surface-variant">{file.name}</p>
          </div>
          <button
            type="button"
            onClick={onCancel}
            aria-label="Close"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary"
          >
            <Icon name="close" className="text-[20px]" />
          </button>
        </header>

        <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto p-4">
          <div className="flex min-h-[220px] items-center justify-center rounded-xl bg-surface-container p-2">
            {error ? (
              <p className="text-body-md text-error">{error}</p>
            ) : bmp ? (
              <CropCanvas
                bitmap={bmp}
                sel={sel}
                onChange={setSel}
                shape="rect"
                radius={0}
                aspect={aspect}
                transform={transform}
                zoom={1}
                accent={accent}
              />
            ) : (
              <Icon name="progress_activity" className="animate-spin text-[28px] text-secondary" />
            )}
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {ASPECTS.map((a) => (
              <button
                key={a.label}
                type="button"
                onClick={() => pickAspect(a.value)}
                className={chipCls(aspect === a.value)}
              >
                {a.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <DialogButton icon="rotate_left" label="Rotate left" onClick={() => turn(-1)} />
            <DialogButton icon="rotate_right" label="Rotate right" onClick={() => turn(1)} />
            <DialogButton icon="select_all" label="Select whole image" onClick={selectWhole} />
            <DialogButton icon="restart_alt" label="Reset" onClick={reset} />
            <span className="ml-auto text-label-sm font-label-sm text-on-surface-variant">
              Output <span className="font-semibold text-primary">{out.w} × {out.h}</span> px
            </span>
          </div>
        </div>

        <footer className="flex shrink-0 gap-2 border-t border-surface-variant px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 rounded-xl border border-surface-variant px-4 py-3 text-body-md font-semibold text-primary transition-colors hover:bg-surface-container"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={apply}
            disabled={!bmp}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-secondary px-4 py-3 text-body-md font-semibold text-on-secondary shadow-md shadow-secondary/30 transition-colors hover:bg-secondary-container disabled:opacity-50"
          >
            <Icon name="check" className="text-[20px]" /> Apply
          </button>
        </footer>
      </div>
    </div>
  );
}

function DialogButton({ icon, label, onClick }: { icon: string; label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={label}
      aria-label={label}
      className="flex h-9 items-center justify-center rounded-lg border border-surface-variant px-2.5 text-on-surface-variant transition-colors hover:border-secondary/60 hover:text-primary"
    >
      <Icon name={icon} className="text-[18px]" />
    </button>
  );
}

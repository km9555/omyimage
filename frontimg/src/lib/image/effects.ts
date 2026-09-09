/**
 * The effects offered by /blur-face, rendered over a whole image.
 *
 * Each one paints the *entire* bitmap; choosing where it lands is the mask's
 * job (`lib/image/mask.ts`). That split is what lets a face, a drawn shape and
 * a brush stroke all share one effect pass instead of one pass each.
 *
 * **Everything here is canvas draw calls, not per-pixel loops.** Only halftone
 * reads pixels, and only from a grid-sized copy. That is deliberate: these run
 * on every repaint while a slider is being dragged, and a `getImageData` pass
 * over a 12-megapixel photo per frame would stall the tab. Repeated `drawImage`
 * with `globalAlpha`, in contrast, is GPU work.
 *
 * A note on privacy, since this is a redaction tool: only `gaussian` at real
 * strength and `color` genuinely destroy the pixels. `pixelate`, `halftone` and
 * `glass` preserve enough structure that a small face can sometimes be
 * recovered, and the decorative ones (`bloom`, `waves`, `radial`) barely hide
 * anything at all. The page copy says so.
 */

export type EffectId =
  | "none"
  | "gaussian"
  | "color"
  | "motion"
  | "radial"
  | "pixelate"
  | "glass"
  | "bloom"
  | "waves"
  | "halftone"
  | "particle";

export interface EffectSpec {
  id: EffectId;
  label: string;
  /** Shown under the tile and in the intensity label. */
  hint: string;
  /** False for `none`, which has nothing to scale. */
  hasIntensity: boolean;
  /** True for `color`, which needs the colour picker shown. */
  needsColor?: boolean;
  /**
   * Whether this actually destroys the pixels underneath. Drives the warning on
   * the weak ones — see the module note above.
   */
  strongRedaction: boolean;
}

export const EFFECTS: EffectSpec[] = [
  { id: "none", label: "No blur", hint: "Leave the area untouched.", hasIntensity: false, strongRedaction: false },
  { id: "gaussian", label: "Gaussian", hint: "The classic soft blur. The safest way to hide a face.", hasIntensity: true, strongRedaction: true },
  { id: "color", label: "Colour", hint: "A solid block. Nothing survives underneath.", hasIntensity: false, needsColor: true, strongRedaction: true },
  { id: "motion", label: "Motion", hint: "Smeared sideways, as if the camera panned.", hasIntensity: true, strongRedaction: true },
  { id: "radial", label: "Radial", hint: "Zoom blur, streaking out from the centre.", hasIntensity: true, strongRedaction: false },
  { id: "pixelate", label: "Pixelate", hint: "Chunky blocks. Recognisable at low settings.", hasIntensity: true, strongRedaction: false },
  { id: "glass", label: "Glass", hint: "Frosted, like looking through a shower door.", hasIntensity: true, strongRedaction: false },
  { id: "bloom", label: "Bloom", hint: "Blown-out glow. Decorative rather than private.", hasIntensity: true, strongRedaction: false },
  { id: "waves", label: "Trippy waves", hint: "Rippled sideways in a sine wave.", hasIntensity: true, strongRedaction: false },
  { id: "halftone", label: "Halftone", hint: "Printed dot screen. Keeps a lot of structure.", hasIntensity: true, strongRedaction: false },
  { id: "particle", label: "Particle", hint: "Scattered into shuffled fragments.", hasIntensity: true, strongRedaction: true },
];

export const effectSpec = (id: EffectId) => EFFECTS.find((e) => e.id === id) ?? EFFECTS[1];

/*
  Ceilings for the blur-like effects.

  The floor of 64 is not decoration. /blur-image still drives this through
  `legacyToEffect` with a radius of up to 50px, and a purely proportional
  ceiling (diag * 0.05) is only 36px on a 600x400 image — so every setting past
  ~40 silently clamped and the slider stopped doing anything. Scale with the
  image, but never below what the legacy range can ask for.
*/
const blurCeiling = (diag: number) => Math.max(64, diag * 0.05);
const blockCeiling = (diag: number) => Math.max(64, diag * 0.06);

/** Map the 0–100 slider onto a per-effect range. */
const scale = (intensity: number, min: number, max: number) =>
  min + (Math.max(0, Math.min(100, intensity)) / 100) * (max - min);

/**
 * A scratch canvas for the effects that need a second surface.
 *
 * Module-level and reused, matching `redact.ts`'s scratch: these render on
 * every repaint, and allocating a full-size canvas per frame is what makes a
 * slider drag stutter.
 */
let helper: HTMLCanvasElement | null = null;
const getHelper = (w: number, h: number) => {
  const c = (helper ??= document.createElement("canvas"));
  c.width = w;
  c.height = h;
  return c;
};

/**
 * Paint `effect` over the whole of `ctx`, which is assumed to be W×H and empty.
 *
 * `intensity` is the raw 0–100 slider value. `color` is only read by `color`.
 */
export function renderEffect(
  ctx: CanvasRenderingContext2D,
  bmp: CanvasImageSource,
  W: number,
  H: number,
  effect: EffectId,
  intensity: number,
  color = "#000000"
): void {
  const diag = Math.hypot(W, H);
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, W, H);
  ctx.globalAlpha = 1;
  ctx.globalCompositeOperation = "source-over";
  ctx.filter = "none";

  switch (effect) {
    case "none":
      ctx.drawImage(bmp, 0, 0, W, H);
      return;

    case "color":
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, W, H);
      return;

    case "gaussian": {
      ctx.filter = `blur(${Math.max(1, scale(intensity, 1, blurCeiling(diag)))}px)`;
      ctx.drawImage(bmp, 0, 0, W, H);
      ctx.filter = "none";
      return;
    }

    case "pixelate": {
      const px = Math.max(2, Math.round(scale(intensity, 2, blockCeiling(diag))));
      const sw = Math.max(1, Math.round(W / px));
      const sh = Math.max(1, Math.round(H / px));
      const tiny = getHelper(sw, sh);
      const tctx = tiny.getContext("2d");
      if (!tctx) return;
      tctx.drawImage(bmp, 0, 0, sw, sh);
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(tiny, 0, 0, sw, sh, 0, 0, W, H);
      ctx.imageSmoothingEnabled = true;
      return;
    }

    case "motion": {
      /* A directional smear: the same image stacked along one axis with the
         alpha split between copies. Cheaper and smoother than a convolution,
         and the result is indistinguishable at these radii. */
      const reach = scale(intensity, 4, diag * 0.06);
      const steps = 16;
      for (let i = 0; i < steps; i++) {
        const t = (i / (steps - 1) - 0.5) * 2; // -1 … 1
        /* Alpha 1/(i+1), not 1/steps. Source-over stacking is
           1-(1-a)^n, so sixteen draws at 1/16 reach only 64% opacity and the
           layer stays see-through — on a redaction tool that means the face
           showing faintly through its own blur. A 1/(i+1) ramp is a true
           running mean and lands fully opaque. */
        ctx.globalAlpha = 1 / (i + 1);
        ctx.drawImage(bmp, t * reach, 0, W, H);
      }
      ctx.globalAlpha = 1;
      return;
    }

    case "radial": {
      // Same stacking trick, scaled about the centre instead of shifted.
      const grow = scale(intensity, 0.02, 0.35);
      const steps = 16;
      for (let i = 0; i < steps; i++) {
        const s = 1 + (i / (steps - 1)) * grow;
        const w = W * s;
        const h = H * s;
        ctx.globalAlpha = 1 / (i + 1); // running mean — see the note in `motion`
        ctx.drawImage(bmp, (W - w) / 2, (H - h) / 2, w, h);
      }
      ctx.globalAlpha = 1;
      return;
    }

    case "bloom": {
      /* Bright pass over the original, added rather than blended — the first
         use of `lighter` in this codebase. Contrast lifts the highlights so the
         glow comes off the bright areas rather than washing the whole frame. */
      const soft = scale(intensity, 4, diag * 0.03);
      ctx.drawImage(bmp, 0, 0, W, H);
      ctx.globalCompositeOperation = "lighter";
      ctx.globalAlpha = scale(intensity, 0.25, 0.85);
      ctx.filter = `blur(${soft}px) brightness(1.35) contrast(1.5)`;
      ctx.drawImage(bmp, 0, 0, W, H);
      ctx.filter = "none";
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
      return;
    }

    case "glass": {
      /* Frosted glass: the image cut into tiles, each nudged a little, then
         softened. The jitter is seeded off the tile index rather than
         Math.random so a repaint does not shimmer while a slider moves. */
      const cell = Math.max(4, Math.round(scale(intensity, 6, diag * 0.03)));
      const jitter = cell * 0.6;
      ctx.filter = `blur(${Math.max(0.5, cell * 0.12)}px)`;
      for (let y = 0; y < H; y += cell) {
        for (let x = 0; x < W; x += cell) {
          const n = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
          const dx = ((n - Math.floor(n)) - 0.5) * jitter;
          const m = Math.sin(x * 39.3468 + y * 11.135) * 24634.6345;
          const dy = ((m - Math.floor(m)) - 0.5) * jitter;
          const sw = Math.min(cell, W - x);
          const sh = Math.min(cell, H - y);
          /* Clamp the sample inside the bitmap. An out-of-bounds source rect
             draws only its valid part, leaving transparent holes at the edges
             — which the mask would then let the original show through. */
          const sx = Math.max(0, Math.min(W - sw, x + dx));
          const sy = Math.max(0, Math.min(H - sh, y + dy));
          ctx.drawImage(bmp, sx, sy, sw, sh, x, y, sw, sh);
        }
      }
      ctx.filter = "none";
      return;
    }

    case "waves": {
      /* Horizontal strips, each offset by a sine of its y. One drawImage per
         strip, so cost is O(height / strip) rather than per pixel. */
      const amp = scale(intensity, 3, diag * 0.03);
      const period = Math.max(8, H / scale(intensity, 4, 14));
      const strip = 2;
      for (let y = 0; y < H; y += strip) {
        const dx = Math.sin((y / period) * Math.PI * 2) * amp;
        const sh = Math.min(strip, H - y);
        /* Sample a window and stretch it across the full width, rather than
           shifting the destination — a shifted strip leaves a transparent
           sliver at one edge, and the mask would show the original there. */
        const sw = Math.max(1, W - Math.abs(dx));
        const sx = dx > 0 ? 0 : Math.abs(dx);
        ctx.drawImage(bmp, sx, y, sw, sh, 0, y, W, sh);
      }
      return;
    }

    case "halftone": {
      /* Sample a grid-sized copy, then one dot per cell sized by luminance.
         The only getImageData in this module, and it reads a canvas of about
         (W/cell)×(H/cell) — a few thousand pixels, not millions. */
      const cell = Math.max(3, Math.round(scale(intensity, 4, diag * 0.02)));
      const gw = Math.max(1, Math.ceil(W / cell));
      const gh = Math.max(1, Math.ceil(H / cell));
      const grid = getHelper(gw, gh);
      const gctx = grid.getContext("2d", { willReadFrequently: true });
      if (!gctx) return;
      gctx.drawImage(bmp, 0, 0, gw, gh);
      const data = gctx.getImageData(0, 0, gw, gh).data;

      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = "#000000";
      const rMax = (cell / 2) * Math.SQRT2;
      for (let gy = 0; gy < gh; gy++) {
        for (let gx = 0; gx < gw; gx++) {
          const i = (gy * gw + gx) * 4;
          const lum = (0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]) / 255;
          const r = (1 - lum) * rMax;
          if (r < 0.3) continue;
          ctx.beginPath();
          ctx.arc(gx * cell + cell / 2, gy * cell + cell / 2, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      return;
    }

    case "particle": {
      /* Shuffle the image into fragments: every tile is drawn from a source
         position a short distance away, so features break apart rather than
         just softening. Seeded like `glass`, for the same reason. */
      const cell = Math.max(3, Math.round(scale(intensity, 4, diag * 0.02)));
      const reach = cell * scale(intensity, 1, 3);
      for (let y = 0; y < H; y += cell) {
        for (let x = 0; x < W; x += cell) {
          const n = Math.sin(x * 4.898 + y * 7.233) * 4375.5453;
          const m = Math.sin(x * 9.3468 + y * 3.135) * 2463.6345;
          const sw = Math.min(cell, W - x);
          const sh = Math.min(cell, H - y);
          // Clamped for the same reason as `glass` — no transparent holes.
          const sx = Math.max(0, Math.min(W - sw, x + ((n - Math.floor(n)) - 0.5) * 2 * reach));
          const sy = Math.max(0, Math.min(H - sh, y + ((m - Math.floor(m)) - 0.5) * 2 * reach));
          ctx.drawImage(bmp, sx, sy, sw, sh, x, y, sw, sh);
        }
      }
      return;
    }
  }
}

"use client";

import { ServerImageTool } from "@/components/image/ServerImageTool";
import { baseName, canvasToBlob, mimeExt, type ExportMime } from "@/lib/image/raster";
import { useT } from "@/i18n/I18nScope";

const SCALES = [2, 3, 4];
/** image-to-hd targets: the longer side of the result, in pixels. */
const HD_TARGETS = [
  { px: 1280, label: "HD", suffix: "hd" },
  { px: 1920, label: "Full HD", suffix: "fullhd" },
  { px: 3840, label: "4K", suffix: "4k" },
] as const;

/**
 * Settings a variant page opens with (lib/tools.ts `preset`). Each variant does
 * its own job on the same Real-ESRGAN engine, so the three pages are three
 * tools, not one tool under three names:
 *   • upscale-image — you pick 2×, 3× or 4× (no preset).
 *   • unblur-image (`mode: "unblur"`) — sharpened at 2×, then returned at the
 *     photo's own size by default ("Keep the original size").
 *   • image-to-hd (`mode: "hd"`) — you pick HD, Full HD or 4K; the AI scale is
 *     worked out from the picture, and the result is sized to the target.
 */
export interface UpscalePreset {
  scale?: 2 | 3 | 4;
  mode?: "unblur" | "hd";
}

function outType(raw: Blob): ExportMime {
  return raw.type === "image/jpeg" || raw.type === "image/webp" ? raw.type : "image/png";
}

async function resizeBlob(raw: Blob, w: number, h: number): Promise<Blob> {
  const bmp = await createImageBitmap(raw);
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const g = c.getContext("2d");
  if (!g) throw new Error("Processing failed.");
  g.imageSmoothingQuality = "high";
  g.drawImage(bmp, 0, 0, w, h);
  bmp.close();
  return canvasToBlob(c, outType(raw), 0.95);
}

// Module scope on purpose: ServerImageTool re-runs `postProcess` when it changes.
async function unblurPost(raw: Blob, original: File, o: Record<string, unknown>) {
  const base = baseName(original.name);
  if (o.keepSize === false) return { blob: raw, name: `${base}_unblurred_2x.${mimeExt(outType(raw))}` };
  const [src, out] = await Promise.all([createImageBitmap(original), createImageBitmap(raw)]);
  let w = src.width;
  let h = src.height;
  // If the server returned a different shape (EXIF rotation handled differently),
  // halve its own size instead.
  if (Math.abs(out.width / out.height - w / h) > 0.02) {
    w = Math.round(out.width / 2);
    h = Math.round(out.height / 2);
  }
  src.close();
  out.close();
  const blob = await resizeBlob(raw, w, h);
  return { blob, name: `${base}_unblurred.${mimeExt(outType(raw))}` };
}

async function hdPost(raw: Blob, original: File, o: Record<string, unknown>) {
  const target = HD_TARGETS.find((x) => x.px === o.target) ?? HD_TARGETS[1];
  const name = `${baseName(original.name)}_${target.suffix}.${mimeExt(outType(raw))}`;
  const bmp = await createImageBitmap(raw);
  const long = Math.max(bmp.width, bmp.height);
  const k = target.px / long;
  const w = Math.round(bmp.width * k);
  const h = Math.round(bmp.height * k);
  bmp.close();
  // Even 4× fell short of the target: hand back the 4× result rather than stretch it.
  if (k >= 1) return { blob: raw, name };
  return { blob: await resizeBlob(raw, w, h), name };
}

/** The smallest AI scale (2, 3 or 4) that takes the picture's longer side to the target. */
async function hdPrepare(file: File, o: Record<string, unknown>) {
  const target = HD_TARGETS.find((x) => x.px === o.target)?.px ?? 1920;
  const bmp = await createImageBitmap(file);
  const long = Math.max(bmp.width, bmp.height);
  bmp.close();
  return { scale: long * 2 >= target ? 2 : long * 3 >= target ? 3 : 4 };
}

const unblurPrepare = async () => ({ scale: 2 });
const HD_RERUN = ["target"] as const;

export function UpscaleTool({ preset }: { preset?: UpscalePreset } = {}) {
  const t = useT();
  const seg = (on: boolean) =>
    `rounded-md px-3 py-2 text-body-md font-semibold transition-colors ${on ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant hover:text-primary"}`;
  const hint = "text-label-sm font-label-sm text-on-surface-variant/70";
  const common = {
    accent: "#4C86CC",
    accept: "image/jpeg,image/png,image/webp",
    endpoint: "/api/image/upscale",
    dropHint: t("or drop a JPG, PNG or WEBP here"),
    compare: true,
  };

  if (preset?.mode === "unblur") {
    return (
      <ServerImageTool
        {...common}
        icon="auto_fix_high"
        actionLabel={t("Unblur")}
        processingLabel={t("Unblurring…")}
        initialOptions={{ keepSize: true }}
        prepareOptions={unblurPrepare}
        postProcess={unblurPost}
        controls={(o, set) => (
          <div className="flex flex-col gap-1.5">
            <label className="flex items-center gap-2.5 cursor-pointer">
              <input type="checkbox" checked={o.keepSize !== false} onChange={(e) => set("keepSize", e.target.checked)} className="w-4 h-4 accent-secondary" />
              <span className="text-body-md text-on-surface">{t("Keep the original size")}</span>
            </label>
            <p className={hint}>
              {o.keepSize !== false
                ? t("The AI sharpens at twice the resolution, then the photo is returned at its own size — same picture, crisper.")
                : t("You get the sharpened photo at twice its size — useful for small or pixelated pictures.")}
            </p>
          </div>
        )}
      />
    );
  }

  if (preset?.mode === "hd") {
    return (
      <ServerImageTool
        {...common}
        icon="hd"
        actionLabel={t("Convert to HD")}
        processingLabel={t("Converting…")}
        initialOptions={{ target: 1920 }}
        prepareOptions={hdPrepare}
        postProcess={hdPost}
        rerunKeys={HD_RERUN}
        controls={(o, set) => (
          <div className="flex flex-col gap-1.5">
            <span className="text-label-sm font-label-sm text-on-surface-variant">{t("Target size")}</span>
            <div className="grid grid-cols-3 gap-1 rounded-lg bg-surface-container p-1">
              {HD_TARGETS.map((x) => (
                <button key={x.px} type="button" onClick={() => set("target", x.px)} className={`${seg((o.target ?? 1920) === x.px)} flex flex-col items-center leading-tight`}>
                  <span>{x.label}</span>
                  <span className="text-label-sm font-normal opacity-70 tabular-nums">{`${x.px} px`}{/* i18n-raw: pixel counts read the same in every language */}</span>
                </button>
              ))}
            </div>
            <p className={hint}>{t("The longer side comes out at this size. The AI scale (2×, 3× or 4×) is chosen for you.")}</p>
            <p className={hint}>{t("A very small picture may not reach 4K even at 4× — you then get the 4× result.")}</p>
          </div>
        )}
      />
    );
  }

  return (
    <ServerImageTool
      {...common}
      icon="hd"
      actionLabel={t("Upscale")}
      processingLabel={t("Upscaling…")}
      initialOptions={{ scale: preset?.scale ?? 2 }}
      controls={(o, set) => (
        <div className="flex flex-col gap-1.5">
          <label className="text-label-sm font-label-sm text-on-surface-variant">{t("Scale factor")}</label>
          <div className="grid grid-cols-3 gap-1 rounded-lg bg-surface-container p-1">
            {SCALES.map((s) => (
              <button key={s} type="button" onClick={() => set("scale", s)} className={seg(o.scale === s)}>
                {s}×
              </button>
            ))}
          </div>
        </div>
      )}
    />
  );
}

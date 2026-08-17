"use client";

import { useRouter } from "next/navigation";
import { useState, type ReactNode } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { downloadBlob, zipAndDownload, formatBytes } from "@/lib/image/raster";
import { stashFiles } from "@/lib/tool-handoff";
import { getTool, toolColor } from "@/lib/tools";
import { absoluteUrl } from "@/lib/site";

/**
 * Post-processing download page, ported from oMyPDF's ResultScreen.
 *
 * oMyPDF's version is 425 lines because half of it is auth- and server-gated:
 * Save & Share, revocable share links, server-side delete, plan-based
 * retention, `trackRun` analytics. oMyImage has none of that — no auth layer,
 * no server file storage, no analytics module — so this keeps only what
 * survives the subtraction: the completion header, file cards, the handoff
 * row, the share panel, and Trustpilot.
 *
 * Blob-based rather than Uint8Array-based: every oMyImage tool already holds
 * its results as Blobs (`{ blob, size, name }`), so this avoids a conversion
 * at every call site.
 */

export interface ResultFile {
  blob: Blob;
  name: string;
  /**
   * Size of the file this result was made from, in bytes. Optional — only
   * tools that transform an existing image (compress, resize, convert…) have
   * one; a generator like meme-maker has no "original" to compare against.
   * When present and different from `blob.size`, the file card shows
   * before → after instead of a single size.
   */
  originalSize?: number;
}

/**
 * Tools known to accept a plain raster image as input — the safe handoff set.
 * Curated rather than derived from `relatedTools()` on its own: that function
 * ranks by category proximity, which would happily suggest heic-to-jpg (wants
 * a .heic source) as a "continue with this file" target for a JPEG output.
 */
const HANDOFF_TARGETS = [
  "resize-image",
  "crop-image",
  "rotate-image",
  "watermark-image",
  "grayscale-image",
  "blur-image",
  "add-border",
  "circle-crop",
  "remove-exif",
  "merge-images",
  "image-to-pdf",
  "convert-to-jpg",
];

// ── Inline brand SVGs (Material Symbols has no brand glyphs) ──────────────────
function BrandGlyph({ id }: { id: string }) {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", "aria-hidden": true } as const;
  switch (id) {
    case "x":
      return (
        <svg {...common} fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common} fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common} fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...common} fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      );
    case "telegram":
      return (
        <svg {...common} fill="currentColor">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0Zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635Z" />
        </svg>
      );
    default:
      return null;
  }
}

function TrustpilotStars() {
  return (
    <span className="inline-flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={16} height={16} viewBox="0 0 24 24" aria-hidden className="shrink-0">
          <rect width="24" height="24" fill="#00b67a" rx="2" />
          <path fill="#fff" d="M12 4.5l1.9 4.6 4.98.4-3.79 3.24 1.15 4.86L12 15.9l-4.24 2.6 1.15-4.86-3.79-3.24 4.98-.4L12 4.5Z" />
        </svg>
      ))}
    </span>
  );
}

export function ResultScreen({
  files,
  zipName = "omyimage_result.zip",
  toolSlug,
  onReset,
  title = "Processing completed!",
  subtitle = "Your image is ready for download",
  resetLabel = "Process more images",
  children,
}: {
  files: ResultFile[];
  zipName?: string;
  /** Current tool's slug — excluded from the handoff row, seeds the share link. */
  toolSlug: string;
  onReset: () => void;
  title?: string;
  subtitle?: string;
  resetLabel?: string;
  /** Tool-specific stats (compression ratio, dimensions, etc.) under the header. */
  children?: ReactNode;
}) {
  const router = useRouter();
  const multi = files.length > 1;
  const [zipping, setZipping] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

  const dlZip = async () => {
    setZipping(true);
    try {
      await zipAndDownload(files, zipName);
    } finally {
      setZipping(false);
    }
  };

  const shareUrl = absoluteUrl(`/${toolSlug}`);
  const tool = getTool(toolSlug);
  const shareText = tool ? `I just used ${tool.name} on oMyImage — free, fast, no sign-up.` : "Free image tools on oMyImage.";

  const copyToolLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 1800);
    } catch {
      toast.error("Couldn't copy the link.");
    }
  };

  const nativeShare = async () => {
    try {
      await navigator.share({ title: tool?.name ?? "oMyImage", url: shareUrl });
    } catch {
      /* user cancelled the share sheet — not an error */
    }
  };

  const goHandoff = (slug: string) => {
    // Blobs carry no filename on their own — File is the wrapper stashFiles()
    // expects (it hands them straight into each tool's addFiles/loadFile,
    // which read File.name).
    const asFiles = files.map(
      (f, i) => new File([f.blob], f.name || `image-${i + 1}.png`, { type: f.blob.type || "image/png" }),
    );
    stashFiles(asFiles);
    router.push(`/${slug}`);
  };

  const handoffTargets = HANDOFF_TARGETS.filter((slug) => slug !== toolSlug)
    .map((slug) => getTool(slug))
    .filter((t): t is NonNullable<typeof t> => !!t && t.status === "live")
    .slice(0, 6);

  const socials: { id: string; label: string; href: string }[] = [
    { id: "x", label: "Share on X", href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}` },
    { id: "facebook", label: "Share on Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}` },
    { id: "linkedin", label: "Share on LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}` },
    { id: "whatsapp", label: "Share on WhatsApp", href: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}` },
    { id: "telegram", label: "Share on Telegram", href: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}` },
  ];

  return (
    <div className="flex flex-col gap-5">
      {/* Header */}
      <div className="flex flex-col items-center gap-1.5 text-center">
        <span className="mb-1 grid h-14 w-14 place-items-center rounded-full bg-chip-teal-bg">
          <Icon name="check_circle" fill className="text-[32px] text-chip-teal-ink" />
        </span>
        <h2 className="text-headline-md font-bold text-primary">{title}</h2>
        <p className="text-body-md text-on-surface-variant">{subtitle}</p>
      </div>

      {children}

      {/* File card(s) */}
      <div className="ambient-shadow flex flex-col gap-3 rounded-2xl border border-surface-variant bg-surface-container-lowest p-4 sm:p-5">
        <p className="text-label-sm font-label-sm uppercase tracking-wide text-on-surface-variant/70">
          {multi ? `Your images (${files.length})` : "Your image"}
        </p>
        {multi && (
          <button
            type="button"
            onClick={dlZip}
            disabled={zipping}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-secondary py-3 font-semibold text-on-secondary transition-colors hover:bg-secondary-container disabled:opacity-60"
          >
            <Icon name={zipping ? "progress_activity" : "folder_zip"} className={`text-[20px] ${zipping ? "animate-spin" : ""}`} />
            {zipping ? "Preparing ZIP…" : "Download all (.zip)"}
          </button>
        )}
        <div className="flex flex-col gap-2">
          {files.map((f, i) => {
            const reduced = f.originalSize && f.originalSize !== f.blob.size;
            const pct = reduced ? Math.round((1 - f.blob.size / f.originalSize!) * 100) : null;
            return (
            <div key={i} className="flex items-center gap-3 rounded-xl border border-surface-variant bg-surface-container-low/40 p-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-surface-container">
                <Icon name="image" fill className="text-[22px] text-on-surface-variant" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-body-md font-semibold text-primary">{f.name}</p>
                <p className="flex flex-wrap items-center gap-x-1.5 text-label-sm font-label-sm text-on-surface-variant">
                  {reduced ? (
                    <>
                      <span className="line-through opacity-60">{formatBytes(f.originalSize!)}</span>
                      <Icon name="arrow_forward" className="text-[13px]" />
                      <span className="font-semibold text-on-surface">{formatBytes(f.blob.size)}</span>
                      {pct !== null && pct > 0 && (
                        <span
                          className="rounded px-1.5 py-0.5 text-[11px] font-semibold text-chip-teal-ink"
                          style={{ backgroundColor: "var(--color-chip-teal-bg)" }}
                        >
                          −{pct}%
                        </span>
                      )}
                    </>
                  ) : (
                    formatBytes(f.blob.size)
                  )}
                </p>
              </div>
              <button
                type="button"
                onClick={() => downloadBlob(f.blob, f.name)}
                className={`inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg px-4 py-2.5 font-semibold transition-colors ${
                  multi
                    ? "border border-secondary text-secondary hover:bg-secondary/5"
                    : "bg-secondary text-on-secondary hover:bg-secondary-container"
                }`}
              >
                <Icon name="download" className="text-[19px]" /> Download
              </button>
            </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-2 pt-1 sm:flex-row">
          <button
            type="button"
            onClick={onReset}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-surface-variant py-2.5 font-semibold text-on-surface transition-colors hover:bg-surface-container"
          >
            <Icon name="restart_alt" className="text-[20px]" /> {resetLabel}
          </button>
        </div>
      </div>

      {/* Continue with this file */}
      {handoffTargets.length > 0 && (
        <div className="flex flex-col gap-2.5">
          <p className="text-label-md font-semibold text-primary">Continue with this file</p>
          <div className="flex flex-wrap gap-2">
            {handoffTargets.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => goHandoff(t.slug)}
                className="group inline-flex items-center gap-2 rounded-full border border-surface-variant bg-surface-container-lowest py-1.5 pl-2.5 pr-3 transition-colors hover:bg-surface-container"
              >
                <span className="grid h-6 w-6 shrink-0 place-items-center">
                  <Icon name={t.icon} bold className="text-[17px]" style={{ color: toolColor(t) }} />
                </span>
                <span className="text-body-sm font-semibold text-primary">{t.name}</span>
                <Icon name="arrow_forward" className="text-[16px] text-on-surface-variant transition-transform group-hover:translate-x-0.5" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Share or save this tool */}
      <div className="flex flex-col gap-3 rounded-2xl border border-surface-variant bg-surface-container-lowest p-4 sm:p-5">
        <div>
          <p className="text-label-md font-semibold text-primary">Share or save this tool</p>
          <p className="text-label-sm font-label-sm text-on-surface-variant">
            Copy the link, share on social media, or bookmark the page to find it later.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={copyToolLink}
            className="inline-flex items-center gap-1.5 rounded-lg border border-surface-variant px-3 py-2 text-label-sm font-semibold text-on-surface transition-colors hover:bg-surface-container"
          >
            <Icon name={linkCopied ? "check" : "link"} className="text-[18px]" /> {linkCopied ? "Copied" : "Copy link"}
          </button>
          {typeof navigator !== "undefined" && "share" in navigator && (
            <button
              type="button"
              onClick={nativeShare}
              className="inline-flex items-center gap-1.5 rounded-lg border border-surface-variant px-3 py-2 text-label-sm font-semibold text-on-surface transition-colors hover:bg-surface-container sm:hidden"
            >
              <Icon name="ios_share" className="text-[18px]" /> Share
            </button>
          )}
          <span className="hidden text-label-sm font-label-sm text-on-surface-variant/70 sm:inline">(Ctrl + D to bookmark)</span>
          <span className="flex items-center gap-1.5 sm:ml-auto">
            <span className="mr-0.5 text-label-sm font-label-sm text-on-surface-variant">Share:</span>
            {socials.map((s) => (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
                className="grid h-9 w-9 place-items-center rounded-lg bg-surface-container text-on-surface-variant transition-colors hover:bg-surface-variant hover:text-primary"
              >
                <BrandGlyph id={s.id} />
              </a>
            ))}
          </span>
        </div>
      </div>

      {/* Trustpilot */}
      <a
        href="https://www.trustpilot.com/review/omyimage.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col gap-3 rounded-2xl border border-chip-teal-border bg-chip-teal-bg p-4 transition hover:brightness-[0.99] sm:flex-row sm:items-center sm:p-5"
      >
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <TrustpilotStars />
          <div className="min-w-0">
            <p className="text-body-md font-semibold text-primary">Enjoyed the result?</p>
            <p className="text-label-sm font-label-sm text-chip-teal-ink">
              Share your experience on Trustpilot — it helps a lot.
            </p>
          </div>
        </div>
        <span
          className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg px-4 py-2.5 font-semibold text-white"
          style={{ backgroundColor: "#00b67a" }}
        >
          Leave a review <Icon name="open_in_new" className="text-[18px]" />
        </span>
      </a>
    </div>
  );
}

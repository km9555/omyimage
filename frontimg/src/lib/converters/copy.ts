/**
 * The GENERATED half of converter-page copy.
 *
 * Only mechanical text lives here — the how-to steps, the feature tiles, the
 * privacy note and a few universal FAQs. These describe behaviour that really
 * is identical on every converter page, so writing them once is correct.
 *
 * Everything that should differ between pages is in `pairs.ts` under the
 * required `unique` field. Do not migrate prose from there to here to save
 * effort: pages built entirely from this file are the thin-content failure
 * mode the whole data layer exists to prevent.
 */
import { BROWSER_MAX_BYTES } from "@/lib/process-router";
import type { Faq, Feature, HowToStep } from "@/components/SeoContent";
import { fmt } from "./formats";
import type { ConverterPair } from "./types";

const MB = Math.round(BROWSER_MAX_BYTES / (1024 * 1024));

/** Does any part of this conversion send the file off the device? */
export function isServerBacked(pair: ConverterPair): boolean {
  return pair.engine.decode === "server" || pair.engine.target.kind === "server";
}

/** Can a large file be offloaded even though the normal path is local? */
export function hasServerFallback(pair: ConverterPair): boolean {
  return !isServerBacked(pair) && pair.engine.serverFallback;
}

export function buildSteps(pair: ConverterPair): HowToStep[] {
  const from = fmt(pair.from);
  const to = fmt(pair.to);

  const middle = pair.quality
    ? {
        title: "Choose your quality",
        description: `Drag the quality slider to trade file size against detail. ${
          pair.flatten
            ? `Because ${to.label} has no transparency, you can also pick the colour that fills transparent areas.`
            : `The default suits most images — raise it for detailed photographs.`
        }`,
      }
    : {
        title: "Check the settings",
        description: `${to.label} output is lossless${
          to.hasAlpha ? " and keeps transparency" : ""
        }, so there is nothing to configure. Auto-rotate reads EXIF orientation so portrait photos stay upright.`,
      };

  return [
    {
      title: `Add your ${from.label} files`,
      description: `Drag ${from.label} images onto the drop zone or click to browse. Add as many as you like — they queue up together.`,
    },
    middle,
    {
      title: "Convert and download",
      description: `Press Convert. A single file downloads as ${to.label} straight away; several arrive together in one ZIP.`,
    },
  ];
}

export function buildFeatures(pair: ConverterPair): Feature[] {
  const from = fmt(pair.from);
  const to = fmt(pair.to);
  const serverBacked = isServerBacked(pair);

  const second: Feature = to.hasAlpha && from.hasAlpha
    ? {
        icon: "opacity",
        title: "Transparency survives",
        description: `Transparent areas in your ${from.label} stay transparent in the ${to.label} — no white box behind the image.`,
      }
    : pair.flatten
      ? {
          icon: "format_color_fill",
          title: "You pick the background",
          description: `${to.label} cannot store transparency, so anything see-through has to be filled. Choose the colour instead of being handed white.`,
        }
      : {
          icon: "high_quality",
          title: to.lossy ? "Quality you control" : "Lossless output",
          description: to.lossy
            ? `A quality slider rather than a fixed preset, so you decide where the size-versus-detail line sits.`
            : `${to.label} is lossless — the converted image is pixel-for-pixel what went in.`,
        };

  return [
    {
      icon: "burst_mode",
      title: `Batch ${from.label} → ${to.label}`,
      description: `Convert a whole folder in one pass. Multiple files come back as a single ZIP, so there is no download-one-at-a-time slog.`,
    },
    second,
    serverBacked
      ? {
          icon: "bolt",
          title: "No software to install",
          description: `Nothing to download and no account to create. Files are sent over HTTPS, converted, and deleted from the server afterwards.`,
        }
      : {
          icon: "lock",
          title: "Private by default",
          description: `The conversion runs inside your browser tab. Your ${from.label} files are never uploaded${
            pair.engine.serverFallback ? ` unless one is larger than ${MB} MB` : ""
          }.`,
        },
  ];
}

/**
 * Universal Q&A appended after the pair's own FAQs. Kept short deliberately —
 * the bulk of every FAQ block should be pair-specific.
 */
export function buildBoilerplateFaqs(pair: ConverterPair): Faq[] {
  const from = fmt(pair.from);
  const to = fmt(pair.to);

  const privacy: Faq = isServerBacked(pair)
    ? {
        q: "What happens to my files?",
        a: `This conversion needs a server, because browsers cannot handle ${
          pair.engine.decode === "server" ? `${from.label} decoding` : `${to.label} encoding`
        } on their own. Files travel over an encrypted HTTPS connection, are converted, and are deleted afterwards — they are never used for anything else.`,
      }
    : {
        q: "Are my images uploaded anywhere?",
        a: `No. ${from.label} to ${to.label} runs entirely inside your browser tab, so the image data never leaves your computer.${
          pair.engine.serverFallback
            ? ` The one exception is a file larger than ${MB} MB, which is too big to process locally — those are sent over HTTPS to our server and deleted after conversion.`
            : ""
        }`,
      };

  return [
    privacy,
    {
      q: `How many ${from.label} files can I convert at once?`,
      a: `There is no fixed limit. Add a large batch and they are processed one after another, then delivered as a single ZIP. Very large batches simply take longer — the tab stays responsive throughout.`,
    },
    {
      q: "Is there a watermark, sign-up or payment?",
      a: "None of the three. There is no account, no watermark on the output and no charge. The converted file is exactly the image you converted.",
    },
    {
      q: "Does this work on a phone?",
      a: "Yes. The converter works in mobile browsers on both iOS and Android — you can pick images straight from your camera roll and the download lands in your usual downloads folder.",
    },
  ];
}

export function buildSecurity(pair: ConverterPair): string {
  const from = fmt(pair.from);
  const to = fmt(pair.to);

  if (isServerBacked(pair)) {
    return `${from.label} to ${to.label} is one of the few conversions that cannot run in a browser, so your file is sent to our server to be processed. The transfer is encrypted with HTTPS, the file is converted immediately, and it is deleted afterwards. Nothing is kept, indexed or used for training.`;
  }
  return `Your images stay on your device. ${from.label} to ${to.label} conversion happens entirely inside your browser — there is no upload step, no copy on a server and no record of what you converted.${
    pair.engine.serverFallback
      ? ` Files over ${MB} MB are the sole exception: they exceed what a browser tab can process, so they are sent over HTTPS, converted and deleted.`
      : ""
  }`;
}

/** Short line under the drop zone. Must match the engine — see LICENSE-AUDIT F4. */
export function buildPrivacyNote(pair: ConverterPair): string {
  if (isServerBacked(pair)) {
    return "Converted on our server over an encrypted connection — files are deleted right after.";
  }
  if (pair.engine.serverFallback) {
    return `Converted in your browser — files stay on your device (over ${MB} MB is processed on our server).`;
  }
  return "Converted in your browser — your images never leave your device.";
}

/**
 * The GENERATED half of converter-page copy.
 *
 * Only mechanical text lives here — the how-to steps, the feature tiles, the
 * privacy note and a few universal FAQs. These describe behaviour that really
 * is identical on every converter page, so writing them once is correct.
 *
 * Everything that should differ between pages is in `pairs.ts` under the
 * required `unique` field (and in `src/content/converters/<slug>.<locale>.ts`
 * for a translated page). Do not migrate prose from there to here to save
 * effort: pages built entirely from this file are the thin-content failure
 * mode the whole data layer exists to prevent.
 *
 * TRANSLATION (conversion.md §6.4): every builder takes a `t`. A sentence with a
 * conditional tail is NOT assembled from fragments — each variant is a whole
 * key, because the tail lands in a different place in another language. The
 * format labels ({from}, {to}) and the megabyte threshold are placeholders,
 * since those travel unchanged.
 */
import { BROWSER_MAX_BYTES } from "@/lib/process-router";
import type { Faq, Feature, HowToStep } from "@/components/SeoContent";
import type { TFunction } from "@/i18n/t";
import { fmt } from "./formats";
import type { ConverterPair } from "./types";

const MB = Math.round(BROWSER_MAX_BYTES / (1024 * 1024));

/**
 * How the browser/server split is described to users.
 *
 * Deliberately not just "over N MB". Routing is decided by decoded pixel area
 * (see process-router.ts), so a 48-megapixel phone photo goes to the server at
 * only a few MB. Claiming a pure byte threshold would make the privacy promise
 * on every converter page false for exactly the files people shoot today.
 */
const offloadShort = (t: TFunction) => t("very large or very high-resolution images");

/** Does any part of this conversion send the file off the device? */
export function isServerBacked(pair: ConverterPair): boolean {
  return pair.engine.decode === "server" || pair.engine.target.kind === "server";
}

/** Can a large file be offloaded even though the normal path is local? */
export function hasServerFallback(pair: ConverterPair): boolean {
  return !isServerBacked(pair) && pair.engine.serverFallback;
}

export function buildSteps(pair: ConverterPair, t: TFunction): HowToStep[] {
  const from = fmt(pair.from).label;
  const to = fmt(pair.to).label;
  const toDef = fmt(pair.to);

  const middle = pair.quality
    ? {
        title: t("Choose your quality"),
        description: `${t("Drag the quality slider to trade file size against detail.")} ${
          pair.flatten
            ? t("Because {to} has no transparency, you can also pick the colour that fills transparent areas.", { to })
            : t("The default suits most images — raise it for detailed photographs.")
        }`,
      }
    : {
        title: t("Check the settings"),
        description: toDef.hasAlpha
          ? t("{to} output is lossless and keeps transparency, so there is nothing to configure. Auto-rotate reads EXIF orientation so portrait photos stay upright.", { to })
          : t("{to} output is lossless, so there is nothing to configure. Auto-rotate reads EXIF orientation so portrait photos stay upright.", { to }),
      };

  return [
    {
      title: t("Add your {from} files", { from }),
      description: t("Drag {from} images onto the drop zone or click to browse. Add as many as you like — they queue up together.", { from }),
    },
    middle,
    {
      title: t("Convert and download"),
      description: t("Press Convert. A single file downloads as {to} straight away; several arrive together in one ZIP.", { to }),
    },
  ];
}

export function buildFeatures(pair: ConverterPair, t: TFunction): Feature[] {
  const fromDef = fmt(pair.from);
  const toDef = fmt(pair.to);
  const from = fromDef.label;
  const to = toDef.label;
  const serverBacked = isServerBacked(pair);

  const second: Feature = toDef.hasAlpha && fromDef.hasAlpha
    ? {
        icon: "opacity",
        title: t("Transparency survives"),
        description: t("Transparent areas in your {from} stay transparent in the {to} — no white box behind the image.", { from, to }),
      }
    : pair.flatten
      ? {
          icon: "format_color_fill",
          title: t("You pick the background"),
          description: t("{to} cannot store transparency, so anything see-through has to be filled. Choose the colour instead of being handed white.", { to }),
        }
      : {
          icon: "high_quality",
          title: toDef.lossy ? t("Quality you control") : t("Lossless output"),
          description: toDef.lossy
            ? t("A quality slider rather than a fixed preset, so you decide where the size-versus-detail line sits.")
            : t("{to} is lossless — the converted image is pixel-for-pixel what went in.", { to }),
        };

  return [
    {
      icon: "burst_mode",
      title: t("Batch {from} → {to}", { from, to }),
      description: t("Convert a whole folder in one pass. Multiple files come back as a single ZIP, so there is no download-one-at-a-time slog."),
    },
    second,
    serverBacked
      ? {
          icon: "bolt",
          title: t("No software to install"),
          description: t("Nothing to download and no account to create. Files are sent over HTTPS, converted, and deleted from the server afterwards."),
        }
      : {
          icon: "lock",
          title: t("Private by default"),
          description: pair.engine.serverFallback
            ? t("The conversion runs inside your browser tab. Your {from} files are never uploaded unless one is among the {offload}.", { from, offload: offloadShort(t) })
            : t("The conversion runs inside your browser tab. Your {from} files are never uploaded.", { from }),
        },
  ];
}

/**
 * Universal Q&A appended after the pair's own FAQs. Kept short deliberately —
 * the bulk of every FAQ block should be pair-specific.
 */
export function buildBoilerplateFaqs(pair: ConverterPair, t: TFunction): Faq[] {
  const from = fmt(pair.from).label;
  const to = fmt(pair.to).label;

  const privacy: Faq = isServerBacked(pair)
    ? {
        q: t("What happens to my files?"),
        a: pair.engine.decode === "server"
          ? t("This conversion needs a server, because browsers cannot handle {from} decoding on their own. Files travel over an encrypted HTTPS connection, are converted, and are deleted afterwards — they are never used for anything else.", { from })
          : t("This conversion needs a server, because browsers cannot handle {to} encoding on their own. Files travel over an encrypted HTTPS connection, are converted, and are deleted afterwards — they are never used for anything else.", { to }),
      }
    : {
        q: t("Are my images uploaded anywhere?"),
        a: pair.engine.serverFallback
          ? t("No. {from} to {to} runs entirely inside your browser tab, so the image data never leaves your computer. The one exception is images too big for a browser tab to paint — either over {mb} MB, or too many megapixels for its canvas, which a modern phone photo can reach at just a few MB. Those are sent over HTTPS to our server and deleted after conversion, and the tool tells you when it happens.", { from, to, mb: MB })
          : t("No. {from} to {to} runs entirely inside your browser tab, so the image data never leaves your computer.", { from, to }),
      };

  return [
    privacy,
    {
      q: t("How many {from} files can I convert at once?", { from }),
      a: t("There is no fixed limit. Add a large batch and they are processed one after another, then delivered as a single ZIP. Very large batches simply take longer — the tab stays responsive throughout."),
    },
    {
      q: t("Is there a watermark, sign-up or payment?"),
      a: t("None of the three. There is no account, no watermark on the output and no charge. The converted file is exactly the image you converted."),
    },
    {
      q: t("Does this work on a phone?"),
      a: t("Yes. The converter works in mobile browsers on both iOS and Android — you can pick images straight from your camera roll and the download lands in your usual downloads folder."),
    },
  ];
}

export function buildSecurity(pair: ConverterPair, t: TFunction): string {
  const from = fmt(pair.from).label;
  const to = fmt(pair.to).label;

  if (isServerBacked(pair)) {
    return t("{from} to {to} is one of the few conversions that cannot run in a browser, so your file is sent to our server to be processed. The transfer is encrypted with HTTPS, the file is converted immediately, and it is deleted afterwards. Nothing is kept, indexed or used for training.", { from, to });
  }
  return pair.engine.serverFallback
    ? t("Your images stay on your device. {from} to {to} conversion happens entirely inside your browser — there is no upload step, no copy on a server and no record of what you converted. The sole exception is {offload}: they exceed what a browser tab can process, so they are sent over HTTPS, converted and deleted.", { from, to, offload: offloadShort(t) })
    : t("Your images stay on your device. {from} to {to} conversion happens entirely inside your browser — there is no upload step, no copy on a server and no record of what you converted.", { from, to });
}

/** Short line under the drop zone. Must match the engine — see LICENSE-AUDIT F4. */
export function buildPrivacyNote(pair: ConverterPair, t: TFunction): string {
  if (isServerBacked(pair)) {
    return t("Converted on our server over an encrypted connection — files are deleted right after.");
  }
  if (pair.engine.serverFallback) {
    return t("Converted in your browser — files stay on your device ({offload} are processed on our server).", { offload: offloadShort(t) });
  }
  return t("Converted in your browser — your images never leave your device.");
}

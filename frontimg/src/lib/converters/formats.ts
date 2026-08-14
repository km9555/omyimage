/**
 * One entry per image format the converter pages know about.
 *
 * `essay` is the reusable "what is this format" prose. Each converter page
 * composes the essays for BOTH of its formats, so two pages sharing a source
 * still diverge in body copy — that structural divergence is what keeps a
 * generated page set from reading as forty clones of each other.
 *
 * `decodesInBrowser` / `encodesInBrowser` are capability facts, not
 * preferences, and the pair data is validated against them.
 */
import type { FormatId } from "./types";

export interface FormatDef {
  id: FormatId;
  /** Uppercase label used in headings and buttons: "WEBP". */
  label: string;
  /** Prose spelling used mid-sentence: "WebP". */
  prose: string;
  ext: string;
  mime: string;
  /** `accept` attribute fragment for the file input. */
  accept: string;
  /** Can the platform decode this via createImageBitmap? */
  decodesInBrowser: boolean;
  /** Can canvas.toBlob or a hand-written encoder emit it? */
  encodesInBrowser: boolean;
  /** Does the format carry an alpha channel? Drives the flatten control. */
  hasAlpha: boolean;
  /** Is the format lossy? Drives the quality slider. */
  lossy: boolean;
  /** Accent colour for pages targeting this format. */
  color: string;
  essay: string;
}

export const FORMATS: Record<FormatId, FormatDef> = {
  jpg: {
    id: "jpg",
    label: "JPG",
    prose: "JPG",
    ext: "jpg",
    mime: "image/jpeg",
    accept: "image/jpeg",
    decodesInBrowser: true,
    encodesInBrowser: true,
    hasAlpha: false,
    lossy: true,
    color: "#C08A3A",
    essay:
      "JPG (also written JPEG) has been the default photograph format since 1992. It uses lossy compression tuned for the way human vision works — discarding fine colour detail the eye barely registers — which is why a photo saved as JPG can be a tenth the size of the same image as PNG. The trade-off is that it has no transparency channel and that every re-save degrades the image slightly, so it suits finished photographs rather than working files.",
  },
  png: {
    id: "png",
    label: "PNG",
    prose: "PNG",
    ext: "png",
    mime: "image/png",
    accept: "image/png",
    decodesInBrowser: true,
    encodesInBrowser: true,
    hasAlpha: true,
    lossy: false,
    color: "#4B8FC7",
    essay:
      "PNG is a lossless format built in 1996 as a patent-free replacement for GIF. Nothing is discarded when it compresses, so an image can be opened and re-saved indefinitely without degrading, and it carries a full alpha channel for soft-edged transparency. That fidelity costs space: a photograph stored as PNG is typically several times larger than the same photo as JPG, which is why PNG is the right choice for screenshots, logos and line art rather than camera output.",
  },
  webp: {
    id: "webp",
    label: "WEBP",
    prose: "WebP",
    ext: "webp",
    mime: "image/webp",
    accept: "image/webp",
    decodesInBrowser: true,
    encodesInBrowser: true,
    hasAlpha: true,
    lossy: true,
    color: "#3E9A90",
    essay:
      "WebP is Google's 2010 image format, and it is unusual in offering both lossy and lossless modes plus transparency in a single container. In practice it lands roughly 25–35% smaller than an equivalent-quality JPG, which is why it spread quickly across the web once Safari added support in 2020. Its weakness is outside the browser: plenty of desktop software, older phones and printing workflows still will not open a .webp file.",
  },
  gif: {
    id: "gif",
    label: "GIF",
    prose: "GIF",
    ext: "gif",
    mime: "image/gif",
    accept: "image/gif",
    decodesInBrowser: true,
    encodesInBrowser: true,
    hasAlpha: false,
    lossy: false,
    color: "#C56A9A",
    essay:
      "GIF dates to 1987 and is limited to a 256-colour palette per frame, which is why photographs stored as GIF show visible banding and dithering. It survives for two reasons: it animates, and it is understood by essentially every piece of software ever written. Its transparency is binary — a pixel is either fully visible or fully invisible — so it cannot do the soft edges PNG manages.",
  },
  bmp: {
    id: "bmp",
    label: "BMP",
    prose: "BMP",
    ext: "bmp",
    mime: "image/bmp",
    accept: "image/bmp",
    decodesInBrowser: true,
    encodesInBrowser: true,
    hasAlpha: false,
    lossy: false,
    color: "#6E7A8A",
    essay:
      "BMP is Microsoft's original Windows bitmap, and it is usually stored with no compression at all — every pixel written out in full. A 12-megapixel photo as a 24-bit BMP occupies about 36 MB, against roughly 3 MB as a JPG. It still appears in Windows utilities, older scanner drivers, medical and industrial equipment and some embedded systems, which is why converting out of it is a common need even though almost nobody chooses it deliberately.",
  },
  avif: {
    id: "avif",
    label: "AVIF",
    prose: "AVIF",
    ext: "avif",
    mime: "image/avif",
    accept: "image/avif,.avif",
    decodesInBrowser: true,
    encodesInBrowser: false,
    hasAlpha: true,
    lossy: true,
    color: "#7B5CC4",
    essay:
      "AVIF wraps the royalty-free AV1 video codec into a still-image format, and it compresses harder than anything else in mainstream use — frequently half the size of a JPG at matched quality, with transparency and high dynamic range on top. Browsers decode it well (Chrome since 85, Firefox since 93, Safari since 16.4), but support thins out fast beyond them: many image editors, older operating systems and most print workflows still cannot open one.",
  },
  heic: {
    id: "heic",
    label: "HEIC",
    prose: "HEIC",
    ext: "heic",
    mime: "image/heic",
    accept: ".heic,.heif,image/heic,image/heif",
    decodesInBrowser: false,
    encodesInBrowser: false,
    hasAlpha: false,
    lossy: true,
    color: "#D4855A",
    essay:
      "HEIC is the format an iPhone has saved photos in by default since iOS 11, storing roughly twice the image in the same space as JPG. It is built on the HEVC/H.265 video codec, and that lineage is the problem: HEVC is covered by patent pools, so most browsers and a great deal of Windows and Android software will not open a .heic file without an extra codec purchase or install. Converting is usually the shortest path to a photo that simply works everywhere.",
  },
  jfif: {
    id: "jfif",
    label: "JFIF",
    prose: "JFIF",
    ext: "jfif",
    mime: "image/jpeg",
    accept: "image/jpeg,.jfif",
    decodesInBrowser: true,
    encodesInBrowser: true,
    hasAlpha: false,
    lossy: true,
    color: "#C98B3E",
    essay:
      "JFIF is not really a separate format — it stands for JPEG File Interchange Format, and it is the container that the overwhelming majority of files you already call JPGs are stored in. The confusion is purely about the file extension. Certain Windows and Chrome configurations save downloaded images as .jfif instead of .jpg, and although the bytes are a perfectly ordinary JPEG, a surprising amount of software refuses to open them purely because it does not recognise the extension.",
  },
  tiff: {
    id: "tiff",
    label: "TIFF",
    prose: "TIFF",
    ext: "tiff",
    mime: "image/tiff",
    accept: "image/tiff,.tif,.tiff",
    decodesInBrowser: false,
    encodesInBrowser: false,
    hasAlpha: true,
    lossy: false,
    color: "#5D7091",
    essay:
      "TIFF is the archival and prepress workhorse: lossless, capable of 16 bits per channel, layers, CMYK and embedded colour profiles. Scanners, print shops and document-management systems lean on it heavily. Browsers, however, have never decoded it natively, so a TIFF cannot simply be dropped into a web page or most online tools without being converted first.",
  },
  ico: {
    id: "ico",
    label: "ICO",
    prose: "ICO",
    ext: "ico",
    mime: "image/x-icon",
    accept: "image/x-icon,image/vnd.microsoft.icon,.ico",
    decodesInBrowser: true,
    encodesInBrowser: true,
    hasAlpha: true,
    lossy: false,
    color: "#3E96AE",
    essay:
      "ICO is the Windows icon container, and unlike a normal image file it holds several sizes at once — 16×16 through 256×256 — so the operating system can pick the right one for a taskbar, a file listing or a desktop shortcut. It is also still the most broadly compatible favicon format for websites. Modern ICO files may store each size as embedded PNG data, which keeps them small.",
  },
};

export function fmt(id: FormatId): FormatDef {
  return FORMATS[id];
}

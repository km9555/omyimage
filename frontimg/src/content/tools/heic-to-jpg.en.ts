import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /heic-to-jpg. Structure lives in ToolPageShell; the page
 * <title> and meta description stay in lib/tools.ts (seoTitle/seoDescription).
 */
const content: ToolPageContent = {
  toolId: "heic-to-jpg",
  locale: "en",
  name: "HEIC to JPG",
  tagline:
    "Convert iPhone HEIC and HEIF photos to JPG or PNG online — in batches, with quality control. Free and fast, powered by open-source ImageMagick.",
  category: { id: "convert", label: "Convert" },

  intro:
    "iPhones save photos as HEIC to keep file sizes small, but many apps and devices can't open them. oMyImage's HEIC to JPG tool converts your .heic and .heif photos to universally-supported JPG (or lossless PNG) — one at a time or a whole batch. This is the one tool here that runs on our server rather than in your browser: decoding HEIC needs a library we can't ship to browsers under its licence, so your file is converted server-side and deleted straight afterwards.",

  sections: [
    {
      heading: "What HEIC is, and why it causes trouble",
      id: "what",
      body: [
        "HEIC is the format an iPhone has used by default since iOS 11. It stores photographs at roughly half the size of an equivalent JPG, which is a genuine engineering achievement and the reason Apple adopted it — a phone holding ten thousand photos saves a great deal of space.",
        "The difficulty is what it is built on. HEIC wraps the HEVC/H.265 video codec, and HEVC is covered by several patent pools that charge for decoder licences. That single fact explains almost every problem people have with the format: Windows does not include a decoder, most browsers refuse to display it, many Android phones cannot open it, and a long list of desktop applications simply do not know what the file is.",
        "JPG has none of that baggage. It is thirty years old, patent-free, and understood by everything that has ever displayed an image. Converting trades some storage efficiency for the certainty that the photo will open wherever you send it.",
      ],
    },
    {
      heading: "Why this tool uses our server",
      id: "server",
      body: [
        "Every other converter on this site works inside your browser. HEIC is the exception, and the reason is licensing rather than performance. Every JavaScript HEIC decoder that exists — heic2any, heic-decode, heic-convert, libheif-js — is a wrapper around the same libheif library, and libheif is LGPL-3.0. Shipping it inside a web bundle counts as distribution, which carries obligations that a minified chunk of JavaScript cannot meet.",
        "Running the library on a server is not distribution, so that is where the decoding happens. Your photo travels over an encrypted HTTPS connection, is converted, and is deleted immediately afterwards. It is not stored, indexed, or used for anything else. We would rather say this plainly than claim a privacy property this particular tool does not have.",
      ],
    },
    {
      heading: "Stopping the problem at source",
      id: "settings",
      body: [
        "If you convert HEIC files regularly, it is worth changing the setting rather than the files. Under Settings, Camera, Formats, the 'Most Compatible' option makes the camera write JPG directly. You lose the storage efficiency, which on a modern phone is rarely the binding constraint.",
        "There is a second setting that catches people out. Under Settings, Photos, the 'Transfer to Mac or PC' option can be set to 'Automatic', which converts HEIC to JPG during the copy, or to 'Keep Originals', which does not. A folder of unopenable .heic files on a Windows machine is very often the second setting doing exactly what it was told.",
      ],
    },
    {
      heading: "Quality and file size after converting",
      id: "quality",
      body: [
        "The HEIC was already lossily compressed by your phone, and encoding to JPG compresses it a second time. At the default quality this is not visible at normal viewing sizes, but it is a real generational step, so convert from the original HEIC rather than from a copy that has already been through something else.",
        "Expect the JPG to be larger than the HEIC — usually somewhere between 1.5 and 2.5 times — because you are moving to a less efficient format. That is the trade you are making for universal compatibility. If you need a lossless copy for editing instead, convert to PNG, but be ready for a file several times larger again.",
      ],
    },
  ],

  howToTitle: "How to convert HEIC to JPG",
  steps: [
    { title: "Upload HEIC", description: "Select one or many .heic / .heif photos, or drag and drop them in." },
    { title: "Pick a format", description: "Choose JPG (with quality) or PNG as the output." },
    { title: "Convert & download", description: "Click Convert — one photo downloads directly, several download together as a ZIP." },
  ],

  features: [
    { icon: "photo_camera", title: "Built for iPhone photos", description: "Turn Apple's HEIC/HEIF photos into JPG or PNG that open everywhere — Windows, Android and the web." },
    { icon: "burst_mode", title: "Batch conversion", description: "Convert a whole camera roll at once and download everything as a single ZIP." },
    { icon: "lock", title: "Private by default", description: "Conversion runs on our server with open-source ImageMagick; results are auto-deleted within an hour and never shared or reused." },
  ],

  faqs: [
    { q: "What is HEIC?", a: "HEIC (HEIF) is the high-efficiency photo format iPhones use by default. It saves space but isn't supported everywhere, so converting to JPG makes sharing easier." },
    { q: "Can I convert many HEIC files at once?", a: "Yes. Add as many as you like — multiple files download together as a ZIP." },
    { q: "Is quality preserved?", a: "Yes. Choose PNG for lossless output, or JPG with a quality slider to balance size and fidelity." },
    { q: "Are my photos uploaded?", a: "Yes — HEIC is the one tool here that needs a server. Decoding HEIC requires a library we can't ship to your browser for licensing reasons, so the file is converted on our server and auto-deleted within an hour. Nothing is shared or reused." },
    { q: "Is it free?", a: "Completely free, with no watermark and no sign-up." },
    { q: "Why does my iPhone save photos as HEIC?", a: "Because it fits roughly twice the image into the same space as JPG, which matters when a phone holds thousands of photos. Apple switched the default in iOS 11. The saving is real; the compatibility cost is what brings people here." },
    { q: "How do I stop my iPhone using HEIC?", a: "Open Settings, go to Camera, then Formats, and choose 'Most Compatible'. New photos will be saved as JPG from then on. It does not convert the photos you already have, so you will still need to convert those." },
    { q: "Why can't Windows open my HEIC files?", a: "HEIC is built on the HEVC/H.265 video codec, which is covered by patent pools, so Windows does not ship a decoder by default. Microsoft offers HEVC extensions in the Store, sometimes as a paid item. Converting avoids the issue altogether." },
    { q: "Should I convert to JPG or PNG?", a: "JPG for almost everything — it is far smaller and universally accepted. Choose PNG when you want a lossless copy for editing or archiving, and accept that the file will be several times larger. There is a dedicated HEIC to PNG page for that." },
    { q: "Will my photo's date and location be kept?", a: "By default, yes: the converter copies EXIF metadata — including the capture date and GPS coordinates, if the photo has them — into the new file. Tick \"Strip metadata\" to remove it all before you share the image; phone photos almost always record where they were taken. To inspect that data first, the Image Metadata Viewer reads it directly from a HEIC without converting, in your browser." },
    { q: "Can I convert a whole camera roll?", a: "Yes. Add as many .heic or .heif files as you like; they are converted in sequence and returned as one ZIP." },
  ],

  security:
    "HEIC conversion runs on our server using open-source ImageMagick. Results are stored only briefly behind a private download link and auto-deleted within an hour. We never share or reuse your photos.",

  rating: { value: "4.9", count: "742" },
};

export default content;

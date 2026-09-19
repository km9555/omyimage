import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /convert-to-jpg. Structure lives in ToolPageShell; the page
 * <title> and meta description stay in lib/tools.ts (seoTitle/seoDescription).
 */
const content: ToolPageContent = {
  toolId: "convert-to-jpg",
  locale: "en",
  name: "Convert to JPG",
  tagline:
    "Convert PNG, WEBP, GIF and BMP images to JPG online — in batches, with quality control. Free, fast and 100% private in your browser.",
  category: { id: "convert", label: "Convert" },

  intro:
    "Need universally-compatible, lightweight images? oMyImage's Convert to JPG tool turns PNG, WEBP, GIF and BMP files into high-quality JPGs right in your browser. Convert a single image or a whole batch, choose the quality, and pick the background color that replaces any transparency. Nothing is uploaded — it's instant and completely private.",

  sections: [
    {
      heading: "Why convert to JPG at all",
      id: "why",
      body: [
        "Almost everyone converting to JPG is solving a compatibility problem rather than making an aesthetic choice. An upload form rejects the file, a print service will not accept it, an older application refuses to open it, or an email attachment needs to be under a certain size. JPG is the format that ends those arguments — three decades old, unencumbered by patents, and readable by everything.",
        "The second reason is weight. PNG and BMP in particular store far more data than a photograph needs, and converting to JPG routinely cuts the file by 80% or more with no visible change at a sensible quality. For anything being emailed, uploaded or served on a page, that is the difference between a file that works and one that does not.",
      ],
    },
    {
      heading: "What JPG cannot do",
      id: "limits",
      body: [
        "JPG has no transparency. There is no alpha channel in the format at all, so anything see-through must be painted over with a solid colour before saving. That is fine for a photograph and wrong for a logo intended to sit on a coloured background.",
        "It also holds exactly one image, so animation is lost — an animated GIF or WebP converts to its first frame. And because it is lossy, every save discards a little more detail. Convert once from the best source you have, and keep that original if you might need to edit later.",
        "Finally, JPG is a poor fit for sharp-edged content. Screenshots, diagrams, line art and anything with small text pick up a faint halo around every edge, and often do not even get smaller. PNG or WEBP is the better destination for those.",
      ],
    },
    {
      heading: "Picking a quality setting",
      id: "quality",
      body: [
        "The quality slider decides how aggressively detail is discarded. 85–92% is the range where the compression is essentially invisible and the file is still dramatically smaller than the source — start there unless you have a reason not to.",
        "Push to 95% and above for images that will be printed, enlarged or examined closely; the file grows quickly for a difference most people cannot see on a screen, but printing is unforgiving. Drop to 70–80% when you need to hit a hard size limit and the image is a normal photograph. Below that, blocking becomes visible first in skies, skin tones and any smooth gradient.",
      ],
    },
    {
      heading: "Choosing what fills the transparency",
      id: "background",
      body: [
        "Since transparency has to become something, this tool automatically matches the colour found at the image's own edges by default — no picking required, and no white rectangle around a subject that was never meant to sit on white. White, black or any custom colour is one click away when you want something different, such as matching a dark interface or a coloured card.",
        "One thing to watch: PNG and WebP transparency is usually anti-aliased, so edge pixels are partially transparent and blend with whatever you choose. An image prepared against white and then filled with black can show a pale fringe. If that appears, re-exporting the source against the correct background is cleaner than trying to correct it afterwards.",
      ],
    },
  ],

  howToTitle: "How to convert an image to JPG",
  steps: [
    { title: "Upload", description: "Select one or many PNG, WEBP, GIF or BMP images, or drag and drop them in." },
    { title: "Set options", description: "Pick the JPG quality and the background color used to flatten any transparency." },
    { title: "Convert & download", description: "Click Convert — a single JPG downloads instantly, or several download together as a ZIP." },
  ],

  features: [
    { icon: "burst_mode", title: "Batch conversion", description: "Convert dozens of PNG, WEBP, GIF or BMP images to JPG at once and download them all as a single ZIP." },
    { icon: "tune", title: "Quality control", description: "Choose the JPG quality from 50% to 100% to balance file size against visual fidelity." },
    { icon: "lock", title: "100% private", description: "Conversion runs entirely in your browser with HTML canvas — your images are never uploaded." },
  ],

  faqs: [
    { q: "Which formats can I convert to JPG?", a: "PNG, WEBP, GIF and BMP. GIFs are converted using their first frame." },
    { q: "What happens to transparency?", a: "JPG does not support transparency, so transparent areas are filled with a background color. By default we automatically match the color at the image's own edges; pick white, black or any custom color instead if you want something different." },
    { q: "Can I convert many images at once?", a: "Yes. Add as many as you like — a single image downloads as a JPG, and multiple images download together as a ZIP." },
    { q: "Is it really free and private?", a: "Yes. There's no sign-up or watermark, and every image is processed locally in your browser." },
    { q: "Does the JPG keep my EXIF and camera data?", a: "By default yes — any EXIF or XMP the source carries is copied into the JPG, including the capture date, camera model and GPS coordinates if they are present. Tick 'Strip metadata' to leave all of it out, along with the colour profile. Note that PNG, GIF and BMP files rarely carry EXIF at all, so for most sources there is nothing to keep." },
    { q: "Is the colour profile preserved?", a: "No, and that is deliberate. Converting decodes the image to sRGB, so carrying the original profile across would describe the new pixels wrongly and shift the colours. The JPG is saved as sRGB — which is what a viewer assumes anyway — and the embedded sRGB profile is dropped entirely if you tick 'Strip metadata'." },
    { q: "Which formats can I convert from?", a: "PNG, WEBP, GIF and BMP. Those are the formats a browser can decode natively, which is what allows the conversion to happen on your device. HEIC and AVIF have dedicated pages because they need different handling." },
    { q: "Why is JPG still the safest format?", a: "Because it is thirty years old, patent-free and implemented in essentially every piece of software that has ever displayed an image. Newer formats compress better, but 'better' is worth nothing when the system you are uploading to rejects the file." },
    { q: "What quality setting should I use?", a: "85–92% suits almost everything. Go higher for photographs you will print or that a customer will zoom into. Below 70% you start to see blocking in skies and smooth gradients, which is the point where people notice the compression rather than the picture." },
    { q: "Can I convert an animated GIF?", a: "You get its first frame as a still JPG. JPG holds a single image, so animation cannot survive. If you need a specific frame, extract them all with the GIF to Images tool first and convert the one you want." },
    { q: "Is there a limit on how many files?", a: "No fixed limit. A single image downloads directly; several are packaged into one ZIP. Large batches simply take a little longer, and the tab stays usable while they process." },
  ],

  security:
    "Your images stay private. Conversion to JPG happens entirely in your browser with HTML canvas — nothing is uploaded to a server. No storage, no tracking of your files.",

  rating: { value: "4.9", count: "734" },
};

export default content;

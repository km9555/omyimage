import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /signature-resizer (new tool, 2026-10-05). India:
 * "signature resize" 74K/mo (KD 0) + "signature resize 10 to 20 kb" 18.1K.
 * Everything runs in the browser (lib/image/signature.ts): local paper
 * levelling, ink trim, fit to the form's size, KB range via compressToSize /
 * growToSize — including the honest note when a file has to be padded.
 */
const content: ToolPageContent = {
  toolId: "signature-resizer",
  locale: "en",
  name: "Signature Resizer",
  tagline:
    "Turn a phone photo of your signature into a clean, form-ready file: white background, solid ink, trimmed edges, the exact size in pixels or centimetres, and a file between 10 and 20 KB — or any range you need. Free and private, in your browser.",
  category: { id: "optimize", label: "Optimize" },

  intro:
    "Online application forms are strict about the signature: black or blue ink on white paper, a set size such as 140 × 60 pixels, and a file size between, say, 10 and 20 KB. A photo taken with a phone fails on every count — grey paper, a shadow across one corner, far too many pixels and a file a hundred times too big. This tool fixes all of it at once. It whitens the paper and darkens the ink, trims the empty space, fits the signature onto the size you choose and saves a JPG inside the KB range — without your signature ever leaving your device.",

  sections: [
    {
      heading: "What forms ask for",
      id: "requirements",
      body: [
        "Bank and other recruitment portals in India commonly ask for a signature of 140 × 60 pixels in a file between 10 and 20 KB. Other forms give the size in centimetres, such as 4 × 2 cm or 6 × 2 cm, and some only set a file-size limit. Almost all of them want dark ink on plain white paper, and many reject a signature written in capital letters.",
        "Choose the matching size under Output size — the centimetre sizes are drawn at 300 DPI and saved with that DPI, so they print at the stated size — and pick the KB range the form gives. For a size that is not listed, choose Custom size and type the width and height in pixels.",
      ],
    },
    {
      heading: "Signing and photographing",
      id: "photographing",
      body: [
        "Sign three or four times on plain white paper with a black or dark blue pen, and pick the best one. Ballpoint is fine; a gel pen or felt tip gives a darker, more even line that survives compression better.",
        "Photograph the paper in daylight from directly above, holding the phone parallel to the page so the signature is not stretched. Fill most of the frame with the signature — the tool trims the rest — and avoid your own shadow falling across the paper. A flatbed scan works just as well.",
      ],
    },
    {
      heading: "How the background is cleaned",
      id: "cleaning",
      body: [
        "Paper in a photo is never truly white, and it is rarely the same shade from one side to the other. Instead of one cut-off for the whole image, the tool estimates how bright the paper is around every point and compares each pixel with its own surroundings. Paper becomes pure white, the pen stroke becomes solid, and a shadow across one corner disappears instead of turning into a grey smudge.",
        "Cleaning strength decides how much light grey counts as paper. Raise it if specks or a faint shadow remain; lower it if the thin ends of your strokes start to break up. Ink colour can be pure black, a dark blue, or your pen's own colour.",
      ],
    },
    {
      heading: "Sizes and file limits",
      id: "limits",
      body: [
        "The signature is scaled to fit inside the chosen size without stretching and centred on white. Under a maximum, the JPG quality is set as high as the limit allows. Under a minimum — the \"at least 10 KB\" half of a range — a small, clean signature is often too simple to reach the number on its own, so quality is raised to the top first.",
        "If a tiny size such as 140 × 60 pixels is still under the minimum at full quality, the file is padded with an empty block of data until it reaches it. The signature itself is not changed by a single pixel; the page tells you when this happened.",
        "Both ends of a range are read the safe way: \"at least 10 KB\" becomes at least 10,240 bytes and \"at most 20 KB\" at most 20,000, so the file passes whether the form counts a kilobyte as 1,000 or 1,024 bytes.",
      ],
    },
  ],

  howToTitle: "How to resize a signature for an online form",
  steps: [
    { title: "Add a photo of your signature", description: "A photo or scan of your signature on white paper — JPG, PNG or WEBP." },
    { title: "Choose the size and KB range", description: "Pick 140 × 60 px, a centimetre size or your own, and the file-size range the form asks for." },
    { title: "Download the JPG", description: "Check the preview, then download a clean signature ready to upload." },
  ],

  features: [
    { icon: "draw", title: "Clean white background", description: "Shadows and grey paper are removed, and the ink is made solid — in black, blue or its own colour." },
    { icon: "crop", title: "Exact size", description: "140 × 60 px, 4 × 2 cm, 6 × 2 cm or any size, with the empty space trimmed first." },
    { icon: "lock", title: "Never uploaded", description: "Your signature is processed in your browser and stays on your device." },
  ],

  faqs: [
    { q: "How do I resize my signature to 10–20 KB?", a: "Add a photo of your signature and choose the 10 to 20 KB range under File size, with the pixel size your form asks for. The downloaded JPG lands inside the range." },
    { q: "What size should a signature be for online forms?", a: "Whatever the form states. 140 × 60 pixels and 10–20 KB is a common requirement on Indian recruitment portals; other forms use centimetre sizes such as 4 × 2 cm. Check the instructions and pick the same values here." },
    { q: "How do I make the background of my signature white?", a: "Leave Clean the background switched on. The paper becomes pure white and the ink solid, even if the photo was taken in uneven light." },
    { q: "Can I keep my signature in blue ink?", a: "Yes. Choose Blue for an even dark blue, or Original to keep your pen's own colour. Choose Black if the form asks for black ink." },
    { q: "Why does my signature look broken after cleaning?", a: "The cleaning is too strong for a thin or light pen line. Lower Cleaning strength, or sign again with a darker pen." },
    { q: "Why was my file padded?", a: "A small, clean signature can be simpler than the form's minimum size allows. After raising the quality to the top, the tool adds empty data to reach the minimum; the image itself is unchanged." },
    { q: "Can I use a scanned signature?", a: "Yes. A scan is ideal — even lighting and a flat page. Add the scan and the tool trims and resizes it the same way." },
    { q: "Is my signature uploaded anywhere?", a: "No. Cleaning, resizing and saving all happen in your browser; the signature never leaves your device." },
  ],

  security:
    "Your signature is cleaned, resized and saved entirely in your browser. It is never uploaded, stored or seen by anyone else.",
};

export default content;

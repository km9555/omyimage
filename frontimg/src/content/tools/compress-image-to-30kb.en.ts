import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /compress-image-to-30kb (variant of compress-image,
 * preset targetKb 30). Demand (2026-10-04): India "compress image to 30kb"
 * 6.6K. Angle: the form PHOTO limit — what makes a face survive 30KB (crop,
 * plain background), resize-then-compress when a form also gives pixels, and
 * the KB-vs-KiB confusion that makes a 29KB file look "too big".
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-30kb",
  locale: "en",
  name: "Compress Image to 30KB",
  tagline:
    "Compress a photo to under 30KB for exam, admission and job forms — with the face still sharp enough for an admit card or ID. Exact limit, no upload, free.",
  category: { id: "optimize", label: "Optimize" },

  intro:
    "30KB is a common cap for the photograph on exam, admission and recruitment forms, and sometimes for the signature as well. It is enough for a clear passport-style photo — if the photo is prepared for it. Add your picture here and you get a JPG under 30KB at the highest quality that fits; the tips below make the difference between a face that looks crisp and one that looks smudged.",

  sections: [
    {
      heading: "Keep the face, lose the rest",
      id: "face-first",
      body: [
        "Forms want a head-and-shoulders photo, so everything else — the room, your lap, the ceiling — is wasted space. Crop to the head and shoulders before compressing and the whole 30KB goes on the face. At this size a photo of about 350 × 450 pixels keeps good detail in the eyes and hair.",
        "Look straight at the camera, keep the face evenly lit and avoid strong shadows on one side. Shadows and grain are fine detail the compressor has to store; even light gives it less to keep and a cleaner result.",
      ],
    },
    {
      heading: "Why a plain background helps",
      id: "background",
      body: [
        "JPG compression stores smooth areas very cheaply and busy ones expensively. A plain white or light wall costs almost nothing, so most of the 30KB is spent on the face. A bookshelf, curtains with a pattern or a sunlit garden behind you can take half the budget on their own.",
        "If your photo was taken against a busy background, the Change Background Color tool can replace it with plain white or blue first. Then compress the result here.",
      ],
    },
    {
      heading: "When the form also gives pixel dimensions",
      id: "dimensions",
      body: [
        "Some forms ask for both: under 30KB and, say, 200 × 230 pixels. Do it in that order — resize to the exact dimensions with the Resize Image tool first, then compress to 30KB here. Compressing first and resizing afterwards re-saves the JPG a second time and loses quality for nothing.",
        "If the form gives a size in centimetres instead, such as 3.5 × 4.5 cm, it is describing the shape of the photo. Crop to that shape, then compress.",
      ],
    },
    {
      heading: "\"My file is 29KB but the form says it is too big\"",
      id: "kb-kib",
      body: [
        "Computers count kilobytes in two ways. Windows shows sizes in units of 1,024 bytes, while many websites check limits in units of 1,000. The tool keeps the file under 30,000 bytes, which is under the limit either way.",
        "If a form still rejects the photo, the reason is usually something else: the wrong format (PNG instead of JPG), a minimum size it also requires, or dimensions outside its range. Read the error message carefully — it usually says which.",
      ],
    },
    {
      heading: "Taking the photo with a phone",
      id: "phone",
      body: [
        "Use the main (rear) camera rather than the selfie camera, and ask someone to take the photo from about 1.5 metres away at eye level. Stand in front of a plain light wall facing a window, so daylight falls evenly on your face, and keep your shoulders straight to the camera.",
        "Turn off beauty filters and portrait mode — both soften edges and add effects that forms do not allow — and take several shots. Pick the sharpest one: compression can make a photo smaller, but it cannot make a blurred one sharp.",
      ],
    },
  ],

  howToTitle: "How to compress a photo to 30KB",
  steps: [
    { title: "Add your photo", description: "Crop it to head and shoulders, then add it — JPG, PNG or WEBP." },
    { title: "Compress to under 30KB", description: "The 30KB limit is already set; change it if your form asks for something else." },
    { title: "Download and upload", description: "Download the JPG and attach it to your form." },
  ],

  features: [
    { icon: "face", title: "Faces stay clear", description: "The highest quality that fits under 30KB, so eyes and features stay sharp." },
    { icon: "aspect_ratio", title: "Pairs with resizing", description: "Resize to the form's pixel dimensions first, then compress — the right order for the best quality." },
    { icon: "lock", title: "No upload", description: "Your photo is compressed in your browser and never leaves your device." },
  ],

  faqs: [
    { q: "How do I compress a photo to 30KB?", a: "Add it here and press Compress — the 30KB limit is already set. You get a JPG under 30KB at the highest quality that fits." },
    { q: "What pixel size fits in 30KB?", a: "A head-and-shoulders photo of about 350 × 450 pixels keeps good detail. Larger photos are reduced automatically until they fit." },
    { q: "Will the photo be clear enough for the admit card?", a: "Yes. Admit cards print the photo small, and 30KB is plenty for that if the photo is cropped to the face and evenly lit." },
    { q: "Should I resize first or compress first?", a: "Resize first, then compress. Compressing and then resizing saves the JPG twice and loses quality you did not need to lose." },
    { q: "Does a plain background really make a difference?", a: "Yes. Plain areas take very little space in a JPG, so more of the 30KB goes on your face. A busy background can use half the budget." },
    { q: "Windows shows a different size from the form — which is right?", a: "Both, in different units. The tool keeps the file under 30,000 bytes, so it passes whether the form counts 1KB as 1,000 or 1,024 bytes." },
    { q: "Can I compress a signature to 30KB as well?", a: "Yes. Add the photo and the signature together; each comes back under 30KB. If the signature field allows less, run it again with that number." },
    { q: "Can I take the photo with my phone?", a: "Yes. Use the rear camera, stand about 1.5 metres away in daylight against a plain wall, and crop to head and shoulders before compressing to 30KB." },
  ],

  security:
    "Photos are compressed on your device, in your browser. Nothing is uploaded or stored anywhere.",
};

export default content;

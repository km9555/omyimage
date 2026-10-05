import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /compress-image-to-15kb (variant of compress-image,
 * preset targetKb 15). India "compress image to 15kb" 4.4K/mo. Angle: the
 * small-but-not-tiny limit — clean the signature first (Signature Resizer),
 * and why low light and grain eat a small budget.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-15kb",
  locale: "en",
  name: "Compress Image to 15KB",
  tagline:
    "Compress a signature or a small photo to under 15KB for exam, recruitment and registration forms. The clearest version that fits, worked out in your browser — nothing is uploaded.",
  category: { id: "optimize", label: "Optimize" },

  intro:
    "15KB sits between the strictest signature limits and the smallest photo limits, and forms use it for both: the signature box, a small photograph field, sometimes a scanned thumb impression. It is enough for a clean, readable signature and a recognisable head-and-shoulders photo — provided the image is prepared well. Add yours and you get a JPG under 15KB at the highest quality that fits.",

  sections: [
    {
      heading: "What fits in 15KB",
      id: "what-fits",
      body: [
        "A signature in dark ink on white paper fits easily, even at a few hundred pixels wide, because most of it is plain white. A photo is harder: expect roughly 250 × 310 pixels for a head-and-shoulders picture, which is about the size it appears on an admit card or an ID form.",
        "The tool finds the highest JPG quality that comes in under 15KB, and reduces the dimensions only when quality alone cannot get there. The result list shows the new size of every file, and the new dimensions whenever they changed.",
      ],
    },
    {
      heading: "Clean the signature first",
      id: "clean-signature",
      body: [
        "A signature photographed on a desk carries grey paper, a shadow and a strip of table — all of it detail that the compressor tries to keep. Run it through the Signature Resizer first: it turns the paper pure white, makes the ink solid and trims the empty space. A clean signature then fits under 15KB with sharp edges and room to spare.",
        "If the form gives exact pixel dimensions for the signature as well, set them in the Signature Resizer and choose the KB range there; it handles both in one step.",
      ],
    },
    {
      heading: "Low light costs bytes",
      id: "low-light",
      body: [
        "A photo taken indoors in the evening is full of grain — fine coloured speckles that the camera adds when there is not enough light. To a JPG compressor that grain is detail, and at 15KB it takes up space the face needs. The same pose photographed by a window in daylight compresses to a noticeably sharper 15KB file.",
        "If you only have the grainy photo, compressing it still works; the tool simply has to reduce the dimensions a little more to fit, which also smooths the grain away.",
      ],
    },
    {
      heading: "Photo and signature for one form",
      id: "one-form",
      body: [
        "Add the photo and the signature together and both come back under 15KB in one go. If one of the fields allows more — a photo field of 50KB, say — compress that file again with its own limit, starting from the original rather than from the 15KB copy, so it keeps as much detail as its field allows.",
      ],
    },
    {
      heading: "Cropping a photo for a 15KB limit",
      id: "small-photo",
      body: [
        "Crop from just above the top of the hair to just below the shoulders, with the face in the middle and the eyes about a third of the way down. The face should fill most of the picture; every centimetre of wall or ceiling left in is detail the compressor has to pay for out of the same 15KB.",
        "A tightly cropped photo also needs less shrinking to fit, so the face that remains keeps more of its pixels. That is why the same photo looks noticeably sharper at 15KB when it is cropped first than when the whole picture is compressed as it is.",
      ],
    },
  ],

  howToTitle: "How to compress an image to 15KB",
  steps: [
    { title: "Add your image", description: "A signature or a cropped photo — JPG, PNG or WEBP." },
    { title: "Compress to under 15KB", description: "The 15KB limit is already set; quality and size are reduced only as much as needed." },
    { title: "Download", description: "Download the JPG and upload it to your form." },
  ],

  features: [
    { icon: "draw", title: "Signatures stay sharp", description: "Clean signatures fit far under 15KB with crisp edges." },
    { icon: "face", title: "Recognisable photos", description: "A head-and-shoulders photo keeps the face clear at admit-card size." },
    { icon: "lock", title: "Private", description: "Signatures and photos are compressed in your browser, never uploaded." },
  ],

  faqs: [
    { q: "How do I compress an image to 15KB?", a: "Add it here and press Compress — the 15KB limit is already set. You get a JPG under 15KB at the best quality that fits." },
    { q: "What size photo fits in 15KB?", a: "Roughly 250 × 310 pixels for a head-and-shoulders photo; larger photos are reduced automatically until they fit." },
    { q: "Should I clean my signature before compressing it to 15KB?", a: "Yes. The Signature Resizer whitens the paper and trims the edges, so the signature fits easily and stays sharp." },
    { q: "Why does a photo taken at night look worse at 15KB?", a: "Low light adds grain, and the compressor spends bytes keeping it. A daylight photo of the same face looks sharper at the same size." },
    { q: "Can I compress my photo and signature to 15KB together?", a: "Yes. Add both; each comes back under 15KB." },
    { q: "What if the image is already under 15KB?", a: "If it is already a JPG under the limit, it is returned unchanged." },
    { q: "Is 15KB the same as 0.015MB?", a: "Yes, 15KB is 15,000 bytes. The file also passes forms that count 1KB as 1,024 bytes." },
    { q: "What is the best way to crop a photo for a 15KB limit?", a: "From just above the hair to just below the shoulders, face centred and filling most of the frame. The tighter the crop, the sharper the face at 15KB." },
  ],

  security:
    "Signatures and photos are compressed on your device, in your browser. Nothing is uploaded or stored anywhere.",
};

export default content;

import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /compress-image-to-40kb (variant of compress-image,
 * preset targetKb 40). India "compress image to 40kb" 5.4K/mo. Angle: 40KB
 * as the SAFE target inside a "20–50 KB" photo range, digitising a printed
 * studio photo, and colour casts that get photos rejected.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-40kb",
  locale: "en",
  name: "Compress Image to 40KB",
  tagline:
    "Compress a photo to under 40KB for application forms — a sharp, natural-looking face at an exact limit, and a safe choice for \"20–50 KB\" photo fields. Free, in your browser, nothing uploaded.",
  category: { id: "optimize", label: "Optimize" },

  intro:
    "40KB is a photo limit in its own right on many application forms, and it is also the sensible number to aim for when a form asks for a photo \"between 20 KB and 50 KB\": comfortably above the minimum and comfortably below the maximum. At this size a passport-style photo keeps natural skin tones and clear detail around the eyes. Add your photo and you get a JPG under 40KB at the highest quality that fits.",

  sections: [
    {
      heading: "A safe target inside a 20–50 KB range",
      id: "inside-range",
      body: [
        "Aiming right at the top of a range is risky: a file of 49.9KB on one computer can be counted as 51KB by a form that measures differently. 40KB leaves room on both sides, so the photo is accepted however the form counts, while still carrying twice the detail of a 20KB file.",
        "If a form gives the range and a file of yours is already somewhere inside it, there is no need to compress it again — only files outside the range need changing.",
      ],
    },
    {
      heading: "What a 40KB photo keeps",
      id: "detail",
      body: [
        "A head-and-shoulders photo of about 400 × 500 pixels fits in 40KB at good quality: enough for eyelashes and individual strands of hair to stay distinct, and plenty for the photo to print sharply on an ID card or admit card.",
        "Crop to the head and shoulders before compressing, so the budget is spent on the face rather than on the room behind it.",
      ],
    },
    {
      heading: "Using a printed passport photo",
      id: "printed-photo",
      body: [
        "If you only have a printed studio photo, lay it flat in daylight and photograph it from directly above with the phone held parallel to it. Tilt the print slightly away from the window if you see a glare, and fill the frame with the photo.",
        "Crop off the white border and the table before compressing. A clean copy of a print compresses well, because studio photos already have even lighting and a plain background.",
      ],
    },
    {
      heading: "Natural colours",
      id: "colours",
      body: [
        "Indoor lamps turn skin orange and some phone cameras push faces towards blue or green. Forms that check photos sometimes reject a strong colour cast, and compression cannot fix it. Take the photo in daylight near a window, with the overhead lights off, and the colours come out natural.",
      ],
    },
    {
      heading: "One photo for several forms",
      id: "several-forms",
      body: [
        "Most people need the same passport-style photo for more than one application, and each form sets its own limit. Keep the original photo — the full-size file from your phone or studio — in a safe folder, and make every upload version from it: 40KB for this form, 20KB or 100KB for the next.",
        "Compressing an already compressed copy again loses a little more detail each time, so a photo that has been squeezed to 20KB and then needs to be 40KB will never look as good as one made from the original. Name each version by its size, such as photo_40kb.jpg, so you upload the right file to the right form.",
      ],
    },
  ],

  howToTitle: "How to compress a photo to 40KB",
  steps: [
    { title: "Add your photo", description: "Crop it to head and shoulders and add it — JPG, PNG or WEBP." },
    { title: "Compress to under 40KB", description: "The 40KB limit is already set; change it if your form needs a different number." },
    { title: "Download", description: "Download the JPG and attach it to your application." },
  ],

  features: [
    { icon: "face", title: "Natural, sharp faces", description: "About 400 × 500 pixels at good quality — skin tones and fine detail kept." },
    { icon: "verified_user", title: "Safe inside ranges", description: "40KB passes 20–50KB photo fields with margin on both sides." },
    { icon: "lock", title: "Nothing uploaded", description: "Your photo is compressed in your browser and stays on your device." },
  ],

  faqs: [
    { q: "How do I compress a photo to 40KB?", a: "Add it here and press Compress — the 40KB limit is already set. You get a JPG under 40KB at the highest quality that fits." },
    { q: "My form says 20 to 50 KB — is 40KB right?", a: "Yes. 40KB sits safely inside the range, whichever way the form counts kilobytes." },
    { q: "How many pixels is a 40KB photo?", a: "Usually about 400 × 500 pixels for a head-and-shoulders photo. Larger photos are reduced automatically until they fit." },
    { q: "How do I turn a printed passport photo into a file?", a: "Photograph it flat in daylight from directly above, avoiding glare, crop off the border and compress it here." },
    { q: "Why does my photo look orange or blue?", a: "Indoor light and some phone settings tint the photo. Take it again in daylight; compression keeps colours as they are and cannot correct them." },
    { q: "Will a 40KB photo print well on an ID card?", a: "Yes. ID cards and admit cards print the photo small, and 40KB is more than enough detail for that." },
    { q: "Is 40KB the same as 0.04MB?", a: "Yes, 40KB is 40,000 bytes. The file also passes forms that count 1KB as 1,024 bytes." },
    { q: "Should I keep the original photo after compressing?", a: "Yes. Make every size you need from the original, not from a compressed copy — each extra round of compression loses a little detail." },
  ],

  security:
    "Photos are compressed on your device, in your browser. Nothing is uploaded or stored anywhere.",
};

export default content;

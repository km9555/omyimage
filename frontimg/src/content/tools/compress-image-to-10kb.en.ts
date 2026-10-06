import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /compress-image-to-10kb (variant of compress-image,
 * preset targetKb 10). Demand (2026-10-04): India "compress image to 10kb"
 * 4.4K. Angle: the tightest limit there is — signature and thumb-impression
 * fields — and what has to be thrown away to get there. The 20KB page owns
 * "10KB to 20KB" ranges; this one is about getting UNDER 10KB.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-10kb",
  locale: "en",
  name: "Compress Image to 10KB",
  tagline:
    "Get a signature, thumb impression or small photo under 10KB — the tightest limit online forms use. The tool trims quality and size step by step until the file fits, in your browser, without uploading it.",
  category: { id: "optimize", label: "Optimize" },

  intro:
    "10KB is the smallest file size online forms ask for, and it shows up where the image itself is small: the signature box on an exam or recruitment form, a thumb impression, the photo field on an older registration system. A phone photo is three to five hundred times bigger than that, so getting under 10KB is less about clever compression and more about keeping only what the form needs. Add your image here and you get a JPG under 10KB — the clearest version of it that fits.",

  sections: [
    {
      heading: "How small 10KB really is",
      id: "how-small",
      body: [
        "10KB is 10,000 bytes. A clean signature in black ink on white paper, cropped close and about 300 × 120 pixels, fits comfortably. A head-and-shoulders photo fits too, but only at roughly 200 × 250 pixels — about the size it is printed on an admit card, and not much more.",
        "The tool first searches for the highest JPG quality that comes in under 10KB. When even the lowest sensible quality is too big, it reduces the pixel dimensions in small steps and searches again, so you always get a file under the limit rather than an error.",
      ],
    },
    {
      heading: "Prepare the image before it is squeezed",
      id: "prepare",
      body: [
        "Every pixel you do not need costs bytes you cannot spare. Crop the signature so the ink nearly touches the edges, and crop a photo to head and shoulders. For a signature, convert it to black and white first with the Grayscale Image tool: colour noise from paper and lighting takes up space without adding anything.",
        "Sign with a dark pen on plain white paper, and photograph it in daylight from directly above. A clean, high-contrast original compresses far better than a grey, shadowed one, and the result stays readable.",
      ],
    },
    {
      heading: "Thumb impressions",
      id: "thumb",
      body: [
        "Press your thumb on a stamp pad, then once firmly on white paper — rolling it slightly shows more of the print. Photograph it close up in good light so the ridges are sharp, and crop it to the print itself before compressing.",
        "After compressing, zoom in to 100%: the ridge lines should still be visible. If they have blurred into a dark blob, check whether the field really means 10KB; thumb impressions are often allowed more space than signatures, and a bigger budget keeps the detail.",
      ],
    },
    {
      heading: "When the result looks too rough",
      id: "rough",
      body: [
        "Blocky edges around letters mean the file had to be compressed very hard. Crop tighter, increase the contrast, or start again from a better original. A file that is just under the limit at a decent quality looks far better than a large image crushed to fit.",
        "Also check the form's other rules. Many fields give pixel dimensions as well as a size; resize to those dimensions first with the Resize Image tool, then compress, so the form gets exactly what it asks for.",
      ],
    },
  ],

  howToTitle: "How to compress an image to 10KB",
  steps: [
    { title: "Crop and add the image", description: "Crop the signature or photo close, then add it — JPG, PNG or WEBP." },
    { title: "Compress to under 10KB", description: "The 10KB limit is already set. Quality and size are reduced only as far as needed." },
    { title: "Check and download", description: "Zoom in to make sure it is readable, then download the JPG." },
  ],

  features: [
    { icon: "draw", title: "Made for signatures", description: "Small black-and-white images like signatures and thumb impressions stay readable under 10KB." },
    { icon: "crop", title: "Shrinks only when needed", description: "Quality is tried first; the dimensions come down only if the file still does not fit." },
    { icon: "lock", title: "Stays on your device", description: "Your signature is compressed in your browser and never uploaded anywhere." },
  ],

  faqs: [
    { q: "How do I compress a signature to 10KB?", a: "Crop it close, add it here and press Compress — the 10KB limit is already set. Converting it to black and white first gives the cleanest result." },
    { q: "Can a photo really fit in 10KB?", a: "Yes, at about passport-print size: roughly 200 × 250 pixels. That is enough for the small photo boxes on admit cards and ID forms, but not for anything larger." },
    { q: "How do I photograph a thumb impression for an online form?", a: "Make the print on white paper with a stamp pad, photograph it close up in daylight, crop to the print and compress. Check at 100% zoom that the ridges are still visible." },
    { q: "Why is my 10KB signature blurry?", a: "Usually the original had too much around it, or grey paper and shadows. Crop tighter, convert to black and white and compress again from the original." },
    { q: "Should the file be JPG or PNG for a 10KB limit?", a: "JPG. It is what almost every form accepts, and this tool's size limit always produces a JPG (or WEBP if you choose it)." },
    { q: "What if my file is already under 10KB?", a: "If it is already a JPG under the limit, you get it back unchanged — there is no point compressing it again." },
    { q: "Is 10KB the same as 0.01MB?", a: "Yes. 10KB is 10,000 bytes, which is 0.01MB. The tool counts 1KB as 1,000 bytes, so the file is also under the limit for forms that count 1,024." },
  ],

  security:
    "Signatures, thumb impressions and photos are compressed on your device, in your browser. Nothing is uploaded or stored anywhere.",
};

export default content;

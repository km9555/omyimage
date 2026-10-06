import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /convert-to-webp. The page <title> and meta description
 * stay in lib/tools.ts (seoTitle/seoDescription).
 */
const content: ToolPageContent = {
  toolId: "convert-to-webp",
  locale: "en",
  name: "Convert to WEBP",
  tagline:
    "Convert JPG, PNG, GIF and BMP images to WEBP online — smaller files for faster pages, with quality control and batch conversion. Free and private in your browser.",
  category: { id: "convert", label: "Convert" },

  intro:
    "WEBP is the image format built for the web: the same picture in fewer bytes, with transparency when you need it. oMyImage's Convert to WEBP tool turns JPG, PNG, GIF and BMP files into WEBP in your browser — a single image or a whole folder of product photos, blog images or screenshots at once — with a quality slider to decide the balance between size and detail. Pages built from the results load faster on every connection.",

  sections: [
    {
      heading: "Why sites switch their images to WEBP",
      id: "why",
      body: [
        "Images are usually the heaviest part of a web page, and the main image is often what decides how quickly the page appears to load. Serving WEBP instead of JPG or PNG cuts those bytes without the visible blockiness you would get from simply lowering JPG quality, because the WEBP encoder is a generation newer and predicts each block from its neighbours.",
        "Every current browser displays WEBP — Chrome, Edge, Firefox, Opera, and Safari since 2020 — so a site can use it for practically all visitors. Many platforms, CDNs and page-speed audits recommend it for exactly that reason, and a smaller page also costs your visitors less mobile data.",
      ],
    },
    {
      heading: "How much smaller it gets",
      id: "smaller",
      body: [
        "For photographs, a WEBP at the same apparent quality typically lands 25–35% smaller than the JPG it came from. The gain is much larger from PNG: a photo or a screenshot saved as PNG often shrinks by 70–90%, because PNG is lossless and WEBP at a high quality setting is not.",
        "The result depends on the picture. Busy, detailed photos shrink the least; flat graphics, screenshots and images with large plain areas shrink the most. The tool shows the size of every converted file next to the original, so you can see exactly what you gained before uploading anything.",
      ],
    },
    {
      heading: "Choosing a quality",
      id: "quality",
      body: [
        "The slider runs from 50% to 100% and starts at 92%, which keeps photos visually identical to the source. For images on a website, 75–85% is the common choice: the difference is very hard to see at normal viewing size and the files are clearly smaller. Go back up for hero images, product zoom photos and anything people will look at closely.",
        "Below about 70%, smooth areas such as skies and skin start to look waxy rather than blocky — WEBP fails more gracefully than JPG, but it still fails. Convert one representative image first, compare it to the original at full size, then run the batch with the setting you settled on.",
      ],
    },
    {
      heading: "Transparency and animation",
      id: "transparency",
      body: [
        "WEBP supports a full alpha channel, so transparent PNG logos, icons and product cut-outs stay transparent after conversion, edges included — no background colour is painted in. That makes WEBP a direct replacement for transparent PNGs on a website, usually at a fraction of the size.",
        "An animated GIF converts to its first frame only. WEBP can hold animation, but this tool produces still images; keep the GIF, or use a dedicated animation tool, when the movement matters.",
      ],
    },
    {
      heading: "Where WEBP is the wrong choice",
      id: "where-not",
      body: [
        "WEBP is a format for serving images, not for archiving or exchanging them. Print shops, older desktop software, some email programs and many official upload forms still expect JPG or PNG, and a WEBP sent to them is likely to bounce back. Keep your originals, and convert copies for the web.",
        "Converting is also one-way in quality: a WEBP made at 80% has discarded detail that converting back to PNG or JPG will not restore. When you need a different format later, start again from the original file.",
      ],
    },
    {
      heading: "Metadata and browser support",
      id: "metadata",
      body: [
        "Camera data — EXIF, capture date and GPS location — is not carried into the WEBP files made here, which suits images published on the web, where location data is a privacy risk anyway. If you need the metadata, keep it in the originals.",
        "The conversion uses your browser's own WEBP encoder. Chrome, Edge, Firefox and Opera all include one; Safari can display WEBP but cannot save it from a web page, so on Safari the tool tells you to switch browsers instead of handing you a mislabelled file.",
      ],
    },
  ],

  howToTitle: "How to convert an image to WEBP",
  steps: [
    { title: "Upload", description: "Select one or many JPG, PNG, GIF or BMP images, or drag and drop them in." },
    { title: "Set the quality", description: "Keep 92% for near-identical images, or choose 75–85% for smaller website images." },
    { title: "Convert & download", description: "Click Convert — one WEBP downloads directly, several download together as a ZIP." },
  ],

  features: [
    { icon: "speed", title: "Lighter web pages", description: "WEBP files are smaller than the JPG and PNG they replace, so pages load faster." },
    { icon: "tune", title: "Quality control", description: "Pick a quality from 50% to 100% and see the new size of every file." },
    { icon: "opacity", title: "Transparency kept", description: "Transparent PNG logos and icons stay transparent in WEBP, soft edges included." },
  ],

  faqs: [
    { q: "Which formats can I convert to WEBP?", a: "JPG, PNG, GIF and BMP. GIFs are converted using their first frame." },
    { q: "How much smaller is WEBP than JPG?", a: "Usually 25–35% smaller at the same visual quality for photos. From PNG the saving is much larger, often 70–90%." },
    { q: "What quality should I use for a website?", a: "75–85% suits most website images. Use the default 92% or higher for hero images and product photos people will zoom into." },
    { q: "Does WEBP keep transparency?", a: "Yes. Transparent and semi-transparent areas of PNG, GIF or BMP images stay transparent in the WEBP." },
    { q: "Do all browsers show WEBP?", a: "Yes — every current browser, including Safari since 2020. Older desktop software and some upload forms may still not open it." },
    { q: "Why does it not work in Safari?", a: "Safari can display WEBP but cannot create it from a web page. Use Chrome, Edge, Firefox or Opera to convert; the files then work in Safari as normal." },
    { q: "Is my EXIF data kept?", a: "No. The WEBP files made here carry no camera data or GPS location, which is usually what you want for images published online." },
    { q: "Can I convert a whole folder at once?", a: "Yes. Add as many images as you like; they are converted one after another and downloaded together as a ZIP." },
    { q: "Can I convert WEBP back to JPG or PNG?", a: "Yes, with the WEBP to JPG and WEBP to PNG tools. Detail removed by compression does not come back, so convert from the original when you have it." },
    { q: "Are my images uploaded?", a: "Normally not — conversion runs in your browser. Only an image too large for your browser to handle is sent to our server, converted there and deleted straight away." },
  ],

  security:
    "Your images are converted to WEBP in your browser. Only an image too large for the browser — over 100 MB or beyond its canvas limit — is processed on our server, and it is deleted right after conversion. Nothing is kept and no files are tracked.",
};

export default content;

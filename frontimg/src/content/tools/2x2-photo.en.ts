import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /2x2-photo (variant of passport-photo-maker, 2 × 2 in).
 * US "2x2 photo" 2.4K/mo; also India's visa / OCI photo size. Shipped in en
 * and /hi only.
 */
const content: ToolPageContent = {
  toolId: "2x2-photo",
  locale: "en",
  name: "2x2 Photo Maker",
  tagline:
    "Make a 2 × 2 inch photo for a US passport or visa — or an Indian visa or OCI card — at home: automatic face framing, a white background, 300 DPI, and a 4×6 print sheet. Free and private in your browser.",
  category: { id: "edit", label: "Edit & Create" },

  intro:
    "The 2 × 2 inch photo is the size the United States uses for passports and visas, and the size India asks for on visa and OCI applications. Its rules are specific: a square photo, the head between 1 and 1⅜ inches from chin to the top of the hair, and a plain white or off-white background. This page opens the photo maker on 2 × 2 inches and frames the face to those proportions automatically, so you can make the photo at home and print it on a 4×6 sheet at any photo counter.",

  sections: [
    {
      heading: "The 2x2 photo rules in numbers",
      id: "rules",
      body: [
        "The photo is 2 × 2 inches (51 × 51 mm), which is 600 × 600 pixels at 300 DPI. The head, measured from the bottom of the chin to the top of the hair, should be 1 to 1⅜ inches — 50% to 69% of the photo's height — and the eyes should sit roughly in the middle band of the photo. The tool aims for about 60% and centres the face; the Head size slider moves it within the range.",
        "The background must be plain white or off-white with no shadows or patterns. Glasses are not allowed in US passport photos, and the photo must be taken within the last six months.",
      ],
    },
    {
      heading: "Getting a white background",
      id: "background",
      body: [
        "If the photo was taken against a white or very light wall with even lighting, it may already pass. If the wall is coloured, patterned or shadowed, choose Change colour under Background and keep white selected: the person is cut out once on our server and placed on clean white, which also removes shadows behind the head.",
      ],
    },
    {
      heading: "Online applications versus printed photos",
      id: "digital",
      body: [
        "Online US passport renewals and visa applications upload a digital photo rather than mailing a print. They generally accept a square JPG of at least 600 × 600 pixels within a file-size limit — use the Max file size box if the form gives one. For a paper application, download the 4×6 in print sheet and print it at 100% size, then cut out two photos along the grey lines.",
      ],
    },
  ],

  howToTitle: "How to make a 2x2 photo",
  steps: [
    { title: "Upload a portrait", description: "A clear, front-facing photo, ideally against a light wall." },
    { title: "Check head size and background", description: "The face is framed to 2 × 2 in automatically; switch the background to white if needed." },
    { title: "Download or print", description: "Save the 600 × 600 px photo, or a 4×6 in sheet with two or more copies." },
  ],

  features: [
    { icon: "badge", title: "US passport proportions", description: "Head height and centring aimed at the 1–1⅜ inch rule, on a square 2 × 2 in photo." },
    { icon: "grid_view", title: "4×6 print sheet", description: "Copies laid out on standard 4×6 photo paper with cut lines, at 300 DPI." },
    { icon: "lock", title: "Private", description: "Your photo is framed in your browser; only an optional background change uses our server." },
  ],

  faqs: [
    { q: "How do I make a 2x2 photo at home?", a: "Take a front-facing photo against a light wall, upload it here — the 2 × 2 inch size is already selected — check the framing and download the photo or a 4×6 sheet to print." },
    { q: "How many pixels is a 2x2 photo?", a: "600 × 600 pixels at 300 DPI, which prints at exactly 2 × 2 inches. Online applications usually accept that size or larger." },
    { q: "How big should my head be in a 2x2 photo?", a: "Between 1 and 1⅜ inches from chin to the top of the hair. The tool aims for the middle of that range; use the Head size slider if your framing needs adjusting." },
    { q: "Can I print 2x2 photos at a store?", a: "Yes. Download the 4×6 in sheet and order a normal 4×6 print — it is usually the cheapest print size — then cut along the grey lines." },
    { q: "Does India use 2x2 photos?", a: "For visas and OCI cards, yes. Indian passports use 35 × 45 mm instead, which you can select in the size list." },
    { q: "Can I wear glasses?", a: "Not in US passport photos — they have been banned since 2016 except for documented medical reasons. Other documents may allow them; check the instructions." },
    { q: "Is my photo uploaded?", a: "No, unless you change the background. Framing and printing run in your browser; a background change sends the photo once to our server, and the result is deleted within an hour." },
  ],

  security:
    "Framing, resizing and print sheets run entirely in your browser. Only an optional background change sends the photo once, encrypted, to our background-removal engine, where the result is auto-deleted within an hour.",
};

export default content;

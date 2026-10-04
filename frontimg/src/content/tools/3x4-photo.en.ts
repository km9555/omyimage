import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /3x4-photo (variant of passport-photo-maker, 3 × 4 cm).
 * The demand is Portuguese and Indonesian ("foto 3x4" 90.5K in Brazil at
 * KD 0, 33.1K in Indonesia); the English page serves those markets' English
 * searchers and the many other countries that use 3 × 4 cm.
 */
const content: ToolPageContent = {
  toolId: "3x4-photo",
  locale: "en",
  name: "3x4 Photo Maker",
  tagline:
    "Make a 3 × 4 cm document photo at home: the face is framed automatically, the background can be white or any colour, and you get a 300-DPI photo plus a print sheet of copies. Free, in your browser.",
  category: { id: "edit", label: "Edit & Create" },

  intro:
    "3 × 4 cm is the standard document photo size in Brazil, Indonesia and a number of other countries — for ID cards, school and university enrolment, job applications, work permits and membership cards. This page opens the photo maker on that size. Upload a front-facing photo, and the face is detected and framed to 3 × 4 cm with the right amount of space above the head; adjust it if you like, switch the background, and download a single photo or a sheet of copies to print.",

  sections: [
    {
      heading: "Where 3 × 4 cm photos are used",
      id: "where",
      body: [
        "In Brazil the 3x4 is the everyday document photo: ID and student cards, enrolment forms, job files, gym and club memberships. In Indonesia the pas foto 3x4 goes on school and university registrations, job applications and civil-service files, usually on a red or blue background. Russia and several Eastern European countries use 3 × 4 cm for internal documents, and many employers worldwide ask for a 3 × 4 photo for staff files.",
        "Check the instructions for your document: the size is 3 × 4 cm almost everywhere, but the background colour and whether glasses or headwear are allowed vary.",
      ],
    },
    {
      heading: "3 × 4 cm in pixels",
      id: "pixels",
      body: [
        "At 300 DPI — what photo printers expect — 3 × 4 cm is 354 × 472 pixels, and that is what the tool saves, with the DPI written into the file so it prints at exactly 3 × 4 cm. For an online form you can also set a maximum file size; the printed size stays right even if the file has to be made smaller.",
      ],
    },
    {
      heading: "Red, blue or white background",
      id: "background",
      body: [
        "A photo taken against a plain light wall can be used as it is for most Brazilian documents, which usually want white or a light background. Indonesian registrations often ask for red or blue instead. Under Background, choose Change colour: the person is cut out once on our server, and you can then switch between white, blue, red or any colour instantly.",
      ],
    },
    {
      heading: "Printing a sheet of 3x4 photos",
      id: "printing",
      body: [
        "Download the 4×6 in sheet and print it at a photo counter or on a home photo printer at 100% size — a 4×6 in print holds several 3 × 4 cm photos with lines to cut along. The A4 sheet holds many more if you print on ordinary photo paper at home.",
      ],
    },
  ],

  howToTitle: "How to make a 3x4 photo",
  steps: [
    { title: "Upload a portrait", description: "Choose a clear, front-facing photo against a plain wall." },
    { title: "Check the framing", description: "The face is framed to 3 × 4 cm automatically; adjust size and position if needed." },
    { title: "Download or print", description: "Save the single photo, or a 4×6 in or A4 sheet of 3x4 copies." },
  ],

  features: [
    { icon: "badge", title: "Framed to 3 × 4 cm", description: "The head is sized and centred automatically, with room above it as document rules ask." },
    { icon: "grid_view", title: "Sheet of copies", description: "A 4×6 in or A4 print sheet with cut lines, ready for any photo printer." },
    { icon: "lock", title: "Stays in your browser", description: "Framing and printing never upload your photo; only a background change uses our server." },
  ],

  faqs: [
    { q: "How do I make a 3x4 photo online?", a: "Upload a front-facing photo — the 3 × 4 cm size is already selected — check the automatic framing and download the photo or a print sheet." },
    { q: "What size in pixels is a 3x4 photo?", a: "354 × 472 pixels at 300 DPI, which prints at exactly 3 × 4 cm. The tool saves the DPI into the file too." },
    { q: "Can I make a 3x4 photo with a red or blue background?", a: "Yes. Choose Change colour under Background and pick red, blue or any colour. The cut-out is made once on our server; switching colours afterwards is instant." },
    { q: "How many 3x4 photos fit on a 4×6 sheet?", a: "The tool fills a 4×6 in sheet with as many 3 × 4 cm photos as fit with cutting gaps and shows the number before you download." },
    { q: "Can I take the photo with my phone?", a: "Yes, but have someone else take it from about 1.5 m away in daylight, facing a plain wall. A selfie at arm's length distorts the face." },
    { q: "Is 3x4 the same as 3.5 × 4.5?", a: "No. 3 × 4 cm is a smaller, slightly narrower photo used for many national documents; 3.5 × 4.5 cm is the international passport size. Choose the one your document asks for — both are in the size list." },
    { q: "Is my photo uploaded?", a: "Not for framing, resizing or printing — that all happens in your browser. Only the optional background change sends the photo to our server, and the result is deleted within an hour." },
  ],

  security:
    "Framing, resizing and print sheets run entirely in your browser. Only an optional background change sends the photo once, encrypted, to our background-removal engine, where the result is auto-deleted within an hour.",
};

export default content;

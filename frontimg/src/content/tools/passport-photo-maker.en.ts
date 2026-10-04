import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /passport-photo-maker (new tool, 2026-10-04). Demand, India:
 * "passport size photo" 550K/mo, "passport size photo maker" 301K (KD 40),
 * "passport photo maker" 74K, "passport size photo size in cm" 40.5K (KD 0),
 * "passport size photo maker online free" 33.1K. Framing, sizing and print
 * sheets run in the browser (MediaPipe face detection); only the optional
 * background change uses the server, and the copy says so.
 */
const content: ToolPageContent = {
  toolId: "passport-photo-maker",
  locale: "en",
  name: "Passport Size Photo Maker",
  tagline:
    "Make passport, visa and ID photos at home: the face is framed automatically to the size you need — 35 × 45 mm, 2 × 2 in, 3 × 4 cm and more — and you get a 300-DPI photo plus a print sheet of copies. Free, and private in your browser.",
  category: { id: "edit", label: "Edit & Create" },
  variantsHeading: "Passport and ID photo sizes",

  intro:
    "A passport size photo is mostly a matter of geometry: the right paper size, the head at the right height, the right amount of space above it. This tool does that geometry for you. Upload a clear front-facing photo, choose the document size, and it finds the face, frames head and shoulders to the proportions passport rules use, and renders a print-ready JPG at 300 DPI. You can fine-tune the framing, switch the background to plain white or another colour, keep the file under a KB limit for online forms, and download a 4×6 inch or A4 sheet with as many copies as fit.",

  sections: [
    {
      heading: "Passport photo sizes by country",
      id: "sizes",
      body: [
        "India, the UK, the EU and Schengen countries, Russia and Australia use 35 × 45 mm (3.5 × 4.5 cm) for passport photos, with the head filling roughly two-thirds to three-quarters of the photo's height. The United States uses 2 × 2 inches (51 × 51 mm) for passports and visas, and India uses the same 2 × 2 inch size for visas and OCI cards. Brazil and Indonesia use 3 × 4 cm for most documents; Indonesia also uses 2 × 3 and 4 × 6 cm. Canada's passport photo is 50 × 70 mm and China's visa photo 33 × 48 mm.",
        "Rules change and differ between a passport, a visa and an exam form, so treat this list as a starting point and check the current instructions for your document. The tool's sizes cover all of the above; choose the one your form names.",
      ],
    },
    {
      heading: "How the automatic framing works",
      id: "framing",
      body: [
        "A face-detection model finds the face in your photo — on your device, without uploading it. From the face's position the tool estimates the full head, from the top of the hair to the chin, and scales the frame so the head fills the share of the photo height that passport rules ask for, centred left to right with a little more space above the head than at the sides.",
        "Hair styles, hats and unusual angles can throw the estimate off slightly, so check the preview. The Head size slider makes the head larger or smaller, and the position sliders move the frame; Reset framing returns to the automatic result.",
      ],
    },
    {
      heading: "Taking a photo that passes",
      id: "taking",
      body: [
        "Stand about a metre from a plain, light wall, facing the camera straight on, with even light on your face — daylight from a window in front of you works well, harsh overhead light does not. Keep a neutral expression with your mouth closed and both eyes open, and take off glasses if the rules for your document require it (many now do).",
        "Have someone else take the photo from about 1.5 metres away rather than using a selfie at arm's length, which distorts the face. Take several and pick the sharpest: framing can be fixed here, focus cannot.",
      ],
    },
    {
      heading: "Printing at the right size",
      id: "printing",
      body: [
        "The photo is saved at 300 DPI, the resolution print shops and photo printers expect, so it prints at exactly the document size — a 35 × 45 mm photo is 413 × 531 pixels. The print sheet places as many copies as fit on 4 × 6 inch photo paper or on A4, with thin grey lines to cut along.",
        "Print the sheet at 100% (\"actual size\"), not \"fit to page\", or the photos will come out slightly too small. A 4 × 6 inch print is the cheapest option at most photo counters and holds several 35 × 45 mm photos.",
      ],
    },
    {
      heading: "Photos for online applications",
      id: "online",
      body: [
        "Online forms for exams, recruitment, visas and ID cards usually want a JPG under a file size limit — often 50 KB, 100 KB or 200 KB. Type the limit into Max file size and the downloaded photo is kept under it; the printed size stays correct even if pixels have to be reduced, because the DPI label is adjusted to match.",
      ],
    },
  ],

  howToTitle: "How to make a passport size photo",
  steps: [
    { title: "Upload a portrait", description: "Choose a clear, front-facing photo — a JPG, PNG or WEBP." },
    { title: "Choose the size", description: "Pick your document's size; the face is framed automatically and you can fine-tune it." },
    { title: "Download photo or sheet", description: "Save the single 300-DPI photo, or a 4×6 in or A4 sheet of copies to print." },
  ],

  features: [
    { icon: "badge", title: "Automatic framing", description: "Face detection sizes and centres the head the way passport rules ask, in every common document size." },
    { icon: "grid_view", title: "Print sheets", description: "As many copies as fit on 4×6 in photo paper or A4, with cut lines, at 300 DPI." },
    { icon: "lock", title: "Private by default", description: "Framing and printing happen in your browser; only an optional background change uses our server." },
  ],

  faqs: [
    { q: "What is the passport size photo size in cm?", a: "3.5 × 4.5 cm (35 × 45 mm) in India, the UK, the EU and many other countries. The US uses 2 × 2 inches (5.1 × 5.1 cm), and Brazil and Indonesia use 3 × 4 cm for most documents." },
    { q: "How many pixels is a passport size photo?", a: "At the usual 300 DPI print resolution, 35 × 45 mm is 413 × 531 pixels and 2 × 2 inches is 600 × 600 pixels. The tool saves exactly these sizes." },
    { q: "Can I change the background to white?", a: "Yes. Choose Change colour under Background; the person is cut out and placed on white or any colour you pick. This step uses one AI run on our server." },
    { q: "How do I print several passport photos on one sheet?", a: "Download the 4×6 in or A4 print sheet and print it at 100% size. A 4×6 in sheet holds several 35 × 45 mm photos, with grey lines to cut along." },
    { q: "Can I make a passport photo under 50 KB for an online form?", a: "Yes. Enter 50 in Max file size before downloading; the photo is kept under 50 KB while its printed size stays correct." },
    { q: "Will my photo be accepted?", a: "The tool gets the size and framing right. Lighting, expression, glasses, head position and how recent the photo is are rules you need to meet when taking it — check your document's instructions." },
    { q: "Is my photo uploaded?", a: "No — face detection, framing and printing all run in your browser. Only if you change the background is the photo sent to our server, where the cut-out is deleted automatically within an hour." },
    { q: "Can I use a selfie?", a: "Better not. A phone at arm's length distorts the face, and most rules ask for a photo taken from about 1.5 m away. Ask someone to take it, or use a timer and a stand." },
  ],

  security:
    "Face detection, framing, resizing and print sheets run entirely in your browser — the photo never leaves your device. If you choose to change the background, the photo is sent once over an encrypted connection to our background-removal engine (rembg), and the result is auto-deleted within an hour.",
};

export default content;

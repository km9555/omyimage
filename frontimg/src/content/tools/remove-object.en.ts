import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /remove-object. Demand 2026-10-04: India "remove object
 * from photo" 60.5K + "object remover" 49.5K; US 12.1K. Facts written to:
 * MI-GAN (Picsart AI Research, ICCV 2023), trained on Places2 scenery, run in
 * the browser by ONNX Runtime Web; 27 MB model; about a second per removal.
 */
const content: ToolPageContent = {
  toolId: "remove-object",
  locale: "en",
  name: "Remove Object",
  tagline:
    "Paint over anything you don't want in a photo — a stranger in the background, a bin, a power line, a spot — and AI fills the space in to match. Free, and it runs entirely in your browser.",
  category: { id: "ai", label: "Image AI" },

  intro:
    "Remove Object erases things from photos the way a retoucher would: you mark what should go, and an AI model paints in what could plausibly have been behind it, matching the colours, light and texture around the hole. oMyImage runs that model — MI-GAN, from Picsart AI Research — inside your browser, so your photo is never uploaded and there is no daily limit. Brush over a tourist, draw a box around a sign, remove one thing at a time or several at once, undo anything, and download the cleaned photo at its original size.",

  sections: [
    {
      heading: "How to mark what goes",
      id: "marking",
      body: [
        "The Brush paints a pink mark over the picture; make it cover the whole object, with a little margin. Include the object's shadow and any reflection, or they will stay behind as a ghost. The Box tool marks a rectangle in one drag — quick for signs, cars and anything square. The Eraser takes back a mark you painted too far.",
        "Marks don't have to be neat. The tool grows them by a few pixels before filling, so the soft edge around an object is covered too. What matters is that nothing of the object sticks out beyond the mark.",
      ],
    },
    {
      heading: "What it removes well",
      id: "good-at",
      body: [
        "Things standing in front of a fairly even background come out best: people and cars in front of buildings, litter on grass or sand, wires and poles against the sky, a stain on a wall, a pimple on skin, a crumb on a tablecloth. The model was trained on photographs of places, so skies, water, foliage, walls, floors and roads are what it reconstructs most convincingly.",
        "It is harder when the hidden area held something the model cannot guess — half of a face, a line of text, the pattern of a carpet that continues behind the object. It will fill the gap with something smooth and believable, not with what was really there.",
      ],
    },
    {
      heading: "Big objects: work in passes",
      id: "passes",
      body: [
        "The model fills each area at up to 512 pixels across and scales the result to fit, so a very large hole comes back softer than the photo around it. For a big object, remove it in two or three pieces, starting at its edges: each pass gives the next one real surroundings to copy from. Several small objects marked at once are each filled on their own, so they keep full detail.",
        "If a fill looks wrong, press Undo, change the mark — larger, or leaving out a part of the background that confused it — and try again. Each attempt takes about a second.",
      ],
    },
    {
      heading: "Undo, redo and compare",
      id: "history",
      body: [
        "Every removal can be undone and redone, with the buttons or with Ctrl+Z and Ctrl+Shift+Z. Start over brings back the original photo. Hold the \"Hold to see the original\" button to flip between before and after — the easiest way to spot a fill that doesn't quite match.",
      ],
    },
    {
      heading: "AI that runs on your device",
      id: "on-device",
      body: [
        "Most object removers upload your photo to a server. Here the model itself comes to you: the first time you open the tool it downloads about 27 MB of model data from our own site — a progress bar shows how far it has got — and your browser keeps it, so later visits start straight away. After that, removing an object happens on your computer or phone, in about a second on a laptop and a few seconds on a phone, even with no connection.",
        "Because nothing is sent anywhere, it is safe for personal photos, ID documents and client work.",
      ],
    },
    {
      heading: "Quality and file formats",
      id: "quality",
      body: [
        "The photo is edited at its full size — up to 16.7 megapixels; anything larger, like a 48 MP phone shot, is scaled down to that first, and the page says so. Only the marked areas change: every other pixel is saved exactly as it was. Choose the original format or JPG, PNG or WEBP. PNG keeps transparency; JPG fills transparent areas with white.",
      ],
    },
    {
      heading: "Ideas",
      id: "ideas",
      body: [
        "Clear tourists out of a travel photo. Take a stray cable, a parked car or a bin out of a property listing. Remove a price sticker from a product photo, a date stamp from a scanned print or a dust spot from a scan. Delete an ex from a group photo, a photobomber from a wedding picture, or an object from a background before you use it as a wallpaper.",
        "To cut out a whole subject and drop the background instead, use Remove Background. For text and logos laid over a picture, Remove Watermark opens with the box tool ready.",
      ],
    },
    {
      heading: "Privacy",
      id: "privacy",
      body: [
        "Your photo is edited entirely in your browser by a model running on your device. Nothing is uploaded, and nothing is kept after you close the page.",
      ],
    },
  ],

  howToTitle: "How to remove an object from a photo",
  steps: [
    { title: "Add your photo", description: "Choose a JPG, PNG or WEBP image." },
    { title: "Mark the object", description: "Paint over it with the brush, or drag a box around it — shadow included." },
    { title: "Remove and download", description: "Click Remove object, check the result, then Download image." },
  ],

  features: [
    { icon: "ink_eraser", title: "Brush, box and eraser", description: "Mark objects exactly, then undo or redo every removal." },
    { icon: "smart_toy", title: "AI fill in about a second", description: "MI-GAN rebuilds the background to match its surroundings." },
    { icon: "lock", title: "Never uploaded", description: "The AI runs in your browser, on your device." },
  ],

  faqs: [
    { q: "How do I remove an object from a photo?", a: "Add the photo, paint over the object with the brush, and click Remove object. Then download the result." },
    { q: "Is it really free?", a: "Yes. There is no account, no watermark and no daily limit, because the AI runs on your own device." },
    { q: "Is my photo uploaded?", a: "No. The AI model downloads to your browser and the photo never leaves your device." },
    { q: "Why does the first removal take longer?", a: "The first time, your browser downloads the 27 MB AI model. It keeps it, so later visits start immediately." },
    { q: "Can I remove people from a photo?", a: "Yes. Paint over the person and their shadow; it works best when they stand in front of a fairly plain background." },
    { q: "Can I remove several objects at once?", a: "Yes. Mark them all, then click Remove object once — each one is filled separately." },
    { q: "The result looks blurry — what can I do?", a: "Undo and remove a large object in smaller pieces, starting from its edges. Small areas keep full detail." },
    { q: "Can I undo a removal?", a: "Yes — Undo, Redo and Start over, or Ctrl+Z and Ctrl+Shift+Z." },
    { q: "Does it reduce the photo's quality?", a: "No. Only the marked areas change, and the photo keeps its size up to 16.7 megapixels." },
    { q: "Does it work offline?", a: "Once the model has loaded, yes: removing objects needs no connection." },
    { q: "Does it work on a phone?", a: "Yes. Paint with your finger; each removal takes a few seconds on a phone." },
    { q: "Which formats are supported?", a: "JPG, PNG and WEBP in, and the same format or any of the three out." },
    { q: "Can it remove the whole background?", a: "Use Remove Background for that — it cuts out the subject and makes the background transparent." },
  ],

  security:
    "Your photo is edited entirely in your browser by a model running on your device. Nothing is uploaded, stored or tracked.",
};

export default content;

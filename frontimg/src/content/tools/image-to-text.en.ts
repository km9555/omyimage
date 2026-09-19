import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /image-to-text. Structure lives in ToolPageShell; the page
 * <title> and meta description stay in lib/tools.ts (seoTitle/seoDescription).
 */
const content: ToolPageContent = {
  toolId: "image-to-text",
  locale: "en",
  name: "Image to Text",
  category: { id: "convert", label: "Convert" },

  intro:
    "Pull the words out of a screenshot, a scanned page or a photograph of a document and get editable text back. Recognition runs inside your browser using a WebAssembly build of the Tesseract engine, so the image never leaves your device — which matters when the thing you are reading is a receipt, a contract or an ID.",

  sections: [
    {
      heading: "What image-to-text can and cannot do",
      id: "accuracy",
      body: [
        "Optical character recognition works by locating shapes on a page and matching them against a trained model of what letters look like. On clean, high-contrast, straight material — a screenshot, a PDF page exported as an image, a flatbed scan of a printed document — it is very accurate, and you will usually be correcting punctuation rather than words.",
        "It degrades on exactly the things that make a photograph interesting. Angled shots, uneven lighting, shadows falling across the page, low resolution, busy backgrounds behind the text and heavy JPG compression all reduce accuracy, sometimes sharply. Handwriting is a different problem altogether and this engine is not trained for it; expect poor results from anything cursive.",
        "The practical takeaway is that the input matters far more than any setting. If you can retake the photo square-on with the page evenly lit and filling the frame, that single change will do more for the result than anything else available here.",
      ],
    },
    {
      heading: "Getting the best results",
      id: "tips",
      body: [
        "Shoot or scan straight on rather than at an angle, so the lines of text run horizontally across the image. Skew is the single most common cause of garbled output.",
        "Aim for text that is at least 20 pixels tall. If the writing is small in the frame, crop tightly to the text block before extracting — a tighter crop of the same photo often recognises far better than the full image.",
        "Choose the correct language before extracting. An English model reading Spanish will silently produce plausible-looking nonsense around every accented character, and the same applies in reverse.",
        "For a document photographed under a desk lamp, converting it to grayscale first and raising the contrast can help the recogniser separate ink from paper.",
      ],
    },
    {
      heading: "Why the first run takes longer",
      id: "model",
      body: [
        "The recognition engine and its language model are several megabytes, and they are downloaded the first time you extract text rather than bundled into the page. That keeps the rest of the site fast for people who never use this tool, at the cost of a one-off wait here.",
        "Your browser caches both afterwards, so the second and subsequent extractions start almost immediately. Switching to a different language downloads that language's model once, then caches it too.",
      ],
    },
  ],

  howToTitle: "How to extract text from an image",
  steps: [
    {
      title: "Add your image",
      description: "Drop in a photo, screenshot or scan — JPG, PNG, WEBP and BMP all work. The file stays on your device.",
    },
    {
      title: "Pick the language",
      description: "Choose the language the text is written in. This has more effect on accuracy than any other setting.",
    },
    {
      title: "Extract and copy",
      description: "Press Extract text. Edit anything the recogniser got wrong, then copy it or save it as a .txt file.",
    },
  ],

  features: [
    {
      icon: "lock",
      title: "Your image is never uploaded",
      description:
        "Recognition runs inside your browser tab using WebAssembly, so documents, receipts and ID photos never reach a server.",
    },
    {
      icon: "translate",
      title: "13 languages",
      description:
        "English, Spanish, French, German, Italian, Portuguese, Dutch, Russian, Arabic, Hindi, Chinese, Japanese and Korean.",
    },
    {
      icon: "edit_note",
      title: "Editable before you save",
      description:
        "The result lands in a text box you can correct. No OCR is perfect, so fixing a stray character is part of the job.",
    },
  ],

  faqs: [
    {
      q: "Is my image uploaded to a server?",
      a: "No. Recognition runs entirely in your browser using a WebAssembly build of the Tesseract engine, so the image itself never leaves your device. The only thing downloaded from the network is the recognition model, which contains no data about your file.",
    },
    {
      q: "How accurate is image to text?",
      a: "On clean printed material — screenshots, scans, exported document pages — accuracy is typically very high. It falls off with angled photographs, poor lighting, low resolution and small text. The output is editable precisely because no OCR is perfect.",
    },
    {
      q: "Can it read handwriting?",
      a: "Not reliably. The engine is trained on printed type, and cursive in particular produces poor results. Neat block capitals sometimes work; anything joined-up generally does not.",
    },
    {
      q: "Which languages are supported?",
      a: "Thirteen: English, Spanish, French, German, Italian, Portuguese, Dutch, Russian, Arabic, Hindi, Simplified Chinese, Japanese and Korean. Select the one matching your text before extracting — using the wrong model badly degrades accuracy.",
    },
    {
      q: "Why is the first extraction slow?",
      a: "The engine and language model download on first use rather than being bundled into the page, so people who never use this tool are not made to pay for it. Your browser caches them, and later runs start straight away.",
    },
    {
      q: "Does it keep the original layout?",
      a: "Only loosely. You get the text with its line breaks, not a reconstruction of columns, tables or styling. For a table you will usually need to tidy the result by hand.",
    },
    {
      q: "Can I extract text from a PDF?",
      a: "Not directly — this tool takes images. Export or screenshot the PDF page as a PNG or JPG first, then run it through here.",
    },
    {
      q: "Is it free?",
      a: "Yes, with no account, no watermark and no cap on how many images you process. Since the work happens on your own device there is no server cost to pass on.",
    },
  ],

  security:
    "Your image is processed on your own device. The recognition engine runs as WebAssembly inside the page, so nothing is uploaded, stored or logged. The one network request is for the recognition model itself, which is a generic language file and carries no information about your image.",

  rating: { value: "4.8", count: "726" },
};

export default content;

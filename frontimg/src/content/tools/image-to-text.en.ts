import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /image-to-text. Structure lives in ToolPageShell; the page
 * <title> and meta description stay in lib/tools.ts (seoTitle/seoDescription).
 *
 * ACCURACY NOTE — the tool is server-first: runOcrImage() (lib/process-router)
 * uploads the image to /api/image/ocr (PaddleOCR) and the file is deleted after
 * reading; only if the server is unreachable does it fall back to Tesseract.js
 * in the browser. Every privacy claim below must stay consistent with that
 * (LICENSE-AUDIT.md F4/F5).
 */
const content: ToolPageContent = {
  toolId: "image-to-text",
  locale: "en",
  name: "Image to Text",
  category: { id: "convert", label: "Convert" },

  intro:
    "Pull the words out of a screenshot, a scanned page or a photograph of a document and get editable text back. Recognition runs on our server with a high-accuracy OCR model: the image is sent over an encrypted connection and deleted as soon as it has been read. If the server can't be reached, the page reads the image on your own device instead, so the tool works either way — and it tells you when that happened.",

  sections: [
    {
      heading: "What image-to-text can and cannot do",
      id: "accuracy",
      body: [
        "Optical character recognition works by locating shapes on a page and matching them against a trained model of what letters look like. On clean, high-contrast, straight material — a screenshot, a PDF page exported as an image, a flatbed scan of a printed document — it is very accurate, and you will usually be correcting punctuation rather than words.",
        "It degrades on exactly the things that make a photograph interesting. Angled shots, uneven lighting, shadows falling across the page, low resolution, busy backgrounds behind the text and heavy JPG compression all reduce accuracy, sometimes sharply. Handwriting is a different problem altogether and the recogniser is trained on printed type; expect poor results from anything cursive.",
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
      heading: "Where the reading happens, and why a run can take longer",
      id: "model",
      body: [
        "The main reading runs on our server, which uses a larger and more accurate recognition model than would fit comfortably in a browser tab. Your image travels over an encrypted HTTPS connection, is read, and the file is deleted straight afterwards. It is not kept, indexed or used to train models. The first request for a language the server has not used recently can take a little longer while that language's model loads; after that, results come back quickly.",
        "If the server is unreachable or unavailable, the page falls back to the Tesseract engine running as WebAssembly inside your browser, and in that case the image never leaves your device. The engine and the language model are several megabytes and download the first time this fallback is needed; your browser caches both, so later fallback runs start almost immediately. The result is marked \"read on your device\" whenever this happens, and it is usually a little less accurate on small or dense text.",
      ],
    },
  ],

  howToTitle: "How to extract text from an image",
  steps: [
    {
      title: "Add your image",
      description: "Drop in a photo, screenshot or scan — JPG, PNG, WEBP and BMP all work.",
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
      title: "Deleted right after reading",
      description:
        "Your image is sent over an encrypted connection, read on our server and deleted straight away. Nothing is stored or used to train models.",
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
      a: "Yes, for the main reading. The image is sent over an encrypted HTTPS connection to our server, where the text is recognised, and the file is deleted as soon as it has been read — it is not stored, shared or used for training. If the server is unavailable, recognition runs in your own browser instead and the image does not leave your device; the tool labels the result \"read on your device\" when that happens.",
    },
    {
      q: "How accurate is image to text?",
      a: "On clean printed material — screenshots, scans, exported document pages — accuracy is typically very high. It falls off with angled photographs, poor lighting, low resolution and small text. The output is editable precisely because no OCR is perfect.",
    },
    {
      q: "Can it read handwriting?",
      a: "Not reliably. The recogniser is trained on printed type, and cursive in particular produces poor results. Neat block capitals sometimes work; anything joined-up generally does not.",
    },
    {
      q: "Which languages are supported?",
      a: "Thirteen: English, Spanish, French, German, Italian, Portuguese, Dutch, Russian, Arabic, Hindi, Simplified Chinese, Japanese and Korean. Select the one matching your text before extracting — using the wrong model badly degrades accuracy.",
    },
    {
      q: "Why is an extraction sometimes slow?",
      a: "On the server, the first request for a language that has not been used recently waits while its model loads; later requests are much faster. If the tool falls back to your device, the engine and language model download on first use rather than being bundled into the page, so people who never use this tool are not made to pay for it. Your browser caches them, and later runs start straight away.",
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
      a: "Yes, with no account, no watermark and no cap on how many images you process.",
    },
  ],

  security:
    "The main reading happens on our server: your image is uploaded over an encrypted HTTPS connection, the text is recognised, and the file is deleted straight after it has been read. It is not stored, indexed or used to train models. If the server can't be reached, recognition runs as WebAssembly inside the page instead and the image is not uploaded at all; the only network request in that case is for the generic recognition model, which carries no information about your image.",
};

export default content;

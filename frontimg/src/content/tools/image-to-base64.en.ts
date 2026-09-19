import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /image-to-base64. Structure lives in ToolPageShell; the page
 * <title> and meta description stay in lib/tools.ts (seoTitle/seoDescription).
 */
const content: ToolPageContent = {
  toolId: "image-to-base64",
  locale: "en",
  name: "Image to Base64",
  tagline:
    "Convert an image to a Base64 string or data URI online — with raw, CSS and HTML output and one-tap copy. Free, fast and 100% private in your browser.",
  category: { id: "convert", label: "Convert" },

  intro:
    "Inline your images directly into code. oMyImage's Image to Base64 tool encodes any image into a Base64 data URI right in your browser, and gives you the raw string, a CSS background rule and a ready-made <img> tag too. Perfect for embedding small icons and logos without an extra HTTP request. Nothing is uploaded, so your image stays private.",

  sections: [
    {
      heading: "What Base64 encoding is for",
      id: "what",
      body: [
        "Base64 rewrites binary data using only a restricted set of text characters. It exists because a great many systems were built to carry text and behave unpredictably when handed raw bytes — email bodies, JSON payloads, XML documents, HTML attributes, URL parameters and many configuration formats among them.",
        "Encoding an image to Base64 lets you put the picture itself inside one of those text-only channels. Wrapped as a data URI, with the MIME type declared at the front, it can go directly into an img tag's src attribute or a CSS background-image rule, and the browser reconstructs the original bytes.",
        "The cost is size. Four characters carry three bytes, so the text form is roughly a third larger than the file, and there is no compression to recover that.",
      ],
    },
    {
      heading: "When inlining helps and when it hurts",
      id: "tradeoffs",
      body: [
        "The benefit is one fewer network request. For a very small asset the round trip can cost more time than the bytes do, so inlining genuinely makes a page render sooner. Around 5 KB is the usual rule of thumb.",
        "Above that, inlining tends to be a net loss for reasons that are easy to overlook. An inlined image cannot be cached separately, so it is re-downloaded with the HTML on every visit, whereas a normal image file is fetched once and reused. It also cannot be lazy-loaded, and it inflates the document itself, which delays parsing and first paint.",
        "The practical guidance: inline icons, tiny logos and placeholders. Serve photographs normally.",
      ],
    },
    {
      heading: "The email problem",
      id: "email",
      body: [
        "Embedding images as data URIs in HTML email looks like an elegant way to avoid hosting anything, and it fails often enough to be a poor default. Outlook on Windows in particular has long refused to render them, and several other clients strip or block them as a security measure.",
        "The reliable approaches are hosting the image and linking to it, or attaching it and referencing it with a CID reference — the mechanism email clients were actually designed around. Base64 in email is worth using only when you control every recipient's client.",
      ],
    },
    {
      heading: "Encoding is not encryption",
      id: "security",
      body: [
        "Base64 is sometimes mistaken for a form of obfuscation or protection. It is neither. Any browser console, any text editor with a decoder, any of a thousand websites will turn the string back into the original image in a second. There is no key and no secret.",
        "This matters when the image itself is sensitive. Base64-encoding a document, an ID or a private photograph and pasting it into a config file, a ticket or a shared document is exactly as exposed as attaching the image would be, and often less obviously so — the string looks like gibberish, which encourages people to treat it as safe.",
        "The encoding here happens in your browser, so the image is never uploaded. What you do with the resulting string is where the actual privacy question lies.",
      ],
    },
  ],

  howToTitle: "How to convert an image to Base64",
  steps: [
    { title: "Upload", description: "Select an image, or drag and drop it into the workspace." },
    { title: "Choose the format", description: "Switch between a data URI, raw Base64, a CSS background rule or an <img> tag." },
    { title: "Copy or download", description: "Copy the string to your clipboard or download it as a .txt file." },
  ],

  features: [
    { icon: "data_object", title: "Four output formats", description: "Get a ready-to-use data URI, the raw Base64, a CSS background-image rule, or a complete <img> tag." },
    { icon: "bolt", title: "Instant encoding", description: "Encoding happens the moment you drop the file — no waiting, no upload." },
    { icon: "lock", title: "100% private", description: "Your image is encoded in your browser and never sent to a server." },
  ],

  faqs: [
    { q: "What is a Base64 data URI?", a: "It's a text representation of your image you can embed directly in HTML or CSS, avoiding a separate file request." },
    { q: "Why is the string larger than my file?", a: "Base64 encoding adds about 33% overhead, so it's best suited to small images like icons and logos." },
    { q: "Which formats are supported?", a: "JPG, PNG, WEBP, GIF, BMP, SVG and AVIF." },
    { q: "Is it free and private?", a: "Yes. No sign-up, and the image is encoded locally in your browser — nothing is uploaded." },
    { q: "Why is the Base64 string bigger than the file?", a: "Because Base64 represents three bytes of binary using four text characters, so the encoded form is about 33% larger, plus a little for the data-URI prefix. That overhead is the price of being able to put binary data somewhere only text is allowed." },
    { q: "When should I actually use a data URI?", a: "For small assets — icons, a logo in an email signature, a placeholder, a texture in a single-file HTML page. Below roughly 5 KB the saved HTTP request usually outweighs the size penalty. Above that, a normal image file served separately is faster." },
    { q: "Why do my inline images not show in email?", a: "Because several major email clients block or ignore data URIs, Outlook on Windows being the persistent offender. For email, host the image and link to it, or use a proper CID attachment — inline Base64 is unreliable in that context." },
    { q: "Does Base64 encryption protect my image?", a: "No, and this is a common misunderstanding. Base64 is an encoding, not encryption — it is trivially reversible by anyone, with no key involved. It makes binary data safe to transport as text; it provides no confidentiality whatsoever." },
    { q: "Can I use Base64 in CSS?", a: "Yes, as a background-image URL, and it is a reasonable way to inline a small icon or pattern. Be aware that a data URI in a stylesheet is downloaded by every visitor whether or not that rule ever matches, and it cannot be cached separately from the CSS." },
    { q: "What formats can I encode?", a: "JPG, PNG, WEBP, GIF, BMP, SVG and AVIF. The output is a complete data URI including the correct MIME type, so you can paste it straight into an img tag or a stylesheet." },
  ],

  security:
    "Your image stays private. Base64 encoding happens entirely in your browser — nothing is uploaded to a server. No storage, no tracking of your files.",

  rating: { value: "4.8", count: "298" },
};

export default content;

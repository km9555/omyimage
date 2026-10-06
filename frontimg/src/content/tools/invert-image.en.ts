import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /invert-image. The page <title> and meta description stay in
 * lib/tools.ts (seoTitle/seoDescription).
 */
const content: ToolPageContent = {
  toolId: "invert-image",
  locale: "en",
  name: "Invert Image",
  tagline:
    "Invert the colours of any photo — a classic negative, or a smart invert that swaps light and dark but keeps the colours. Many images at once. Free, in your browser.",
  category: { id: "edit", label: "Edit" },

  intro:
    "Inverting an image turns every colour into its opposite: black becomes white, blue becomes orange, and a photo looks like a film negative. oMyImage's Invert Image does that in one click for JPG, PNG and WEBP files, and adds a second mode most tools lack — Smart invert, which swaps light and dark while keeping each colour's hue, the way a phone's dark mode does. Add one image or a whole batch, watch the live preview, hold the button to compare with the original, and download.",

  sections: [
    {
      heading: "Negative or smart invert",
      id: "modes",
      body: [
        "Negative flips every colour channel: each value becomes 255 minus itself. Whites turn black, reds turn cyan, greens turn magenta, and skin tones go blue-grey — the look of a film negative or an X-ray. Inverting the result again gives back the original exactly.",
        "Smart invert flips only the lightness. Dark areas become light and light areas dark, but a red stays red and a blue stays blue. That makes it the right choice for turning a white screenshot or document into a dark version without the colours going strange, and for a moody, night-time take on a photo.",
      ],
    },
    {
      heading: "What it is useful for",
      id: "uses",
      body: [
        "Make a dark-mode version of a screenshot, diagram or slide so it sits comfortably on a dark website or presentation. Flip a black-background image to white before printing it, to save ink and toner. Turn a scanned black-and-white negative back into a positive photo. Create striking art, posters and profile pictures with an inverted look.",
        "Designers also invert images to check a composition: once the familiar colours are gone, balance and contrast problems are easier to see.",
      ],
    },
    {
      heading: "Scanned film negatives",
      id: "negatives",
      body: [
        "Black-and-white negatives invert cleanly into positives. Colour negatives are trickier: the film has an orange base, so a straight inversion comes out with a strong blue cast. Invert first, then use Brightness & Contrast to lift the image and lower the saturation, or convert it with Grayscale if colour does not matter.",
      ],
    },
    {
      heading: "Transparency and formats",
      id: "formats",
      body: [
        "Only the colours are inverted; transparency stays exactly as it was, so a logo on a transparent background remains a logo on a transparent background. PNG and WEBP keep that transparency; JPG has none, so transparent areas are filled with the background colour you choose.",
        "The output keeps the original format unless you pick another. PNG stores the inverted pixels exactly; JPG and WEBP use the quality setting, which you can raise if fine detail matters.",
      ],
    },
    {
      heading: "Many images at once",
      id: "batch",
      body: [
        "Add as many images as you like. The preview shows the first one, and the same mode is applied to all of them when you click Invert colours. A single image downloads directly; several come as one ZIP file. Each file in the list also gets its own download button once it is done.",
      ],
    },
    {
      heading: "Inverting logos and icons",
      id: "logos",
      body: [
        "A dark logo that disappears on a dark website becomes a light one after inverting — as long as the logo is a single dark colour. Multicoloured logos change colour too, so Smart invert, which keeps the hues, often suits them better. Check the preview against the background the logo will sit on before downloading.",
      ],
    },
    {
      heading: "Privacy",
      id: "privacy",
      body: [
        "Every image is inverted entirely in your browser. Nothing is uploaded to a server, and nothing is kept after you close the page.",
      ],
    },
  ],

  howToTitle: "How to invert an image",
  steps: [
    { title: "Add images", description: "Select one or more JPG, PNG or WEBP images." },
    { title: "Choose the mode", description: "Negative for a true opposite, Smart invert to keep the colours' hues." },
    { title: "Invert and download", description: "Click Invert colours to download the image, or a ZIP for several." },
  ],

  features: [
    { icon: "dark_mode", title: "Two kinds of invert", description: "A full negative, or light and dark swapped with hues kept." },
    { icon: "visibility", title: "Live preview", description: "See the result instantly and hold to compare with the original." },
    { icon: "lock", title: "Nothing uploaded", description: "Inverted entirely in your browser." },
  ],

  faqs: [
    { q: "How do I invert the colours of an image?", a: "Add the image, keep Negative selected and click Invert colours. The inverted image downloads straight away." },
    { q: "What is the difference between Negative and Smart invert?", a: "Negative turns every colour into its opposite. Smart invert only swaps light and dark, so colours keep their hue." },
    { q: "Can I make a dark-mode screenshot?", a: "Yes. Smart invert turns a white screenshot dark while keeping coloured elements recognisable." },
    { q: "Does it keep transparency?", a: "Yes. Only the colours change; save as PNG or WEBP to keep the transparent areas." },
    { q: "Can I invert several images at once?", a: "Yes. Add them all; they download together as a ZIP file." },
    { q: "Can I get the original back?", a: "Inverting a Negative again restores it. For a perfect round trip, save as PNG." },
    { q: "Can I turn a film negative into a photo?", a: "Yes for black-and-white negatives. Colour negatives need a little colour correction afterwards." },
    { q: "Which formats work?", a: "JPG, PNG and WEBP in; the same format out, or one you choose." },
    { q: "Is my image uploaded?", a: "No. Everything happens in your browser." },
    { q: "Does it work on a phone?", a: "Yes, in any mobile browser." },
    { q: "Does it reduce quality?", a: "PNG is exact. JPG and WEBP are re-saved at the quality you choose." },
    { q: "Is it free?", a: "Yes. No account, no watermark and no limit." },
  ],

  security:
    "Your images are inverted entirely in your browser. Nothing is uploaded, stored or tracked.",
};

export default content;

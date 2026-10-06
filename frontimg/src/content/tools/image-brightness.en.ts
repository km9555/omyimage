import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /image-brightness. The page <title> and meta description
 * stay in lib/tools.ts (seoTitle/seoDescription).
 */
const content: ToolPageContent = {
  toolId: "image-brightness",
  locale: "en",
  name: "Brightness & Contrast",
  tagline:
    "Brighten a dark photo, add punch with contrast and make colours livelier or calmer with saturation — with a live preview and a quick before-and-after. Free, in your browser.",
  category: { id: "edit", label: "Edit" },

  intro:
    "Most photos that look disappointing are not out of focus — they are a little too dark, too flat or too grey. Three sliders fix most of that. oMyImage's Brightness & Contrast adjusts brightness, contrast and saturation on JPG, PNG and WEBP images, shows the change live as you drag, and lets you hold a button to see the original again. Apply the same settings to a whole batch, so a set of product shots or holiday photos comes out consistent.",

  sections: [
    {
      heading: "The three sliders",
      id: "sliders",
      body: [
        "Brightness lifts or lowers every tone by the same amount: move it right to rescue an underexposed photo, left to calm one that is too bright. Contrast pushes tones apart from the middle grey — dark parts darker, light parts lighter — which gives a flat, hazy image depth; moving it left softens a harsh one.",
        "Saturation controls how vivid the colours are. Raise it for food, flowers and landscapes; lower it for a muted, film-like look. At −100 the image is fully black and white. Reset puts all three back to zero.",
      ],
    },
    {
      heading: "Fixing common problems",
      id: "fixes",
      body: [
        "A dark indoor photo: brightness +20 to +40, contrast +10 so it does not look washed out. A grey, hazy landscape: contrast +20 to +30, saturation +15. A phone photo of a document for a form: brightness +15 and contrast +40 make the paper white and the text dark and legible. A harsh midday photo: contrast −15 and saturation −10.",
        "Small steps work best. Large brightness values push light areas to pure white, and that detail cannot be brought back — keep an eye on skies and white clothing in the preview.",
      ],
    },
    {
      heading: "Before and after",
      id: "compare",
      body: [
        "Press and hold Hold to see the original under the preview to show the untouched image; let go to see your adjustments again. Comparing often is the easiest way to avoid overdoing it, because eyes adapt quickly to a brighter or more colourful picture.",
      ],
    },
    {
      heading: "Consistent batches",
      id: "batch",
      body: [
        "Add a whole set of images and the same settings are applied to each, so photos taken under the same light come out matching — useful for product listings, property photos and albums. The preview uses the first image; every file in the list gets its own download button, and several download together as a ZIP.",
      ],
    },
    {
      heading: "Formats and quality",
      id: "formats",
      body: [
        "The result keeps the original format unless you pick another. PNG stores the adjusted pixels exactly; JPG and WEBP use the quality slider. Transparent areas stay transparent in PNG and WEBP. For black and white with finer control over the mix, use Grayscale; for a negative, use Invert Image.",
      ],
    },
    {
      heading: "Brightness for print and screens",
      id: "print",
      body: [
        "Photos look darker on paper than on a backlit screen, so images meant for printing often need a little extra brightness — +10 to +20 is common — and a touch more contrast. For screens, check the result on the device where it will be seen: phones are usually brighter than laptop displays, and a photo that looks right on one can look dull on the other.",
      ],
    },
    {
      heading: "Privacy",
      id: "privacy",
      body: [
        "Every image is adjusted entirely in your browser. Nothing is uploaded to a server, and nothing is kept after you close the page.",
      ],
    },
  ],

  howToTitle: "How to change the brightness of an image",
  steps: [
    { title: "Add images", description: "Select one or more JPG, PNG or WEBP images." },
    { title: "Adjust", description: "Move the brightness, contrast and saturation sliders; hold to compare." },
    { title: "Apply and download", description: "Click Apply adjustments to download the image, or a ZIP for several." },
  ],

  features: [
    { icon: "light_mode", title: "Three key sliders", description: "Brightness, contrast and saturation, from −100 to +100." },
    { icon: "visibility", title: "Before and after", description: "Live preview, and hold to see the original." },
    { icon: "lock", title: "Nothing uploaded", description: "Adjusted entirely in your browser." },
  ],

  faqs: [
    { q: "How do I make a photo brighter?", a: "Add it, move the Brightness slider to the right and click Apply adjustments." },
    { q: "What does contrast do?", a: "It pushes dark and light tones further apart, giving flat photos more depth." },
    { q: "What does saturation do?", a: "It makes colours more vivid or more muted; −100 turns the photo black and white." },
    { q: "How do I fix a dark photo?", a: "Raise brightness by 20 to 40 and add about 10 contrast so it doesn't look washed out." },
    { q: "Can I make a document photo clearer?", a: "Yes. A little more brightness and a lot more contrast make the page white and the text dark." },
    { q: "Can I compare with the original?", a: "Yes. Press and hold the button under the preview to see the original." },
    { q: "Can I adjust several photos at once?", a: "Yes. The same settings are applied to all of them, and they download as a ZIP." },
    { q: "Does it lose quality?", a: "PNG keeps every pixel. JPG and WEBP are re-saved at the quality you choose." },
    { q: "Is my image uploaded?", a: "No. Everything happens in your browser." },
    { q: "Does it work on a phone?", a: "Yes, in any mobile browser." },
    { q: "Can I undo the changes?", a: "Reset the sliders before downloading; after that, keep your original file." },
    { q: "Is it free?", a: "Yes. No account, no watermark and no limit." },
    { q: "Will the colours change when I raise brightness?", a: "They get lighter but keep their hue. Only the saturation slider makes them more or less vivid." },
  ],

  security:
    "Your images are adjusted entirely in your browser. Nothing is uploaded, stored or tracked.",
};

export default content;

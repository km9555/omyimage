/**
 * Hindi tool names + short descriptions, keyed by tool **id**, plus the four
 * category labels.
 *
 * Used everywhere a tool is LISTED: nav mega-menu, mobile drawer, apps menu,
 * footer, home grid, related-tools strip, dashboard cards and search results.
 * Falls back to English when an id is missing, so adding a tool never breaks
 * the Hindi build — it just shows English until translated.
 *
 * ── Register and terminology (pinned — see conversion.md §5) ───────────────
 * Formal **आप**, imperative **करें**. A description that is a full sentence
 * ends in the danda **।**; a fragment does not.
 *
 * **Two head terms per tool, distributed.** The Indian tool query is typed in
 * English or Hinglish, but the Hindi-script query is a problem statement. So
 * the NAME carries the loanword form a Hinglish searcher would recognise
 * ("इमेज कंप्रेस करें"), and the DESCRIPTION carries the native descriptive
 * form ("फोटो का साइज़ कम करें"). One card answers both query shapes.
 *
 * Pinned vocabulary: **फ़ाइल** (file), **इमेज** (the tool-page term),
 * **फोटो** (the everyday term — use it in descriptions), **साइज़** (size),
 * **डाउनलोड करें**, **हटाएँ** (remove), **घुमाएँ** (rotate), **बदलें**
 * (convert/change), **क्वालिटी**.
 *
 * Format and product names stay Latin: JPG, PNG, WEBP, HEIC, AVIF, GIF, BMP,
 * JFIF, PDF, HTML, Base64, EXIF, GPS, OCR, AI. Their Devanagari spellings live
 * in aliases.ts so the search box finds जेपीजी as well as JPG.
 */

export interface LocalizedTool {
  name: string;
  shortDescription: string;
}

export const hiTools: Record<string, LocalizedTool> = {
  // ── ऑप्टिमाइज़ ─────────────────────────────────────────────────────────
  "compress-image": {
    name: "इमेज कंप्रेस करें",
    shortDescription: "JPG, PNG और WEBP का साइज़ कम करें — क्वालिटी आप तय करें।",
  },
  "resize-image": {
    name: "इमेज रीसाइज़ करें",
    shortDescription: "पिक्सल या प्रतिशत में साइज़ बदलें, अनुपात वैसा ही रहेगा।",
  },
  "crop-image": {
    name: "इमेज क्रॉप करें",
    shortDescription: "किसी भी आकार या अनुपात में काटें, घुमाएँ, एक साथ कई फ़ाइलें।",
  },
  "rotate-image": {
    name: "इमेज घुमाएँ",
    shortDescription: "फोटो को 90°, 180°, 270° घुमाएँ या अपने आप सीधा करें।",
  },

  // ── कन्वर्ट ────────────────────────────────────────────────────────────
  "convert-to-jpg": {
    name: "JPG में बदलें",
    shortDescription: "PNG, WEBP, GIF और BMP → JPG.",
  },
  "png-to-jpg": {
    name: "PNG से JPG",
    shortDescription: "PNG इमेज को हल्की JPG फ़ाइल में बदलें।",
  },
  "jpg-to-png": {
    name: "JPG से PNG",
    shortDescription: "JPG को बिना क्वालिटी घटाए PNG में बदलें, पारदर्शिता के साथ।",
  },
  "webp-to-png": {
    name: "WEBP से PNG",
    shortDescription: "नए WEBP फ़ॉर्मैट की इमेज को PNG में बदलें।",
  },
  "heic-to-png": {
    name: "HEIC से PNG",
    shortDescription: "iPhone की HEIC फोटो को बिना क्वालिटी घटाए PNG में बदलें।",
  },
  "image-to-text": {
    name: "इमेज से टेक्स्ट निकालें",
    shortDescription: "OCR से फोटो और स्कैन में लिखा टेक्स्ट कॉपी करने लायक बनाएँ।",
  },
  "webp-to-jpg": {
    name: "WEBP से JPG",
    shortDescription: "WEBP को JPG में बदलें, जो हर जगह खुल जाती है।",
  },
  "jpg-to-webp": {
    name: "JPG से WEBP",
    shortDescription: "JPG फोटो को WEBP में बदलकर और हल्का करें।",
  },
  "png-to-webp": {
    name: "PNG से WEBP",
    shortDescription: "पारदर्शिता बनाए रखते हुए PNG को WEBP में बदलें।",
  },
  "jfif-to-jpg": {
    name: "JFIF से JPG",
    shortDescription: "डाउनलोड हुई .jfif फ़ाइलों को .jpg बनाएँ।",
  },
  "gif-to-png": {
    name: "GIF से PNG",
    shortDescription: "GIF को बिना क्वालिटी घटाए PNG इमेज में बदलें।",
  },
  "gif-to-jpg": {
    name: "GIF से JPG",
    shortDescription: "GIF के फ़्रेम को हल्की JPG इमेज में बदलें।",
  },
  "bmp-to-jpg": {
    name: "BMP से JPG",
    shortDescription: "बहुत भारी BMP फ़ाइलों को हल्की JPG में बदलें।",
  },
  "avif-to-jpg": {
    name: "AVIF से JPG",
    shortDescription: "AVIF को JPG में बदलकर हर डिवाइस पर खोलें।",
  },
  "avif-to-png": {
    name: "AVIF से PNG",
    shortDescription: "AVIF को बिना क्वालिटी घटाए PNG में बदलें, पारदर्शिता के साथ।",
  },
  "heic-to-jpg": {
    name: "HEIC से JPG",
    shortDescription: "iPhone की HEIC फोटो को JPG या PNG में बदलें।",
  },
  "image-to-pdf": {
    name: "इमेज से PDF",
    shortDescription: "कई JPG और PNG फोटो को एक ही PDF में जोड़ें।",
  },
  "image-to-base64": {
    name: "इमेज से Base64",
    shortDescription: "किसी इमेज को Base64 डेटा URI में बदलें।",
  },
  "base64-to-image": {
    name: "Base64 से इमेज",
    shortDescription: "Base64 टेक्स्ट को वापस इमेज में बदलें।",
  },
  "gif-to-images": {
    name: "GIF से इमेज",
    shortDescription: "GIF के हर फ़्रेम को अलग PNG या JPG के रूप में निकालें।",
  },

  // ── एडिट और क्रिएट ────────────────────────────────────────────────────
  "image-editor": {
    name: "पूरा फोटो एडिटर",
    shortDescription: "एक ही जगह क्रॉप करें, रंग ठीक करें, फ़िल्टर लगाएँ, ड्रॉ करें और लिखें।",
  },
  "watermark-image": {
    name: "फोटो पर वॉटरमार्क लगाएँ",
    shortDescription: "टेक्स्ट या लोगो का वॉटरमार्क लगाएँ, एक साथ कई फोटो पर।",
  },
  "meme-generator": {
    name: "मीम जनरेटर",
    shortDescription: "ऊपर-नीचे टेक्स्ट, तैयार टेम्पलेट, PNG या JPG में सेव करें।",
  },
  "html-to-image": {
    name: "HTML से इमेज",
    shortDescription: "किसी URL या HTML कोड को PNG या JPG में बदलें।",
  },
  "blur-face": {
    name: "चेहरा ब्लर करें",
    shortDescription: "प्राइवेसी के लिए चेहरे और नंबर प्लेट पहचानकर धुँधला करें।",
  },
  "grayscale-image": {
    name: "इमेज ब्लैक एंड व्हाइट करें",
    shortDescription: "फोटो को ब्लैक एंड व्हाइट बनाएँ, एक साथ कई फ़ाइलें।",
  },
  "blur-image": {
    name: "इमेज ब्लर करें",
    shortDescription: "पूरी इमेज पर हल्का धुँधलापन लगाएँ।",
  },
  "add-border": {
    name: "इमेज में बॉर्डर लगाएँ",
    shortDescription: "फोटो के चारों ओर रंगीन फ़्रेम या हाशिया जोड़ें।",
  },
  "circle-crop": {
    name: "इमेज को गोल क्रॉप करें",
    shortDescription: "प्रोफ़ाइल फोटो के लिए इमेज को गोल आकार में काटें।",
  },
  "merge-images": {
    name: "इमेज जोड़ें",
    shortDescription: "कई फोटो को अगल-बगल, ऊपर-नीचे या ग्रिड में जोड़ें।",
  },
  "image-color-picker": {
    name: "कलर पिकर और पैलेट",
    shortDescription: "इमेज से कोई भी रंग चुनें या पूरा कलर पैलेट निकालें।",
  },
  "image-metadata": {
    name: "इमेज का मेटाडेटा देखें",
    shortDescription: "किसी फोटो का EXIF, GPS और कैमरा डेटा देखें।",
  },
  "remove-exif": {
    name: "EXIF डेटा हटाएँ",
    shortDescription: "प्राइवेसी के लिए फोटो से EXIF, GPS और मेटाडेटा मिटाएँ।",
  },
  "gif-maker": {
    name: "GIF बनाएँ",
    shortDescription: "अपनी फोटो से चलता-फिरता GIF बनाएँ।",
  },

  // ── AI ─────────────────────────────────────────────────────────────────
  "remove-background": {
    name: "बैकग्राउंड हटाएँ",
    shortDescription: "AI से फोटो का बैकग्राउंड हटाकर पारदर्शी PNG पाएँ।",
  },
  "upscale-image": {
    name: "इमेज की क्वालिटी बढ़ाएँ",
    shortDescription: "AI से 2×, 3×, 4× बड़ा करें और धुँधली फोटो साफ़ करें।",
  },
};

/**
 * Category labels. `title` is the home-page section heading, `navLabel` the
 * short pill / breadcrumb label — same split as CATEGORIES in lib/tools.ts.
 */
export const hiCategories: Record<string, { title: string; navLabel: string }> = {
  optimize: { title: "ऑप्टिमाइज़ और कंप्रेस करें", navLabel: "ऑप्टिमाइज़" },
  convert: { title: "इमेज कन्वर्ट करें", navLabel: "कन्वर्ट" },
  edit: { title: "एडिट और क्रिएट", navLabel: "एडिट और क्रिएट" },
  ai: { title: "AI टूल", navLabel: "इमेज AI" },
};

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
    shortDescription: "फोटो को 90°, 180°, 270° या किसी भी कोण पर घुमाएँ और पलटें।",
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

  // ── वैरिएंट: तय साइज़ तक कंप्रेस (expansion.md) ──
  "reduce-image-size-in-kb": {
    name: "फोटो का साइज़ KB में कम करें",
    shortDescription: "किसी भी फोटो को अपनी ज़रूरत के KB या MB में लाएँ।",
  },
  "compress-image-to-20kb": {
    name: "इमेज 20 KB में कंप्रेस करें",
    shortDescription: "फ़ॉर्म के लिए 20 KB से कम की फोटो और सिग्नेचर।",
  },
  "compress-image-to-50kb": {
    name: "इमेज 50 KB में कंप्रेस करें",
    shortDescription: "परीक्षा फ़ॉर्म में फोटो की सबसे आम सीमा।",
  },
  "compress-image-to-100kb": {
    name: "इमेज 100 KB में कंप्रेस करें",
    shortDescription: "100 KB से कम में साफ़ फोटो और स्कैन।",
  },
  "compress-image-to-200kb": {
    name: "इमेज 200 KB में कंप्रेस करें",
    shortDescription: "200 KB से कम में साफ़ फोटो और दस्तावेज़।",
  },
  "compress-image-to-1mb": {
    name: "इमेज 1 MB में कंप्रेस करें",
    shortDescription: "मोबाइल फोटो 1 MB से कम, ज़्यादातर पूरे साइज़ में।",
  },
  "compress-image-to-10kb": {
    name: "इमेज 10 KB में कंप्रेस करें",
    shortDescription: "10 KB से कम में सिग्नेचर और अंगूठे का निशान।",
  },
  "compress-image-to-30kb": {
    name: "इमेज 30 KB में कंप्रेस करें",
    shortDescription: "30 KB से कम में फ़ॉर्म फोटो, चेहरा साफ़।",
  },
  "compress-image-to-300kb": {
    name: "इमेज 300 KB में कंप्रेस करें",
    shortDescription: "300 KB से कम में फोटो और स्कैन, पढ़ने लायक़ टेक्स्ट।",
  },
  "compress-image-to-500kb": {
    name: "इमेज 500 KB में कंप्रेस करें",
    shortDescription: "500 KB से कम में लगभग ओरिजिनल क्वालिटी।",
  },
  "compress-image-to-2mb": {
    name: "इमेज 2 MB में कंप्रेस करें",
    shortDescription: "बड़ी मोबाइल फोटो 2 MB से कम में।",
  },
  "compress-image-to-15kb": {
    name: "इमेज 15 KB में कंप्रेस करें",
    shortDescription: "15 KB से कम में सिग्नेचर और छोटी फोटो।",
  },
  "compress-image-to-40kb": {
    name: "इमेज 40 KB में कंप्रेस करें",
    shortDescription: "40 KB से कम में फ़ॉर्म फोटो, साफ़ चेहरा।",
  },
  "compress-image-to-150kb": {
    name: "इमेज 150 KB में कंप्रेस करें",
    shortDescription: "150 KB से कम में फोटो और हाथ से लिखे पेज।",
  },
  "increase-image-size-in-kb": {
    name: "इमेज का साइज़ KB में बढ़ाएँ",
    shortDescription: "फ़ॉर्म के लिए फोटो कम से कम 10, 20 या 50 KB करें।",
  },
  "signature-resizer": {
    name: "सिग्नेचर रीसाइज़र",
    shortDescription: "सिग्नेचर साफ़ करें, क्रॉप करें और 10–20 KB में लाएँ।",
  },
  "jpg-to-pdf-under-100kb": {
    name: "JPG से PDF, 100 KB से कम",
    shortDescription: "सख़्त फ़ॉर्म के लिए 100 KB से कम का एक पेज वाला PDF।",
  },
  "jpg-to-pdf-under-200kb": {
    name: "JPG से PDF, 200 KB से कम",
    shortDescription: "सर्टिफ़िकेट और स्कैन 200 KB से कम के एक PDF में।",
  },
  "jpg-to-pdf-under-300kb": {
    name: "JPG से PDF, 300 KB से कम",
    shortDescription: "कई पेज वाले दस्तावेज़ 300 KB से कम के PDF में।",
  },
  "jpg-to-pdf-under-500kb": {
    name: "JPG से PDF, 500 KB से कम",
    shortDescription: "लंबे दस्तावेज़ 500 KB से कम के एक PDF में।",
  },
  "convert-to-png": {
    name: "PNG में बदलें",
    shortDescription: "JPG, WEBP, GIF और BMP → PNG.",
  },
  "convert-to-webp": {
    name: "WEBP में बदलें",
    shortDescription: "JPG, PNG, GIF और BMP → WEBP.",
  },
  "svg-to-png": {
    name: "SVG से PNG",
    shortDescription: "SVG वेक्टर को किसी भी साइज़ में साफ़ PNG बनाएँ।",
  },
  "png-to-ico": {
    name: "PNG से ICO",
    shortDescription: "वेबसाइट के लिए favicon.ico और Windows आइकन बनाएँ।",
  },
  "youtube-thumbnail-resizer": {
    name: "YouTube थंबनेल रीसाइज़र",
    shortDescription: "किसी भी इमेज को 1280 × 720 YouTube थंबनेल बनाएँ।",
  },
  "whatsapp-dp-resizer": {
    name: "WhatsApp DP रीसाइज़र",
    shortDescription: "पूरी फोटो को बिना काटे चौकोर WhatsApp DP में फ़िट करें।",
  },
  "linkedin-banner-resizer": {
    name: "LinkedIn बैनर रीसाइज़र",
    shortDescription: "किसी भी इमेज को 1584 × 396 LinkedIn बैनर बनाएँ।",
  },
  "facebook-cover-resizer": {
    name: "Facebook कवर रीसाइज़र",
    shortDescription: "किसी भी इमेज को 851 × 315 Facebook कवर बनाएँ।",
  },
  "discord-banner-resizer": {
    name: "Discord बैनर रीसाइज़र",
    shortDescription: "Discord प्रोफ़ाइल और सर्वर बैनर के साइज़।",
  },
  "dpi-converter": {
    name: "DPI कन्वर्टर",
    shortDescription: "इमेज का DPI 300, 200 या किसी भी वैल्यू पर बदलें, बिना क्वालिटी खोए।",
  },
  "dpi-checker": {
    name: "DPI चेकर",
    shortDescription: "इमेज का DPI और प्रिंट साइज़ देखें।",
  },
  "resize-image-in-cm": {
    name: "इमेज को cm में रीसाइज़ करें",
    shortDescription: "इमेज को cm, mm या इंच में सटीक साइज़ में बदलें।",
  },
  "video-to-gif": {
    name: "वीडियो से GIF",
    shortDescription: "MP4, WEBM या MOV वीडियो के हिस्से को GIF बनाएँ।",
  },
  "gif-compressor": {
    name: "GIF कंप्रेसर",
    shortDescription: "एनिमेटेड GIF को बिना फ़्रेम खोए छोटा करें।",
  },
  "gif-resizer": {
    name: "GIF रीसाइज़र",
    shortDescription: "एनिमेटेड GIF का साइज़ बदलें, हर फ़्रेम के साथ।",
  },
  "gif-to-mp4": {
    name: "GIF से MP4",
    shortDescription: "GIF को हल्के MP4 वीडियो में बदलें।",
  },
  "webp-to-gif": {
    name: "WEBP से GIF",
    shortDescription: "एनिमेटेड WEBP को GIF में बदलें।",
  },
  "gif-cropper": {
    name: "GIF क्रॉपर",
    shortDescription: "एनिमेटेड GIF को क्रॉप करें, हर फ़्रेम के साथ।",
  },
  "rotate-gif": {
    name: "GIF घुमाएँ",
    shortDescription: "एनिमेटेड GIF को 90° या 180° घुमाएँ या पलटें।",
  },
  "reverse-gif": {
    name: "GIF उल्टा करें",
    shortDescription: "GIF को उल्टा या बूमरैंग की तरह चलाएँ।",
  },
  "gif-speed-changer": {
    name: "GIF स्पीड बदलें",
    shortDescription: "एनिमेटेड GIF को तेज़ या धीमा करें।",
  },
  "gif-cutter": {
    name: "GIF कटर",
    shortDescription: "GIF को काटें और सिर्फ़ ज़रूरी फ़्रेम रखें।",
  },
  "gif-to-webp": {
    name: "GIF से WEBP",
    shortDescription: "एनिमेटेड GIF को एनिमेटेड WEBP में बदलें।",
  },
  "gif-to-apng": {
    name: "GIF से APNG",
    shortDescription: "एनिमेटेड GIF को एनिमेटेड PNG (APNG) में बदलें।",
  },
  "gif-to-sprite-sheet": {
    name: "GIF से स्प्राइट शीट",
    shortDescription: "GIF के सभी फ़्रेम एक PNG स्प्राइट शीट पर रखें।",
  },
  "gif-merger": {
    name: "GIF मर्जर",
    shortDescription: "कई GIF को एक के बाद एक जोड़कर एक GIF बनाएँ।",
  },
  "add-text-to-gif": {
    name: "GIF पर टेक्स्ट लिखें",
    shortDescription: "एनिमेटेड GIF पर कैप्शन लगाएँ, हर फ़्रेम पर या कुछ पर।",
  },
  "typing-text-gif": {
    name: "टाइपिंग टेक्स्ट GIF",
    shortDescription: "ऐसी GIF बनाएँ जिसमें टेक्स्ट अक्षर-दर-अक्षर टाइप होता दिखे।",
  },
  "invert-image": {
    name: "इमेज के रंग उलटें",
    shortDescription: "फोटो के रंग उलटें — नेगेटिव या स्मार्ट इनवर्ट।",
  },
  "pixelate-image": {
    name: "इमेज पिक्सलेट करें",
    shortDescription: "फोटो को पिक्सल के ब्लॉक में बदलें।",
  },
  "image-brightness": {
    name: "ब्राइटनेस और कंट्रास्ट",
    shortDescription: "फोटो को हल्का या गहरा करें और कंट्रास्ट व रंग बदलें।",
  },
  "glitch-effect": {
    name: "ग्लिच इफ़ेक्ट",
    shortDescription: "फोटो को टूटी स्क्रीन जैसा ग्लिच लुक दें।",
  },
  "round-corners": {
    name: "राउंड कॉर्नर",
    shortDescription: "इमेज के कोने गोल करें, ट्रांसपेरेंट किनारों के साथ।",
  },
  "split-image": {
    name: "इमेज स्प्लिट करें",
    shortDescription: "इमेज को बराबर हिस्सों या टाइल्स में काटें।",
  },
  "image-overlay": {
    name: "इमेज ओवरले",
    shortDescription: "एक फोटो के ऊपर दूसरी लगाएँ — ओपेसिटी और ब्लेंड मोड के साथ।",
  },

  // ── वैरिएंट: HD, मिरर, बैकग्राउंड (expansion.md) ──
  "image-to-hd": {
    name: "इमेज को HD में बदलें",
    shortDescription: "छोटी या कम रेज़ोल्यूशन वाली फोटो को HD बनाएँ।",
  },
  "unblur-image": {
    name: "धुँधली फोटो साफ़ करें",
    shortDescription: "हल्की धुँधली फोटो को AI से साफ़ करें।",
  },
  "flip-image": {
    name: "इमेज फ़्लिप करें",
    shortDescription: "फोटो को दाएँ-बाएँ या ऊपर-नीचे मिरर करें।",
  },
  "change-background-color": {
    name: "बैकग्राउंड का रंग बदलें",
    shortDescription: "किसी भी फोटो के लिए सफ़ेद, नीला या लाल बैकग्राउंड।",
  },
  "blur-background": {
    name: "बैकग्राउंड ब्लर करें",
    shortDescription: "किसी व्यक्ति या चीज़ के पीछे पोर्ट्रेट जैसा ब्लर।",
  },
  "passport-photo-maker": {
    name: "पासपोर्ट साइज़ फोटो मेकर",
    shortDescription: "पासपोर्ट, वीज़ा और ID फोटो, प्रिंट शीट के साथ।",
  },
  "3x4-photo": {
    name: "3x4 फोटो मेकर",
    shortDescription: "3 × 4 cm डॉक्यूमेंट फोटो, फ्रेम की हुई और प्रिंट के लिए तैयार।",
  },
  "2x2-photo": {
    name: "2x2 फोटो मेकर",
    shortDescription: "US पासपोर्ट, वीज़ा और OCI के लिए 2 × 2 इंच फोटो।",
  },
  "instagram-grid-maker": {
    name: "Instagram ग्रिड मेकर",
    shortDescription: "एक फोटो से Instagram ग्रिड या कैरोसेल बनाएँ।",
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

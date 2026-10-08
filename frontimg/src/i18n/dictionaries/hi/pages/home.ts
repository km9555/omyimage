/**
 * Hindi home page — HomeShell, HomeLauncher and ToolDirectory, which render
 * only on `/hi`. Loaded with that route through HomeShell's <I18nScope>, so
 * this prose is not bundled on every page (common.ts is).
 *
 * The H1 keeps "oMyImage" verbatim (Google's OAuth review matches it against
 * the consent screen) and pairs it with the Indian head term instead of a
 * translation of the English brand line — see dictionaries/hi/site.ts.
 * "drive.file" is an OAuth scope identifier and is never translated.
 *
 * Both head-term shapes appear: the hero carries the loanword form (इमेज टूल,
 * कंप्रेस, रीसाइज़) and the "oMyImage से आप क्या कर सकते हैं" list carries the
 * everyday problem wording (फोटो का साइज़ कम करना, धुँधली फोटो साफ़ करना).
 */
export const hiHome: Record<string, string> = {
  // ── HomeLauncher (hero) ─────────────────────────────────────────────────
  "Free tools — most run right in your browser": "मुफ़्त टूल — ज़्यादातर आपके ब्राउज़र में ही चलते हैं",
  "Effortless Power for Image Workflows.": "मुफ़्त ऑनलाइन इमेज टूल।",
  "oMyImage is a free online image toolkit — compress, resize, crop, convert, watermark and edit photos.":
    "oMyImage मुफ़्त ऑनलाइन इमेज टूल का सेट है — फोटो कंप्रेस करें, रीसाइज़ करें, क्रॉप करें, फ़ॉर्मैट बदलें, वॉटरमार्क लगाएँ और एडिट करें।",
  "Step 1 · Upload your images": "चरण 1 · अपनी इमेज अपलोड करें",
  "Add images": "इमेज जोड़ें",
  "Drag & drop images or click to browse": "इमेज खींचकर यहाँ छोड़ें या चुनने के लिए क्लिक करें",
  "+ More": "+ और",
  "Remove {name}": "{name} हटाएँ",
  "Step 2 · Choose an action": "चरण 2 · क्या करना है चुनें",
  "Upload an image first": "पहले एक इमेज अपलोड करें",
  "Search an action, e.g. compress or resize": "कोई काम खोजें, जैसे कंप्रेस या रीसाइज़",
  "We can't process this file type yet.": "हम अभी इस तरह की फ़ाइल प्रोसेस नहीं कर सकते।",
  "No matching action.": "कोई मिलता-जुलता विकल्प नहीं मिला।",
  "Continue": "आगे बढ़ें",

  // ── ToolDirectory ───────────────────────────────────────────────────────
  "Private by default": "शुरू से ही प्राइवेट",
  "Most tools run in your browser, so your images never leave your device.":
    "ज़्यादातर टूल आपके ब्राउज़र में चलते हैं, इसलिए आपकी इमेज आपके डिवाइस से बाहर नहीं जातीं।",
  "{n} free image tools": "{n} मुफ़्त इमेज टूल",
  "Compress, resize, convert, edit and make GIFs. No account needed.":
    "कंप्रेस, रीसाइज़, फ़ॉर्मैट बदलना, एडिट और GIF बनाना। अकाउंट की ज़रूरत नहीं।",
  "Google Drive import is optional": "Google Drive से इंपोर्ट वैकल्पिक है",
  "oMyImage reads only the files you pick and stores nothing on our servers.":
    "oMyImage सिर्फ़ आपकी चुनी हुई फ़ाइलें पढ़ता है और हमारे सर्वर पर कुछ नहीं रखता।",
  "How we use Google data": "हम Google का डेटा कैसे इस्तेमाल करते हैं",
  "Favorites": "पसंदीदा",
  "No tools in {category} yet.": "{category} में अभी कोई टूल नहीं है।",
  "Browse all image format converters": "इमेज फ़ॉर्मैट बदलने के सभी टूल देखें",
  "All tools": "सभी टूल",
  "Tool categories": "टूल की कैटेगरी",

  // ── HomeShell ───────────────────────────────────────────────────────────
  "How it works": "यह कैसे काम करता है",
  "Upload": "अपलोड करें",
  "Drop in your images or pick them from your device.":
    "अपनी इमेज यहाँ छोड़ें या अपने डिवाइस से चुनें।",
  "Transform": "बदलें",
  "Pick a tool and adjust the settings. The work happens in your browser, or on our servers for the heavier jobs.":
    "कोई टूल चुनें और सेटिंग बदलें। काम आपके ब्राउज़र में होता है, और भारी कामों के लिए हमारे सर्वर पर।",
  "Download|step": "डाउनलोड करें",
  "Save the result to your device, ready to use.":
    "नतीजा अपने डिवाइस में सेव करें, इस्तेमाल के लिए तैयार।",
  "About oMyImage": "oMyImage के बारे में",
  "is a free online image toolkit for everyday image work. It gives you a single place to compress, resize, crop, rotate, convert, watermark, edit and animate images: {n} tools, each one a dedicated page that does one job well.":
    "रोज़ के इमेज के कामों के लिए मुफ़्त ऑनलाइन टूल का सेट है। इमेज कंप्रेस करना, रीसाइज़ करना, क्रॉप करना, घुमाना, फ़ॉर्मैट बदलना, वॉटरमार्क लगाना, एडिट करना और एनिमेट करना — सब एक ही जगह: {n} टूल, और हर टूल का अपना पेज जो एक काम अच्छे से करता है।",
  "Most tools run entirely inside your web browser: your image is processed on your own device and is never uploaded anywhere. Larger files and the heavier AI tools are processed on our servers and deleted shortly after the job finishes. oMyImage is free to use and needs no account.":
    "ज़्यादातर टूल पूरी तरह आपके ब्राउज़र के अंदर चलते हैं: इमेज आपके अपने डिवाइस पर प्रोसेस होती है और कहीं अपलोड नहीं होती। बड़ी फ़ाइलें और भारी AI टूल हमारे सर्वर पर प्रोसेस होते हैं और काम पूरा होते ही थोड़ी देर में मिटा दिए जाते हैं। oMyImage मुफ़्त है और इसके लिए अकाउंट बनाने की ज़रूरत नहीं।",
  "What you can do with oMyImage": "oMyImage से आप क्या कर सकते हैं",
  "Compress JPG, PNG and WEBP images without visible quality loss":
    "JPG, PNG और WEBP फोटो का साइज़ कम करें, बिना दिखने लायक क्वालिटी घटाए",
  "Resize, crop, rotate and add borders, in single files or in bulk":
    "एक फोटो या कई फोटो का साइज़ बदलें, क्रॉप करें, घुमाएँ और बॉर्डर लगाएँ",
  "Convert between JPG, PNG, WEBP, GIF, BMP, AVIF, HEIC and PDF":
    "JPG, PNG, WEBP, GIF, BMP, AVIF, HEIC और PDF — किसी भी फ़ॉर्मैट में बदलें",
  "Edit photos: watermark, grayscale, blur, memes and a full editor":
    "फोटो एडिट करें: वॉटरमार्क, ब्लैक एंड व्हाइट, ब्लर, मीम और एक पूरा एडिटर",
  "Make and edit GIFs: build them from images or video, compress, resize, trim, caption and convert to MP4 or WebP":
    "GIF बनाएँ और एडिट करें: इमेज या वीडियो से बनाएँ, कंप्रेस, रीसाइज़ और ट्रिम करें, कैप्शन लगाएँ, MP4 या WebP में बदलें",
  "Extract text with OCR, read or strip EXIF metadata, pick colors":
    "OCR से टेक्स्ट निकालें, EXIF मेटाडेटा देखें या मिटाएँ, रंग चुनें",
  "AI tools: remove backgrounds, upscale images, blur faces for privacy":
    "AI टूल: बैकग्राउंड हटाएँ, धुँधली फोटो साफ़ करें, प्राइवेसी के लिए चेहरे ब्लर करें",
  "How oMyImage uses your Google account": "oMyImage आपके Google अकाउंट का इस्तेमाल कैसे करता है",
  "Connecting Google is optional — every tool on oMyImage works without it. Google is used for two things: signing in, if you choose to create an account, and":
    "Google से जोड़ना वैकल्पिक है — oMyImage का हर टूल इसके बिना भी काम करता है। Google का इस्तेमाल दो कामों के लिए होता है: अगर आप अकाउंट बनाना चाहें तो साइन इन के लिए, और इस सुविधा के लिए:",
  "Import from Google Drive": "Google Drive से इंपोर्ट करें",
  ", which lets you pick an image already stored in your Drive instead of uploading it from your device.":
    ", जिससे आप अपने डिवाइस से अपलोड करने के बजाय अपने Drive में पहले से रखी इमेज चुन सकते हैं।",
  "When you use Drive import, oMyImage requests the":
    "जब आप Google Drive से इंपोर्ट करते हैं, तब oMyImage",
  "scope. That scope gives the app access only to the specific files you choose in Google's own file picker — it cannot see, browse or search the rest of your Drive. The file you pick is downloaded into your browser for the tool you are using, and that is all: oMyImage does not modify or delete anything in your Drive, does not store your Google files on our servers, does not use Google user data to train AI models, and never sells or shares it with third parties.":
    " अनुमति माँगता है। यह अनुमति ऐप को सिर्फ़ उन्हीं फ़ाइलों तक पहुँच देती है जो आप Google के अपने फ़ाइल पिकर में चुनते हैं — यह आपके बाक़ी Drive को न देख सकता है, न उसमें घूम सकता है, न खोज सकता है। आपकी चुनी हुई फ़ाइल उसी टूल के लिए आपके ब्राउज़र में डाउनलोड होती है, और बस इतना ही: oMyImage आपके Drive में कुछ भी बदलता या मिटाता नहीं, आपकी Google फ़ाइलें हमारे सर्वर पर नहीं रखता, Google उपयोगकर्ताओं के डेटा से AI मॉडल ट्रेन नहीं करता, और उसे कभी किसी तीसरे पक्ष को न बेचता है न साझा करता है।",
  "You can revoke access at any time from your": "आप यह पहुँच कभी भी हटा सकते हैं —",
  "Google Account permissions page": "अपने Google अकाउंट के अनुमति पेज से",
  "Contact us": "हमसे संपर्क करें",
  // ToolDirectory — the "Sizes and presets" block under the grid (expansion.md Phase 8).
  "Sizes and presets": "साइज़ और प्रीसेट",
  "Shortcuts to the tools above, each set up for one job: a photo at exactly 50 KB, a YouTube thumbnail, a passport photo.":
    "ऊपर दिए टूल्स के शॉर्टकट, हर एक किसी एक काम के लिए सेट: ठीक 50 KB की फोटो, YouTube थंबनेल, पासपोर्ट फोटो।",
  "Exact file size": "सटीक फ़ाइल साइज़",
  "Hit the exact size a form or upload asks for": "फ़ॉर्म या वेबसाइट जितना साइज़ माँगे, ठीक उतना",
  "PDF under a size limit": "तय साइज़ से छोटी PDF",
  "Scans and photos as a PDF that fits an upload cap":
    "स्कैन और फोटो की ऐसी PDF जो अपलोड लिमिट में आ जाए",
  "Country-standard photo sizes, ready to print":
    "अलग-अलग देशों के फोटो साइज़, प्रिंट के लिए तैयार",
  "Social and print sizes": "सोशल मीडिया और प्रिंट साइज़",
  "Thumbnails, covers and print dimensions, ready to go":
    "थंबनेल, कवर और प्रिंट साइज़, पहले से सेट",
  "AI presets": "AI प्रीसेट",
  "Sharpen photos or swap the background in one click":
    "एक क्लिक में फोटो साफ़ करें या बैकग्राउंड बदलें",
  "Quick edits": "झटपट एडिट",
  "Flip, split and other one-step jobs": "फ़्लिप, स्प्लिट और ऐसे ही एक-क़दम वाले काम",
  "KB": "KB", // i18n-same — Indian users write KB in Latin letters
  "MB": "MB", // i18n-same
};

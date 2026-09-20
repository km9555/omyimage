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
  "Most tools run right in your browser, so files never leave your device. No signup.":
    "ज़्यादातर टूल आपके ब्राउज़र में ही चलते हैं, इसलिए फ़ाइलें आपके डिवाइस से बाहर नहीं जातीं। साइन-अप की ज़रूरत नहीं।",
  "Step 1 · Upload your images": "चरण 1 · अपनी इमेज अपलोड करें",
  "Add images": "इमेज जोड़ें",
  "Drag & drop images or click to browse": "इमेज खींचकर यहाँ छोड़ें या चुनने के लिए क्लिक करें",
  "+ More": "+ और",
  "Remove {name}": "{name} हटाएँ",
  "Step 2 · Choose an action": "चरण 2 · क्या करना है चुनें",
  "Upload an image first": "पहले एक इमेज अपलोड करें",
  "What do you want to do? — e.g. compress, resize": "आप क्या करना चाहते हैं? — जैसे कंप्रेस, रीसाइज़",
  "We can't process this file type yet.": "हम अभी इस तरह की फ़ाइल प्रोसेस नहीं कर सकते।",
  "No matching action.": "कोई मिलता-जुलता विकल्प नहीं मिला।",
  "Continue": "आगे बढ़ें",

  // ── ToolDirectory ───────────────────────────────────────────────────────
  "is a free online image toolkit — over thirty tools to compress, resize, crop, convert, watermark and edit images, most running entirely in your browser so your files never leave your device. Importing from Google Drive is optional, reads only the files you pick, and never stores them on our servers.":
    "मुफ़्त ऑनलाइन इमेज टूल का सेट है — इमेज कंप्रेस करने, रीसाइज़ करने, क्रॉप करने, फ़ॉर्मैट बदलने, वॉटरमार्क लगाने और एडिट करने के तीस से ज़्यादा टूल, जिनमें से ज़्यादातर पूरी तरह आपके ब्राउज़र में चलते हैं, इसलिए आपकी फ़ाइलें आपके डिवाइस से बाहर नहीं जातीं। Google Drive से इमेज लाना वैकल्पिक है, इससे सिर्फ़ वही फ़ाइलें पढ़ी जाती हैं जो आप चुनते हैं, और वे हमारे सर्वर पर कभी सहेजी नहीं जातीं।",
  "What is oMyImage?": "oMyImage क्या है?",
  "How we use Google data": "हम Google का डेटा कैसे इस्तेमाल करते हैं",
  "Favorites": "पसंदीदा",
  "No tools in {category} yet.": "{category} में अभी कोई टूल नहीं है।",
  "Browse all image format converters": "इमेज फ़ॉर्मैट बदलने के सभी टूल देखें",
  // CATEGORY_PILLS (lib/tool-categories.ts — module scope, §4.2). "Optimize",
  // "Convert" and "Image AI" are already in common.ts.
  "All": "सभी",
  "Edit & Create": "एडिट और क्रिएट",

  // ── HomeShell ───────────────────────────────────────────────────────────
  "How it works": "यह कैसे काम करता है",
  "Upload": "अपलोड करें",
  "Drag & drop your images securely into our processing engine.":
    "अपनी इमेज सुरक्षित तरीक़े से खींचकर हमारे प्रोसेसिंग इंजन में छोड़ें।",
  "Transform": "बदलें",
  "Pick a tool and let your browser — or our servers — do the heavy lifting.":
    "कोई टूल चुनें और भारी काम अपने ब्राउज़र — या हमारे सर्वर — पर छोड़ दें।",
  "Download|step": "डाउनलोड करें",
  "Get your optimized images back, ready for your workflow.":
    "अपनी ऑप्टिमाइज़ की हुई इमेज वापस पाएँ, इस्तेमाल के लिए तैयार।",
  "About oMyImage": "oMyImage के बारे में",
  "is a free online image toolkit for everyday image work. It gives you a single place to compress, resize, crop, rotate, convert, watermark and edit images — over thirty tools, each one a dedicated page that does one job well.":
    "रोज़ के इमेज के कामों के लिए मुफ़्त ऑनलाइन टूल का सेट है। इमेज कंप्रेस करना, रीसाइज़ करना, क्रॉप करना, घुमाना, फ़ॉर्मैट बदलना, वॉटरमार्क लगाना और एडिट करना — सब एक ही जगह, तीस से ज़्यादा टूल, और हर टूल का अपना पेज जो एक काम अच्छे से करता है।",
  "Most tools run entirely inside your web browser: your image is processed on your own device and is never uploaded anywhere. Larger files, and the AI tools that need real hardware, are processed on our servers and deleted shortly after the job finishes. oMyImage is free to use and needs no account.":
    "ज़्यादातर टूल पूरी तरह आपके ब्राउज़र के अंदर चलते हैं: इमेज आपके अपने डिवाइस पर प्रोसेस होती है और कहीं अपलोड नहीं होती। बड़ी फ़ाइलें, और वे AI टूल जिन्हें असली हार्डवेयर चाहिए, हमारे सर्वर पर प्रोसेस होते हैं और काम पूरा होते ही थोड़ी देर में मिटा दिए जाते हैं। oMyImage मुफ़्त है और इसके लिए अकाउंट बनाने की ज़रूरत नहीं।",
  "What you can do with oMyImage": "oMyImage से आप क्या कर सकते हैं",
  "Compress JPG, PNG and WEBP images without visible quality loss":
    "JPG, PNG और WEBP फोटो का साइज़ कम करें, बिना दिखने लायक क्वालिटी घटाए",
  "Resize, crop, rotate and add borders, in single files or in bulk":
    "एक फोटो या कई फोटो का साइज़ बदलें, क्रॉप करें, घुमाएँ और बॉर्डर लगाएँ",
  "Convert between JPG, PNG, WEBP, GIF, BMP, AVIF, HEIC and PDF":
    "JPG, PNG, WEBP, GIF, BMP, AVIF, HEIC और PDF — किसी भी फ़ॉर्मैट में बदलें",
  "Edit photos: watermark, grayscale, blur, memes and a full editor":
    "फोटो एडिट करें: वॉटरमार्क, ब्लैक एंड व्हाइट, ब्लर, मीम और एक पूरा एडिटर",
  "Extract text with OCR, read or strip EXIF metadata, pick colours":
    "OCR से टेक्स्ट निकालें, EXIF मेटाडेटा देखें या मिटाएँ, रंग चुनें",
  "AI tools: remove backgrounds, upscale images, blur faces for privacy":
    "AI टूल: बैकग्राउंड हटाएँ, धुँधली फोटो साफ़ करें, प्राइवेसी के लिए चेहरे ब्लर करें",
  "How oMyImage uses your Google account": "oMyImage आपके Google अकाउंट का इस्तेमाल कैसे करता है",
  "Connecting Google is optional — every tool on oMyImage works without it. It exists for one feature:":
    "Google से जोड़ना वैकल्पिक है — oMyImage का हर टूल इसके बिना भी काम करता है। यह सिर्फ़ एक सुविधा के लिए है:",
  "Import from Google Drive": "Google Drive से इंपोर्ट करें",
  ", which lets you pick an image already stored in your Drive instead of uploading it from your device.":
    ", जिससे आप अपने डिवाइस से अपलोड करने के बजाय अपने Drive में पहले से रखी इमेज चुन सकते हैं।",
  "When you use it, oMyImage requests the": "जब आप इसका इस्तेमाल करते हैं, तब oMyImage",
  "scope. That scope gives the app access only to the specific files you choose in Google's own file picker — it cannot see, browse or search the rest of your Drive. The file you pick is downloaded into your browser for the tool you are using, and that is all: oMyImage does not modify or delete anything in your Drive, does not store your Google files on our servers, does not use Google user data to train AI models, and never sells or shares it with third parties.":
    " अनुमति माँगता है। यह अनुमति ऐप को सिर्फ़ उन्हीं फ़ाइलों तक पहुँच देती है जो आप Google के अपने फ़ाइल पिकर में चुनते हैं — यह आपके बाक़ी Drive को न देख सकता है, न उसमें घूम सकता है, न खोज सकता है। आपकी चुनी हुई फ़ाइल उसी टूल के लिए आपके ब्राउज़र में डाउनलोड होती है, और बस इतना ही: oMyImage आपके Drive में कुछ भी बदलता या मिटाता नहीं, आपकी Google फ़ाइलें हमारे सर्वर पर नहीं रखता, Google उपयोगकर्ताओं के डेटा से AI मॉडल ट्रेन नहीं करता, और उसे कभी किसी तीसरे पक्ष को न बेचता है न साझा करता है।",
  "You can revoke access at any time from your": "आप यह पहुँच कभी भी हटा सकते हैं —",
  "Google Account permissions page": "अपने Google अकाउंट के अनुमति पेज से",
  "Contact us": "हमसे संपर्क करें",
};

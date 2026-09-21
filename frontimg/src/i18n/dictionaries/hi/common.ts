/**
 * Hindi SHARED chrome — strings rendered by components that appear on every
 * route (header, menus, footer, cookie banner, the tool workspace, result
 * screen, SEO block headings…).
 *
 * Bundled on every page, so keep it to genuinely shared strings. A tool's own
 * micro-copy belongs in the `ui` block of its content module
 * (`src/content/tools/<id>.hi.ts`), which is code-split with that route.
 * The rule for where a key lives is WHO RENDERS IT, not where it first
 * appeared: anything under `components/` or `lib/` can render on any route, so
 * its keys live here even if only one tool uses the component today
 * (oMyPDF conversion.md §4.11).
 *
 * Keys are the English source string, byte for byte — copy them from the
 * `npm run i18n:keys hi` report rather than retyping (typographic apostrophes
 * and dashes are the classic way a key silently never matches).
 *
 * Register and script (conversion.md §5, Hindi):
 *   • Formal आप, imperative करें. A full sentence ends in the danda "।"; a
 *     fragment, label or button does not.
 *   • Format and product names stay LATIN — JPG, PNG, WEBP, HEIC, SVG, GIF,
 *     PDF, ZIP, EXIF, DPI, Google Drive, Dropbox. Their Devanagari spellings
 *     live in dictionaries/hi/aliases.ts so the search box finds both.
 *   • Loanword verbs go Devanagari — कंप्रेस, रिसाइज़, क्रॉप, कन्वर्ट,
 *     डाउनलोड, अपलोड. This is iLoveIMG's own convention on /hi.
 *   • Devanagari has no case, so an English ALL-CAPS emphasis becomes <strong>
 *     at the call site, never a shouted transliteration.
 *   • Latin digits only (०१२ are never used on the Indian web).
 *
 * Vocabulary pinned here and in dictionaries/hi/tools.ts: फ़ाइल (file),
 * इमेज (image, the tool-page head term), फोटो (photo, the native descriptive
 * term), डाउनलोड करें (download), हटाएँ (remove/delete), पासवर्ड, स्क्रीन,
 * घुमाएँ (rotate), आप.
 */
export const hiCommon: Record<string, string> = {
  // ── SEO block (SeoContent / Breadcrumbs / RelatedTools) ─────────────────
  "Home": "होम",
  "Breadcrumb": "ब्रेडक्रंब",
  "More tools": "और टूल",
  "{tool} features": "{tool} की ख़ूबियाँ",
  "Security & privacy": "सुरक्षा और प्राइवेसी",
  "Frequently asked questions": "अक्सर पूछे जाने वाले सवाल",

  // ── Header, menus, search ───────────────────────────────────────────────
  "Tools": "टूल",
  "Soon": "जल्द",
  "Coming soon": "जल्द आ रहा है",
  "40 free tools — no sign-up required": "40 मुफ़्त टूल — साइन-अप की ज़रूरत नहीं",
  "Browse all tools": "सभी टूल देखें",
  "Browse tools": "टूल देखें",
  "All tools": "सभी टूल",
  "Blog": "ब्लॉग",
  "Pricing": "क़ीमत",
  "Language": "भाषा",
  "Select language": "भाषा चुनें",
  "More": "और",
  "Open menu": "मेन्यू खोलें",
  "Close menu": "मेन्यू बंद करें",
  "Site menu": "साइट मेन्यू",
  "Credits": "क्रेडिट",
  "credits": "क्रेडिट",
  "Unlimited credits": "असीमित क्रेडिट",
  "{used} of {limit} premium runs used today": "आज {limit} में से {used} प्रीमियम उपयोग हो चुके",
  "Search tools…": "टूल खोजें…",
  "Search tools": "टूल खोजें",
  "Clear search": "खोज मिटाएँ",
  "No tools match “{query}”.": "“{query}” से कोई टूल मेल नहीं खाता।",
  "Switch to light mode": "लाइट मोड पर जाएँ",
  "Switch to dark mode": "डार्क मोड पर जाएँ",
  "Light mode": "लाइट मोड",
  "Dark mode": "डार्क मोड",
  "Help": "मदद",

  // Nav mega-menu / drawer sections (lib/nav-sections.ts — module scope, §4.2)
  "Optimize Image": "इमेज ऑप्टिमाइज़ करें",
  "Edit Image": "इमेज एडिट करें",
  "Create": "बनाएँ",
  "Image AI": "इमेज AI",
  "Privacy & Info": "प्राइवेसी और जानकारी",
  "Convert Format": "फ़ॉर्मैट बदलें",
  "Convert To & From": "किसी भी फ़ॉर्मैट में बदलें",
  "Camera & Modern Formats": "कैमरा और नए फ़ॉर्मैट",

  // Navbar quick links + footer columns (module scope, §4.2)
  "Compress Image": "इमेज कंप्रेस करें",
  "Resize Image": "इमेज रीसाइज़ करें",
  "Crop Image": "इमेज क्रॉप करें",
  "Rotate Image": "इमेज घुमाएँ",
  "Convert to JPG": "JPG में बदलें",
  "PNG to JPG": "PNG से JPG",
  "WEBP to PNG": "WEBP से PNG",
  "HEIC to JPG": "HEIC से JPG",
  "Image to PDF": "इमेज से PDF",
  "Watermark Image": "इमेज पर वॉटरमार्क लगाएँ",
  "Image Editor": "फोटो एडिटर",
  "Meme Generator": "मीम जनरेटर",
  "Remove Background": "बैकग्राउंड हटाएँ",
  "Upscale Image": "इमेज की क्वालिटी बढ़ाएँ",
  "Optimize": "ऑप्टिमाइज़",
  "Convert": "कन्वर्ट",
  "Edit & AI": "एडिट और AI",
  "Contact": "संपर्क",
  "Privacy Policy": "प्राइवेसी पॉलिसी",
  "Terms of Service": "सेवा की शर्तें",
  "Refund Policy": "रिफ़ंड पॉलिसी",
  "Cookie Policy": "कुकी पॉलिसी",
  "Open-Source Licenses": "ओपन-सोर्स लाइसेंस",
  "Free online image tools — fast, private, and no sign-up required.":
    "मुफ़्त ऑनलाइन इमेज टूल — तेज़, निजी और बिना साइन-अप के।",
  "View Pricing →": "क़ीमत देखें →",
  "Need PDF tools? oMyPDF →": "PDF टूल चाहिए? oMyPDF →",
  "© {year} {brand}. All rights reserved.": "© {year} {brand}. सर्वाधिकार सुरक्षित।",

  // ── Account menu ────────────────────────────────────────────────────────
  "Login": "लॉगिन",
  "Account": "अकाउंट",
  "Account menu": "अकाउंट मेन्यू",
  "Signed in as": "इस रूप में साइन इन",
  "Dashboard": "डैशबोर्ड",
  "My Account": "मेरा अकाउंट",
  "Sign out": "साइन आउट",
  "Show password": "पासवर्ड दिखाएँ",
  "Hide password": "पासवर्ड छिपाएँ",
  "Unlimited AI runs": "असीमित AI उपयोग",
  "{n} AI runs per day": "हर दिन {n} AI उपयोग",

  // ── Cookie banner ───────────────────────────────────────────────────────
  "Cookie consent": "कुकी सहमति",
  "We value your privacy": "आपकी प्राइवेसी हमारे लिए अहम है",
  "oMyImage uses necessary cookies to run the site and optional analytics only with your consent. Your images are never involved.":
    "oMyImage साइट चलाने के लिए ज़रूरी कुकीज़ का उपयोग करता है और एनालिटिक्स कुकीज़ सिर्फ़ आपकी सहमति से। आपकी इमेज इसमें कभी शामिल नहीं होतीं।",
  "Accept All": "सभी स्वीकारें",
  "Reject All": "सभी अस्वीकारें",
  "Customize": "अपने हिसाब से चुनें",
  "Save preferences": "पसंद सहेजें",
  "Back": "वापस",
  "Always on": "हमेशा चालू",
  "Cookie Settings": "कुकी सेटिंग",
  // CATEGORIES in CookieBanner.tsx (module scope, §4.2)
  "Necessary cookies": "ज़रूरी कुकीज़",
  "Required for core site features such as security, remembering your theme, and storing your cookie choice.":
    "साइट की बुनियादी सुविधाओं के लिए ज़रूरी — जैसे सुरक्षा, आपकी थीम याद रखना और आपकी कुकी पसंद सहेजना।",
  "Analytics cookies": "एनालिटिक्स कुकीज़",
  "Help us understand how visitors use oMyImage so we can improve performance and decide which tools to build next.":
    "इनसे हमें समझ आता है कि लोग oMyImage का उपयोग कैसे करते हैं, ताकि हम स्पीड सुधार सकें और तय कर सकें कि आगे कौन-सा टूल बनाना है।",
  "Advertising cookies": "विज्ञापन कुकीज़",
  "Used to deliver relevant ads and measure advertising performance. oMyImage runs no ads today — this is stored for if that ever changes.":
    "प्रासंगिक विज्ञापन दिखाने और उनका असर मापने के लिए। oMyImage पर अभी कोई विज्ञापन नहीं चलता — यह पसंद इसलिए सहेजी जाती है कि आगे कभी बदलाव हो तो लागू रहे।",
  "Functional cookies": "फ़ंक्शनल कुकीज़",
  "Enable enhanced features such as saved preferences and a more personalised experience.":
    "सहेजी गई पसंद और ज़्यादा निजी अनुभव जैसी अतिरिक्त सुविधाएँ चालू करती हैं।",

  // ── Drop zone, cloud import ─────────────────────────────────────────────
  "Select images": "इमेज चुनें",
  "Select an image": "एक इमेज चुनें",
  "Take photo": "फोटो लें",
  "Processed in your browser — your images never leave your device.":
    "आपके ब्राउज़र में ही प्रोसेस होता है — आपकी इमेज कभी आपके डिवाइस से बाहर नहीं जातीं।",
  "Processed on our server over an encrypted connection — files are deleted right after.":
    "हमारे सर्वर पर एन्क्रिप्टेड कनेक्शन से प्रोसेस होता है — फ़ाइलें उसके तुरंत बाद हटा दी जाती हैं।",
  "or import from": "या यहाँ से लाएँ",
  "Connecting…": "कनेक्ट हो रहा है…",
  "Add from {service}": "{service} से जोड़ें",
  "Import from {service}": "{service} से इंपोर्ट करें",
  "Imported 1 file from Google Drive.": "Google Drive से 1 फ़ाइल आ गई।",
  "Imported {n} files from Google Drive.": "Google Drive से {n} फ़ाइलें आ गईं।",
  "Imported 1 file from Dropbox.": "Dropbox से 1 फ़ाइल आ गई।",
  "Imported {n} files from Dropbox.": "Dropbox से {n} फ़ाइलें आ गईं।",
  "Google Drive import failed.": "Google Drive से इंपोर्ट नहीं हो सका।",
  "Dropbox import failed.": "Dropbox से इंपोर्ट नहीं हो सका।",

  // ── Tool workspace, file tray, mobile shell ─────────────────────────────
  "Selected files ({n})": "चुनी गई फ़ाइलें ({n})",
  "Clear": "मिटाएँ",
  "Add more files": "और फ़ाइलें जोड़ें",
  "Move earlier": "पहले ले जाएँ",
  "Move later": "बाद में ले जाएँ",
  "File view": "फ़ाइल व्यू",
  "Grid view": "ग्रिड व्यू",
  "List view": "लिस्ट व्यू",
  "1 image": "1 इमेज",
  "{n} images": "{n} इमेज",
  "1 file": "1 फ़ाइल",
  "{n} files": "{n} फ़ाइलें",
  "Settings": "सेटिंग",
  "Close": "बंद करें",
  "Working…": "काम चल रहा है…",
  "{label} value": "{label} का मान",
  "Options": "विकल्प",
  "Clear image": "इमेज हटाएँ",
  "Clear files": "फ़ाइलें हटाएँ",
  "Change image": "इमेज बदलें",
  "Remove": "हटाएँ",
  "Download": "डाउनलोड करें",
  "Download {name}": "{name} डाउनलोड करें",
  "Download ({size})": "डाउनलोड करें ({size})",
  "Download all (ZIP)": "सभी डाउनलोड करें (ZIP)",
  "Result": "नतीजा",
  "Original": "मूल",
  "Process": "प्रोसेस करें",
  "Processing…": "प्रोसेस हो रहा है…",
  "This is a server-powered tool, so large images may take a few seconds.":
    "यह टूल सर्वर पर चलता है, इसलिए बड़ी इमेज में कुछ सेकंड लग सकते हैं।",
  "Please select an image.": "कृपया एक इमेज चुनें।",
  "Done — your image is ready.": "हो गया — आपकी इमेज तैयार है।",
  "Processing failed.": "प्रोसेसिंग नहीं हो सकी।",

  // ── Background picker (swatch names are module scope, §4.2) ────────────
  "Background": "बैकग्राउंड",
  "Background (replaces transparency)": "बैकग्राउंड (पारदर्शिता की जगह)",
  "Auto — match the image's own edges": "ऑटो — इमेज के अपने किनारों जैसा",
  "Auto": "ऑटो",
  "Transparent": "पारदर्शी",
  "Custom": "अपनी पसंद",
  "Custom color": "अपनी पसंद का रंग",
  "Custom background color": "अपनी पसंद का बैकग्राउंड रंग",
  "White": "सफ़ेद",
  "Black": "काला",
  "Gray": "स्लेटी",
  "Charcoal": "कोयला",
  "Clay": "मिट्टी",
  "Red": "लाल",
  "Green": "हरा",
  "Blue": "नीला",

  // ── Converter (ConvertTool) ─────────────────────────────────────────────
  "Converted in your browser — files stay on your device (very large or very high-resolution images are processed on our server).":
    "आपके ब्राउज़र में ही कन्वर्ट होता है — फ़ाइलें आपके डिवाइस पर ही रहती हैं (बहुत बड़ी या बहुत ज़्यादा रेज़ोल्यूशन वाली इमेज हमारे सर्वर पर प्रोसेस होती हैं)।",
  "Please select {format} files.": "कृपया {format} फ़ाइलें चुनें।",
  "Please select image files.": "कृपया इमेज फ़ाइलें चुनें।",
  "Converted 1 image to {format}.": "1 इमेज {format} में बदल गई।",
  "Converted {n} images to {format}.": "{n} इमेज {format} में बदल गईं।",
  "Conversion failed.": "कन्वर्ज़न नहीं हो सका।",
  "Conversion settings": "कन्वर्ज़न सेटिंग",
  "Conversion Settings": "कन्वर्ज़न सेटिंग",
  "Converting…": "कन्वर्ट हो रहा है…",
  "Total: {before} → {after}": "कुल: {before} → {after}",
  "1 file ready": "1 फ़ाइल तैयार",
  "{n} files ready — downloads as a ZIP": "{n} फ़ाइलें तैयार — ZIP में डाउनलोड होंगी",
  "Convert to {format}": "{format} में बदलें",
  "Convert {n} to {format}": "{n} को {format} में बदलें",
  "Output:": "आउटपुट:",
  "Quality": "क्वालिटी",
  "Auto-rotate by EXIF orientation": "EXIF ओरिएंटेशन से अपने आप घुमाएँ",
  "Strip metadata": "मेटाडेटा हटाएँ",
  "Remove EXIF, colour profile, camera and location data from the converted image to reduce size.":
    "साइज़ घटाने के लिए कन्वर्ट की गई इमेज से EXIF, कलर प्रोफ़ाइल, कैमरा और लोकेशन डेटा हटा देता है।",

  // ── Crop dialog, canvases, effects ──────────────────────────────────────
  "Crop and rotate image": "इमेज क्रॉप करें और घुमाएँ",
  "Crop & rotate": "क्रॉप और घुमाएँ",
  "Cancel": "रद्द करें",
  "Apply": "लागू करें",
  "Free": "मुक्त",
  "Rotate left": "बाएँ घुमाएँ",
  "Rotate right": "दाएँ घुमाएँ",
  "Select whole image": "पूरी इमेज चुनें",
  "Reset": "रीसेट करें",
  "Output": "आउटपुट",
  "Couldn't read this image.": "यह इमेज पढ़ी नहीं जा सकी।",
  "Compare original with result": "मूल और नतीजे की तुलना करें",
  "Crop area. Drag inside to move, drag a handle to resize, arrow keys to nudge.":
    "क्रॉप क्षेत्र। खिसकाने के लिए अंदर ड्रैग करें, साइज़ बदलने के लिए किसी हैंडल को ड्रैग करें, थोड़ा-थोड़ा सरकाने के लिए ऐरो की दबाएँ।",
  "Merged image — drag to move, corners to resize, the top handle to rotate":
    "जुड़ी हुई इमेज — खिसकाने के लिए ड्रैग करें, साइज़ बदलने के लिए कोने, घुमाने के लिए ऊपर वाला हैंडल",
  "Redaction area. Drag to paint over what you want hidden.":
    "छिपाने का क्षेत्र। जो छिपाना है उस पर ड्रैग करके रंग भरें।",
  "Redaction area. Drag to draw a region, click one to select it, drag its handles to resize, Delete to remove, arrow keys to nudge.":
    "छिपाने का क्षेत्र। क्षेत्र बनाने के लिए ड्रैग करें, चुनने के लिए उस पर क्लिक करें, साइज़ बदलने के लिए उसके हैंडल ड्रैग करें, हटाने के लिए Delete दबाएँ, थोड़ा सरकाने के लिए ऐरो की दबाएँ।",
  "Select your effect": "अपना इफ़ेक्ट चुनें",
  "Previous effects": "पिछले इफ़ेक्ट",
  "More effects": "और इफ़ेक्ट",
  // EFFECT_SPECS labels (lib/image/effects.ts — module scope, §4.2)
  "No blur": "कोई ब्लर नहीं",
  "Gaussian": "गॉसियन",
  "Colour": "ठोस रंग",
  "Motion": "मोशन",
  "Radial": "रेडियल",
  "Pixelate": "पिक्सलेट",
  "Glass": "काँच",
  "Bloom": "ब्लूम",
  "Trippy waves": "लहरें",
  "Halftone": "हाफ़टोन",
  "Particle": "पार्टिकल",

  // ── Result screen ───────────────────────────────────────────────────────
  "Processing completed!": "प्रोसेसिंग पूरी हुई!",
  "Your image is ready for download": "आपकी इमेज डाउनलोड के लिए तैयार है",
  "Process more images": "और इमेज प्रोसेस करें",
  "Your image": "आपकी इमेज",
  "Your images ({n})": "आपकी इमेज ({n})",
  "Preparing ZIP…": "ZIP तैयार हो रहा है…",
  "Download all (.zip)": "सभी डाउनलोड करें (.zip)",
  "Download all ({n})": "सभी डाउनलोड करें ({n})",
  "Continue with this file": "इसी फ़ाइल के साथ आगे बढ़ें",
  "Share or save this tool": "इस टूल को शेयर करें या सहेजें",
  "Copy the link, share on social media, or bookmark the page to find it later.":
    "लिंक कॉपी करें, सोशल मीडिया पर शेयर करें, या पेज को बुकमार्क कर लें ताकि बाद में आसानी से मिल जाए।",
  "Copied": "कॉपी हो गया",
  "Copy link": "लिंक कॉपी करें",
  "Couldn't copy the link.": "लिंक कॉपी नहीं हो सका।",
  "Share": "शेयर करें",
  "Share:": "शेयर करें:",
  "(Ctrl + D to bookmark)": "(बुकमार्क करने के लिए Ctrl + D)",
  "Share on X": "X पर शेयर करें",
  "Share on Facebook": "Facebook पर शेयर करें",
  "Share on LinkedIn": "LinkedIn पर शेयर करें",
  "Share on WhatsApp": "WhatsApp पर शेयर करें",
  "Share on Telegram": "Telegram पर शेयर करें",
  "I just used {tool} on oMyImage — free, fast, no sign-up.":
    "मैंने अभी oMyImage पर {tool} इस्तेमाल किया — मुफ़्त, तेज़ और बिना साइन-अप के।",
  "Free image tools on oMyImage.": "oMyImage पर मुफ़्त इमेज टूल।",
  "Enjoyed the result?": "नतीजा पसंद आया?",
  "Share your experience on Trustpilot — it helps a lot.":
    "अपना अनुभव Trustpilot पर बताएँ — इससे बहुत मदद मिलती है।",
  "Leave a review": "समीक्षा लिखें",

  // ── Toasts (sonner's own accessible names — ThemedToaster) ──────────────
  "Notifications": "सूचनाएँ",
  "Close toast": "सूचना बंद करें",

  // ── Tool cards, favourites ──────────────────────────────────────────────
  "Premium tool": "प्रीमियम टूल",
  "Premium tool — Free plan includes a limited number per day":
    "प्रीमियम टूल — फ़्री प्लान में हर दिन सीमित उपयोग मिलते हैं",
  "Runs on our server — {allowance}": "हमारे सर्वर पर चलता है — {allowance}",
  "Added to Favorites": "पसंदीदा में जोड़ा गया",
  "Removed from Favorites": "पसंदीदा से हटाया गया",
  "Add {tool} to favorites": "{tool} को पसंदीदा में जोड़ें",
  "Remove {tool} from favorites": "{tool} को पसंदीदा से हटाएँ",

  // ── Legal shell ─────────────────────────────────────────────────────────
  // "|section": a bare "Legal" is also the US paper size (image-to-pdf), which
  // must stay "Legal". The same English word, two meanings, two keys.
  // Auth chrome (components/auth) — shared by login, signup and the password flow.
  "Continue with Google": "Google से जारी रखें",
  "or|divider": "या",
  "Legal|section": "क़ानूनी",
  "Last updated:": "आख़िरी अपडेट:",
  "Contents": "विषय-सूची",
  "On this page": "इस पेज पर",
  "Back to top": "ऊपर जाएँ",

  // ── Errors thrown in lib/ and shown in toasts (src/i18n/errors.ts) ──────
  "Could not download “{name}” from Dropbox.": "Dropbox से “{name}” डाउनलोड नहीं हो सकी।",
  "Could not download “{name}” from Google Drive.": "Google Drive से “{name}” डाउनलोड नहीं हो सकी।",
  "The Dropbox chooser failed to start.": "Dropbox चूज़र शुरू नहीं हो सका।",
  "Unsupported image format: {name}": "यह इमेज फ़ॉर्मैट समर्थित नहीं है: {name}",
  "No frames found in this GIF.": "इस GIF में कोई फ़्रेम नहीं मिला।",
  "Canvas is not supported in this browser.": "यह ब्राउज़र canvas को सपोर्ट नहीं करता।",
  "Canvas not supported.": "canvas समर्थित नहीं है।",
  "Could not export the image.": "इमेज एक्सपोर्ट नहीं हो सकी।",
  "Add at least one frame.": "कम से कम एक फ़्रेम जोड़ें।",
  "Add at least one image.": "कम से कम एक इमेज जोड़ें।",
  "Server error ({status}).": "सर्वर त्रुटि ({status})।",
  "Couldn't reach the processing server for this large file.":
    "इस बड़ी फ़ाइल के लिए प्रोसेसिंग सर्वर से कनेक्ट नहीं हो सका।",
  "Couldn't reach the processing server.": "प्रोसेसिंग सर्वर से कनेक्ट नहीं हो सका।",
  "The server did not start the job. Please try again.": "सर्वर ने काम शुरू नहीं किया। फिर कोशिश करें।",
  "Timed out waiting for the server to finish.": "सर्वर के पूरा होने का इंतज़ार करते-करते समय ख़त्म हो गया।",
  // …and the backend's own user-facing sentences (backend/src/routes/image).
  "Upload an image.": "एक इमेज अपलोड करें।",
  "This file is too large.": "यह फ़ाइल बहुत बड़ी है।",
  "Too many processing requests. Please wait a moment.":
    "बहुत ज़्यादा प्रोसेसिंग अनुरोध। थोड़ा रुकें।",
  "Too many requests. Please slow down and try again shortly.":
    "बहुत ज़्यादा अनुरोध। थोड़ा धीरे चलें और कुछ देर बाद फिर कोशिश करें।",
  "Too many requests. Please slow down.": "बहुत ज़्यादा अनुरोध। थोड़ा धीरे चलें।",
  "You've hit the hourly processing limit for your network. Please try again later or sign in for higher limits.":
    "आपके नेटवर्क की प्रति-घंटा प्रोसेसिंग सीमा पूरी हो गई है। बाद में कोशिश करें या ज़्यादा सीमा के लिए साइन इन करें।",
  "File not found or expired.": "फ़ाइल नहीं मिली या उसकी अवधि ख़त्म हो गई।",
  "This OCR job was not found or has expired.": "यह OCR काम नहीं मिला या उसकी अवधि ख़त्म हो गई।",
  "That URL can't be reached — use a public http(s) address.":
    "इस URL तक नहीं पहुँचा जा सका — कोई सार्वजनिक http(s) पता इस्तेमाल करें।",
  "Provide a width and/or height.": "चौड़ाई और/या ऊँचाई बताएँ।",

  // ── Punctuation ─────────────────────────────────────────────────────────
  // A sentence terminator composed between two translated fragments. The
  // "|sentence-end" suffix keeps it from colliding with any real ". " key.
  ". |sentence-end": "। ",
};

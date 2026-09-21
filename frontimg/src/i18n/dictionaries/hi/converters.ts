import type { Dict } from "@/i18n/t";

/**
 * Hindi strings for the data-driven converter pages.
 *
 * These are the GENERATED sentences — the how-to steps, the feature tiles, the
 * boilerplate FAQs, the privacy note and ConverterPage's own chrome. The prose
 * that makes each pair its own page lives in `src/content/converters/`.
 *
 * Loaded by `lib/converters/i18n.ts`, which hands it to `getT()` for the
 * server markup and down through an `<I18nScope>` so ConvertTool sees it too.
 * A sentence with a conditional tail has one key per variant, because the tail
 * does not sit in the same place in Hindi (conversion.md §6.4) — Hindi is
 * verb-final, so a clause English tacks on at the end usually lands mid-way.
 *
 * `{offload}` is spliced into three sentences in three grammatical positions
 * (after "में से", as a subject, and inside brackets), so its Hindi form is a
 * bare noun phrase with no postposition — "बहुत बड़ी या बहुत ज़्यादा
 * रेज़ोल्यूशन वाली इमेज" — which reads correctly in all three.
 *
 * The how-to step says "कन्वर्ट दबाएँ" because that word is on the button in
 * BOTH layouts: the mobile shell's "Convert" and the desktop rail's
 * "Convert to {format}" are both rendered with कन्वर्ट (common.ts). Quoting the
 * desktop label verbatim would be wrong on a phone, where most of /hi reads.
 */
export const hiConverters: Dict = {
  // ── copy.ts: shared fragments ──────────────────────────────────────────
  "very large or very high-resolution images": "बहुत बड़ी या बहुत ज़्यादा रेज़ोल्यूशन वाली इमेज",

  // ── copy.ts: buildSteps ────────────────────────────────────────────────
  "Add your {from} files": "अपनी {from} फ़ाइलें जोड़ें",
  "Drag {from} images onto the drop zone or click to browse. Add as many as you like — they queue up together.":
    "{from} इमेज खींचकर अपलोड क्षेत्र में छोड़ें या चुनने के लिए क्लिक करें। जितनी चाहें जोड़ें — सब एक ही क़तार में लग जाती हैं।",
  "Choose your quality": "क्वालिटी चुनें",
  "Drag the quality slider to trade file size against detail.":
    "फ़ाइल के साइज़ और डिटेल में संतुलन बिठाने के लिए क्वालिटी का स्लाइडर खिसकाएँ।",
  "Because {to} has no transparency, you can also pick the colour that fills transparent areas.":
    "चूँकि {to} में पारदर्शिता नहीं होती, आप वह रंग भी चुन सकते हैं जो पारदर्शी हिस्सों को भरेगा।",
  "The default suits most images — raise it for detailed photographs.":
    "डिफ़ॉल्ट ज़्यादातर इमेज के लिए ठीक है — बारीक डिटेल वाली फोटो के लिए इसे बढ़ा दें।",
  "Check the settings": "सेटिंग जाँच लें",
  "{to} output is lossless and keeps transparency, so there is nothing to configure. Auto-rotate reads EXIF orientation so portrait photos stay upright.":
    "{to} आउटपुट लॉसलेस है और पारदर्शिता बनाए रखता है, इसलिए कुछ सेट करने की ज़रूरत नहीं। ऑटो-रोटेट EXIF ओरिएंटेशन पढ़ता है, ताकि खड़ी फोटो खड़ी ही रहें।",
  "{to} output is lossless, so there is nothing to configure. Auto-rotate reads EXIF orientation so portrait photos stay upright.":
    "{to} आउटपुट लॉसलेस है, इसलिए कुछ सेट करने की ज़रूरत नहीं। ऑटो-रोटेट EXIF ओरिएंटेशन पढ़ता है, ताकि खड़ी फोटो खड़ी ही रहें।",
  "Convert and download": "बदलें और डाउनलोड करें",
  "Press Convert. A single file downloads as {to} straight away; several arrive together in one ZIP.":
    "कन्वर्ट दबाएँ। एक फ़ाइल तुरंत {to} बनकर डाउनलोड होती है; कई फ़ाइलें एक ZIP में साथ आती हैं।",

  // ── copy.ts: buildFeatures ─────────────────────────────────────────────
  "Batch {from} → {to}": "एक साथ कई {from} → {to}",
  "Convert a whole folder in one pass. Multiple files come back as a single ZIP, so there is no download-one-at-a-time slog.":
    "पूरा फ़ोल्डर एक बार में बदलें। कई फ़ाइलें एक ही ZIP में वापस आती हैं, इसलिए एक-एक करके डाउनलोड करने का झंझट नहीं।",
  "Transparency survives": "पारदर्शिता बनी रहती है",
  "Transparent areas in your {from} stay transparent in the {to} — no white box behind the image.":
    "आपकी {from} के पारदर्शी हिस्से {to} में भी पारदर्शी रहते हैं — इमेज के पीछे कोई सफ़ेद डिब्बा नहीं।",
  "You pick the background": "बैकग्राउंड आप चुनते हैं",
  "{to} cannot store transparency, so anything see-through has to be filled. Choose the colour instead of being handed white.":
    "{to} पारदर्शिता सहेज नहीं सकता, इसलिए हर पारदर्शी हिस्से को भरना पड़ता है। सफ़ेद थमाए जाने के बजाय रंग ख़ुद चुनें।",
  "Quality you control": "क्वालिटी आपके हाथ में",
  "Lossless output": "लॉसलेस आउटपुट",
  "A quality slider rather than a fixed preset, so you decide where the size-versus-detail line sits.":
    "तय प्रीसेट के बजाय क्वालिटी का स्लाइडर, ताकि साइज़ और डिटेल के बीच की रेखा आप तय करें।",
  "{to} is lossless — the converted image is pixel-for-pixel what went in.":
    "{to} लॉसलेस है — बदली गई इमेज पिक्सल-दर-पिक्सल वही है जो डाली गई थी।",
  "No software to install": "कुछ इंस्टॉल नहीं करना",
  "Nothing to download and no account to create. Files are sent over HTTPS, converted, and deleted from the server afterwards.":
    "न कुछ डाउनलोड करना, न अकाउंट बनाना। फ़ाइलें HTTPS से भेजी जाती हैं, बदली जाती हैं और उसके बाद सर्वर से मिटा दी जाती हैं।",
  "Private by default": "डिफ़ॉल्ट रूप से निजी",
  "The conversion runs inside your browser tab. Your {from} files are never uploaded unless one is among the {offload}.":
    "कन्वर्ज़न आपके ब्राउज़र टैब के भीतर चलता है। आपकी {from} फ़ाइलें कभी अपलोड नहीं होतीं, सिवाय तब जब कोई फ़ाइल {offload} में से हो।",
  "The conversion runs inside your browser tab. Your {from} files are never uploaded.":
    "कन्वर्ज़न आपके ब्राउज़र टैब के भीतर चलता है। आपकी {from} फ़ाइलें कभी अपलोड नहीं होतीं।",

  // ── copy.ts: buildBoilerplateFaqs ──────────────────────────────────────
  "What happens to my files?": "मेरी फ़ाइलों का क्या होता है?",
  "This conversion needs a server, because browsers cannot handle {from} decoding on their own. Files travel over an encrypted HTTPS connection, are converted, and are deleted afterwards — they are never used for anything else.":
    "इस कन्वर्ज़न के लिए सर्वर चाहिए, क्योंकि ब्राउज़र अपने आप {from} को डिकोड नहीं कर सकते। फ़ाइलें एन्क्रिप्टेड HTTPS कनेक्शन से जाती हैं, बदली जाती हैं और उसके बाद मिटा दी जाती हैं — उनका कभी किसी और काम में इस्तेमाल नहीं होता।",
  "This conversion needs a server, because browsers cannot handle {to} encoding on their own. Files travel over an encrypted HTTPS connection, are converted, and are deleted afterwards — they are never used for anything else.":
    "इस कन्वर्ज़न के लिए सर्वर चाहिए, क्योंकि ब्राउज़र अपने आप {to} नहीं बना सकते। फ़ाइलें एन्क्रिप्टेड HTTPS कनेक्शन से जाती हैं, बदली जाती हैं और उसके बाद मिटा दी जाती हैं — उनका कभी किसी और काम में इस्तेमाल नहीं होता।",
  "Are my images uploaded anywhere?": "क्या मेरी इमेज कहीं अपलोड होती हैं?",
  "No. {from} to {to} runs entirely inside your browser tab, so the image data never leaves your computer. The one exception is images too big for a browser tab to paint — either over {mb} MB, or too many megapixels for its canvas, which a modern phone photo can reach at just a few MB. Those are sent over HTTPS to our server and deleted after conversion, and the tool tells you when it happens.":
    "नहीं। {from} से {to} का कन्वर्ज़न पूरी तरह आपके ब्राउज़र टैब के भीतर चलता है, इसलिए इमेज का डेटा कभी आपके कंप्यूटर से बाहर नहीं जाता। इकलौता अपवाद वे इमेज हैं जो ब्राउज़र टैब के बनाने लायक से बड़ी हों — या तो {mb} MB से ज़्यादा, या canvas के लिए बहुत ज़्यादा मेगापिक्सल वाली, जहाँ आजकल के फ़ोन की फोटो कुछ ही MB में पहुँच जाती है। ऐसी इमेज HTTPS से हमारे सर्वर पर भेजी जाती हैं और कन्वर्ज़न के बाद मिटा दी जाती हैं, और ऐसा होने पर टूल आपको बता देता है।",
  "No. {from} to {to} runs entirely inside your browser tab, so the image data never leaves your computer.":
    "नहीं। {from} से {to} का कन्वर्ज़न पूरी तरह आपके ब्राउज़र टैब के भीतर चलता है, इसलिए इमेज का डेटा कभी आपके कंप्यूटर से बाहर नहीं जाता।",
  "How many {from} files can I convert at once?": "एक बार में कितनी {from} फ़ाइलें बदली जा सकती हैं?",
  "There is no fixed limit. Add a large batch and they are processed one after another, then delivered as a single ZIP. Very large batches simply take longer — the tab stays responsive throughout.":
    "कोई तय सीमा नहीं है। बड़ा बैच जोड़ें और फ़ाइलें एक के बाद एक प्रोसेस होकर एक ही ZIP में मिल जाती हैं। बहुत बड़े बैच में बस ज़्यादा समय लगता है — पूरे समय टैब काम करता रहता है।",
  "Is there a watermark, sign-up or payment?": "क्या कोई वॉटरमार्क, साइन-अप या भुगतान है?",
  "None of the three. There is no account, no watermark on the output and no charge. The converted file is exactly the image you converted.":
    "तीनों में से कुछ नहीं। न अकाउंट, न आउटपुट पर वॉटरमार्क, न कोई शुल्क। बदली गई फ़ाइल ठीक वही इमेज है जो आपने बदली।",
  "Does this work on a phone?": "क्या यह मोबाइल पर काम करता है?",
  "Yes. The converter works in mobile browsers on both iOS and Android — you can pick images straight from your camera roll and the download lands in your usual downloads folder.":
    "हाँ। कन्वर्टर iOS और Android दोनों के मोबाइल ब्राउज़र में चलता है — आप सीधे गैलरी से इमेज चुन सकते हैं और डाउनलोड आपके रोज़ वाले डाउनलोड फ़ोल्डर में पहुँच जाता है।",

  // ── copy.ts: buildSecurity and buildPrivacyNote ────────────────────────
  "{from} to {to} is one of the few conversions that cannot run in a browser, so your file is sent to our server to be processed. The transfer is encrypted with HTTPS, the file is converted immediately, and it is deleted afterwards. Nothing is kept, indexed or used for training.":
    "{from} से {to} उन गिने-चुने कन्वर्ज़न में से है जो ब्राउज़र में नहीं चल सकते, इसलिए आपकी फ़ाइल प्रोसेस होने के लिए हमारे सर्वर पर भेजी जाती है। भेजना HTTPS से एन्क्रिप्टेड होता है, फ़ाइल तुरंत बदली जाती है और उसके बाद मिटा दी जाती है। कुछ भी रखा, अनुक्रमित या ट्रेनिंग में इस्तेमाल नहीं किया जाता।",
  "Your images stay on your device. {from} to {to} conversion happens entirely inside your browser — there is no upload step, no copy on a server and no record of what you converted. The sole exception is {offload}: they exceed what a browser tab can process, so they are sent over HTTPS, converted and deleted.":
    "आपकी इमेज आपके डिवाइस पर ही रहती हैं। {from} से {to} का कन्वर्ज़न पूरी तरह आपके ब्राउज़र के भीतर होता है — न अपलोड का कोई चरण, न सर्वर पर कोई कॉपी, न इसका कोई रिकॉर्ड कि आपने क्या बदला। इकलौता अपवाद {offload} हैं: वे ब्राउज़र टैब की प्रोसेसिंग क्षमता से बड़ी होती हैं, इसलिए HTTPS से भेजी जाती हैं, बदली जाती हैं और मिटा दी जाती हैं।",
  "Your images stay on your device. {from} to {to} conversion happens entirely inside your browser — there is no upload step, no copy on a server and no record of what you converted.":
    "आपकी इमेज आपके डिवाइस पर ही रहती हैं। {from} से {to} का कन्वर्ज़न पूरी तरह आपके ब्राउज़र के भीतर होता है — न अपलोड का कोई चरण, न सर्वर पर कोई कॉपी, न इसका कोई रिकॉर्ड कि आपने क्या बदला।",
  "Converted on our server over an encrypted connection — files are deleted right after.":
    "हमारे सर्वर पर एन्क्रिप्टेड कनेक्शन से बदला गया — फ़ाइलें उसके तुरंत बाद मिटा दी जाती हैं।",
  "Converted in your browser — files stay on your device ({offload} are processed on our server).":
    "आपके ब्राउज़र में बदला गया — फ़ाइलें आपके डिवाइस पर ही रहती हैं ({offload} हमारे सर्वर पर प्रोसेस होती हैं)।",
  "Converted in your browser — your images never leave your device.":
    "आपके ब्राउज़र में बदला गया — आपकी इमेज कभी आपके डिवाइस से बाहर नहीं जातीं।",

  // ── ConverterPage chrome ───────────────────────────────────────────────
  "Why convert {from} to {to}?": "{from} को {to} में क्यों बदलें?",
  "{from} and {to}, briefly": "{from} और {to}, संक्षेप में",
  "How to convert {from} to {to}": "{from} को {to} में कैसे बदलें",
  "Going the other way?": "उल्टी दिशा में बदलना है?",
  "Convert {name}": "{name} कन्वर्ट करें",
  "or drop {from} images here": "या {from} इमेज यहाँ छोड़ें",
};

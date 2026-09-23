import type { Dict } from "@/i18n/t";

/**
 * Hindi strings for /hi/image-converter (ConverterHub).
 *
 * The format essays and the card names come from the converter layer
 * (conversion.md §6.4), not from here — this file is only the hub's own
 * chrome and its FAQ.
 */
export const hiImageConverter: Dict = {
  "{n} format converters, each one built for a specific pair rather than a generic drop-down. Pick your source format below. Everything is free, batch-capable, and runs in your browser unless the format makes that impossible.":
    "{n} फ़ॉर्मैट कन्वर्टर, और हर एक किसी एक ख़ास जोड़ी के लिए बना है — कोई आम ड्रॉप-डाउन नहीं। नीचे से अपनी फ़ाइल का फ़ॉर्मैट चुनें। सब कुछ मुफ़्त है, एक साथ कई फ़ाइलें चलती हैं, और जहाँ फ़ॉर्मैट ख़ुद रोक न दे वहाँ सब आपके ब्राउज़र में ही होता है।",
  "Convert from {format}": "{format} से बदलें",
  "to {format}": "{format} में",
  "Frequently asked questions": "अक्सर पूछे जाने वाले सवाल",

  "Which image format should I convert to?": "मुझे किस फ़ॉर्मैट में बदलना चाहिए?",
  "JPG for photographs that need to work everywhere. PNG when you need transparency or a lossless file to keep editing. WebP when the destination is a web page and you want the smallest file that still supports transparency. AVIF is smaller again but far fewer applications can open it.":
    "उन फोटो के लिए JPG जिन्हें हर जगह चलना है। PNG तब, जब पारदर्शिता चाहिए या एडिटिंग जारी रखने के लिए बिना नुक़सान वाली फ़ाइल चाहिए। WebP तब, जब फ़ाइल किसी वेब पेज पर जानी है और आपको सबसे छोटी फ़ाइल चाहिए जो पारदर्शिता भी संभाल ले। AVIF उससे भी छोटी है, पर उसे खोल पाने वाले प्रोग्राम कहीं कम हैं।",
  "Do these converters upload my images?": "क्या ये कन्वर्टर मेरी इमेज अपलोड करते हैं?",
  "Almost all of them run entirely inside your browser, so the image never leaves your device. The exceptions are formats a browser cannot decode or encode on its own — HEIC is the main one — and those pages say so directly.":
    "लगभग सभी पूरी तरह आपके ब्राउज़र के भीतर चलते हैं, इसलिए इमेज कभी आपके डिवाइस से बाहर नहीं जाती। अपवाद वे फ़ॉर्मैट हैं जिन्हें ब्राउज़र ख़ुद न पढ़ सकता है और न बना सकता है — मुख्य रूप से HEIC — और वे पन्ने यह सीधे बता देते हैं।",
  "Can I convert several files at once?": "क्या एक साथ कई फ़ाइलें बदली जा सकती हैं?",
  "Yes. Every converter here accepts a batch: add as many files as you like and they come back as a single ZIP rather than as individual downloads.":
    "हाँ। यहाँ का हर कन्वर्टर एक साथ कई फ़ाइलें लेता है: जितनी चाहें जोड़ें, और वे अलग-अलग डाउनलोड के बजाय एक ही ZIP में वापस आती हैं।",
  "Is there a file size limit?": "क्या फ़ाइल के साइज़ की कोई सीमा है?",
  "There is no hard limit. Very large or very high-resolution images are handed to our server on most converters, since a browser tab cannot paint a canvas beyond a certain size — a 48-megapixel phone photo hits that ceiling even though it is only a few megabytes. BMP is the exception and always converts locally.":
    "कोई पक्की सीमा नहीं है। बहुत बड़ी या बहुत ऊँचे रेज़ोल्यूशन वाली इमेज ज़्यादातर कन्वर्टर में हमारे सर्वर को सौंप दी जाती हैं, क्योंकि ब्राउज़र का टैब एक हद से बड़ा canvas नहीं बना सकता — 48 मेगापिक्सल के फ़ोन की फोटो उस छत से टकरा जाती है, भले ही वह कुछ ही मेगाबाइट की हो। BMP अपवाद है और हमेशा आपके अपने डिवाइस पर बदलता है।",
  "Do I lose quality when converting?": "बदलने पर क्या क्वालिटी घटती है?",
  "It depends on the target. PNG is lossless, so nothing is lost in that step. JPG, WebP and AVIF are lossy and re-encode the image, though at sensible quality settings the change is not visible. Converting repeatedly between lossy formats does accumulate damage, so convert once from the best original you have.":
    "यह इस पर निर्भर है कि जाना किसमें है। PNG में कोई नुक़सान नहीं होता, इसलिए उस क़दम में कुछ नहीं घटता। JPG, WebP और AVIF में नुक़सान होता है और वे इमेज दोबारा बनाते हैं, हालाँकि समझदारी वाली क्वालिटी पर यह फ़र्क़ दिखता नहीं। नुक़सान वाले फ़ॉर्मैट के बीच बार-बार बदलने से ख़राबी जुड़ती जाती है, इसलिए अपने पास मौजूद सबसे अच्छे मूल से एक ही बार बदलें।",
};

import type { Dict } from "@/i18n/t";

/**
 * Hindi strings for /hi/pricing (PricingClient).
 *
 * The plan names (Free, Plus, Pro) stay in English: they are product names,
 * the way Spotify's Premium is Premium in India. Everything around them is
 * translated. The currency itself is decided by the server from the visitor's
 * region, not by this page, so no price appears here.
 *
 * "Why are prices different in my country?" is load-bearing copy on /hi: it is
 * the page that tells an Indian reader their market is priced deliberately
 * lower rather than converted from the dollar. Translated in full, not softened.
 */
export const hiPricing: Dict = {
  // Hero
  "Every tool is free today — no account needed": "आज हर टूल मुफ़्त है — खाते की ज़रूरत नहीं",
  "Simple, honest pricing.": "सीधी और ईमानदार क़ीमत।",
  "Start free and stay free for everyday work. Paid plans are on the way for people who need bigger files and more AI runs.":
    "मुफ़्त से शुरू करें और रोज़ के काम के लिए मुफ़्त ही बने रहें। जिन्हें बड़ी फ़ाइलें और ज़्यादा AI इस्तेमाल चाहिए, उनके लिए पेड प्लान रास्ते में हैं।",

  // Controls
  "Monthly": "मासिक",
  "Yearly": "सालाना",
  "Save {n}%": "{n}% बचाएँ",
  "Prices are shown in the currency of your region.": "क़ीमतें आपके क्षेत्र की मुद्रा में दिखाई जाती हैं।",
  "Prices in {currency}": "क़ीमतें {currency} में",
  "Loading prices…": "क़ीमतें लोड हो रही हैं…",
  "Yearly prices are shown per month, billed annually.":
    "सालाना क़ीमतें प्रति माह के हिसाब से दिखाई जाती हैं, बिल सालाना बनता है।",

  // Plans
  "Free": "Free", // i18n-same — the plan name
  "Plus": "Plus", // i18n-same
  "Pro": "Pro", // i18n-same
  "Most popular": "सबसे लोकप्रिय",
  "Coming soon": "जल्द आ रहा है",
  "Everything you need for everyday images.": "रोज़ की इमेज के लिए जो कुछ चाहिए, सब।",
  "For regular users who want more headroom.": "उनके लिए जो नियमित इस्तेमाल करते हैं और थोड़ी और छूट चाहते हैं।",
  "Unlimited AI, the largest files, priority speed.": "असीमित AI, सबसे बड़ी फ़ाइलें, और क़तार में पहले नंबर।",
  "Start using the tools": "टूल इस्तेमाल करना शुरू करें",
  "All {n} tools, no account needed": "सभी {n} टूल, खाते की ज़रूरत नहीं",
  "Unlimited in-browser processing, no daily cap": "ब्राउज़र में असीमित प्रोसेसिंग, कोई रोज़ाना सीमा नहीं",
  "Server processing for files up to 100 MB": "100 MB तक की फ़ाइलों के लिए सर्वर प्रोसेसिंग",
  "10 AI runs / day": "रोज़ 10 बार AI",
  "Batch up to 20 files": "एक बार में 20 फ़ाइलें तक",
  "Results download straight to your device": "नतीजे सीधे आपके डिवाइस पर डाउनलोड होते हैं",
  "Everything in Free": "Free का सब कुछ",
  "Server processing for files up to 200 MB": "200 MB तक की फ़ाइलों के लिए सर्वर प्रोसेसिंग",
  "100 AI runs / day": "रोज़ 100 बार AI",
  "Batch up to 100 files": "एक बार में 100 फ़ाइलें तक",
  "Priority server processing": "सर्वर प्रोसेसिंग में प्राथमिकता",
  "24-hour download links": "24 घंटे चलने वाले डाउनलोड लिंक",
  "Everything in Plus": "Plus का सब कुछ",
  "Server processing for files up to 300 MB": "300 MB तक की फ़ाइलों के लिए सर्वर प्रोसेसिंग",
  "Unlimited AI runs": "असीमित AI इस्तेमाल",
  "Unlimited batch size": "एक बार में जितनी चाहें उतनी फ़ाइलें",
  "Top-priority processing queue": "प्रोसेसिंग क़तार में सर्वोच्च प्राथमिकता",
  "7-day download links": "7 दिन चलने वाले डाउनलोड लिंक",
  "/ month": "/ माह",
  "Free forever": "हमेशा के लिए मुफ़्त",
  "Billed annually — {total} / year": "बिल सालाना — {total} प्रति वर्ष",
  "Billed monthly": "बिल मासिक",
  "Paid plans aren't available yet": "पेड प्लान अभी उपलब्ध नहीं हैं",
  "Paid plans aren't available to purchase yet — the prices above are what we intend to charge when they launch. Everything on":
    "पेड प्लान अभी ख़रीदे नहीं जा सकते — ऊपर दी गई क़ीमतें वही हैं जो हम शुरू होने पर लेने का इरादा रखते हैं। तब तक",
  "is free to use in the meantime.": "पर सब कुछ मुफ़्त इस्तेमाल किया जा सकता है।",

  // Trust tiles
  "Private by default": "शुरू से ही निजी",
  "Most tools run entirely in your browser — your images never leave your device.":
    "ज़्यादातर टूल पूरी तरह आपके ब्राउज़र में चलते हैं — आपकी इमेज कभी आपके डिवाइस से बाहर नहीं जातीं।",
  "No account needed": "खाते की ज़रूरत नहीं",
  "Open a tool and go. Sign-up has never been required to use oMyImage.":
    "टूल खोलिए और चल पड़िए। oMyImage इस्तेमाल करने के लिए कभी साइन-अप ज़रूरी नहीं रहा।",
  "Deleted automatically": "अपने आप मिट जाता है",
  "On Free nothing is stored at all — results download straight to you. Where a plan offers download links, that window is the retention, and nothing is ever reused.":
    "Free में कुछ भी सहेजा ही नहीं जाता — नतीजे सीधे आपके पास डाउनलोड होते हैं। जिन प्लान में डाउनलोड लिंक मिलते हैं, वहाँ उतनी ही अवधि तक फ़ाइल रखी जाती है, और कुछ भी कभी दोबारा इस्तेमाल नहीं होता।",

  // FAQ
  "Questions": "सवाल",
  "Do I need an account to use oMyImage?": "क्या oMyImage इस्तेमाल करने के लिए खाता चाहिए?",
  "No. Every tool works right now with no account and no sign-up. Accounts are only relevant to paid plans, which aren't live yet.":
    "नहीं। हर टूल अभी, बिना खाते और बिना साइन-अप के चलता है। खाता सिर्फ़ पेड प्लान के लिए मायने रखता है, और वे अभी शुरू नहीं हुए हैं।",
  "Is the free tier really free?": "क्या मुफ़्त वाला प्लान सचमुच मुफ़्त है?",
  "Yes. There's no trial that converts into a paid plan and no stored payment method. The free tools are simply free.":
    "हाँ। न कोई ट्रायल है जो चुपके से पेड प्लान बन जाए, न कोई भुगतान का तरीक़ा सहेजा जाता है। मुफ़्त टूल बस मुफ़्त हैं।",
  "When can I buy Plus or Pro?": "Plus या Pro कब ख़रीद सकते हैं?",
  "Not yet — billing isn't live, which is why those buttons are disabled rather than pretending to take payment. The prices shown are what we intend to charge when they launch.":
    "अभी नहीं — बिलिंग चालू ही नहीं है, और इसीलिए वे बटन भुगतान लेने का नाटक करने के बजाय बंद रखे गए हैं। जो क़ीमतें दिख रही हैं, वही हम शुरू होने पर लेने का इरादा रखते हैं।",
  "Why are prices different in my country?": "मेरे देश में क़ीमतें अलग क्यों हैं?",
  "Your currency follows the country you're browsing from, so there's nothing to pick. India and a few other markets are priced deliberately lower rather than converted; everywhere else is derived from our US prices at a rate we refresh periodically, not the day's exchange rate.":
    "मुद्रा उसी देश के हिसाब से तय होती है जहाँ से आप ब्राउज़ कर रहे हैं, इसलिए चुनने को कुछ है ही नहीं। भारत और कुछ दूसरे बाज़ारों में क़ीमतें जान-बूझकर कम रखी गई हैं, डॉलर से बदलकर नहीं निकाली गईं; बाक़ी जगहों की क़ीमतें हमारी अमेरिकी क़ीमतों से एक दर पर निकलती हैं जिसे हम समय-समय पर ताज़ा करते हैं — उस दिन के विनिमय दर से नहीं।",
  "What counts as an AI run?": "AI का एक इस्तेमाल किसे गिना जाता है?",
  "The server-side AI tools — Remove Background and Upscale Image. Those are the only things we meter, because they are the only ones that cost us real money per use. Everything that runs in your browser is unlimited on every plan and always will be.":
    "सर्वर पर चलने वाले AI टूल — बैकग्राउंड हटाएँ और इमेज की क्वालिटी बढ़ाएँ। हम सिर्फ़ इन्हीं की गिनती रखते हैं, क्योंकि हर इस्तेमाल पर असली पैसा सिर्फ़ इन्हीं में लगता है। जो कुछ आपके ब्राउज़र में चलता है वह हर प्लान में असीमित है, और हमेशा रहेगा।",
  "Why do the paid plans only raise the file size a little?": "पेड प्लान फ़ाइल का साइज़ इतना कम ही क्यों बढ़ाते हैं?",
  "Because almost nothing needs it. Most images are processed entirely in your browser, where there is no size limit we impose at all — the only ceiling is what your own device can paint. Our server is for the files too large or too high-resolution for that, and 100 MB already covers the overwhelming majority. We would rather quote a number we can actually deliver than a headline gigabyte.":
    "क्योंकि लगभग किसी को उसकी ज़रूरत ही नहीं पड़ती। ज़्यादातर इमेज पूरी तरह आपके ब्राउज़र में प्रोसेस होती हैं, जहाँ हमारी लगाई कोई साइज़ सीमा है ही नहीं — इकलौती छत यह है कि आपका अपना डिवाइस कितना बना सकता है। हमारा सर्वर उन्हीं फ़ाइलों के लिए है जो उसके लिए बहुत बड़ी या बहुत ऊँचे रेज़ोल्यूशन की हों, और 100 MB में भारी बहुमत पहले ही आ जाता है। हम सुर्ख़ियों वाले गीगाबाइट के बजाय वह आँकड़ा बताना पसंद करेंगे जो सचमुच पूरा कर सकें।",
  "What decides whether an image is processed in my browser or on your server?":
    "यह क्या तय करता है कि इमेज मेरे ब्राउज़र में प्रोसेस होगी या आपके सर्वर पर?",
  "Resolution, mostly — not file size. A browser can only paint a canvas up to a certain number of pixels, and a modern 48-megapixel phone photo can exceed it while still being only a few megabytes. When that happens we process the image on our server instead and delete it straight after. Each tool tells you which path it took.":
    "ज़्यादातर रेज़ोल्यूशन — फ़ाइल का साइज़ नहीं। ब्राउज़र एक तय पिक्सल संख्या तक ही canvas बना सकता है, और आजकल के 48 मेगापिक्सल वाले फ़ोन की फोटो कुछ ही मेगाबाइट की होकर भी उससे आगे निकल सकती है। ऐसा होने पर हम इमेज अपने सर्वर पर प्रोसेस करते हैं और तुरंत बाद मिटा देते हैं। हर टूल आपको बता देता है कि उसने कौन सा रास्ता लिया।",
  "Are my images kept?": "क्या मेरी इमेज सहेजी जाती हैं?",
  "Most tools never upload at all. For the ones that do, results are deleted automatically within about an hour. See the Privacy Policy for the detail.":
    "ज़्यादातर टूल कुछ अपलोड करते ही नहीं। जो करते हैं, उनके नतीजे क़रीब एक घंटे के भीतर अपने आप मिटा दिए जाते हैं। ब्यौरे के लिए प्राइवेसी पॉलिसी देखें।",

  // Closing CTA
  "Start now — no card, no account.": "अभी शुरू करें — न कार्ड, न खाता।",
  "All {n} tools are free to use today. Paid plans will add headroom, not gatekeeping.":
    "सभी {n} टूल आज मुफ़्त इस्तेमाल किए जा सकते हैं। पेड प्लान छूट बढ़ाएँगे, रास्ता नहीं रोकेंगे।",
  "Browse all tools": "सारे टूल देखें",
};

import type { Dict } from "@/i18n/t";

/**
 * Hindi strings for /hi/contact (ContactBody).
 *
 * The support address itself is never translated, and neither are the legal
 * page names in the footer — those are links whose labels come from this file
 * so they read as the Hindi pages they point at.
 */
export const hiContact: Dict = {
  "Contact": "संपर्क",
  "Get in touch": "हमसे बात करें",
  "We read everything that comes in and usually reply within two business days. There's a good chance the answer is already below.":
    "जो भी आता है हम सब पढ़ते हैं और आम तौर पर दो कामकाजी दिनों में जवाब दे देते हैं। पूरी संभावना है कि आपका जवाब नीचे पहले से मौजूद हो।",

  // Channels
  "Support & bug reports": "सहायता और गड़बड़ी की शिकायत",
  "Something not working, or a tool giving an odd result? Tell us the tool, your browser, and what you expected — that's usually enough for us to reproduce it.":
    "कुछ काम नहीं कर रहा, या किसी टूल ने अजीब नतीजा दिया? हमें बताएँ कि कौन सा टूल था, आपका ब्राउज़र कौन सा है और आपको क्या उम्मीद थी — आम तौर पर उसी से हम दिक़्क़त दोबारा पैदा कर लेते हैं।",
  "Privacy & legal": "प्राइवेसी और क़ानूनी",
  "Questions about how your data is handled, takedown requests, or anything relating to our terms.":
    "आपका डेटा कैसे संभाला जाता है, कोई सामग्री हटाने का अनुरोध, या हमारी शर्तों से जुड़ी कोई भी बात।",
  "Business & partnerships": "कारोबार और साझेदारी",
  "Bulk use, integrations, or anything commercial.": "बड़े पैमाने पर इस्तेमाल, इंटीग्रेशन, या कोई भी व्यावसायिक बात।",

  // No-form note
  "Why there's no contact form:": "यहाँ संपर्क फ़ॉर्म क्यों नहीं है:",
  "a form would mean collecting and storing your details on our servers. Email keeps that between you and us — nothing about you is stored on {site} at all.":
    "फ़ॉर्म का मतलब होता आपकी जानकारी इकट्ठा करके अपने सर्वर पर रखना। ईमेल यह बात आपके और हमारे बीच रखता है — {site} पर आपके बारे में कुछ भी सहेजा नहीं जाता।",

  // FAQ
  "Before you write": "लिखने से पहले",
  "Is oMyImage free?": "क्या oMyImage मुफ़्त है?",
  "Yes. All 30 tools are free to use with no account. Paid plans are planned for larger files and more AI runs, but nothing is chargeable today.":
    "हाँ। तीसों टूल बिना किसी खाते के मुफ़्त इस्तेमाल किए जा सकते हैं। बड़ी फ़ाइलों और ज़्यादा AI इस्तेमाल के लिए पेड प्लान की योजना है, पर आज कुछ भी पैसे लेकर नहीं दिया जाता।",
  "Are my images uploaded?": "क्या मेरी इमेज अपलोड होती हैं?",
  "For most tools, no — they run entirely in your browser and the file never leaves your device. Uploads only happen for images too large for a browser tab to handle, the AI tools, and HEIC conversion. Each of those says so on its own page.":
    "ज़्यादातर टूल में नहीं — वे पूरी तरह आपके ब्राउज़र में चलते हैं और फ़ाइल कभी आपके डिवाइस से बाहर नहीं जाती। अपलोड सिर्फ़ तब होता है जब इमेज ब्राउज़र टैब के संभालने लायक से बड़ी हो, AI टूल हों, या HEIC कन्वर्ज़न हो। इनमें से हर एक अपने पन्ने पर यह साफ़ बता देता है।",
  "Why does HEIC conversion upload my photo when other tools don't?":
    "बाक़ी टूल अपलोड नहीं करते, तो HEIC कन्वर्ज़न मेरी फोटो क्यों भेजता है?",
  "Decoding HEIC needs a library we can't ship to browsers under its licence, so that one conversion has to run on our server. The file is deleted within about an hour.":
    "HEIC को पढ़ने के लिए एक लाइब्रेरी चाहिए जिसे उसके लाइसेंस के चलते हम ब्राउज़र तक नहीं पहुँचा सकते, इसलिए वह एक कन्वर्ज़न हमारे सर्वर पर चलाना पड़ता है। फ़ाइल क़रीब एक घंटे के भीतर मिटा दी जाती है।",
  "How long do you keep processed files?": "प्रोसेस की गई फ़ाइलें आप कितने समय रखते हैं?",
  "Server-processed results are deleted automatically within roughly an hour. We keep no backups and never reuse your images.":
    "सर्वर पर प्रोसेस हुए नतीजे क़रीब एक घंटे के भीतर अपने आप मिटा दिए जाते हैं। हम कोई बैकअप नहीं रखते और आपकी इमेज कभी दोबारा इस्तेमाल नहीं करते।",
  "A tool says it isn't enabled on this server.": "कोई टूल कहता है कि वह इस सर्वर पर चालू नहीं है।",
  "That's the AI tools or HEIC conversion reporting that their engine isn't installed on the backend. It's a deployment state, not a fault with your file.":
    "यह AI टूल या HEIC कन्वर्ज़न बता रहा है कि उसका इंजन बैकएंड पर इंस्टॉल नहीं है। यह तैनाती की स्थिति है, आपकी फ़ाइल में कोई ख़राबी नहीं।",
  "Can I use the output commercially?": "क्या नतीजे को व्यावसायिक रूप से इस्तेमाल कर सकते हैं?",
  "Yes. Your images stay yours, and you can use anything you produce for any lawful purpose.":
    "हाँ। आपकी इमेज आपकी ही रहती हैं, और जो कुछ आप बनाते हैं उसे किसी भी वैध काम में इस्तेमाल कर सकते हैं।",

  // Footer links
  "Privacy Policy": "प्राइवेसी पॉलिसी",
  "Terms of Service": "सेवा की शर्तें",
  "Refund Policy": "रिफ़ंड पॉलिसी",
  "Pricing": "क़ीमत",
};

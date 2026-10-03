import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/i18n/tool-meta";
import { localeHref } from "@/lib/i18n/links";
import {
  LegalShell,
  LegalSection,
  LegalSubsection,
  LegalP,
  LegalUl,
  LegalCallout,
  LegalTable,
} from "@/components/LegalShell";

/**
 * Hindi cookie policy — the same structure and the same section ids as
 * /cookies, with only the prose translated. The ids are the TOC anchors and a
 * contract across locales: never rename one on a single side.
 *
 * A legal page is written, not key-translated (conversion.md §6.5): the prose
 * is dense with inline <code> and <strong>, and a dictionary of sentence
 * fragments would either lose that markup or force Hindi into English word
 * order. oMyPDF reached the same conclusion for its four locales.
 *
 * Storage keys, cookie names and domains stay in Latin — the reader has to
 * match them against what their own browser shows. Browser MENU paths are
 * given in Devanagari with the English label in brackets, because most Indian
 * browsers run the English UI and a reader following the steps needs to
 * recognise what is actually on their screen. (The pt twin translates them
 * outright; here the bracket is the honest version.)
 */
export const metadata: Metadata = {
  ...pageMetadata({
    englishPath: "/cookies",
    locale: "hi",
    title: "कुकी पॉलिसी | oMyImage",
    description:
      "oMyImage आपके ब्राउज़र में क्या सहेजता है, क्यों सहेजता है और आप उसे कैसे नियंत्रित करें। डिफ़ॉल्ट रूप से सिर्फ़ ज़रूरी — एनालिटिक्स तब तक बंद रहती है जब तक आप अनुमति न दें।",
  }),
  robots: { index: true, follow: true },
};

const toc = [
  { id: "what", title: "1. कुकीज़ क्या हैं" },
  { id: "consent", title: "2. आपकी सहमति" },
  { id: "types", title: "3. हम क्या सहेजते हैं" },
  { id: "third", title: "4. तीसरे पक्ष की कुकीज़" },
  { id: "control", title: "5. कुकीज़ कैसे नियंत्रित करें" },
  { id: "changes", title: "6. इस पॉलिसी में बदलाव" },
  { id: "contact", title: "7. संपर्क" },
];

export default function CookiesPage() {
  return (
    <LegalShell
      locale="hi"
      title="कुकी पॉलिसी"
      subtitle="oMyImage आपके ब्राउज़र में क्या सहेजता है, क्यों सहेजता है, और आप अपना मन कैसे बदल सकते हैं।"
      updated="19 अगस्त 2026"
      toc={toc}
    >
      <LegalSection id="what" title="1. कुकीज़ क्या हैं">
        <LegalCallout>
          oMyImage अपनी कोई कुकी इस्तेमाल नहीं करता। वह जो सहेजता है वह{" "}
          <strong>लोकल स्टोरेज</strong> की मुट्ठी भर प्रविष्टियाँ हैं, जो कभी आपके डिवाइस से बाहर
          नहीं जातीं, और — सिर्फ़ तभी जब आप अनुमति दें — Google की एनालिटिक्स कुकीज़। आपकी इमेज इस
          पूरे मामले में कहीं नहीं आतीं।
        </LegalCallout>
        <LegalP>
          कुकीज़ छोटी टेक्स्ट फ़ाइलें होती हैं जो कोई वेबसाइट आपके आने पर आपके डिवाइस में सहेज देती
          है। इनका इस्तेमाल आम तौर पर साइट को चलाने, आपकी पसंद याद रखने और साइट चलाने वालों को यह
          दिखाने के लिए होता है कि साइट कैसे इस्तेमाल हो रही है। कोई कुकी &ldquo;सेशन&rdquo; की हो
          सकती है, जो ब्राउज़र बंद करते ही मिट जाती है, या &ldquo;स्थायी&rdquo;, जो एक तय अवधि तक या
          आपके मिटाने तक बनी रहती है।
        </LegalP>
        <LegalP>
          इससे मिलती-जुलती तकनीकों में वेब स्टोरेज (<code>localStorage</code> और{" "}
          <code>sessionStorage</code>) और ट्रैकिंग पिक्सल आते हैं। यह पॉलिसी &ldquo;कुकीज़&rdquo; शब्द
          इन सबके लिए इस्तेमाल करती है, क्योंकि असल सवाल एक ही है — आपके डिवाइस पर क्या रहता है और उसे
          कौन पढ़ सकता है।
        </LegalP>
      </LegalSection>

      <LegalSection id="consent" title="2. आपकी सहमति">
        <LegalP>
          आपकी पहली विज़िट पर पेज के नीचे सहमति का एक बैनर दिखता है। आपके जवाब देने से पहले कोई
          वैकल्पिक चीज़ लोड नहीं होती। आपके पास तीन विकल्प हैं:
        </LegalP>
        <LegalUl>
          <li>
            <strong>सभी स्वीकारें</strong> — ज़रूरी स्टोरेज के साथ एनालिटिक्स भी। Google Analytics
            लोड होता है और हमें समग्र रूप से दिखता है कि लोग कौन-से टूल इस्तेमाल करते हैं।
          </li>
          <li>
            <strong>सभी अस्वीकारें</strong> — सिर्फ़ ज़रूरी स्टोरेज। Google Analytics कभी लोड नहीं
            होता और आपकी विज़िट से कोई एनालिटिक्स डेटा नहीं लिया जाता।
          </li>
          <li>
            <strong>अपने हिसाब से चुनें</strong> — श्रेणी-दर-श्रेणी तय करें। ज़रूरी स्टोरेज बंद नहीं
            किया जा सकता, क्योंकि उसके बिना साइट न आपकी थीम याद रख सकती है और न, दरअसल, आपकी यही
            पसंद।
          </li>
        </LegalUl>
        <LegalP>
          आपका जवाब आपके डिवाइस में <code>omyimage_cookie_consent</code> और{" "}
          <code>omyimage_cookie_prefs</code> में सहेजा जाता है। आप इसे किसी भी पेज के नीचे मौजूद{" "}
          <strong>कुकी सेटिंग</strong> लिंक से कभी भी बदल सकते हैं। चूँकि एनालिटिक्स स्क्रिप्ट सिर्फ़
          नए पेज लोड पर ही जोड़ी या हटाई जा सकती है, इस एक सेटिंग को बदलने पर पेज दोबारा लोड होता है।
        </LegalP>
        <LegalP>
          हम विज्ञापन या साइटों के आर-पार ट्रैक करने वाली कुकीज़ इस्तेमाल नहीं करते, और आपका डेटा
          विज्ञापन नेटवर्कों के साथ साझा नहीं करते।
        </LegalP>
      </LegalSection>

      <LegalSection id="types" title="3. हम क्या सहेजते हैं">
        <LegalSubsection title="ज़रूरी — हमेशा चालू">
          <LegalP>
            ये <code>localStorage</code> की प्रविष्टियाँ हैं, कुकीज़ नहीं: इन्हें साइट लिखती है, साइट
            ही पढ़ती है, और ये कभी हम तक या किसी और तक नहीं भेजी जातीं। इन्हें बंद नहीं किया जा सकता,
            क्योंकि इन्हीं की वजह से इंटरफ़ेस कुछ भी याद रख पाता है। ब्राउज़र में साइट का डेटा साफ़
            करने पर ये सब हट जाती हैं।
          </LegalP>
          <LegalUl>
            <li>
              <code>theme</code> — आपने लाइट मोड चुना था या डार्क।
            </li>
            <li>
              <code>omyimage_cookie_consent</code> और <code>omyimage_cookie_prefs</code> — सहमति
              बैनर पर आपका जवाब, ताकि हर पेज पर दोबारा न पूछा जाए।
            </li>
            <li>
              <code>omyimage:favorites</code> और हाल में इस्तेमाल किए गए टूल — ताकि आपके शॉर्टकट वहीं
              बने रहें।
            </li>
            <li>
              <code>omyimage:currency</code> — क़ीमत वाले पेज पर आपकी चुनी हुई मुद्रा।
            </li>
            <li>
              <code>omyimage:premium-usage</code> — आज हुए प्रीमियम टूल के उपयोगों की एक स्थानीय
              गिनती।
            </li>
          </LegalUl>
          <LegalP>
            साइट को परोसने और सुरक्षित रखने वाला Cloudflare भी अनुरोधों की दर सीमित करने और बॉट पहचानने
            के लिए कड़ाई से ज़रूरी कुकीज़ सेट कर सकता है। वे सेक्शन 4 में शामिल हैं।
          </LegalP>
        </LegalSubsection>

        <LegalSubsection title="एनालिटिक्स — सिर्फ़ आपकी सहमति से">
          <LegalP>
            अगर आप एनालिटिक्स स्वीकार करते हैं, तो हम Google Analytics 4 लोड करते हैं ताकि समग्र रूप
            से समझ सकें कि साइट कैसे इस्तेमाल हो रही है: कौन-से टूल लोकप्रिय हैं, किन पेजों पर त्रुटि
            आती है, किन जगहों से ज़्यादा या कम लोग आते हैं। इसी के आधार पर हम तय करते हैं कि क्या बनाना
            है और क्या ठीक करना है। इसका इस्तेमाल आपकी पहचान करने के लिए कभी नहीं होता, और हम इस डेटा
            को आपकी प्रोसेस की गई किसी चीज़ से जोड़ने की कोशिश नहीं करते।
          </LegalP>
          <LegalUl>
            <li>
              <code>_ga</code>, <code>_ga_*</code> — अलग-अलग उपयोगकर्ताओं और सेशनों में फ़र्क़ करती
              हैं। 2 साल में समाप्त।
            </li>
            <li>
              <code>_gid</code> — 24 घंटे की अवधि में उपयोगकर्ताओं में फ़र्क़ करती है। 24 घंटे में
              समाप्त।
            </li>
          </LegalUl>
          <LegalP>
            अगर आप एनालिटिक्स अस्वीकार कर देते हैं, या बैनर का जवाब ही कभी नहीं देते, तो Google
            Analytics की स्क्रिप्ट माँगी तक नहीं जाती — ये कुकीज़ बनकर नज़रअंदाज़ नहीं की जातीं, वे
            बनती ही नहीं।
          </LegalP>
        </LegalSubsection>

        <LegalSubsection title="विज्ञापन — हम इस्तेमाल नहीं करते">
          <LegalP>
            हम विज्ञापन या ट्रैकिंग कुकीज़ का इस्तेमाल <strong>नहीं</strong> करते। oMyImage पर कोई
            विज्ञापन नहीं दिखता और ब्राउज़िंग का व्यवहार विज्ञापन नेटवर्कों के साथ साझा नहीं किया
            जाता। सहमति बैनर में विज्ञापन वाला विकल्प इसलिए है कि आगे कभी यह बदले तो आपकी पसंद पहले से
            दर्ज हो; आज वह कुछ भी नियंत्रित नहीं करता।
          </LegalP>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="third" title="4. तीसरे पक्ष की कुकीज़">
        <LegalP>
          oMyImage के भीतर सिर्फ़ ये तीसरे पक्ष आपके ब्राउज़र में कुछ सहेज सकते हैं। हर एक अपनी
          पॉलिसी से चलता है:
        </LegalP>
        <LegalTable
          headers={["सेवा", "किसलिए", "प्राइवेसी पॉलिसी"]}
          rows={[
            [
              "Cloudflare",
              "सुरक्षा और स्पीड के लिए कड़ाई से ज़रूरी कुकीज़ (अनुरोध की दर सीमित करना, बॉट पहचानना)",
              "cloudflare.com/privacypolicy",
            ],
            [
              "Google Analytics",
              "एनालिटिक्स कुकीज़, जो सिर्फ़ आपके एनालिटिक्स स्वीकार करने के बाद सेट होती हैं",
              "policies.google.com/privacy",
            ],
            [
              "Google Fonts",
              "आइकन फ़ॉन्ट परोसता है। कोई कुकी सेट नहीं करता, पर Google को आपका IP पता मिलता है — जैसा उस फ़ॉन्ट का इस्तेमाल करने वाली किसी भी साइट पर होता",
              "policies.google.com/privacy",
            ],
            [
              "Google Drive (वैकल्पिक)",
              "सिर्फ़ तब जब आप Drive से इंपोर्ट करें। ऐक्सेस टोकन विज़िट भर मेमोरी में रहता है और कभी सहेजा नहीं जाता",
              "policies.google.com/privacy",
            ],
            [
              "Dropbox (वैकल्पिक)",
              "सिर्फ़ तब जब आप Dropbox से इंपोर्ट करें। उसका चूज़र Dropbox की अपनी विंडो में चलता है; कोई अकाउंट नहीं जुड़ता और कोई टोकन जारी नहीं होता",
              "dropbox.com/privacy",
            ],
          ]}
        />
        <LegalP>
          क्लाउड से इंपोर्ट करने की पूरी जानकारी हमारी{" "}
          <Link href={`${localeHref("/privacy", "hi")}#google-drive`} className="text-secondary hover:underline">
            प्राइवेसी पॉलिसी
          </Link>{" "}
          के सेक्शन 7 और 8 में दी गई है।
        </LegalP>
      </LegalSection>

      <LegalSection id="control" title="5. कुकीज़ कैसे नियंत्रित करें">
        <LegalSubsection title="oMyImage पर">
          <LegalP>
            किसी भी पेज के नीचे मौजूद <strong>कुकी सेटिंग</strong> लिंक इस्तेमाल करें। वह सहमति बैनर
            को आपकी मौजूदा पसंद के साथ दोबारा खोल देता है, इसलिए आप बाक़ी को छेड़े बिना एक श्रेणी बदल
            सकते हैं।
          </LegalP>
        </LegalSubsection>
        <LegalSubsection title="अपने ब्राउज़र में">
          <LegalP>
            हर जाना-माना ब्राउज़र आपको कुकीज़ और साइट डेटा देखने, रोकने और मिटाने देता है। सब कुछ
            रोक देने पर ऊपर गिनाई गई ज़रूरी प्रविष्टियाँ भी मिट जाती हैं, यानी साइट आपकी थीम भूल
            जाएगी और कुकीज़ के बारे में दोबारा पूछेगी:
          </LegalP>
          <LegalUl>
            <li>
              <strong>Chrome:</strong> सेटिंग्स (Settings) → प्राइवेसी और सुरक्षा (Privacy and
              security) → तीसरे पक्ष की कुकीज़ (Third-party cookies)
            </li>
            <li>
              <strong>Firefox:</strong> सेटिंग्स (Settings) → प्राइवेसी और सुरक्षा (Privacy &amp;
              Security) → कुकीज़ और साइट डेटा (Cookies and Site Data)
            </li>
            <li>
              <strong>Safari:</strong> सेटिंग्स (Settings) → प्राइवेसी (Privacy) → साइट डेटा संभालें
              (Manage Website Data)
            </li>
            <li>
              <strong>Edge:</strong> सेटिंग्स (Settings) → कुकीज़ और साइट अनुमतियाँ (Cookies and site
              permissions) → कुकीज़ संभालें और मिटाएँ (Manage and delete cookies)
            </li>
          </LegalUl>
        </LegalSubsection>
        <LegalSubsection title="हर साइट पर Google Analytics से बाहर निकलना">
          <LegalP>
            सिर्फ़ इस साइट पर नहीं, हर साइट पर Google Analytics से बाहर रहना हो तो{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
            >
              Google Analytics ऑप्ट-आउट ब्राउज़र ऐड-ऑन
            </a>{" "}
            इंस्टॉल कर लें।
          </LegalP>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="changes" title="6. इस पॉलिसी में बदलाव">
        <LegalP>
          सेवा बदलने के साथ हम इस पॉलिसी को अपडेट कर सकते हैं। इस पेज के ऊपर दी गई
          &ldquo;आख़िरी अपडेट&rdquo; की तारीख़ हमेशा मौजूदा संस्करण की होती है, और अहम बदलाव लागू होने
          से पहले यहाँ दिख जाते हैं।
        </LegalP>
      </LegalSection>

      <LegalSection id="contact" title="7. संपर्क">
        <LegalP>
          कुकीज़ या इस पॉलिसी से जुड़े सवाल हमारे{" "}
          <Link href={localeHref("/contact", "hi")} className="text-secondary hover:underline">
            संपर्क पेज
          </Link>{" "}
          के ज़रिए भेजे जा सकते हैं। हमारी{" "}
          <Link href={localeHref("/privacy", "hi")} className="text-secondary hover:underline">
            प्राइवेसी पॉलिसी
          </Link>{" "}
          और{" "}
          <Link href={localeHref("/terms", "hi")} className="text-secondary hover:underline">
            सेवा की शर्तें
          </Link>{" "}
          भी देखें।
        </LegalP>
      </LegalSection>
    </LegalShell>
  );
}

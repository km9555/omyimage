import type { Metadata } from "next";
import Link from "next/link";
import {
  LegalShell,
  LegalSection,
  LegalP,
  LegalUl,
  LegalCallout,
} from "@/components/LegalShell";
import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/i18n/tool-meta";
import { localeHref } from "@/lib/i18n/links";

/**
 * Hindi refund policy — a written twin of /refunds (conversion.md §6.5), with
 * the same section ids, so a link to #chargebacks lands on the same clause in
 * every language.
 *
 * The consumer-law paragraph keeps the EU/UK withdrawal right exactly as the
 * English page states it and adds nothing about Indian consumer law: §10
 * already says a stronger local right prevails, and inventing a specific
 * claim about the Consumer Protection Act that no lawyer has reviewed would
 * be a worse error than the omission. Same reasoning as the pt twin.
 *
 * The /contact and /pricing links resolve through localeHref, which falls
 * back to the English path because those pages are outside the Hindi pilot.
 * That is the intended behaviour, not a missing translation.
 */
export const metadata: Metadata = pageMetadata({
  englishPath: "/refunds",
  locale: "hi",
  title: "रिफ़ंड पॉलिसी | oMyImage",
  description:
    "oMyImage की रिफ़ंड पॉलिसी — पेड प्लान में रिफ़ंड कैसे काम करते हैं, माँगने की समय-सीमा क्या है, और किन बातों पर रिफ़ंड मिलता है और किन पर नहीं।",
});

const toc = [
  { id: "status", title: "1. अभी की स्थिति" },
  { id: "free", title: "2. मुफ़्त सेवा" },
  { id: "window", title: "3. रिफ़ंड की समय-सीमा" },
  { id: "eligible", title: "4. किन पर रिफ़ंड मिलता है" },
  { id: "noteligible", title: "5. किन पर नहीं मिलता" },
  { id: "request", title: "6. रिफ़ंड कैसे माँगें" },
  { id: "processing", title: "7. प्रक्रिया और समय" },
  { id: "cancellation", title: "8. रद्द करना और रिफ़ंड" },
  { id: "chargebacks", title: "9. कार्ड पर चार्जबैक" },
  { id: "consumer", title: "10. उपभोक्ता के अधिकार" },
  { id: "changes", title: "11. बदलाव" },
  { id: "contact", title: "12. संपर्क" },
];

export default function RefundsPage() {
  return (
    <LegalShell
      locale="hi"
      title="रिफ़ंड पॉलिसी"
      subtitle={`${SITE.name} के पेड प्लान में रिफ़ंड कैसे काम करते हैं।`}
      updated="3 अगस्त 2026"
      toc={toc}
    >
      <LegalSection id="status" title="1. अभी की स्थिति">
        <LegalCallout>
          <strong>अभी कोई पेड प्लान है ही नहीं।</strong> {SITE.name} के सारे टूल आज मुफ़्त हैं,
          इसलिए न कुछ वसूला जाता है और न कुछ लौटाने को होता है। यह पॉलिसी पहले से प्रकाशित की जा रही
          है ताकि कोई पेड प्लान शुरू होने से पहले ही नियम साफ़ रहें।
        </LegalCallout>
      </LegalSection>

      <LegalSection id="free" title="2. मुफ़्त सेवा">
        <LegalP>
          मुफ़्त प्लान मुफ़्त है। उसमें कोई शुल्क नहीं है, कोई ऐसा ट्रायल नहीं है जो अपने आप पेड
          प्लान बन जाए, और कोई भुगतान का तरीक़ा सहेजा नहीं जाता। मुफ़्त टूल इस्तेमाल करने के लिए आपसे
          कभी पैसे नहीं लिए जाएँगे।
        </LegalP>
      </LegalSection>

      <LegalSection id="window" title="3. रिफ़ंड की समय-सीमा">
        <LegalP>
          पेड प्लान शुरू होने के बाद आप अपने सबसे हालिया भुगतान का पूरा रिफ़ंड शुल्क लगने के{" "}
          <strong>7 दिन</strong> के भीतर माँग सकेंगे, नीचे दी गई शर्तों के अधीन।
        </LegalP>
        <LegalP>
          चूँकि प्लान का शुल्क एक तय अवधि के लिए पहले ही लिया जाता है, रिफ़ंड उसी भुगतान पर लागू होता
          है जिस पर आपकी आपत्ति है, अवधि के किसी हिस्से पर नहीं।
        </LegalP>
      </LegalSection>

      <LegalSection id="eligible" title="4. किन पर रिफ़ंड मिलता है">
        <LegalUl>
          <li>एक ही बिलिंग अवधि के लिए आपसे दो बार शुल्क लिया गया।</li>
          <li>
            रद्द करने के बाद आपसे ऐसी अवधि के लिए शुल्क लिया गया जो रद्द करने के बाद शुरू होती है।
          </li>
          <li>
            कोई पेड सुविधा वैसे काम नहीं कर रही थी जैसा बताया गया था, और आपके बताने के बाद भी हम उसे
            उचित समय में ठीक नहीं कर सके।
          </li>
          <li>
            आपने ग़लती से सदस्यता ले ली और 7 दिन की सीमा के भीतर पेड सुविधाओं का बड़े पैमाने पर
            इस्तेमाल नहीं किया।
          </li>
        </LegalUl>
      </LegalSection>

      <LegalSection id="noteligible" title="5. किन पर रिफ़ंड नहीं मिलता">
        <LegalUl>
          <li>शुल्क लगने के 7 दिन बाद की गई माँगें।</li>
          <li>
            बिलिंग अवधि के दौरान पेड कोटे का बड़े पैमाने पर इस्तेमाल — पेड प्लान ऐसी डिजिटल सेवाएँ
            हैं जो भुगतान के तुरंत बाद मिल जाती हैं।
          </li>
          <li>
            टूल के बताए अनुसार काम करने के बावजूद नतीजे की क्वालिटी से असंतोष। मुफ़्त प्लान इसीलिए है
            कि आप पैसे देने से पहले क्वालिटी परख लें।
          </li>
          <li>
            आपके डिवाइस, ब्राउज़र या नेटवर्क से, या ख़राब तथा असमर्थित फ़ाइलों से पैदा हुई दिक़्क़तें।
          </li>
          <li>
            हमारे उचित नियंत्रण से बाहर की अनुपलब्धता या रुकावट, या पहले से तय रखरखाव।
          </li>
          <li>
            हमारी{" "}
            <Link href={localeHref("/terms", "hi")} className="text-secondary hover:underline">
              सेवा की शर्तों
            </Link>{" "}
            के उल्लंघन पर निलंबित या बंद किए गए अकाउंट।
          </li>
        </LegalUl>
      </LegalSection>

      <LegalSection id="request" title="6. रिफ़ंड कैसे माँगें">
        <LegalP>
          हमारे{" "}
          <Link href={localeHref("/contact", "hi")} className="text-secondary hover:underline">
            संपर्क पेज
          </Link>{" "}
          से हमसे संपर्क करें और बताएँ कि ख़रीद में कौन-सा ईमेल इस्तेमाल हुआ, शुल्क की अनुमानित तारीख़
          और रक़म क्या थी, और दिक़्क़त क्या है। बैंक में चार्जबैक दर्ज कराने से पहले एक बार हमसे बात कर
          लें — सीधे आपके साथ मामला लगभग हमेशा जल्दी सुलझ जाता है।
        </LegalP>
      </LegalSection>

      <LegalSection id="processing" title="7. प्रक्रिया और समय">
        <LegalP>
          हमारा लक्ष्य रिफ़ंड की माँगों को 3 कार्य-दिवसों के भीतर देख लेना है। मंज़ूर किए गए रिफ़ंड
          हमारे पेमेंट प्रोसेसर के ज़रिए उसी भुगतान माध्यम पर भेजे जाते हैं जिससे भुगतान हुआ था। भेजे
          जाने के बाद रक़म आम तौर पर 5 से 10 कार्य-दिवसों में दिखती है, जो आपके बैंक या कार्ड कंपनी पर
          निर्भर करता है — यह आख़िरी चरण हमारे नियंत्रण में नहीं है।
        </LegalP>
        <LegalP>
          रिफ़ंड उसी मुद्रा में किया जाता है जिसमें लेन-देन हुआ था। आपके बैंक द्वारा लगाए गए विनिमय दर
          के अंतर या शुल्क के लिए हम ज़िम्मेदार नहीं हैं।
        </LegalP>
      </LegalSection>

      <LegalSection id="cancellation" title="8. रद्द करना और रिफ़ंड">
        <LegalP>
          सदस्यता रद्द करने से आगे की नवीनीकरण रुक जाती हैं; इससे पहले से चुकाई गई अवधि अपने आप वापस
          नहीं मिलती। रद्द करने पर भी आपकी पेड सुविधाएँ उस अवधि के अंत तक चलती रहती हैं जिसका भुगतान
          आप कर चुके हैं, और उसके बाद अकाउंट मुफ़्त प्लान पर लौट आता है।
        </LegalP>
      </LegalSection>

      <LegalSection id="chargebacks" title="9. कार्ड पर चार्जबैक">
        <LegalP>
          चार्जबैक दर्ज कराने से पहले कृपया हमसे बात करें। चार्जबैक सुलझाने में महँगे पड़ते हैं और
          सीधे रिफ़ंड से आम तौर पर धीमे भी होते हैं। चार्जबैक खुला रहने तक हम पेड सुविधाओं तक पहुँच
          रोकने का, और धोखाधड़ी वाले विवाद करने वाले अकाउंट को आगे पेड सेवा देने से मना करने का अधिकार
          सुरक्षित रखते हैं।
        </LegalP>
      </LegalSection>

      <LegalSection id="consumer" title="10. उपभोक्ता के अधिकार">
        <LegalP>
          इस पॉलिसी की कोई बात आप पर लागू उपभोक्ता क़ानून से मिले उन अधिकारों को सीमित नहीं करती
          जिन्हें छोड़ा नहीं जा सकता। जहाँ स्थानीय क़ानून इस पॉलिसी से ज़्यादा मज़बूत वापसी या रिफ़ंड का
          अधिकार देता है, वहाँ क़ानून ही चलेगा।
        </LegalP>
        <LegalP>
          अगर आप यूरोपीय संघ या यूनाइटेड किंगडम में उपभोक्ता हैं, तो आपको डिजिटल सेवाओं के अनुबंध से
          14 दिन के भीतर हटने का क़ानूनी अधिकार हो सकता है। जब आप सेवा तुरंत शुरू करने को कहते हैं, तो
          क़ानून जितना अनुमति दे, यह अधिकार सेवा शुरू होते ही समाप्त हो सकता है।
        </LegalP>
      </LegalSection>

      <LegalSection id="changes" title="11. बदलाव">
        <LegalP>
          सेवा के आगे बढ़ने के साथ हम इस पॉलिसी को अपडेट कर सकते हैं। लागू संस्करण वही है जो आपकी
          ख़रीद के समय प्रकाशित था, और ऊपर दी गई &quot;आख़िरी अपडेट&quot; की तारीख़ हमेशा मौजूदा
          संस्करण की होती है।
        </LegalP>
      </LegalSection>

      <LegalSection id="contact" title="12. संपर्क">
        <LegalP>
          बिलिंग या रिफ़ंड से जुड़े किसी भी सवाल के लिए हमारे{" "}
          <Link href={localeHref("/contact", "hi")} className="text-secondary hover:underline">
            संपर्क पेज
          </Link>{" "}
          से हमसे संपर्क करें। हमारी{" "}
          <Link href={localeHref("/terms", "hi")} className="text-secondary hover:underline">
            सेवा की शर्तें
          </Link>{" "}
          और{" "}
          <Link href={localeHref("/pricing", "hi")} className="text-secondary hover:underline">
            क़ीमत
          </Link>{" "}
          भी देखें।
        </LegalP>
      </LegalSection>
    </LegalShell>
  );
}

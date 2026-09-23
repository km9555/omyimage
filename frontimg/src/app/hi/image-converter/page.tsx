import type { Metadata } from "next";
import { ConverterHub } from "@/app/image-converter/ConverterHub";
import { hiImageConverter } from "@/i18n/dictionaries/hi/pages/image-converter";
import { pageMetadata } from "@/lib/i18n/tool-meta";

const TITLE = "इमेज कन्वर्टर — JPG, PNG, WEBP, AVIF और बाक़ी";
const DESCRIPTION =
  "मुफ़्त ऑनलाइन इमेज फ़ॉर्मैट कन्वर्टर। JPG, PNG, WEBP, AVIF, GIF, BMP और JFIF के बीच अपने ब्राउज़र में ही बदलें — एक साथ कई फ़ाइलें, बिना साइन-अप और बिना वॉटरमार्क।";

export const metadata: Metadata = pageMetadata({
  englishPath: "/image-converter",
  locale: "hi",
  title: `${TITLE} | oMyImage`,
  description: DESCRIPTION,
});

export default function Page() {
  return (
    <ConverterHub
      locale="hi"
      dict={hiImageConverter}
      heading="इमेज कन्वर्टर"
      schemaName={TITLE}
      description={DESCRIPTION}
    />
  );
}

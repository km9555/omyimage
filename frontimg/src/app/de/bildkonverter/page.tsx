import type { Metadata } from "next";
import { ConverterHub } from "@/app/image-converter/ConverterHub";
import { deImageConverter } from "@/i18n/dictionaries/de/pages/image-converter";
import { pageMetadata } from "@/lib/i18n/tool-meta";

const TITLE = "Bildkonverter — JPG, PNG, WebP, AVIF und mehr";
const DESCRIPTION =
  "Kostenlose Bildkonverter online: Wandeln Sie Bilder zwischen JPG, PNG, WebP, AVIF, GIF, BMP und JFIF direkt im Browser um — mehrere auf einmal, ohne Anmeldung und ohne Wasserzeichen.";

export const metadata: Metadata = pageMetadata({
  englishPath: "/image-converter",
  locale: "de",
  title: `${TITLE} | oMyImage`,
  description: DESCRIPTION,
});

export default function Page() {
  return (
    <ConverterHub
      locale="de"
      dict={deImageConverter}
      heading="Bildkonverter"
      schemaName={TITLE}
      description={DESCRIPTION}
    />
  );
}

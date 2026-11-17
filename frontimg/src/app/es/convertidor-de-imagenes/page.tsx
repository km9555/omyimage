import type { Metadata } from "next";
import { ConverterHub } from "@/app/image-converter/ConverterHub";
import { esImageConverter } from "@/i18n/dictionaries/es/pages/image-converter";
import { pageMetadata } from "@/lib/i18n/tool-meta";

const TITLE = "Convertidor de imágenes — JPG, PNG, WebP, AVIF y más";
const DESCRIPTION =
  "Convertidores de imágenes online y gratis: convierte entre JPG, PNG, WebP, AVIF, GIF, BMP y JFIF en tu navegador, varias a la vez, sin registro y sin marca de agua.";

export const metadata: Metadata = pageMetadata({
  englishPath: "/image-converter",
  locale: "es",
  title: `${TITLE} | oMyImage`,
  description: DESCRIPTION,
});

export default function Page() {
  return (
    <ConverterHub
      locale="es"
      dict={esImageConverter}
      heading="Convertidor de imágenes"
      schemaName={TITLE}
      description={DESCRIPTION}
    />
  );
}

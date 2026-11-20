import type { Metadata } from "next";
import { ConverterHub } from "@/app/image-converter/ConverterHub";
import { frImageConverter } from "@/i18n/dictionaries/fr/pages/image-converter";
import { pageMetadata } from "@/lib/i18n/tool-meta";

const TITLE = "Convertisseur d'images — JPG, PNG, WebP, AVIF et plus";
const DESCRIPTION =
  "Convertisseurs d'images gratuits en ligne : convertissez entre JPG, PNG, WebP, AVIF, GIF, BMP et JFIF dans votre navigateur, plusieurs à la fois, sans inscription et sans filigrane.";

export const metadata: Metadata = pageMetadata({
  englishPath: "/image-converter",
  locale: "fr",
  title: `${TITLE} | oMyImage`,
  description: DESCRIPTION,
});

export default function Page() {
  return (
    <ConverterHub
      locale="fr"
      dict={frImageConverter}
      heading="Convertisseur d'images"
      schemaName={TITLE}
      description={DESCRIPTION}
    />
  );
}

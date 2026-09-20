import { ConverterPage } from "@/components/ConverterPage";
import { buildConverterMetadata } from "@/lib/converters/metadata";

const SLUG = "jpg-to-webp";
export const metadata = buildConverterMetadata(SLUG, "pt");
export default function Page() {
  return <ConverterPage slug={SLUG} locale="pt" />;
}

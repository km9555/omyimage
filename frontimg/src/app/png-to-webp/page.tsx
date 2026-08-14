import { ConverterPage } from "@/components/ConverterPage";
import { buildConverterMetadata } from "@/lib/converters/metadata";

const SLUG = "png-to-webp";
export const metadata = buildConverterMetadata(SLUG);
export default function Page() {
  return <ConverterPage slug={SLUG} />;
}

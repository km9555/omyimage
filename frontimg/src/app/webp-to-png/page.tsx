import { ConverterPage } from "@/components/ConverterPage";
import { buildConverterMetadata } from "@/lib/converters/metadata";

const SLUG = "webp-to-png";
export const metadata = buildConverterMetadata(SLUG);
export default function Page() {
  return <ConverterPage slug={SLUG} />;
}

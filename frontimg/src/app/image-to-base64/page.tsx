import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/image-to-base64.en";
import { ImageToBase64Tool } from "./ImageToBase64Tool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <ImageToBase64Tool />
    </ToolPageShell>
  );
}

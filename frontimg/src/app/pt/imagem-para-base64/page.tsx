import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/image-to-base64.pt";
import { ImageToBase64Tool } from "@/app/image-to-base64/ImageToBase64Tool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <ImageToBase64Tool />
    </ToolPageShell>
  );
}

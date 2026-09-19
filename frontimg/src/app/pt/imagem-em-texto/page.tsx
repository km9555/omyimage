import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/image-to-text.pt";
import { ImageToTextTool } from "@/app/image-to-text/ImageToTextTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <ImageToTextTool />
    </ToolPageShell>
  );
}

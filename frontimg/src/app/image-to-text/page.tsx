import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/image-to-text.en";
import { ImageToTextTool } from "./ImageToTextTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <ImageToTextTool />
    </ToolPageShell>
  );
}

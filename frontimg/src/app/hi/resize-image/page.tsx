import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/resize-image.hi";
import { ResizeTool } from "@/app/resize-image/ResizeTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <ResizeTool />
    </ToolPageShell>
  );
}

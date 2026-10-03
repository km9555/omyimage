import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/watermark-image.id";
import { WatermarkTool } from "@/app/watermark-image/WatermarkTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <WatermarkTool />
    </ToolPageShell>
  );
}

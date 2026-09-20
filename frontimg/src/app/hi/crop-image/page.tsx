import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/crop-image.hi";
import { CropTool } from "@/app/crop-image/CropTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <CropTool />
    </ToolPageShell>
  );
}

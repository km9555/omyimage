import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/blur-image.hi";
import { BlurImageTool } from "@/app/blur-image/BlurImageTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <BlurImageTool />
    </ToolPageShell>
  );
}

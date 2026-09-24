import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/grayscale-image.id";
import { GrayscaleTool } from "@/app/grayscale-image/GrayscaleTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <GrayscaleTool />
    </ToolPageShell>
  );
}

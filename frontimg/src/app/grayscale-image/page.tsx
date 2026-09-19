import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/grayscale-image.en";
import { GrayscaleTool } from "./GrayscaleTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <GrayscaleTool />
    </ToolPageShell>
  );
}

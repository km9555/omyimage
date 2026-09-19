import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/upscale-image.en";
import { UpscaleTool } from "./UpscaleTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <UpscaleTool />
    </ToolPageShell>
  );
}

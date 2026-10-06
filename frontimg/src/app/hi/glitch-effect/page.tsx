import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/glitch-effect.hi";
import { FxTool } from "@/app/invert-image/FxTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <FxTool mode="glitch" />
    </ToolPageShell>
  );
}

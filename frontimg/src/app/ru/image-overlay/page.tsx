import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/image-overlay.ru";
import { OverlayTool } from "@/app/image-overlay/OverlayTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <OverlayTool />
    </ToolPageShell>
  );
}

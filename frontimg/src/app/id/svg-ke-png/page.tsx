import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/svg-to-png.id";
import { SvgToPngTool } from "@/app/svg-to-png/SvgToPngTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <SvgToPngTool />
    </ToolPageShell>
  );
}

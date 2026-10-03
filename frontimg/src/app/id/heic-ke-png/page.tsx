import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/heic-to-png.id";
import { HeicTool } from "@/app/heic-to-jpg/HeicTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <HeicTool defaultTarget="image/png" />
    </ToolPageShell>
  );
}

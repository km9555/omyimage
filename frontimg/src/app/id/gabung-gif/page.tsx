import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/gif-merger.id";
import { GifMergerTool } from "@/app/gif-merger/GifMergerTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <GifMergerTool />
    </ToolPageShell>
  );
}

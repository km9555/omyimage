import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/gif-maker.hi";
import { GifMakerTool } from "@/app/gif-maker/GifMakerTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <GifMakerTool />
    </ToolPageShell>
  );
}

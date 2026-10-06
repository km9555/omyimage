import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/gif-to-webp.en";
import { GifExportTool } from "./GifExportTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <GifExportTool mode="webp" />
    </ToolPageShell>
  );
}

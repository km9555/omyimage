import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/gif-compressor.en";
import { GifTool } from "./GifTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <GifTool mode="compress" />
    </ToolPageShell>
  );
}

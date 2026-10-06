import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/webp-to-gif.en";
import { GifTool } from "@/app/gif-compressor/GifTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <GifTool mode="webp" />
    </ToolPageShell>
  );
}

import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/rotate-gif.ru";
import { GifEditTool } from "@/app/gif-cropper/GifEditTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <GifEditTool mode="rotate" />
    </ToolPageShell>
  );
}

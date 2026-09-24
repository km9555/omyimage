import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/gif-to-images.ru";
import { GifToImagesTool } from "@/app/gif-to-images/GifToImagesTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <GifToImagesTool />
    </ToolPageShell>
  );
}

import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/gif-to-images.en";
import { GifToImagesTool } from "./GifToImagesTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <GifToImagesTool />
    </ToolPageShell>
  );
}

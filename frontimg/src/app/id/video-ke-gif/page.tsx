import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/video-to-gif.id";
import { VideoToGifTool } from "@/app/video-to-gif/VideoToGifTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <VideoToGifTool />
    </ToolPageShell>
  );
}

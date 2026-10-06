import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/gif-to-mp4.en";
import { GifToMp4Tool } from "./GifToMp4Tool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <GifToMp4Tool />
    </ToolPageShell>
  );
}

import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/convert-to-jpg.pt";
import { getTool, toolColor } from "@/lib/tools";
import { ConvertTool } from "@/components/ConvertTool";

const tool = getTool("convert-to-jpg")!;

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      {/* i18n-raw: dropHint is an English source string that ConvertTool translates. */}
      <ConvertTool config={{ accent: toolColor(tool), accept: "image/png,image/webp,image/gif,image/bmp", targetMime: "image/jpeg", targetLabel: "JPG", flatten: true, quality: true, metadata: true, dropHint: "or drop PNG, WEBP, GIF or BMP images here" }} />
    </ToolPageShell>
  );
}

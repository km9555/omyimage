import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/png-to-jpg.hi";
import { getTool, toolColor } from "@/lib/tools";
import { ConvertTool } from "@/components/ConvertTool";

const tool = getTool("png-to-jpg")!;

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      {/* i18n-raw: dropHint is an English source string that ConvertTool translates. */}
      <ConvertTool config={{ accent: toolColor(tool), accept: "image/png", targetMime: "image/jpeg", targetLabel: "JPG", flatten: true, quality: true, metadata: true, dropHint: "or drop PNG images here" }} />
    </ToolPageShell>
  );
}

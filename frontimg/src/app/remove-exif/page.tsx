import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/remove-exif.en";
import { RemoveExifTool } from "./RemoveExifTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <RemoveExifTool />
    </ToolPageShell>
  );
}

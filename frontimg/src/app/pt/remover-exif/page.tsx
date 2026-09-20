import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/remove-exif.pt";
import { RemoveExifTool } from "@/app/remove-exif/RemoveExifTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <RemoveExifTool />
    </ToolPageShell>
  );
}

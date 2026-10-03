import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/image-to-pdf.hi";
import { ImageToPdfTool } from "@/app/image-to-pdf/ImageToPdfTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <ImageToPdfTool />
    </ToolPageShell>
  );
}

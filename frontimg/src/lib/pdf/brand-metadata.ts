import { PDFDict, PDFDocument, PDFName } from "pdf-lib";

/**
 * Brand the document properties of every PDF we hand back.
 *
 * Left alone, pdf-lib stamps its own name and repo URL into both /Producer and
 * /Creator, and sets CreationDate/ModDate to "right now" — so a PDF built here
 * advertised the library as the authoring application and leaked the exact
 * moment the user processed their files. For a tool that runs in the browser
 * specifically so nothing leaves the device, shipping that timestamp inside the
 * output is the one piece of metadata worth stripping.
 *
 * Call this immediately before `doc.save()`. pdf-lib seeds the Info dict once,
 * at create()/load() time — not at save() — so overwriting it here always wins.
 */

/** Shown as "Application" in Acrobat / Windows document properties. */
export const PDF_CREATOR = "omyimage.com";

/** Shown as "PDF Producer". pdf-lib is MIT — attribution lives on /licenses. */
export const PDF_PRODUCER = "pdf-lib";

export function brandPdf(doc: PDFDocument): void {
  doc.setCreator(PDF_CREATOR);
  doc.setProducer(PDF_PRODUCER);

  // pdf-lib has setCreationDate but no remove — delete the keys off the Info
  // dict so viewers show "-" instead of when the file happened to be processed.
  // (Both are optional per the PDF spec.) setCreator above guarantees Info exists.
  const infoRef = doc.context.trailerInfo.Info;
  if (infoRef) {
    const info = doc.context.lookup(infoRef);
    if (info instanceof PDFDict) {
      info.delete(PDFName.of("CreationDate"));
      info.delete(PDFName.of("ModDate"));
    }
  }
}

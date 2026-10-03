import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /remove-exif. Structure lives in ToolPageShell; the page
 * <title> and meta description stay in lib/tools.ts (seoTitle/seoDescription).
 */
const content: ToolPageContent = {
  toolId: "remove-exif",
  locale: "en",
  name: "EXIF Data Remover",
  tagline:
    "Remove EXIF and metadata — including GPS location — from images online before you share them. Batch supported, free, fast and 100% private in your browser.",
  category: { id: "edit", label: "Edit & Create" },

  intro:
    "Protect your privacy before sharing photos. oMyImage's EXIF Data Remover strips the hidden metadata from your images — GPS location, camera and lens model, software and timestamps — by re-encoding them right in your browser. Clean one image or a whole batch and download instantly. Nothing is uploaded, so your photos and their data stay private.",

  sections: [
    {
      heading: "What your photos are carrying",
      id: "what",
      body: [
        "Every photograph a phone or camera takes arrives with a block of metadata attached. The EXIF standard covers the technical fields — shutter speed, aperture, ISO, focal length, camera model — which are useful and harmless. What sits alongside them is the part worth thinking about.",
        "GPS coordinates are the significant one. If location services were enabled, the file records where the picture was taken to within a few metres, along with the exact date and time. A photograph taken in your living room carries your home address in a form any software can read instantly.",
        "There is more: device serial numbers that link separate photographs to the same camera, owner and copyright fields that some cameras populate automatically, editing history from certain applications, and on some devices an embedded thumbnail of the original — which occasionally survives cropping and shows what you cropped out.",
      ],
    },
    {
      heading: "Where the risk actually is",
      id: "risk",
      body: [
        "Major social platforms strip metadata when you upload, so a photo posted to a public feed is usually clean. That creates a false sense of safety, because the places where photos most often leak location are the ones nobody thinks about.",
        "Direct messages and chat apps frequently forward the original file. So do email attachments, links to cloud storage, uploads to forums and marketplace listings, images sent to a print service, and anything you host on your own site. Selling furniture online with photographs taken at home is the classic case: the listing is anonymous and the file is not.",
        "The other overlooked route is professional. Photographs supplied to a client, a journalist, an insurer or a legal process carry whatever they carry, and the recipient can read it whether or not that was intended.",
      ],
    },
    {
      heading: "Orientation stays correct",
      id: "orientation",
      body: [
        "One EXIF field is doing real work: the orientation tag. Phone sensors are fixed, so when you rotate the phone the image is stored sideways and a tag records which way up it should be displayed.",
        "Many metadata strippers throw that instruction away with everything else, so a photo that looked correct everywhere suddenly appears on its side. Nothing has corrupted — the pixels were always sideways, and the note explaining that has been removed.",
        "This tool avoids it: the orientation from the tag is applied to the pixels first, and only then is the metadata dropped. The result is stored the right way up and needs no instruction, so it displays upright everywhere.",
      ],
    },
    {
      heading: "How stripping works here",
      id: "how",
      body: [
        "The image is decoded to a canvas and re-encoded from those raw pixels. Canvas has no concept of metadata, so nothing carries across — the output contains the picture and nothing else. This is thorough by construction rather than by maintaining a list of fields to delete.",
        "It happens entirely inside your browser, which matters given the purpose. Uploading a photograph to a server in order to remove its location data would rather defeat the exercise; here the file never leaves your device, and there is no copy anywhere holding the coordinates you were trying to remove.",
        "Batches are handled the same way and returned as a single ZIP, which is the normal case when preparing a set of listing photographs or clearing a folder before sharing it.",
      ],
    },
  ],

  howToTitle: "How to remove EXIF data from an image",
  steps: [
    { title: "Upload", description: "Select one or many images, or drag and drop them into the workspace." },
    { title: "Pick the output", description: "Keep the original format or convert, and set the quality for JPG/WEBP." },
    { title: "Clean & download", description: "Click Remove metadata — one image downloads directly, several download together as a ZIP." },
  ],

  features: [
    { icon: "shield", title: "Strips GPS & camera data", description: "Removes EXIF, GPS location, camera, lens and timestamp data by fully re-encoding the pixels." },
    { icon: "burst_mode", title: "Batch cleaning", description: "Clean a whole batch of JPG, PNG or WEBP images at once and download them as a ZIP." },
    { icon: "lock", title: "100% private", description: "Everything runs in your browser — your images are never uploaded to a server." },
  ],

  faqs: [
    { q: "What metadata is removed?", a: "All embedded EXIF/IPTC/XMP data, including GPS location, camera and lens model, and capture date — the output keeps only the pixels." },
    { q: "Does it reduce image quality?", a: "The image is re-encoded, so set the quality to 100% for a virtually identical result. The default of 95% is a safe balance." },
    { q: "Can I clean many images at once?", a: "Yes. Add as many as you like — a single image downloads directly and multiple images download together as a ZIP." },
    { q: "Is it free and private?", a: "Yes. No sign-up and no watermark, and every image is processed locally in your browser." },
    { q: "What exactly is stored in EXIF data?", a: "Far more than most people expect: GPS coordinates accurate to a few metres, the exact date and time, the camera or phone model and serial number, lens and exposure settings, and on some devices the owner name, copyright field and a thumbnail of the original image." },
    { q: "Do social networks strip EXIF automatically?", a: "The big ones generally do on upload, but you should not rely on it. Direct messages, cloud links, email attachments, forums, marketplace listings and personal websites frequently pass the file through untouched — and those are exactly the places people share photos of things at their home address." },
    { q: "Will removing EXIF change how the photo looks?", a: "Not its orientation. The orientation tag is applied to the pixels first and the metadata is dropped afterwards, so a photo that displayed upright stays upright. The only other change is the re-encode, which the quality setting controls." },
    { q: "Does this remove a hidden watermark or tracking code?", a: "No. It clears standard metadata fields. Steganographic marks embedded in the pixels themselves are a different thing entirely and survive metadata removal — they would survive most edits, in fact." },
    { q: "Can I recover the metadata afterwards?", a: "Not from the stripped file. Keep your original if the capture date or location matters to you — for organising a photo library, for insurance documentation, or simply for remembering where a picture was taken." },
    { q: "How can I check what my photo contains first?", a: "Use the Image Metadata Viewer. It reads every tag your file carries, including GPS coordinates plotted on a map, entirely in your browser. Looking before you strip is usually worth the extra step." },
  ],

  security:
    "Your images stay private. Metadata removal happens entirely in your browser — nothing is uploaded to a server. No storage, no tracking of your files.",

  rating: { value: "4.9", count: "377" },
};

export default content;

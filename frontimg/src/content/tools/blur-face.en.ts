import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /blur-face. Structure lives in ToolPageShell; the page
 * <title> and meta description stay in lib/tools.ts (seoTitle/seoDescription).
 */
const content: ToolPageContent = {
  toolId: "blur-face",
  locale: "en",
  name: "Blur Face & Censor",
  tagline:
    "Blur or pixelate faces, license plates and private details in your photos online — draw the areas, pick the strength, and export. Free, fast and 100% private in your browser.",
  category: { id: "edit", label: "Edit & Create" },

  intro:
    "Need to hide a face, a name tag or a license plate before sharing a photo? oMyImage's Blur & Censor tool finds faces for you automatically, and lets you draw your own areas over any other private detail. Blur, pixelate or black them out, adjust each area by dragging it, and process a whole batch at once. The censoring is baked permanently into the exported image, and everything — including the face detection — runs in your browser, so your photo is never uploaded.",

  sections: [
    {
      heading: "Why blurring beats a black box",
      id: "method",
      body: [
        "A black rectangle drawn over a face in a layered editing file is not redaction — it is a sticker, and anyone who opens the original file can move it. Even flattened, a solid box announces that something was hidden and invites the question of what.",
        "Blurring works differently. It destroys the information in place: the pixels are replaced by an average of their neighbours, and the detail that made the face recognisable no longer exists anywhere in the file. Export it and there is nothing to recover, because nothing was preserved.",
        "That is the property you actually want from redaction. Not concealment, which can be undone, but destruction, which cannot.",
      ],
    },
    {
      heading: "Blur or pixelate",
      id: "blur-vs-pixelate",
      body: [
        "Pixelation replaces regions with large blocks of a single averaged colour. It looks decisive, and for that reason it is the convention in television and journalism, where the audience is meant to understand that something has been withheld.",
        "For genuine anonymisation it is the weaker option. The block averages retain structure — the rough position of eyes, the shape of a jaw, the contrast between hair and skin — and researchers have demonstrated recovering identities from pixelated faces where the block size was not aggressive enough. A strong Gaussian blur leaves considerably less signal behind.",
        "Use pixelation when you want the redaction to be visually obvious, and blur when you want the person to be genuinely unidentifiable. If you need both, pixelate heavily rather than lightly.",
      ],
    },
    {
      heading: "Getting the coverage right",
      id: "coverage",
      body: [
        "The most common mistake is blurring too tightly. A region covering only the eyes leaves the jawline, hairline, ears and skin tone intact, and people are recognised by all of those. Cover the whole head, and extend slightly past the hairline.",
        "The second mistake is blurring too weakly. Judge the result at full zoom rather than at the thumbnail size, because a blur that looks sufficient in a small preview often is not. If you can still tell who it is, so can anyone who knows them.",
        "Remember the rest of the frame too. Name badges, house numbers, licence plates, reflections in windows and the text on a screen behind the subject all identify people, and a photo with a perfectly blurred face and a visible street sign has not achieved much.",
      ],
    },
    {
      heading: "When this matters legally",
      id: "legal",
      body: [
        "Under GDPR and similar regimes a recognisable face is personal data, and publishing it generally needs a lawful basis — consent being the usual one. That obligation applies to organisations far more heavily than to individuals posting holiday photos, but it is real.",
        "The situations where it bites hardest are predictable: photographs including children, images from schools, clinics and care settings, crowd shots used commercially, workplace photography, and anything showing people who did not know they were being photographed. Blurring faces is the cheapest way to remove the question entirely.",
        "Because everything here runs in your browser, the unredacted original never leaves your device — which is the correct handling for exactly this class of image.",
      ],
    },
  ],

  howToTitle: "How to blur a face in a photo",
  steps: [
    { title: "Upload", description: "Select one or many images, or drag and drop them into the workspace." },
    { title: "Detect or draw", description: "Press Detect faces to find them automatically, then drag, resize or delete any area — and draw your own over plates, names or documents." },
    { title: "Export", description: "Click Export to download the images with the censored areas baked in — as a ZIP when there are several." },
  ],

  features: [
    { icon: "face_retouching_natural", title: "Automatic face detection", description: "Finds every face in the photo at your chosen sensitivity, and the model runs on your device — the image is never uploaded." },
    { icon: "blur_on", title: "Blur, pixelate or blackout", description: "Choose a smooth blur, a chunky pixelate or a solid block, and set the strength to fully obscure sensitive details." },
    { icon: "select_all", title: "Editable areas", description: "Every area can be moved, resized from any corner or edge, and deleted individually — as ellipses for faces or rectangles for plates and documents." },
    { icon: "lock", title: "Truly private", description: "Everything is processed in your browser — the original never leaves your device, and the censoring is permanent in the exported file." },
  ],

  faqs: [
    { q: "Can I blur more than one face?", a: "Yes. Draw a box over each area you want to hide; you can add as many as you like and undo or clear them." },
    { q: "What's the difference between blur and pixelate?", a: "Blur smoothly softens the area, while pixelate replaces it with large blocks. Both fully obscure details at a high enough strength." },
    { q: "Is the blur permanent?", a: "Yes. The censored areas are rendered directly into the exported image, so they can't be undone by the recipient." },
    { q: "Does the automatic detection upload my photo?", a: "No. The face-detection model is downloaded to your browser the first time you use it and then runs on your own device — the same as the blurring itself. Nothing about the image is sent anywhere, which is the point: the photos people censor are exactly the ones that should not pass through someone else's server." },
    { q: "It missed a face — what now?", a: "Raise the sensitivity and detect again, or just draw the area by hand. Detection is tuned for faces that are reasonably close to the camera, so small faces in a crowd or a distant street scene are the usual misses. Anything it does find is a normal area you can move, resize or delete." },
    { q: "Is it free?", a: "Completely free, with no watermark and no sign-up." },
    { q: "Can the blur be reversed?", a: "Not by any practical means. Blurring discards the information rather than hiding it, so there is nothing left to recover — unlike a black bar drawn in a layered file, or a pixelation applied at a coarse enough level that AI reconstruction becomes plausible. Once exported, the face is gone from the pixels." },
    { q: "Should I use blur or pixelate?", a: "Blur is the safer choice. Heavy pixelation at a large block size can sometimes be partially reconstructed, because the block averages still carry structure. A strong Gaussian blur leaves far less to work with. Pixelation is more visually obvious that redaction happened, which is occasionally what you want." },
    { q: "How strong should the blur be?", a: "Strong enough that you cannot recognise the person yourself at full zoom. A light blur that merely softens features is not anonymisation — faces remain identifiable to anyone who knows the person, and often to software. If in doubt, go heavier." },
    { q: "Does this remove location data from the photo too?", a: "Yes, as a side effect: the image is redrawn from a canvas, which does not carry EXIF metadata across, so GPS coordinates and camera details are dropped. If metadata is your main concern rather than faces, the EXIF Remover is the dedicated tool." },
    { q: "Do I need to blur faces before posting photos?", a: "It depends where you are and what the photo is. Many jurisdictions treat a recognisable face as personal data, and publishing images of children, patients, bystanders or people in sensitive settings carries real obligations. When you do not have consent, blurring is the simple answer." },
    { q: "Is my photo uploaded?", a: "No. The whole operation runs on a canvas inside your browser, which matters a great deal here — the images people blur are usually exactly the ones that should not be passing through anyone else's server." },
  ],

  security:
    "Your images stay private. Both the face detection and the blurring happen entirely in your browser — the open-source MediaPipe BlazeFace model is downloaded to your device and run there, so nothing is uploaded to a server at any point. The censored result is permanent in the exported file. No storage, no tracking of your files.",

  rating: { value: "4.8", count: "389" },
};

export default content;

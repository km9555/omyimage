import type { Dict } from "@/i18n/t";

/**
 * French strings for the data-driven converter pages.
 *
 * These are the GENERATED sentences — the how-to steps, the feature tiles, the
 * boilerplate FAQs, the privacy note and ConverterPage's own chrome. The prose
 * that makes each pair its own page lives in `src/content/converters/`.
 *
 * Loaded by `lib/converters/i18n.ts`, which hands it to `getT()` for the
 * server markup and down through an `<I18nScope>` so ConvertTool sees it too.
 * A sentence with a conditional tail has one key per variant (conversion.md
 * §6.4).
 *
 * `{offload}` is filled with the translated fragment below, which carries NO
 * article (« images très lourdes ou de très haute résolution »); every
 * sentence supplies its own « les » in front of it, so the fragment reads
 * correctly as a subject, after « parmi » and inside the parenthesis.
 *
 * Pair names read « {from} en {to} » — the dominant French query form
 * (« PNG en JPG », « convertir HEIC en JPG »). The reader is addressed as
 * vous; sizes use Mo (i18n-fr-brief.md).
 */
export const frConverters: Dict = {
  // ── copy.ts: shared fragments ──────────────────────────────────────────
  "very large or very high-resolution images": "images très lourdes ou de très haute résolution",

  // ── copy.ts: buildSteps ────────────────────────────────────────────────
  "Add your {from} files": "Ajoutez vos fichiers {from}",
  "Drag {from} images onto the drop zone or click to browse. Add as many as you like — they queue up together.":
    "Faites glisser vos images {from} dans la zone de dépôt ou cliquez pour les parcourir. Ajoutez-en autant que vous voulez — elles sont mises en file d'attente ensemble.",
  "Choose your quality": "Choisissez la qualité",
  "Drag the quality slider to trade file size against detail.":
    "Déplacez le curseur de qualité pour équilibrer le poids du fichier et le niveau de détail.",
  "Because {to} has no transparency, you can also pick the colour that fills transparent areas.":
    "Comme le format {to} ne gère pas la transparence, vous pouvez aussi choisir la couleur qui remplit les zones transparentes.",
  "The default suits most images — raise it for detailed photographs.":
    "La valeur par défaut convient à la plupart des images — augmentez-la pour les photos très détaillées.",
  "Check the settings": "Vérifiez les réglages",
  "{to} output is lossless and keeps transparency, so there is nothing to configure. Auto-rotate reads EXIF orientation so portrait photos stay upright.":
    "La sortie {to} est sans perte et conserve la transparence : il n'y a rien à configurer. La rotation automatique lit l'orientation EXIF pour que les photos en portrait restent droites.",
  "{to} output is lossless, so there is nothing to configure. Auto-rotate reads EXIF orientation so portrait photos stay upright.":
    "La sortie {to} est sans perte : il n'y a rien à configurer. La rotation automatique lit l'orientation EXIF pour que les photos en portrait restent droites.",
  "Convert and download": "Convertissez et téléchargez",
  "Press Convert. A single file downloads as {to} straight away; several arrive together in one ZIP.":
    "Cliquez sur Convertir. Un seul fichier se télécharge immédiatement en {to} ; plusieurs fichiers arrivent ensemble dans un ZIP.",

  // ── copy.ts: buildFeatures ─────────────────────────────────────────────
  "Batch {from} → {to}": "{from} → {to} par lots",
  "Convert a whole folder in one pass. Multiple files come back as a single ZIP, so there is no download-one-at-a-time slog.":
    "Convertissez un dossier entier en une seule fois. Plusieurs fichiers sont regroupés dans un seul ZIP, sans avoir à les télécharger un par un.",
  "Transparency survives": "La transparence est conservée",
  "Transparent areas in your {from} stay transparent in the {to} — no white box behind the image.":
    "Les zones transparentes de votre fichier {from} restent transparentes dans le fichier {to} — pas de cadre blanc derrière l'image.",
  "You pick the background": "Vous choisissez l'arrière-plan",
  "{to} cannot store transparency, so anything see-through has to be filled. Choose the colour instead of being handed white.":
    "Le format {to} ne peut pas enregistrer la transparence, donc les zones transparentes doivent être remplies. Choisissez la couleur au lieu d'un blanc imposé.",
  "Quality you control": "Une qualité que vous maîtrisez",
  "Lossless output": "Sortie sans perte",
  "A quality slider rather than a fixed preset, so you decide where the size-versus-detail line sits.":
    "Un curseur de qualité plutôt qu'un préréglage figé : c'est vous qui choisissez l'équilibre entre poids et détail.",
  "{to} is lossless — the converted image is pixel-for-pixel what went in.":
    "Le format {to} est sans perte — l'image convertie est identique, pixel pour pixel, à l'originale.",
  "No software to install": "Aucun logiciel à installer",
  "Nothing to download and no account to create. Files are sent over HTTPS, converted, and deleted from the server afterwards.":
    "Rien à télécharger, aucun compte à créer. Les fichiers sont envoyés en HTTPS, convertis, puis supprimés du serveur.",
  "Private by default": "Confidentiel par défaut",
  "The conversion runs inside your browser tab. Your {from} files are never uploaded unless one is among the {offload}.":
    "La conversion se fait dans l'onglet de votre navigateur. Vos fichiers {from} ne sont jamais envoyés, sauf s'ils font partie des {offload}.",
  "The conversion runs inside your browser tab. Your {from} files are never uploaded.":
    "La conversion se fait dans l'onglet de votre navigateur. Vos fichiers {from} ne sont jamais envoyés.",

  // ── copy.ts: buildBoilerplateFaqs ──────────────────────────────────────
  "What happens to my files?": "Que deviennent mes fichiers ?",
  "This conversion needs a server, because browsers cannot handle {from} decoding on their own. Files travel over an encrypted HTTPS connection, are converted, and are deleted afterwards — they are never used for anything else.":
    "Cette conversion nécessite un serveur, car les navigateurs ne savent pas décoder seuls le format {from}. Les fichiers transitent par une connexion HTTPS chiffrée, sont convertis, puis supprimés — ils ne servent jamais à autre chose.",
  "This conversion needs a server, because browsers cannot handle {to} encoding on their own. Files travel over an encrypted HTTPS connection, are converted, and are deleted afterwards — they are never used for anything else.":
    "Cette conversion nécessite un serveur, car les navigateurs ne savent pas encoder seuls le format {to}. Les fichiers transitent par une connexion HTTPS chiffrée, sont convertis, puis supprimés — ils ne servent jamais à autre chose.",
  "Are my images uploaded anywhere?": "Mes images sont-elles envoyées sur un serveur ?",
  "No. {from} to {to} runs entirely inside your browser tab, so the image data never leaves your computer. The one exception is images too big for a browser tab to paint — either over {mb} MB, or too many megapixels for its canvas, which a modern phone photo can reach at just a few MB. Those are sent over HTTPS to our server and deleted after conversion, and the tool tells you when it happens.":
    "Non. La conversion {from} en {to} se fait entièrement dans l'onglet de votre navigateur : les données de l'image ne quittent jamais votre ordinateur. Seule exception : les images trop grandes pour qu'un onglet puisse les dessiner — plus de {mb} Mo, ou trop de mégapixels pour son canvas, ce qu'une photo de smartphone récent peut atteindre avec quelques Mo seulement. Celles-ci sont envoyées en HTTPS à notre serveur et supprimées après la conversion, et l'outil vous prévient quand c'est le cas.",
  "No. {from} to {to} runs entirely inside your browser tab, so the image data never leaves your computer.":
    "Non. La conversion {from} en {to} se fait entièrement dans l'onglet de votre navigateur : les données de l'image ne quittent jamais votre ordinateur.",
  "How many {from} files can I convert at once?": "Combien de fichiers {from} puis-je convertir à la fois ?",
  "There is no fixed limit. Add a large batch and they are processed one after another, then delivered as a single ZIP. Very large batches simply take longer — the tab stays responsive throughout.":
    "Il n'y a pas de limite fixe. Ajoutez un grand lot : les fichiers sont traités les uns après les autres, puis livrés dans un seul ZIP. Les très gros lots prennent simplement plus de temps — l'onglet reste réactif du début à la fin.",
  "Is there a watermark, sign-up or payment?": "Y a-t-il un filigrane, une inscription ou un paiement ?",
  "None of the three. There is no account, no watermark on the output and no charge. The converted file is exactly the image you converted.":
    "Rien de tout cela. Pas de compte, pas de filigrane sur le résultat et aucun frais. Le fichier converti est exactement l'image que vous avez convertie.",
  "Does this work on a phone?": "Est-ce que ça fonctionne sur un téléphone ?",
  "Yes. The converter works in mobile browsers on both iOS and Android — you can pick images straight from your camera roll and the download lands in your usual downloads folder.":
    "Oui. Le convertisseur fonctionne dans les navigateurs mobiles sur iOS comme sur Android — vous pouvez choisir des images directement dans votre galerie, et le fichier arrive dans votre dossier de téléchargements habituel.",

  // ── copy.ts: buildSecurity and buildPrivacyNote ────────────────────────
  "{from} to {to} is one of the few conversions that cannot run in a browser, so your file is sent to our server to be processed. The transfer is encrypted with HTTPS, the file is converted immediately, and it is deleted afterwards. Nothing is kept, indexed or used for training.":
    "La conversion {from} en {to} fait partie des rares conversions impossibles dans un navigateur : votre fichier est donc envoyé à notre serveur pour être traité. Le transfert est chiffré en HTTPS, le fichier est converti immédiatement, puis supprimé. Rien n'est conservé, indexé ni utilisé pour entraîner des modèles.",
  "Your images stay on your device. {from} to {to} conversion happens entirely inside your browser — there is no upload step, no copy on a server and no record of what you converted. The sole exception is {offload}: they exceed what a browser tab can process, so they are sent over HTTPS, converted and deleted.":
    "Vos images restent sur votre appareil. La conversion {from} en {to} se fait entièrement dans votre navigateur — aucun envoi, aucune copie sur un serveur et aucune trace de ce que vous avez converti. Seule exception : les {offload}, qui dépassent ce qu'un onglet de navigateur peut traiter ; elles sont envoyées en HTTPS, converties puis supprimées.",
  "Your images stay on your device. {from} to {to} conversion happens entirely inside your browser — there is no upload step, no copy on a server and no record of what you converted.":
    "Vos images restent sur votre appareil. La conversion {from} en {to} se fait entièrement dans votre navigateur — aucun envoi, aucune copie sur un serveur et aucune trace de ce que vous avez converti.",
  "Converted on our server over an encrypted connection — files are deleted right after.":
    "Conversion sur notre serveur via une connexion chiffrée — les fichiers sont supprimés juste après.",
  "Converted in your browser — files stay on your device ({offload} are processed on our server).":
    "Conversion dans votre navigateur — les fichiers restent sur votre appareil (les {offload} sont traitées sur notre serveur).",
  "Converted in your browser — your images never leave your device.":
    "Conversion dans votre navigateur — vos images ne quittent jamais votre appareil.",

  // ── ConverterPage chrome ───────────────────────────────────────────────
  "Why convert {from} to {to}?": "Pourquoi convertir {from} en {to} ?",
  "{from} and {to}, briefly": "{from} et {to} en bref",
  "How to convert {from} to {to}": "Comment convertir {from} en {to}",
  "Going the other way?": "Besoin de la conversion inverse ?",
  "Convert {name}": "Convertir {name}",
  "or drop {from} images here": "ou déposez vos images {from} ici",
};

/**
 * French home page — HomeShell, HomeLauncher and ToolDirectory, which render
 * only on `/fr`. Loaded with that route through HomeShell's <I18nScope>, so
 * this prose is not bundled on every page (common.ts is).
 *
 * Written for the French SERP ("vous", French-French usage that also reads
 * naturally in Belgium, Switzerland and Québec), not translated from the
 * English brand line: the H1 and the intro carry the head terms compresser /
 * convertir / redimensionner une image and supprimer l'arrière-plan, plus
 * « gratuit », « en ligne » and « sans inscription ». Every key that names
 * oMyImage keeps it verbatim (Google's OAuth review matches it against the
 * consent screen). "drive.file" is an OAuth scope identifier and is never
 * translated. Units are French: Ko / Mo.
 */
export const frHome: Record<string, string> = {
  // ── HomeLauncher (hero) ─────────────────────────────────────────────────
  "Free tools — most run right in your browser": "Outils gratuits : la plupart fonctionnent directement dans votre navigateur",
  "Effortless Power for Image Workflows.": "Compresser, convertir et retoucher vos images gratuitement en ligne.",
  "oMyImage is a free online image toolkit — compress, resize, crop, convert, watermark and edit photos.":
    "Avec oMyImage, compressez une image, convertissez-la en JPG, PNG ou PDF, redimensionnez-la, recadrez-la ou supprimez l'arrière-plan : gratuitement, en ligne et sans inscription.",
  "Step 1 · Upload your images": "Étape 1 · Importez vos images",
  "Add images": "Ajouter des images",
  "Drag & drop images or click to browse": "Glissez-déposez vos images ici ou cliquez pour les choisir",
  "+ More": "+ Plus",
  "Remove {name}": "Retirer {name}",
  "Step 2 · Choose an action": "Étape 2 · Choisissez une action",
  "Upload an image first": "Importez d'abord une image",
  "Search an action, e.g. compress or resize": "Cherchez une action, par ex. compresser ou redimensionner",
  "We can't process this file type yet.": "Nous ne pouvons pas encore traiter ce type de fichier.",
  "No matching action.": "Aucune action ne correspond.",
  "Continue": "Continuer",

  // ── ToolDirectory ───────────────────────────────────────────────────────
  "Private by default": "Confidentiel par défaut",
  "Most tools run in your browser, so your images never leave your device.":
    "La plupart des outils fonctionnent dans votre navigateur : vos images ne quittent jamais votre appareil.",
  "{n} free image tools": "{n} outils d'image gratuits",
  "Compress, resize, convert, edit and make GIFs. No account needed.":
    "Compressez, redimensionnez, convertissez, retouchez et créez des GIF. Sans inscription.",
  "Google Drive import is optional": "L'import depuis Google Drive est facultatif",
  "oMyImage reads only the files you pick and stores nothing on our servers.":
    "oMyImage lit uniquement les fichiers que vous choisissez et ne stocke rien sur nos serveurs.",
  "How we use Google data": "Comment nous utilisons les données Google",
  "Favorites": "Favoris",
  "No tools in {category} yet.": "Pas encore d'outil dans la catégorie {category}.",
  "Browse all image format converters": "Voir tous les convertisseurs de format d'image",
  "All tools": "Tous les outils",
  "Tool categories": "Catégories d'outils",

  // ── HomeShell ───────────────────────────────────────────────────────────
  "How it works": "Comment ça marche",
  "Upload": "Importer",
  "Drop in your images or pick them from your device.":
    "Déposez vos images ou choisissez-les sur votre appareil.",
  "Transform": "Transformer",
  "Pick a tool and adjust the settings. The work happens in your browser, or on our servers for the heavier jobs.":
    "Choisissez un outil et ajustez les réglages. Le travail se fait dans votre navigateur ; seules les tâches les plus lourdes passent par nos serveurs.",
  "Download|step": "Télécharger",
  "Save the result to your device, ready to use.":
    "Enregistrez le résultat sur votre appareil, prêt à l'emploi.",
  "About oMyImage": "À propos d'oMyImage",
  "is a free online image toolkit for everyday image work. It gives you a single place to compress, resize, crop, rotate, convert, watermark, edit and animate images: {n} tools, each one a dedicated page that does one job well.":
    "est une boîte à outils d'image gratuite et en ligne pour le travail de tous les jours. Au même endroit, vous pouvez compresser une image, la redimensionner, la recadrer, la faire pivoter, la convertir, y ajouter un filigrane, la retoucher ou l'animer : {n} outils, chacun sur sa propre page et consacré à une seule tâche, bien faite.",
  "Most tools run entirely inside your web browser: your image is processed on your own device and is never uploaded anywhere. Larger files and the heavier AI tools are processed on our servers and deleted shortly after the job finishes. oMyImage is free to use and needs no account.":
    "La plupart des outils fonctionnent entièrement dans votre navigateur : votre image est traitée sur votre propre appareil et n'est envoyée nulle part. Les fichiers les plus lourds et les outils d'IA les plus exigeants sont traités sur nos serveurs, puis supprimés peu après la fin du traitement. oMyImage est gratuit et ne demande aucun compte.",
  "What you can do with oMyImage": "Ce que vous pouvez faire avec oMyImage",
  "Compress JPG, PNG and WEBP images without visible quality loss":
    "Compresser des images JPG, PNG et WebP sans perte de qualité visible",
  "Resize, crop, rotate and add borders, in single files or in bulk":
    "Redimensionner, recadrer, faire pivoter et ajouter une bordure, image par image ou par lots",
  "Convert between JPG, PNG, WEBP, GIF, BMP, AVIF, HEIC and PDF":
    "Convertir entre JPG, PNG, WebP, GIF, BMP, AVIF, HEIC et PDF",
  "Edit photos: watermark, grayscale, blur, memes and a full editor":
    "Retoucher une photo : filigrane, noir et blanc, flou, mèmes et un éditeur complet",
  "Make and edit GIFs: build them from images or video, compress, resize, trim, caption and convert to MP4 or WebP":
    "Créer et modifier des GIF : à partir d'images ou d'une vidéo, les compresser, les redimensionner, les couper, y ajouter du texte et les convertir en MP4 ou en WebP",
  "Extract text with OCR, read or strip EXIF metadata, pick colors":
    "Extraire le texte d'une image par OCR, voir ou supprimer les métadonnées EXIF, relever une couleur",
  "AI tools: remove backgrounds, upscale images, blur faces for privacy":
    "Outils d'IA : supprimer l'arrière-plan, améliorer la qualité d'une image, flouter les visages pour protéger la vie privée",
  "How oMyImage uses your Google account": "Comment oMyImage utilise votre compte Google",
  "Connecting Google is optional — every tool on oMyImage works without it. Google is used for two things: signing in, if you choose to create an account, and":
    "Connecter Google est facultatif : tous les outils d'oMyImage fonctionnent sans. Google sert à deux choses : la connexion, si vous choisissez de créer un compte, et la fonction",
  "Import from Google Drive": "Importer depuis Google Drive",
  ", which lets you pick an image already stored in your Drive instead of uploading it from your device.":
    ", qui vous permet de choisir une image déjà enregistrée dans votre Drive au lieu de l'importer depuis votre appareil.",
  "When you use Drive import, oMyImage requests the":
    "Lorsque vous importez depuis Drive, oMyImage demande l'autorisation",
  "scope. That scope gives the app access only to the specific files you choose in Google's own file picker — it cannot see, browse or search the rest of your Drive. The file you pick is downloaded into your browser for the tool you are using, and that is all: oMyImage does not modify or delete anything in your Drive, does not store your Google files on our servers, does not use Google user data to train AI models, and never sells or shares it with third parties.":
    "de Google. Cette autorisation donne à l'application accès uniquement aux fichiers précis que vous choisissez dans le sélecteur de fichiers de Google : elle ne peut ni voir, ni parcourir, ni rechercher le reste de votre Drive. Le fichier choisi est téléchargé dans votre navigateur pour l'outil que vous utilisez, et c'est tout : oMyImage ne modifie ni ne supprime rien dans votre Drive, ne stocke pas vos fichiers Google sur nos serveurs, n'utilise pas les données utilisateur Google pour entraîner des modèles d'IA, et ne les vend ni ne les partage jamais avec des tiers.",
  "You can revoke access at any time from your": "Vous pouvez révoquer cet accès à tout moment depuis la",
  "Google Account permissions page": "page des autorisations de votre compte Google",
  "Contact us": "Nous contacter",
  // ToolDirectory — the "Sizes and presets" block under the grid (expansion.md Phase 8).
  "Sizes and presets": "Tailles et préréglages",
  "Shortcuts to the tools above, each set up for one job: a photo at exactly 50 KB, a YouTube thumbnail, a passport photo.":
    "Des raccourcis vers les outils ci-dessus, chacun réglé pour une tâche : une photo de 50 Ko exactement, une miniature YouTube, une photo d'identité.",
  "Exact file size": "Taille de fichier exacte",
  "Hit the exact size a form or upload asks for":
    "Obtenez exactement la taille qu'exige un formulaire ou une plateforme",
  "PDF under a size limit": "PDF sous une limite de taille",
  "Scans and photos as a PDF that fits an upload cap":
    "Des scans et des photos dans un PDF qui respecte la limite d'envoi",
  "Passport & ID Photos": "Photos d'identité et de passeport",
  "Country-standard photo sizes, ready to print":
    "Les formats de photo officiels de chaque pays, prêts à imprimer",
  "Social and print sizes": "Formats réseaux sociaux et impression",
  "Thumbnails, covers and print dimensions, ready to go":
    "Miniatures, couvertures et dimensions d'impression, prêtes à l'emploi",
  "AI presets": "Préréglages IA",
  "Sharpen photos or swap the background in one click":
    "Rendre une photo plus nette ou changer le fond en un clic",
  "Quick edits": "Retouches rapides",
  "Flip, split and other one-step jobs": "Effet miroir, découpe et autres tâches en une étape",
  "Take photo": "Prendre une photo",
  "Edit {name}": "Modifier {name}",
  "Add {tool} to favorites": "Ajouter {tool} aux favoris",
  "Remove {tool} from favorites": "Retirer {tool} des favoris",
  "Added to Favorites": "Ajouté aux favoris",
  "Removed from Favorites": "Retiré des favoris",
  "Privacy Policy": "Politique de confidentialité",
  "Terms of Service": "Conditions d'utilisation",
  "KB": "Ko",
  "MB": "Mo",
};

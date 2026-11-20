/**
 * French SHARED chrome — strings rendered by components that appear on every
 * route (header, menus, footer, cookie banner, the tool workspace, result
 * screen, SEO block headings…).
 *
 * Bundled on every page, so keep it to genuinely shared strings. A tool's own
 * micro-copy belongs in the `ui` block of its content module
 * (`src/content/tools/<id>.fr.ts`), which is code-split with that route.
 * The rule for where a key lives is WHO RENDERS IT, not where it first
 * appeared (oMyPDF conversion.md §4.11).
 *
 * Keys are the English source string, byte for byte — copy them from the
 * `node scripts/i18n-keys.mjs fr shared` report rather than retyping.
 *
 * Register and vocabulary (i18n-fr-brief.md): French-French that also reads
 * naturally in Belgium, Switzerland and Québec; the reader is addressed as
 * **vous**; buttons are infinitives (« Télécharger », « Sélectionner des
 * images », « Compresser »); image, fichier, importer, télécharger,
 * navigateur, appareil, téléphone, gratuit, sans inscription, IA.
 * Typography: U+00A0 before « : » and inside « », U+202F before ; ! ? —
 * written as the characters themselves. The shared UI glossary in the brief
 * is used verbatim.
 */
export const frCommon: Record<string, string> = {
  // ── SEO block (SeoContent / Breadcrumbs / RelatedTools) ─────────────────
  "Home": "Accueil",
  "Breadcrumb": "Fil d'Ariane",
  "More tools": "Plus d'outils",
  "{tool} features": "Fonctionnalités de {tool}",
  "Security & privacy": "Sécurité et confidentialité",
  "Frequently asked questions": "Questions fréquentes",

  // ── Header, menus, search ───────────────────────────────────────────────
  "Tools": "Outils",
  "Soon": "Bientôt",
  "Coming soon": "Bientôt disponible",
  "{n} free tools — no sign-up required": "{n} outils gratuits — sans inscription",
  "New": "Nouveau",
  "Passport & ID Photos": "Photos d'identité et passeport",
  "Passport & Signature": "Photo d'identité et signature",
  "GIF Tools": "Outils GIF",
  "Filters & Effects": "Filtres et effets",
  "Browse all tools": "Voir tous les outils",
  "Browse tools": "Parcourir les outils",
  "All tools": "Tous les outils",
  "Blog": "Blog", // i18n-same
  "Pricing": "Tarifs",
  "Language": "Langue",
  "Select language": "Choisir la langue",
  "More": "Plus",
  "Open menu": "Ouvrir le menu",
  "Close menu": "Fermer le menu",
  "Site menu": "Menu du site",
  "Credits": "Crédits",
  "credits": "crédits",
  "Unlimited credits": "Crédits illimités",
  "{used} of {limit} premium runs used today": "{used} utilisations premium sur {limit} aujourd'hui",
  "Search tools…": "Rechercher un outil…",
  "Search tools": "Rechercher un outil",
  "Clear search": "Effacer la recherche",
  "No tools match “{query}”.": "Aucun outil ne correspond à « {query} ».",
  "Switch to light mode": "Passer en mode clair",
  "Switch to dark mode": "Passer en mode sombre",
  "Light mode": "Mode clair",
  "Dark mode": "Mode sombre",
  "Help": "Aide",

  // Nav mega-menu / drawer sections (lib/nav-sections.ts — module scope, §4.2)
  "Optimize Image": "Optimiser une image",
  "Edit Image": "Modifier une image",
  "Create": "Créer",
  "Image AI": "IA pour images",
  "Privacy & Info": "Confidentialité et infos",
  "Convert Format": "Convertir le format",
  "Convert To & From": "Convertir depuis et vers",
  "Camera & Modern Formats": "Appareil photo et formats modernes",

  // Navbar quick links + footer columns (module scope, §4.2)
  "Compress Image": "Compresser une image",
  "Resize Image": "Redimensionner une image",
  "Crop Image": "Recadrer une image",
  "Rotate Image": "Faire pivoter une image",
  "Convert to JPG": "Convertir en JPG",
  "PNG to JPG": "PNG en JPG",
  "WEBP to PNG": "WebP en PNG",
  "HEIC to JPG": "HEIC en JPG",
  "Image to PDF": "Image en PDF",
  "Watermark Image": "Ajouter un filigrane",
  "Image Editor": "Retoucher une photo",
  "Meme Generator": "Générateur de mème",
  "Remove Background": "Supprimer l'arrière-plan",
  "Upscale Image": "Améliorer la qualité d'une image",
  "Optimize": "Optimiser",
  "Convert": "Convertir",
  // CATEGORY_PILLS (lib/tool-categories.ts) labels, read by both the home page
  // and the dashboard, so they live here rather than in a page dictionary.
  "All": "Tous",
  "Edit & Create": "Modifier et créer",
  "GIF": "GIF", // i18n-same
  "Edit & AI": "Retouche et IA",
  "Contact": "Contact", // i18n-same
  "About": "À propos",
  "Privacy Policy": "Politique de confidentialité",
  "Terms of Service": "Conditions d'utilisation",
  "Refund Policy": "Politique de remboursement",
  "Cookie Policy": "Politique relative aux cookies",
  "Open-Source Licenses": "Licences open source",
  "Free online image tools — fast, private, and no sign-up required.":
    "Outils d'image gratuits en ligne — rapides, confidentiels et sans inscription.",
  "View Pricing →": "Voir les tarifs →",
  "Need PDF tools? oMyPDF →": "Besoin d'outils PDF ? oMyPDF →",
  "© {year} {brand}. All rights reserved.": "© {year} {brand}. Tous droits réservés.",

  // ── Account menu ────────────────────────────────────────────────────────
  "Login": "Se connecter",
  "Account": "Compte",
  "Account menu": "Menu du compte",
  "Signed in as": "Connecté en tant que",
  "Dashboard": "Tableau de bord",
  "Admin": "Admin", // i18n-same
  "My Account": "Mon compte",
  "Sign out": "Se déconnecter",
  "Show password": "Afficher le mot de passe",
  "Hide password": "Masquer le mot de passe",
  "Unlimited AI runs": "Utilisations IA illimitées",
  "{n} AI runs per day": "{n} utilisations IA par jour",

  // ── Cookie banner ───────────────────────────────────────────────────────
  "Cookie consent": "Consentement aux cookies",
  "We value your privacy": "Votre vie privée compte pour nous",
  "oMyImage uses necessary cookies to run the site and optional analytics only with your consent. Your images are never involved.":
    "oMyImage utilise des cookies nécessaires au fonctionnement du site et, uniquement avec votre accord, des cookies de mesure d'audience. Vos images ne sont jamais concernées.",
  "Accept All": "Tout accepter",
  "Reject All": "Tout refuser",
  "Customize": "Personnaliser",
  "Save preferences": "Enregistrer mes choix",
  "Back": "Retour",
  "Always on": "Toujours actifs",
  "Cookie Settings": "Paramètres des cookies",
  // CATEGORIES in CookieBanner.tsx (module scope, §4.2)
  "Necessary cookies": "Cookies nécessaires",
  "Required for core site features such as security, remembering your theme, and storing your cookie choice.":
    "Indispensables aux fonctions de base du site, comme la sécurité, la mémorisation de votre thème et l'enregistrement de vos choix en matière de cookies.",
  "Analytics cookies": "Cookies de mesure d'audience",
  "Help us understand how visitors use oMyImage so we can improve performance and decide which tools to build next.":
    "Nous aident à comprendre comment oMyImage est utilisé, pour améliorer les performances et choisir les prochains outils à créer.",
  "Advertising cookies": "Cookies publicitaires",
  "Used to deliver relevant ads and measure advertising performance. oMyImage runs no ads today — this is stored for if that ever changes.":
    "Servent à afficher des publicités pertinentes et à mesurer leur efficacité. oMyImage n'affiche aucune publicité aujourd'hui — votre choix est conservé au cas où cela changerait.",
  "Functional cookies": "Cookies fonctionnels",
  "Enable enhanced features such as saved preferences and a more personalised experience.":
    "Activent des fonctions supplémentaires, comme les préférences enregistrées et une expérience plus personnalisée.",

  // ── Drop zone, cloud import ─────────────────────────────────────────────
  "Select images": "Sélectionner des images",
  "Select an image": "Sélectionner une image",
  "Take photo": "Prendre une photo",
  "Processed in your browser — your images never leave your device.":
    "Traitement dans votre navigateur — vos images ne quittent jamais votre appareil.",
  "Processed on our server over an encrypted connection — files are deleted right after.":
    "Traitement sur notre serveur via une connexion chiffrée — les fichiers sont supprimés juste après.",
  "or import from": "ou importer depuis",
  "Connecting…": "Connexion…",
  "Add from {service}": "Ajouter depuis {service}",
  "Import from {service}": "Importer depuis {service}",
  "Imported 1 file from Google Drive.": "1 fichier importé depuis Google Drive.",
  "Imported {n} files from Google Drive.": "{n} fichiers importés depuis Google Drive.",
  "Imported 1 file from Dropbox.": "1 fichier importé depuis Dropbox.",
  "Imported {n} files from Dropbox.": "{n} fichiers importés depuis Dropbox.",
  "Google Drive import failed.": "L'import depuis Google Drive a échoué.",
  "Dropbox import failed.": "L'import depuis Dropbox a échoué.",

  // ── Tool workspace, file tray, mobile shell ─────────────────────────────
  "Selected files ({n})": "Fichiers sélectionnés ({n})",
  "Clear": "Vider",
  "Add more files": "Ajouter des fichiers",
  "Move earlier": "Déplacer avant",
  "Move later": "Déplacer après",
  "File view": "Affichage des fichiers",
  "Grid view": "Vue en grille",
  "List view": "Vue en liste",
  "1 image": "1 image",
  "{n} images": "{n} images",
  "1 file": "1 fichier",
  "{n} files": "{n} fichiers",
  "Settings": "Réglages",
  "Close": "Fermer",
  "Working…": "Traitement en cours…",
  "{label} value": "Valeur de {label}",
  "Options": "Options", // i18n-same
  "Clear image": "Retirer l'image",
  "Clear files": "Retirer les fichiers",
  "Change image": "Changer d'image",
  "Remove": "Retirer",
  "Download": "Télécharger",
  "Download {name}": "Télécharger {name}",
  "Download ({size})": "Télécharger ({size})",
  "Download all (ZIP)": "Tout télécharger (ZIP)",
  "Result": "Résultat",
  "Original": "Original", // i18n-same
  "Process": "Lancer le traitement",
  "Processing…": "Traitement…",
  "This is a server-powered tool, so large images may take a few seconds.":
    "Cet outil fonctionne sur notre serveur ; les grandes images peuvent donc prendre quelques secondes.",
  "Please select an image.": "Sélectionnez une image.",
  "Done — your image is ready.": "Terminé — votre image est prête.",
  "Processing failed.": "Le traitement a échoué.",

  // ── Background picker (swatch names are module scope, §4.2) ────────────
  "Background": "Arrière-plan",
  "Background (replaces transparency)": "Arrière-plan (remplace la transparence)",
  "Auto — match the image's own edges": "Auto — comme les bords de l'image",
  "Auto": "Auto", // i18n-same
  "Transparent": "Transparent", // i18n-same
  "Custom": "Personnalisé",
  "Custom color": "Couleur personnalisée",
  "Custom background color": "Couleur d'arrière-plan personnalisée",
  "White": "Blanc",
  "Black": "Noir",
  "Gray": "Gris",
  "Charcoal": "Anthracite",
  "Clay": "Argile",
  "Red": "Rouge",
  "Green": "Vert",
  "Blue": "Bleu",

  // ── Converter (ConvertTool) ─────────────────────────────────────────────
  "Converted in your browser — files stay on your device (very large or very high-resolution images are processed on our server).":
    "Conversion dans votre navigateur — les fichiers restent sur votre appareil (les images très lourdes ou de très haute résolution sont traitées sur notre serveur).",
  "Please select {format} files.": "Sélectionnez des fichiers {format}.",
  "Please select image files.": "Sélectionnez des fichiers image.",
  "Converted 1 image to {format}.": "1 image convertie en {format}.",
  "Converted {n} images to {format}.": "{n} images converties en {format}.",
  "Conversion failed.": "La conversion a échoué.",
  "Conversion settings": "Réglages de conversion",
  "Conversion Settings": "Réglages de conversion",
  "Converting…": "Conversion…",
  "Total: {before} → {after}": "Total : {before} → {after}",
  "1 file ready": "1 fichier prêt",
  "{n} files ready — downloads as a ZIP": "{n} fichiers prêts — téléchargés dans un ZIP",
  "Convert to {format}": "Convertir en {format}",
  "Convert {n} to {format}": "Convertir {n} en {format}",
  "Output:": "Sortie :",
  "Quality": "Qualité",
  "Auto-rotate by EXIF orientation": "Rotation automatique selon l'orientation EXIF",
  "Strip metadata": "Supprimer les métadonnées",
  "Remove EXIF, colour profile, camera and location data from the converted image to reduce size.":
    "Supprime les données EXIF, le profil colorimétrique et les informations d'appareil et de localisation de l'image convertie pour alléger le fichier.",

  // ── Crop dialog, canvases, effects ──────────────────────────────────────
  "Crop and rotate image": "Recadrer et faire pivoter l'image",
  "Crop & rotate": "Recadrer et pivoter",
  "Cancel": "Annuler",
  "Apply": "Appliquer",
  "Free": "Libre",
  "Rotate left": "Pivoter à gauche",
  "Rotate right": "Pivoter à droite",
  "Select whole image": "Sélectionner toute l'image",
  "Reset": "Réinitialiser",
  "Output": "Sortie",
  "Couldn't read this image.": "Impossible de lire cette image.",
  // ── Photo editor (after "Take photo" on a phone) ────────────────────────
  "Edit photo": "Modifier la photo",
  "Edit {name}": "Modifier {name}",
  "Crop": "Recadrer",
  "Adjust": "Ajuster",
  "Filters": "Filtres",
  "Auto enhance": "Amélioration auto",
  "Brightness": "Luminosité",
  "Contrast": "Contraste",
  "Saturation": "Saturation", // i18n-same
  "Warmth": "Chaleur",
  "Flip horizontal": "Retourner horizontalement",
  "Flip vertical": "Retourner verticalement",
  "Straighten": "Redresser",
  "Use original": "Utiliser l'original",
  "Done": "Terminé",
  "Vivid": "Vif",
  "B&W": "N&B",
  "Mono": "Mono", // i18n-same
  "Sepia": "Sépia",
  "Cool": "Froid",
  "Warm": "Chaud",
  "Couldn't apply that edit.": "Impossible d'appliquer cette modification.",
  "Compare original with result": "Comparer l'original et le résultat",
  "Crop area. Drag inside to move, drag a handle to resize, arrow keys to nudge.":
    "Zone de recadrage. Faites glisser l'intérieur pour la déplacer, une poignée pour la redimensionner, et utilisez les flèches pour l'ajuster.",
  "Merged image — drag to move, corners to resize, the top handle to rotate":
    "Image fusionnée — faites-la glisser pour la déplacer, utilisez les coins pour la redimensionner et la poignée du haut pour la faire pivoter",
  "Redaction area. Drag to paint over what you want hidden.":
    "Zone de masquage. Faites glisser pour peindre sur ce que vous voulez cacher.",
  "Redaction area. Drag to draw a region, click one to select it, drag its handles to resize, Delete to remove, arrow keys to nudge.":
    "Zone de masquage. Faites glisser pour tracer une zone ; cliquez sur une zone pour la sélectionner ; faites glisser ses poignées pour la redimensionner ; Suppr pour la retirer ; flèches pour l'ajuster.",
  "Select your effect": "Choisissez votre effet",
  "Previous effects": "Effets précédents",
  "More effects": "Plus d'effets",
  // EFFECT_SPECS labels (lib/image/effects.ts — module scope, §4.2)
  "No blur": "Sans flou",
  "Gaussian": "Gaussien",
  "Colour": "Couleur",
  "Motion": "Mouvement",
  "Radial": "Radial", // i18n-same
  "Pixelate": "Pixeliser",
  "Glass": "Verre",
  "Bloom": "Halo",
  "Trippy waves": "Ondes psychédéliques",
  "Halftone": "Trame",
  "Particle": "Particules",

  // ── Result screen ───────────────────────────────────────────────────────
  "Processing completed!": "Traitement terminé !",
  "Your image is ready for download": "Votre image est prête à être téléchargée",
  "Process more images": "Traiter d'autres images",
  "Your image": "Votre image",
  "Your images ({n})": "Vos images ({n})",
  "Preparing ZIP…": "Préparation du ZIP…",
  "Download all (.zip)": "Tout télécharger (.zip)",
  "Download all ({n})": "Tout télécharger ({n})",
  "Continue with this file": "Continuer avec ce fichier",
  "Share or save this tool": "Partagez ou enregistrez cet outil",
  "Copy the link, share on social media, or bookmark the page to find it later.":
    "Copiez le lien, partagez-le sur les réseaux sociaux ou ajoutez la page à vos favoris pour la retrouver plus tard.",
  "Copied": "Copié",
  "Copy link": "Copier le lien",
  "Couldn't copy the link.": "Impossible de copier le lien.",
  "Share": "Partager",
  "Share:": "Partager :",
  "(Ctrl + D to bookmark)": "(Ctrl + D pour l'ajouter aux favoris)",
  "Share on X": "Partager sur X",
  "Share on Facebook": "Partager sur Facebook",
  "Share on LinkedIn": "Partager sur LinkedIn",
  "Share on WhatsApp": "Partager sur WhatsApp",
  "Share on Telegram": "Partager sur Telegram",
  "I just used {tool} on oMyImage — free, fast, no sign-up.":
    "Je viens d'utiliser {tool} sur oMyImage — gratuit, rapide et sans inscription.",
  "Free image tools on oMyImage.": "Outils d'image gratuits sur oMyImage.",
  "Enjoyed the result?": "Le résultat vous plaît ?",
  "Share your experience on Trustpilot — it helps a lot.":
    "Partagez votre avis sur Trustpilot — cela nous aide beaucoup.",
  "Leave a review": "Laisser un avis",

  // ── Toasts (sonner's own accessible names — ThemedToaster) ──────────────
  "Notifications": "Notifications", // i18n-same
  "Close toast": "Fermer la notification",

  // ── Tool cards, favourites ──────────────────────────────────────────────
  "Premium tool": "Outil premium",
  "Premium tool — Free plan includes a limited number per day":
    "Outil premium — l'offre Free inclut un nombre limité d'utilisations par jour",
  "Runs on our server — {allowance}": "Fonctionne sur notre serveur — {allowance}",
  "Added to Favorites": "Ajouté aux favoris",
  "Removed from Favorites": "Retiré des favoris",
  "Add {tool} to favorites": "Ajouter {tool} aux favoris",
  "Remove {tool} from favorites": "Retirer {tool} des favoris",

  // ── Legal shell ─────────────────────────────────────────────────────────
  // "|section": a bare "Legal" is also the US paper size (image-to-pdf), which
  // must stay "Legal". The same English word, two meanings, two keys.
  // Auth chrome (components/auth) — shared by login, signup and the password flow.
  "Continue with Google": "Continuer avec Google",
  "or|divider": "ou",
  "Legal|section": "Mentions légales",
  "Last updated:": "Dernière mise à jour :",
  "Contents": "Sommaire",
  "On this page": "Sur cette page",
  "Back to top": "Retour en haut",

  // ── Errors thrown in lib/ and shown in toasts (src/i18n/errors.ts) ──────
  "Could not download “{name}” from Dropbox.": "Impossible de télécharger « {name} » depuis Dropbox.",
  "Could not download “{name}” from Google Drive.": "Impossible de télécharger « {name} » depuis Google Drive.",
  "The Dropbox chooser failed to start.": "Le sélecteur Dropbox n'a pas pu s'ouvrir.",
  "Unsupported image format: {name}": "Format d'image non pris en charge : {name}",
  "No frames found in this GIF.": "Aucune image (frame) trouvée dans ce GIF.",
  "Canvas is not supported in this browser.": "Ce navigateur ne prend pas en charge Canvas.",
  "Canvas not supported.": "Canvas non pris en charge.",
  "Could not export the image.": "Impossible d'exporter l'image.",
  "Add at least one frame.": "Ajoutez au moins une image (frame).",
  "Add at least one image.": "Ajoutez au moins une image.",
  "Server error ({status}).": "Erreur du serveur ({status}).",
  "Couldn't reach the processing server for this large file.":
    "Impossible de joindre le serveur de traitement pour ce fichier volumineux.",
  "Couldn't reach the processing server.": "Impossible de joindre le serveur de traitement.",
  "No image selected.": "Aucune image sélectionnée.",
  "The server did not start the job. Please try again.": "Le serveur n'a pas lancé le traitement. Veuillez réessayer.",
  "Timed out waiting for the server to finish.": "Le serveur a mis trop de temps à répondre.",
  "Your browser cannot save {format} images. Try Chrome, Edge or Firefox.": "Votre navigateur ne peut pas enregistrer d'images {format}. Essayez Chrome, Edge ou Firefox.",
  // lib/image/inpaint.ts (I18nError — invisible to i18n-keys)
  "The AI model could not be downloaded. Check your connection and try again.": "Impossible de télécharger le modèle d'IA. Vérifiez votre connexion et réessayez.",
  "This file is not a valid SVG.": "Ce fichier n'est pas un SVG valide.",
  "This size is too large for your browser — try a smaller scale.": "Cette taille est trop grande pour votre navigateur — essayez une échelle plus petite.",
  "This SVG could not be drawn. It may use features browsers do not render as an image.": "Impossible de dessiner ce SVG. Il utilise peut-être des fonctions que les navigateurs n'affichent pas sous forme d'image.",
  "Your browser blocks exporting this SVG because it contains embedded HTML.": "Votre navigateur bloque l'export de ce SVG, car il contient du HTML intégré.",
  "This file is not a valid WebP image.": "Ce fichier n'est pas une image WebP valide.",
  "This file is not a valid GIF.": "Ce fichier n'est pas un GIF valide.",
  "This WebP frame has no image data.": "Cette image (frame) WebP ne contient aucune donnée.",
  "Your browser can't create MP4 video. Try Chrome, Edge or Safari.": "Votre navigateur ne peut pas créer de vidéo MP4. Essayez Chrome, Edge ou Safari.",
  // …and the backend's own user-facing sentences (backend/src/routes/image).
  "Upload an image.": "Importez une image.",
  "This file is too large.": "Ce fichier est trop volumineux.",
  "Too many processing requests. Please wait a moment.":
    "Trop de demandes de traitement. Veuillez patienter un instant.",
  "Too many requests. Please slow down and try again shortly.":
    "Trop de requêtes. Ralentissez un peu et réessayez dans un instant.",
  "Too many requests. Please slow down.": "Trop de requêtes. Veuillez ralentir.",
  "You've hit the hourly processing limit for your network. Please try again later or sign in for higher limits.":
    "Vous avez atteint la limite de traitement horaire de votre réseau. Réessayez plus tard ou connectez-vous pour bénéficier de limites plus élevées.",
  "File not found or expired.": "Fichier introuvable ou expiré.",
  "This OCR job was not found or has expired.": "Ce traitement OCR est introuvable ou a expiré.",
  "That URL can't be reached — use a public http(s) address.":
    "Cette URL est inaccessible — utilisez une adresse http(s) publique.",
  "Provide a width and/or height.": "Indiquez une largeur, une hauteur ou les deux.",
};

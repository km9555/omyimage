/**
 * French tool names + short descriptions, keyed by tool **id**, plus the
 * category labels.
 *
 * Used everywhere a tool is LISTED: nav mega-menu, mobile drawer, apps menu,
 * footer, home grid, related-tools strip, dashboard cards and search results.
 * Falls back to English when an id is missing, so adding a tool never breaks
 * the French build — it just shows English until translated.
 *
 * ── Register and terminology (pinned — see i18n-fr-brief.md) ───────────────
 * French-French that reads naturally in Belgium, Switzerland and Québec; the
 * reader is addressed as **vous** (« Importez votre image », « Convertissez… »).
 *
 * Names follow the primary French query in the brief's table, not a word for
 * word translation: the home card, the nav link and the H1 should all read as
 * the thing someone in France typed into Google — « Supprimer l'arrière-plan »,
 * « Compresser une image », « PNG en JPG », « Générateur de mème »,
 * « Sélecteur de couleur », « Photo d'identité ». Conversions are "X en Y"
 * (the dominant query form).
 *
 * Vocabulary: image (head noun), photo only where the query carries it
 * (photo d'identité, retoucher une photo, photo en noir et blanc, photo de
 * profil); fichier, importer, télécharger, gratuit, IA. Sizes in Ko / Mo with
 * a no-break space before the unit.
 *
 * Format and product names stay Latin: JPG, PNG, WebP, HEIC, AVIF, GIF, BMP,
 * JFIF, PDF, HTML, Base64, EXIF, GPS, OCR.
 *
 * 3x4-photo and 2x2-photo are not shipped as French pages; they are named
 * here anyway so the lists that still show them never fall back to English.
 */

export interface LocalizedTool {
  name: string;
  shortDescription: string;
  /** Short chip label on the home page's "Sizes and presets" (variants only). */
  presetLabel?: string;
}

export const frTools: Record<string, LocalizedTool> = {
  // ── Optimiser ─────────────────────────────────────────────────────────
  "compress-image": {
    name: "Compresser une image",
    shortDescription: "Réduisez le poids de vos JPG, PNG et WebP avec la qualité de votre choix.",
  },
  "resize-image": {
    name: "Redimensionner une image",
    shortDescription: "Changez la taille en pixels ou en pourcentage sans déformer l'image.",
  },
  "crop-image": {
    name: "Recadrer une image",
    shortDescription: "Recadrez à n'importe quelle taille ou proportion, aussi par lots.",
  },
  "rotate-image": {
    name: "Faire pivoter une image",
    shortDescription: "Pivotez de 90°, 180°, 270° ou de n'importe quel angle, et retournez, par lots.",
  },

  // ── Convertir ─────────────────────────────────────────────────────────
  "convert-to-jpg": {
    name: "Convertir en JPG",
    shortDescription: "PNG, WebP, GIF et BMP → JPG.",
  },
  "png-to-jpg": {
    name: "PNG en JPG",
    shortDescription: "Convertissez vos images PNG en fichiers JPG plus légers.",
  },
  "jpg-to-png": {
    name: "JPG en PNG",
    shortDescription: "Convertissez un JPG en PNG sans perte, avec transparence.",
  },
  "webp-to-png": {
    name: "WebP en PNG",
    shortDescription: "Convertissez les images WebP modernes en PNG.",
  },
  "heic-to-png": {
    name: "HEIC en PNG",
    shortDescription: "Convertissez les photos HEIC de l'iPhone en PNG sans perte.",
  },
  "image-to-text": {
    name: "Image en texte",
    shortDescription: "Extrayez le texte modifiable de photos et de scans grâce à l'OCR.",
  },
  "webp-to-jpg": {
    name: "WebP en JPG",
    shortDescription: "Convertissez un WebP en JPG pour l'ouvrir partout.",
  },
  "jpg-to-webp": {
    name: "JPG en WebP",
    shortDescription: "Allégez nettement vos photos JPG en les convertissant en WebP.",
  },
  "png-to-webp": {
    name: "PNG en WebP",
    shortDescription: "Convertissez un PNG en WebP en conservant la transparence.",
  },
  "jfif-to-jpg": {
    name: "JFIF en JPG",
    shortDescription: "Transformez les fichiers .jfif téléchargés en .jpg.",
  },
  "gif-to-png": {
    name: "GIF en PNG",
    shortDescription: "Convertissez un GIF en image PNG sans perte.",
  },
  "gif-to-jpg": {
    name: "GIF en JPG",
    shortDescription: "Transformez les images d'un GIF en JPG légers.",
  },
  "bmp-to-jpg": {
    name: "BMP en JPG",
    shortDescription: "Transformez d'énormes fichiers BMP en petits JPG.",
  },
  "avif-to-jpg": {
    name: "AVIF en JPG",
    shortDescription: "Ouvrez vos images AVIF partout en les convertissant en JPG.",
  },
  "avif-to-png": {
    name: "AVIF en PNG",
    shortDescription: "Convertissez un AVIF en PNG sans perte, avec transparence.",
  },
  "heic-to-jpg": {
    name: "HEIC en JPG",
    shortDescription: "Convertissez les photos HEIC de l'iPhone en JPG ou en PNG.",
  },
  "image-to-pdf": {
    name: "Image en PDF",
    shortDescription: "Rassemblez vos images JPG et PNG dans un seul PDF.",
  },
  "image-to-base64": {
    name: "Image en Base64",
    shortDescription: "Encodez une image en data URI Base64.",
  },
  "base64-to-image": {
    name: "Base64 en image",
    shortDescription: "Décodez un texte Base64 pour retrouver l'image.",
  },
  "gif-to-images": {
    name: "GIF en images",
    shortDescription: "Enregistrez chaque image (frame) d'un GIF en PNG ou en JPG.",
  },

  // ── Modifier et créer ─────────────────────────────────────────────────
  "image-editor": {
    name: "Retoucher une photo",
    shortDescription: "Recadrez, ajustez, appliquez des filtres, dessinez et annotez dans un seul éditeur.",
  },
  "watermark-image": {
    name: "Ajouter un filigrane",
    shortDescription: "Ajoutez un filigrane texte ou logo, aussi par lots.",
  },
  "meme-generator": {
    name: "Générateur de mème",
    shortDescription: "Texte en haut et en bas, modèles et téléchargement en PNG ou JPG.",
  },
  "html-to-image": {
    name: "HTML en image",
    shortDescription: "Transformez une URL ou du code HTML en PNG ou JPG.",
  },
  "blur-face": {
    name: "Flouter un visage",
    shortDescription: "Détectez et masquez automatiquement visages et plaques d'immatriculation.",
  },
  "grayscale-image": {
    name: "Photo en noir et blanc",
    shortDescription: "Passez vos photos en noir et blanc, aussi par lots.",
  },
  "blur-image": {
    name: "Flouter une photo",
    shortDescription: "Appliquez un flou doux à toute l'image.",
  },
  "add-border": {
    name: "Ajouter une bordure à une image",
    shortDescription: "Entourez vos photos d'une bordure ou d'un cadre de couleur.",
  },
  "circle-crop": {
    name: "Recadrer une photo en cercle",
    shortDescription: "Recadrez vos images en rond, idéal pour les photos de profil.",
  },
  "merge-images": {
    name: "Fusionner des images",
    shortDescription: "Assemblez des images côte à côte, l'une sous l'autre ou en grille.",
  },
  "image-color-picker": {
    name: "Sélecteur de couleur",
    shortDescription: "Récupérez n'importe quelle couleur d'une image ou toute sa palette.",
  },
  "image-metadata": {
    name: "Voir les métadonnées d'une photo",
    shortDescription: "Consultez les données EXIF, GPS et appareil photo d'une image.",
  },
  "remove-exif": {
    name: "Supprimer les métadonnées",
    shortDescription: "Effacez EXIF, GPS et métadonnées pour protéger votre vie privée.",
  },
  "gif-maker": {
    name: "Créer un GIF",
    shortDescription: "Transformez vos images en GIF animé.",
  },

  // ── IA ────────────────────────────────────────────────────────────────
  "remove-background": {
    name: "Supprimer l'arrière-plan",
    shortDescription: "Supprimez le fond avec l'IA et téléchargez un PNG transparent.",
  },
  "upscale-image": {
    name: "Améliorer la qualité d'une image",
    shortDescription: "Augmentez la résolution ×2, ×3 ou ×4 avec l'IA et retrouvez les détails.",
  },

  // ── Variantes : compresser à une taille (expansion.md) ──
  "reduce-image-size-in-kb": {
    name: "Réduire la taille d'une image en Ko",
    presetLabel: "Réduire en Ko",
    shortDescription: "Ramenez une photo exactement au nombre de Ko voulu.",
  },
  "compress-image-to-20kb": {
    name: "Compresser une image à 20 Ko",
    shortDescription: "Photos et signatures de moins de 20 Ko pour les formulaires.",
  },
  "compress-image-to-50kb": {
    name: "Compresser une image à 50 Ko",
    shortDescription: "Une limite courante pour les photos des démarches en ligne.",
  },
  "compress-image-to-100kb": {
    name: "Compresser une image à 100 Ko",
    shortDescription: "Photos et documents nets de moins de 100 Ko.",
  },
  "compress-image-to-200kb": {
    name: "Compresser une image à 200 Ko",
    shortDescription: "Photos et documents scannés de moins de 200 Ko.",
  },
  "compress-image-to-1mb": {
    name: "Compresser une image à 1 Mo",
    shortDescription: "Photos de téléphone de moins de 1 Mo, presque toujours en pleine résolution.",
  },
  "compress-image-to-10kb": {
    name: "Compresser une image à 10 Ko",
    shortDescription: "Signatures et petites photos de moins de 10 Ko.",
  },
  "compress-image-to-30kb": {
    name: "Compresser une image à 30 Ko",
    shortDescription: "Photos de formulaire de moins de 30 Ko, avec un visage net.",
  },
  "compress-image-to-300kb": {
    name: "Compresser une image à 300 Ko",
    shortDescription: "Photos et documents lisibles de moins de 300 Ko.",
  },
  "compress-image-to-500kb": {
    name: "Compresser une image à 500 Ko",
    shortDescription: "Photos, documents et captures d'écran de moins de 500 Ko.",
  },
  "compress-image-to-2mb": {
    name: "Compresser une image à 2 Mo",
    shortDescription: "Grandes photos de téléphone de moins de 2 Mo.",
  },
  "compress-image-to-15kb": {
    name: "Compresser une image à 15 Ko",
    shortDescription: "Signatures et petites photos de moins de 15 Ko.",
  },
  "compress-image-to-40kb": {
    name: "Compresser une image à 40 Ko",
    shortDescription: "Photos nettes pour formulaires de moins de 40 Ko.",
  },
  "compress-image-to-150kb": {
    name: "Compresser une image à 150 Ko",
    shortDescription: "Photos et pages manuscrites de moins de 150 Ko.",
  },
  "increase-image-size-in-kb": {
    name: "Augmenter la taille d'une image en Ko",
    presetLabel: "Augmenter en Ko",
    shortDescription: "Portez une photo à au moins 10, 20 ou 50 Ko.",
  },
  "signature-resizer": {
    name: "Redimensionner une signature",
    shortDescription: "Nettoyez, recadrez et redimensionnez l'image de votre signature.",
  },
  "jpg-to-pdf-under-100kb": {
    name: "JPG en PDF de moins de 100 Ko",
    shortDescription: "PDF d'une page de moins de 100 Ko pour les formulaires.",
  },
  "jpg-to-pdf-under-200kb": {
    name: "JPG en PDF de moins de 200 Ko",
    shortDescription: "Attestations et documents en PDF de moins de 200 Ko.",
  },
  "jpg-to-pdf-under-300kb": {
    name: "JPG en PDF de moins de 300 Ko",
    shortDescription: "PDF de plusieurs pages de moins de 300 Ko.",
  },
  "jpg-to-pdf-under-500kb": {
    name: "JPG en PDF de moins de 500 Ko",
    shortDescription: "Longs documents en PDF de moins de 500 Ko.",
  },
  "convert-to-png": {
    name: "Convertir en PNG",
    shortDescription: "JPG, WebP, GIF et BMP → PNG.",
  },
  "convert-to-webp": {
    name: "Convertir en WebP",
    shortDescription: "JPG, PNG, GIF et BMP → WebP.",
  },
  "svg-to-png": {
    name: "SVG en PNG",
    shortDescription: "Vos vecteurs SVG en PNG nets, à n'importe quelle taille.",
  },
  "png-to-ico": {
    name: "PNG en ICO",
    shortDescription: "Créez un favicon : fichiers .ico et icônes Windows.",
  },
  "youtube-thumbnail-resizer": {
    name: "Taille de miniature YouTube",
    presetLabel: "Miniature YouTube",
    shortDescription: "N'importe quelle image au format miniature : 1280 × 720.",
  },
  "whatsapp-dp-resizer": {
    name: "Photo de profil WhatsApp",
    presetLabel: "Profil WhatsApp",
    shortDescription: "La photo entière dans le profil carré, sans recadrer.",
  },
  "linkedin-banner-resizer": {
    name: "Bannière LinkedIn",
    presetLabel: "Bannière LinkedIn",
    shortDescription: "N'importe quelle image en bannière LinkedIn : 1584 × 396.",
  },
  "facebook-cover-resizer": {
    name: "Photo de couverture Facebook",
    presetLabel: "Couverture Facebook",
    shortDescription: "N'importe quelle image en couverture Facebook : 851 × 315.",
  },
  "discord-banner-resizer": {
    name: "Bannière Discord",
    presetLabel: "Bannière Discord",
    shortDescription: "Bannières de profil et de serveur pour Discord.",
  },
  "9-16-aspect-ratio-image": {
    name: "Format 9:16 (1080x1920)",
    presetLabel: "9:16 (1080×1920)",
    shortDescription: "N'importe quelle image au format 9:16, en 1080 × 1920.",
  },
  "dpi-converter": {
    name: "Changer le DPI d'une image",
    shortDescription: "Passez à 300, 200 ou toute autre valeur de DPI sans perte de qualité.",
  },
  "dpi-checker": {
    name: "Vérifier le DPI d'une image",
    shortDescription: "Consultez le DPI d'une image et sa taille d'impression.",
  },
  "resize-image-in-cm": {
    name: "Redimensionner une image en cm",
    presetLabel: "Taille en cm",
    shortDescription: "Ajustez à une taille exacte en cm, mm ou pouces.",
  },
  "video-to-gif": {
    name: "Vidéo en GIF",
    shortDescription: "Transformez un extrait MP4, WEBM ou MOV en GIF.",
  },
  "gif-compressor": {
    name: "Compresser un GIF",
    shortDescription: "Réduisez le poids d'un GIF animé sans perdre d'images.",
  },
  "gif-resizer": {
    name: "Redimensionner un GIF",
    shortDescription: "Changez la taille d'un GIF animé en gardant toutes ses images.",
  },
  "gif-to-mp4": {
    name: "GIF en MP4",
    shortDescription: "Convertissez un GIF en vidéo MP4 légère.",
  },
  "webp-to-gif": {
    name: "WebP en GIF",
    shortDescription: "Convertissez un WebP animé en GIF.",
  },
  "gif-cropper": {
    name: "Recadrer un GIF",
    shortDescription: "Recadrez un GIF animé en gardant toutes ses images.",
  },
  "rotate-gif": {
    name: "Faire pivoter un GIF",
    shortDescription: "Pivotez un GIF animé de 90° ou 180°, ou retournez-le.",
  },
  "reverse-gif": {
    name: "Inverser un GIF",
    shortDescription: "Lisez un GIF à l'envers ou en boucle aller-retour.",
  },
  "gif-speed-changer": {
    name: "Changer la vitesse d'un GIF",
    shortDescription: "Accélérez ou ralentissez un GIF animé.",
  },
  "gif-cutter": {
    name: "Couper un GIF",
    shortDescription: "Raccourcissez un GIF et gardez seulement les images voulues.",
  },
  "gif-to-webp": {
    name: "GIF en WebP",
    shortDescription: "Convertissez un GIF animé en WebP animé.",
  },
  "gif-to-apng": {
    name: "GIF en APNG",
    shortDescription: "Convertissez un GIF animé en PNG animé (APNG).",
  },
  "gif-to-sprite-sheet": {
    name: "GIF en sprite sheet",
    shortDescription: "Placez toutes les images d'un GIF sur une sprite sheet PNG.",
  },
  "gif-merger": {
    name: "Fusionner des GIF",
    shortDescription: "Enchaînez plusieurs GIF les uns après les autres en un seul.",
  },
  "add-text-to-gif": {
    name: "Ajouter du texte à un GIF",
    shortDescription: "Écrivez sur un GIF animé, sur toutes les images ou seulement certaines.",
  },
  "typing-text-gif": {
    name: "GIF texte machine à écrire",
    shortDescription: "Créez un GIF où le texte s'écrit lettre par lettre.",
  },
  "invert-image": {
    name: "Inverser les couleurs d'une image",
    shortDescription: "Inversez les couleurs d'une photo — négatif ou inversion intelligente.",
  },
  "pixelate-image": {
    name: "Pixeliser une image",
    shortDescription: "Transformez vos photos en gros blocs de pixels.",
  },
  "image-brightness": {
    name: "Luminosité d'une image",
    shortDescription: "Éclaircissez ou assombrissez une photo, réglez contraste et couleurs.",
  },
  "glitch-effect": {
    name: "Effet glitch",
    shortDescription: "Donnez à vos photos l'aspect d'un écran brouillé.",
  },
  "round-corners": {
    name: "Arrondir les coins d'une image",
    shortDescription: "Arrondissez les coins d'une image avec des bords transparents.",
  },
  "remove-watermark": {
    name: "Supprimer un filigrane",
    shortDescription: "Effacez filigranes, logos et dates avec l'IA, dans le navigateur.",
  },
  "remove-object": {
    name: "Supprimer un objet d'une photo",
    shortDescription: "Effacez personnes, objets et imperfections de vos photos avec l'IA.",
  },
  "split-image": {
    name: "Découper une image",
    shortDescription: "Coupez une image en parties ou en tuiles égales.",
  },
  "image-overlay": {
    name: "Superposer des images",
    shortDescription: "Placez une image sur une autre avec opacité et mode de fusion.",
  },

  // ── Variantes : améliorer, miroir, arrière-plan (expansion.md) ──
  "image-to-hd": {
    name: "Image en HD",
    shortDescription: "Passez une petite photo ou une image basse résolution en HD.",
  },
  "unblur-image": {
    name: "Rendre une photo nette",
    shortDescription: "Redonnez de la netteté aux photos légèrement floues avec l'IA.",
  },
  "flip-image": {
    name: "Image miroir",
    shortDescription: "Retournez vos photos horizontalement ou verticalement, comme un miroir.",
  },
  "change-background-color": {
    name: "Changer le fond d'une photo",
    shortDescription: "Un fond blanc, bleu ou rouge pour n'importe quelle photo.",
  },
  "blur-background": {
    name: "Flouter l'arrière-plan",
    shortDescription: "Un effet portrait derrière n'importe quelle personne ou objet.",
  },
  "passport-photo-maker": {
    name: "Photo d'identité",
    shortDescription: "Photos d'identité, passeport et visa, avec planche à imprimer.",
  },
  "3x4-photo": {
    name: "Photo 3x4 (Brésil)",
    shortDescription: "Photos d'identité de 3 × 4 cm, recadrées et prêtes à imprimer.",
  },
  "2x2-photo": {
    name: "Photo 2x2 (visa américain)",
    shortDescription: "Photo de 2 × 2 pouces pour le passeport et le visa américains.",
  },
  "instagram-grid-maker": {
    name: "Grille Instagram",
    shortDescription: "Découpez une photo en grille ou en carrousel Instagram.",
  },
};

/**
 * Category labels. `title` is the home-page section heading, `navLabel` the
 * short pill / breadcrumb label — same split as CATEGORIES in lib/tools.ts.
 */
export const frCategories: Record<string, { title: string; navLabel: string }> = {
  optimize: { title: "Optimiser et compresser", navLabel: "Optimiser" },
  convert: { title: "Convertir des images", navLabel: "Convertir" },
  edit: { title: "Modifier et créer", navLabel: "Modifier" },
  gif: { title: "Outils GIF", navLabel: "GIF" },
  ai: { title: "Outils d'IA", navLabel: "IA pour images" },
};

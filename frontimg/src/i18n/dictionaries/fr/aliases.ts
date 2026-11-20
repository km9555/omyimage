/**
 * French search synonyms, keyed by tool id — what someone in France, Belgium,
 * Switzerland or Québec types into the header search when they don't know
 * our tool's exact name.
 *
 * Generous on purpose: every primary and secondary query from the brief's
 * table (i18n-fr-brief.md), the regional words the interface avoids (Québec
 * « téléverser », « cellulaire », « courriel »; Belgian/Swiss « GSM »,
 * « natel »), the English loanwords French speakers search with ("remove bg",
 * "png to jpg", "resize", "upscale", "color picker", "meme generator"), and the
 * usual typos.
 *
 * Lowercase. Accents are folded at match time (é → e, ç → c — see
 * lib/search-normalize.ts), so "arrière-plan" / "arriere-plan" and
 * "métadonnées" / "metadonnees" already match each other; a few accentless and
 * hyphenless spellings are still listed so the intent is visible to a reviewer.
 */
export const frAliases: Record<string, string[]> = {
  // ── Optimiser ─────────────────────────────────────────────────────────
  "compress-image": [
    "compresser une image", "compresser image", "compresser images", "compresser photo",
    "compresser photos", "compresser une photo", "compression image", "compression photo",
    "réduire taille image", "reduire taille image", "réduire poids image", "reduire poids image",
    "réduire le poids d'une photo", "alléger image", "alleger photo", "image plus légère",
    "diminuer taille image", "compresser jpg", "compresser jpeg", "compresser png",
    "compresser webp", "optimiser image", "compresseur d'image", "compresseur photo",
    "réduire mo", "réduire ko", "compresé image", "compreser image", "compresse image",
    "compress image", "image compressor", "compresser photo iphone", "compresser photo gsm",
    "compresser photo cellulaire", "compresser photo pour mail", "compresser photo pour courriel",
  ],
  "resize-image": [
    "redimensionner une image", "redimensionner image", "redimensionner photo",
    "redimensionner une photo", "changer taille image", "changer la taille d'une image",
    "changer taille photo", "réduire taille photo", "reduire taille photo", "agrandir image",
    "agrandir photo", "rétrécir image", "retrecir image", "modifier taille image",
    "taille en pixels", "largeur et hauteur", "changer résolution", "redimentionner image",
    "redimensioner image", "redimensionné image", "resize", "resizer", "resize image",
    "proportions",
  ],
  "crop-image": [
    "recadrer une image", "recadrer image", "recadrer photo", "rogner image", "rogner photo",
    "rogner une image", "couper image", "couper photo", "découper photo", "recadrage photo",
    "recadrer carré", "crop", "crop image", "16:9", "4:3", "recadré image",
  ],
  "rotate-image": [
    "faire pivoter une image", "pivoter image", "pivoter photo", "tourner une image",
    "tourner image", "tourner photo", "rotation image", "rotation photo", "90 degrés",
    "180 degrés", "redresser photo", "photo à l'envers", "photo couchée", "rotate", "rotate image",
  ],
  "remove-exif": [
    "supprimer les métadonnées", "supprimer metadonnees", "supprimer métadonnées photo",
    "effacer métadonnées", "enlever métadonnées", "supprimer exif", "effacer exif",
    "enlever exif", "supprimer données exif", "supprimer localisation photo",
    "supprimer gps photo", "enlever position photo", "anonymiser photo", "confidentialité photo",
    "exif remover", "remove exif", "strip metadata",
  ],

  // ── Convertir ─────────────────────────────────────────────────────────
  "convert-to-jpg": [
    "convertir en jpg", "convertir image en jpg", "convertir en jpeg", "convertir une image en jpg",
    "transformer en jpg", "mettre en jpg", "changer format en jpg", "convertisseur d'image",
    "convertisseur image", "convertir image", "changer format image", "jpeg", "jpg converter",
    "en jpg", "to jpg",
  ],
  "png-to-jpg": [
    "png en jpg", "convertir png en jpg", "png en jpeg", "transformer png en jpg",
    "passer de png à jpg", "png vers jpg", "png to jpg", "png a jpg", "png2jpg", "convertir png jpg",
  ],
  "jpg-to-png": [
    "jpg en png", "convertir jpg en png", "jpeg en png", "transformer jpg en png",
    "jpg vers png", "jpg to png", "jpg a png", "jpg2png", "convertir jpg png",
  ],
  "webp-to-png": [
    "webp en png", "convertir webp en png", "ouvrir webp", "webp vers png", "webp to png",
  ],
  "webp-to-jpg": [
    "webp en jpg", "convertir webp en jpg", "webp en jpeg", "ouvrir webp", "webp vers jpg",
    "webp to jpg", "fichier webp",
  ],
  "jpg-to-webp": ["jpg en webp", "convertir jpg en webp", "jpeg en webp", "jpg to webp"],
  "png-to-webp": ["png en webp", "convertir png en webp", "png to webp"],
  "heic-to-jpg": [
    "heic en jpg", "convertir heic en jpg", "heic en jpeg", "ouvrir heic", "photos iphone",
    "photo iphone en jpg", "convertir photos iphone", "heif en jpg", "heic to jpg",
    "fichier heic", "heic vers jpg", "ouvrir heic sur pc", "ouvrir heic windows",
    "heic sur windows", "photos iphone sur pc", "convertisseur heic",
  ],
  "heic-to-png": ["heic en png", "convertir heic en png", "photo iphone en png", "heif en png", "heic to png"],
  "jfif-to-jpg": ["jfif en jpg", "convertir jfif en jpg", "ouvrir jfif", "fichier jfif", "jfif to jpg"],
  "gif-to-png": ["gif en png", "convertir gif en png", "gif to png"],
  "gif-to-jpg": ["gif en jpg", "convertir gif en jpg", "gif to jpg"],
  "bmp-to-jpg": ["bmp en jpg", "convertir bmp en jpg", "bmp en jpeg", "bmp to jpg"],
  "avif-to-jpg": ["avif en jpg", "convertir avif en jpg", "ouvrir avif", "fichier avif", "avif to jpg"],
  "avif-to-png": ["avif en png", "convertir avif en png", "avif to png"],
  "image-to-text": [
    "image en texte", "convertir image en texte", "extraire texte image", "extraire le texte d'une image",
    "texte d'une photo", "photo en texte", "ocr", "ocr en ligne", "ocr gratuit",
    "reconnaissance de texte", "copier texte image", "capture d'écran en texte", "jpg en texte",
    "image en word", "image to text", "lire texte image",
  ],
  "image-to-pdf": [
    "image en pdf", "convertir image en pdf", "png en pdf", "convertir png en pdf", "jpg en pdf",
    "convertir jpg en pdf", "jpeg en pdf", "photo en pdf", "photos en pdf", "convertir photo en pdf",
    "images en pdf", "mettre des photos en pdf", "transformer photo en pdf", "rassembler images en un pdf",
    "plusieurs images en un pdf", "scanner en pdf", "image to pdf", "jpg to pdf", "png to pdf",
  ],
  "image-to-base64": [
    "image en base64", "base64", "encoder base64", "data uri", "base64 encoder",
    "convertir image en base64", "image to base64",
  ],
  "base64-to-image": [
    "base64 en image", "base64 to image", "décoder base64", "decoder base64", "base64 decoder",
    "base64 en png", "base64 en jpg",
  ],
  "gif-to-images": [
    "gif en images", "extraire images gif", "séparer gif en images", "frames gif",
    "gif en jpg", "gif en png", "découper gif en images",
  ],

  // ── Modifier et créer ─────────────────────────────────────────────────
  "image-editor": [
    "retoucher une photo", "retoucher photo", "retouche photo", "retouche photo en ligne",
    "éditeur photo", "editeur photo", "éditeur d'image", "éditeur photo gratuit",
    "modifier photo", "modifier une photo", "modifier image", "éditer photo", "photoshop en ligne",
    "filtres photo", "dessiner sur une image", "annoter image", "photo editor", "retoucher photo gratuit",
  ],
  "watermark-image": [
    "ajouter un filigrane", "filigrane", "filigrane photo", "mettre un filigrane",
    "ajouter filigrane", "filigraner photo", "filigrane image", "créer un filigrane",
    "logo sur photo", "mettre logo sur image", "texte sur image", "protéger ses photos",
    "copyright photo", "watermark", "add watermark", "filigramme", "filligrane",
  ],
  "meme-generator": [
    "générateur de mème", "generateur de meme", "générateur de mèmes", "créer un mème",
    "creer un meme", "faire un mème", "faire un meme", "meme generator", "meme maker",
    "mèmes", "meme", "modèles de mèmes", "texte en haut et en bas", "créateur de mème",
  ],
  "html-to-image": [
    "html en image", "html en png", "page web en image", "capture de page web",
    "capture site web", "url en image", "html to image",
  ],
  "blur-face": [
    "flouter un visage", "flouter visage", "flouter les visages", "pixeliser un visage",
    "pixeliser visage", "masquer visage", "cacher visage", "anonymiser visage",
    "flouter plaque d'immatriculation", "flouter plaque", "cacher plaque", "anonymiser photo",
    "blur face",
  ],
  "grayscale-image": [
    "photo en noir et blanc", "mettre une photo en noir et blanc", "photo noir et blanc",
    "image noir et blanc", "noir et blanc", "niveaux de gris", "nuances de gris",
    "enlever la couleur", "désaturer", "n&b", "grayscale",
  ],
  "blur-image": [
    "flouter une photo", "flouter photo", "flouter image", "flou photo", "flouter une image",
    "rendre une image floue", "photo floue", "effet flou", "blur", "blur image",
  ],
  "add-border": [
    "ajouter une bordure à une image", "ajouter bordure image", "bordure photo", "cadre photo",
    "encadrer photo", "mettre un cadre", "bordure blanche", "contour photo", "cadre photo en ligne",
  ],
  "circle-crop": [
    "recadrer une photo en cercle", "recadrer photo en cercle", "photo ronde", "image ronde",
    "rogner en rond", "photo circulaire", "photo de profil ronde", "avatar rond", "circle crop",
  ],
  "merge-images": [
    "fusionner des images", "fusionner images", "fusionner photos", "montage photo",
    "assembler des photos", "assembler images", "collage photo", "combiner images",
    "combiner photos", "coller deux photos", "mettre deux photos côte à côte", "photos côte à côte",
    "joindre images", "regrouper photos", "merge images", "photo montage",
  ],
  "gif-maker": [
    "créer un gif", "creer un gif", "faire un gif", "gif maker", "créateur de gif", "gif animé",
    "photos en gif", "images en gif", "faire un gif avec des photos", "créer une animation",
  ],
  "image-color-picker": [
    "sélecteur de couleur", "selecteur de couleur", "color picker", "pipette couleur",
    "pipette", "couleur image", "couleur d'une image", "trouver couleur image",
    "code couleur", "code hex", "code hexadécimal", "palette de couleurs", "identifier une couleur",
    "quelle couleur", "colour picker", "sélecteur de couleurs",
  ],
  "image-metadata": [
    "voir les métadonnées d'une photo", "voir metadonnees photo", "métadonnées photo",
    "metadonnees image", "données exif", "exif", "lecteur exif", "visionneuse exif", "exif viewer",
    "date de la photo", "où a été prise la photo", "localisation photo", "infos photo",
    "propriétés image",
  ],

  // ── IA ────────────────────────────────────────────────────────────────
  "remove-background": [
    "supprimer l'arrière-plan", "supprimer arrière plan", "supprimer arriere plan",
    "supprimer l'arriere-plan", "enlever l'arrière-plan", "enlever arriere plan",
    "supprimer fond image", "supprimer le fond", "supprimer fond photo", "enlever fond",
    "enlever le fond", "enlever fond image", "enlever fond photo", "retirer le fond",
    "effacer le fond", "détourer image", "detourer image", "détourer photo", "détourage",
    "detourage", "fond transparent", "image fond transparent", "png transparent",
    "supprimer fond gratuit", "sans fond", "remove bg", "removebg", "remove background",
    "background remover",
  ],
  "upscale-image": [
    "améliorer la qualité d'une image", "ameliorer qualite image", "améliorer qualité photo",
    "améliorer la qualité d'une photo", "augmenter résolution image", "augmenter la résolution",
    "augmenter resolution photo", "agrandir image sans perte", "agrandir image sans perte de qualité",
    "upscale", "upscaler", "upscale image", "améliorer photo ia", "améliorer image ia",
    "image en meilleure qualité", "x2", "x4", "2x", "4x",
  ],

  // Variantes — compresser à une taille
  "reduce-image-size-in-kb": [
    "réduire la taille d'une image en ko", "reduire taille image ko", "réduire ko photo",
    "réduire poids photo en ko", "image en ko", "changer ko image", "poids en ko",
    "taille en kb", "reduce image size in kb",
  ],
  "compress-image-to-20kb": ["compresser une image à 20 ko", "réduire une photo à 20 ko", "20 ko", "20ko", "20 kb", "signature 20 ko"],
  "compress-image-to-50kb": ["compresser une image à 50 ko", "réduire une photo à 50 ko", "50 ko", "50ko", "50 kb", "photo 50 ko"],
  "compress-image-to-100kb": [
    "compresser une image à 100 ko", "réduire une photo à 100 ko", "100 ko", "100ko", "100 kb",
    "image moins de 100 ko",
  ],
  "compress-image-to-200kb": [
    "compresser une image à 200 ko", "réduire une photo à 200 ko", "200 ko", "200ko", "200 kb",
    "image moins de 200 ko",
  ],
  "compress-image-to-1mb": [
    "compresser une image à 1 mo", "réduire une photo à 1 mo", "image moins de 1 mo", "1 mo", "1mo", "1 mb",
  ],
  "compress-image-to-10kb": ["compresser une image à 10 ko", "réduire une photo à 10 ko", "10 ko", "10ko", "10 kb", "signature 10 ko"],
  "compress-image-to-30kb": ["compresser une image à 30 ko", "réduire une photo à 30 ko", "30 ko", "30ko", "30 kb"],
  "compress-image-to-300kb": ["compresser une image à 300 ko", "réduire une photo à 300 ko", "300 ko", "300ko", "300 kb"],
  "compress-image-to-500kb": ["compresser une image à 500 ko", "réduire une photo à 500 ko", "500 ko", "500ko", "500 kb"],
  "compress-image-to-2mb": ["compresser une image à 2 mo", "réduire une photo à 2 mo", "image moins de 2 mo", "2 mo", "2mo", "2 mb"],
  "compress-image-to-15kb": ["compresser une image à 15 ko", "réduire une photo à 15 ko", "15 ko", "15ko", "15 kb"],
  "compress-image-to-40kb": ["compresser une image à 40 ko", "réduire une photo à 40 ko", "40 ko", "40ko", "40 kb"],
  "compress-image-to-150kb": ["compresser une image à 150 ko", "réduire une photo à 150 ko", "150 ko", "150ko", "150 kb"],
  "increase-image-size-in-kb": [
    "augmenter la taille d'une image en ko", "augmenter taille image ko", "augmenter ko photo",
    "augmenter poids image", "rendre une image plus lourde", "image trop légère",
  ],
  "signature-resizer": [
    "redimensionner une signature", "redimensionner signature", "signature image",
    "signature en image", "réduire signature", "recadrer signature", "signature fond blanc",
    "signature pour formulaire", "scanner signature", "signature numérique",
  ],
  "jpg-to-pdf-under-100kb": ["jpg en pdf de moins de 100 ko", "pdf 100 ko", "jpg en pdf 100ko", "pdf moins de 100 ko"],
  "jpg-to-pdf-under-200kb": ["jpg en pdf de moins de 200 ko", "pdf 200 ko", "jpg en pdf 200ko", "pdf moins de 200 ko"],
  "jpg-to-pdf-under-300kb": ["jpg en pdf de moins de 300 ko", "pdf 300 ko", "jpg en pdf 300ko", "pdf moins de 300 ko"],
  "jpg-to-pdf-under-500kb": ["jpg en pdf de moins de 500 ko", "pdf 500 ko", "jpg en pdf 500ko", "pdf moins de 500 ko"],
  "convert-to-png": [
    "convertir en png", "convertir image en png", "convertir une image en png", "transformer en png",
    "mettre en png", "en png", "to png",
  ],
  "convert-to-webp": [
    "convertir en webp", "convertir image en webp", "convertir une image en webp", "transformer en webp",
    "en webp", "to webp",
  ],
  "svg-to-png": ["svg en png", "convertir svg en png", "vectoriel en png", "svg vers png", "svg to png"],
  "png-to-ico": [
    "png en ico", "créer un favicon", "creer favicon", "générateur de favicon", "favicon",
    "créer une icône", "image en ico", "jpg en ico", "convertir png en ico", "png to ico",
  ],
  "youtube-thumbnail-resizer": [
    "taille de miniature youtube", "taille miniature youtube", "miniature youtube",
    "miniature vidéo youtube", "vignette youtube", "thumbnail youtube", "1280x720",
  ],
  "whatsapp-dp-resizer": [
    "photo de profil whatsapp", "photo profil whatsapp sans recadrer", "photo de profil whatsapp sans couper",
    "photo entière whatsapp", "taille photo profil whatsapp", "whatsapp dp",
  ],
  "linkedin-banner-resizer": [
    "bannière linkedin", "banniere linkedin", "taille bannière linkedin", "photo de couverture linkedin",
    "fond de profil linkedin", "linkedin banner", "1584x396",
  ],
  "facebook-cover-resizer": [
    "photo de couverture facebook", "couverture facebook", "taille couverture facebook",
    "bannière facebook", "facebook cover", "851x315",
  ],
  "discord-banner-resizer": [
    "bannière discord", "banniere discord", "taille bannière discord", "bannière de serveur discord",
    "discord banner",
  ],
  "9-16-aspect-ratio-image": [
    "format 9:16", "image 9:16", "1080x1920", "photo 9:16", "taille story instagram",
    "format story", "format reels", "format tiktok", "format vertical", "stories",
  ],
  "dpi-converter": [
    "changer le dpi d'une image", "changer dpi", "300 dpi", "image en 300 dpi", "augmenter dpi",
    "convertir dpi", "modifier dpi", "ppp",
  ],
  "dpi-checker": [
    "vérifier le dpi d'une image", "verifier dpi", "connaître le dpi d'une image",
    "combien de dpi", "voir dpi", "vérifier la résolution", "dpi image",
  ],
  "resize-image-in-cm": [
    "redimensionner une image en cm", "redimensionner image cm", "changer taille image en cm",
    "image en centimètres", "cm en pixels", "image en mm", "taille d'impression",
  ],
  "video-to-gif": [
    "vidéo en gif", "video en gif", "mp4 en gif", "convertir vidéo en gif", "mov en gif",
    "gif à partir d'une vidéo", "faire un gif avec une vidéo", "video to gif",
  ],
  "gif-compressor": [
    "compresser un gif", "compresser gif", "réduire la taille d'un gif", "reduire taille gif",
    "gif plus léger", "optimiser gif", "gif compressor",
  ],
  "gif-resizer": ["redimensionner un gif", "redimensionner gif", "changer taille gif", "réduire gif", "gif resizer"],
  "gif-to-mp4": ["gif en mp4", "convertir gif en mp4", "gif en vidéo", "gif to mp4"],
  "webp-to-gif": ["webp en gif", "convertir webp en gif", "webp animé en gif", "webp to gif"],
  "gif-cropper": ["recadrer un gif", "recadrer gif", "rogner gif", "crop gif"],
  "rotate-gif": ["faire pivoter un gif", "pivoter gif", "tourner gif", "retourner gif"],
  "reverse-gif": [
    "inverser un gif", "inverser gif", "gif à l'envers", "gif en sens inverse", "gif boomerang",
    "reverse gif",
  ],
  "gif-speed-changer": [
    "changer la vitesse d'un gif", "vitesse gif", "accélérer gif", "ralentir gif",
    "gif plus rapide", "gif plus lent",
  ],
  "gif-cutter": ["couper un gif", "couper gif", "raccourcir gif", "découper gif", "supprimer images gif"],
  "gif-to-webp": ["gif en webp", "convertir gif en webp", "webp animé", "gif to webp"],
  "gif-to-apng": ["gif en apng", "png animé", "convertir gif en apng", "gif to apng"],
  "gif-to-sprite-sheet": ["gif en sprite sheet", "sprite sheet", "spritesheet", "planche de sprites"],
  "gif-merger": ["fusionner des gif", "fusionner gif", "assembler gif", "combiner gif", "merge gif"],
  "add-text-to-gif": [
    "ajouter du texte à un gif", "ajouter texte gif", "écrire sur un gif", "texte sur gif",
    "sous-titres gif",
  ],
  "typing-text-gif": [
    "gif texte machine à écrire", "effet machine à écrire", "texte qui s'écrit gif",
    "gif de texte", "texte animé", "typing gif",
  ],
  "invert-image": [
    "inverser les couleurs d'une image", "inverser couleurs", "inverser couleurs image",
    "négatif photo", "negatif photo", "négatif image", "négatif", "couleurs inversées", "invert colors",
  ],
  "pixelate-image": [
    "pixeliser une image", "pixeliser image", "pixeliser photo", "pixeliser", "pixelliser",
    "effet pixel", "pixel art", "mosaïque", "pixelate",
  ],
  "image-brightness": [
    "luminosité d'une image", "luminosite image", "éclaircir une photo", "eclaircir photo",
    "assombrir image", "photo trop sombre", "régler luminosité", "changer contraste",
    "augmenter luminosité",
  ],
  "glitch-effect": ["effet glitch", "glitch", "effet vhs", "effet distorsion", "rgb split", "glitch effect"],
  "round-corners": [
    "arrondir les coins d'une image", "arrondir coins image", "coins arrondis", "bords arrondis",
    "angles arrondis", "round corners",
  ],
  "remove-watermark": [
    "supprimer un filigrane", "supprimer filigrane", "enlever filigrane", "retirer filigrane",
    "effacer filigrane", "enlever un filigrane gratuit", "supprimer logo image",
    "enlever date photo", "supprimer texte image", "watermark remover", "remove watermark",
  ],
  "remove-object": [
    "supprimer un objet d'une photo", "supprimer objet photo", "effacer objet photo",
    "enlever une personne d'une photo", "effacer une personne", "retirer un objet",
    "enlever objet photo", "gomme magique", "magic eraser", "effacer quelque chose d'une photo",
  ],
  "split-image": [
    "découper une image", "decouper image", "diviser une image", "diviser image", "couper image en morceaux",
    "image en parties égales", "image en tuiles", "split image",
  ],
  "image-overlay": [
    "superposer des images", "superposer images", "superposer photos", "mettre une image sur une autre",
    "image par-dessus une autre", "double exposition", "fondre deux images",
  ],

  // Variantes — HD, miroir, arrière-plan
  "image-to-hd": [
    "image en hd", "photo hd", "photo en hd", "convertir image en hd", "mettre une photo en hd",
    "image haute qualité", "image haute définition", "augmenter resolution",
  ],
  "unblur-image": [
    "rendre une photo nette", "rendre photo nette", "améliorer netteté photo", "ameliorer nettete",
    "déflouter photo", "deflouter photo", "défloutage", "photo floue", "netteté image",
    "photo bougée", "unblur",
  ],
  "flip-image": [
    "image miroir", "effet miroir photo", "effet miroir", "retourner une image", "retourner photo",
    "inverser image horizontalement", "photo en miroir", "selfie inversé", "flip", "flip image",
  ],
  "change-background-color": [
    "changer le fond d'une photo", "changer fond photo", "fond blanc photo", "mettre un fond blanc",
    "changer couleur fond", "changer la couleur du fond", "fond bleu photo", "fond rouge photo",
    "remplacer le fond", "changer arrière-plan",
  ],
  "blur-background": [
    "flouter l'arrière-plan", "flouter arriere plan", "flou arrière-plan", "flouter le fond",
    "fond flou", "effet portrait", "mode portrait", "bokeh", "flou d'arrière-plan",
  ],
  "passport-photo-maker": [
    "photo d'identité", "photo identité", "photo identite", "photo d'identité en ligne",
    "photo passeport", "photo de passeport", "photo pour passeport", "photo carte d'identité",
    "photo cni", "photo visa", "photo pour visa", "35x45", "35 x 45 mm", "photo identité gratuite",
    "faire une photo d'identité", "photo d'identité avec téléphone", "photo identité cellulaire",
    "photo id", "passport photo",
  ],
  "3x4-photo": ["photo 3x4", "3x4", "3 x 4 cm", "photo 3x4 brésil"],
  "2x2-photo": ["photo 2x2", "photo visa américain", "photo visa usa", "photo visa états-unis", "2x2 pouces"],
  "instagram-grid-maker": [
    "grille instagram", "grille pour instagram", "découper photo pour instagram",
    "instagram grid", "puzzle instagram", "carrousel instagram", "panorama instagram",
  ],
};

import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/compresser-image. Structure lives in ToolPageShell.
 *
 * Target query "compresser une image" (33.1K FR per month). Secondaries
 * "compresser photo" (14.8K), "compresser JPG", "compresser PNG", "réduire
 * taille image", "réduire poids image" — used in the intro, one heading each
 * and the FAQs. Addressed in "vous"; the FAQs add the questions French users
 * ask (upload limits of job and administrative portals in general terms,
 * servers / RGPD) that English lacks.
 *
 * FORMATS labels are module scope in CompressTool.tsx and are maintained here
 * by hand (§4.2).
 */
const content: ToolPageContent = {
  toolId: "compress-image",
  locale: "fr",
  name: "Compresser une image",
  tagline:
    "Compressez vos images JPG, PNG et WEBP en ligne : par qualité, ou directement à un poids précis comme 50 Ko ou 100 Ko. Traitement par lots et gain affiché pour chaque fichier. Gratuit, rapide et privé dans votre navigateur.",
  category: { id: "optimize", label: "Optimiser" },

  metaTitle: "Compresser une image en ligne – JPG, PNG gratuit | oMyImage",
  metaDescription:
    "Compresser une image gratuitement : réduisez le poids de vos photos JPG, PNG et WEBP jusqu'à quelques Ko, même par lots. Sans inscription, sans filigrane.",

  variantsHeading: "Compresser à un poids de fichier précis",

  intro:
    "Les images trop lourdes ralentissent les sites web, saturent le stockage, alourdissent les e-mails et se font souvent refuser par les formulaires en ligne. L'outil « Compresser une image » d'oMyImage réduit le poids de vos fichiers JPG, PNG et WEBP directement dans votre navigateur, de deux façons. Par qualité : vous convertissez en WEBP pour obtenir le fichier le plus léger, vous réglez la qualité et, si besoin, vous réduisez les photos très grandes. Par poids de fichier : vous saisissez une limite comme 50 Ko et vous obtenez l'image la plus nette qui tient en dessous. Les PNG sont réellement compressés, en réduisant le nombre de couleurs avec un tramage (dithering), et pas simplement réenregistrés. Vous pouvez compresser une photo seule ou tout un lot, et voir exactement combien vous avez gagné. Bref, de quoi réduire la taille d'une image en quelques secondes, sans logiciel à installer.",

  sections: [
    {
      heading: "Pourquoi compresser vos images compte plus que tout le reste d'une page",
      id: "why",
      body: [
        "Les images sont presque toujours l'élément le plus lourd d'une page web, souvent davantage que le HTML, le CSS et le JavaScript réunis. Elles pèsent donc directement sur le Largest Contentful Paint, l'indicateur Core Web Vitals qui mesure combien de temps un visiteur attend avant de voir le contenu principal. Diviser par deux le poids de vos images améliore généralement la vitesse perçue bien plus que n'importe quelle optimisation du code.",
        "La vitesse n'est pas le seul enjeu. Une grande partie des internautes navigue en données mobiles, et une image d'en-tête non compressée consomme leur forfait pour afficher des détails que leur écran ne peut pas restituer. Une photo de 4 Mo affichée dans une colonne de 800 pixels de large transporte environ dix fois plus d'information que l'écran ne peut en exploiter.",
        "Il y a aussi le quotidien : portails d'emploi, démarches administratives en ligne, boutiques et logiciels RH n'acceptent souvent que des fichiers de moins de 100 Ko, 200 Ko ou 1 Mo. La compression est la solution la moins coûteuse, car elle ne change ni votre mise en page, ni votre code, ni votre façon de travailler. L'image paraît identique et ne pèse plus qu'une fraction de son poids d'origine.",
      ],
    },
    {
      heading: "Avec perte et sans perte : deux mécanismes différents",
      id: "how",
      body: [
        "Le JPG et le WebP sont des formats avec perte. Ils analysent l'image, éliminent les informations auxquelles l'œil humain est le moins sensible (surtout les fines variations de couleur) et conservent le reste. C'est pourquoi ils réduisent autant le poids des photos, et pourquoi une qualité trop basse produit ces blocs et ces halos visibles autour des contours très contrastés.",
        "Le PNG ne peut pas fonctionner ainsi : il est sans perte par définition. Pour le compresser, on réduit donc le nombre de couleurs distinctes de l'image. Notre traitement PNG quantifie la palette puis applique un tramage, ce qui reste pratiquement invisible sur les logos, les captures d'écran et les illustrations en aplats, mais se remarque nettement sur une photo de ciel dégradé. Avec une qualité de 95 % ou plus, le PNG reste parfaitement sans perte et seul son encodage est optimisé.",
        "Voilà pourquoi le format compte autant que le curseur. Une capture d'écran compressée en JPG sera moins belle et plus lourde que la même capture en PNG optimisé, et une photo enregistrée en PNG pèsera plusieurs fois ce qu'elle devrait.",
      ],
    },
    {
      heading: "Compresser un JPG, un PNG ou un WEBP : choisir le format de sortie",
      id: "format",
      body: [
        "Le WebP produit le fichier le plus léger à qualité égale, gère la transparence et s'ouvre dans tous les navigateurs actuels. C'est le choix par défaut pour tout ce qui est destiné à une page web.",
        "Le JPG est un peu plus lourd, mais il est accepté partout, y compris par les logiciels qui ignorent tout du WebP. Choisissez-le pour les pièces jointes d'e-mails, les formulaires d'envoi, les portails administratifs, les services d'impression et tout ce qui sort du web.",
        "Le PNG est la bonne réponse pour les contenus aux contours nets (logos, dessins au trait, captures d'écran, schémas) et pour tout ce qui doit garder sa transparence sans perte. Ne l'utilisez pas pour des photos sans raison précise.",
      ],
    },
    {
      heading: "Réduire le poids d'une image à une limite en Ko plutôt que par qualité",
      id: "target-size",
      body: [
        "Quand un formulaire indique « 100 Ko maximum », le curseur de qualité répond à la mauvaise question : il faudrait deviner un réglage, compresser, vérifier le poids et recommencer. Passez plutôt les réglages sur « Par poids de fichier », saisissez la limite, et l'outil fait les essais à votre place : il cherche la qualité la plus élevée dont le résultat tient encore dans la limite et, seulement si même une qualité basse reste trop lourde, il réduit aussi les dimensions en pixels.",
        "Le résultat est toujours sous le chiffre que vous avez saisi, jamais « à peu près ». L'outil compte 1 Ko comme 1 000 octets : un fichier préparé pour une limite de 50 Ko passe donc aussi sur les formulaires qui comptent 1 Ko comme 1 024 octets. Si une image est déjà sous la limite dans le format choisi, vous la récupérez intacte au lieu d'une copie recompressée inutilement.",
        "Les limites les plus courantes ont leur propre page avec des conseils adaptés : signatures à 20 Ko, photos pour concours et examens à 50 Ko, photos et scans de dossiers à 100 Ko et 200 Ko, et photos de téléphone à 1 Mo.",
      ],
    },
    {
      heading: "Quand votre image ne peut plus être compressée",
      id: "already-optimised",
      body: [
        "Il arrive que l'outil vous rende votre fichier d'origine en vous le signalant. C'est voulu : si rien de ce que nous pouvons produire n'est plus léger que votre fichier, vous livrer une version « compressée » plus lourde serait un échec déguisé en résultat.",
        "Cela signifie généralement que l'image est déjà passée par un optimiseur, ou qu'il s'agit d'un petit graphique dont la structure fixe du format représente l'essentiel. Les très petits PNG, en particulier, ont un plancher en dessous duquel l'en-tête et la palette constituent la majeure partie du fichier. Dans ces cas, les gains restants sont ailleurs : redimensionner l'image aux dimensions réellement affichées, ou changer complètement de format.",
      ],
    },
  ],

  howToTitle: "Comment compresser une image",
  steps: [
    { title: "Importez vos images", description: "Sélectionnez une ou plusieurs images JPG, PNG ou WEBP, ou glissez-déposez-les ici." },
    { title: "Choisissez les réglages", description: "Choisissez le format de sortie et la qualité, ou passez sur « Par poids de fichier » et saisissez une limite comme 50 Ko." },
    { title: "Compressez et téléchargez", description: "Cliquez sur « Compresser » : une image seule se télécharge directement, plusieurs images se téléchargent ensemble dans un ZIP." },
  ],

  features: [
    { icon: "burst_mode", title: "Compression par lots", description: "Compressez des dizaines d'images d'un coup et téléchargez-les toutes dans un seul ZIP, avec le pourcentage gagné pour chacune." },
    { icon: "tune", title: "Qualité, format ou poids exact", description: "Convertissez en WEBP pour les fichiers les plus légers, réglez précisément la qualité voulue, ou saisissez une limite de poids et obtenez le fichier le plus net en dessous." },
    { icon: "lock", title: "100 % privé", description: "Pour presque toutes les photos, la compression a lieu dans votre navigateur et ces images ne sont envoyées nulle part." },
  ],

  faqs: [
    { q: "De combien mes images vont-elles être allégées ?", a: "Cela dépend de l'image et des réglages. Convertir des photos en WEBP avec une qualité de 70 à 80 % réduit souvent leur poids de 50 à 80 % sans différence visible notable, et les graphiques PNG perdent généralement 60 à 80 % de leur poids avec la qualité par défaut." },
    { q: "Comment fonctionne la compression d'un PNG ?", a: "Le PNG ne peut pas éliminer de détails comme le JPG ; il s'allège donc autrement, en réduisant le nombre de couleurs distinctes. Avec les 70 % par défaut, nous quantifions l'image à 128 couleurs avec tramage, ce qui reste en général invisible sur les illustrations, les logos et les captures d'écran. Réglez la qualité sur 95 % ou plus pour garder un PNG parfaitement sans perte." },
    { q: "Quel format donne les fichiers les plus légers ?", a: "Le WEBP produit généralement les fichiers les plus légers à qualité égale, suivi du JPG. Le PNG reste le meilleur choix pour les graphiques aux contours nets, les aplats de couleur et la transparence." },
    { q: "La compression réduit-elle la qualité de l'image ?", a: "Le JPG et le WEBP sont des formats avec perte : une qualité très basse fait apparaître des artefacts. Le PNG, lui, perd des couleurs plutôt que des détails. Les 70 % par défaut offrent un bon équilibre ; augmentez la valeur pour les images importantes." },
    { q: "Comment compresser une photo JPG sans qu'elle se dégrade ?", a: "Gardez une qualité entre 70 et 85 % et, si la photo est très grande, activez aussi « Réduire les grandes images » pour la ramener à la largeur dont vous avez réellement besoin. Cela fait gagner plus de poids que baisser la qualité, tout en préservant les ciels et les tons de peau." },
    { q: "Pourquoi une de mes images n'a-t-elle pas été allégée ?", a: "Parce qu'elle était déjà optimisée. Si rien de ce que nous produisons ne fait mieux que votre fichier, nous vous rendons l'original intact en le signalant : un compresseur qui livre un fichier plus lourd a raté sa mission." },
    { q: "Puis-je compresser plusieurs images à la fois ?", a: "Oui. Ajoutez-en autant que vous voulez : plusieurs fichiers se téléchargent ensemble dans un ZIP, chacun avec le pourcentage gagné." },
    { q: "Est-ce gratuit et confidentiel ?", a: "Entièrement. Sans inscription ni filigrane, et presque toutes les images sont compressées localement dans votre navigateur. Seuls les fichiers trop grands pour être traités par un onglet de navigateur sont envoyés à notre serveur, et l'outil vous prévient lorsque c'est le cas." },
    { q: "Mes images sont-elles envoyées sur un serveur ?", a: "Pour presque toutes les photos, non : la compression se fait dans le navigateur et le fichier ne quitte jamais votre appareil. Seules les images très grandes ou de résolution extrêmement élevée passent par notre serveur pour être traitées, puis sont supprimées aussitôt après. Nous ne conservons rien et n'analysons pas vos fichiers, ce qui simplifie aussi le respect du RGPD si vous traitez des photos de personnes." },
    { q: "Quel réglage de qualité choisir ?", a: "Entre 70 et 80 %, c'est le bon point de départ pour les photos d'un site web, et c'est là que se fait l'essentiel du gain. Montez à 90 % ou plus pour les photos produit, les images d'en-tête et tout ce qu'un client va agrandir. En dessous d'environ 60 %, des blocs commencent à apparaître dans les ciels et les dégradés doux." },
    { q: "Compresser une image réduit-il ses dimensions ?", a: "Non. La compression change la façon dont les pixels sont stockés, pas leur nombre : une photo de 4000 × 3000 reste en 4000 × 3000. Si vous voulez aussi moins de pixels, utilisez l'outil « Redimensionner une image », qui reste souvent le gain le plus important pour les images web." },
    { q: "La compression supprime-t-elle les données EXIF ?", a: "Le réencodage efface au passage la plupart des métadonnées, dont les réglages de l'appareil photo et les coordonnées GPS. Si supprimer ces données est votre véritable objectif, l'outil de suppression des métadonnées EXIF est conçu pour cela et indique précisément ce qu'il efface." },
    { q: "Puis-je compresser une image à un poids précis, comme 50 Ko ?", a: "Oui. Passez les réglages sur « Par poids de fichier », saisissez la limite en Ko ou en Mo (ou touchez l'un des poids courants) et lancez la compression. Chaque image ressort sous cette limite avec la qualité la plus élevée possible, et ses dimensions ne sont réduites que si la qualité seule ne suffit pas." },
    { q: "Un portail d'emploi ou une démarche en ligne n'accepte que 200 Ko : que faire ?", a: "Choisissez « Par poids de fichier », saisissez 200 Ko et prenez le JPG comme format, car pratiquement tous les portails l'acceptent. Comme l'outil compte 1 Ko comme 1 000 octets, le fichier passe aussi si le formulaire compte 1 024 octets par Ko. Vérifiez toujours la limite et les formats indiqués sur la page de la démarche elle-même." },
    { q: "Puis-je compresser deux fois la même image ?", a: "C'est possible, mais déconseillé. Chaque passage avec perte élimine définitivement des détails et les dégâts s'accumulent : un JPG compressé deux fois paraît nettement moins bon qu'un JPG compressé une seule fois avec un réglage équivalent. Partez toujours du meilleur original dont vous disposez." },
  ],

  security:
    "Vos images restent privées. Presque toutes les photos sont compressées entièrement dans votre navigateur et ne quittent jamais votre appareil ; seules les images très grandes ou de très haute résolution passent par notre serveur, où elles sont supprimées juste après. Aucun stockage, aucun suivi de vos fichiers.",

  ui: {
    "By quality": "Par qualité",
    "By file size": "Par poids de fichier",
    "Compression mode": "Mode de compression",
    "Target size": "Poids cible",
    "Unit": "Unité",
    "KB": "Ko",
    "MB": "Mo",
    "A KB here is 1,000 bytes, so the file passes forms that count a KB as 1,000 or as 1,024 bytes.": "Ici, 1 Ko vaut 1 000 octets : le fichier passe donc sur les formulaires qui comptent 1 Ko comme 1 000 ou comme 1 024 octets.",
    "JPG (best for forms)": "JPG (idéal pour les formulaires)",
    "Each image gets the highest quality that fits under the limit. If that is still too big, its dimensions are reduced as well.": "Chaque image reçoit la qualité la plus élevée qui tient sous la limite. Si elle reste trop lourde, ses dimensions sont aussi réduites.",
    "Enter a target size greater than zero.": "Saisissez un poids cible supérieur à zéro.",
    "Every image is now under {size}.": "Toutes les images pèsent désormais moins de {size}.",
    "Some images could not get under {size}.": "Certaines images n'ont pas pu passer sous {size}.",
    "Every image will be compressed to under {size}.": "Chaque image sera compressée à moins de {size}.",
    "Set any target size in KB or MB after adding your images.": "Après avoir ajouté vos images, vous pourrez fixer n'importe quel poids cible en Ko ou en Mo.",
    "already under {size} — kept original": "déjà sous {size} : original conservé",
    "could not get under {size}": "impossible de passer sous {size}",
    "resized to {dims}": "redimensionnée en {dims}",
    // CompressTool.tsx
    "Compress": "Compresser",
    "Compressing…": "Compression…",
    "Compress & download": "Compresser et télécharger",
    "Compress {n} images": "Compresser {n} images",
    "Compress more images": "Compresser d'autres images",
    "Compressed": "Compressée",
    "Compression complete!": "Compression terminée !",
    "Compression settings": "Réglages de compression",
    "Compression Settings": "Réglages de compression",
    "File size reduced by {pct}%": "Poids du fichier réduit de {pct} %",
    "Already optimised — kept your original file.": "Déjà optimisée : votre fichier d'origine a été conservé.",
    "Already optimised — kept your original files.": "Déjà optimisées : vos fichiers d'origine ont été conservés.",
    "Already optimised. Try a lower quality, or WEBP, for a smaller file.":
      "Déjà optimisée. Pour un fichier plus léger, essayez une qualité plus basse ou le WEBP.",
    "already optimised — kept original": "déjà optimisée : original conservé",
    "no smaller output": "aucun résultat plus léger",
    "{n} colors": "{n} couleurs",
    "Processed 1 image.": "1 image traitée.",
    "Processed {n} images.": "{n} images traitées.",
    "Compression failed.": "La compression a échoué.",
    "or drop JPG, PNG or WEBP images here": "ou déposez ici des images JPG, PNG ou WEBP",
    "WEBP usually gives the smallest files. Everything runs in your browser.":
      "Le WEBP donne généralement les fichiers les plus légers. Tout se passe dans votre navigateur.",
    "Output format": "Format de sortie",
    // FORMATS (module scope, §4.2)
    "Same as original": "Identique à l'original",
    "WEBP (smallest)": "WEBP (le plus léger)",
    "PNG shrinks by reducing colors. 95%+ keeps it perfectly lossless.":
      "Le PNG s'allège en réduisant les couleurs. À partir de 95 %, il reste parfaitement sans perte.",
    "Lower quality = smaller file. PNGs shrink by reducing colors; 95%+ stays lossless.":
      "Qualité plus basse = fichier plus léger. Les PNG s'allègent en réduisant les couleurs ; à partir de 95 %, ils restent sans perte.",
    "Lower quality = smaller file. 60–80% is a great balance.":
      "Qualité plus basse = fichier plus léger. Entre 60 et 80 %, l'équilibre est excellent.",
    "Shrink large images": "Réduire les grandes images",
    "Also reduce the dimensions, not just the quality. A phone photo is around 4000px wide, while a web page or an email attachment rarely needs more than 2000 — and halving the width quarters the pixel count, which saves far more than quality alone.":
      "Réduisez aussi les dimensions, pas seulement la qualité. Une photo de téléphone fait environ 4000 px de large, alors qu'une page web ou une pièce jointe d'e-mail a rarement besoin de plus de 2000 px ; et diviser la largeur par deux divise le nombre de pixels par quatre, ce qui fait gagner bien plus que la qualité seule.",
    "Max width/height": "Largeur/hauteur max.",
    "JPG background": "Fond du JPG",
    // CompressTool.tsx — increase mode (increase-image-size-in-kb)
    "Enter a minimum size greater than zero.": "Saisissez un poids minimal supérieur à zéro.",
    "Every image is now at least {size}.": "Toutes les images pèsent désormais au moins {size}.",
    "For forms with a range such as 20–50 KB. The result is always a JPG.": "Pour les formulaires qui imposent une fourchette comme 20–50 Ko. Le résultat est toujours un JPG.",
    "Increase": "Augmenter",
    "Increase & download": "Augmenter et télécharger",
    "Increase more images": "Augmenter d'autres images",
    "Increase {n} images": "Augmenter {n} images",
    "Increasing…": "Augmentation…",
    "Maximum size (optional)": "Poids maximal (facultatif)",
    "Minimum size": "Poids minimal",
    "New size": "Nouveau poids",
    "Quality is raised first, then the dimensions. If an image is still short, the file is padded with empty data — the picture itself does not change.": "La qualité est augmentée d'abord, puis les dimensions. S'il manque encore du poids, le fichier est complété par des données vides : l'image elle-même ne change pas.",
    "Set the minimum size in KB after adding your images.": "Fixez le poids minimal en Ko après avoir ajouté vos images.",
    "Size increase complete!": "Augmentation du poids terminée !",
    "Size settings": "Réglages du poids",
    "Some images could not reach {size}.": "Certaines images n'ont pas pu atteindre {size}.",
    "The maximum must be larger than the minimum.": "Le maximum doit être supérieur au minimum.",
    "already at least {size} — kept original": "déjà au moins {size} : original conservé",
    "could not reach {size}": "impossible d'atteindre {size}",
    "enlarged to {dims}": "agrandie en {dims}",
    "padded to reach the minimum": "complétée pour atteindre le minimum",
    // Shared (ToolWorkspace / upload)
    "Clear files": "Retirer les fichiers",
    "Download": "Télécharger",
    "Original": "Original", // i18n-same
    "Please select image files.": "Veuillez sélectionner des fichiers image.",
    "Processing failed.": "Le traitement a échoué.",
    "Quality": "Qualité",
    "Remove": "Retirer",
    "Settings": "Réglages",
  },
};

export default content;

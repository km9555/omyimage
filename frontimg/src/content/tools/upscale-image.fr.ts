import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/ameliorer-qualite-image. Structure lives in
 * ToolPageShell.
 *
 * Target query "améliorer la qualité d'une image" (18.1K FR per month). People
 * search for the RESULT (a better picture) more than for the operation, so the
 * H1 names the result and the copy explains the enlargement. Secondaries
 * "améliorer qualité photo", "augmenter résolution image", "upscale" and
 * "agrandir image" live in the intro, a section heading and the FAQs.
 * Addressed in "vous".
 */
const content: ToolPageContent = {
  toolId: "upscale-image",
  locale: "fr",
  name: "Améliorer la qualité d'une image",
  tagline:
    "Agrandissez et améliorez vos images jusqu'à 4× grâce à une IA qui ajoute du vrai détail au lieu de flouter, et qui rend au passage plus nettes les photos douces, bruitées ou trop compressées. Propulsé par le modèle open source Real-ESRGAN.",
  category: { id: "ai", label: "IA pour images" },

  metaTitle: "Améliorer la qualité d'une image – IA gratuite | oMyImage",
  metaDescription:
    "Améliorer la qualité d'une image avec l'IA : augmentez la résolution 2×, 3× ou 4× sans flou. Améliorez vos photos JPG, PNG et WEBP, gratuitement.",

  variantsHeading: "D'autres façons de rendre une photo plus nette",

  intro:
    "Agrandissez vos images petites ou en basse résolution sans qu'elles deviennent floues. L'outil « Améliorer la qualité d'une image » d'oMyImage utilise le modèle open source Real-ESRGAN pour agrandir vos photos jusqu'à 4× en reconstruisant les contours et les textures : vous pouvez ainsi augmenter la résolution d'une image et améliorer la qualité d'une photo tout en gardant un résultat net. C'est ce qu'on appelle un « upscale » par IA. Comme l'IA demande beaucoup de calcul, elle s'exécute sur notre serveur ; vous téléchargez ensuite l'image en haute résolution, gratuitement et sans filigrane.",

  sections: [
    {
      heading: "Interpolation ou reconstruction : ce qui se passe lors d'un upscale",
      id: "how",
      body: [
        "Le redimensionnement classique a une limite intégrée. Quand vous doublez les dimensions d'une image, trois pixels de sortie sur quatre n'ont aucun pixel source derrière eux : le rééchantillonnage fait donc la moyenne des pixels voisins. Une moyenne produit des transitions douces, autrement dit du flou : les contours s'adoucissent, la texture fine disparaît, et l'agrandissement ressemble exactement à ce qu'il est.",
        "Un modèle de super-résolution aborde le problème autrement. Il a été entraîné sur un nombre énorme de paires d'images (la même scène en basse et en haute résolution) et en a appris quel type de détail se cache généralement derrière un contour flou. Face à une nouvelle image en basse résolution, il prédit la version en haute résolution au lieu de s'en approcher par des moyennes.",
        "La différence se voit surtout sur les contours et les textures. Là où l'interpolation donne un dégradé mou, le modèle donne une limite nette ; là où l'interpolation donne une bouillie uniforme, il donne un grain plausible, des pores, la trame d'un tissu ou un feuillage.",
      ],
    },
    {
      heading: "La limite, en toute honnêteté",
      id: "limits",
      body: [
        "Le détail est inventé. Ce n'est pas une critique de la technique : c'est son principe même, et pour la plupart des usages c'est exactement ce que vous voulez. Mais cela signifie que le résultat est une reconstruction plausible et non une photographie plus exacte, et la distinction compte dans certains contextes.",
        "Ne l'utilisez pas quand les pixels servent de preuve. Expertise judiciaire, imagerie médicale, mesures scientifiques, lecture d'une plaque d'immatriculation ou d'un document sur une caméra de surveillance : dans tous ces cas, le modèle produira sans sourciller des détails convaincants qui n'ont jamais existé, ce qui est pire qu'une image floue parce que cela paraît fiable.",
        "Pour la photographie, l'e-commerce, l'impression et le graphisme, rien de tout cela ne s'applique. Vous voulez que l'image ait l'air juste, et c'est le cas.",
      ],
    },
    {
      heading: "Partez de la meilleure source possible",
      id: "source",
      body: [
        "Le modèle reconstruit à partir de ce qu'on lui donne : une entrée plus propre produit un meilleur résultat. Un petit original ne pose aucun problème (c'est tout l'intérêt), mais un petit original passé par plusieurs compressions JPG en pose un, car les blocs et les halos sont agrandis et accentués en même temps que le vrai détail.",
        "Si vous avez le choix entre un PNG de 600 pixels et un JPG de 600 pixels de la même image, prenez le PNG. Si vous avez un original plus grand que vous avez réduit à un moment donné, repartez de celui-là. Et si l'image est la capture d'une capture d'écran, attendez-vous à ce que les artefacts soient reproduits fidèlement et avec aplomb.",
      ],
    },
    {
      heading: "Quand augmenter la résolution d'une image vaut vraiment le coup",
      id: "uses",
      body: [
        "Le cas habituel : une image correcte à l'écran mais insuffisante pour l'impression. Une photo produit de 800 pixels s'affiche parfaitement sur une page web mais se dégrade sur un flyer, et agrandir l'image par IA fait souvent la différence entre refaire la séance photo ou non.",
        "Autres usages courants : vieilles photos de famille numérisées en basse résolution, images récupérées sur un ancien site web dont il ne reste aucun original, miniatures qui doivent devenir des visuels d'en-tête et logos en basse résolution destinés à une enseigne. Dans chaque cas, l'alternative n'est pas une meilleure image : c'est pas d'image du tout.",
      ],
    },
  ],

  howToTitle: "Comment améliorer la qualité d'une image",
  steps: [
    { title: "Importez votre image", description: "Sélectionnez une image, ou glissez-déposez-la dans l'espace de travail." },
    { title: "Choisissez l'échelle", description: "Choisissez 2×, 3× ou 4× et cliquez sur « Améliorer » : l'IA ajoute du détail pendant l'agrandissement." },
    { title: "Téléchargez", description: "Téléchargez votre image plus grande et plus nette." },
  ],

  features: [
    { icon: "hd", title: "Jusqu'à 4× plus grande", description: "Agrandissez des images petites ou en basse résolution pendant que l'IA reconstruit le détail au lieu de le flouter." },
    { icon: "auto_awesome", title: "Récupération du détail", description: "Real-ESRGAN restaure contours et textures pour un résultat net, même sur des photos très compressées." },
    { icon: "verified_user", title: "Moteur open source", description: "Propulsé par Real-ESRGAN : gratuit, open source et utilisable à des fins commerciales." },
  ],

  faqs: [
    { q: "De combien puis-je agrandir une image ?", a: "Jusqu'à 4×. Une image de 500 × 500 devient une image de 2000 × 2000, avec un détail reconstruit par IA plutôt qu'un flou doux." },
    { q: "Puis-je améliorer la qualité d'une photo sans l'agrandir ?", a: "Oui, c'est la même opération. Choisissez 2× pour un passage léger qui rend les contours plus nets, nettoie le bruit et restaure le détail des photos douces ou compressées. Notez que le résultat fait toujours le double des dimensions d'origine ; réduisez-le ensuite si vous avez besoin de la taille initiale." },
    { q: "Quel moteur est utilisé ?", a: "Real-ESRGAN, un modèle de super-résolution open source utilisable à des fins commerciales." },
    { q: "Pourquoi le traitement prend-il quelques secondes ?", a: "L'agrandissement par IA demande beaucoup de calcul et s'exécute sur notre serveur. Les grandes images et les échelles élevées prennent plus de temps." },
    { q: "L'outil peut-il réparer une photo très floue ?", a: "Il améliore nettement la netteté et le détail, mais dans les cas extrêmes, il ne peut pas inventer une information qui n'existe pas." },
    { q: "Mes images sont-elles conservées ?", a: "Non. Les résultats ne sont stockés que brièvement pour votre lien de téléchargement, puis supprimés automatiquement en moins d'une heure." },
    { q: "Quelle différence avec un simple redimensionnement ?", a: "Redimensionner interpole entre les pixels que vous avez déjà, d'où le flou des images agrandies : il n'y a aucun nouveau détail sur lequel s'appuyer. Ce modèle a été entraîné sur des millions de paires d'images et prédit à quoi ressemblait plausiblement le détail manquant : les contours restent nets et la texture est reconstruite au lieu d'être étalée." },
    { q: "Le détail ajouté est-il réel ?", a: "Non, et c'est important. Le modèle invente un détail plausible ; il ne récupère pas quelque chose qui aurait été capturé. Pour la photo, le graphisme et l'impression, c'est exactement ce que vous voulez. Pour tout usage probatoire, judiciaire, médical ou scientifique, c'est le mauvais outil, car le résultat contient des informations qui n'ont jamais figuré dans l'original." },
    { q: "Sur quelles images fonctionne-t-il le mieux ?", a: "Sur les photos à la texture réelle : visages, paysages, tissus, feuillages. Il donne aussi de bons résultats sur des graphiques propres en basse résolution. Il peine sur les images déjà très compressées, car il agrandit fidèlement les artefacts JPG avec tout le reste." },
    { q: "Y a-t-il une limite de taille ?", a: "Oui. Le nombre de pixels en entrée est plafonné, car l'agrandissement par IA est réellement coûteux en calcul : le travail augmente avec la taille de sortie, pas d'entrée. Les très grandes images sont refusées dès le départ plutôt que d'échouer à mi-parcours. Si vous atteignez la limite, recadrez sur la partie dont vous avez vraiment besoin." },
    { q: "Dans quel format est-ce que je récupère l'image ?", a: "Dans le même que celui envoyé : un JPG revient en JPG, un PNG en PNG, un WEBP en WEBP. Les JPG sont réencodés en haute qualité avec une résolution de couleur complète, pour que le fichier garde un poids raisonnable au lieu de gonfler en un PNG sans perte plusieurs fois plus lourd. La transparence est conservée en PNG et en WEBP." },
    { q: "Puis-je améliorer la même image plusieurs fois ?", a: "C'est possible, mais rarement utile. Le deuxième passage travaille sur le détail inventé par le premier et non sur de l'information réelle : les erreurs s'accumulent et le résultat commence à paraître artificiel. Un seul passage à partir du meilleur original dont vous disposez est presque toujours préférable." },
    { q: "Puis-je augmenter la résolution d'une photo pour l'imprimer ?", a: "Oui, c'est l'un des usages les plus courants. Pour un tirage net, on compte environ 300 DPI : une photo de 10 × 15 cm demande à peu près 1200 × 1800 pixels. Si votre image n'en a que la moitié, l'agrandir 2× l'amène à la résolution nécessaire." },
  ],

  security:
    "L'agrandissement s'exécute sur notre serveur avec le moteur open source Real-ESRGAN. Les résultats ne sont stockés que brièvement derrière un lien de téléchargement privé, puis supprimés automatiquement en moins d'une heure. Nous ne partageons ni ne réutilisons jamais vos images.",

  ui: {
    // UpscaleTool.tsx (the rest of the chrome is ServerImageTool → common.ts)
    "or drop a JPG, PNG or WEBP here": "ou déposez ici un JPG, PNG ou WEBP",
    "Upscale": "Améliorer",
    "Upscaling…": "Amélioration…",
    "Scale factor": "Facteur d'agrandissement",
    // unblur-image and image-to-hd modes (UpscaleTool preset.mode)
    "Unblur": "Rendre net",
    "Unblurring…": "Netteté en cours…",
    "Keep the original size": "Conserver la taille d'origine",
    "The AI sharpens at twice the resolution, then the photo is returned at its own size — same picture, crisper.": "L'IA accentue la netteté au double de la résolution, puis la photo vous est rendue à sa taille d'origine : la même image, en plus net.",
    "You get the sharpened photo at twice its size — useful for small or pixelated pictures.": "Vous obtenez la photo plus nette au double de sa taille : utile pour les images petites ou pixelisées.",
    "Convert to HD": "Convertir en HD",
    "Target size": "Taille cible",
    "The longer side comes out at this size. The AI scale (2×, 3× or 4×) is chosen for you.": "Le plus grand côté sort à cette taille. L'échelle de l'IA (2×, 3× ou 4×) est choisie pour vous.",
    "A very small picture may not reach 4K even at 4× — you then get the 4× result.": "Une très petite image peut ne pas atteindre la 4K même à 4× : vous obtenez alors le résultat à 4×.",
    // Backend sentences this tool can surface (routes/image/upscale)
    "AI upscaling isn't enabled on this server (Real-ESRGAN not installed).":
      "L'agrandissement par IA n'est pas disponible sur ce serveur pour le moment.",
  },
};

export default content;

import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/recadrer-photo-en-cercle.
 *
 * Primary query « Recadrer une photo en cercle »; secondary « photo ronde »,
 * « image ronde ». Profile pictures are « photo de profil », which the copy
 * uses where the English says profile picture; « avatar » is understood too.
 */
const content: ToolPageContent = {
  toolId: "circle-crop",
  locale: "fr",
  name: "Recadrer une photo en cercle",
  tagline:
    "Recadrez vos images en un cercle parfait en ligne, idéal pour les avatars et les photos de profil, avec arrière-plan transparent, anneau facultatif et traitement par lot. Gratuit, rapide et 100 % privé dans votre navigateur.",
  category: { id: "edit", label: "Modifier et créer" },

  metaTitle: "Recadrer une photo en cercle – photo ronde PNG | oMyImage",
  metaDescription:
    "Recadrez une photo en cercle avec un arrière-plan transparent : déplacez le cercle, ajoutez un anneau et enregistrez une image ronde en PNG. Gratuit.",

  intro:
    "Créez en quelques secondes des avatars ronds et des photos de profil impeccables. L'outil Recadrer une photo en cercle d'oMyImage découpe votre image en un cercle net directement dans votre navigateur : faites glisser le cercle pour cadrer exactement ce que vous voulez, redimensionnez-le, zoomez pour le placer avec précision et choisissez la taille d'export. L'arrière-plan est transparent par défaut, avec en option un fond de couleur et un anneau. Obtenez une photo ronde à partir d'une image ou de tout un lot : rien n'est envoyé sur un serveur, vos images restent donc privées.",

  sections: [
    {
      heading: "Tout repose sur la transparence",
      id: "transparency",
      body: [
        "Un recadrage en cercle n'est vraiment circulaire que si les coins sont transparents. Sinon, vous avez une image carrée sur laquelle on a dessiné un cercle, et dès qu'elle se retrouve sur un fond d'une autre couleur, le carré apparaît.",
        "Le format d'export est donc la décision la plus importante, et celle sur laquelle on se trompe le plus souvent. Le PNG et le WEBP possèdent tous deux une couche alpha et gardent les coins vides. Le JPG n'a pas de couche alpha du tout : la zone hors du cercle doit être remplie avec quelque chose, et c'est pourquoi une image ronde en JPG arrive avec un carré blanc autour.",
        "Si vous savez que l'image sera toujours posée sur une couleur unie connue, un fond de cette couleur fonctionne très bien. Si elle peut aller n'importe où, choisissez le PNG.",
      ],
    },
    {
      heading: "Où une image ronde est vraiment nécessaire",
      id: "uses",
      body: [
        "La plupart des réseaux sociaux appliquent eux-mêmes un masque circulaire aux avatars : importer un carré suffit. Les cas qui exigent un vrai recadrage en cercle sont ceux où rien ne fera le masquage à votre place.",
        "Cela concerne les pages d'équipe et les signatures d'auteur sur un site web, les portraits dans des diapositives de présentation, les photos de contributeurs dans un PDF ou un rapport, les logos et les badges, les signatures d'e-mail et les supports imprimés. Dans tous ces cas, vous placez directement un fichier image, et si ses coins ne sont pas transparents, ils se verront.",
        "C'est aussi pratique pour des photos de produits et des icônes, pour lesquelles un recadrage rond paraît tout simplement plus fini qu'un rectangle posé dans une mise en page.",
      ],
    },
    {
      heading: "Composer à l'intérieur d'un cercle",
      id: "composition",
      body: [
        "Un cercle recadre plus fort qu'il n'y paraît : les coins de l'original disparaissent entièrement, et tout ce qui se trouve près d'un bord avec eux. Laissez plus d'espace autour du sujet que pour un recadrage rectangulaire.",
        "Pour un portrait, le placement fiable consiste à mettre les yeux légèrement au-dessus du centre, avec un peu d'air au-dessus de la tête. Centrer mathématiquement toute la tête laisse souvent un vide gênant en haut et coupe le menton. Un visage qui remplit tout le cercle paraît étouffé ; avec une petite marge, il se lit comme un portrait réfléchi.",
        "Partez si possible d'une image à peu près carrée. Recadrer en cercle une photo de paysage très large sacrifie la majeure partie du cadre ; un original plus serré vous laisse bien plus de résolution exploitable dans le résultat.",
      ],
    },
    {
      heading: "Taille et anneau",
      id: "sizing",
      body: [
        "Un carré de 400 à 800 px couvre tous les usages réalistes. Les plateformes réduisent l'image à leurs propres dimensions, donc au-delà, ce sont des octets gaspillés ; nettement en dessous, l'image paraît floue sur un écran haute densité.",
        "Un anneau fin autour du bord règle un problème précis : un portrait clair sur une page claire n'a pas de limite visible, et la tête semble flotter. Un anneau de 1 ou 2 px dans un ton moyen définit la forme sans attirer l'attention. Un anneau plus épais commence à ressembler à un cadre, ce qui relève du choix graphique plutôt que de la correction.",
      ],
    },
  ],

  howToTitle: "Comment recadrer une image en cercle",
  steps: [
    { title: "Importer", description: "Sélectionnez une ou plusieurs images, ou glissez-déposez-les dans l'espace de travail." },
    { title: "Placer le cercle", description: "Faites glisser le cercle là où vous le voulez, tirez sa poignée pour le redimensionner, zoomez pour les détails, puis choisissez la taille de sortie, l'arrière-plan et l'anneau éventuel." },
    { title: "Recadrer et télécharger", description: "Cliquez sur « Recadrer en cercle et télécharger » : une image se télécharge directement, plusieurs images arrivent ensemble dans un ZIP." },
  ],

  features: [
    { icon: "panorama_fish_eye", title: "Recadrez exactement où vous voulez", description: "Faites glisser le cercle sur la partie de la photo qui vous intéresse, redimensionnez-le avec sa poignée et zoomez pour le placer avec précision." },
    { icon: "blur_circular", title: "Transparent ou encadré", description: "Exportez un PNG ou un WEBP transparent, ou ajoutez un fond de couleur et un anneau autour du cercle." },
    { icon: "lock", title: "Par lot et privé", description: "Recadrez tout un lot en cercle d'un coup, entièrement dans votre navigateur : les images ne sont jamais envoyées sur un serveur." },
  ],

  faqs: [
    { q: "L'arrière-plan sera-t-il transparent ?", a: "Oui, par défaut : exportez en PNG ou en WEBP pour garder transparents les coins situés hors du cercle. Choisissez le JPG pour aplatir l'image sur une couleur." },
    { q: "Et si mon image n'est pas carrée ?", a: "Ce n'est pas nécessaire. Le cercle part du centre, presque aussi large que le plus petit côté, et vous pouvez le déplacer n'importe où sur l'image et le redimensionner : un visage dans le coin d'une photo large se recadre aussi facilement qu'un visage centré. « Recentrer et réinitialiser le zoom » le remet en place." },
    { q: "Puis-je choisir où se place le cercle ?", a: "Oui. Faites glisser le cercle pour le déplacer, tirez la poignée sur son bord pour le redimensionner et faites défiler pour zoomer lorsque vous avez besoin de précision. Les touches fléchées le décalent d'un pixel à la fois (de dix en maintenant Maj), et les touches + et − le redimensionnent." },
    { q: "Quelle sera la taille de l'image exportée ?", a: "Par défaut, l'option « Original » exporte le cercle à sa propre résolution dans l'image source, si bien que rien n'est jamais agrandi. Vous pouvez aussi imposer un carré de 256, 512 ou 1024 px, pratique pour les avatars qui doivent remplir un emplacement fixe." },
    { q: "Puis-je ajouter un anneau autour du cercle ?", a: "Oui. Réglez l'épaisseur et la couleur de l'anneau pour ajouter une bordure nette autour du recadrage circulaire." },
    { q: "L'outil est-il gratuit et privé ?", a: "Oui. Sans inscription et sans filigrane, et chaque image est traitée localement dans votre navigateur." },
    { q: "Pourquoi mon image ronde a-t-elle un carré blanc derrière elle ?", a: "Parce que vous l'avez exportée en JPG. Le JPG ne gère pas la transparence : tout ce qui se trouve hors du cercle doit être rempli d'une couleur unie. Exportez plutôt en PNG ou en WEBP, et les coins restent réellement transparents." },
    { q: "Quelle taille pour une photo de profil ?", a: "Entre 400×400 et 800×800 px environ, ce qui couvre pratiquement toutes les plateformes. Elles réduisent toutes l'image à leur propre taille d'affichage : fournir plus d'environ 800 px n'apporte rien, et moins d'environ 200 px paraît flou sur un écran haute densité." },
    { q: "Faut-il vraiment recadrer en cercle pour une photo de profil ?", a: "Généralement non : la plupart des plateformes appliquent leur propre masque circulaire au carré que vous importez. Le faire vous-même compte quand l'image ronde doit aller là où personne ne la masquera pour vous : un site web, une diapositive, un PDF, une signature d'e-mail ou un document imprimé." },
    { q: "Comment centrer le recadrage sur un visage ?", a: "Placez le cercle de sorte que les yeux se trouvent légèrement au-dessus du milieu plutôt qu'en plein centre. Centrer sur toute la tête laisse souvent trop d'espace au-dessus et coupe le menton. Laissez un peu d'air autour de la tête au lieu de remplir le cercle d'un bord à l'autre." },
    { q: "Quand vaut-il la peine d'ajouter un anneau ?", a: "Quand l'image sera posée sur un fond de ton similaire : sans anneau, le bord d'un portrait pâle peut disparaître sur une page pâle, et la tête semble flotter. Gardez-le fin ; un anneau épais fait concurrence au sujet." },
    { q: "L'image perd-elle en qualité ?", a: "Non. Le recadrage conserve les pixels restants exactement tels quels. Le seul coût en qualité vient de l'export, et choisir le PNG l'évite complètement." },
    { q: "Mes photos sont-elles envoyées sur un serveur ?", a: "Non. Le recadrage en cercle se fait entièrement dans votre navigateur : vos photos, souvent des portraits de vous ou de vos collègues, ne quittent jamais votre appareil et ne sont stockées nulle part." },
  ],

  security:
    "Vos images restent privées. Le recadrage en cercle se fait entièrement dans votre navigateur avec un canvas HTML : rien n'est envoyé sur un serveur. Aucun stockage, aucun suivi de vos fichiers.",

  ui: {
    // CircleCropTool.tsx
    "Please select image files.": "Sélectionnez des fichiers image.",
    "Couldn't read {name}.": "Impossible de lire {name}.",
    "or drop JPG, PNG or WEBP images here": "ou déposez ici des images JPG, PNG ou WEBP",
    "Files": "Fichiers",
    "1 image": "1 image", // i18n-same
    "{n} images": "{n} images", // i18n-same
    "Clear images": "Effacer les images",
    "Remove": "Retirer",
    "Preview {name}": "Aperçu de {name}",
    "Drag the circle to move it, or a corner handle to resize":
      "Faites glisser le cercle pour le déplacer, ou une poignée d'angle pour le redimensionner",
    "Zoom": "Zoom", // i18n-same
    "Recentre & reset zoom": "Recentrer et réinitialiser le zoom",
    "exports at": "exporté en",
    "Circle Crop Settings": "Réglages du recadrage en cercle",
    "Circle crop settings": "Réglages du recadrage en cercle",
    "Output size": "Taille de sortie",
    "Original exports the circle at its own resolution in the source image — it never upscales. The fixed sizes suit avatars with a set slot to fill.":
      "« Original » exporte le cercle à sa propre résolution dans l'image source : rien n'est jamais agrandi. Les tailles fixes conviennent aux avatars qui doivent remplir un emplacement déterminé.",
    "Output format": "Format de sortie",
    "Quality": "Qualité",
    "Background": "Arrière-plan",
    "Ring thickness": "Épaisseur de l'anneau",
    "Ring color": "Couleur de l'anneau",
    "— applied to all {n} images": "— appliqué aux {n} images",
    "Crop": "Recadrer",
    "Cropping…": "Recadrage…",
    "Circle crop {n}": "Recadrer {n} images en cercle",
    "Circle crop & download": "Recadrer en cercle et télécharger",
    "Circle-cropped 1 image.": "1 image recadrée en cercle.",
    "Circle-cropped {n} images.": "{n} images recadrées en cercle.",
    "Circle crop failed.": "Échec du recadrage en cercle.",
    "done": "terminé",
    "Download": "Télécharger",
    "Download all (ZIP)": "Tout télécharger (ZIP)",
  },
};

export default content;

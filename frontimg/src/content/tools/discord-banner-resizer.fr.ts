import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/banniere-discord (variant of resize-image).
 * Target query: « bannière Discord »; secondary « taille bannière Discord », « icône de serveur ».
 */
const content: ToolPageContent = {
  toolId: "discord-banner-resizer",
  locale: "fr",
  name: "Bannière Discord : profil et serveur",
  tagline:
    "Mettez n'importe quelle image à une taille Discord : une bannière de profil de 600 × 240, une bannière de serveur de 960 × 540 ou une icône de serveur de 512 × 512 pixels, recadrée ou complétée par des marges. Gratuit, dans votre navigateur.",
  category: { id: "optimize", label: "Optimiser" },

  metaTitle: "Bannière Discord : profil et serveur, gratuit | oMyImage",
  metaDescription:
    "Taille de bannière Discord : profil 600 × 240, serveur 960 × 540, icône de serveur 512 × 512. Recadrez votre bannière Discord ou ajoutez des marges, gratuit.",

  intro:
    "Discord utilise une forme différente pour chaque emplacement d'image : une bande large au format 5:2 pour la bannière de votre profil, une bannière 16:9 en haut de la liste des salons d'un serveur, et des carrés affichés en cercle pour les icônes et les avatars. Cet outil s'ouvre sur la taille de bannière de profil et regroupe les autres tailles Discord dans le même menu. Ajoutez votre image, choisissez l'emplacement, recadrez-la ou ajoutez-lui des marges, et importez une bannière Discord que Discord n'a plus besoin de recadrer à votre place. Sans inscription ni filigrane, directement dans votre navigateur.",

  sections: [
    {
      heading: "Toutes les tailles d'image Discord",
      id: "sizes",
      body: [
        "Bannière de profil : 600 × 240 pixels, au format 5:2, affichée en haut de votre carte de profil. Discord l'indique comme taille minimale, et les bannières de profil sont une fonction Nitro. Bannière de serveur : 960 × 540 pixels, en 16:9, affichée au-dessus de la liste des salons ; les serveurs la débloquent au niveau de boost 2. Icône de serveur : un carré affiché en cercle, 512 × 512 est une bonne taille. Avatar : un carré affiché en cercle, d'au moins 128 × 128.",
        "Tous acceptent le PNG, le JPG et le GIF de moins de 10 Mo. Choisissez l'emplacement sous « Type de préréglage » : la largeur et la hauteur s'ajustent en conséquence.",
      ],
    },
    {
      heading: "Des bannières plus nettes en taille double",
      id: "double",
      body: [
        "Les tailles de Discord sont des minimums, et les écrans haute résolution affichent une bannière de 600 × 240 un peu floue. Pour un résultat plus net, choisissez « Taille personnalisée » et saisissez le double des valeurs : 1200 × 480 pour une bannière de profil, 1920 × 1080 pour une bannière de serveur. Discord les réduit pour les afficher, en gardant la même forme.",
        "Ne le faites que si l'image d'origine est au moins aussi grande. Agrandir une petite image à 1200 pixels de large n'ajoute aucun détail : cela donne seulement un fichier flou plus lourd.",
      ],
    },
    {
      heading: "Ce que votre avatar recouvre",
      id: "overlap",
      body: [
        "Sur une carte de profil, votre avatar rond se superpose à la partie inférieure gauche de la bannière, et la bannière s'affiche en assez petit. Un texte ou un visage dans ce coin est masqué, et les détails fins se perdent. Gardez le sujet au centre ou dans la moitié droite, et misez sur des formes simples et marquées.",
        "Les icônes et les avatars sont découpés en cercle : leurs coins ne s'affichent jamais. Gardez le logo ou le visage bien à l'intérieur du carré, ou choisissez « Ajouter des marges » pour que l'image entière se place au milieu, entourée d'une couleur de fond.",
      ],
    },
    {
      heading: "Bannières animées",
      id: "animated",
      body: [
        "Discord affiche les bannières et les avatars animés en GIF pour les membres Nitro et sur les serveurs boostés. Cet outil traite des images fixes : un GIF est redimensionné à partir de sa première image, et le résultat est un PNG, un JPG ou un WEBP fixe. Pour conserver une animation, redimensionnez-la plutôt avec un outil dédié aux GIF.",
      ],
    },
    {
      heading: "Importer la bannière sur Discord",
      id: "upload",
      body: [
        "Pour une bannière de profil, ouvrez les Paramètres utilisateur, puis la section Profils, et choisissez de changer la bannière. Pour une bannière ou une icône de serveur, ouvrez les Paramètres du serveur, puis la Vue d'ensemble, et importez-la à cet endroit. Comme l'image a déjà la bonne forme, l'étape de recadrage de Discord garde l'image entière.",
      ],
    },
  ],

  howToTitle: "Comment redimensionner une image pour une bannière Discord",
  steps: [
    { title: "Ajoutez votre image", description: "Sélectionnez un JPG, PNG, WEBP, GIF ou BMP." },
    { title: "Choisissez l'emplacement Discord", description: "La bannière de profil est présélectionnée ; passez à Bannière du serveur, Icône du serveur ou Profil, puis recadrez ou ajoutez des marges." },
    { title: "Téléchargez", description: "Cliquez sur « Redimensionner et télécharger » pour obtenir une image qui s'adapte exactement à l'emplacement." },
  ],

  features: [
    { icon: "aspect_ratio", title: "Toutes les tailles Discord", description: "Bannière de profil, bannière de serveur, icône de serveur et avatar dans un seul menu." },
    { icon: "crop", title: "Recadrage ou marges", description: "Remplissez le cadre, ou gardez l'image entière sur une couleur de fond." },
    { icon: "lock", title: "Dans votre navigateur", description: "Votre image est redimensionnée sur votre appareil et n'est jamais envoyée en ligne." },
  ],

  faqs: [
    { q: "Quelle est la taille d'une bannière de profil Discord ?", a: "600 × 240 pixels, au format 5:2 : c'est le minimum de Discord. Pour une bannière plus nette, utilisez 1200 × 480. Les bannières de profil nécessitent Nitro." },
    { q: "Quelle est la taille d'une bannière de serveur Discord ?", a: "960 × 540 pixels, en 16:9. Une image de 1920 × 1080 est acceptée et réduite. Les bannières de serveur nécessitent le niveau de boost 2." },
    { q: "Quelle taille pour une icône de serveur Discord ?", a: "Un carré, affiché en cercle ; 512 × 512 pixels convient bien. Éloignez le logo des coins." },
    { q: "Quel est le poids maximal d'une bannière Discord ?", a: "Moins de 10 Mo, en PNG, JPG ou GIF." },
    { q: "Puis-je créer une bannière animée ici ?", a: "Non. Les GIF sont redimensionnés à partir de leur première image et enregistrés en image fixe. Utilisez un outil GIF pour redimensionner une animation." },
    { q: "Pourquoi une partie de ma bannière est-elle cachée ?", a: "Votre avatar couvre la zone inférieure gauche de la bannière de profil. Gardez le texte et les visages au centre ou dans la moitié droite." },
    { q: "Pourquoi mon icône de serveur est-elle coupée aux coins ?", a: "Discord affiche les icônes en cercle. Gardez le logo au milieu du carré, ou choisissez « Ajouter des marges » pour qu'il repose sur une couleur de fond avec de l'espace autour." },
    { q: "Puis-je redimensionner plusieurs images à la fois ?", a: "Oui. Ajoutez-les toutes ; chacune passe à la taille Discord sélectionnée et elles se téléchargent ensemble dans un ZIP." },
    { q: "Mon image est-elle envoyée quelque part ?", a: "Non. Elle est redimensionnée dans votre navigateur ; c'est vous seul qui l'importez ensuite sur Discord." },
    { q: "Ma bannière Discord est floue : que faire ?", a: "Partez d'une image au moins deux fois plus grande que la taille minimale et exportez-la en 1200 × 480 pour un profil ou 1920 × 1080 pour un serveur. Évitez d'agrandir une petite image : cela n'ajoute aucun détail." },
  ],

  security:
    "Votre image est redimensionnée entièrement dans votre navigateur. Les images très lourdes peuvent être traitées sur notre serveur, puis supprimées aussitôt ; rien n'est conservé.",
};

export default content;

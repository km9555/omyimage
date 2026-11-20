import type { ToolPageContent } from "@/content/tools/types";
import invert from "@/content/tools/invert-image.fr";

/**
 * French copy for /fr/pixeliser-image. Target query: « Pixeliser une image »
 * (France, Nov 2026); secondary « pixeliser photo » in the metaTitle, a
 * heading and an FAQ; « pixel art » stays in English, as French speakers
 * search it.
 */
const content: ToolPageContent = {
  toolId: "pixelate-image",
  locale: "fr",
  name: "Pixeliser une image",
  tagline:
    "Transformez n'importe quelle photo en gros blocs de pixels, de la mosaïque discrète au pixel art rétro le plus marqué. Choisissez la taille des blocs, suivez l'aperçu en direct et pixelisez plusieurs images à la fois. Gratuit, dans votre navigateur.",
  category: { id: "edit", label: "Modifier et créer" },

  metaTitle: "Pixeliser une image – pixeliser photo gratuit | oMyImage",
  metaDescription:
    "Pixeliser une image en ligne et gratuitement : choisissez la taille des blocs pour une mosaïque ou un pixel art rétro. Plusieurs photos à la fois, sans envoi.",

  intro:
    "La pixelisation remplace les détails d'une image par des blocs de couleur carrés, chacun prenant la couleur de la zone qu'il recouvre. C'est l'esthétique des anciens jeux vidéo, des carreaux de mosaïque et des images volontairement rendues illisibles. « Pixeliser une image » d'oMyImage vous laisse choisir précisément la taille de ces blocs : faites glisser le curseur et l'aperçu se met à jour aussitôt, en indiquant à peu près combien de blocs tiennent sur l'image. Ajoutez une image ou tout un lot, puis téléchargez le résultat pixelisé dans le même format ou dans un autre.",

  sections: [
    {
      heading: "Choisir la taille des blocs",
      id: "size",
      body: [
        "La taille des blocs se mesure en pixels de l'image d'origine, de 2 à 120. Des petits blocs de 4 à 8 pixels donnent une mosaïque légère qui laisse encore deviner le sujet ; de 16 à 32 pixels, une photo devient une vraie scène de pixel art ; au-delà, l'image se réduit à une poignée de carrés colorés.",
        "Comme le réglage est en pixels, une même valeur paraît plus fine sur une grande photo que sur une petite. La note sous le curseur indique combien de blocs tiennent sur le plus grand côté, un repère plus fiable que la valeur elle-même.",
      ],
    },
    {
      heading: "Pixeliser une photo : pixel art et style rétro",
      id: "art",
      body: [
        "Pour un rendu de jeu 8 bits ou 16 bits, visez 40 à 80 blocs sur le plus grand côté. Les sujets simples aux formes marquées, comme un logo, un animal devant un mur uni ou une ligne d'horizon urbaine, se pixelisent le mieux. Si le résultat paraît terne, augmentez d'abord le contraste avec « Luminosité d'une image » : le pixel art se lit mieux avec des couleurs franches et saturées.",
        "Enregistrez le pixel art en PNG. La compression JPG bave sur les bords nets des blocs et ajoute des taches à l'intérieur des carrés unis, ce qui détruit l'effet.",
      ],
    },
    {
      heading: "Pixeliser pour masquer",
      id: "privacy-note",
      body: [
        "La pixelisation est un moyen courant de masquer des visages, des plaques d'immatriculation et du texte, mais les petits blocs ne sont pas sûrs : un visage ou un mot pixelisé peut parfois être reconnu, voire reconstitué. Si vous pixelisez pour protéger quelqu'un, utilisez de gros blocs afin qu'aucune structure ne subsiste. Pour ne masquer qu'une partie de l'image, comme des visages, une plaque ou un nom, utilisez « Flouter un visage », qui détecte les visages et vous permet de pixeliser ou de flouter uniquement les zones choisies.",
      ],
    },
    {
      heading: "Autres usages",
      id: "uses",
      body: [
        "Les photos pixelisées font de bons arrière-plans pour du texte, car les formes restent mais les détails ne concurrencent plus les mots. Elles servent aussi d'aperçus sans divulgâcher, d'images de quiz où les joueurs doivent deviner le sujet, et de point de départ pour des grilles de point de croix, de perles à repasser ou de mosaïque, où chaque bloc devient un point ou un carreau.",
      ],
    },
    {
      heading: "Plusieurs images, tous les formats",
      id: "batch",
      body: [
        "Ajoutez autant d'images que nécessaire : la même taille de blocs est appliquée à toutes. Le JPG, le PNG et le WebP sont acceptés, et le résultat garde le format d'origine sauf si vous en choisissez un autre. Les zones transparentes restent transparentes en PNG et en WebP. Une seule image se télécharge directement ; plusieurs arrivent dans un fichier ZIP.",
      ],
    },
    {
      heading: "Pixelisation et poids du fichier",
      id: "size-note",
      body: [
        "Une image pixelisée contient beaucoup moins de détails, elle se compresse donc très bien : un PNG fortement pixelisé peut ne peser qu'une fraction de l'original, ce qui le rend pratique pour des arrière-plans légers et des images d'attente. Pour l'alléger encore sans perdre la netteté des blocs, gardez le PNG et passez-le dans « Compresser une image ».",
      ],
    },
    {
      heading: "Confidentialité",
      id: "privacy",
      body: [
        "Chaque image est pixelisée entièrement dans votre navigateur. Rien n'est envoyé sur un serveur, et rien n'est conservé une fois la page fermée.",
      ],
    },
  ],

  howToTitle: "Comment pixeliser une image",
  steps: [
    { title: "Ajoutez des images", description: "Sélectionnez une ou plusieurs images JPG, PNG ou WebP." },
    { title: "Réglez la taille des blocs", description: "Faites glisser le curseur jusqu'à obtenir le rendu voulu dans l'aperçu." },
    { title: "Pixelisez et téléchargez", description: "Cliquez sur « Pixeliser l'image » pour la télécharger, ou un ZIP s'il y en a plusieurs." },
  ],

  features: [
    { icon: "apps", title: "Toutes les tailles de blocs", description: "De la mosaïque fine à quelques carrés, de 2 à 120 pixels." },
    { icon: "visibility", title: "Aperçu en direct", description: "Voyez l'effet pendant que vous faites glisser, et maintenez pour comparer." },
    { icon: "lock", title: "Aucun envoi", description: "Pixelisation entièrement dans votre navigateur." },
  ],

  faqs: [
    { q: "Comment pixeliser une image ?", a: "Ajoutez l'image, réglez la taille des blocs avec le curseur et cliquez sur « Pixeliser l'image ». L'image pixelisée se télécharge aussitôt." },
    { q: "Quelle taille de blocs choisir ?", a: "4 à 8 px pour une mosaïque discrète, 16 à 32 px pour du pixel art, davantage pour rendre l'image abstraite." },
    { q: "La pixelisation est-elle sûre pour masquer un visage ou du texte ?", a: "Seulement avec de gros blocs. De petits blocs peuvent parfois être déchiffrés ; « Flouter un visage » offre des options plus fortes pour certaines parties d'une image." },
    { q: "Puis-je pixeliser une partie de l'image seulement ?", a: "Pas ici : cet outil pixelise l'image entière. « Flouter un visage » peut pixeliser des zones sélectionnées." },
    { q: "Quel format choisir pour du pixel art ?", a: "Le PNG. Il garde les bords des blocs nets ; le JPG les rend flous." },
    { q: "Puis-je pixeliser plusieurs images à la fois ?", a: "Oui. Elles sont toutes pixelisées avec la même taille de blocs et se téléchargent dans un ZIP." },
    { q: "La transparence est-elle conservée ?", a: "Oui, si vous enregistrez en PNG ou en WebP." },
    { q: "Peut-on annuler une pixelisation ?", a: "Non : les détails sont perdus. Gardez votre fichier d'origine." },
    { q: "Mon image est-elle envoyée sur un serveur ?", a: "Non. Tout se passe dans votre navigateur." },
    { q: "Cela fonctionne-t-il sur un téléphone ?", a: "Oui, dans n'importe quel navigateur mobile." },
    { q: "Puis-je m'en servir pour des grilles de point de croix ?", a: "Oui. Pixelisez la photo : chaque bloc correspond alors à un point." },
    { q: "Est-ce gratuit ?", a: "Oui. Sans compte, sans filigrane et sans limite." },
    { q: "Comment pixeliser une photo façon rétro ?", a: "Choisissez une taille de blocs qui donne environ 40 à 80 blocs sur le plus grand côté, augmentez d'abord le contraste si besoin et enregistrez en PNG." },
  ],

  security:
    "Vos images sont pixelisées entièrement dans votre navigateur. Rien n'est envoyé, stocké ni suivi.",

  // ImageFilterTool.tsx is shared with invert-image; reuse its translations.
  ui: invert.ui,
};

export default content;

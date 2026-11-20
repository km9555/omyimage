import type { ToolPageContent } from "@/content/tools/types";
import cropper from "@/content/tools/gif-cropper.fr";

/**
 * French copy for /fr/couper-gif. Target query: « Couper un GIF » (France,
 * Nov 2026); « raccourcir un GIF » and « découper un GIF » appear in the body.
 * « Couper » = trim in time; « recadrer » is the cropper's word, so the page
 * keeps the two apart (see the extra FAQ).
 */
const content: ToolPageContent = {
  toolId: "gif-cutter",
  locale: "fr",
  name: "Couper un GIF",
  tagline:
    "Raccourcissez un GIF animé pour ne garder que le passage voulu : choisissez la première et la dernière image à conserver, ou coupez un extrait au milieu. Gratuit, dans votre navigateur.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "Couper un GIF – raccourcir un GIF gratuitement | oMyImage",
  metaDescription:
    "Couper un GIF en ligne et gratuitement : choisissez l'image de début et de fin, raccourcissez le début et la fin ou retirez un passage au milieu. Sans envoi.",

  intro:
    "Les GIF tirés de vidéos et d'enregistrements d'écran commencent et finissent rarement au bon endroit. Il y a une seconde de vide avant l'action, un fondu à la fin ou un long passage central que vous préféreriez sauter. Avec « Couper un GIF » d'oMyImage, vous raccourcissez votre GIF image par image (frame par frame) : déplacez les curseurs de début et de fin, vérifiez dans les miniatures la première et la dernière image de votre sélection, puis choisissez de garder ce passage ou de le supprimer. Le résultat s'affiche à côté de l'original, avec sa nouvelle durée et son nouveau poids, avant que vous le téléchargiez.",

  sections: [
    {
      heading: "Garder un passage ou en supprimer un",
      id: "modes",
      body: [
        "« La conserver » enregistre uniquement les images situées entre le curseur de début et le curseur de fin. C'est la coupe classique : elle sert à retirer le temps mort aux deux extrémités ou à extraire un seul moment d'un long GIF.",
        "« La supprimer » fait l'inverse : les images situées entre les curseurs sont effacées et le reste est raccordé sans à-coup. Utilisez cette option pour couper une pause, une erreur ou une scène inutile au milieu du GIF, tout en gardant le début et la fin.",
      ],
    },
    {
      heading: "Trouver les bonnes images",
      id: "frames",
      body: [
        "Chaque curseur affiche le numéro de son image et l'instant de l'animation, en secondes, où commence cette image. Les deux miniatures montrent la première et la dernière image de la sélection : vous pouvez ainsi vous arrêter exactement là où une action commence ou là où un texte se termine, sans deviner sur une ligne de temps.",
        "L'image est le plus petit pas d'un GIF. Un GIF tiré d'une vidéo à 10 images par seconde contient une image tous les dixièmes de seconde ; un GIF au rythme irrégulier peut afficher certaines images plus longtemps, ce que révèlent les durées indiquées à côté des curseurs.",
      ],
    },
    {
      heading: "Ce qui ne change pas",
      id: "kept",
      body: [
        "Les images que vous gardez ne sont pas modifiées et chacune conserve sa propre durée : l'animation restante se lit donc exactement comme avant. Le GIF boucle toujours. Quand ses couleurs tiennent dans une seule palette, comme pour la plupart des GIF, ces couleurs sont réécrites à l'identique ; les GIF qui utilisent une palette par image reçoivent une palette commune de 256 couleurs choisie à partir de toutes les images, ce qui se remarque rarement.",
      ],
    },
    {
      heading: "Plus court, donc plus léger",
      id: "size",
      body: [
        "Chaque image retirée, ce sont des données en moins : raccourcir un GIF est donc l'un des moyens les plus efficaces de réduire son poids sans toucher à sa qualité. Ramener un GIF de six secondes à ses deux meilleures secondes supprime en général environ les deux tiers du fichier.",
        "S'il reste trop lourd pour l'endroit où vous voulez l'envoyer, retirez les bords avec « Recadrer un GIF » ou réduisez les couleurs avec « Compresser un GIF ».",
      ],
    },
    {
      heading: "Coupes courantes",
      id: "uses",
      body: [
        "Supprimez les secondes vides qu'un logiciel d'enregistrement d'écran ajoute avant le début et après l'arrêt. Ne gardez que la chute d'un GIF de réaction. Retirez le moment où quelqu'un passe devant la caméra. Découpez un long GIF en courts extraits en enregistrant plusieurs coupes du même fichier, l'une après l'autre.",
        "Pour raccourcir une vidéo avant d'en faire un GIF, « Vidéo en GIF » dispose de ses propres réglages de début et de fin, ce qui garde le fichier léger dès le départ.",
      ],
    },
    {
      heading: "Des GIF courts pour WhatsApp, les réseaux sociaux et les forums",
      id: "messengers",
      body: [
        "Les messageries, les forums et les réseaux sociaux imposent souvent une limite de poids. Un GIF trop long est refusé ou converti automatiquement avec une qualité moindre. Couper le GIF pour ne garder que les secondes qui comptent est le moyen le plus simple de rester sous ces limites sans dégrader l'image, et un GIF court retient aussi mieux l'attention de celui qui le regarde.",
      ],
    },
    {
      heading: "Confidentialité",
      id: "privacy",
      body: [
        "Le GIF est décodé, coupé et réencodé entièrement dans votre navigateur. Il n'est jamais envoyé sur un serveur, et rien n'est conservé une fois la page fermée.",
      ],
    },
  ],

  howToTitle: "Comment couper un GIF",
  steps: [
    { title: "Ajoutez le GIF", description: "Sélectionnez un GIF animé sur votre ordinateur ou votre téléphone." },
    { title: "Placez le début et la fin", description: "Déplacez les curseurs sur la première et la dernière image, puis choisissez de garder ou de supprimer ce passage." },
    { title: "Coupez et téléchargez", description: "Cliquez sur « Couper le GIF », comparez le résultat avec l'original et téléchargez-le." },
  ],

  features: [
    { icon: "burst_mode", title: "Précis à l'image près", description: "Début et fin sur des images exactes, avec durées et miniatures." },
    { icon: "delete", title: "Garder ou supprimer", description: "Raccourcissez les extrémités ou coupez un passage au milieu." },
    { icon: "lock", title: "Aucun envoi", description: "Coupe entièrement dans votre navigateur." },
  ],

  faqs: [
    { q: "Comment raccourcir un GIF ?", a: "Ajoutez le GIF, placez les curseurs « Début » et « Fin » sur les images voulues, laissez l'option « La conserver » sélectionnée et cliquez sur « Couper le GIF »." },
    { q: "Puis-je supprimer des images au milieu d'un GIF ?", a: "Oui. Sélectionnez le passage à effacer et choisissez « La supprimer » ; les images d'avant et d'après sont raccordées." },
    { q: "Couper un GIF change-t-il sa vitesse ?", a: "Non. Chaque image conservée garde sa durée d'origine." },
    { q: "La qualité baisse-t-elle ?", a: "Non. Les images conservées ne sont pas modifiées, et les couleurs d'origine sont réutilisées dès qu'elles tiennent dans une seule palette." },
    { q: "De combien mon GIF sera-t-il plus léger ?", a: "À peu près en proportion des images retirées : supprimer la moitié des images réduit le fichier d'environ la moitié." },
    { q: "Puis-je couper un GIF par durée plutôt que par image ?", a: "Chaque curseur affiche l'instant où commence son image : vous pouvez donc viser une seconde précise ; la coupe elle-même tombe toujours entre deux images." },
    { q: "La transparence est-elle conservée ?", a: "Oui. Les GIF transparents restent transparents." },
    { q: "Le GIF coupé boucle-t-il toujours ?", a: "Oui. Il boucle exactement comme l'original." },
    { q: "Puis-je découper un GIF en plusieurs parties ?", a: "Oui : coupez et téléchargez une partie, puis déplacez les curseurs et coupez la suivante dans le même GIF." },
    { q: "Mon GIF est-il envoyé sur un serveur ?", a: "Non. Le GIF est coupé entièrement dans votre navigateur." },
    { q: "Cela fonctionne-t-il sur un téléphone ?", a: "Oui, dans le navigateur de n'importe quel téléphone." },
    { q: "Est-ce gratuit ?", a: "Oui. Sans compte, sans filigrane et sans limite." },
    { q: "Quelle différence entre couper et recadrer un GIF ?", a: "Couper retire des images, c'est-à-dire de la durée. Recadrer retire les bords de l'image ; c'est le rôle de l'outil « Recadrer un GIF »." },
  ],

  security:
    "Votre GIF est coupé entièrement dans votre navigateur. Rien n'est envoyé, stocké ni suivi.",

  // GifEditTool.tsx is shared with gif-cropper; each route only has its own
  // tool's ui in scope, so this page reuses the cropper's translations.
  ui: cropper.ui,
};

export default content;

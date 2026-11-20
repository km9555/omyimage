import type { ToolPageContent } from "@/content/tools/types";
import cropper from "@/content/tools/gif-cropper.fr";

/**
 * French copy for /fr/inverser-gif.
 *
 * Target query « Inverser un GIF » leads the h1; « GIF à l'envers » and
 * « lire un GIF à l'envers » ride in the metaTitle, the intro and an FAQ, and
 * « GIF boomerang » names the second mode.
 */
const content: ToolPageContent = {
  toolId: "reverse-gif",
  locale: "fr",
  name: "Inverser un GIF",
  tagline:
    "Lisez un GIF animé à l'envers, ou transformez-le en boomerang qui avance puis recule en une seule boucle continue. Chaque image conserve sa durée. Gratuit, dans votre navigateur.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "Inverser un GIF – GIF à l'envers ou boomerang | oMyImage",
  metaDescription:
    "Inverser un GIF en ligne : mettez votre GIF à l'envers ou créez un GIF boomerang qui va et vient sans saut. Chaque image conserve sa durée. Gratuit, sans envoi.",

  intro:
    "Lire une animation à l'envers est l'un des plus vieux trucs qui soient : l'eau rebondit dans le verre, un objet tombé remonte dans la main, une foule marche à reculons. « Inverser un GIF » d'oMyImage renverse l'ordre de toutes les images de votre GIF pour qu'il se lise de la fin vers le début, et son option « Boomerang » lit l'extrait à l'endroit puis à l'envers, si bien que la boucle ne présente aucun saut visible. Ajoutez le GIF, choisissez un sens, comparez le résultat à l'original et téléchargez votre GIF à l'envers.",

  sections: [
    {
      heading: "À l'envers ou en boomerang",
      id: "modes",
      body: [
        "« Inverser » lit les images de la dernière à la première. Le GIF dure exactement aussi longtemps qu'avant et compte le même nombre d'images ; seul l'ordre change. C'est le bon choix pour les gags qui reposent sur un temps qui s'écoule à rebours, et pour les GIF qui sont tout simplement plus réussis dans l'autre sens.",
        "« Boomerang » lit les images à l'endroit puis à l'envers. La première et la dernière image ne sont pas répétées aux points de retournement : le mouvement rebondit en douceur au lieu de marquer une pause. C'est l'effet que les applications photo des téléphones appellent boomerang, et c'est le moyen le plus simple de faire boucler n'importe quel extrait court sans saut.",
      ],
    },
    {
      heading: "Rythme et durées",
      id: "timing",
      body: [
        "Chaque image conserve sa propre durée. Si l'original reste deux secondes sur sa dernière image avant de redémarrer, le GIF inversé reste deux secondes sur cette même image, désormais au début. C'est généralement ce que vous voulez, mais si la pause paraît étrange en ouverture, « Changer la vitesse d'un GIF » peut donner la même durée à toutes les images.",
        "Un boomerang dure presque deux fois plus longtemps que l'original, puisque la plupart des images sont lues deux fois. Les extraits courts, d'une à trois secondes, font les meilleurs boomerangs ; les plus longs peuvent paraître lents au retour.",
      ],
    },
    {
      heading: "Pourquoi certains GIF bouclent avec un saut",
      id: "loops",
      body: [
        "La plupart des GIF sont découpés dans une vidéo : la dernière image correspond donc rarement à la première. Quand le GIF redémarre, tout revient brusquement à la position de départ, et l'œil remarque le saut toutes les quelques secondes. Un boomerang ne saute jamais : il repart en sens inverse à chaque extrémité, et le mouvement reste continu, quel que soit le nombre de lectures.",
        "C'est donc une solution rapide pour les vues de produits, les mains qui saluent, les boissons qu'on verse, les cheveux au vent et tous ces mouvements courts qui, sinon, accrocheraient à chaque boucle.",
      ],
    },
    {
      heading: "Qualité et poids du fichier",
      id: "quality",
      body: [
        "Les images elles-mêmes ne sont pas modifiées. Lorsque les couleurs du GIF tiennent dans une seule palette, comme c'est le cas pour la plupart des GIF, les mêmes couleurs sont réécrites à l'identique. Les GIF tirés de vidéos utilisent parfois une palette par image ; ils reçoivent alors une seule palette partagée de 256 couleurs, choisie à partir de toutes les images, ce qui se voit rarement.",
        "Un GIF inversé garde en général un poids proche de l'original. Un boomerang est plus lourd, puisque presque chaque image est stockée deux fois ; si cela compte, « Compresser un GIF » peut l'alléger ensuite.",
      ],
    },
    {
      heading: "Idées",
      id: "ideas",
      body: [
        "Rembobinez un plongeon, un saut ou une éclaboussure pour qu'ils se produisent à rebours. Faites défiler une construction, un dessin ou une recette à l'envers, pour qu'ils se défassent d'eux-mêmes. Transformez la rotation d'un produit ou un portrait animé en boomerang qui boucle proprement sur un site web ou dans une story. Inversez un GIF de réaction pour en changer complètement le sens.",
      ],
    },
    {
      heading: "Confidentialité",
      id: "privacy",
      body: [
        "Le GIF est décodé, réordonné et encodé entièrement dans votre navigateur. Il n'est jamais envoyé sur un serveur, et rien n'est conservé une fois la page fermée.",
      ],
    },
  ],

  howToTitle: "Comment inverser un GIF",
  steps: [
    { title: "Ajoutez le GIF", description: "Sélectionnez un GIF animé sur votre ordinateur ou votre téléphone." },
    { title: "Choisissez un sens", description: "Choisissez « Inverser » pour le lire à l'envers ou « Boomerang » pour le lire à l'endroit puis à l'envers." },
    { title: "Inversez et téléchargez", description: "Cliquez sur « Inverser le GIF », comparez le résultat à l'original et téléchargez-le." },
  ],

  features: [
    { icon: "history", title: "À l'envers ou en boomerang", description: "Lecture depuis la fin, ou aller-retour en une boucle continue." },
    { icon: "visibility", title: "Côte à côte", description: "L'original et le résultat sont lus l'un à côté de l'autre." },
    { icon: "lock", title: "Aucun envoi", description: "Inversé entièrement dans votre navigateur." },
  ],

  faqs: [
    { q: "Comment inverser un GIF ?", a: "Ajoutez le GIF, laissez « Inverser » sélectionné et cliquez sur « Inverser le GIF ». Les images sont lues de la dernière à la première." },
    { q: "Qu'est-ce qu'un GIF boomerang ?", a: "Un GIF qui se lit à l'endroit puis à l'envers, encore et encore, de sorte que la boucle ne revient jamais brusquement au début." },
    { q: "Le GIF inversé garde-t-il sa vitesse ?", a: "Oui. Chaque image conserve sa propre durée ; seul l'ordre change." },
    { q: "Pourquoi mon boomerang est-il plus long ?", a: "La plupart des images sont lues deux fois, une fois à l'endroit et une fois à l'envers : un boomerang dure donc presque deux fois plus longtemps." },
    { q: "Inverser fait-il baisser la qualité ?", a: "Non. Les images ne sont pas modifiées, et les couleurs d'origine sont réutilisées dès qu'elles tiennent dans une seule palette." },
    { q: "Le fichier sera-t-il plus lourd ?", a: "Un GIF inversé garde à peu près le même poids. Un boomerang est plus lourd, car presque chaque image est stockée deux fois." },
    { q: "La transparence est-elle conservée ?", a: "Oui. Les GIF transparents restent transparents." },
    { q: "Puis-je inverser une vidéo ?", a: "Convertissez d'abord l'extrait avec « Vidéo en GIF », puis inversez le GIF ici." },
    { q: "Puis-je faire un boomerang à partir d'une image fixe ?", a: "Non : un boomerang a besoin de mouvement. Un GIF d'une seule image n'a rien à inverser." },
    { q: "Mon GIF est-il envoyé sur un serveur ?", a: "Non. Le GIF est inversé entièrement dans votre navigateur." },
    { q: "Est-ce que ça marche sur un téléphone ?", a: "Oui, dans un navigateur mobile. Les GIF longs prennent un peu plus de temps sur un téléphone." },
    { q: "Est-ce gratuit ?", a: "Oui. Sans compte, sans filigrane et sans limite." },
    { q: "Comment mettre un GIF à l'envers sans le retourner ?", a: "« Inverser un GIF » change l'ordre de lecture, pas l'orientation de l'image : le GIF se lit à rebours mais reste dans le bon sens. Pour retourner l'image elle-même tête en bas ou en miroir, utilisez « Faire pivoter un GIF »." },
  ],

  security:
    "Votre GIF est inversé entièrement dans votre navigateur. Rien n'est envoyé, stocké ni suivi.",

  // GifEditTool.tsx is shared with gif-cropper; each route only has its own
  // tool's ui in scope, so this page reuses the cropper's translations.
  ui: cropper.ui,
};

export default content;

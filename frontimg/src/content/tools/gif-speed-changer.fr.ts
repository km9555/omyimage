import type { ToolPageContent } from "@/content/tools/types";
import cropper from "@/content/tools/gif-cropper.fr";

/**
 * French copy for /fr/vitesse-gif.
 *
 * Target query « Changer la vitesse d'un GIF » leads the h1; « accélérer un
 * GIF » and « ralentir un GIF » sit in the metaTitle, the metaDescription and
 * the FAQ questions people actually type. Decimal comma for speeds (0,5×).
 */
const content: ToolPageContent = {
  toolId: "gif-speed-changer",
  locale: "fr",
  name: "Changer la vitesse d'un GIF",
  tagline:
    "Accélérez ou ralentissez un GIF animé, ou donnez la même durée à toutes ses images. En général, seul le rythme change : chaque pixel reste tel quel. Gratuit, dans votre navigateur.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "Changer la vitesse d'un GIF – Accélérer, ralentir | oMyImage",
  metaDescription:
    "Changer la vitesse d'un GIF gratuitement : accélérez ou ralentissez votre GIF de 0,1× à 10×, ou donnez la même durée à chaque image. Sans perte de qualité.",

  intro:
    "Un GIF qui se traîne fait tomber une blague à plat ; un GIF qui file à toute allure rend un tutoriel impossible à suivre. « Changer la vitesse d'un GIF » d'oMyImage corrige le rythme sans refaire l'animation. Choisissez une vitesse comme 2× ou 0,5×, ou saisissez la vôtre, et voyez la nouvelle durée avant d'enregistrer. Lorsque seul le rythme doit changer, ce qui est le cas le plus fréquent, l'outil réécrit la durée de chaque image et laisse les visuels intacts : le GIF conserve exactement sa qualité et son poids. Accélérer un GIF ou ralentir un GIF ne prend que quelques secondes.",

  sections: [
    {
      heading: "Comment fonctionne la vitesse d'un GIF",
      id: "how",
      body: [
        "Un GIF n'a pas de cadence fixe. Chaque image porte sa propre durée, enregistrée en centièmes de seconde, et le lecteur affiche l'image pendant ce temps avant de passer à la suivante. C'est pour cela qu'un GIF peut marquer une pause sur une chute et filer sur le reste, et c'est pour cela que changer la vitesse revient à modifier chaque durée.",
        "Accélérer à 2× divise chaque durée par deux, et ralentir à 0,5× les double : le rythme de l'original, pauses comprises, est conservé, simplement plus rapide ou plus lent.",
      ],
    },
    {
      heading: "Par vitesse ou par durée d'image",
      id: "modes",
      body: [
        "« Par vitesse » met à l'échelle le rythme propre du GIF. Les boutons couvrent les choix courants de 0,25× à 3×, et le champ accepte toute valeur de 0,1× à 10×. La nouvelle durée s'affiche avant que vous cliquiez : vous savez exactement combien de temps le résultat durera.",
        "« Durée par image » donne au contraire la même durée à toutes les images, en millisecondes : 100 ms correspondent à 10 images par seconde, 50 ms à 20 et 40 ms à 25. Utilisez ce mode pour rendre fluide un GIF au rythme irrégulier, ou pour caler un GIF sur une cadence précise. Le nombre d'images par seconde se met à jour pendant la saisie.",
      ],
    },
    {
      heading: "La limite de vitesse des navigateurs",
      id: "limit",
      body: [
        "Les navigateurs appliquent une vieille règle : une image de GIF dont la durée est de 0,01 seconde ou moins est affichée pendant 0,1 seconde. Elle protège contre les GIF écrits avec une durée nulle, mais elle signifie qu'un GIF trop accéléré se lit plus lentement, et non plus vite. La durée la plus courte lue telle quelle est de 0,02 seconde, soit 50 images par seconde.",
        "Cet outil connaît la règle. Quand une vitesse ferait descendre des images sous 0,02 seconde, les images voisines sont fusionnées jusqu'à ce que chacune soit assez longue, et l'outil vous indique combien. Le GIF se lit alors à la vitesse choisie, avec moins d'images : exactement ce qu'un lecteur afficherait de toute façon à cette cadence.",
      ],
    },
    {
      heading: "Sans perte dès que possible",
      id: "lossless",
      body: [
        "Quand toutes les images sont conservées et que seules les durées changent, le GIF n'est pas réencodé du tout. Les valeurs de durée à l'intérieur du fichier sont réécrites, et tout le reste (les pixels, la palette, la compression) reste identique octet pour octet. Le poids du fichier est pratiquement inchangé, et l'opération ne prend qu'un instant, même pour les GIF longs.",
        "Le GIF n'est réencodé que lorsque des images doivent être fusionnées. Même dans ce cas, ses propres couleurs sont réutilisées dès qu'elles tiennent dans une seule palette, si bien que les images gardent le même aspect.",
      ],
    },
    {
      heading: "Accélérer ou ralentir un GIF : les bonnes vitesses",
      id: "tips",
      body: [
        "Les GIF de réaction et les mèmes fonctionnent souvent mieux un peu accélérés, autour de 1,25× à 1,5×. Les tutoriels et les enregistrements d'écran peuvent demander un ralentissement à 0,75× ou 0,5× pour que le public suive chaque étape. Le ralenti de scènes de sport, d'animaux ou d'éclaboussures rend le mieux à 0,5× ou moins lorsque l'original compte beaucoup d'images ; un GIF de quelques images seulement paraîtra saccadé une fois ralenti, car rien n'est ajouté entre elles.",
      ],
    },
    {
      heading: "Confidentialité",
      id: "privacy",
      body: [
        "Le GIF est lu et réécrit entièrement dans votre navigateur. Il n'est jamais envoyé sur un serveur, et rien n'est conservé une fois la page fermée.",
      ],
    },
  ],

  howToTitle: "Comment changer la vitesse d'un GIF",
  steps: [
    { title: "Ajoutez le GIF", description: "Sélectionnez un GIF animé sur votre ordinateur ou votre téléphone." },
    { title: "Réglez la vitesse", description: "Choisissez une vitesse comme 2× ou 0,5×, ou donnez la même durée à toutes les images." },
    { title: "Appliquez et téléchargez", description: "Cliquez sur « Changer la vitesse », comparez le résultat à l'original et téléchargez-le." },
  ],

  features: [
    { icon: "speed", title: "Plus rapide ou plus lent", description: "De 0,1× à 10×, ou une durée unique pour toutes les images." },
    { icon: "check", title: "Pixels intacts", description: "Seul le rythme est réécrit dès que toutes les images sont conservées." },
    { icon: "lock", title: "Aucun envoi", description: "Modifié entièrement dans votre navigateur." },
  ],

  faqs: [
    { q: "Comment accélérer un GIF ?", a: "Ajoutez le GIF, choisissez une vitesse supérieure à 1×, par exemple 1,5× ou 2×, et cliquez sur « Changer la vitesse »." },
    { q: "Comment ralentir un GIF ?", a: "Choisissez une vitesse inférieure à 1×, par exemple 0,75× ou 0,5×. Chaque image s'affiche plus longtemps." },
    { q: "Changer la vitesse fait-il baisser la qualité ?", a: "En général, pas du tout : quand toutes les images sont conservées, seules les durées sont réécrites et les pixels restent exactement tels qu'ils étaient." },
    { q: "Pourquoi mon GIF ne va-t-il pas plus vite ?", a: "Les navigateurs affichent les images de moins de 0,02 seconde pendant 0,1 seconde. Au-delà de ce seuil, l'outil fusionne des images pour que le GIF se lise quand même à la vitesse choisie." },
    { q: "Que signifie la durée par image ?", a: "Le temps pendant lequel chaque image est affichée. 100 ms correspondent à 10 images par seconde ; 50 ms à 20." },
    { q: "Puis-je donner la même durée à toutes les images ?", a: "Oui. Choisissez « Durée par image » et saisissez-la en millisecondes ; le minimum est de 20 ms." },
    { q: "Le poids du fichier va-t-il changer ?", a: "Presque pas lorsque seul le rythme change. Quand des images sont fusionnées, le GIF devient plus léger." },
    { q: "La transparence est-elle conservée ?", a: "Oui. La transparence n'est pas modifiée." },
    { q: "Pourquoi mon GIF ralenti paraît-il saccadé ?", a: "Ralentir affiche les mêmes images plus longtemps ; l'outil ne peut pas inventer d'images intermédiaires. Les GIF qui comptent beaucoup d'images se ralentissent le plus en douceur." },
    { q: "Mon GIF est-il envoyé sur un serveur ?", a: "Non. Tout se passe dans votre navigateur." },
    { q: "Est-ce que ça marche sur un téléphone ?", a: "Oui, dans un navigateur mobile." },
    { q: "Est-ce gratuit ?", a: "Oui. Sans compte, sans filigrane et sans limite." },
    { q: "Comment mettre un GIF au ralenti ?", a: "Choisissez 0,5× pour le ralentir de moitié, ou 0,25× pour un ralenti marqué. Le résultat est d'autant plus fluide que le GIF d'origine contient beaucoup d'images." },
  ],

  security:
    "Le rythme de votre GIF est modifié entièrement dans votre navigateur. Rien n'est envoyé, stocké ni suivi.",

  // GifEditTool.tsx is shared with gif-cropper; each route only has its own
  // tool's ui in scope, so this page reuses the cropper's translations.
  ui: cropper.ui,
};

export default content;

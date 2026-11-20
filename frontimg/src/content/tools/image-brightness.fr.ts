import type { ToolPageContent } from "@/content/tools/types";
import invert from "@/content/tools/invert-image.fr";

/**
 * French copy for /fr/luminosite-image. Target query: « Luminosité d'une
 * image » (France, Nov 2026); secondary « éclaircir une photo » in the
 * metaTitle, intro, a heading and an FAQ; « luminosité et contraste » in the
 * body. The English name (Brightness & Contrast) becomes the query; contrast
 * and saturation are explained in the body.
 */
const content: ToolPageContent = {
  toolId: "image-brightness",
  locale: "fr",
  name: "Luminosité d'une image",
  tagline:
    "Éclaircissez une photo trop sombre, donnez-lui du relief avec le contraste et rendez les couleurs plus vives ou plus douces avec la saturation, avec un aperçu en direct et un avant-après instantané. Gratuit, dans votre navigateur.",
  category: { id: "edit", label: "Modifier et créer" },

  metaTitle: "Luminosité d'une image – éclaircir une photo | oMyImage",
  metaDescription:
    "Luminosité d'une image en ligne et gratuite : éclaircir une photo, régler contraste et saturation avec aperçu en direct. Plusieurs photos, sans envoi.",

  intro:
    "La plupart des photos décevantes ne sont pas floues : elles sont simplement un peu trop sombres, trop ternes ou trop grises. Trois curseurs règlent l'essentiel du problème. « Luminosité d'une image » d'oMyImage ajuste la luminosité, le contraste et la saturation des images JPG, PNG et WebP, affiche le changement en direct pendant que vous faites glisser, et vous permet de maintenir un bouton pour revoir l'original. Pour éclaircir une photo, raviver des couleurs ou redonner du peps à un cliché plat, il suffit de quelques secondes. Appliquez les mêmes réglages à tout un lot, pour qu'une série de photos de produits ou de vacances garde un rendu homogène.",

  sections: [
    {
      heading: "Les trois curseurs",
      id: "sliders",
      body: [
        "La luminosité éclaircit ou assombrit tous les tons de la même valeur : poussez-la vers la droite pour sauver une photo sous-exposée, vers la gauche pour calmer une photo trop claire. Le contraste écarte les tons du gris moyen, les parties sombres deviennent plus sombres et les claires plus claires, ce qui donne de la profondeur à une image plate et voilée ; vers la gauche, il adoucit une image trop dure.",
        "La saturation règle l'intensité des couleurs. Augmentez-la pour la nourriture, les fleurs et les paysages ; baissez-la pour un rendu sourd, façon pellicule. À −100, l'image passe entièrement en noir et blanc. « Réinitialiser » remet les trois curseurs à zéro.",
      ],
    },
    {
      heading: "Éclaircir une photo et corriger les défauts courants",
      id: "fixes",
      body: [
        "Une photo d'intérieur sombre : luminosité +20 à +40, contraste +10 pour qu'elle ne paraisse pas délavée. Un paysage gris et voilé : contraste +20 à +30, saturation +15. La photo d'un document prise au téléphone pour un formulaire : luminosité +15 et contraste +40 rendent le papier blanc et le texte sombre et lisible. Une photo de midi trop dure : contraste −15 et saturation −10.",
        "Mieux vaut procéder par petites touches. Une luminosité trop forte fait passer les zones claires au blanc pur, et ces détails ne se récupèrent plus : surveillez le ciel et les vêtements blancs dans l'aperçu.",
      ],
    },
    {
      heading: "Avant et après",
      id: "compare",
      body: [
        "Maintenez enfoncé « Maintenir pour voir l'original » sous l'aperçu pour afficher l'image d'origine ; relâchez pour retrouver vos réglages. Comparer souvent est le moyen le plus simple de ne pas en faire trop, car l'œil s'habitue très vite à une image plus claire ou plus colorée.",
      ],
    },
    {
      heading: "Des lots homogènes",
      id: "batch",
      body: [
        "Ajoutez toute une série d'images et les mêmes réglages s'appliquent à chacune : des photos prises sous la même lumière ressortent ainsi assorties, ce qui est utile pour des fiches produits, des photos immobilières et des albums. L'aperçu utilise la première image ; chaque fichier de la liste reçoit son propre bouton de téléchargement, et plusieurs fichiers se téléchargent ensemble dans un ZIP.",
      ],
    },
    {
      heading: "Formats et qualité",
      id: "formats",
      body: [
        "Le résultat garde le format d'origine, sauf si vous en choisissez un autre. Le PNG enregistre les pixels ajustés à l'identique ; le JPG et le WebP utilisent le curseur de qualité. Les zones transparentes restent transparentes en PNG et en WebP. Pour un noir et blanc avec un contrôle plus fin du mélange, utilisez « Photo en noir et blanc » ; pour un négatif, utilisez « Inverser les couleurs d'une image ».",
      ],
    },
    {
      heading: "La luminosité pour l'impression et les écrans",
      id: "print",
      body: [
        "Les photos paraissent plus sombres sur papier que sur un écran rétroéclairé : les images destinées à l'impression ont donc souvent besoin d'un peu plus de luminosité, +10 à +20 est courant, et d'une pointe de contraste en plus. Pour les écrans, vérifiez le résultat sur l'appareil où il sera vu : les téléphones sont généralement plus lumineux que les écrans d'ordinateur portable, et une photo réussie sur l'un peut paraître terne sur l'autre.",
      ],
    },
    {
      heading: "Photos de documents pour les démarches en ligne",
      id: "documents",
      body: [
        "Si vous devez envoyer sur un portail en ligne la photo d'un formulaire, d'un justificatif ou d'une attestation, vous connaissez le problème : le papier paraît gris et l'écriture pâle. Un peu plus de luminosité et nettement plus de contraste rendent la page blanche et le texte bien lisible. Si le fichier dépasse ensuite la limite de poids du portail, réduisez-le avec « Compresser une image ».",
      ],
    },
    {
      heading: "Confidentialité",
      id: "privacy",
      body: [
        "Chaque image est ajustée entièrement dans votre navigateur. Rien n'est envoyé sur un serveur, et rien n'est conservé une fois la page fermée.",
      ],
    },
  ],

  howToTitle: "Comment modifier la luminosité d'une image",
  steps: [
    { title: "Ajoutez des images", description: "Sélectionnez une ou plusieurs images JPG, PNG ou WebP." },
    { title: "Ajustez", description: "Déplacez les curseurs de luminosité, de contraste et de saturation ; maintenez pour comparer." },
    { title: "Appliquez et téléchargez", description: "Cliquez sur « Appliquer les réglages » pour télécharger l'image, ou un ZIP s'il y en a plusieurs." },
  ],

  features: [
    { icon: "light_mode", title: "Trois curseurs essentiels", description: "Luminosité, contraste et saturation, de −100 à +100." },
    { icon: "visibility", title: "Avant et après", description: "Aperçu en direct, et maintien du bouton pour revoir l'original." },
    { icon: "lock", title: "Aucun envoi", description: "Réglages appliqués entièrement dans votre navigateur." },
  ],

  faqs: [
    { q: "Comment éclaircir une photo ?", a: "Ajoutez-la, poussez le curseur « Luminosité » vers la droite et cliquez sur « Appliquer les réglages »." },
    { q: "À quoi sert le contraste ?", a: "Il écarte davantage les tons sombres et clairs, ce qui donne plus de profondeur aux photos plates." },
    { q: "À quoi sert la saturation ?", a: "Elle rend les couleurs plus vives ou plus sourdes ; à −100, la photo passe en noir et blanc." },
    { q: "Comment corriger une photo trop sombre ?", a: "Augmentez la luminosité de 20 à 40 et ajoutez environ 10 de contraste pour qu'elle ne paraisse pas délavée." },
    { q: "Puis-je rendre plus lisible la photo d'un document ?", a: "Oui. Un peu plus de luminosité et beaucoup plus de contraste rendent la page blanche et le texte sombre." },
    { q: "Puis-je comparer avec l'original ?", a: "Oui. Maintenez enfoncé le bouton sous l'aperçu pour voir l'original." },
    { q: "Puis-je ajuster plusieurs photos à la fois ?", a: "Oui. Les mêmes réglages s'appliquent à toutes, et elles se téléchargent dans un ZIP." },
    { q: "Y a-t-il une perte de qualité ?", a: "Le PNG garde chaque pixel. Le JPG et le WebP sont réenregistrés à la qualité que vous choisissez." },
    { q: "Mon image est-elle envoyée sur un serveur ?", a: "Non. Tout se passe dans votre navigateur." },
    { q: "Cela fonctionne-t-il sur un téléphone ?", a: "Oui, dans n'importe quel navigateur mobile." },
    { q: "Puis-je annuler les modifications ?", a: "Réinitialisez les curseurs avant de télécharger ; ensuite, gardez votre fichier d'origine." },
    { q: "Est-ce gratuit ?", a: "Oui. Sans compte, sans filigrane et sans limite." },
    { q: "Les couleurs changent-elles quand j'augmente la luminosité ?", a: "Elles s'éclaircissent mais gardent leur teinte. Seul le curseur de saturation les rend plus ou moins vives." },
    { q: "Puis-je régler la luminosité sans toucher au contraste ?", a: "Oui. Chaque curseur agit séparément ; laissez le contraste et la saturation à zéro." },
  ],

  security:
    "Vos images sont ajustées entièrement dans votre navigateur. Rien n'est envoyé, stocké ni suivi.",

  // ImageFilterTool.tsx is shared with invert-image; reuse its translations.
  ui: invert.ui,
};

export default content;

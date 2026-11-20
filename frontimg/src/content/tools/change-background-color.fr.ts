import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/changer-fond-photo (variant of remove-background: rembg
 * cut-out, then a colour composited in the browser). Target query « Changer le
 * fond d'une photo » (Nov 2026), secondaries « fond blanc photo » (5.4K FR)
 * and « changer couleur fond ». Vous. No authority acceptance claimed (French
 * ID applications use an ANTS ePhoto); extra French-only section on CV and
 * profile photos.
 */
const content: ToolPageContent = {
  toolId: "change-background-color",
  locale: "fr",
  name: "Changer le fond d'une photo",
  tagline:
    "Passez le fond d'une photo en blanc, bleu, rouge ou dans la couleur de votre choix. L'IA détoure la personne ou l'objet, et vous essayez les couleurs instantanément : idéal pour les photos de passeport, d'identité et de profil.",
  category: { id: "ai", label: "IA pour images" },

  metaTitle: "Changer le fond d'une photo – fond blanc gratuit | oMyImage",
  metaDescription:
    "Changez le fond d'une photo avec l'IA : fond blanc, bleu, rouge ou toute autre couleur. Idéal pour un CV, un profil ou un formulaire. Gratuit et sans filigrane.",

  intro:
    "Les formulaires et les services qui délivrent des documents sont stricts sur un point plus que sur tout autre : le fond. Certains veulent un blanc uni, d'autres un bleu clair, d'autres encore du rouge, et une photo prise devant le mur de la cuisine est refusée. Cet outil détoure la personne (ou un produit) avec un modèle d'IA et la place sur une couleur unie de votre choix : une photo prise à la maison devient ainsi une photo d'identité ou de profil utilisable. Le détourage n'a lieu qu'une fois ; ensuite, passer du blanc au bleu, au rouge ou à n'importe quelle couleur personnalisée est instantané et gratuit. Vous pouvez donc changer la couleur du fond ou, tout simplement, obtenir une photo sur fond blanc.",

  sections: [
    {
      heading: "Quelle couleur de fond les formulaires demandent-ils ?",
      id: "colours",
      body: [
        "Le blanc ou un gris très clair est l'exigence la plus courante pour les photos de passeport et de visa dans le monde, notamment pour la plupart de celles de l'Inde, des États-Unis et du Royaume-Uni. Le bleu clair est fréquent pour certaines cartes d'identité nationales et pour les cartes d'étudiant ou d'employé. Les fonds rouges ou bleus sont la norme pour les pas foto indonésiennes, dont la couleur est fixée par l'institution.",
        "Suivez toujours la consigne exacte de votre document : cet outil vous donne la couleur, mais il ne peut pas savoir laquelle votre administration attend. Les quatre couleurs d'identité en haut des réglages sont un point de départ, et n'importe quelle autre couleur peut être choisie en dessous.",
      ],
    },
    {
      heading: "Comment le fond est remplacé",
      id: "how",
      body: [
        "D'abord, un modèle de segmentation par IA sur notre serveur trouve le sujet (la personne, avec ses cheveux et ses épaules, ou le produit) et le renvoie détouré, sur un fond transparent. Ensuite, votre navigateur place ce détourage sur la couleur choisie et enregistre un JPG.",
        "Comme la deuxième étape se déroule sur votre appareil, changer de couleur ne relance pas l'IA : vous pouvez comparer le blanc, le bleu et le rouge en quelques secondes, et seule la première étape compte comme un traitement IA.",
      ],
    },
    {
      heading: "Obtenir un contour propre autour des cheveux",
      id: "edges",
      body: [
        "Les cheveux sont la partie la plus délicate de tout détourage. Photographiez la personne devant un fond qui contraste avec ses cheveux (un mur clair derrière des cheveux foncés, ou l'inverse) et évitez le contre-jour d'une fenêtre, qui fait briller le contour de la chevelure.",
        "Veillez à ce que les épaules et le sommet de la tête soient entièrement dans le cadre, avec un peu d'espace autour. Un détourage ne peut pas reconstruire une partie de tête coupée par le cadrage d'origine, et les règles des photos de passeport exigent de toute façon en général un espace au-dessus de la tête.",
      ],
    },
    {
      heading: "Après le fond",
      id: "next",
      body: [
        "Les photos d'identité obéissent aussi à des règles de format. Une fois le fond correct, recadrez la photo aux proportions demandées avec « Recadrer une image » et, si le formulaire limite le poids du fichier, passez sous la limite avec l'une de nos pages de compression à un poids précis, par exemple « Compresser une image à 50 Ko » : les formulaires d'examen et les démarches en ligne demandent souvent moins de 50 Ko ou 100 Ko.",
        "Si vous avez besoin d'une photo au format identité prête à imprimer, « Photo d'identité » réunit le changement de fond, le cadrage du visage et une planche d'impression en une seule étape. Pour une carte d'identité ou un passeport français, en revanche, la demande passe par une photo d'identité numérique (ePhoto) réalisée en cabine ou chez un photographe agréé : une photo faite chez vous ne la remplace pas.",
      ],
    },
    {
      heading: "Fond blanc pour votre photo de CV ou de profil",
      id: "cv",
      body: [
        "Un fond uni et calme rend une photo de CV, de profil LinkedIn ou de site d'emploi plus professionnelle. Le blanc est le plus neutre ; un gris clair ou un bleu doux apportent un peu plus de chaleur sans distraire. Essayez plusieurs teintes avec le sélecteur de couleur et comparez-les avant de télécharger.",
        "Pour un rendu naturel, partez d'une photo bien éclairée de face, sans ombres marquées sur le mur derrière. Si vos vêtements ont la même couleur que le fond que vous allez appliquer, choisissez une autre teinte pour que les épaules ne se confondent pas avec lui.",
      ],
    },
  ],

  howToTitle: "Comment changer la couleur du fond d'une photo",
  steps: [
    { title: "Importez la photo", description: "Sélectionnez un JPG, PNG ou WEBP où la personne ou l'objet se voit nettement." },
    { title: "Supprimez le fond", description: "Cliquez sur « Changer le fond » : l'IA détoure le sujet en quelques secondes." },
    { title: "Choisissez une couleur et téléchargez", description: "Essayez instantanément le blanc, le bleu, le rouge ou toute autre couleur, puis téléchargez le JPG." },
  ],

  features: [
    { icon: "format_color_fill", title: "Toutes les couleurs, instantanément", description: "Les couleurs d'identité blanc, bleu et rouge en un clic, plus un sélecteur pour toutes les autres, sans traitement IA supplémentaire par couleur." },
    { icon: "badge", title: "Pensé pour les photos d'identité", description: "Un détourage propre autour des cheveux et des épaules, sur la couleur unie que demandent les formulaires." },
    { icon: "verified_user", title: "Sans filigrane", description: "Gratuit, sans rien d'apposé sur le résultat." },
  ],

  faqs: [
    { q: "Comment mettre une photo sur fond blanc ?", a: "Importez la photo et cliquez sur « Changer le fond ». Le blanc est sélectionné par défaut : dès que le détourage apparaît, vous pouvez télécharger directement le JPG sur fond blanc." },
    { q: "Puis-je mettre un fond bleu ou rouge pour une photo d'identité ?", a: "Oui. Après le détourage, touchez la pastille bleue ou rouge, ou choisissez n'importe quelle teinte avec le sélecteur de couleur. Le changement est instantané." },
    { q: "Changer de couleur consomme-t-il un autre traitement IA ?", a: "Non. Seule la première étape, trouver le sujet, s'exécute sur notre serveur. Essayer d'autres couleurs ensuite se passe dans votre navigateur." },
    { q: "La photo respectera-t-elle les règles du passeport ?", a: "Le fond sera uni et régulier, c'est la partie que contrôle cet outil. Le format, la position de la tête, l'éclairage et l'expression sont des règles distinctes à vérifier pour votre document. Pour un passeport ou une carte d'identité français, une photo d'identité numérique (ePhoto) reste nécessaire." },
    { q: "Puis-je l'utiliser pour des photos de produit ?", a: "Oui. Les places de marché exigent souvent un fond blanc pur ; l'outil détoure le produit et le pose sur du blanc, exactement comme il le fait pour une personne." },
    { q: "Pourquoi le résultat est-il un JPG et pas un PNG ?", a: "Un fond de couleur unie n'a pas de transparence à conserver, et presque tous les formulaires demandent du JPG. Pour un détourage sur fond transparent, utilisez plutôt « Supprimer l'arrière-plan »." },
    { q: "Ma photo est-elle stockée ?", a: "Brièvement seulement. Le détourage est réalisé sur notre serveur, conservé derrière un lien privé et supprimé automatiquement dans l'heure ; la couleur est appliquée sur votre appareil." },
    { q: "Est-ce adapté à une photo de CV ?", a: "Oui. Un fond uni et sobre (blanc, gris clair ou bleu doux) rend une photo de CV ou de LinkedIn plus professionnelle. Choisissez la couleur avec le sélecteur et comparez plusieurs teintes avant de télécharger." },
  ],

  security:
    "La suppression du fond s'exécute sur notre serveur avec le moteur open source rembg ; le résultat est conservé brièvement derrière un lien de téléchargement privé et supprimé automatiquement dans l'heure. La nouvelle couleur est appliquée dans votre navigateur, et rien n'est partagé ni réutilisé.",
};

export default content;

import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/photo-de-profil-whatsapp (variant of resize-image).
 * Target query: « photo de profil WhatsApp » (3.6K/mo, FR); secondary « sans recadrer ».
 */
const content: ToolPageContent = {
  toolId: "whatsapp-dp-resizer",
  locale: "fr",
  name: "Photo de profil WhatsApp sans recadrer",
  tagline:
    "Mettez une photo entière en photo de profil WhatsApp sans la recadrer : ajustée dans un carré avec une couleur de fond, ou recadrée pour le remplir. 500 × 500 px, gratuit, dans votre navigateur.",
  category: { id: "optimize", label: "Optimiser" },

  metaTitle: "Photo de profil WhatsApp sans recadrer, gratuit | oMyImage",
  metaDescription:
    "Photo de profil WhatsApp entière, sans recadrer : votre photo tient dans un carré de 500 × 500 px avec le fond de votre choix. Aussi pour groupes et Business.",

  intro:
    "WhatsApp n'accepte que des photos de profil carrées. Quand vous choisissez une photo de groupe très large ou une photo en pied tout en hauteur, l'application vous oblige à en couper la plus grande partie. Cet outil règle le problème dans l'autre sens : il fait tenir la photo entière dans un carré et remplit l'espace vide avec une couleur, si bien que WhatsApp n'a plus rien à couper. Ajoutez une photo, choisissez la couleur des marges et téléchargez une image de 500 × 500 pixels qui passe en entier comme photo de profil WhatsApp, sans recadrer personne. Aucune inscription, aucun filigrane : la photo ne quitte pas votre appareil.",

  sections: [
    {
      heading: "Une photo de profil complète, sans recadrer",
      id: "no-crop",
      body: [
        "L'outil s'ouvre avec « Ajouter des marges » sélectionné. Votre photo est réduite jusqu'à tenir entièrement dans le carré, et les bandes au-dessus et en dessous – ou sur les côtés – sont remplies avec la couleur des marges, blanche par défaut. Quand le cadre de recadrage de WhatsApp apparaît, il couvre déjà toute l'image : il vous suffit de valider, sans perdre la personne placée au bord de la photo.",
        "Choisissez sous « Couleur des marges » une teinte qui va avec la photo : le blanc ou le noir restent neutres, et une couleur prélevée dans la photo elle-même paraît souvent plus naturelle que l'un ou l'autre. Passez à « Recadrer pour remplir » si vous préférez un gros plan qui occupe tout le cercle.",
      ],
    },
    {
      heading: "Le cercle masque les coins",
      id: "circle",
      body: [
        "WhatsApp affiche les photos de profil en cercle, aussi bien dans la liste des discussions que sur votre profil : les coins du carré ne sont donc jamais visibles. Les visages et le texte placés près des coins sont rognés ; gardez l'essentiel au centre.",
        "Avec une photo dotée de marges, le cercle rogne surtout les marges, et c'est pour cela que la méthode fonctionne si bien. Une photo de groupe très large apparaîtra toutefois petite dans le cercle : si les visages deviennent minuscules, recadrez un peu la photo d'abord pour que les personnes occupent davantage le cadre.",
      ],
    },
    {
      heading: "Quelle taille pour une photo de profil WhatsApp ?",
      id: "size",
      body: [
        "WhatsApp ne publie pas de taille officielle pour la photo de profil ; l'application recompresse tout ce que vous envoyez. 500 × 500 pixels est une taille très répandue, nette sur téléphone sans être inutilement lourde ; 192 × 192 est généralement cité comme le minimum encore acceptable. Pour envoyer un carré plus grand, modifiez la largeur et la hauteur sous le préréglage, par exemple en 1080 × 1080 ; les deux valeurs doivent rester égales pour obtenir un carré.",
        "La même taille convient aux photos de profil WhatsApp Business, où un logo rend généralement mieux entouré de marges blanches, pour que le cercle n'entame pas le lettrage.",
      ],
    },
    {
      heading: "La définir comme photo de profil",
      id: "set",
      body: [
        "Enregistrez l'image téléchargée sur votre téléphone, ouvrez WhatsApp, allez dans les Paramètres et touchez votre photo de profil, puis choisissez Modifier ou l'icône d'appareil photo et sélectionnez l'image dans votre galerie. Comme elle est déjà carrée, l'étape de recadrage ne change rien. Sur ordinateur, téléchargez-la sur la machine et choisissez-la de la même façon depuis WhatsApp Web ou l'application de bureau.",
      ],
    },
    {
      heading: "Photos de groupe et statut",
      id: "groups",
      body: [
        "Les icônes de groupe sont elles aussi des carrés affichés en cercle : la même astuce des marges garde intacte une photo d'équipe entière, de famille ou le logo d'un club comme image du groupe. Pour un statut, qui est une image verticale en plein écran, utilisez plutôt le préréglage WhatsApp « Statut » (1080 × 1920) dans la liste des préréglages.",
      ],
    },
  ],

  howToTitle: "Comment mettre une photo entière en photo de profil WhatsApp",
  steps: [
    { title: "Ajoutez votre photo", description: "Sélectionnez un JPG, PNG, WEBP, GIF ou BMP, de n'importe quelle forme." },
    { title: "Choisissez la couleur des marges", description: "« Ajouter des marges » est déjà activé ; choisissez blanc, noir ou n'importe quelle couleur pour l'espace vide." },
    { title: "Téléchargez et définissez-la", description: "Téléchargez l'image carrée et définissez-la comme photo de profil : aucun recadrage nécessaire." },
  ],

  features: [
    { icon: "crop_square", title: "Sans recadrage", description: "La photo entière tient dans le carré : WhatsApp n'a plus rien à couper." },
    { icon: "palette", title: "Marges de la couleur voulue", description: "Remplissez l'espace vide en blanc, en noir ou avec une couleur assortie à la photo." },
    { icon: "lock", title: "Confidentiel", description: "Votre photo est redimensionnée sur votre appareil et n'est jamais envoyée en ligne." },
  ],

  faqs: [
    { q: "Comment mettre une photo entière en photo de profil WhatsApp sans recadrer ?", a: "Ajoutez-la ici avec « Ajouter des marges » sélectionné. La photo entière est placée dans un carré avec une couleur de fond, et l'étape de recadrage de WhatsApp la garde en totalité." },
    { q: "Quelle est la bonne taille pour une photo de profil WhatsApp ?", a: "WhatsApp n'a pas de taille officielle. 500 × 500 pixels est un choix courant et net ; 192 × 192 est généralement cité comme minimum." },
    { q: "Pourquoi WhatsApp coupe-t-il ma photo ?", a: "Il n'accepte que des images carrées et les affiche en cercle. Une photo large ou haute doit être recadrée, sauf si vous lui ajoutez d'abord des marges pour en faire un carré." },
    { q: "Puis-je choisir la couleur de fond ?", a: "Oui. Le blanc est la valeur par défaut ; choisissez le noir ou n'importe quelle couleur sous « Couleur des marges »." },
    { q: "Est-ce que ça marche pour WhatsApp Business ?", a: "Oui. Les photos de profil Business sont aussi des carrés affichés en cercle ; les logos rendent mieux entourés de marges blanches." },
    { q: "Puis-je créer une icône de groupe avec cet outil ?", a: "Oui. Les icônes de groupe sont des carrés affichés en cercle : les marges gardent visible une photo de groupe entière ou un logo." },
    { q: "WhatsApp va-t-il réduire la qualité ?", a: "WhatsApp compresse lui-même les photos de profil. Partir d'un carré net de 500 × 500 ou plus donne le meilleur résultat après cette compression." },
    { q: "Pourquoi ma photo de profil WhatsApp est-elle floue ?", a: "Le plus souvent, l'image d'origine était trop petite, ou elle a été fortement recadrée puis agrandie. Partez d'une photo d'au moins 500 pixels sur le petit côté et ajoutez-lui des marges plutôt que d'utiliser un petit recadrage." },
    { q: "Ma photo est-elle envoyée sur un serveur ?", a: "Non. Elle est redimensionnée dans votre navigateur ; c'est vous seul qui la définissez ensuite dans WhatsApp." },
  ],

  security:
    "Votre photo est redimensionnée entièrement dans votre navigateur. Les images très lourdes peuvent être traitées sur notre serveur, puis supprimées aussitôt ; rien n'est conservé.",
};

export default content;

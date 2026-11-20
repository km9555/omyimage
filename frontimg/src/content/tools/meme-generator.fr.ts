import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/generateur-de-meme.
 *
 * Primary query « Générateur de mème »; the English loanword « meme generator »
 * (40.5K/mo in France) is typed far more often, so it sits beside it in the
 * metaTitle. Secondary: « créer un mème ». The H1 must differ from the English
 * « Meme Generator ». The default captions (« TEXTE DU HAUT » / « TEXTE DU
 * BAS ») are drawn INTO the exported image, so they are ui keys.
 */
const content: ToolPageContent = {
  toolId: "meme-generator",
  locale: "fr",
  name: "Générateur de mème",
  tagline:
    "Créez des mèmes en ligne : ajoutez les légendes classiques en haut et en bas de n'importe quelle image avec un aperçu en direct, puis exportez en PNG, JPG ou WEBP. Gratuit, rapide et 100 % privé dans votre navigateur.",
  category: { id: "edit", label: "Modifier et créer" },

  metaTitle: "Générateur de mème – Meme generator gratuit | oMyImage",
  metaDescription:
    "Générateur de mème gratuit : créez un mème avec votre propre image, ajoutez du texte en haut et en bas, réglez police et couleurs, téléchargez en PNG ou JPG.",

  intro:
    "Transformez n'importe quelle image en mème en quelques secondes. Le générateur de mème d'oMyImage ajoute les légendes classiques, en capitales grasses avec contour, en haut et en bas de vos propres photos ou modèles, avec un contrôle complet de la police, de la taille et des couleurs, et un aperçu en direct pendant que vous tapez. Les légendes longues passent automatiquement à la ligne. Créez un mème et exportez-le en PNG, JPG ou WEBP, le tout dans votre navigateur, sans rien envoyer en ligne.",

  sections: [
    {
      heading: "Pourquoi les mèmes ont cette allure",
      id: "convention",
      body: [
        "Les grosses capitales blanches cernées de noir relèvent moins d'un choix esthétique que d'un problème technique déjà résolu. Un texte posé sur une photo doit rester lisible quel que soit ce qui se trouve dessous, et aucune couleur n'y parvient seule : le blanc disparaît sur un ciel clair, le noir dans une zone d'ombre.",
        "Le contour règle la question en garantissant un bord de ton opposé partout où tombe la lettre. Impact, ou n'importe quelle linéale grasse et condensée, fait le reste : les lettres sont assez étroites pour qu'une phrase entière tienne dans la largeur de l'image, et assez épaisses pour survivre à une compression agressive.",
        "Le résultat se reconnaît immédiatement, ce qui est utile en soi. Le format annonce la nature de l'image avant même que quiconque ait lu un seul mot.",
      ],
    },
    {
      heading: "Texte du haut, texte du bas : pourquoi ça marche",
      id: "structure",
      body: [
        "La structure en deux lignes, c'est une mise en place et une chute, et elle fonctionne parce que l'œil lit l'image entre les deux. Le texte du haut pose la situation, la photo apporte le contexte et la ligne du bas assène la blague : ce petit délai fait un vrai travail comique.",
        "C'est pour cela que tout entasser sur une seule ligne tombe souvent à plat, et que les textes très longs échouent : arrivé au bout, le lecteur a cessé de regarder l'image. Des lignes courtes, idéalement de moins de huit mots chacune, préservent le rythme.",
        "La mise en page alternative, avec un bandeau blanc au-dessus ou au-dessous de l'image, convient aux légendes plus longues et aux commentaires, et laisse la photo dégagée. Elle se lit davantage comme une légende que comme un mème, et c'est parfois le bon registre.",
      ],
    },
    {
      heading: "Des réglages d'export qui résistent au partage",
      id: "export",
      body: [
        "Environ 800 px de large, c'est le bon compromis en pratique. Les mèmes se regardent sur téléphone et chaque plateforme réencode ce que vous publiez : un export de 4 000 px n'apporte rien, le premier service qui touche l'image le jettera tout simplement.",
        "Ce réencodage mérite d'être compris, car il explique la dégradation typique d'un mème très partagé. Chaque plateforme recompresse l'image, les artefacts s'empilent sur les artefacts et, après assez de partages, l'image est visiblement abîmée. Vous ne pouvez pas l'empêcher, mais partir d'une source propre et d'une taille raisonnable retarde nettement le phénomène.",
        "Exportez en JPG avec une qualité élevée pour les mèmes photographiques, ou en PNG si l'image est un visuel en aplats ou une capture d'écran : les bords du texte restent plus nets.",
      ],
    },
    {
      heading: "Tout reste sur votre appareil",
      id: "privacy",
      body: [
        "L'image est composée sur un canvas dans votre navigateur, rien n'est donc envoyé sur un serveur. C'est bon à savoir, car énormément de mèmes sont faits à partir de contenus privés (la capture d'une conversation de groupe, la photo d'un collègue, un souvenir de l'album de famille) que personne n'a envie de confier à un serveur juste pour ajouter deux lignes de texte.",
        "Cela signifie aussi que l'outil continue de fonctionner hors connexion une fois la page chargée, sans file d'attente, sans limite d'utilisation et sans compte.",
      ],
    },
  ],

  howToTitle: "Comment créer un mème",
  steps: [
    { title: "Importer", description: "Sélectionnez une image ou un modèle de mème, ou glissez-déposez-le dans l'espace de travail." },
    { title: "Ajouter les légendes", description: "Saisissez le texte du haut et celui du bas, puis ajustez la police, la taille, la couleur et le contour avec l'aperçu en direct." },
    { title: "Exporter", description: "Cliquez sur « Exporter le mème » pour télécharger votre mème en PNG, JPG ou WEBP." },
  ],

  features: [
    { icon: "text_fields", title: "Texte de mème classique", description: "Légendes grasses façon Impact avec contour noir, majuscules automatiques et retour à la ligne automatique pour les textes longs." },
    { icon: "palette", title: "Style entièrement réglable", description: "Changez la police, la taille, la couleur du texte ainsi que la couleur et l'épaisseur du contour pour obtenir n'importe quel style de mème." },
    { icon: "lock", title: "Privé et instantané", description: "Votre mème est entièrement généré dans votre navigateur : l'image n'est jamais envoyée nulle part." },
  ],

  faqs: [
    { q: "Puis-je utiliser ma propre image ?", a: "Oui. Importez n'importe quel JPG, PNG, WEBP ou GIF et ajoutez vos légendes : il n'y a pas de catalogue de modèles imposé." },
    { q: "Les textes longs passent-ils à la ligne ?", a: "Oui. Les légendes se répartissent automatiquement sur plusieurs lignes pour toujours tenir dans la largeur de l'image." },
    { q: "Dans quels formats puis-je exporter ?", a: "PNG (sans perte), JPG (plus léger) ou WEBP." },
    { q: "Le générateur de mème est-il gratuit ?", a: "Entièrement gratuit, sans filigrane et sans inscription." },
    { q: "Mes images restent-elles privées ?", a: "Oui. Tout est généré localement dans votre navigateur ; rien n'est envoyé sur un serveur." },
    { q: "Pourquoi le texte des mèmes est-il toujours blanc avec un contour noir ?", a: "Parce que c'est la seule combinaison qui reste lisible sur n'importe quelle image. Le blanc seul disparaît sur un ciel lumineux, le noir seul dans l'ombre. Le contour garantit le contraste avec ce qui se trouve derrière, et c'est pourquoi la convention n'a pas changé depuis vingt ans." },
    { q: "Quelle police choisir ?", a: "Impact est la police classique, et ce n'est pas un hasard : condensée, grasse et lisible même en petite taille, elle permet à une longue ligne de tenir dans la largeur de l'image. N'importe quelle linéale grasse et condensée fait le même travail si Impact n'est pas disponible." },
    { q: "Le texte doit-il aller sur l'image ou au-dessus ?", a: "Sur l'image, c'est le format standard, et il circule mieux, puisque le mème est une seule image dont rien ne peut être détaché. Un texte dans un bandeau au-dessus et au-dessous convient aux légendes plus longues et laisse l'image dégagée, ce qui compte quand c'est l'image elle-même qui porte la blague." },
    { q: "En quelle taille exporter ?", a: "Environ 800 px de large suffisent largement. Les mèmes se regardent sur téléphone et sont recompressés par chaque plateforme qu'ils traversent : un fichier très lourd n'apporte rien et met simplement plus de temps à s'envoyer." },
    { q: "Pourquoi mon mème est-il moins beau une fois publié ?", a: "Parce que les plateformes réencodent chaque image publiée, et que chaque nouveau partage la recompresse encore. Ces dégâts cumulés expliquent l'aspect délavé et pixelisé des mèmes qui ont beaucoup tourné. Partir d'une image propre et de taille raisonnable ralentit la dégradation." },
    { q: "Puis-je utiliser n'importe quelle image ?", a: "Techniquement, oui. Gardez à l'esprit que les photos ont des auteurs, et qu'un mème reprenant la photo ou l'image d'une personne peut soulever des questions de droit d'auteur et de droit à l'image en cas d'usage commercial. Pour un usage personnel ou sur les réseaux sociaux, c'est rarement un problème concret." },
    { q: "Puis-je créer un mème depuis mon téléphone ?", a: "Oui. Le générateur de mème fonctionne dans le navigateur du téléphone : choisissez une image dans votre galerie, saisissez les légendes et téléchargez le mème terminé pour l'envoyer sur WhatsApp ou le publier." },
  ],

  security:
    "Vos images restent privées. Les mèmes sont entièrement générés dans votre navigateur avec un canvas HTML : rien n'est envoyé sur un serveur. Aucun stockage, aucun suivi de vos fichiers.",

  ui: {
    // MemeTool.tsx — default captions, drawn INTO the image
    "TOP TEXT": "TEXTE DU HAUT",
    "BOTTOM TEXT": "TEXTE DU BAS",
    // MemeTool.tsx
    "Couldn't read that image.": "Impossible de lire cette image.",
    "Please select an image file.": "Sélectionnez un fichier image.",
    "Select an image": "Sélectionner une image",
    "Change image": "Changer d'image",
    "Meme exported — download started.": "Mème exporté : le téléchargement a commencé.",
    "Export failed.": "Échec de l'export.",
    "or drop a JPG, PNG, WEBP or GIF here": "ou déposez ici un JPG, PNG, WEBP ou GIF",
    "Meme settings": "Réglages du mème",
    "Meme Settings": "Réglages du mème",
    "Export": "Exporter",
    "Exporting…": "Export en cours…",
    "Long captions wrap automatically. Everything runs in your browser.":
      "Les légendes longues passent automatiquement à la ligne. Tout fonctionne dans votre navigateur.",
    "Export meme": "Exporter le mème",
    "Caption": "Légende",
    "Top text": "Texte du haut",
    "Bottom text": "Texte du bas",
    "Font": "Police",
    "Size": "Taille",
    "UPPERCASE": "MAJUSCULES",
    "Style": "Style", // i18n-same
    "Text color": "Couleur du texte",
    "Outline color": "Couleur du contour",
    "Outline thickness": "Épaisseur du contour",
    "Quality": "Qualité",
    "PNG (lossless)": "PNG (sans perte)",
    "JPG (smaller)": "JPG (plus léger)",
  },
};

export default content;

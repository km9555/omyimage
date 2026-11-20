import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/selecteur-de-couleur.
 *
 * Primary query « Sélecteur de couleur » (9.9K/mo) together with the English
 * loanword « color picker » (22.2K) and « pipette couleur » (3.6K) — all three
 * sit in the metaTitle. Secondary « couleur image ». Colour values
 * (HEX/RGB/HSL) stay as written.
 */
const content: ToolPageContent = {
  toolId: "image-color-picker",
  locale: "fr",
  name: "Sélecteur de couleur et color picker d'image",
  tagline:
    "Prélevez n'importe quelle couleur d'une image en ligne et extrayez sa palette complète au même endroit : obtenez les valeurs HEX, RGB et HSL avec une loupe, copiez-les ou téléchargez la palette sous forme de nuancier. Gratuit, rapide et 100 % privé dans votre navigateur.",
  category: { id: "edit", label: "Modifier et créer" },

  metaTitle: "Sélecteur de couleur – Color picker et pipette | oMyImage",
  metaDescription:
    "Sélecteur de couleur et color picker en ligne : trouvez la couleur d'une image avec la pipette, copiez HEX, RGB et HSL, extrayez la palette. Gratuit et privé.",

  intro:
    "Récupérez la couleur exacte de n'importe quelle image en quelques secondes, puis transformez toute la photo en une palette prête à l'emploi. Le sélecteur de couleur (color picker) d'oMyImage vous permet de survoler l'image avec une loupe et de cliquer pour prélever n'importe quel pixel, comme avec une pipette, puis de copier sa valeur HEX, RGB ou HSL. En parallèle, il extrait les couleurs dominantes de l'image et indique la part de l'image que couvre chacune, pour que vous puissiez copier la palette entière ou télécharger un nuancier légendé. Idéal pour retrouver une couleur de marque, composer une planche d'ambiance ou travailler sur un design web ou produit. Tout fonctionne dans votre navigateur : votre image reste privée.",

  sections: [
    {
      heading: "Prélever une couleur et lire sa valeur",
      id: "sampling",
      body: [
        "Prélever une couleur, c'est lire la valeur d'un seul pixel et l'indiquer dans les notations qu'attendent les différents outils : HEX pour le CSS et les logiciels de design, RGB pour le code, HSL quand vous voulez construire une famille de nuances apparentées en modifiant une seule composante à la fois.",
        "Le HSL mérite d'être plus utilisé qu'il ne l'est. Comme il sépare la teinte de la saturation et de la luminosité, obtenir une version plus claire d'une couleur de marque revient à changer un seul nombre, alors qu'en HEX il faut en deviner trois. Pour générer des états de survol, des variantes désactivées et des teintes à partir d'une couleur de base, c'est de loin le modèle le plus simple.",
        "Une précaution pratique : les photos contiennent du bruit, et ce qui paraît être une zone unie ne l'est pas. Deux pixels voisins prélevés dans le même morceau de ciel donneront deux valeurs légèrement différentes, et aucune des deux n'est fausse.",
      ],
    },
    {
      heading: "Extraire une palette",
      id: "palette",
      body: [
        "Une analyse des couleurs dominantes examine l'image entière plutôt qu'un pixel, regroupe les couleurs proches et retient celles qui couvrent la plus grande surface. Vous obtenez ainsi la palette réellement perçue par celui qui regarde, qui n'est pas toujours celle que vous auriez choisie à l'œil : une couleur peut sembler très présente tout en occupant une toute petite partie de l'image.",
        "Les photos font d'excellentes sources de palettes, car la lumière d'une scène a déjà harmonisé ses couleurs. Des couleurs éclairées par le même soleil, ou la même lampe, partagent une sous-tonalité, et c'est cette dominante commune qui rend une palette cohérente plutôt qu'assemblée de toutes pièces.",
        "L'approche habituelle consiste à prendre la couleur dominante comme base, un neutre clair de l'image pour les fonds et une couleur saturée pour les accents. Trois ou quatre couleurs suffisent largement ; une palette de huit a tendance à perdre son identité.",
      ],
    },
    {
      heading: "Harmonie des couleurs ne veut pas dire accessibilité",
      id: "contrast",
      body: [
        "C'est l'erreur à éviter. Une palette tirée d'une photo est choisie pour la façon dont les couleurs s'accordent entre elles, et cela ne dit rien de la lisibilité d'un texte dans l'une de ces couleurs posé sur une autre.",
        "Les tons moyens sont le piège principal : ils paraissent élégants et échouent souvent aux exigences de contraste dans les deux sens, puisqu'ils ne sont ni assez clairs pour porter un texte foncé, ni assez foncés pour porter un texte clair. Les WCAG demandent un rapport de 4,5:1 pour le texte normal et de 3:1 pour le grand texte, et un joli bleu-gris moyen sur un joli beige moyen peut tomber autour de 2:1.",
        "La méthode qui fonctionne : utiliser la palette prélevée pour les accents, les bordures, les illustrations et les fonds, et garder le texte dans des tons dont vous avez explicitement vérifié le contraste. Harmonie et contraste sont deux problèmes distincts, qui se résolvent séparément.",
      ],
    },
    {
      heading: "Usages courants de la pipette couleur",
      id: "uses",
      body: [
        "Accorder un design à une photo est l'usage le plus fréquent : un site dont la couleur d'accent provient de son image principale paraît réfléchi, ce qu'un bleu pris au hasard ne permet pas. Construire une palette de marque à partir d'une planche d'ambiance fonctionne de la même façon.",
        "Au-delà : retrouver la couleur d'un logo quand personne ne met la main sur la charte graphique, accorder les couleurs des séries d'un graphique à une photo de produit, relever la palette d'un concurrent sur une capture d'écran, ou prélever dans un tableau ou un tissu des couleurs qui fonctionnent déjà ensemble.",
        "Tout est prélevé sur un canvas dans votre navigateur, l'image n'est donc jamais envoyée sur un serveur, ce qui compte quand la source est un travail de design encore confidentiel ou un document client.",
      ],
    },
  ],

  howToTitle: "Comment prélever une couleur et extraire la palette d'une image",
  steps: [
    { title: "Importer", description: "Sélectionnez une image, ou glissez-déposez-la dans l'espace de travail." },
    { title: "Survoler et cliquer pour prélever", description: "Déplacez le curseur sur l'image pour prévisualiser les couleurs avec la loupe, puis cliquez sur un pixel pour fixer sa couleur." },
    { title: "Lire la palette extraite", description: "Les couleurs dominantes de l'image sont extraites automatiquement : utilisez le curseur pour en obtenir de 2 à 16." },
    { title: "Copier ou télécharger", description: "Copiez n'importe quelle valeur HEX, RGB ou HSL d'un simple geste, copiez toute la palette d'un coup ou téléchargez-la sous forme de nuancier PNG." },
  ],

  features: [
    { icon: "colorize", title: "Pipette précise au pixel", description: "Prélevez la couleur exacte de n'importe quel pixel et lisez-la instantanément en HEX, RGB et HSL." },
    { icon: "search", title: "Loupe grossissante", description: "Une loupe suit votre curseur pour que vous visiez exactement le pixel voulu." },
    { icon: "palette", title: "Palette complète", description: "Extrait de 2 à 16 couleurs dominantes avec leur part dans l'image, et conserve les petites couleurs d'accent au lieu de les noyer dans une moyenne." },
    { icon: "lock", title: "100 % privé", description: "La pipette comme la palette fonctionnent entièrement dans votre navigateur avec un canvas HTML : votre image n'est jamais envoyée sur un serveur." },
  ],

  faqs: [
    { q: "Quels formats de couleur puis-je copier ?", a: "HEX, RGB et HSL. Cliquez sur une valeur pour la copier dans le presse-papiers." },
    { q: "Comment les couleurs de la palette sont-elles choisies ?", a: "L'image est échantillonnée en conservant toute la fidélité des couleurs, sans flou ni lissage, puis regroupée en zones de couleur. L'outil génère plus de couleurs candidates que nécessaire et garde celles qui sont à la fois fréquentes et visuellement distinctes : un petit accent vif obtient ainsi sa propre pastille au lieu d'être fondu dans l'arrière-plan." },
    { q: "Combien de couleurs puis-je extraire ?", a: "Entre 2 et 16, réglables avec le curseur. Chaque pastille indique aussi la part de l'image la plus proche de cette couleur." },
    { q: "Puis-je exporter la palette ?", a: "Oui. Copiez les valeurs HEX ou RGB une à une, copiez toute la liste d'un coup ou téléchargez un nuancier PNG légendé." },
    { q: "L'outil garde-t-il un historique des couleurs ?", a: "Oui. Les couleurs prélevées récemment apparaissent sous forme de pastilles sur lesquelles vous pouvez cliquer pour les copier à nouveau." },
    { q: "Quels formats d'image sont pris en charge ?", a: "JPG, PNG, WEBP, GIF et BMP. Pour les images animées, les couleurs proviennent de la première image." },
    { q: "L'outil est-il gratuit et privé ?", a: "Oui. Sans inscription, et l'image est traitée localement dans votre navigateur : rien n'est envoyé sur un serveur." },
    { q: "Quelle différence entre HEX, RGB et HSL ?", a: "Ils décrivent la même couleur de trois façons. Le HEX est la forme compacte à six caractères utilisée en CSS et dans les outils de design. Le RGB donne directement les valeurs des trois canaux, ce qu'attendent le code et les API canvas. Le HSL décompose la couleur en teinte, saturation et luminosité, ce qui est bien plus intuitif pour créer des variantes d'une nuance." },
    { q: "Pourquoi la couleur prélevée est-elle différente dans mon logiciel de design ?", a: "Le plus souvent, à cause d'un profil colorimétrique différent. Une image dotée d'un profil à gamut étendu, comme Display P3, est convertie pour l'affichage, si bien que la valeur prélevée peut différer de celle qu'indique une autre application. Les photos contiennent aussi du bruit : deux pixels voisins dans ce qui semble être une couleur unie sont rarement identiques." },
    { q: "Comment créer une palette à partir d'une photo ?", a: "Prenez la couleur dominante comme base, puis choisissez deux ou trois nuances complémentaires dans différentes zones de l'image : une claire pour les fonds et une saturée pour les accents. Les photos sont une source fiable, car la lumière naturelle harmonise déjà les couleurs d'une scène." },
    { q: "Ces couleurs seront-elles accessibles ?", a: "Pas automatiquement. Une palette prélevée sur une photo est choisie pour son harmonie, pas pour son contraste, et les tons moyens tirés d'une image échouent souvent aux exigences de contraste pour du texte. Vérifiez chaque paire texte/fond selon les WCAG avant de l'utiliser : 4,5:1 pour le texte normal, 3:1 pour le grand texte." },
    { q: "Puis-je retrouver les couleurs d'une marque à partir d'une capture d'écran ?", a: "Oui, c'est un usage courant. Faites une capture d'écran du site ou du logo, puis prélevez-y les couleurs. Sachez qu'une capture d'écran est passée par le rendu de l'écran et par une compression d'image : le résultat est très proche mais pas exact, suffisant pour accorder des couleurs, pas pour une charte de marque officielle." },
  ],

  security:
    "Votre image reste privée. Le prélèvement des couleurs et l'extraction de la palette se font entièrement dans votre navigateur avec un canvas HTML : rien n'est envoyé sur un serveur. Aucun stockage, aucun suivi de vos fichiers.",

  ui: {
    // ImageColorPickerTool.tsx
    "Please select an image file.": "Sélectionnez un fichier image.",
    "Couldn't read that image.": "Impossible de lire cette image.",
    "Select an image": "Sélectionner une image",
    "or drop a JPG, PNG, WEBP or GIF here": "ou déposez ici un JPG, PNG, WEBP ou GIF",
    "Change image": "Changer d'image",
    "Clear image": "Retirer l'image",
    "Click anywhere on": "Cliquez n'importe où sur",
    "to pick a color.": "pour prélever une couleur.",
    "Click the image — or any palette swatch below — to sample a color.":
      "Cliquez sur l'image, ou sur une pastille de la palette ci-dessous, pour prélever une couleur.",
    "Picked color": "Couleur prélevée",
    "Copy {value}": "Copier {value}",
    "Copied {value}": "{value} copié",
    "Copy failed.": "Échec de la copie.",
    "Copy all": "Tout copier",
    "Recent": "Récentes",
    "Palette": "Palette", // i18n-same
    "Palette options": "Options de la palette",
    "Colors": "Couleurs",
    "Number of palette colors": "Nombre de couleurs de la palette",
    "Pick {value}": "Choisir {value}",
    "{share} of pixels are closest to this color": "{share} des pixels sont les plus proches de cette couleur",
    "Download palette (PNG)": "Télécharger la palette (PNG)",
    "This image is fully transparent — there are no colors to extract.":
      "Cette image est entièrement transparente : il n'y a aucune couleur à extraire.",
    "This image only has 1 visually distinct color — showing it rather than repeating near-identical shades.":
      "Cette image ne contient qu'une couleur visuellement distincte : elle est affichée seule plutôt que de répéter des nuances presque identiques.",
    "This image only has {n} visually distinct colors — showing all of them rather than repeating near-identical shades.":
      "Cette image ne contient que {n} couleurs visuellement distinctes : elles sont toutes affichées plutôt que de répéter des nuances presque identiques.",
    "Tip:": "Astuce :",
    "hover to preview with the magnifier and click to lock a color, or tap a palette swatch to load it. Copy buttons put the value straight on your clipboard, and everything runs in your browser.":
      "survolez l'image pour prévisualiser avec la loupe et cliquez pour fixer une couleur, ou touchez une pastille de la palette pour la charger. Les boutons de copie placent la valeur directement dans le presse-papiers, et tout fonctionne dans votre navigateur.",
  },
};

export default content;

import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/decouper-image (parent of instagram-grid-maker).
 *
 * Primary query « Découper une image » (2.4K/mo); secondary « diviser une
 * image », « couper une image en plusieurs parties ». The piece file names
 * (_r1_c1) come from the code, only the example stem is localised. The ui
 * block also carries the Instagram-mode labels, which instagram-grid-maker
 * reuses.
 */
const content: ToolPageContent = {
  toolId: "split-image",
  locale: "fr",
  name: "Découper une image",
  tagline:
    "Coupez n'importe quelle image en parts égales (deux moitiés, trois bandes, une grille de 3 × 3) ou en tuiles d'une taille exacte en pixels. Tous les morceaux arrivent dans un seul ZIP, nommés dans l'ordre. Gratuit, dans votre navigateur.",
  category: { id: "edit", label: "Modifier et créer" },
  variantsHeading: "Découper une image ou créer une grille Instagram",

  metaTitle: "Découper une image – diviser une image en ligne | oMyImage",
  metaDescription:
    "Découper une image en ligne : divisez une image en parts égales, en deux, en grille de 3 × 3 ou en tuiles en pixels, le tout dans un ZIP. Gratuit, sans envoi.",

  intro:
    "Découper une image, c'est la couper en images plus petites qui se raccordent parfaitement. L'outil Découper une image d'oMyImage le fait de deux façons : en grille égale, où vous choisissez le nombre de colonnes et de lignes, ou en tuiles de taille fixe, où vous choisissez la largeur et la hauteur de chaque morceau en pixels. Des lignes sur l'aperçu montrent exactement où tombent les coupes, chaque morceau est numéroté et l'ensemble se télécharge dans un seul ZIP ; vous pouvez aussi cliquer sur un morceau pour n'enregistrer que celui-là. Pour diviser une image en plusieurs parties ou tout un lot, ajoutez plusieurs images : chacune est découpée de la même façon.",

  sections: [
    {
      heading: "Grille égale ou taille de tuile",
      id: "modes",
      body: [
        "« Grille égale » divise l'image en autant de morceaux que vous le demandez : 2 colonnes et 1 ligne donnent une moitié gauche et une moitié droite, 1 colonne et 3 lignes donnent trois bandes horizontales, 3 × 3 donne neuf morceaux. Les morceaux sont aussi égaux que les pixels le permettent : quand la largeur ne se divise pas exactement, certains morceaux font un pixel de plus, jamais une fine lamelle à la fin.",
        "« Taille de tuile » fonctionne à l'inverse : vous fixez la taille de chaque morceau, par exemple 512 × 512 px, et l'image est découpée à partir du coin supérieur gauche en autant de tuiles qu'elle peut en contenir. La dernière ligne et la dernière colonne prennent ce qui reste, et peuvent donc être plus petites. C'est le mode des cartes de jeux vidéo, des planches de textures et de tout ce qui attend des tuiles de taille fixe.",
      ],
    },
    {
      heading: "Les façons courantes de diviser une image",
      id: "layouts",
      body: [
        "Deux moitiés côte à côte (2 × 1) séparent un scan de double page ou une photo avant/après. Deux moitiés haut et bas (1 × 2) coupent une longue capture d'écran de téléphone. Trois bandes verticales (3 × 1) forment un triptyque pour trois cadres au mur. Une grille de 3 × 3 ou 4 × 4 transforme une photo en puzzle, en poster à imprimer ou en jeu de tuiles pour une mosaïque.",
        "Les boutons rapides au-dessus des curseurs règlent ces découpes d'un seul geste ; les curseurs vont jusqu'à 20 colonnes et 20 lignes.",
      ],
    },
    {
      heading: "Imprimer un grand poster sur du papier ordinaire",
      id: "poster",
      body: [
        "Une imprimante domestique ne sait pas imprimer un poster d'un mètre de large, mais elle peut en imprimer quatre ou neuf morceaux. Découpez l'image en une grille adaptée à la forme de votre papier (2 × 2 ou 3 × 3 pour un poster de la même forme que la photo), puis imprimez chaque morceau à la même taille, sans mise à l'échelle automatique, coupez les marges blanches et assemblez les feuilles avec du ruban adhésif par l'arrière.",
        "Partez de l'original le plus grand dont vous disposez. Chaque morceau est imprimé bien plus grand qu'à l'écran, et une petite photo devient floue ; une photo de 6 000 px de large découpée en 3 colonnes donne encore 2 000 px par feuille, ce qui s'imprime nettement en A4.",
      ],
    },
    {
      heading: "Des tuiles pour les jeux, les cartes et le web",
      id: "tiles",
      body: [
        "Les moteurs de jeu, les visionneuses de cartes et certains sites chargent les grandes images sous forme de grille de tuiles, pour ne récupérer que la partie visible. Choisissez « Taille de tuile » et indiquez la taille attendue par le programme (256 ou 512 px sont courants) : les fichiers sortent nommés par ligne et par colonne, prêts à être chargés en boucle.",
        "Le mode tuile est aussi le moyen le plus rapide de découper une très longue capture d'écran ou une infographie en pages : réglez la largeur de la tuile sur toute la largeur de l'image et la hauteur sur un écran.",
      ],
    },
    {
      heading: "Des morceaux qui se raccordent exactement",
      id: "exact",
      body: [
        "Chaque morceau est une copie directe de sa partie de l'original : rien n'est redimensionné, rien ne se chevauche et aucun pixel n'est perdu entre deux voisins, si bien que les morceaux se raccordent sans espace. Enregistrés en PNG, ils sont identiques à l'original au pixel près ; les morceaux JPG et WEBP sont recompressés à la qualité choisie, ce qui est généralement invisible mais peut laisser apparaître de légères jointures sur les aplats de couleur. Choisissez le PNG si les morceaux doivent être réassemblés.",
      ],
    },
    {
      heading: "Fichiers, noms et formats",
      id: "names",
      body: [
        "Les morceaux portent le nom de l'image suivi de leur ligne et de leur colonne (vacances_r1_c1.jpg, vacances_r1_c2.jpg, etc.), complétés par des zéros quand il y en a dix ou plus, pour être triés dans le bon ordre dans n'importe quel dossier. Quand vous découpez plusieurs images à la fois, les morceaux de chaque image vont dans leur propre dossier à l'intérieur du ZIP.",
        "Les morceaux conservent le format d'origine, sauf si vous en choisissez un autre. Le PNG et le WEBP conservent la transparence ; le JPG remplit les zones transparentes avec la couleur de fond choisie.",
      ],
    },
    {
      heading: "Découper une photo pour Instagram",
      id: "instagram",
      body: [
        "Une grille de profil Instagram et un panorama à faire défiler demandent plus qu'un simple découpage : la photo doit être recadrée à la bonne forme, chaque morceau dimensionné pour Instagram, et les publications envoyées dans l'ordre inverse. L'outil « Grille Instagram » fait tout cela : utilisez-le à la place de cette page pour une grille de trois de large ou un carrousel.",
      ],
    },
    {
      heading: "Découper des BD, des menus et des documents",
      id: "documents",
      body: [
        "Une planche de bande dessinée numérisée se découpe en cases avec une grille de la même forme, prêtes à être publiées une par une. Un long menu de restaurant ou un dépliant photographié en une seule fois peut être coupé en pages distinctes pour un site web. Pour les scans de livres en double page, 2 × 1 donne les pages de gauche et de droite en images séparées, que vous pouvez ensuite envoyer dans l'outil « Image en PDF ».",
      ],
    },
    {
      heading: "Confidentialité",
      id: "privacy",
      body: [
        "Chaque image est découpée entièrement dans votre navigateur. Rien n'est envoyé sur un serveur, et rien n'est conservé après la fermeture de la page.",
      ],
    },
  ],

  howToTitle: "Comment découper une image",
  steps: [
    { title: "Ajouter votre image", description: "Choisissez une ou plusieurs images JPG, PNG ou WEBP." },
    { title: "Choisir les coupes", description: "Choisissez une grille comme 2 × 1 ou 3 × 3, ou indiquez une taille de tuile exacte en pixels." },
    { title: "Découper et télécharger", description: "Cliquez sur « Découper l'image » pour obtenir tous les morceaux dans un seul ZIP, ou cliquez sur un morceau pour l'enregistrer seul." },
  ],

  features: [
    { icon: "view_column", title: "Grille ou taille de tuile", description: "Jusqu'à 20 × 20 morceaux égaux, ou des tuiles de n'importe quelle taille en pixels." },
    { icon: "folder_zip", title: "Tous les morceaux dans un ZIP", description: "Nommés par ligne et par colonne, pour rester dans l'ordre." },
    { icon: "lock", title: "Aucun envoi", description: "Découpage entièrement dans votre navigateur." },
  ],

  faqs: [
    { q: "Comment découper une image en parts égales ?", a: "Ajoutez l'image, choisissez le nombre de colonnes et de lignes, puis cliquez sur « Découper l'image ». Les morceaux se téléchargent ensemble dans un ZIP." },
    { q: "Comment couper une image en deux ?", a: "Choisissez 2 × 1 pour une moitié gauche et une moitié droite, ou 1 × 2 pour une moitié haute et une moitié basse." },
    { q: "Puis-je diviser une image en grille de 3 × 3 ?", a: "Oui. Touchez 3 × 3, ou réglez les deux curseurs sur 3 : vous obtenez neuf morceaux numérotés à partir du coin supérieur gauche." },
    { q: "Puis-je découper des tuiles d'une taille exacte ?", a: "Oui. Choisissez « Taille de tuile » et saisissez la largeur et la hauteur en pixels. La dernière ligne et la dernière colonne sont plus petites si la taille ne se divise pas exactement." },
    { q: "Les morceaux perdent-ils en qualité ?", a: "Aucun redimensionnement n'a lieu. En PNG, ils sont identiques à l'original ; en JPG et en WEBP, ils sont réenregistrés à la qualité choisie." },
    { q: "Puis-je télécharger un seul morceau ?", a: "Oui. Après le découpage, cliquez sur n'importe quel morceau sous l'aperçu pour l'enregistrer seul." },
    { q: "Puis-je découper plusieurs images à la fois ?", a: "Oui. Chaque image est découpée de la même façon et dispose de son propre dossier dans le ZIP." },
    { q: "Comment les fichiers sont-ils nommés ?", a: "Par ligne et par colonne, comme photo_r2_c3.png, pour être triés dans l'ordre." },
    { q: "La transparence est-elle conservée ?", a: "Oui, en PNG ou en WEBP. Le JPG remplit les zones transparentes avec une couleur." },
    { q: "Combien de morceaux puis-je créer ?", a: "Jusqu'à 20 × 20 en grille, et jusqu'à 400 morceaux par image en mode tuile." },
    { q: "Comment découper une photo pour une grille Instagram ?", a: "Utilisez l'outil « Grille Instagram » : il recadre à la bonne forme, dimensionne les publications et les numérote dans l'ordre de publication." },
    { q: "Mes images sont-elles envoyées sur un serveur ?", a: "Non. Tout se passe dans votre navigateur." },
    { q: "Cela fonctionne-t-il sur téléphone ?", a: "Oui, dans n'importe quel navigateur mobile. Les morceaux se téléchargent dans un ZIP que votre téléphone sait ouvrir." },
    { q: "Est-ce gratuit ?", a: "Oui. Sans compte, sans filigrane et sans limite." },
  ],

  security:
    "Vos images sont découpées entièrement dans votre navigateur. Rien n'est envoyé, stocké ni suivi.",

  ui: {
    // SplitImageTool.tsx — files
    "Please select image files.": "Sélectionnez des fichiers image.",
    "or drop JPG, PNG or WEBP images here": "ou déposez ici des images JPG, PNG ou WEBP",
    "or drop a JPG, PNG or WEBP image here": "ou déposez ici une image JPG, PNG ou WEBP",
    "Clear files": "Effacer les fichiers",
    "Remove": "Retirer",
    // settings
    "Settings": "Réglages",
    "Split by": "Découper par",
    "Equal grid": "Grille égale",
    "Tile size": "Taille de tuile",
    "Columns": "Colonnes",
    "Rows": "Lignes",
    "Tile width (px)": "Largeur de la tuile (px)",
    "Tile height (px)": "Hauteur de la tuile (px)",
    "Each piece:": "Chaque morceau :",
    "Each one:": "Chacune :",
    "Pieces": "Morceaux",
    "1 piece": "1 morceau",
    "{n} pieces": "{n} morceaux",
    "The size does not divide evenly, so some pieces are 1 px wider or taller.":
      "La taille ne se divise pas exactement : certains morceaux font 1 px de plus en largeur ou en hauteur.",
    "The last row and column are smaller — they take what is left.":
      "La dernière ligne et la dernière colonne sont plus petites : elles prennent ce qui reste.",
    "Too many pieces — use bigger tiles (up to 400 pieces per image).":
      "Trop de morceaux : utilisez des tuiles plus grandes (jusqu'à 400 morceaux par image).",
    "For the first image — every image is split the same way.":
      "Pour la première image : toutes les images sont découpées de la même façon.",
    // Instagram mode
    "Layout": "Disposition",
    "Profile grid": "Grille du profil",
    "Three posts per row, like your profile.": "Trois publications par ligne, comme sur votre profil.",
    "Carousel": "Carrousel",
    "Post shape": "Format des publications",
    "Matches the profile grid exactly.": "Correspond exactement à la grille du profil.",
    "The classic tall post. The grid trims a sliver off each side.":
      "La publication verticale classique. La grille rogne une fine bande de chaque côté.",
    "Square posts. The grid trims their sides.": "Publications carrées. La grille rogne leurs côtés.",
    "Tall slides that fill the most screen.": "Diapositives verticales qui occupent le plus d'écran.",
    "Square slides.": "Diapositives carrées.",
    "Slides": "Diapositives",
    "{n} posts": "{n} publications",
    "{n} slides": "{n} diapositives",
    "Drag the picture to choose what goes into the posts.":
      "Faites glisser l'image pour choisir ce qui entre dans les publications.",
    "Horizontal position": "Position horizontale",
    "Vertical position": "Position verticale",
    "Your picture is narrower than Instagram's 1080 px per post, so the pieces keep its own resolution.":
      "Votre image est plus étroite que les 1080 px par publication d'Instagram : les morceaux conservent donc sa propre résolution.",
    "Post them in number order: 1 first, the top-left piece last.":
      "Publiez-les dans l'ordre des numéros : le 1 en premier, le morceau en haut à gauche en dernier.",
    "Add the slides to one post in number order, 1 first.":
      "Ajoutez les diapositives à une seule publication dans l'ordre des numéros, en commençant par le 1.",
    "Make the grid": "Créer la grille",
    "Make the carousel": "Créer le carrousel",
    // preview / output
    "Preview": "Aperçu",
    "The lines show where the image will be cut.": "Les lignes indiquent où l'image sera coupée.",
    "Click a piece to download just that one.": "Cliquez sur un morceau pour ne télécharger que celui-là.",
    "Output format": "Format de sortie",
    "Same as original": "Identique à l'original",
    "Quality": "Qualité",
    "JPG background": "Fond du JPG",
    "Split image": "Découper l'image",
    "Working…": "Traitement…",
    "Done — 1 image saved.": "Terminé : 1 image enregistrée.",
    "Done — {n} pieces saved.": "Terminé : {n} morceaux enregistrés.",
    "Processing failed.": "Échec du traitement.",
    "Download": "Télécharger",
    "Download all (ZIP)": "Tout télécharger (ZIP)",
    "Your images are processed in your browser and never uploaded.":
      "Vos images sont traitées dans votre navigateur et ne sont jamais envoyées sur un serveur.",
  },
};

export default content;

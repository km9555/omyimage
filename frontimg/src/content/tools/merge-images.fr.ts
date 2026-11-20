import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/fusionner-images. Structure lives in ToolPageShell.
 *
 * Target query "fusionner des images". "Montage photo" (14.8K) is a bigger but
 * broader query — used in the metaTitle, intro, a section and an FAQ without
 * pretending this is a template collage maker. "Assembler des photos" and
 * "collage photo" live in the intro, a heading and the FAQs. Addressed in
 * "vous".
 *
 * LAYOUTS, CELL_FITS and ASPECT_PRESETS hints are module scope; their keys are
 * maintained here by hand (§4.2).
 */
const content: ToolPageContent = {
  toolId: "merge-images",
  locale: "fr",
  name: "Fusionner des images",
  tagline:
    "Réunissez plusieurs images en une seule en ligne : côte à côte, empilées ou en grille, avec espacement, fond et ordre au choix. Gratuit, rapide et 100 % privé dans votre navigateur.",
  category: { id: "edit", label: "Modifier et créer" },

  metaTitle: "Fusionner des images – montage et collage photo | oMyImage",
  metaDescription:
    "Fusionner des images en ligne : assemblez vos photos côte à côte, empilées ou en grille et créez un montage photo simple. Gratuit, sans inscription ni envoi.",

  intro:
    "Réunissez plusieurs photos en une seule image en quelques secondes. L'outil « Fusionner des images » d'oMyImage place vos images côte à côte, les unes sous les autres ou en grille, directement dans votre navigateur, et vous gardez la main sur l'ordre, l'espacement et le fond. Vous pouvez ainsi assembler des photos pour un avant/après, combiner des images dans une planche de comparaison ou réaliser un montage photo ou un collage simple, puis le télécharger immédiatement. Rien n'est envoyé sur un serveur : vos images restent privées, sans inscription ni filigrane.",

  sections: [
    {
      heading: "Une seule image au lieu de plusieurs",
      id: "why",
      body: [
        "Énormément d'endroits n'acceptent qu'une seule image. Annonces sur les places de marché, messages de forum, formulaires d'avis, outils de suivi de bugs, messageries et la plupart des réseaux sociaux proposent un emplacement et non une galerie. L'astuce habituelle, publier plusieurs images à la suite, oblige le lecteur à se souvenir de la première pendant qu'il regarde la troisième.",
        "Fusionner des images règle le problème en plaçant la comparaison dans un seul cadre. Un avant/après s'affiche côte à côte, là où la différence saute aux yeux ; trois angles d'un produit arrivent ensemble ; une série de captures d'écran se lit comme une seule histoire. Plus besoin de cliquer de l'une à l'autre.",
        "C'est aussi le moyen le plus simple de rendre une comparaison honnête. Deux images montrées ensemble, à la même échelle, sont bien plus difficiles à présenter de façon trompeuse que deux images montrées l'une après l'autre.",
      ],
    },
    {
      heading: "Assembler des photos : côte à côte ou les unes sous les autres ?",
      id: "direction",
      body: [
        "La fusion horizontale place les images côte à côte, le choix naturel pour comparer. L'œil passe facilement de l'une à l'autre et les deux moitiés se lisent comme une paire. C'est la disposition standard des retouches avant/après, des variantes de produit et de toute comparaison A contre B.",
        "La fusion verticale empile les images vers le bas. Elle convient aux séquences et aux instructions, où l'ordre compte et où le haut vers le bas suggère une progression. C'est aussi le meilleur choix pour tout ce qui sera vu sur un téléphone : une image haute remplit un écran en mode portrait, alors qu'une image large est réduite jusqu'à ce que les détails disparaissent.",
        "En cas de doute, demandez-vous ce que le lecteur doit faire. Comparer ? Horizontal. Suivre des étapes ? Vertical.",
      ],
    },
    {
      heading: "Tailles, espacements et alignement",
      id: "layout",
      body: [
        "Les images de dimensions différentes sont alignées sur le bord de jonction, et l'espace restant est rempli avec votre couleur de fond. C'est un réglage par défaut raisonnable, mais le résultat est nettement plus soigné quand les images partagent une dimension : la même largeur pour une pile verticale, la même hauteur pour une bande horizontale. Les passer d'abord dans l'outil « Redimensionner une image » prend un instant et améliore beaucoup le résultat.",
        "Ajouter un espace entre les images vaut le coup la plupart du temps. Sans lui, deux photos aux bords similaires peuvent sembler former une seule scène continue, ce qui est au mieux déroutant et au pire trompeur dans un avant/après. Dix à vingt pixels suffisent généralement à marquer la séparation sans donner un air de collage.",
        "La couleur de fond remplit à la fois les espaces et la place restante. Le blanc convient dans la plupart des cas ; derrière des photos, un gris moyen rend souvent mieux, et la couleur de votre marque fonctionne bien pour tout ce qui sera publié.",
      ],
    },
    {
      heading: "La fusion se fait sans perte",
      id: "quality",
      body: [
        "Dans les dispositions automatiques, avec « Taille des images » laissé sur « Original », les images sont dessinées à leurs dimensions natives en pixels. Aucun rééchantillonnage, aucun adoucissement : le résultat fusionné est exactement aussi net que les images de départ. C'est le mode à utiliser pour assembler des captures d'écran, où un demi-pixel de flou sur du texte se voit tout de suite.",
        "C'est la mise à l'échelle qui coûte en qualité. Redimensionner une image sur le canevas « Personnalisé », ou choisir « Égaliser » ou « Remplir » pour que toutes partagent la même taille, rééchantillonne cette image : c'est inévitable, et pas pire que n'importe quel autre redimensionnement, mais bon à savoir quand l'alternative ne coûtait rien.",
        "La seule autre question de qualité est le format d'export. Choisissez PNG ou WEBP pour tout conserver à l'identique, ou JPG si le résultat est une photo et que vous voulez un fichier plus léger. Si l'image fusionnée contient des captures d'écran ou du texte, le PNG est clairement le meilleur choix : les artefacts du JPG se concentrent justement sur les contours nets qui forment les lettres.",
      ],
    },
  ],

  howToTitle: "Comment fusionner des images en une seule",
  steps: [
    { title: "Importez vos images", description: "Sélectionnez deux images ou plus, ou glissez-déposez-les dans l'espace de travail." },
    { title: "Organisez et mettez en forme", description: "Choisissez côte à côte, empilées ou en grille, faites glisser les miniatures pour les réordonner, puis réglez l'espacement et le fond. « Personnalisé » vous permet de déplacer, faire pivoter et redimensionner chaque image à la main." },
    { title: "Fusionnez et téléchargez", description: "Cliquez sur « Fusionner » : l'image combinée se télécharge instantanément en PNG, JPG ou WEBP." },
  ],

  features: [
    { icon: "grid_view", title: "Quatre dispositions", description: "Combinez vos photos côte à côte, empilées verticalement, en grille, ou disposez-les librement sur un canevas personnalisé." },
    { icon: "open_with", title: "Aperçu modifiable", description: "En mode « Personnalisé », l'aperçu est l'éditeur : faites glisser une image pour la déplacer, tirez un coin pour la redimensionner et utilisez la poignée du haut pour la faire pivoter, avec des bords qui s'alignent automatiquement." },
    { icon: "lock", title: "100 % privé", description: "La fusion s'effectue entièrement dans votre navigateur avec HTML canvas : vos images ne sont jamais envoyées." },
  ],

  faqs: [
    { q: "Comment mettre deux photos côte à côte ?", a: "Ajoutez les deux images, laissez la disposition sur « Côte à côte » et cliquez sur « Fusionner ». Elles sont jointes par leur bord commun en pleine résolution, avec un espace facultatif entre elles, et le résultat se télécharge en un seul fichier PNG, JPG ou WEBP. Passez « Taille des images » sur « Égaliser » si vous voulez qu'elles aient la même hauteur." },
    { q: "Est-ce la même chose qu'une appli pour assembler des photos ?", a: "Oui : « assembler des photos », « combiner des images » ou « fusionner des photos » désignent la même tâche. La différence, c'est qu'ici il n'y a rien à installer : l'outil fonctionne dans n'importe quel navigateur de téléphone, de tablette ou d'ordinateur, sans inscription et sans filigrane sur le résultat." },
    { q: "Puis-je fusionner des images sur mon téléphone ?", a: "Oui. Ouvrez cette page dans Safari ou Chrome sur iPhone ou Android, touchez pour choisir des photos dans votre galerie, choisissez une disposition et fusionnez. Sur téléphone, l'empilement vertical fonctionne généralement mieux, car une image haute remplit un écran en mode portrait." },
    { q: "Combien d'images puis-je fusionner ?", a: "Autant que vous voulez : ajoutez-en deux ou plus et disposez-les côte à côte, les unes sous les autres ou en grille." },
    { q: "Puis-je changer l'ordre des images ?", a: "Oui. Faites glisser une miniature vers une nouvelle position dans la liste, ou utilisez les flèches haut et bas si vous préférez : les deux définissent l'ordre dans lequel les images sont combinées. En mode « Personnalisé », l'ordre décide aussi quelle image passe au-dessus en cas de chevauchement, et les boutons « Avancer » et « Reculer » permettent de le modifier." },
    { q: "Puis-je garder un fond transparent ?", a: "Oui. Choisissez un fond transparent et exportez en PNG ou en WEBP pour que les espaces restent transparents." },
    { q: "Est-ce gratuit et confidentiel ?", a: "Oui. Sans inscription ni filigrane, et chaque image est traitée localement dans votre navigateur." },
    { q: "Que se passe-t-il si mes images n'ont pas la même taille ?", a: "Par défaut, elles gardent leurs propres dimensions, sont alignées sur le bord de jonction, et l'espace restant prend la couleur de fond choisie. Si vous préférez qu'elles correspondent, passez « Taille des images » sur « Égaliser » : chaque image prend alors la même hauteur dans une rangée ou la même largeur dans une colonne. « Remplir » va plus loin et les recadre toutes en vignettes identiques." },
    { q: "Vaut-il mieux fusionner à l'horizontale ou à la verticale ?", a: "À l'horizontale pour les paires avant/après et les comparaisons directes, car l'œil compare plus facilement de gauche à droite que de haut en bas. À la verticale pour les séquences, les instructions pas à pas et tout ce qui sera lu sur un téléphone, où une image haute exploite mieux l'écran qu'une image large." },
    { q: "Puis-je ajouter de l'espace entre les images ?", a: "Oui : un espace de la couleur de fond choisie. Un petit écart de dix ou vingt pixels montre clairement qu'il s'agit d'images distinctes et non d'une seule scène continue, ce qui compte dans les comparaisons où une jonction invisible serait trompeuse." },
    { q: "À quoi cela sert-il ?", a: "Aux retouches avant/après, aux photos produit sous plusieurs angles réunies dans une seule image d'annonce, aux tutoriels pas à pas, aux séquences de captures d'écran pour des rapports de bug ou de la documentation, aux planches contact et aux publications sur les réseaux sociaux qui n'autorisent qu'une image alors que vous avez trois choses à montrer." },
    { q: "Puis-je faire un montage photo ou un collage ?", a: "Oui, un montage simple : la disposition en grille place plusieurs photos en rangées et en colonnes avec un espacement régulier, et le mode « Personnalisé » vous permet de placer librement les images, de les faire pivoter et de les superposer. L'outil ne propose pas de modèles avec stickers ou cadres décoratifs : il se concentre sur des assemblages nets et rapides." },
    { q: "La fusion réduit-elle la qualité ?", a: "Pas dans les dispositions automatiques avec « Taille des images » sur « Original » : les images y sont dessinées à leurs dimensions natives en pixels, sans aucun rééchantillonnage. Redimensionner une image en mode « Personnalisé », ou utiliser « Égaliser » ou « Remplir », la remet à l'échelle, ce qui est le petit coût habituel d'un changement de taille. Exporter en JPG coûte un peu plus ; le PNG et le WEBP conservent exactement ce que vous leur donnez." },
    { q: "Y a-t-il une limite pratique au nombre d'images à fusionner ?", a: "Il n'y a pas de plafond fixe, mais une bande très longue devient difficile à regarder : la plupart des plateformes réduisent une image large pour la faire tenir, si bien qu'une fusion horizontale de dix images peut finir trop petite pour être lisible. Deux à quatre images, c'est l'idéal en pratique." },
  ],

  security:
    "Vos images restent privées. La fusion s'effectue entièrement dans votre navigateur avec HTML canvas : rien n'est envoyé sur un serveur. Aucun stockage, aucun suivi de vos fichiers.",

  ui: {
    // MergeTool.tsx — module-scope LAYOUTS
    "Side by side": "Côte à côte",
    "Stacked": "Empilées",
    "Grid": "Grille",
    "Custom": "Personnalisé",
    "One row, left to right": "Une rangée, de gauche à droite",
    "One column, top to bottom": "Une colonne, de haut en bas",
    "Rows and columns": "Rangées et colonnes",
    "Move, rotate and resize by hand": "Déplacer, faire pivoter et redimensionner à la main",
    // lib/image/merge CELL_FITS
    "Original": "Original", // i18n-same
    "Match": "Égaliser",
    "Fill": "Remplir",
    "Native size, nothing resampled": "Taille native, aucun rééchantillonnage",
    "Equal heights in a row, equal widths in a column": "Même hauteur dans une rangée, même largeur dans une colonne",
    "Identical tiles, overflow cropped": "Vignettes identiques, le surplus est rogné",
    // lib/image/frame ASPECT_PRESETS hints (ratios pass through)
    "Auto": "Automatique",
    "Instagram": "Instagram", // i18n-same
    "Portrait": "Portrait", // i18n-same
    "Widescreen": "Panoramique",
    "Story": "Story", // i18n-same — used as-is in French social UIs
    "Classic": "Classique",
    "DSLR": "Reflex",
    "Print": "Impression",
    // MergeTool.tsx
    "Please select image files.": "Veuillez sélectionner des fichiers image.",
    "Images are still loading — try again in a moment.": "Les images sont encore en cours de chargement : réessayez dans un instant.",
    "Merged 1 image.": "1 image fusionnée.",
    "Merged {n} images.": "{n} images fusionnées.",
    "Merge failed.": "La fusion a échoué.",
    "or drop two or more JPG, PNG or WEBP images here": "ou déposez ici deux images JPG, PNG ou WEBP ou plus",
    "Drag to move, corners to resize, the top handle to rotate. Shift snaps the angle, Alt turns off snapping.":
      "Faites glisser pour déplacer, utilisez les coins pour redimensionner et la poignée du haut pour faire pivoter. Maj fait pivoter par paliers ; Alt désactive l'alignement automatique.",
    "Live preview of the merged image.": "Aperçu en direct de l'image fusionnée.",
    "Clear images": "Retirer les images",
    "Files": "Fichiers",
    "Merge settings": "Réglages de la fusion",
    "Merge Settings": "Réglages de la fusion",
    "Merge": "Fusionner",
    "Merging…": "Fusion…",
    "Images keep their stacking order — use the layer arrows to change which sits on top.":
      "Les images conservent leur ordre d'empilement : utilisez les flèches de calque pour choisir celle qui passe au-dessus.",
    "Drag a thumbnail to reorder. A transparent PNG background keeps the gaps see-through.":
      "Faites glisser une miniature pour réordonner. Un fond PNG transparent laisse les espaces transparents.",
    "Merge & download": "Fusionner et télécharger",
    "Layout": "Disposition",
    "Canvas": "Canevas",
    "Fit to content": "Ajuster au contenu",
    "Re-arrange": "Réorganiser",
    "Selected image": "Image sélectionnée",
    "Click an image on the canvas to select it. Drag to move, use the corner handles to resize, and the handle above the top edge to rotate. Arrow keys nudge, Shift makes them move further.":
      "Cliquez sur une image du canevas pour la sélectionner. Faites-la glisser pour la déplacer, utilisez les poignées des coins pour la redimensionner et la poignée au-dessus du bord supérieur pour la faire pivoter. Les flèches du clavier la déplacent légèrement ; avec Maj, davantage.",
    "Bring forward": "Avancer",
    "Send back": "Reculer",
    "Nothing selected — click an image on the canvas.": "Rien n'est sélectionné : cliquez sur une image du canevas.",
    "Columns": "Colonnes",
    "Auto squares the grid off for you.": "« Automatique » rend la grille aussi carrée que possible.",
    "Image sizes": "Taille des images",
    "Spacing": "Espacement",
    "Output format": "Format de sortie",
  },
};

export default content;

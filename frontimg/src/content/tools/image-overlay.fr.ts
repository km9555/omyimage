import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/superposer-images.
 *
 * Primary query « Superposer des images »; secondary « mettre une image sur
 * une autre », « incruster une image dans une autre ». Blend-mode names follow
 * the French Photoshop labels (Produit, Écran, Incrustation, Lumière tamisée,
 * Obscurcir, Éclaircir, Différence) so they match what French-speaking users
 * already know; the GIMP equivalents are named once in the body.
 */
const content: ToolPageContent = {
  toolId: "image-overlay",
  locale: "fr",
  name: "Superposer des images",
  tagline:
    "Mettez une image sur une autre : faites-la glisser à sa place, redimensionnez-la et faites-la pivoter, atténuez-la avec l'opacité et fondez-la avec des modes de fusion comme Produit et Écran. Gratuit, dans votre navigateur.",
  category: { id: "edit", label: "Modifier et créer" },

  metaTitle: "Superposer des images – une photo sur une autre | oMyImage",
  metaDescription:
    "Superposer des images en ligne : mettez une image sur une autre, ajoutez un logo, une texture ou une double exposition, opacité et 8 modes de fusion. Gratuit.",

  intro:
    "Superposer des images, c'est poser une image sur une autre pour créer ce qu'aucune des deux ne pourrait produire seule : un logo sur une photo de produit, une texture sur un portrait, une fuite de lumière sur un paysage, une seconde photo fondue dans la première pour une double exposition. L'outil Superposer des images d'oMyImage vous donne les deux calques et les réglages qui comptent (position, taille, rotation, opacité et huit modes de fusion) avec un aperçu en direct sur lequel vous pouvez faire glisser l'image du dessus. Pour mettre une image sur une autre ou incruster une petite image dans une grande, quelques secondes suffisent. Le résultat est enregistré à la taille complète de l'image d'arrière-plan.",

  sections: [
    {
      heading: "Placer librement ou tout couvrir",
      id: "fit",
      body: [
        "« Placer librement » pose l'image du dessus là où vous la faites glisser, à la taille et à l'angle choisis. La taille est exprimée en proportion de la largeur de l'arrière-plan : 50 % correspond à la moitié de sa largeur, quelle que soit la résolution. Les neuf boutons de position l'alignent sur un bord ou un coin, et les touches fléchées la décalent finement.",
        "« Tout couvrir » étire l'image du dessus sur tout l'arrière-plan en conservant ses proportions et en rognant ce qui dépasse. C'est le réglage des textures, des effets de lumière et des doubles expositions, qui doivent atteindre chaque bord.",
      ],
    },
    {
      heading: "Les modes de fusion expliqués",
      id: "blend",
      body: [
        "« Normal » dessine simplement l'image du dessus, atténuée par l'opacité. « Produit » ne fait jamais qu'assombrir : le blanc disparaît et le noir reste noir, ce qui en fait le mode idéal pour les signatures, les tampons et les dessins au trait numérisés sur papier blanc. « Écran » fait l'inverse : il ne fait qu'éclaircir, donc le noir disparaît. C'est ainsi qu'on ajoute fuites de lumière, reflets d'objectif, flammes et ciels étoilés fournis sur fond noir.",
        "« Incrustation » et « Lumière tamisée » renforcent le contraste à travers l'image du dessus, en éclaircissant les zones claires de l'arrière-plan et en assombrissant les zones sombres ; « Lumière tamisée » est la plus douce des deux et convient au papier, au grain et aux teintes colorées. « Obscurcir » et « Éclaircir » gardent le pixel le plus sombre ou le plus clair. « Différence » soustrait une image de l'autre pour un rendu étrange et inversé, et montre exactement où deux photos presque identiques diffèrent. Dans GIMP, vous trouverez les mêmes modes sous les noms Multiplier, Écran, Superposer, Lumière douce, Assombrir seulement et Éclaircir seulement.",
      ],
    },
    {
      heading: "Réaliser une double exposition",
      id: "double-exposure",
      body: [
        "Utilisez un portrait comme arrière-plan et, par-dessus, un paysage, une forêt ou la silhouette d'une ville. Choisissez « Tout couvrir », réglez le mode de fusion sur « Écran » ou « Éclaircir », puis baissez l'opacité entre 50 et 80 % jusqu'à ce que le visage transparaisse à travers la scène. Les portraits sur un fond uni et clair fonctionnent le mieux, car la scène vient remplir l'espace vide autour de la silhouette. Intervertissez les images pour voir quel sens rend le mieux.",
      ],
    },
    {
      heading: "Logos, autocollants et signatures",
      id: "logos",
      body: [
        "Un logo ou un autocollant enregistré en PNG avec un arrière-plan transparent se pose sur la photo sans cadre autour : faites-le glisser dans un coin, ajustez sa taille et baissez l'opacité s'il doit rester discret. Une signature photographiée sur papier blanc n'a pas de transparence, mais le mode « Produit » fait disparaître le blanc et ne laisse que l'encre.",
        "Pour apposer le même logo sur de nombreuses photos d'un coup, l'outil « Ajouter un filigrane » est plus rapide : il applique un logo ou un texte à tout un lot.",
      ],
    },
    {
      heading: "Textures et effets de lumière",
      id: "textures",
      body: [
        "Les textures de papier, de toile, de grain argentique ou de poussière donnent à une image numérique trop lisse un aspect analogique : placez la texture au-dessus avec « Tout couvrir », choisissez « Lumière tamisée » ou « Incrustation » et gardez une opacité faible. Les images de pluie, de neige, de bokeh et de fuites de lumière sont généralement fournies sur fond noir ; avec « Écran », le noir s'efface et seule la lumière reste.",
      ],
    },
    {
      heading: "Incruster une image dans une autre",
      id: "inset",
      body: [
        "Une petite seconde image dans une grande montre à la fois le détail et le contexte : un gros plan sur l'étiquette d'un produit dans le coin de la photo d'ensemble, une carte en médaillon sur une photo de voyage, la photo « avant » à l'intérieur de la photo « après ». Gardez le mode « Normal » et l'opacité au maximum, réglez la taille autour de 25 à 35 % et alignez l'image sur un coin. Quelques degrés de rotation en font un cliché épinglé, plus décontracté.",
      ],
    },
    {
      heading: "Taille, format et transparence",
      id: "output",
      body: [
        "Le résultat a toujours la taille de l'image d'arrière-plan : une image du dessus plus grande que l'arrière-plan est simplement rognée sur ses bords. Il est enregistré dans le format de l'arrière-plan, sauf si vous en choisissez un autre. Le PNG et le WEBP conservent la transparence éventuelle de l'arrière-plan ; le JPG n'en gère aucune, et les zones transparentes sont alors remplies avec la couleur choisie.",
      ],
    },
    {
      heading: "Confidentialité",
      id: "privacy",
      body: [
        "Les deux images sont combinées entièrement dans votre navigateur. Rien n'est envoyé sur un serveur, et rien n'est conservé après la fermeture de la page.",
      ],
    },
  ],

  howToTitle: "Comment superposer des images",
  steps: [
    { title: "Ajouter l'arrière-plan", description: "Choisissez l'image du dessous, ou déposez les deux images en même temps." },
    { title: "Ajouter l'image du dessus", description: "Faites-la glisser à sa place, puis réglez la taille, la rotation, l'opacité et le mode de fusion." },
    { title: "Enregistrer", description: "Cliquez sur « Enregistrer l'image » pour télécharger le résultat en taille réelle." },
  ],

  features: [
    { icon: "layers", title: "Huit modes de fusion", description: "Normal, Produit, Écran, Incrustation, Lumière tamisée, Obscurcir, Éclaircir et Différence." },
    { icon: "opacity", title: "Opacité et placement", description: "Faites glisser, redimensionnez, faites pivoter et atténuez l'image du dessus avec un aperçu en direct." },
    { icon: "lock", title: "Aucun envoi", description: "Les images sont combinées entièrement dans votre navigateur." },
  ],

  faqs: [
    { q: "Comment mettre une image sur une autre ?", a: "Ajoutez l'arrière-plan, ajoutez l'image du dessus, faites-la glisser à sa place et cliquez sur « Enregistrer l'image »." },
    { q: "Comment rendre l'image du dessus transparente ?", a: "Baissez le curseur « Opacité ». À 50 %, les deux images apparaissent à parts égales." },
    { q: "Comment retirer le fond blanc d'une signature ou d'un logo ?", a: "Réglez le mode de fusion sur « Produit » : le blanc disparaît et les traits sombres restent." },
    { q: "Comment retirer le fond noir d'un effet de lumière ?", a: "Réglez le mode de fusion sur « Écran » : le noir disparaît et la lumière reste." },
    { q: "Comment faire une double exposition ?", a: "Prenez un portrait en arrière-plan, un paysage au-dessus, choisissez « Tout couvrir », le mode « Écran » ou « Éclaircir » et une opacité de 50 à 80 %." },
    { q: "Puis-je faire pivoter l'image du dessus ?", a: "Oui, jusqu'à 180 degrés dans un sens comme dans l'autre." },
    { q: "Quelle est la taille du résultat ?", a: "Toujours celle de l'image d'arrière-plan." },
    { q: "Puis-je intervertir les deux images ?", a: "Oui. « Intervertir les images » place l'image du dessus en dessous et l'arrière-plan au-dessus." },
    { q: "Un PNG transparent reste-t-il transparent ?", a: "Oui. Les parties transparentes de l'image du dessus laissent voir l'arrière-plan." },
    { q: "Puis-je superposer un logo sur de nombreuses photos d'un coup ?", a: "Utilisez plutôt l'outil « Ajouter un filigrane » : il applique le même logo à tout un lot." },
    { q: "Mes images sont-elles envoyées sur un serveur ?", a: "Non. Tout se passe dans votre navigateur." },
    { q: "Cela fonctionne-t-il sur téléphone ?", a: "Oui. Faites glisser l'image du dessus avec le doigt pour la déplacer." },
    { q: "Est-ce gratuit ?", a: "Oui. Sans compte, sans filigrane et sans limite." },
    { q: "Pourquoi les noms des modes de fusion sont-ils différents dans GIMP ?", a: "Les noms utilisés ici sont ceux de Photoshop en français. GIMP désigne les mêmes calculs autrement : Produit s'appelle Multiplier, Incrustation s'appelle Superposer et Lumière tamisée s'appelle Lumière douce. Le résultat est le même." },
  ],

  security:
    "Vos images sont combinées entièrement dans votre navigateur. Rien n'est envoyé, stocké ni suivi.",

  ui: {
    // ImageOverlayTool.tsx — files
    "Please select image files.": "Sélectionnez des fichiers image.",
    "or drop the background image here — or both images at once":
      "ou déposez ici l'image d'arrière-plan, ou les deux images en même temps",
    "Background image": "Image d'arrière-plan",
    "Overlay image": "Image du dessus",
    "Not added yet": "Pas encore ajoutée",
    "Add": "Ajouter",
    "Replace": "Remplacer",
    "Swap images": "Intervertir les images",
    "Clear files": "Effacer les fichiers",
    "Add the image to put on top": "Ajoutez l'image à placer au-dessus",
    "A photo, logo, texture or PNG with transparency — click or drop it here.":
      "Une photo, un logo, une texture ou un PNG transparent : cliquez ou déposez-le ici.",
    "Drag it on the preview, then set its size and angle.":
      "Faites-la glisser sur l'aperçu, puis réglez sa taille et son angle.",
    // preview
    "Preview": "Aperçu",
    "Preview — drag, or use the arrow keys, to move the overlay":
      "Aperçu : faites glisser l'image du dessus, ou utilisez les touches fléchées, pour la déplacer",
    "Drag the overlay to move it.": "Faites glisser l'image du dessus pour la déplacer.",
    "Hold to see the original": "Maintenez pour voir l'original",
    // settings
    "Settings": "Réglages",
    "Fit": "Ajustement",
    "Place freely": "Placer librement",
    "Cover everything": "Tout couvrir",
    "Covers the whole picture and trims what sticks out — for textures, light leaks and double exposures.":
      "Couvre toute l'image et rogne ce qui dépasse : pour les textures, les fuites de lumière et les doubles expositions.",
    "Position": "Position", // i18n-same
    "Top left": "En haut à gauche",
    "Top center": "En haut au centre",
    "Top right": "En haut à droite",
    "Middle left": "Au milieu à gauche",
    "Center": "Centre",
    "Middle right": "Au milieu à droite",
    "Bottom left": "En bas à gauche",
    "Bottom center": "En bas au centre",
    "Bottom right": "En bas à droite",
    "Size": "Taille",
    "Its width as a share of the background's width.": "Sa largeur en proportion de la largeur de l'arrière-plan.",
    "Rotation": "Rotation", // i18n-same
    "Opacity": "Opacité",
    "Blend mode": "Mode de fusion",
    "Normal": "Normal", // i18n-same — the blend mode's name in French editors
    "Draws the image as it is.": "Dessine l'image telle quelle.",
    "Multiply": "Produit",
    "Only darkens — white disappears. Good for signatures, stamps and line art.":
      "Assombrit uniquement : le blanc disparaît. Idéal pour les signatures, les tampons et les dessins au trait.",
    "Screen": "Écran",
    "Only lightens — black disappears. Good for light leaks, flares, fire and stars.":
      "Éclaircit uniquement : le noir disparaît. Idéal pour les fuites de lumière, les reflets, le feu et les étoiles.",
    "Overlay": "Incrustation",
    "Boosts contrast: lights get lighter and darks darker.":
      "Renforce le contraste : les clairs s'éclaircissent et les sombres s'assombrissent.",
    "Soft light": "Lumière tamisée",
    "A gentler overlay — for textures and colour tints.":
      "Une incrustation plus douce : pour les textures et les teintes colorées.",
    "Darken": "Obscurcir",
    "Keeps whichever pixel is darker.": "Conserve le pixel le plus sombre.",
    "Lighten": "Éclaircir",
    "Keeps whichever pixel is lighter.": "Conserve le pixel le plus clair.",
    "Difference": "Différence",
    "Subtracts the colours — an inverted, artistic look.":
      "Soustrait les couleurs : un rendu inversé et artistique.",
    // output
    "Output format": "Format de sortie",
    "Same as original": "Identique à l'original",
    "Quality": "Qualité",
    "JPG background": "Fond du JPG",
    "The result is the size of the background image.": "Le résultat a la taille de l'image d'arrière-plan.",
    "Save image": "Enregistrer l'image",
    "Working…": "Traitement…",
    "Done — 1 image saved.": "Terminé : 1 image enregistrée.",
    "Processing failed.": "Échec du traitement.",
    "Your images are processed in your browser and never uploaded.":
      "Vos images sont traitées dans votre navigateur et ne sont jamais envoyées sur un serveur.",
  },
};

export default content;

import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/pivoter-image. Structure lives in ToolPageShell.
 *
 * Target query "faire pivoter une image"; "tourner une image" and "tourner une
 * photo" are the secondaries and live in the intro, a section heading and the
 * FAQs. « Photo couchée / à l'envers » is how people describe the EXIF
 * problem, so the copy uses it. Addressed in "vous".
 *
 * FORMATS is module scope in RotateTool.tsx (§4.2); the shared ToolWorkspace
 * keys are listed too.
 */
const content: ToolPageContent = {
  toolId: "rotate-image",
  locale: "fr",
  name: "Faire pivoter une image",
  tagline:
    "Faites pivoter et retournez vos images JPG, PNG, WEBP et GIF en ligne : par pas de 90° ou à n'importe quel angle, avec aperçu en direct et traitement par lots. Gratuit, rapide et 100 % privé dans votre navigateur.",
  category: { id: "optimize", label: "Optimiser" },

  metaTitle: "Faire pivoter une image – tourner une photo | oMyImage",
  metaDescription:
    "Faire pivoter une image par pas de 90° ou à n'importe quel angle : tournez et retournez vos photos en ligne, même par lots. Gratuit et sans inscription.",

  variantsHeading: "Pivoter ou retourner",

  intro:
    "Remettez droite une photo couchée sur le côté ou faites tourner un graphique exactement à l'angle voulu. L'outil « Faire pivoter une image » d'oMyImage vous permet de tourner vos images par pas de 90°, de les retourner en miroir ou de choisir n'importe quel angle personnalisé avec un aperçu en direct, pour une seule image ou tout un lot à la fois. Choisissez le format de sortie et la couleur de fond, puis téléchargez. Vous pouvez ainsi tourner une image ou redresser une photo à l'envers en quelques secondes, et comme tout se passe dans votre navigateur, vos images restent privées.",

  sections: [
    {
      heading: "Le problème de l'orientation EXIF",
      id: "exif",
      body: [
        "La raison la plus fréquente pour laquelle une photo apparaît tournée n'est pas qu'elle a été mal prise : c'est que l'appareil l'a enregistrée de côté, volontairement. Le capteur d'un téléphone a une orientation fixe ; quand vous tournez le téléphone, le capteur ne tourne pas avec lui. Au lieu de réécrire les pixels, l'appareil enregistre une balise EXIF d'orientation qui indique comment faire pivoter l'image avant de l'afficher.",
        "Cela fonctionne parfaitement jusqu'au jour où l'image rencontre un logiciel qui ignore cette balise. D'anciens gestionnaires de contenu, certains formulaires d'envoi, quelques clients de messagerie et beaucoup de logiciels sur mesure lisent les pixels bruts et vous montrent une photo couchée sur le côté, voire à l'envers. Le plus agaçant, c'est qu'elle s'affiche correctement dans la galerie de votre téléphone et sur votre ordinateur : le problème n'apparaît qu'une fois la photo publiée.",
        "Faire pivoter l'image avec cet outil inscrit l'orientation directement dans les pixels et efface la balise, ce qui supprime toute ambiguïté. Chaque visionneuse affiche alors la même chose, puisqu'il ne reste plus rien à interpréter.",
      ],
    },
    {
      heading: "Tourner une image à angle droit ne coûte rien en qualité",
      id: "lossless",
      body: [
        "Faire pivoter une image de 90, 180 ou 270 degrés déplace chaque pixel à une nouvelle position sans modifier sa valeur. Aucune interpolation n'a lieu : pas d'adoucissement, aucune perte de qualité, l'image tournée est exactement aussi nette que l'original. Il en va de même pour les retournements horizontaux et verticaux.",
        "Les angles quelconques sont une autre affaire. Tourner de 3 degrés signifie que la plupart des pixels de sortie tombent entre des pixels d'entrée : leurs valeurs doivent être interpolées à partir des pixels voisins. L'effet est très léger pour de petites corrections, mais il est réel, et il s'accumule si vous faites pivoter le même fichier encore et encore. Redressez une seule fois, à partir de l'original, plutôt que de corriger d'un degré à chaque fois sur plusieurs séances.",
      ],
    },
    {
      heading: "Redresser un horizon de travers",
      id: "straighten",
      body: [
        "Un horizon penché fait partie de ces défauts que l'œil remarque sans savoir les nommer, et il ne dévie généralement que d'un ou deux degrés. De petites corrections changent énormément l'impression de soin que dégage une photo.",
        "Comme une rotation en biais fait tourner le rectangle dans son cadre, les coins n'atteignent plus les bords et laissent des vides triangulaires. Ces vides sont remplis avec la couleur de fond que vous choisissez. En pratique, la plupart des gens recadrent légèrement ensuite pour les supprimer, ce qui coûte un peu de cadre : si vous savez qu'une prise de vue sera de travers, mieux vaut laisser un peu de marge autour du sujet au moment de la prendre.",
      ],
    },
    {
      heading: "Tourner plusieurs photos en une fois",
      id: "batch",
      body: [
        "Des documents numérisés passés à l'envers dans le chargeur du scanner, une rafale de photos prises téléphone tenu de côté, une série de photos produit qui ont toutes besoin du même quart de tour : voilà les cas typiques où l'on applique une même rotation à de nombreux fichiers d'un coup.",
        "La rotation et le retournement que vous réglez s'appliquent à l'identique à tous les fichiers du lot. Si les images demandent des corrections différentes, regroupez-les d'abord par sens (celles tournées vers la gauche dans un lot, celles tournées vers la droite dans un autre) et traitez chaque groupe en une fois. Tout se passe dans votre navigateur et revient dans un seul ZIP.",
      ],
    },
  ],

  howToTitle: "Comment faire pivoter une image",
  steps: [
    { title: "Importez vos images", description: "Sélectionnez une ou plusieurs images, ou glissez-déposez-les dans l'espace de travail." },
    { title: "Pivotez ou retournez", description: "Utilisez les boutons de 90°, retournez l'image horizontalement ou verticalement, ou choisissez n'importe quel angle avec le curseur." },
    { title: "Pivotez et téléchargez", description: "Choisissez un format de sortie et cliquez sur « Pivoter » : une image seule se télécharge directement, plusieurs images dans un ZIP." },
  ],

  features: [
    { icon: "rotate_90_degrees_cw", title: "Pivoter et retourner", description: "Tournez vos images vers la gauche ou la droite par pas de 90°, retournez-les horizontalement ou verticalement, ou réglez n'importe quel angle de 0 à 359°." },
    { icon: "burst_mode", title: "Rotation par lots", description: "Appliquez la même rotation à de nombreuses images en une fois et téléchargez-les toutes dans un seul ZIP." },
    { icon: "palette", title: "Format et fond", description: "Exportez en JPG, PNG ou WEBP, et choisissez un fond transparent, blanc, noir ou personnalisé pour les coins laissés vides par une rotation en biais." },
  ],

  faqs: [
    { q: "Puis-je faire pivoter une image selon un angle personnalisé ?", a: "Oui. Utilisez les boutons de 90° pour les rotations rapides, ou le curseur d'angle pour choisir n'importe quelle valeur de 0 à 359 degrés." },
    { q: "À quoi sert l'option de fond ?", a: "Quand vous faites pivoter l'image d'un angle qui n'est pas un multiple de 90°, les coins se retrouvent vides. Le fond les remplit : transparent (PNG/WEBP), blanc, noir ou une couleur personnalisée." },
    { q: "Puis-je faire pivoter plusieurs images à la fois ?", a: "Oui. Ajoutez-en autant que vous voulez : la même rotation et le même retournement s'appliquent à toutes, et plusieurs fichiers se téléchargent ensemble dans un ZIP." },
    { q: "Tourner une image fait-il perdre de la qualité ?", a: "Les rotations de 90° et de 180° sont sans perte. Pour les autres angles, ou lors d'un export en JPG, vous pouvez régler la qualité. Le PNG et le WEBP restent nets." },
    { q: "Est-ce gratuit et confidentiel ?", a: "Oui. Sans inscription ni filigrane, et chaque image est tournée localement dans votre navigateur." },
    { q: "Pourquoi mes photos s'affichent-elles couchées sur certains appareils et pas sur d'autres ?", a: "Parce que l'appareil a enregistré la photo dans l'orientation de son capteur et a ajouté une balise EXIF indiquant dans quel sens l'afficher. Les logiciels qui lisent la balise l'affichent correctement ; ceux qui l'ignorent montrent l'image brute, de côté. En la faisant pivoter ici, l'orientation correcte est inscrite dans les pixels et toutes les visionneuses sont d'accord." },
    { q: "Et si chaque photo a besoin d'une rotation différente ?", a: "Une même rotation s'applique à toutes les photos d'un lot : il n'existe pas de mode automatique photo par photo. Regroupez les photos selon leur orientation (par exemple toutes celles qui ont besoin d'un quart de tour dans le sens des aiguilles d'une montre) et traitez chaque groupe séparément." },
    { q: "Puis-je tourner une image de seulement quelques degrés ?", a: "Oui. Redresser un horizon de travers ne demande souvent qu'un ou deux degrés. Sachez que tout angle qui n'est pas un multiple de 90° laisse des vides triangulaires dans les coins, remplis avec la couleur de fond choisie ; la plupart des gens recadrent légèrement ensuite pour les supprimer." },
    { q: "Retourner une image change-t-il sa qualité ?", a: "Non. Les retournements horizontaux et verticaux, comme les rotations de 90° et de 180°, se contentent de réorganiser les pixels existants : rien n'est rééchantillonné, et le résultat est identique à l'original pixel pour pixel en termes de qualité." },
    { q: "Puis-je faire pivoter tout un dossier d'un coup ?", a: "Oui. Ajoutez tous les fichiers du dossier et appliquez-leur la même rotation ; ils reviennent dans un seul ZIP. S'ils demandent des rotations différentes, répartissez-les d'abord en groupes." },
    { q: "Comment remettre à l'endroit une photo à l'envers ?", a: "Cliquez deux fois sur l'un des boutons de 90° ou réglez l'angle sur 180°. Cette rotation est sans perte et, comme l'orientation est enregistrée dans les pixels, la photo s'affichera aussi à l'endroit sur les sites web et dans les e-mails." },
  ],

  security:
    "Vos images restent privées. La rotation s'effectue dans votre navigateur avec HTML canvas : aucun stockage, aucun suivi de vos fichiers. Seule une image de plus de 16 mégapixels environ, trop grande pour un onglet de navigateur, passe par notre serveur, où elle est supprimée au bout d'une heure environ.",

  ui: {
    "Flip": "Retourner",
    "Flipping…": "Retournement…",
    "Flip & download": "Retourner et télécharger",
    "Flip {n} images": "Retourner {n} images",
    // RotateTool.tsx
    "Rotated 1 image.": "1 image pivotée.",
    "Rotated {n} images.": "{n} images pivotées.",
    "Rotation failed.": "La rotation a échoué.",
    "or drop JPG, PNG, WEBP or GIF images here": "ou déposez ici des images JPG, PNG, WEBP ou GIF",
    "Rotated in your browser — your images never leave your device.":
      "Pivotée dans votre navigateur : vos images ne quittent jamais votre appareil.",
    "Rotate & flip": "Pivoter et retourner",
    "Rotate": "Pivoter",
    "Rotating…": "Rotation…",
    "Rotation preview": "Aperçu de la rotation",
    "Preview of": "Aperçu de",
    "— the same transform applies to all {n} images.": "— la même transformation s'applique aux {n} images.",
    "Transform Settings": "Réglages de rotation",
    "90° steps straighten; the angle slider gives a custom tilt.":
      "Les pas de 90° remettent l'image droite ; le curseur d'angle donne une inclinaison personnalisée.",
    "Rotate {n} images": "Pivoter {n} images",
    "Rotate & download": "Pivoter et télécharger",
    "Transform": "Transformer",
    "Flip horizontal": "Retourner horizontalement",
    "Flip vertical": "Retourner verticalement",
    "Flip H": "Miroir H",
    "Flip V": "Miroir V",
    "Angle": "Angle", // i18n-same
    "Format": "Format", // i18n-same
    "Background (for angled corners)": "Fond (pour les coins en biais)",
    // FORMATS (module scope, §4.2)
    "Same as original": "Identique à l'original",
    // Shared (ToolWorkspace / upload)
    "Clear files": "Retirer les fichiers",
    "Download": "Télécharger",
    "Download all (ZIP)": "Tout télécharger (ZIP)",
    "Output": "Sortie",
    "Please select image files.": "Veuillez sélectionner des fichiers image.",
    "Quality": "Qualité",
    "Remove": "Retirer",
    "Reset": "Réinitialiser",
    "Rotate left": "Pivoter à gauche",
    "Rotate right": "Pivoter à droite",
  },
};

export default content;

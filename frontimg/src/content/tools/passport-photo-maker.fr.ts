import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/photo-identite. Target query « Photo d'identité »
 * (33.1K FR, Nov 2026), secondaries « photo identité » (22.2K), « photo
 * passeport » (14.8K), « photo d'identité en ligne » and « 35 × 45 mm ». Vous.
 *
 * ANTS rule (i18n-fr-brief): French ID card and passport applications use an
 * ePhoto with a digital signature code from a certified booth or
 * photographer. The copy says plainly that a home-made photo is for printing,
 * visas of other countries, CVs, forms and checking a photo, and never claims
 * acceptance by any authority. Presets: 35×45 mm, 2×2 in, 3×4 cm, 4×6 cm,
 * 2×3 cm, 5×7 cm, 33×48 mm, 50×70 mm. Framing, sizing and print sheets run in
 * the browser; only the optional background change uses the server.
 */
const content: ToolPageContent = {
  toolId: "passport-photo-maker",
  locale: "fr",
  name: "Photo d'identité",
  seoName: "Créer une photo d'identité",
  tagline:
    "Faites vos photos d'identité, de passeport et de visa à la maison : le visage est cadré automatiquement au format voulu (35 × 45 mm, 2 × 2 in, 3 × 4 cm et d'autres) et vous obtenez une photo à 300 DPI plus une planche d'impression avec plusieurs exemplaires. Gratuit et privé dans votre navigateur.",
  category: { id: "edit", label: "Modifier et créer" },
  variantsHeading: "Formats de photo d'identité et de passeport",

  metaTitle: "Photo d'identité en ligne gratuite – 35 × 45 mm | oMyImage",
  metaDescription:
    "Créez une photo d'identité en ligne : cadrage automatique du visage, fond blanc, planche d'impression à 300 DPI. Photo passeport 35 × 45 mm, gratuite et privée.",

  intro:
    "Une photo d'identité est avant tout une affaire de géométrie : le bon format de papier, la tête à la bonne hauteur, juste ce qu'il faut d'espace au-dessus. Cet outil s'occupe de cette géométrie pour vous. Importez une photo nette prise de face, choisissez le format du document : l'outil trouve le visage, cadre la tête et les épaules selon les proportions qu'utilisent les règles des photos de passeport et produit un JPG prêt à imprimer à 300 DPI. Vous pouvez affiner le cadrage, passer le fond en blanc uni ou dans une autre couleur, garder le fichier sous une limite en Ko pour les formulaires en ligne, et télécharger une planche 10 × 15 cm (4 × 6 in) ou A4 avec autant d'exemplaires que possible. Une précision importante pour la France : la carte d'identité et le passeport français se demandent avec une photo d'identité numérique (ePhoto) faite en cabine ou chez un photographe agréé. Une photo faite chez vous sert à l'impression, aux visas d'autres pays, aux CV, aux formulaires et à vérifier une photo avant de la faire faire.",

  sections: [
    {
      heading: "Formats de photo de passeport selon les pays",
      id: "sizes",
      body: [
        "L'Inde, le Royaume-Uni, l'Union européenne et l'espace Schengen, la Russie et l'Australie utilisent le format 35 × 45 mm (3,5 × 4,5 cm) pour les photos de passeport, la tête occupant environ les deux tiers à trois quarts de la hauteur de la photo. Les États-Unis utilisent 2 × 2 pouces (51 × 51 mm) pour les passeports et les visas, et l'Inde utilise le même format 2 × 2 pouces pour les visas et les cartes OCI. Le Brésil et l'Indonésie utilisent 3 × 4 cm pour la plupart des documents ; l'Indonésie utilise aussi 2 × 3 et 4 × 6 cm. La photo de passeport canadienne mesure 50 × 70 mm, et la photo de visa pour la Chine 33 × 48 mm.",
        "Les règles évoluent et diffèrent entre un passeport, un visa et un dossier d'examen : prenez cette liste comme point de départ et vérifiez les consignes en vigueur pour votre document. L'outil propose tous les formats ci-dessus ; choisissez celui que mentionne votre formulaire.",
      ],
    },
    {
      heading: "Photo d'identité en France : ePhoto et usages d'une photo faite maison",
      id: "france-ephoto",
      body: [
        "Pour une carte nationale d'identité, un passeport ou un permis de conduire français, la demande en ligne passe par l'ANTS et exige une photo d'identité numérique, accompagnée d'un code de signature numérique, que seuls une cabine photo ou un photographe agréés peuvent délivrer. Une photo réalisée avec cet outil ne porte pas ce code : elle ne remplace pas l'ePhoto, et aucun outil en ligne ne peut garantir qu'une administration acceptera une photo.",
        "Elle reste très utile ailleurs : imprimer des photos au format 35 × 45 mm pour une carte de bibliothèque, de sport ou d'étudiant, préparer la photo d'un visa ou d'un passeport d'un autre pays qui accepte les photos imprimées ou importées, illustrer un CV, remplir un formulaire en ligne qui demande une photo de vous, ou vérifier le cadrage et l'éclairage d'une photo avant d'aller en cabine. Dans tous les cas, relisez les exigences de l'organisme concerné avant d'imprimer ou d'envoyer le fichier.",
      ],
    },
    {
      heading: "Comment fonctionne le cadrage automatique",
      id: "framing",
      body: [
        "Un modèle de détection des visages trouve le visage sur votre photo, sur votre appareil et sans l'envoyer. À partir de la position du visage, l'outil estime la tête entière, du haut des cheveux au menton, et met le cadre à l'échelle pour que la tête occupe la part de hauteur que demandent les règles des photos de passeport, centrée de gauche à droite, avec un peu plus d'espace au-dessus de la tête que sur les côtés.",
        "Les coiffures, les chapeaux et les angles inhabituels peuvent légèrement fausser l'estimation : vérifiez l'aperçu. Le curseur « Taille de la tête » agrandit ou réduit la tête, les curseurs de position déplacent le cadre, et « Réinitialiser le cadrage » revient au résultat automatique.",
      ],
    },
    {
      heading: "Prendre une photo d'identité réussie",
      id: "taking",
      body: [
        "Placez-vous à environ un mètre d'un mur uni et clair, face à l'objectif, avec une lumière uniforme sur le visage : la lumière du jour venant d'une fenêtre placée devant vous fonctionne bien, un éclairage dur venant du plafond non. Gardez une expression neutre, la bouche fermée et les deux yeux ouverts, et retirez vos lunettes si les règles de votre document l'exigent (c'est de plus en plus souvent le cas).",
        "Demandez à quelqu'un de vous photographier à environ 1,5 m plutôt que de faire un selfie à bout de bras, qui déforme le visage. Prenez-en plusieurs et gardez la plus nette : le cadrage se corrige ici, la mise au point non.",
      ],
    },
    {
      heading: "Imprimer au bon format",
      id: "printing",
      body: [
        "La photo est enregistrée à 300 DPI, la résolution qu'attendent les laboratoires et les imprimantes photo, si bien qu'elle s'imprime exactement au format du document : une photo de 35 × 45 mm mesure 413 × 531 pixels. La planche d'impression place autant d'exemplaires que possible sur du papier photo 10 × 15 cm (4 × 6 in) ou sur du A4, avec de fines lignes grises pour la découpe.",
        "Imprimez la planche à 100 % (« taille réelle »), et non en « ajuster à la page », sinon les photos sortiront légèrement trop petites. Un tirage 10 × 15 cm est l'option la moins chère dans la plupart des bornes et laboratoires photo, et il contient plusieurs photos de 35 × 45 mm.",
      ],
    },
    {
      heading: "Photos pour les démarches en ligne",
      id: "online",
      body: [
        "Les formulaires en ligne d'examens, de recrutement, de visas et de cartes d'identité demandent généralement un JPG sous une limite de poids, souvent 50 Ko, 100 Ko ou 200 Ko. Saisissez la limite dans « Taille maximale du fichier » et la photo téléchargée restera en dessous ; le format d'impression reste correct même s'il faut réduire le nombre de pixels, car la valeur DPI est ajustée en conséquence.",
      ],
    },
  ],

  howToTitle: "Comment faire une photo d'identité en ligne",
  steps: [
    { title: "Importez un portrait", description: "Choisissez une photo nette, prise de face, en JPG, PNG ou WEBP." },
    { title: "Choisissez le format", description: "Sélectionnez le format de votre document ; le visage est cadré automatiquement et vous pouvez affiner le résultat." },
    { title: "Téléchargez la photo ou la planche", description: "Enregistrez la photo seule à 300 DPI, ou une planche 10 × 15 cm ou A4 avec plusieurs exemplaires à imprimer." },
  ],

  features: [
    { icon: "badge", title: "Cadrage automatique", description: "La détection des visages dimensionne et centre la tête comme le demandent les règles des photos de passeport, dans tous les formats courants." },
    { icon: "grid_view", title: "Planches d'impression", description: "Autant d'exemplaires que possible sur du papier photo 10 × 15 cm ou du A4, avec des lignes de découpe, à 300 DPI." },
    { icon: "lock", title: "Privé par défaut", description: "Le cadrage et l'impression se font dans votre navigateur ; seul le changement de fond, facultatif, utilise notre serveur." },
  ],

  faqs: [
    { q: "Quelle est la taille d'une photo d'identité en cm ?", a: "3,5 × 4,5 cm (35 × 45 mm) en France, dans le reste de l'Union européenne, au Royaume-Uni, en Inde et dans de nombreux autres pays. Les États-Unis utilisent 2 × 2 pouces (5,1 × 5,1 cm), et le Brésil et l'Indonésie 3 × 4 cm pour la plupart des documents." },
    { q: "Combien de pixels fait une photo d'identité ?", a: "À la résolution d'impression habituelle de 300 DPI, 35 × 45 mm correspondent à 413 × 531 pixels et 2 × 2 pouces à 600 × 600 pixels. L'outil enregistre exactement ces tailles." },
    { q: "Puis-je mettre le fond en blanc ?", a: "Oui. Choisissez « Changer la couleur » sous « Arrière-plan » : la personne est détourée et placée sur du blanc ou sur la couleur de votre choix. Cette étape utilise un traitement IA sur notre serveur." },
    { q: "Comment imprimer plusieurs photos d'identité sur une seule feuille ?", a: "Téléchargez la planche 10 × 15 cm ou A4 et imprimez-la à 100 %. Une planche 10 × 15 cm contient plusieurs photos de 35 × 45 mm, avec des lignes grises pour la découpe." },
    { q: "Puis-je faire une photo de moins de 50 Ko pour un formulaire en ligne ?", a: "Oui. Saisissez 50 dans « Taille maximale du fichier » avant de télécharger ; la photo reste sous 50 Ko et son format d'impression reste correct." },
    { q: "Ma photo sera-t-elle acceptée ?", a: "L'outil règle correctement le format et le cadrage. L'éclairage, l'expression, les lunettes, la position de la tête et l'ancienneté de la photo sont des règles à respecter au moment de la prise de vue : consultez les consignes de votre document. C'est l'organisme destinataire qui décide s'il accepte une photo faite par vous, et aucun outil ne peut le garantir." },
    { q: "Ma photo est-elle envoyée sur un serveur ?", a: "Non : la détection du visage, le cadrage et l'impression fonctionnent dans votre navigateur. La photo n'est envoyée à notre serveur que si vous changez le fond, et le détourage y est supprimé automatiquement dans l'heure." },
    { q: "Puis-je utiliser un selfie ?", a: "Mieux vaut éviter. Un téléphone tenu à bout de bras déforme le visage, et la plupart des règles demandent une photo prise à environ 1,5 m. Demandez à quelqu'un de la prendre, ou utilisez le retardateur et un support." },
    { q: "Puis-je l'utiliser pour ma carte d'identité ou mon passeport français ?", a: "Non. Les demandes françaises passent par l'ANTS avec une photo d'identité numérique (ePhoto) munie d'un code de signature, délivrée par une cabine ou un photographe agréés. Une photo faite ici ne porte pas ce code. Vous pouvez en revanche vous en servir pour vérifier votre cadrage avant d'aller en cabine." },
    { q: "Convient-elle pour un visa d'un autre pays ?", a: "Souvent, oui : beaucoup de demandes de visa acceptent une photo imprimée ou un fichier importé aux formats 35 × 45 mm, 2 × 2 in ou 33 × 48 mm, tous disponibles ici. Vérifiez toujours les exigences du consulat ou du portail concerné, qui seul décide." },
    { q: "Puis-je l'utiliser pour la photo de mon CV ?", a: "Oui. Il n'y a pas de format imposé pour un CV ; un cadrage 35 × 45 mm ou 3 × 4 cm sur un fond uni et sobre a un rendu soigné et s'intègre bien au document. Si vous l'importez sur un site d'emploi avec une limite de poids, indiquez le maximum en Ko." },
  ],

  security:
    "La détection du visage, le cadrage, le redimensionnement et les planches d'impression fonctionnent entièrement dans votre navigateur : la photo ne quitte pas votre appareil. Si vous choisissez de changer le fond, la photo est envoyée une fois, par une connexion chiffrée, à notre moteur de suppression d'arrière-plan (rembg), et le résultat est supprimé automatiquement dans l'heure.",

  ui: {
    // PassportPhotoTool.tsx — document sizes (module scope)
    "35 × 45 mm — passport: India, UK, EU, Russia": "35 × 45 mm – passeport et visa : UE, Royaume-Uni, Inde, Russie",
    "2 × 2 in (51 × 51 mm) — US passport and visa": "2 × 2 in (51 × 51 mm) – passeport et visa des États-Unis",
    "3 × 4 cm — documents: Brazil, Indonesia": "3 × 4 cm – documents : Brésil, Indonésie",
    "4 × 6 cm — pas foto (Indonesia)": "4 × 6 cm – documents (Indonésie)",
    "2 × 3 cm — pas foto (Indonesia)": "2 × 3 cm – documents (Indonésie)",
    "5 × 7 cm — document photo (Brazil)": "5 × 7 cm – photo de document (Brésil)",
    "33 × 48 mm — China visa": "33 × 48 mm – visa pour la Chine",
    "50 × 70 mm — Canada passport": "50 × 70 mm – passeport canadien",
    "2 × 2 in": "2 × 2 in",
    // PassportPhotoTool.tsx
    "Select a photo": "Sélectionner une photo",
    "Please select an image.": "Sélectionnez une image.",
    "or drop a JPG, PNG or WEBP portrait here": "ou déposez ici un portrait JPG, PNG ou WEBP",
    "Change image": "Changer d'image",
    "Clear image": "Retirer l'image",
    "No face found — the photo is centred instead. Use the controls to frame it.": "Aucun visage trouvé : la photo a été centrée. Utilisez les réglages pour la cadrer.",
    "Could not read this image.": "Impossible de lire cette image.",
    "Processing failed.": "Le traitement a échoué.",
    "Looking for the face…": "Recherche du visage…",
    "Printed size: {size} at 300 DPI ({px})": "Format imprimé : {size} à 300 DPI ({px})",
    "The photo has little room above the head, so the frame was moved to fit. Changing the background restores the usual spacing.": "La photo laisse peu d'espace au-dessus de la tête : le cadre a été déplacé pour tenir. Changer le fond rétablit l'espacement habituel.",
    "Preview": "Aperçu",
    "Photo settings": "Réglages de la photo",
    "Document size": "Format du document",
    "Head size": "Taille de la tête",
    "Move left / right": "Déplacer à gauche / à droite",
    "Move up / down": "Déplacer en haut / en bas",
    "Reset framing": "Réinitialiser le cadrage",
    "Background": "Arrière-plan",
    "Keep original": "Garder l'original",
    "Change colour": "Changer la couleur",
    "Removing background…": "Suppression de l'arrière-plan…",
    "Background colour": "Couleur de l'arrière-plan",
    "Max file size (optional)": "Taille maximale du fichier (facultatif)",
    "KB": "Ko",
    "For forms with a limit such as 50 KB. Leave empty for the best quality.": "Pour les formulaires avec une limite, par exemple 50 Ko. Laissez vide pour la meilleure qualité.",
    "Original: {size}": "Original : {size}",
    "Changing the background uses one AI run on our server; everything else stays in your browser.": "Changer le fond utilise un traitement IA sur notre serveur ; tout le reste se passe dans votre navigateur.",
    "Download photo": "Télécharger la photo",
    "Saving…": "Enregistrement…",
    "Download 4×6 in print sheet ({n} photos)": "Télécharger la planche 10 × 15 cm ({n} photos)",
    "Download A4 print sheet ({n} photos)": "Télécharger la planche A4 ({n} photos)",
    "Could not get under {size} — the smallest file is used.": "Impossible de descendre sous {size} : le fichier le plus léger est utilisé.",
  },
};

export default content;

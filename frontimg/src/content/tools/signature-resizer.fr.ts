import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/redimensionner-signature (signature-resizer). Target
 * query: «Redimensionner une signature»; secondary «signature image». Same
 * in-browser engine as /signature-resizer (lib/image/signature.ts).
 */
const content: ToolPageContent = {
  toolId: "signature-resizer",
  locale: "fr",
  name: "Redimensionner une signature",
  tagline:
    "Transformez la photo de votre signature prise au téléphone en un fichier propre, prêt pour les formulaires : fond blanc, encre bien noire, bords recadrés, taille exacte en pixels ou en centimètres et fichier entre 10 et 20 Ko — ou la plage dont vous avez besoin. Gratuit et confidentiel, dans votre navigateur.",
  category: { id: "optimize", label: "Optimiser" },

  metaTitle: "Redimensionner une signature – fond blanc | oMyImage",
  metaDescription:
    "Redimensionner une signature sans inscription : votre signature en image sur fond blanc, à la taille exacte en px ou en cm et au poids en Ko exigé.",

  intro:
    "Les formulaires en ligne sont exigeants avec la signature : encre noire ou bleue sur papier blanc, une taille imposée comme 140 × 60 pixels et un poids de fichier compris, par exemple, entre 10 et 20 Ko. Une photo prise au téléphone échoue sur tous les points : papier gris, ombre dans un coin, beaucoup trop de pixels et un fichier cent fois trop lourd. Cet outil corrige tout d'un coup et vous donne votre signature en image, prête à déposer : il blanchit le papier et fonce l'encre, supprime l'espace vide, ajuste la signature à la taille choisie et enregistre un JPG dans la plage de Ko demandée — sans que votre signature quitte jamais votre appareil.",

  sections: [
    {
      heading: "Ce que demandent les formulaires",
      id: "requirements",
      body: [
        "Les portails de recrutement des banques et d'autres organismes en Inde demandent couramment une signature de 140 × 60 pixels dans un fichier de 10 à 20 Ko. D'autres formulaires indiquent la taille en centimètres, comme 4 × 2 cm ou 6 × 2 cm, et certains ne fixent qu'un poids maximal. Presque tous veulent une encre foncée sur papier blanc uni, et beaucoup refusent une signature écrite en majuscules.",
        "Choisissez la taille correspondante dans « Taille de sortie » — les tailles en centimètres sont tracées à 300 DPI et enregistrées avec ce DPI, pour s'imprimer à la taille indiquée — puis la plage de Ko donnée par le formulaire. Pour une taille absente de la liste, choisissez « Taille personnalisée » et saisissez la largeur et la hauteur en pixels.",
      ],
    },
    {
      heading: "Signer et photographier",
      id: "photographing",
      body: [
        "Signez trois ou quatre fois sur une feuille blanche unie avec un stylo noir ou bleu foncé, puis gardez la plus réussie. Un stylo à bille convient ; un stylo gel ou un feutre donne un trait plus sombre et plus régulier, qui résiste mieux à la compression.",
        "Photographiez la feuille à la lumière du jour, exactement par-dessus, en tenant le téléphone parallèle à la page pour ne pas étirer la signature. Faites en sorte que la signature occupe l'essentiel du cadre — l'outil recadre le reste — et évitez que votre propre ombre tombe sur le papier. Un scanner à plat fonctionne tout aussi bien.",
      ],
    },
    {
      heading: "Comment le fond est nettoyé",
      id: "cleaning",
      body: [
        "Sur une photo, le papier n'est jamais vraiment blanc, et il a rarement la même teinte d'un bord à l'autre. Au lieu d'un seuil unique pour toute l'image, l'outil estime la clarté du papier autour de chaque point et compare chaque pixel à son propre voisinage. Le papier devient blanc pur, le trait de stylo devient plein, et une ombre dans un coin disparaît au lieu de se transformer en tache grise.",
        "« Intensité du nettoyage » détermine jusqu'à quel gris clair on considère qu'il s'agit du papier. Augmentez-la s'il reste des points ou une ombre légère ; baissez-la si les extrémités fines de vos traits commencent à se briser. « Couleur de l'encre » peut être un noir pur, un bleu foncé ou la couleur d'origine de votre stylo.",
      ],
    },
    {
      heading: "Tailles et limites de poids",
      id: "limits",
      body: [
        "La signature est mise à l'échelle pour tenir dans la taille choisie sans être déformée, puis centrée sur fond blanc. Avec un maximum, la qualité JPG est réglée aussi haut que la limite le permet. Avec un minimum — la moitié « au moins 10 Ko » d'une plage —, une petite signature propre est souvent trop simple pour atteindre ce chiffre seule : la qualité est donc d'abord poussée au maximum.",
        "Si une très petite taille comme 140 × 60 pixels reste sous le minimum même en qualité maximale, le fichier est complété par un bloc de données vide jusqu'à l'atteindre. La signature elle-même ne change pas d'un seul pixel ; la page vous indique quand c'est le cas.",
        "Les deux bornes d'une plage sont lues de la façon la plus sûre : « au moins 10 Ko » devient au moins 10 240 octets et « au plus 20 Ko » au plus 20 000 octets, si bien que le fichier passe, que le formulaire compte un kilo-octet comme 1 000 ou comme 1 024 octets.",
      ],
    },
  ],

  howToTitle: "Comment redimensionner une signature pour un formulaire en ligne",
  steps: [
    { title: "Ajoutez une photo de votre signature", description: "Une photo ou un scan de votre signature sur papier blanc : JPG, PNG ou WEBP." },
    { title: "Choisissez la taille et la plage de Ko", description: "Prenez 140 × 60 px, une taille en centimètres ou la vôtre, et la plage de poids demandée par le formulaire." },
    { title: "Téléchargez le JPG", description: "Vérifiez l'aperçu, puis téléchargez une signature propre, prête à être déposée." },
  ],

  features: [
    { icon: "draw", title: "Fond blanc impeccable", description: "Ombres et papier gris disparaissent, l'encre devient pleine — en noir, en bleu ou dans sa propre couleur." },
    { icon: "crop", title: "Taille exacte", description: "140 × 60 px, 4 × 2 cm, 6 × 2 cm ou toute autre taille, après suppression de l'espace vide." },
    { icon: "lock", title: "Jamais envoyée", description: "Votre signature est traitée dans votre navigateur et reste sur votre appareil." },
  ],

  faqs: [
    { q: "Comment redimensionner ma signature entre 10 et 20 Ko ?", a: "Ajoutez une photo de votre signature et choisissez la plage de 10 à 20 Ko dans « Taille du fichier », avec la taille en pixels demandée par votre formulaire. Le JPG téléchargé tombe dans cette plage." },
    { q: "Quelle taille doit faire une signature pour un formulaire en ligne ?", a: "Celle qu'indique le formulaire. 140 × 60 pixels et 10–20 Ko est une exigence courante sur les portails de recrutement indiens ; d'autres formulaires utilisent des tailles en centimètres comme 4 × 2 cm. Lisez les instructions et reprenez ici les mêmes valeurs." },
    { q: "Comment rendre blanc le fond de ma signature ?", a: "Laissez « Nettoyer le fond » activé. Le papier devient blanc pur et l'encre pleine, même si la photo a été prise sous un éclairage inégal." },
    { q: "Puis-je garder ma signature à l'encre bleue ?", a: "Oui. Choisissez « Bleu » pour un bleu foncé uniforme, ou « Original » pour conserver la couleur de votre stylo. Choisissez « Noir » si le formulaire exige une encre noire." },
    { q: "Pourquoi ma signature paraît-elle hachée après le nettoyage ?", a: "Le nettoyage est trop fort pour un trait fin ou clair. Baissez « Intensité du nettoyage », ou signez de nouveau avec un stylo plus foncé." },
    { q: "Pourquoi mon fichier a-t-il été complété ?", a: "Une petite signature propre peut être plus simple que ne le permet le poids minimal du formulaire. Après avoir poussé la qualité au maximum, l'outil ajoute des données vides pour atteindre le minimum ; l'image elle-même ne change pas." },
    { q: "Puis-je utiliser une signature scannée ?", a: "Oui. Un scan est idéal : éclairage uniforme et page bien plane. Ajoutez le scan, et l'outil le recadre et le redimensionne de la même façon." },
    { q: "Ma signature est-elle envoyée quelque part ?", a: "Non. Le nettoyage, le redimensionnement et l'enregistrement se font tous dans votre navigateur ; la signature ne quitte jamais votre appareil." },
    { q: "Puis-je insérer l'image de ma signature dans un document Word ou un PDF ?", a: "Oui, le JPG téléchargé s'insère comme n'importe quelle image. Savoir si une signature collée en image est acceptée pour un contrat ou une démarche précise relève de l'organisme qui la reçoit ; en cas de doute, renseignez-vous auprès de lui." },
  ],

  security:
    "Votre signature est nettoyée, redimensionnée et enregistrée entièrement dans votre navigateur. Elle n'est jamais envoyée, stockée ni vue par qui que ce soit.",

  ui: {
    // SignatureResizerTool.tsx
    "Select a signature": "Sélectionner une signature",
    "or drop a photo or scan of your signature here": "ou déposez ici une photo ou un scan de votre signature",
    "Change image": "Changer d'image",
    "Clear image": "Retirer l'image",
    "Please select an image.": "Veuillez sélectionner une image.",
    "Could not read this image.": "Impossible de lire cette image.",
    "Processing failed.": "Le traitement a échoué.",
    "Signature settings": "Réglages de la signature",
    "Preview": "Aperçu",
    "Output size": "Taille de sortie",
    "Trimmed, original shape": "Recadrée, forme d'origine",
    "4 × 2 cm": "4 × 2 cm",
    "6 × 2 cm": "6 × 2 cm",
    "Custom size": "Taille personnalisée",
    "Width (px)": "Largeur (px)",
    "Height (px)": "Hauteur (px)",
    "File size": "Taille du fichier",
    "No limit": "Sans limite",
    "Under {size}": "Moins de {size}",
    "{min} to {max}": "De {min} à {max}",
    "Minimum (KB)": "Minimum (Ko)",
    "Maximum (KB)": "Maximum (Ko)",
    "KB": "Ko",
    "Trim empty space": "Supprimer l'espace vide",
    "Clean the background": "Nettoyer le fond",
    "Makes the paper pure white and the ink solid, even in uneven light.": "Rend le papier blanc pur et l'encre pleine, même sous un éclairage inégal.",
    "Cleaning strength": "Intensité du nettoyage",
    "Ink colour": "Couleur de l'encre",
    "Black": "Noir",
    "Blue": "Bleu",
    "Original": "Original", // i18n-same
    "Download signature": "Télécharger la signature",
    "Saving…": "Enregistrement…",
    "Output: {w} × {h} px": "Résultat : {w} × {h} px",
    "Last download: {size}": "Dernier téléchargement : {size}",
    "The file was padded to reach the minimum size; the picture itself is unchanged.": "Le fichier a été complété pour atteindre le poids minimal ; l'image elle-même n'a pas changé.",
    "No signature found — try a photo with darker ink on plain paper.": "Aucune signature trouvée — essayez une photo avec une encre plus foncée sur papier uni.",
    "Your signature is processed in your browser and never uploaded.": "Votre signature est traitée dans votre navigateur et n'est jamais envoyée.",
    "Could not get under {size} — the smallest file is used.": "Impossible de descendre sous {size} — le fichier le plus léger est utilisé.",
    "The maximum must be larger than the minimum.": "Le maximum doit être supérieur au minimum.",
  },
};

export default content;

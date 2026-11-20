import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/image-en-texte. Structure lives in ToolPageShell.
 *
 * Target query "image en texte"; "convertir image en texte", "extraire texte
 * image" and "OCR en ligne" are the secondaries and live in the metaTitle,
 * intro, a section heading and FAQs. Addressed in "vous".
 *
 * ACCURACY NOTE — this page describes what the tool actually does TODAY:
 * it reads on the server first (PaddleOCR) and falls back to Tesseract in the
 * browser. The English module (image-to-text.en.ts) describes the same
 * behaviour (LICENSE-AUDIT.md F4). Every privacy claim must stay consistent.
 *
 * On /fr the recognition language defaults to French (OCR_DEFAULT fr → fra in
 * ImageToTextTool.tsx). The OCR language names and status strings are module
 * scope → ui, by hand.
 */
const content: ToolPageContent = {
  toolId: "image-to-text",
  locale: "fr",
  name: "Image en texte",
  tagline:
    "Extrayez le texte de vos photos, captures d'écran et scans grâce à l'OCR en ligne, puis copiez-le, corrigez-le ou enregistrez-le en .txt. Gratuit, reconnaissance du français incluse, sans inscription.",
  category: { id: "convert", label: "Convertir" },

  metaTitle: "Image en texte – OCR en ligne gratuit | oMyImage",
  metaDescription:
    "Convertir une image en texte avec un OCR en ligne gratuit : extrayez le texte de photos, captures et scans, accents compris, puis copiez-le. Sans inscription.",

  intro:
    "Récupérez les mots d'une capture d'écran, d'une page scannée ou de la photo d'un document et obtenez un texte modifiable : convertir une image en texte prend quelques secondes. La reconnaissance (OCR) s'exécute sur notre serveur avec un modèle de haute précision : l'image transite par une connexion chiffrée et est supprimée dès qu'elle a été lue. Si le serveur est injoignable, la page lit l'image sur votre propre appareil : l'outil fonctionne dans tous les cas, et il vous prévient quand c'est arrivé. Sur cette page, le français est déjà sélectionné comme langue, pour que les accents, la cédille, les ligatures comme « œ » et les guillemets soient bien reconnus.",

  sections: [
    {
      heading: "Ce que l'OCR peut faire, et ce qu'il ne peut pas faire",
      id: "accuracy",
      body: [
        "La reconnaissance optique de caractères consiste à repérer des formes sur une page et à les comparer à un modèle entraîné qui sait à quoi ressemblent les lettres. Sur un document propre, contrasté et bien droit (une capture d'écran, une page PDF exportée en image, le scan à plat d'un document imprimé), elle est très précise, et vous corrigerez le plus souvent la ponctuation plutôt que des mots.",
        "Elle se dégrade précisément sur ce qui fait le charme d'une photo. Les prises de vue en biais, l'éclairage inégal, les ombres sur la page, la basse résolution, les fonds chargés derrière le texte et une forte compression JPG réduisent la précision, parfois nettement. L'écriture manuscrite est un tout autre problème, car le moteur de reconnaissance est entraîné sur des caractères imprimés : attendez-vous à de mauvais résultats sur une écriture cursive.",
        "Conclusion pratique : l'image de départ compte bien plus que n'importe quel réglage. Si vous pouvez reprendre la photo bien de face, avec la page uniformément éclairée et remplissant le cadre, ce seul changement améliorera davantage le résultat que tout ce qui est disponible ici.",
      ],
    },
    {
      heading: "Extraire le texte d'une image : les clés d'un bon résultat",
      id: "tips",
      body: [
        "Photographiez ou scannez bien de face, pas en biais, pour que les lignes de texte traversent l'image à l'horizontale. L'inclinaison est la cause la plus fréquente d'un résultat illisible.",
        "Visez un texte d'au moins 20 pixels de haut. Si l'écriture est petite dans le cadre, recadrez au plus près du bloc de texte avant l'extraction : un recadrage serré de la même photo est souvent bien mieux reconnu que l'image entière.",
        "Choisissez la bonne langue avant d'extraire. Un modèle anglais qui lit du français produira, sans le signaler, des erreurs plausibles sur chaque lettre accentuée, chaque « ç » et chaque « œ », et l'inverse est vrai aussi.",
        "Pour un document photographié sous une lampe de bureau, le passer d'abord en niveaux de gris et augmenter le contraste peut aider le moteur à distinguer l'encre du papier.",
      ],
    },
    {
      heading: "Où l'image est lue, et pourquoi c'est parfois plus long",
      id: "model",
      body: [
        "La lecture principale se fait sur notre serveur, qui utilise un modèle de reconnaissance plus grand et plus précis que ce qui tiendrait confortablement dans un onglet de navigateur. Votre image transite par une connexion HTTPS chiffrée, est lue, puis le fichier est supprimé aussitôt. Elle n'est ni conservée, ni indexée, ni utilisée pour entraîner des modèles. La première requête dans une langue que le serveur n'a pas utilisée récemment peut prendre un peu plus de temps, le temps de charger le modèle de cette langue ; ensuite, les résultats arrivent vite.",
        "Si le serveur est injoignable ou indisponible, la page bascule sur le moteur Tesseract, qui s'exécute en WebAssembly dans votre navigateur ; dans ce cas, l'image ne quitte jamais votre appareil. Le moteur et le modèle de langue pèsent plusieurs mégaoctets et sont téléchargés la première fois que cette solution de repli est nécessaire ; votre navigateur les met en cache, si bien que les fois suivantes, le démarrage est presque immédiat. Le résultat est alors signalé comme « lu sur votre appareil », et il est en général un peu moins précis sur un texte petit ou dense.",
      ],
    },
  ],

  howToTitle: "Comment convertir une image en texte",
  steps: [
    {
      title: "Ajoutez votre image",
      description: "Déposez une photo, une capture d'écran ou un scan : les formats JPG, PNG, WEBP et BMP fonctionnent.",
    },
    {
      title: "Choisissez la langue",
      description: "Le français est déjà sélectionné. Changez-le si le texte est dans une autre langue : c'est le réglage qui influe le plus sur la précision.",
    },
    {
      title: "Extrayez et copiez",
      description: "Cliquez sur « Extraire le texte ». Corrigez ce que le moteur a mal lu, puis copiez le texte ou enregistrez-le dans un fichier .txt.",
    },
  ],

  features: [
    {
      icon: "lock",
      title: "Supprimée juste après la lecture",
      description:
        "Votre image transite par une connexion chiffrée, est lue sur notre serveur puis supprimée immédiatement. Rien n'est conservé ni utilisé pour entraîner des modèles.",
    },
    {
      icon: "translate",
      title: "13 langues",
      description:
        "Français, anglais, espagnol, allemand, italien, portugais, néerlandais, russe, arabe, hindi, chinois, japonais et coréen.",
    },
    {
      icon: "edit_note",
      title: "Modifiable avant l'enregistrement",
      description:
        "Le résultat s'affiche dans une zone de texte que vous pouvez corriger. Aucun OCR n'est parfait : rectifier un caractère isolé fait partie du travail.",
    },
  ],

  faqs: [
    {
      q: "Mon image est-elle envoyée sur un serveur ?",
      a: "Oui, pour la lecture principale. L'image est envoyée via une connexion HTTPS chiffrée à notre serveur, où le texte est reconnu, et le fichier est supprimé dès qu'il a été lu : il n'est ni conservé, ni partagé, ni utilisé pour l'entraînement. Si le serveur est indisponible, la reconnaissance se fait dans votre propre navigateur et l'image ne quitte pas votre appareil ; l'outil signale alors le résultat comme « lu sur votre appareil ».",
    },
    {
      q: "Quelle est la précision de la conversion d'une image en texte ?",
      a: "Sur un document imprimé propre (captures d'écran, scans, pages de documents exportées), la précision est en général très élevée. Elle baisse avec les photos prises en biais, un mauvais éclairage, une basse résolution et un petit texte. Le résultat est modifiable justement parce qu'aucun OCR n'est parfait.",
    },
    {
      q: "L'outil peut-il lire l'écriture manuscrite ?",
      a: "Pas de façon fiable. Le moteur est entraîné sur des caractères imprimés, et l'écriture cursive en particulier donne de mauvais résultats. Des majuscules d'imprimerie bien tracées passent parfois ; une écriture liée, en général non.",
    },
    {
      q: "Quelles langues sont prises en charge ?",
      a: "Treize : français, anglais, espagnol, allemand, italien, portugais, néerlandais, russe, arabe, hindi, chinois simplifié, japonais et coréen. Choisissez celle qui correspond à votre texte avant l'extraction : un mauvais modèle dégrade fortement la précision.",
    },
    {
      q: "Les accents, la cédille et les ligatures sont-ils reconnus ?",
      a: "Oui, quand la langue choisie est le français, sélectionné par défaut sur cette page. Avec un modèle anglais, les lettres accentuées, le « ç » et le « œ » seraient souvent lus comme des caractères voisins. Relisez tout de même le résultat si le texte est petit.",
    },
    {
      q: "Pourquoi l'extraction est-elle parfois lente ?",
      a: "Sur le serveur, la première requête dans une langue peu utilisée récemment attend le chargement de son modèle ; les suivantes sont bien plus rapides. Si l'outil bascule sur votre appareil, le moteur et le modèle de langue sont téléchargés à la première utilisation au lieu d'être intégrés à la page, si bien que ceux qui n'utilisent jamais cet outil n'en paient pas le coût. Votre navigateur les met en cache et les utilisations suivantes démarrent immédiatement.",
    },
    {
      q: "La mise en page d'origine est-elle conservée ?",
      a: "Seulement dans les grandes lignes. Vous obtenez le texte avec ses retours à la ligne, pas une reconstitution des colonnes, des tableaux ou de la mise en forme. Pour un tableau, il faudra généralement remettre le résultat en ordre à la main.",
    },
    {
      q: "Puis-je extraire le texte d'un PDF ?",
      a: "Pas directement : cet outil traite des images. Exportez la page du PDF en PNG ou en JPG, ou faites-en une capture d'écran, puis passez-la ici.",
    },
    {
      q: "Cet OCR en ligne est-il gratuit ?",
      a: "Oui, sans compte, sans filigrane et sans limite sur le nombre d'images traitées.",
    },
    {
      q: "Puis-je l'utiliser pour des documents personnels, en conformité avec le RGPD ?",
      a: "L'image n'est utilisée que pour lire le texte, transite de façon chiffrée et est supprimée juste après la lecture ; rien n'est conservé ni réutilisé. Pour un document très sensible, vous pouvez aussi masquer au préalable les informations inutiles (numéros, adresses) en recadrant l'image sur le seul passage dont vous avez besoin.",
    },
  ],

  security:
    "La lecture principale se fait sur notre serveur : votre image est envoyée via une connexion HTTPS chiffrée, le texte est reconnu, puis le fichier est supprimé juste après sa lecture. Il n'est ni conservé, ni indexé, ni utilisé pour entraîner des modèles. Si le serveur est injoignable, la reconnaissance s'exécute en WebAssembly dans la page et l'image n'est pas envoyée du tout ; la seule requête réseau porte alors sur le modèle de reconnaissance générique, qui ne contient aucune information sur votre image.",

  ui: {
    // ImageToTextTool.tsx
    "Please select a JPG, PNG, WEBP or BMP image.": "Veuillez sélectionner une image JPG, PNG, WEBP ou BMP.",
    "or drop a JPG, PNG, WEBP or BMP here": "ou déposez ici un JPG, PNG, WEBP ou BMP",
    "Read on our server for the best accuracy (falls back to your device if the server is unreachable) — files are deleted right after.":
      "Lecture sur notre serveur pour une précision maximale (ou sur votre appareil si le serveur est injoignable) ; les fichiers sont supprimés juste après.",
    "OCR settings": "Réglages OCR",
    "OCR Settings": "Réglages OCR",
    "Read": "Lire",
    "Reading…": "Lecture…",
    "Read again": "Relire",
    "Extract text": "Extraire le texte",
    "Remove image": "Retirer l'image",
    "Extracted text": "Texte extrait",
    "1 word": "1 mot",
    "{n} words": "{n} mots",
    "{pct}% confidence": "{pct} % de confiance",
    "The recognizer's own estimate of how confident it is in this reading — not a guarantee. Low scores usually mean small or blurry source text; worth a proofread.":
      "L'estimation du moteur lui-même sur la fiabilité de cette lecture, et non une garantie. Un score faible signale en général un texte source petit ou flou : mieux vaut relire.",
    "editable before you copy or download": "modifiable avant de copier ou de télécharger",
    "read on your device": "lu sur votre appareil",
    "Our server-side reader was unreachable or unavailable, so this ran on your device instead — usually a bit less accurate on small or dense text.":
      "Notre lecteur côté serveur était injoignable ou indisponible : la lecture s'est donc faite sur votre appareil, ce qui est en général un peu moins précis sur un texte petit ou dense.",
    "Choose a language, then press Extract text.": "Choisissez une langue, puis cliquez sur « Extraire le texte ».",
    "Language of the text": "Langue du texte",
    "Picking the right language matters more than anything else for accuracy.":
      "Choisir la bonne langue est ce qui compte le plus pour la précision.",
    "Copy text": "Copier le texte",
    "Download .txt": "Télécharger le .txt",
    "Read on our server for the best accuracy, over an encrypted connection — the image is deleted right after. If our server can't be reached, this reads the image on your own device instead, so the tool still works either way.":
      "Lecture sur notre serveur pour une précision maximale, via une connexion chiffrée ; l'image est supprimée juste après. Si notre serveur est injoignable, l'image est lue sur votre propre appareil : l'outil fonctionne dans tous les cas.",
    "Text copied to clipboard": "Texte copié dans le presse-papiers",
    "Couldn't access the clipboard.": "Impossible d'accéder au presse-papiers.",
    "No text found in this image": "Aucun texte trouvé dans cette image",
    "Try a sharper or higher-contrast scan.": "Essayez un scan plus net ou plus contrasté.",
    "Extracted 1 word": "1 mot extrait",
    "Extracted {n} words": "{n} mots extraits",
    "Could not read this image.": "Impossible de lire cette image.",
    // Progress / status (module scope humanStatus + inline setStatus calls)
    "Loading the recognition engine…": "Chargement du moteur de reconnaissance…",
    "Uploading your image…": "Envoi de votre image…",
    "Queued on the server…": "En file d'attente sur le serveur…",
    "Reading the text on our server…": "Lecture du texte sur notre serveur…",
    "Server OCR unavailable — reading on your device instead…":
      "OCR du serveur indisponible : lecture sur votre appareil…",
    "Downloading the recognition model (first run only)…":
      "Téléchargement du modèle de reconnaissance (première fois seulement)…",
    "Starting the engine…": "Démarrage du moteur…",
    "Reading the text…": "Lecture du texte…",
    // LANGUAGES (module scope, §4.2)
    "English": "Anglais",
    "Spanish": "Espagnol",
    "French": "Français",
    "German": "Allemand",
    "Italian": "Italien",
    "Portuguese": "Portugais",
    "Dutch": "Néerlandais",
    "Russian": "Russe",
    "Arabic": "Arabe",
    "Hindi": "Hindi", // i18n-same
    "Chinese (Simplified)": "Chinois (simplifié)",
    "Japanese": "Japonais",
    "Korean": "Coréen",
    // Backend sentences this tool can surface (routes/image/ocr)
    "Upload an image to run OCR on.": "Importez une image pour lancer l'OCR.",
    "Server OCR is unavailable (PaddleOCR is not installed on the server).":
      "L'OCR du serveur n'est pas disponible pour le moment.",
  },
};

export default content;

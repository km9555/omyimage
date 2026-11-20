import type { ToolPageContent } from "@/content/tools/types";

/**
 * French copy for /fr/compresser-image-15ko (variant of compress-image,
 * preset targetKb 15). Primary query: « Compresser une image à 15 Ko »;
 * secondary: « réduire une photo à 15 Ko ». Angle: the small-but-not-tiny
 * limit — clean the signature first (« Redimensionner une signature »), and
 * why low light and grain eat a small budget.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-15kb",
  locale: "fr",
  name: "Compresser une image à 15 Ko",
  tagline:
    "Compressez une signature ou une petite photo sous 15 Ko pour les formulaires de concours, de recrutement et d'inscription. La version la plus nette qui tienne, calculée dans votre navigateur.",
  category: { id: "optimize", label: "Optimiser" },

  metaTitle: "Compresser une image à 15 Ko – gratuit | oMyImage",
  metaDescription:
    "Compresser une image à 15 Ko : signature nette et photo reconnaissable pour vos formulaires d'inscription. Réduisez une photo à 15 Ko, gratuit et sans envoi.",

  intro:
    "15 Ko se situe entre les limites les plus strictes pour les signatures et les plus petites limites pour les photos, et les formulaires s'en servent pour les deux : le cadre de signature, un petit champ photo, parfois une empreinte de pouce scannée. C'est assez pour une signature propre et lisible, et pour une photo tête et épaules reconnaissable — à condition que l'image soit bien préparée. Ajoutez la vôtre et vous obtenez un JPG de moins de 15 Ko, avec la meilleure qualité qui tienne dans cette limite. Pour un dossier d'inscription en ligne, c'est souvent tout ce qu'il faut.",

  sections: [
    {
      heading: "Ce qui tient dans 15 Ko",
      id: "what-fits",
      body: [
        "Une signature à l'encre foncée sur papier blanc y tient facilement, même à quelques centaines de pixels de large, parce qu'elle est presque entièrement blanche. Une photo est plus exigeante : comptez environ 250 × 310 pixels pour un portrait tête et épaules, soit à peu près la taille à laquelle il apparaît sur une convocation ou un formulaire d'identité.",
        "L'outil trouve la qualité JPG la plus élevée qui reste sous 15 Ko, et ne réduit les dimensions que si la qualité seule n'y parvient pas. La liste des résultats affiche le nouveau poids de chaque fichier, ainsi que ses nouvelles dimensions chaque fois qu'elles ont changé.",
      ],
    },
    {
      heading: "Nettoyez d'abord la signature",
      id: "clean-signature",
      body: [
        "Une signature photographiée sur un bureau emporte avec elle un papier grisâtre, une ombre et une bande de table : autant de détails que le compresseur s'efforce de conserver. Passez-la d'abord par l'outil « Redimensionner une signature » : il rend le papier parfaitement blanc, l'encre bien pleine, et supprime l'espace vide. Une signature propre tient alors sous 15 Ko avec des contours nets et de la marge.",
        "Si le formulaire impose aussi des dimensions exactes en pixels pour la signature, réglez-les dans « Redimensionner une signature » et choisissez-y la fourchette en Ko : les deux sont traités en une seule étape.",
      ],
    },
    {
      heading: "La faible lumière coûte des octets",
      id: "low-light",
      body: [
        "Une photo prise à l'intérieur, le soir, est pleine de grain — de fines taches colorées que l'appareil ajoute quand la lumière manque. Pour un compresseur JPG, ce grain est du détail, et à 15 Ko il occupe la place dont le visage a besoin. La même pose photographiée près d'une fenêtre, en plein jour, donne un fichier de 15 Ko nettement plus net.",
        "Si vous n'avez que la photo granuleuse, la compression fonctionne quand même ; l'outil doit simplement réduire un peu plus les dimensions pour que le fichier tienne, ce qui lisse au passage le grain.",
      ],
    },
    {
      heading: "Photo et signature pour un même formulaire",
      id: "one-form",
      body: [
        "Ajoutez la photo et la signature ensemble : les deux reviennent sous 15 Ko en une seule fois. Si l'un des champs autorise davantage — un champ photo de 50 Ko, par exemple —, compressez ce fichier une nouvelle fois avec sa propre limite, en repartant de l'original et non de la copie à 15 Ko, pour qu'il garde autant de détail que son champ le permet.",
      ],
    },
    {
      heading: "Recadrer une photo pour une limite de 15 Ko",
      id: "small-photo",
      body: [
        "Recadrez de juste au-dessus des cheveux jusqu'à juste sous les épaules, le visage au centre et les yeux à environ un tiers de la hauteur depuis le haut. Le visage doit occuper l'essentiel de l'image : chaque centimètre de mur ou de plafond laissé dans le cadre est un détail que le compresseur doit payer sur les mêmes 15 Ko.",
        "Une photo recadrée serré a aussi besoin d'être moins réduite pour tenir, et le visage qui reste conserve donc plus de pixels. C'est pourquoi la même photo paraît nettement plus nette à 15 Ko quand elle est recadrée d'abord que lorsque l'image entière est compressée telle quelle.",
      ],
    },
  ],

  howToTitle: "Comment compresser une image à 15 Ko",
  steps: [
    { title: "Ajoutez votre image", description: "Une signature ou une photo recadrée, en JPG, PNG ou WebP." },
    { title: "Compressez sous 15 Ko", description: "La limite de 15 Ko est déjà réglée ; qualité et taille ne baissent que dans la mesure nécessaire." },
    { title: "Téléchargez", description: "Téléchargez le JPG et envoyez-le sur votre formulaire." },
  ],

  features: [
    { icon: "draw", title: "Des signatures bien nettes", description: "Une signature propre tient largement sous 15 Ko, avec des contours précis." },
    { icon: "face", title: "Des photos reconnaissables", description: "Une photo tête et épaules garde un visage net à la taille d'une convocation." },
    { icon: "lock", title: "Confidentiel", description: "Signatures et photos sont compressées dans votre navigateur, sur votre appareil." },
  ],

  faqs: [
    { q: "Comment compresser une image à 15 Ko ?", a: "Ajoutez-la ici et cliquez sur « Compresser » : la limite de 15 Ko est déjà réglée. Vous obtenez un JPG de moins de 15 Ko avec la meilleure qualité qui tienne." },
    { q: "Quelle taille de photo tient dans 15 Ko ?", a: "Environ 250 × 310 pixels pour une photo tête et épaules ; les photos plus grandes sont réduites automatiquement jusqu'à ce qu'elles tiennent." },
    { q: "Faut-il nettoyer ma signature avant de la compresser à 15 Ko ?", a: "Oui. L'outil « Redimensionner une signature » blanchit le papier et rogne les bords : la signature tient alors facilement et reste nette." },
    { q: "Pourquoi une photo prise de nuit paraît-elle moins bonne à 15 Ko ?", a: "La faible lumière ajoute du grain, et le compresseur dépense des octets pour le conserver. Une photo du même visage prise de jour paraît plus nette au même poids." },
    { q: "Puis-je compresser ma photo et ma signature à 15 Ko en même temps ?", a: "Oui. Ajoutez les deux ; chacune revient sous 15 Ko." },
    { q: "Et si l'image pèse déjà moins de 15 Ko ?", a: "Si c'est déjà un JPG sous la limite, elle vous est rendue sans modification." },
    { q: "15 Ko, est-ce la même chose que 0,015 Mo ?", a: "Oui, 15 Ko font 15 000 octets. Le fichier passe aussi sur les formulaires qui comptent 1 Ko pour 1024 octets." },
    { q: "Quelle est la meilleure façon de recadrer une photo pour une limite de 15 Ko ?", a: "De juste au-dessus des cheveux à juste sous les épaules, le visage centré et occupant l'essentiel du cadre. Plus le recadrage est serré, plus le visage est net à 15 Ko." },
  ],

  security:
    "Les signatures et les photos sont compressées sur votre appareil, dans votre navigateur. Rien n'est envoyé ni stocké. Seule une image de plus de 16 mégapixels environ, trop lourde pour un onglet de navigateur, passe par notre serveur, où elle est supprimée au bout d'une heure environ.",
};

export default content;

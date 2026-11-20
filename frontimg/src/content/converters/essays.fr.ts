import type { FormatId } from "@/lib/converters/types";

/**
 * French "what is this format" essays.
 *
 * Each converter page composes the essays for BOTH of its formats, so these
 * carry real weight: they are what keeps two pages sharing a source format
 * from reading as the same page twice (see formats.ts). Only the formats a
 * shipped fr pair actually uses are here; anything missing falls back to the
 * English essay through `formatEssay()`.
 */
export const FR_ESSAYS: Partial<Record<FormatId, string>> = {
  jpg:
    "Le JPG (aussi écrit JPEG) est le format standard de la photo depuis 1992. Sa compression avec perte est calquée sur le fonctionnement de la vision humaine : elle élimine les fins détails de couleur que l'œil perçoit à peine. C'est pour cela qu'une photo enregistrée en JPG peut peser dix fois moins que la même image en PNG. La contrepartie est double : le format n'a pas de canal de transparence, et chaque nouvel enregistrement dégrade un peu l'image. Le JPG convient donc aux photos terminées, pas aux fichiers de travail.",
  png:
    "Le PNG est un format sans perte créé en 1996 pour remplacer le GIF, alors soumis à des brevets. Sa compression ne supprime rien : une image peut être ouverte et réenregistrée indéfiniment sans se dégrader, et elle dispose d'un canal alpha complet pour des transparences aux bords doux. Cette fidélité a un prix en octets : une photo enregistrée en PNG pèse souvent plusieurs fois plus que la même photo en JPG. Le PNG est donc le bon choix pour les captures d'écran, les logos et les dessins au trait, pas pour les photos qui sortent de l'appareil.",
  jfif:
    "Le JFIF n'est pas vraiment un format à part : c'est l'abréviation de JPEG File Interchange Format, le conteneur dans lequel est enregistrée l'immense majorité des fichiers que vous appelez déjà JPG. Toute la confusion vient de l'extension. Certaines configurations de Windows et de Chrome enregistrent les images téléchargées en .jfif au lieu de .jpg ; les octets sont ceux d'un JPEG parfaitement ordinaire, mais un nombre étonnant de logiciels refusent de les ouvrir, simplement parce qu'ils ne reconnaissent pas l'extension.",
  gif:
    "Le GIF date de 1987 et se limite à une palette de 256 couleurs par image, d'où les aplats en escalier et le tramage visibles sur les photos enregistrées dans ce format. S'il survit, c'est pour deux raisons : il sait animer, et pratiquement tous les logiciels jamais écrits savent le lire. Sa transparence est binaire (un pixel est soit entièrement visible, soit entièrement invisible), si bien qu'il ne peut pas obtenir les bords adoucis que permet le PNG.",
  bmp:
    "Le BMP est le bitmap historique de Windows, créé par Microsoft, et il est presque toujours enregistré sans aucune compression : chaque pixel est écrit en entier. Une photo de 12 mégapixels en BMP 24 bits occupe environ 36 Mo, contre 3 Mo environ en JPG. On le croise encore dans des utilitaires Windows, d'anciens pilotes de scanner, du matériel médical ou industriel et certains systèmes embarqués. Convertir un BMP est donc un besoin courant, même si presque personne ne choisit ce format volontairement.",
  avif:
    "L'AVIF place le codec vidéo libre de droits AV1 dans un format d'image fixe, et il compresse mieux que tous les autres formats d'usage courant : souvent deux fois moins lourd qu'un JPG de qualité équivalente, avec en prime la transparence et la haute plage dynamique (HDR). Les navigateurs le décodent bien (Chrome depuis la version 85, Firefox depuis la 93, Safari depuis la 16.4), mais en dehors d'eux la prise en charge s'effondre vite : de nombreux logiciels de retouche, les anciens systèmes d'exploitation et la plupart des chaînes d'impression ne savent pas encore ouvrir ce type de fichier.",
  webp:
    "Le WebP est le format d'image présenté par Google en 2010, et il a la particularité de réunir compression avec perte, compression sans perte et transparence dans un même conteneur. En pratique, il pèse de 25 à 35 % de moins qu'un JPG de qualité équivalente, ce qui explique qu'il se soit vite imposé sur le web une fois que Safari l'a pris en charge, en 2020. Son point faible se situe hors du navigateur : beaucoup de logiciels de bureau, d'anciens téléphones et des chaînes d'impression n'ouvrent toujours pas un fichier .webp.",
};

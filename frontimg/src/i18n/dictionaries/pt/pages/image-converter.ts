import type { Dict } from "@/i18n/t";

/**
 * Portuguese strings for /pt/conversor-de-imagens (ConverterHub).
 *
 * The format essays and the card names come from the converter layer
 * (conversion.md §6.4), not from here — this file is only the hub's own
 * chrome and its FAQ.
 */
export const ptImageConverter: Dict = {
  "{n} format converters, each one built for a specific pair rather than a generic drop-down. Pick your source format below. Everything is free, batch-capable, and runs in your browser unless the format makes that impossible.":
    "{n} conversores de formato, cada um feito para um par específico em vez de um menu genérico. Escolha o formato de origem abaixo. Tudo é grátis, aceita lote e roda no seu navegador, a não ser que o formato torne isso impossível.",
  "Convert from {format}": "Converter a partir de {format}",
  "to {format}": "para {format}",
  "Frequently asked questions": "Perguntas frequentes",

  "Which image format should I convert to?": "Para qual formato de imagem devo converter?",
  "JPG for photographs that need to work everywhere. PNG when you need transparency or a lossless file to keep editing. WebP when the destination is a web page and you want the smallest file that still supports transparency. AVIF is smaller again but far fewer applications can open it.":
    "JPG para fotos que precisam funcionar em todo lugar. PNG quando você precisa de transparência ou de um arquivo sem perdas para continuar editando. WebP quando o destino é uma página da web e você quer o menor arquivo que ainda aceita transparência. O AVIF é menor ainda, mas bem menos programas conseguem abrir.",
  "Do these converters upload my images?": "Estes conversores enviam minhas imagens?",
  "Almost all of them run entirely inside your browser, so the image never leaves your device. The exceptions are formats a browser cannot decode or encode on its own — HEIC is the main one — and those pages say so directly.":
    "Quase todos rodam inteiramente dentro do seu navegador, então a imagem nunca sai do seu aparelho. As exceções são formatos que um navegador não consegue decodificar ou gerar sozinho — o HEIC é o principal —, e essas páginas dizem isso com todas as letras.",
  "Can I convert several files at once?": "Posso converter vários arquivos de uma vez?",
  "Yes. Every converter here accepts a batch: add as many files as you like and they come back as a single ZIP rather than as individual downloads.":
    "Pode. Todo conversor daqui aceita lote: adicione quantos arquivos quiser e eles voltam em um único ZIP, em vez de downloads separados.",
  "Is there a file size limit?": "Existe limite de tamanho de arquivo?",
  "There is no hard limit. Very large or very high-resolution images are handed to our server on most converters, since a browser tab cannot paint a canvas beyond a certain size — a 48-megapixel phone photo hits that ceiling even though it is only a few megabytes. BMP is the exception and always converts locally.":
    "Não há limite fixo. Imagens muito grandes ou de resolução muito alta são passadas ao nosso servidor na maioria dos conversores, já que uma aba do navegador não consegue desenhar um canvas acima de certo tamanho — a foto de um celular de 48 megapixels chega nesse teto mesmo tendo poucos megabytes. O BMP é a exceção e sempre converte no seu aparelho.",
  "Do I lose quality when converting?": "Eu perco qualidade ao converter?",
  "It depends on the target. PNG is lossless, so nothing is lost in that step. JPG, WebP and AVIF are lossy and re-encode the image, though at sensible quality settings the change is not visible. Converting repeatedly between lossy formats does accumulate damage, so convert once from the best original you have.":
    "Depende do destino. O PNG é sem perdas, então nada se perde nessa etapa. JPG, WebP e AVIF são com perdas e recodificam a imagem, embora em qualidades sensatas a mudança não apareça. Converter várias vezes entre formatos com perdas acumula estrago, então converta uma vez só, a partir do melhor original que você tiver.",
};

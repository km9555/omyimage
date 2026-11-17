import type { FormatId } from "@/lib/converters/types";

/**
 * German "what is this format" essays.
 *
 * Each converter page composes the essays for BOTH of its formats, so these
 * carry real weight: they are what keeps two pages sharing a source format
 * from reading as the same page twice (see formats.ts). Only the formats a
 * shipped de pair actually uses are here; anything missing falls back to the
 * English essay through `formatEssay()`.
 */
export const DE_ESSAYS: Partial<Record<FormatId, string>> = {
  jpg:
    "JPG (auch JPEG geschrieben) ist seit 1992 das Standardformat für Fotos. Es nutzt eine verlustbehaftete Kompression, die auf die Funktionsweise des menschlichen Sehens abgestimmt ist – es verwirft feine Farbdetails, die das Auge kaum wahrnimmt. Deshalb kann ein als JPG gespeichertes Foto nur ein Zehntel so groß sein wie dasselbe Bild als PNG. Der Preis: JPG hat keinen Transparenzkanal, und jedes erneute Speichern verschlechtert das Bild ein wenig. Es eignet sich daher für fertige Fotos, nicht für Arbeitsdateien.",
  png:
    "PNG ist ein verlustfreies Format, das 1996 als patentfreier Ersatz für GIF entstand. Beim Komprimieren wird nichts verworfen, ein Bild kann also beliebig oft geöffnet und neu gespeichert werden, ohne schlechter zu werden, und es enthält einen vollen Alphakanal für Transparenz mit weichen Kanten. Diese Genauigkeit kostet Platz: Ein als PNG gespeichertes Foto ist meist um ein Mehrfaches größer als dasselbe Foto als JPG. Deshalb ist PNG die richtige Wahl für Screenshots, Logos und Strichzeichnungen, nicht für Bilder direkt aus der Kamera.",
  jfif:
    "JFIF ist eigentlich kein eigenes Format – die Abkürzung steht für JPEG File Interchange Format, und das ist der Container, in dem die überwältigende Mehrheit der Dateien steckt, die Sie ohnehin JPG nennen. Die Verwirrung betrifft allein die Dateiendung. Bestimmte Konfigurationen von Windows und Chrome speichern heruntergeladene Bilder als .jfif statt als .jpg, und obwohl die Bytes ein völlig gewöhnliches JPEG sind, weigert sich erstaunlich viel Software, sie zu öffnen – nur weil sie die Endung nicht erkennt.",
  gif:
    "GIF stammt aus dem Jahr 1987 und ist auf eine Palette von 256 Farben pro Einzelbild beschränkt. Deshalb zeigen als GIF gespeicherte Fotos sichtbare Farbstufen und Dithering. Das Format überlebt aus zwei Gründen: Es kann animieren, und es wird von praktisch jeder jemals geschriebenen Software verstanden. Seine Transparenz ist binär – ein Pixel ist entweder voll sichtbar oder ganz unsichtbar –, weiche Kanten wie bei PNG sind damit nicht möglich.",
  bmp:
    "BMP ist die ursprüngliche Windows-Bitmap von Microsoft und wird meist ganz ohne Kompression gespeichert – jedes Pixel vollständig ausgeschrieben. Ein Foto mit 12 Megapixeln belegt als 24-Bit-BMP etwa 36 MB, als JPG dagegen rund 3 MB. Das Format taucht noch in Windows-Hilfsprogrammen, älteren Scannertreibern, Medizin- und Industriegeräten sowie manchen eingebetteten Systemen auf. Deshalb muss man es häufig umwandeln, obwohl es kaum jemand bewusst wählt.",
  avif:
    "AVIF verpackt den lizenzfreien Videocodec AV1 in ein Standbildformat und komprimiert stärker als jedes andere verbreitete Format – oft auf die halbe Größe eines JPG bei gleicher Qualität, dazu mit Transparenz und hohem Dynamikumfang. Browser dekodieren es gut (Chrome seit Version 85, Firefox seit 93, Safari seit 16.4), außerhalb davon dünnt die Unterstützung aber schnell aus: Viele Bildbearbeitungsprogramme, ältere Betriebssysteme und die meisten Druckabläufe können eine solche Datei bis heute nicht öffnen.",
  webp:
    "WebP ist das Bildformat, das Google 2010 vorgestellt hat, und es ist ungewöhnlich, weil es verlustbehaftete und verlustfreie Kompression sowie Transparenz in einem einzigen Container vereint. In der Praxis ist es etwa 25–35 % kleiner als ein JPG gleicher Qualität, weshalb es sich im Web schnell verbreitet hat, nachdem Safari 2020 die Unterstützung ergänzt hatte. Seine Schwäche liegt außerhalb des Browsers: Viele Desktop-Programme, ältere Handys und Druckabläufe können eine .webp-Datei bis heute nicht öffnen.",
};

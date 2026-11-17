import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/bild-auf-10kb-verkleinern (variant of compress-image,
 * preset targetKb 10). Primary query: „Bild auf 10 KB verkleinern“.
 * Angle: the tightest limit there is — signature and thumb-impression fields.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-10kb",
  locale: "de",
  name: "Bild auf 10 KB verkleinern",
  tagline:
    "Bringen Sie eine Unterschrift, einen Daumenabdruck oder ein kleines Foto unter 10 KB – das strengste Limit, das Online-Formulare kennen. Qualität und Größe werden Schritt für Schritt reduziert, bis die Datei passt, in Ihrem Browser und ohne Upload.",
  category: { id: "optimize", label: "Optimieren" },

  metaTitle: "Bild auf 10 KB verkleinern – kostenlos & online | oMyImage",
  metaDescription:
    "Bild auf 10 KB verkleinern: Unterschrift, Daumenabdruck oder kleines Foto als JPG unter 10 KB. Bild komprimieren im Browser, kostenlos und ohne Anmeldung.",

  intro:
    "10 KB ist die kleinste Dateigröße, die Online-Formulare verlangen, und sie taucht dort auf, wo das Bild selbst klein ist: im Unterschriftenfeld eines Prüfungs- oder Bewerbungsformulars, bei einem Daumenabdruck, im Fotofeld eines älteren Registrierungssystems. Ein Handyfoto ist drei- bis fünfhundertmal so groß. Unter 10 KB zu kommen hat deshalb weniger mit cleverer Kompression zu tun als damit, nur das zu behalten, was das Formular wirklich braucht. Fügen Sie Ihr Bild hier hinzu, und Sie erhalten ein JPG unter 10 KB – die deutlichste Version, die hineinpasst.",

  sections: [
    {
      heading: "Wie klein 10 KB wirklich sind",
      id: "how-small",
      body: [
        "10 KB sind 10.000 Bytes. Eine saubere Unterschrift in schwarzer Tinte auf weißem Papier, eng zugeschnitten und etwa 300 × 120 Pixel groß, passt bequem hinein. Auch ein Brustbild passt – aber nur mit rund 200 × 250 Pixeln, also etwa in der Größe, in der es auf einer Teilnahmebestätigung gedruckt wird, und kaum größer.",
        "Das Tool sucht zuerst die höchste JPG-Qualität, die unter 10 KB bleibt. Ist selbst die niedrigste sinnvolle Qualität noch zu groß, verringert es die Pixelmaße in kleinen Schritten und sucht erneut. So erhalten Sie immer eine Datei unter dem Limit statt einer Fehlermeldung.",
      ],
    },
    {
      heading: "Das Bild vorbereiten, bevor es gepresst wird",
      id: "prepare",
      body: [
        "Jedes Pixel, das Sie nicht brauchen, kostet Bytes, die Sie nicht übrig haben. Schneiden Sie die Unterschrift so zu, dass die Tinte fast die Ränder berührt, und ein Foto auf Kopf und Schultern. Wandeln Sie eine Unterschrift vorher mit dem Tool „Bild schwarz weiß“ um: Farbrauschen von Papier und Licht belegt Platz, ohne etwas beizutragen.",
        "Unterschreiben Sie mit einem dunklen Stift auf glattem weißem Papier und fotografieren Sie bei Tageslicht senkrecht von oben. Ein sauberes, kontrastreiches Original lässt sich weit besser komprimieren als ein graues, verschattetes, und das Ergebnis bleibt lesbar.",
      ],
    },
    {
      heading: "Daumenabdrücke",
      id: "thumb",
      body: [
        "Drücken Sie den Daumen auf ein Stempelkissen und dann einmal fest auf weißes Papier – leichtes Abrollen zeigt mehr vom Abdruck. Fotografieren Sie ihn aus der Nähe bei gutem Licht, damit die Linien scharf sind, und schneiden Sie das Bild vor dem Komprimieren auf den Abdruck selbst zu.",
        "Zoomen Sie nach dem Komprimieren auf 100 %: Die Papillarlinien sollten noch erkennbar sein. Sind sie zu einem dunklen Fleck verschwommen, prüfen Sie, ob das Feld wirklich 10 KB meint – für Daumenabdrücke ist oft mehr Platz vorgesehen als für Unterschriften, und ein größeres Budget erhält die Details.",
      ],
    },
    {
      heading: "Wenn das Ergebnis zu grob aussieht",
      id: "rough",
      body: [
        "Blockige Kanten um Buchstaben bedeuten, dass die Datei sehr stark komprimiert werden musste. Schneiden Sie enger zu, erhöhen Sie den Kontrast oder beginnen Sie mit einem besseren Original. Eine Datei, die knapp unter dem Limit bei ordentlicher Qualität liegt, sieht viel besser aus als ein großes Bild, das passend zerquetscht wurde.",
        "Prüfen Sie auch die übrigen Regeln des Formulars. Viele Felder nennen neben der Dateigröße auch Pixelmaße; bringen Sie das Bild zuerst mit „Bildgröße ändern“ auf diese Maße und komprimieren Sie dann, damit das Formular genau das bekommt, was es verlangt.",
      ],
    },
  ],

  howToTitle: "So verkleinern Sie ein Bild auf 10 KB",
  steps: [
    { title: "Zuschneiden und hinzufügen", description: "Schneiden Sie die Unterschrift oder das Foto eng zu und fügen Sie es hinzu – JPG, PNG oder WebP." },
    { title: "Unter 10 KB komprimieren", description: "Das Limit von 10 KB ist bereits eingestellt. Qualität und Größe werden nur so weit wie nötig reduziert." },
    { title: "Prüfen und herunterladen", description: "Zoomen Sie hinein, um die Lesbarkeit zu prüfen, und laden Sie das JPG herunter." },
  ],

  features: [
    { icon: "draw", title: "Gemacht für Unterschriften", description: "Kleine Schwarz-Weiß-Bilder wie Unterschriften und Daumenabdrücke bleiben unter 10 KB lesbar." },
    { icon: "crop", title: "Verkleinert nur bei Bedarf", description: "Zuerst wird die Qualität angepasst; die Maße sinken nur, wenn die Datei sonst nicht passt." },
    { icon: "lock", title: "Bleibt auf Ihrem Gerät", description: "Ihre Unterschrift wird in Ihrem Browser komprimiert, auf Ihrem eigenen Gerät." },
  ],

  faqs: [
    { q: "Wie verkleinere ich eine Unterschrift auf 10 KB?", a: "Schneiden Sie sie eng zu, fügen Sie sie hier hinzu und klicken Sie auf „Komprimieren“ – das Limit von 10 KB ist bereits eingestellt. Eine vorherige Umwandlung in Schwarz-Weiß ergibt das sauberste Ergebnis." },
    { q: "Passt ein Foto wirklich in 10 KB?", a: "Ja, in etwa in Passbildgröße: rund 200 × 250 Pixel. Das reicht für die kleinen Fotofelder auf Teilnahmebestätigungen und Ausweisformularen, aber nicht für mehr." },
    { q: "Wie fotografiere ich einen Daumenabdruck für ein Online-Formular?", a: "Machen Sie den Abdruck mit einem Stempelkissen auf weißem Papier, fotografieren Sie ihn aus der Nähe bei Tageslicht, schneiden Sie auf den Abdruck zu und komprimieren Sie. Prüfen Sie bei 100 % Zoom, ob die Linien noch sichtbar sind." },
    { q: "Warum ist meine 10-KB-Unterschrift unscharf?", a: "Meist war um die Unterschrift herum zu viel Fläche, oder graues Papier und Schatten. Schneiden Sie enger zu, wandeln Sie sie in Schwarz-Weiß um und komprimieren Sie erneut vom Original aus." },
    { q: "Sollte die Datei bei einem 10-KB-Limit JPG oder PNG sein?", a: "JPG. Das akzeptiert fast jedes Formular, und das Größenlimit dieses Tools erzeugt immer ein JPG (oder WebP, wenn Sie es auswählen)." },
    { q: "Was ist, wenn meine Datei schon unter 10 KB liegt?", a: "Ist sie bereits ein JPG unter dem Limit, bekommen Sie sie unverändert zurück – eine erneute Kompression brächte nichts." },
    { q: "Sind 10 KB dasselbe wie 0,01 MB?", a: "Ja. 10 KB sind 10.000 Bytes, also 0,01 MB. Das Tool rechnet 1 KB als 1.000 Bytes, damit liegt die Datei auch bei Formularen, die mit 1.024 rechnen, unter dem Limit." },
  ],

  security:
    "Unterschriften, Daumenabdrücke und Fotos werden auf Ihrem Gerät komprimiert, in Ihrem Browser. Nichts wird hochgeladen oder gespeichert. Nur ein Bild über etwa 16 Megapixel, zu groß für einen Browser-Tab, wird an unseren Server geschickt und nach etwa einer Stunde gelöscht.",
};

export default content;

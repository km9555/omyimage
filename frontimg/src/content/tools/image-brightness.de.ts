import type { ToolPageContent } from "@/content/tools/types";
import invert from "@/content/tools/invert-image.de";

/**
 * German copy for /de/bild-aufhellen. Target query: „Bild aufhellen"
 * (Germany, Nov 2026); secondary „Helligkeit ändern" in the metaTitle, a
 * heading and an FAQ. The English name (Brightness & Contrast) becomes the
 * query; contrast and saturation are explained in the body.
 */
const content: ToolPageContent = {
  toolId: "image-brightness",
  locale: "de",
  name: "Bild aufhellen",
  tagline:
    "Hellen Sie ein dunkles Foto auf, geben Sie ihm mit Kontrast mehr Kraft und machen Sie Farben mit der Sättigung lebendiger oder ruhiger – mit Live-Vorschau und schnellem Vorher-nachher. Kostenlos, direkt im Browser.",
  category: { id: "edit", label: "Bearbeiten & Erstellen" },

  metaTitle: "Bild aufhellen – Helligkeit & Kontrast ändern | oMyImage",
  metaDescription:
    "Bild aufhellen online und kostenlos: Helligkeit ändern, Kontrast und Sättigung anpassen, mit Live-Vorschau und Vorher-nachher. Mehrere Fotos, ohne Upload.",

  intro:
    "Die meisten Fotos, die enttäuschen, sind nicht unscharf – sie sind ein wenig zu dunkel, zu flau oder zu grau. Drei Regler beheben das meiste davon. Mit „Bild aufhellen“ von oMyImage passen Sie Helligkeit, Kontrast und Sättigung von JPG-, PNG- und WebP-Bildern an, sehen die Änderung live beim Ziehen und können eine Taste gedrückt halten, um wieder das Original zu sehen. Wenden Sie dieselben Einstellungen auf einen ganzen Stapel an, damit eine Serie von Produktfotos oder Urlaubsbildern einheitlich aussieht.",

  sections: [
    {
      heading: "Die drei Regler",
      id: "sliders",
      body: [
        "Die Helligkeit hebt oder senkt jeden Tonwert um denselben Betrag: Nach rechts gezogen rettet sie ein unterbelichtetes Foto, nach links beruhigt sie eines, das zu hell ist. Der Kontrast drückt die Tonwerte vom mittleren Grau weg – dunkle Bereiche werden dunkler, helle heller –, was einem flauen, dunstigen Bild Tiefe gibt; nach links gezogen macht er ein hartes Bild weicher.",
        "Die Sättigung steuert, wie kräftig die Farben sind. Erhöhen Sie sie für Essen, Blumen und Landschaften, senken Sie sie für einen gedämpften, filmähnlichen Look. Bei −100 ist das Bild vollständig schwarz-weiß. „Zurücksetzen“ stellt alle drei wieder auf null.",
      ],
    },
    {
      heading: "Häufige Probleme beheben",
      id: "fixes",
      body: [
        "Ein dunkles Innenraumfoto: Helligkeit +20 bis +40, Kontrast +10, damit es nicht ausgewaschen wirkt. Eine graue, dunstige Landschaft: Kontrast +20 bis +30, Sättigung +15. Ein Handyfoto eines Dokuments für ein Formular: Helligkeit +15 und Kontrast +40 machen das Papier weiß und den Text dunkel und gut lesbar. Ein hartes Mittagsfoto: Kontrast −15 und Sättigung −10.",
        "Kleine Schritte wirken am besten. Hohe Helligkeitswerte drücken helle Bereiche zu reinem Weiß, und diese Details lassen sich nicht zurückholen – achten Sie in der Vorschau auf Himmel und weiße Kleidung.",
      ],
    },
    {
      heading: "Vorher und nachher",
      id: "compare",
      body: [
        "Halten Sie die Taste „Gedrückt halten für das Original“ unter der Vorschau gedrückt, um das unbearbeitete Bild zu sehen; lassen Sie los, und Ihre Anpassungen erscheinen wieder. Häufiges Vergleichen ist der einfachste Weg, es nicht zu übertreiben, denn das Auge gewöhnt sich schnell an ein helleres oder bunteres Bild.",
      ],
    },
    {
      heading: "Einheitliche Serien",
      id: "batch",
      body: [
        "Fügen Sie eine ganze Bildserie hinzu, und auf jedes Bild werden dieselben Einstellungen angewendet. Fotos, die unter demselben Licht entstanden sind, sehen danach einheitlich aus – nützlich für Produktangebote, Immobilienfotos und Alben. Die Vorschau zeigt das erste Bild; jede Datei in der Liste bekommt einen eigenen Download-Button, und mehrere werden zusammen als ZIP heruntergeladen.",
      ],
    },
    {
      heading: "Formate und Qualität",
      id: "formats",
      body: [
        "Das Ergebnis behält das Originalformat, sofern Sie kein anderes wählen. PNG speichert die angepassten Pixel exakt; JPG und WebP verwenden den Qualitätsregler. Transparente Bereiche bleiben in PNG und WebP transparent. Für Schwarz-Weiß mit feinerer Steuerung nutzen Sie „Bild schwarz weiß“, für ein Negativ „Bild invertieren“.",
      ],
    },
    {
      heading: "Helligkeit ändern für Druck und Bildschirm",
      id: "print",
      body: [
        "Fotos wirken auf Papier dunkler als auf einem hinterleuchteten Bildschirm. Bilder für den Druck brauchen daher oft etwas mehr Helligkeit – +10 bis +20 ist üblich – und eine Spur mehr Kontrast. Für Bildschirme prüfen Sie das Ergebnis auf dem Gerät, auf dem es gezeigt wird: Smartphones sind meist heller als Laptop-Displays, und ein Foto, das auf dem einen stimmt, kann auf dem anderen trüb wirken.",
      ],
    },
    {
      heading: "Dokumentfotos für Behörden und Bewerbungen",
      id: "documents",
      body: [
        "Wer ein abfotografiertes Formular, einen Nachweis oder ein Zeugnis in ein Online-Portal hochladen muss, kennt das Problem: Das Papier wirkt grau, die Schrift blass. Etwas mehr Helligkeit und deutlich mehr Kontrast machen die Seite weiß und den Text gut lesbar. Ist die Datei danach zu groß für das Upload-Limit, verkleinern Sie sie anschließend mit „Bild komprimieren“.",
      ],
    },
    {
      heading: "Datenschutz",
      id: "privacy",
      body: [
        "Jedes Bild wird vollständig in Ihrem Browser angepasst. Nichts wird auf einen Server hochgeladen, und nach dem Schließen der Seite bleibt nichts gespeichert.",
      ],
    },
  ],

  howToTitle: "So ändern Sie die Helligkeit eines Bildes",
  steps: [
    { title: "Bilder hinzufügen", description: "Wählen Sie ein oder mehrere JPG-, PNG- oder WebP-Bilder aus." },
    { title: "Anpassen", description: "Bewegen Sie die Regler für Helligkeit, Kontrast und Sättigung; halten Sie gedrückt zum Vergleichen." },
    { title: "Übernehmen und herunterladen", description: "Klicken Sie auf „Anpassungen übernehmen“, um das Bild herunterzuladen – oder eine ZIP-Datei bei mehreren." },
  ],

  features: [
    { icon: "light_mode", title: "Drei wichtige Regler", description: "Helligkeit, Kontrast und Sättigung, von −100 bis +100." },
    { icon: "visibility", title: "Vorher und nachher", description: "Live-Vorschau, und gedrückt halten zeigt das Original." },
    { icon: "lock", title: "Kein Upload", description: "Wird vollständig in Ihrem Browser angepasst." },
  ],

  faqs: [
    { q: "Wie mache ich ein Foto heller?", a: "Fügen Sie es hinzu, ziehen Sie den Regler „Helligkeit“ nach rechts und klicken Sie auf „Anpassungen übernehmen“." },
    { q: "Was bewirkt der Kontrast?", a: "Er drückt dunkle und helle Töne weiter auseinander und gibt flauen Fotos mehr Tiefe." },
    { q: "Was bewirkt die Sättigung?", a: "Sie macht Farben kräftiger oder gedämpfter; bei −100 wird das Foto schwarz-weiß." },
    { q: "Wie rette ich ein zu dunkles Foto?", a: "Erhöhen Sie die Helligkeit um 20 bis 40 und den Kontrast um etwa 10, damit es nicht ausgewaschen wirkt." },
    { q: "Kann ich ein Dokumentfoto lesbarer machen?", a: "Ja. Etwas mehr Helligkeit und deutlich mehr Kontrast machen die Seite weiß und den Text dunkel." },
    { q: "Kann ich mit dem Original vergleichen?", a: "Ja. Halten Sie die Taste unter der Vorschau gedrückt, um das Original zu sehen." },
    { q: "Kann ich mehrere Fotos auf einmal anpassen?", a: "Ja. Auf alle werden dieselben Einstellungen angewendet, und sie werden als ZIP heruntergeladen." },
    { q: "Geht Qualität verloren?", a: "PNG behält jedes Pixel. JPG und WebP werden mit der gewählten Qualität neu gespeichert." },
    { q: "Wird mein Bild hochgeladen?", a: "Nein. Alles geschieht in Ihrem Browser." },
    { q: "Funktioniert das auf dem Smartphone?", a: "Ja, in jedem mobilen Browser." },
    { q: "Kann ich die Änderungen rückgängig machen?", a: "Setzen Sie die Regler vor dem Herunterladen zurück; danach bewahren Sie am besten Ihre Originaldatei auf." },
    { q: "Ist das kostenlos?", a: "Ja. Ohne Anmeldung, ohne Wasserzeichen und ohne Limit." },
    { q: "Ändern sich die Farben, wenn ich die Helligkeit erhöhe?", a: "Sie werden heller, behalten aber ihren Farbton. Nur der Sättigungsregler macht sie kräftiger oder blasser." },
    { q: "Kann ich die Helligkeit ändern, ohne den Kontrast anzufassen?", a: "Ja. Jeder Regler wirkt für sich; lassen Sie Kontrast und Sättigung einfach auf null." },
  ],

  security:
    "Ihre Bilder werden vollständig in Ihrem Browser angepasst. Nichts wird hochgeladen, gespeichert oder nachverfolgt.",

  // ImageFilterTool.tsx is shared with invert-image; reuse its translations.
  ui: invert.ui,
};

export default content;

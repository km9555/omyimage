import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/exif-daten-anzeigen.
 *
 * Primary query "EXIF-Daten anzeigen" (DE); secondary "EXIF-Daten",
 * "Metadaten Bild" / "Metadaten auslesen". The sister tool remove-exif is
 * referred to by its German name „Metadaten entfernen“.
 */
const content: ToolPageContent = {
  toolId: "image-metadata",
  locale: "de",
  name: "EXIF-Daten anzeigen",
  tagline:
    "Zeigen Sie die EXIF-Metadaten eines Bildes online an — Kamera, Objektiv, Belichtung, GPS-Standort und Datum. Kostenlos, schnell und zu 100 % privat in Ihrem Browser.",
  category: { id: "edit", label: "Bearbeiten & Erstellen" },

  metaTitle: "EXIF-Daten anzeigen – Metadaten von Bildern | oMyImage",
  metaDescription:
    "EXIF-Daten anzeigen: Metadaten eines Bildes online auslesen — Kamera, Objektiv, Belichtung, Datum und GPS-Standort. Auch HEIC, kostenlos, ohne Upload.",

  intro:
    "Entdecken Sie die verborgene Geschichte hinter jedem Foto. Mit diesem Tool von oMyImage lassen Sie sich die EXIF-Daten Ihres Bildes direkt im Browser anzeigen — Kamera und Objektiv, Blende, Verschlusszeit, ISO, Aufnahmedatum und sogar den GPS-Standort — übersichtlich aufbereitet, mit der vollständigen Liste aller Metadaten nur einen Klick entfernt. Nichts wird hochgeladen, Ihr Foto bleibt privat.",

  sections: [
    {
      heading: "Was Metadaten sind und woher sie kommen",
      id: "what",
      body: [
        "Jede Kamera schreibt neben dem eigentlichen Bild einen Informationsblock in die Datei. Das meiste davon legt der EXIF-Standard fest, und er wurde für Fotografen entwickelt — als genaues Protokoll, wie jede Aufnahme belichtet wurde. Das ist wirklich nützlich, wenn Sie herausfinden wollen, warum ein Bild gelungen ist und ein anderes nicht.",
        "Moderne Smartphones fügen deutlich mehr hinzu: GPS-Koordinaten, Höhe und Himmelsrichtung, wenn die Ortungsdienste aktiv sind; das Gerätemodell und oft eine Seriennummer; die Softwareversion, die das Bild verarbeitet hat. Manche Kameras füllen Besitzer- und Copyright-Felder aus Einstellungen, die man einmal vorgenommen und dann vergessen hat.",
        "Bildbearbeitungsprogramme ergänzen eigene Einträge, sodass eine Datei nach und nach eine teilweise Chronik dessen sammelt, was wann mit ihr gemacht wurde. Nichts davon ist im Bild zu sehen, und alles reist mit der Datei mit.",
      ],
    },
    {
      heading: "EXIF-Daten vor dem Teilen prüfen",
      id: "why",
      body: [
        "Der praktischste Grund für einen Blick: herausfinden, was Sie gleich preisgeben. Ein Foto von zu Hause enthält Ihre Adresse, eines vom Arbeitsplatz die Ihres Arbeitgebers. Etwas online verkaufen, in einem Forum posten, einer fremden Person eine Datei schicken — jedes Mal ist das Bild anonym, die Metadaten sind es nicht.",
        "Es gibt auch konstruktive Gründe. Fotografen werten Belichtungsdaten aus, um aus eigenen Ergebnissen zu lernen oder zu verstehen, wie jemand anderes eine Aufnahme gemacht hat. Wer eine große Fotosammlung ordnet, verlässt sich auf Aufnahmezeitpunkte, um Bilder zu sortieren, deren Dateinamen längst durcheinander sind. Bei Versicherungs- und Rechtsdokumentation kommt es oft darauf an, wann und wo ein Foto aufgenommen wurde.",
        "Und wenn Sie ein Bild erhalten, sind die Metadaten eine erste Prüfung der Herkunft — allerdings eine weiche, denn alles darin lässt sich bearbeiten.",
      ],
    },
    {
      heading: "Was Metadaten nicht beweisen können",
      id: "limits",
      body: [
        "Metadaten sind Daten, keine Beweise. Jedes Feld lässt sich mit frei verfügbaren Werkzeugen ändern, ein Zeitstempel oder ein Ort beweist also nur, dass jemand diese Werte in die Datei geschrieben hat. Betrachten Sie das Gefundene als Hinweis, nicht als Schlussfolgerung.",
        "Fehlende Daten beweisen noch weniger. Ein Foto ohne Metadaten ist sehr wahrscheinlich durch eine Plattform gegangen, die sie entfernt, ist ein Screenshot oder wurde von einem Editor neu gespeichert — nichts davon bedeutet, dass absichtlich etwas verborgen wurde.",
        "Verlässlich zeigen Metadaten nur eines: was eine Datei aktuell preisgibt. Genau diese Frage beantwortet das Tool gut, und meist ist es genau die Frage, die zählt, bevor Sie etwas verschicken.",
      ],
    },
    {
      heading: "Lokal ausgelesen, auch HEIC",
      id: "privacy",
      body: [
        "Die Datei wird in Ihrem Browser ausgewertet und nie hochgeladen — der richtige Umgang für ein Tool, dessen ganzer Zweck die Prüfung möglicherweise sensibler Informationen ist. Ein Foto an einen Server zu schicken, um herauszufinden, ob es Ihre Adresse verrät, wäre ein seltsamer Tausch.",
        "HEIC- und HEIF-Dateien funktionieren hier, obwohl die Website sie im Browser nicht anzeigen kann. Die Metadaten liegen im Container und nicht in den komprimierten Pixeldaten, der Parser liest die Tags also, ohne den HEVC-Datenstrom anzufassen. Deshalb klappt das lokal, während die HEIC-Umwandlung auf einem Server laufen muss.",
      ],
    },
  ],

  howToTitle: "So zeigen Sie die EXIF-Daten eines Bildes an",
  steps: [
    { title: "Hochladen", description: "Wählen Sie ein Foto aus, oder ziehen Sie es in den Arbeitsbereich." },
    { title: "Daten ablesen", description: "Sehen Sie Kamera, Objektiv, Belichtung, Datum und GPS-Angaben, die aus den EXIF-Daten der Datei ausgelesen werden." },
    { title: "Alles durchsehen", description: "Klappen Sie die vollständige Metadatenliste auf, um jeden eingebetteten Tag zu prüfen." },
  ],

  features: [
    { icon: "photo_camera", title: "Vollständige EXIF-Anzeige", description: "Kamerahersteller und -modell, Objektiv, Blende, Verschlusszeit, ISO, Brennweite, Daten und mehr — übersichtlich gruppiert." },
    { icon: "location_on", title: "GPS-Standort", description: "Enthält das Foto Geodaten, sehen Sie die Koordinaten und können den genauen Ort auf einer Karte öffnen." },
    { icon: "lock", title: "100 % privat", description: "Die Metadaten werden komplett in Ihrem Browser ausgelesen — Ihr Foto wird nie auf einen Server hochgeladen." },
  ],

  faqs: [
    { q: "Welche Metadaten kann das Tool lesen?", a: "EXIF, darunter Kamera und Objektiv, Belichtungseinstellungen, Aufnahmedatum, Ausrichtung, Farbraum und — falls vorhanden — GPS-Koordinaten." },
    { q: "Warum zeigt mein Bild keine Metadaten?", a: "Sie wurden womöglich entfernt (z. B. von sozialen Netzwerken), oder das Format speichert kein EXIF — die meisten PNGs und Screenshots haben keine." },
    { q: "Kann ich den GPS-Standort sehen?", a: "Ja. Fotos mit Geodaten zeigen ihre Koordinaten mit einem Link, um den Ort auf einer Karte anzusehen." },
    { q: "Ist das kostenlos und privat?", a: "Ja. Keine Anmeldung, und das Foto wird lokal in Ihrem Browser gelesen — nichts wird hochgeladen." },
    { q: "Was verraten Metadaten über ein Foto?", a: "Wann es aufgenommen wurde, auf die Sekunde genau; wo, auf wenige Meter genau, wenn die Ortung aktiv war; mit welcher Kamera oder welchem Handy, inklusive Modell und oft Seriennummer; und die kompletten Belichtungseinstellungen — Verschlusszeit, Blende, ISO, Brennweite, Blitz. Manche Dateien enthalten außerdem Besitzer- und Copyright-Felder sowie einen Bearbeitungsverlauf." },
    { q: "Kann ich erkennen, ob ein Foto bearbeitet wurde?", a: "Manchmal. Bildbearbeitungsprogramme schreiben häufig ihren eigenen Namen in die Metadaten, und das Änderungsdatum weicht oft vom Aufnahmedatum ab. Metadaten lassen sich aber mühelos ändern — ihr Fehlen beweist nichts, und ihr Vorhandensein ist ein Indiz, kein Beweis." },
    { q: "Warum hat mein Foto überhaupt keine Metadaten?", a: "Höchstwahrscheinlich ist es schon durch etwas gegangen, das sie entfernt hat. Soziale Netzwerke entfernen Metadaten beim Hochladen, Screenshots hatten nie welche, und viele Messenger kodieren Bilder beim Senden neu. Auch Bearbeiten und erneutes Speichern in manchen Programmen verwirft sie." },
    { q: "Kann das Tool HEIC-Dateien von meinem iPhone lesen?", a: "Ja. Es liest die Metadaten direkt aus dem Container, ohne die HEVC-komprimierten Pixel zu dekodieren — deshalb funktioniert es in Ihrem Browser, obwohl die Anzeige einer HEIC-Datei dort nicht möglich ist. Kameraeinstellungen, Zeitstempel und GPS werden ganz normal gelesen." },
    { q: "Wie entferne ich, was ich hier finde?", a: "Mit dem Tool „Metadaten entfernen“. Es kodiert das Bild aus den reinen Pixeln neu, sodass keinerlei Metadaten zurückbleiben. Erst lesen, dann entfernen — zu wissen, was eine Datei mit sich trug, ist oft nützlicher, als sie blind zu bereinigen." },
    { q: "Wie genau sind die GPS-Daten?", a: "Im Freien mit gutem Satellitenempfang meist auf wenige Meter. In Gebäuden oder in dicht bebauten Innenstädten, wo das Handy auf WLAN- und Mobilfunkortung ausweicht, können es Dutzende oder Hunderte Meter Abweichung sein. In jedem Fall reicht es leicht, um ein Gebäude zu identifizieren." },
    { q: "Werden meine Bilder hochgeladen (DSGVO)?", a: "Nein. Die EXIF-Daten werden vollständig in Ihrem Browser ausgelesen, die Datei verlässt Ihr Gerät nicht. Es gibt also keine Kopie auf einem Server, die personenbezogene Daten wie Ihren Standort enthalten könnte." },
  ],

  security:
    "Ihr Foto bleibt privat. Die EXIF-Metadaten werden vollständig in Ihrem Browser ausgelesen — nichts wird auf einen Server hochgeladen. Keine Speicherung, kein Tracking Ihrer Dateien.",

  ui: {
    // ImageMetadataTool.tsx
    "Please select an image file.": "Bitte wählen Sie eine Bilddatei aus.",
    "Select an image": "Bild auswählen",
    "or drop a JPG, PNG, TIFF or HEIC photo here": "oder ein JPG-, PNG-, TIFF- oder HEIC-Foto hier ablegen",
    "Change image": "Bild ändern",
    "Clear image": "Bild entfernen",
    "Metadata": "Metadaten",
    "Metadata of {name}": "Metadaten von {name}",
    "Metadata options": "Metadaten-Optionen",
    "All metadata ({n})": "Alle Metadaten ({n})",
    "No EXIF block in this file — messaging apps and social networks usually strip it. The file and image details below are read from the image itself, so they are still accurate.":
      "Diese Datei enthält keinen EXIF-Block — Messenger und soziale Netzwerke entfernen ihn meist. Die Datei- und Bildangaben unten werden aus dem Bild selbst gelesen und sind daher trotzdem korrekt.",
    "Location": "Standort",
    "Latitude": "Breitengrad",
    "Longitude": "Längengrad",
    "View on map": "Auf Karte anzeigen",
    "Raw header": "Roh-Header",
    "Raw header (first 128 bytes)": "Roh-Header (erste 128 Bytes)",
    "bytes": "Bytes",
    "image": "Bild",
    "Unknown": "Unbekannt",
    "unknown": "unbekannt",
    "Copy": "Kopieren",
    "Copy all": "Alle kopieren",
    "Copied to clipboard.": "In die Zwischenablage kopiert.",
    "Couldn't copy to the clipboard.": "Kopieren in die Zwischenablage fehlgeschlagen.",
    "Downloaded metadata as JSON.": "Metadaten als JSON heruntergeladen.",
    "Downloaded metadata as TXT.": "Metadaten als TXT heruntergeladen.",
    "Generated by oMyImage": "Erstellt mit oMyImage",
    "Extracted automatically in your browser. It may be neither complete nor":
      "Automatisch in Ihrem Browser ausgelesen. Die Angaben sind möglicherweise weder vollständig noch",
    "accurate — metadata can be edited or removed at any point in a file's life.":
      "korrekt — Metadaten können jederzeit im Leben einer Datei bearbeitet oder entfernt werden.",
  },
};

export default content;

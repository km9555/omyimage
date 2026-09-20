/**
 * Hindi site-level copy — the brand tagline and the description used for the
 * `/hi` layout defaults, the Hindi home page and its Open Graph card.
 *
 * Written for the SERP snippet, not as a translation of the English one. The
 * English tagline ("Effortless Power for Image Workflows") is a brand line with
 * no Indian search volume; the Hindi H1 carries the head term people actually
 * type — "फोटो टूल" / "इमेज ऑनलाइन एडिट" — with **मुफ़्त** up front, which is
 * the word that decides the click on an Indian SERP.
 *
 * Both head-term shapes appear once, per the two-term rule (conversion.md §5):
 * the H1 uses the loanword form (इमेज टूल) that a Hinglish searcher scans for,
 * and the intro uses the everyday native form (फोटो का साइज़ कम करें) that the
 * Hindi-script problem query matches.
 *
 * "मुफ़्त" rather than "निःशुल्क": both are correct, only one gets typed.
 * The description closes on the two objections that decide the click —
 * nothing to install, no sign-up.
 */

export const hiSite = {
  tagline: "मुफ़्त ऑनलाइन इमेज टूल",
  description:
    "मुफ़्त ऑनलाइन इमेज टूल: फोटो कंप्रेस करें, रिसाइज़ करें, क्रॉप करें, फ़ॉर्मैट बदलें, बैकग्राउंड हटाएँ और वॉटरमार्क लगाएँ। फ़ाइलें आपके ब्राउज़र में ही प्रोसेस होती हैं — न कुछ इंस्टॉल करना है, न अकाउंट बनाना।",
  /** Home page `<h1>` — carries the head term. */
  homeH1: "मुफ़्त ऑनलाइन इमेज टूल",
  homeIntro:
    "फोटो का साइज़ कम करें, साइज़ बदलें, फ़ॉर्मैट बदलें और एडिट करें — सब कुछ सीधे ब्राउज़र में, बिना कुछ इंस्टॉल किए और बिना अकाउंट बनाए।",
} as const;

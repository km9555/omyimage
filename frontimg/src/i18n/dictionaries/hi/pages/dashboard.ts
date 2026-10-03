import type { Dict } from "@/i18n/t";

/**
 * Hindi strings for /hi/dashboard (DashboardClient).
 *
 * "there" is the fallback greeting name when an account has neither a display
 * name nor a usable email prefix — it is a word, not a placeholder. Hindi uses
 * a polite address rather than a name, so "आपका फिर से स्वागत है, जी" would
 * read oddly; "दोस्त" is the natural filler in the same slot.
 *
 * The Favorites tip is composed as `A <Icon/> B`. Hindi puts the object before
 * the verb, so A carries the location ("किसी भी टूल कार्ड पर") and B the verb
 * that governs the icon — "…दबाकर उसे पसंदीदा में जोड़ें।"
 */
export const hiDashboard: Dict = {
  "Welcome back, {name}": "आपका फिर से स्वागत है, {name}",
  "there": "दोस्त",
  "Jump back into your image workflows.": "अपने इमेज के काम पर वापस लौटें।",
  "Account": "खाता",
  "Sign out": "लॉगआउट",
  "Signed out.": "आप लॉगआउट हो गए।",

  // Plan card
  "{plan} plan": "{plan} प्लान",
  "Free": "Free", // i18n-same — the plan name
  "{allowance} · files up to {mb} MB on our server":
    "{allowance} · हमारे सर्वर पर {mb} MB तक की फ़ाइलें",
  "used today": "आज इस्तेमाल हुए",
  "Everything that runs in your browser stays unlimited and uncounted.":
    "जो कुछ आपके ब्राउज़र में चलता है वह असीमित रहता है और गिना नहीं जाता।",
  "See plans": "प्लान देखें",
  "You're on {plan}": "आप {plan} पर हैं",

  // Lists and search
  "Favorites": "पसंदीदा",
  "Last used": "हाल में इस्तेमाल हुए",
  "All tools": "सारे टूल",
  "Search tools…": "टूल खोजें…",
  "Search tools": "टूल खोजें",
  "Tip: tap the": "सुझाव: किसी भी टूल कार्ड पर",
  "on any tool card to add it to Favorites.": "दबाकर उसे पसंदीदा में जोड़ें।",
  "No tools match “{query}”.": "“{query}” से कोई टूल नहीं मिला।",
};

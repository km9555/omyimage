import type { Dict } from "@/i18n/t";

/**
 * Hindi strings for /hi/account (AccountClient).
 *
 * The plan names (Free, Plus, Pro) are product names and stay in English, the
 * same decision as on the pricing page.
 *
 * The plan sentence is composed as `A <strong>{plan}</strong> B`, so the plan
 * name sits between two translated fragments. Hindi keeps the same order by
 * putting the subject in A and the verb at the head of B, which is where the
 * English colon already falls: "आप Free प्लान पर हैं: …".
 */
export const hiAccount: Dict = {
  "My Account": "मेरा खाता",
  "Email": "ईमेल",
  "Plan": "प्लान",
  "Free plan": "मुफ़्त प्लान",
  "Allowance": "कोटा",
  "Member since": "सदस्य बने",

  // Display name
  "Display name": "दिखने वाला नाम",
  "Optional — we'll greet you by this name.": "वैकल्पिक — हम आपको इसी नाम से बुलाएँगे।",
  "Your name": "आपका नाम",
  "Save": "सहेजें",
  "Name updated.": "नाम बदल गया।",
  "Could not save name.": "नाम सहेजा नहीं जा सका।",

  // Password
  "Change password": "पासवर्ड बदलें",
  "Set a password": "पासवर्ड तय करें",
  "Your account uses Google sign-in. Set a password to also log in with email.":
    "आपका खाता Google से लॉगिन करता है। ईमेल से भी लॉगिन करने के लिए एक पासवर्ड तय कर लें।",
  "Current password": "मौजूदा पासवर्ड",
  "New password (at least 6 characters)": "नया पासवर्ड (कम से कम 6 अक्षर)",
  "Confirm new password": "नया पासवर्ड दोबारा लिखें",
  "Update password": "पासवर्ड बदलें",
  "Set password": "पासवर्ड तय करें",
  "New password must be at least 6 characters.": "नए पासवर्ड में कम से कम 6 अक्षर होने चाहिए।",
  "New passwords don't match.": "दोनों नए पासवर्ड एक जैसे नहीं हैं।",
  "Password changed.": "पासवर्ड बदल गया।",
  "Password set.": "पासवर्ड तय हो गया।",
  "Could not change password.": "पासवर्ड बदला नहीं जा सका।",

  // Plan card
  "You're on the": "आप",
  "plan: {allowance}, and server processing for files up to {mb} MB. Everything that runs in your browser is unlimited on every plan.":
    "प्लान पर हैं: {allowance}, और {mb} MB तक की फ़ाइलों के लिए सर्वर प्रोसेसिंग। जो कुछ आपके ब्राउज़र में चलता है वह हर प्लान में असीमित है।",
  "Paid plans aren't available to buy yet, so there is nothing to cancel and no payment method stored.":
    "पेड प्लान अभी ख़रीदे नहीं जा सकते, इसलिए रद्द करने को कुछ है ही नहीं और भुगतान का कोई तरीक़ा सहेजा नहीं गया है।",
  "See plans": "प्लान देखें",

  "Signed out.": "आप लॉगआउट हो गए।",
};

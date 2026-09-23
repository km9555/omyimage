import type { Dict } from "@/i18n/t";

/**
 * Hindi strings for /hi/signup (SignupForm).
 *
 * "and|between links" is the fragment between the Terms and Privacy links in
 * the consent checkbox — a context key, because "and" on its own would
 * collide with any other use of the word.
 *
 * The checkbox renders as `A <Link>B</Link> C <Link>D</Link>.` — there is no
 * slot after the second link, so the Hindi verb that would naturally close the
 * sentence ("…से सहमत हूँ") has nowhere to go but inside the link label, where
 * it would be underlined and would make the link read as a sentence. A colon
 * construction avoids that: the predicate sits in A and both links stay clean
 * nouns — "मैं सहमत हूँ: शर्तें और प्राइवेसी पॉलिसी।"
 */
export const hiSignup: Dict = {
  "Create your account": "अपना खाता बनाएँ",
  "Create a free account — upgrade anytime.": "मुफ़्त खाता बनाएँ — प्लान कभी भी बदल सकते हैं।",
  "Already have an account?": "पहले से खाता है?",
  "Log in": "लॉगिन करें",
  "Name (optional)": "नाम (वैकल्पिक)",
  "How should we address you?": "हम आपको किस नाम से बुलाएँ?",
  "Email": "ईमेल",
  "Password": "पासवर्ड",
  "At least 6 characters": "कम से कम 6 अक्षर",
  "Confirm password": "पासवर्ड दोबारा लिखें",
  "Re-enter your password": "अपना पासवर्ड दोबारा लिखें",
  "I agree to the": "मैं सहमत हूँ:",
  "Terms": "शर्तें",
  "and|between links": "और",
  "Privacy Policy": "प्राइवेसी पॉलिसी",
  "Create account": "खाता बनाएँ",
  "Sign up with Google": "Google से खाता बनाएँ",
  "The free tools stay free and will never require an account.":
    "मुफ़्त टूल मुफ़्त ही रहेंगे और उनके लिए कभी खाता ज़रूरी नहीं होगा।",

  // Confirmation state
  "Check your inbox": "अपना इनबॉक्स देखें",
  "We sent a confirmation link to {email}. Click it to activate your account.":
    "हमने {email} पर पुष्टि का लिंक भेजा है। खाता चालू करने के लिए उस पर क्लिक करें।",
  "Wrong email?": "ईमेल ग़लत लिखा?",
  "Go back": "वापस जाएँ",
  "Didn't get it? Check spam, or wait a minute and try signing up again.":
    "नहीं मिला? स्पैम देखें, या एक मिनट रुककर दोबारा खाता बनाने की कोशिश करें।",
  "Back to login": "लॉगिन पर वापस",

  // Validation
  "Password must be at least 6 characters.": "पासवर्ड में कम से कम 6 अक्षर होने चाहिए।",
  "Passwords don't match.": "दोनों पासवर्ड एक जैसे नहीं हैं।",
  "Please accept the Terms and Privacy Policy.": "कृपया शर्तें और प्राइवेसी पॉलिसी स्वीकार करें।",
};

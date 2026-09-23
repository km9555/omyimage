import type { Dict } from "@/i18n/t";

/** Hindi strings for /hi/forgot-password (ForgotPasswordForm). */
export const hiForgotPassword: Dict = {
  "Reset your password": "अपना पासवर्ड रीसेट करें",
  "Enter your email and we'll send you a reset link.":
    "अपना ईमेल लिखें, हम आपको रीसेट का लिंक भेज देंगे।",
  "Remembered it?": "पासवर्ड याद आ गया?",
  "Log in": "लॉगिन करें",
  "Email": "ईमेल",
  "Send reset link": "रीसेट लिंक भेजें",

  // Sent state — the wording stays hedged on purpose: confirming whether the
  // address exists would turn this form into an account-enumeration oracle.
  "Check your inbox": "अपना इनबॉक्स देखें",
  "If an account exists for {email}, we sent a password reset link.":
    "अगर {email} के लिए कोई खाता है, तो हमने पासवर्ड रीसेट का लिंक भेज दिया है।",
  "The link expires in 1 hour. Didn't get it? Check spam or try again.":
    "लिंक 1 घंटे में ख़त्म हो जाता है। नहीं मिला? स्पैम देखें या फिर से कोशिश करें।",
  "Back to login": "लॉगिन पर वापस",
};

import type { Dict } from "@/i18n/t";

/** Indonesian strings for /id/lupa-kata-sandi (ForgotPasswordForm). */
export const idForgotPassword: Dict = {
  "Reset your password": "Atur ulang kata sandi Anda",
  "Enter your email and we'll send you a reset link.":
    "Masukkan email Anda dan kami akan mengirim tautan untuk mengatur ulang.",
  "Remembered it?": "Sudah ingat?",
  "Log in": "Masuk",
  "Email": "Email", // i18n-same — the word Indonesian forms print
  "Send reset link": "Kirim tautan",

  // Sent state — the wording stays hedged on purpose: confirming whether the
  // address exists would turn this form into an account-enumeration oracle.
  // «Jika … terdaftar» keeps exactly that hedge.
  "Check your inbox": "Periksa kotak masuk Anda",
  "If an account exists for {email}, we sent a password reset link.":
    "Jika {email} terdaftar sebagai akun, kami sudah mengirim tautan untuk mengatur ulang kata sandi.",
  "The link expires in 1 hour. Didn't get it? Check spam or try again.":
    "Tautan berlaku selama 1 jam. Belum menerima? Periksa folder spam atau coba lagi.",
  "Back to login": "Kembali ke halaman masuk",
};

import type { Dict } from "@/i18n/t";

/**
 * Indonesian strings for /id/dasbor (DashboardClient).
 *
 * "there" is the fallback greeting name when an account has neither a display
 * name nor a usable email prefix — a word that lands where a first name
 * normally goes. «Kak», the friendly address of Indonesian e-commerce, would
 * break the formal «Anda» register the rest of the site keeps; «pengguna»
 * reads like a system message. So the slot takes a second greeting instead,
 * as the pt and ru twins do: «Selamat datang kembali, senang melihat Anda
 * lagi» — and a real name in the same slot («Selamat datang kembali, Budi»)
 * reads normally too.
 *
 * The Favorites tip is composed as `A <Icon/> B`; Indonesian keeps English's
 * order: «Tips: ketuk ★ di kartu alat mana pun untuk menambahkannya ke
 * Favorit.»
 */
export const idDashboard: Dict = {
  "Welcome back, {name}": "Selamat datang kembali, {name}",
  "there": "senang melihat Anda lagi",
  "Jump back into your image workflows.": "Lanjutkan pekerjaan gambar Anda.",
  "Account": "Akun",
  "Sign out": "Keluar",
  "Signed out.": "Anda sudah keluar.",

  // Plan card
  "{plan} plan": "Paket {plan}",
  "Free": "Free", // i18n-same — the plan name
  "{allowance} · files up to {mb} MB on our server":
    "{allowance} · file hingga {mb} MB di server kami",
  "used today": "terpakai hari ini",
  "Everything that runs in your browser stays unlimited and uncounted.":
    "Semua yang berjalan di browser Anda tetap tanpa batas dan tidak dihitung.",
  "See plans": "Lihat paket",
  "You're on {plan}": "Anda memakai {plan}",

  // Lists and search
  "Favorites": "Favorit",
  "Last used": "Terakhir dipakai",
  "All tools": "Semua alat",
  "Search tools…": "Cari alat…",
  "Search tools": "Cari alat",
  "Tip: tap the": "Tips: ketuk",
  "on any tool card to add it to Favorites.": "di kartu alat mana pun untuk menambahkannya ke Favorit.",
  "No tools match “{query}”.": "Tidak ada alat yang cocok dengan \"{query}\".",
};

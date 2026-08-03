export type Language = {
  code: string;
  label: string;
  flag: string;
  available: boolean;
};

// Only English is live today — the rest ship soon. Keep `available: false`
// until each locale is translated, then flip the flag.
export const LANGUAGES: Language[] = [
  { code: "en", label: "English", flag: "🇬🇧", available: true },
  { code: "es", label: "Español", flag: "🇪🇸", available: false },
  { code: "fr", label: "Français", flag: "🇫🇷", available: false },
  { code: "de", label: "Deutsch", flag: "🇩🇪", available: false },
  { code: "pt", label: "Português", flag: "🇵🇹", available: false },
  { code: "hi", label: "हिन्दी", flag: "🇮🇳", available: false },
];

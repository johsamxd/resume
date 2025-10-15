import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { en, ru } from "./locales";

i18next.use(LanguageDetector).init({
  fallbackLng: "en",
  resources: {
    en,
    ru,
  },
  supportedLngs: ["en", "ru"],
});

export function initLangSwitcher(onLanguageChange: () => void): void {
  const LangSwitcher = document.getElementById(
    "lang-switcher"
  ) as HTMLButtonElement;
  if (LangSwitcher) {
    LangSwitcher.addEventListener("click", () => {
      const newLang = i18next.language === "en" ? "ru" : "en";
      i18next.changeLanguage(newLang).then(() => {
        localStorage.setItem("i18nextLng", newLang);
        updateButtonText();
        onLanguageChange();
      });
    });
    const updateButtonText = () => {
      LangSwitcher.textContent = i18next.language === "en" ? "ENG" : "РУС";
    };
    updateButtonText();
  }
}

export default i18next;

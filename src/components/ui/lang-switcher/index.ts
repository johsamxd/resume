import i18next from "../../../libs/translations/index.ts";

export function LangSwitcher(): string {
  return `
    <button id="lang-switcher" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        ${i18next.language === "en" ? "RU" : "EN"}
      </button>
    `;
}

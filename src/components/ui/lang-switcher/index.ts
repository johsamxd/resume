import i18next from "../../../libs/translations/index.ts";

export function LangSwitcher(): string {
  return `
    <button id="lang-switcher" class="font-bold text-element  rounded hover:text-element/80">
        ${i18next.language === "en" ? "РУС" : "ENG"}
      </button>
    `;
}

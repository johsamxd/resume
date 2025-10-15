import { t } from "i18next";
import { LangSwitcher, ThemeSwitcher } from "../../ui";

export function Header() {
  return `<header class="flex justify-between items-center px-20">
  <div>My resume</div>
  <nav class="space-x-2.5">
  <a href="#about">${t("about")}</a>
      <a href="#portfolio">${t("portfolio")}</a>
      <a href="#links">${t("links")}</a>
  </nav>

  <div class="flex items-center gap-5">
  ${ThemeSwitcher()}
  ${LangSwitcher()}
  </div>
  
  </header>`;
}

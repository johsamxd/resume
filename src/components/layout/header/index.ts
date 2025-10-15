import { t } from "i18next";
import { LangSwitcher, ThemeSwitcher } from "../../ui";

export function Header(): string {
  return `<div class="flex justify-between px-20">
  <div>My resume</div>
  <nav class="space-x-2.5">
  <a href="#about">${t("about")}</a>
      <a href="#portfolio">${t("portfolio")}</a>
      <a href="#links">${t("links")}</a>
  </nav>
  <div>
  ${ThemeSwitcher()}
  ${LangSwitcher()}
  
  </div>
  
  </div>`;
}

import { t } from "i18next";
import { About, Links, Portfolio } from "../sections";
import { Header } from "./header";

export function Layout(): string {
  return `
      <div>
        ${Header()}
        <h1 class="text-center text-5xl font-bold">${t("name")}</h1>
        ${About()}
        ${Portfolio()}
        ${Links()}  
      </div>
      `;
}

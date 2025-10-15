import "./style.css";
import { initDarkMode } from "./dark-mode.ts";
import { renderHeader } from "./components/header.ts";
import { renderAbout } from "./components/about.ts";
import { renderPortfolio } from "./components/portfolio.ts";
import { renderLinks } from "./components/links.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    ${renderHeader()}
    <h1 class="text-center text-5xl font-bold">Кырджагасов Аман Анатольевич</h1>
    ${renderAbout()}
    ${renderPortfolio()}
    ${renderLinks()}  
  </div>
`;

initDarkMode();

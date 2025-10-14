import "./style.css";
import { initDarkMode } from "./dark-mode.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Resume</h1>
    <button id="theme-toggle" class="bg-amber-50 rounded-2xl p-2 cursor-pointer hover:bg-amber-100 duration-300">Toggle theme</button>
  </div>
`;

initDarkMode();

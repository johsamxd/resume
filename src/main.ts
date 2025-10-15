import "./style.css";

import i18next from "./libs/translations/index.ts";
import { initDarkMode, initLangSwitcher } from "./libs";
import { Layout } from "./components/layout/index.ts";

function App() {
  const app = document.querySelector<HTMLDivElement>("#app")!;
  app.innerHTML = Layout();

  initLangSwitcher(App);
  initDarkMode();
}

i18next.init().then(() => {
  App();
});

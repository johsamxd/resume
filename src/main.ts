import "./style.css";

import i18next from "./libs/translations";
import { initDarkMode, initLangSwitcher } from "./libs";
import { Layout } from "./components/layout";
import { hideLoader, Loader } from "./components/layout/loader";

Loader();

function App() {
  try {
    const app = document.querySelector<HTMLDivElement>("#app")!;
    app.innerHTML = Layout();

    initLangSwitcher(App);
    initDarkMode();

    setTimeout(() => {
      hideLoader();
    }, 4000);
  } catch (error) {
    console.error("Error in App:", error);
    setTimeout(() => {
      hideLoader();
      document.getElementById("app")!.innerHTML =
        "<p>Error loading app. Please refresh.</p>";
    }, 2000);
  }
}

i18next
  .init()
  .then(() => {
    App();
  })
  .catch((error) => {
    console.error("i18next init failed:", error);
    // Fallback: Скрыть loader и показать ошибку
    setTimeout(() => {
      hideLoader();
      document.getElementById("app")!.innerHTML =
        "<p>Translation init failed. App loaded without i18n.</p>";
    }, 2000);
  });

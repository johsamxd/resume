import { createIcon } from "../../components/ui";

export type Theme = "light" | "dark" | "auto";

export const getTheme = (): Theme => {
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") {
    return stored as Theme;
  }

  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (isDark == true) {
    localStorage.setItem("theme", "dark");
    return "dark";
  } else {
    localStorage.setItem("theme", "light");
    return "light";
  }
};

export const setTheme = (theme: Theme): void => {
  localStorage.setItem("theme", theme);
  document.documentElement.classList.toggle("dark", theme === "dark");
};

export function updateIcon(theme: Theme): void {
  const button = document.getElementById("theme-switcher") as HTMLButtonElement;
  if (button) {
    const iconType = theme === "light" ? "moon" : "sun";
    const iconElement = createIcon({
      type: iconType,
      size: "lg",
    });
    button.innerHTML = iconElement.outerHTML; // Обновляем innerHTML кнопки
  }
}

export function initDarkMode(): void {
  const currentTheme = getTheme();
  setTheme(currentTheme);
  updateIcon(currentTheme);

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (getTheme() === "auto") {
        document.documentElement.classList.toggle("dark", e.matches);
      }
    });

  const themeSwitcher = document.getElementById(
    "theme-switcher"
  ) as HTMLButtonElement;
  if (themeSwitcher) {
    themeSwitcher.addEventListener("click", () => {
      const currentTheme = getTheme();
      let newTheme: Theme;
      if (currentTheme === "light") {
        newTheme = "dark";
      } else {
        newTheme = "light";
      }
      setTheme(newTheme);
      updateIcon(newTheme);
    });
  }
}

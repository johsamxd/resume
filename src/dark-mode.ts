type Theme = "light" | "dark" | "auto";

const getTheme = (): Theme => {
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

const setTheme = (theme: Theme): void => {
  localStorage.setItem("theme", theme);
  document.documentElement.classList.toggle("dark", theme === "dark");
};

const updateButtonText = (theme: Theme): void => {
  const button = document.getElementById("theme-toggle") as HTMLButtonElement;
  if (button) {
    button.textContent =
      theme === "dark" ? "Switch to Light" : "Switch to Dark";
  }
};

export function initDarkMode(): void {
  const currentTheme = getTheme();
  setTheme(currentTheme);
  updateButtonText(currentTheme);

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (getTheme() === "auto") {
        document.documentElement.classList.toggle("dark", e.matches);
      }
    });

  const themeToggle = document.getElementById(
    "theme-toggle"
  ) as HTMLButtonElement;
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = getTheme();
      let newTheme: Theme;
      if (currentTheme === "light") {
        newTheme = "dark";
      } else {
        newTheme = "light";
      }
      setTheme(newTheme);
      updateButtonText(newTheme);
    });
  }
}

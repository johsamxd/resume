import { animate, createTimeline, splitText } from "animejs";
import { t } from "i18next";

export function Loader(): void {
  const loader = document.createElement("div");
  loader.id = "loader";
  loader.className = "loader";
  loader.innerHTML = `
    <div class="h-lvh w-full flex justify-center items-center">
      <div class="typewriter-container relative inline-block">
        <h1 class="text-center text-5xl font-bold inline-block">${t(
          "name"
        )}</h1>
        <span class="cursor absolute right-0 top-0 text-5xl font-bold">|</span>
      </div>
    </div>
  `;
  document.body.appendChild(loader);

  const app = document.getElementById("app");
  if (app) app.style.display = "none";

  const h1 = document.querySelector("h1");
  const cursor = document.querySelector(".cursor") as HTMLElement;

  const { chars } = splitText("h1", {
    chars: { wrap: "clip" },
  });

  if (h1 && chars.length > 0) {
    chars.forEach((char: HTMLElement) => {
      char.style.opacity = "0";
    });
    cursor.style.left = "0px";

    const tl = createTimeline({ defaults: { duration: 750 } });

    chars.forEach((char: HTMLElement) => {
      tl.add(char, {
        opacity: 1,
        duration: 50,
        delay: 50,
        onBegin: () => {
          const charRect = char.getBoundingClientRect();
          const containerRect = h1.getBoundingClientRect();
          cursor.style.left = `${charRect.right - containerRect.left}px`;
        },
      });
    });

    animate(cursor, {
      opacity: [1, 0],
      duration: 750,
      direction: "alternate",
      loop: true,
      easing: "easeInOutSine",
    });

    tl.play();
  }
}

export function hideLoader(): void {
  const loader = document.getElementById("loader");
  const app = document.getElementById("app");

  if (loader) {
    loader.classList.add("hidden");
    setTimeout(() => {
      if (loader && loader.parentNode) {
        loader.parentNode.removeChild(loader);
      }
    }, 300);
  }

  if (app) {
    app.style.display = "block";
  }
}

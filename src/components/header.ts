export function renderHeader(): string {
  return `<div class="flex justify-between px-20">
  <div>My resume</div>
  <nav class="space-x-2.5">
  <a href="#about">О себе</a>
      <a href="#portfolio">Портфолио</a>
      <a href="#links">Ссылки</a>
  </nav>
  <div>
  <button id="theme-toggle" class="bg-amber-50 rounded-2xl p-2 cursor-pointer hover:bg-amber-100 duration-300">Toggle theme</button>
  </div>
  
  </div>`;
}

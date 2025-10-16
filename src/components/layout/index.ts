import { About, Links, Portfolio } from "../sections";
import { Header } from "./header";

export function Layout() {
  return `
      <div>
        ${Header()}
        ${About()}
        ${Portfolio()}
        ${Links()}  
      </div>
      `;
}

/* ==========================================================================
   MAIN.JS
   Punto de entrada de la página. Su única responsabilidad es:
     1) Pedir (fetch) el archivo .html de cada componente.
     2) Inyectarlo en su "slot" correspondiente dentro de index.html.
     3) Ejecutar el JS propio de cada componente (si lo tiene) una
        vez que ya está en el DOM.

   NOTA: por usar fetch() de archivos locales, este proyecto debe
   abrirse con un servidor local (no con doble clic / file://).
   Ver README.md → "Cómo correr el proyecto".
   ========================================================================== */

import { initNavbar } from "./components/Navbar/Navbar.js";

const COMPONENTS = [
  { slot: "navbar", path: "components/Navbar/Navbar.html", onMount: initNavbar },
  { slot: "hero", path: "components/Hero/Hero.html" },
  { slot: "consoles", path: "components/Consoles/Consoles.html" },
  { slot: "gamepass", path: "components/GamePass/GamePass.html" },
  { slot: "games", path: "components/Games/Games.html" },
  { slot: "footer", path: "components/Footer/Footer.html" },
];

async function mountComponent({ slot, path, onMount }) {
  const target = document.querySelector(`[data-component="${slot}"]`);
  if (!target) return;

  const res = await fetch(path);
  target.outerHTML = await res.text();

  if (onMount) onMount();
}

// Monta todos los componentes en paralelo al cargar la página
Promise.all(COMPONENTS.map(mountComponent)).catch((err) => {
  console.error("Error cargando componentes:", err);
});

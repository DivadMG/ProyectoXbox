/* ==========================================================================
   COMPONENTE: NAVBAR — comportamiento
   Se encarga únicamente de abrir/cerrar el menú en mobile.
   ========================================================================== */

export function initNavbar() {
  const burger = document.getElementById("navbarBurger");
  const mobileNav = document.getElementById("navbarMobileNav");
  if (!burger || !mobileNav) return;

  burger.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(isOpen));
    burger.classList.toggle("is-active", isOpen);
  });

  // Cierra el menú al navegar a una sección
  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    });
  });
}

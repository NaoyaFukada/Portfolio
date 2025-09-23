export function initNavigation() {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuLinks = document.querySelectorAll("#mobile-menu a");
  const html = document.documentElement;
  let isMenuOpen = false;

  function openMenu() {
    isMenuOpen = true;
    menuToggle?.setAttribute("aria-expanded", "true");
    html.classList.add("overflow-hidden");

    const bars = menuToggle?.children;
    if (!bars) return;

    bars[0].classList.add("rotate-45", "translate-y-1.5");
    bars[1].classList.add("opacity-0");
    bars[2].classList.add("-rotate-45", "-translate-y-1.5");
    mobileMenu?.classList.remove("-translate-y-full");
  }

  function closeMenu() {
    isMenuOpen = false;
    menuToggle?.setAttribute("aria-expanded", "false");
    html.classList.remove("overflow-hidden");

    const bars = menuToggle?.children;
    if (!bars) return;

    bars[0].classList.remove("rotate-45", "translate-y-1.5");
    bars[1].classList.remove("opacity-0");
    bars[2].classList.remove("-rotate-45", "-translate-y-1.5");
    mobileMenu?.classList.add("-translate-y-full");
  }

  menuToggle?.addEventListener("click", () => {
    isMenuOpen ? closeMenu() : openMenu();
  });

  // Close menu when clicking a link (with small delay for tap feedback)
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setTimeout(() => {
        closeMenu();
      }, 150);
    });
  });

  // close on Escape key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isMenuOpen) {
      closeMenu();
    }
  });
}

/**
 * Filters items based on active filter buttons.
 *
 * @param itemSelector - CSS selector for the items to be filtered.
 *
 * PREREQUISITES — HTML Structure:
 * =================================
 * 1. FILTER BUTTONS:
 *  - Must have the 'filter-tab' class.
 *  - Must include a 'data-filter' attribute with a unique value for each button.
 *  - One button should have the 'active' class to indicate the initial selected state.
 *  - The '.active' class must be styled in CSS.
 *
 * 2. FILTERABLE ITEMS:
 *  - Each item must have a descriptive class name (used as a filter parameter).
 *  - Each item must include a 'data-category' attribute with a unique value.
 *  - The '.hidden' class must be defined in CSS to control item visibility.
 */

export function initializeFilter(itemSelector: string) {
  const filterButtons = document.querySelectorAll(".filter-tab");
  const items = document.querySelectorAll(itemSelector);

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      // Update active state
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Filter Projects
      items.forEach((item) => {
        const category = item.getAttribute("data-category");

        if (filter === "all" || category === filter) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });
}

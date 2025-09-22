import Navbar from "./Navbar.astro";
import { expect, test } from "vitest";
import { renderAstroComponentToDOMComponent } from "../../test/helpers";

test("hamburger toggles aria-expanded", async () => {
  const result = await renderAstroComponentToDOMComponent(Navbar);
  const menuToggle = result.getElementById("menu-toggle");
  expect(menuToggle?.getAttribute("aria-expanded")).toBeNull();

  // Simulate click to open menu
  menuToggle?.click();
  expect(menuToggle?.getAttribute("aria-expanded")).toBe("true");

  // Simulate click to close menu
  menuToggle?.click();
  expect(menuToggle?.getAttribute("aria-expanded")).toBe("false");
});

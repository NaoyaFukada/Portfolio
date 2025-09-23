import Navbar from "./Navbar.astro";
import { expect, test } from "vitest";
import { renderAstroComponentToDOMComponent } from "../../test/helpers";
import userEvent from "@testing-library/user-event";

test("hamburger toggles aria-expanded", async () => {
  const user = userEvent.setup();

  const result = await renderAstroComponentToDOMComponent(Navbar);

  const menuToggle = result.getElementById("menu-toggle");

  // Initial state: no aria-expanded
  expect(menuToggle?.getAttribute("aria-expanded")).toBe("false");

  // Simulate click to open menu
  await user.click(menuToggle);
  expect(menuToggle?.getAttribute("aria-expanded")).toBe("true");

  // Simulate click to close menu
  await user.click(menuToggle);
  expect(menuToggle?.getAttribute("aria-expanded")).toBe("false");
});

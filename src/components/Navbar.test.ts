import Navbar from "./Navbar.astro";
import { expect, test } from "vitest";
import { renderAstroComponentToDOMComponent } from "../../test/helpers";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { initNavigation } from "./navigation.js";

test("hamburger toggles aria-expanded", async () => {
  const user = userEvent.setup();

  // Render the Astro component - this returns a DocumentFragment
  const renderedContent = await renderAstroComponentToDOMComponent(Navbar);

  // Add the rendered content to the document body
  document.body.appendChild(renderedContent);

  // Initialize the navigation JavaScript after rendering
  initNavigation();

  // Get the menu toggle button
  const menuToggle = screen.getByTestId("menuToggle");

  // Initial state: aria-expanded should be "false"
  expect(menuToggle.getAttribute("aria-expanded")).toBe("false");

  // Simulate click to open menu
  await user.click(menuToggle);
  expect(menuToggle.getAttribute("aria-expanded")).toBe("true");

  // Simulate click to close menu
  await user.click(menuToggle);
  expect(menuToggle.getAttribute("aria-expanded")).toBe("false");
});

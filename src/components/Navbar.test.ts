import Navbar from "./Navbar.astro";
import { expect, test } from "vitest";
import { renderAstroComponentToDOMComponent } from "../../test/helpers";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/dom";

test("hamburger toggles aria-expanded", async () => {
  const user = userEvent.setup();

  // Render Astro component into the document
  const result = await renderAstroComponentToDOMComponent(Navbar);
  document.body.append(result);

  // Initial state: no aria-expanded
  const menuToggle = screen.getByRole("button", { name: /toggle menu/i });
  expect(menuToggle).not.toHaveAttribute("aria-expanded");

  // Simulate click to open menu
  await user.click(menuToggle);
  expect(menuToggle).toHaveAttribute("aria-expanded", "true");

  // Simulate click to close menu
  await user.click(menuToggle);
  expect(menuToggle).toHaveAttribute("aria-expanded", "false");
});

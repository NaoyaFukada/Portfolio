// Reference: https://angelika.me/2025/02/01/astro-component-unit-tests/

import { experimental_AstroContainer } from "astro/container";
import type { ContainerRenderOptions } from "astro/container";
import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export async function renderAstroComponentToDOMComponent(
  Component: AstroComponentFactory,
  options: ContainerRenderOptions = {}
) {
  // Create an new instance of the Astro container
  const container = await experimental_AstroContainer.create();
  // Render the component to a string
  const result = await container.renderToString(Component, options);

  // Create a <template> element and inject the HTML string
  // The DOM library (jsdom/happy-dom) parses the string into real DOM nodes
  const template = document.createElement("template");
  template.innerHTML = result;

  return template.content;
}

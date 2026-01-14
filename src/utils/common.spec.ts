import { describe, expect, test } from "vitest";

import { awaiter, focusOnFirstInvalidInput } from "./common";

test("awaiter", async () => {
  const start = Date.now();
  await awaiter(1000);
  const end = Date.now();

  // Allow small timing tolerance since JS timers aren't perfectly precise
  expect(end - start).toBeGreaterThanOrEqual(990);
});

describe("focusOnFirstInvalidInput", () => {
  test("should do nothing if element is null", () => {
    expect(() => focusOnFirstInvalidInput(null)).not.toThrow();
  });

  test("should focus on the first invalid input", () => {
    const container = document.createElement("div");
    container.innerHTML = `
      <div>
        <input type="text" />
      </div>
      <div class="in-error-state">
        <input type="text" id="input1" />
      </div>
      <div class="in-error-state">
        <input type="text" id="input2" />
      </div>
    `;
    document.body.appendChild(container);
    const input1 = container.querySelector("#input1") as HTMLInputElement;
    focusOnFirstInvalidInput(container);
    expect(document.activeElement).toBe(input1);
  });

  test("should not focus if there are no invalid inputs", () => {
    const container = document.createElement("div");
    container.innerHTML = `
      <div>
        <input type="text" />
      </div>
    `;
    document.body.appendChild(container);
    focusOnFirstInvalidInput(container);
    expect(document.activeElement).not.toBe(container.querySelector("input"));
  });
});

import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

// test.afterEach(async ({ page, browserName }) => {
//   await page.screenshot({
//     path: `./test-results/e2e/screenshots/${browserName}/${new Date().getTime()}.png`,
//     fullPage: false,
//     quality: 50,
//     type: "jpeg",
//   });
// });

test("title", async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Dashboard/);
});

// test("counter button", async ({ page }) => {
//   const btn = page.getByTestId("increment");

//   // Click the get started link.
//   await btn.click();

//   // Expects the URL to contain intro.
//   await expect(btn).toContainText(/1/);
// });

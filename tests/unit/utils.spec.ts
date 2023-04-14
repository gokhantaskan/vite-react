import { expect, test } from "vitest";

import { awaiter } from "../../src/utils";

test("awaiter", async () => {
  const start = Date.now();
  await awaiter(1000);
  const end = Date.now();

  expect(end - start).toBeGreaterThanOrEqual(1000);
});

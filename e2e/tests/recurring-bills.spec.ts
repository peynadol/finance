import { test, expect } from "@playwright/test";
import { mockTransactionRoute } from "../utils/mockRoutes";

test("recurring bills table filters correctly using search input", async ({
  page,
}) => {
  await mockTransactionRoute(page);
  await page.goto("/recurring-bills");

  const searchInput = page.getByPlaceholder("Search bill title...");
  await expect(searchInput).toBeVisible();

  await searchInput.fill("utility");

  const rows = page.locator("tbody tr");
  await expect(rows).toHaveCount(1);
  await expect(rows.first()).toContainText("Utility Bill");
});

import { test, expect } from "@playwright/test";
import { mockTransactionRoute } from "../utils/mockRoutes";
import { mockTransactions } from "../fixtures/mock-data";
// TODO: Add test for creating a new transaction

test("transactions table displays correct data", async ({ page }) => {
  await mockTransactionRoute(page);
  await page.goto("/transactions");

  // check header is present
  await expect(page.getByText("Date")).toBeVisible(); // or use regex /Date/i if casing might vary

  // check first transaction details
  const first = mockTransactions[0];

  // transaction name
  await expect(page.getByText(first.name)).toBeVisible();

  // test that the 5 transactions are displayed
  const rows = page.locator("tbody tr");
  await expect(rows).toHaveCount(5);
});

test("filters transactions by search", async ({ page }) => {
  await mockTransactionRoute(page);
  await page.goto("/transactions");

  // check that the search input is present
  const searchInput = page.getByPlaceholder("Search recipient or sender...");
  await expect(searchInput).toBeVisible();

  // fill the search input with a term that matches one of the transactions
  await searchInput.fill("Salary");
  const filteredRows = page.locator("tbody tr");
  await expect(filteredRows).toHaveCount(1); // should only match the Salary transaction
});

test("filters transactions by category", async ({ page }) => {
  await mockTransactionRoute(page);
  await page.goto("/transactions");

  const categoryFilter = page.getByRole("button", { name: "Category" });
  await expect(categoryFilter).toBeVisible();

  // click to open dropdown
  await categoryFilter.click();

  // click the menuitem
  await page.getByRole("menuitem", { name: "Income" }).click();

  const filteredRows = page.locator("tbody tr");
  await expect(filteredRows).toHaveCount(1);

  // check that the filtered transaction is the Salary transaction
  await expect(filteredRows).toContainText("Salary");
});

test("sorts transactions a to z", async ({ page }) => {
  await mockTransactionRoute(page);
  await page.goto("/transactions");

  // click the sort button
  const sortButton = page.getByRole("button", { name: "Sort" });
  await expect(sortButton).toBeVisible();
  await sortButton.click();

  // click the menuitem to sort a to z
  await page.getByRole("menuitem", { name: "A to Z" }).click();

  // check that the first transaction is now Salary
  const firstRow = page.locator("tbody tr").first();
  await expect(firstRow).toContainText("Emergency Top-Up");
});

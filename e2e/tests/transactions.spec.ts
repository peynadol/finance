import { test, expect } from "@playwright/test";
import { mockTransactionRoute } from "../utils/mockRoutes";
import { mockTransactions } from "../fixtures/mock-data";
// TODO: Add test for creating a new transaction
// TODO: Need to figure out how to mock POST requests for adding a new transaction

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

test("add new transaction", async ({ page }) => {
  await mockTransactionRoute(page);
  await page.goto("/transactions");

  const addButton = page.getByRole("button", { name: "+ Add Transaction" });
  await expect(addButton).toBeVisible();
  await addButton.click();

  // confirm the modal is visible
  const modal = page.getByRole("dialog", { name: "Add Transaction" });
  await expect(modal).toBeVisible();

  // fill in transaction name
  const nameInput = modal.getByLabel("Transaction Name");
  await expect(nameInput).toBeVisible();
  await nameInput.fill("Test Transaction");

  // fill in transaction amount
  const amountInput = modal.getByLabel("Transaction Amount");
  await expect(amountInput).toBeVisible();
  await amountInput.fill("100");

  // select transaction category
  const categorySelect = modal.getByLabel("Category");
  await expect(categorySelect).toBeVisible();
  await expect(categorySelect).toBeEnabled();

  // this test is flaky without this
  await categorySelect.locator("option").all();

  await categorySelect.selectOption("Groceries");

  // select transaction type
  const typeSelect = modal.getByLabel("Type");
  await expect(typeSelect).toBeVisible();
  await typeSelect.selectOption("expense");

  // fill in transaction date
  const dateInput = modal.getByLabel("Date");
  await expect(dateInput).toBeVisible();
  await dateInput.fill("2025-07-01");

  // click the submit button
  const submitButton = modal.getByRole("button", { name: "Add Transaction" });
  await expect(submitButton).toBeVisible();
  await submitButton.click();

  // confirm the modal is closed
  await expect(modal).toBeHidden();

  // check that the new transaction is in the table
  // await expect(page.getByText("Test Transaction")).toBeVisible();
});

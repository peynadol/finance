import { test, expect } from "@playwright/test";
import { mockBudgetsRoute, mockTransactionRoute } from "../utils/mockRoutes";

test("can create and submit a budget", async ({ page }) => {
  await mockBudgetsRoute(page);
  await mockTransactionRoute(page);
  await page.goto("/budgets");

  const addButton = page.getByRole("button", { name: "+ Add New Budget" });
  await expect(addButton).toBeVisible();
  await addButton.click();

  // confirm the modal is visible
  const modal = page.getByRole("dialog", { name: "Add Budget" });
  await expect(modal).toBeVisible();

  // select budget category
  const categorySelect = modal.getByLabel("Category");
  await expect(categorySelect).toBeVisible();
  await categorySelect.selectOption("Groceries");

  // input amount
  const amountInput = modal.getByLabel("Maximum Amount");
  await expect(amountInput).toBeVisible();
  await amountInput.fill("500");

  // select a colour theme
  const themeSelect = modal.getByLabel("Theme");
  await expect(themeSelect).toBeVisible();
  await themeSelect.selectOption("Green");

  // select a start date
  const startDateInput = modal.getByLabel("Start Date");
  await expect(startDateInput).toBeVisible();
  await startDateInput.fill("2025-07-01");

  // select an end date
  const endDateInput = modal.getByLabel("End Date");
  await expect(endDateInput).toBeVisible();
  await endDateInput.fill("2025-07-31");

  // click the submit button
  const submitButton = modal.getByRole("button", { name: "Save Budget" });
  await expect(submitButton).toBeVisible();
  await submitButton.click();

  // confirm modal closure
  await expect(modal).toBeHidden();
});

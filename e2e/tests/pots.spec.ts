import { test, expect } from "@playwright/test";
import { mockPotsRoute, mockTransactionRoute } from "../utils/mockRoutes";

test("can create and submit a pot", async ({ page }) => {
  await mockPotsRoute(page);
  await mockTransactionRoute(page);
  await page.goto("/pots");

  const addButton = page.getByRole("button", { name: "+ Add New Pot" });
  await expect(addButton).toBeVisible();
  await addButton.click();

  // confirm the modal is visible
  const modal = page.getByRole("dialog", { name: "Add Pot" });
  await expect(modal).toBeVisible();

  // add a pot name
  const nameInput = modal.getByLabel("Pot Name");
  await expect(nameInput).toBeVisible();
  await nameInput.fill("Emergency Fund");

  // input target amount
  const amountInput = modal.getByLabel("Target Amount");
  await expect(amountInput).toBeVisible();
  await amountInput.fill("500");

  // select a colour theme
  const themeSelect = modal.getByLabel("Theme");
  await expect(themeSelect).toBeVisible();
  await themeSelect.selectOption("Green");

  // select a target date
  const targetDateInput = modal.getByLabel("Target Date");
  await expect(targetDateInput).toBeVisible();
  await targetDateInput.fill("2025-07-31");

  // click the submit button
  const submitButton = modal.getByRole("button", { name: "Save Pot" });
  await expect(submitButton).toBeVisible();
  await submitButton.click();

  // confirm modal closure
  await expect(modal).toBeHidden();
});

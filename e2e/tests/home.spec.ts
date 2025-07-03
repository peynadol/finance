import { test, expect } from "@playwright/test";
import { mockTransactionRoute } from "../utils/mockRoutes";

test("summary cards display correct balance values from transaction data", async ({
  page,
}) => {
  await mockTransactionRoute(page);
  await page.goto("/");
  const summaryCards = page.getByTestId("summary-cards");
  await expect(summaryCards.getByText("£1,001.00")).toBeVisible(); // current
  await expect(summaryCards.getByText("£2,000.00")).toBeVisible(); // income
  await expect(summaryCards.getByText("£999.00")).toBeVisible(); // expenses
});

import { test, expect } from "@playwright/test";
import { mockTransactionRoute, mockPotsRoute } from "../utils/mockRoutes";

test("summary cards display correct balance values from transaction data", async ({
  page,
}) => {
  await mockTransactionRoute(page);
  await page.goto("/");

  const summaryCards = page.getByTestId("summary-cards");

  await expect(summaryCards.getByText("£1,500.00")).toBeVisible(); // current = 2000 - (300 + 200)
  await expect(summaryCards.getByText("£2,000.00")).toBeVisible(); // income
  await expect(summaryCards.getByText("£500.00")).toBeVisible(); // expenses = 300 + 200
});

test("pots overview card displays correct totals from matching transactions", async ({
  page,
}) => {
  await mockTransactionRoute(page);
  await mockPotsRoute(page);
  await page.goto("/");

  const potsCard = page.getByTestId("pots-overview-card");

  await expect(potsCard.getByText("Total Saved")).toBeVisible();
  await expect(potsCard.getByText("£500")).toBeVisible(); // 300 + 200 from pots

  await expect(potsCard.getByText("Emergency Fund")).toBeVisible();
  await expect(potsCard.getByText("£300.00").first()).toBeVisible();

  await expect(potsCard.getByText("Vacation Savings")).toBeVisible();
  await expect(potsCard.getByText("£200.00").first()).toBeVisible();
});

test("transactions overview card displays correct transactions", async ({
  page,
}) => {
  await mockTransactionRoute(page);
  await page.goto("/");

  const transactionsCard = page.getByTestId("transactions-overview-card");

  await expect(transactionsCard.getByText("Transactions")).toBeVisible();

  await expect(transactionsCard.getByText("Salary")).toBeVisible();
  await expect(transactionsCard.getByText("+£2000.00")).toBeVisible();
  await expect(transactionsCard.getByText("01 Jul 2025")).toBeVisible();

  await expect(transactionsCard.getByText("Emergency Top-Up")).toBeVisible();
  await expect(transactionsCard.getByText("-£300.00")).toBeVisible();
  await expect(transactionsCard.getByText("02 Jul 2025")).toBeVisible();

  await expect(transactionsCard.getByText("Holiday Savings")).toBeVisible();
  await expect(transactionsCard.getByText("-£200.00")).toBeVisible();
  await expect(transactionsCard.getByText("03 Jul 2025")).toBeVisible();
});

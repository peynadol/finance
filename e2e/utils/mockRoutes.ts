import { Page } from "@playwright/test";
import { mockTransactions, mockPots } from "../fixtures/mock-data";

export async function mockTransactionRoute(page: Page) {
  await page.route("**/rest/v1/transactions**", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify(mockTransactions),
    });
  });
}

export async function mockPotsRoute(page: Page) {
  await page.route("**/rest/v1/pots**", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify(mockPots),
    });
  });
}

import { Page } from "@playwright/test";
import { mockTransactions } from "../fixtures/mock-data";

export async function mockTransactionRoute(page: Page) {
  await page.route(
    "**/rest/v1/transactions?select=*&order=date.desc",
    async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify(mockTransactions),
      });
    }
  );
}

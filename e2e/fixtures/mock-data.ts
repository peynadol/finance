export const mockTransactions = [
  {
    id: "1",
    name: "Salary",
    amount: 2000,
    type: "income",
    category: "Income",
    date: "2025-07-01",
  },
  {
    id: "2",
    name: "Emergency Top-Up",
    amount: 300,
    type: "expense",
    category: "Emergency Fund",
    date: "2025-07-02",
  },
  {
    id: "3",
    name: "Holiday Savings",
    amount: 200,
    type: "expense",
    category: "Vacation Savings",
    date: "2025-07-03",
  },
  {
    id: "4",
    name: "Utility Bill",
    amount: 150,
    type: "expense",
    category: "Utilities",
    date: "2025-07-04",
    recurring: true,
  },
  {
    id: "5",
    name: "Groceries",
    amount: 100,
    type: "expense",
    category: "Groceries",
    date: "2025-07-05",
  },
];

export const mockPots = [
  { id: "1", name: "Emergency Fund", amount: 300 },
  { id: "2", name: "Vacation Savings", amount: 200 },
];

export const mockBudgets = [
  {
    id: "1",
    category: "Groceries",
    maximum: 500,
  },
  {
    id: "2",
    category: "Utilities",
    maximum: 200,
  },
];

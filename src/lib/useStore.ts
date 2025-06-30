import { create } from "zustand";
import data from "../../data.json";
type Balance = typeof data.balance;
type Transaction = (typeof data.transactions)[number];
type Budget = (typeof data.budgets)[number];
type Pot = (typeof data.pots)[number];

type StoreState = {
  balance: Balance;
  transactions: Transaction[];
  budgets: Budget[];
  pots: Pot[];
};

export const useStore = create<StoreState>(() => ({
  balance: data.balance,
  transactions: data.transactions,
  budgets: data.budgets,
  pots: data.pots,
}));

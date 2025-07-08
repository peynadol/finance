"use client";
import BudgetsOverviewContainer from "./components/budgets-overview-container";
import OverviewRecurringBillContainer from "./components/overview-recurring-bill-container";
import OverviewTransactionContainer from "./components/overview-transaction-container";
import PotOverviewContainer from "./components/pot-overview-container";
import BalanceSummarySkeleton from "./components/skeletons/balance-summary-skeleton";
import BudgetsPreviewSkeleton from "./components/skeletons/budgets-preview-skeleton";
import PotsPreviewSkeleton from "./components/skeletons/pots-preview-skeleton";
import RecurringBillsPreviewSkeleton from "./components/skeletons/recurring-bills-preview-skeleton";
import TransactionsPreviewSkeleton from "./components/skeletons/transactions-preview-skeleton";
import SummaryCard from "./components/summary-card";
//TODO: skeletons for this page aren't quite 1 to 1 in terms of positioning
import {
  useGetTransactions,
  useGetBudgets,
  useGetPots,
} from "@/lib/queries/queries";

export default function Home() {
  const { data: transactions = [], isLoading: isLoadingTransactions } =
    useGetTransactions();
  const { data: budgets = [], isLoading: isLoadingBudgets } = useGetBudgets();
  const { data: pots = [], isLoading: isLoadingPots } = useGetPots();

  const isLoading = isLoadingTransactions || isLoadingBudgets || isLoadingPots;

  const totalIncome = transactions.reduce((acc, transaction) => {
    return transaction.type === "income" ? acc + transaction.amount : acc;
  }, 0);
  const totalExpenses = transactions.reduce((acc, transaction) => {
    return transaction.type === "expense" ? acc + transaction.amount : acc;
  }, 0);
  const currentBalance = totalIncome - totalExpenses;
  const recurringBills = transactions.filter(
    (transaction) => transaction.recurring && transaction.type === "expense"
  );
  console.log("recurringBills", recurringBills);

  const summaryItems = [
    { id: "current", label: "Current Balance", amount: currentBalance },
    { id: "income", label: "Income", amount: totalIncome },
    { id: "expense", label: "Expenses", amount: totalExpenses },
  ];
  return (
    <div className="mx-auto max-w-screen-xl px-6 space-y-6">
      <h1 className="text-preset-1 mt-4">Overview</h1>

      {/* Summary Cards */}
      <div
        data-testid="summary-cards"
        className="grid grid-cols-1 md:grid-cols-3 gap-4 "
      >
        {isLoading ? (
          <BalanceSummarySkeleton />
        ) : (
          summaryItems.map((item) => (
            <SummaryCard
              key={item.id}
              label={item.label}
              amount={item.amount}
            />
          ))
        )}
      </div>

      {/* Lower Grid: */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_0.5fr] gap-6 items-stretch">
        {/* Left Column */}
        <div className="flex flex-col justify-between h-full space-y-6">
          {/* Pots Overview */}
          <div data-testid="pots-overview-card">
            {isLoading ? (
              <PotsPreviewSkeleton />
            ) : (
              <PotOverviewContainer pots={pots} transactions={transactions} />
            )}
          </div>

          {/* Transactions Overview */}
          <div data-testid="transactions-overview-card">
            {isLoading ? (
              <TransactionsPreviewSkeleton />
            ) : (
              <OverviewTransactionContainer transactions={transactions} />
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          <div data-testid="budgets-overview-card" className="grow">
            {isLoading ? (
              <BudgetsPreviewSkeleton />
            ) : (
              <BudgetsOverviewContainer
                budgets={budgets}
                transactions={transactions}
              />
            )}
          </div>
          <div data-testid="recurring-bills-overview-card" className="shrink-0">
            {isLoading ? (
              <RecurringBillsPreviewSkeleton />
            ) : (
              <OverviewRecurringBillContainer recurringBills={recurringBills} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

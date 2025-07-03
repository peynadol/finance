"use client";

import { AppButton } from "../components/app-button";
import BudgetsOverviewContainer from "../components/budgets-overview-container";
import BudgetPageOverviewContainer from "../components/budgets/budget-page-overview-container";
import { BudgetsCardSkeleton } from "../components/skeletons/budgets-card-skeleton";
import { useGetBudgets, useGetTransactions } from "@/lib/queries/queries";
import { useModalStore } from "@/lib/stores/modalStore";

const BudgetsPage = () => {
  const { data: budgets = [], isLoading: budgetsLoading } = useGetBudgets();
  const { data: transactions = [], isLoading: transactionsLoading } =
    useGetTransactions();
  const { openModal } = useModalStore();

  const isLoading = budgetsLoading || transactionsLoading;

  const transactionCategories = Array.from(
    new Set(transactions.map((tx) => tx.category))
  );

  return (
    <div className="w-full max-w-screen-xl px-6 py-8 mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-preset-1">Budgets</h2>
        <AppButton
          onClick={() => openModal("ADD_BUDGET", { transactionCategories })}
        >
          + Add New Budget
        </AppButton>
      </div>

      <div className="grid grid-cols-[1.5fr_2fr] gap-4">
        {/* Left column */}
        <div className="flex-1">
          <BudgetsOverviewContainer
            variant="budgets"
            budgets={budgets}
            transactions={transactions}
          />
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-4 w-full">
          {isLoading ? (
            <>
              <BudgetsCardSkeleton />
              <BudgetsCardSkeleton />
            </>
          ) : (
            budgets.map((budget, index) => {
              const matchingTransactions = transactions
                .filter((tx) => tx.category === budget.category)
                .sort(
                  (a, b) =>
                    new Date(b.date).getTime() - new Date(a.date).getTime()
                );

              const spent = matchingTransactions.reduce(
                (sum, tx) => sum + Math.abs(tx.amount),
                0
              );
              const remaining = Math.max(0, budget.maximum - spent);
              const latestTransactions = matchingTransactions.slice(0, 3);

              return (
                <BudgetPageOverviewContainer
                  key={index}
                  budget={budget}
                  spent={spent}
                  remaining={remaining}
                  latestTransactions={latestTransactions}
                  transactionCategories={transactionCategories}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default BudgetsPage;

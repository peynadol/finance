"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import BudgetPieChart from "./budget-pie-chart";
import OverviewSummaryCard from "./overview-summary-card";
import OverviewBudgetSummaryRow from "./overview-budget-summary-row";
import { Budget, Transaction } from "@/lib/types";
import clsx from "clsx";

type BudgetsOverviewContainerProps = {
  variant?: "home" | "budgets";
  budgets: Budget[];
  transactions: Transaction[];
};

const BudgetsOverviewContainer = ({
  variant = "home",
  budgets,
  transactions,
}: BudgetsOverviewContainerProps) => {
  const isHome = variant === "home";

  const pieData = budgets.map((budget) => {
    const spent = transactions
      .filter((tx) => tx.category === budget.category)
      .reduce((sum, tx) => sum + tx.amount, 0);

    return {
      name: budget.category,
      value: Number(spent.toFixed(2)),
      color: budget.theme,
      maximum: budget.maximum,
    };
  });

  const totalLimit = budgets.reduce((acc, b) => acc + b.maximum, 0);
  const totalSpent = pieData.reduce((acc, b) => acc + b.value, 0);

  return (
    <div
      className={clsx(
        "bg-white rounded-lg p-8 flex flex-col",
        variant === "home" && "h-full"
      )}
    >
      {/* Header */}
      {isHome && (
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-preset-2 text-grey-900">Budgets</h2>
          <Link
            href="/budgets"
            className="text-preset-4 text-grey-500 hover:underline"
          >
            See Details <ChevronRight className="inline ml-1" size={16} />
          </Link>
        </div>
      )}

      <div
        className={`${
          isHome
            ? "flex flex-1 items-center gap-10 px-4"
            : "flex flex-col items-center"
        }`}
      >
        <div className="flex items-center justify-center mb-6">
          <BudgetPieChart
            data={pieData}
            totalLimit={totalLimit}
            totalSpent={totalSpent}
          />
        </div>

        {!isHome && (
          <h2 className="text-preset-2 mb-4 self-start">Spending Summary</h2>
        )}

        <div className="space-y-4 w-full">
          {pieData.map((item) =>
            isHome ? (
              <OverviewSummaryCard
                key={item.name}
                name={item.name}
                amount={item.value}
                colour={item.color}
              />
            ) : (
              <OverviewBudgetSummaryRow
                key={item.name}
                name={item.name}
                spent={item.value}
                maximum={item.maximum}
                colour={item.color}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default BudgetsOverviewContainer;

"use client";

import { useStore } from "@/lib/useStore";
import { ChevronRight } from "lucide-react";
import BudgetPieChart from "./budget-pie-chart";
import OverviewSummaryCard from "./overview-summary-card";
import Link from "next/link";

type BudgetsOverviewContainerProps = {
  variant?: "home" | "budgets";
};

const BudgetsOverviewContainer = ({
  variant = "home",
}: BudgetsOverviewContainerProps) => {
  const isHome = variant === "home";

  const budgets = useStore((state) => state.budgets);
  const transactions = useStore((state) => state.transactions);

  const pieData = budgets.map((budget) => {
    const totalSpent = transactions
      .filter((tx) => tx.category === budget.category)
      .reduce((sum, tx) => sum + Math.abs(tx.amount), 0);

    return {
      name: budget.category,
      value: totalSpent,
      color: budget.theme,
    };
  });

  const total = budgets.reduce((acc, cur) => acc + cur.maximum, 0);

  return (
    <div className="bg-white rounded-lg h-full p-8 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        {isHome && (
          <>
            <h2 className="text-preset-2 text-grey-900">Budgets</h2>
            <Link
              href="/budgets"
              className="text-preset-4 text-grey-500 hover:underline"
            >
              See Details <ChevronRight className="inline ml-1" size={16} />
            </Link>
          </>
        )}
      </div>

      {isHome ? (
        <div className="flex flex-1 items-center gap-10 px-4">
          <div className="flex items-center justify-center">
            <BudgetPieChart data={pieData} totalLimit={total} />
          </div>

          <div className="space-y-4">
            {pieData.map((item) => (
              <OverviewSummaryCard
                key={item.name}
                name={item.name}
                amount={item.value}
                colour={item.color}
              />
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-center mb-6">
            <BudgetPieChart data={pieData} totalLimit={total} />
          </div>
          <h2 className="text-preset-2">Spending Summary</h2>

          <div className="space-y-4">
            {pieData.map((item) => (
              <OverviewSummaryCard
                key={item.name}
                name={item.name}
                amount={item.value}
                colour={item.color}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BudgetsOverviewContainer;

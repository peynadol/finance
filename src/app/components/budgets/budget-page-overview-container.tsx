"use client";

import React from "react";
import OverviewSummaryCard from "../overview-summary-card";
import BudgetBar from "./budget-bar";
import LatestSpendingCard from "./latest-spending-card";
import DotHeading from "./dot-heading";

type BudgetPageOverviewContainerProps = {
  budget: {
    category: string;
    maximum: number;
    theme: string;
  };
  spent: number;
  remaining: number;
  latestTransactions: {
    name: string;
    amount: number;
    date: string;
  }[];
};

const BudgetPageOverviewContainer = ({
  budget,
  spent,
  remaining,
  latestTransactions,
}: BudgetPageOverviewContainerProps) => {
  return (
    <div className="bg-white rounded p-8 space-y-4">
      <DotHeading label={budget.category} colour={budget.theme} />
      <p className="text-preset-4 text-grey-500">
        Maximum of £{budget.maximum}
      </p>

      {/* Progress bar */}
      <BudgetBar spent={spent} maximum={budget.maximum} colour={budget.theme} />

      {/* Spent / Remaining Cards */}
      <div className="flex gap-4">
        <div className="flex-1">
          <OverviewSummaryCard
            name="Spent"
            amount={spent}
            colour={budget.theme}
          />
        </div>
        <div className="flex-1">
          <OverviewSummaryCard
            name="Remaining"
            amount={remaining}
            colour="#F8F4F0"
          />
        </div>
      </div>

      {/* Latest Transactions */}
      <LatestSpendingCard transactions={latestTransactions} />
    </div>
  );
};

export default BudgetPageOverviewContainer;

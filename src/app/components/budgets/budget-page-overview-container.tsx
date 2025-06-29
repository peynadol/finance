import React from "react";
import OverviewSummaryCard from "../overview-summary-card";
import BudgetBar from "./budget-bar";
import LatestSpendingCard from "./latest-spending-card";
import DotHeading from "./dot-heading";

const BudgetPageOverviewContainer = () => {
  return (
    <div className="bg-white rounded p-8 space-y-4">
      <DotHeading label="Entertainment" color="green" />
      <p className="text-preset-4 text-grey-500">Maximum of £50</p>
      <BudgetBar />
      <div className="flex gap-4">
        <div className="flex-1">
          <OverviewSummaryCard name="Spent" amount={15} colour="green" />
        </div>
        <div className="flex-1">
          <OverviewSummaryCard
            name="Remaining"
            amount={35}
            colour="beige-100"
          />
        </div>
      </div>

      <LatestSpendingCard />
    </div>
  );
};

export default BudgetPageOverviewContainer;

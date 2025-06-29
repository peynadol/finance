import React from "react";
import OverviewTransactionCard from "../overview-transaction-card";
import { ChevronRight } from "lucide-react";

const LatestSpendingCard = () => {
  return (
    <div className="bg-beige-100 rounded w-full p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-preset-3">Latest Spending</h2>
        <p className="text-preset-4 text-grey-500">
          See All <ChevronRight className="inline" size={14} />
        </p>
      </div>
      <div className="bg-beige-100">
        <OverviewTransactionCard
          name="James Thompson"
          amount={5}
          date={"11 Aug 2025"}
        />
        <OverviewTransactionCard
          name="James Thompson"
          amount={5}
          date={"11 Aug 2025"}
        />
        <OverviewTransactionCard
          name="James Thompson"
          amount={5}
          date={"11 Aug 2025"}
        />
      </div>
    </div>
  );
};

export default LatestSpendingCard;

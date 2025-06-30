import React from "react";
import OverviewTransactionCard from "../overview-transaction-card";
import { ChevronRight } from "lucide-react";

type LatestSpendingCardProps = {
  transactions: {
    name: string;
    amount: number;
    date: string;
  }[];
};

const LatestSpendingCard = ({ transactions }: LatestSpendingCardProps) => {
  return (
    <div className="bg-beige-100 rounded w-full p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-preset-3">Latest Spending</h2>
        <p className="text-preset-4 text-grey-500 cursor-pointer hover:underline">
          See All <ChevronRight className="inline" size={14} />
        </p>
      </div>

      <div className="bg-beige-100">
        {transactions.length > 0 ? (
          transactions.map((tx, index) => (
            <OverviewTransactionCard
              avatarPath={tx.avatar.replace(/^\.\/assets/, "")}
              key={index}
              name={tx.name}
              amount={tx.amount}
              date={tx.date}
            />
          ))
        ) : (
          <p className="text-grey-500 mt-4">No recent transactions.</p>
        )}
      </div>
    </div>
  );
};

export default LatestSpendingCard;

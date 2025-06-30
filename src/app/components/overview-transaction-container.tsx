import { ChevronRight } from "lucide-react";
import OverviewTransactionCard from "./overview-transaction-card";
import Link from "next/link";
import { useStore } from "@/lib/useStore";
const OverviewTransactionContainer = () => {
  const transactions = useStore((state) => state.transactions);
  console.log("Transactions:", transactions);
  return (
    <div className="bg-white rounded-lg p-8 ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-preset-2">Transactions</h2>
        <Link
          href="/transactions"
          className="text-preset-4 text-grey-500 hover:underline"
        >
          See Details <ChevronRight className="inline ml-1" size={16} />
        </Link>
      </div>

      <div className="flex items-center  flex-col gap-4">
        {transactions.slice(0, 5).map((transaction, index) => (
          <OverviewTransactionCard
            key={index} // not ideal, but okay for now
            name={transaction.name}
            amount={transaction.amount}
            date={transaction.date}
            avatarPath={transaction.avatar.replace(/^\.\/assets/, "")}
          />
        ))}
      </div>
    </div>
  );
};

export default OverviewTransactionContainer;

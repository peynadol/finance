import { ChevronRight } from "lucide-react";
import OverviewTransactionCard from "./overview-transaction-card";
import Link from "next/link";
const OverviewTransactionContainer = () => {
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
        <OverviewTransactionCard
          name="Emma Richardson"
          amount={100}
          date="19 Aug 2024"
        />
        <OverviewTransactionCard
          name="Emma Richardson"
          amount={100}
          date="19 Aug 2024"
        />
        <OverviewTransactionCard
          name="Emma Richardson"
          amount={100}
          date="19 Aug 2024"
        />
        <OverviewTransactionCard
          name="Emma Richardson"
          amount={100}
          date="19 Aug 2024"
        />
      </div>
    </div>
  );
};

export default OverviewTransactionContainer;

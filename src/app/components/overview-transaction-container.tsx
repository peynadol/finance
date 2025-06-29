import { ChevronRight } from "lucide-react";
import OverviewTransactionCard from "./overview-transaction-card";

const OverviewTransactionContainer = () => {
  return (
    <div className="bg-white rounded-lg p-8 min-w-[600px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-preset-2">Transactions</h2>
        <p className="text-preset-4 text-grey-500">
          See Details <ChevronRight className="inline ml-1" size={16} />
        </p>
      </div>

      <div className="flex items-center my-14 flex-col gap-4">
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

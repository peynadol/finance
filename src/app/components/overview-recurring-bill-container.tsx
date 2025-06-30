import { ChevronRight } from "lucide-react";
import OverviewRecurringBillCard from "./overview-recurring-bill-card";
import Link from "next/link";

const OverviewRecurringBillContainer = () => {
  return (
    <div className="bg-white rounded-lg p-8 min-w-[400px] ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-preset-2">Recurring Bills</h2>
        <Link
          href="/recurring-bills"
          className="text-preset-4 text-grey-500 hover:underline"
        >
          See Details <ChevronRight className="inline ml-1" size={16} />
        </Link>
      </div>

      <div className="flex items-center  flex-col gap-4">
        <OverviewRecurringBillCard
          name="Netflix"
          amount={12.99}
          colour="bg-red-500"
        />
        <OverviewRecurringBillCard
          name="Spotify"
          amount={9.99}
          colour="bg-green-500"
        />
        <OverviewRecurringBillCard
          name="Amazon Prime"
          amount={7.99}
          colour="bg-blue-500"
        />
      </div>
    </div>
  );
};

export default OverviewRecurringBillContainer;

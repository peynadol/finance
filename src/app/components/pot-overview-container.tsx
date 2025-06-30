import { ChevronRight } from "lucide-react";
import OverviewSummaryCard from "./overview-summary-card";
import PotTotalCard from "./pot-total-card";
import Link from "next/link";

const PotOverviewContainer = () => {
  return (
    <div className="bg-white rounded-lg p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-preset-2 text-grey-900">Pots</h2>
        <Link
          href="/pots"
          className="text-preset-4 text-grey-500 hover:underline"
        >
          See Details <ChevronRight className="inline ml-1 " size={16} />
        </Link>
      </div>

      {/* Content */}
      <div className="flex gap-6">
        {/* Total Saved Section */}
        <div className="flex-1">
          <PotTotalCard total={850} />
        </div>

        {/* Grid of Pots */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 flex-1">
          <OverviewSummaryCard
            name="Emergency Fund"
            amount={500}
            colour="bg-blue-500"
          />
          <OverviewSummaryCard
            name="Emergency Fund"
            amount={500}
            colour="bg-blue-500"
          />
          <OverviewSummaryCard
            name="Emergency Fund"
            amount={500}
            colour="bg-blue-500"
          />
          <OverviewSummaryCard
            name="Emergency Fund"
            amount={500}
            colour="bg-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default PotOverviewContainer;

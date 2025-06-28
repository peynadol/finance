import PotSummaryCard from "./pot-summary-card";
import PotTotalCard from "./pot-total-card";
import { ChevronRight } from "lucide-react";
const PotOverviewContainer = () => {
  return (
    <div className="bg-white rounded-lg p-8">
      <div className="flex justify-between items-center ">
        <h2 className="text-preset-2">Pots</h2>
        <p className="text-preset-4 text-grey-500">
          See Details <ChevronRight className="inline ml-1" size={16} />
        </p>
      </div>
      <div className="flex gap-6 mt-4">
        <PotTotalCard total={850} />

        <div className="grid grid-cols-2 gap-x-4 gap-y-6">
          <PotSummaryCard
            potName="Emergency Fund"
            potAmount={500}
            potColour="bg-blue-500"
          />
          <PotSummaryCard
            potName="Emergency Fund"
            potAmount={500}
            potColour="bg-blue-500"
          />
          <PotSummaryCard
            potName="Emergency Fund"
            potAmount={500}
            potColour="bg-blue-500"
          />
          <PotSummaryCard
            potName="Emergency Fund"
            potAmount={500}
            potColour="bg-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default PotOverviewContainer;

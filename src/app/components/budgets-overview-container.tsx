import { ChevronRight } from "lucide-react";
import BudgetPieChart from "./budget-pie-chart";
import OverviewSummaryCard from "./overview-summary-card";

const BudgetsOverviewContainer = () => {
  return (
    <div className="bg-white rounded-lg p-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-preset-2 text-grey-900">Budgets</h2>
        <p className="text-preset-4 text-grey-500">
          See Details <ChevronRight className="inline ml-1" size={16} />
        </p>
      </div>

      <div className="flex items-center gap-10 my-14 px-4">
        <div className="w-[250px] h-[250px] flex items-center justify-center">
          <BudgetPieChart />
        </div>

        <div className="space-y-4">
          <OverviewSummaryCard
            name="Entertainment"
            amount={50}
            colour="bg-[#2A8376]"
          />
          <OverviewSummaryCard
            name="Bills"
            amount={750}
            colour="bg-[#85D1E4]"
          />
          <OverviewSummaryCard
            name="Dining Out"
            amount={75}
            colour="bg-[#F4CBA4]"
          />
          <OverviewSummaryCard
            name="Personal Care"
            amount={100}
            colour="bg-[#544C67]"
          />
        </div>
      </div>
    </div>
  );
};

export default BudgetsOverviewContainer;

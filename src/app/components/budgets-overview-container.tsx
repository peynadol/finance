import { ChevronRight } from "lucide-react";
import BudgetPieChart from "./budget-pie-chart";
import OverviewSummaryCard from "./overview-summary-card";
import Link from "next/link";

type BudgetsOverviewContainerProps = {
  variant?: "home" | "budgets";
};

const BudgetsOverviewContainer = ({
  variant = "home",
}: BudgetsOverviewContainerProps) => {
  const isHome = variant === "home";

  return (
    <div className="bg-white rounded-lg h-full p-8 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-preset-2 text-grey-900">
          {isHome ? "Budgets" : ""}
        </h2>
        {isHome && (
          <Link
            href="/budgets"
            className="text-preset-4 text-grey-500 hover:underline"
          >
            See Details <ChevronRight className="inline ml-1" size={16} />
          </Link>
        )}
      </div>

      {isHome ? (
        // === HOME LAYOUT: Horizontal layout ===
        <div className="flex flex-1 items-center gap-10 px-4">
          <div className="flex items-center justify-center">
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
      ) : (
        // === BUDGETS PAGE LAYOUT: Vertical layout ===
        <>
          <div className="flex items-center justify-center mb-6">
            <BudgetPieChart />
          </div>
          <h2 className="text-preset-2">Spending Summary</h2>

          <div className="space-y-4">
            <OverviewSummaryCard
              name="Entertainment"
              amount={15}
              colour="bg-[#2A8376]"
            />
            <OverviewSummaryCard
              name="Bills"
              amount={150}
              colour="bg-[#85D1E4]"
            />
            <OverviewSummaryCard
              name="Dining Out"
              amount={133}
              colour="bg-[#F4CBA4]"
            />
            <OverviewSummaryCard
              name="Personal Care"
              amount={40}
              colour="bg-[#544C67]"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default BudgetsOverviewContainer;

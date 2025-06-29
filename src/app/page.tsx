import BudgetsOverviewContainer from "./components/budgets-overview-container";
import OverviewRecurringBillContainer from "./components/overview-recurring-bill-container";
import OverviewTransactionContainer from "./components/overview-transaction-container";
import PotOverviewContainer from "./components/pot-overview-container";
import SummaryCard from "./components/summary-card";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-xl px-6 space-y-6 ">
      <h1 className="text-preset-1">Overview</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SummaryCard title="Current Balance" amount={4836.0} />
        <SummaryCard title="Income" amount={3814.25} />
        <SummaryCard title="Expenses" amount={1700.5} />
      </div>

      {/* Lower Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Left Column */}
        <div className="flex flex-col justify-between h-full space-y-6">
          <PotOverviewContainer />
          <OverviewTransactionContainer />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 ">
          <div className="grow">
            <BudgetsOverviewContainer />
          </div>
          <div className="shrink-0">
            <OverviewRecurringBillContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

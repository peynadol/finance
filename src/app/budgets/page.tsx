import { AppButton } from "../components/app-button";
import BudgetsOverviewContainer from "../components/budgets-overview-container";
import BudgetPageOverviewContainer from "../components/budgets/budget-page-overview-container";
//TODO: make the budgets pie chart a bit more modular
//TODO: render it differently here than in the overview page
//TODO: the spending summary goes underneath the pie chart
//TODO: remove the see details link when its on this page
//TODO: fix the styling of this page
const BudgetsPage = () => {
  return (
    <div className=" w-full max-w-screen-xl px-6 py-8 mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-preset-1">Budgets</h2>
        <AppButton>+ Add New Budget</AppButton>
      </div>
      <div className="grid grid-cols-[1.5fr_2fr] gap-4">
        <div className="flex-1">
          <BudgetsOverviewContainer variant="budgets" />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <BudgetPageOverviewContainer />
          <BudgetPageOverviewContainer />
        </div>
      </div>
    </div>
  );
};

export default BudgetsPage;

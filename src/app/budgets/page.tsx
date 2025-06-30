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
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-preset-1">Budgets</h2>
        <AppButton>+ Add New Budget</AppButton>
      </div>
      <div className="flex">
        <BudgetsOverviewContainer variant="budgets" />
        <div className="flex flex-col gap-4 w-full">
          <BudgetPageOverviewContainer />
          <BudgetPageOverviewContainer />
        </div>
      </div>
    </div>
  );
};

export default BudgetsPage;

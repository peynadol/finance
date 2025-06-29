import BudgetsOverviewContainer from "../components/budgets-overview-container";
import BudgetPageOverviewContainer from "../components/budgets/budget-page-overview-container";
//TODO: make the budgets pie chart a bit more modular
//TODO: render it differently here than in the overview page
//TODO: the spending summary goes underneath the pie chart
//TODO: remove the see details link when its on this page
const BudgetsPage = () => {
  return (
    <div>
      <BudgetsOverviewContainer variant="budgets" />
      <BudgetPageOverviewContainer />
    </div>
  );
};

export default BudgetsPage;

type OverviewBudgetSummaryRowProps = {
  name: string;
  spent: number;
  maximum: number;
  colour: string;
};

const OverviewBudgetSummaryRow = ({
  name,
  spent,
  maximum,
  colour,
}: OverviewBudgetSummaryRowProps) => {
  return (
    <div className="flex justify-between items-center py-4 border-b last:border-b-0">
      <div className="flex items-center gap-3">
        <div
          className="w-1 h-5 rounded-full"
          style={{ backgroundColor: colour }}
        />
        <p className="text-grey-500 text-preset-5">{name}</p>
      </div>
      <div className="text-right">
        <p className="text-preset-3">£{spent.toFixed(2)}</p>
        <p className="text-grey-400 text-preset-5">of £{maximum.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default OverviewBudgetSummaryRow;

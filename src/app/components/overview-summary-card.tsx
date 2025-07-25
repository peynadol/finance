type OverviewSummaryCardProps = {
  name: string;
  amount: number;
  colour: string;
};
const OverviewSummaryCard = ({
  name,
  amount,
  colour,
}: OverviewSummaryCardProps) => {
  return (
    <div className="flex gap-4 bg-white">
      <div
        data-testid="colour-bar"
        className="w-1 min-h-full rounded-full flex items-center justify-center"
        style={{ backgroundColor: colour }}
      ></div>
      <div className="flex flex-col gap-2">
        <p className="text-grey-500 text-preset-5">{name}</p>
        <p className="text-grey-900 text-preset-5-bold">£{amount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default OverviewSummaryCard;

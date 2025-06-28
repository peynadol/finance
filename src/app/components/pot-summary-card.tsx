type PotSummaryCardProps = {
  potName: string;
  potAmount?: number;
  potColour?: string;
};
const PotSummaryCard = ({
  potName,
  potAmount,
  potColour,
}: PotSummaryCardProps) => {
  return (
    <div className="flex gap-4 bg-white">
      <div
        data-testid="pot-colour-bar"
        className={`w-1 min-h-full rounded-full flex items-center justify-center ${potColour}`}
      ></div>
      <div className="flex flex-col gap-2">
        <p className="text-grey-500 text-preset-5">{potName}</p>
        <p className="text-grey-900 text-preset-5-bold">£{potAmount}</p>
      </div>
    </div>
  );
};

export default PotSummaryCard;

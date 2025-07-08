type OverviewRecurringBillCardProps = {
  name: string;
  amount: number;
  colour: string;
};

const OverviewRecurringBillCard = ({
  name,
  amount,
  colour,
}: OverviewRecurringBillCardProps) => {
  return (
    <div className="flex bg-beige-100 w-full rounded">
      <div className={`w-1 rounded-l ${colour}`} data-testid="colour-bar"></div>
      <div className="flex justify-between items-center flex-1 px-6 py-4">
        <p className="text-grey-500 text-preset-4">{name}</p>
        <p className=" text-preset-4-bold">£{amount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default OverviewRecurringBillCard;

//TODO: in future, have the colour of the amount change based on whether its income or outgoing
type OverviewTransactionCardProps = {
  name: string;
  amount: number;
  date: string;
};
const OverviewTransactionCard = ({
  name,
  amount,
  date,
}: OverviewTransactionCardProps) => {
  return (
    <div className="flex gap-4 bg-white py-4 w-full border-t border-grey-100 justify-between ">
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-red h-10 w-10"></div>
        <p className="text-preset-4-bold">{name}</p>
      </div>
      <div>
        <p className="text-preset-4-bold text-green">+£{amount}</p>
        <p className="text-preset-5">{date}</p>
      </div>
    </div>
  );
};

export default OverviewTransactionCard;

import clsx from "clsx";

type SummaryCardProps = {
  title: string;
  amount: number;
};

const SummaryCard = ({ title, amount }: SummaryCardProps) => {
  const isBalanceCard = title.toLowerCase() === "current balance";

  return (
    <div
      className={clsx(
        "rounded-lg p-4 transition w-full",
        isBalanceCard ? "bg-grey-900 text-white" : "bg-white text-grey-900"
      )}
    >
      <h2 className="text-sm font-medium">{title}</h2>
      <p className="text-2xl font-bold">£{amount.toLocaleString()}</p>
    </div>
  );
};
export default SummaryCard;

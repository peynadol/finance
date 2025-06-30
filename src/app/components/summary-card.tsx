import clsx from "clsx";

type SummaryCardProps = {
  label: string;
  amount: number;
};

const SummaryCard = ({ label, amount }: SummaryCardProps) => {
  const isBalanceCard = label.toLowerCase() === "current balance";

  return (
    <div
      className={clsx(
        "rounded-lg p-4 transition w-full",
        isBalanceCard ? "bg-grey-900 text-white" : "bg-white text-grey-900"
      )}
    >
      <h2 className="text-sm font-medium">{label}</h2>
      <p className="text-2xl font-bold">
        £
        {amount.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </p>
    </div>
  );
};
export default SummaryCard;

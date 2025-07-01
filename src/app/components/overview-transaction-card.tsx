import { format } from "date-fns";
import clsx from "clsx";
type OverviewTransactionCardProps = {
  name: string;
  amount: number;
  date: string;
  type: "income" | "expense";
};
const OverviewTransactionCard = ({
  name,
  amount,
  date,
  type,
}: OverviewTransactionCardProps) => {
  const formattedDate = format(new Date(date), "dd MMM yyyy");
  const isIncome = type === "income";
  const formattedAmount = `${isIncome ? "+" : "-"}£${Math.abs(amount).toFixed(
    2
  )}`;

  return (
    <div className="flex gap-4 bg-transparent py-2 w-full border-b border-grey-100 justify-between ">
      <div className="flex items-center gap-4">
        <p className="text-preset-4-bold">{name}</p>
      </div>
      <div>
        <p
          className={clsx(
            "text-preset-4-bold text-right",
            isIncome ? "text-green" : "text-red-500"
          )}
        >
          {formattedAmount}
        </p>
        <p className="text-preset-5">{formattedDate}</p>
      </div>
    </div>
  );
};

export default OverviewTransactionCard;

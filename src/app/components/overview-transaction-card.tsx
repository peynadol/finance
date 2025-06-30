//TODO: in future, have the colour of the amount change based on whether its income or outgoing
//TODO: add avatar images for the transactions{" "}
import { format } from "date-fns";
import clsx from "clsx";
import Image from "next/image";
type OverviewTransactionCardProps = {
  name: string;
  amount: number;
  date: string;
  avatarPath?: string; // Optional avatar URL
};
const OverviewTransactionCard = ({
  name,
  amount,
  date,
  avatarPath = "", // Default to empty string if no avatar URL is provided
}: OverviewTransactionCardProps) => {
  const formattedDate = format(new Date(date), "dd MMM yyyy");
  const isPositive = amount >= 0;
  const formattedAmount = `${isPositive ? "+" : "-"}£${Math.abs(amount).toFixed(
    2
  )}`;

  return (
    <div className="flex gap-4 bg-transparent py-4 w-full border-t border-grey-100 justify-between ">
      <div className="flex items-center gap-4">
        <div className="">
          {avatarPath ? (
            <Image
              src={avatarPath}
              alt={name}
              className="rounded-full h-full w-full"
              width={40}
              height={40}
            />
          ) : (
            <div className="bg-grey-200 h-full w-full rounded-full"></div>
          )}
        </div>
        <p className="text-preset-4-bold">{name}</p>
      </div>
      <div>
        <p
          className={clsx(
            "text-preset-4-bold text-right",
            isPositive ? "text-green" : "text-grey-900"
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

import { PiggyBank } from "lucide-react";
import clsx from "clsx";

type PotTotalCardProps = {
  total: number;
  className?: string;
};

const PotTotalCard = ({ total, className }: PotTotalCardProps) => {
  return (
    <div
      className={clsx(
        "bg-beige-100 rounded-lg h-full flex items-center p-4",
        className
      )}
    >
      <div className="flex items-center gap-4">
        <PiggyBank size={36} className="text-grey-500" />
        <div>
          <p className="text-preset-4 text-grey-500 mb-1">Total Saved</p>
          <p className="text-preset-1 text-grey-900">£{total}</p>
        </div>
      </div>
    </div>
  );
};

export default PotTotalCard;

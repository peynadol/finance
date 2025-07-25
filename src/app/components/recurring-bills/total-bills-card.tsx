import { ReceiptText } from "lucide-react";

const TotalBillsCard = ({ total }: { total: number }) => {
  return (
    <div className="bg-grey-900 text-white rounded-lg p-4 space-y-4">
      <ReceiptText size={28} />
      <p className="text-preset-4">Total Bills</p>
      <p className="text-preset-1">£{total}</p>
    </div>
  );
};

export default TotalBillsCard;

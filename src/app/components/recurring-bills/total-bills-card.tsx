import { ReceiptText } from "lucide-react";
const TotalBillsCard = () => {
  return (
    <div className="bg-grey-900 text-white rounded p-4 space-y-4">
      <ReceiptText size={28} />
      <p className="text-preset-4">Total Bills</p>
      <p className="text-preset-1">£384.98</p>
    </div>
  );
};

export default TotalBillsCard;
